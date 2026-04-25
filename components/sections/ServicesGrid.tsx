"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Search, TrendingUp, Route, FileText, Headphones, LucideIcon } from "lucide-react"
import { services } from "@/lib/services"

const iconMap: Record<string, LucideIcon> = {
  "load-sourcing": Search,
  "rate-negotiation": TrendingUp,
  "route-optimization": Route,
  "paperwork-support": FileText,
  "dedicated-dispatcher": Headphones,
}

/* ⚠️ Never add ease property to variant transitions — FM12+ TypeScript error */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.slug]
            return (
              <motion.div key={service.slug} variants={item}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`card-dark rounded-2xl p-7 flex flex-col gap-4 group h-full ${
                    i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: "color-mix(in srgb, var(--primary) 10%, transparent)",
                      border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)",
                    }}
                  >
                    <Icon size={22} style={{ color: "var(--primary)" }} />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-text font-bold text-xl mb-1 font-display">{service.title}</h3>
                    <p className="text-sm font-medium italic mb-3" style={{ color: "var(--primary)" }}>
                      "{service.tagline}"
                    </p>
                    <p className="text-muted text-sm leading-relaxed">{service.body}</p>
                  </div>

                  {/* Footer row */}
                  <div
                    className="pt-4 flex items-center justify-between"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--primary)" }} />
                      <span className="text-xs text-subtle font-medium">{service.highlight}</span>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-subtle group-hover:text-primary group-hover:translate-x-1 transition-all duration-200"
                    />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
