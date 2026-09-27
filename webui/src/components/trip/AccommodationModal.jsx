"use client";

import { useState } from "react";
import { Home, AlertTriangle, X } from "lucide-react";
import { apiPost } from "@/lib/api";

export default function AccommodationModal({ trip, onClose, queryClient }) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [startDate, setStartDate] = useState(trip.start_date || "");
  const [endDate, setEndDate] = useState(trip.end_date || "");
  const [active, setActive] = useState(true);

  // Check if dates fall outside trip window
  const isOutsideWindow = (dateStr) => {
    if (!dateStr || !trip.start_date || !trip.end_date) return false;
    return dateStr < trip.start_date || dateStr > trip.end_date;
  };

  const startWarning = isOutsideWindow(startDate);
  const endWarning = isOutsideWindow(endDate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      await apiPost(`/trips/${trip.id}/accommodations`, {
        accommodation: {
          name,
          address,
          start_date: startDate,
          end_date: endDate,
          active,
        },
      });
      queryClient.invalidateQueries({ queryKey: ["trip", trip.id, "accommodations"] });
      onClose();
    } catch (err) {
      setError(err.message || "Failed to create accommodation");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(31, 46, 53, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        padding: "24px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#FFFFFF",
          borderRadius: "14px",
          border: "1px solid var(--color-border)",
          boxShadow: "0 10px 30px rgba(31, 46, 53, 0.2)",
          width: "100%",
          maxWidth: "460px",
          padding: "24px",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "18px",
            right: "18px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-ink-muted)",
          }}
        >
          <X size={18} />
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "var(--color-teal-bg, rgba(43, 110, 110, 0.1))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-teal)",
            }}
          >
            <Home size={18} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--color-ink)" }}>
              Add Accommodation
            </h3>
            <p style={{ margin: 0, fontSize: "12.5px", color: "var(--color-ink-muted)" }}>
              Trip window ({trip.start_date} to {trip.end_date})
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {error && (
            <div style={{ padding: "10px 12px", background: "#FDF2F0", color: "var(--color-rust)", borderRadius: "6px", fontSize: "13px" }}>
              {error}
            </div>
          )}

          <div>
            <label style={{ display: "block", fontSize: "12.5px", fontWeight: 500, color: "var(--color-ink-muted)", marginBottom: "4px" }}>
              Accommodation Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Kyoto Grand Hotel"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "9px 12px",
                borderRadius: "6px",
                border: "1px solid var(--color-border)",
                fontSize: "13.5px",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "12.5px", fontWeight: 500, color: "var(--color-ink-muted)", marginBottom: "4px" }}>
              Address / Location
            </label>
            <input
              type="text"
              placeholder="e.g. 7-5 Oike-cho, Nakagyo-ku"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{
                width: "100%",
                padding: "9px 12px",
                borderRadius: "6px",
                border: "1px solid var(--color-border)",
                fontSize: "13.5px",
              }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={{ display: "block", fontSize: "12.5px", fontWeight: 500, color: "var(--color-ink-muted)", marginBottom: "4px" }}>
                Start Date *
              </label>
              <input
                type="date"
                required
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  borderRadius: "6px",
                  border: "1px solid var(--color-border)",
                  fontSize: "13.5px",
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "12.5px", fontWeight: 500, color: "var(--color-ink-muted)", marginBottom: "4px" }}>
                End Date *
              </label>
              <input
                type="date"
                required
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  borderRadius: "6px",
                  border: "1px solid var(--color-border)",
                  fontSize: "13.5px",
                }}
              />
            </div>
          </div>

          {(startWarning || endWarning) && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 10px", background: "#FEF3C7", borderRadius: "6px", color: "#92400E", fontSize: "12.5px" }}>
              <AlertTriangle size={15} style={{ flexShrink: 0 }} />
              <span>Warning: Accommodation dates fall outside the trip window.</span>
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              id="activeCheckbox"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
              style={{ width: "16px", height: "16px", accentColor: "var(--color-teal)" }}
            />
            <label htmlFor="activeCheckbox" style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-ink)", cursor: "pointer" }}>
              Designate as Active Accommodation for distance calculations
            </label>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "8px" }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: "9px 16px",
                borderRadius: "7px",
                border: "1px solid var(--color-border)",
                background: "#FFFFFF",
                color: "var(--color-ink)",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              style={{
                padding: "9px 18px",
                borderRadius: "7px",
                border: "none",
                background: "var(--color-ink)",
                color: "var(--color-parchment)",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                opacity: submitting ? 0.7 : 1,
              }}
            >
              {submitting ? "Saving..." : "Add Accommodation"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
