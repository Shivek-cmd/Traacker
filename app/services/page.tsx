import type { Metadata } from "next"
import Link from "next/link"
import PageHero from "@/components/layout/PageHero"
import ServicesGrid from "@/components/sections/ServicesGrid"

export const metadata: Metadata = {
  title: "Dispatch Services — Traacker",
  description:
    "Explore all Traacker dispatch services: load sourcing, rate negotiation, route optimization, paperwork support, and dedicated dispatchers for owner-operators.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Every Service You Need to"
        titleHighlight="Run Profitably."
        subtitle="From finding loads to handling paperwork, Traacker covers the full dispatch operation so you can focus on driving."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <ServicesGrid />
      <ServicesCTA />
    </>
  )
}

function ServicesCTA() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>
          Ready to Get Started?
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-text mb-6 font-display">
          All Services. One Dispatcher.{" "}
          <span className="gradient-text">No Upfront Cost.</span>
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto mb-10">
          You get the full Traacker dispatch operation — every service listed here — for a simple 5–10% commission on loads we book for you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-base rounded-xl font-display"
          >
            Start Dispatching Today
          </Link>
          <Link
            href="/pricing"
            className="btn-outline inline-flex items-center gap-2 px-8 py-4 text-text font-semibold text-base rounded-xl font-display"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  )
}
