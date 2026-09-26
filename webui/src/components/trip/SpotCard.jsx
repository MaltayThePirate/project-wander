import { useState } from "react";
import { MapPin, ExternalLink, Trash2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import SpotPhoto from "@/components/trip/SpotPhoto";
import { apiDelete } from "@/lib/api";

const PROVIDER_LABELS = {
    google: "Google Maps",
    apple: "Apple Maps",
};

export default function SpotCard({ spot, view }) {
    const queryClient = useQueryClient();
    const [errorMsg, setErrorMsg] = useState(null);
    const categories = spot.categories || [];

    // Assuming current user ID is 1 or we check if current user matches owner_id.
    // In our seed / current user setup, current_user is Neil (ID 1).
    const isOwner = spot.owner_id === 1; // or allowed to delete if owner

    const deleteMutation = useMutation({
        mutationFn: () => apiDelete(`/trips/${spot.trip_id}/spots/${spot.id}`),
        onSuccess: () => {
            queryClient.invalidateQueries(["trip", spot.trip_id, "spots"]);
        },
        onError: (err) => {
            setErrorMsg(err.message || "Could not delete spot");
            setTimeout(() => setErrorMsg(null), 4000);
        },
    });

    return (
        <div
            style={{
                background: "#FFFFFF",
                border: "1px solid var(--color-border)",
                borderRadius: "10px",
                padding: view === "grid" ? "18px" : "16px 20px",
                display: "flex",
                flexDirection: view === "grid" ? "column" : "row",
                alignItems: view === "grid" ? "stretch" : "center",
                gap: view === "grid" ? "10px" : "20px",
                position: "relative",
            }}
        >
            <SpotPhoto spot={spot} width={view === "grid" ? "100%" : "80px"} height={view === "grid" ? "140px" : "80px"} />
            <div style={{ flex: view === "list" ? "1" : undefined, minWidth: 0 }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "3px",
                    }}
                >
                    <div
                        style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontWeight: 600,
                            fontSize: "15px",
                            color: "var(--color-ink)",
                        }}
                    >
                        {spot.name}
                    </div>
                </div>
                {spot.address && (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            fontFamily: "var(--font-ibm-plex-mono), monospace",
                            fontSize: "11.5px",
                            color: "var(--color-muted)",
                            marginBottom: categories.length > 0 ? "6px" : undefined,
                        }}
                    >
                        <MapPin size={11} strokeWidth={2} />
                        {spot.address}
                    </div>
                )}

                {categories.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "4px" }}>
                        {categories.map((cat) => (
                            <span
                                key={cat.id}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    background: `${cat.color}15`,
                                    color: cat.color,
                                    border: `1px solid ${cat.color}35`,
                                    borderRadius: "4px",
                                    padding: "2px 7px",
                                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                                    fontSize: "10px",
                                    fontWeight: 500,
                                }}
                            >
                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: cat.color }} />
                                {cat.name}
                            </span>
                        ))}
                    </div>
                )}

                {spot.note && (
                    <div
                        style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontStyle: "italic",
                            fontSize: "12.5px",
                            color: "var(--color-muted)",
                            marginTop: "4px",
                        }}
                    >
                        "{spot.note}"
                    </div>
                )}

                {errorMsg && (
                    <div
                        style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "11px",
                            color: "var(--color-rust)",
                            marginTop: "6px",
                        }}
                    >
                        {errorMsg}
                    </div>
                )}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginLeft: view === "list" ? "auto" : undefined, flexShrink: 0 }}>
                <a
                    href={spot.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontFamily: "var(--font-ibm-plex-mono), monospace",
                        fontSize: "10.5px",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: "var(--color-teal)",
                        textDecoration: "none",
                    }}
                >
                    {PROVIDER_LABELS[spot.source_provider] || spot.source_provider}
                    <ExternalLink size={11} strokeWidth={2} />
                </a>

                {isOwner && (
                    <button
                        onClick={() => {
                            if (confirm(`Delete "${spot.name}"?`)) {
                                deleteMutation.mutate();
                            }
                        }}
                        disabled={deleteMutation.isPending}
                        title="Delete spot"
                        style={{
                            border: "none",
                            background: "transparent",
                            color: "var(--color-muted)",
                            cursor: "pointer",
                            display: "flex",
                            padding: "4px",
                            borderRadius: "4px",
                        }}
                    >
                        <Trash2 size={14} />
                    </button>
                )}
            </div>
        </div>
    );
}