"use client";

import { useQuery } from "@tanstack/react-query";
import { Home, Calendar, MapPin, AlertTriangle } from "lucide-react";
import { apiGet, apiDelete, apiPost } from "@/lib/api";
import DeleteButton from "@/components/ui/DeleteButton";

export default function AccommodationSummary({ trip, onEdit, queryClient }) {
  const accommodationsQuery = useQuery({
    queryKey: ["trip", trip.id, "accommodations"],
    queryFn: () => apiGet(`/trips/${trip.id}/accommodations`),
  });

  const accommodations = accommodationsQuery.data || [];

  if (accommodationsQuery.isLoading) {
    return null;
  }

  const handleDelete = async (accId) => {
    if (!confirm("Are you sure you want to remove this accommodation?")) return;
    try {
      await apiDelete(`/trips/${trip.id}/accommodations/${accId}`);
      queryClient.invalidateQueries({ queryKey: ["trip", trip.id, "accommodations"] });
    } catch (err) {
      alert(err.message || "Failed to delete accommodation");
    }
  };

  const handleToggleActive = async (acc) => {
    try {
      await apiPost(`/trips/${trip.id}/accommodations/${acc.id}`, {
        accommodation: { active: !acc.active },
      }, "PATCH");
      queryClient.invalidateQueries({ queryKey: ["trip", trip.id, "accommodations"] });
    } catch (err) {
      alert(err.message || "Failed to update accommodation active status");
    }
  };

  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid var(--color-border)",
        borderRadius: "12px",
        padding: "18px 20px",
        marginBottom: "24px",
        boxShadow: "0 2px 8px rgba(31, 46, 53, 0.04)",
        fontFamily: "var(--font-inter), sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "7px",
              background: "rgba(43, 110, 110, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-teal)",
            }}
          >
            <Home size={15} />
          </div>
          <h3 style={{ margin: 0, fontFamily: "var(--font-inter), sans-serif", fontSize: "15px", fontWeight: 600, color: "var(--color-ink)" }}>
            Accommodations
          </h3>
        </div>
        <button
          onClick={onEdit}
          style={{
            background: "none",
            border: "1px solid var(--color-border)",
            borderRadius: "6px",
            padding: "5px 12px",
            fontSize: "12.5px",
            fontWeight: 500,
            cursor: "pointer",
            color: "var(--color-ink)",
          }}
        >
          Add Accommodation
        </button>
      </div>

      {accommodations.length === 0 ? (
        <div style={{ fontSize: "13px", color: "var(--color-muted)", fontStyle: "italic" }}>
          No accommodations added yet. Add where you are staying during the trip.
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {accommodations.map((acc) => (
            <div
              key={acc.id}
              style={{
                background: "var(--color-parchment-subtle, #F9F8F6)",
                padding: "12px 14px",
                borderRadius: "8px",
                border: "1px solid var(--color-border)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-ink)" }}>
                    {acc.name}
                  </span>
                  {acc.active ? (
                    <span
                      style={{
                        background: "rgba(43, 110, 110, 0.15)",
                        color: "var(--color-teal)",
                        fontSize: "11px",
                        fontWeight: 600,
                        padding: "2px 6px",
                        borderRadius: "4px",
                      }}
                    >
                      Active
                    </span>
                  ) : (
                    <button
                      onClick={() => handleToggleActive(acc)}
                      style={{
                        background: "none",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-muted)",
                        fontSize: "11px",
                        padding: "1px 6px",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      Set Active
                    </button>
                  )}
                  {acc.overlapping && (
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        background: "#FEF3C7",
                        color: "#92400E",
                        fontSize: "11px",
                        fontWeight: 500,
                        padding: "2px 6px",
                        borderRadius: "4px",
                      }}
                      title="Date range overlaps with another accommodation"
                    >
                      <AlertTriangle size={12} />
                      Overlap Warning
                    </span>
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "12.5px", color: "var(--color-ink-muted)" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Calendar size={12} />
                    {acc.start_date} → {acc.end_date}
                  </span>
                  {acc.address && (
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <MapPin size={12} />
                      {acc.address}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <DeleteButton onClick={() => handleDelete(acc.id)} title="Remove accommodation" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
