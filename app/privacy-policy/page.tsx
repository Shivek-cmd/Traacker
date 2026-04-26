import type { Metadata } from "next"
import PageHero from "@/components/layout/PageHero"

export const metadata: Metadata = {
  title: "Privacy Policy — Tracckar Dispatch",
  description: "Learn how Tracckar collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: January 1, 2025"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <section className="py-20 bg-bg">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Prose>
            <h2>1. Information We Collect</h2>
            <p>When you use Tracckar's dispatch services or contact us through our website, we may collect the following information:</p>
            <ul>
              <li><strong>Identity & Contact:</strong> Full name, email address, phone number.</li>
              <li><strong>Business Information:</strong> Motor Carrier (MC) number, DOT number, equipment type, operating lanes, and company name.</li>
              <li><strong>Financial Information:</strong> Commission structure, load revenue data used solely for calculating our service fee.</li>
              <li><strong>Communications:</strong> Messages you send us via contact forms, email, or phone.</li>
              <li><strong>Usage Data:</strong> Browser type, pages visited, time on site, and referring URL collected automatically via cookies.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and improve our dispatch services</li>
              <li>Assign a dedicated dispatcher and manage your freight operations</li>
              <li>Communicate with you about loads, updates, and service matters</li>
              <li>Process commissions and payments related to booked loads</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Send operational notifications (never marketing without consent)</li>
              <li>Comply with legal obligations under FMCSA and applicable regulations</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>We do not sell, rent, or trade your personal information. We may share information with:</p>
            <ul>
              <li><strong>Freight Brokers:</strong> Your MC number, equipment details, and availability are shared with brokers as required to book loads on your behalf.</li>
              <li><strong>Service Providers:</strong> Trusted third-party tools (CRM, communications, analytics) operating under data processing agreements.</li>
              <li><strong>Legal Requirements:</strong> If required by law, subpoena, or to protect rights and safety.</li>
            </ul>
            <p>We will never share your information with competitors or unrelated third parties for marketing purposes.</p>

            <h2>4. Cookies &amp; Tracking</h2>
            <p>Our website uses cookies and similar tracking technologies to enhance your experience. These include:</p>
            <ul>
              <li><strong>Essential cookies:</strong> Required for the website to function (e.g., theme preference).</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors use the site. We use privacy-respecting analytics only.</li>
            </ul>
            <p>You can disable cookies in your browser settings. Some features may not function correctly without essential cookies.</p>

            <h2>5. Data Retention</h2>
            <p>We retain your information for as long as necessary to provide our services and comply with legal obligations. If you terminate your dispatch relationship with Tracckar, we retain records as required by FMCSA regulations (typically 3 years) and delete personal data not required for compliance within 90 days of your request.</p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data (subject to legal retention requirements)</li>
              <li>Opt out of any marketing communications at any time</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:privacy@Tracckar.com">privacy@Tracckar.com</a>.</p>

            <h2>7. Data Security</h2>
            <p>We implement industry-standard security measures including encrypted connections (HTTPS), access controls, and regular security reviews. No method of transmission over the internet is 100% secure. We will notify you of any breach affecting your personal information as required by applicable law.</p>

            <h2>8. Children's Privacy</h2>
            <p>Our services are intended for adults operating commercial motor vehicles. We do not knowingly collect information from anyone under 18 years of age.</p>

            <h2>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will post the revised policy on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the updated policy.</p>

            <h2>10. Contact Us</h2>
            <p>For any questions about this Privacy Policy or your personal data:</p>
            <ul>
              <li>Email: <a href="mailto:privacy@Tracckar.com">privacy@Tracckar.com</a></li>
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
      style={{
        color: "var(--text-muted)",
        lineHeight: "1.75",
        fontSize: "0.9375rem",
      } as React.CSSProperties}
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
