"use client";

import { Trash2 } from "lucide-react";

export default function DeleteButton({ onClick, title = "Delete", size = 15, style = {} }) {
  return (
    <button
      onClick={onClick}
      title={title}
      aria-label={title}
      style={{
        border: "none",
        background: "transparent",
        color: "var(--color-muted)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px",
        borderRadius: "6px",
        transition: "color 0.15s ease",
        ...style,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-rust)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
    >
      <Trash2 size={size} strokeWidth={2} />
    </button>
  );
}
