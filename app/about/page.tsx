import type { Metadata } from "next"
import PageHero from "@/components/layout/PageHero"
import Stats from "@/components/sections/Stats"
import AboutValuesSection from "@/components/sections/AboutValuesSection"
import CTA from "@/components/sections/CTA"

export const metadata: Metadata = {
  title: "About Traakar — Dispatch Built for Drivers",
  description:
    "Traakar was built by dispatchers who understood what owner-operators were missing: real communication, consistent freight, and a dispatcher who actually cares.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Traakar"
        title="Built for Drivers."
        titleHighlight="Run by Dispatchers."
        subtitle="We started Traakar because we saw what bad dispatch was costing owner-operators — not just money, but time, stress, and lost opportunity."
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
            — Siddhant Soni, Founder & CEO
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
                  Traakar was founded by Siddhant Soni after witnessing firsthand what bad dispatch was costing owner-operators — hardworking drivers with solid equipment and the right attitude — struggling not because of anything on their end, but because their dispatch setup was failing them.
                </p>
                <p>
                  Low rates accepted without pushback. Days sitting idle between loads. Calls that went unanswered. Paperwork bottlenecks that delayed payment. And dispatcher after dispatcher who treated the job as a numbers game instead of a partnership.
                </p>
                <p>
                  Shaan built Traakar to fix exactly that. One dedicated dispatcher per driver. Real negotiation on every load. 24/7 availability. And a genuine commitment to your long-term earnings — because our commission depends on it.
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
                  alt="Siddhant Soni — Founder & CEO, Traakar"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 50%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="font-bold text-xl font-display text-white">Siddhant Soni</p>
                  <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.65)" }}>
                    Founder & CEO, Traakar
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

      <CTA
        eyebrow="Work With Us"
        headline="Your Truck Deserves a"
        headlineHighlight="Dispatcher Who Cares."
        subtext="No upfront fees. No long-term contracts. Just a dedicated dispatcher committed to keeping your truck moving and your earnings growing."
        primaryLabel="Get Started Today"
        primaryHref="/contact-us"
        secondaryLabel="See Our Services"
        secondaryHref="/services"
      />
    </>
  )
}
