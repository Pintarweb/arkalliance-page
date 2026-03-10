import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-white">
      {/* ── Navbar ── */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/ark_transparent_logo.png" alt="Ark Alliance" className="h-8 w-auto" />
            <span className="font-sans font-bold text-lg tracking-tight">
              Ark<span className="text-accent">_</span>Alliance
            </span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-accent transition-colors font-mono">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </nav>

      {/* ── Content ── */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="mb-16">
          <div className="compliance-badge mb-6 inline-flex">
            <ShieldCheck className="w-4 h-4" /> PDPA Compliant
          </div>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-4">
            Privacy <span className="italic text-accent">Policy.</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl">
            Your privacy is fundamental to how we build and operate. This policy explains what data we collect, why, and how we protect it.
          </p>
          <div className="mt-6 font-mono text-xs text-white/25 tracking-wider">
            Last updated: 10 March 2026 &nbsp;•&nbsp; Effective: 10 March 2026
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-12">

          {/* 1 */}
          <Section num="01" title="Who We Are">
            <p>
              Ark Alliance Sdn. Bhd. (Registration No. 202601002462) is a Malaysian RegTech company headquartered in Kajang, Selangor. We operate <strong>ClaimFlow</strong>, <strong>B2B Connect</strong>, and <strong>Feel Japan with K</strong> — platforms serving corporate expense management, global trade, and specialised tourism.
            </p>
            <p>
              Our appointed <strong>Data Protection Officer (DPO)</strong> oversees all personal data handling across every platform to ensure compliance with Malaysia's <strong>Personal Data Protection Act 2010 (PDPA)</strong>.
            </p>
          </Section>

          {/* 2 */}
          <Section num="02" title="Data We Collect">
            <p>We collect only the data necessary to operate our platforms and fulfil our obligations:</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <DataCard title="Identity Data" items={['Full name', 'Email address', 'Phone number', 'Company name & role']} />
              <DataCard title="Usage Data" items={['IP address & device type', 'Pages visited & timestamps', 'Feature interactions', 'Referral source']} />
              <DataCard title="Platform-Specific" items={['ClaimFlow: receipts, GPS mileage, expense data', 'B2B Connect: supplier credentials, trade profiles', 'Feel Japan with K: itinerary preferences']} />
              <DataCard title="Communication Data" items={['Enquiry form submissions', 'Email correspondence', 'Consent records & timestamps']} />
            </div>
          </Section>

          {/* 3 */}
          <Section num="03" title="How We Use Your Data">
            <p>We process your personal data for the following purposes:</p>
            <ul className="list-none space-y-2 mt-4">
              {[
                'To provide and maintain our platform services',
                'To verify your identity and prevent fraud',
                'To communicate about your account, enquiries, and service updates',
                'To comply with LHDN e-Invoicing requirements and Malaysian tax regulations',
                'To generate anonymised analytics that improve our services',
                'To fulfil legal obligations under the PDPA 2010 and other applicable laws',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60 text-[15px] leading-relaxed">
                  <span className="text-accent/60 mt-1 flex-shrink-0">›</span> {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* 4 */}
          <Section num="04" title="Legal Basis for Processing">
            <p>Under the PDPA 2010, we process your data based on the following lawful bases:</p>
            <ul className="list-none space-y-2 mt-4">
              {[
                'Consent — where you have given explicit consent (e.g. enquiry forms)',
                'Contractual necessity — to deliver the services you or your employer have engaged',
                'Legal obligation — e.g. tax documentation, LHDN compliance',
                'Legitimate interest — improving platform security and user experience',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60 text-[15px] leading-relaxed">
                  <span className="text-accent/60 mt-1 flex-shrink-0">›</span> {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* 5 */}
          <Section num="05" title="Third-Party Sharing">
            <p>We do <strong>not</strong> sell your personal data. We may share data only with:</p>
            <ul className="list-none space-y-2 mt-4">
              {[
                'Supabase (database & authentication) — for platform infrastructure',
                'Vercel (hosting) — for content delivery and edge functions',
                'Payment processors — only when payment features are enabled by your organisation',
                'Malaysian regulatory bodies — where required by law (e.g. LHDN)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60 text-[15px] leading-relaxed">
                  <span className="text-accent/60 mt-1 flex-shrink-0">›</span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              All third-party providers are vetted for PDPA-equivalent data protection standards and are contractually bound by data processing agreements.
            </p>
          </Section>

          {/* 6 */}
          <Section num="06" title="Data Retention">
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              <RetentionCard label="Account data" period="Duration of service + 12 months" />
              <RetentionCard label="Tax/compliance records" period="7 years (LHDN requirement)" />
              <RetentionCard label="Enquiry data" period="24 months from last contact" />
            </div>
            <p className="mt-4">
              When data is no longer required, it is securely deleted or anonymised in accordance with our data lifecycle policies.
            </p>
          </Section>

          {/* 7 */}
          <Section num="07" title="Data Security">
            <p>We implement enterprise-grade security measures to protect your data:</p>
            <ul className="list-none space-y-2 mt-4">
              {[
                'AES-256 encryption for all stored sensitive documents',
                'TLS 1.3 encryption for all data in transit',
                'Row Level Security (RLS) for strict tenant isolation',
                'Immutable audit logs for all data access and modifications',
                'Regular penetration testing and security reviews',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60 text-[15px] leading-relaxed">
                  <span className="text-accent/60 mt-1 flex-shrink-0">›</span> {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* 8 */}
          <Section num="08" title="Your Rights">
            <p>Under the PDPA 2010, you have the right to:</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {[
                { right: 'Access', desc: 'Request a copy of your personal data' },
                { right: 'Correction', desc: 'Request correction of inaccurate data' },
                { right: 'Withdrawal', desc: 'Withdraw consent at any time' },
                { right: 'Complaint', desc: 'Lodge a complaint with the PDP Commissioner' },
              ].map((item, i) => (
                <div key={i} className="glass-card p-5">
                  <h4 className="font-sans font-semibold text-sm text-accent mb-1">Right of {item.right}</h4>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              To exercise any of these rights, contact our Data Protection Officer at the details below.
            </p>
          </Section>

          {/* 9 */}
          <Section num="09" title="Cookies & Analytics">
            <p>
              Our platforms use essential cookies required for authentication and session management. We may also use privacy-respecting analytics to understand usage patterns. We do <strong>not</strong> use third-party advertising trackers.
            </p>
            <p>
              You can control cookie preferences through your browser settings. Disabling essential cookies may affect platform functionality.
            </p>
          </Section>

          {/* 10 */}
          <Section num="10" title="International Data Transfers">
            <p>
              Some of our infrastructure providers operate globally. When data is processed outside of Malaysia, we ensure equivalent data protection standards are maintained through contractual safeguards and technical measures including encryption at rest and in transit.
            </p>
          </Section>

          {/* 11 */}
          <Section num="11" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy to reflect changes in our practices, technology, or legal requirements. Material changes will be communicated via email or platform notification. Continued use of our services after changes constitutes acceptance of the revised policy.
            </p>
          </Section>

          {/* 12 — Contact */}
          <Section num="12" title="Contact Our DPO">
            <p>For any privacy-related queries, data access requests, or to exercise your PDPA rights:</p>
            <div className="glass-card p-6 mt-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent/60" />
                  <span className="text-white/60">Data Protection Officer:</span>
                  <a href="mailto:dpo@arkalliance.com" className="text-accent hover:underline">dpo@arkalliance.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent/60" />
                  <span className="text-white/60">General Enquiries:</span>
                  <a href="mailto:hello@arkalliance.com" className="text-accent hover:underline">hello@arkalliance.com</a>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 text-white/30 text-xs font-mono">
                Ark Alliance Sdn. Bhd. &nbsp;•&nbsp; Kajang, Selangor, Malaysia &nbsp;•&nbsp; Reg. No: 202601002462
              </div>
            </div>
          </Section>

        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 bg-surface/30">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-white/20 tracking-wider">
            © {new Date().getFullYear()} Ark Alliance Sdn. Bhd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="font-mono text-xs text-accent/40">Privacy Policy</span>
            <Link to="/terms-of-service" className="font-mono text-xs text-white/30 hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}


/* ── Helper Components ── */

function Section({ num, title, children }) {
  return (
    <section className="border-t border-white/5 pt-10">
      <div className="flex items-baseline gap-4 mb-5">
        <span className="font-mono text-xs text-accent/40 tracking-widest">{num}</span>
        <h2 className="font-display text-2xl md:text-3xl leading-tight">{title}</h2>
      </div>
      <div className="space-y-4 text-white/60 text-[15px] leading-relaxed pl-0 md:pl-12">
        {children}
      </div>
    </section>
  );
}

function DataCard({ title, items }) {
  return (
    <div className="glass-card p-5">
      <h4 className="font-sans font-semibold text-sm text-white/80 mb-3">{title}</h4>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="text-white/50 text-sm flex items-start gap-2">
            <span className="text-accent/40 mt-0.5">·</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RetentionCard({ label, period }) {
  return (
    <div className="glass-card p-5 text-center">
      <p className="text-white/80 text-sm font-semibold mb-1">{label}</p>
      <p className="font-mono text-xs text-accent/60">{period}</p>
    </div>
  );
}
