import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Search, TrendingUp, Route, FileText, Headphones } from "lucide-react"
import PageHero from "@/components/layout/PageHero"
import ServiceCardScroll from "@/components/sections/ServiceCardScroll"
import Stats from "@/components/sections/Stats"
import HowItWorks from "@/components/sections/HowItWorks"
import WhyUs from "@/components/sections/WhyUs"

export const metadata: Metadata = {
  title: "Dispatch Services — Tracckar",
  description:
    "Explore all Tracckar dispatch services: load sourcing, rate negotiation, route optimization, paperwork support, and dedicated dispatchers for owner-operators.",
}

const serviceList = [
  {
    slug: "load-sourcing",
    icon: Search,
    title: "Load Sourcing & Booking",
    tagline: "Your truck should never sit idle.",
    body: "We monitor DAT, Truckstop.com, and direct broker networks 24/7 to keep your truck consistently loaded with profitable freight.",
  },
  {
    slug: "rate-negotiation",
    icon: TrendingUp,
    title: "Rate Negotiation",
    tagline: "We don't settle for average.",
    body: "Every load gets negotiated. We use real-time market data to push back on lowball offers and secure the best per-mile rate for you.",
  },
  {
    slug: "route-optimization",
    icon: Route,
    title: "Route Optimization",
    tagline: "More loaded miles. Less wasted fuel.",
    body: "Smart lane chaining, backhaul planning, and HOS-aware scheduling minimize deadhead and cut your cost-per-mile.",
  },
  {
    slug: "paperwork-support",
    icon: FileText,
    title: "Paperwork & Back Office",
    tagline: "We handle the paperwork. You drive.",
    body: "BOL, POD, rate confirmations, detention claims, invoicing — every document handled so you never stop to deal with admin.",
  },
  {
    slug: "dedicated-dispatcher",
    icon: Headphones,
    title: "Dedicated Dispatcher",
    tagline: "One contact. Always available.",
    body: "One dispatcher who learns your lanes, preferences, and goals. Real-time updates. 24/7 availability. No rotating agents.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Every Service You Need to"
        titleHighlight="Run Profitably."
        subtitle="From finding loads to handling paperwork, Tracckar covers the full dispatch operation so you can focus on driving."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      {/* Service cards carousel */}
      <ServiceCardScroll showHeader={false} />

      {/* Stats */}
      <Stats />

      {/* Full-coverage breakdown */}
      <section className="py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — sticky statement */}
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>
                The Full Picture
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight font-display mb-6" style={{ color: "var(--text)" }}>
                Five Services.{" "}
                <span className="gradient-text">One Complete Operation.</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                Most dispatchers do one thing — find loads. Tracckar handles the entire operation: sourcing, negotiating, routing, paperwork, and a dedicated point of contact available around the clock.
              </p>
              <p className="text-base leading-relaxed mb-10" style={{ color: "var(--text-muted)" }}>
                You don't pay extra for more services. Everything here is included in the same 5–10% commission per load we book for you.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-sm font-bold font-display"
                style={{ color: "var(--primary)" }}
              >
                See exactly what's included in pricing
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right — service list */}
            <div className="flex flex-col gap-4">
              {serviceList.map((service, i) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex gap-5 p-6 rounded-2xl card-dark transition-all duration-300"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300"
                      style={{
                        background: "color-mix(in srgb, var(--primary) 10%, transparent)",
                        border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)",
                      }}
                    >
                      <Icon size={18} style={{ color: "var(--primary)" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-bold text-base font-display" style={{ color: "var(--text)" }}>
                          {service.title}
                        </h3>
                        <ArrowRight
                          size={16}
                          className="shrink-0 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                          style={{ color: "var(--primary)" }}
                        />
                      </div>
                      <p className="text-xs font-medium italic mb-2" style={{ color: "var(--primary)" }}>
                        {service.tagline}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {service.body}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Why Us */}
      <WhyUs />

      {/* Pricing teaser */}
      <section className="py-24 bg-bg-secondary">
        <div
          className="absolute left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, color-mix(in srgb, var(--primary) 25%, transparent), transparent)" }}
        />
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 items-center">
            {/* Big number */}
            <div className="text-center sm:text-left">
              <p className="text-6xl sm:text-7xl font-black font-display" style={{ color: "var(--text)" }}>
                5–10<span className="text-4xl" style={{ color: "var(--primary)" }}>%</span>
              </p>
              <p className="mt-1 text-base font-semibold" style={{ color: "var(--text-muted)" }}>
                per load booked
              </p>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-24 mx-auto" style={{ background: "var(--border-hover)" }} />

            {/* Description + CTA */}
            <div className="sm:col-span-1 flex flex-col gap-4">
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                One flat commission on every load we book. No monthly retainers, no setup fees, no surprise charges. You pay only when you earn.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/pricing"
                  className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-white font-bold text-sm rounded-xl font-display"
                >
                  View Full Pricing
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/contact-us"
                  className="btn-outline inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-xl font-display"
                  style={{ color: "var(--text)" }}
                >
                  Get Started Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesCTA />
    </>
  )
}

function ServicesCTA() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "65vh" }}>
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover" aria-hidden="true">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 50%, rgba(0,0,0,0.82) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.7) 100%)" }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center py-28">
        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>
          Ready to Get Started?
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight font-display mb-6" style={{ color: "var(--text-on-dark)" }}>
          All Services. One Dispatcher.{" "}
          <br className="hidden sm:block" />
          <span className="gradient-text-on-dark">No Upfront Cost.</span>
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--text-muted-on-dark)" }}>
          You get the full Tracckar dispatch operation — every service listed here — for a simple 5–10% commission on loads we book for you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact-us"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-base rounded-xl font-display"
          >
            Start Dispatching Today
          </Link>
          <Link
            href="/pricing"
            className="btn-outline-on-dark inline-flex items-center gap-2 px-8 py-4 font-semibold text-base rounded-xl backdrop-blur-sm font-display"
          >
            View Pricing
          </Link>
        </div>
        <p className="mt-8 text-sm" style={{ color: "var(--text-subtle-on-dark)" }}>
          No upfront fees · 5–10% commission only · All equipment types welcome
        </p>
      </div>
    </section>
  )
}
