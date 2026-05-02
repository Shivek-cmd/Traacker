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
            <Link href="/" className="flex items-center gap-1.5 mb-4 w-fit">
              <Image src="/Traakar_logo.png" alt="Traakar" width={40} height={40} className="h-10 w-auto" />
              <span className="font-bold text-xl tracking-tight font-display" style={{ color: "var(--text)" }}>
                Traakar
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
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
                    className="group/link relative inline-block text-sm pb-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {s.title}
                    <span
                      className="absolute bottom-0 left-0 w-full h-[1.5px] origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"
                      style={{ background: "var(--primary)" }}
                    />
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
                    className="group/link relative inline-block text-sm pb-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {l.label}
                    <span
                      className="absolute bottom-0 left-0 w-full h-[1.5px] origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"
                      style={{ background: "var(--primary)" }}
                    />
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
              className="group/link relative inline-block text-xs pb-0.5"
              style={{ color: "var(--text-subtle)" }}
            >
              Privacy Policy
              <span
                className="absolute bottom-0 left-0 w-full h-[1px] origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"
                style={{ background: "var(--primary)" }}
              />
            </Link>
            <Link
              href="/terms-of-service"
              className="group/link relative inline-block text-xs pb-0.5"
              style={{ color: "var(--text-subtle)" }}
            >
              Terms of Service
              <span
                className="absolute bottom-0 left-0 w-full h-[1px] origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"
                style={{ background: "var(--primary)" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
