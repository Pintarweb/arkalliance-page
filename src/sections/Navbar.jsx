import React from 'react';
import {
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';

export default function Navbar({ scrolled, navLinks, openContactModal, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${scrolled
      ? 'bg-background/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5'
      : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center" style={{ height: scrolled ? '64px' : '80px', transition: 'height 0.5s ease' }}>

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 nav-item group">
          <img src="/ark_transparent_logo.png" alt="Ark Alliance" className="h-10 w-auto group-hover:scale-110 transition-transform duration-500 hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
          <div className="font-sans font-bold text-xl tracking-tighter">
            ARK<span className="text-accent">ALLIANCE</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-item font-mono text-sm tracking-widest uppercase text-white hover:text-accent transition-colors duration-300 relative group"
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
  );
}
