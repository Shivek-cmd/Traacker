"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Fallback images per step index if none provided
const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1400&h=1000&q=80&fit=crop",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&h=1000&q=80&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&h=1000&q=80&fit=crop",
  "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=1400&h=1000&q=80&fit=crop",
]

export interface ProcessStep {
  step: string
  title: string
  body: string
  image?: string
}

interface Props {
  id?: string
  eyebrow?: string
  title?: string
  titleHighlight?: string
  subtitle?: string
  steps: ProcessStep[]
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
}

export default function StickyScrollProcess({
  id = "how-it-works",
  eyebrow = "The Process",
  title = "Simple Process.",
  titleHighlight = "Real Results.",
  subtitle = "You don't need to figure everything out. Once you join Tracckar, we take it from here.",
  steps,
  ctaPrimary = { label: "Start the Process", href: "/contact-us" },
  ctaSecondary,
}: Props) {
  const outerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  })

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(steps.length - 1, Math.floor(v * steps.length))
    setActiveStep(Math.max(0, next))
  })

  // Active card takes 55%, remaining split equally
  const ACTIVE_PCT = 55
  const inactivePct = (100 - ACTIVE_PCT) / Math.max(1, steps.length - 1)

  return (
    <>
      {/* ── DESKTOP: sticky scroll ─────────────────────────── */}
      <div
        ref={outerRef}
        id={id}
        className="relative hidden lg:block bg-bg"
        style={{ height: `${steps.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div
            className="h-full max-w-[1400px] mx-auto px-8 xl:px-12 grid"
            style={{ gridTemplateColumns: "1fr 1.9fr", gap: "4rem", alignItems: "center" }}
          >
            {/* ── Left column ──────────────────────────────── */}
            <div className="flex flex-col gap-7">
              {/* Eyebrow badge */}
              <div
                className="self-start px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest"
                style={{
                  border: "1px solid var(--border-hover)",
                  color: "var(--text-muted)",
                }}
              >
                {eyebrow}
              </div>

              {/* Heading */}
              <h2
                className="text-4xl xl:text-5xl font-extrabold leading-tight font-display"
                style={{ color: "var(--text)" }}
              >
                {title}
                {titleHighlight && (
                  <>
                    {" "}
                    <span className="text-shimmer">{titleHighlight}</span>
                  </>
                )}
              </h2>

              {/* Subtitle */}
              {subtitle && (
                <p className="text-base xl:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {subtitle}
                </p>
              )}

              {/* Progress indicator */}
              <div className="flex items-center gap-2">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    aria-label={`Step ${i + 1}`}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: activeStep === i ? "28px" : "8px",
                      height: "8px",
                      background: activeStep === i ? "var(--primary)" : "var(--border-hover)",
                    }}
                  />
                ))}
              </div>

              {/* Active step label — animates per step */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                  className="flex flex-col gap-1"
                >
                  <p
                    className="text-xs font-mono font-bold uppercase"
                    style={{ color: "var(--primary)" }}
                  >
                    {steps[activeStep].step}
                  </p>
                  <p className="text-base font-semibold font-display" style={{ color: "var(--text)" }}>
                    {steps[activeStep].title}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                {ctaPrimary && (
                  <a
                    href={ctaPrimary.href}
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-white font-bold text-sm rounded-xl font-display"
                  >
                    {ctaPrimary.label}
                    <ArrowRight size={15} />
                  </a>
                )}
                {ctaSecondary && (
                  <a
                    href={ctaSecondary.href}
                    className="btn-outline inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-xl font-display"
                    style={{ color: "var(--text)" }}
                  >
                    {ctaSecondary.label}
                  </a>
                )}
              </div>
            </div>

            {/* ── Right column: image panels ───────────────── */}
            <div className="flex gap-3 h-[72vh]">
              {steps.map((step, i) => {
                const img = step.image ?? FALLBACK_IMAGES[i % FALLBACK_IMAGES.length]
                const isActive = activeStep === i
                return (
                  <motion.div
                    key={i}
                    animate={{ width: `${isActive ? ACTIVE_PCT : inactivePct}%` }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="relative overflow-hidden rounded-2xl cursor-pointer shrink-0"
                    onClick={() => setActiveStep(i)}
                  >
                    {/* Image */}
                    <img
                      src={img}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
                        transform: isActive ? "scale(1.04)" : "scale(1)",
                      }}
                    />

                    {/* Dark gradient */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.08) 100%)",
                      }}
                    />

                    {/* Step number — always visible at bottom-left */}
                    <div className="absolute bottom-5 left-5 z-10">
                      <span
                        className="text-sm font-bold font-mono"
                        style={{ color: "rgba(255,255,255,0.45)" }}
                      >
                        {step.step}
                      </span>
                    </div>

                    {/* Title + description — only when active */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.35, delay: 0.22 }}
                          className="absolute bottom-0 left-0 right-0 p-6 z-10"
                        >
                          <h3 className="text-white text-2xl font-extrabold font-display leading-snug mb-2">
                            {step.title}
                          </h3>
                          <p
                            className="text-sm leading-relaxed"
                            style={{
                              color: "rgba(255,255,255,0.68)",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {step.body}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE: simple vertical cards ─────────────────── */}
      <div id={id} className="block lg:hidden py-20 bg-bg px-6">
        {/* Header */}
        <div className="mb-10">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ border: "1px solid var(--border-hover)", color: "var(--text-muted)" }}
          >
            {eyebrow}
          </div>
          <h2
            className="text-3xl font-extrabold leading-tight font-display mb-3"
            style={{ color: "var(--text)" }}
          >
            {title}{" "}
            {titleHighlight && <span className="text-shimmer">{titleHighlight}</span>}
          </h2>
          {subtitle && (
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {steps.map((step, i) => {
            const img = step.image ?? FALLBACK_IMAGES[i % FALLBACK_IMAGES.length]
            return (
              <div key={i} className="relative rounded-2xl overflow-hidden h-52">
                <img
                  src={img}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 100%)" }}
                />
                <div className="absolute bottom-5 left-5 z-10">
                  <p className="text-white/45 text-xs font-mono font-bold mb-1">{step.step}</p>
                  <h3 className="text-white text-lg font-extrabold font-display leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-white/65 text-xs mt-1 leading-relaxed line-clamp-2">
                    {step.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {ctaPrimary && (
            <a
              href={ctaPrimary.href}
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-white font-bold text-sm rounded-xl font-display"
            >
              {ctaPrimary.label}
              <ArrowRight size={15} />
            </a>
          )}
          {ctaSecondary && (
            <a
              href={ctaSecondary.href}
              className="btn-outline inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-xl font-display"
              style={{ color: "var(--text)" }}
            >
              {ctaSecondary.label}
            </a>
          )}
        </div>
      </div>
    </>
  )
}
