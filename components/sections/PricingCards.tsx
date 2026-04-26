"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Owner-Operator",
    rate: "5%",
    rateLabel: "per load gross",
    tagline: "For solo drivers who want a dedicated dispatcher without the overhead.",
    features: [
      "Dedicated dispatcher",
      "Load sourcing & booking",
      "Rate negotiation on every load",
      "BOL & POD handling",
      "Detention & accessorial claims",
      "24/7 dispatcher availability",
      "Real-time load updates",
      "Weekly performance recap",
    ],
    cta: "Start Dispatching",
    highlight: false,
    note: null,
  },
  {
    name: "Small Fleet",
    rate: "7%",
    rateLabel: "per load gross",
    tagline: "For fleets of 2–5 trucks that need consistent, coordinated dispatch.",
    features: [
      "Everything in Owner-Operator",
      "Multi-truck coordination",
      "Fleet lane optimization",
      "Priority load access",
      "Dedicated account manager",
      "Multi-driver scheduling",
      "Consolidated weekly reporting",
      "Volume rate negotiation",
    ],
    cta: "Get Fleet Pricing",
    highlight: true,
    note: "Most popular for growing fleets",
  },
  {
    name: "Growing Fleet",
    rate: "10%",
    rateLabel: "per load gross",
    tagline: "For fleets of 6+ trucks that need full-service dispatch management.",
    features: [
      "Everything in Small Fleet",
      "Unlimited trucks",
      "Dedicated dispatch team",
      "Custom lane strategy",
      "Broker relationship management",
      "IFTA & compliance support",
      "Monthly business review",
      "Direct broker introductions",
    ],
    cta: "Talk to Us",
    highlight: false,
    note: null,
  },
]

/* ⚠️ Never add ease property to variant transitions — FM12+ TypeScript error */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function PricingCards() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-subtle text-sm mb-14"
        >
          Commission only · No setup fees · No monthly retainers · Cancel anytime
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={card}
              className={`relative rounded-2xl p-8 flex flex-col gap-6 ${
                plan.highlight
                  ? "border-2 bg-bg-secondary"
                  : "card-dark"
              }`}
              style={
                plan.highlight
                  ? { borderColor: "var(--primary)" }
                  : undefined
              }
              onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    e.currentTarget.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `

    // glow follow
    e.currentTarget.style.setProperty("--glow-x", `${x}px`)
    e.currentTarget.style.setProperty("--glow-y", `${y}px`)
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"

    e.currentTarget.style.setProperty("--glow-x", `50%`)
    e.currentTarget.style.setProperty("--glow-y", `50%`)
  }}
            >
              {/* Popular badge */}
              {plan.note && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold font-display text-white"
                  style={{ background: "var(--primary)" }}
                >
                  {plan.note}
                </div>
              )}

              {/* Header */}
              <div>
                <p className="text-subtle text-xs font-semibold uppercase tracking-widest mb-2">{plan.name}</p>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-5xl font-extrabold text-text font-display">{plan.rate}</span>
                  <span className="text-muted text-sm">{plan.rateLabel}</span>
                </div>
                <p className="text-muted text-sm leading-relaxed">{plan.tagline}</p>
              </div>

              {/* Divider */}
              <div style={{ borderTop: "1px solid var(--border)" }} />

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
                    <CheckCircle2
                      size={16}
                      className="shrink-0 mt-0.5"
                      style={{ color: "var(--primary)" }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/#contact"
                className={`group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm font-display transition-all duration-200 ${
                  plan.highlight
                    ? "btn-primary text-white"
                    : "btn-outline text-text"
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-subtle text-xs mt-10 max-w-xl mx-auto"
        >
          Commission is calculated on the gross load rate before fuel surcharge. All equipment types and lanes welcome. No long-term contracts — work with us as long as it makes sense for your business.
        </motion.p>
      </div>
    </section>
  )
}
