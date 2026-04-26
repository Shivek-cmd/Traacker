import type { Metadata } from "next"
import Link from "next/link"
import PageHero from "@/components/layout/PageHero"
import PricingCards from "@/components/sections/PricingCards"
import PricingFAQ from "@/components/sections/PricingFAQ"

export const metadata: Metadata = {
  title: "Pricing — Traacker Dispatch",
  description:
    "Traacker charges 5–10% commission on loads we book for you. No upfront fees, no monthly retainers, no hidden costs. You pay when you earn.",
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparent Pricing"
        title="You Pay When"
        titleHighlight="You Earn."
        subtitle="No setup fees, no monthly retainers, no surprise charges. Traacker earns a commission only on the loads we book for you — so our success depends entirely on yours."
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
    <section className="py-20 bg-bg-secondary relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in srgb, var(--primary) 30%, transparent), transparent)",
        }}
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>
          No Risk to Get Started
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-text font-display mb-6">
          Start Dispatching Today.{" "}
          <span className="text-shimmer">Pay Nothing Upfront.</span>
        </h2>
        <p className="text-muted text-lg mb-10">
          Onboarding takes minutes. Your dispatcher gets to work the same day.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-base rounded-xl font-display"
          >
            Get Started — It's Free to Join
          </Link>
          <Link
            href="/services"
            className="btn-outline inline-flex items-center gap-2 px-8 py-4 text-text font-semibold text-base rounded-xl font-display"
          >
            See What's Included
          </Link>
        </div>
      </div>
    </section>
  )
}
