"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Search, TrendingUp, Route, FileText, Headphones, ShieldCheck, ClipboardCheck, LucideIcon } from "lucide-react"
import type { Service } from "@/lib/services"
import StickyScrollProcess from "./StickyScrollProcess"
import { TiltCard } from "./TiltCard"

const iconMap: Record<string, LucideIcon> = {
  "load-sourcing": Search,
  "rate-negotiation": TrendingUp,
  "route-optimization": Route,
  "paperwork-support": FileText,
  "dedicated-dispatcher": Headphones,
  "broker-vetting": ShieldCheck,
  "eld-compliance": ClipboardCheck,
}

/* ⚠️ Never add ease property to variant transitions — FM12+ TypeScript error */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ServiceDetail({ service }: { service: Service }) {
  const Icon = iconMap[service.slug]

  return (
    <>
      {/* Features */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Section>
            <motion.div variants={fadeUp} className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>
                What's Included
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text font-display">
                Everything You Get With{" "}
                <span className="text-shimmer">{service.title}</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
             {service.features.map((feature) => (
              <motion.div key={feature.title} variants={fadeUp}>
                <TiltCard>
                  <div className="card-dark rounded-2xl p-6 flex flex-col gap-3 transition-transform duration-300">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: "color-mix(in srgb, var(--primary) 10%, transparent)",
                        border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)",
                      }}
                    >
                      <Icon size={18} style={{ color: "var(--primary)" }} />
                    </div>

                    <div>
                      <h3 className="text-text font-bold text-base font-display mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Process */}
      <StickyScrollProcess
        eyebrow="The Process"
        title="How It"
        titleHighlight="Works."
        subtitle={`Here's exactly how we handle ${service.title.toLowerCase()} for your truck, step by step.`}
        steps={service.process}
        ctaPrimary={{ label: "Get Started Today", href: "/contact-us" }}
        ctaSecondary={{ label: "View All Services", href: "/services" }}
      />

      {/* Outcomes */}
      <section className="py-24 bg-bg">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUp}>
                <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>
                  What You'll See
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-text font-display leading-tight">
                  Real Outcomes From{" "}
                  <span className="text-shimmer">This Service</span>
                </h2>
                <p className="mt-4 text-muted leading-relaxed">
                  These aren't promises — they're what consistently happens when your dispatch is handled right.
                </p>
              </motion.div>

              <motion.ul variants={stagger} className="flex flex-col gap-4">
                {service.outcomes.map((outcome) => (
                  <motion.li
                    key={outcome}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="shrink-0 mt-0.5"
                      style={{ color: "var(--primary)" }}
                    />
                    <span className="text-text font-medium">{outcome}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Section>
        </div>
      </section>

      {/* CTA — video background */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "65vh" }}>
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover" aria-hidden="true">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 50%, rgba(0,0,0,0.82) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.7) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center py-28">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>
            Ready?
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight font-display mb-6" style={{ color: "var(--text-on-dark)" }}>
            Let's Put{" "}
            <span className="text-shimmer">{service.title}</span>{" "}
            to Work for You
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: "var(--text-muted-on-dark)" }}>
            No upfront fees. Commission only. Get started in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="group btn-primary inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-base rounded-xl font-display"
            >
              Get Started Today
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/services"
              className="btn-outline-on-dark inline-flex items-center gap-2 px-8 py-4 font-semibold text-base rounded-xl backdrop-blur-sm font-display"
            >
              View All Services
            </Link>
          </div>
          <p className="mt-8 text-sm" style={{ color: "var(--text-subtle-on-dark)" }}>
            No upfront fees · 5–10% commission only · All equipment types welcome
          </p>
        </div>
      </section>
    </>
  )
}
