"use client";

import { useState, useEffect } from "react";
import { Plane, AlertTriangle, X } from "lucide-react";
import { apiGet, apiPost } from "@/lib/api";

export default function FlightModal({ trip, onClose }) {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [arrivalDateOnly, setArrivalDateOnly] = useState("");
  const [arrivalTimeOnly, setArrivalTimeOnly] = useState("");
  const [arrivalFlightNumber, setArrivalFlightNumber] = useState("");
  const [arrivalOrigin, setArrivalOrigin] = useState("");

  const [departureDateOnly, setDepartureDateOnly] = useState("");
  const [departureTimeOnly, setDepartureTimeOnly] = useState("");
  const [departureFlightNumber, setDepartureFlightNumber] = useState("");
  const [departureDestination, setDepartureDestination] = useState("");

  useEffect(() => {
    async function fetchFlight() {
      try {
        const data = await apiGet(`/trips/${trip.id}/flight`);
        if (data) {
          const f = data.flight || data;
          if (f && f.id) {
            if (f.arrival_date) {
              const dt = new Date(f.arrival_date);
              if (!isNaN(dt.getTime())) {
                setArrivalDateOnly(dt.toISOString().slice(0, 10));
                setArrivalTimeOnly(dt.toTimeString().slice(0, 5));
              }
            }
            setArrivalFlightNumber(f.arrival_flight_number || "");
            setArrivalOrigin(f.arrival_origin || "");

            if (f.departure_date) {
              const dt = new Date(f.departure_date);
              if (!isNaN(dt.getTime())) {
                setDepartureDateOnly(dt.toISOString().slice(0, 10));
                setDepartureTimeOnly(dt.toTimeString().slice(0, 5));
              }
            }
            setDepartureFlightNumber(f.departure_flight_number || "");
            setDepartureDestination(f.departure_destination || "");
          }
        }
      } catch (err) {
        console.error("Failed to load flight", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFlight();
  }, [trip.id]);

  // Check if dates fall outside trip window (start_date / end_date)
  const isOutsideWindow = (dateStr) => {
    if (!dateStr || !trip.start_date || !trip.end_date) return false;
    return dateStr < trip.start_date || dateStr > trip.end_date;
  };

  const arrivalWarning = isOutsideWindow(arrivalDateOnly);
  const departureWarning = isOutsideWindow(departureDateOnly);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formatDateTime = (dateStr, timeStr) => {
      if (!dateStr) return null;
      const t = timeStr && timeStr.trim() !== "" ? timeStr.trim() : "00:00";
      return new Date(`${dateStr}T${t}:00`).toISOString();
    };

    try {
      await apiPost(`/trips/${trip.id}/flight`, {
        flight: {
          arrival_date: formatDateTime(arrivalDateOnly, arrivalTimeOnly),
          arrival_flight_number: arrivalFlightNumber,
          arrival_origin: arrivalOrigin,
          departure_date: formatDateTime(departureDateOnly, departureTimeOnly),
          departure_flight_number: departureFlightNumber,
          departure_destination: departureDestination,
        },
      });
      onClose();
    } catch (err) {
      setError(err.message || "Failed to save flight details");
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
            <Plane size={18} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--color-ink)" }}>
              Flight Details
            </h3>
            <p style={{ margin: 0, fontSize: "12.5px", color: "var(--color-ink-muted)" }}>
              Personal reference for trip window ({trip.start_date} to {trip.end_date})
            </p>
          </div>
        </div>

        {loading ? (
          <div style={{ padding: "40px", textAlign: "center", color: "var(--color-ink-muted)" }}>
            Loading...
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {error && (
              <div style={{ padding: "10px 12px", background: "#FDF2F0", color: "var(--color-rust)", borderRadius: "6px", fontSize: "13px" }}>
                {error}
              </div>
            )}

            {/* Arrival Section */}
            <div style={{ background: "var(--color-parchment-subtle, #F9F8F6)", padding: "14px", borderRadius: "10px", border: "1px solid var(--color-border)" }}>
              <h4 style={{ margin: "0 0 10px 0", fontSize: "13.5px", fontWeight: 600, color: "var(--color-ink)" }}>
                Arrival Leg
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 500, color: "var(--color-ink-muted)", marginBottom: "4px" }}>
                    Arrival Date
                  </label>
                  <input
                    type="date"
                    value={arrivalDateOnly}
                    onChange={(e) => setArrivalDateOnly(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px 10px",
                      borderRadius: "6px",
                      border: "1px solid var(--color-border)",
                      fontSize: "13px",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 500, color: "var(--color-ink-muted)", marginBottom: "4px" }}>
                    Arrival Time (HH:MM)
                  </label>
                  <input
                    type="text"
                    placeholder="15:30"
                    value={arrivalTimeOnly}
                    onChange={(e) => setArrivalTimeOnly(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px 10px",
                      borderRadius: "6px",
                      border: "1px solid var(--color-border)",
                      fontSize: "13px",
                    }}
                  />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 500, color: "var(--color-ink-muted)", marginBottom: "4px" }}>
                    Flight #
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. JL001"
                    value={arrivalFlightNumber}
                    onChange={(e) => setArrivalFlightNumber(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px 10px",
                      borderRadius: "6px",
                      border: "1px solid var(--color-border)",
                      fontSize: "13px",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 500, color: "var(--color-ink-muted)", marginBottom: "4px" }}>
                    Arrival Airport
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SFO"
                    value={arrivalOrigin}
                    onChange={(e) => setArrivalOrigin(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px 10px",
                      borderRadius: "6px",
                      border: "1px solid var(--color-border)",
                      fontSize: "13px",
                    }}
                  />
                </div>
              </div>

              {arrivalWarning && (
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px", padding: "8px 10px", background: "#FEF3C7", borderRadius: "6px", color: "#92400E", fontSize: "12.5px" }}>
                  <AlertTriangle size={15} style={{ flexShrink: 0 }} />
                  <span>Warning: Arrival date is outside the trip window ({trip.start_date} – {trip.end_date}).</span>
                </div>
              )}
            </div>

            {/* Departure Section */}
            <div style={{ background: "var(--color-parchment-subtle, #F9F8F6)", padding: "14px", borderRadius: "10px", border: "1px solid var(--color-border)" }}>
              <h4 style={{ margin: "0 0 10px 0", fontSize: "13.5px", fontWeight: 600, color: "var(--color-ink)" }}>
                Departure Leg
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 500, color: "var(--color-ink-muted)", marginBottom: "4px" }}>
                    Departure Date
                  </label>
                  <input
                    type="date"
                    value={departureDateOnly}
                    onChange={(e) => setDepartureDateOnly(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px 10px",
                      borderRadius: "6px",
                      border: "1px solid var(--color-border)",
                      fontSize: "13px",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 500, color: "var(--color-ink-muted)", marginBottom: "4px" }}>
                    Departure Time (HH:MM)
                  </label>
                  <input
                    type="text"
                    placeholder="18:00"
                    value={departureTimeOnly}
                    onChange={(e) => setDepartureTimeOnly(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px 10px",
                      borderRadius: "6px",
                      border: "1px solid var(--color-border)",
                      fontSize: "13px",
                    }}
                  />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 500, color: "var(--color-ink-muted)", marginBottom: "4px" }}>
                    Flight #
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. JL002"
                    value={departureFlightNumber}
                    onChange={(e) => setDepartureFlightNumber(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px 10px",
                      borderRadius: "6px",
                      border: "1px solid var(--color-border)",
                      fontSize: "13px",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 500, color: "var(--color-ink-muted)", marginBottom: "4px" }}>
                    Destination Airport
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SFO"
                    value={departureDestination}
                    onChange={(e) => setDepartureDestination(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px 10px",
                      borderRadius: "6px",
                      border: "1px solid var(--color-border)",
                      fontSize: "13px",
                    }}
                  />
                </div>
              </div>

              {departureWarning && (
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px", padding: "8px 10px", background: "#FEF3C7", borderRadius: "6px", color: "#92400E", fontSize: "12.5px" }}>
                  <AlertTriangle size={15} style={{ flexShrink: 0 }} />
                  <span>Warning: Departure date is outside the trip window ({trip.start_date} – {trip.end_date}).</span>
                </div>
              )}
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "4px" }}>
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
                {submitting ? "Saving..." : "Save Flight"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
