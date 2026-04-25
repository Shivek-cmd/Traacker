"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { X, Check } from "lucide-react"

const before = [
  "Empty miles eating your profit",
  "Accepting lowball rates just to move",
  "Hours wasted chasing loads yourself",
  "No plan between loads — just waiting",
  "Random dispatchers who don't know you",
]

const after = [
  "Consistent loads, minimal downtime",
  "Negotiated rates every single load",
  "We handle all broker communication",
  "Proactive load planning for your lanes",
  "One dedicated dispatcher who gets it",
]

export default function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-28 relative overflow-hidden bg-bg-secondary">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none hidden md:block"
        style={{
          background: "radial-gradient(circle, color-mix(in srgb, var(--primary) 7%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--primary)" }}
          >
            The Difference
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-text leading-tight font-display">
            Most Drivers Lose Money{" "}
            <span className="gradient-text">Without Realizing It</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
            Here's what life looks like before and after Traacker.
          </p>
        </motion.div>

        {/* Split comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl p-8"
            style={{
              border: "1px solid rgba(239, 68, 68, 0.15)",
              background: "color-mix(in srgb, var(--error) 3%, transparent)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(239,68,68,0.10)",
                  border: "1px solid rgba(239,68,68,0.20)",
                }}
              >
                <X size={18} style={{ color: "var(--error)" }} />
              </div>
              <div>
                <h3 className="text-text font-bold text-lg font-display">Without Traacker</h3>
                <p className="text-xs font-medium" style={{ color: "var(--error)" }}>
                  Stress. Empty miles. Low rates.
                </p>
              </div>
            </div>
            <ul className="flex flex-col gap-4">
              {before.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(239,68,68,0.15)" }}
                  >
                    <X size={10} style={{ color: "var(--error)" }} />
                  </div>
                  <span className="text-muted text-sm leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)",
              background: "color-mix(in srgb, var(--primary) 4%, transparent)",
            }}
          >
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none hidden md:block"
              style={{ background: "color-mix(in srgb, var(--primary) 10%, transparent)" }}
            />
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: "color-mix(in srgb, var(--primary) 20%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--primary) 30%, transparent)",
                }}
              >
                <Check size={18} style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <h3 className="text-text font-bold text-lg font-display">With Traacker</h3>
                <p className="text-xs font-medium" style={{ color: "var(--primary)" }}>
                  Consistent loads. Better pay. Smooth ops.
                </p>
              </div>
            </div>
            <ul className="flex flex-col gap-4 relative z-10">
              {after.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "color-mix(in srgb, var(--primary) 20%, transparent)" }}
                  >
                    <Check size={10} style={{ color: "var(--primary)" }} />
                  </div>
                  <span className="text-text text-sm leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <p className="text-2xl sm:text-3xl font-bold text-text font-display">
            Traacker fixes this.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
