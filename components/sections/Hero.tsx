"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight, Shield, Clock, TrendingUp, Truck } from "lucide-react"

const stats = [
  { value: 12400, suffix: "+", label: "Loads Dispatched" },
  { value: 98, suffix: "%", label: "On-Time Delivery" },
  { value: 5, suffix: "%", label: "Flat Rate" },
  { value: 24, suffix: "/7", label: "Support" },
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
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen"
      style={{ background: "#000" }}
    >
      {/* ── FULL-BLEED VIDEO BACKGROUND ── */}
      <motion.div
        style={{ y: videoY }}
        className="absolute inset-0 z-0 pointer-events-none scale-125 origin-top-right"
      >
        {/* scale-125 only on the video so overlays aren't distorted */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-contain scale-125"
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlays — not inside the parallax so they stay crisp */}
      {/* Top fade — blends hero into navbar */}
      <div
        className="absolute top-0 left-0 right-0 z-1 pointer-events-none"
        style={{
          height: "180px",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, transparent 100%)",
        }}
      />

      {/* Main directional dark overlay */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.76) 45%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Bottom fade — merges into page background */}
      <div
        className="absolute bottom-0 left-0 right-0 z-1 pointer-events-none"
        style={{
          height: "220px",
        
        }}
      />

      {/* Ambient glow — primary tint top-left */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          top: "-10%",
          left: "-5%",
          width: "50%",
          height: "60%",
          background:
            "radial-gradient(ellipse, color-mix(in srgb, var(--primary) 10%, transparent) 0%, transparent 70%)",
        }}
      />

      {/* ── MAIN LAYOUT — left-aligned content, full width ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16 xl:px-20">
        <div className="flex flex-col pt-28 pb-32 max-w-3xl">

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

          {/* Headline */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-extrabold leading-[0.96] tracking-tight"
             style={{ fontSize: "clamp(3.2rem, 7vw, 6rem)", color: "var(--text-on-dark)" }}
            >
              Keep Your
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-extrabold leading-[0.96] tracking-tight text-white"
              style={{ fontSize: "clamp(3.2rem, 7vw, 6rem)" }}
            >
              Trucks{" "}
              <span className="text-shimmer">Moving.</span>
            </motion.h1>
          </div>

          {/* Divider */}
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
            className="text-lg leading-relaxed mb-10 max-w-lg"
           style={{ color: "var(--text-muted-on-dark)" }}
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
              href="/contact-us"
              className="group btn-primary inline-flex items-center gap-3 font-display font-bold text-sm tracking-wide rounded-xl"
             style={{ color: "var(--text-on-dark)", padding: "14px 28px" }}
            >
              Dispatch My Truck
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>

            <a
              href="#how-it-works"
              className="btn-outline inline-flex items-center gap-2 font-display font-semibold text-sm tracking-wide rounded-xl"
             style={{ padding: "14px 28px", color: "var(--text-on-dark)" }}
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
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
                style={{
                  background: "color-mix(in srgb, var(--primary) 8%, transparent)",
border: "1px solid var(--border-hover)",
                  color: "var(--text-on-dark)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Icon size={12} style={{ color: "var(--primary)" }} />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── OWNER CARD — fixed to right side, like the reference ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
       className="absolute right-10 bottom-40 z-20 hidden lg:flex flex-col items-center gap-4"
      >
        {/* Circle photo */}
        <div
          className="relative"
          style={{
            width: "110px",
            height: "110px",
          }}
        >
          {/* Glowing ring */}
          <div
            className="absolute -inset-[3px] rounded-full"
            style={{
              background: "linear-gradient(135deg, var(--primary), transparent 70%)",
            }}
          />
          <div
            className="relative w-full h-full rounded-full overflow-hidden"
            style={{
             border: "2px solid var(--border-hover)"
            }}
          >
            {/* Placeholder — swap src for owner's real photo */}
            <img
              src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&q=80"
              alt="Owner"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Online dot */}
          <span
            className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full"
            style={{
             background: "var(--success)",
             border: "2px solid var(--bg)"
            }}
          />
        </div>

        {/* Name + role card */}
        <div
          className="px-4 py-3 rounded-xl text-center"
          style={{
           background: "color-mix(in srgb, var(--bg) 40%, transparent)",
            border: "1px solid color-mix(in srgb, var(--primary) 25%, transparent)",
            backdropFilter: "blur(16px)",
            minWidth: "160px",
          }}
        >
          <p className="text-sm font-bold leading-tight" style={{ color: "var(--text-on-dark)" }}>Siddhant Soni</p>
          <p className="text-xs mt-0.5" style={{ color: "var(--primary)" }}>
           Owner
          </p>
          <p className="text-xs mt-0.5"  style={{ color: "var(--text-muted-on-dark)" }}>
            15 yrs experience
          </p>
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
          style={{border: "1px solid var(--border-hover)" }}
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