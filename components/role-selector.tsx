"use client"

import { useState } from "react"

const ROLES = [
  { key: "community", label: "Community Member" },
  { key: "ngo", label: "NGO Volunteer" },
  { key: "authority", label: "Authority" },
  { key: "researcher", label: "Researcher" },
]

export type RoleKey = (typeof ROLES)[number]["key"]

export function RoleSelector({
  value,
  onChange,
}: {
  value?: RoleKey
  onChange: (role: RoleKey) => void
}) {
  const [selected, setSelected] = useState<RoleKey>(value || "community")

  function handleSelect(role: RoleKey) {
    setSelected(role)
    onChange(role)
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {ROLES.map((r) => {
        const isActive = selected === r.key
        return (
          <button
            key={r.key}
            type="button"
            className={`rounded-md border px-3 py-2 text-sm text-left transition
              ${isActive ? "border-green-600 bg-green-50 text-green-700" : "border-gray-200 hover:bg-gray-50"}`}
            onClick={() => handleSelect(r.key as RoleKey)}
            aria-pressed={isActive}
          >
            {r.label}
          </button>
        )
      })}
    </div>
  )
}
