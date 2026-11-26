"use client";

import { useState, useRef } from "react";
import { useParams } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { List as ListIcon, Map } from "lucide-react";
import MapView from "@/components/trip/MapView";
import { apiGet, apiPost, apiDelete } from "@/lib/api";
import { formatShortDate } from "@/lib/format";

import EditTripModal from "@/components/trip/EditTripModal";
import AccommodationModal from "@/components/trip/AccommodationModal";
import FlightSummary from "@/components/trip/FlightSummary";
import AccommodationSummary from "@/components/trip/AccommodationSummary";
import SpotCard from "@/components/trip/SpotCard";

export default function TripHomePage() {
  const params = useParams();
  const tripId = params?.tripId;

  const [view, setView] = useState("list"); // "list" | "map"
  const [activeTab, setActiveTab] = useState("spots"); // "spots" | "flights" | "stays"
  const [showEditTripModal, setShowEditTripModal] = useState(false);
  const [showAccommodationModal, setShowAccommodationModal] = useState(false);

  // Quick-add Spot state
  const [spotUrl, setSpotUrl] = useState("");
  const [justAddedSpot, setJustAddedSpot] = useState(null);
  const [addSpotError, setAddSpotError] = useState(null);
  const spotInputRef = useRef(null);

  const queryClient = useQueryClient();

  const tripQuery = useQuery({
    queryKey: ["trip", tripId],
    queryFn: () => apiGet(`/trips/${tripId}`),
  });

  const spotsQuery = useQuery({
    queryKey: ["trip", tripId, "spots"],
    queryFn: () => apiGet(`/trips/${tripId}/spots`),
  });

  const categoriesQuery = useQuery({
    queryKey: ["trip", tripId, "categories"],
    queryFn: () => apiGet(`/trips/${tripId}/categories`),
  });

  const accommodationsQuery = useQuery({
    queryKey: ["trip", tripId, "accommodations"],
    queryFn: () => apiGet(`/trips/${tripId}/accommodations`),
  });

  const flightQuery = useQuery({
    queryKey: ["trip", tripId, "flights"],
    queryFn: () => apiGet(`/trips/${tripId}/flights`),
  });

  const addSpotMutation = useMutation({
    mutationFn: (sourceUrl) =>
      apiPost(`/trips/${tripId}/spots`, {
        spot: { source_url: sourceUrl },
      }),
    onSuccess: (created) => {
      queryClient.invalidateQueries({ queryKey: ["trip", tripId, "spots"] });
      setSpotUrl("");
      setAddSpotError(null);
      setJustAddedSpot(created);
    },
    onError: (err) => {
      setJustAddedSpot(null);
      setAddSpotError(
        err.message || "Couldn't read that link. Paste a Google or Apple Maps link for the place."
      );
    },
  });

  const undoSpotMutation = useMutation({
    mutationFn: (spotId) => apiDelete(`/trips/${tripId}/spots/${spotId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trip", tripId, "spots"] });
      setJustAddedSpot(null);
    },
  });

  if (tripQuery.isLoading || spotsQuery.isLoading) {
    return (
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <div className="spinner" />
        <div className="eyebrow-label">Charting the route…</div>
      </div>
    );
  }

  if (tripQuery.isError) {
    return (
      <div style={{ padding: "28px 24px", color: "var(--color-rust)" }}>
        {tripQuery.error.message}
      </div>
    );
  }

  const trip = tripQuery.data;
  const spots = spotsQuery.data ?? [];
  const categories = categoriesQuery.data ?? [];
  const accommodations = accommodationsQuery.data ?? [];
  const flights = Array.isArray(flightQuery.data) ? flightQuery.data : [];
  const flightsCount = flights.length;

  const dateRangeLabel = `${formatShortDate(trip.start_date)}–${formatShortDate(trip.end_date)}`;
  const members = trip.members || (trip.owner ? [trip.owner] : [{ id: 1, name: "You" }]);

  const handleQuickAddSpot = (e) => {
    e.preventDefault();
    if (!spotUrl.trim()) return;
    addSpotMutation.mutate(spotUrl.trim());
  };

  return (
    <div style={{ padding: "28px 24px 60px", fontFamily: "var(--font-inter), sans-serif" }}>
      <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          <div>
            <div
              onClick={() => setShowEditTripModal(true)}
              className="eyebrow-label"
              title="Click to edit trip name or dates"
              style={{
                cursor: "pointer",
                marginBottom: "4px",
              }}
            >
              {trip.name} · {dateRangeLabel}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <h1
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "32px",
                  fontWeight: 600,
                  color: "var(--color-ink)",
                  margin: 0,
                }}
              >
                Plan
              </h1>

              {/* List / Map pivot toggle */}
              <div
                style={{
                  display: "inline-flex",
                  background: "#FFFFFF",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  padding: "3px",
                }}
              >
                <button
                  type="button"
                  onClick={() => setView("list")}
                  aria-label="List view"
                  title="List view"
                  style={{
                    border: "none",
                    borderRadius: "6px",
                    background: view === "list" ? "var(--color-ink)" : "transparent",
                    color: view === "list" ? "var(--color-parchment)" : "var(--color-muted)",
                    padding: "6px 9px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListIcon size={15} strokeWidth={2} />
                </button>
                <button
                  type="button"
                  onClick={() => setView("map")}
                  aria-label="Map view"
                  title="Map view"
                  style={{
                    border: "none",
                    borderRadius: "6px",
                    background: view === "map" ? "var(--color-ink)" : "transparent",
                    color: view === "map" ? "var(--color-parchment)" : "var(--color-muted)",
                    padding: "6px 9px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Map size={15} strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>

          {/* Member avatars */}
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {members.map((m, idx) => (
              <span
                key={m.id || idx}
                title={m.name || "Member"}
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background: idx === 0 ? "var(--color-ink)" : "#999",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {(m.name || "N").charAt(0).toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        {showEditTripModal && (
          <EditTripModal trip={trip} onClose={() => setShowEditTripModal(false)} />
        )}

        {showAccommodationModal && (
          <AccommodationModal
            trip={trip}
            onClose={() => setShowAccommodationModal(false)}
            queryClient={queryClient}
          />
        )}

        {view === "map" ? (
          <div style={{ marginTop: "16px" }}>
            <MapView trip={trip} spots={spots} />
          </div>
        ) : (
          <>
            {/* 3-Tab Bar */}
            <div
              style={{
                display: "flex",
                gap: "4px",
                borderBottom: "1.5px solid var(--color-border)",
                margin: "14px 0",
              }}
            >
              {[
                { key: "spots", label: "Spots", count: spots.length },
                { key: "flights", label: "Flights", count: flightsCount },
                { key: "stays", label: "Stays", count: accommodations.length },
              ].map((tab) => {
                const isOn = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    style={{
                      background: "none",
                      border: "none",
                      borderBottom: isOn ? "3px solid var(--color-ink)" : "3px solid transparent",
                      padding: "8px 16px",
                      color: isOn ? "var(--color-ink)" : "var(--color-muted)",
                      fontWeight: isOn ? 600 : 400,
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    {tab.label}{" "}
                    <span style={{ color: "var(--color-muted)", fontWeight: 400 }}>
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {activeTab === "flights" ? (
              <FlightSummary trip={trip} />
            ) : activeTab === "stays" ? (
              <AccommodationSummary
                trip={trip}
                onEdit={() => setShowAccommodationModal(true)}
              />
            ) : (
              <div>
                {/* Quick-add Spot bar */}
                <form
                  onSubmit={handleQuickAddSpot}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginBottom: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <input
                    ref={spotInputRef}
                    value={spotUrl}
                    onChange={(e) => setSpotUrl(e.target.value)}
                    placeholder="Paste a Google or Apple Maps link"
                    style={{
                      flex: 1,
                      minWidth: "220px",
                      border: "1px solid var(--color-border)",
                      borderRadius: "8px",
                      padding: "9px 14px",
                      fontSize: "13.5px",
                      background: "#FFFFFF",
                      color: "var(--color-ink)",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={addSpotMutation.isPending}
                    style={{
                      border: "1px solid var(--color-ink)",
                      borderRadius: "8px",
                      padding: "9px 18px",
                      background: "var(--color-ink)",
                      color: "var(--color-parchment)",
                      fontWeight: 600,
                      fontSize: "13.5px",
                      cursor: "pointer",
                    }}
                  >
                    {addSpotMutation.isPending ? "Adding…" : "Add"}
                  </button>
                </form>

                {/* Quick-add outcome feedback */}
                {justAddedSpot && (
                  <div
                    style={{
                      border: "1.5px solid var(--color-border)",
                      borderRadius: "6px",
                      padding: "8px 10px",
                      marginBottom: "12px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "13.5px",
                    }}
                  >
                    <span>
                      <b>{justAddedSpot.name}</b>{" "}
                      {justAddedSpot.address && (
                        <span style={{ color: "var(--color-muted)", fontSize: "12px" }}>
                          {justAddedSpot.address}
                        </span>
                      )}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <button
                        type="button"
                        onClick={() => undoSpotMutation.mutate(justAddedSpot.id)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "var(--color-muted)",
                          fontSize: "12px",
                          cursor: "pointer",
                        }}
                      >
                        Undo
                      </button>
                    </span>
                  </div>
                )}

                {addSpotError && (
                  <div
                    style={{
                      border: "1px solid var(--color-rust)",
                      background: "rgba(180, 68, 46, 0.06)",
                      color: "var(--color-rust)",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      marginBottom: "12px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "13px",
                    }}
                  >
                    <span>{addSpotError}</span>
                    <span style={{ fontSize: "12px", whiteSpace: "nowrap" }}>
                      <button
                        type="button"
                        onClick={() => spotInputRef.current?.focus()}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#a22",
                          cursor: "pointer",
                          padding: 0,
                        }}
                      >
                        Edit link
                      </button>
                      {" · "}
                      <button
                        type="button"
                        onClick={() => {
                          setAddSpotError(null);
                          setSpotUrl("");
                        }}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#a22",
                          cursor: "pointer",
                          padding: 0,
                        }}
                      >
                        Remove
                      </button>
                    </span>
                  </div>
                )}

                {/* Spots Grid */}
                {spots.length === 0 ? (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "40px 24px",
                      border: "1.5px dashed var(--color-border)",
                      borderRadius: "8px",
                      color: "var(--color-muted)",
                      fontSize: "13.5px",
                    }}
                  >
                    No Spots yet. Paste a Google or Apple Maps link above to add your first Spot.
                  </div>
                ) : (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
                      gap: "12px",
                    }}
                  >
                    {spots.map((spot) => (
                      <SpotCard
                        key={spot.id}
                        spot={spot}
                        categories={categories}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
