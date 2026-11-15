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
import {
  Code2,
  Server,
  Database,
  Cloud,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Zap,
  GitBranch,
  Terminal,
  Workflow,
  ArrowRight,
  Boxes,
  Lock,
  HardDrive,
  Compass
} from 'lucide-react';

export const Expertise: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // 1. Core Engineering Expertise (6 Domains)
  const coreDomains = [
    {
      id: 'full-stack',
      title: 'Full-Stack Development',
      kicker: 'Interface Architecture & Fluid State Flow',
      icon: Code2,
      lead: 'Constructing robust client applications with strict type contracts, deterministic state flow, and zero layout shifts.',
      description:
        'Frontend engineering is where architectural discipline meets human perception. I build bespoke, responsive interface systems using React and TypeScript, eschewing bloated monolithic UI kits in favor of lean, accessible, and optically balanced components. Every view is engineered with semantic HTML5 landmarks, fluid typography, and precise state isolation—ensuring interfaces remain light, snappy, and resilient across low-bandwidth connections and varying display profiles.',
      technologies: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Modern CSS', 'Semantic HTML5', 'State Machines']
    },
    {
      id: 'backend',
      title: 'Backend Engineering',
      kicker: 'Stateless Services & Deterministic APIs',
      icon: Server,
      lead: 'Architecting resilient application services, decoupled business logic, and predictable RESTful API contracts.',
      description:
        'A dependable backend decouples HTTP transport mechanics from domain business rules. Using Node.js, Express, and Laravel (PHP), I implement layered services where incoming payloads are validated against strict JSON schemas before reaching business logic. I build stateless token authentication, rate-limiting middleware, idempotent write transactions, and structured audit logs to ensure high operational determinism under concurrent traffic.',
      technologies: ['Node.js', 'Express.js', 'Laravel (PHP)', 'RESTful APIs', 'JWT / Auth0', 'Middleware Pipelines']
    },
    {
      id: 'database',
      title: 'Database Architecture',
      kicker: 'Relational Modeling & Data Integrity',
      icon: Database,
      lead: 'Structuring normalized relational schemas with strict ACID invariants, optimized indexing, and zero data corruption.',
      description:
        'Data outlives codebases and application frameworks. Refactoring a web service is routine, but untangling corrupt relational data is catastrophic. I engineer relational databases in PostgreSQL adhering to third-normal-form principles, foreign-key invariants, check constraints, and immutable audit trails. To achieve sub-millisecond retrieval speeds, I inspect query plans via EXPLAIN ANALYZE and design composite B-Tree, partial, and GIN indexes matched to real workload telemetry.',
      technologies: ['PostgreSQL', 'Redis', 'Relational Schema Design', 'ACID Transactions', 'EXPLAIN ANALYZE', 'Migrations']
    },
    {
      id: 'cloud',
      title: 'Cloud Infrastructure',
      kicker: 'Infrastructure as Code & Cloud Platforms',
      icon: Cloud,
      lead: 'Provisioning declarative, version-controlled cloud environments with isolated network perimeters on AWS.',
      description:
        'Manual cloud infrastructure management via web consoles inevitably breeds configuration drift and operational blind spots. I author declarative Infrastructure as Code (IaC) using Terraform on Amazon Web Services (AWS). My architectures implement multi-Availability-Zone Virtual Private Clouds (VPCs), strict public and private subnet segmentation, managed container clusters (ECS/EKS), RDS PostgreSQL replication, and CloudFront edge delivery.',
      technologies: ['AWS', 'Terraform', 'VPC Architecture', 'IAM Security Policies', 'CloudFront CDN', 'S3 & RDS']
    },
    {
      id: 'devops',
      title: 'DevOps & Automation',
      kicker: 'Containerisation & Zero-Downtime Delivery',
      icon: Boxes,
      lead: 'Packaging applications into immutable container images and automating verification gates through continuous delivery pipelines.',
      description:
        'Containerization eliminates the friction between local development workstations and production environments. I author multi-stage Dockerfiles that build application assets in ephemeral build stages and copy only finalized binaries into minimal Alpine Linux runtimes. Every release passes through automated GitHub Actions pipelines enforcing type checks, unit tests, and security scans before executing zero-downtime rolling container updates.',
      technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'Linux (Ubuntu/Alpine)', 'Helm', 'CI/CD Pipelines']
    },
    {
      id: 'architecture',
      title: 'Software Architecture',
      kicker: 'System Boundaries & Fault Tolerance',
      icon: Compass,
      lead: 'Designing decoupled system boundaries, local-first data resilience, and graceful failure isolation mechanisms.',
      description:
        'Scalability is fundamentally about isolating failure domains. I structure systems with explicit interface contracts and local-first data caching, ensuring that transient external outages never freeze core user workflows. By separating read-heavy queries from transactional write paths and avoiding unnecessary distributed complexity, I build systems that remain simple to inspect, maintain, and evolve over many years.',
      technologies: ['Clean Architecture', 'Local-First Resiliency', 'Fault Domain Isolation', 'Event Boundaries', 'API Contracts']
    }
  ];

  // 2. Categorized Technologies & Tools
  const techCategories = [
    {
      name: 'Frontend & Interfaces',
      icon: Code2,
      stacks: [
        { name: 'React', role: 'Declarative component architecture & custom hooks' },
        { name: 'TypeScript', role: 'Compile-time type safety across data contracts' },
        { name: 'JavaScript (ES6+)', role: 'Asynchronous event loops & native browser APIs' },
        { name: 'Modern CSS & HTML5', role: 'Semantic layouts, CSS Grid & zero-CLS typography' }
      ]
    },
    {
      name: 'Backend & APIs',
      icon: Server,
      stacks: [
        { name: 'Node.js', role: 'High-throughput asynchronous event-driven runtime' },
        { name: 'Express.js', role: 'Deterministic routing, middleware & REST services' },
        { name: 'Laravel (PHP)', role: 'Structured MVC, database transactions & artisan CLI' },
        { name: 'RESTful API Design', role: 'Contract-first endpoints & strict status semantics' }
      ]
    },
    {
      name: 'Data Tier',
      icon: Database,
      stacks: [
        { name: 'PostgreSQL', role: 'Primary relational engine with ACID transaction safety' },
        { name: 'Redis', role: 'In-memory caching, rate limiting & session storage' },
        { name: 'Relational Modeling', role: 'Normalized 3NF schemas, foreign keys & check rules' },
        { name: 'Index Optimization', role: 'Composite B-Tree tuning & query execution planning' }
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      stacks: [
        { name: 'Amazon Web Services (AWS)', role: 'Multi-AZ VPCs, ECS/EKS compute, RDS & S3' },
        { name: 'Terraform', role: 'Declarative Infrastructure as Code & state locking' },
        { name: 'Docker & Kubernetes', role: 'Multi-stage immutable containers & orchestration' },
        { name: 'GitHub Actions & Linux', role: 'Automated CI/CD verification & server management' }
      ]
    }
  ];

  // 3. Engineering Approach Principles (6 Core Practices)
  const engineeringPractices = [
    {
      title: 'System Design',
      icon: Layers,
      desc: 'Architecting contract-first APIs and decoupled service boundaries so individual subsystems can scale, fail, and update independently without cascading failures.',
      badge: 'Contract-First Boundaries'
    },
    {
      title: 'Clean & Maintainable Code',
      icon: Terminal,
      desc: 'Prioritizing readable, explicit logic over clever abstractions. I keep third-party dependencies minimal to avoid technical debt, security debt, and framework churn.',
      badge: 'Explicit Over Clever'
    },
    {
      title: 'Database Integrity',
      icon: HardDrive,
      desc: 'Enforcing business rules directly within the database engine via constraints, foreign keys, and transactions rather than relying solely on fragile application heuristics.',
      badge: 'Engine-Level Constraints'
    },
    {
      title: 'Security & Authentication',
      icon: ShieldCheck,
      desc: 'Practicing defense-in-depth: stateless tokenized sessions, least-privilege IAM policies, parameterized database queries, and input sanitization at every entry point.',
      badge: 'Defense in Depth'
    },
    {
      title: 'Performance Optimisation',
      icon: Zap,
      desc: 'Eliminating layout shifts (zero CLS), optimizing asset bundles, analyzing database queries with EXPLAIN ANALYZE, and caching aggressively at edge and memory tiers.',
      badge: 'Zero CLS & Fast Queries'
    },
    {
      title: 'Operational Reliability',
      icon: Workflow,
      desc: 'Shipping immutable Docker container images through automated CI/CD pipelines, pairing rolling updates with health probes to eliminate production downtime.',
      badge: 'Zero-Downtime Rollouts'
    }
  ];

  // 4. Practical Engineering (Flagship Real Projects)
  const practicalProjects = [
    {
      kicker: 'Digital Publishing & Reading',
      title: 'Understory Books & eBaro',
      desc: 'A high-readability digital reading platform and literary bookstore featuring a bespoke reading engine, zero-CLS typography, and offline reading capability.',
      tags: ['React', 'TypeScript', 'Offline Caching', 'Node.js', 'PostgreSQL'],
      href: '/projects/understory'
    },
    {
      kicker: 'Retail Point of Sale',
      title: 'TillPro Point of Sale',
      desc: 'An offline-first retail checkout system with sub-second barcode indexing, deterministic thermal receipt printer drivers, and resilient local-to-cloud sync.',
      tags: ['TypeScript', 'Offline-First', 'SQLite Sync', 'Hardware Integration'],
      href: '/projects/tillpro'
    },
    {
      kicker: 'Cloud Infrastructure & GitOps',
      title: 'Enterprise AWS Architecture',
      desc: 'Declarative multi-AZ infrastructure provisioned via Terraform on AWS, complete with automated GitHub Actions CI/CD pipelines and container orchestration.',
      tags: ['Terraform', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions'],
      href: '/projects/cloud'
    }
  ];

  return (
    <>
      {/* 1. Professional Introduction */}
      <section className="section-spacer-top" style={{ paddingBottom: '48px' }} aria-label="Expertise Introduction">
        <div className="site-container">
          <motion.div
            initial={shouldReduceMotion ? 'visible' : 'hidden'}
            animate="visible"
            variants={staggerCards(0.1, 0.04)}
          >
            <motion.span className="kicker" variants={fadeInUp}>Technical Capabilities &amp; Architecture</motion.span>
            <h1 className="hero-headline" style={{ marginBottom: '18px' }}>
              <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.15em', marginBottom: '-0.15em' }}>
                <motion.span style={{ display: 'block' }} variants={lineRevealItem}>
                  Disciplined <em>Engineering</em>
                </motion.span>
              </span>
            </h1>
            <motion.p className="section-header-desc" style={{ maxWidth: '820px' }} variants={fadeInUp}>
              A comprehensive overview of my core engineering disciplines, technical toolchain, and architectural philosophy. I build software designed for long-term operational endurance—prioritizing type safety, clean system boundaries, verifiable database integrity, and dependable automation over superficial complexity.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Core Engineering Expertise (6 Domains) */}
      <section className="section-spacer-bottom" aria-label="Core Engineering Domains">
        <div className="site-container">
          <motion.div
            className="section-header-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            <span className="kicker">Core Disciplines</span>
            <h2 className="section-title">Six Pillars of Technical Practice</h2>
            <p className="section-header-desc">
              From user-facing interface architecture to low-level database constraints and cloud infrastructure, here is how I approach each discipline in production.
            </p>
          </motion.div>

          <motion.div
            className="expertise-domains-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerCards(0.08, 0.03)}
          >
            {coreDomains.map((domain) => {
              const IconComp = domain.icon;

              return (
                <motion.article
                  key={domain.id}
                  className="expertise-domain-card"
                  variants={cardEntrance}
                >
                  <div>
                    <div className="expertise-domain-header">
                      <div className="expertise-domain-icon-wrap">
                        <IconComp size={24} strokeWidth={1.8} />
                      </div>
                    </div>

                    <span className="kicker" style={{ marginBottom: '4px' }}>{domain.kicker}</span>
                    <h3 className="expertise-domain-title">{domain.title}</h3>
                    <p className="expertise-domain-lead">{domain.lead}</p>
                    <p className="expertise-domain-body">{domain.description}</p>
                  </div>

                  <div className="expertise-domain-tech-footer">
                    <span className="expertise-domain-tech-label">Key Technologies &amp; Practices</span>
                    <div className="expertise-tech-pills">
                      {domain.technologies.map((tech) => (
                        <span key={tech} className="expertise-tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 3. Technologies & Tools Categorized Grid */}
      <section className="section-spacer" style={{ backgroundColor: 'var(--bg-stone)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }} aria-label="Technologies and Tools">
        <div className="site-container">
          <motion.div
            className="section-header-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            <span className="kicker">Toolchain &amp; Runtime Stacks</span>
            <h2 className="section-title">Technologies &amp; Production Tools</h2>
            <p className="section-header-desc">
              An organized inventory of the languages, frameworks, database engines, and cloud tools I use daily. I value tools with proven reliability, strong community consensus, and transparent failure modes.
            </p>
          </motion.div>

          <motion.div
            className="tech-categories-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerCards(0.08, 0.03)}
          >
            {techCategories.map((category) => {
              const CatIcon = category.icon;

              return (
                <motion.div key={category.name} className="tech-category-card" variants={cardEntrance}>
                  <div className="tech-category-header">
                    <div className="tech-category-icon">
                      <CatIcon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="tech-category-name">{category.name}</h3>
                  </div>

                  <div className="tech-category-list">
                    {category.stacks.map((stack) => (
                      <div key={stack.name} className="tech-stack-row">
                        <span className="tech-stack-name">{stack.name}</span>
                        <span className="tech-stack-role">{stack.role}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. Engineering Approach Principles */}
      <section className="section-spacer" aria-label="Engineering Standards & Approach">
        <div className="site-container">
          <motion.div
            className="section-header-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            <span className="kicker">Methodology &amp; Standards</span>
            <h2 className="section-title">Architectural Standards for Production</h2>
            <p className="section-header-desc">
              Non-negotiable engineering principles applied across code design, data modeling, security, and cloud deployment to guarantee long-term system stability.
            </p>
          </motion.div>

          <motion.div
            className="approach-principles-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerCards(0.08, 0.03)}
          >
            {engineeringPractices.map((practice) => {
              const PracticeIcon = practice.icon;

              return (
                <motion.article key={practice.title} className="approach-card" variants={cardEntrance}>
                  <div className="approach-card-header">
                    <div className="approach-icon-wrap">
                      <PracticeIcon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="approach-title">{practice.title}</h3>
                  </div>
                  <p className="approach-desc">{practice.desc}</p>
                  <div className="approach-badge">
                    <CheckCircle2 size={13} strokeWidth={2} />
                    <span>{practice.badge}</span>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. Practical Engineering (Real Project Showcases) */}
      <section className="section-spacer" style={{ backgroundColor: 'var(--bg-stone)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }} aria-label="Practical Engineering Applications">
        <div className="site-container">
          <motion.div
            className="section-header-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            <span className="kicker">Real Systems in Production</span>
            <h2 className="section-title">Practical Engineering Work</h2>
            <p className="section-header-desc">
              Architectural principles are only meaningful when demonstrated in real production systems. Explore case studies highlighting how these disciplines come together.
            </p>
          </motion.div>

          <motion.div
            className="practical-showcase-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerCards(0.08, 0.03)}
          >
            {practicalProjects.map((project) => (
              <motion.div key={project.title} variants={cardEntrance}>
                <Link to={project.href} className="practical-project-card">
                  <div>
                    <div className="practical-card-top">
                      <span className="practical-project-kicker">{project.kicker}</span>
                      <h3 className="practical-project-title">{project.title}</h3>
                    </div>
                    <p className="practical-project-desc">{project.desc}</p>
                    <div className="practical-project-tags" style={{ marginBottom: '16px' }}>
                      {project.tags.map((tag) => (
                        <span key={tag} className="practical-tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="practical-card-footer">
                    <span className="practical-project-link-label">
                      Read Engineering Case Study
                      <ArrowRight size={14} strokeWidth={2} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Technical Consultation CTA */}
      <section className="section-spacer" aria-label="Collaboration Call to Action">
        <div className="site-container">
          <motion.div
            className="cta-banner-dark"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={cardEntrance}
          >
            <div className="cta-banner-content">
              <div className="cta-banner-kicker">Technical Advisory &amp; Development</div>
              <h2 className="cta-banner-title">Need technical advisory or full-stack engineering?</h2>
              <p className="cta-banner-desc">
                Whether you are architecting a new application, streamlining database performance, or designing cloud infrastructure, I can help your team execute with structural clarity and reliability.
              </p>
            </div>
            <div className="cta-banner-action">
              <Link to="/contact" className="btn-terracotta">
                <span>Start a Consultation</span>
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
