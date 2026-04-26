"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export interface FAQItem { q: string; a: string }

interface Props {
  eyebrow?: string
  title?: string
  titleHighlight?: string
  items: FAQItem[]
  bg?: "bg-bg" | "bg-bg-secondary"
}

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="card-dark rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-sm sm:text-base font-display leading-snug" style={{ color: "var(--text)" }}>
          {q}
        </span>
        <ChevronDown
          size={18}
          className="shrink-0 transition-transform duration-300"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            color: open ? "var(--primary)" : "var(--text-muted)",
          }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="px-5 pb-5 text-sm leading-relaxed"
              style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}
            >
              <span className="pt-4 block">{a}</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ({
  eyebrow = "Got Questions?",
  title = "Frequently Asked",
  titleHighlight = "Questions",
  items,
  bg = "bg-bg-secondary",
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className={`py-24 ${bg} relative`}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in srgb, var(--primary) 20%, transparent), transparent)",
        }}
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>
            {eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display" style={{ color: "var(--text)" }}>
            {title} <span className="text-shimmer">{titleHighlight}</span>
          </h2>
        </motion.div>
        {inView && (
          <div className="flex flex-col gap-3">
            {items.map((item, i) => (
              <Item key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
