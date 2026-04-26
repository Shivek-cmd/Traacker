"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "How does the commission work?",
    a: "We charge a percentage of the gross load rate for every load we book and confirm for you. There are no fees before you earn — you only pay when a load is complete and paid.",
  },
  {
    q: "What if a load falls through or gets TONU'd?",
    a: "If a load is cancelled before you depart, no commission is charged. If you're TONU'd after arriving, we file the TONU claim on your behalf — and we do not charge commission on TONU payments.",
  },
  {
    q: "Are there any upfront costs or setup fees?",
    a: "None. Onboarding is completely free. We get to work the same day you sign the agreement. Your first payment to Traacker happens only after your first completed load.",
  },
  {
    q: "What equipment types do you dispatch?",
    a: "We dispatch dry van, reefer, flatbed, step deck, lowboy, box truck, and power-only. If you have a specialized setup, contact us — we likely have broker relationships in your segment.",
  },
  {
    q: "Is there a minimum number of loads per week?",
    a: "No minimums. We work around your availability. Some drivers run 5 days a week; others run 3. We build a load plan around your schedule, not ours.",
  },
  {
    q: "Can I still pick my own loads?",
    a: "Yes. We present options and you have final say. Many clients give us standing instructions ('take anything over $X/mile in these lanes') so we can move fast without waiting for approval on every load — but you can stay as involved as you want.",
  },
  {
    q: "Do you handle detention and layover claims?",
    a: "Yes. Tracking detention time, filing claims, and following up with brokers is part of our standard service. We don't let earned money sit uncollected.",
  },
  {
    q: "How long does onboarding take?",
    a: "Typically 15–30 minutes. We need your MC number, equipment details, W-9, and carrier packet. After that, your dispatcher starts sourcing loads immediately.",
  },
  {
    q: "What if I'm not happy with my dispatcher?",
    a: "We'll reassign you to a different dispatcher, no questions asked. The relationship has to work for you — a dispatcher you don't trust isn't useful to anyone.",
  },
  {
    q: "Do you work with new authorities?",
    a: "Yes, we work with new MCs. There may be a limited number of brokers available during your first 30–90 days while you build history, but we have relationships that accommodate newer carriers.",
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
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
        className="w-full flex items-center justify-between gap-4 p-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-text font-semibold text-sm sm:text-base font-display leading-snug">{q}</span>
        <ChevronDown
          size={18}
          className="shrink-0 text-muted transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: open ? "var(--primary)" : undefined }}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="px-5 pb-5 text-muted text-sm leading-relaxed"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <span className="pt-4 block">{a}</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function PricingFAQ() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-24 bg-bg-secondary relative">
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
            Got Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text font-display">
            Frequently Asked <span className="text-shimmer">Questions</span>
          </h2>
        </motion.div>

        {inView && (
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
