import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  EDITORIAL_EASE,
  staggerCards,
  fadeInUp,
  lineRevealItem,
  imageMaskReveal,
  cardEntrance
} from '../styles/motion';
import {
  ArrowRight,
  Code2,
  ShieldCheck,
  BookOpen,
  Briefcase,
  Terminal
} from 'lucide-react';

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* 1. Distinctive Editorial Profile Hero */}
      <section className="section-spacer-top" style={{ paddingBottom: '48px' }} aria-label="Personal Profile">
        <div className="site-container">
          <motion.div
            initial={shouldReduceMotion ? 'visible' : 'hidden'}
            animate="visible"
            variants={staggerCards(0.1, 0.05)}
          >
            <motion.span className="kicker" variants={fadeInUp}>About Khalil Wali</motion.span>
            <h1 className="hero-headline" style={{ marginBottom: '20px' }}>
              <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.15em', marginBottom: '-0.15em' }}>
                <motion.span style={{ display: 'block' }} variants={lineRevealItem}>
                  The Craft of
                </motion.span>
              </span>
              <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.15em', marginBottom: '-0.15em' }}>
                <motion.span style={{ display: 'block' }} variants={lineRevealItem}>
                  <em>Thoughtful Systems</em>
                </motion.span>
              </span>
            </h1>
            <motion.p className="editorial-lead" style={{ maxWidth: '820px' }} variants={fadeInUp}>
              How an early appreciation for physical architecture grew into a software engineering practice centered on resilient backend infrastructure, relational databases, and calm digital reading environments.
            </motion.p>
          </motion.div>

          {/* Profile Overview Strip */}
          <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--border-divider)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '24px' }}>
            <div>
              <span className="channel-label">Discipline</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>Full-Stack &amp; Systems Engineering</p>
            </div>
            <div>
              <span className="channel-label">Core Focus</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>Backend Architecture &amp; Cloud DevOps</p>
            </div>
            <div>
              <span className="channel-label">Work Style</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>Asynchronous &amp; Documentation-Led</p>
            </div>
            <div>
              <span className="channel-label">Location</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>Global Remote (UTC+3)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visual Storytelling: Editorial Split Layout */}
      <section style={{ paddingBottom: '64px' }}>
        <div className="site-container">
          <div className="about-split-grid">
            <motion.div
              initial={shouldReduceMotion ? 'visible' : 'hidden'}
              animate="visible"
              variants={imageMaskReveal}
              style={{ overflow: 'hidden', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}
            >
              <img
                src="/assets/about-studio-hd.png"
                alt="Khalil Wali studio atelier desk with architectural drawings and morning sunlight"
                width="1200"
                height="896"
                style={{ width: '100%', height: 'auto', aspectRatio: '4/3', display: 'block', objectFit: 'cover', imageRendering: '-webkit-optimize-contrast' }}
                loading="eager"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <span className="kicker">Origins</span>
              <h2 className="subheading" style={{ fontSize: 'clamp(1.8rem, 2.6vw, 2.4rem)', margin: 0 }}>
                From physical blueprints to software architecture
              </h2>
              <p className="body-text">
                Long before I wrote my first line of production code, I was drawn to the discipline of physical architecture—the way structural blueprints translate invisible forces into enduring spaces that people inhabit with trust. When I first encountered computer science, I saw an unmistakable parallel: software engineering is simply the architecture of logical space.
              </p>
              <p className="body-text">
                A relational database schema serves the exact same role as load-bearing foundations; an API contract functions like the joint between materials. Both must be engineered to withstand stress, absorb changing requirements, and provide order without needless ornament.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. The Shift to Backend Systems & Infrastructure */}
      <section className="section-spacer" style={{ backgroundColor: 'var(--bg-stone)' }} aria-label="Engineering Evolution">
        <div className="site-container-narrow">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            <span className="kicker">Technical Focus</span>
            <h2 className="section-title" style={{ marginBottom: '24px' }}>
              Why I Gravitated Toward Backend &amp; Infrastructure
            </h2>
            <p className="editorial-lead" style={{ marginBottom: '24px' }}>
              As modern web development became increasingly preoccupied with ephemeral frontend trends and brittle client frameworks, I noticed that applications almost never fail from a lack of visual styling. They fail when the underlying data tier corrupts state, when API endpoints introduce unpredictable latency, or when deployments rely on fragile manual interventions.
            </p>
            <p className="body-text" style={{ marginBottom: '20px' }}>
              This realization redirected my focus toward backend dependability and infrastructure as code. I immersed myself in PostgreSQL relational modeling, transaction boundaries, and query plan optimization. Concurrently, I adopted containerization through Docker and Kubernetes to ensure that software runs identically across local development, staging environments, and production clusters.
            </p>
            <p className="body-text">
              To me, the most elegant software is the kind that users never have to think about: the background queue that finishes without a dropped event, the checkout register that works seamlessly through an internet outage, and the API that returns deterministic data in milliseconds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Professional Values & Working Philosophy */}
      <section className="section-spacer" aria-label="Professional Values">
        <div className="site-container">
          <motion.div
            className="section-header-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            <span className="kicker">Principles</span>
            <h2 className="section-title">Standards That Govern My Work</h2>
            <p className="section-header-desc">
              Four fundamental values that dictate how I design systems, write code, and collaborate with engineering peers.
            </p>
          </motion.div>

          <motion.div
            className="principles-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerCards(0.08, 0.04)}
          >
            <motion.div className="principle-item" variants={cardEntrance}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <Code2 size={20} strokeWidth={1.8} style={{ color: 'var(--text-accent)' }} />
                <h3 className="principle-title" style={{ margin: 0 }}>Simplicity Over Cleverness</h3>
              </div>
              <p className="principle-desc">
                Clever code is difficult to debug, difficult to test, and expensive to maintain. I favor explicit data flows, readable logic, and standard patterns over complex abstractions that obscure intent.
              </p>
            </motion.div>

            <motion.div className="principle-item" variants={cardEntrance}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <BookOpen size={20} strokeWidth={1.8} style={{ color: 'var(--text-accent)' }} />
                <h3 className="principle-title" style={{ margin: 0 }}>Software as an Intellectual Bridge</h3>
              </div>
              <p className="principle-desc">
                Applications should honor human cognitive pacing. Whether designing an editorial reading platform or an administrative dashboard, typography, contrast, and layout stability must treat the user’s attention with dignity.
              </p>
            </motion.div>

            <motion.div className="principle-item" variants={cardEntrance}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <Terminal size={20} strokeWidth={1.8} style={{ color: 'var(--text-accent)' }} />
                <h3 className="principle-title" style={{ margin: 0 }}>Determinism &amp; Reproducibility</h3>
              </div>
              <p className="principle-desc">
                If an environment cannot be torn down and rebuilt from version-controlled blueprints with a single command, it is an operational hazard. Infrastructure must always live as declarative code.
              </p>
            </motion.div>

            <motion.div className="principle-item" variants={cardEntrance} style={{ borderBottom: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <ShieldCheck size={20} strokeWidth={1.8} style={{ color: 'var(--text-accent)' }} />
                <h3 className="principle-title" style={{ margin: 0 }}>Relational Data Safety</h3>
              </div>
              <p className="principle-desc">
                Code can be refactored at any time, but damaged or inconsistent data is catastrophic. I guard data integrity through strict foreign keys, check constraints, and atomic transactions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Deep Work Workspace & Direction */}
      <section style={{ padding: 'clamp(48px, 6vw, 76px) 0', backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }} aria-label="Direction and Collaboration">
        <div className="site-container">
          <div className="about-future-grid">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
            >
              <span className="kicker">Direction</span>
              <h2 className="section-title" style={{ marginBottom: '20px' }}>
                Where My Work Is Headed
              </h2>
              <p className="body-text" style={{ marginBottom: '16px' }}>
                My immediate engineering roadmap focuses on deepening expertise in distributed consensus mechanisms, high-performance database sharding, and edge compute topologies. I am passionate about engineering tools that allow independent creators and specialty businesses to operate with the reliability of large platforms.
              </p>
              <p className="body-text" style={{ marginBottom: '28px' }}>
                I actively seek collaboration with disciplined engineering teams, thoughtful startups, and technical founders who value craftsmanship, high-context written documentation, and long-term durability over reckless shortcuts.
              </p>
              <div className="btn-group">
                <Link to="/projects" className="btn-primary">
                  <span>Explore Selected Work</span>
                  <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  <span>Start a Conversation</span>
                  <Briefcase size={14} strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={imageMaskReveal}
              className="about-future-image-wrap"
            >
              <img
                src="/assets/about-study-compact.png"
                alt="Compact architectural software design studio and engineering study workstation"
                width="1376"
                height="768"
                style={{ width: '100%', height: 'auto', aspectRatio: '16/9', maxHeight: '270px', display: 'block', objectFit: 'cover', objectPosition: 'center', imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
