"use client"

import { Phone } from "lucide-react"

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+15516553051"
      aria-label="Call Tracckar"
      className="fixed bottom-6 right-6 z-[500] flex items-center gap-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 select-none"
      style={{
        background: "var(--primary)",
        padding: "13px 20px",
        boxShadow: "0 8px 28px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <Phone size={17} className="text-white shrink-0" />
      <span className="text-white font-bold text-sm font-display hidden sm:block whitespace-nowrap">
        +1 (551) 655-3051
      </span>
    </a>
  )
}
