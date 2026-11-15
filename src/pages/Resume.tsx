import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  EDITORIAL_EASE,
  cardEntrance,
  fadeInUp
} from '../styles/motion';
import {
  Download,
  Printer,
  Copy,
  Check,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
  ArrowRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons';

export const Resume: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('walikhalil480@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <article className="resume-page section-spacer-top section-spacer-bottom">
      <div className="site-container">
        {/* Header Action Bar */}
        <div
          className="resume-actions-bar no-print"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '32px',
            paddingBottom: '20px',
            borderBottom: '1px solid var(--border-divider)'
          }}
        >
          <div>
            <span className="kicker" style={{ marginBottom: '4px' }}>Curriculum Vitae</span>
            <h1 className="subheading" style={{ fontSize: '1.75rem', margin: 0 }}>
              Résumé &amp; Curriculum Vitae
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={handleCopyEmail}
              className="btn-secondary"
              aria-label="Copy email address"
              title="Copy email to clipboard"
            >
              <AnimatePresence mode="wait" initial={false}>
                {copiedEmail ? (
                  <motion.span
                    key="check"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    <Check size={14} strokeWidth={2} style={{ color: 'var(--color-terracotta)' }} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    <Copy size={14} strokeWidth={2} />
                  </motion.span>
                )}
              </AnimatePresence>
              <span>{copiedEmail ? 'Email Copied' : 'Copy Email'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="btn-secondary"
              aria-label="Print résumé"
              title="Print document"
            >
              <Printer size={14} strokeWidth={2} />
              <span>Print</span>
            </button>

            <a
              href="/assets/khalil-wali-resume.pdf"
              download="khalil-wali-resume.pdf"
              className="btn-primary"
              aria-label="Download Résumé as PDF"
              title="Download official PDF version"
            >
              <Download size={14} strokeWidth={2} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Paper Sheet Container */}
        <motion.div
          className="resume-paper"
          initial="hidden"
          animate="visible"
          variants={cardEntrance}
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: 'clamp(16px, 4vw, 48px)',
            boxShadow: 'var(--shadow-card)',
            maxWidth: '920px',
            margin: '0 auto'
          }}
        >
          {/* Identity Header */}
          <header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px',
              paddingBottom: '28px',
              borderBottom: '2px solid var(--text-accent)',
              marginBottom: '32px'
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  marginBottom: '6px'
                }}
              >
                Khalil Wali
              </h2>
              <div
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary-accent)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}
              >
                Software Engineer &amp; Full-Stack Developer
              </div>
            </div>

            <div
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                textAlign: 'left'
              }}
            >
              <div>Mogadishu, Somalia | Remote Worldwide</div>
              <div>
                <a href="mailto:walikhalil480@gmail.com" className="editorial-link">
                  walikhalil480@gmail.com
                </a>
              </div>
              <div style={{ display: 'flex', gap: '16px', marginTop: '6px' }}>
                <a
                  href="https://github.com/walikhalil480-art"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                >
                  <GithubIcon size={13} strokeWidth={2} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/khalil-wali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                >
                  <LinkedinIcon size={13} strokeWidth={2} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </header>

          {/* Section: Executive Summary */}
          <section style={{ marginBottom: '36px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--text-accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                paddingBottom: '8px',
                borderBottom: '1px solid var(--border-divider)',
                marginBottom: '14px'
              }}
            >
              Professional Summary
            </h3>
            <p className="body-text" style={{ fontSize: '0.98rem', lineHeight: 1.65 }}>
              Full-Stack Software Engineer and Systems Architect specializing in resilient web applications, dependable backend services, and automated cloud infrastructure. Experienced across React, TypeScript, Node.js, Laravel, PostgreSQL, Docker, and Kubernetes. Proven track record architecting offline-first retail checkout engines, zero-layout-shift digital publishing platforms, and declarative GitOps pipelines.
            </p>
          </section>

          {/* Section: Technical Mastery */}
          <section style={{ marginBottom: '36px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--text-accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                paddingBottom: '8px',
                borderBottom: '1px solid var(--border-divider)',
                marginBottom: '16px'
              }}
            >
              Technical Mastery &amp; Ecosystem
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '16px'
              }}
            >
              <div style={{ backgroundColor: 'var(--bg-card)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px', fontSize: '0.9rem' }}>Languages &amp; Runtimes</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>TypeScript, JavaScript (ESNext), Python, SQL (PostgreSQL, SQLite), HTML5, CSS3 / Modern Layouts</div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-card)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px', fontSize: '0.9rem' }}>Frontend Architecture</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>React 18, Next.js, Redux Toolkit, Framer Motion, Web Workers, IndexedDB, Vite, Typography Systems</div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-card)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px', fontSize: '0.9rem' }}>Backend &amp; Distributed APIs</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Node.js, Express, Fastify, RESTful APIs, WebSockets, gRPC, JWT Authentication, Microservices</div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-card)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px', fontSize: '0.9rem' }}>Databases &amp; Caching</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>PostgreSQL (pgvector, indexing, transactions), Redis (caching, pub/sub), SQLite WASM, TimescaleDB</div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-card)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px', fontSize: '0.9rem' }}>Cloud &amp; GitOps Infrastructure</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Docker, Kubernetes (EKS), Terraform (IaC), AWS (VPC, EC2, S3, RDS), GitHub Actions CI/CD, Helm, Nginx</div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-card)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px', fontSize: '0.9rem' }}>Architecture Disciplines</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Local-First Design, Zero-Downtime Deployments, Observability (Prometheus, Grafana), TDD, AST Parsers</div>
              </div>
            </div>
          </section>

          {/* Section: Flagship Engineering Projects */}
          <section style={{ marginBottom: '36px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--text-accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                paddingBottom: '8px',
                borderBottom: '1px solid var(--border-divider)',
                marginBottom: '20px'
              }}
            >
              Flagship Engineering Projects
            </h3>

            {/* Project 1 */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                  <Link to="/projects/understory" className="editorial-link" style={{ fontWeight: 700 }}>
                    Understory Books &amp; eBaro
                  </Link>{' '}
                  &bull; Lead Platform Architect
                </h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>2023 — 2024</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary-accent)', fontStyle: 'italic', marginBottom: '8px' }}>
                React 18 &bull; Node.js &bull; TypeScript &bull; PostgreSQL &bull; Redis &bull; Cloudflare Workers
              </p>
              <ul className="body-text" style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.92rem' }}>
                <li>Engineered bespoke digital publishing CMS and typographic web reader achieving <strong>0.00 Cumulative Layout Shift (CLS)</strong> through dynamic font-metric reservations.</li>
                <li>Created the <strong>eBaro AST parsing engine</strong> in Node.js, compiling multi-chapter manuscripts into lightweight JSON chunk payloads for global edge distribution.</li>
                <li>Implemented local-first reading persistence in IndexedDB with background asynchronous synchronization to PostgreSQL, eliminating reader interruption.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                  <Link to="/projects/tillpro" className="editorial-link" style={{ fontWeight: 700 }}>
                    TillPro POS
                  </Link>{' '}
                  &bull; Lead Systems &amp; Frontend Engineer
                </h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>2024</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary-accent)', fontStyle: 'italic', marginBottom: '8px' }}>
                React 18 &bull; TypeScript &bull; Web Workers &bull; SQLite WASM &bull; PostgreSQL &bull; Redis
              </p>
              <ul className="body-text" style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.92rem' }}>
                <li>Architected offline-resilient retail POS terminal processing checkouts during internet outages via cryptographically signed append-only transaction logs.</li>
                <li>Offloaded barcode parsing and tax calculation formulas to dedicated Web Workers, delivering deterministic sub-100ms checkout response times.</li>
                <li>Implemented multi-terminal inventory reconciliation using row-level locking (<code>SELECT ... FOR UPDATE</code>) and Redis queues.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                  <Link to="/projects/cloud" className="editorial-link" style={{ fontWeight: 700 }}>
                    Cloud Infrastructure &amp; GitOps Automation
                  </Link>{' '}
                  &bull; Cloud Infrastructure Engineer
                </h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>2024 — Present</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary-accent)', fontStyle: 'italic', marginBottom: '8px' }}>
                Terraform &bull; Docker &bull; Kubernetes &bull; Helm &bull; AWS &bull; GitHub Actions &bull; Prometheus
              </p>
              <ul className="body-text" style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.92rem' }}>
                <li>Provisioned multi-AZ AWS infrastructure via declarative Terraform modules with remote S3 state and DynamoDB table locking.</li>
                <li>Configured Kubernetes clusters with Cilium eBPF network policies, automated rolling deployments, and Horizontal Pod Autoscaling (HPA).</li>
                <li>Built continuous delivery pipelines in GitHub Actions with multi-stage Docker builds, Trivy vulnerability scans, and Prometheus alerting.</li>
              </ul>
            </div>
          </section>

          {/* Section: Professional Experience */}
          <section style={{ marginBottom: '36px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--text-accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                paddingBottom: '8px',
                borderBottom: '1px solid var(--border-divider)',
                marginBottom: '20px'
              }}
            >
              Professional Experience
            </h3>

            <div style={{ marginBottom: '22px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                  Freelance Full-Stack Web Developer
                </h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>2022 — Present</span>
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary-accent)', marginBottom: '8px', fontWeight: 500 }}>
                Self-Employed &bull; Independent &amp; Small Business Clients
              </div>
              <ul className="body-text" style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.92rem' }}>
                <li>Designed and developed responsive web applications for small businesses and individual clients across frontend, backend, and deployment.</li>
                <li>Built modern frontend interfaces using React, JavaScript, HTML, CSS, and Tailwind CSS.</li>
                <li>Developed RESTful APIs using Node.js, Express.js, Laravel, and PHP with tokenized authentication and payment gateway integrations.</li>
                <li>Deployed applications using Docker, Nginx, VPS servers, and cloud environments with automated SSL certificates and domain DNS management.</li>
                <li>Optimised application performance, Core Web Vitals, SEO, and responsive touch ergonomics.</li>
                <li>Collaborated directly with clients to gather requirements and deliver high-reliability solutions.</li>
              </ul>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                  Cloud Infrastructure &amp; Systems Advisory
                </h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>2024 — Present</span>
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary-accent)', marginBottom: '8px', fontWeight: 500 }}>
                Independent Practice &bull; Systems Architecture
              </div>
              <ul className="body-text" style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.92rem' }}>
                <li>Designed modular Terraform blueprints for AWS VPC topologies, EKS/ECS clusters, and managed RDS PostgreSQL instances with zero environment drift.</li>
                <li>Architected multi-stage Docker builds and Helm chart templates for seamless microservice rollouts with automated rollback gates.</li>
                <li>Configured local development clusters via Minikube for rapid offline testing of Kubernetes manifests and ingress policies.</li>
              </ul>
            </div>
          </section>

          {/* Section: Education & Credentials */}
          <section>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--text-accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                paddingBottom: '8px',
                borderBottom: '1px solid var(--border-divider)',
                marginBottom: '16px'
              }}
            >
              Education &amp; Credentials
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: 'var(--bg-card)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <GraduationCap size={16} strokeWidth={2} style={{ color: 'var(--text-accent)' }} />
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                    Bachelor of Science in Computer Science
                  </div>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  2016 — 2020 &bull; Focus in Distributed Systems &amp; Database Architecture
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-card)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Award size={16} strokeWidth={2} style={{ color: 'var(--text-accent)' }} />
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                    Certifications &amp; Training
                  </div>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  AWS Certified Solutions Architect &bull; Kubernetes Administrator (CKA Curriculum)
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </article>
  );
};
