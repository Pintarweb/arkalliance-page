import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/ark_transparent_logo.png" alt="Ark Alliance" className="h-9 w-auto" />
              <span className="font-sans font-bold text-lg tracking-tight">
                Ark<span className="text-accent">_</span>Alliance
              </span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed mb-4">
              Engineering trust through RegTech and innovation. Empowering Malaysian SMEs with high‑precision compliance solutions.
            </p>
            <div className="space-y-1 text-white/25 text-xs font-mono">
              <p>Ark Alliance Sdn. Bhd.</p>
              <p>Reg. No: 202601002462</p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-white/40 mb-4">Navigation</h4>
            <div className="space-y-3">
              {[
                { label: 'Our Ecosystem', href: '#ecosystem' },
                { label: 'Tech Stack', href: '#tech-stack' },
                { label: 'Compliance & Security', href: '#compliance' },
                { label: 'Contact Us', href: '#contact' },
              ].map(link => (
                <a key={link.label} href={link.href} className="block text-white/40 text-sm hover:text-accent transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Legal & Address */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-white/40 mb-4">Legal</h4>
            <div className="space-y-3">
              <Link to="/privacy-policy" className="flex items-center gap-1.5 text-white/40 text-sm hover:text-accent transition-colors">
                Privacy Policy <ExternalLink className="w-3 h-3" />
              </Link>
              <Link to="/terms-of-service" className="flex items-center gap-1.5 text-white/40 text-sm hover:text-accent transition-colors">
                Terms of Service <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
            <div className="mt-6">
              <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-white/40 mb-3">Office</h4>
              <div className="flex items-start gap-2 text-white/30 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent/40" />
                <span>Kajang, Selangor,<br />Malaysia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-white/20 tracking-wider">
            © {new Date().getFullYear()} Ark Alliance Sdn. Bhd. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/15 font-mono text-[10px] tracking-widest uppercase">
            <div className="glow-dot !w-1.5 !h-1.5" />
            Systems Online
          </div>
        </div>
      </div>
    </footer>
  );
}
