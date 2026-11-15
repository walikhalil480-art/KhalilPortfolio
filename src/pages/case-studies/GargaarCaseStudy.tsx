import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShieldAlert, Radio, MapPin, BellRing, Smartphone, Server, Database, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../../components/icons/BrandIcons';
import { ArchitectureDiagram } from '../../components/ArchitectureDiagram';
import { gargaarArchData } from '../../data/architectureData';

export const GargaarCaseStudy: React.FC = () => {
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
            <span className="kicker">Case Study: Mobile Emergency Response System</span>
            <h1 className="hero-headline" style={{ marginBottom: '20px' }}>
              Gargaar — <em>Flutter-Based Real-Time Emergency Response &amp; Dispatch</em>
            </h1>
            <p className="editorial-lead" style={{ maxWidth: '840px' }}>
              A life-critical emergency mobile system engineered in Flutter—delivering instant single-tap SOS distress activation, offline signal persistence, sub-100ms real-time GPS telemetry, and geospatial responder routing.
            </p>
          </motion.div>

          {/* Project Metadata Ribbon */}
          <div className="case-study-meta-ribbon" style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--border-divider)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '24px' }}>
            <div>
              <span className="channel-label">Role</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Mobile Architect &amp; Systems Engineer</p>
            </div>
            <div>
              <span className="channel-label">Timeline</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>2025</p>
            </div>
            <div>
              <span className="channel-label">Primary Stack</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Flutter &bull; Dart &bull; WebSockets &bull; PostGIS &bull; Redis &bull; FCM</p>
            </div>
            <div>
              <span className="channel-label">Repository &amp; Status</span>
              <p className="body-text">
                <a href="https://github.com/walikhalil480-art" target="_blank" rel="noopener noreferrer" className="editorial-link">
                  <GithubIcon size={13} strokeWidth={2} />
                  <span>walikhalil480-art/Gargaar</span>
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
              src="/assets/gargaar-cover.png"
              alt="Gargaar Flutter emergency response mobile app running on modern smartphone with SOS trigger and live GPS dispatch map"
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
                When seconds decide survival: eliminating mobile latency in emergencies
              </h2>
              <p className="body-text" style={{ marginBottom: '16px' }}>
                In acute medical emergencies, traffic accidents, and natural disasters, traditional emergency response pipelines fail due to friction. Callers panic and struggle to articulate verbal street addresses; dispatchers manually transcribe coordinates; and spotty mobile networks drop calls.
              </p>
              <p className="body-text" style={{ marginBottom: '16px' }}>
                Gargaar was conceived to compress the critical response window. By replacing manual phone triage with a single-tap SOS protocol, the system locks user coordinates, assesses incident category, and alerts localized emergency services in under two seconds.
              </p>
              <div style={{ backgroundColor: 'var(--bg-surface)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', marginBottom: '8px' }}>
                  <ShieldAlert size={14} strokeWidth={2} />
                  <span>The Critical Failure Mode</span>
                </div>
                <p className="body-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                  If a user hits SOS in a basement, underground parking lot, or rural dead zone with intermittent mobile connection, a conventional HTTP request fails silently. Gargaar guarantees local disk persistence and continuous background retry with SMS carrier fallback.
                </p>
              </div>
            </div>

            {/* 2. System Architecture & Topology */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">System Architecture</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Low-latency mobile telemetry &amp; spatial dispatch engine
              </h2>
              <p className="body-text" style={{ marginBottom: '24px' }}>
                Gargaar pairs a lightweight Flutter mobile client with a high-throughput WebSocket gateway and a PostGIS spatial database for real-time geographic triage and dispatch coordination.
              </p>

              {/* Interactive Architecture Diagram */}
              <div style={{ margin: '32px 0' }}>
                <ArchitectureDiagram data={gargaarArchData} />
              </div>
            </div>

            {/* 3. Core Technical Pillars */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Core Engineering</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '24px' }}>
                Engineering four pillars of mission-critical reliability
              </h2>

              <div style={{ display: 'grid', gap: '20px' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <Smartphone size={18} color="var(--color-primary)" />
                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>1. Zero-Friction Single-Tap SOS with Accessible UI</h3>
                  </div>
                  <p className="body-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                    Designed with high-contrast emergency green and amber palettes optimized for adrenaline, shock, and low-light environments. A single prominent button triggers immediate emergency dispatch with a 3-second haptic countdown cancel window to prevent accidental alerts.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <Radio size={18} color="var(--color-primary)" />
                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>2. Offline Distress Journal with SMS Carrier Fallback</h3>
                  </div>
                  <p className="body-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                    Built with local encrypted SQLite and Hive queues. If cellular data connectivity is unavailable, the distress payload is persisted locally, and an automated background worker attempts WebSocket retransmission while triggering an encrypted SMS beacon directly to emergency base stations.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <MapPin size={18} color="var(--color-primary)" />
                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>3. Sub-100ms Streaming Telemetry &amp; PostGIS Triage</h3>
                  </div>
                  <p className="body-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                    During active emergencies, the mobile app continuously streams GPS coordinates over WebSocket channels to Redis Pub/Sub. The PostGIS geospatial engine performs real-time radius queries to match the distress signal with the nearest available first responders and hospitals.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <BellRing size={18} color="var(--color-primary)" />
                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>4. APNs Critical Alerts &amp; Responder Override</h3>
                  </div>
                  <p className="body-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                    Integrated Apple Push Notification service (APNs) Critical Alerts and Android High-Priority FCM channels, enabling emergency incident notifications to pierce through silent switches and Do-Not-Disturb modes on responder devices.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Outcomes & Metrics */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Telemetry &amp; Outcomes</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Key emergency performance benchmarks
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '20px', marginBottom: '24px' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-display)', color: 'var(--text-accent)', fontWeight: 600 }}>&lt; 2s</div>
                  <p className="body-text" style={{ fontSize: '0.9rem', marginTop: '4px' }}>From SOS tap to incident broadcast across regional dispatcher terminals.</p>
                </div>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-display)', color: 'var(--text-accent)', fontWeight: 600 }}>100%</div>
                  <p className="body-text" style={{ fontSize: '0.9rem', marginTop: '4px' }}>Offline distress signal retention with automatic retry and SMS failover.</p>
                </div>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-display)', color: 'var(--text-accent)', fontWeight: 600 }}>&plusmn; 4m</div>
                  <p className="body-text" style={{ fontSize: '0.9rem', marginTop: '4px' }}>GPS location precision streaming continuous coordinates to responding teams.</p>
                </div>
              </div>
            </div>

            {/* Navigation to next case study */}
            <div style={{ paddingTop: '32px', borderTop: '1px solid var(--border-divider)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <Link to="/projects/khalil-academy" className="btn-secondary">
                <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
                <span>Prev: Khalil Academy</span>
              </Link>
              <Link to="/projects/understory" className="btn-primary">
                <span>Next: UnderStory Books</span>
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
};
