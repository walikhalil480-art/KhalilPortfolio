import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Layout,
  Server,
  Database,
  Cloud,
  Search,
  Compass,
  FileCode2,
  CheckCircle2,
  Rocket
} from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/journalData';
import {
  EDITORIAL_EASE,
  fadeInUp,
  lineRevealItem,
  imageMaskReveal,
  cardEntrance,
  staggerContainer,
  staggerCards
} from '../styles/motion';

export const Home: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  // Subtle desktop image parallax (disabled when prefers-reduced-motion is true)
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 28]);

  return (
    <>
      {/* ============================================================ */}
      {/* 1. REFINED HERO SECTION                                      */}
      {/* ============================================================ */}
      <section ref={heroRef} className="home-hero" aria-label="Introduction">
        <div className="site-container">
          <div className="home-hero-grid">
            <motion.div
              className="home-hero-content"
              initial="hidden"
              animate="visible"
              variants={staggerContainer(0.09, 0.05)}
            >
              <motion.div className="kicker" variants={fadeInUp}>
                <span>Software Engineer</span>
              </motion.div>

              <h1 className="hero-statement-headline">
                <span className="hero-headline-line">
                  <motion.span
                    className="hero-headline-inner"
                    variants={lineRevealItem}
                  >
                    Building reliable software &amp;{' '}
                  </motion.span>
                </span>
                <span className="hero-headline-line">
                  <motion.span
                    className="hero-headline-inner"
                    variants={lineRevealItem}
                  >
                    <em>thoughtful digital systems</em>.
                  </motion.span>
                </span>
              </h1>

              <motion.p className="home-hero-intro" variants={fadeInUp}>
                Specializing in backend services, relational database architecture, and automated cloud infrastructure designed for clarity, performance, and long-term maintainability.
              </motion.p>

              <motion.div className="btn-group" variants={lineRevealItem}>
                <a href="#selected-projects" className="btn-primary">
                  <span>View Selected Work</span>
                  <ArrowDown size={15} strokeWidth={2} aria-hidden="true" />
                </a>
                <Link to="/contact" className="btn-secondary">
                  <span>Get in Touch</span>
                  <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="home-hero-figure"
              style={{ y: imageParallaxY }}
              initial="hidden"
              animate="visible"
              variants={shouldReduceMotion ? fadeInUp : imageMaskReveal}
              whileHover={{ y: -4, transition: { duration: 0.4, ease: EDITORIAL_EASE } }}
            >
              <img
                src="/assets/studio-workspace.png"
                alt="Khalil Wali engineering studio workstation with ultrawide display showing code and cloud architecture"
                width="1200"
                height="896"
                loading="eager"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. SELECTED PROJECTS PREVIEW                                 */}
      {/* ============================================================ */}
      <section className="section-spacer" id="selected-projects" aria-label="Selected Projects">
        <div className="site-container">
          <motion.div
            className="section-header-flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            <div>
              <span className="kicker">Featured Projects</span>
              <h2 className="section-title">Selected Work &amp; Case Studies</h2>
            </div>
            <p className="section-header-desc">
              Production platforms, retail checkout engines, and cloud pipelines engineered for stability, clarity, and daily reliability.
            </p>
          </motion.div>

          <div className="project-showcase-list">
            {/* Project 01: UnderStory Books */}
            <motion.article
              className="showcase-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardEntrance}
            >
              <Link to="/projects/understory" className="showcase-visual" aria-label="View UnderStory Books case study">
                <img
                  src="/assets/understory-showcase-hd.png"
                  alt="UnderStory Books digital reading platform in library studio"
                  width="1376"
                  height="768"
                  loading="lazy"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </Link>
              <div className="showcase-info">
                <span className="kicker">Digital Publishing</span>
                <h3 className="showcase-title">
                  <Link to="/projects/understory" style={{ color: 'inherit', textDecoration: 'none' }}>
                    UnderStory Books
                  </Link>
                </h3>
                <p className="showcase-subtitle">Digital reading and publishing platform with typographic precision</p>
                <p className="showcase-desc">
                  Delivers fluid, distraction-free reading on screens. Decouples the eBaro long-form text parsing AST engine from the presentation layer, supported by an optimized PostgreSQL data journal and cross-device reading persistence.
                </p>
                <div className="showcase-tags">
                  <span className="tag-pill">React 18</span>
                  <span className="tag-pill">TypeScript</span>
                  <span className="tag-pill">Node.js</span>
                  <span className="tag-pill">PostgreSQL</span>
                  <span className="tag-pill">Docker</span>
                </div>
                <div style={{ marginTop: '8px' }}>
                  <Link to="/projects/understory" className="editorial-link">
                    <span>Explore Case Study</span>
                    <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.article>

            {/* Project 02: MAAREE 360 */}
            <motion.article
              className="showcase-item reverse"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardEntrance}
            >
              <Link to="/projects/maaree360" className="showcase-visual" aria-label="View MAAREE 360 case study">
                <img
                  src="/assets/maaree360-cover.png"
                  alt="MAAREE 360 multi-tenant retail Point of Sale and store operations management platform"
                  width="1376"
                  height="768"
                  loading="lazy"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </Link>
              <div className="showcase-info">
                <span className="kicker">Multi-Tenant Retail Management</span>
                <h3 className="showcase-title">
                  <Link to="/projects/maaree360" style={{ color: 'inherit', textDecoration: 'none' }}>
                    MAAREE 360
                  </Link>
                </h3>
                <p className="showcase-subtitle">Multi-tenant enterprise POS &amp; business management platform</p>
                <p className="showcase-desc">
                  A high-availability enterprise retail platform engineered for sub-20ms touchscreen checkout, deterministic offline queue synchronization, multi-branch inventory transfers, and real-time executive telemetry.
                </p>
                <div className="showcase-tags">
                  <span className="tag-pill">React 18</span>
                  <span className="tag-pill">TypeScript</span>
                  <span className="tag-pill">Node.js</span>
                  <span className="tag-pill">PostgreSQL</span>
                  <span className="tag-pill">Prisma</span>
                  <span className="tag-pill">Redis</span>
                </div>
                <div style={{ marginTop: '8px' }}>
                  <Link to="/projects/maaree360" className="editorial-link">
                    <span>Explore Case Study</span>
                    <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.article>

            {/* Project 03: Khalil Academy */}
            <motion.article
              className="showcase-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardEntrance}
            >
              <Link to="/projects/khalil-academy" className="showcase-visual" aria-label="View Khalil Academy case study">
                <img
                  src="/assets/khalil-academy-cover.png"
                  alt="Khalil Academy Cloud and DevOps LMS platform interface with course curriculum, video player, and certificate verification"
                  width="1376"
                  height="768"
                  loading="lazy"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </Link>
              <div className="showcase-info">
                <span className="kicker">Educational Platform / LMS</span>
                <h3 className="showcase-title">
                  <Link to="/projects/khalil-academy" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Khalil Academy
                  </Link>
                </h3>
                <p className="showcase-subtitle">Enterprise Cloud &amp; DevOps learning management platform</p>
                <p className="showcase-desc">
                  Full-stack LMS built for advanced technical education in Cloud, DevOps, and Kubernetes. Features 4-tier granular RBAC, real-time video progress resume, cryptographic HMAC payment webhooks, and automated tamper-evident certificate issuance.
                </p>
                <div className="showcase-tags">
                  <span className="tag-pill">React 18</span>
                  <span className="tag-pill">TypeScript</span>
                  <span className="tag-pill">Node.js</span>
                  <span className="tag-pill">Prisma</span>
                  <span className="tag-pill">PostgreSQL</span>
                  <span className="tag-pill">Docker</span>
                  <span className="tag-pill">Kubernetes</span>
                </div>
                <div style={{ marginTop: '8px' }}>
                  <Link to="/projects/khalil-academy" className="editorial-link">
                    <span>Explore Case Study</span>
                    <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.article>

            {/* Project 04: Gargaar */}
            <motion.article
              className="showcase-item reverse"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardEntrance}
            >
              <Link to="/projects/gargaar" className="showcase-visual" aria-label="View Gargaar case study">
                <img
                  src="/assets/gargaar-cover.png"
                  alt="Gargaar Flutter mobile emergency response application running on modern smartphone with SOS trigger and live GPS dispatch map"
                  width="1376"
                  height="768"
                  loading="lazy"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </Link>
              <div className="showcase-info">
                <span className="kicker">Mobile Application / Emergency Telemetry</span>
                <h3 className="showcase-title">
                  <Link to="/projects/gargaar" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Gargaar
                  </Link>
                </h3>
                <p className="showcase-subtitle">Real-time mobile emergency response &amp; dispatch application</p>
                <p className="showcase-desc">
                  Life-critical mobile system built in Flutter. Delivers single-tap SOS activation, encrypted offline distress logging with SMS beacon fallback, sub-100ms WebSocket coordinate streaming, and PostGIS geospatial triage routing.
                </p>
                <div className="showcase-tags">
                  <span className="tag-pill">Flutter</span>
                  <span className="tag-pill">Dart</span>
                  <span className="tag-pill">WebSockets</span>
                  <span className="tag-pill">PostGIS</span>
                  <span className="tag-pill">PostgreSQL</span>
                  <span className="tag-pill">FCM</span>
                </div>
                <div style={{ marginTop: '8px' }}>
                  <Link to="/projects/gargaar" className="editorial-link">
                    <span>Explore Case Study</span>
                    <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>

          <div style={{ marginTop: '56px', textAlign: 'center' }}>
            <Link to="/projects" className="btn-secondary">
              <span>View All Projects</span>
              <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. ABOUT ME SHORT PREVIEW                                    */}
      {/* ============================================================ */}
      <section className="section-spacer split-editorial-section" aria-label="About Preview">
        <div className="site-container">
          <div className="split-editorial-grid">
            <motion.div
              className="split-editorial-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
            >
              <span className="kicker">About</span>
              <h2 className="split-editorial-statement">
                Software engineering grounded in architectural logic and <em>careful craft</em>.
              </h2>
              <p className="editorial-lead">
                I approach software with the mindset of physical architecture: data foundations must remain unshakeable, system boundaries must be clearly defined, and interfaces must treat the user’s attention with respect.
              </p>
              <p className="body-text" style={{ marginTop: '16px', marginBottom: '24px' }}>
                Specializing in backend services, relational data models, and automated cloud infrastructure, I focus on the structural integrity that keeps applications dependable when scale demands it.
              </p>
              <div>
                <Link to="/about" className="editorial-link">
                  <span>Read Full Background &amp; Philosophy</span>
                  <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="split-editorial-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={shouldReduceMotion ? fadeInUp : imageMaskReveal}
            >
              <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}>
                <img
                  src="/assets/experience-atelier.png"
                  alt="Khalil Wali software engineering atelier with dark code editor and system architecture sketches"
                  width="1200"
                  height="896"
                  style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '4/3', objectFit: 'cover', imageRendering: '-webkit-optimize-contrast' }}
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. CORE CAPABILITIES OVERVIEW                                */}
      {/* ============================================================ */}
      <section className="section-spacer" aria-label="Core Capabilities">
        <div className="site-container">
          <motion.div
            className="section-header-flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            <div>
              <span className="kicker">Disciplines</span>
              <h2 className="section-title">Technical Expertise</h2>
            </div>
            <p className="section-header-desc">
              Four specialized areas of practice spanning client interfaces, server services, database engineering, and container orchestration.
            </p>
          </motion.div>

          <motion.div
            className="capabilities-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerCards(0.08)}
          >
            <motion.div className="capability-card" variants={cardEntrance} whileHover={{ y: -3, transition: { duration: 0.25 } }}>
              <div className="capability-icon-badge">
                <Layout size={20} strokeWidth={1.75} />
              </div>
              <div className="capability-header">
                <h3 className="capability-title">Frontend Systems</h3>
                <p className="capability-desc">
                  Building responsive, accessible interfaces in React and TypeScript with attention to layout stability, typography, and fluid state flow.
                </p>
              </div>
              <div className="capability-tags">
                <span className="tag-pill">React</span>
                <span className="tag-pill">TypeScript</span>
                <span className="tag-pill">Modern CSS</span>
              </div>
            </motion.div>

            <motion.div className="capability-card" variants={cardEntrance} whileHover={{ y: -3, transition: { duration: 0.25 } }}>
              <div className="capability-icon-badge">
                <Server size={20} strokeWidth={1.75} />
              </div>
              <div className="capability-header">
                <h3 className="capability-title">Backend Services</h3>
                <p className="capability-desc">
                  Designing deterministic REST APIs, secure authentication layers, and transactional business logic services in Node.js and Laravel.
                </p>
              </div>
              <div className="capability-tags">
                <span className="tag-pill">Node.js</span>
                <span className="tag-pill">Laravel</span>
                <span className="tag-pill">REST APIs</span>
              </div>
            </motion.div>

            <motion.div className="capability-card" variants={cardEntrance} whileHover={{ y: -3, transition: { duration: 0.25 } }}>
              <div className="capability-icon-badge">
                <Database size={20} strokeWidth={1.75} />
              </div>
              <div className="capability-header">
                <h3 className="capability-title">Database Engineering</h3>
                <p className="capability-desc">
                  Structuring normalized relational schemas in PostgreSQL with explicit ACID guarantees, index optimization, and data consistency.
                </p>
              </div>
              <div className="capability-tags">
                <span className="tag-pill">PostgreSQL</span>
                <span className="tag-pill">Redis</span>
                <span className="tag-pill">Schema Design</span>
              </div>
            </motion.div>

            <motion.div className="capability-card" variants={cardEntrance} whileHover={{ y: -3, transition: { duration: 0.25 } }}>
              <div className="capability-icon-badge">
                <Cloud size={20} strokeWidth={1.75} />
              </div>
              <div className="capability-header">
                <h3 className="capability-title">Cloud &amp; DevOps</h3>
                <p className="capability-desc">
                  Automating delivery workflows with multi-stage Docker builds, Kubernetes orchestration, Terraform IaC, and GitHub Actions CI/CD.
                </p>
              </div>
              <div className="capability-tags">
                <span className="tag-pill">Docker</span>
                <span className="tag-pill">Kubernetes</span>
                <span className="tag-pill">Terraform</span>
                <span className="tag-pill">AWS</span>
              </div>
            </motion.div>
          </motion.div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Link to="/expertise" className="editorial-link">
              <span>View Full Technical Capabilities</span>
              <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. ENGINEERING APPROACH                                      */}
      {/* ============================================================ */}
      <section className="section-spacer" style={{ backgroundColor: 'var(--bg-stone)' }} aria-label="Engineering Approach">
        <div className="site-container">
          <motion.div
            className="section-header-flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            <div>
              <span className="kicker">Methodology</span>
              <h2 className="section-title">How I Build</h2>
            </div>
            <p className="section-header-desc">
              A disciplined, step-by-step execution framework for turning complex system requirements into durable production software.
            </p>
          </motion.div>

          <motion.div
            className="workflow-track"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            variants={staggerCards(0.07)}
          >
            <motion.div className="workflow-card" variants={cardEntrance}>
              <div className="capability-icon-badge" style={{ backgroundColor: 'var(--bg-surface)' }}>
                <Search size={18} strokeWidth={1.75} />
              </div>
              <div className="workflow-step-name">Understand</div>
              <p className="workflow-step-desc">Analyze domain constraints, failure modes, and user requirements before writing code.</p>
            </motion.div>

            <motion.div className="workflow-card" variants={cardEntrance}>
              <div className="capability-icon-badge" style={{ backgroundColor: 'var(--bg-surface)' }}>
                <Compass size={18} strokeWidth={1.75} />
              </div>
              <div className="workflow-step-name">Architect</div>
              <p className="workflow-step-desc">Define relational schemas, API contracts, and security boundaries with clarity.</p>
            </motion.div>

            <motion.div className="workflow-card" variants={cardEntrance}>
              <div className="capability-icon-badge" style={{ backgroundColor: 'var(--bg-surface)' }}>
                <FileCode2 size={18} strokeWidth={1.75} />
              </div>
              <div className="workflow-step-name">Build</div>
              <p className="workflow-step-desc">Develop clean, modular, and typed software adhering to established design patterns.</p>
            </motion.div>

            <motion.div className="workflow-card" variants={cardEntrance}>
              <div className="capability-icon-badge" style={{ backgroundColor: 'var(--bg-surface)' }}>
                <CheckCircle2 size={18} strokeWidth={1.75} />
              </div>
              <div className="workflow-step-name">Test</div>
              <p className="workflow-step-desc">Validate edge cases, error recovery, and end-to-end client-server interactions.</p>
            </motion.div>

            <motion.div className="workflow-card" variants={cardEntrance}>
              <div className="capability-icon-badge" style={{ backgroundColor: 'var(--bg-surface)' }}>
                <Rocket size={18} strokeWidth={1.75} />
              </div>
              <div className="workflow-step-name">Deploy</div>
              <p className="workflow-step-desc">Containerize services, automate release pipelines, and execute zero-downtime cutovers.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. ENGINEERING JOURNAL & RECENT ESSAYS                       */}
      {/* ============================================================ */}
      <section className="section-spacer" aria-label="Engineering Journal">
        <div className="site-container">
          <motion.div
            className="section-header-flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            <div>
              <span className="kicker">Essays &amp; Notes</span>
              <h2 className="section-title">The Engineering Journal</h2>
            </div>
            <p className="section-header-desc">
              Reflections on offline-first resilience, zero-layout-shift web performance, and declarative cloud infrastructure.
            </p>
          </motion.div>

          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            variants={staggerCards(0.08)}
          >
            {JOURNAL_ARTICLES.slice(0, 3).map((article) => (
              <motion.div
                key={article.slug}
                variants={cardEntrance}
                whileHover={{ y: -3, transition: { duration: 0.25 } }}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {article.category}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      {article.readingTime}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.3 }}>
                    <Link to={`/journal/${article.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="body-text" style={{ fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    {article.excerpt}
                  </p>
                </div>
                <div>
                  <Link to={`/journal/${article.slug}`} className="editorial-link" style={{ fontSize: '0.86rem', fontWeight: 600 }}>
                    <span>Read Essay</span>
                    <ArrowRight size={13} strokeWidth={2} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div style={{ marginTop: '36px', textAlign: 'center' }}>
            <Link to="/journal" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span>View All Journal Essays</span>
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CAREER PATH GATEWAY                                       */}
      {/* ============================================================ */}
      <section className="section-spacer" aria-label="Career Gateway">
        <div className="site-container">
          <div className="career-gateway-grid">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
            >
              <span className="kicker">Experience</span>
              <h2 className="section-title">Milestones &amp; Evolution</h2>
              <p className="editorial-lead" style={{ marginBottom: '16px' }}>
                A track record of continuous learning, verified production platform deliveries, and expanding technical scope.
              </p>
              <p className="body-text" style={{ marginBottom: '24px' }}>
                From early interface development in 2021 to full-stack service engineering and modern cloud container orchestration, each milestone reflects real systems running under real operational constraints.
              </p>
              <Link to="/experience" className="editorial-link">
                <span>View Full Experience History</span>
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerCards(0.09)}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
               <motion.div
                variants={cardEntrance}
                whileHover={{ y: -2, transition: { duration: 0.25 } }}
                style={{ backgroundColor: 'var(--bg-surface)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-subtle)' }}
              >
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-accent)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>2024 — Present</span>
                <h3 style={{ fontSize: '1.15rem', margin: '4px 0 6px 0', color: 'var(--text-primary)' }}>Freelance Full-Stack Web Developer</h3>
                <p className="body-text" style={{ fontSize: '0.9rem', margin: 0 }}>Responsive client web apps, REST APIs, payment gateways, and VPS/Docker deployments.</p>
              </motion.div>
              <motion.div
                variants={cardEntrance}
                whileHover={{ y: -2, transition: { duration: 0.25 } }}
                style={{ backgroundColor: 'var(--bg-surface)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-subtle)' }}
              >
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-accent)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>2025 — Present</span>
                <h3 style={{ fontSize: '1.15rem', margin: '4px 0 6px 0', color: 'var(--text-primary)' }}>Cloud Infrastructure &amp; Container Orchestration</h3>
                <p className="body-text" style={{ fontSize: '0.9rem', margin: 0 }}>Docker, Kubernetes, Helm, Terraform, and automated CI/CD pipelines.</p>
              </motion.div>

             

              <motion.div
                variants={cardEntrance}
                whileHover={{ y: -2, transition: { duration: 0.25 } }}
                style={{ backgroundColor: 'var(--bg-surface)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-subtle)' }}
              >
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-accent)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>2025 — 2026</span>
                <h3 style={{ fontSize: '1.15rem', margin: '4px 0 6px 0', color: 'var(--text-primary)' }}>Maaree 360 POS &amp; Understory Books Launches</h3>
                <p className="body-text" style={{ fontSize: '0.9rem', margin: 0 }}>Local-first offline POS terminal and typographic digital publishing reader.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
