const services = [
  "Load Sourcing",
  "Rate Negotiation",
  "Route Optimization",
  "Paperwork Support",
  "Dedicated Dispatcher",
]

const links = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Traacker", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "var(--primary)" }}
              >
                <span className="text-white font-bold text-sm font-display">T</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-text font-display">
                Tra<span style={{ color: "var(--primary)" }}>acker</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              A smarter way to dispatch your trucks. We manage your freight so you can focus on driving and earning.
            </p>
            <p className="mt-4 text-sm font-medium" style={{ color: "color-mix(in srgb, var(--primary) 80%, transparent)" }}>
              "Dispatch Smarter. Earn Better."
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-text font-semibold text-sm mb-4 uppercase tracking-wider font-display">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-muted hover:text-primary text-sm transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-text font-semibold text-sm mb-4 uppercase tracking-wider font-display">
              Company
            </h4>
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-muted hover:text-primary text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-subtle text-xs">
            © {new Date().getFullYear()} Traacker. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--success)" }}
            />
            <span className="text-subtle text-xs">Dispatchers available 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
