import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldAlert, Cloud, Box, GitBranch, Lock, Activity } from 'lucide-react';
import { GithubIcon } from '../../components/icons/BrandIcons';
import { ArchitectureDiagram } from '../../components/ArchitectureDiagram';
import { cloudArchData } from '../../data/architectureData';

export const CloudCaseStudy: React.FC = () => {
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
            <span className="kicker">Case Study: Cloud Infrastructure</span>
            <h1 className="hero-headline" style={{ marginBottom: '20px' }}>
              Cloud Infrastructure &amp; <em>GitOps Automation</em>
            </h1>
            <p className="editorial-lead" style={{ maxWidth: '820px' }}>
              Resilient, reproducible, zero-downtime microservice orchestration fabricated entirely through code—unifying Docker, Kubernetes, Helm, Terraform, and automated GitHub Actions verification.
            </p>
          </motion.div>

          {/* Project Metadata Ribbon */}
          <div className="case-study-meta-ribbon" style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--border-divider)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '24px' }}>
            <div>
              <span className="channel-label">Role</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Cloud Infrastructure Engineer</p>
            </div>
            <div>
              <span className="channel-label">Timeline</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>2024 — Present</p>
            </div>
            <div>
              <span className="channel-label">Primary Stack</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Docker &bull; Kubernetes &bull; Terraform &bull; AWS</p>
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
              src="/assets/cloud-datacenter.png"
              alt="Symmetrical enterprise datacenter corridor with server racks and fiber cabling"
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
                Why manual server provisioning leads to configuration drift
              </h2>
              <p className="body-text" style={{ marginBottom: '16px' }}>
                Engineering teams frequently fall into the trap of snowflake servers: virtual machines configured via manual SSH commands, unversioned bash scripts, and implicit dependencies installed over years. When a node fails or disaster recovery requires a rebuild, spinning up an exact replacement turns into days of trial and error.
              </p>
              <p className="body-text" style={{ marginBottom: '16px' }}>
                Manual deployments also lack rigorous gates: security vulnerabilities slip into production containers, ports are exposed without strict firewall rules, and deployments cause service interruptions when new pods boot slower than older pods terminate.
              </p>
              <div style={{ backgroundColor: 'var(--bg-surface)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', marginBottom: '8px' }}>
                  <ShieldAlert size={14} strokeWidth={2} />
                  <span>The Infrastructure Target</span>
                </div>
                <p className="body-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                  Fabricate a 100% reproducible, declarative GitOps pipeline where every single server resource—VPCs, subnets, Kubernetes clusters, secrets, and Helm releases—is versioned in Git and provisioned automatically with zero human SSH access.
                </p>
              </div>
            </div>

            {/* 2. System Architecture & Topology */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">System Architecture</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Declarative cloud orchestration topology
              </h2>
              <p className="body-text" style={{ marginBottom: '24px' }}>
                This cloud ecosystem couples Terraform infrastructure-as-code with Kubernetes container orchestration, managed by an automated CI/CD pipeline. Inspect the complete architectural blueprint below to review node responsibilities and network boundaries:
              </p>

              <ArchitectureDiagram data={cloudArchData} />
            </div>

            {/* 3. Key Technical Decisions & Trade-Offs */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Decisions &amp; Trade-Offs</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Engineering trade-offs for immutable reliability
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Declarative Helm Charts vs. Raw Kubectl Manifests
                  </h3>
                  <p className="body-text" style={{ fontSize: '0.92rem', marginBottom: '10px' }}>
                    <strong>Decision:</strong> Encapsulate deployments, services, ingresses, and configmaps into versioned Helm charts with parameterized values for staging and production.
                  </p>
                  <p className="body-text" style={{ fontSize: '0.88rem', color: 'var(--text-secondary-accent)', margin: 0 }}>
                    <strong>Trade-off:</strong> Introduces Helm templating syntax, but enables atomic releases (<code>helm upgrade --atomic</code>) with automatic instantaneous rollback if health checks fail.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Multi-Stage Docker with Non-Root Security vs. Standard Images
                  </h3>
                  <p className="body-text" style={{ fontSize: '0.92rem', marginBottom: '10px' }}>
                    <strong>Decision:</strong> Enforce multi-stage Alpine images with unprivileged <code>USER node</code> and read-only root filesystems across all microservices.
                  </p>
                  <p className="body-text" style={{ fontSize: '0.88rem', color: 'var(--text-secondary-accent)', margin: 0 }}>
                    <strong>Trade-off:</strong> Requires explicit volume mounts for any temporary file writing, but eliminates container breakout attack vectors and shrinks image sizes from 850MB to 110MB.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Deep-Dive Implementation Details */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Implementation Details</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Pipeline caching, vulnerability scanning &amp; zero-downtime cutover
              </h2>
              <p className="body-text" style={{ marginBottom: '16px' }}>
                The automated pipeline executes through GitHub Actions, utilizing Docker Buildx and GitHub Actions Cache (<code>type=gha</code>) to achieve sub-45s container builds.
              </p>
              <ul className="body-text" style={{ paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} strokeWidth={2} style={{ color: 'var(--text-accent)', flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Aquasecurity Trivy Audits:</strong> Injected into the CI pipeline to scan the Linux filesystem and node_modules for high and critical CVEs before pushing images to registries.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} strokeWidth={2} style={{ color: 'var(--text-accent)', flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Rolling Update Strategy:</strong> Kubernetes deployments configure <code>maxSurge: 1</code> and <code>maxUnavailable: 0</code>, guaranteeing continuous traffic availability while new pods warm up.</span>
                </li>
              </ul>
            </div>

            {/* 5. Engineering Challenges Encountered & Solved */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Challenges &amp; Solutions</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Solving node cold starts &amp; ingress routing loops
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-accent)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Challenge: Premature Traffic Routing
                  </div>
                  <p className="body-text" style={{ fontSize: '0.9rem', margin: 0 }}>
                    During rolling updates, the Kubernetes Service forwarded incoming HTTP requests to newly started pods before Node.js had finished its database connection handshake, resulting in 502 Bad Gateway errors.
                  </p>
                  <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.86rem', color: 'var(--text-primary)' }}>
                    <strong>Solution:</strong> Implemented a deep readiness probe (<code>/api/v1/health/detailed</code>) that only passes once the PostgreSQL pool and Redis cache respond, eliminating 502 drops completely.
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-accent)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Challenge: Zombie PID 1 Processes
                  </div>
                  <p className="body-text" style={{ fontSize: '0.9rem', margin: 0 }}>
                    When containers were terminated, Node.js running as PID 1 ignored the standard SIGTERM signal, causing Kubernetes to wait the full 30-second grace period before abruptly sending SIGKILL.
                  </p>
                  <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.86rem', color: 'var(--text-primary)' }}>
                    <strong>Solution:</strong> Wrapped the entrypoint in <code>dumb-init</code>, which properly intercepts and forwards SIGTERM to Node.js for clean connection draining in &lt;1.2s.
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Performance, Reliability & Security Outcomes */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Outcomes &amp; Metrics</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Audited deployment velocity &amp; cluster metrics
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '20px', marginBottom: '24px' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-display)', color: 'var(--text-accent)', fontWeight: 600 }}>0s</div>
                  <p className="body-text" style={{ fontSize: '0.9rem', marginTop: '4px' }}>Zero downtime during container rolling releases and Helm chart upgrades.</p>
                </div>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-display)', color: 'var(--text-accent)', fontWeight: 600 }}>42s</div>
                  <p className="body-text" style={{ fontSize: '0.9rem', marginTop: '4px' }}>Median cached container compilation time in GitHub Actions.</p>
                </div>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-display)', color: 'var(--text-accent)', fontWeight: 600 }}>110MB</div>
                  <p className="body-text" style={{ fontSize: '0.9rem', marginTop: '4px' }}>Hardened Alpine production image size down from 850MB.</p>
                </div>
              </div>
            </div>

            {/* 7. Key Learnings & Retrospective */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Retrospective</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                The discipline of declarative infrastructure
              </h2>
              <p className="body-text" style={{ marginBottom: '16px' }}>
                Building this infrastructure verified the core doctrine of modern operations: if a configuration isn’t codified in a repository, it doesn’t exist. Declarative systems eliminate human error, prevent configuration drift, and allow disaster recovery to take minutes instead of days.
              </p>
              <p className="body-text">
                Investing time in fine-tuned readiness probes, resource quotas, and signal forwarding transforms standard containers into production-grade systems capable of handling unexpected spikes without human intervention.
              </p>
            </div>

            {/* Navigation to next case study */}
            <div style={{ paddingTop: '32px', borderTop: '1px solid var(--border-divider)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <Link to="/projects/tillpro" className="btn-secondary">
                <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
                <span>Previous: TillPro POS</span>
              </Link>
              <Link to="/projects" className="btn-primary">
                <span>All Projects</span>
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
};
