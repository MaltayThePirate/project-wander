"use client";

import { MapPin, Plane, Home, Plus, Users, Tag } from "lucide-react";
import Dropdown from "@/components/ui/Dropdown";

const ADD_MENU_ITEMS = [
  { key: "spot", label: "Add a Spot", icon: MapPin },
  { key: "category", label: "Add Category", icon: Tag },
  { key: "flight", label: "Flight Details", icon: Plane },
  { key: "accommodation", label: "Add Accommodation", icon: Home },
  { key: "attendees", label: "Add Attendee(s)", icon: Users },
];

export default function AddMenuButton({ isOpen, onToggleOpen, onSelect, size = "default" }) {
  const isLarge = size === "large";

  const trigger = (
    <button
      onClick={onToggleOpen}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        background: "var(--color-ink)",
        color: "var(--color-parchment)",
        border: "none",
        borderRadius: "8px",
        padding: isLarge ? "12px 22px" : "10px 16px",
        fontFamily: "var(--font-inter), sans-serif",
        fontWeight: 500,
        fontSize: isLarge ? "14.5px" : "13.5px",
        cursor: "pointer",
      }}
    >
      <Plus size={isLarge ? 16 : 15} strokeWidth={2.5} />
      Add
    </button>
  );

  return (
    <Dropdown
      isOpen={isOpen}
      onClose={() => {
        if (isOpen) onToggleOpen();
      }}
      trigger={trigger}
      align={isLarge ? "center" : "right"}
    >
      {ADD_MENU_ITEMS.map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          onClick={() => {
            onToggleOpen();
            onSelect(key, label);
          }}
          className="add-menu-item"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "9px",
            width: "100%",
            border: "none",
            background: "none",
            color: "var(--color-ink)",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "13px",
            padding: "9px 10px",
            borderRadius: "7px",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          <Icon size={15} strokeWidth={2} color="var(--color-teal)" />
          {label}
        </button>
      ))}
    </Dropdown>
  );
}
