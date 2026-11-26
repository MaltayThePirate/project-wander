"use client";

import { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiGet, apiPost, apiDelete } from "@/lib/api";
import { formatShortDate } from "@/lib/format";
import DeleteButton from "@/components/ui/DeleteButton";

function getTripDays(startDateStr, endDateStr) {
  if (!startDateStr || !endDateStr) return [];
  const start = new Date(`${startDateStr.slice(0, 10)}T00:00:00Z`);
  const end = new Date(`${endDateStr.slice(0, 10)}T00:00:00Z`);
  if (isNaN(start.getTime()) || isNaN(end.getTime()) || end < start) return [];
  const days = [];
  const cur = new Date(start);
  while (cur <= end && days.length < 31) {
    days.push(cur.toISOString().slice(0, 10));
    cur.setUTCDate(cur.getUTCDate() + 1);
  }
  return days;
}

export default function AccommodationSummary({ trip, onEdit }) {
  const queryClient = useQueryClient();
  const [sourceUrl, setSourceUrl] = useState("");
  const [checkIn, setCheckIn] = useState((trip.start_date || "").slice(0, 10));
  const [checkOut, setCheckOut] = useState((trip.end_date || "").slice(0, 10));
  const [formError, setFormError] = useState(null);

  const accommodationsQuery = useQuery({
    queryKey: ["trip", trip.id, "accommodations"],
    queryFn: () => apiGet(`/trips/${trip.id}/accommodations`),
  });

  const addMutation = useMutation({
    mutationFn: (payload) =>
      apiPost(`/trips/${trip.id}/accommodations`, { accommodation: payload }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trip", trip.id, "accommodations"] });
      setSourceUrl("");
      setFormError(null);
    },
    onError: (err) => {
      setFormError(err.message || "Couldn't read that Maps link. Paste a Google or Apple Maps link.");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (accId) => apiDelete(`/trips/${trip.id}/accommodations/${accId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trip", trip.id, "accommodations"] });
    },
  });

  const accommodations = accommodationsQuery.data || [];
  const tripDays = useMemo(
    () => getTripDays(trip.start_date, trip.end_date),
    [trip.start_date, trip.end_date]
  );

  // Detect overlapping dates between stays
  const overlapDates = useMemo(() => {
    if (accommodations.length < 2) return [];
    const counts = {};
    for (const acc of accommodations) {
      const s = (acc.check_in_date || "").slice(0, 10);
      const e = (acc.check_out_date || "").slice(0, 10);
      for (const d of tripDays) {
        if (s && e && d >= s && d <= e) {
          counts[d] = (counts[d] || 0) + 1;
        }
      }
    }
    return tripDays.filter((d) => counts[d] > 1);
  }, [accommodations, tripDays]);

  const handleAddStay = (e) => {
    e.preventDefault();
    if (!sourceUrl.trim()) return;
    setFormError(null);
    addMutation.mutate({
      source_url: sourceUrl.trim(),
      check_in_date: checkIn,
      check_out_date: checkOut,
    });
  };

  if (accommodationsQuery.isLoading) {
    return <div style={{ color: "var(--color-muted)", fontSize: "13px" }}>Loading stays…</div>;
  }

  const minDate = (trip.start_date || "").slice(0, 10);
  const maxDate = (trip.end_date || "").slice(0, 10);

  return (
    <div style={{ fontFamily: "var(--font-inter), sans-serif" }}>
      {/* Quick-add stay bar */}
      <form
        onSubmit={handleAddStay}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          alignItems: "flex-end",
          marginBottom: "14px",
        }}
      >
        <div style={{ flex: 3, minWidth: "220px" }}>
          <label style={{ display: "block", fontSize: "11px", color: "var(--color-muted)", marginBottom: "4px" }}>
            Maps link
          </label>
          <input
            value={sourceUrl}
            onChange={(e) => setSourceUrl(e.target.value)}
            placeholder="Paste a Google or Apple Maps link"
            style={{
              width: "100%",
              border: "1.5px dashed var(--color-border)",
              borderRadius: "6px",
              padding: "8px 10px",
              fontSize: "13.5px",
              background: "#FFFFFF",
              color: "var(--color-ink)",
            }}
          />
        </div>
        <div style={{ flex: 1, minWidth: "130px" }}>
          <label style={{ display: "block", fontSize: "11px", color: "var(--color-muted)", marginBottom: "4px" }}>
            Check in
          </label>
          <input
            type="date"
            value={checkIn}
            min={minDate}
            max={maxDate}
            onChange={(e) => setCheckIn(e.target.value)}
            style={{
              width: "100%",
              border: "1.5px solid var(--color-border)",
              borderRadius: "6px",
              padding: "7px 10px",
              fontSize: "13px",
              background: "#FFFFFF",
            }}
          />
        </div>
        <div style={{ flex: 1, minWidth: "130px" }}>
          <label style={{ display: "block", fontSize: "11px", color: "var(--color-muted)", marginBottom: "4px" }}>
            Check out
          </label>
          <input
            type="date"
            value={checkOut}
            min={checkIn || minDate}
            max={maxDate}
            onChange={(e) => setCheckOut(e.target.value)}
            style={{
              width: "100%",
              border: "1.5px solid var(--color-border)",
              borderRadius: "6px",
              padding: "7px 10px",
              fontSize: "13px",
              background: "#FFFFFF",
            }}
          />
        </div>
        <button
          type="submit"
          disabled={addMutation.isPending}
          style={{
            border: "1.5px solid var(--color-ink)",
            borderRadius: "6px",
            padding: "8px 14px",
            background: "var(--color-ink)",
            color: "#FFFFFF",
            fontWeight: 600,
            fontSize: "13.5px",
            cursor: "pointer",
          }}
        >
          {addMutation.isPending ? "Adding…" : "Add stay"}
        </button>
      </form>

      {formError && (
        <div
          style={{
            border: "1.5px solid #c33",
            color: "#a22",
            borderRadius: "6px",
            padding: "8px 10px",
            fontSize: "13px",
            marginBottom: "12px",
            background: "#FFFFFF",
          }}
        >
          {formError}
        </div>
      )}

      {/* Timeline strip */}
      {accommodations.length > 0 && tripDays.length > 0 && (
        <div
          style={{
            border: "1.5px solid var(--color-border)",
            borderRadius: "8px",
            padding: "12px",
            background: "#FFFFFF",
            marginBottom: "14px",
            overflowX: "auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `120px repeat(${tripDays.length}, minmax(48px, 1fr))`,
              gap: "6px 0",
              alignItems: "center",
              fontSize: "11px",
            }}
          >
            <div />
            {tripDays.map((d) => (
              <div
                key={d}
                style={{
                  borderLeft: "1px solid var(--color-border)",
                  paddingLeft: "4px",
                  color: "var(--color-muted)",
                }}
              >
                {formatShortDate(d)}
              </div>
            ))}

            {accommodations.map((acc, idx) => {
              const s = (acc.check_in_date || "").slice(0, 10);
              const e = (acc.check_out_date || "").slice(0, 10);
              const startIdx = Math.max(0, tripDays.findIndex((d) => d >= s));
              let endIdx = tripDays.findIndex((d) => d > e);
              if (endIdx === -1) endIdx = tripDays.length;
              const span = Math.max(1, endIdx - startIdx);

              return (
                <div key={acc.id} style={{ display: "contents" }}>
                  <div
                    style={{
                      fontWeight: 600,
                      paddingRight: "8px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {acc.name}
                  </div>
                  <div
                    style={{
                      gridColumn: `${startIdx + 2} / span ${span}`,
                      height: "22px",
                      borderRadius: "4px",
                      background: idx % 2 === 0 ? "#888" : "#555",
                      color: "#fff",
                      fontSize: "11px",
                      padding: "2px 8px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {formatShortDate(s)}–{formatShortDate(e)}
                  </div>
                </div>
              );
            })}
          </div>

          {overlapDates.length > 0 && (
            <div
              style={{
                marginTop: "10px",
                background: "#fff6d6",
                border: "1.5px solid #d9c36b",
                borderRadius: "6px",
                padding: "7px 10px",
                fontSize: "12.5px",
              }}
            >
              These stays overlap on {formatShortDate(overlapDates[0])}
              {overlapDates.length > 1 ? `–${formatShortDate(overlapDates[overlapDates.length - 1])}` : ""}. You can keep both. Choose which one is active for each overlapping day on the map.
            </div>
          )}
        </div>
      )}

      {/* Stays grid */}
      {accommodations.length === 0 ? (
        <div
          style={{
            border: "1.5px dashed var(--color-border)",
            borderRadius: "8px",
            padding: "28px 16px",
            textAlign: "center",
            color: "var(--color-muted)",
            fontSize: "13px",
            background: "#FFFFFF",
          }}
        >
          No stays added yet. Paste a Google or Apple Maps link above to add one.
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
            gap: "12px",
          }}
        >
          {accommodations.map((acc) => {
            const ownerInitial = (acc.owner?.name || "N").charAt(0).toUpperCase();
            return (
              <div
                key={acc.id}
                style={{
                  border: "1.5px solid var(--color-border)",
                  borderRadius: "8px",
                  padding: "12px 14px",
                  background: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 600, fontSize: "14.5px", color: "var(--color-ink)" }}>
                    {acc.name}
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {onEdit && (
                      <button
                        type="button"
                        onClick={onEdit}
                        style={{
                          background: "none",
                          border: "none",
                          fontSize: "12px",
                          color: "var(--color-muted)",
                          cursor: "pointer",
                          padding: 0,
                        }}
                      >
                        Edit
                      </button>
                    )}
                    <DeleteButton
                      onDelete={() => deleteMutation.mutate(acc.id)}
                      isDeleting={deleteMutation.isPending}
                      itemName="Stay"
                    />
                  </div>
                </div>
                {acc.address && (
                  <div style={{ fontSize: "12px", color: "var(--color-muted)" }}>{acc.address}</div>
                )}
                <div style={{ fontSize: "12.5px", color: "var(--color-ink)" }}>
                  {formatShortDate(acc.check_in_date)} → {formatShortDate(acc.check_out_date)}
                </div>
                <div style={{ marginTop: "4px" }}>
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "var(--color-ink)",
                      color: "#fff",
                      fontSize: "11px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {ownerInitial}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
