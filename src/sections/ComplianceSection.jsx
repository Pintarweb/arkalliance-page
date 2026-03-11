import React from 'react';
import {
  Lock,
  UserCheck,
  FileCheck,
  Fingerprint,
  ScanEye,
  ShieldCheck,
} from 'lucide-react';
import SectionLabel from './SectionLabel';

/* ─── Compliance Pillar (local) ─── */
function CompliancePillar({ icon: Icon, title, description }) {
  return (
    <div className="glass-card p-8 text-center group hover:border-accent/20 transition-colors">
      <div className="inline-flex p-5 rounded-2xl bg-accent/5 text-accent mb-6 group-hover:bg-accent/10 transition-colors">
        <Icon className="w-12 h-12" strokeWidth={1.2} />
      </div>
      <h4 className="font-display text-xl mb-3">{title}</h4>
      <p className="text-white/40 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function ComplianceSection() {
  return (
    <section id="compliance" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel label="Compliance & Security" />

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Text */}
          <div className="reveal-section">
            <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6">
              Privacy by{' '}
              <span className="italic text-accent">Design.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Security isn't bolted on — it's woven into every layer. Our DPO-led technical architecture ensures that personal data protection, regulatory readiness, and zero-trust principles are foundational, not optional.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="compliance-badge"><Lock className="w-4 h-4" /> Privacy by Design</div>
              <div className="compliance-badge"><UserCheck className="w-4 h-4" /> DPO-Led Architecture</div>
              <div className="compliance-badge"><FileCheck className="w-4 h-4" /> LHDN 2026</div>
            </div>
          </div>

          {/* Right: Visual Data Card */}
          <div className="reveal-section">
            <div className="glass-card p-8 md:p-10">
              <div className="font-mono text-xs tracking-wider text-white/30 uppercase mb-6">System Status</div>
              <div className="space-y-5">
                {[
                  { label: 'PDPA Compliance', value: 'Enforced', status: 'active' },
                  { label: 'LHDN e-Invoice API', value: '2026 Ready', status: 'active' },
                  { label: 'Data Encryption', value: 'AES-256 / TLS 1.3', status: 'active' },
                  { label: 'DPO Oversight', value: 'Active', status: 'active' },
                  { label: 'Audit Logging', value: 'Immutable', status: 'active' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'active' ? 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]' : 'bg-amber-400'}`} />
                      <span className="text-white/50 text-sm">{item.label}</span>
                    </div>
                    <span className="font-mono text-sm text-white/80 font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="compliance-grid grid md:grid-cols-3 gap-6">
          <div className="compliance-pillar">
            <CompliancePillar
              icon={Fingerprint}
              title="Privacy by Design"
              description="Personal data is protected at entity, field, and flow level. Consent management and data minimisation are embedded into every feature, not retrofitted."
            />
          </div>
          <div className="compliance-pillar">
            <CompliancePillar
              icon={ScanEye}
              title="DPO-Led Architecture"
              description="A dedicated Data Protection Officer drives architectural decisions. Every data flow, retention policy, and third-party integration is audited and documented."
            />
          </div>
          <div className="compliance-pillar">
            <CompliancePillar
              icon={ShieldCheck}
              title="LHDN 2026 Readiness"
              description="Full alignment with Malaysia's mandatory e-Invoicing directive. Our engine handles MyInvois API integration, tax validation, and submission workflows."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
