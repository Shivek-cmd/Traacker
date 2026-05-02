import type { Metadata } from "next"
import PageHero from "@/components/layout/PageHero"
import PricingCards from "@/components/sections/PricingCards"
import PricingFAQ from "@/components/sections/PricingFAQ"
import CTA from "@/components/sections/CTA"

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
      <CTA
        eyebrow="No Risk to Get Started"
        headline="Start Dispatching Today."
        headlineHighlight="Pay Nothing Upfront."
        subtext="Onboarding takes minutes. Your dispatcher gets to work the same day."
        primaryLabel="Get Started — It's Free to Join"
        primaryHref="/contact-us"
        secondaryLabel="See What's Included"
        secondaryHref="/services"
      />
    </>
  )
}
