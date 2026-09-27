import React, { useEffect, useRef, useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { MapPin, Home, Info, X, Plus, Check } from "lucide-react";
import { apiGet, apiPut } from "@/lib/api";
import Dropdown from "@/components/ui/Dropdown";

const STAMP_TILT = -1.5;

export function StampBadge({ label, categoryColors }) {
  const color = categoryColors[label] || "#2B6E6E";
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-ibm-plex-mono), monospace",
        fontSize: "10px",
        fontWeight: 500,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color,
        border: `1.5px dashed ${color}`,
        borderRadius: "4px",
        padding: "3px 7px",
        transform: `rotate(${STAMP_TILT}deg)`,
        background: `${color}0d`,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

export function AddToPlanDropdown({ spotId, tripId, memberId, rawDates, compact }) {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);

  const formatMMDD = (isoStr) => {
    if (!isoStr) return "";
    const parts = isoStr.split("-");
    if (parts.length === 3) {
      return `${parts[1]}/${parts[2]}`;
    }
    return isoStr;
  };

  const dateQueries = useQuery({
    queryKey: ["trip", tripId, "spot-day-plans", spotId, memberId],
    queryFn: async () => {
      const results = {};
      for (const d of rawDates) {
        try {
          const data = await apiGet(`/trips/${tripId}/day-plans/${memberId}/${d}`);
          const hasSpot = (data?.spots || []).some((s) => s.id === spotId);
          results[d] = hasSpot;
        } catch {
          results[d] = false;
        }
      }
      return results;
    },
    enabled: !!tripId && !!memberId && rawDates.length > 0,
  });

  const assignedMap = dateQueries.data || {};
  const assignedDates = Object.entries(assignedMap)
    .filter(([_, isAssigned]) => isAssigned)
    .map(([dateStr]) => dateStr);

  const mutation = useMutation({
    mutationFn: async ({ date, assign }) => {
      const current = await apiGet(`/trips/${tripId}/day-plans/${memberId}/${date}`).catch(() => ({ spots: [] }));
      let spots = current?.spots || [];
      if (assign) {
        if (!spots.some((s) => s.id === spotId)) {
          spots = [...spots, { id: spotId, rank: spots.length }];
        }
      } else {
        spots = spots.filter((s) => s.id !== spotId);
      }
      return apiPut(`/trips/${tripId}/day-plans/${memberId}/${date}`, {
        spots: spots.map((s, idx) => ({ spot_id: s.id, rank: idx })),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["trip", tripId, "spot-day-plans", spotId, memberId]);
      queryClient.invalidateQueries(["trip", tripId, "day-plan"]);
    },
  });

  const handleToggleDate = (dateStr) => {
    const isCurrentlyAssigned = assignedMap[dateStr];
    mutation.mutate({ date: dateStr, assign: !isCurrentlyAssigned });
  };

  const isAssignedAnywhere = assignedDates.length > 0;
  const primaryAssignedDate = assignedDates[0];

  const trigger = (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen((v) => !v);
      }}
      aria-label="Add to day plan"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        width: isAssignedAnywhere ? "auto" : (compact ? "26px" : "30px"),
        height: compact ? "26px" : "30px",
        padding: isAssignedAnywhere ? (compact ? "0 8px" : "0 10px") : 0,
        border: "1px solid " + (isAssignedAnywhere ? "#2B6E6E" : "#E4DDCE"),
        background: isAssignedAnywhere ? "#2B6E6E" : "#FFFFFF",
        color: isAssignedAnywhere ? "#FAF7F1" : "#1F2E35",
        borderRadius: isAssignedAnywhere ? "6px" : "50%",
        cursor: "pointer",
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: compact ? "11px" : "12px",
        fontWeight: 600,
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {isAssignedAnywhere ? (
        <span>{formatMMDD(primaryAssignedDate)}{assignedDates.length > 1 ? ` (+${assignedDates.length - 1})` : ""}</span>
      ) : (
        <Plus size={compact ? 14 : 16} strokeWidth={2.5} />
      )}
    </button>
  );

  return (
    <Dropdown
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      trigger={trigger}
      align="right"
      width="160px"
    >
      <div onClick={(e) => e.stopPropagation()}>
        <div style={{ fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: "10.5px", textTransform: "uppercase", color: "#8A8270", marginBottom: "8px", letterSpacing: "0.05em", padding: "0 2px" }}>
          Add to Day Plan
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {rawDates.map((dateStr) => {
            const checked = !!assignedMap[dateStr];
            return (
              <div
                key={dateStr}
                onClick={() => handleToggleDate(dateStr)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "6px 8px",
                  borderRadius: "6px",
                  background: checked ? "rgba(43, 110, 110, 0.08)" : "transparent",
                  cursor: "pointer",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "12.5px",
                  color: checked ? "#2B6E6E" : "#1F2E35",
                  fontWeight: checked ? 600 : 400,
                }}
              >
                <span>{formatMMDD(dateStr)}</span>
                {checked && <Check size={14} strokeWidth={2.5} />}
              </div>
            );
          })}
        </div>
      </div>
    </Dropdown>
  );
}

export default function MapView({ trip, spots = [] }) {
  const tripId = trip?.id;
  const members = trip?.members || [];
  const memberId = members[0]?.id || 1;
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const markersRef = useRef([]);

  const [activeCategories, setActiveCategories] = useState([]);
  
  const categoriesQuery = useQuery({
    queryKey: ["trip", tripId, "categories"],
    queryFn: () => apiGet(`/trips/${tripId}/categories`),
    enabled: !!tripId,
  });

  const tripCategories = categoriesQuery.data || [];
  
  const categoryColors = useMemo(() => {
    const map = {};
    tripCategories.forEach((cat) => {
      map[cat.name] = cat.color || "#2B6E6E";
    });
    return map;
  }, [tripCategories]);

  const allCategories = useMemo(() => {
    return tripCategories.map((cat) => cat.name);
  }, [tripCategories]);

  const tripDatesInfo = useMemo(() => {
    if (!trip?.start_date || !trip?.end_date) {
      return null;
    }
    const rawDates = [];
    const formattedDates = [];
    const curr = new Date(trip.start_date);
    const end = new Date(trip.end_date);
    while (curr <= end) {
      const iso = curr.toISOString().split("T")[0];
      rawDates.push(iso);
      const formatted = curr.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      formattedDates.push(formatted);
      curr.setDate(curr.getDate() + 1);
    }
    return { rawDates, formattedDates };
  }, [trip]);

  if (!tripDatesInfo) {
    return (
      <div style={{ padding: "40px 24px", color: "var(--color-rust)", fontFamily: "var(--font-inter), sans-serif", fontSize: "14px", textAlign: "center" }}>
        Unexpected error: Trip start and end dates are required.
      </div>
    );
  }

  const { rawDates, formattedDates } = tripDatesInfo;
  const [selectedDate, setSelectedDate] = useState(formattedDates[0] || "Jun 10");

  const accommodationsQuery = useQuery({
    queryKey: ["trip", tripId, "accommodations"],
    queryFn: () => apiGet(`/trips/${tripId}/accommodations`),
    enabled: !!tripId,
  });
  const accommodations = accommodationsQuery.data || trip?.accommodations || [];

  useEffect(() => {
    if (formattedDates.length > 0 && !formattedDates.includes(selectedDate)) {
      setSelectedDate(formattedDates[0]);
    }
  }, [formattedDates, selectedDate]);

  const [hoveredSpotId, setHoveredSpotId] = useState(null);
  const [selectedSpotId, setSelectedSpotId] = useState(null);
  const [selectedAccommodationId, setSelectedAccommodationId] = useState(null);
  const [activeAccommodationId, setActiveAccommodationId] = useState(null);

  // Initialize Google Maps
  useEffect(() => {
    if (window.google && window.google.maps) {
      initMap();
      return;
    }

    const existingScript = document.getElementById("google-maps-script");
    if (existingScript) {
      existingScript.addEventListener("load", initMap);
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    script.onerror = () => {
      console.error("Failed to load Google Maps script.");
    };
    document.head.appendChild(script);

    return () => {
      if (script) {
        script.removeEventListener("load", initMap);
      }
    };
  }, []);

  const initMap = () => {
    if (!mapRef.current) return;

    let center = { lat: 35.6762, lng: 139.6503 }; // Tokyo default
    if (spots && spots.length > 0 && spots[0].latitude && spots[0].longitude) {
      center = { lat: spots[0].latitude, lng: spots[0].longitude };
    }

    const mapInstance = new window.google.maps.Map(mapRef.current, {
      center,
      zoom: 13,
      disableDefaultUI: false,
    });

    setMap(mapInstance);
  };

  const formattedSpots = useMemo(() => {
    return spots.map((s) => {
      const categories = s.categories ? s.categories.map(c => c.name) : ["Landmarks"];
      return {
        ...s,
        categories,
      };
    });
  }, [spots]);

  const formattedAccommodations = useMemo(() => {
    return accommodations.map((a) => {
      // Build date range array between start_date and end_date
      const dRange = [];
      if (a.start_date && a.end_date) {
        const curr = new Date(a.start_date);
        const end = new Date(a.end_date);
        while (curr <= end) {
          dRange.push(curr.toLocaleDateString("en-US", { month: "short", day: "numeric" }));
          curr.setDate(curr.getDate() + 1);
        }
      }
      return {
        ...a,
        dateRange: dRange.length > 0 ? dRange : formattedDates,
      };
    });
  }, [accommodations, formattedDates]);

  const toggleCategory = (cat) => {
    setActiveCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const visibleSpots = useMemo(() => {
    return formattedSpots.filter(
      (s) => activeCategories.length === 0 || s.categories.some((c) => activeCategories.includes(c))
    );
  }, [formattedSpots, activeCategories]);

  const relevantAccommodations = formattedAccommodations.filter((a) =>
    a.dateRange.includes(selectedDate)
  );
  const hasOverlap = relevantAccommodations.length > 1;

  const effectiveActiveId = hasOverlap
    ? (activeAccommodationId || relevantAccommodations[0]?.id)
    : relevantAccommodations[0]?.id ?? null;

  const selectedSpot = selectedSpotId ? formattedSpots.find((s) => s.id === selectedSpotId) : null;

  // Render custom colored circle dot markers on Google Map instance
  useEffect(() => {
    if (!map || !window.google || !window.google.maps) return;

    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];

    const bounds = new window.google.maps.LatLngBounds();
    let hasPoints = false;

    visibleSpots.forEach((spot) => {
      if (!spot.latitude || !spot.longitude) return;
      hasPoints = true;
      const pos = { lat: spot.latitude, lng: spot.longitude };
      bounds.extend(pos);

      const isSelected = spot.id === selectedSpotId;
      const isHovered = spot.id === hoveredSpotId;
      const primaryCat = spot.categories[0] || "Landmarks";
      const color = categoryColors[primaryCat] || "#2B6E6E";

      const scale = isSelected || isHovered ? 1.4 : 1.0;

      // Custom SVG dot marker
      const svgIcon = {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: color,
        fillOpacity: 1,
        strokeColor: "#FFFFFF",
        strokeWeight: 2.5,
        scale: 8 * scale,
      };

      const marker = new window.google.maps.Marker({
        position: pos,
        map,
        title: spot.name,
        icon: svgIcon,
        zIndex: isSelected || isHovered ? 100 : 1,
      });

      marker.addListener("click", () => {
        setSelectedSpotId(spot.id);
      });

      markersRef.current.push(marker);
    });

    // Render accommodation marker
    const activeAcc = relevantAccommodations.find((a) => a.id === effectiveActiveId);
    if (activeAcc && activeAcc.latitude && activeAcc.longitude) {
      hasPoints = true;
      const accPos = { lat: activeAcc.latitude, lng: activeAcc.longitude };
      bounds.extend(accPos);

      const isAccSelected = activeAcc.id === selectedAccommodationId;

      // SVG path matching Home icon from mockup
      const homeSvgPath = "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z";
      const accIcon = {
        path: homeSvgPath,
        fillColor: isAccSelected ? "#C98A2E" : "#1F2E35",
        fillOpacity: 1,
        strokeColor: "#FAF7F1",
        strokeWeight: 1.5,
        scale: 1.2,
        anchor: new window.google.maps.Point(12, 12),
      };

      const accMarker = new window.google.maps.Marker({
        position: accPos,
        map,
        title: `Accommodation: ${activeAcc.name}`,
        icon: accIcon,
        zIndex: 200,
      });

      accMarker.addListener("click", () => {
        setSelectedAccommodationId(activeAcc.id === selectedAccommodationId ? null : activeAcc.id);
        setSelectedSpotId(null);
      });

      markersRef.current.push(accMarker);
    }
    if (hasPoints) {
      map.fitBounds(bounds);
    }
  }, [map, visibleSpots, selectedSpotId, selectedAccommodationId, hoveredSpotId, categoryColors, relevantAccommodations, effectiveActiveId]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Category Filter Pills */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", background: "#FFFFFF", padding: "12px 16px", borderRadius: "10px", border: "1px solid var(--color-border)" }}>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: "11px", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginRight: "4px" }}>
            Filter:
          </span>
          {allCategories.map((cat) => {
            const isActive = activeCategories.includes(cat);
            const color = categoryColors[cat] || "#2B6E6E";
            return (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                style={{
                  border: `1.5px solid ${color}`,
                  background: isActive ? color : "#FFFFFF",
                  color: isActive ? "#FFFFFF" : color,
                  borderRadius: "8px",
                  padding: "6px 12px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "12.5px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {cat}
              </button>
            );
          })}
          {activeCategories.length > 0 && (
            <button
              onClick={() => setActiveCategories([])}
              style={{ border: "none", background: "none", color: "var(--color-muted)", fontFamily: "var(--font-inter), sans-serif", fontSize: "12px", cursor: "pointer", textDecoration: "underline", marginLeft: "4px" }}
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Map and Side List Layout */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {/* Map Container */}
        <div style={{ flex: 1, minWidth: "300px", position: "relative" }}>
          <div
            ref={mapRef}
            style={{
              width: "100%",
              height: "480px",
              borderRadius: "14px",
              border: "1px solid var(--color-border)",
              background: "#F4EFE6",
            }}
          />

          {/* Accommodation overlay — anchored to the map top-right */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              zIndex: 6,
              background: "#FAF7F1",
              border: "1px solid #E4DDCE",
              borderRadius: "10px",
              padding: "10px 12px",
              boxShadow: "0 2px 8px rgba(31,46,53,0.12)",
              maxWidth: "220px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "10px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "#8A8270",
                marginBottom: "6px",
              }}
            >
              <Home size={11} strokeWidth={2} />
              Accommodation
            </div>
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{
                width: "100%",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "12.5px",
                color: "#1F2E35",
                border: "1px solid #E4DDCE",
                borderRadius: "6px",
                padding: "5px 7px",
                marginBottom: "8px",
                background: "#FFFFFF",
              }}
            >
              {formattedDates.map((date, idx) => (
                <option key={rawDates[idx]} value={date}>
                  {date}
                </option>
              ))}
            </select>

            {relevantAccommodations.length === 0 && (
              <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "12px", color: "#A99F8B" }}>
                No Accommodation set for {selectedDate}.
              </div>
            )}

            {!hasOverlap && relevantAccommodations.length === 1 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "12.5px",
                  fontWeight: 500,
                  color: "#1F2E35",
                }}
              >
                <Home size={12} strokeWidth={2} />
                {relevantAccommodations[0].name}
              </div>
            )}

            {hasOverlap && (
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "11px",
                    color: "#8A6017",
                    marginBottom: "5px",
                  }}
                >
                  2 overlap — set active:
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  {relevantAccommodations.map((a) => {
                    const active = a.id === effectiveActiveId;
                    return (
                      <button
                        key={a.id}
                        className="accom-chip"
                        onClick={() => setActiveAccommodationId(a.id)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          fontFamily: "var(--font-inter), sans-serif",
                          fontSize: "12px",
                          fontWeight: 500,
                          padding: "5px 9px",
                          borderRadius: "6px",
                          border: `1.5px solid ${active ? "#1F2E35" : "#E4DDCE"}`,
                          background: active ? "#1F2E35" : "#FFFFFF",
                          color: active ? "#FAF7F1" : "#1F2E35",
                          textAlign: "left",
                        }}
                      >
                        <Home size={11} strokeWidth={2} />
                        {a.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Floating Selected Accommodation Card Overlay */}
          {selectedAccommodationId && (() => {
            const acc = accommodations.find((a) => a.id === selectedAccommodationId);
            if (!acc) return null;
            return (
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  right: "16px",
                  background: "#FFFFFF",
                  border: "1.5px solid var(--color-ink)",
                  borderRadius: "12px",
                  padding: "16px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontFamily: "var(--font-fraunces), serif",
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "var(--color-ink)",
                        marginBottom: "2px",
                      }}
                    >
                      <Home size={16} color="var(--color-teal)" />
                      {acc.name}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontFamily: "var(--font-ibm-plex-mono), monospace",
                        fontSize: "10.5px",
                        color: "#8A8270",
                      }}
                    >
                      <MapPin size={10} strokeWidth={2} />
                      {acc.address || "Address not provided"}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedAccommodationId(null)}
                    style={{ border: "none", background: "none", cursor: "pointer", color: "#8A8270", padding: 0 }}
                  >
                    <X size={14} />
                  </button>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px", color: "var(--color-ink-muted)", marginTop: "4px" }}>
                  <span style={{ fontWeight: 500 }}>Stay Dates:</span> {acc.start_date} → {acc.end_date}
                  {acc.active && (
                    <span style={{ background: "rgba(43, 110, 110, 0.15)", color: "var(--color-teal)", padding: "2px 6px", borderRadius: "4px", fontWeight: 600, fontSize: "11px" }}>
                      Active
                    </span>
                  )}
                </div>
              </div>
            );
          })()}
          {selectedSpot && (
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                right: "16px",
                background: "#FFFFFF",
                border: "1.5px solid var(--color-ink)",
                borderRadius: "12px",
                padding: "16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                zIndex: 10,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "var(--color-ink)",
                      marginBottom: "2px",
                    }}
                  >
                    {selectedSpot.name}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      fontSize: "10.5px",
                      color: "#8A8270",
                    }}
                  >
                    <MapPin size={10} strokeWidth={2} />
                    {selectedSpot.address}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSpotId(null)}
                  style={{ border: "none", background: "none", cursor: "pointer", color: "#8A8270", padding: 0 }}
                >
                  <X size={14} />
                </button>
              </div>

              <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                {selectedSpot.categories.map((c) => (
                  <StampBadge key={c} label={c} categoryColors={categoryColors} />
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: "4px" }}>
                <AddToPlanDropdown
                  spotId={selectedSpot.id}
                  tripId={tripId}
                  memberId={memberId}
                  rawDates={rawDates}
                />
              </div>
            </div>
          )}
        </div>

        {/* Side list */}
        <div style={{ flex: "0 0 280px", minWidth: "240px" }}>
          <div
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "11px",
              color: "#A99F8B",
              marginBottom: "8px",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            {visibleSpots.length} Spots shown
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", maxHeight: "480px", overflowY: "auto" }}>
            {visibleSpots.map((spot) => {
              const isSelected = spot.id === selectedSpotId;
              return (
                <div
                  key={spot.id}
                  className="spot-list-row"
                  tabIndex={0}
                  onMouseEnter={() => setHoveredSpotId(spot.id)}
                  onMouseLeave={() => setHoveredSpotId(null)}
                  onClick={() => {
                    setSelectedSpotId(spot.id === selectedSpotId ? null : spot.id);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#FFFFFF",
                    border: `1.5px solid ${isSelected ? "#C98A2E" : "#E4DDCE"}`,
                    borderRadius: "8px",
                    padding: "8px 10px",
                  }}
                >
                  <span
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      background: categoryColors[spot.categories[0]] || "#2B6E6E",
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ minWidth: "0", flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 500,
                        fontSize: "13px",
                        color: "#1F2E35",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {spot.name}
                    </div>
                  </div>
                  <div onClick={(e) => e.stopPropagation()}>
                    <AddToPlanDropdown
                      spotId={spot.id}
                      tripId={tripId}
                      memberId={memberId}
                      rawDates={rawDates}
                      compact
                    />
                  </div>
                </div>
              );
            })}
            {visibleSpots.length === 0 && (
              <div
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "12.5px",
                  color: "#A99F8B",
                  padding: "10px 4px",
                }}
              >
                No spots match current filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
