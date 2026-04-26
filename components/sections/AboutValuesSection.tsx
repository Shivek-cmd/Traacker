"use client"

import { Target, Users, Shield, TrendingUp } from "lucide-react"
import { TiltCard } from "./TiltCard"

const values = [
  {
    icon: Target,
    title: "Results Over Promises",
    body: "We don't over-promise. We focus on securing profitable freight, negotiating hard, and delivering consistent results week after week.",
  },
  {
    icon: Users,
    title: "Drivers Are Partners",
    body: "We treat every driver like a business partner, not a unit number. Your goals, preferences, and profitability matter to us directly.",
  },
  {
    icon: Shield,
    title: "Transparency Always",
    body: "No hidden fees, no confusing contracts, no load booked without your approval. You always know exactly what's happening with your truck.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Thinking",
    body: "We plan your weeks, not just your next load. Building strong broker relationships and lane consistency compounds into better rates over time.",
  },
]

export default function AboutValuesSection() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {values.map((v) => {
        const Icon = v.icon
        return (
          <TiltCard key={v.title}>
            <div className="card-dark p-6 rounded-2xl flex flex-col gap-4 h-full">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: "color-mix(in srgb, var(--primary) 10%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)",
                }}
              >
                <Icon size={18} style={{ color: "var(--primary)" }} />
              </div>
              <h3 className="font-bold text-base font-display" style={{ color: "var(--text)" }}>
                {v.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {v.body}
              </p>
            </div>
          </TiltCard>
        )
      })}
    </div>
  )
}
