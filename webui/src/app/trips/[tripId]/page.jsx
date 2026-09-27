"use client";

import { useState } from "react";
import React from "react";
import { useParams } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Search, LayoutGrid, List as ListIcon, Map, Info, X } from "lucide-react";
import MapView from "@/components/trip/MapView";
import DayPlanView from "@/components/trip/DayPlanView";
import { apiGet } from "@/lib/api";
import { formatShortDate } from "@/lib/format";

import PageHeader from "@/components/layout/PageHeader";
import AddMenuButton from "@/components/trip/AddMenuButton";
import AddSpotForm from "@/components/trip/AddSpotForm";
import EditTripModal from "@/components/trip/EditTripModal";
import FlightModal from "@/components/trip/FlightModal";
import FlightSummary from "@/components/trip/FlightSummary";
import AccommodationModal from "@/components/trip/AccommodationModal";
import AccommodationSummary from "@/components/trip/AccommodationSummary";
import SpotCard from "@/components/trip/SpotCard";

export default function TripHomePage() {
  const params = useParams();
  const tripId = params?.tripId;

  const [activeTab, setActiveTab] = useState("spots"); // "spots", "flights"
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid"); // "grid", "list", "map"
  const [headerMenuOpen, setHeaderMenuOpen] = useState(false);
  const [emptyMenuOpen, setEmptyMenuOpen] = useState(false);
  const [note, setNote] = useState(null);
  const [showAddSpotForm, setShowAddSpotForm] = useState(false);
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);
  const [showEditTripModal, setShowEditTripModal] = useState(false);
  const [showFlightModal, setShowFlightModal] = useState(false);
  const [showAccommodationModal, setShowAccommodationModal] = useState(false);

  const queryClient = useQueryClient();
  const tripQuery = useQuery({
    queryKey: ["trip", tripId],
    queryFn: () => apiGet(`/trips/${tripId}`),
  });

  const spotsQuery = useQuery({
    queryKey: ["trip", tripId, "spots"],
    queryFn: () => apiGet(`/trips/${tripId}/spots`),
  });

  const handleSelect = (key, label) => {
    setHeaderMenuOpen(false);
    setEmptyMenuOpen(false);
    if (key === "spot") {
      setShowAddSpotForm(true);
      return;
    }
    if (key === "category") {
      setShowAddCategoryForm(true);
      return;
    }
    if (key === "flight") {
      setShowFlightModal(true);
      return;
    }
    if (key === "accommodation") {
      setShowAccommodationModal(true);
      return;
    }
    setNote(label);
  };

  if (tripQuery.isLoading || spotsQuery.isLoading) {
    return (
      <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px" }}>
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

  const dateRangeLabel = `${formatShortDate(trip.start_date)}–${formatShortDate(trip.end_date)}`;
  const spots = spotsQuery.data ?? [];
  const filteredSpots = spots.filter(
    (spot) =>
      search.trim() === "" ||
      spot.name.toLowerCase().includes(search.toLowerCase()) ||
      (spot.address || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "28px 24px 60px" }}>
      <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
        <div style={{ marginBottom: "20px" }}>
          <div
            onClick={() => setShowEditTripModal(true)}
            className="eyebrow-label"
            style={{
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "4px",
            }}
            title="Click to edit trip dates"
          >
            {dateRangeLabel}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
            <h1
              onClick={() => setShowEditTripModal(true)}
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontSize: "32px",
                fontWeight: 600,
                color: "var(--color-ink)",
                margin: 0,
                cursor: "pointer",
              }}
              title="Click to edit trip name"
            >
              {trip.name}
            </h1>

            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <button
                onClick={() => setActiveTab("spots")}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid var(--color-border)",
                  background: activeTab === "spots" ? "var(--color-ink)" : "#FFFFFF",
                  color: activeTab === "spots" ? "var(--color-parchment)" : "var(--color-ink)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Spot Planning
              </button>
              <button
                onClick={() => setActiveTab("flights")}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid var(--color-border)",
                  background: activeTab === "flights" ? "var(--color-ink)" : "#FFFFFF",
                  color: activeTab === "flights" ? "var(--color-parchment)" : "var(--color-ink)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Flight Details
              </button>
              <button
                onClick={() => setActiveTab("accommodations")}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid var(--color-border)",
                  background: activeTab === "accommodations" ? "var(--color-ink)" : "#FFFFFF",
                  color: activeTab === "accommodations" ? "var(--color-parchment)" : "var(--color-ink)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Accommodations
              </button>
              <AddMenuButton
                isOpen={headerMenuOpen}
                onToggleOpen={() => setHeaderMenuOpen((v) => !v)}
                onSelect={handleSelect}
              />
            </div>
          </div>
        </div>

        {showEditTripModal && (
          <EditTripModal trip={trip} onClose={() => setShowEditTripModal(false)} />
        )}

        {showFlightModal && (
          <FlightModal trip={trip} onClose={() => setShowFlightModal(false)} />
        )}

        {showAccommodationModal && (
          <AccommodationModal trip={trip} onClose={() => setShowAccommodationModal(false)} queryClient={queryClient} />
        )}

        {showAddSpotForm && (
          <div
            onClick={() => setShowAddSpotForm(false)}
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
              style={{ width: "100%", maxWidth: "420px" }}
            >
              <AddSpotForm tripId={tripId} onClose={() => setShowAddSpotForm(false)} />
            </div>
          </div>
        )}

        {showAddCategoryForm && (
          <div
            onClick={() => setShowAddCategoryForm(false)}
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
              style={{ width: "100%", maxWidth: "420px" }}
            >
              <AddCategoryForm tripId={tripId} onClose={() => setShowAddCategoryForm(false)} />
            </div>
          </div>
        )}

        {note && (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "8px",
              background: "rgba(201, 138, 46, 0.05)",
              border: "1px solid rgba(201, 138, 46, 0.2)",
              borderRadius: "8px",
              padding: "10px 14px",
              marginBottom: "18px",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "12.5px",
              color: "#8A6017",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
              <Info size={14} strokeWidth={2} style={{ flexShrink: 0, marginTop: "1px" }} />
              "{note}" doesn't have a screen yet — this is a placeholder for a flow that's still being designed.
            </div>
            <button
              onClick={() => setNote(null)}
              aria-label="Dismiss"
              style={{ border: "none", background: "none", color: "#8A6017", cursor: "pointer", display: "flex", flexShrink: 0 }}
            >
              <X size={14} strokeWidth={2} />
            </button>
          </div>
        )}

        <div style={{ display: "flex", gap: "12px", marginBottom: "24px", alignItems: "center" }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#FFFFFF",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              padding: "9px 14px",
            }}
          >
            <Search size={15} color="var(--color-muted)" strokeWidth={2} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Spots by name or address"
              disabled
              style={{
                border: "none",
                outline: "none",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13.5px",
                color: "var(--color-ink)",
                width: "100%",
                background: "transparent",
              }}
            />
          </div>
          <div style={{ display: "flex", background: "#FFFFFF", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "3px" }}>
            <button
              onClick={() => setView("grid")}
              aria-label="Grid view"
              style={{
                border: "none",
                background: view === "grid" ? "var(--color-ink)" : "transparent",
                color: view === "grid" ? "var(--color-parchment)" : "var(--color-muted)",
                borderRadius: "6px",
                padding: "7px 10px",
                cursor: "pointer",
                display: "flex",
              }}
            >
              <LayoutGrid size={15} strokeWidth={2} />
            </button>
            <button
              onClick={() => setView("list")}
              aria-label="List view"
              style={{
                border: "none",
                background: view === "list" ? "var(--color-ink)" : "transparent",
                color: view === "list" ? "var(--color-parchment)" : "var(--color-muted)",
                borderRadius: "6px",
                padding: "7px 10px",
                cursor: "pointer",
                display: "flex",
              }}
            >
              <ListIcon size={15} strokeWidth={2} />
            </button>
            <button
              onClick={() => setView("map")}
              aria-label="Map view"
              style={{
                border: "none",
                background: view === "map" ? "var(--color-ink)" : "transparent",
                color: view === "map" ? "var(--color-parchment)" : "var(--color-muted)",
                borderRadius: "6px",
                padding: "7px 10px",
                cursor: "pointer",
                display: "flex",
              }}
            >
              <Map size={15} strokeWidth={2} />
            </button>
            <button
              onClick={() => setView("day-plan")}
              aria-label="Day plan view"
              style={{
                border: "none",
                background: view === "day-plan" ? "var(--color-ink)" : "transparent",
                color: view === "day-plan" ? "var(--color-parchment)" : "var(--color-muted)",
                borderRadius: "6px",
                padding: "7px 10px",
                cursor: "pointer",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              Day Plan
            </button>
          </div>
        </div>

        {activeTab === "flights" ? (
          <FlightSummary trip={trip} onEdit={() => setShowFlightModal(true)} />
        ) : activeTab === "accommodations" ? (
          <AccommodationSummary trip={trip} onEdit={() => setShowAccommodationModal(true)} queryClient={queryClient} />
        ) : view === "day-plan" ? (
          <DayPlanView trip={trip} />
        ) : spots.length === 0 ? (
          <div style={{ textAlign: "center", padding: "70px 24px", border: "1.5px dashed var(--color-border)", borderRadius: "14px", background: "#FFFFFF" }}>
            <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 600, fontSize: "20px", color: "var(--color-ink)", marginBottom: "8px" }}>
              Your Trip is empty
            </div>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13.5px", color: "var(--color-muted)", margin: "0 0 22px", maxWidth: "360px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.5 }}>
              Start by adding a Spot, your flight details, or where you're staying.
            </p>
            <AddMenuButton
              isOpen={emptyMenuOpen}
              onToggleOpen={() => setEmptyMenuOpen((v) => !v)}
              onSelect={handleSelect}
              size="large"
            />
          </div>
        ) : filteredSpots.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px 24px", color: "var(--color-muted)", fontFamily: "var(--font-inter), sans-serif", fontSize: "13.5px" }}>
            No Spots match "{search}".
          </div>
        ) : view === "map" ? (
          <MapView trip={trip} spots={filteredSpots} />
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: view === "grid" ? "repeat(auto-fill, minmax(270px, 1fr))" : "1fr",
              gap: "12px",
            }}
          >
            {filteredSpots.map((spot) => (
              <SpotCard key={spot.id} spot={spot} view={view} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}