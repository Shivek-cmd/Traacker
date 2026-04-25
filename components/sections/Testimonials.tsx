"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Marcus T.",
    role: "Owner-Operator",
    equipment: "Dry Van · Texas",
    stars: 5,
    quote:
      "I was doing everything myself — chasing loads, dealing with brokers, handling paperwork at night. Traacker took all of that off my plate. My earnings went up because I'm just driving now.",
  },
  {
    name: "Darnell R.",
    role: "Fleet Owner",
    equipment: "3 Trucks · Georgia",
    stars: 5,
    quote:
      "The rate negotiation alone paid for the service. My dispatcher doesn't just accept the first number. He fights for it. I can tell the difference in my weekly settlements.",
  },
  {
    name: "Lisa M.",
    role: "Owner-Operator",
    equipment: "Reefer · Ohio",
    stars: 5,
    quote:
      "What I appreciate most is the communication. I always know what's happening. My last dispatcher would go silent for hours. Traacker feels like a real business partner.",
  },
]

/* ⚠️ Never add ease property — FM12+ TypeScript error */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="testimonials" ref={ref} className="py-28 relative bg-bg-secondary">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, color-mix(in srgb, var(--primary) 20%, transparent), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            Driver Stories
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-text leading-tight font-display">
            You're Not Just Another{" "}
            <span className="gradient-text">Truck to Us</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
            Here's what drivers say after making the switch.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="card-dark rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden group"
            >
              {/* Hover glow — desktop only */}
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden md:block"
                style={{ background: "color-mix(in srgb, var(--primary) 5%, transparent)" }}
                aria-hidden="true"
              />

              <Quote size={24} style={{ color: "color-mix(in srgb, var(--primary) 40%, transparent)" }} />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={14} style={{ fill: "var(--primary)", color: "var(--primary)" }} />
                ))}
              </div>

              <p className="text-muted text-sm leading-relaxed flex-1">"{t.quote}"</p>

              <div
                className="pt-4"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: "color-mix(in srgb, var(--primary) 20%, transparent)",
                    }}
                  >
                    <span className="font-bold text-sm font-display" style={{ color: "var(--primary)" }}>
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-text font-semibold text-sm font-display">{t.name}</p>
                    <p className="text-subtle text-xs">
                      {t.role} · {t.equipment}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
