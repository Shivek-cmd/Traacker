"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight, Shield, Clock, TrendingUp, Truck } from "lucide-react"

const stats = [
  { value: 12400, suffix: "+", label: "Loads Dispatched" },
  { value: 98, suffix: "%", label: "On-Time Delivery" },
  { value: 5, suffix: "%", label: "Flat Rate Per Load" },
  { value: 24, suffix: "/7", label: "Dispatcher Support" },
]

function AnimatedNumber({
  value,
  suffix,
  prefix,
}: {
  value: number
  suffix?: string
  prefix?: string
}) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value])

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60])
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-bg"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient glow — top left */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          top: "-20%",
          left: "-10%",
          width: "60%",
          height: "70%",
          background:
            "radial-gradient(ellipse, color-mix(in srgb, var(--primary) 8%, transparent) 0%, transparent 70%)",
        }}
      />

      {/* Main layout */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16 xl:px-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center min-h-screen pt-32 pb-24 lg:pt-28 lg:pb-0">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col justify-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 self-start mb-8"
            >
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase"
                style={{
                  border: "1px solid color-mix(in srgb, var(--primary) 40%, transparent)",
                  background: "color-mix(in srgb, var(--primary) 10%, transparent)",
                  color: "var(--primary)",
                  letterSpacing: "0.12em",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--primary)" }}
                />
                U.S. Truck Dispatch
              </div>
            </motion.div>

            {/* Headline line 1 */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-extrabold leading-[0.96] tracking-tight text-text"
                style={{ fontSize: "clamp(3.2rem, 7vw, 6rem)" }}
              >
                Keep Your
              </motion.h1>
            </div>

            {/* Headline line 2 */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-extrabold leading-[0.96] tracking-tight text-text"
                style={{ fontSize: "clamp(3.2rem, 7vw, 6rem)" }}
              >
                Trucks{" "}
                <span className="gradient-text">Moving.</span>
              </motion.h1>
            </div>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="origin-left my-8"
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, color-mix(in srgb, var(--primary) 50%, transparent) 0%, transparent 100%)",
              }}
            />

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="text-lg leading-relaxed mb-10 max-w-lg text-muted"
            >
              We secure high-paying loads, negotiate hard, and manage everything —
              so you focus on the road.{" "}
              <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                Only 5% per load, no upfront cost.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-14"
            >
              <a
                href="#contact"
                className="group btn-primary inline-flex items-center gap-3 font-display font-bold text-sm tracking-wide rounded-xl"
                style={{
                  color: "#ffffff",
                  padding: "14px 28px",
                }}
              >
                Dispatch My Truck
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>

              <a
                href="#how-it-works"
                className="btn-outline inline-flex items-center gap-2 font-display font-semibold text-sm tracking-wide rounded-xl text-text"
                style={{ padding: "14px 28px" }}
              >
                See How It Works
              </a>
            </motion.div>

            {/* Trust pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: Shield, label: "No upfront cost" },
                { icon: Truck, label: "All equipment types" },
                { icon: Clock, label: "24/7 support" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-subtle"
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Icon size={12} style={{ color: "var(--primary)" }} />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — Video frame ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Video container */}
            <motion.div
              style={{ y: videoY }}
              className="relative overflow-hidden"
              style={{
                borderRadius: "20px",
                border: "1px solid var(--border-hover)",
                aspectRatio: "9/11",
                maxHeight: "680px",
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                aria-hidden="true"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>

              {/* Overlay — always dark since it sits on a video */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.55) 100%)",
                }}
              />

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.2 }}
                className="absolute bottom-6 left-6 right-6 rounded-xl p-4"
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid color-mix(in srgb, var(--primary) 25%, transparent)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <p
                  className="text-xs font-semibold uppercase mb-3"
                  style={{
                    color: "var(--primary)",
                    letterSpacing: "0.12em",
                  }}
                >
                  Live Performance
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-xl font-extrabold font-display mb-0.5 text-text">
                        <AnimatedNumber
                          value={s.value}
                          suffix={s.suffix}
                          prefix={s.prefix}
                        />
                      </p>
                      <p className="text-xs text-subtle">{s.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Top-right badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="absolute top-5 right-5 flex items-center gap-2 px-3 py-2 rounded-full"
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid color-mix(in srgb, var(--primary) 30%, transparent)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <TrendingUp size={12} style={{ color: "var(--primary)" }} />
                <span
                  className="text-xs font-semibold"
                  style={{ color: "var(--primary)" }}
                >
                  5% Flat Rate
                </span>
              </motion.div>
            </motion.div>

            {/* Bottom-right decorative glow */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in srgb, var(--primary) 12%, transparent) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: "1px solid var(--border-hover)" }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: "var(--primary)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}