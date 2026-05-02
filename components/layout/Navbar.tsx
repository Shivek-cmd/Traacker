"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Menu, X, ChevronDown, ArrowRight,
  Truck, TrendingUp, Navigation, FileText, Headphones, ShieldCheck, ClipboardCheck,
} from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import { services } from "@/lib/services"

const categoryIcon: Record<string, React.ReactNode> = {
  DISPATCH:   <Truck size={14} />,
  RATES:      <TrendingUp size={14} />,
  ROUTING:    <Navigation size={14} />,
  ADMIN:      <FileText size={14} />,
  SUPPORT:    <Headphones size={14} />,
  VETTING:    <ShieldCheck size={14} />,
  COMPLIANCE: <ClipboardCheck size={14} />,
}

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
          <nav className="hidden md:flex items-center gap-7 relative">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  onMouseEnter={openDropdown}
                  onMouseLeave={scheduleClose}
                >
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
                </div>
              ) : (
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

            {/* Mega menu — anchored to the nav's left edge (under "Services") */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-full pt-3"
                  style={{ left: -100, width: "760px" }}
                  onMouseEnter={openDropdown}
                  onMouseLeave={scheduleClose}
                >
                  <div
                    className="rounded-2xl overflow-hidden flex"
                    style={{
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--nav-border)",
                      boxShadow: "0 24px 64px rgba(0,0,0,0.18), 0 4px 20px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.06)",
                    }}
                  >
                    {/* Left accent panel */}
                    <div
                      className="w-52 shrink-0 flex flex-col justify-between p-6"
                      style={{
                        background: "linear-gradient(150deg, #1c1917 0%, #292524 100%)",
                        borderRight: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div className="flex flex-col gap-3">
                        <span
                          className="text-[10px] font-bold tracking-[0.18em] uppercase"
                          style={{ color: "var(--primary)" }}
                        >
                          Our Services
                        </span>
                        <p className="text-[15px] font-bold font-display leading-snug text-white">
                          Everything you need to run a profitable truck.
                        </p>
                        <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>
                          Seven services. One dedicated dispatcher. Zero dead miles.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 mt-8">
                        <Link
                          href="/services"
                          onClick={() => setDropdownOpen(false)}
                          className="group/all inline-flex items-center gap-1.5 text-sm font-bold transition-colors duration-150"
                          style={{ color: "var(--primary)" }}
                        >
                          View All Services
                          <ArrowRight
                            size={13}
                            className="group-hover/all:translate-x-0.5 transition-transform duration-200"
                          />
                        </Link>
                        <div
                          className="flex items-center gap-2 text-[10px]"
                          style={{ color: "rgba(255,255,255,0.28)" }}
                        >
                          <span>5+ years</span>
                          <span
                            className="w-1 h-1 rounded-full"
                            style={{ background: "rgba(255,255,255,0.28)" }}
                          />
                          <span>200+ drivers</span>
                        </div>
                      </div>
                    </div>

                    {/* Right services grid */}
                    <div className="flex-1 p-3">
                      <div className="grid grid-cols-2 gap-0.5">
                        {services.map((s, i) => {
                          const isLast = i === services.length - 1 && services.length % 2 !== 0
                          return (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              onClick={() => setDropdownOpen(false)}
                              className={`group/item flex items-start gap-3 p-3 rounded-xl transition-all duration-150${isLast ? " col-span-2" : ""}`}
                              style={{ color: "var(--text)" }}
                              onMouseEnter={(e) => {
                                ;(e.currentTarget as HTMLElement).style.background = "var(--bg-secondary)"
                              }}
                              onMouseLeave={(e) => {
                                ;(e.currentTarget as HTMLElement).style.background = ""
                              }}
                            >
                              <div
                                className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                                style={{
                                  background: "color-mix(in srgb, var(--primary) 12%, transparent)",
                                  color: "var(--primary)",
                                }}
                              >
                                {categoryIcon[s.category] ?? <ArrowRight size={14} />}
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span
                                  className="text-sm font-semibold font-display leading-snug"
                                  style={{ color: "var(--text)" }}
                                >
                                  {s.title}
                                </span>
                                <span
                                  className="text-xs leading-relaxed"
                                  style={{ color: "var(--text-muted)" }}
                                >
                                  {s.tagline}
                                </span>
                              </div>
                              <ArrowRight
                                size={12}
                                className="ml-auto shrink-0 self-center opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all duration-150"
                                style={{ color: "var(--primary)" }}
                              />
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
              {/* Services accordion */}
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
