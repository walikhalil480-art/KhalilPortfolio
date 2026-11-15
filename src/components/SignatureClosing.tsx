import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, Terminal, Sparkles } from 'lucide-react';

export const SignatureClosing: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const commitments = [
    {
      icon: <Clock size={16} strokeWidth={2} />,
      title: 'Architectural Endurance',
      desc: 'Systems engineered around clear domain boundaries and standard protocols that outlast transient framework hype.'
    },
    {
      icon: <Terminal size={16} strokeWidth={2} />,
      title: 'Deterministic Operation',
      desc: 'Predictable latencies, rigorous error boundary handling, and zero unhandled exceptions under edge-case stress.'
    },
    {
      icon: <ShieldCheck size={16} strokeWidth={2} />,
      title: 'Disciplined Craft',
      desc: 'Strict typing, zero layout shift, semantic markup, and comprehensive automated test suites as standard baseline.'
    }
  ];

  return (
    <section className="signature-closing-section" style={{ padding: '80px 0 60px', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}
        >
          <span className="kicker" style={{ display: 'inline-block', marginBottom: '8px' }}>
            Engineering Credo &bull; Architectural Philosophy
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '20px'
            }}
          >
            &ldquo;Good software isn’t just built to work. <em>It’s built to last.</em>&rdquo;
          </h2>

          <p
            className="body-text"
            style={{
              fontSize: '1.08rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              maxWidth: '680px',
              margin: '0 auto 48px'
            }}
          >
            In an industry obsessed with moving fast and breaking things, I choose disciplined engineering. Every line of code, database index, and container configuration is designed to run quietly, handle failures gracefully, and stand the test of time.
          </p>
        </motion.div>

        {/* 3 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            maxWidth: '960px',
            margin: '0 auto 48px'
          }}
        >
          {commitments.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '24px',
                textAlign: 'left'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--text-accent)',
                  marginBottom: '14px'
                }}
              >
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                {item.title}
              </h3>
              <p className="body-text" style={{ fontSize: '0.88rem', margin: 0, lineHeight: 1.55 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Direct Action Link */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span>Discuss an Architectural Engagement</span>
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};
