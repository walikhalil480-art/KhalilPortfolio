import React, { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  EDITORIAL_EASE,
  staggerCards,
  fadeInUp,
  lineRevealItem,
  cardEntrance
} from '../styles/motion';
import { Mail, Globe, Send, CheckCircle2, Clock, MapPin, ArrowUpRight, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons';

export const Contact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Full-Stack Web Application',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please complete all required fields before dispatching.'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus({
        type: 'error',
        message: 'Please provide a valid email address.'
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: 'Thank you for your note. Your message has been prepared — I will reply to you shortly.'
      });
      setFormData({
        name: '',
        email: '',
        inquiryType: 'Full-Stack Web Application',
        message: ''
      });
    }, 600);
  };

  return (
    <>
      {/* 1. Contact Hero Header */}
      <section className="section-spacer-top" style={{ paddingBottom: '40px' }} aria-label="Contact Introduction">
        <div className="site-container">
          <motion.div
            initial={shouldReduceMotion ? 'visible' : 'hidden'}
            animate="visible"
            variants={staggerCards(0.1, 0.04)}
          >
            <motion.span className="kicker" variants={fadeInUp}>Contact</motion.span>
            <h1 className="hero-headline" style={{ marginBottom: '16px' }}>
              <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.15em', marginBottom: '-0.15em' }}>
                <motion.span style={{ display: 'block' }} variants={lineRevealItem}>
                  Start a <em>Conversation</em>
                </motion.span>
              </span>
            </h1>
            <motion.p className="section-header-desc" style={{ maxWidth: '780px' }} variants={fadeInUp}>
              Have a software project, architecture initiative, or consulting inquiry? Send a direct note below or reach out via email.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Contact Split Grid */}
      <section className="section-spacer-bottom" aria-label="Contact Channels and Form">
        <div className="site-container">
          <div className="contact-grid">

            {/* Left Column: Direct Coordinates */}
            <motion.div
              className="contact-info-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardEntrance}
            >
              <div className="contact-channel-item">
                <span className="channel-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Mail size={13} strokeWidth={2} />
                  Direct Email
                </span>
                <a href="mailto:walikhalil@gmail.com" className="channel-link">walikhalil@gmail.com</a>
                <p className="body-text" style={{ fontSize: '0.94rem', marginTop: '4px' }}>
                  Direct email is the most reliable channel for technical proposals and contract inquiries.
                </p>
              </div>

              <div className="contact-channel-item">
                <span className="channel-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={13} strokeWidth={2} />
                  Availability &amp; Scope
                </span>
                <p className="body-text" style={{ fontSize: '0.98rem' }}>
                  Currently accepting selective freelance contracts, full-stack application development, and cloud architecture consultations.
                </p>
              </div>

              <div className="contact-channel-item">
                <span className="channel-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={13} strokeWidth={2} />
                  Location Standard
                </span>
                <p className="body-text" style={{ fontSize: '0.98rem' }}>
                  Remote / Global Asynchronous (EAT / UTC+3). Comfortable collaborating with distributed engineering teams worldwide.
                </p>
              </div>

              <div className="contact-channel-item">
                <span className="channel-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Globe size={13} strokeWidth={2} />
                  Profiles &amp; Code
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
                  <a
                    href="https://github.com/walikhalil480-art"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-link"
                  >
                    <GithubIcon size={14} strokeWidth={2} />
                    <span>GitHub: github.com/walikhalil480-art</span>
                    <ArrowUpRight size={13} strokeWidth={2} />
                  </a>
                  <a
                    href="https://linkedin.com/in/khalil-abdi-wali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-link"
                  >
                    <LinkedinIcon size={14} strokeWidth={2} />
                    <span>LinkedIn: linkedin.com/in/khalil-abdi-wali</span>
                    <ArrowUpRight size={13} strokeWidth={2} />
                  </a>
                  <a
                    href="https://tijabo.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-link"
                  >
                    <Globe size={14} strokeWidth={2} />
                    <span>Portfolio Domain: tijabo.online</span>
                    <ArrowUpRight size={13} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive Form */}
            <motion.div
              className="contact-form-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardEntrance}
            >
              <h2 className="subheading" style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Send a Direct Message</h2>
              <p className="body-text" style={{ fontSize: '0.95rem', marginBottom: '28px' }}>
                Fill in the details below and I will get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="e.g. Elena Rostova"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="e.g. elena@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inquiryType" className="form-label">Inquiry Type</label>
                  <select
                    id="inquiryType"
                    className="form-select"
                    value={formData.inquiryType}
                    onChange={handleChange}
                  >
                    <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                    <option value="Backend Architecture & REST APIs">Backend Architecture &amp; REST APIs</option>
                    <option value="Cloud, Docker & CI/CD Infrastructure">Cloud, Docker &amp; CI/CD Infrastructure</option>
                    <option value="Technical Consultation / Advisory">Technical Consultation / Advisory</option>
                    <option value="General Inquiries">General Inquiries</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Project Details &amp; Message</label>
                  <textarea
                    id="message"
                    className="form-textarea"
                    placeholder="Briefly describe your project, timeline, and architectural objectives..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={isSubmitting}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isSubmitting ? (
                      <motion.span
                        key="submitting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                      >
                        <Loader2 size={15} strokeWidth={2} style={{ animation: 'spin 1s linear infinite' }} />
                        <span>Sending Message...</span>
                      </motion.span>
                    ) : (
                      <motion.span
                        key="ready"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                      >
                        <Send size={15} strokeWidth={2} aria-hidden="true" />
                        <span>Send Message</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                <AnimatePresence>
                  {status.type !== 'idle' && (
                    <motion.div
                      key={status.message}
                      className={`form-status-msg ${status.type}`}
                      role="alert"
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      style={{
                        marginTop: '16px',
                        padding: '12px 16px',
                        borderRadius: '3px',
                        fontSize: '0.95rem',
                        lineHeight: '1.5',
                        backgroundColor: status.type === 'success' ? '#22332A' : '#A44C2B',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <CheckCircle2 size={16} strokeWidth={2} />
                      <span>{status.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};
