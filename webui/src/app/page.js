import Link from "next/link";
import { cookies } from "next/headers";
import { Plus, MapPin, Calendar, ArrowRight } from "lucide-react";
import { formatShortDate } from "@/lib/format";

async function getTrips() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  const apiBase = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
  
  try {
    const res = await fetch(`${apiBase}/trips`, {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
  } catch (e) {
    return [];
  }
}

export default async function MyTripsPage() {
  const trips = await getTrips();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAF7F1",
        fontFamily: "'Inter', sans-serif",
        padding: "48px 24px",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "36px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "#1F2E35",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MapPin size={18} strokeWidth={2.25} color="#C98A2E" />
            </div>
            <span
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 600,
                fontSize: "22px",
                color: "#1F2E35",
                letterSpacing: "-0.01em",
              }}
            >
              Waypost
            </span>
          </div>

          <Link
            href="/trips/new"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              background: "#1F2E35",
              color: "#FFFFFF",
              borderRadius: "8px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              boxShadow: "0 2px 6px rgba(31,46,53,0.1)",
            }}
          >
            <Plus size={16} strokeWidth={2.5} />
            New Trip
          </Link>
        </div>

        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 600,
            fontSize: "28px",
            color: "#1F2E35",
            marginBottom: "8px",
          }}
        >
          Your Trips
        </h1>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            color: "#8A8270",
            marginBottom: "32px",
          }}
        >
          Plan and explore your upcoming travel itineraries.
        </p>

        {trips.length === 0 ? (
          <div
            style={{
              background: "#FFFFFF",
              border: "1px dashed #E4DDCE",
              borderRadius: "14px",
              padding: "60px 24px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#FAF7F1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                color: "#C98A2E",
              }}
            >
              <MapPin size={24} strokeWidth={2} />
            </div>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "18px",
                fontWeight: 600,
                color: "#1F2E35",
                marginBottom: "8px",
              }}
            >
              No trips yet
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13.5px",
                color: "#8A8270",
                maxWidth: "320px",
                margin: "0 auto 24px",
                lineHeight: 1.5,
              }}
            >
              You haven't created a Trip yet. Get started by creating your first travel plan.
            </p>
            <Link
              href="/trips/new"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                background: "#C98A2E",
                color: "#FFFFFF",
                borderRadius: "8px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              <Plus size={16} strokeWidth={2.5} />
              Create your first trip
            </Link>
          </div>
        ) : (
          <div style={{ display: "grid", gap: "16px" }}>
            {trips.map((trip) => (
              <Link
                key={trip.id}
                href={`/trips/${trip.id}`}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#FFFFFF",
                  border: "1px solid #E4DDCE",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  textDecoration: "none",
                  boxShadow: "0 1px 4px rgba(31,46,53,0.04)",
                  transition: "border-color 0.12s ease, transform 0.12s ease",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "#1F2E35",
                      marginBottom: "6px",
                    }}
                  >
                    {trip.name}
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "12px",
                      color: "#8A8270",
                    }}
                  >
                    <Calendar size={13} strokeWidth={2} />
                    <span>
                      {formatShortDate(trip.start_date)} – {formatShortDate(trip.end_date)}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#FAF7F1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1F2E35",
                  }}
                >
                  <ArrowRight size={16} strokeWidth={2} />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
