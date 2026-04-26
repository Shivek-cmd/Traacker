import type { Metadata } from "next"
import { Mail, Phone, Clock, MapPin } from "lucide-react"
import PageHero from "@/components/layout/PageHero"
import ContactForm from "@/components/sections/ContactForm"
import FAQ from "@/components/sections/FAQ"
import type { FAQItem } from "@/components/sections/FAQ"

export const metadata: Metadata = {
  title: "Contact Us — Traakar Dispatch",
  description:
    "Get started with Traakar today. No upfront fees — tell us about your truck and we'll be in touch within one business hour.",
}

const whatToExpect = [
  "We review your truck details and preferred lanes",
  "A dedicated dispatcher is assigned to your operation",
  "We start sourcing loads within 24 hours of onboarding",
  "You approve loads before anything is confirmed",
]

const faqs: FAQItem[] = [
  {
    q: "How fast can I get started?",
    a: "Most drivers are onboarded the same day they reach out. Share your MC number, equipment type, and preferred lanes — we handle the rest.",
  },
  {
    q: "Is there any upfront cost to join?",
    a: "None. Traakar charges 5–10% commission only on the loads we successfully book for you. No signup fees, no monthly retainers.",
  },
  {
    q: "What equipment types do you work with?",
    a: "Dry vans, flatbeds, reefers, step decks, box trucks, and power-only. Owner-operators and small fleets both welcome.",
  },
  {
    q: "What if I already have some loads from my own broker relationships?",
    a: "No problem. We work alongside your existing setup and focus on keeping your truck loaded during gaps or slow periods.",
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Started"
        title="Let's Build Your"
        titleHighlight="Dispatch Operation."
        subtitle="Tell us about your truck. A Traakar dispatcher will reach out within 1 business hour — no commitment, no upfront cost."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      {/* Main: form + sidebar */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-extrabold font-display mb-8" style={{ color: "var(--text)" }}>
                Tell us about your operation
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6 lg:sticky lg:top-28">
              {/* Contact info */}
              <div
                className="rounded-2xl p-6 flex flex-col gap-5"
                style={{ border: "1px solid var(--border)", background: "var(--bg-elevated)" }}
              >
                <h3 className="font-bold text-base font-display" style={{ color: "var(--text)" }}>
                  Prefer to reach us directly?
                </h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:dispatch@traakar.com"
                    className="flex items-center gap-3 text-sm transition-colors duration-150 hover:opacity-80"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "color-mix(in srgb, var(--primary) 12%, transparent)" }}
                    >
                      <Mail size={15} style={{ color: "var(--primary)" }} />
                    </div>
                    dispatch@traakar.com
                  </a>
                  <a
                    href="tel:+15516553051"
                    className="flex items-center gap-3 text-sm transition-colors duration-150 hover:opacity-80"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "color-mix(in srgb, var(--primary) 12%, transparent)" }}
                    >
                      <Phone size={15} style={{ color: "var(--primary)" }} />
                    </div>
                    +1 (551) 655-3051
                  </a>
                  <div
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "color-mix(in srgb, var(--primary) 12%, transparent)" }}
                    >
                      <Clock size={15} style={{ color: "var(--primary)" }} />
                    </div>
                    Available 24 / 7 — dispatchers always on
                  </div>
                  <div
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "color-mix(in srgb, var(--primary) 12%, transparent)" }}
                    >
                      <MapPin size={15} style={{ color: "var(--primary)" }} />
                    </div>
                    <span>
                      30 N Gould St, Ste N<br />
                      Sheridan, WY 82801, USA
                    </span>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div
                className="rounded-2xl p-6"
                style={{ border: "1px solid var(--border)", background: "var(--bg-elevated)" }}
              >
                <h3 className="font-bold text-base font-display mb-4" style={{ color: "var(--text)" }}>
                  What happens next
                </h3>
                <ul className="flex flex-col gap-3">
                  {whatToExpect.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-black text-white font-display"
                        style={{ background: "var(--primary)" }}
                      >
                        {i + 1}
                      </div>
                      <span className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust note */}
              <div
                className="rounded-2xl p-5"
                style={{
                  border: "1px solid color-mix(in srgb, var(--primary) 25%, transparent)",
                  background: "color-mix(in srgb, var(--primary) 5%, transparent)",
                }}
              >
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  <span className="font-semibold" style={{ color: "var(--text)" }}>No commitment required.</span>{" "}
                  Reaching out is free. We'll explain how Traakar works and answer every question before you decide anything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        eyebrow="Common Questions"
        title="Before You"
        titleHighlight="Reach Out"
        items={faqs}
        bg="bg-bg-secondary"
      />
    </>
  )
}
