"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Calendar, Check, X } from "lucide-react";
import { apiPatch } from "@/lib/api";

export default function EditTripModal({ trip, onClose }) {
  const queryClient = useQueryClient();
  const [name, setName] = useState(trip.name);
  const [startDate, setStartDate] = useState(trip.start_date);
  const [endDate, setEndDate] = useState(trip.end_date);
  const [error, setError] = useState(null);

  const mutation = useMutation({
    mutationFn: (data) => apiPatch(`/trips/${trip.id}`, data),
    onSuccess: (updatedTrip) => {
      queryClient.setQueryData(["trip", trip.id], updatedTrip);
      queryClient.invalidateQueries(["trip", trip.id]);
      onClose();
    },
    onError: (err) => {
      setError(err.message || "Failed to update trip");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (endDate < startDate) {
      setError("End date must be on or after start date.");
      return;
    }
    mutation.mutate({
      trip: {
        name,
        start_date: startDate,
        end_date: endDate,
      },
    });
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
          border: "1px solid var(--color-border)",
          borderRadius: "14px",
          padding: "28px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 12px 32px rgba(31, 46, 53, 0.12)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Calendar size={18} color="var(--color-rust)" />
            <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "18px", fontWeight: 600, color: "var(--color-ink)", margin: 0 }}>
              Edit Trip Details
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{ border: "none", background: "none", cursor: "pointer", color: "var(--color-muted)", padding: "4px" }}
          >
            <X size={18} />
          </button>
        </div>

        {error && (
          <div
            style={{
              background: "rgba(184, 70, 47, 0.08)",
              border: "1px solid rgba(184, 70, 47, 0.2)",
              borderRadius: "8px",
              padding: "10px 12px",
              fontSize: "13px",
              color: "var(--color-rust)",
              marginBottom: "16px",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ display: "block", fontFamily: "var(--font-inter), sans-serif", fontSize: "12.5px", fontWeight: 600, color: "var(--color-ink)", marginBottom: "6px" }}>
              Trip Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "14px",
                color: "var(--color-ink)",
                outline: "none",
              }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={{ display: "block", fontFamily: "var(--font-inter), sans-serif", fontSize: "12.5px", fontWeight: 600, color: "var(--color-ink)", marginBottom: "6px" }}>
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "13px",
                  color: "var(--color-ink)",
                  outline: "none",
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontFamily: "var(--font-inter), sans-serif", fontSize: "12.5px", fontWeight: 600, color: "var(--color-ink)", marginBottom: "6px" }}>
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "13px",
                  color: "var(--color-ink)",
                  outline: "none",
                }}
              />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "8px" }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                background: "transparent",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                padding: "9px 16px",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13.5px",
                fontWeight: 500,
                color: "var(--color-ink)",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={mutation.isPending}
              style={{
                background: "var(--color-ink)",
                color: "var(--color-parchment)",
                border: "none",
                borderRadius: "8px",
                padding: "9px 18px",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13.5px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Check size={16} />
              {mutation.isPending ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
