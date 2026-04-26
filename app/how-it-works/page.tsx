import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageHero from "@/components/layout/PageHero"
import HowItWorks from "@/components/sections/HowItWorks"
import Stats from "@/components/sections/Stats"
import FAQ from "@/components/sections/FAQ"
import type { FAQItem } from "@/components/sections/FAQ"

export const metadata: Metadata = {
  title: "How It Works — Traakar Dispatch",
  description:
    "Getting started with Traakar takes minutes. Share your truck details, and your dedicated dispatcher starts sourcing profitable loads the same day.",
}

const faqs: FAQItem[] = [
  {
    q: "How long does onboarding take?",
    a: "Most drivers are fully onboarded within the same day. We just need your MC number, equipment details, preferred lanes, and rate expectations. From there, your dispatcher gets to work immediately.",
  },
  {
    q: "Do I have to accept every load you find?",
    a: "Never. Every load is presented to you with full details — rate, broker, lane, pickup/delivery times — before anything is confirmed. You always have final approval.",
  },
  {
    q: "What if I already have some direct broker relationships?",
    a: "We work alongside your existing setup. Traakar focuses on filling in gaps, improving your average rate, and making sure your truck is never sitting idle unnecessarily.",
  },
  {
    q: "How does payment work?",
    a: "We charge 5–10% commission on loads we book for you, deducted after you're paid. No upfront fees, no monthly retainers. Our earnings depend directly on yours.",
  },
  {
    q: "What happens when there's a problem on a load?",
    a: "Your dispatcher handles it. Shipper delays, broker disputes, detention claims, document issues — we manage all broker communication so you can focus on driving.",
  },
  {
    q: "Can I run multiple trucks through Traakar?",
    a: "Yes. Whether you're an owner-operator with one truck or a small fleet, Traakar scales with your operation. Contact us and we'll discuss the right setup.",
  },
]

const beforeAfter = [
  { before: "Spending hours on load boards every morning", after: "Dispatcher sends qualified loads to you" },
  { before: "Accepting the broker's first offer", after: "Every rate gets negotiated with market data" },
  { before: "Dead miles between loads", after: "Backhaul planning minimizes empty repositioning" },
  { before: "Chasing brokers for paperwork updates", after: "We handle all broker communication for you" },
  { before: "Dispatcher who disappears after one load", after: "Dedicated contact who learns your operation" },
]

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="The Process"
        title="Simple to Start."
        titleHighlight="Built to Last."
        subtitle="Four steps from sign-up to your first load. Everything after that runs on autopilot — you drive, we handle the operation."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "How It Works" }]}
      />

      {/* Sticky scroll process */}
      <HowItWorks />

      {/* Before / After */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>
              The Difference
            </p>
            <h2 className="text-4xl font-extrabold font-display leading-tight" style={{ color: "var(--text)" }}>
              Before Traakar.{" "}
              <span className="gradient-text">After Traakar.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {/* Header */}
            <div className="grid grid-cols-2 gap-4 pb-3" style={{ borderBottom: "1px solid var(--border)" }}>
              <p className="text-xs font-bold uppercase tracking-wider text-center" style={{ color: "var(--text-subtle)" }}>
                Without Traakar
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-center" style={{ color: "var(--primary)" }}>
                With Traakar
              </p>
            </div>
            {beforeAfter.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 gap-4 p-4 rounded-xl"
                style={{ background: i % 2 === 0 ? "var(--bg-elevated)" : "transparent", border: "1px solid var(--border)" }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ background: "var(--text-subtle)" }} />
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {row.before}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ background: "var(--primary)" }} />
                  <p className="text-sm leading-relaxed font-medium" style={{ color: "var(--text)" }}>
                    {row.after}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      <FAQ
        eyebrow="FAQ"
        title="Questions About"
        titleHighlight="The Process"
        items={faqs}
        bg="bg-bg-secondary"
      />

      {/* CTA */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "60vh" }}>
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover" aria-hidden="true">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.85) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.7) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center py-24">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>
            Ready?
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-display leading-tight mb-6" style={{ color: "var(--text-on-dark)" }}>
            The Process Starts With{" "}
            <span className="gradient-text-on-dark">One Message.</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "var(--text-muted-on-dark)" }}>
            No paperwork, no commitment. Just tell us about your truck and we handle everything from there.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-base rounded-xl font-display"
            >
              Get Started Now
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/services"
              className="btn-outline-on-dark inline-flex items-center gap-2 px-8 py-4 font-semibold text-base rounded-xl backdrop-blur-sm font-display"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
