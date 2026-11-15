import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShieldCheck, GraduationCap, Award, Lock, Server, Cpu, Database, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../../components/icons/BrandIcons';
import { ArchitectureDiagram } from '../../components/ArchitectureDiagram';
import { khalilAcademyArchData } from '../../data/architectureData';

export const KhalilAcademyCaseStudy: React.FC = () => {
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
            <span className="kicker">Case Study: Cloud &amp; DevOps Education Platform</span>
            <h1 className="hero-headline" style={{ marginBottom: '20px' }}>
              Khalil Academy — <em>Enterprise Cloud &amp; DevOps Learning Platform</em>
            </h1>
            <p className="editorial-lead" style={{ maxWidth: '840px' }}>
              A full-stack, enterprise-grade Learning Management System engineered for advanced technical education in Cloud Computing, DevOps, and Kubernetes—featuring 4-tier RBAC, cryptographic HMAC webhook payments, and automated certificate verification.
            </p>
          </motion.div>

          {/* Project Metadata Ribbon */}
          <div className="case-study-meta-ribbon" style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--border-divider)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '24px' }}>
            <div>
              <span className="channel-label">Role</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Creator &amp; Full-Stack Architect</p>
            </div>
            <div>
              <span className="channel-label">Timeline</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>2025 &ndash; 2026</p>
            </div>
            <div>
              <span className="channel-label">Primary Stack</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>React 18 &bull; Node.js &bull; Express &bull; Prisma &bull; PostgreSQL &bull; Docker &bull; K8s</p>
            </div>
            <div>
              <span className="channel-label">Repository &amp; Source</span>
              <p className="body-text">
                <a href="https://github.com/walikhalil480-art/KhalilAcademy" target="_blank" rel="noopener noreferrer" className="editorial-link">
                  <GithubIcon size={13} strokeWidth={2} />
                  <span>walikhalil480-art/KhalilAcademy</span>
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
              src="/assets/khalil-academy-cover.png"
              alt="Khalil Academy Cloud &amp; DevOps LMS platform interface with course curriculum, video player, and certificate verification"
              width="1600"
              height="1000"
              style={{ width: '100%', height: 'auto', display: 'block', imageRendering: '-webkit-optimize-contrast' }}
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Engineering Narrative */}
      <section className="section-spacer-bottom">
        <div className="site-container-narrow">
          <motion.div
            className="case-study-narrative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            {/* 1. Context & Motivation */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Context &amp; Challenge</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Engineering a platform for high-impact technical mastery
              </h2>
              <p className="body-text" style={{ marginBottom: '16px' }}>
                Teaching complex technical disciplines like Kubernetes, AWS infrastructure, and DevSecOps pipelines demands more than static video hosting. Students need interactive lesson tracking, structured modular progressions, automated assignment grading, and verifiable proof of their skills.
              </p>
              <p className="body-text" style={{ marginBottom: '16px' }}>
                Many off-the-shelf LMS products suffer from slow user interfaces, insecure client-side completion hacks, and lack of programmatic credential verification. Khalil Academy was built from the ground up as a production-grade educational platform adhering to strict enterprise standards.
              </p>
              <div style={{ backgroundColor: 'var(--bg-surface)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', marginBottom: '8px' }}>
                  <ShieldCheck size={14} strokeWidth={2} />
                  <span>The Core Requirement</span>
                </div>
                <p className="body-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                  A zero-trust educational architecture where paid course enrollments, milestone achievements, and certificate minting are verified strictly server-side through cryptographic signatures and transactional database state.
                </p>
              </div>
            </div>

            {/* 2. System Architecture & Topology */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">System Architecture</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Full-stack decoupled architecture &amp; automated verification
              </h2>
              <p className="body-text" style={{ marginBottom: '24px' }}>
                The platform decouples a high-performance React 18 client from an Express.js TypeScript gateway, backed by Prisma ORM, PostgreSQL, Redis caching, and containerized deployment manifests.
              </p>

              {/* Interactive Architecture Diagram */}
              <div style={{ margin: '32px 0' }}>
                <ArchitectureDiagram data={khalilAcademyArchData} />
              </div>
            </div>

            {/* 3. Core Technical Pillars */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Key Capabilities</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '24px' }}>
                Five pillars of production engineering
              </h2>

              <div style={{ display: 'grid', gap: '20px' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <Lock size={18} color="var(--color-primary)" />
                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>1. 4-Tier RBAC &amp; Dual-Token JWT Security</h3>
                  </div>
                  <p className="body-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                    Granular role scoping across Super Admin, Admin, Instructor, and Student. Implemented 15-minute access tokens with HTTP-only rolling refresh cookies, bcrypt password hashing, and automated 15-minute account lockouts after 5 consecutive failed login attempts.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <GraduationCap size={18} color="var(--color-primary)" />
                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>2. Hierarchical Learning Engine &amp; Video Resume</h3>
                  </div>
                  <p className="body-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                    Structured hierarchy: <code>Course &rarr; Modules &rarr; Lessons &rarr; Quizzes &rarr; Assignments</code>. Supports video lectures, markdown documentation, PDFs, and coding assignments. The client continuously mirrors video playback position, allowing students to seamlessly resume learning across devices.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <Award size={18} color="var(--color-primary)" />
                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>3. Automated Certificate Engine &amp; Public Verifier</h3>
                  </div>
                  <p className="body-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                    Upon fulfilling all curriculum prerequisites, the system issues a tamper-evident certificate with a unique verification identifier (e.g., <code>KHA-2026-000001</code>). Anyone can query the public endpoint (<code>/certificates/verify/:id</code>) to validate credential authenticity, issuer signatures, and revocation history.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <Server size={18} color="var(--color-primary)" />
                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>4. Pluggable Payment &amp; Cryptographic Webhook Validation</h3>
                  </div>
                  <p className="body-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                    Decoupled <code>IPaymentProvider</code> interface enabling seamless toggling between local mock gateways and Stripe. All payment completions require cryptographic HMAC SHA256 webhook signatures, preventing frontend spoofing or man-in-the-middle attacks.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <Cpu size={18} color="var(--color-primary)" />
                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>5. DevSecOps CI/CD &amp; Kubernetes Orchestration</h3>
                  </div>
                  <p className="body-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                    Packaged with multi-stage Docker builds, Trivy container vulnerability scanning, Helm charts, and declarative Kubernetes manifests with health and liveness probes ready for Amazon EKS deployment.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Outcomes & Metrics */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Platform Outcomes</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Key architectural results
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '20px', marginBottom: '24px' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-display)', color: 'var(--color-primary)', fontWeight: 600 }}>4 Roles</div>
                  <p className="body-text" style={{ fontSize: '0.9rem', marginTop: '4px' }}>Granular Role-Based Access Control isolating Admin, Instructor, and Student capabilities.</p>
                </div>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-display)', color: 'var(--color-primary)', fontWeight: 600 }}>100%</div>
                  <p className="body-text" style={{ fontSize: '0.9rem', marginTop: '4px' }}>Server-verified course completion and automated tamper-evident certificate minting.</p>
                </div>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-display)', color: 'var(--color-primary)', fontWeight: 600 }}>K8s Ready</div>
                  <p className="body-text" style={{ fontSize: '0.9rem', marginTop: '4px' }}>Containerized microservice architecture with Helm charts and zero-downtime rolling deploys.</p>
                </div>
              </div>
            </div>

            {/* Navigation to next case study */}
            <div style={{ paddingTop: '32px', borderTop: '1px solid var(--border-divider)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <Link to="/projects/maaree360" className="btn-secondary">
                <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
                <span>Prev: MAAREE 360</span>
              </Link>
              <Link to="/projects/gargaar" className="btn-primary">
                <span>Next: Gargaar</span>
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
};
