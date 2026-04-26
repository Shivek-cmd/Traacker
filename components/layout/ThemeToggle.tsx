"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  const toggle = () => {
    const next = !isDark
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
    setIsDark(next)
  }

  if (!mounted) return <div className="w-8 h-8" />

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
      style={{
        background: "color-mix(in srgb, var(--primary) 10%, transparent)",
        border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)",
        color: "var(--primary)",
      }}
    >
      <Sun
        size={15}
        className="absolute transition-all duration-300"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)",
        }}
      />
      <Moon
        size={15}
        className="absolute transition-all duration-300"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? "rotate(-90deg) scale(0.5)" : "rotate(0deg) scale(1)",
        }}
      />
    </button>
  )
}
