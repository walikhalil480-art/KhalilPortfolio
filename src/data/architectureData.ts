import { ArchitectureData } from '../components/ArchitectureDiagram';

export const understoryArchData: ArchitectureData = {
  title: 'Understory Books & eBaro Architecture',
  systemName: 'Curated Reader & Publishing Pipeline',
  overview:
    'A high-performance decoupled publishing pipeline engineered for sub-0.01 CLS, zero-reflow typography, and local-first reading persistence with deterministic background synchronization.',
  nodes: [
    {
      id: 'reader-client',
      label: 'Typographic Reader Client',
      category: 'client',
      technology: 'React 18 + Virtualized AST',
      protocol: 'HTTPS / WSS',
      status: 'Active Production',
      summary: 'Virtual viewport rendering engine with zero cumulative layout shift and dynamic font metric reservations.',
      details: [
        'Custom paragraph-level virtualization hooks prevent DOM blowup during multi-hundred-page rendering.',
        'CSS font-display with pre-allocated font metrics prevents reflow and visual jitter during hydration.',
        'Local reading position and user marginalia mirrored in IndexedDB with local-first optimistic updates.'
      ]
    },
    {
      id: 'ebaro-parser',
      label: 'eBaro Content Ingestion Engine',
      category: 'service',
      technology: 'Node.js + Custom AST Lexer',
      protocol: 'Internal gRPC / Event Bus',
      status: 'Active Production',
      summary: 'Deterministic manuscript parser deconstructing Markdown, LaTeX, and ePub formats into structured AST nodes.',
      details: [
        'Strict schema validation ensuring typographic compliance (drop caps, em-dashes, blockquotes, footnotes).',
        'Extracts metadata, reading time estimates, chapter hierarchy, and search vector tokens.',
        'Generates compressed JSON chunk payloads optimized for edge caching.'
      ]
    },
    {
      id: 'edge-gateway',
      label: 'Edge Gateway & CDN',
      category: 'infra',
      technology: 'Cloudflare Workers + Cache API',
      protocol: 'HTTP/2 & HTTP/3',
      status: 'Active Production',
      summary: 'Global edge distribution terminating SSL and serving cached chapter fragments with sub-25ms TTFB.',
      details: [
        'Immutable chapter caching with surrogate key invalidation when revisions are published.',
        'Geo-distributed asset edge caching for typography files, illustrations, and reader assets.',
        'DDoS mitigation and bot protection for publishing endpoints.'
      ]
    },
    {
      id: 'core-api',
      label: 'Publishing & Sync API',
      category: 'api',
      technology: 'Express.js + TypeScript',
      protocol: 'RESTful + JSON Schema',
      status: 'Active Production',
      summary: 'Secure stateless application layer handling reader authorization, progress sync, and editorial publishing workflows.',
      details: [
        'JWT authentication with short-lived session tokens and rolling refresh cycles.',
        'Optimistic concurrency controls on user annotation updates to resolve device conflicts.',
        'Rate-limiting middleware preserving backend database capacity during high-concurrency spikes.'
      ]
    },
    {
      id: 'redis-cache',
      label: 'In-Memory Cache & Session Store',
      category: 'queue',
      technology: 'Redis 7.x Cluster',
      protocol: 'RESP',
      status: 'Active Production',
      summary: 'Low-latency caching layer for hot chapter fragments, active reader sessions, and rate-limiting buckets.',
      details: [
        'Sub-2ms read response times for high-traffic front-matter and trending titles.',
        'Sliding-window rate limiting for authenticated user actions.',
        'Pub/Sub channels for invalidating edge cache tags upon manuscript re-indexing.'
      ]
    },
    {
      id: 'postgres-db',
      label: 'Primary Relational Database',
      category: 'data',
      technology: 'PostgreSQL 16 + pgvector',
      protocol: 'TCP / SSL Connection Pool',
      status: 'Active Production',
      summary: 'ACID-compliant storage for normalized book schemas, edition manifests, user reading history, and annotations.',
      details: [
        'Normalized relational schema for books, authors, editions, chapters, and nested footnote references.',
        'GIN indices on full-text search columns and pgvector embeddings for thematic chapter search.',
        'Continuous WAL archiving with automated automated point-in-time recovery.'
      ]
    }
  ],
  connections: [
    { from: 'reader-client', to: 'edge-gateway', label: 'HTTP/3 Fetch' },
    { from: 'edge-gateway', to: 'core-api', label: 'Reverse Proxy' },
    { from: 'core-api', to: 'redis-cache', label: 'Cache Lookup' },
    { from: 'core-api', to: 'postgres-db', label: 'SQL Query' },
    { from: 'ebaro-parser', to: 'core-api', label: 'Ingest Payload' }
  ]
};

export const maaree360ArchData: ArchitectureData = {
  title: 'MAAREE 360 System Architecture',
  systemName: 'Multi-Tenant Enterprise POS & Business Management Platform',
  overview:
    'A mission-critical enterprise retail and multi-tenant management architecture engineered for checkout continuity during internet outages, deterministic offline transaction queuing, multi-store inventory synchronization, and automated cloud ledger reconciliation.',
  nodes: [
    {
      id: 'pos-terminal',
      label: 'POS Register Terminal',
      category: 'client',
      technology: 'React 18 + Web Worker + SQLite WASM',
      protocol: 'Local Inter-Process + HTTPS',
      status: 'Active Production',
      summary: 'High-speed touch interface designed for sub-100ms item scanning, barcode parsing, and instant cart mutation.',
      details: [
        'Dedicated Web Worker processes barcode scanner inputs and calculates tax formulas off the main UI thread.',
        'Full offline checkout capability: receipts and sales transactions are written locally without internet connectivity.',
        'Zero-latency tactile feedback optimized for high-volume retail checkouts.'
      ]
    },
    {
      id: 'local-queue',
      label: 'Deterministic Offline Queue',
      category: 'queue',
      technology: 'IndexedDB + Append-Only Log',
      protocol: 'Internal Persistence',
      status: 'Active Production',
      summary: 'Cryptographically signed append-only transaction ledger guaranteeing zero lost transactions during outages.',
      details: [
        'Every offline checkout generates an immutable transaction block signed with the terminal private key.',
        'Conflict-free Replicated Data Type (CRDT) concepts prevent double-counting or sequence collisions upon reconnection.',
        'Survives browser restarts, power failures, and multi-day network disconnects.'
      ]
    },
    {
      id: 'payment-gateway',
      label: 'Hardware Terminal Gateway',
      category: 'service',
      technology: 'Stripe Terminal SDK / Local Socket',
      protocol: 'TCP / Encrypted EMV',
      status: 'Active Production',
      summary: 'Direct integration with physical chip, NFC, and contactless card readers with store-and-forward fallback.',
      details: [
        'End-to-end encrypted tokenization ensures primary account numbers never touch store memory.',
        'Store-and-forward fallback processing for pre-authorized offline card transactions.',
        'Automatic receipt printer dispatch via ESC/POS thermal protocol over local network.'
      ]
    },
    {
      id: 'sync-orchestrator',
      label: 'Sync & Conflict Orchestrator',
      category: 'api',
      technology: 'Node.js + Fastify + WebSockets',
      protocol: 'WSS / HTTP/2',
      status: 'Active Production',
      summary: 'Bi-directional synchronization engine managing multi-terminal inventory reconciliation and state convergence.',
      details: [
        'Reconciles pending offline batches chronologically with atomic database transactions.',
        'Broadcasts real-time inventory decrement signals across all store terminals via WebSocket.',
        'Identifies concurrent stock depletion edge cases and alerts floor managers automatically.'
      ]
    },
    {
      id: 'cloud-ledger',
      label: 'Central Cloud Ledger & Inventory',
      category: 'data',
      technology: 'PostgreSQL 16 + TimescaleDB',
      protocol: 'Postgres Connection Pool (PgBouncer)',
      status: 'Active Production',
      summary: 'Authoritative multi-store inventory database, audited financial ledger, and operational analytics engine.',
      details: [
        'Multi-tenant schema isolating store locations while enabling cross-store inventory lookups.',
        'Immutable double-entry ledger bookkeeping for tax audit compliance and daily drawer balances.',
        'Time-series partition tables tracking product sales velocity and re-order thresholds.'
      ]
    },
    {
      id: 'store-telemetry',
      label: 'Store Operations & Alerting',
      category: 'infra',
      technology: 'Prometheus + Grafana + Docker',
      protocol: 'Metrics Exporter',
      status: 'Active Production',
      summary: 'Real-time telemetry tracking terminal health, sync latency, payment drop rates, and peripheral connectivity.',
      details: [
        'Terminal heartbeat pings detect disconnected registers within 5 seconds.',
        'Alerting rules notify store operators if offline transaction buffer exceeds safe credit thresholds.',
        'Automated end-of-day discrepancy reporting matching till cash counts with registered receipts.'
      ]
    }
  ],
  connections: [
    { from: 'pos-terminal', to: 'local-queue', label: 'Local Commit' },
    { from: 'pos-terminal', to: 'payment-gateway', label: 'EMV Token' },
    { from: 'local-queue', to: 'sync-orchestrator', label: 'Sync Batch' },
    { from: 'sync-orchestrator', to: 'cloud-ledger', label: 'ACID Commit' },
    { from: 'sync-orchestrator', to: 'store-telemetry', label: 'Emit Metrics' }
  ]
};

export const tillProArchData = maaree360ArchData;

export const cloudArchData: ArchitectureData = {
  title: 'Cloud Infrastructure & GitOps Architecture',
  systemName: 'Automated Container Orchestration & IaC Pipeline',
  overview:
    'An enterprise-grade, reproducible infrastructure system orchestrated completely through declarative Infrastructure-as-Code, immutable container builds, and zero-downtime rolling Kubernetes deployments.',
  nodes: [
    {
      id: 'gitops-repo',
      label: 'Declarative GitOps Repository',
      category: 'client',
      technology: 'GitHub + Git Branching Model',
      protocol: 'SSH / Webhooks',
      status: 'Active Production',
      summary: 'Single source of truth containing all Terraform definitions, Helm charts, and Kubernetes manifests.',
      details: [
        'Every infrastructure alteration is reviewed via Pull Requests with mandatory peer approval and automated linting.',
        'Branch protection rules enforce semantic versioning and changelog generation.',
        'Cryptographically signed Git commits verify provenance of all deployment definitions.'
      ]
    },
    {
      id: 'ci-pipeline',
      label: 'Continuous Integration Engine',
      category: 'api',
      technology: 'GitHub Actions Runner Cluster',
      protocol: 'HTTPS / Docker API',
      status: 'Active Production',
      summary: 'Multi-stage automated validation pipeline executing unit tests, security scans, and multi-architecture container builds.',
      details: [
        'Parallel matrix testing across TypeScript, Node.js, and container configurations.',
        'Container vulnerability scanning with Trivy and static code analysis with SonarQube.',
        'Builds reproducible multi-arch container images pushed to private container registry with SHA256 digest pinning.'
      ]
    },
    {
      id: 'iac-engine',
      label: 'Terraform State & Provisioning',
      category: 'infra',
      technology: 'Terraform + AWS Provider',
      protocol: 'AWS IAM / S3 State Locking',
      status: 'Active Production',
      summary: 'Declarative cloud infrastructure provisioning with remote state locking and plan verification.',
      details: [
        'Provisions multi-AZ VPC, private subnets, security groups, NAT gateways, and load balancers.',
        'Remote state stored in encrypted Amazon S3 with DynamoDB table locking to prevent state race conditions.',
        'Automated terraform plan output posted directly to PR comments for peer review before merge.'
      ]
    },
    {
      id: 'k8s-cluster',
      label: 'Kubernetes Cluster (EKS)',
      category: 'service',
      technology: 'Kubernetes 1.29 + Cilium CNI',
      protocol: 'gRPC / TLS Service Mesh',
      status: 'Active Production',
      summary: 'Production container orchestrator managing auto-scaling worker nodes, pod self-healing, and ingress routing.',
      details: [
        'Horizontal Pod Autoscalers (HPA) scale services dynamically based on CPU/Memory and custom Prometheus metrics.',
        'Zero-downtime rolling deployments with strict readiness probes and graceful connection draining.',
        'Cilium eBPF-based CNI provides high-throughput network policies and encrypted inter-pod communication.'
      ]
    },
    {
      id: 'data-cluster',
      label: 'Managed Data Persistence',
      category: 'data',
      technology: 'PostgreSQL RDS Multi-AZ + Redis',
      protocol: 'TLS Encrypted / Private Subnet',
      status: 'Active Production',
      summary: 'Fault-tolerant primary-standby database topology with automated failover and read-replica offloading.',
      details: [
        'Synchronous replication between Availability Zones with sub-60-second automated failover.',
        'Automated snapshot lifecycle with cross-region replication for disaster recovery.',
        'Network isolation restricted strictly to internal Kubernetes worker subnets via security groups.'
      ]
    },
    {
      id: 'observability',
      label: 'Observability & Telemetry Stack',
      category: 'queue',
      technology: 'Prometheus + Grafana + OpenTelemetry',
      protocol: 'OTLP / PromQL',
      status: 'Active Production',
      summary: 'Unified monitoring suite collecting distributed traces, system metrics, and centralized application logs.',
      details: [
        'Distributed tracing through OpenTelemetry instrumentation maps microservice latency bottlenecks.',
        'Grafana dashboards provide real-time visibility into cluster node health, memory pressure, and HTTP error budgets.',
        'Alertmanager routes high-severity P1 alerts to on-call schedules via webhook automation.'
      ]
    }
  ],
  connections: [
    { from: 'gitops-repo', to: 'ci-pipeline', label: 'Push Webhook' },
    { from: 'ci-pipeline', to: 'iac-engine', label: 'Terraform Apply' },
    { from: 'iac-engine', to: 'k8s-cluster', label: 'Provision Nodes' },
    { from: 'k8s-cluster', to: 'data-cluster', label: 'Encrypted Link' },
    { from: 'k8s-cluster', to: 'observability', label: 'OTLP Telemetry' }
  ]
};

export const hoyhelArchData: ArchitectureData = {
  title: 'HoyHel Platform Architecture',
  systemName: 'Property Rental & Concurrency Booking Engine',
  overview:
    'An enterprise-grade property rental and booking platform engineered with PostgreSQL serializable isolation to prevent double-booking race conditions, Redis/BullMQ background worker queues, and Socket.IO real-time guest-host messaging.',
  nodes: [
    {
      id: 'client-spa',
      label: 'Luxury Booking Client SPA',
      category: 'client',
      technology: 'React 18 + TypeScript + Vite + Tailwind',
      protocol: 'HTTPS / WSS',
      status: 'Active Production',
      summary: 'Responsive discovery, property management, and reservation SPA supporting Guest, Host, and Admin portals.',
      details: [
        'Multi-attribute property filtering by city, amenities, capacity, and date ranges.',
        'Zustand client state management and TanStack Query v5 cache for responsive mutations.',
        'Dedicated dashboards with role-based navigation and financial earnings graphs.'
      ]
    },
    {
      id: 'api-gateway',
      label: 'Modular REST API & Gateway',
      category: 'api',
      technology: 'Node.js 20+ + Express + TypeScript',
      protocol: 'REST / OpenAPI 3.0',
      status: 'Active Production',
      summary: 'Stateless application server handling authentication, financial price calculations, and RBAC authorization.',
      details: [
        'JWT authentication with HTTP-only cookies and cryptographic token rotation.',
        'Deterministic server-side financial engine computing itemized stays, cleaning fees, and taxes.',
        'Pluggable payment abstraction supporting Stripe processing and M-Pesa mobile money.'
      ]
    },
    {
      id: 'concurrency-engine',
      label: 'ACID Concurrency & Lock Engine',
      category: 'data',
      technology: 'PostgreSQL 16 + Prisma ORM',
      protocol: 'TCP / Connection Pool',
      status: 'Active Production',
      summary: 'Relational database core employing row-level locks (SELECT FOR UPDATE) to eliminate double-booking collisions.',
      details: [
        'Row-level locking during reservation initiation ensures atomic calendar slot allocation.',
        'Automated refund engine adhering to FLEXIBLE, MODERATE, and STRICT host cancellation rules.',
        'Comprehensive audit logging capturing IP addresses, actors, and state transitions for all payments.'
      ]
    },
    {
      id: 'job-queue',
      label: 'Async Background Worker',
      category: 'queue',
      technology: 'Redis + BullMQ',
      protocol: 'RESP / Worker Thread',
      status: 'Active Production',
      summary: 'Dedicated background worker processing transactional emails, reservation timeouts, and audit streams.',
      details: [
        'Auto-cancels unconfirmed pending reservations after 15 minutes to release blocked inventory.',
        'Dispatches booking confirmations, cancellation notices, and host payout statements.',
        'High-throughput Redis cache for high-frequency property searches.'
      ]
    },
    {
      id: 'realtime-chat',
      label: 'Real-Time Messaging Hub',
      category: 'service',
      technology: 'Socket.IO + Node.js',
      protocol: 'WebSockets',
      status: 'Active Production',
      summary: 'Low-latency property-linked chat threads connecting guests and hosts directly.',
      details: [
        'Bi-directional real-time messaging with typing indicators and delivered receipts.',
        'Persistent chat history saved to PostgreSQL with unread message notification badges.',
        'Authentication handshake verifying JWT tokens on socket connection.'
      ]
    },
    {
      id: 'iac-infra',
      label: 'Cloud Infrastructure & DevSecOps',
      category: 'infra',
      technology: 'Kubernetes + Helm + Terraform + GitHub Actions',
      protocol: 'GitOps / TLS',
      status: 'Active Production',
      summary: 'Production infrastructure automated with Terraform AWS modules and security pipelines.',
      details: [
        'Terraform provisions AWS VPC, EKS cluster, RDS PostgreSQL Multi-AZ, and S3 storage.',
        'Packaged with versioned Helm charts for automated zero-downtime rolling deployments.',
        'DevSecOps CI pipeline running Gitleaks secret scans, Semgrep SAST, and Trivy image inspection.'
      ]
    }
  ],
  connections: [
    { from: 'client-spa', to: 'api-gateway', label: 'REST API' },
    { from: 'client-spa', to: 'realtime-chat', label: 'WebSocket' },
    { from: 'api-gateway', to: 'concurrency-engine', label: 'Row Lock' },
    { from: 'api-gateway', to: 'job-queue', label: 'Dispatch Job' },
    { from: 'job-queue', to: 'concurrency-engine', label: 'Expire Slot' },
    { from: 'api-gateway', to: 'iac-infra', label: 'Deploy & Log' }
  ]
};

export const daryeelOneArchData: ArchitectureData = {
  title: 'DaryeelOne System Architecture',
  systemName: 'Hospital Management & Clinical Operations Platform',
  overview:
    'A modular full-stack healthcare operations platform digitizing clinical records, appointments, laboratory diagnostic orders, pharmacy dispensing, and financial workflows with robust Role-Based Access Control and containerized orchestration.',
  nodes: [
    {
      id: 'clinical-portal',
      label: 'Clinical & Administrative UI',
      category: 'client',
      technology: 'React 19 + TypeScript + Vite + Tailwind',
      protocol: 'HTTPS',
      status: 'Active Production',
      summary: 'Responsive multi-role clinical interface for receptionists, nurses, physicians, pharmacists, and admins.',
      details: [
        'Dynamic clinical dashboards with patient census metrics, appointment queues, and daily collections.',
        'Patient registration and comprehensive profile inspection with unique patient identification.',
        'Doctor scheduling, department calendars, and operational availability management.'
      ]
    },
    {
      id: 'healthcare-api',
      label: 'Healthcare Core API Service',
      category: 'api',
      technology: 'Node.js 20+ + Express + TypeScript',
      protocol: 'RESTful + JSON Schema',
      status: 'Active Production',
      summary: 'HIPAA-conscious stateless API providing granular RBAC authorization and structured clinical schemas.',
      details: [
        'Fine-grained permissions for 7 healthcare roles (ADMIN, DOCTOR, NURSE, PHARMACIST, LAB_TECH, ACCOUNTANT, PATIENT).',
        'Zod schema validation ensuring strict clinical data hygiene and medication dosage verification.',
        'Pino structured logging with request correlation IDs for clinical audit compliance.'
      ]
    },
    {
      id: 'emr-engine',
      label: 'Electronic Medical Record (EMR)',
      category: 'service',
      technology: 'TypeScript Clinical Encounter Engine',
      protocol: 'Internal Service Call',
      status: 'Active Production',
      summary: 'Centralized clinical documentation linking diagnoses, encounter notes, vital signs, and prescriptions.',
      details: [
        'Structured encounter recording capturing subjective complaints, objective vitals, assessment, and treatment plans.',
        'Maintains immutable chronological medical history across departments.',
        'Direct linkage between doctor clinical encounter notes and downstream pharmacy prescriptions.'
      ]
    },
    {
      id: 'diagnostics-pharmacy',
      label: 'Laboratory & Pharmacy Engine',
      category: 'service',
      technology: 'Laboratory & Inventory Subsystem',
      protocol: 'Internal Database Transactions',
      status: 'Active Production',
      summary: 'Diagnostic lab test catalog, test order tracking, specimen status, and pharmacy inventory dispensing.',
      details: [
        'Separates laboratory catalog definitions from patient diagnostic specimen orders and findings.',
        'Real-time pharmacy inventory deduction upon medicine dispensing with batch tracking.',
        'Generates automated laboratory and pharmacy billing items dispatched to patient invoices.'
      ]
    },
    {
      id: 'postgres-ledger',
      label: 'PostgreSQL Relational Ledger',
      category: 'data',
      technology: 'PostgreSQL 15+ + Prisma ORM v6',
      protocol: 'TCP / Connection Pool',
      status: 'Active Production',
      summary: 'ACID-compliant relational database normalizing patients, appointments, clinical notes, and multi-currency billing.',
      details: [
        'Comprehensive relational schema spanning 8 hospital operations modules with foreign key integrity.',
        'Financial billing ledger managing invoices, receipts, payment allocations, and refund approvals.',
        'Automated database migrations and seed routines supporting local dev and production clusters.'
      ]
    },
    {
      id: 'container-ops',
      label: 'Containerized Deployment & Monitoring',
      category: 'infra',
      technology: 'Docker + Kubernetes + Prometheus + Grafana',
      protocol: 'OTLP / HTTP',
      status: 'Active Production',
      summary: 'Containerized infrastructure with multi-stage Docker builds, Kubernetes manifests, and Prometheus observability.',
      details: [
        'Docker multi-stage builds producing hardened lightweight production containers.',
        'Kubernetes deployment manifests with health and readiness probes for automated self-healing.',
        'Prometheus metrics endpoint (/metrics) exporting system latency, memory, and HTTP response distributions.'
      ]
    }
  ],
  connections: [
    { from: 'clinical-portal', to: 'healthcare-api', label: 'REST API' },
    { from: 'healthcare-api', to: 'emr-engine', label: 'Encounter' },
    { from: 'healthcare-api', to: 'diagnostics-pharmacy', label: 'Order/Dispense' },
    { from: 'emr-engine', to: 'postgres-ledger', label: 'ACID Commit' },
    { from: 'diagnostics-pharmacy', to: 'postgres-ledger', label: 'Stock Deduct' },
    { from: 'healthcare-api', to: 'container-ops', label: 'Metrics' }
  ]
};

export const khalilAcademyArchData: ArchitectureData = {
  title: 'Khalil Academy LMS Architecture',
  systemName: 'Distributed Cloud Education & Automated Certificate Verification Engine',
  overview:
    'An enterprise-grade, full-stack Learning Management System (LMS) designed for technical education in Cloud Computing, DevOps, and Kubernetes. Features 4-tier Role-Based Access Control, cryptographic HMAC webhook payment verification, automated PDF certificate minting, and a high-throughput PostgreSQL backend.',
  nodes: [
    {
      id: 'student-portal',
      label: 'Learning & Instructor Studio',
      category: 'client',
      technology: 'React 18 + Vite + Tailwind CSS + Lucide',
      protocol: 'HTTPS / REST / WebSocket',
      status: 'Active Production',
      summary: 'Responsive learning portal featuring real-time lesson progress tracking, video player resume state, interactive quiz modules, and instructor curriculum builder.',
      details: [
        'Real-time lesson completion telemetry with timestamp tracking for video lectures.',
        'Interactive multi-format quiz engine evaluating single-choice, multiple-choice, and coding tasks.',
        'Dedicated Instructor Studio with drag-and-drop module sequencing and assignment grading workflows.'
      ]
    },
    {
      id: 'api-gateway',
      label: 'Core Express Gateway & RBAC',
      category: 'api',
      technology: 'Node.js + Express + TypeScript + Helmet',
      protocol: 'RESTful + JSON Schema',
      status: 'Active Production',
      summary: 'Stateless API gateway orchestrating 4-tier Role-Based Access Control (Super Admin, Admin, Instructor, Student) with dual JWT token rotation.',
      details: [
        'Dual-token JWT architecture: 15-minute access tokens with secure HTTP-only refresh cookies.',
        'Brute-force protection: automatic 15-minute account lockouts triggered after 5 failed login attempts.',
        'Granular role scoping preventing privilege escalation and enforcing tenant/instructor resource boundaries.'
      ]
    },
    {
      id: 'course-engine',
      label: 'Curriculum & Progress Engine',
      category: 'service',
      technology: 'Prisma Client + Node.js Service Layer',
      protocol: 'Internal Service Invocation',
      status: 'Active Production',
      summary: 'Hierarchical learning structure manager (Course -> Modules -> Lessons -> Quizzes -> Assignments) with deterministic completion calculation.',
      details: [
        'Atomic progress aggregation computing holistic percentage across multi-tiered course syllabi.',
        'Support for rich lesson types including streaming video, markdown documents, downloadable PDFs, and external labs.',
        'Automated prerequisite validation blocking sequential module unlock until preceding milestones are achieved.'
      ]
    },
    {
      id: 'certificate-engine',
      label: 'Certificate Engine & Public Verifier',
      category: 'service',
      technology: 'PDFKit + Cryptographic UUID Generator',
      protocol: 'Internal Event + Public Endpoint',
      status: 'Active Production',
      summary: 'Automated certificate issuance engine generating immutable credential identifiers and public verification pages.',
      details: [
        'Triggered automatically upon 100% course completion and passing grade thresholds across all evaluated assignments.',
        'Issues unique tamper-evident certificate IDs (e.g., KHA-2026-000001) queryable via public verification endpoint.',
        'On-the-fly vector PDF rendering with cryptographic checksum, issuer signatures, and administrative revocation auditing.'
      ]
    },
    {
      id: 'payment-webhook',
      label: 'Pluggable Payment & Webhook Handler',
      category: 'queue',
      technology: 'IPaymentProvider + HMAC Verification',
      protocol: 'HTTPS Webhook / REST',
      status: 'Active Production',
      summary: 'Pluggable payment abstraction supporting multiple merchant gateways with strict cryptographic signature validation.',
      details: [
        'Decoupled IPaymentProvider interface enabling seamless switching between local test gateways and Stripe.',
        'Cryptographic HMAC SHA256 webhook validation preventing man-in-the-middle or spoofed enrollment unlocks.',
        'Flexible coupon engine supporting percentage, flat discounts, minimum order thresholds, and expiry enforcement.'
      ]
    },
    {
      id: 'postgres-store',
      label: 'Authoritative PostgreSQL & Redis',
      category: 'data',
      technology: 'PostgreSQL 16 + Prisma ORM + Redis 7',
      protocol: 'TCP Connection Pool + RESP',
      status: 'Active Production',
      summary: 'High-concurrency normalized relational schema for users, enrollments, lessons, audit logs, and student performance metrics.',
      details: [
        'Normalized relational schema with 20+ models maintaining strict foreign key constraints and transactional integrity.',
        'Immutable audit log recording sensitive security events (role promotions, certificate revocations, authentication events).',
        'Redis caching for high-velocity course catalog queries and distributed rate-limiting buckets.'
      ]
    }
  ],
  connections: [
    { from: 'student-portal', to: 'api-gateway', label: 'HTTPS / Bearer JWT' },
    { from: 'api-gateway', to: 'course-engine', label: 'Route Request' },
    { from: 'course-engine', to: 'certificate-engine', label: 'Completion Event' },
    { from: 'api-gateway', to: 'payment-webhook', label: 'HMAC Webhook' },
    { from: 'course-engine', to: 'postgres-store', label: 'Prisma Query' },
    { from: 'certificate-engine', to: 'postgres-store', label: 'Mint & Verify' }
  ]
};

export const gargaarArchData: ArchitectureData = {
  title: 'Gargaar Emergency Response Architecture',
  systemName: 'Low-Latency Mobile Telemetry & Real-Time Incident Dispatch',
  overview:
    'A mission-critical emergency response system built with Flutter and real-time streaming, engineered for sub-second SOS distress signal routing, resilient offline incident caching, real-time GPS telemetry, and automated emergency service triage.',
  nodes: [
    {
      id: 'flutter-client',
      label: 'Flutter Mobile Emergency App',
      category: 'client',
      technology: 'Flutter 3.x + Dart + Provider/Bloc',
      protocol: 'WSS / HTTPS / BLE',
      status: 'Active Production',
      summary: 'Cross-platform mobile client designed for zero-hesitation emergency activation with single-tap SOS and voice distress logging.',
      details: [
        'Single-tap SOS trigger with instant haptic confirmation, countdown cancel buffer, and audible siren activation.',
        'Background high-precision GPS telemetry streaming continuous coordinates during active incidents.',
        'Accessible, high-contrast dark emergency UI optimized for stress conditions, night usage, and sunlight readability.'
      ]
    },
    {
      id: 'offline-cache',
      label: 'Offline Distress Journal',
      category: 'queue',
      technology: 'SQLite + Hive Encrypted Storage',
      protocol: 'Local Disk Persistence',
      status: 'Active Production',
      summary: 'Guarantees emergency incident signals are logged and retained on-device when cellular data or connectivity is interrupted.',
      details: [
        'Local encrypted queue recording incident timestamp, device battery level, network state, and last known GPS coordinates.',
        'Automatic retry daemon with exponential backoff and SMS fallback trigger when TCP/cellular data connection drops.',
        'Prevents lost distress signals in subterranean areas, tunnels, or rural dead zones.'
      ]
    },
    {
      id: 'dispatch-gateway',
      label: 'Real-Time Dispatch Gateway',
      category: 'api',
      technology: 'Node.js + WebSockets + Redis Pub/Sub',
      protocol: 'WSS / HTTP/2',
      status: 'Active Production',
      summary: 'Ultra-low latency streaming gateway managing live connection channels between citizen callers, ambulances, and dispatch centers.',
      details: [
        'Sub-100ms bi-directional WebSocket message dispatch with connection keep-alive heartbeats.',
        'Redis Pub/Sub cluster broadcasting incident location broadcasts to localized first-responder geohashes.',
        'Stateless horizontal scaling behind high-availability load balancers.'
      ]
    },
    {
      id: 'triage-engine',
      label: 'Spatial Routing & Triage Engine',
      category: 'service',
      technology: 'Go / Node.js Microservice + Haversine Routing',
      protocol: 'Internal gRPC / Event Bus',
      status: 'Active Production',
      summary: 'Intelligent dispatch algorithm calculating optimal responder allocation based on distance, traffic, and medical facility capacity.',
      details: [
        'Ranks nearest available response units (ambulances, paramedics, rescue squads) with real-time ETA calculation.',
        'Automated hospital triage routing matching patient clinical severity with emergency ward bed availability.',
        'Multi-channel alerting integrating Webhooks, SMS failovers, and cellular voice notification bridges.'
      ]
    },
    {
      id: 'fcm-notifications',
      label: 'High-Priority Notification Engine',
      category: 'infra',
      technology: 'Firebase Cloud Messaging + APNs',
      protocol: 'HTTP/2 Push Protocol',
      status: 'Active Production',
      summary: 'High-priority push delivery waking backgrounded mobile devices and sounding critical alert overrides on first responder phones.',
      details: [
        'Apple Push Notification service (APNs) Critical Alerts bypass Do Not Disturb and silent switches on responder devices.',
        'Data-only high-priority silent pushes wake background applications to receive real-time incident coordinate streams.',
        'Delivery receipt auditing ensuring dispatchers verify message reception within seconds.'
      ]
    },
    {
      id: 'gis-database',
      label: 'PostgreSQL + PostGIS Geospatial Store',
      category: 'data',
      technology: 'PostgreSQL 16 + PostGIS Spatial Engine',
      protocol: 'TCP Connection Pool (PgBouncer)',
      status: 'Active Production',
      summary: 'Spatial database storing boundary polygons, road graphs, responder vehicle coordinates, and historical incident analytics.',
      details: [
        'R-tree spatial indexing enabling rapid sub-millisecond geofencing and proximity searches within radius cones.',
        'Point-in-polygon queries automatically classifying incidents into regional dispatch administrative zones.',
        'Immutable incident event logs tracking every state transition from initial call to scene arrival and hospital handover.'
      ]
    }
  ],
  connections: [
    { from: 'flutter-client', to: 'offline-cache', label: 'Local Commit' },
    { from: 'flutter-client', to: 'dispatch-gateway', label: 'WSS Stream' },
    { from: 'dispatch-gateway', to: 'triage-engine', label: 'Broadcast Incident' },
    { from: 'triage-engine', to: 'fcm-notifications', label: 'Alert Responders' },
    { from: 'triage-engine', to: 'gis-database', label: 'PostGIS Spatial Query' }
  ]
};

