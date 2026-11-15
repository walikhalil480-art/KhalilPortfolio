import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, Calendar, Bookmark } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/journalData';
import {
  EDITORIAL_EASE,
  staggerCards,
  fadeInUp,
  lineRevealItem,
  cardEntrance
} from '../styles/motion';

export const Journal: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <article className="journal-index-page section-spacer-top section-spacer-bottom">
      <div className="site-container">
        {/* Header Hero */}
        <motion.div
          style={{ maxWidth: '820px', marginBottom: '56px' }}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          animate="visible"
          variants={staggerCards(0.1, 0.04)}
        >
          <motion.span className="kicker" variants={fadeInUp}>Essays &amp; Notes</motion.span>
          <h1 className="hero-headline" style={{ marginBottom: '18px' }}>
            <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.15em', marginBottom: '-0.15em' }}>
              <motion.span style={{ display: 'block' }} variants={lineRevealItem}>
                The Engineering <em>Journal</em>
              </motion.span>
            </span>
          </h1>
          <motion.p className="editorial-lead" variants={fadeInUp}>
            Reflections from the workbench. Detailed architectural notes on local-first resilience, zero-layout-shift web performance, and reproducible cloud infrastructure.
          </motion.p>
        </motion.div>

        {/* Articles List */}
        <motion.div
          className="journal-articles-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerCards(0.08, 0.04)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            maxWidth: '920px'
          }}
        >
          {JOURNAL_ARTICLES.map((article, index) => (
            <motion.div
              key={article.slug}
              variants={cardEntrance}
              whileHover={{ y: shouldReduceMotion ? 0 : -2 }}
              transition={{ duration: 0.2 }}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(24px, 4vw, 36px)',
                boxShadow: 'var(--shadow-card)',
                transition: 'border-color 0.2s ease'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  flexWrap: 'wrap',
                  marginBottom: '12px'
                }}
              >
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--text-accent)',
                    backgroundColor: 'var(--bg-subtle)',
                    padding: '3px 8px',
                    borderRadius: '4px'
                  }}
                >
                  {article.category}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  <Calendar size={13} strokeWidth={1.8} />
                  <span>{article.publishedDate}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  <Clock size={13} strokeWidth={1.8} />
                  <span>{article.readingTime}</span>
                </div>
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '10px', lineHeight: 1.25 }}>
                <Link
                  to={`/journal/${article.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  className="editorial-heading-link"
                >
                  {article.title}
                </Link>
              </h2>

              <p style={{ fontSize: '1rem', color: 'var(--text-secondary-accent)', fontStyle: 'italic', marginBottom: '14px', lineHeight: 1.5 }}>
                {article.subtitle}
              </p>

              <p className="body-text" style={{ fontSize: '0.96rem', lineHeight: 1.65, marginBottom: '20px' }}>
                {article.excerpt}
              </p>

              <div>
                <Link
                  to={`/journal/${article.slug}`}
                  className="editorial-link"
                  style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>Read Technical Analysis</span>
                  <ArrowRight size={14} strokeWidth={2} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </article>
  );
};
