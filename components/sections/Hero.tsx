"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, TrendingUp } from "lucide-react"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const videoOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const videoScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.12])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -80])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      <motion.div
        style={{ opacity: videoOpacity, scale: videoScale }}
        className="absolute inset-0 z-0"
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

        {/* Main overlay — fades to transparent at bottom so there's no
            "white shadow" in light mode. The next section handles its own bg. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.20) 100%)"
          }}
        />

        {/* Edge vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
             "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.80) 100%)",
          }}
        />
      </motion.div>

      {/* Content — always on dark video, always uses --text-on-dark vars */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            border: "1px solid color-mix(in srgb, var(--primary) 40%, transparent)",
            background: "color-mix(in srgb, var(--primary) 12%, transparent)",
          }}
        >
          <TrendingUp size={14} style={{ color: "var(--primary)" }} />
          <span className="text-sm font-medium" style={{ color: "var(--primary)" }}>
            U.S. Truck Dispatch — 5% Per Load Only
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.02] tracking-tight font-display"
            style={{ color: "var(--text-on-dark)" }}
          >
            Keep Your Trucks{" "}
            <br className="hidden sm:block" />
            {/* gradient-text-on-dark always starts white — readable over any dark video */}
            <span className="gradient-text-on-dark">Moving.</span>
          </motion.h1>
        </div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl leading-relaxed font-semibold"
          style={{ color: "var(--text-muted-on-dark)" }}
        >
          Keep Your Revenue Growing.
          <br />
          <span
            className="text-base sm:text-lg font-normal"
            style={{ color: "var(--text-muted-on-dark)", opacity: 0.82 }}
          >
            We secure high-paying loads, negotiate hard, and manage everything — so you just drive.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group btn-primary inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-base rounded-xl font-display"
          >
            Dispatch My Truck
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          {/* btn-outline-on-dark: always white border/text, works on any dark bg */}
          <a
            href="#how-it-works"
            className="btn-outline-on-dark inline-flex items-center gap-2 px-8 py-4 font-semibold text-base rounded-xl backdrop-blur-sm font-display"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Trust bar — always on dark video, always white-toned */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm"
          style={{ color: "var(--text-subtle-on-dark)" }}
        >
          {[
            "No upfront cost",
            "Owner-operators welcome",
            "24/7 dispatcher support",
            "All equipment types",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--primary)" }}
              />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: "2px solid rgba(255,255,255,0.25)" }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: "var(--primary)" }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
