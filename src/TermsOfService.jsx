import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileCheck, Mail } from 'lucide-react';

export default function TermsOfService() {
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
            <FileCheck className="w-4 h-4" /> Legal Agreement
          </div>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-4">
            Terms of <span className="italic text-accent">Service.</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl">
            These terms govern your use of Ark Alliance's platforms and services. Please read them carefully before using our products.
          </p>
          <div className="mt-6 font-mono text-xs text-white/25 tracking-wider">
            Last updated: 10 March 2026 &nbsp;•&nbsp; Effective: 10 March 2026
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-12">

          {/* 1 */}
          <Section num="01" title="Acceptance of Terms">
            <p>
              By accessing or using any service provided by <strong>Ark Alliance Sdn. Bhd.</strong> (Registration No. 202601002462)
              — including <strong>ClaimFlow</strong>, <strong>B2B Connect</strong>, and <strong>Feel Japan with K</strong> —
              you agree to be bound by these Terms of Service and our <Link to="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>.
            </p>
            <p>
              If you are using our services on behalf of an organisation, you represent and warrant that you have the authority to bind that organisation to these terms.
            </p>
          </Section>

          {/* 2 */}
          <Section num="02" title="Description of Services">
            <p>Ark Alliance operates the following platforms:</p>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              <ServiceCard
                name="ClaimFlow"
                desc="Corporate expense management and regulatory compliance engine with AI-driven tax auditor logic."
              />
              <ServiceCard
                name="B2B Connect"
                desc="Global trade bridge connecting verified suppliers with elite trading partners across international markets."
              />
              <ServiceCard
                name="Feel Japan with K"
                desc="Specialised B2B matchmaking platform for Muslim-friendly Japanese travel experiences."
              />
            </div>
            <p className="mt-4">
              We reserve the right to modify, suspend, or discontinue any part of our services with reasonable notice. Material changes will be communicated to active users.
            </p>
          </Section>

          {/* 3 */}
          <Section num="03" title="User Accounts & Access">
            <p>When you create an account on any Ark Alliance platform, you agree to:</p>
            <ul className="list-none space-y-2 mt-4">
              {[
                'Provide accurate and complete registration information',
                'Maintain the confidentiality of your login credentials',
                'Notify us immediately of any unauthorised access to your account',
                'Accept responsibility for all activities conducted under your account',
                'Not share account access with unauthorised third parties',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60 text-[15px] leading-relaxed">
                  <span className="text-accent/60 mt-1 flex-shrink-0">›</span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We reserve the right to suspend or terminate accounts that violate these terms or remain inactive for extended periods.
            </p>
          </Section>

          {/* 4 */}
          <Section num="04" title="Acceptable Use">
            <p>You agree <strong>not</strong> to use our services to:</p>
            <ul className="list-none space-y-2 mt-4">
              {[
                'Violate any Malaysian or international laws, regulations, or third-party rights',
                'Upload false, misleading, or fraudulent expense claims, supplier information, or documentation',
                'Attempt to gain unauthorised access to other users\' data or system infrastructure',
                'Reverse-engineer, decompile, or disassemble any part of our platforms',
                'Transmit malware, viruses, or any code designed to disrupt our services',
                'Scrape, crawl, or harvest data from our platforms without written authorisation',
                'Circumvent tenant isolation, security controls, or access restrictions',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60 text-[15px] leading-relaxed">
                  <span className="text-accent/60 mt-1 flex-shrink-0">›</span> {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* 5 */}
          <Section num="05" title="Data & Content Ownership">
            <p>
              <strong>Your Data:</strong> You retain full ownership of all data and content you upload to our platforms (e.g. receipts, supplier profiles, itineraries). We do not claim any intellectual property rights over your content.
            </p>
            <p>
              <strong>Our Platform:</strong> All platform code, design, branding, algorithms (including AI Tax Auditor and Dispute Solver logic), documentation, and proprietary technology remain the exclusive intellectual property of Ark Alliance Sdn. Bhd.
            </p>
            <p>
              <strong>Licence Grant:</strong> By using our services, you grant Ark Alliance a limited, non-exclusive licence to process your data solely for the purpose of providing and improving the services you have engaged.
            </p>
          </Section>

          {/* 6 */}
          <Section num="06" title="Fees & Payment">
            <p>
              Specific pricing and payment terms are governed by individual service agreements between Ark Alliance and your organisation. General terms include:
            </p>
            <ul className="list-none space-y-2 mt-4">
              {[
                'All fees are quoted in Malaysian Ringgit (MYR) unless otherwise specified',
                'Payment terms are Net-30 from the date of invoice unless agreed otherwise',
                'Late payments may incur interest at the rate prescribed by Malaysian law',
                'We reserve the right to adjust pricing with 60 days\' prior written notice',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60 text-[15px] leading-relaxed">
                  <span className="text-accent/60 mt-1 flex-shrink-0">›</span> {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* 7 */}
          <Section num="07" title="Service Level & Availability">
            <p>
              We strive to maintain 99.9% platform availability. However, we do not guarantee uninterrupted access and shall not be liable for:
            </p>
            <ul className="list-none space-y-2 mt-4">
              {[
                'Scheduled maintenance windows (communicated in advance)',
                'Force majeure events (natural disasters, pandemics, infrastructure outages)',
                'Third-party service provider outages beyond our control',
                'Internet connectivity issues on the user\'s end',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60 text-[15px] leading-relaxed">
                  <span className="text-accent/60 mt-1 flex-shrink-0">›</span> {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* 8 */}
          <Section num="08" title="Limitation of Liability">
            <p>
              To the maximum extent permitted by Malaysian law:
            </p>
            <ul className="list-none space-y-2 mt-4">
              {[
                'Ark Alliance shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services',
                'Our total aggregate liability for any claim shall not exceed the fees paid by you in the 12 months preceding the claim',
                'We do not warrant that our services will meet all your specific requirements or that any AI-driven outputs (tax calculations, mileage validations) are guaranteed to be error-free',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60 text-[15px] leading-relaxed">
                  <span className="text-accent/60 mt-1 flex-shrink-0">›</span> {item}
                </li>
              ))}
            </ul>
            <div className="glass-card p-5 mt-4 border-amber-400/20">
              <p className="text-amber-400/80 text-sm font-semibold mb-1">Important Notice</p>
              <p className="text-white/50 text-sm">
                ClaimFlow's AI Tax Auditor and Dispute Solver provide decision-support tools and should not be treated as a substitute for professional tax or legal advice. Users remain responsible for the accuracy of their claims and filings.
              </p>
            </div>
          </Section>

          {/* 9 */}
          <Section num="09" title="Indemnification">
            <p>
              You agree to indemnify and hold harmless Ark Alliance Sdn. Bhd., its officers, directors, and employees from any claims, damages, losses, or expenses (including legal fees) arising from:
            </p>
            <ul className="list-none space-y-2 mt-4">
              {[
                'Your violation of these Terms of Service',
                'Your misuse of our platforms or services',
                'Any fraudulent or inaccurate data you submit through our platforms',
                'Your violation of any applicable laws or third-party rights',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60 text-[15px] leading-relaxed">
                  <span className="text-accent/60 mt-1 flex-shrink-0">›</span> {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* 10 */}
          <Section num="10" title="Termination">
            <p>Either party may terminate the service relationship:</p>
            <ul className="list-none space-y-2 mt-4">
              {[
                'With 30 days\' written notice for convenience',
                'Immediately if the other party materially breaches these terms and fails to cure within 14 days of notification',
                'Immediately if required by law or regulatory order',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60 text-[15px] leading-relaxed">
                  <span className="text-accent/60 mt-1 flex-shrink-0">›</span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Upon termination, your right to access the services ceases immediately. Data export requests must be submitted within 30 days of termination. After this period, your data will be handled according to our <Link to="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link> retention schedule.
            </p>
          </Section>

          {/* 11 */}
          <Section num="11" title="Governing Law & Disputes">
            <p>
              These Terms are governed by and construed in accordance with the <strong>laws of Malaysia</strong>. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the Malaysian courts.
            </p>
            <p>
              Before initiating legal proceedings, both parties agree to attempt resolution through good-faith negotiation for a period of at least 30 days.
            </p>
          </Section>

          {/* 12 */}
          <Section num="12" title="Changes to These Terms">
            <p>
              We may revise these Terms of Service from time to time. Material changes will be communicated via email to registered users at least 30 days before taking effect. Continued use of our services after the effective date constitutes acceptance of the revised terms.
            </p>
          </Section>

          {/* 13 — Contact */}
          <Section num="13" title="Contact Us">
            <p>For questions about these Terms of Service or to report a concern:</p>
            <div className="glass-card p-6 mt-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent/60" />
                  <span className="text-white/60">Legal Enquiries:</span>
                  <a href="mailto:hello@arkalliance.com" className="text-accent hover:underline">hello@arkalliance.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent/60" />
                  <span className="text-white/60">Data Protection Officer:</span>
                  <a href="mailto:dpo@arkalliance.com" className="text-accent hover:underline">dpo@arkalliance.com</a>
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
            <Link to="/privacy-policy" className="font-mono text-xs text-white/30 hover:text-accent transition-colors">Privacy Policy</Link>
            <span className="font-mono text-xs text-accent/40">Terms of Service</span>
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

function ServiceCard({ name, desc }) {
  return (
    <div className="glass-card p-5">
      <h4 className="font-sans font-semibold text-sm text-accent mb-2">{name}</h4>
      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
