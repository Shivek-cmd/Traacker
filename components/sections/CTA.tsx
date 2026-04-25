"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="contact" ref={ref} className="py-28 relative overflow-hidden bg-bg">
      {/* Ambient glow — desktop only */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 rounded-full pointer-events-none hidden md:block"
        style={{
          background: "radial-gradient(ellipse, color-mix(in srgb, var(--primary) 12%, transparent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, color-mix(in srgb, var(--primary) 40%, transparent), transparent)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--primary)" }}
          >
            Let's Talk
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text leading-tight mb-6 font-display">
            If You're Serious About{" "}
            <span className="gradient-text">Earning More,</span>
            <br />
            Let's Talk.
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop wasting time chasing loads and negotiating alone. Let Traacker handle dispatch the way it should be done.
          </p>

          {/* Straight-talk box */}
          <div
            className="mb-10 p-5 rounded-xl max-w-xl mx-auto"
            style={{
              border: "1px solid var(--border)",
              background: "color-mix(in srgb, var(--text) 2%, transparent)",
            }}
          >
            <p className="text-muted text-sm leading-relaxed">
              <span className="text-text font-semibold">Let's be honest:</span> not every load will be perfect. Rates fluctuate. Challenges happen. But we stay consistent, communicate clearly, and always push for the best outcome.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:dispatch@traacker.com"
              className="group btn-primary inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-base rounded-xl font-display"
            >
              Start Dispatching Today
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="tel:+1-800-TRAACKER"
              className="btn-outline inline-flex items-center gap-2 px-8 py-4 text-text font-semibold text-base rounded-xl font-display"
            >
              <Phone size={16} />
              Talk to a Dispatcher
            </a>
          </div>

          <p className="mt-8 text-subtle text-sm">
            No upfront fees · 5–10% commission only · All equipment types welcome
          </p>
        </motion.div>
      </div>
    </section>
  )
}
