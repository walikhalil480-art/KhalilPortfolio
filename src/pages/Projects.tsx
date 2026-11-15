import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  EDITORIAL_EASE,
  staggerCards,
  fadeInUp,
  lineRevealItem,
  cardEntrance
} from '../styles/motion';
import { ArrowRight } from 'lucide-react';
import { GithubIcon } from '../components/icons/BrandIcons';

export const Projects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const projects = [
    {
      id: 'understory',
      slug: '/projects/understory',
      title: 'UnderStory Books',
      subtitle: 'Digital Publishing & Literary Reading Platform',
      category: 'Digital Publishing Platform',
      featured: true,
      image: '/assets/understory-showcase-hd.png',
      imageAlt: 'UnderStory Books digital reading and publishing platform on desktop monitor in literary studio',
      description:
        'A dedicated digital reading platform and publishing engine engineered for literary publications and independent presses. Combines an editorial reading interface with progressive text virtualization, achieving zero layout shifts during font hydration, custom typography controls, and reliable digital book management.',
      highlights: [
        'Fluid distraction-free reading viewport with custom typography, spacing, and theme controls',
        'Decoupled AST manuscript parsing engine for structured long-form book ingestion',
        'Persistent client-side reading progress, chapter bookmarks, and table of contents virtualization',
        'Optimized PostgreSQL relational schemas for book catalogs, author credits, and chapter hierarchies'
      ],
      contribution:
        'Architected the end-to-end full-stack system, engineered the decoupled AST parser and eBaro manuscript engine in TypeScript, structured normalized PostgreSQL tables, and developed cached REST endpoints in Node.js.',
      technologies: ['React 18', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
      github: 'https://github.com/walikhalil480-art'
    },
    {
      id: 'maaree360',
      slug: '/projects/maaree360',
      title: 'MAAREE 360',
      subtitle: 'Multi-Tenant Enterprise POS & Business Management Platform',
      category: 'Multi-Tenant Retail Management',
      featured: true,
      image: '/assets/maaree360-cover.png',
      imageAlt: 'MAAREE 360 multi-tenant retail Point of Sale and store operations management platform',
      description:
        'An enterprise multi-tenant point-of-sale and retail operations management platform engineered for specialty retail and multi-branch storefronts. Built with a local-first client architecture that guarantees sub-20ms barcode scanning, offline sales queuing, multi-store inventory transfers, and real-time executive telemetry.',
      highlights: [
        'Touchscreen register interface with split payment tenders, customer CRM, and receipt printing',
        'Deterministic append-only offline queue with CRDT reconciliation for zero lost sales during outages',
        'Multi-tenant schema isolating company branches while supporting cross-store inventory lookups',
        'Pessimistic concurrency control and SKU sorting to mathematically eliminate database deadlocks'
      ],
      contribution:
        'Designed multi-tenant PostgreSQL schema, engineered the offline-first IndexedDB state cache and Web Worker barcode parser, constructed bi-directional WebSocket reconciliation, and built executive analytics dashboards.',
      technologies: ['React 18', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'Redis', 'Tailwind CSS'],
      github: 'https://github.com/walikhalil480-art/Maaree360'
    },
    {
      id: 'khalil-academy',
      slug: '/projects/khalil-academy',
      title: 'Khalil Academy',
      subtitle: 'Enterprise Cloud & DevOps Learning Platform',
      category: 'Educational Platform / LMS',
      featured: false,
      image: '/assets/khalil-academy-cover.png',
      imageAlt: 'Khalil Academy Cloud and DevOps LMS platform interface with course curriculum, video player, and certificate verification',
      description:
        'An enterprise-grade, full-stack Learning Management System (LMS) designed for high-impact technical education in Cloud Computing, DevOps, and Kubernetes. Features 4-tier Role-Based Access Control, real-time video lecture resume tracking, cryptographic HMAC webhook payments, automated PDF certificate minting, and declarative Kubernetes manifests.',
      highlights: [
        '4-tier granular Role-Based Access Control (Super Admin, Admin, Instructor, Student) with dual JWT token rotation',
        'Hierarchical curriculum structure (Course → Modules → Lessons → Quizzes → Assignments) with video playback resume state',
        'Automated tamper-evident certificate issuance with unique ID (KHA-2026-000001) and public verification endpoint',
        'Pluggable IPaymentProvider abstraction with cryptographic HMAC SHA256 webhook validation'
      ],
      contribution:
        'Architected complete full-stack platform in TypeScript/React 18 and Express, engineered Prisma ORM PostgreSQL models, built the automated PDF certificate minting and public verification API, and authored Kubernetes EKS manifests with DevSecOps CI/CD.',
      technologies: ['React 18', 'Vite', 'TypeScript', 'Node.js', 'Express', 'Prisma ORM', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
      github: 'https://github.com/walikhalil480-art/KhalilAcademy'
    },
    {
      id: 'gargaar',
      slug: '/projects/gargaar',
      title: 'Gargaar',
      subtitle: 'Real-Time Mobile Emergency Response & Dispatch Application',
      category: 'Mobile Application / Emergency Telemetry',
      featured: false,
      image: '/assets/gargaar-cover.png',
      imageAlt: 'Gargaar Flutter mobile emergency response application running on modern smartphone with SOS trigger and live GPS dispatch map',
      description:
        'A life-critical emergency mobile system engineered in Flutter—delivering instant single-tap SOS distress activation, offline signal persistence, sub-100ms real-time GPS telemetry, and geospatial responder routing via PostGIS.',
      highlights: [
        'Accessible, high-contrast single-tap SOS trigger with haptic feedback and 3-second cancel countdown buffer',
        'Local encrypted offline distress journal (SQLite/Hive) guaranteeing zero lost emergency signals with SMS beacon fallback',
        'Sub-100ms real-time streaming telemetry via WebSockets and Redis Pub/Sub directly to regional dispatch centers',
        'PostGIS geospatial spatial queries calculating nearest available emergency responders and optimal ER hospital routing'
      ],
      contribution:
        'Architected the cross-platform Flutter application, implemented local-first offline incident queueing, engineered WebSocket streaming telemetry with background location daemons, and configured PostGIS spatial radius queries.',
      technologies: ['Flutter', 'Dart', 'WebSockets', 'Node.js', 'PostGIS', 'PostgreSQL', 'Redis Pub/Sub', 'Firebase Cloud Messaging'],
      github: 'https://github.com/walikhalil480-art'
    }
  ];

  return (
    <>
      {/* 1. Projects Hero Header */}
      <section className="section-spacer-top" style={{ paddingBottom: '48px' }} aria-label="Projects Introduction">
        <div className="site-container">
          <motion.div
            initial={shouldReduceMotion ? 'visible' : 'hidden'}
            animate="visible"
            variants={staggerCards(0.1, 0.04)}
          >
            <motion.span className="kicker" variants={fadeInUp}>Portfolio</motion.span>
            <h1 className="hero-headline" style={{ marginBottom: '16px' }}>
              <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.15em', marginBottom: '-0.15em' }}>
                <motion.span style={{ display: 'block' }} variants={lineRevealItem}>
                  Selected <em>Projects</em>
                </motion.span>
              </span>
            </h1>
            <motion.p className="section-header-desc" style={{ maxWidth: '780px' }} variants={fadeInUp}>
              A curated collection of production platforms, healthcare systems, retail commerce engines, and publishing architectures I have engineered. Each project reflects genuine architectural challenges, concurrency guarantees, and verified engineering work.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Project Showcase Gallery */}
      <section className="section-spacer-bottom" aria-label="Project Gallery">
        <div className="site-container">
          <div className="project-showcase-list" style={{ gap: '80px' }}>
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                className={`showcase-item ${index % 2 === 1 ? 'reverse' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardEntrance}
              >
                <Link to={project.slug} className="showcase-visual" aria-label={`View ${project.title} case study`}>
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width="1200"
                    height="800"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                  />
                </Link>

                <div className="showcase-info">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
                    <span className="kicker" style={{ margin: 0 }}>{project.category}</span>
                    {project.featured && (
                      <span className="tag-pill" style={{ borderColor: 'var(--accent-terracotta)', color: 'var(--accent-terracotta)', fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.06em' }}>
                        FEATURED SYSTEM
                      </span>
                    )}
                  </div>
                  <h2 className="showcase-title" style={{ margin: 0 }}>
                    <Link to={project.slug} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {project.title}
                    </Link>
                  </h2>
                  <p className="showcase-subtitle" style={{ margin: '4px 0 12px 0' }}>
                    {project.subtitle}
                  </p>
                  <p className="showcase-desc">
                    {project.description}
                  </p>

                  <div style={{ marginTop: '4px' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '6px' }}>
                      Key Engineering Capabilities:
                    </div>
                    <ul style={{ margin: '0 0 12px 0', paddingLeft: '18px', fontSize: '0.88rem', lineHeight: '1.5', color: 'var(--text-body)' }}>
                      {project.highlights.map((h, i) => (
                        <li key={i} style={{ marginBottom: '4px' }}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginTop: '2px' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '4px' }}>
                      My Contribution:
                    </div>
                    <p className="body-text" style={{ fontSize: '0.90rem', lineHeight: '1.55', color: 'var(--text-body)', margin: 0 }}>
                      {project.contribution}
                    </p>
                  </div>

                  <div className="showcase-tags" style={{ marginTop: '12px' }}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag-pill">{tech}</span>
                    ))}
                  </div>

                  <div className="btn-group" style={{ marginTop: '16px' }}>
                    <Link to={project.slug} className="btn-primary">
                      <span>View Case Study</span>
                      <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                    </Link>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <GithubIcon size={14} strokeWidth={2} />
                      <span>Inspect Code</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Bottom Consultation Banner */}
          <motion.div
            className="cta-banner-dark"
            style={{ marginTop: '96px' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={cardEntrance}
          >
            <div className="cta-banner-content">
              <div className="cta-banner-kicker">Collaboration</div>
              <h2 className="cta-banner-title">Need a system architected for longevity?</h2>
              <p className="cta-banner-desc">
                From offline-first point-of-sale applications to editorial publishing tools and cloud deployments, I bring structural discipline to complex problems.
              </p>
            </div>
            <div className="cta-banner-action">
              <Link to="/contact" className="btn-terracotta">
                <span>Start a Conversation</span>
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
