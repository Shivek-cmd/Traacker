import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { services as allServices } from "@/lib/services"

const company = [
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact-us" },
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
                Traa<span style={{ color: "var(--primary)" }}>kar</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              A smarter way to dispatch your trucks. We manage your freight so you can focus on driving and earning.
            </p>
            <p className="mt-4 text-sm font-medium" style={{ color: "color-mix(in srgb, var(--primary) 80%, transparent)" }}>
              "Dispatch Smarter. Earn Better."
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--success)" }} />
              <span className="text-xs" style={{ color: "var(--text-subtle)" }}>Dispatchers available 24/7</span>
            </div>
            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href="tel:+15516553051"
                className="flex items-center gap-2 text-xs transition-colors duration-150 hover:opacity-80"
                style={{ color: "var(--text-muted)" }}
              >
                <Phone size={12} style={{ color: "var(--primary)" }} />
                +1 (551) 655-3051
              </a>
              <a
                href="mailto:dispatch@traakar.com"
                className="flex items-center gap-2 text-xs transition-colors duration-150 hover:opacity-80"
                style={{ color: "var(--text-muted)" }}
              >
                <Mail size={12} style={{ color: "var(--primary)" }} />
                dispatch@traakar.com
              </a>
              <div className="flex items-start gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                <MapPin size={12} className="shrink-0 mt-0.5" style={{ color: "var(--primary)" }} />
                30 N Gould St, Ste N, Sheridan, WY 82801
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 font-display" style={{ color: "var(--text)" }}>
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {allServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm transition-colors duration-200 hover:opacity-100"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 font-display" style={{ color: "var(--text)" }}>
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors duration-200 hover:opacity-100"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {l.label}
                  </Link>
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
          <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
            © {new Date().getFullYear()} Traakar. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-xs transition-colors duration-150 hover:opacity-80"
              style={{ color: "var(--text-subtle)" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs transition-colors duration-150 hover:opacity-80"
              style={{ color: "var(--text-subtle)" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
