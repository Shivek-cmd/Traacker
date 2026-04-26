import type { Metadata } from "next"
import Link from "next/link"
import PageHero from "@/components/layout/PageHero"
import PricingCards from "@/components/sections/PricingCards"
import PricingFAQ from "@/components/sections/PricingFAQ"

export const metadata: Metadata = {
  title: "Pricing — Traakar Dispatch",
  description:
    "Traakar charges 5–10% commission on loads we book for you. No upfront fees, no monthly retainers, no hidden costs. You pay when you earn.",
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparent Pricing"
        title="You Pay When"
        titleHighlight="You Earn."
        subtitle="No setup fees, no monthly retainers, no surprise charges. Traakar earns a commission only on the loads we book for you — so our success depends entirely on yours."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
      />
      <PricingCards />
      <PricingFAQ />
      <PricingCTA />
    </>
  )
}

function PricingCTA() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "65vh" }}>
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover" aria-hidden="true">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 50%, rgba(0,0,0,0.82) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.7) 100%)" }} />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center py-28">
        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>
          No Risk to Get Started
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight font-display mb-6" style={{ color: "var(--text-on-dark)" }}>
          Start Dispatching Today.{" "}
          <br className="hidden sm:block" />
          <span className="gradient-text-on-dark">Pay Nothing Upfront.</span>
        </h2>
        <p className="text-lg mb-10 leading-relaxed" style={{ color: "var(--text-muted-on-dark)" }}>
          Onboarding takes minutes. Your dispatcher gets to work the same day.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact-us"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-base rounded-xl font-display"
          >
            Get Started — It's Free to Join
          </Link>
          <Link
            href="/services"
            className="btn-outline-on-dark inline-flex items-center gap-2 px-8 py-4 font-semibold text-base rounded-xl backdrop-blur-sm font-display"
          >
            See What's Included
          </Link>
        </div>
        <p className="mt-8 text-sm" style={{ color: "var(--text-subtle-on-dark)" }}>
          No upfront fees · 5–10% commission only · All equipment types welcome
        </p>
      </div>
    </section>
  )
}
