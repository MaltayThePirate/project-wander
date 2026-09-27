"use client";

import { useQuery } from "@tanstack/react-query";
import { Plane, Calendar, MapPin, Clock } from "lucide-react";
import { apiGet } from "@/lib/api";

export default function FlightSummary({ trip, onEdit }) {
  const flightQuery = useQuery({
    queryKey: ["trip", trip.id, "flight"],
    queryFn: () => apiGet(`/trips/${trip.id}/flight`),
  });

  const resData = flightQuery.data;
  const flight = resData?.flight || (resData?.id ? resData : null);

  if (flightQuery.isLoading) {
    return null;
  }

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
            <Plane size={15} />
          </div>
          <h3 style={{ margin: 0, fontFamily: "var(--font-inter), sans-serif", fontSize: "15px", fontWeight: 600, color: "var(--color-ink)" }}>
            Flight Details
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
          {flight ? "Edit Flights" : "Add Flight Details"}
        </button>
      </div>

      {!flight || (!flight.arrival_date && !flight.departure_date && !flight.arrival_flight_number && !flight.departure_flight_number) ? (
        <div style={{ fontSize: "13px", color: "var(--color-muted)", fontStyle: "italic" }}>
          No flight details added yet. Add your arrival and departure times for a personal planning reference.
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {/* Arrival Leg */}
          <div style={{ background: "var(--color-parchment-subtle, #F9F8F6)", padding: "12px", borderRadius: "8px", border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-teal)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "6px" }}>
              Arrival Leg
            </div>
            <div style={{ fontSize: "13.5px", fontWeight: 600, color: "var(--color-ink)", marginBottom: "4px" }}>
              Flight {flight.arrival_flight_number || "—"} {flight.arrival_origin ? `· ${flight.arrival_origin}` : ""}
            </div>
            <div style={{ fontSize: "12.5px", color: "var(--color-ink-muted)", display: "flex", alignItems: "center", gap: "6px" }}>
              <Calendar size={13} />
              {flight.arrival_date ? new Date(flight.arrival_date).toLocaleString([], { dateStyle: "medium", timeStyle: "short" }) : "Time not set"}
            </div>
          </div>

          {/* Departure Leg */}
          <div style={{ background: "var(--color-parchment-subtle, #F9F8F6)", padding: "12px", borderRadius: "8px", border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-teal)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "6px" }}>
              Departure Leg
            </div>
            <div style={{ fontSize: "13.5px", fontWeight: 600, color: "var(--color-ink)", marginBottom: "4px" }}>
              Flight {flight.departure_flight_number || "—"} {flight.departure_destination ? `· ${flight.departure_destination}` : ""}
            </div>
            <div style={{ fontSize: "12.5px", color: "var(--color-ink-muted)", display: "flex", alignItems: "center", gap: "6px" }}>
              <Calendar size={13} />
              {flight.departure_date ? new Date(flight.departure_date).toLocaleString([], { dateStyle: "medium", timeStyle: "short" }) : "Time not set"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
