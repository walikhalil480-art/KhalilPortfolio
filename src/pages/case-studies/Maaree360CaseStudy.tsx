import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShieldAlert, Database, Server, Cpu, Lock, Activity, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../../components/icons/BrandIcons';
import { ArchitectureDiagram } from '../../components/ArchitectureDiagram';
import { maaree360ArchData } from '../../data/architectureData';

export const Maaree360CaseStudy: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<'pos' | 'dashboard' | 'platform' | 'inventory' | 'reports'>('pos');

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const screenshots = {
    pos: {
      src: '/assets/projects/maaree360/pos.png',
      caption: 'Touchscreen Point of Sale interface with instant item search, category grid, split payment tenders, and customer assignment.',
      title: 'Touchscreen Register & Rapid Checkout'
    },
    dashboard: {
      src: '/assets/projects/maaree360/dashboard.png',
      caption: 'Executive management telemetry: gross sales, net margin, customer velocity, and critical inventory re-order alerts.',
      title: 'Real-Time Store Performance Dashboard'
    },
    platform: {
      src: '/assets/projects/maaree360/platform-console.png',
      caption: 'Multi-tenant administration console: company isolation, branch store mapping, and role-based permissions.',
      title: 'Multi-Tenant Platform Console'
    },
    inventory: {
      src: '/assets/projects/maaree360/inventory.png',
      caption: 'Multi-warehouse stock ledger tracking batch numbers, supplier re-orders, low stock notifications, and barcode mapping.',
      title: 'Stock Ledger & Inventory Control'
    },
    reports: {
      src: '/assets/projects/maaree360/reports.png',
      caption: 'Financial reporting engine: profit and loss, end-of-day register reconciliation, tax compliance, and product sales velocity.',
      title: 'Financial Auditing & P&L Telemetry'
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
            <span className="kicker">Case Study: Enterprise Retail &amp; Multi-Tenant POS</span>
            <h1 className="hero-headline" style={{ marginBottom: '20px' }}>
              MAAREE 360 — <em>Multi-Tenant POS &amp; Business Management Platform</em>
            </h1>
            <p className="editorial-lead" style={{ maxWidth: '840px' }}>
              A high-availability enterprise retail operations platform engineering sub-100ms touchscreen checkout, deterministic offline queue synchronization, multi-branch inventory control, and multi-tenant cloud telemetry.
            </p>
          </motion.div>

          {/* Project Metadata Ribbon */}
          <div className="case-study-meta-ribbon" style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--border-divider)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '24px' }}>
            <div>
              <span className="channel-label">Role</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Lead Systems Architect &amp; Full-Stack Engineer</p>
            </div>
            <div>
              <span className="channel-label">Timeline</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>2024 &ndash; 2025</p>
            </div>
            <div>
              <span className="channel-label">Primary Stack</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>React 18 &bull; TypeScript &bull; Node.js &bull; PostgreSQL &bull; Redis</p>
            </div>
            <div>
              <span className="channel-label">Repository &amp; Source</span>
              <p className="body-text">
                <a href="https://github.com/walikhalil480-art/Maaree360" target="_blank" rel="noopener noreferrer" className="editorial-link">
                  <GithubIcon size={13} strokeWidth={2} />
                  <span>walikhalil480-art/Maaree360</span>
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
              src="/assets/maaree360-cover.png"
              alt="MAAREE 360 retail touchscreen Point of Sale terminal and dashboard interface"
              width="1600"
              height="1000"
              style={{ width: '100%', height: 'auto', display: 'block', imageRendering: '-webkit-optimize-contrast' }}
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      {/* Production UI Inspection Gallery */}
      <section style={{ paddingBottom: '64px' }}>
        <div className="site-container">
          <div style={{ marginBottom: '24px' }}>
            <span className="kicker">Interface Gallery</span>
            <h2 className="subheading" style={{ fontSize: '1.8rem', marginBottom: '8px' }}>
              Inspecting the live production interfaces
            </h2>
            <p className="body-text" style={{ maxWidth: '720px' }}>
              Explore the core interfaces powering daily retail operations, from high-velocity cash register checkouts to executive financial telemetry.
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px', borderBottom: '1px solid var(--border-divider)', paddingBottom: '16px' }}>
            {(Object.keys(screenshots) as Array<keyof typeof screenshots>).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={activeTab === tabKey ? 'btn-primary' : 'btn-secondary'}
                style={{ padding: '8px 18px', fontSize: '0.85rem' }}
              >
                {screenshots[tabKey].title}
              </button>
            ))}
          </div>

          {/* Active Screenshot Display */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border-divider)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--bg-card)' }}>
              <div>
                <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{screenshots[activeTab].title}</strong>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-muted)' }}>{screenshots[activeTab].caption}</p>
              </div>
              <a
                href={screenshots[activeTab].src}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link"
                style={{ fontSize: '0.8rem' }}
              >
                <span>View Full Size</span>
                <ExternalLink size={12} strokeWidth={2} />
              </a>
            </div>
            <div style={{ padding: '16px', backgroundColor: 'var(--bg-page)' }}>
              <img
                src={screenshots[activeTab].src}
                alt={screenshots[activeTab].title}
                width="1600"
                height="900"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}
                loading="lazy"
              />
            </div>
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
            {/* 1. Context & Problem Definition */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Problem Space</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Why cloud-only checkout breaks retail operations
              </h2>
              <p className="body-text" style={{ marginBottom: '16px' }}>
                Most modern SaaS POS solutions assume constant high-speed internet. When a retail store experiences an ISP dropout or peak-hour network congestion, cloud registers spin indefinitely on payment validation or inventory lookups. Customers face lines, cashiers switch to paper receipts, and duplicate orders corrupt inventory balances upon reconnection.
              </p>
              <p className="body-text" style={{ marginBottom: '16px' }}>
                High-volume retail requires immediate tactile feedback. Scanning a barcode must resolve in sub-100ms intervals regardless of the store&rsquo;s network status, while store owners require multi-branch inventory tracking, sales auditing, and multi-tenant security.
              </p>
              <div style={{ backgroundColor: 'var(--bg-surface)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', marginBottom: '8px' }}>
                  <ShieldAlert size={14} strokeWidth={2} />
                  <span>The Operational Hazard</span>
                </div>
                <p className="body-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                  If two registers sell the final physical unit of a high-value item during an internet blackout, returning online without atomic concurrency guarantees either sells ghost stock or causes duplicate transaction batch submissions.
                </p>
              </div>
            </div>

            {/* 2. System Architecture & Topology */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">System Architecture</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Multi-tenant architecture &amp; offline queue synchronization
              </h2>
              <p className="body-text" style={{ marginBottom: '24px' }}>
                MAAREE 360 solves checkout fragility by decoupling terminal execution from cloud reconciliation. Terminals process transactions locally via IndexedDB append-only logs, and synchronize state with the cloud ledger via bi-directional WebSockets upon connectivity restoration.
              </p>

              {/* Interactive Architecture Diagram */}
              <div style={{ margin: '32px 0' }}>
                <ArchitectureDiagram data={maaree360ArchData} />
              </div>
            </div>

            {/* 3. Core Technical Innovations */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Core Engineering</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '24px' }}>
                Key architectural pillars engineered for MAAREE 360
              </h2>

              <div style={{ display: 'grid', gap: '20px' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <Database size={18} color="var(--color-primary)" />
                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>Multi-Tenant Schema Isolation with Branch Scoping</h3>
                  </div>
                  <p className="body-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                    Designed a secure multi-tenant PostgreSQL schema that strictly isolates customer companies while allowing granular multi-branch inventory transfers, shared customer loyalty databases, and store-specific pricing adjustments.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <Server size={18} color="var(--color-primary)" />
                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>Append-Only Local Queue with CRDT Reconciliation</h3>
                  </div>
                  <p className="body-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                    Each terminal maintains a local transaction journal in IndexedDB. Transactions are signed locally with unique UUIDs and terminal identifiers, allowing offline checkout to continue indefinitely and synchronizing deterministically upon reconnect.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <Lock size={18} color="var(--color-primary)" />
                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>Pessimistic Concurrency &amp; Deadlock Prevention</h3>
                  </div>
                  <p className="body-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                    During multi-register inventory reconciliation, database deadlocks are eliminated by sorting SKU identifiers alphabetically before acquiring row-level locks (<code>SELECT FOR UPDATE</code>), preventing circular dependency locks.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Outcomes & Telemetry */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Telemetry &amp; Outcomes</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Operational performance metrics
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '20px', marginBottom: '24px' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-display)', color: 'var(--text-accent)', fontWeight: 600 }}>&lt; 20ms</div>
                  <p className="body-text" style={{ fontSize: '0.9rem', marginTop: '4px' }}>Local barcode scanning and instantaneous cart recalculation latency.</p>
                </div>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-display)', color: 'var(--text-accent)', fontWeight: 600 }}>100%</div>
                  <p className="body-text" style={{ fontSize: '0.9rem', marginTop: '4px' }}>Checkout continuity during complete internet dropouts.</p>
                </div>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-display)', color: 'var(--text-accent)', fontWeight: 600 }}>Zero</div>
                  <p className="body-text" style={{ fontSize: '0.9rem', marginTop: '4px' }}>Reconciliation discrepancies across multi-terminal offline batches.</p>
                </div>
              </div>
            </div>

            {/* Navigation to next case study */}
            <div style={{ paddingTop: '32px', borderTop: '1px solid var(--border-divider)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <Link to="/projects/understory" className="btn-secondary">
                <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
                <span>Prev: UnderStory Books</span>
              </Link>
              <Link to="/projects/khalil-academy" className="btn-primary">
                <span>Next: Khalil Academy</span>
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
};

export const TillProCaseStudy = Maaree360CaseStudy;
