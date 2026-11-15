import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUp, Mail, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { cardEntrance, staggerCards } from '../styles/motion';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="site-footer-architectural">
      {/* Top Prominent Invitation Chapter */}
      <motion.div
        className="footer-invitation-band"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={cardEntrance}
      >
        <div className="site-container">
          <div className="footer-invitation-grid">
            <div className="footer-invitation-left">
              <span className="footer-kicker">Get in Touch</span>
              <h2 className="footer-invitation-headline">
                Have a project in mind? <em>Let’s build something meaningful.</em>
              </h2>
              <p className="footer-invitation-desc">
                Available for software architecture advisory, dependable backend system engineering, and cloud infrastructure deployments.
              </p>
            </div>
            <div className="footer-invitation-right">
              <Link to="/contact" className="btn-terracotta footer-cta-btn">
                <span>Initiate a Conversation</span>
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </Link>
              <a href="mailto:walikhalil@gmail.com" className="btn-secondary footer-email-btn">
                <Mail size={15} strokeWidth={1.8} aria-hidden="true" />
                <span>walikhalil@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Multi-Column Directory */}
      <div className="footer-main-content">
        <div className="site-container">
          <motion.div
            className="footer-columns-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerCards(0.08, 0.04)}
          >
            {/* Column 1: Brand & Closing Philosophy */}
            <motion.div className="footer-col-brand" variants={cardEntrance}>
              <Link to="/" className="brand footer-brand-logo" aria-label="Khalil Wali Home">
                <span className="brand-name">Khalil <em>Wali</em></span>
              </Link>
              <p className="footer-brand-summary">
                Software engineer building disciplined backend architectures, reliable cloud infrastructure, and polished digital reading platforms.
              </p>
              <blockquote className="footer-closing-quote">
                &ldquo;Building software that operates invisibly under load and lasts through time.&rdquo;
              </blockquote>
            </motion.div>

            {/* Column 2: Directory */}
            <motion.div className="footer-col-links" variants={cardEntrance}>
              <h3 className="footer-column-title">Directory</h3>
              <ul className="footer-links-list">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/about" className="footer-link">About</Link></li>
                <li><Link to="/projects" className="footer-link">Projects</Link></li>
                <li><Link to="/expertise" className="footer-link">Expertise</Link></li>
                <li><Link to="/experience" className="footer-link">Experience</Link></li>
                <li><Link to="/journal" className="footer-link">Journal</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </motion.div>

            {/* Column 3: Case Studies */}
            <motion.div className="footer-col-links" variants={cardEntrance}>
              <h3 className="footer-column-title">Selected Case Studies</h3>
              <ul className="footer-links-list">
                <li><Link to="/projects/understory" className="footer-link">UnderStory Books</Link></li>
                <li><Link to="/projects/maaree360" className="footer-link">MAAREE 360</Link></li>
                <li><Link to="/projects/khalil-academy" className="footer-link">Khalil Academy</Link></li>
                <li><Link to="/projects/gargaar" className="footer-link">Gargaar Emergency Response</Link></li>
              </ul>
            </motion.div>

            {/* Column 4: Channels & Connect */}
            <motion.div className="footer-col-channels" variants={cardEntrance}>
              <h3 className="footer-column-title">Channels</h3>
              <div className="footer-channels-table">
                <div className="footer-ch-item">
                  <span className="footer-ch-label">Email</span>
                  <a href="mailto:walikhalil@gmail.com" className="footer-ch-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <Mail size={13} strokeWidth={1.8} aria-hidden="true" />
                    <span>walikhalil@gmail.com</span>
                  </a>
                </div>
                <div className="footer-ch-item">
                  <span className="footer-ch-label">GitHub</span>
                  <a href="https://github.com/walikhalil480-art" target="_blank" rel="noopener noreferrer" className="footer-ch-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <GithubIcon size={13} strokeWidth={1.8} />
                    <span>walikhalil480-art</span>
                  </a>
                </div>
                <div className="footer-ch-item">
                  <span className="footer-ch-label">LinkedIn</span>
                  <a href="https://linkedin.com/in/khalil-abdi-wali" target="_blank" rel="noopener noreferrer" className="footer-ch-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <LinkedinIcon size={13} strokeWidth={1.8} />
                    <span>khalil-abdi-wali</span>
                  </a>
                </div>
                <div className="footer-ch-item">
                  <span className="footer-ch-label">Domain</span>
                  <a href="https://tijabo.online" target="_blank" rel="noopener noreferrer" className="footer-ch-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <Globe size={13} strokeWidth={1.8} aria-hidden="true" />
                    <span>tijabo.online</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Bar: Copyright, Back to Top, Status */}
          <div className="footer-bottom-bar">
            <div className="footer-copyright">
              &copy; {currentYear} Khalil Wali. All rights reserved.
            </div>

            <div className="footer-bottom-actions">
              <span className="footer-status-pill">Available for select projects</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="footer-back-to-top"
                aria-label="Back to top of page"
              >
                <span>Back to Top</span>
                <ArrowUp size={14} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
