"use client";

import { useState } from "react";
import { Info, Mail, MapPin } from "lucide-react";

const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
`;

const APP_NAME = "Waypost";

function GoogleMark() {
  return (
    <svg width="17" height="17" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.15-3.1-.4-4.6H24v9h11.8c-.5 2.7-2.1 5-4.4 6.6v5.4h7.1c4.2-3.9 6.6-9.6 6.6-16.4z" />
      <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-7.1-5.4c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.5-3.8-12.2-9H4.5v5.6C8.1 41 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.8 28.4c-.4-1.3-.7-2.7-.7-4.1s.3-2.8.7-4.1v-5.6H4.5C3 17.6 2 20.7 2 24s1 6.4 2.5 9.3z" />
      <path fill="#EA4335" d="M24 10.7c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.2 29.9 2 24 2 15.4 2 8.1 7 4.5 14.7l7.3 5.6c1.7-5.2 6.5-9 12.2-9z" />
    </svg>
  );
}

function AppleMark() {
  return (
    <svg width="15" height="17" viewBox="0 0 384 512" aria-hidden="true">
      <path
        fill="#1F2E35"
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 8 184.8 8 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-65.7-90-65.7-91.9zM255.7 65.4c26.9-32 24.5-61.2 23.7-71.7-23.8 1.4-51.3 16.4-67 34.9-17.3 19.8-27.5 44.3-25.4 71.6 25.9 2 49.5-11.4 68.7-34.8z"
      />
    </svg>
  );
}

function ProviderButton({ icon, label, onClick, loading, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className="provider-btn"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        width: "100%",
        border: "1.5px solid #E4DDCE",
        background: "#FFFFFF",
        color: "#1F2E35",
        borderRadius: "8px",
        padding: "12px 16px",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        fontSize: "14px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.55 : 1,
        transition: "border-color 0.12s ease, background 0.12s ease",
      }}
    >
      <span style={{ display: "flex", flexShrink: 0, width: "17px", justifyContent: "center" }}>
        {icon}
      </span>
      {loading ? "Signing in…" : label}
    </button>
  );
}

export default function LoginPage() {
  const [loadingProvider, setLoadingProvider] = useState(null);
  const [emailOpen, setEmailOpen] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const handleProviderClick = (provider) => {
    setLoadingProvider(provider);
    window.location.href = `${apiUrl}/users/auth/${provider}`;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAF7F1",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
      }}
    >
      <style>{FONT_IMPORT}</style>
      <style>{`
        .provider-btn:hover:not(:disabled) { border-color: #C98A2E !important; }
        .provider-btn:focus-visible, .email-toggle:focus-visible {
          outline: 2px solid #C98A2E;
          outline-offset: 2px;
        }
        .email-toggle:hover { color: #1F2E35 !important; }
      `}</style>

      <div
        style={{
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "7px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "6px",
              background: "#1F2E35",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <MapPin size={14} strokeWidth={2.25} color="#C98A2E" />
          </div>
          <span
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
              fontSize: "18px",
              color: "#1F2E35",
              letterSpacing: "-0.01em",
            }}
          >
            {APP_NAME}
          </span>
        </div>

        {/* Card */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E4DDCE",
            borderRadius: "14px",
            padding: "36px 32px",
            boxShadow: "0 2px 10px rgba(31,46,53,0.06)",
          }}
        >
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#C98A2E",
              marginBottom: "6px",
              textAlign: "center",
            }}
          >
            Sign In
          </div>
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
              fontSize: "24px",
              color: "#1F2E35",
              margin: "0 0 8px",
              textAlign: "center",
            }}
          >
            Where to next?
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              color: "#8A8270",
              margin: "0 0 26px",
              lineHeight: 1.5,
              textAlign: "center",
            }}
          >
            Sign in to plan Trips, add Spots, and see what your fellow
            Travelers have lined up.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "18px" }}>
            <ProviderButton
              icon={<GoogleMark />}
              label="Continue with Google"
              loading={loadingProvider === "google_oauth2"}
              disabled={loadingProvider && loadingProvider !== "google_oauth2"}
              onClick={() => handleProviderClick("google_oauth2")}
            />
            <ProviderButton
              icon={<AppleMark />}
              label="Continue with Apple"
              loading={loadingProvider === "apple"}
              disabled={loadingProvider && loadingProvider !== "apple"}
              onClick={() => handleProviderClick("apple")}
            />
          </div>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "20px 0" }}>
            <div style={{ flex: 1, height: "1px", background: "#E4DDCE" }} />
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "10.5px",
                color: "#A99F8B",
              }}
            >
              or
            </span>
            <div style={{ flex: 1, height: "1px", background: "#E4DDCE" }} />
          </div>

          {/* Email path — reserved for the follow-up password-login pass */}
          {!emailOpen ? (
            <button
              onClick={() => setEmailOpen(true)}
              className="email-toggle"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "100%",
                border: "none",
                background: "none",
                color: "#8A8270",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                padding: "6px",
              }}
            >
              <Mail size={14} strokeWidth={2} />
              Sign in with email instead
            </button>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                background: "#C98A2E0d",
                border: "1px solid #C98A2E33",
                borderRadius: "8px",
                padding: "10px 12px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "12.5px",
                color: "#8A6017",
              }}
            >
              <Info size={14} strokeWidth={2} style={{ flexShrink: 0, marginTop: "1px" }} />
              Email sign-in isn't set up yet — for now, use Google or Apple above.
            </div>
          )}
        </div>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            color: "#A99F8B",
            textAlign: "center",
            marginTop: "20px",
            lineHeight: 1.5,
          }}
        >
          Joining an existing Trip? Open your invite link after signing in.
        </p>
      </div>
    </div>
  );
}
