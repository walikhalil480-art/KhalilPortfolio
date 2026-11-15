import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldAlert, Cpu, Server, Database, Activity, RefreshCw } from 'lucide-react';
import { GithubIcon } from '../../components/icons/BrandIcons';
import { ArchitectureDiagram } from '../../components/ArchitectureDiagram';
import { understoryArchData } from '../../data/architectureData';

export const UnderstoryCaseStudy: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <article className="case-study-page">
      {/* Header Breadcrumbs & Hero */}
      <section className="section-spacer-top" style={{ paddingBottom: '32px' }}>
        <div className="site-container">
          <nav className="case-study-nav-back" aria-label="Breadcrumb">
            <Link to="/projects" className="editorial-link" style={{ marginBottom: '16px' }}>
              <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
              <span>Back to Projects</span>
            </Link>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="kicker">Case Study: Digital Publishing</span>
            <h1 className="hero-headline" style={{ marginBottom: '20px' }}>
              Understory Books &amp; eBaro — <em>Typographic Reader &amp; Manuscript Parsing Engine</em>
            </h1>
            <p className="editorial-lead" style={{ maxWidth: '820px' }}>
              A decoupled editorial reading platform engineered to preserve bookmaking heritage on digital screens—delivering an immersive, zero-layout-shift reading environment for long-form literature.
            </p>
          </motion.div>

          {/* Project Metadata Ribbon */}
          <div className="case-study-meta-ribbon" style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--border-divider)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '24px' }}>
            <div>
              <span className="channel-label">Role</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Full-Stack Platform Architect</p>
            </div>
            <div>
              <span className="channel-label">Timeline</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>2023 — 2024</p>
            </div>
            <div>
              <span className="channel-label">Primary Stack</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>React &bull; TypeScript &bull; Node.js &bull; PostgreSQL</p>
            </div>
            <div>
              <span className="channel-label">Repository &amp; Status</span>
              <p className="body-text">
                <a href="https://github.com/walikhalil480-art" target="_blank" rel="noopener noreferrer" className="editorial-link">
                  <GithubIcon size={13} strokeWidth={2} />
                  <span>github.com/walikhalil480-art</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Showcase Photography */}
      <section style={{ paddingBottom: '48px' }}>
        <div className="site-container">
          <motion.div
            className="case-study-hero-img-wrap"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}
          >
            <img
              src="/assets/understory-books.png"
              alt="Understory Books desktop reader in library studio"
              width="1376"
              height="768"
              style={{ width: '100%', height: 'auto', display: 'block', imageRendering: '-webkit-optimize-contrast' }}
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      {/* Main 7-Section Engineering Narrative */}
      <section className="section-spacer-bottom">
        <div className="site-container-narrow">
          <motion.div
            className="case-study-narrative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            {/* 1. Context & Problem Definition */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Context &amp; Problem</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Why standard web readers fail long-form literature
              </h2>
              <p className="body-text" style={{ marginBottom: '16px' }}>
                Traditional digital reading applications on the web suffer from three structural flaws: jarring layout shifts during font loading, memory exhaustion when parsing large serialized manuscripts into the DOM, and disjointed offline synchronisation. Most web readers rely on monolithic iframe embeds or bloated ePub renderers that hijack scrolling and degrade typography.
              </p>
              <p className="body-text" style={{ marginBottom: '16px' }}>
                For an independent publisher releasing multi-chapter literature, reader immersion is paramount. Any stutter during pagination, reflow jitter, or lost reading position fractures the relationship between the author’s prose and the reader’s cognitive focus.
              </p>
              <div style={{ backgroundColor: 'var(--bg-surface)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', marginBottom: '8px' }}>
                  <ShieldAlert size={14} strokeWidth={2} />
                  <span>The Architectural Bottleneck</span>
                </div>
                <p className="body-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                  A 350-page literary work contains ~120,000 words. Injecting un-windowed HTML into React’s virtual DOM creates over 4,500 active DOM nodes, inflating browser heap memory to 280MB and causing noticeable 15-frame drops during rapid vertical scrolling.
                </p>
              </div>
            </div>

            {/* 2. System Architecture & Topology */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">System Architecture</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Decoupled AST parsing engine &amp; streaming delivery
              </h2>
              <p className="body-text" style={{ marginBottom: '24px' }}>
                Understory Books decouples the raw manuscript ingestion pipeline (the eBaro engine) from the client rendering layer. Inspect the complete architectural blueprint below to review protocols and node responsibilities:
              </p>

              <ArchitectureDiagram data={understoryArchData} />
            </div>

            {/* 3. Key Technical Decisions & Trade-Offs */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Decisions &amp; Trade-Offs</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Calculated trade-offs for typographic stability
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Custom AST JSON Representation vs. Raw Markdown/HTML
                  </h3>
                  <p className="body-text" style={{ fontSize: '0.92rem', marginBottom: '10px' }}>
                    <strong>Decision:</strong> Decompose markdown into a strongly typed AST (Abstract Syntax Tree) with pre-calculated dropcap tokens, reading times, and semantic footnote links.
                  </p>
                  <p className="body-text" style={{ fontSize: '0.88rem', color: 'var(--text-secondary-accent)', margin: 0 }}>
                    <strong>Trade-off:</strong> Incurred a one-time ~18ms parsing step during editorial publication in exchange for eliminating 100% of runtime DOM parsing overhead on reader devices.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                    IndexedDB Local-First Cache vs. Pure Server Session State
                  </h3>
                  <p className="body-text" style={{ fontSize: '0.92rem', marginBottom: '10px' }}>
                    <strong>Decision:</strong> Persist the entire active chapter AST, reader typography settings, and marginalia notes in client IndexedDB.
                  </p>
                  <p className="body-text" style={{ fontSize: '0.88rem', color: 'var(--text-secondary-accent)', margin: 0 }}>
                    <strong>Trade-off:</strong> Required client-side conflict resolution when reading across multiple devices, but guaranteed zero interruption during subway or offline reading.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Deep-Dive Implementation Details */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Implementation Details</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Font metric pre-reservation &amp; asynchronous chunk streaming
              </h2>
              <p className="body-text" style={{ marginBottom: '16px' }}>
                To achieve zero layout shift (CLS = 0.00), the frontend embeds CSS <code>size-adjust</code>, <code>ascent-override</code>, and <code>descent-override</code> fallback descriptors that precisely match the bounding box of system fonts to Cormorant Garamond before the web font finishes downloading.
              </p>
              <ul className="body-text" style={{ paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} strokeWidth={2} style={{ color: 'var(--text-accent)', flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Async Generator Streams:</strong> Node.js backend streams AST nodes via asynchronous generators, yielding JSON objects as chunks instead of accumulating the complete file into buffer.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} strokeWidth={2} style={{ color: 'var(--text-accent)', flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>PostgreSQL GIN JSON Indexing:</strong> The database table stores AST payloads as <code>JSONB</code> with <code>jsonb_path_ops</code>, enabling instant sub-document querying of specific paragraphs.</span>
                </li>
              </ul>
            </div>

            {/* 5. Engineering Challenges Encountered & Solved */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Challenges &amp; Solutions</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Resolving mobile Safari memory limits &amp; dropcap reflows
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-accent)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Challenge: Safari WebKit Memory
                  </div>
                  <p className="body-text" style={{ fontSize: '0.9rem', margin: 0 }}>
                    iOS WebKit aggressively limits tab memory. When rendering long books, continuous scroll DOM bloat triggered tab reload jetsams.
                  </p>
                  <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.86rem', color: 'var(--text-primary)' }}>
                    <strong>Solution:</strong> Implemented a sliding window virtualizer that unmounts offscreen chapters while retaining scroll position metrics.
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-accent)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Challenge: Dynamic Dropcap Alignment
                  </div>
                  <p className="body-text" style={{ fontSize: '0.9rem', margin: 0 }}>
                    First-letter drop caps shifted 4px vertically across different operating systems due to mismatched font cap-height baselines.
                  </p>
                  <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.86rem', color: 'var(--text-primary)' }}>
                    <strong>Solution:</strong> Normalized dropcaps using CSS initial-letter with inline SVG clipping fallbacks for legacy browsers.
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Application Interface Gallery */}
            <div style={{ marginBottom: '64px' }}>
              <span className="kicker">Application Interface Gallery</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Actual production screens from UnderStory Books
              </h2>
              <p className="body-text" style={{ marginBottom: '28px' }}>
                Direct captures from the running application demonstrating digital book discovery, reader typography, and library management:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {[
                  {
                    title: 'Editorial Discovery & Literary Catalog',
                    subtitle: 'Clean visual browsing interface showcasing curated titles, reading recommendations, and literary categories',
                    src: '/assets/projects/understory/homepage.png',
                    alt: 'Understory Books discovery catalog'
                  },
                  {
                    title: 'In-Browser Typographic Reading Sanctuary',
                    subtitle: 'Distraction-free reading environment with adjustable font metrics, parchment theme, progress tracking, and chapter index',
                    src: '/assets/projects/understory/reading-interface.png',
                    alt: 'Understory Books reading interface'
                  },
                  {
                    title: 'Curated Digital Library Grid',
                    subtitle: 'Filterable book index supporting genre navigation, search queries, and free vs paid access controls',
                    src: '/assets/projects/understory/book-library.png',
                    alt: 'Understory Books digital library grid'
                  },
                  {
                    title: 'Book Overview & Manuscript Details',
                    subtitle: 'Detailed edition metadata, chapter breakdown, author notes, and reading duration estimates',
                    src: '/assets/projects/understory/book-details.png',
                    alt: 'Understory Books edition details'
                  },
                  {
                    title: 'Seamless Digital Access & Checkout',
                    subtitle: 'Modal checkout flow supporting instant book purchasing and direct library entitlement activation',
                    src: '/assets/projects/understory/checkout-modal.png',
                    alt: 'Understory Books checkout modal'
                  },
                  {
                    title: 'Reader Dashboard & Reading History',
                    subtitle: 'Personal reading stats, active reading sessions, saved bookmarks, and purchased library archive',
                    src: '/assets/projects/understory/user-dashboard.png',
                    alt: 'Understory Books user dashboard'
                  }
                ].map((shot, idx) => (
                  <div
                    key={shot.src}
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-card)'
                    }}
                  >
                    <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                        Screen 0{idx + 1}
                      </div>
                      <h3 style={{ fontSize: '1.2rem', margin: '0 0 6px 0', color: 'var(--text-primary)' }}>{shot.title}</h3>
                      <p className="body-text" style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-body)' }}>{shot.subtitle}</p>
                    </div>
                    <div style={{ backgroundColor: 'var(--bg-muted)', padding: '12px' }}>
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        width="1440"
                        height="900"
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-subtle)',
                          imageRendering: '-webkit-optimize-contrast'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Key Learnings & Retrospective */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Retrospective</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Key architectural takeaways
              </h2>
              <p className="body-text" style={{ marginBottom: '16px' }}>
                The central lesson of Understory Books is that software elegance lives in the constraints: by avoiding heavy external reader frameworks in favor of native browser primitives (IndexedDB, CSS font metrics, and lightweight TypeScript AST transformers), we achieved superior performance with a codebase that remains trivial to maintain.
              </p>
              <p className="body-text">
                If rebuilding today, I would explore WebAssembly (Rust) for the lexer compilation step to further accelerate multi-megabyte manuscript batch processing on the server.
              </p>
            </div>

            {/* Navigation to next case study */}
            <div style={{ paddingTop: '32px', borderTop: '1px solid var(--border-divider)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <Link to="/projects/daryeelone" className="btn-secondary">
                <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
                <span>Prev: DaryeelOne</span>
              </Link>
              <Link to="/projects/hoyhel" className="btn-primary">
                <span>Next Case Study: HoyHel</span>
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
};
