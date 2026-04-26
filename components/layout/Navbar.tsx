"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import { services } from "@/lib/services"

const navLinks = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    return () => { if (hoverTimer.current) clearTimeout(hoverTimer.current) }
  }, [])

  const openDropdown = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    setDropdownOpen(true)
  }

  const scheduleClose = () => {
    hoverTimer.current = setTimeout(() => setDropdownOpen(false), 130)
  }

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
              Traa<span style={{ color: "var(--primary)" }}>kar</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={scheduleClose}
                >
                  {/* Services trigger with animated underline */}
                  <Link
                    href={link.href}
                    className="group/link relative text-sm font-medium flex items-center gap-1 pb-0.5"
                    style={{ color: "var(--nav-link)" }}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className="transition-transform duration-200"
                      style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                    <span
                      className="absolute bottom-0 left-0 w-full h-[1.5px] origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"
                      style={{ background: "var(--primary)" }}
                    />
                  </Link>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.16 }}
                        className="absolute top-full pt-3"
                        style={{ left: "50%", transform: "translateX(-50%)", width: "520px" }}
                      >
                        <div
                          className="rounded-2xl overflow-hidden p-2"
                          style={{
                            background: "var(--nav-bg)",
                            backdropFilter: "blur(24px)",
                            WebkitBackdropFilter: "blur(24px)",
                            border: "1px solid var(--nav-border)",
                            boxShadow: "0 16px 48px rgba(0,0,0,0.18)",
                          }}
                        >
                          {/* 2-column grid: 3 left, 2 + View All right */}
                          <div className="grid grid-cols-2 gap-0.5">
                            {services.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                onClick={() => setDropdownOpen(false)}
                                className="flex items-start gap-3 p-3 rounded-xl transition-all duration-150 group/item"
                                style={{ color: "var(--text)" }}
                              >
                                <div
                                  className="shrink-0 mt-0.5 px-1.5 py-0.5 rounded font-bold font-display whitespace-nowrap"
                                  style={{
                                    background: "color-mix(in srgb, var(--primary) 12%, transparent)",
                                    color: "var(--primary)",
                                    fontSize: "0.6rem",
                                    letterSpacing: "0.07em",
                                  }}
                                >
                                  {s.category}
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-sm font-semibold font-display leading-tight" style={{ color: "var(--text)" }}>
                                    {s.title}
                                  </span>
                                  <span className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                                    {s.tagline}
                                  </span>
                                </div>
                              </Link>
                            ))}

                            {/* 6th slot — View All */}
                            <Link
                              href="/services"
                              onClick={() => setDropdownOpen(false)}
                              className="flex items-center gap-2 p-3 rounded-xl transition-all duration-150 group/all"
                              style={{
                                border: "1px dashed color-mix(in srgb, var(--primary) 35%, transparent)",
                                background: "color-mix(in srgb, var(--primary) 4%, transparent)",
                              }}
                            >
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span
                                  className="text-sm font-bold font-display leading-tight flex items-center gap-1.5"
                                  style={{ color: "var(--primary)" }}
                                >
                                  View All Services
                                  <ArrowRight
                                    size={13}
                                    className="-translate-x-0.5 group-hover/all:translate-x-0.5 transition-transform duration-200"
                                  />
                                </span>
                                <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                                  Full service overview
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                /* Regular nav links with animated underline */
                <Link
                  key={link.href}
                  href={link.href}
                  className="group/link relative text-sm font-medium pb-0.5 transition-colors duration-200"
                  style={{ color: "var(--nav-link)" }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 w-full h-[1.5px] origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"
                    style={{ background: "var(--primary)" }}
                  />
                </Link>
              )
            )}
          </nav>

          {/* Right side — toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact-us"
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
            <div className="flex justify-end px-6 pt-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg"
                style={{ color: "var(--text-muted)" }}
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-6 pb-16 overflow-y-auto px-6">
              {/* Services with accordion */}
              <div className="flex flex-col items-center w-full max-w-sm gap-0">
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="text-2xl font-bold font-display flex items-center gap-2 transition-colors duration-150"
                  style={{ color: "var(--text)" }}
                >
                  Services
                  <ChevronDown
                    size={20}
                    className="transition-transform duration-200"
                    style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24 }}
                      style={{ overflow: "hidden" }}
                      className="w-full mt-3"
                    >
                      <div
                        className="rounded-2xl overflow-hidden"
                        style={{ border: "1px solid var(--border)", background: "var(--bg-elevated)" }}
                      >
                        {services.map((s, i) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-between px-4 py-3 text-sm font-medium font-display"
                            style={{
                              color: "var(--text)",
                              borderTop: i > 0 ? "1px solid var(--border)" : "none",
                            }}
                          >
                            {s.title}
                            <ArrowRight size={14} style={{ color: "var(--text-subtle)" }} />
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-bold font-display"
                          style={{
                            color: "var(--primary)",
                            borderTop: "1px solid var(--border)",
                          }}
                        >
                          View All Services
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks
                .filter((l) => !l.hasDropdown)
                .map((link) => (
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
                href="/contact-us"
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
