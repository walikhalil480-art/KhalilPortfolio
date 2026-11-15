import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Share2,
  Check,
  Copy,
  BookOpen,
  Info,
  AlertTriangle
} from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/journalData';

export const JournalArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const shouldReduceMotion = useReducedMotion();
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);

  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/journal" replace />;
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  const articleIndex = JOURNAL_ARTICLES.findIndex((a) => a.slug === slug);
  const prevArticle = articleIndex > 0 ? JOURNAL_ARTICLES[articleIndex - 1] : null;
  const nextArticle = articleIndex < JOURNAL_ARTICLES.length - 1 ? JOURNAL_ARTICLES[articleIndex + 1] : null;

  return (
    <article className="journal-article-page section-spacer-top section-spacer-bottom">
      <div className="site-container-narrow">
        {/* Navigation Breadcrumb */}
        <nav style={{ marginBottom: '24px' }}>
          <Link to="/journal" className="editorial-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <ArrowLeft size={14} strokeWidth={2} />
            <span>Back to Journal Index</span>
          </Link>
        </nav>

        {/* Article Header */}
        <header style={{ marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid var(--border-divider)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '14px' }}>
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

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <Calendar size={13} strokeWidth={1.8} />
              <span>{article.publishedDate}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <Clock size={13} strokeWidth={1.8} />
              <span>{article.readingTime}</span>
            </div>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '16px'
            }}
          >
            {article.title}
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary-accent)',
              fontStyle: 'italic',
              lineHeight: 1.55,
              marginBottom: '24px'
            }}
          >
            {article.subtitle}
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              By <strong>Khalil Wali</strong> &bull; Architectural Analysis
            </div>

            <button
              onClick={handleShare}
              className="btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.82rem' }}
              aria-label="Share article link"
            >
              {copiedLink ? <Check size={13} strokeWidth={2} /> : <Share2 size={13} strokeWidth={2} />}
              <span>{copiedLink ? 'Link Copied' : 'Share Article'}</span>
            </button>
          </div>
        </header>

        {/* Table of Contents Box */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '24px',
            marginBottom: '48px'
          }}
        >
          <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-accent)', marginBottom: '12px' }}>
            Table of Contents
          </div>
          <ol style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {article.tableOfContents.map((item) => (
              <li key={item.id} style={{ fontSize: '0.92rem' }}>
                <a
                  href={`#${item.id}`}
                  style={{ color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.2s' }}
                  className="editorial-link"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Article Body Sections */}
        <div className="journal-content-body" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {article.sections.map((section, idx) => (
            <section key={section.id} id={section.id}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.85rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                  letterSpacing: '-0.01em'
                }}
              >
                {section.heading}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
                {section.content.map((pText, pIdx) => (
                  <p key={pIdx} className="body-text" style={{ fontSize: '1.02rem', lineHeight: 1.75 }}>
                    {pText}
                  </p>
                ))}
              </div>

              {/* Code Snippet Block */}
              {section.codeBlock && (
                <div
                  style={{
                    backgroundColor: '#1b2620',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid #2e3e34',
                    overflow: 'hidden',
                    margin: '24px 0',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '8px 16px',
                      backgroundColor: '#141d18',
                      borderBottom: '1px solid #28372d',
                      fontSize: '0.78rem',
                      color: '#a3b5a8',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <span>{section.codeBlock.filename || section.codeBlock.language}</span>
                    <button
                      onClick={() => handleCopyCode(section.codeBlock!.code, idx)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: copiedCodeIndex === idx ? '#4ade80' : '#a3b5a8',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.74rem'
                      }}
                    >
                      {copiedCodeIndex === idx ? <Check size={12} /> : <Copy size={12} />}
                      <span>{copiedCodeIndex === idx ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre
                    style={{
                      margin: 0,
                      padding: '16px',
                      overflowX: 'auto',
                      fontSize: '0.88rem',
                      fontFamily: 'var(--font-mono)',
                      lineHeight: 1.55,
                      color: '#e5e7eb'
                    }}
                  >
                    <code>{section.codeBlock.code}</code>
                  </pre>
                </div>
              )}

              {/* Callout Alert */}
              {section.callout && (
                <div
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    borderLeft: '3px solid var(--text-accent)',
                    padding: '16px 20px',
                    borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                    margin: '24px 0'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-accent)' }}>
                    <Info size={14} />
                    <span>Architectural Note</span>
                  </div>
                  <p className="body-text" style={{ fontSize: '0.94rem', margin: 0 }}>
                    {section.callout.text}
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Footer Navigation */}
        <footer
          style={{
            marginTop: '64px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border-divider)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          {prevArticle ? (
            <Link to={`/journal/${prevArticle.slug}`} className="editorial-link" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ArrowLeft size={14} />
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Previous Essay</div>
                <div style={{ fontWeight: 600 }}>{prevArticle.title}</div>
              </div>
            </Link>
          ) : <div />}

          {nextArticle ? (
            <Link to={`/journal/${nextArticle.slug}`} className="editorial-link" style={{ display: 'flex', alignItems: 'center', gap: '6px', textAlign: 'right' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Next Essay</div>
                <div style={{ fontWeight: 600 }}>{nextArticle.title}</div>
              </div>
              <ArrowRight size={14} />
            </Link>
          ) : <div />}
        </footer>
      </div>
    </article>
  );
};
