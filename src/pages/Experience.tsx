import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  EDITORIAL_EASE,
  staggerCards,
  fadeInUp,
  lineRevealItem,
  cardEntrance,
  imageMaskReveal
} from '../styles/motion';
import {
  Calendar,
  Briefcase,
  CheckCircle2,
  FileText,
  GitPullRequest,
  Globe,
  ArrowRight,
  Terminal
} from 'lucide-react';

export const Experience: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const milestones = [
    {
      period: '2024 — Present',
      role: 'Cloud Infrastructure & Systems Engineering',
      organization: 'Independent Practice & Infrastructure Advisory',
      employmentType: 'Independent Practice',
      status: 'Current Engagements',
      summary:
        'Architecting automated cloud deployments, container orchestration, and declarative infrastructure for production applications. Advising on high-availability web services, automated deployment gates, and developer tooling.',
      deliverables: [
        'Designed modular Terraform blueprints for AWS VPC topologies, EKS/ECS clusters, and managed RDS PostgreSQL instances with zero environment drift.',
        'Architected multi-stage Docker builds and Helm chart templates for seamless microservice rollouts and automated rollback capabilities.',
        'Established automated GitHub Actions CI/CD workflows enforcing static type verification, unit test gates, and container vulnerability scans before deployment cutover.',
        'Configured local development clusters via Minikube to enable rapid offline testing of Kubernetes manifests and service mesh policies.'
      ],
      technologies: ['Docker', 'Kubernetes', 'Helm', 'Minikube', 'Terraform', 'AWS', 'GitHub Actions']
    },
    {
      period: '2022 — Present',
      role: 'Freelance Full-Stack Web Developer',
      organization: 'Self-Employed • Independent & Small Business Clients',
      employmentType: 'Self-Employed',
      status: 'Active Practice',
      summary:
        'Designed and developed responsive web applications for small businesses and individual clients, working across frontend development, backend engineering, API integration and deployment.',
      deliverables: [
        'Designed and developed responsive web applications for small businesses and individual clients.',
        'Built modern frontend interfaces using React, JavaScript, HTML, CSS and Tailwind CSS.',
        'Developed RESTful APIs using Node.js, Express.js, Laravel and PHP.',
        'Integrated authentication systems, payment gateways and third-party APIs.',
        'Deployed applications using Docker, Nginx, VPS servers and cloud-based environments.',
        'Managed domain configuration, SSL certificates and production deployments.',
        'Optimised application performance, SEO and responsiveness.',
        'Collaborated directly with clients to gather requirements and deliver solutions.'
      ],
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'Laravel', 'PHP', 'Docker', 'Nginx', 'VPS', 'REST APIs']
    },
    {
      period: '2023 — 2024',
      role: 'Full-Stack Platform Engineering',
      organization: 'TillPro Point of Sale & Understory Books',
      employmentType: 'Platform Launches',
      status: 'Flagship Deliveries',
      summary:
        'Engineered two end-to-end production systems: TillPro (an offline-first retail POS engine) and Understory Books (a curated digital reading platform and publishing CMS).',
      deliverables: [
        'Engineered TillPro’s local-first IndexedDB state cache, enabling sub-15ms barcode lookups and zero-downtime offline checkout transactions.',
        'Constructed high-throughput transaction sync queues with Redis and Node.js, implementing row-level database locking to eliminate inventory race conditions across multi-register stores.',
        'Architected the Understory Books AST text parsing engine in React, delivering zero Cumulative Layout Shift (CLS) and smooth long-form reading across mobile and desktop screens.',
        'Designed normalized relational PostgreSQL schemas with composite indexes for catalog indexing, customer orders, and reader telemetry.'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker']
    },
    {
      period: '2021 — 2022',
      role: 'Frontend Development & Interface Systems',
      organization: 'Client Applications & Web Standards',
      employmentType: 'Contract & Foundations',
      status: 'Foundations & Practice',
      summary:
        'Focused on building responsive, accessible, and performant web interfaces adhering to modern web standards, semantic markup, and predictable state flow.',
      deliverables: [
        'Built component-driven user interfaces in React and vanilla JavaScript emphasizing semantic HTML5 and accessible keyboard interaction.',
        'Constructed responsive layout systems utilizing CSS Grid and Flexbox mechanics without dependency on bloated styling frameworks.',
        'Established clean client-side state management patterns and integrated asynchronous RESTful data fetching hooks with comprehensive error boundaries.'
      ],
      technologies: ['JavaScript (ES6+)', 'React', 'HTML5', 'CSS3 / Grid', 'Git']
    }
  ];

  return (
    <>
      {/* 1. Experience Hero Header */}
      <section className="section-spacer-top" style={{ paddingBottom: '48px' }} aria-label="Experience Introduction">
        <div className="site-container">
          <motion.div
            initial={shouldReduceMotion ? 'visible' : 'hidden'}
            animate="visible"
            variants={staggerCards(0.1, 0.04)}
          >
            <motion.span className="kicker" variants={fadeInUp}>Career History</motion.span>
            <h1 className="hero-headline" style={{ marginBottom: '16px' }}>
              <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.15em', marginBottom: '-0.15em' }}>
                <motion.span style={{ display: 'block' }} variants={lineRevealItem}>
                  Milestones &amp; <em>Engagements</em>
                </motion.span>
              </span>
            </h1>
            <motion.p className="section-header-desc" style={{ maxWidth: '780px' }} variants={fadeInUp}>
              A factual record of my software engineering engagements, delivered production platforms, and infrastructure accomplishments. Each milestone represents real technical challenges solved with measurable results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Chronological Milestones Ledger */}
      <section className="section-spacer-bottom" aria-label="Milestones Ledger">
        <div className="site-container">
          <div className="experience-timeline-stack" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {milestones.map((item, index) => (
              <motion.article
                key={item.period}
                className="timeline-entry"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardEntrance}
              >
                {/* Meta Column */}
                <div className="timeline-meta">
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-accent)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    <Calendar size={14} strokeWidth={2} />
                    <span>{item.period}</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
                    {item.status}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Employment Type:
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>
                      {item.employmentType}
                    </div>
                  </div>
                </div>

                {/* Details Column */}
                <div>
                  <div style={{ marginBottom: '16px' }}>
                    <h2 className="timeline-role" style={{ margin: 0, fontSize: 'clamp(1.5rem, 2.2vw, 1.85rem)' }}>{item.role}</h2>
                    <p className="timeline-org" style={{ margin: '4px 0 16px 0', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <Briefcase size={14} strokeWidth={1.8} style={{ color: 'var(--text-accent)' }} />
                      <span>{item.organization}</span>
                    </p>
                  </div>

                  <p className="timeline-desc" style={{ marginBottom: '20px' }}>
                    {item.summary}
                  </p>

                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-accent)', marginBottom: '12px' }}>
                      Key Responsibilities &amp; Delivered Systems:
                    </div>
                    <ul className="timeline-deliverables" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {item.deliverables.map((deliv, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <CheckCircle2 size={16} strokeWidth={2} style={{ color: 'var(--text-accent)', flexShrink: 0, marginTop: '3px' }} />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="showcase-tags">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="tag-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* 3. Dedicated Working Environment & Engineering Setup Section */}
          <motion.div
            className="section-spacer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={cardEntrance}
          >
            <div className="experience-methodology-card">
              <div>
                <span className="kicker">Working Methodology</span>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.2rem)', marginBottom: '16px' }}>
                  Asynchronous Cadence &amp; Clear Documentation
                </h2>
                <p className="editorial-lead" style={{ marginBottom: '20px' }}>
                  I believe high-performing software engineering teams thrive on high-context written communication and clear technical documentation.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <FileText size={18} strokeWidth={1.8} style={{ color: 'var(--text-accent)', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <h3 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 2px 0' }}>Architectural RFCs</h3>
                      <p className="body-text" style={{ fontSize: '0.88rem', margin: 0 }}>Detailing trade-offs, schema diagrams, and rollback strategies before writing complex code.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <GitPullRequest size={18} strokeWidth={1.8} style={{ color: 'var(--text-accent)', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <h3 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 2px 0' }}>Structured Pull Requests</h3>
                      <p className="body-text" style={{ fontSize: '0.88rem', margin: 0 }}>Atomic commits, unit test coverage, and descriptive context for reviewers.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Globe size={18} strokeWidth={1.8} style={{ color: 'var(--text-accent)', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <h3 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 2px 0' }}>Global Asynchronous Collaboration</h3>
                      <p className="body-text" style={{ fontSize: '0.88rem', margin: 0 }}>Comfortable operating across distributed time zones with transparent task boards and telemetry.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dedicated High-Resolution Engineering Workstation Image */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={imageMaskReveal}
                style={{ overflow: 'hidden', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-card)', backgroundColor: 'var(--bg-surface)' }}
              >
                <img
                  src="/assets/experience-workspace-hd.png"
                  alt="Khalil Wali engineering terminal workstation organized for focused system architecture and production delivery"
                  width="1200"
                  height="896"
                  style={{ width: '100%', height: 'auto', aspectRatio: '4/3', display: 'block', objectFit: 'cover', imageRendering: '-webkit-optimize-contrast' }}
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* 4. Direct CTA Banner */}
          <motion.div
            className="cta-banner-dark"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={cardEntrance}
          >
            <div className="cta-banner-content">
              <div className="cta-banner-kicker">Engagement Standard</div>
              <h2 className="cta-banner-title">Considering a software engineering engagement?</h2>
              <p className="cta-banner-desc">
                Available for selective technical advisory, full-stack application development, and cloud deployment contracts.
              </p>
            </div>
            <div className="cta-banner-action">
              <Link to="/contact" className="btn-terracotta">
                <span>Initiate an Inquiry</span>
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
