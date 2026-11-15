import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Home, FolderGit2, FileText, BookOpen, Mail, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <article className="not-found-page section-spacer-top section-spacer-bottom">
      <div className="site-container-narrow" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(5rem, 12vw, 8rem)',
              fontWeight: 700,
              color: 'var(--text-accent)',
              lineHeight: 1,
              display: 'block',
              marginBottom: '8px',
              letterSpacing: '-0.03em'
            }}
          >
            404
          </span>

          <span className="kicker" style={{ marginBottom: '8px', display: 'block' }}>
            Resource Displaced &bull; Route Not Found
          </span>

          <h1 className="hero-headline" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '16px' }}>
            This page is outside the system perimeter
          </h1>

          <p
            className="editorial-lead"
            style={{ maxWidth: '600px', margin: '0 auto 36px', fontSize: '1.05rem', color: 'var(--text-secondary)' }}
          >
            The path you requested could not be resolved. It may have been reorganized, archived, or was mistyped. Choose an index route below to continue exploring:
          </p>

          {/* Recovery Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              maxWidth: '680px',
              margin: '0 auto 40px',
              textAlign: 'left'
            }}
          >
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                transition: 'border-color 0.2s ease, transform 0.2s ease'
              }}
              className="recovery-card"
            >
              <Home size={18} strokeWidth={2} style={{ color: 'var(--text-accent)', flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Homepage</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Return to portfolio start</div>
              </div>
            </Link>

            <Link
              to="/projects"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                transition: 'border-color 0.2s ease, transform 0.2s ease'
              }}
              className="recovery-card"
            >
              <FolderGit2 size={18} strokeWidth={2} style={{ color: 'var(--text-accent)', flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Case Studies</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Explore production systems</div>
              </div>
            </Link>

            <Link
              to="/resume"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                transition: 'border-color 0.2s ease, transform 0.2s ease'
              }}
              className="recovery-card"
            >
              <FileText size={18} strokeWidth={2} style={{ color: 'var(--text-accent)', flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Résumé / CV</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Inspect dossier &amp; download PDF</div>
              </div>
            </Link>

            <Link
              to="/contact"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                transition: 'border-color 0.2s ease, transform 0.2s ease'
              }}
              className="recovery-card"
            >
              <Mail size={18} strokeWidth={2} style={{ color: 'var(--text-accent)', flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Contact</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Send a direct inquiry</div>
              </div>
            </Link>
          </div>

          <div>
            <Link to="/" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <ArrowLeft size={14} strokeWidth={2} />
              <span>Back to Index</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
};
