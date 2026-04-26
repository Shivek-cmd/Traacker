import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Props {
  showLink?: boolean
}

export default function OurStory({ showLink = false }: Props) {
  return (
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
                Tracckar was founded by Shaan Soni after witnessing firsthand what bad dispatch was costing
                owner-operators — hardworking drivers with solid equipment and the right attitude — struggling
                not because of anything on their end, but because their dispatch setup was failing them.
              </p>
              <p>
                Low rates accepted without pushback. Days sitting idle between loads. Calls that went unanswered.
                Paperwork bottlenecks that delayed payment. And dispatcher after dispatcher who treated the job
                as a numbers game instead of a partnership.
              </p>
              <p>
                Shaan built Tracckar to fix exactly that. One dedicated dispatcher per driver. Real negotiation
                on every load. 24/7 availability. And a genuine commitment to your long-term earnings — because
                our commission depends on it.
              </p>
            </div>
            {showLink && (
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-sm font-semibold font-display transition-opacity duration-150 hover:opacity-80"
                style={{ color: "var(--primary)" }}
              >
                Meet the team
                <ArrowRight size={14} />
              </Link>
            )}
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
  )
}
