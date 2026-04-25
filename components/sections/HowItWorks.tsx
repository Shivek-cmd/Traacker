"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FileSignature, Truck, Package, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: FileSignature,
    step: "01",
    title: "Sign Agreement",
    body: "Quick onboarding — share your MC number, equipment type, preferred lanes. Done in minutes.",
  },
  {
    icon: Truck,
    step: "02",
    title: "Share Truck Details",
    body: "Tell us your availability, home base, and what you want to haul. We learn your business.",
  },
  {
    icon: Package,
    step: "03",
    title: "We Book the Loads",
    body: "Your dedicated dispatcher goes to work. We find, negotiate, and confirm profitable freight for you.",
  },
  {
    icon: ArrowRight,
    step: "04",
    title: "You Drive. We Handle the Rest.",
    body: "Updates, paperwork, broker communication — all on us. You focus on the road and getting paid.",
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" ref={ref} className="py-28 relative bg-bg-secondary">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, color-mix(in srgb, var(--primary) 20%, transparent), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--primary)" }}
          >
            The Process
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-text leading-tight font-display">
            Simple Process.{" "}
            <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
            You don't need to figure everything out. Once you join Traacker, we take it from here.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px"
            style={{
              background: "linear-gradient(to right, color-mix(in srgb, var(--primary) 30%, transparent), color-mix(in srgb, var(--primary) 60%, transparent), color-mix(in srgb, var(--primary) 30%, transparent))",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center gap-5"
                >
                  {/* Icon circle with step badge */}
                  <div className="relative">
                    <div
                      className="w-[52px] h-[52px] rounded-full flex items-center justify-center relative z-10"
                      style={{
                        background: "color-mix(in srgb, var(--primary) 15%, transparent)",
                        border: "2px solid color-mix(in srgb, var(--primary) 40%, transparent)",
                      }}
                    >
                      <Icon size={22} style={{ color: "var(--primary)" }} />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center z-20"
                      style={{ background: "var(--primary)" }}
                    >
                      <span className="text-white text-[10px] font-black">{i + 1}</span>
                    </div>
                  </div>

                  <div>
                    <div
                      className="text-xs font-mono font-semibold mb-1"
                      style={{ color: "color-mix(in srgb, var(--primary) 60%, transparent)" }}
                    >
                      {step.step}
                    </div>
                    <h3 className="text-text font-bold text-lg mb-2 font-display">{step.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{step.body}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-base rounded-xl font-display"
          >
            Start the Process
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
