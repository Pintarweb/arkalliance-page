import React from 'react';
import { ChevronRight, Receipt, Compass, Plane, Play } from 'lucide-react';
import SectionLabel from './SectionLabel';

/* ─── Solution Card (local) ─── */
function SolutionCard({ icon: Icon, title, tagline, description, features, accentColorClass = 'text-accent', index, link, videoLink }) {
  return (
    <div className="solution-card glass-card p-8 md:p-10 reveal-section group flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className={`p-4 rounded-xl bg-accent/10 ${accentColorClass}`}>
          <Icon className="w-12 h-12" strokeWidth={1.2} />
        </div>
        <span className="font-mono text-xs tracking-wider text-white/60 uppercase">Solution {String.fromCharCode(65 + index)}</span>
      </div>

      {/* Title & Tagline */}
      <h3 className="font-display text-3xl md:text-4xl mb-2 leading-tight">{title}</h3>
      {tagline && <p className="font-mono text-sm text-accent/70 mb-5 tracking-wide">{tagline}</p>}

      {/* Description */}
      <p className="text-white/60 leading-relaxed mb-8 text-base">
        {description}
      </p>

      {/* Features */}
      {features && features.length > 0 && (
        <div className={`space-y-3 pt-6 border-t border-white/5 ${link ? 'mb-8' : ''}`}>
          {features.map((feat, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
              <ChevronRight className="w-4 h-4 text-accent/60 flex-shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      {(link || videoLink) && (
        <div className="mt-auto pt-4 flex flex-wrap gap-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/20 hover:text-white transition-all font-mono text-xs tracking-wider uppercase group/btn"
            >
              <span>Explore Platform</span>
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-accent" />
            </a>
          )}
          {videoLink && (
            <a
              href={videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 hover:bg-accent/20 hover:border-accent/40 text-accent transition-all font-mono text-xs tracking-wider uppercase group/btn shadow-[0_0_20px_rgba(var(--accent-rgb),0.1)]"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Sneak Peak Demo</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel label="Our Portfolio" />

        <div className="mb-16 reveal-section">
          <h2 className="font-display text-4xl md:text-6xl leading-tight mb-4">
            The Ark Alliance <span className="italic text-accent">Ecosystem.</span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl">
            We engineer high-precision platforms that solve complex friction points in compliance, global trade, and specialized tourism — built on Privacy by Design, AI-driven validation, and Regulatory Readiness.
          </p>
        </div>

        {/* Three-Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SolutionCard
            icon={Receipt}
            title="ClaimFlow"
            tagline="Universal Expense & RegTech Engine"
            description="A 'Trust Engine' designed to automate corporate spending while ensuring total adherence to Malaysian regulatory mandates. The future of SME compliance."
            features={[
              'Dispute Solver — real-time traffic, flood & road closure mileage validation',
              'AI Tax Auditor — OCR for tax-exempt perquisites & RM6,000 travel threshold',
              'Compliance Ready — LHDN MyInvois 2026 & PDPA 2024 integration',
            ]}
            accentColorClass="text-accent"
            index={0}
            link="https://claim-jet.vercel.app/"
          />
          <SolutionCard
            icon={Compass}
            title="B2B Connect"
            tagline="Global Trade Bridge"
            description="A premium ecosystem that bypasses intermediaries to connect verified global suppliers directly with elite trading partners across 10 global markets. Direct Trade. Zero Commission. Infinite Scale."
            features={[
              'Direct Access — verified suppliers, full transparency, max margins',
              'Global Intelligence — advanced search across international borders',
              'Verified Network — curated directory with full inventory & credentials',
            ]}
            accentColorClass="text-emerald-400"
            index={1}
            videoLink="/compress_Demo_B2B.mp4"
          />
          <SolutionCard
            icon={Plane}
            title="Feel Japan with K"
            tagline="Specialized Tourism Platform"
            description="A niche B2B matchmaking engine connecting travel suppliers with agents seeking high-quality, Muslim-friendly Japanese itineraries. Curating the Authentic Japanese Experience."
            features={[
              'Cultural Precision — Muslim-friendly travel tools & cultural sensitivity',
              'Supplier Matchmaking — verified Japanese suppliers & curated packages',
              'Itinerary Sync — real-time availability for complex international planning',
            ]}
            accentColorClass="text-amber-400"
            index={2}
            link="https://www.feeljapanwithk.com/"
          />
        </div>
      </div>
    </section>
  );
}
