import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['Design_', 'Reliability_', 'Compliance_', 'Privacy_', 'Regulatory_'];

export default function HeroSection({ openContactModal }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="hero-bg-image absolute inset-0 bg-no-repeat transition-transform duration-1000" 
        style={{ 
          backgroundImage: 'url(/hero_bg_cinematic_upscaled.png)',
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
          filter: 'brightness(0.95) contrast(1.05) saturate(1.1)',
        }} 
      />
      
      {/* Dynamic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
      
      {/* Ambient Glows to fill space */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative grid overlay */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '80px 80px' }}
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
          <p className="hero-subheadline font-mono text-xs md:text-sm text-indigo-200 drop-shadow-lg tracking-[0.2em] uppercase mb-8">
          The Future of RegTech in Malaysia
        </p>

        <h1 className="hero-headline font-display text-5xl md:text-8xl lg:text-9xl leading-[1.1] mb-8 tracking-tighter">
          Trust by{' '}
          <span className="relative inline-block italic text-accent">
            {/* Invisible placeholder matching the longest word to prevent layout shift */}
            <span className="opacity-0 pointer-events-none whitespace-nowrap">
              Reliability_
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 90 }}
                transition={{ duration: 0.4 }}
                className="absolute left-0 top-0 whitespace-nowrap"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <p className="hero-subheadline max-w-2xl text-white/95 text-xl md:text-2xl leading-relaxed mb-12">
          Bridging Technology and Regulatory Compliance in Malaysia.
          Providing high‑precision engines for the next generation of digital finance.
        </p>

          {/* CTA */}
          <div className="hero-cta flex flex-wrap gap-4">
            <button onClick={openContactModal} className="cta-button">
              Contact Us <ArrowRight className="w-5 h-5" />
            </button>
            <a href="#ecosystem" className="inline-flex items-center gap-2 font-mono text-sm tracking-wider uppercase text-white/70 hover:text-accent transition-colors px-6 py-4 border border-white/10 rounded-full hover:border-accent/30">
              Explore Solutions <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hero-cta">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
