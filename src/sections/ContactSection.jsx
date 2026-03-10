import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function ContactSection({ openContactModal }) {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel label="Get in Touch" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="reveal-section">
            <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6">
              Let's build <span className="italic text-accent">together.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Ready to future-proof your compliance? Whether you need an enterprise expense engine or a specialised B2B platform, we'd love to talk.
            </p>
            <button onClick={openContactModal} className="cta-button">
              Contact Us <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right: Info cards */}
          <div className="reveal-section space-y-4">
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent"><Mail className="w-5 h-5" /></div>
              <div>
                <h4 className="font-sans font-semibold text-sm mb-1">Email</h4>
                <a href="mailto:hello@arkalliance.com" className="text-white/50 text-sm hover:text-accent transition-colors">hello@arkalliance.com</a>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent"><Phone className="w-5 h-5" /></div>
              <div>
                <h4 className="font-sans font-semibold text-sm mb-1">Phone</h4>
                <span className="text-white/50 text-sm">+60 19-655 6243</span>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent"><MapPin className="w-5 h-5" /></div>
              <div>
                <h4 className="font-sans font-semibold text-sm mb-1">Office</h4>
                <span className="text-white/50 text-sm">Kajang, Selangor,<br /> Malaysia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
