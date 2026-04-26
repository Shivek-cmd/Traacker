"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

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
          {/* Replace with your own video asset — using hero placeholder for now */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay — heavier than hero for drama */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 50%, rgba(0,0,0,0.82) 100%)",
          }}
        />

        {/* Edge vignette */}
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
          {/* Eyebrow */}
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-6"
            style={{ color: "var(--primary)" }}
          >
            Let's Talk
          </p>

          {/* Headline */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.06] tracking-tight mb-6 font-display"
            style={{ color: "var(--text-on-dark)" }}
          >
            If You're Serious About{" "}
            <br className="hidden sm:block" />
            <span className="text-shimmer">Earning More,</span>
            <br />
            Let's Talk.
          </h2>

          {/* Sub-copy */}
          <p
            className="text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--text-muted-on-dark)" }}
          >
            Stop wasting time chasing loads and negotiating alone. Let Traakar
            handle dispatch the way it should be done.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:dispatch@Traakar.com"
              className="group btn-primary inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-base rounded-xl font-display"
            >
              Start Dispatching Today
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
            <a
              href="tel:+1-800-Traakar"
              className="btn-outline-on-dark inline-flex items-center gap-2 px-8 py-4 font-semibold text-base rounded-xl backdrop-blur-sm font-display"
            >
              <Phone size={16} />
              Talk to a Dispatcher
            </a>
          </div>

          {/* Trust line */}
          <p
            className="mt-8 text-sm"
            style={{ color: "var(--text-subtle-on-dark)" }}
          >
            No upfront fees · 5–10% commission only · All equipment types welcome
          </p>
        </motion.div>
      </div>
    </section>
  )
}
