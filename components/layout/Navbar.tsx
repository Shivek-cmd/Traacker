"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

const navLinks = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Why Us", href: "/#why-us" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[200] flex justify-center px-4 sm:px-6 pt-4"
      >
        <div
          className="w-full max-w-7xl flex items-center justify-between h-14 px-5 sm:px-7 rounded-2xl transition-all duration-300"
          style={{
            background: "var(--nav-bg)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--nav-border)",
            boxShadow: scrolled
              ? "0 4px 30px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.1)"
              : "0 2px 16px rgba(0,0,0,0.08)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "var(--primary)" }}
            >
              <span className="text-white font-bold text-sm font-display">T</span>
            </div>
            <span className="font-bold text-xl tracking-tight font-display" style={{ color: "var(--nav-text)" }}>
              Tra<span style={{ color: "var(--primary)" }}>acker</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium flex items-center gap-1 transition-colors duration-200 hover:opacity-100"
                style={{ color: "var(--nav-link)" }}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={13} className="opacity-50" />}
              </Link>
            ))}
          </nav>

          {/* Right side — toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/#contact"
              className="btn-primary flex items-center gap-2 text-sm font-semibold text-white px-5 py-2 rounded-xl"
            >
              Get Started →
            </Link>
          </div>

          {/* Mobile — toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg transition-colors duration-150"
              style={{ color: "var(--nav-text)" }}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[300] md:hidden flex flex-col"
            style={{
              background: "var(--bg)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            {/* Close button top-right */}
            <div className="flex justify-end px-6 pt-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg"
                style={{ color: "var(--text-muted)" }}
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-7 pb-16">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-bold font-display transition-colors duration-150"
                  style={{ color: "var(--text)" }}
                >
                  {link.label}
                </Link>
              ))}

              <div
                className="w-16 h-px mt-2"
                style={{ background: "var(--border-hover)" }}
              />

              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary px-10 py-4 text-white text-lg font-bold rounded-2xl font-display"
              >
                Get Started →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
