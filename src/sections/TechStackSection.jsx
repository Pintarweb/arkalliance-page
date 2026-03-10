import React from 'react';
import { ChevronRight, Cpu, Database, Cloud, ScrollText } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel label="Technical Architecture" />

        <div className="mb-16 reveal-section">
          <h2 className="font-display text-4xl md:text-6xl leading-tight mb-4">
            The <span className="italic text-accent">&ldquo;Vibe-Coding&rdquo;</span> Stack.
          </h2>
          <p className="text-white/40 text-lg max-w-3xl">
            Built for Product Velocity, Data Integrity, and Regulatory Compliance. We utilise a modern &ldquo;Agent-First&rdquo; development workflow that allows for rapid iteration without compromising system stability.
          </p>
        </div>

        {/* Architecture Grid — 2x2 */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* 1 — Google Antigravity */}
          <div className="glass-card p-8 md:p-10 reveal-section group">
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Cpu className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <span className="font-mono text-xs tracking-wider text-white/30 uppercase">Development Engine</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-2 leading-tight">Google Antigravity</h3>
            <p className="font-mono text-sm text-accent/70 mb-5 tracking-wide">Multi-Agent AI Orchestrator</p>
            <p className="text-white/60 leading-relaxed mb-8 text-base">
              We employ a multi-agent AI orchestrator to manage our development lifecycle, enabling a &ldquo;Vibe-Coding&rdquo; approach that moves from planning to production-ready code in record time.
            </p>
            <div className="space-y-3 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                <ChevronRight className="w-4 h-4 text-accent/60 flex-shrink-0" />
                <span>Agentic Orchestration — parallel tasks from schema design to UI testing</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                <ChevronRight className="w-4 h-4 text-accent/60 flex-shrink-0" />
                <span>Autonomous Verification — automated test suites & browser recordings</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                <ChevronRight className="w-4 h-4 text-accent/60 flex-shrink-0" />
                <span>Rapid Prototyping — significantly reduced R&amp;D costs</span>
              </div>
            </div>
          </div>

          {/* 2 — Supabase */}
          <div className="glass-card p-8 md:p-10 reveal-section group">
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-emerald-400/10 text-emerald-400">
                <Database className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <span className="font-mono text-xs tracking-wider text-white/30 uppercase">Data Foundation</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-2 leading-tight">Supabase (PostgreSQL)</h3>
            <p className="font-mono text-sm text-emerald-400/70 mb-5 tracking-wide">Open-Source Relational Backend</p>
            <p className="text-white/60 leading-relaxed mb-8 text-base">
              All Ark Alliance platforms are powered by Supabase, providing a robust, open-source relational backend with enterprise-grade security and real-time capabilities.
            </p>
            <div className="space-y-3 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                <ChevronRight className="w-4 h-4 text-emerald-400/60 flex-shrink-0" />
                <span>Tenant Isolation — Row Level Security for strict B2B data isolation</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                <ChevronRight className="w-4 h-4 text-emerald-400/60 flex-shrink-0" />
                <span>Real-time Infrastructure — WebSocket updates for dashboards & search</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                <ChevronRight className="w-4 h-4 text-emerald-400/60 flex-shrink-0" />
                <span>Edge Intelligence — serverless tax & mileage validation globally</span>
              </div>
            </div>
          </div>

          {/* 3 — Vercel */}
          <div className="glass-card p-8 md:p-10 reveal-section group">
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-sky-400/10 text-sky-400">
                <Cloud className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <span className="font-mono text-xs tracking-wider text-white/30 uppercase">Deployment & Edge</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-2 leading-tight">Vercel</h3>
            <p className="font-mono text-sm text-sky-400/70 mb-5 tracking-wide">Next.js Optimised Edge Network</p>
            <p className="text-white/60 leading-relaxed mb-8 text-base">
              Our frontend and API layers are hosted on Vercel, optimised for the Next.js framework with a global edge network ensuring lightning-fast performance.
            </p>
            <div className="space-y-3 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                <ChevronRight className="w-4 h-4 text-sky-400/60 flex-shrink-0" />
                <span>Global Edge — fast for Malaysia (ClaimFlow) & international partners</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                <ChevronRight className="w-4 h-4 text-sky-400/60 flex-shrink-0" />
                <span>CI/CD Automation — every change auto-deployed for zero-downtime updates</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                <ChevronRight className="w-4 h-4 text-sky-400/60 flex-shrink-0" />
                <span>Security & Scale — auto-scaling, DDoS protection, SSL management</span>
              </div>
            </div>
          </div>

          {/* 4 — Security & Compliance */}
          <div className="glass-card p-8 md:p-10 reveal-section group">
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-rose-400/10 text-rose-400">
                <ScrollText className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <span className="font-mono text-xs tracking-wider text-white/30 uppercase">Privacy by Design</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-2 leading-tight">Security & Compliance</h3>
            <p className="font-mono text-sm text-rose-400/70 mb-5 tracking-wide">DPO-Led Architecture</p>
            <p className="text-white/60 leading-relaxed mb-8 text-base">
              As a DPO-led organisation, security is not an afterthought — it is baked into the architecture at every layer, from authentication to encrypted storage.
            </p>
            <div className="space-y-3 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                <ChevronRight className="w-4 h-4 text-rose-400/60 flex-shrink-0" />
                <span>PDPA Compliance — automated retention policies & consent management</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                <ChevronRight className="w-4 h-4 text-rose-400/60 flex-shrink-0" />
                <span>Auditability — immutable audit trails for LHDN & corporate reviews</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                <ChevronRight className="w-4 h-4 text-rose-400/60 flex-shrink-0" />
                <span>Encrypted Storage — AES-256 for receipts, documents & credentials</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
