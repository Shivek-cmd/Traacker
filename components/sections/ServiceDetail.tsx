"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Search, TrendingUp, Route, FileText, Headphones, LucideIcon } from "lucide-react"
import type { Service } from "@/lib/services"

const iconMap: Record<string, LucideIcon> = {
  "load-sourcing": Search,
  "rate-negotiation": TrendingUp,
  "route-optimization": Route,
  "paperwork-support": FileText,
  "dedicated-dispatcher": Headphones,
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
                <span className="gradient-text">{service.title}</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  className="card-dark rounded-2xl p-6 flex flex-col gap-3"
                >
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
                    <h3 className="text-text font-bold text-base font-display mb-1">{feature.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-bg-secondary relative">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, color-mix(in srgb, var(--primary) 20%, transparent), transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Section>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>
                The Process
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text font-display">
                How It <span className="gradient-text">Works</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Connecting line desktop */}
              <div
                className="hidden lg:block absolute top-[26px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px"
                style={{
                  background:
                    "linear-gradient(to right, color-mix(in srgb, var(--primary) 30%, transparent), color-mix(in srgb, var(--primary) 60%, transparent), color-mix(in srgb, var(--primary) 30%, transparent))",
                }}
              />

              {service.process.map((step, i) => (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <div className="relative z-10">
                    <div
                      className="w-[52px] h-[52px] rounded-full flex items-center justify-center font-black text-lg font-display"
                      style={{
                        background: "color-mix(in srgb, var(--primary) 15%, transparent)",
                        border: "2px solid color-mix(in srgb, var(--primary) 40%, transparent)",
                        color: "var(--primary)",
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-xs font-mono font-semibold mb-1"
                      style={{ color: "color-mix(in srgb, var(--primary) 60%, transparent)" }}
                    >
                      {step.step}
                    </div>
                    <h3 className="text-text font-bold text-base font-display mb-2">{step.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{step.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

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
                  <span className="gradient-text">This Service</span>
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

      {/* CTA */}
      <section className="py-20 bg-bg-secondary relative">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, color-mix(in srgb, var(--primary) 30%, transparent), transparent)",
          }}
        />
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>
            Ready?
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text font-display mb-6">
            Let's Put{" "}
            <span className="gradient-text">{service.title}</span>{" "}
            to Work for You
          </h2>
          <p className="text-muted text-lg mb-10">
            No upfront fees. Commission only. Get started in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="group btn-primary inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-base rounded-xl font-display"
            >
              Get Started Today
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/services"
              className="btn-outline inline-flex items-center gap-2 px-8 py-4 text-text font-semibold text-base rounded-xl font-display"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
