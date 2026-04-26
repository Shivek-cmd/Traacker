import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageHero from "@/components/layout/PageHero"
import Stats from "@/components/sections/Stats"
import AboutValuesSection from "@/components/sections/AboutValuesSection"

export const metadata: Metadata = {
  title: "About Tracckar — Dispatch Built for Drivers",
  description:
    "Tracckar was built by dispatchers who understood what owner-operators were missing: real communication, consistent freight, and a dispatcher who actually cares.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Tracckar"
        title="Built for Drivers."
        titleHighlight="Run by Dispatchers."
        subtitle="We started Tracckar because we saw what bad dispatch was costing owner-operators — not just money, but time, stress, and lost opportunity."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Mission statement */}
      <section className="py-24 bg-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug font-display"
            style={{ color: "var(--text)" }}
          >
            "Most dispatch services find a load, take their cut, and disappear.{" "}
            <span className="text-shimmer">
              We stay, we plan, and we treat your truck like a business worth growing.
            </span>"
          </p>
          <p className="mt-8 text-base" style={{ color: "var(--text-subtle)" }}>
            — Shaan Soni, Founder & CEO
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>
                Our Story
              </p>
              <h2 className="text-4xl font-extrabold leading-tight font-display mb-6" style={{ color: "var(--text)" }}>
                We Saw the Problem From the Inside.
              </h2>
              <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>
                  Tracckar was founded by Shaan Soni after witnessing firsthand what bad dispatch was costing owner-operators — hardworking drivers with solid equipment and the right attitude — struggling not because of anything on their end, but because their dispatch setup was failing them.
                </p>
                <p>
                  Low rates accepted without pushback. Days sitting idle between loads. Calls that went unanswered. Paperwork bottlenecks that delayed payment. And dispatcher after dispatcher who treated the job as a numbers game instead of a partnership.
                </p>
                <p>
                  Shaan built Tracckar to fix exactly that. One dedicated dispatcher per driver. Real negotiation on every load. 24/7 availability. And a genuine commitment to your long-term earnings — because our commission depends on it.
                </p>
              </div>
            </div>

            {/* Owner photo */}
            <div>
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ aspectRatio: "4/5" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&q=80&fit=crop"
                  alt="Shaan Soni — Founder & CEO, Tracckar"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 50%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="font-bold text-xl font-display text-white">Shaan Soni</p>
                  <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.65)" }}>
                    Founder & CEO, Tracckar
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                  { value: "500+", label: "Loads booked for drivers" },
                  { value: "98%", label: "Client retention rate" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-2xl flex flex-col gap-1.5"
                    style={{ border: "1px solid var(--border)", background: "var(--bg-elevated)" }}
                  >
                    <p className="text-3xl font-black font-display" style={{ color: "var(--text)" }}>
                      {item.value}
                    </p>
                    <p className="text-xs leading-snug" style={{ color: "var(--text-muted)" }}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>
              What We Stand For
            </p>
            <h2 className="text-4xl font-extrabold font-display leading-tight" style={{ color: "var(--text)" }}>
              The Principles Behind{" "}
              <span className="text-shimmer">Every Load We Book</span>
            </h2>
          </div>
          <AboutValuesSection />
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Join CTA — video background */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "60vh" }}>
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover" aria-hidden="true">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.85) 100%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.7) 100%)" }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center py-24">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>
            Work With Us
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold font-display leading-tight mb-6"
            style={{ color: "var(--text-on-dark)" }}
          >
            Your Truck Deserves a{" "}
            <span className="gradient-text-on-dark">Dispatcher Who Cares.</span>
          </h2>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--text-muted-on-dark)" }}>
            No upfront fees. No long-term contracts. Just a dedicated dispatcher committed to keeping your truck moving and your earnings growing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-base rounded-xl font-display"
            >
              Get Started Today
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/services"
              className="btn-outline-on-dark inline-flex items-center gap-2 px-8 py-4 font-semibold text-base rounded-xl backdrop-blur-sm font-display"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
