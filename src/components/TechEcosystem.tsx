import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Cloud,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';

interface TechItem {
  id: string;
  name: string;
  role: string;
  category: 'frontend' | 'backend' | 'data' | 'cloud';
  productionRole: string;
  tradeOffs: string;
  provenIn: string;
  tags: string[];
}

const TECH_CATALOG: TechItem[] = [
  // Frontend
  {
    id: 'typescript',
    name: 'TypeScript',
    role: 'Strict Type System & Architecture Foundation',
    category: 'frontend',
    productionRole: 'Applied across all client applications, microservice interfaces, and domain models to eliminate runtime undefined errors and enforce unambiguous contracts.',
    tradeOffs: 'Introduces compilation step and initial boilerplate, but saves dozens of debugging hours in production multi-engineer systems.',
    provenIn: 'Understory Books AST, TillPro POS, Cloud GitOps Schemas',
    tags: ['Generics', 'AST Nodes', 'Strict Mode', 'Discriminated Unions']
  },
  {
    id: 'react',
    name: 'React 18',
    role: 'Component Engine & Concurrent UI',
    category: 'frontend',
    productionRole: 'Utilized for stateful, interactive client interfaces. Leverages concurrent features, virtualized rendering lists, and custom hooks for zero-stutter performance.',
    tradeOffs: 'Virtual DOM overhead can become an issue if un-memoized during heavy re-renders; mitigated via strict virtualization and localized component state.',
    provenIn: 'Understory Books Reader, TillPro POS Register Terminal',
    tags: ['Concurrent Mode', 'Virtualization', 'Custom Hooks', 'Suspense']
  },
  {
    id: 'web-workers',
    name: 'Web Workers & WASM',
    role: 'Off-Main-Thread Processing',
    category: 'frontend',
    productionRole: 'Dedicated background threads that parse physical barcode scanners, compute tax algorithms, and compile manuscript ASTs without blocking UI 60fps animations.',
    tradeOffs: 'Data transfer across postMessage has serialization cost; resolved by passing ArrayBuffers with structured cloning.',
    provenIn: 'TillPro Hardware Scanner Integration, eBaro Lexer',
    tags: ['Multithreading', 'Hardware I/O', 'Low Latency', 'WASM']
  },
  {
    id: 'indexeddb',
    name: 'IndexedDB & Local-First',
    category: 'frontend',
    role: 'Client-Side Offline Datastore',
    productionRole: 'Stores entire manuscript editions, user margin notes, and signed retail sales logs directly in client browsers with optimistic instant updates.',
    tradeOffs: 'Asynchronous API is verbose; wrapped with lightweight TypeScript helpers and transactional promises.',
    provenIn: 'TillPro Offline Queue, Understory Offline Reader',
    tags: ['Offline-First', 'Local Persistence', 'CRDT Ready', 'Indexed Queries']
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js & Fastify / Express',
    category: 'backend',
    role: 'High-Throughput Asynchronous APIs',
    productionRole: 'Stateless API microservices handling authenticated RESTful endpoints, manuscript ingestion pipelines, and distributed event coordination.',
    tradeOffs: 'Single-threaded event loop requires CPU-bound tasks to be offloaded to worker pools or dedicated microservices.',
    provenIn: 'eBaro Parsing API, Understory Content Service',
    tags: ['Event Loop', 'Non-blocking I/O', 'RESTful', 'Microservices']
  },
  {
    id: 'websockets',
    name: 'WebSockets (ws)',
    category: 'backend',
    role: 'Real-Time Bi-Directional Synchronization',
    productionRole: 'Powers instantaneous inventory decrement broadcasts and terminal sync signals across multi-counter physical retail stores.',
    tradeOffs: 'Stateful connections require heartbeat monitoring, automatic exponential reconnection backoff, and socket clustering with Redis.',
    provenIn: 'TillPro Multi-Terminal Synchronization Orchestrator',
    tags: ['Sub-50ms Sync', 'Heartbeats', 'Event Streaming', 'Cluster Pub/Sub']
  },
  {
    id: 'grpc',
    name: 'gRPC & Protocol Buffers',
    category: 'backend',
    role: 'Inter-Service RPC Communication',
    productionRole: 'Strict binary communication layer between internal backend services and authentication brokers with binary payload compression.',
    tradeOffs: 'Lacks native browser compatibility without grpc-web proxy; kept strictly for internal VPC microservice boundaries.',
    provenIn: 'Cloud Microservice Mesh, Identity Broker',
    tags: ['Binary Serialization', 'HTTP/2 Multiplexing', 'Strict Contracts']
  },

  // Databases
  {
    id: 'postgresql',
    name: 'PostgreSQL 16',
    category: 'data',
    role: 'Authoritative Relational Datastore',
    productionRole: 'ACID-compliant storage for store inventory, ledger balances, edition hierarchies, and normalized customer records with full transactional integrity.',
    tradeOffs: 'Requires disciplined index maintenance and connection pooling (PgBouncer) under high concurrent connection loads.',
    provenIn: 'TillPro Authoritative Ledger, Understory CMS',
    tags: ['ACID Transactions', 'Row Locks', 'GIN Search', 'Connection Pooling']
  },
  {
    id: 'redis',
    name: 'Redis 7.x Cluster',
    category: 'data',
    role: 'In-Memory Caching & Session Layer',
    productionRole: 'Provides sub-2ms response times for hot reading chapters, distributed session tokens, sliding-window rate limiters, and pub/sub message brokers.',
    tradeOffs: 'RAM-bound storage requires strict TTL eviction policies and memory threshold alerting to prevent OOM events.',
    provenIn: 'Global Chapter Cache, Rate Limiting Middleware',
    tags: ['Sub-2ms TTFB', 'Pub/Sub', 'Rate Limiting', 'Cluster Mode']
  },
  {
    id: 'timescaledb',
    name: 'TimescaleDB & pgvector',
    category: 'data',
    role: 'Time-Series & Semantic Vector Search',
    productionRole: 'Partitioned hyper-tables tracking hardware store telemetry and high-dimensional embeddings for thematic literature query lookup.',
    tradeOffs: 'Adds extension dependencies to vanilla PostgreSQL; justified by retaining unified SQL semantics without managing separate vector databases.',
    provenIn: 'Retail Velocity Analytics, Manuscript Discovery',
    tags: ['Hypertables', 'Vector Cosine Similarity', 'Partitioning']
  },

  // Cloud & DevOps
  {
    id: 'kubernetes',
    name: 'Kubernetes (EKS)',
    category: 'cloud',
    role: 'Container Orchestration & Scaling',
    productionRole: 'Declarative container orchestration across multi-AZ clusters with Horizontal Pod Autoscaling (HPA), rolling zero-downtime updates, and pod self-healing.',
    tradeOffs: 'Significant operational complexity; mitigated by standardizing Helm charts and declarative GitOps repo structures.',
    provenIn: 'Cloud Production Cluster, Auto-scaling Services',
    tags: ['HPA', 'Zero Downtime', 'Helm Charts', 'Service Mesh']
  },
  {
    id: 'terraform',
    name: 'Terraform (IaC)',
    category: 'cloud',
    role: 'Declarative Cloud Provisioning',
    productionRole: 'Reproducible multi-region AWS infrastructure code managing VPCs, private subnets, security groups, RDS databases, and IAM zero-trust policies.',
    tradeOffs: 'State drift can occur if manual console changes are allowed; resolved via strict CI plan/apply locks and read-only AWS console policies.',
    provenIn: 'Multi-AZ Cloud Infrastructure, Staging/Prod Parity',
    tags: ['Declarative IaC', 'Remote State', 'Zero-Trust IAM', 'VPC Isolation']
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions & GitOps',
    category: 'cloud',
    role: 'Continuous Delivery Automation',
    productionRole: 'Parallel matrix CI/CD testing suites running static linting, unit tests, Trivy vulnerability audits, and multi-architecture Docker image compilation.',
    tradeOffs: 'Runner concurrency limits require efficient layer caching (GitHub cache backend) to keep pipeline execution times under 4 minutes.',
    provenIn: 'Automated Deployment Pipelines for All Flagship Services',
    tags: ['CI/CD', 'Docker Layer Caching', 'Trivy Scans', 'Semantic Versioning']
  },
  {
    id: 'prometheus-grafana',
    name: 'Prometheus & Grafana',
    category: 'cloud',
    role: 'Observability & RED Telemetry',
    productionRole: 'Unified monitoring stack scraping Prometheus endpoints to measure Rate, Errors, and Duration across API endpoints and Kubernetes worker nodes.',
    tradeOffs: 'Metric cardinality explosion if high-entropy tags are stored; controlled with strict metric naming conventions and downsampling rules.',
    provenIn: 'Production Cluster Telemetry, Alertmanager Escalation',
    tags: ['PromQL', 'RED Metrics', 'Alertmanager', 'SLO Monitoring']
  }
];

export const TechEcosystem: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'data' | 'cloud'>('all');
  const [selectedTech, setSelectedTech] = useState<TechItem>(TECH_CATALOG[0]);

  const categories = [
    { key: 'all', label: 'All Technologies' },
    { key: 'frontend', label: 'Frontend Architecture' },
    { key: 'backend', label: 'Backend & APIs' },
    { key: 'data', label: 'Databases & Storage' },
    { key: 'cloud', label: 'Cloud & DevOps' }
  ];

  const filteredItems = activeCategory === 'all'
    ? TECH_CATALOG
    : TECH_CATALOG.filter((item) => item.category === activeCategory);

  return (
    <section className="tech-ecosystem-section" style={{ padding: '48px 0' }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '32px' }}>
          <span className="kicker">Engineering Disciplines &bull; Real Applications</span>
          <h2 className="subheading" style={{ fontSize: '2.1rem', marginBottom: '14px' }}>
            Production Technology Ecosystem
          </h2>
          <p className="body-text">
            I select technologies based on deterministic reliability, operational simplicity, and lifecycle longevity. Here is how core tools are actually applied across my production systems—including architectural trade-offs and verified implementations.
          </p>
        </div>

        {/* Category Filters */}
        <div
          className="tech-category-tabs"
          role="tablist"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '32px',
            borderBottom: '1px solid var(--border-divider)',
            paddingBottom: '12px'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={activeCategory === cat.key}
              onClick={() => setActiveCategory(cat.key as any)}
              className={`pill-btn ${activeCategory === cat.key ? 'active' : ''}`}
              style={{
                padding: '8px 16px',
                fontSize: '0.85rem',
                fontWeight: 600,
                borderRadius: 'var(--radius-sm)',
                border: activeCategory === cat.key ? '1px solid var(--text-accent)' : '1px solid var(--border-subtle)',
                backgroundColor: activeCategory === cat.key ? 'var(--text-accent)' : 'var(--bg-surface)',
                color: activeCategory === cat.key ? '#ffffff' : 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Grid: Left Tech List + Right Deep-Dive Inspection Card */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '24px',
            alignItems: 'start'
          }}
        >
          {/* Tech Catalog Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 150px), 1fr))',
              gap: '12px'
            }}
          >
            {filteredItems.map((tech) => {
              const isSelected = selectedTech.id === tech.id;
              return (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTech(tech)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    padding: '16px',
                    borderRadius: 'var(--radius-sm)',
                    border: isSelected ? '1.5px solid var(--text-accent)' : '1px solid var(--border-subtle)',
                    backgroundColor: isSelected ? 'var(--bg-surface)' : 'var(--bg-card)',
                    boxShadow: isSelected ? 'var(--shadow-card)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  aria-pressed={isSelected}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '6px' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: isSelected ? 'var(--text-accent)' : 'var(--text-primary)' }}>
                      {tech.name}
                    </span>
                    {isSelected && (
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--text-accent)' }} />
                    )}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.35 }}>
                    {tech.role}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Production Deep-Dive Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTech.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(24px, 4vw, 36px)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <span className="kicker" style={{ marginBottom: '4px' }}>
                    {selectedTech.category.toUpperCase()} &bull; PRODUCTION SPEC
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                    {selectedTech.name}
                  </h3>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary-accent)', fontWeight: 600, marginTop: '2px' }}>
                    {selectedTech.role}
                  </div>
                </div>
              </div>

              {/* Tag Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                {selectedTech.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-secondary)',
                      letterSpacing: '0.02em'
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Narrative Blocks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-accent)', marginBottom: '4px' }}>
                    Production Role &amp; Application
                  </div>
                  <p className="body-text" style={{ fontSize: '0.94rem', margin: 0 }}>
                    {selectedTech.productionRole}
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-accent)', marginBottom: '4px' }}>
                    Architectural Trade-Offs &amp; Mitigations
                  </div>
                  <p className="body-text" style={{ fontSize: '0.94rem', margin: 0 }}>
                    {selectedTech.tradeOffs}
                  </p>
                </div>

                <div style={{ paddingTop: '14px', borderTop: '1px solid var(--border-divider)' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    Verified In Production Systems
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} strokeWidth={2} style={{ color: 'var(--text-accent)' }} />
                    <span>{selectedTech.provenIn}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
