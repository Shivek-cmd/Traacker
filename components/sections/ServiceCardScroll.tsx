"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { services } from "@/lib/services"

// Duplicate for seamless infinite loop
const loopedServices = [...services, ...services]

interface Props {
  showHeader?: boolean
  eyebrow?: string
  title?: string
  titleHighlight?: string
  subtitle?: string
}

export default function ServiceCardScroll({
  showHeader = true,
  eyebrow = "What We Do",
  title = "We Find Loads. We Negotiate Hard.",
  titleHighlight = "We Keep You Moving.",
  subtitle = "We don't just dispatch trucks. We secure profitable freight, push for better rates, and make sure your truck is always working.",
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: "-80px" })
  const isPausedRef = useRef(false)
  const rafRef = useRef<number | null>(null)
  // Track fractional position for sub-pixel smooth movement
  const posRef = useRef(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const SPEED = 0.5 // px per frame (~30px/s at 60fps)

    const tick = () => {
      if (!isPausedRef.current) {
        posRef.current += SPEED
        // When past the first half (original set), silently jump back
        const half = el.scrollWidth / 2
        if (posRef.current >= half) posRef.current -= half
        el.scrollLeft = posRef.current
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    // Pause auto-scroll briefly while user manually scrolls
    isPausedRef.current = true
    const delta = dir === "left" ? -340 : 340
    posRef.current = Math.max(0, posRef.current + delta)
    el.scrollLeft = posRef.current
    setTimeout(() => { isPausedRef.current = false }, 1200)
  }

  return (
    <section id="services" ref={sectionRef} className="py-28 relative bg-bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12"
          >
            <div className="max-w-2xl">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--primary)" }}
              >
                {eyebrow}
              </p>
              <h2
                className="text-4xl sm:text-5xl font-extrabold leading-tight font-display"
                style={{ color: "var(--text)" }}
              >
                {title}{" "}
                <span className="gradient-text">{titleHighlight}</span>
              </h2>
              {subtitle && (
                <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {subtitle}
                </p>
              )}
            </div>

            {/* Arrow navigation */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  border: "1px solid var(--border-hover)",
                  color: "var(--text)",
                  background: "var(--bg-secondary)",
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  border: "1px solid var(--border-hover)",
                  color: "var(--text)",
                  background: "var(--bg-secondary)",
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        )}

        {/* Scroll track — no snap so auto-scroll stays smooth */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-hidden pb-4 -mx-6 lg:-mx-8 px-6 lg:px-8"
          onMouseEnter={() => { isPausedRef.current = true }}
          onMouseLeave={() => { isPausedRef.current = false }}
          onTouchStart={() => { isPausedRef.current = true }}
          onTouchEnd={() => { setTimeout(() => { isPausedRef.current = false }, 800) }}
        >
          {loopedServices.map((service, i) => (
            <motion.div
              key={`${service.slug}-${i}`}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.05 + (i % services.length) * 0.08 }}
              className="group relative shrink-0 rounded-2xl overflow-hidden cursor-pointer"
              style={{ width: "clamp(260px, 28vw, 320px)", height: "420px" }}
            >
              {/* Background image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />

              {/* Permanent dark gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.12) 100%)",
                }}
              />

              {/* Badge — always visible at top */}
              <div
                className="absolute top-5 left-5 flex items-center gap-1 px-3 py-1.5 rounded-full text-white text-xs font-bold font-display tracking-wider z-10"
                style={{ background: "var(--primary)" }}
              >
                0{(i % services.length) + 1}&nbsp;/&nbsp;{service.category}
              </div>

              {/* Default bottom label — fades out on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-300 group-hover:opacity-0 z-10">
                <h3 className="text-white text-xl font-extrabold font-display leading-snug">
                  {service.title}
                </h3>
              </div>

              {/* Hover panel — slides up from bottom */}
              <div
                className="service-card-panel absolute bottom-0 left-0 right-0 p-6 z-20"
                style={{ background: "var(--bg-elevated)" }}
              >
                <div
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-white text-xs font-bold font-display tracking-wider mb-3"
                  style={{ background: "var(--primary)" }}
                >
                  0{(i % services.length) + 1}&nbsp;/&nbsp;{service.category}
                </div>

                <h3
                  className="text-lg font-extrabold font-display leading-snug mb-2"
                  style={{ color: "var(--text)" }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{
                    color: "var(--text-muted)",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {service.body}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold font-display transition-opacity duration-150 hover:opacity-80"
                  style={{ background: "var(--text)", color: "var(--bg)" }}
                >
                  VIEW
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
