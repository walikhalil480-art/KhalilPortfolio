import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ShieldAlert,
  Server,
  Database,
  CalendarCheck,
  CreditCard,
  MessageSquare,
  Lock,
  Workflow
} from 'lucide-react';
import { GithubIcon } from '../../components/icons/BrandIcons';
import { ArchitectureDiagram } from '../../components/ArchitectureDiagram';
import { hoyhelArchData } from '../../data/architectureData';

export const HoyHelCaseStudy: React.FC = () => {
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
            <span className="kicker">Case Study: Full-Stack Platform</span>
            <h1 className="hero-headline" style={{ marginBottom: '20px' }}>
              HoyHel — <em>Full-Stack Property Rental &amp; Booking Platform</em>
            </h1>
            <p className="editorial-lead" style={{ maxWidth: '820px' }}>
              An enterprise-grade property rental ecosystem engineered with serializable concurrency isolation against double-bookings, role-based Guest, Host, and Admin portals, Redis background queues, and real-time Socket.IO messaging.
            </p>
          </motion.div>

          {/* Project Metadata Ribbon */}
          <div
            className="case-study-meta-ribbon"
            style={{
              marginTop: '36px',
              paddingTop: '24px',
              borderTop: '1px solid var(--border-divider)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
              gap: '24px'
            }}
          >
            <div>
              <span className="channel-label">Role</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                Full-Stack Systems Architect
              </p>
            </div>
            <div>
              <span className="channel-label">Category</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                Property Rental &amp; Booking
              </p>
            </div>
            <div>
              <span className="channel-label">Primary Stack</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                React &bull; TypeScript &bull; Node.js &bull; PostgreSQL &bull; Prisma &bull; Redis
              </p>
            </div>
            <div>
              <span className="channel-label">Repository &amp; Status</span>
              <p className="body-text">
                <a
                  href="https://github.com/walikhalil480-art/property-rental-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                >
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
            style={{
              overflow: 'hidden',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <img
              src="/assets/hoyhel-cover.png"
              alt="HoyHel Property Rental & Booking platform displayed on an engineering studio monitor"
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
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            {/* 1. Context & Problem Definition */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Context &amp; Overview</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Engineering a complete marketplace beyond simple property listings
              </h2>
              <p className="body-text" style={{ marginBottom: '16px' }}>
                Property booking platforms frequently stumble on concurrency hazards: when two guests attempt to reserve the same luxury villa for overlapping dates simultaneously, weak database transaction isolation causes catastrophic double-bookings and manual refund overhead.
              </p>
              <p className="body-text">
                HoyHel was conceived from first principles as an end-to-end rental ecosystem—spanning role-based Guest, Host, and Admin portals, deterministic server-side pricing engines, real-time guest-host chat, automated cancellation policy enforcement, and infrastructure packaged for production with Terraform and Kubernetes.
              </p>
            </div>

            {/* 2. Interactive System Architecture Diagram */}
            <div style={{ marginBottom: '64px' }}>
              <span className="kicker">System Architecture</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Distributed micro-service pipeline with concurrency guarantees
              </h2>
              <p className="body-text" style={{ marginBottom: '24px' }}>
                The architecture isolates the client SPA from data mutations via an Express/TypeScript API Gateway, leveraging PostgreSQL serializable row locks for bookings, Redis + BullMQ for async background operations, and Socket.IO for real-time socket connections:
              </p>
              <ArchitectureDiagram data={hoyhelArchData} />
            </div>

            {/* 3. Core Implemented Modules */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Implemented Modules</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Multi-portal capabilities and business logic
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '24px' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', marginBottom: '10px' }}>
                    <CalendarCheck size={18} strokeWidth={2} />
                    <h3 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 600 }}>Discovery &amp; Availability</h3>
                  </div>
                  <p className="body-text" style={{ fontSize: '0.88rem', margin: 0 }}>
                    Multi-attribute search filtering by city, amenities, capacity, and date ranges. Calendar availability matrix computed deterministically from active reservation records.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', marginBottom: '10px' }}>
                    <Lock size={18} strokeWidth={2} />
                    <h3 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 600 }}>Concurrency Protection</h3>
                  </div>
                  <p className="body-text" style={{ fontSize: '0.88rem', margin: 0 }}>
                    PostgreSQL row-level locking (<code>SELECT FOR UPDATE</code>) wrapped in database transactions, guaranteeing zero double-bookings even under concurrent checkouts.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', marginBottom: '10px' }}>
                    <CreditCard size={18} strokeWidth={2} />
                    <h3 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 600 }}>Pricing &amp; Payments</h3>
                  </div>
                  <p className="body-text" style={{ fontSize: '0.88rem', margin: 0 }}>
                    Server-calculated itemized totals (nightly rate &times; nights + cleaning fee + service fee + taxes &minus; discounts). Pluggable payment drivers for Stripe and M-Pesa.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', marginBottom: '10px' }}>
                    <Workflow size={18} strokeWidth={2} />
                    <h3 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 600 }}>Cancellation Engine</h3>
                  </div>
                  <p className="body-text" style={{ fontSize: '0.88rem', margin: 0 }}>
                    Automated refund engine enforcing <code>FLEXIBLE</code>, <code>MODERATE</code>, and <code>STRICT</code> host policies based on exact cancellation timestamps.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', marginBottom: '10px' }}>
                    <MessageSquare size={18} strokeWidth={2} />
                    <h3 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 600 }}>Real-Time Messaging</h3>
                  </div>
                  <p className="body-text" style={{ fontSize: '0.88rem', margin: 0 }}>
                    Socket.IO bi-directional chat linked to property reservations, featuring typing indicators, message delivery status, and unread counters.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', marginBottom: '10px' }}>
                    <Server size={18} strokeWidth={2} />
                    <h3 style={{ fontSize: '1.05rem', margin: 6, fontWeight: 600 }}>Role-Based Portals</h3>
                  </div>
                  <p className="body-text" style={{ fontSize: '0.88rem', margin: 0 }}>
                    Strict RBAC separating Guest reservation management, Host property listing and earnings graphs, and Admin global oversight with full audit trail logging.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Engineering Challenges & Solutions */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Engineering Challenges</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Concurrency isolation and automated inventory expiration
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '20px' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
                    1. Eliminating Race Conditions in Date Overlaps
                  </h3>
                  <p className="body-text" style={{ marginBottom: '12px' }}>
                    Standard read-then-write booking workflows fail when two users select the same calendar window simultaneously. If both queries read that the dates are vacant before either inserts a reservation, both succeed.
                  </p>
                  <p className="body-text">
                    <strong>Solution:</strong> We structured checkout requests inside PostgreSQL serializable transactions. We execute a <code>SELECT ... FOR UPDATE</code> lock on property calendar slices matching <code>[checkIn, checkOut)</code>. If another transaction holds the lock, the second transaction waits; if overlapping confirmed dates are discovered, the transaction rolls back cleanly with a friendly conflict code.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
                    2. 15-Minute Reservation Hold &amp; Auto-Expiration
                  </h3>
                  <p className="body-text" style={{ marginBottom: '12px' }}>
                    When a guest clicks "Reserve", dates must be temporarily locked to allow payment entry. However, if the guest closes their browser tab, the host&rsquo;s calendar would remain locked indefinitely.
                  </p>
                  <p className="body-text">
                    <strong>Solution:</strong> We integrated Redis and BullMQ delayed job queues. Upon reservation initiation in status <code>PENDING_PAYMENT</code>, a delayed job is scheduled for 15 minutes. When the job fires, the background worker checks payment status: if still unpaid, the reservation status transitions to <code>EXPIRED</code>, instantly freeing the calendar slots for other guests.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Verified Tech Stack */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Technology Stack</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Production-grade technologies
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
                {['React 18', 'TypeScript', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'Redis', 'BullMQ', 'Socket.IO', 'Zustand', 'TanStack Query', 'Docker', 'Kubernetes', 'Helm', 'Terraform AWS'].map((tech) => (
                  <span key={tech} className="tag-pill" style={{ padding: '6px 14px', fontSize: '0.82rem' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 6. Navigation to Adjacent Case Studies */}
            <div
              style={{
                paddingTop: '32px',
                borderTop: '1px solid var(--border-divider)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <Link to="/projects/understory" className="btn-secondary">
                <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
                <span>Prev: UnderStory Books</span>
              </Link>
              <Link to="/projects/tillpro" className="btn-primary">
                <span>Next: TillPro POS</span>
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
};
