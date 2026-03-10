import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function HeroSection({ openContactModal }) {
  return (
    <section className="hero-section relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="hero-bg-image absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/hero-bg.png)' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />

      {/* Decorative grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="hero-headline">
            <div className="compliance-badge mb-8">
              <span className="glow-dot !w-1.5 !h-1.5" />
              LHDN 2026 Ready
            </div>
          </div>

          {/* Headline */}
          <h1 className="hero-headline font-display text-5xl sm:text-6xl md:text-7xl lg:text-[82px] leading-[1.05] tracking-tight mb-8">
            Engineering Trust through{' '}
            <span className="italic text-accent">RegTech</span> and{' '}
            <span className="italic text-accent">Innovation.</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subheadline text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mb-12">
            Empowering Malaysian SMEs with high-precision compliance engines and specialized B2B solutions.
          </p>

          {/* CTA */}
          <div className="hero-cta flex flex-wrap gap-4">
            <button onClick={openContactModal} className="cta-button">
              Contact Us <ArrowRight className="w-5 h-5" />
            </button>
            <a href="#ecosystem" className="inline-flex items-center gap-2 font-mono text-sm tracking-wider uppercase text-white/50 hover:text-accent transition-colors px-6 py-4 border border-white/10 rounded-full hover:border-accent/30">
              Explore Solutions <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hero-cta">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
