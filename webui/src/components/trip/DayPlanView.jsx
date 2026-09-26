import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, Trash2 } from "lucide-react";
import { apiGet, apiPost } from "@/lib/api";

export default function DayPlanView({ trip }) {
  const queryClient = useQueryClient();
  const members = trip.members || [];
  const [selectedMemberId, setSelectedMemberId] = useState(members[0]?.id || 1);
  const [selectedDate, setSelectedDate] = useState(trip.start_date);
  const [showSpotPicker, setShowSpotPicker] = useState(false);

  const spotsQuery = useQuery({
    queryKey: ["trip", trip.id, "spots"],
    queryFn: () => apiGet(`/trips/${trip.id}/spots`),
  });

  const dayPlanQuery = useQuery({
    queryKey: ["trip", trip.id, "day-plan", selectedMemberId, selectedDate],
    queryFn: () => apiGet(`/trips/${trip.id}/day-plans/${selectedMemberId}/${selectedDate}`),
    enabled: !!selectedMemberId && !!selectedDate,
  });

  const assignedSpots = dayPlanQuery.data?.spots || [];
  const masterSpots = spotsQuery.data || [];

  const saveMutation = useMutation({
    mutationFn: (newSpots) =>
      apiPost(`/trips/${trip.id}/day-plans/${selectedMemberId}/${selectedDate}`, {
        spots: newSpots.map((s, index) => ({ spot_id: s.id, rank: index })),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["trip", trip.id, "day-plan", selectedMemberId, selectedDate]);
    },
  });

  const handleAddSpot = (spot) => {
    if (assignedSpots.some((s) => s.id === spot.id)) return;
    const updated = [...assignedSpots, { ...spot, rank: assignedSpots.length }];
    saveMutation.mutate(updated);
    setShowSpotPicker(false);
  };

  const handleRemoveSpot = (spotId) => {
    const updated = assignedSpots.filter((s) => s.id !== spotId);
    saveMutation.mutate(updated);
  };

  const handleMove = (index, direction) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= assignedSpots.length) return;
    const updated = [...assignedSpots];
    const [moved] = updated.splice(index, 1);
    updated.splice(newIndex, 0, moved);
    saveMutation.mutate(updated);
  };

  const getDatesBetween = (start, end) => {
    const dates = [];
    let curr = new Date(start);
    const last = new Date(end);
    while (curr <= last) {
      dates.push(curr.toISOString().split("T")[0]);
      curr.setDate(curr.getDate() + 1);
    }
    return dates;
  };

  const tripDates = getDatesBetween(trip.start_date, trip.end_date);

  return (
    <div>
      <div style={{ display: "flex", gap: "16px", marginBottom: "24px", flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "4px" }}>
          {tripDates.map((dateStr) => {
            const isSelected = selectedDate === dateStr;
            return (
              <button
                key={dateStr}
                onClick={() => setSelectedDate(dateStr)}
                style={{
                  border: isSelected ? "1.5px solid var(--color-ink)" : "1px solid var(--color-border)",
                  background: isSelected ? "var(--color-ink)" : "#FFFFFF",
                  color: isSelected ? "var(--color-parchment)" : "var(--color-ink)",
                  borderRadius: "8px",
                  padding: "8px 14px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "13px",
                  fontWeight: isSelected ? 600 : 500,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {dateStr}
              </button>
            );
          })}
        </div>

        {members.length > 1 && (
          <div style={{ display: "flex", gap: "6px", marginLeft: "auto" }}>
            {members.map((m) => {
              const isSelected = selectedMemberId === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMemberId(m.id)}
                  style={{
                    border: isSelected ? "1.5px solid var(--color-rust)" : "1px solid var(--color-border)",
                    background: isSelected ? "rgba(184, 70, 47, 0.08)" : "#FFFFFF",
                    color: isSelected ? "var(--color-rust)" : "var(--color-ink)",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {m.name}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div style={{ background: "#FFFFFF", border: "1px solid var(--color-border)", borderRadius: "14px", padding: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "18px", fontWeight: 600, color: "var(--color-ink)", margin: "0 0 4px" }}>
              Day Plan for {selectedDate}
            </h3>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", color: "var(--color-muted)", margin: 0 }}>
              Reorder spots to set your visit sequence for the day.
            </p>
          </div>
          <button
            onClick={() => setShowSpotPicker(true)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "var(--color-ink)",
              color: "var(--color-parchment)",
              border: "none",
              borderRadius: "8px",
              padding: "9px 16px",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "13.5px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <Plus size={16} strokeWidth={2.5} />
            Assign Spot
          </button>
        </div>

        {assignedSpots.length === 0 ? (
          <div style={{ textAlign: "center", padding: "48px 24px", border: "1.5px dashed var(--color-border)", borderRadius: "10px", color: "var(--color-muted)", fontFamily: "var(--font-inter), sans-serif", fontSize: "13.5px" }}>
            No spots assigned to this day yet. Click "Assign Spot" to add from your master list.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {assignedSpots.map((spot, index) => (
              <div
                key={spot.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  background: "var(--color-parchment)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "15px", fontWeight: 700, color: "var(--color-muted)", width: "20px" }}>
                    {index + 1}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, fontSize: "14px", color: "var(--color-ink)" }}>
                      {spot.name}
                    </div>
                    {spot.address && (
                      <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "12px", color: "var(--color-muted)" }}>
                        {spot.address}
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <button
                    onClick={() => handleMove(index, -1)}
                    disabled={index === 0}
                    title="Move up"
                    style={{ border: "1px solid var(--color-border)", background: "#FFFFFF", borderRadius: "6px", padding: "6px 10px", cursor: index === 0 ? "not-allowed" : "pointer", fontSize: "12px" }}
                  >
                    ▲
                  </button>
                  <button
                    onClick={() => handleMove(index, 1)}
                    disabled={index === assignedSpots.length - 1}
                    title="Move down"
                    style={{ border: "1px solid var(--color-border)", background: "#FFFFFF", borderRadius: "6px", padding: "6px 10px", cursor: index === assignedSpots.length - 1 ? "not-allowed" : "pointer", fontSize: "12px" }}
                  >
                    ▼
                  </button>
                  <button
                    onClick={() => handleRemoveSpot(spot.id)}
                    title="Remove from day plan"
                    style={{ border: "none", background: "none", color: "var(--color-rust)", cursor: "pointer", padding: "6px", display: "flex" }}
                  >
                    <Trash2 size={16} strokeWidth={2} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showSpotPicker && (
        <div
          onClick={() => setShowSpotPicker(false)}
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
              padding: "24px",
              width: "100%",
              maxWidth: "460px",
              boxShadow: "0 12px 36px rgba(0,0,0,0.15)",
            }}
          >
            <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "18px", fontWeight: 600, color: "var(--color-ink)", margin: "0 0 14px" }}>
              Assign Spot to Day
            </h3>
            {masterSpots.length === 0 ? (
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13.5px", color: "var(--color-muted)" }}>
                No spots available in this trip master list yet. Add some spots first!
              </p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxHeight: "320px", overflowY: "auto" }}>
                {masterSpots.map((spot) => {
                  const isAssigned = assignedSpots.some((s) => s.id === spot.id);
                  return (
                    <div
                      key={spot.id}
                      onClick={() => !isAssigned && handleAddSpot(spot)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        border: "1px solid var(--color-border)",
                        borderRadius: "8px",
                        background: isAssigned ? "rgba(0,0,0,0.03)" : "#FFFFFF",
                        cursor: isAssigned ? "default" : "pointer",
                        opacity: isAssigned ? 0.6 : 1,
                      }}
                    >
                      <div>
                        <div style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, fontSize: "13.5px", color: "var(--color-ink)" }}>
                          {spot.name}
                        </div>
                        {spot.address && (
                          <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "11.5px", color: "var(--color-muted)" }}>
                            {spot.address}
                          </div>
                        )}
                      </div>
                      {isAssigned && (
                        <span style={{ fontSize: "12px", fontFamily: "var(--font-inter), sans-serif", color: "var(--color-muted)", fontWeight: 500 }}>
                          Assigned
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
            <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => setShowSpotPicker(false)}
                style={{
                  border: "1px solid var(--color-border)",
                  background: "#FFFFFF",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
