"use client";

import { useEffect, useRef } from "react";

export default function Dropdown({ isOpen, onClose, trigger, children, align = "right", width = "220px" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div ref={containerRef} style={{ position: "relative", display: "inline-block" }}>
      {trigger}

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: align === "center" ? "50%" : align === "left" ? 0 : undefined,
            right: align === "right" ? 0 : undefined,
            transform: align === "center" ? "translateX(-50%)" : undefined,
            background: "#FFFFFF",
            border: "1px solid var(--color-border)",
            borderRadius: "10px",
            boxShadow: "0 4px 14px rgba(31,46,53,0.18)",
            padding: "6px",
            width: width,
            zIndex: 30,
            textAlign: "left",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
