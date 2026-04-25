"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { UserCheck, MessageSquare, BarChart3, Clock, Shield } from "lucide-react"

const reasons = [
  {
    icon: UserCheck,
    title: "We Don't Disappear After One Load",
    body: "Unlike spot dispatchers, we're building a long-term operation with you. Every load we book is part of a bigger picture for your business.",
  },
  {
    icon: BarChart3,
    title: "We Negotiate — Not Just Accept",
    body: "Every broker gets pushed back. We don't accept the first offer. We negotiate because better rates compound over weeks and months.",
  },
  {
    icon: MessageSquare,
    title: "Real Communication, Every Time",
    body: "No ghosting. No waiting hours for a response. Your dispatcher is reachable, proactive, and updates you before you have to ask.",
  },
  {
    icon: Clock,
    title: "We Think Long-Term",
    body: "Load-to-load thinking kills earnings. We plan your weeks, not just your next pickup. Smarter scheduling = more paid miles.",
  },
  {
    icon: Shield,
    title: "Your Truck Is a Business to Us",
    body: "We treat every truck like a business — not a unit number. Your goals, your lanes, your preferences matter to us.",
  },
]

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="why-us" ref={ref} className="py-28 relative overflow-hidden bg-bg">
      {/* Background grid — desktop only */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--primary)" }}
            >
              Why Drivers Stay
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-text leading-tight mb-6 font-display">
              Traacker Isn't Just Dispatch —{" "}
              <span className="gradient-text">It's Your Growth Partner.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Most of our clients come from bad dispatch experiences — poor communication, low-paying loads, and no real planning. They switch to Traacker for structure, consistency, and results.
            </p>

            {/* Pricing callout */}
            <div
              className="inline-flex flex-col gap-1 px-6 py-4 rounded-xl"
              style={{
                border: "1px solid color-mix(in srgb, var(--primary) 25%, transparent)",
                background: "color-mix(in srgb, var(--primary) 5%, transparent)",
              }}
            >
              <p className="text-sm font-semibold" style={{ color: "var(--primary)" }}>
                Simple Pricing
              </p>
              <p className="text-text text-3xl font-black font-display">
                5–10%{" "}
                <span className="text-muted text-lg font-normal">per load</span>
              </p>
              <p className="text-subtle text-sm">No upfront cost. You only pay when you get paid.</p>
            </div>
          </motion.div>

          {/* Right column — reasons list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {reasons.map((reason, i) => {
              const Icon = reason.icon
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 p-5 rounded-xl card-dark group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: "color-mix(in srgb, var(--primary) 10%, transparent)",
                      border: "1px solid color-mix(in srgb, var(--primary) 15%, transparent)",
                    }}
                  >
                    <Icon size={18} style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <h3 className="text-text font-bold text-base mb-1 font-display">{reason.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{reason.body}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
