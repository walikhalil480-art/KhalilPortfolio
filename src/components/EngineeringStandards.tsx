import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Activity,
  GitPullRequest,
  Database,
  Lock,
  Layers,
  Cpu,
  RefreshCw
} from 'lucide-react';

interface QualityPillar {
  id: string;
  number: string;
  title: string;
  summary: string;
  concretePractices: string[];
  metricsOrOutcome: string;
}

const QUALITY_PILLARS: QualityPillar[] = [
  {
    id: 'schemas',
    number: '01',
    title: 'Deterministic Relational Schemas',
    summary:
      'Data integrity is guaranteed at the database engine level via strict constraints, foreign keys, and explicit transaction boundaries rather than fragile application-layer assumptions.',
    concretePractices: [
      'PostgreSQL CHECK constraints enforce invariants (e.g. stock_quantity >= 0, total_cents > 0)',
      'Idempotency keys on all state-mutating endpoints to prevent duplicated operations',
      'Row-level locks (SELECT FOR UPDATE) serialize competing checkout mutations and prevent race conditions'
    ],
    metricsOrOutcome: 'Zero negative inventory records across 100,000+ simulated concurrent checkout transactions.'
  },
  {
    id: 'testing',
    number: '02',
    title: 'Testing Discipline & Failure Isolation',
    summary:
      'Unit tests for deterministic business rules and integration tests with ephemeral PostgreSQL testcontainers to validate real SQL queries and constraints under load.',
    concretePractices: [
      'Pure domain logic isolated from side effects, allowing fast sub-millisecond unit test cycles',
      'Integration suites run against real ephemeral Docker databases in CI, testing actual database dialect behavior',
      'Defensive error boundaries with typed domain error envelopes (no unhandled 500 crashes)'
    ],
    metricsOrOutcome: '100% of pull requests pass typechecking, linting, and database migration verification prior to merge.'
  },
  {
    id: 'automation',
    number: '03',
    title: 'Declarative Cloud & Immutable Containers',
    summary:
      'Every deployment artifact is immutable, multi-stage compiled, scanned for CVE vulnerabilities, and orchestrated through declarative Kubernetes manifests or Docker Compose topologies.',
    concretePractices: [
      'Multi-stage Docker builds running as non-root unprivileged users (USER node) with read-only root filesystems',
      'Helm charts with declarative liveness, readiness, and startup probes for automatic rollout verification',
      'GitHub Actions pipelines with layer caching (type=gha) executing zero-downtime rolling updates'
    ],
    metricsOrOutcome: 'Zero downtime during service rollouts; sub-45s container compilation using Docker Buildx caching.'
  },
  {
    id: 'observability',
    number: '04',
    title: 'Measurable Telemetry & Operational Health',
    summary:
      'Systems must be observable in production through structured logging, deep dependency health checks, and actionable metrics without cluttering logs with sensitive credentials.',
    concretePractices: [
      'Structured JSON logging with request IDs, trace contexts, and execution latencies',
      'Dedicated health probes (/api/v1/health/detailed) pinging database connection pools and cache responsiveness',
      'Graceful shutdown handlers via dumb-init capturing SIGTERM signals to finish active HTTP requests before pod termination'
    ],
    metricsOrOutcome: 'Complete visibility into database connection pool contention and sub-5ms cluster health verification.'
  }
];

export const EngineeringStandards: React.FC = () => {
  return (
    <section className="engineering-standards-section" aria-label="Engineering Standards & Quality">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-flex">
          <div>
            <span className="kicker">Engineering Maturity &amp; Quality</span>
            <h2 className="section-title">Standards &amp; Operating Principles</h2>
          </div>
          <p className="section-header-desc">
            Disciplined practices that guarantee data consistency, zero-downtime deployments, and lasting architectural stability under real-world constraints.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="standards-grid">
          {QUALITY_PILLARS.map((pillar) => (
            <motion.div
              key={pillar.id}
              className="standard-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="standard-card-top">
                <span className="standard-num">{pillar.number}</span>
                <span className="standard-badge">Verified Practice</span>
              </div>

              <h3 className="standard-title">{pillar.title}</h3>
              <p className="standard-summary">{pillar.summary}</p>

              <div className="standard-practices">
                <span className="practices-label">Concrete Engineering Invariants:</span>
                <ul className="practices-list">
                  {pillar.concretePractices.map((practice, idx) => (
                    <li key={idx} className="practice-item">
                      <CheckCircle2 size={14} strokeWidth={2} style={{ color: 'var(--text-accent)', flexShrink: 0, marginTop: '3px' }} />
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="standard-outcome-box">
                <Activity size={13} strokeWidth={2} style={{ color: 'var(--text-accent)' }} />
                <span><strong>Outcome:</strong> {pillar.metricsOrOutcome}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
