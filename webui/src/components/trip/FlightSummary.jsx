"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { X } from "lucide-react";
import { apiGet, apiPost, apiPatch, apiDelete } from "@/lib/api";
import { formatShortDate } from "@/lib/format";

function formatDateTime(isoStr) {
  if (!isoStr) return "—";
  const d = new Date(isoStr);
  if (isNaN(d.getTime())) return "—";
  const datePart = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const timePart = d
    .toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
    .toLowerCase();
  return `${datePart}, ${timePart}`;
}

function toDatetimeLocalValue(isoStr) {
  if (!isoStr) return "";
  const d = new Date(isoStr);
  if (isNaN(d.getTime())) return "";
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function isOutsideTripWindow(isoStr, trip) {
  if (!isoStr || !trip?.start_date || !trip?.end_date) return false;
  const d = isoStr.slice(0, 10);
  return d < trip.start_date.slice(0, 10) || d > trip.end_date.slice(0, 10);
}

export default function FlightSummary({ trip }) {
  const queryClient = useQueryClient();
  const [formMode, setFormMode] = useState(null); // null | "add" | flightId
  const [hoveredId, setHoveredId] = useState(null);
  const [formState, setFormState] = useState({
    flight_number: "",
    departure_airport: "",
    arrival_airport: "",
    departure_time: "",
    arrival_time: "",
  });

  const flightsQuery = useQuery({
    queryKey: ["trip", trip.id, "flights"],
    queryFn: () => apiGet(`/trips/${trip.id}/flights`),
  });

  const saveMutation = useMutation({
    mutationFn: async (payload) => {
      if (formMode && formMode !== "add") {
        return apiPatch(`/trips/${trip.id}/flights/${formMode}`, { flight: payload });
      }
      return apiPost(`/trips/${trip.id}/flights`, { flight: payload });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trip", String(trip.id), "flights"] });
      queryClient.invalidateQueries({ queryKey: ["trip", trip.id, "flights"] });
      setFormMode(null);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (flightId) => apiDelete(`/trips/${trip.id}/flights/${flightId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trip", String(trip.id), "flights"] });
      queryClient.invalidateQueries({ queryKey: ["trip", trip.id, "flights"] });
    },
  });

  if (flightsQuery.isLoading) {
    return <div style={{ color: "var(--color-muted)", fontSize: "13px" }}>Loading flights…</div>;
  }

  const allFlights = Array.isArray(flightsQuery.data) ? flightsQuery.data : [];
  const myFlights = allFlights.filter((f) => f.is_mine);
  const otherFlights = allFlights.filter((f) => !f.is_mine);

  const openAdd = () => {
    setFormMode("add");
    setFormState({
      flight_number: "",
      departure_airport: "",
      arrival_airport: "",
      departure_time: "",
      arrival_time: "",
    });
  };

  const openEdit = (flight) => {
    setFormMode(flight.id);
    setFormState({
      flight_number: flight.flight_number || "",
      departure_airport: flight.departure_airport || "",
      arrival_airport: flight.arrival_airport || "",
      departure_time: toDatetimeLocalValue(flight.departure_time),
      arrival_time: toDatetimeLocalValue(flight.arrival_time),
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    saveMutation.mutate({
      flight_number: formState.flight_number.trim(),
      departure_airport: formState.departure_airport.trim().toUpperCase(),
      arrival_airport: formState.arrival_airport.trim().toUpperCase(),
      departure_time: formState.departure_time || null,
      arrival_time: formState.arrival_time || null,
    });
  };

  const handleDelete = (flight) => {
    const label = flight.flight_number || `${flight.departure_airport || ""} → ${flight.arrival_airport || ""}`.trim();
    if (window.confirm(`Delete flight${label ? ` (${label})` : ""}?`)) {
      deleteMutation.mutate(flight.id);
    }
  };

  const tripWindowLabel = `${formatShortDate(trip.start_date)}–${formatShortDate(trip.end_date)}`;
  const formOutOfWindow =
    isOutsideTripWindow(formState.departure_time, trip) ||
    isOutsideTripWindow(formState.arrival_time, trip);

  return (
    <div style={{ fontFamily: "var(--font-inter), sans-serif" }}>
      {/* Your flights header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-ink)" }}>
            Your flights
          </span>
          <span
            style={{
              background: "var(--color-ink)",
              color: "var(--color-parchment)",
              fontSize: "11px",
              fontWeight: 600,
              borderRadius: "4px",
              padding: "1px 7px",
            }}
          >
            You
          </span>
        </div>

        {formMode === null && (
          <button
            type="button"
            onClick={openAdd}
            style={{
              border: "1px solid var(--color-ink)",
              borderRadius: "8px",
              padding: "6px 12px",
              background: "var(--color-ink)",
              color: "var(--color-parchment)",
              fontWeight: 600,
              fontSize: "12.5px",
              cursor: "pointer",
            }}
          >
            + Add flight
          </button>
        )}
      </div>

      {/* Inline Add / Edit Form */}
      {formMode !== null && (
        <form
          onSubmit={handleSave}
          style={{
            border: "1px solid var(--color-ink)",
            borderRadius: "10px",
            padding: "14px 16px",
            background: "#FFFFFF",
            marginBottom: "16px",
            boxShadow: "0 2px 8px rgba(31, 46, 53, 0.06)",
          }}
        >
          <div style={{ fontSize: "12px", color: "var(--color-muted)", marginBottom: "10px" }}>
            {formMode === "add" ? "Add a flight" : "Edit flight"}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "flex-end" }}>
            <div style={{ flex: 1, minWidth: "120px" }}>
              <label style={{ display: "block", fontSize: "11px", color: "var(--color-muted)", marginBottom: "4px" }}>
                Flight number
              </label>
              <input
                value={formState.flight_number}
                onChange={(e) => setFormState((s) => ({ ...s, flight_number: e.target.value }))}
                placeholder="UA 837"
                style={{
                  width: "100%",
                  border: "1px solid var(--color-border)",
                  borderRadius: "6px",
                  padding: "7px 10px",
                  fontSize: "13px",
                }}
              />
            </div>
            <div style={{ flex: 1, minWidth: "90px" }}>
              <label style={{ display: "block", fontSize: "11px", color: "var(--color-muted)", marginBottom: "4px" }}>
                Departing Airport
              </label>
              <input
                value={formState.departure_airport}
                onChange={(e) => setFormState((s) => ({ ...s, departure_airport: e.target.value }))}
                placeholder="SEA"
                style={{
                  width: "100%",
                  border: "1px solid var(--color-border)",
                  borderRadius: "6px",
                  padding: "7px 10px",
                  fontSize: "13px",
                }}
              />
            </div>
            <div style={{ flex: 1, minWidth: "90px" }}>
              <label style={{ display: "block", fontSize: "11px", color: "var(--color-muted)", marginBottom: "4px" }}>
                Arrival Airport
              </label>
              <input
                value={formState.arrival_airport}
                onChange={(e) => setFormState((s) => ({ ...s, arrival_airport: e.target.value }))}
                placeholder="HND"
                style={{
                  width: "100%",
                  border: "1px solid var(--color-border)",
                  borderRadius: "6px",
                  padding: "7px 10px",
                  fontSize: "13px",
                }}
              />
            </div>
            <div style={{ flex: 1.4, minWidth: "180px" }}>
              <label style={{ display: "block", fontSize: "11px", color: "var(--color-muted)", marginBottom: "4px" }}>
                Departure Time
              </label>
              <input
                type="datetime-local"
                value={formState.departure_time}
                onChange={(e) => setFormState((s) => ({ ...s, departure_time: e.target.value }))}
                style={{
                  width: "100%",
                  border: "1px solid var(--color-border)",
                  borderRadius: "6px",
                  padding: "6px 10px",
                  fontSize: "13px",
                }}
              />
            </div>
            <div style={{ flex: 1.4, minWidth: "180px" }}>
              <label style={{ display: "block", fontSize: "11px", color: "var(--color-muted)", marginBottom: "4px" }}>
                Arrival Time
              </label>
              <input
                type="datetime-local"
                value={formState.arrival_time}
                onChange={(e) => setFormState((s) => ({ ...s, arrival_time: e.target.value }))}
                style={{
                  width: "100%",
                  border: "1px solid var(--color-border)",
                  borderRadius: "6px",
                  padding: "6px 10px",
                  fontSize: "13px",
                }}
              />
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                type="button"
                onClick={() => setFormMode(null)}
                style={{
                  border: "1px solid var(--color-border)",
                  borderRadius: "6px",
                  padding: "7px 12px",
                  background: "#fff",
                  color: "var(--color-ink)",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saveMutation.isPending}
                style={{
                  border: "1px solid var(--color-ink)",
                  borderRadius: "6px",
                  padding: "7px 14px",
                  background: "var(--color-ink)",
                  color: "var(--color-parchment)",
                  fontWeight: 600,
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                {saveMutation.isPending ? "Saving…" : "Save"}
              </button>
            </div>
          </div>

          {formOutOfWindow && (
            <div
              style={{
                marginTop: "10px",
                background: "rgba(201, 138, 46, 0.08)",
                border: "1px solid rgba(201, 138, 46, 0.3)",
                borderRadius: "6px",
                padding: "7px 10px",
                fontSize: "12.5px",
                color: "#8A6017",
              }}
            >
              One or more flight times fall outside your Trip Window ({tripWindowLabel}). You can still save.
            </div>
          )}
        </form>
      )}

      {/* Your flights list */}
      {myFlights.length === 0 ? (
        <div
          style={{
            border: "1px dashed var(--color-border)",
            borderRadius: "10px",
            padding: "20px 16px",
            color: "var(--color-muted)",
            fontSize: "13px",
            background: "#FFFFFF",
            marginBottom: "20px",
          }}
        >
          No flights added yet. Click <b>+ Add flight</b> to add your itinerary.
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
          {myFlights.map((flight) => {
            const isHovered = hoveredId === flight.id;
            const outOfWindow =
              isOutsideTripWindow(flight.departure_time, trip) ||
              isOutsideTripWindow(flight.arrival_time, trip);
            const routeLabel =
              flight.departure_airport || flight.arrival_airport
                ? `${flight.departure_airport || "—"} → ${flight.arrival_airport || "—"}`
                : "Route not set";

            return (
              <div
                key={flight.id}
                onMouseEnter={() => setHoveredId(flight.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  border: "1.5px solid var(--color-ink)",
                  background: "#FFFFFF",
                  borderRadius: "10px",
                  padding: "12px 16px",
                  boxShadow: "0 2px 8px rgba(31, 46, 53, 0.04)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <span style={{ fontWeight: 600, fontSize: "14.5px", color: "var(--color-ink)" }}>
                      {routeLabel}
                    </span>
                    {flight.flight_number && (
                      <span
                        style={{
                          fontFamily: "var(--font-ibm-plex-mono), monospace",
                          fontSize: "11.5px",
                          color: "var(--color-muted)",
                          background: "var(--color-parchment)",
                          padding: "2px 7px",
                          borderRadius: "4px",
                        }}
                      >
                        {flight.flight_number}
                      </span>
                    )}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <button
                      type="button"
                      onClick={() => openEdit(flight)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--color-muted)",
                        fontSize: "12px",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(flight)}
                      aria-label="Delete flight"
                      title="Delete flight"
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--color-rust)",
                        cursor: "pointer",
                        padding: "2px",
                        display: "inline-flex",
                        alignItems: "center",
                        opacity: isHovered ? 1 : 0,
                        transition: "opacity 120ms ease",
                        pointerEvents: isHovered ? "auto" : "none",
                      }}
                    >
                      <X size={15} strokeWidth={2} />
                    </button>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    marginTop: "6px",
                    fontSize: "12.5px",
                    color: "var(--color-muted)",
                  }}
                >
                  <span>
                    <strong style={{ color: "var(--color-ink)", fontWeight: 500 }}>Departs:</strong>{" "}
                    {formatDateTime(flight.departure_time)}
                  </span>
                  <span>
                    <strong style={{ color: "var(--color-ink)", fontWeight: 500 }}>Arrives:</strong>{" "}
                    {formatDateTime(flight.arrival_time)}
                  </span>
                </div>

                {outOfWindow && (
                  <div
                    style={{
                      marginTop: "8px",
                      background: "rgba(201, 138, 46, 0.08)",
                      border: "1px solid rgba(201, 138, 46, 0.3)",
                      borderRadius: "6px",
                      padding: "6px 10px",
                      fontSize: "12px",
                      color: "#8A6017",
                    }}
                  >
                    Outside your Trip Window ({tripWindowLabel}).
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Other Members */}
      <div style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-ink)", marginBottom: "8px" }}>
        Other Members
      </div>
      {otherFlights.length === 0 ? (
        <div
          style={{
            border: "1px solid var(--color-border)",
            borderRadius: "10px",
            padding: "12px 14px",
            color: "var(--color-muted)",
            fontSize: "13px",
            background: "#FFFFFF",
          }}
        >
          No other members have added flights yet.
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {otherFlights.map((flight) => {
            const memberName = flight.user?.name || "Member";
            const initial = memberName.charAt(0).toUpperCase();
            const routeLabel =
              flight.departure_airport || flight.arrival_airport
                ? `${flight.departure_airport || "—"} → ${flight.arrival_airport || "—"}`
                : "Route not set";

            return (
              <div
                key={flight.id}
                style={{
                  border: "1px solid var(--color-border)",
                  borderRadius: "10px",
                  padding: "12px 16px",
                  background: "#FFFFFF",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "#999",
                      color: "#fff",
                      fontSize: "11px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {initial}
                  </span>
                  <span style={{ fontWeight: 600, fontSize: "13.5px" }}>{memberName}</span>
                  <span style={{ fontSize: "13.5px", color: "var(--color-ink)" }}>{routeLabel}</span>
                  {flight.flight_number && (
                    <span
                      style={{
                        fontFamily: "var(--font-ibm-plex-mono), monospace",
                        fontSize: "11px",
                        color: "var(--color-muted)",
                      }}
                    >
                      {flight.flight_number}
                    </span>
                  )}
                </div>
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", fontSize: "12.5px", color: "var(--color-muted)" }}>
                  <span>Departs: {formatDateTime(flight.departure_time)}</span>
                  <span>Arrives: {formatDateTime(flight.arrival_time)}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
