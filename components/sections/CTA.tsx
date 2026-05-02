"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

interface CTAProps {
  eyebrow?: string
  headline?: string
  headlineHighlight?: string
  subtext?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  trustLine?: string
}

const defaults: Required<CTAProps> = {
  eyebrow: "Let's Talk",
  headline: "If You're Serious About",
  headlineHighlight: "Earning More, Let's Talk.",
  subtext:
    "Stop wasting time chasing loads and negotiating alone. Let Traakar handle dispatch the way it should be done.",
  primaryLabel: "Start Dispatching Today",
  primaryHref: "/contact-us",
  secondaryLabel: "Talk to a Dispatcher",
  secondaryHref: "tel:+15516553051",
  trustLine: "No upfront fees · 5% flat commission · All equipment types welcome",
}

export default function CTA(props: CTAProps) {
  const p = { ...defaults, ...props }
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const isPhone = p.secondaryHref.startsWith("tel:")

  return (
    <section
      id="contact"
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "65vh" }}
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/cta-video.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 50%, rgba(0,0,0,0.82) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.7) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-6"
            style={{ color: "var(--primary)" }}
          >
            {p.eyebrow}
          </p>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.06] tracking-tight mb-6 font-display"
            style={{ color: "var(--text-on-dark)" }}
          >
            {p.headline}
            {p.headlineHighlight && (
              <>
                <br className="hidden sm:block" />
                <span className="text-shimmer">{p.headlineHighlight}</span>
              </>
            )}
          </h2>

          <p
            className="text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--text-muted-on-dark)" }}
          >
            {p.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={p.primaryHref}
              className="group btn-primary inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-base rounded-xl font-display"
            >
              {p.primaryLabel}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <Link
              href={p.secondaryHref}
              className="btn-outline-on-dark inline-flex items-center gap-2 px-8 py-4 font-semibold text-base rounded-xl backdrop-blur-sm font-display"
            >
              {isPhone && <Phone size={16} />}
              {p.secondaryLabel}
            </Link>
          </div>

          <p className="mt-8 text-sm" style={{ color: "var(--text-subtle-on-dark)" }}>
            {p.trustLine}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
