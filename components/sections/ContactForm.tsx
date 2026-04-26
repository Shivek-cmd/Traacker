"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const equipmentTypes = ["Dry Van", "Flatbed", "Reefer", "Step Deck", "Box Truck", "Power Only", "Other"]

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", mc: "", equipment: "", lanes: "", message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Wire up your form handler here (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-10 flex flex-col items-center text-center gap-5"
        style={{ border: "1px solid var(--border)", background: "var(--bg-elevated)" }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: "color-mix(in srgb, var(--primary) 12%, transparent)" }}
        >
          <CheckCircle2 size={32} style={{ color: "var(--primary)" }} />
        </div>
        <h3 className="text-2xl font-extrabold font-display" style={{ color: "var(--text)" }}>
          We'll be in touch shortly.
        </h3>
        <p className="text-base leading-relaxed max-w-sm" style={{ color: "var(--text-muted)" }}>
          Thanks for reaching out. A Traakar dispatcher will contact you within 1 business hour to get you set up.
        </p>
      </div>
    )
  }

  const fieldStyle: React.CSSProperties = {
    background: "var(--bg-secondary)",
    border: "1px solid var(--border-hover)",
    color: "var(--text)",
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "0.9375rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  }

  const labelStyle: React.CSSProperties = {
    color: "var(--text-muted)",
    fontSize: "0.8125rem",
    fontWeight: 600,
    marginBottom: "6px",
    display: "block",
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Row: Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input
            name="name" required value={form.name} onChange={handleChange}
            placeholder="John Smith"
            style={fieldStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border-hover)")}
          />
        </div>
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input
            name="email" type="email" required value={form.email} onChange={handleChange}
            placeholder="john@example.com"
            style={fieldStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border-hover)")}
          />
        </div>
      </div>

      {/* Row: Phone + MC# */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label style={labelStyle}>Phone Number *</label>
          <input
            name="phone" type="tel" required value={form.phone} onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            style={fieldStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border-hover)")}
          />
        </div>
        <div>
          <label style={labelStyle}>MC Number</label>
          <input
            name="mc" value={form.mc} onChange={handleChange}
            placeholder="MC-000000"
            style={fieldStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border-hover)")}
          />
        </div>
      </div>

      {/* Equipment Type */}
      <div>
        <label style={labelStyle}>Equipment Type *</label>
        <select
          name="equipment" required value={form.equipment} onChange={handleChange}
          style={{ ...fieldStyle, appearance: "none" }}
          onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--border-hover)")}
        >
          <option value="" disabled>Select equipment type…</option>
          {equipmentTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      {/* Preferred Lanes */}
      <div>
        <label style={labelStyle}>Preferred Lanes / Home Base</label>
        <input
          name="lanes" value={form.lanes} onChange={handleChange}
          placeholder="e.g. Midwest to Southeast, home base Chicago IL"
          style={fieldStyle}
          onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--border-hover)")}
        />
      </div>

      {/* Message */}
      <div>
        <label style={labelStyle}>Anything else we should know?</label>
        <textarea
          name="message" value={form.message} onChange={handleChange}
          rows={4}
          placeholder="Tell us about your operation, current challenges, or questions…"
          style={{ ...fieldStyle, resize: "vertical", minHeight: "100px" }}
          onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--border-hover)")}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold text-base rounded-xl font-display w-full sm:w-auto disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send Message"}
        {!loading && <ArrowRight size={17} />}
      </button>

      <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
        We respond within 1 business hour. No spam, ever.
      </p>
    </form>
  )
}
