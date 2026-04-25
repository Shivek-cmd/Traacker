"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, TrendingUp, Route, FileText, Headphones } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Load Sourcing & Booking",
    tagline: "Your truck should never sit idle.",
    body: "We find high-quality freight across DAT, Truckstop.com, and direct broker relationships — keeping your truck consistently loaded with profitable runs.",
    highlight: "Consistent load availability",
  },
  {
    icon: TrendingUp,
    title: "Rate Negotiation",
    tagline: "We don't settle for average.",
    body: "We negotiate directly with brokers on every single load. Better rates per mile, better weekly earnings — no guessing, no accepting lowball offers.",
    highlight: "Max per-mile earnings",
  },
  {
    icon: Route,
    title: "Route Optimization",
    tagline: "More loaded miles. Less wasted fuel.",
    body: "We reduce deadhead miles, plan fuel-efficient corridors, and keep your schedule aligned with HOS regulations so you stay productive and compliant.",
    highlight: "Reduced empty miles",
  },
  {
    icon: FileText,
    title: "Paperwork & Back Office",
    tagline: "We handle the paperwork so you stay on the road.",
    body: "BOL and POD handling, documentation, invoicing support — the admin work that slows drivers down is handled for you, completely.",
    highlight: "Full admin coverage",
  },
  {
    icon: Headphones,
    title: "Dedicated Dispatcher",
    tagline: "A dispatcher who actually knows your business.",
    body: "One point of contact who learns your lanes, preferences, and goals. Real-time updates. 24/7 availability. No rotating agents who don't know you.",
    highlight: "24/7 real-time support",
  },
]

/* ⚠️ Never add ease property to variant transitions — FM12+ TypeScript error */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" ref={ref} className="py-28 relative bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-text leading-tight font-display">
            We Find Loads. We Negotiate Hard.{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">We Keep You Moving.</span>
          </h2>
          <p className="mt-5 text-muted text-lg max-w-2xl mx-auto">
            We don't just "dispatch trucks." We secure profitable freight, push for better rates, and make sure your truck is always working — not waiting.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={item}
                className={`card-dark rounded-2xl p-7 flex flex-col gap-4 group cursor-default ${
                  i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "color-mix(in srgb, var(--primary) 10%, transparent)",
                    border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)",
                  }}
                >
                  <Icon size={22} style={{ color: "var(--primary)" }} />
                </div>
                <div>
                  <h3 className="text-text font-bold text-xl mb-1 font-display">{service.title}</h3>
                  <p className="text-sm font-medium italic mb-3" style={{ color: "var(--primary)" }}>
                    "{service.tagline}"
                  </p>
                  <p className="text-muted text-sm leading-relaxed">{service.body}</p>
                </div>
                <div
                  className="mt-auto pt-4 flex items-center gap-2"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--primary)" }}
                  />
                  <span className="text-xs text-subtle font-medium">{service.highlight}</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12 text-subtle text-sm"
        >
          You drive. We handle everything else.
        </motion.p>
      </div>
    </section>
  )
}
