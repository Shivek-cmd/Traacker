"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"

/* ─── Data ────────────────────────────────────────────────────── */
const leftTestimonials = [
  {
    name: "Marcus T.",
    role: "Owner-Operator",
    equipment: "Dry Van · Texas",
    stars: 5,
    quote:
      "I was doing everything myself — chasing loads, dealing with brokers, handling paperwork at night. Tracckar took all of that off my plate. My earnings went up because I'm just driving now.",
  },
  {
    name: "Darnell R.",
    role: "Fleet Owner",
    equipment: "3 Trucks · Georgia",
    stars: 5,
    quote:
      "The rate negotiation alone paid for the service. My dispatcher doesn't just accept the first number — he fights for it every single time. I can tell the difference in my weekly settlements.",
  },
  {
    name: "Tony K.",
    role: "Owner-Operator",
    equipment: "Flatbed · Tennessee",
    stars: 5,
    quote:
      "Went from averaging $2.10/mile to $2.65/mile in the first month. I didn't change anything except my dispatcher. That's real money every week.",
  },
  {
    name: "Jerome B.",
    role: "Owner-Operator",
    equipment: "Reefer · Alabama",
    stars: 5,
    quote:
      "They found me a consistent produce lane out of Florida that I've been running for four months. Before Tracckar I had no idea lanes like that were available to a single truck.",
  },
]

const rightTestimonials = [
  {
    name: "Lisa M.",
    role: "Owner-Operator",
    equipment: "Reefer · Ohio",
    stars: 5,
    quote:
      "What I appreciate most is the communication. I always know what's happening. My last dispatcher would go silent for hours. Tracckar feels like a real business partner.",
  },
  {
    name: "Carlos V.",
    role: "Fleet Owner",
    equipment: "5 Trucks · Florida",
    stars: 5,
    quote:
      "Managing five trucks used to mean five times the headaches. Now my dispatcher coordinates all of it. My stress is down, my gross is up. Best business decision I made this year.",
  },
  {
    name: "Sandra P.",
    role: "Owner-Operator",
    equipment: "Step Deck · California",
    stars: 5,
    quote:
      "The detention claims alone are worth it. I was leaving hundreds of dollars on the table every month because I didn't know how to fight for it. My dispatcher does.",
  },
  {
    name: "Ray A.",
    role: "Owner-Operator",
    equipment: "Dry Van · Illinois",
    stars: 5,
    quote:
      "I've used three dispatch services. Tracckar is the first one that actually feels like they work for me instead of just collecting a check. The difference is night and day.",
  },
]

const featured = {
  name: "Darius W.",
  role: "Fleet Owner",
  equipment: "8 Trucks · North Carolina",
  stars: 5,
  quote:
    "I scaled from 3 trucks to 8 in under a year. Tracckar handled dispatch for every single one. The lane strategy they put together cut my average deadhead from 22% down to 9%. That's not marketing — that's my actual numbers.",
}

/* ─── Sub-components ──────────────────────────────────────────── */
function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} style={{ fill: "var(--primary)", color: "var(--primary)" }} />
      ))}
    </div>
  )
}

function Avatar({ name }: { name: string }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm font-display"
      style={{
        background: "color-mix(in srgb, var(--primary) 20%, transparent)",
        color: "var(--primary)",
      }}
    >
      {name[0]}
    </div>
  )
}

type Testimonial = (typeof leftTestimonials)[number]

function Card({ t, dark = false }: { t: Testimonial; dark?: boolean }) {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{
        background: dark ? "var(--bg-tertiary)" : "var(--bg-elevated)",
        border: `1px solid ${dark ? "color-mix(in srgb, var(--primary) 25%, transparent)" : "var(--border)"}`,
      }}
    >
      <Stars count={t.stars} />
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: dark ? "var(--text)" : "var(--text-muted)" }}
      >
        "{t.quote}"
      </p>
      <div className="flex items-center gap-3" style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
        <Avatar name={t.name} />
        <div>
          <p className="text-sm font-semibold font-display" style={{ color: dark ? "var(--text)" : "var(--text)" }}>
            {t.name}
          </p>
          <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
            {t.role} · {t.equipment}
          </p>
        </div>
      </div>
    </div>
  )
}

/* Infinite-scroll column — duplicates cards for seamless loop */
function ScrollColumn({
  items,
  direction,
}: {
  items: Testimonial[]
  direction: "up" | "down"
}) {
  const doubled = [...items, ...items]
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: "560px",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div className={direction === "up" ? "animate-scroll-up" : "animate-scroll-down"}>
        <div className="flex flex-col gap-4 pb-4">
          {doubled.map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Main section ────────────────────────────────────────────── */
export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="testimonials" ref={ref} className="py-28 relative bg-bg overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in srgb, var(--primary) 20%, transparent), transparent)",
        }}
      />

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
            Driver Stories
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-text leading-tight font-display">
            You're Not Just Another{" "}
            <span className="text-shimmer">Truck to Us</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
            Here's what drivers and fleet owners say after making the switch.
          </p>
        </motion.div>

        {/* Three-column layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center"
        >
          {/* Left — scrolls top → bottom */}
          <div className="hidden lg:block">
            <ScrollColumn items={leftTestimonials} direction="down" />
          </div>

          {/* Center — fixed featured card */}
          <div className="flex flex-col gap-4">
            <div
              className="rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden"
              style={{
                background: "var(--bg-tertiary)",
                border: "2px solid color-mix(in srgb, var(--primary) 45%, transparent)",
                boxShadow: "0 0 60px color-mix(in srgb, var(--primary) 12%, transparent)",
              }}
            >
              {/* Corner glow */}
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
                aria-hidden="true"
              />

              <div className="flex items-center gap-2">
                <Stars count={featured.stars} />
                <span
                  className="ml-auto text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full font-display"
                  style={{
                    background: "color-mix(in srgb, var(--primary) 15%, transparent)",
                    color: "var(--primary)",
                  }}
                >
                  Featured
                </span>
              </div>

              <p className="text-text text-base leading-relaxed font-medium relative z-10">
                "{featured.quote}"
              </p>

              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: "1px solid color-mix(in srgb, var(--primary) 15%, transparent)" }}
              >
                <Avatar name={featured.name} />
                <div>
                  <p className="text-text font-bold text-sm font-display">{featured.name}</p>
                  <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
                    {featured.role} · {featured.equipment}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile: show a couple of static cards below the featured */}
            <div className="flex flex-col gap-4 lg:hidden">
              {leftTestimonials.slice(0, 2).map((t) => (
                <Card key={t.name} t={t} />
              ))}
            </div>
          </div>

          {/* Right — scrolls bottom → top */}
          <div className="hidden lg:block">
            <ScrollColumn items={rightTestimonials} direction="up" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
