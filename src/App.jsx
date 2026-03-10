import React, { useEffect, useRef, useState, useCallback } from 'react';
import { supabase } from './supabaseClient';
import {
  ArrowRight,
  ShieldCheck,
  Globe,
  Lock,
  FileCheck,
  UserCheck,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Fingerprint,
  ScanEye,
  Receipt,
  Plane,
  Menu,
  X,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Section Label ─── */
function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="glow-dot" />
      <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent/80">{label}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-accent/20 to-transparent" />
    </div>
  );
}

/* ─── Solution Card Component ─── */
function SolutionCard({ icon: Icon, title, tagline, description, features, accentColorClass = 'text-accent', index }) {
  return (
    <div className="solution-card glass-card p-8 md:p-10 reveal-section group">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className={`p-3 rounded-xl bg-accent/10 ${accentColorClass}`}>
          <Icon className="w-8 h-8" strokeWidth={1.5} />
        </div>
        <span className="font-mono text-xs tracking-wider text-white/30 uppercase">Solution {String.fromCharCode(65 + index)}</span>
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
        <div className="space-y-3 pt-6 border-t border-white/5">
          {features.map((feat, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
              <ChevronRight className="w-4 h-4 text-accent/60 flex-shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Compliance Pillar Card ─── */
function CompliancePillar({ icon: Icon, title, description }) {
  return (
    <div className="reveal-section group">
      <div className="glass-card p-8 h-full flex flex-col">
        <div className="p-3 rounded-xl bg-accent/10 text-accent w-fit mb-6 group-hover:bg-accent/20 transition-colors">
          <Icon className="w-7 h-7" strokeWidth={1.5} />
        </div>
        <h4 className="font-sans font-bold text-xl mb-3">{title}</h4>
        <p className="text-white/50 text-sm leading-relaxed flex-1">{description}</p>
        <div className="mt-6 h-px w-full bg-gradient-to-r from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}


/* ════════════════════════════════════════════════════════════════ */
/* ═══                 CONTACT MODAL                           ═══ */
/* ════════════════════════════════════════════════════════════════ */
function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    project_interest: '',
    message: '',
    pdpa_consent: false,
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const modalRef = useRef(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const resetForm = () => {
    setForm({ full_name: '', email: '', phone: '', company: '', project_interest: '', message: '', pdpa_consent: false });
    setStatus('idle');
    setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('arkalliance_users').insert([{
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        company: form.company.trim() || null,
        project_interest: form.project_interest,
        message: form.message.trim() || null,
        pdpa_consent: form.pdpa_consent,
      }]);

      if (error) throw error;
      setStatus('success');
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      onClose();
      if (status === 'success') resetForm();
    }
  };

  const handleClose = () => {
    onClose();
    if (status === 'success') resetForm();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="modal-overlay"
      onClick={handleBackdropClick}
    >
      <div className="modal-container">
        {/* Close button */}
        <button onClick={handleClose} className="modal-close" aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        {/* Success State */}
        {status === 'success' ? (
          <div className="modal-success">
            <div className="p-4 rounded-full bg-green-500/10 mb-6">
              <CheckCircle className="w-12 h-12 text-green-400" />
            </div>
            <h3 className="font-display text-3xl mb-3">Thank you!</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm text-center">
              Your enquiry has been submitted successfully. Our team will get back to you within 1–2 business days.
            </p>
            <button onClick={handleClose} className="cta-button !text-sm">
              Close <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Form State */
          <>
            <div className="mb-8">
              <div className="compliance-badge mb-4">
                <span className="glow-dot !w-1.5 !h-1.5" />
                Enquiry Form
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-2">
                Let's <span className="italic text-accent">connect.</span>
              </h3>
              <p className="text-white/40 text-sm">
                Tell us about your needs and we'll get back to you promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              {/* Row 1: Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="form-group">
                  <label htmlFor="full_name" className="form-label">Full Name <span className="text-accent">*</span></label>
                  <input
                    id="full_name" name="full_name" type="text" required
                    placeholder="e.g. Ahmad bin Ismail"
                    value={form.full_name} onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email <span className="text-accent">*</span></label>
                  <input
                    id="email" name="email" type="email" required
                    placeholder="e.g. ahmad@company.com"
                    value={form.email} onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Row 2: Phone + Company */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    id="phone" name="phone" type="tel"
                    placeholder="e.g. +60 12-345 6789"
                    value={form.phone} onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company Name</label>
                  <input
                    id="company" name="company" type="text"
                    placeholder="e.g. Syarikat ABC Sdn. Bhd."
                    value={form.company} onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Row 3: Project Interest */}
              <div className="form-group">
                <label htmlFor="project_interest" className="form-label">I'm interested in <span className="text-accent">*</span></label>
                <select
                  id="project_interest" name="project_interest" required
                  value={form.project_interest} onChange={handleChange}
                  className="form-input form-select"
                >
                  <option value="" disabled>Select a project…</option>
                  <option value="ClaimFlow — Expense Management">ClaimFlow — Expense Management</option>
                  <option value="Feel Japan with K — B2B Tourism">Feel Japan with K — B2B Tourism</option>
                  <option value="Both / General Enquiry">Both / General Enquiry</option>
                </select>
              </div>

              {/* Row 4: Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message" name="message" rows="3"
                  placeholder="Tell us more about your requirements…"
                  value={form.message} onChange={handleChange}
                  className="form-input form-textarea"
                />
              </div>

              {/* PDPA Notice + Consent */}
              <div className="pdpa-notice">
                <div className="flex items-start gap-3">
                  <input
                    id="pdpa_consent" name="pdpa_consent" type="checkbox" required
                    checked={form.pdpa_consent} onChange={handleChange}
                    className="form-checkbox"
                  />
                  <label htmlFor="pdpa_consent" className="text-white/40 text-xs leading-relaxed cursor-pointer">
                    <strong className="text-white/60">PDPA Consent Notice:</strong> I consent to Ark Alliance Sdn. Bhd. collecting, processing, and storing
                    my personal data as provided above, in accordance with the
                    <a href="/privacy-policy" target="_blank" className="text-accent hover:underline mx-1">Privacy Policy</a>
                    and Malaysia's Personal Data Protection Act 2010 (PDPA). My data will be used solely to respond
                    to this enquiry and will not be shared with third parties without my consent. I understand I may
                    withdraw this consent at any time by contacting
                    <a href="mailto:dpo@arkalliance.com" className="text-accent hover:underline ml-1">dpo@arkalliance.com</a>.
                    <span className="text-accent"> *</span>
                  </label>
                </div>
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-xs bg-red-400/5 border border-red-400/20 rounded-lg px-4 py-3">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  {errorMsg}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="cta-button w-full justify-center !text-sm mt-2"
              >
                {status === 'submitting' ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting…
                  </>
                ) : (
                  <>
                    Submit Enquiry <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}


/* ════════════════════════════════════════════════════════════════ */
/* ═══                    MAIN APP                             ═══ */
/* ════════════════════════════════════════════════════════════════ */
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
    { label: 'Solutions', href: '#solutions' },
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

      {/* ── Subtle noise overlay ── */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.025] z-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
          <rect width="100%" height="100%" filter="url(#n)" />
        </svg>
      </div>


      {/* ════════════════════════════════════════════ */}
      {/* ═══  STICKY NAVIGATION                  ═══ */}
      {/* ════════════════════════════════════════════ */}
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${scrolled
        ? 'bg-background/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5'
        : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center" style={{ height: scrolled ? '64px' : '80px', transition: 'height 0.5s ease' }}>

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 nav-item group">
            <img src="/ark_transparent_logo.png" alt="Ark Alliance" className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
            <div className="font-sans font-bold text-lg tracking-tight">
              Ark<span className="text-accent">_</span>Alliance
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-item font-mono text-sm tracking-widest uppercase text-white/60 hover:text-accent transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <button onClick={openContactModal} className="nav-item cta-button !py-2.5 !px-6 !text-sm">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white/70" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)}
                className="block font-mono text-sm tracking-widest uppercase text-white/60 hover:text-accent py-2">
                {link.label}
              </a>
            ))}
            <button onClick={openContactModal} className="cta-button !text-sm w-full justify-center mt-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </nav>


      {/* ════════════════════════════════════════════ */}
      {/* ═══  HERO SECTION                       ═══ */}
      {/* ════════════════════════════════════════════ */}
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
              <a href="#solutions" className="inline-flex items-center gap-2 font-mono text-sm tracking-wider uppercase text-white/50 hover:text-accent transition-colors px-6 py-4 border border-white/10 rounded-full hover:border-accent/30">
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


      {/* ════════════════════════════════════════════ */}
      {/* ═══  OUR SOLUTIONS                      ═══ */}
      {/* ════════════════════════════════════════════ */}
      <section id="solutions" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="Our Solutions" />

          <div className="mb-16 reveal-section">
            <h2 className="font-display text-4xl md:text-6xl leading-tight mb-4">
              Built for <span className="italic text-accent">precision.</span>
            </h2>
            <p className="text-white/40 text-lg max-w-2xl">
              Two purpose‑built platforms engineered from the ground up for Malaysian regulatory requirements and B2B ecosystems.
            </p>
          </div>

          {/* Two-Column Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <SolutionCard
              icon={Receipt}
              title="ClaimFlow"
              tagline="Universal Expense Management Engine"
              description="A universal expense management engine featuring AI-driven tax auditor logic and high-precision mileage validation. Ready for LHDN 2026 e-Invoicing and PDPA compliance."
              features={[
                'AI-driven tax auditor logic',
                'High-precision GPS mileage validation',
                'LHDN 2026 e-Invoicing ready',
                'PDPA-compliant data handling',
              ]}
              accentColorClass="text-accent"
              index={0}
            />
            <SolutionCard
              icon={Plane}
              title="Feel Japan with K"
              tagline="Specialized B2B Tourism Platform"
              description="A specialized B2B tourism platform connecting travel suppliers with agents to deliver seamless, Muslim-friendly Japanese travel experiences."
              features={[
                'B2B supplier-agent matchmaking',
                'Muslim-friendly itinerary engine',
                'Real-time availability sync',
                'Multi-language support',
              ]}
              accentColorClass="text-amber-400"
              index={1}
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-5xl mx-auto" />


      {/* ════════════════════════════════════════════ */}
      {/* ═══  COMPLIANCE & SECURITY              ═══ */}
      {/* ════════════════════════════════════════════ */}
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

      {/* Divider */}
      <div className="section-divider max-w-5xl mx-auto" />


      {/* ════════════════════════════════════════════ */}
      {/* ═══  CONTACT / CTA SECTION              ═══ */}
      {/* ════════════════════════════════════════════ */}
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


      {/* ════════════════════════════════════════════ */}
      {/* ═══  FOOTER                             ═══ */}
      {/* ════════════════════════════════════════════ */}
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
                  { label: 'Solutions', href: '#solutions' },
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
                <a href="/privacy-policy" className="flex items-center gap-1.5 text-white/40 text-sm hover:text-accent transition-colors">
                  Privacy Policy <ExternalLink className="w-3 h-3" />
                </a>
                <a href="#" className="block text-white/40 text-sm hover:text-accent transition-colors">
                  Terms of Service
                </a>
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

      {/* Contact Modal */}
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
}
