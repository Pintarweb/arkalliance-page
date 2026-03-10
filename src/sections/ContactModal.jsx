import React, { useEffect, useRef, useState } from 'react';
import { supabase } from '../supabaseClient';
import {
  ArrowRight,
  X,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
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
