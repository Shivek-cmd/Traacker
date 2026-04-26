import type { Metadata } from "next"
import PageHero from "@/components/layout/PageHero"

export const metadata: Metadata = {
  title: "Terms of Service — Tracckar Dispatch",
  description: "Read the terms and conditions governing your use of Tracckar's dispatch services.",
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Last updated: January 1, 2025"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
      />
      <section className="py-20 bg-bg">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Prose>
            <p>Please read these Terms of Service carefully before using Tracckar's dispatch services. By engaging Tracckar or using our website, you agree to be bound by these terms.</p>

            <h2>1. Services Provided</h2>
            <p>Tracckar provides third-party freight dispatch services to owner-operators and motor carriers. Our services include load sourcing, rate negotiation, route coordination, documentation support, and dedicated dispatcher access. Tracckar acts solely as a dispatch intermediary and is not a freight broker, carrier, or party to any freight contract between you and a shipper or broker.</p>

            <h2>2. Eligibility</h2>
            <p>To use Tracckar's services, you must:</p>
            <ul>
              <li>Be a licensed motor carrier with a valid USDOT number and active MC authority</li>
              <li>Have valid commercial truck insurance meeting FMCSA requirements</li>
              <li>Be at least 18 years of age</li>
              <li>Have legal authority to enter into this agreement on behalf of your business</li>
            </ul>

            <h2>3. Commission & Payment</h2>
            <p>Tracckar charges a commission of 5–10% of the gross load rate for each load successfully booked and completed through our service. Specific commission rates are agreed upon in your dispatch agreement prior to onboarding.</p>
            <ul>
              <li>Commission is due only upon successful completion and payment of a load</li>
              <li>No upfront fees, setup charges, or monthly retainers are charged</li>
              <li>Commission is calculated on the gross load rate excluding fuel surcharges unless otherwise agreed</li>
              <li>Payment terms will be outlined in your individual dispatch agreement</li>
            </ul>

            <h2>4. Your Responsibilities</h2>
            <p>As a Tracckar client, you agree to:</p>
            <ul>
              <li>Maintain valid USDOT, MC authority, and commercial insurance throughout the engagement</li>
              <li>Provide accurate information about your equipment, availability, and certifications</li>
              <li>Notify Tracckar promptly of any changes to your operating authority or insurance</li>
              <li>Communicate pickup/delivery status, delays, and issues as they occur</li>
              <li>Handle all loads professionally and in compliance with FMCSA regulations</li>
              <li>Pay agreed commissions promptly upon load payment receipt</li>
            </ul>

            <h2>5. Load Approval</h2>
            <p>Tracckar presents loads for your approval before booking. By approving a load, you authorize Tracckar to confirm acceptance with the broker on your behalf. You retain the right to decline any load for any reason. Once a load is confirmed, cancellation may result in broker penalties that are your sole responsibility.</p>

            <h2>6. Limitations of Service</h2>
            <p>Tracckar does not guarantee:</p>
            <ul>
              <li>A specific number of loads per week or month</li>
              <li>Minimum rate per mile on any given load</li>
              <li>Continuous availability of freight in any specific lane</li>
              <li>Payment by freight brokers or shippers for completed loads</li>
            </ul>
            <p>Load availability and rates depend on market conditions beyond Tracckar's control. We commit to consistent effort and communication, not specific outcomes.</p>

            <h2>7. Termination</h2>
            <p>Either party may terminate the dispatch relationship with 7 days written notice. Termination does not affect commission obligations on loads already booked and in transit. Tracckar reserves the right to terminate immediately if you breach these terms, violate FMCSA regulations, or engage in fraudulent activity.</p>

            <h2>8. Limitation of Liability</h2>
            <p>Tracckar's liability in connection with any dispatch service is limited to the commission paid for the specific load in question. Tracckar is not liable for delays, cargo damage, broker non-payment, accidents, fines, or any indirect, incidental, or consequential damages arising from the dispatch relationship.</p>

            <h2>9. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Tracckar, its employees, and affiliates from any claims, damages, or expenses arising from your operation of commercial vehicles, breach of these terms, or violation of applicable law.</p>

            <h2>10. Confidentiality</h2>
            <p>Both parties agree to keep confidential any proprietary business information, broker relationships, and rate structures shared during the dispatch relationship. This obligation survives termination.</p>

            <h2>11. Governing Law</h2>
            <p>These Terms are governed by the laws of the United States and the state in which Tracckar is registered. Any disputes shall be resolved through binding arbitration before pursuing litigation.</p>

            <h2>12. Changes to Terms</h2>
            <p>Tracckar may update these Terms of Service from time to time. Continued use of our services after changes are posted constitutes acceptance of the updated terms. We will notify active clients of material changes via email.</p>

            <h2>13. Contact</h2>
            <p>For questions about these Terms:</p>
            <ul>
              <li>Email: <a href="mailto:legal@Tracckar.com">legal@Tracckar.com</a></li>
              <li>General: <a href="mailto:dispatch@Tracckar.com">dispatch@Tracckar.com</a></li>
            </ul>
          </Prose>
        </div>
      </section>
    </>
  )
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="prose-content"
      style={{ color: "var(--text-muted)", lineHeight: "1.75", fontSize: "0.9375rem" } as React.CSSProperties}
    >
      <style>{`
        .prose-content h2 {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text);
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          font-family: var(--font-display);
        }
        .prose-content p { margin-bottom: 1rem; }
        .prose-content ul {
          list-style: disc;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }
        .prose-content a { color: var(--primary); text-decoration: underline; }
        .prose-content strong { color: var(--text); font-weight: 600; }
      `}</style>
      {children}
    </div>
  )
}
