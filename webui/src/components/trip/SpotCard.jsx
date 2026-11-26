"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, ExternalLink, Plus, Check } from "lucide-react";
import DeleteButton from "@/components/ui/DeleteButton";
import SpotPhoto from "@/components/trip/SpotPhoto";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDelete, apiPatch, apiPost } from "@/lib/api";
import { formatShortDate } from "@/lib/format";

export default function SpotCard({ spot, categories: tripCategories = [], currentUserId = 1 }) {
  const queryClient = useQueryClient();
  const [errorMsg, setErrorMsg] = useState(null);

  // Inline note editing
  const [editingNote, setEditingNote] = useState(false);
  const [noteDraft, setNoteDraft] = useState(spot.note || "");

  // Category picker popover
  const [pickerOpen, setPickerOpen] = useState(false);
  const [newCatOpen, setNewCatOpen] = useState(false);
  const [newCatName, setNewCatName] = useState("");
  const pickerRef = useRef(null);

  const spotCategories = spot.categories || [];
  const spotCategoryIds = new Set(spotCategories.map((c) => c.id));
  const isOwner = spot.owner_id === currentUserId || spot.owner?.id === currentUserId;

  useEffect(() => {
    setNoteDraft(spot.note || "");
  }, [spot.note]);

  useEffect(() => {
    if (!pickerOpen) return;
    const handleClickOutside = (e) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        setPickerOpen(false);
        setNewCatOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [pickerOpen]);

  const deleteMutation = useMutation({
    mutationFn: () => apiDelete(`/trips/${spot.trip_id}/spots/${spot.id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trip", String(spot.trip_id), "spots"] });
      queryClient.invalidateQueries({ queryKey: ["trip", spot.trip_id, "spots"] });
    },
    onError: (err) => {
      setErrorMsg(err.message || "Could not delete spot");
      setTimeout(() => setErrorMsg(null), 4000);
    },
  });

  const updateNoteMutation = useMutation({
    mutationFn: (note) =>
      apiPatch(`/trips/${spot.trip_id}/spots/${spot.id}`, {
        spot: { note },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trip", String(spot.trip_id), "spots"] });
      queryClient.invalidateQueries({ queryKey: ["trip", spot.trip_id, "spots"] });
      setEditingNote(false);
    },
    onError: (err) => {
      setErrorMsg(err.message || "Could not save note");
      setTimeout(() => setErrorMsg(null), 4000);
    },
  });

  const toggleCategoryMutation = useMutation({
    mutationFn: (categoryId) => {
      const nextIds = spotCategoryIds.has(categoryId)
        ? spotCategories.filter((c) => c.id !== categoryId).map((c) => c.id)
        : [...spotCategories.map((c) => c.id), categoryId];
      return apiPatch(`/trips/${spot.trip_id}/spots/${spot.id}`, {
        spot: { category_ids: nextIds },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trip", String(spot.trip_id), "spots"] });
      queryClient.invalidateQueries({ queryKey: ["trip", spot.trip_id, "spots"] });
    },
  });

  const createCategoryMutation = useMutation({
    mutationFn: async (name) => {
      const created = await apiPost(`/trips/${spot.trip_id}/categories`, {
        category: { name, color: "#2B6E6E" },
      });
      const nextIds = [...spotCategories.map((c) => c.id), created.id];
      await apiPatch(`/trips/${spot.trip_id}/spots/${spot.id}`, {
        spot: { category_ids: nextIds },
      });
      return created;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trip", String(spot.trip_id), "categories"] });
      queryClient.invalidateQueries({ queryKey: ["trip", spot.trip_id, "categories"] });
      queryClient.invalidateQueries({ queryKey: ["trip", String(spot.trip_id), "spots"] });
      queryClient.invalidateQueries({ queryKey: ["trip", spot.trip_id, "spots"] });
      setNewCatName("");
      setNewCatOpen(false);
    },
  });

  const handleNoteSave = () => {
    const trimmed = noteDraft.trim();
    if (trimmed === (spot.note || "")) {
      setEditingNote(false);
      return;
    }
    updateNoteMutation.mutate(trimmed);
  };

  const ownerInitial = (spot.owner?.name || spot.owner_name || "N").charAt(0).toUpperCase();
  const planDate = spot.day_plan_date || spot.planned_date || null;

  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid var(--color-border)",
        borderRadius: "10px",
        padding: "16px 18px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        position: "relative",
        fontFamily: "var(--font-inter), sans-serif",
        boxShadow: "0 2px 8px rgba(31, 46, 53, 0.04)",
      }}
    >
      <SpotPhoto spot={spot} width="100%" height="140px" />

      {/* Header: Spot name + inline/wrapping category tags + '+' picker */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "4px 8px",
        }}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: "14.5px",
            color: "var(--color-ink)",
            lineHeight: 1.3,
          }}
        >
          {spot.name}
        </span>

        <div
          ref={pickerRef}
          style={{
            display: "inline-flex",
            flexWrap: "wrap",
            gap: "4px",
            alignItems: "center",
            position: "relative",
          }}
        >
          {spotCategories.map((cat) => {
            const color = cat.color || "var(--color-teal)";
            return (
              <span
                key={cat.id}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  background: `${color}15`,
                  color,
                  border: `1px solid ${color}35`,
                  borderRadius: "4px",
                  padding: "2px 7px",
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "10px",
                  fontWeight: 500,
                  lineHeight: 1.35,
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: color }} />
                {cat.name}
              </span>
            );
          })}

          <button
            type="button"
            onClick={() => setPickerOpen((v) => !v)}
            title="Assign categories"
            style={{
              border: "1px solid var(--color-border)",
              borderRadius: "4px",
              padding: "2px 7px",
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "10px",
              color: "var(--color-muted)",
              background: "transparent",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "2px",
              lineHeight: 1.35,
            }}
          >
            {spotCategories.length === 0 ? "Add category" : "+"}
          </button>

          {pickerOpen && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 6px)",
                left: 0,
                width: "220px",
                background: "#FFFFFF",
                border: "1.5px solid var(--color-ink)",
                borderRadius: "6px",
                padding: "8px 10px",
                zIndex: 40,
                boxShadow: "0 6px 18px rgba(31, 46, 53, 0.12)",
                fontSize: "13px",
              }}
            >
              {tripCategories.length === 0 && (
                <div style={{ color: "var(--color-muted)", fontSize: "12px", padding: "3px 0" }}>
                  No categories yet
                </div>
              )}
              {tripCategories.map((cat) => {
                const checked = spotCategoryIds.has(cat.id);
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => toggleCategoryMutation.mutate(cat.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      padding: "4px 0",
                      cursor: "pointer",
                      color: "var(--color-ink)",
                      fontSize: "13px",
                    }}
                  >
                    <span
                      style={{
                        width: "14px",
                        height: "14px",
                        border: "1.5px solid var(--color-ink)",
                        borderRadius: "3px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: checked ? "var(--color-ink)" : "#fff",
                        color: "#fff",
                        flexShrink: 0,
                      }}
                    >
                      {checked && <Check size={10} strokeWidth={3} />}
                    </span>
                    <span>{cat.name}</span>
                  </button>
                );
              })}

              <div
                style={{
                  borderTop: "1.5px solid var(--color-border)",
                  marginTop: "6px",
                  paddingTop: "6px",
                }}
              >
                {!newCatOpen ? (
                  <button
                    type="button"
                    onClick={() => setNewCatOpen(true)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: "2px 0",
                      color: "var(--color-muted)",
                      fontSize: "12.5px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Plus size={12} /> New category
                  </button>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!newCatName.trim()) return;
                      createCategoryMutation.mutate(newCatName.trim());
                    }}
                    style={{ display: "flex", flexDirection: "column", gap: "6px" }}
                  >
                    <input
                      autoFocus
                      value={newCatName}
                      onChange={(e) => setNewCatName(e.target.value)}
                      placeholder="Category name"
                      style={{
                        border: "1px solid var(--color-border)",
                        borderRadius: "4px",
                        padding: "4px 6px",
                        fontSize: "12.5px",
                        width: "100%",
                      }}
                    />
                    <div style={{ fontSize: "11px", color: "var(--color-muted)", lineHeight: 1.3 }}>
                      Everyone on this Trip will see this.
                    </div>
                    <div style={{ display: "flex", gap: "6px", justifyContent: "flex-end" }}>
                      <button
                        type="button"
                        onClick={() => setNewCatOpen(false)}
                        style={{
                          background: "none",
                          border: "none",
                          fontSize: "11.5px",
                          color: "var(--color-muted)",
                          cursor: "pointer",
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={createCategoryMutation.isPending}
                        style={{
                          background: "var(--color-ink)",
                          color: "#fff",
                          border: "none",
                          borderRadius: "4px",
                          padding: "3px 8px",
                          fontSize: "11.5px",
                          cursor: "pointer",
                        }}
                      >
                        Create
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Address */}
      {spot.address && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            fontSize: "11.5px",
            color: "var(--color-muted)",
          }}
        >
          <MapPin size={11} strokeWidth={2} style={{ flexShrink: 0 }} />
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {spot.address}
          </span>
        </div>
      )}

      {/* Inline editable note */}
      {editingNote ? (
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <input
            autoFocus
            value={noteDraft}
            onChange={(e) => setNoteDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleNoteSave();
              if (e.key === "Escape") {
                setNoteDraft(spot.note || "");
                setEditingNote(false);
              }
            }}
            onBlur={handleNoteSave}
            placeholder="Add a note…"
            style={{
              flex: 1,
              border: "1px solid var(--color-ink)",
              borderRadius: "4px",
              padding: "4px 7px",
              fontSize: "12px",
              fontFamily: "inherit",
            }}
          />
        </div>
      ) : (
        <div
          onClick={() => setEditingNote(true)}
          title="Click to edit note"
          style={{
            fontSize: "12px",
            color: spot.note ? "var(--color-ink)" : "var(--color-muted)",
            fontStyle: spot.note ? "italic" : "normal",
            cursor: "text",
            padding: "2px 0",
          }}
        >
          {spot.note ? `“${spot.note}”` : "Add a note"}
        </div>
      )}

      {errorMsg && (
        <div style={{ fontSize: "11px", color: "var(--color-rust)" }}>{errorMsg}</div>
      )}

      {/* Footer: Owner avatar + Plan status + external link + owner-only delete */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "auto",
          paddingTop: "4px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            title={spot.owner?.name || "Member"}
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              background: isOwner ? "var(--color-ink)" : "#999",
              color: "#fff",
              fontSize: "11px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {ownerInitial}
          </span>
          {spot.source_url && (
            <a
              href={spot.source_url}
              target="_blank"
              rel="noopener noreferrer"
              title="Open in Maps"
              style={{
                color: "var(--color-muted)",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <ExternalLink size={12} strokeWidth={2} />
            </a>
          )}
          {isOwner && (
            <DeleteButton
              onDelete={() => deleteMutation.mutate()}
              isDeleting={deleteMutation.isPending}
              itemName="Spot"
            />
          )}
        </div>

        <span
          style={{
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            fontSize: "10.5px",
            borderRadius: "20px",
            padding: "2px 9px",
            border: planDate ? "1px solid rgba(43, 110, 110, 0.35)" : "1px solid var(--color-border)",
            background: planDate ? "rgba(43, 110, 110, 0.08)" : "transparent",
            color: planDate ? "var(--color-teal)" : "var(--color-muted)",
          }}
        >
          {planDate ? `On my plan · ${formatShortDate(planDate)}` : "Not on my plan"}
        </span>
      </div>
    </div>
  );
}
