import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  Server,
  Database,
  Box,
  GitBranch,
  Cloud,
  Copy,
  Check,
  Send,
  Code2,
  FileText,
  Activity,
  Layers,
  ShieldCheck,
  Lock,
  ArrowRight,
  Info
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* TYPES & DATA DEFINITIONS                                                   */
/* -------------------------------------------------------------------------- */

type LabTab = 'api' | 'database' | 'containers' | 'cicd' | 'kubernetes';

/* 1. API EXPLORER DATA */
interface ApiEndpoint {
  id: string;
  name: string;
  method: 'GET' | 'POST';
  path: string;
  description: string;
  service: string;
  requestHeaders: Record<string, string>;
  requestBody?: string;
  responseStatus: number;
  statusText: string;
  latencyMs: number;
  sizeBytes: string;
  responseHeaders: Record<string, string>;
  responseBody: string;
  curlCommand: string;
}

const API_ENDPOINTS: ApiEndpoint[] = [
  {
    id: 'understory-ast',
    name: 'Get Manuscript AST',
    method: 'GET',
    path: '/api/v1/reader/manuscripts/principles-of-typography/ast?depth=chapter&include_metrics=true',
    description: 'Streams the parsed Abstract Syntax Tree for long-form literature. Decouples raw editorial markup from client viewport rendering.',
    service: 'Understory Books • eBaro Parser API',
    requestHeaders: {
      'Accept': 'application/json',
      'X-Client-Version': '2.4.0',
      'Cache-Control': 'max-age=3600'
    },
    responseStatus: 200,
    statusText: 'OK',
    latencyMs: 24,
    sizeBytes: '14.8 KB',
    responseHeaders: {
      'content-type': 'application/json; charset=utf-8',
      'x-ast-version': '2.2.0',
      'etag': 'W/"ast-8f92a10-2026"',
      'cache-control': 'public, max-age=3600, stale-while-revalidate=86400'
    },
    responseBody: JSON.stringify(
      {
        meta: {
          manuscript_id: "urn:manuscript:understory:8f92a10",
          slug: "principles-of-typography",
          title: "Principles of Editorial Typography",
          ast_version: "2.2.0",
          node_count: 1420,
          estimated_reading_minutes: 18
        },
        document: {
          type: "root",
          metadata: {
            language: "en-GB",
            font_stack: ["Cormorant Garamond", "Newsreader", "Georgia"]
          },
          nodes: [
            {
              type: "chapter_header",
              sequence: 1,
              title: "The Optical Axis",
              anchor: "chapter-01"
            },
            {
              type: "paragraph",
              id: "p-001",
              has_dropcap: true,
              tokens: [
                { type: "text", content: "True typographic balance arises when vertical rhythm aligns with human reading cadence." }
              ]
            },
            {
              type: "pull_quote",
              id: "pq-001",
              attribution: "Jan Tschichold, 1928",
              content: "White space is the breath of editorial design."
            }
          ]
        }
      },
      null,
      2
    ),
    curlCommand: `curl -X GET "https://api.understorybooks.internal/api/v1/reader/manuscripts/principles-of-typography/ast?depth=chapter" \\\n  -H "Accept: application/json" \\\n  -H "X-Client-Version: 2.4.0"`
  },
  {
    id: 'pos-sync',
    name: 'Sync Offline Checkout',
    method: 'POST',
    path: '/api/v1/pos/checkout/sync',
    description: 'Reconciles an offline register transaction batch. Verifies cryptographic idempotency and deducts inventory inside an atomic PostgreSQL row lock.',
    service: 'TillPro POS • Transactions Gateway',
    requestHeaders: {
      'Content-Type': 'application/json',
      'Idempotency-Key': 'idemp_99bf21a0-5ce8-48b2-a4f6-8c20261107',
      'X-Register-ID': 'reg_front_counter_01'
    },
    requestBody: JSON.stringify(
      {
        register_id: "reg_front_counter_01",
        batch_id: "batch_20261107_01",
        idempotency_key: "idemp_99bf21a0-5ce8-48b2-a4f6-8c20261107",
        client_timestamp: "2026-11-07T00:28:15.120Z",
        items: [
          { sku: "BK-GARAMOND-01", barcode: "9780141036137", qty: 2, unit_price_cents: 2800 },
          { sku: "STAT-NOTE-A5", barcode: "4004764831201", qty: 1, unit_price_cents: 1400 }
        ],
        payment: {
          method: "offline_chip_card",
          auth_code: "AUTH_OFFLINE_84920",
          total_cents: 7000,
          currency: "GBP"
        }
      },
      null,
      2
    ),
    responseStatus: 201,
    statusText: 'Created',
    latencyMs: 38,
    sizeBytes: '1.4 KB',
    responseHeaders: {
      'content-type': 'application/json; charset=utf-8',
      'x-idempotency-matched': 'false',
      'x-transaction-lock-wait-ms': '1.8'
    },
    responseBody: JSON.stringify(
      {
        status: "reconciled",
        reconciliation_id: "rec_2026_9b183",
        transaction_id: "tx_uuid_e9381b10-21f0-4a82",
        idempotency_cached: false,
        inventory_reconciled: [
          { sku: "BK-GARAMOND-01", remaining_stock: 42, lock_status: "released" },
          { sku: "STAT-NOTE-A5", remaining_stock: 18, lock_status: "released" }
        ],
        ledger_balance_cents: 7000,
        server_timestamp: "2026-11-07T00:28:15.158Z"
      },
      null,
      2
    ),
    curlCommand: `curl -X POST "https://api.tillpro.internal/api/v1/pos/checkout/sync" \\\n  -H "Content-Type: application/json" \\\n  -H "Idempotency-Key: idemp_99bf21a0-5ce8-48b2-a4f6-8c20261107" \\\n  -d '{"register_id":"reg_front_counter_01","total_cents":7000}'`
  },
  {
    id: 'health-metrics',
    name: 'Cluster Liveness & Metrics',
    method: 'GET',
    path: '/api/v1/health/detailed',
    description: 'Kubernetes liveness and readiness probe endpoint. Evaluates database connection pools, cache latency, and unhandled queue depths.',
    service: 'Core Platform • Observability Harness',
    requestHeaders: {
      'Accept': 'application/json'
    },
    responseStatus: 200,
    statusText: 'OK',
    latencyMs: 6,
    sizeBytes: '612 B',
    responseHeaders: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store'
    },
    responseBody: JSON.stringify(
      {
        status: "healthy",
        uptime_seconds: 489201,
        timestamp: "2026-11-07T00:30:00.000Z",
        checks: {
          postgresql_pool: {
            status: "ready",
            active_connections: 4,
            idle_connections: 16,
            max_pool_size: 25,
            ping_latency_ms: 1.2
          },
          redis_sync_cache: {
            status: "ready",
            ping_latency_ms: 0.4,
            memory_used_mb: 28.4
          },
          disk_storage: {
            status: "ready",
            percent_free: 84.2
          }
        },
        cluster_node: "k8s-worker-pool-node-03.eu-west-2"
      },
      null,
      2
    ),
    curlCommand: `curl -X GET "https://api.khalilwali.internal/api/v1/health/detailed" \\\n  -H "Accept: application/json"`
  }
];

/* 2. DATABASE EXPLORER DATA */
interface DbColumn {
  name: string;
  type: string;
  constraints: string;
  description: string;
}

interface DbTable {
  id: string;
  name: string;
  purpose: string;
  project: string;
  columns: DbColumn[];
  indexes: { name: string; definition: string; reason: string }[];
  sampleQuery: {
    title: string;
    sql: string;
    explanation: string;
    planNote: string;
  };
}

const DB_TABLES: DbTable[] = [
  {
    id: 'manuscripts',
    name: 'manuscripts',
    purpose: 'Stores top-level editorial manuscripts with decomposed AST payloads and metadata.',
    project: 'Understory Books',
    columns: [
      { name: 'id', type: 'UUID', constraints: 'PRIMARY KEY DEFAULT gen_random_uuid()', description: 'Globally unique manuscript identifier' },
      { name: 'slug', type: 'VARCHAR(120)', constraints: 'UNIQUE NOT NULL', description: 'URL-safe indexed lookup key' },
      { name: 'title', type: 'VARCHAR(255)', constraints: 'NOT NULL', description: 'Editorial publication title' },
      { name: 'ast_payload', type: 'JSONB', constraints: 'NOT NULL', description: 'Normalized Abstract Syntax Tree document tree' },
      { name: 'word_count', type: 'INTEGER', constraints: 'CHECK (word_count >= 0)', description: 'Total calculated word count' },
      { name: 'created_at', type: 'TIMESTAMPTZ', constraints: 'NOT NULL DEFAULT NOW()', description: 'Creation audit timestamp' }
    ],
    indexes: [
      {
        name: 'idx_manuscripts_slug',
        definition: 'CREATE UNIQUE INDEX idx_manuscripts_slug ON manuscripts(slug);',
        reason: 'Guarantees sub-millisecond B-tree route resolution from client URL requests.'
      },
      {
        name: 'idx_manuscripts_ast_gin',
        definition: 'CREATE INDEX idx_manuscripts_ast_gin ON manuscripts USING gin (ast_payload jsonb_path_ops);',
        reason: 'Enables high-speed deep JSON path queries directly within AST nodes without parsing.'
      }
    ],
    sampleQuery: {
      title: 'Extract Chapters with Dropcap Paragraphs',
      sql: `SELECT 
    id, 
    slug, 
    title,
    jsonb_path_query_array(
      ast_payload, 
      '$.document.nodes[*] ? (@.type == "paragraph" && @.has_dropcap == true)'
    ) AS dropcap_paragraphs
FROM manuscripts
WHERE slug = 'principles-of-typography';`,
      explanation: 'Uses PostgreSQL JSON Path expressions to retrieve specific typographic nodes without de-serializing the entire multi-megabyte manuscript into application memory.',
      planNote: 'Bitmap Index Scan using idx_manuscripts_slug -> sub-1ms execution.'
    }
  },
  {
    id: 'pos_transactions',
    name: 'pos_transactions',
    purpose: 'Immutable financial ledger of checkout events reconciled from offline registers.',
    project: 'TillPro Point of Sale',
    columns: [
      { name: 'id', type: 'UUID', constraints: 'PRIMARY KEY DEFAULT gen_random_uuid()', description: 'Unique ledger row ID' },
      { name: 'register_id', type: 'VARCHAR(50)', constraints: 'NOT NULL', description: 'Physical register terminal ID' },
      { name: 'idempotency_key', type: 'VARCHAR(64)', constraints: 'UNIQUE NOT NULL', description: 'Client-generated UUID preventing duplicate syncs' },
      { name: 'total_cents', type: 'BIGINT', constraints: 'NOT NULL CHECK (total_cents >= 0)', description: 'Exact currency integer in cents (avoids float drift)' },
      { name: 'sync_status', type: 'VARCHAR(20)', constraints: 'NOT NULL DEFAULT "pending"', description: '"pending" | "reconciled" | "conflict"' },
      { name: 'created_at', type: 'TIMESTAMPTZ', constraints: 'NOT NULL DEFAULT NOW()', description: 'Server ledger timestamp' }
    ],
    indexes: [
      {
        name: 'idx_pos_idempotency',
        definition: 'CREATE UNIQUE INDEX idx_pos_idempotency ON pos_transactions(idempotency_key);',
        reason: 'Hard barrier against double charging when an offline register retries an interrupted sync.'
      },
      {
        name: 'idx_pos_reg_status',
        definition: 'CREATE INDEX idx_pos_reg_status ON pos_transactions(register_id, sync_status);',
        reason: 'Composite index supporting multi-counter register telemetry and status dashboards.'
      }
    ],
    sampleQuery: {
      title: 'Atomic Inventory Deduction with Row-Level Lock',
      sql: `BEGIN;

-- 1. Acquire exclusive lock on target inventory row
SELECT sku, stock_quantity 
FROM inventory_items 
WHERE sku = 'BK-GARAMOND-01' 
FOR UPDATE;

-- 2. Decrement stock with database-level invariant protection
UPDATE inventory_items 
SET stock_quantity = stock_quantity - 2, 
    version = version + 1
WHERE sku = 'BK-GARAMOND-01' 
  AND stock_quantity >= 2;

-- 3. Record transaction ledger row
INSERT INTO pos_transactions (
  register_id, idempotency_key, total_cents, sync_status
) VALUES (
  'reg_front_counter_01', 'idemp_99bf21a0-5ce8', 7000, 'reconciled'
);

COMMIT;`,
      explanation: 'Uses SELECT FOR UPDATE to serialize concurrent sales across multiple retail counters, preventing race conditions and negative inventory drift.',
      planNote: 'Row-level exclusive lock (FOR UPDATE) acquired in ~0.8ms; guarantees ACID serializability.'
    }
  },
  {
    id: 'sync_queue',
    name: 'sync_queue',
    purpose: 'Durable background queue for retrying transient connection drops and conflict resolutions.',
    project: 'TillPro Point of Sale',
    columns: [
      { name: 'mutation_id', type: 'UUID', constraints: 'PRIMARY KEY', description: 'Client mutation transaction UUID' },
      { name: 'register_id', type: 'VARCHAR(50)', constraints: 'NOT NULL', description: 'Originating register hardware terminal' },
      { name: 'payload', type: 'JSONB', constraints: 'NOT NULL', description: 'Raw serialised checkout event payload' },
      { name: 'attempts', type: 'INTEGER', constraints: 'NOT NULL DEFAULT 0', description: 'Exponential backoff retry counter' },
      { name: 'last_error', type: 'TEXT', constraints: 'NULL', description: 'Stack trace or constraint violation detail' },
      { name: 'scheduled_at', type: 'TIMESTAMPTZ', constraints: 'NOT NULL DEFAULT NOW()', description: 'Next scheduled retry window' }
    ],
    indexes: [
      {
        name: 'idx_sync_queue_active',
        definition: 'CREATE INDEX idx_sync_queue_active ON sync_queue(scheduled_at) WHERE attempts < 5;',
        reason: 'Partial index scanning only active, retryable jobs—keeping worker queries sub-millisecond.'
      }
    ],
    sampleQuery: {
      title: 'Fetch Next Batch of Eligible Retry Jobs',
      sql: `SELECT mutation_id, register_id, payload, attempts
FROM sync_queue
WHERE attempts < 5 
  AND scheduled_at <= NOW()
ORDER BY scheduled_at ASC
LIMIT 50
FOR UPDATE SKIP LOCKED;`,
      explanation: 'FOR UPDATE SKIP LOCKED allows multiple parallel background worker processes to consume jobs concurrently without blocking each other or encountering deadlocks.',
      planNote: 'Partial Index Scan on idx_sync_queue_active. Zero lock contention across workers.'
    }
  }
];

/* 3. CONTAINERISATION EXPLORER DATA */
interface ContainerFile {
  id: string;
  name: string;
  type: 'dockerfile' | 'compose';
  description: string;
  code: string;
  highlights: { title: string; lineHint: string; rationale: string }[];
}

const CONTAINER_FILES: ContainerFile[] = [
  {
    id: 'dockerfile-api',
    name: 'Dockerfile (Understory API)',
    type: 'dockerfile',
    description: 'Production multi-stage build for Node.js/TypeScript. Generates an unprivileged 110MB container with non-root security and dumb-init.',
    code: `# =======================================================
# Stage 1: Build & TypeScript Compilation
# =======================================================
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Install dependencies first for Docker layer caching
COPY package*.json tsconfig.json ./
RUN npm ci --prefer-offline --no-audit

# Copy source and compile to JavaScript
COPY src/ ./src/
RUN npm run build

# Prune development dependencies for minimal footprint
RUN npm prune --production

# =======================================================
# Stage 2: Production Distroless/Minimal Runner
# =======================================================
FROM node:20-alpine AS runner

# Install dumb-init for proper PID 1 signal forwarding
RUN apk add --no-cache dumb-init

WORKDIR /usr/src/app

ENV NODE_ENV=production \\
    PORT=3000

# Run as non-root user (node uid: 1000) for security isolation
USER node

# Copy build artifacts from builder stage with correct ownership
COPY --chown=node:node --from=builder /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=builder /usr/src/app/dist ./dist
COPY --chown=node:node package.json ./

# Declarative healthcheck probe
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD wget -qO- http://localhost:3000/api/v1/health || exit 1

EXPOSE 3000

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["node", "dist/main.js"]`,
    highlights: [
      {
        title: 'Multi-Stage Build',
        lineHint: 'FROM node:20-alpine AS builder / AS runner',
        rationale: 'Discards TypeScript compiler, source files, and devDependencies, shrinking image size from ~850MB to ~110MB.'
      },
      {
        title: 'Non-Root User Execution',
        lineHint: 'USER node',
        rationale: 'Mitigates container escape vulnerabilities by preventing processes from having host root privileges.'
      },
      {
        title: 'PID 1 Signal Forwarding',
        lineHint: 'ENTRYPOINT ["/usr/bin/dumb-init", "--"]',
        rationale: 'Solves zombie process accumulation and ensures SIGTERM graceful shutdowns during rolling deployments.'
      },
      {
        title: 'Built-in Health Probe',
        lineHint: 'HEALTHCHECK --interval=30s',
        rationale: 'Allows Docker and orchestrators to detect deadlocks before routing customer traffic to unhealthy pods.'
      }
    ]
  },
  {
    id: 'compose-production',
    name: 'docker-compose.production.yml',
    type: 'compose',
    description: 'Declarative multi-container topology with isolated bridge networking, healthchecks, and strict resource limits.',
    code: `version: '3.8'

services:
  understory-api:
    build:
      context: .
      dockerfile: Dockerfile
    restart: unless-stopped
    ports:
      - "127.0.0.1:3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgres://app_user:\${DB_PASSWORD}@postgres:5432/understory_db
      - REDIS_URL=redis://redis:6379
    deploy:
      resources:
        limits:
          cpus: '1.50'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 128M
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    networks:
      - internal-mesh

  postgres:
    image: postgres:16-alpine
    restart: unless-stopped
    environment:
      POSTGRES_DB: understory_db
      POSTGRES_USER: app_user
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password
    volumes:
      - postgres-data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app_user -d understory_db"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - internal-mesh

  redis:
    image: redis:7-alpine
    restart: unless-stopped
    command: ["redis-server", "--appendonly", "yes", "--maxmemory", "128mb", "--maxmemory-policy", "allkeys-lru"]
    volumes:
      - redis-data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 3s
      retries: 3
    networks:
      - internal-mesh

networks:
  internal-mesh:
    driver: bridge

volumes:
  postgres-data:
  redis-data:`,
    highlights: [
      {
        title: 'Strict Resource Quotas',
        lineHint: 'limits: cpus 1.50, memory 512M',
        rationale: 'Prevents rogue memory leaks from starving sibling host processes or causing cascading host failure.'
      },
      {
        title: 'Health-Conditioned Startup',
        lineHint: 'condition: service_healthy',
        rationale: 'Guarantees the API process never attempts database queries until PostgreSQL has completely booted and accepted socket connections.'
      },
      {
        title: 'Loopback Port Binding',
        lineHint: '127.0.0.1:3000:3000',
        rationale: 'Binds ports only to internal loopback, requiring reverse proxies (e.g., NGINX/Caddy) to terminate public TLS.'
      }
    ]
  }
];

/* 4. CI/CD PIPELINE DATA */
interface CiCdStage {
  id: string;
  name: string;
  status: 'passed';
  duration: string;
  description: string;
  yamlSnippet: string;
  logOutput: string[];
}

const CICD_STAGES: CiCdStage[] = [
  {
    id: 'lint-types',
    name: '01. Lint & Type Check',
    status: 'passed',
    duration: '28s',
    description: 'Enforces zero-tolerance TypeScript compilation rules and strict ESLint security plugins.',
    yamlSnippet: `  lint-and-typecheck:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npx tsc --noEmit --strict
      - run: npm run lint -- --max-warnings=0`,
    logOutput: [
      '> tsc --noEmit --strict',
      'Checking 142 TypeScript source files...',
      '0 errors found. Strict type validation passed in 8.4s.',
      '> eslint src/ --ext .ts,.tsx --max-warnings=0',
      'Validating code formatting, hook dependencies, and security imports...',
      'PASSED: 0 warnings, 0 errors.'
    ]
  },
  {
    id: 'automated-tests',
    name: '02. Test Suite (Vitest & Postgres)',
    status: 'passed',
    duration: '52s',
    description: 'Runs isolated unit tests and spins up a real ephemeral PostgreSQL testcontainer for transactional integration tests.',
    yamlSnippet: `  integration-tests:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16-alpine
        env:
          POSTGRES_DB: test_db
          POSTGRES_PASSWORD: test_secret_ci
        ports: ["5432:5432"]
        options: >-
          --health-cmd pg_isready
          --health-interval 5s
          --health-retries 5
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run test:unit
      - run: npm run test:integration
        env:
          DATABASE_URL: postgres://postgres:test_secret_ci@localhost:5432/test_db`,
    logOutput: [
      'RUN  v1.4.0 /usr/src/app',
      '✓ test/unit/ast-parser.test.ts (24 tests) 142ms',
      '✓ test/unit/idempotency.test.ts (18 tests) 89ms',
      '✓ test/integration/pos-checkout-concurrency.test.ts (12 tests) 2140ms',
      '  ✓ acquires row lock on inventory concurrently without deadlock',
      '  ✓ idempotency key prevents duplicate billing insertion',
      'Test Files  6 passed (6)',
      'Tests       54 passed (54)',
      'Duration    4.2s (transform 310ms, setup 1.2s, test 2.7s)'
    ]
  },
  {
    id: 'security-scan',
    name: '03. Vulnerability Audit (Trivy)',
    status: 'passed',
    duration: '34s',
    description: 'Scans npm dependencies and the built container filesystem for CVE vulnerabilities before releasing.',
    yamlSnippet: `  security-audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm audit --audit-level=high
      - uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs,config'
          hide-progress: true
          format: 'table'
          severity: 'CRITICAL,HIGH'`,
    logOutput: [
      'Scanning package-lock.json dependencies...',
      '0 high or critical vulnerabilities found in 412 packages.',
      'Running Aquasecurity Trivy scanner on container filesystem...',
      'Target: alpine:3.19 (os-pkg)',
      'Total: 0 (UNKNOWN: 0, LOW: 0, MEDIUM: 0, HIGH: 0, CRITICAL: 0)',
      'Security verification: PASSED.'
    ]
  },
  {
    id: 'docker-build',
    name: '04. Multi-Arch Build & Cache',
    status: 'passed',
    duration: '1m 15s',
    description: 'Builds OCI container with GitHub Actions Layer Caching (type=gha) and tags with git commit SHA.',
    yamlSnippet: `  docker-build:
    needs: [lint-and-typecheck, integration-tests, security-audit]
    runs-on: ubuntu-latest
    steps:
      - uses: docker/setup-buildx-action@v3
      - uses: docker/build-push-action@v5
        with:
          context: .
          push: false
          tags: understory-api:\${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max`,
    logOutput: [
      '[+] Building 42.1s (18/18) FINISHED',
      ' => [internal] load build definition from Dockerfile',
      ' => => transferring dockerfile: 1.1kB',
      ' => [internal] load .dockerignore',
      ' => [stage-1 1/8] FROM node:20-alpine',
      ' => CACHED [builder 2/6] COPY package*.json ./',
      ' => [builder 3/6] RUN npm ci --prefer-offline',
      ' => [builder 5/6] RUN npm run build',
      ' => exporting to image understory-api:a8f9210',
      'Image built and tagged. Size: 108.4MB'
    ]
  },
  {
    id: 'k8s-deploy',
    name: '05. Rolling Helm Deployment',
    status: 'passed',
    duration: '45s',
    description: 'Executes Helm upgrade with zero downtime rolling update and automatic rollback on probe failure.',
    yamlSnippet: `  helm-deploy:
    needs: docker-build
    runs-on: ubuntu-latest
    steps:
      - uses: azure/setup-helm@v3
      - run: |
          helm upgrade --install understory-core ./helm/understory \\
            --set image.tag=\${{ github.sha }} \\
            --namespace production \\
            --wait --timeout 300s
      - run: kubectl rollout status deployment/understory-api -n production`,
    logOutput: [
      'Release "understory-core" has been upgraded. Happy Helming!',
      'STATUS: deployed',
      'REVISION: 14',
      'Waiting for deployment "understory-api" rollout to finish: 1 of 3 updated replicas are available...',
      'Waiting for deployment "understory-api" rollout to finish: 2 of 3 updated replicas are available...',
      'deployment "understory-api" successfully rolled out.',
      'Deployment verified. Zero packet drops observed.'
    ]
  }
];

/* 5. KUBERNETES EXPLORER DATA */
interface K8sManifest {
  id: string;
  kind: string;
  name: string;
  description: string;
  yaml: string;
  highlights: { title: string; lineHint: string; rationale: string }[];
}

const K8S_MANIFESTS: K8sManifest[] = [
  {
    id: 'deployment',
    kind: 'Deployment',
    name: 'understory-api-deployment.yaml',
    description: 'Declares 3 replicated stateless API pods with anti-affinity, security hardening, and rolling update strategy.',
    yaml: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: understory-api
  namespace: production
  labels:
    app.kubernetes.io/name: understory-api
    app.kubernetes.io/part-of: understory-books
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: understory-api
  template:
    metadata:
      labels:
        app: understory-api
    spec:
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 100
              podAffinityTerm:
                labelSelector:
                  matchExpressions:
                    - key: app
                      operator: In
                      values: ["understory-api"]
                topologyKey: "kubernetes.io/hostname"
      securityContext:
        runAsNonRoot: true
        runAsUser: 1000
        fsGroup: 1000
      containers:
        - name: api
          image: understory-api:v2.4.0
          imagePullPolicy: IfNotPresent
          securityContext:
            allowPrivilegeEscalation: false
            readOnlyRootFilesystem: true
          ports:
            - containerPort: 3000
              name: http
          resources:
            requests:
              cpu: 250m
              memory: 256Mi
            limits:
              cpu: 500m
              memory: 512Mi
          livenessProbe:
            httpGet:
              path: /api/v1/health
              port: 3000
            initialDelaySeconds: 15
            periodSeconds: 20
            timeoutSeconds: 3
          readinessProbe:
            httpGet:
              path: /api/v1/health/detailed
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 10
            timeoutSeconds: 2`,
    highlights: [
      {
        title: 'Zero-Downtime Rolling Update',
        lineHint: 'maxSurge: 1, maxUnavailable: 0',
        rationale: 'Kubernetes starts new healthy pods and verifies readiness before terminating any old pods.'
      },
      {
        title: 'Pod Anti-Affinity',
        lineHint: 'topologyKey: kubernetes.io/hostname',
        rationale: 'Spreads replicas across different physical nodes to survive node hardware failures.'
      },
      {
        title: 'Read-Only Root Filesystem',
        lineHint: 'readOnlyRootFilesystem: true',
        rationale: 'Blocks attackers from modifying application binaries or writing executable scripts into the container.'
      }
    ]
  },
  {
    id: 'ingress-service',
    kind: 'Ingress & Service',
    name: 'ingress-and-service.yaml',
    description: 'ClusterIP internal service mapping paired with NGINX Ingress Controller, TLS cert-manager, and rate limiting.',
    yaml: `apiVersion: v1
kind: Service
metadata:
  name: understory-api-service
  namespace: production
spec:
  type: ClusterIP
  ports:
    - port: 80
      targetPort: 3000
      protocol: TCP
      name: http
  selector:
    app: understory-api

---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: understory-ingress
  namespace: production
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: letsencrypt-prod
    nginx.ingress.kubernetes.io/limit-rps: "60"
    nginx.ingress.kubernetes.io/proxy-body-size: "8m"
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
spec:
  tls:
    - hosts:
        - api.understorybooks.com
      secretName: understory-tls-secret
  rules:
    - host: api.understorybooks.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: understory-api-service
                port:
                  number: 80`,
    highlights: [
      {
        title: 'Automated TLS Certificate Management',
        lineHint: 'cert-manager.io/cluster-issuer: letsencrypt-prod',
        rationale: 'Handles automatic SSL/TLS certificate issuance and renewal via Let’s Encrypt ACME challenges.'
      },
      {
        title: 'Edge Rate Limiting',
        lineHint: 'nginx.ingress.kubernetes.io/limit-rps: "60"',
        rationale: 'Protects backend Node.js endpoints from abusive API scraping or denial-of-service spikes.'
      }
    ]
  }
];

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT: EngineeringLab                                             */
/* -------------------------------------------------------------------------- */

export const EngineeringLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<LabTab>('api');

  /* API Explorer State */
  const [selectedApiId, setSelectedApiId] = useState<string>(API_ENDPOINTS[0].id);
  const [apiViewMode, setApiViewMode] = useState<'response' | 'headers' | 'payload' | 'curl'>('response');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isSimulatingSend, setIsSimulatingSend] = useState<boolean>(false);

  /* Database Explorer State */
  const [selectedDbTableId, setSelectedDbTableId] = useState<string>(DB_TABLES[0].id);
  const [dbSubTab, setDbSubTab] = useState<'schema' | 'indexes' | 'query'>('schema');

  /* Container Explorer State */
  const [selectedContainerId, setSelectedContainerId] = useState<string>(CONTAINER_FILES[0].id);

  /* CI/CD State */
  const [selectedCiStageId, setSelectedCiStageId] = useState<string>(CICD_STAGES[0].id);

  /* Kubernetes State */
  const [selectedK8sId, setSelectedK8sId] = useState<string>(K8S_MANIFESTS[0].id);

  const activeEndpoint = API_ENDPOINTS.find((e) => e.id === selectedApiId) || API_ENDPOINTS[0];
  const activeTable = DB_TABLES.find((t) => t.id === selectedDbTableId) || DB_TABLES[0];
  const activeContainer = CONTAINER_FILES.find((c) => c.id === selectedContainerId) || CONTAINER_FILES[0];
  const activeCiStage = CICD_STAGES.find((s) => s.id === selectedCiStageId) || CICD_STAGES[0];
  const activeK8s = K8S_MANIFESTS.find((m) => m.id === selectedK8sId) || K8S_MANIFESTS[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleTriggerSend = () => {
    setIsSimulatingSend(true);
    setTimeout(() => {
      setIsSimulatingSend(false);
    }, 400);
  };

  return (
    <div className="engineering-lab-container" id="engineering-lab">
      {/* Outer Lab Frame */}
      <div className="lab-panel">
        {/* Lab Header */}
        <div className="lab-panel-header">
          <div className="lab-header-left">
            <div className="lab-status-indicator">
              <span className="lab-status-dot" />
              <span>INTERACTIVE ENGINEERING LAB</span>
            </div>
            <h3 className="lab-headline">Live System Inspection &amp; Architecture Sandbox</h3>
            <p className="lab-subtext">
              Inspect real production API contracts, PostgreSQL schema designs, Dockerfiles, and CI/CD pipelines engineered across Understory Books and TillPro POS.
            </p>
          </div>

          <div className="lab-header-right">
            <span className="lab-live-badge">
              <Activity size={13} strokeWidth={2} />
              <span>Production Blueprints</span>
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="lab-nav-bar" role="tablist" aria-label="Engineering Lab Sections">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'api'}
            className={`lab-nav-tab ${activeTab === 'api' ? 'active' : ''}`}
            onClick={() => setActiveTab('api')}
          >
            <Server size={15} strokeWidth={2} />
            <span>1. API Explorer</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'database'}
            className={`lab-nav-tab ${activeTab === 'database' ? 'active' : ''}`}
            onClick={() => setActiveTab('database')}
          >
            <Database size={15} strokeWidth={2} />
            <span>2. Database Schemas</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'containers'}
            className={`lab-nav-tab ${activeTab === 'containers' ? 'active' : ''}`}
            onClick={() => setActiveTab('containers')}
          >
            <Box size={15} strokeWidth={2} />
            <span>3. Containers &amp; Compose</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'cicd'}
            className={`lab-nav-tab ${activeTab === 'cicd' ? 'active' : ''}`}
            onClick={() => setActiveTab('cicd')}
          >
            <GitBranch size={15} strokeWidth={2} />
            <span>4. CI/CD Visualiser</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'kubernetes'}
            className={`lab-nav-tab ${activeTab === 'kubernetes' ? 'active' : ''}`}
            onClick={() => setActiveTab('kubernetes')}
          >
            <Cloud size={15} strokeWidth={2} />
            <span>5. Kubernetes Manifests</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="lab-tab-content">
          <AnimatePresence mode="wait">
            {/* ============================================================ */}
            {/* 1. API EXPLORER                                              */}
            {/* ============================================================ */}
            {activeTab === 'api' && (
              <motion.div
                key="api-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="lab-grid-layout"
              >
                {/* Left Sidebar: Endpoints Selection */}
                <div className="lab-sidebar">
                  <div className="lab-sidebar-title">Available Endpoints</div>
                  <div className="lab-endpoint-list">
                    {API_ENDPOINTS.map((endpoint) => {
                      const isSelected = endpoint.id === activeEndpoint.id;
                      return (
                        <button
                          key={endpoint.id}
                          type="button"
                          className={`lab-endpoint-item ${isSelected ? 'active' : ''}`}
                          onClick={() => {
                            setSelectedApiId(endpoint.id);
                            setApiViewMode('response');
                          }}
                        >
                          <div className="lab-endpoint-item-top">
                            <span className={`http-badge ${endpoint.method.toLowerCase()}`}>
                              {endpoint.method}
                            </span>
                            <span className="lab-endpoint-name">{endpoint.name}</span>
                          </div>
                          <div className="lab-endpoint-path">{endpoint.path}</div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="lab-sidebar-note">
                    <Info size={14} strokeWidth={2} />
                    <span>Real production payloads from Khalil&apos;s active project microservices.</span>
                  </div>
                </div>

                {/* Right Main Area: Interactive Console */}
                <div className="lab-main-pane">
                  {/* Endpoint Request Bar */}
                  <div className="lab-request-bar">
                    <span className={`http-badge ${activeEndpoint.method.toLowerCase()}`}>
                      {activeEndpoint.method}
                    </span>
                    <span className="lab-request-url">{activeEndpoint.path}</span>
                    <button
                      type="button"
                      className="lab-send-btn"
                      onClick={handleTriggerSend}
                      disabled={isSimulatingSend}
                    >
                      <Send size={13} strokeWidth={2} />
                      <span>{isSimulatingSend ? 'Executing...' : 'Execute'}</span>
                    </button>
                  </div>

                  {/* Context Info */}
                  <div className="lab-context-banner">
                    <span className="lab-context-service">{activeEndpoint.service}</span>
                    <p className="lab-context-desc">{activeEndpoint.description}</p>
                  </div>

                  {/* Sub-Tabs: Response / Headers / Payload / cURL */}
                  <div className="lab-subnav-bar">
                    <div className="lab-subnav-left">
                      <button
                        type="button"
                        className={`lab-subnav-btn ${apiViewMode === 'response' ? 'active' : ''}`}
                        onClick={() => setApiViewMode('response')}
                      >
                        Response Body
                      </button>
                      <button
                        type="button"
                        className={`lab-subnav-btn ${apiViewMode === 'headers' ? 'active' : ''}`}
                        onClick={() => setApiViewMode('headers')}
                      >
                        Response Headers
                      </button>
                      {activeEndpoint.requestBody && (
                        <button
                          type="button"
                          className={`lab-subnav-btn ${apiViewMode === 'payload' ? 'active' : ''}`}
                          onClick={() => setApiViewMode('payload')}
                        >
                          Request Payload
                        </button>
                      )}
                      <button
                        type="button"
                        className={`lab-subnav-btn ${apiViewMode === 'curl' ? 'active' : ''}`}
                        onClick={() => setApiViewMode('curl')}
                      >
                        cURL Command
                      </button>
                    </div>

                    <div className="lab-subnav-right">
                      <span className="lab-metric-pill">
                        Status: <strong className="color-success">{activeEndpoint.responseStatus} {activeEndpoint.statusText}</strong>
                      </span>
                      <span className="lab-metric-pill">
                        Latency: <strong>{activeEndpoint.latencyMs}ms</strong>
                      </span>
                      <span className="lab-metric-pill">
                        Size: <strong>{activeEndpoint.sizeBytes}</strong>
                      </span>
                      <button
                        type="button"
                        className="lab-copy-btn"
                        onClick={() => {
                          const textToCopy =
                            apiViewMode === 'response'
                              ? activeEndpoint.responseBody
                              : apiViewMode === 'curl'
                              ? activeEndpoint.curlCommand
                              : apiViewMode === 'payload'
                              ? activeEndpoint.requestBody || ''
                              : JSON.stringify(activeEndpoint.responseHeaders, null, 2);
                          handleCopy(textToCopy);
                        }}
                      >
                        {isCopied ? <Check size={13} strokeWidth={2} /> : <Copy size={13} strokeWidth={2} />}
                        <span>{isCopied ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Code Screen */}
                  <div className="lab-code-viewer">
                    {apiViewMode === 'response' && (
                      <pre className="lab-code-block">
                        <code>{activeEndpoint.responseBody}</code>
                      </pre>
                    )}

                    {apiViewMode === 'headers' && (
                      <div className="lab-headers-table">
                        {Object.entries(activeEndpoint.responseHeaders).map(([key, val]) => (
                          <div key={key} className="lab-header-row">
                            <span className="header-key">{key}:</span>
                            <span className="header-val">{val}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {apiViewMode === 'payload' && (
                      <pre className="lab-code-block">
                        <code>{activeEndpoint.requestBody}</code>
                      </pre>
                    )}

                    {apiViewMode === 'curl' && (
                      <pre className="lab-code-block">
                        <code>{activeEndpoint.curlCommand}</code>
                      </pre>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ============================================================ */}
            {/* 2. DATABASE SCHEMAS                                          */}
            {/* ============================================================ */}
            {activeTab === 'database' && (
              <motion.div
                key="db-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="lab-grid-layout"
              >
                {/* Table Picker */}
                <div className="lab-sidebar">
                  <div className="lab-sidebar-title">Relational Tables</div>
                  <div className="lab-endpoint-list">
                    {DB_TABLES.map((table) => {
                      const isSelected = table.id === activeTable.id;
                      return (
                        <button
                          key={table.id}
                          type="button"
                          className={`lab-endpoint-item ${isSelected ? 'active' : ''}`}
                          onClick={() => {
                            setSelectedDbTableId(table.id);
                            setDbSubTab('schema');
                          }}
                        >
                          <div className="lab-endpoint-item-top">
                            <Database size={13} strokeWidth={2} style={{ color: 'var(--text-accent)' }} />
                            <span className="lab-endpoint-name" style={{ fontFamily: 'monospace' }}>
                              {table.name}
                            </span>
                          </div>
                          <div className="lab-endpoint-path">{table.project}</div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="lab-sidebar-note">
                    <ShieldCheck size={14} strokeWidth={2} />
                    <span>PostgreSQL normalized schemas with explicit foreign keys and check invariants.</span>
                  </div>
                </div>

                {/* Table Details */}
                <div className="lab-main-pane">
                  <div className="lab-context-banner">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span className="lab-context-service" style={{ fontFamily: 'monospace', fontSize: '1rem' }}>
                        public.{activeTable.name}
                      </span>
                      <span className="tag-pill" style={{ margin: 0 }}>{activeTable.project}</span>
                    </div>
                    <p className="lab-context-desc">{activeTable.purpose}</p>
                  </div>

                  {/* Schema Sub Tabs */}
                  <div className="lab-subnav-bar">
                    <div className="lab-subnav-left">
                      <button
                        type="button"
                        className={`lab-subnav-btn ${dbSubTab === 'schema' ? 'active' : ''}`}
                        onClick={() => setDbSubTab('schema')}
                      >
                        Columns &amp; Types ({activeTable.columns.length})
                      </button>
                      <button
                        type="button"
                        className={`lab-subnav-btn ${dbSubTab === 'indexes' ? 'active' : ''}`}
                        onClick={() => setDbSubTab('indexes')}
                      >
                        Indexes &amp; Performance ({activeTable.indexes.length})
                      </button>
                      <button
                        type="button"
                        className={`lab-subnav-btn ${dbSubTab === 'query' ? 'active' : ''}`}
                        onClick={() => setDbSubTab('query')}
                      >
                        SQL Query &amp; Execution Plan
                      </button>
                    </div>

                    <div className="lab-subnav-right">
                      <button
                        type="button"
                        className="lab-copy-btn"
                        onClick={() => {
                          const text =
                            dbSubTab === 'query'
                              ? activeTable.sampleQuery.sql
                              : dbSubTab === 'indexes'
                              ? activeTable.indexes.map((i) => i.definition).join('\n')
                              : activeTable.columns.map((c) => `${c.name} ${c.type} ${c.constraints}`).join('\n');
                          handleCopy(text);
                        }}
                      >
                        {isCopied ? <Check size={13} strokeWidth={2} /> : <Copy size={13} strokeWidth={2} />}
                        <span>{isCopied ? 'Copied' : 'Copy SQL'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Table Content */}
                  <div className="lab-code-viewer" style={{ padding: dbSubTab === 'query' ? '0' : '16px' }}>
                    {dbSubTab === 'schema' && (
                      <div className="schema-table-wrap">
                        <table className="schema-table">
                          <thead>
                            <tr>
                              <th>Column</th>
                              <th>Type</th>
                              <th>Constraints</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {activeTable.columns.map((col) => (
                              <tr key={col.name}>
                                <td className="col-name">{col.name}</td>
                                <td className="col-type">{col.type}</td>
                                <td className="col-constraint">{col.constraints}</td>
                                <td className="col-desc">{col.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {dbSubTab === 'indexes' && (
                      <div className="indexes-list">
                        {activeTable.indexes.map((idx) => (
                          <div key={idx.name} className="index-item-card">
                            <div className="index-item-header">
                              <span className="index-name">{idx.name}</span>
                              <span className="index-tag">B-Tree / GIN</span>
                            </div>
                            <pre className="index-sql"><code>{idx.definition}</code></pre>
                            <p className="index-reason">
                              <strong>Architectural Rationale:</strong> {idx.reason}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {dbSubTab === 'query' && (
                      <div style={{ padding: '20px' }}>
                        <div style={{ marginBottom: '12px' }}>
                          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-accent)', textTransform: 'uppercase' }}>
                            {activeTable.sampleQuery.title}
                          </span>
                        </div>
                        <pre className="lab-code-block" style={{ maxHeight: '240px' }}>
                          <code>{activeTable.sampleQuery.sql}</code>
                        </pre>
                        <div style={{ marginTop: '16px', padding: '14px 18px', backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                          <p style={{ fontSize: '0.88rem', margin: '0 0 8px 0', color: 'var(--text-body)' }}>
                            {activeTable.sampleQuery.explanation}
                          </p>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary-accent)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Activity size={12} strokeWidth={2} />
                            <span><strong>Execution Plan:</strong> {activeTable.sampleQuery.planNote}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ============================================================ */}
            {/* 3. CONTAINERS & COMPOSE                                      */}
            {/* ============================================================ */}
            {activeTab === 'containers' && (
              <motion.div
                key="containers-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="lab-grid-layout"
              >
                {/* File Picker */}
                <div className="lab-sidebar">
                  <div className="lab-sidebar-title">Configuration Files</div>
                  <div className="lab-endpoint-list">
                    {CONTAINER_FILES.map((file) => {
                      const isSelected = file.id === activeContainer.id;
                      return (
                        <button
                          key={file.id}
                          type="button"
                          className={`lab-endpoint-item ${isSelected ? 'active' : ''}`}
                          onClick={() => setSelectedContainerId(file.id)}
                        >
                          <div className="lab-endpoint-item-top">
                            <Box size={13} strokeWidth={2} style={{ color: 'var(--text-accent)' }} />
                            <span className="lab-endpoint-name" style={{ fontFamily: 'monospace' }}>
                              {file.name}
                            </span>
                          </div>
                          <div className="lab-endpoint-path">{file.type.toUpperCase()}</div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="lab-sidebar-note">
                    <Lock size={14} strokeWidth={2} />
                    <span>Hardened against container escape with unprivileged users and dumb-init.</span>
                  </div>
                </div>

                {/* Main Code & Rationale */}
                <div className="lab-main-pane">
                  <div className="lab-context-banner">
                    <span className="lab-context-service">{activeContainer.name}</span>
                    <p className="lab-context-desc">{activeContainer.description}</p>
                  </div>

                  {/* Highlights Callouts */}
                  <div className="lab-highlights-grid">
                    {activeContainer.highlights.map((hl) => (
                      <div key={hl.title} className="lab-highlight-item">
                        <div className="highlight-title">
                          <Check size={12} strokeWidth={2} />
                          <span>{hl.title}</span>
                        </div>
                        <div className="highlight-hint">{hl.lineHint}</div>
                        <div className="highlight-desc">{hl.rationale}</div>
                      </div>
                    ))}
                  </div>

                  {/* Code View */}
                  <div className="lab-subnav-bar">
                    <span style={{ fontSize: '0.82rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                      {activeContainer.name}
                    </span>
                    <button
                      type="button"
                      className="lab-copy-btn"
                      onClick={() => handleCopy(activeContainer.code)}
                    >
                      {isCopied ? <Check size={13} strokeWidth={2} /> : <Copy size={13} strokeWidth={2} />}
                      <span>{isCopied ? 'Copied' : 'Copy File'}</span>
                    </button>
                  </div>

                  <div className="lab-code-viewer">
                    <pre className="lab-code-block" style={{ maxHeight: '360px' }}>
                      <code>{activeContainer.code}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ============================================================ */}
            {/* 4. CI/CD PIPELINE VISUALISER                                 */}
            {/* ============================================================ */}
            {activeTab === 'cicd' && (
              <motion.div
                key="cicd-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* Visual Pipeline Flow Header */}
                <div className="cicd-pipeline-track">
                  {CICD_STAGES.map((stage, idx) => {
                    const isSelected = stage.id === activeCiStage.id;
                    const hasNext = idx < CICD_STAGES.length - 1;

                    return (
                      <React.Fragment key={stage.id}>
                        <button
                          type="button"
                          className={`cicd-stage-pill ${isSelected ? 'active' : ''}`}
                          onClick={() => setSelectedCiStageId(stage.id)}
                        >
                          <div className="cicd-stage-top">
                            <span className="cicd-status-icon">✓</span>
                            <span className="cicd-duration">{stage.duration}</span>
                          </div>
                          <div className="cicd-stage-name">{stage.name}</div>
                        </button>

                        {hasNext && (
                          <div className="cicd-arrow-divider">
                            <ArrowRight size={14} strokeWidth={2} />
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* Stage Deep Dive Panel */}
                <div className="cicd-stage-detail-grid">
                  <div className="cicd-yaml-panel">
                    <div className="lab-subnav-bar">
                      <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>
                        Workflow Definition (.github/workflows/ci.yml)
                      </span>
                      <button
                        type="button"
                        className="lab-copy-btn"
                        onClick={() => handleCopy(activeCiStage.yamlSnippet)}
                      >
                        {isCopied ? <Check size={13} strokeWidth={2} /> : <Copy size={13} strokeWidth={2} />}
                        <span>{isCopied ? 'Copied' : 'Copy Step'}</span>
                      </button>
                    </div>
                    <pre className="lab-code-block" style={{ maxHeight: '280px' }}>
                      <code>{activeCiStage.yamlSnippet}</code>
                    </pre>
                  </div>

                  <div className="cicd-logs-panel">
                    <div className="lab-subnav-bar">
                      <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>
                        Execution Logs ({activeCiStage.duration})
                      </span>
                      <span className="color-success" style={{ fontSize: '0.78rem', fontWeight: 700 }}>
                        EXIT 0 PASSED
                      </span>
                    </div>
                    <div className="cicd-logs-viewer">
                      {activeCiStage.logOutput.map((line, i) => (
                        <div key={i} className="cicd-log-line">
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ============================================================ */}
            {/* 5. KUBERNETES MANIFESTS                                      */}
            {/* ============================================================ */}
            {activeTab === 'kubernetes' && (
              <motion.div
                key="k8s-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="lab-grid-layout"
              >
                {/* Manifest Picker */}
                <div className="lab-sidebar">
                  <div className="lab-sidebar-title">Cluster Resources</div>
                  <div className="lab-endpoint-list">
                    {K8S_MANIFESTS.map((manifest) => {
                      const isSelected = manifest.id === activeK8s.id;
                      return (
                        <button
                          key={manifest.id}
                          type="button"
                          className={`lab-endpoint-item ${isSelected ? 'active' : ''}`}
                          onClick={() => setSelectedK8sId(manifest.id)}
                        >
                          <div className="lab-endpoint-item-top">
                            <Cloud size={13} strokeWidth={2} style={{ color: 'var(--text-accent)' }} />
                            <span className="lab-endpoint-name" style={{ fontFamily: 'monospace' }}>
                              {manifest.kind}
                            </span>
                          </div>
                          <div className="lab-endpoint-path">{manifest.name}</div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="lab-sidebar-note">
                    <ShieldCheck size={14} strokeWidth={2} />
                    <span>Configured for Minikube, AWS EKS, and bare-metal Kubernetes clusters.</span>
                  </div>
                </div>

                {/* Manifest Code & Highlights */}
                <div className="lab-main-pane">
                  <div className="lab-context-banner">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span className="lab-context-service">{activeK8s.kind} &bull; {activeK8s.name}</span>
                      <span className="tag-pill" style={{ margin: 0 }}>Namespace: production</span>
                    </div>
                    <p className="lab-context-desc">{activeK8s.description}</p>
                  </div>

                  <div className="lab-highlights-grid">
                    {activeK8s.highlights.map((hl) => (
                      <div key={hl.title} className="lab-highlight-item">
                        <div className="highlight-title">
                          <Check size={12} strokeWidth={2} />
                          <span>{hl.title}</span>
                        </div>
                        <div className="highlight-hint">{hl.lineHint}</div>
                        <div className="highlight-desc">{hl.rationale}</div>
                      </div>
                    ))}
                  </div>

                  <div className="lab-subnav-bar">
                    <span style={{ fontSize: '0.82rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                      {activeK8s.name}
                    </span>
                    <button
                      type="button"
                      className="lab-copy-btn"
                      onClick={() => handleCopy(activeK8s.yaml)}
                    >
                      {isCopied ? <Check size={13} strokeWidth={2} /> : <Copy size={13} strokeWidth={2} />}
                      <span>{isCopied ? 'Copied' : 'Copy Manifest'}</span>
                    </button>
                  </div>

                  <div className="lab-code-viewer">
                    <pre className="lab-code-block" style={{ maxHeight: '360px' }}>
                      <code>{activeK8s.yaml}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
