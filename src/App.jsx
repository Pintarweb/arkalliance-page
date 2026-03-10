import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Box, Cpu, Map as MapIcon, Globe, ShieldCheck, Activity } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  const flipWords = ["Trust.", "Compliance.", "Precision.", "Verification."];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % flipWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Initial hero reveal
      const tl = gsap.timeline();

      tl.fromTo('.hero-verb', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.2 })
        .fromTo('.hero-noun', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }, "-=0.8")
        .fromTo('.hero-sub', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5")
        .fromTo('.nav-item', { y: -20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }, "-=1");

      // Scroll animations
      const sections = gsap.utils.toArray('.reveal-section');
      sections.forEach(section => {
        gsap.fromTo(section,
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);

  return (
    <div className="min-h-screen bg-background text-dark relative selection:bg-accent selection:text-background" ref={containerRef}>

      {/* Noise Filter SVG overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
          <rect width="100%" height="100%" filter="url(#n)" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-background/90 backdrop-blur-sm border-b-2 border-dark" style={{ borderBottom: '2px solid #111111' }}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3 nav-item">
            <img src="/ark_transparent_logo.png" alt="Ark Alliance" className="h-12 w-auto" />
            <div className="font-data font-bold text-xl tracking-tighter uppercase">
              Ark<span className="text-accent">_</span>Alliance
            </div>
          </div>
          <div className="hidden md:flex gap-8 font-data text-sm tracking-widest uppercase">
            {['Platforms', 'Validation', 'B2B', 'Connect'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-item hover:text-accent transition-colors">
                [ {item} ]
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-100"
          style={{ backgroundImage: 'url(/hero-bg.png)' }}
        />
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-0 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent z-0 mix-blend-multiply" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="border-l-4 border-accent pl-6 md:pl-12 mb-12">
            <div className="overflow-hidden">
              <h1 className="hero-verb font-sans font-bold text-6xl md:text-8xl lg:text-[110px] leading-none tracking-tighter uppercase drop-shadow-xl">
                Engineer the
              </h1>
            </div>
            <div className="overflow-visible mt-2">
              <div className="hero-noun h-[80px] md:h-[100px] lg:h-[130px] relative">
                {flipWords.map((word, index) => (
                  <h1
                    key={word}
                    className="absolute left-0 top-0 font-drama italic text-6xl md:text-8xl lg:text-[120px] leading-none text-accent drop-shadow-xl transition-all duration-700 flex items-center"
                    style={{
                      transform: index === wordIndex ? 'rotateX(0deg)' : index === (wordIndex - 1 + flipWords.length) % flipWords.length ? 'rotateX(45deg)' : 'rotateX(-45deg)',
                      opacity: index === wordIndex ? 1 : 0,
                      transformOrigin: '50% 50%',
                    }}
                  >
                    {word}
                  </h1>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-12 hero-sub">
            <p className="font-data text-xl md:text-2xl leading-relaxed max-w-lg">
              High-precision RegTech infrastructure and specialized B2B ecosystems. Operating at the zero-trust boundary.
            </p>
            <div className="flex flex-col items-start md:items-end justify-end mt-8 md:mt-0">
              <a href="#connect" className="relative group inline-block">
                {/* Red Glowing Aura */}
                <div className="absolute -inset-4 bg-red-600 rounded-full blur-xl opacity-30 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                
                {/* Radar Rings on hover */}
                <div className="absolute -inset-6 rounded-full border-2 border-red-500/40 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none"></div>
                <div className="absolute -inset-10 rounded-full border border-red-500/20 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-1000 delay-100 pointer-events-none"></div>

                {/* Metallic Bezel */}
                <div className="relative p-[4px] md:p-[6px] bg-gradient-to-b from-zinc-300 via-zinc-600 to-zinc-900 rounded-full shadow-[0_7px_15px_rgba(0,0,0,0.8)] border border-zinc-500">
                  
                  {/* The Big Red Button Volume */}
                  <div className="relative px-4 py-3 md:px-8 md:py-4 bg-gradient-to-b from-red-500 to-red-800 rounded-full text-white font-sans font-black text-sm md:text-xl uppercase tracking-[0.2em] shadow-[inset_0_2px_5px_rgba(255,255,255,0.4),0_5px_0_#7f1d1d,0_10px_15px_rgba(220,38,38,0.7)] group-active:translate-y-[5px] group-active:shadow-[inset_0_2px_5px_rgba(255,255,255,0.4),0_0px_0_#7f1d1d,0_2px_5px_rgba(220,38,38,0.9)] transition-all duration-150 flex items-center justify-center overflow-hidden">
                    
                    {/* Top Gloss Reflection */}
                    <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-full pointer-events-none"></div>
                    
                    {/* Diagonal Glare */}
                    <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-[30deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out"></div>
                    
                    <span className="relative z-10 flex items-center gap-2 md:gap-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300 group-active:scale-95">
                      INITIATE <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:translate-x-1.5 transition-transform duration-300" strokeWidth={3} />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="platforms" className="py-24 border-t-2 border-dark">
        <div className="grid md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-dark border-b-2 border-dark">

          {/* Box 1 */}
          <div className="p-8 md:p-12 xl:p-16 reveal-section group hover:bg-primary/30 transition-colors">
            <ShieldCheck className="w-16 h-16 text-accent mb-8 stroke-[1.5]" />
            <h2 className="font-data font-bold text-sm tracking-widest uppercase text-dark/50 mb-4">[ SYS.01 ]</h2>
            <h3 className="font-sans font-bold text-3xl mb-4 leading-tight">RegTech Compliance</h3>
            <p className="font-data text-md leading-relaxed mb-6">
              AI-driven tax auditing and automated readiness for the LHDN 2026 e-Invoicing directive. Flawless data ingestion.
            </p>
            <div className="h-1 w-full bg-dark/10 group-hover:bg-accent transition-all duration-500"></div>
          </div>

          {/* Box 2 */}
          <div className="p-8 md:p-12 xl:p-16 reveal-section group hover:bg-primary/30 transition-colors bg-primary/10">
            <Activity className="w-16 h-16 text-dark mb-8 stroke-[1.5]" />
            <h2 className="font-data font-bold text-sm tracking-widest uppercase text-dark/50 mb-4">[ SYS.02 ]</h2>
            <h3 className="font-sans font-bold text-3xl mb-4 leading-tight">Precision Validation</h3>
            <p className="font-data text-md leading-relaxed mb-6">
              Smart mileage tracking deeply integrated with live telemetry. Aware of physical world state: traffic, flood detours, and road closures.
            </p>
            <div className="h-1 w-full bg-dark/10 group-hover:bg-dark transition-all duration-500"></div>
          </div>

          {/* Box 3 */}
          <div className="p-8 md:p-12 xl:p-16 reveal-section group hover:bg-primary/30 transition-colors">
            <Globe className="w-16 h-16 text-accent mb-8 stroke-[1.5]" />
            <h2 className="font-data font-bold text-sm tracking-widest uppercase text-dark/50 mb-4">[ SYS.03 ]</h2>
            <h3 className="font-sans font-bold text-3xl mb-4 leading-tight">B2B Infrastructure</h3>
            <p className="font-data text-md leading-relaxed mb-6">
              Seamless matchmaking platforms connecting enterprise capabilities with specialized experiences, including Muslim-friendly Japanese travel parameters.
            </p>
            <div className="h-1 w-full bg-dark/10 group-hover:bg-accent transition-all duration-500"></div>
          </div>

        </div>
      </section>

      {/* Info Display / Data Readout */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="border-2 border-dark p-8 md:p-16 relative overflow-hidden reveal-section">
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 border-l-2 border-b-2 border-dark opacity-10 translate-x-1/2 -translate-y-1/2 rotate-45"></div>

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="font-drama italic text-5xl md:text-7xl text-accent mb-6 leading-none">
                Data. <br />Verified.
              </h2>
              <p className="font-data text-lg">
                Ark Alliance builds the foundational systems required for trust in an automated world. From government compliance protocols to physical-world mapping validation, our engineering guarantees zero-defect operation.
              </p>
            </div>
            <div className="font-data space-y-6 text-sm md:text-base border-l-2 border-accent pl-6 flex flex-col justify-center">
              <div className="flex justify-between border-b border-dark/20 pb-2">
                <span className="uppercase text-dark/60 tracking-wider">Status</span>
                <span className="text-accent font-bold uppercase">Online</span>
              </div>
              <div className="flex justify-between border-b border-dark/20 pb-2">
                <span className="uppercase text-dark/60 tracking-wider">LHDN e-Invoice</span>
                <span className="font-bold">2026 Ready</span>
              </div>
              <div className="flex justify-between border-b border-dark/20 pb-2">
                <span className="uppercase text-dark/60 tracking-wider">Telemetry</span>
                <span className="font-bold">Real-time Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section id="connect" className="py-32 bg-dark text-background text-center px-6">
        <div className="max-w-4xl mx-auto reveal-section">
          <h2 className="font-sans font-bold text-5xl md:text-7xl uppercase tracking-tighter mb-8">
            Deploy the <br /><span className="font-drama italic text-accent font-normal">Alliance.</span>
          </h2>
          <p className="font-data text-xl text-background/70 mb-12 max-w-2xl mx-auto">
            Establish secure parameters. Scale your operations with uncompromising architectural integrity.
          </p>
          <button className="bg-accent text-background font-data uppercase tracking-widest font-bold px-8 py-4 border-2 border-accent hover:bg-transparent hover:text-accent transition-all">
            Partner with Ark Alliance
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t-2 border-dark bg-background text-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center font-data text-xs md:text-sm tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <img src="/ark_transparent_logo.png" alt="Ark Alliance" className="h-8 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <p>© {new Date().getFullYear()} Ark Alliance. All rights reserved.</p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent">Protocol</a>
            <a href="#" className="hover:text-accent">Telemetry</a>
            <a href="#" className="hover:text-accent">System</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
