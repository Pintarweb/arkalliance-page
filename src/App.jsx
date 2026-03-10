import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import EcosystemSection from './sections/EcosystemSection';
import TechStackSection from './sections/TechStackSection';
import ComplianceSection from './sections/ComplianceSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import ContactModal from './sections/ContactModal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openContactModal = useCallback(() => {
    setContactModalOpen(true);
    setMobileMenuOpen(false);
  }, []);

  const navLinks = [
    { label: 'Our Ecosystem', href: '#ecosystem' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Compliance', href: '#compliance' },
    { label: 'Contact', href: '#contact' },
  ];

  // Scroll listener for navbar shrink
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animations
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero entrance
      const tl = gsap.timeline();
      tl.fromTo('.hero-headline', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.3 })
        .fromTo('.hero-subheadline', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        .fromTo('.hero-cta', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .fromTo('.nav-item', { y: -20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }, '-=0.8');

      // Scroll reveals
      gsap.utils.toArray('.reveal-section').forEach(section => {
        gsap.fromTo(section,
          { y: 60, opacity: 0 },
          {
            scrollTrigger: { trigger: section, start: 'top 88%' },
            y: 0, opacity: 1,
            duration: 0.9,
            ease: 'power3.out'
          }
        );
      });

      // Parallax on hero background
      gsap.to('.hero-bg-image', {
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: 120,
        ease: 'none'
      });

      // Stagger for compliance pillars
      gsap.fromTo('.compliance-pillar', { y: 40, opacity: 0 }, {
        scrollTrigger: { trigger: '.compliance-grid', start: 'top 85%' },
        y: 0, opacity: 1,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out'
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background text-white relative" ref={containerRef}>
      {/* Subtle noise overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.025] z-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
          <rect width="100%" height="100%" filter="url(#n)" />
        </svg>
      </div>

      <Navbar
        scrolled={scrolled}
        navLinks={navLinks}
        openContactModal={openContactModal}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <HeroSection openContactModal={openContactModal} />
      <EcosystemSection />
      <TechStackSection />
      <ComplianceSection />
      <ContactSection openContactModal={openContactModal} />
      <Footer />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
}
