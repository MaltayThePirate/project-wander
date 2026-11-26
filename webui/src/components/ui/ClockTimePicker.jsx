"use client";

import { useState, useRef, useEffect } from "react";

function parseTime24(value) {
  if (!value || !value.includes(":")) {
    return { hour24: 12, minute: 0 };
  }
  const [hStr, mStr] = value.split(":");
  const h = parseInt(hStr, 10);
  const m = parseInt(mStr, 10);
  return {
    hour24: isNaN(h) ? 12 : Math.max(0, Math.min(23, h)),
    minute: isNaN(m) ? 0 : Math.max(0, Math.min(59, m)),
  };
}

function formatDisplay(hour24, minute) {
  const period = hour24 >= 12 ? "PM" : "AM";
  const h12 = hour24 % 12 || 12;
  return `${h12}:${String(minute).padStart(2, "0")} ${period}`;
}

function to24HourString(hour24, minute) {
  return `${String(hour24).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

export default function ClockTimePicker({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("hour"); // "hour" | "minute"
  const containerRef = useRef(null);

  const { hour24, minute } = parseTime24(value);
  const isPM = hour24 >= 12;
  const hour12 = hour24 % 12 || 12;

  useEffect(() => {
    if (!open) return;
    const handleOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setMode("hour");
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  const setHour12 = (h12) => {
    const nextH24 = isPM ? (h12 === 12 ? 12 : h12 + 12) : h12 === 12 ? 0 : h12;
    onChange(to24HourString(nextH24, minute));
    setMode("minute");
  };

  const setMinuteVal = (m) => {
    onChange(to24HourString(hour24, m));
    setOpen(false);
    setMode("hour");
  };

  const togglePeriod = (pm) => {
    if (pm === isPM) return;
    const nextH24 = pm ? (hour24 + 12) % 24 : (hour24 + 12) % 24;
    onChange(to24HourString(nextH24, minute));
  };

  const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  const items = mode === "hour" ? hours : minutes;

  const selectedIndex =
    mode === "hour"
      ? hour12 % 12
      : Math.round(minute / 5) % 12;
  const handAngleDeg = selectedIndex * 30;

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <button
        type="button"
        onClick={() => {
          setOpen((v) => !v);
          setMode("hour");
        }}
        style={{
          width: "100%",
          border: "1px solid var(--color-border)",
          borderRadius: "6px",
          padding: "7px 10px",
          fontSize: "13px",
          background: "#FFFFFF",
          color: "var(--color-ink)",
          textAlign: "left",
          cursor: "pointer",
          fontFamily: "var(--font-inter), sans-serif",
        }}
      >
        {value ? formatDisplay(hour24, minute) : "Select time"}
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            zIndex: 50,
            background: "#FFFFFF",
            border: "1px solid var(--color-ink)",
            borderRadius: "10px",
            padding: "12px",
            boxShadow: "0 8px 24px rgba(31, 46, 53, 0.14)",
            width: "220px",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          {/* Header: HH : MM + AM/PM */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "2px", fontSize: "20px", fontWeight: 600 }}>
              <button
                type="button"
                onClick={() => setMode("hour")}
                style={{
                  background: mode === "hour" ? "var(--color-parchment)" : "transparent",
                  color: mode === "hour" ? "var(--color-teal)" : "var(--color-ink)",
                  border: "none",
                  borderRadius: "4px",
                  padding: "2px 6px",
                  fontSize: "20px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {String(hour12).padStart(2, "0")}
              </button>
              <span>:</span>
              <button
                type="button"
                onClick={() => setMode("minute")}
                style={{
                  background: mode === "minute" ? "var(--color-parchment)" : "transparent",
                  color: mode === "minute" ? "var(--color-teal)" : "var(--color-ink)",
                  border: "none",
                  borderRadius: "4px",
                  padding: "2px 6px",
                  fontSize: "20px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {String(minute).padStart(2, "0")}
              </button>
            </div>

            <div
              style={{
                display: "flex",
                border: "1px solid var(--color-border)",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              <button
                type="button"
                onClick={() => togglePeriod(false)}
                style={{
                  border: "none",
                  padding: "4px 7px",
                  fontSize: "11px",
                  fontWeight: 600,
                  cursor: "pointer",
                  background: !isPM ? "var(--color-ink)" : "#FFFFFF",
                  color: !isPM ? "var(--color-parchment)" : "var(--color-muted)",
                }}
              >
                AM
              </button>
              <button
                type="button"
                onClick={() => togglePeriod(true)}
                style={{
                  border: "none",
                  padding: "4px 7px",
                  fontSize: "11px",
                  fontWeight: 600,
                  cursor: "pointer",
                  background: isPM ? "var(--color-ink)" : "#FFFFFF",
                  color: isPM ? "var(--color-parchment)" : "var(--color-muted)",
                }}
              >
                PM
              </button>
            </div>
          </div>

          {/* Analog Clock Face */}
          <div
            style={{
              position: "relative",
              width: "180px",
              height: "180px",
              margin: "0 auto",
              borderRadius: "50%",
              background: "var(--color-parchment)",
            }}
          >
            {/* Center dot */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--color-teal)",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
              }}
            />

            {/* Clock hand */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "2px",
                height: "66px",
                background: "var(--color-teal)",
                transformOrigin: "bottom center",
                transform: `translate(-50%, -100%) rotate(${handAngleDeg}deg)`,
                transition: "transform 120ms ease",
                zIndex: 1,
              }}
            />

            {/* Clickable numbers */}
            {items.map((val, idx) => {
              const angleRad = ((idx * 30 - 90) * Math.PI) / 180;
              const radius = 68;
              const x = 90 + radius * Math.cos(angleRad);
              const y = 90 + radius * Math.sin(angleRad);
              const isSelected =
                mode === "hour" ? val === hour12 : val === Math.round(minute / 5) * 5 % 60;

              return (
                <button
                  key={val}
                  type="button"
                  onClick={() => (mode === "hour" ? setHour12(val) : setMinuteVal(val))}
                  style={{
                    position: "absolute",
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: "translate(-50%, -50%)",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    border: "none",
                    background: isSelected ? "var(--color-teal)" : "transparent",
                    color: isSelected ? "#FFFFFF" : "var(--color-ink)",
                    fontSize: "12px",
                    fontWeight: isSelected ? 600 : 500,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 3,
                  }}
                >
                  {mode === "minute" ? String(val).padStart(2, "0") : val}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
