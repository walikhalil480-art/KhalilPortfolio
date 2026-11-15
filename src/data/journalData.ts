export interface JournalArticleData {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  publishedDate: string;
  readingTime: string;
  excerpt: string;
  tableOfContents: { id: string; title: string }[];
  sections: {
    id: string;
    heading: string;
    content: string[];
    codeBlock?: {
      language: string;
      filename?: string;
      code: string;
    };
    callout?: {
      type: 'tip' | 'note' | 'important';
      text: string;
    };
  }[];
}

export const JOURNAL_ARTICLES: JournalArticleData[] = [
  {
    slug: 'offline-resilient-pos-architecture',
    title: 'Designing Local-First Offline-Resilient POS Architecture',
    subtitle: 'How to survive network disconnects in retail checkout terminals using append-only signed logs and SQLite WASM.',
    category: 'Distributed Systems & Client Architecture',
    publishedDate: 'October 2024',
    readingTime: '7 min read',
    excerpt:
      'Retail checkouts cannot wait for network timeouts. When the connection drops, checkout registers must continue scanning, calculating taxes, and dispensing receipts without interruption. Here is how we engineered TillPro to operate deterministically offline.',
    tableOfContents: [
      { id: 'the-cost-of-latency', title: 'The Cost of Latency in Physical Retail' },
      { id: 'local-first-storage', title: 'Local-First Storage with SQLite WASM & IndexedDB' },
      { id: 'signed-transaction-log', title: 'Append-Only Cryptographic Transaction Logs' },
      { id: 'conflict-resolution', title: 'State Synchronization & Inventory Re-ordering' },
      { id: 'architectural-takeaways', title: 'Architectural Takeaways' }
    ],
    sections: [
      {
        id: 'the-cost-of-latency',
        heading: 'The Cost of Latency in Physical Retail',
        content: [
          'In e-commerce, a 300ms network roundtrip is acceptable. In a bustling specialty grocery or boutique store with an eight-person queue on a Saturday afternoon, any network hiccup or DNS timeout halts checkout entirely, frustrating customers and embarrassing staff.',
          'Most point-of-sale systems fail because they treat the browser as a dumb terminal making REST requests to a remote server. If the Wi-Fi drops or the cloud API experiences degraded latency, the terminal spinner spins indefinitely.',
          'To build TillPro, we inverted this mental model: the client register is the authoritative engine for all active checkout mutations, and the cloud is an asynchronous synchronization destination.'
        ]
      },
      {
        id: 'local-first-storage',
        heading: 'Local-First Storage with SQLite WASM & IndexedDB',
        content: [
          'The entire catalog of active product SKUs, tax calculation matrices, and barcode indices are mirrored in client-side memory using SQLite compiled to WebAssembly (backed by an IndexedDB virtual file system).',
          'When a cashier scans a barcode with a physical USB or Bluetooth scanner, the keyboard emulation event is caught by a dedicated background Web Worker, querying the local SQLite database in under 2ms.'
        ],
        codeBlock: {
          language: 'typescript',
          filename: 'workers/barcodeScannerWorker.ts',
          code: `// Process hardware barcode signals without touching main UI thread
self.onmessage = async (event: MessageEvent<{ barcode: string }>) => {
  const { barcode } = event.data;
  const startTime = performance.now();

  // Query local SQLite WASM database
  const query = \`
    SELECT id, sku, title, price_cents, tax_category 
    FROM catalog_items 
    WHERE barcode = ? OR sku = ? 
    LIMIT 1;
  \`;
  
  const product = await db.queryOne(query, [barcode, barcode]);
  const duration = performance.now() - startTime;

  if (product) {
    self.postMessage({
      type: 'PRODUCT_RESOLVED',
      payload: product,
      latencyMs: duration
    });
  } else {
    self.postMessage({ type: 'BARCODE_NOT_FOUND', barcode });
  }
};`
        }
      },
      {
        id: 'signed-transaction-log',
        heading: 'Append-Only Cryptographic Transaction Logs',
        content: [
          'Every completed receipt transaction generates an immutable block containing the basket contents, calculated sales tax, payment authorization token, and timestamp.',
          'This payload is cryptographically signed using the terminal’s private key (stored in secure hardware keystore or browser subtle crypto API) and appended to a persistent IndexedDB queue.',
          'Even if the terminal is forcefully powered down or the browser tab is closed, the uncommitted transaction queue is preserved.'
        ],
        callout: {
          type: 'important',
          text: 'Transactions are never overwritten or mutated in place. All changes—including item voids and returns—are recorded as discrete reversal events, preserving double-entry accounting integrity.'
        }
      },
      {
        id: 'conflict-resolution',
        heading: 'State Synchronization & Inventory Re-ordering',
        content: [
          'When network connectivity is restored, the terminal sync orchestrator initiates a streaming WebSocket connection to the cloud backend.',
          'Transactions are replayed in exact chronological sequence. The cloud API applies row-level locking (SELECT ... FOR UPDATE) on inventory tables in PostgreSQL to decrement stock levels deterministically.',
          'In rare edge cases where two offline terminals simultaneously sold the last unit of a physical item, the backend commits both financial sales and emits an immediate backorder notification to store inventory managers.'
        ],
        codeBlock: {
          language: 'typescript',
          filename: 'sync/reconciliationPipeline.ts',
          code: `export async function replayOfflineBatch(
  clientBatch: SignedTransactionBatch,
  pgClient: PoolClient
): Promise<BatchReconciliationResult> {
  await pgClient.query('BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ');

  try {
    for (const tx of clientBatch.transactions) {
      // 1. Verify cryptographic signature
      verifyTerminalSignature(tx, clientBatch.terminalPublicKey);

      // 2. Insert into authoritative double-entry journal
      await recordJournalEntry(pgClient, tx);

      // 3. Atomically decrement inventory with stock exhaustion checks
      for (const item of tx.lineItems) {
        await pgClient.query(
          \`UPDATE store_inventory 
           SET on_hand = on_hand - $1, updated_at = NOW() 
           WHERE store_id = $2 AND sku = $3\`,
          [item.quantity, tx.storeId, item.sku]
        );
      }
    }

    await pgClient.query('COMMIT');
    return { success: true, processedCount: clientBatch.transactions.length };
  } catch (error) {
    await pgClient.query('ROLLBACK');
    throw new ReconciliationError('Failed atomic replay', error);
  }
}`
        }
      },
      {
        id: 'architectural-takeaways',
        heading: 'Architectural Takeaways',
        content: [
          '1. Do not let unreliable networks dictate user experience. Treat the network as an asynchronous synchronization medium rather than a runtime dependency.',
          '2. Web Workers are essential for keeping UI interaction snappy when doing heavy database scans and cryptography in the browser.',
          '3. Append-only architectures eliminate race conditions and make auditing trivial.'
        ]
      }
    ]
  },
  {
    slug: 'eliminating-cls-in-digital-readers',
    title: 'Eliminating Cumulative Layout Shift in Typographic Digital Readers',
    subtitle: 'Dynamic font-metric reservation, decoupled AST chunking, and layout stability in Understory Books.',
    category: 'Performance Engineering & Typography',
    publishedDate: 'September 2024',
    readingTime: '6 min read',
    excerpt:
      'Reading long-form prose on the web requires optical stillness. If the text jumps 14 pixels when a custom serif font hydrates, the reader’s immersion is broken. Here is how we engineered 0.00 CLS across multi-hundred-page manuscripts.',
    tableOfContents: [
      { id: 'the-reflow-problem', title: 'The Problem: Web Font Hydration Jitter' },
      { id: 'font-metric-overrides', title: 'Font Metric Override Pre-Calculation' },
      { id: 'ast-virtualization', title: 'Decoupled AST Virtualization' },
      { id: 'benchmarks', title: 'Production Benchmarks & Results' }
    ],
    sections: [
      {
        id: 'the-reflow-problem',
        heading: 'The Problem: Web Font Hydration Jitter',
        content: [
          'When designing Understory Books, our goal was to bring the tactile tranquility of printed literature to digital screens. Our primary typeface is Cormorant Garamond, a high-contrast serif font with distinctive ascenders, delicate serifs, and tall lowercase x-heights.',
          'By default, browsers display a fallback system serif (such as Georgia or Times New Roman) while downloading web fonts. When the 45KB woff2 file finishes streaming, the browser swaps fonts. Because Georgia and Cormorant Garamond have differing letter-spacings and line-heights, every paragraph shifts vertically—often by tens of pixels. This results in jarring Cumulative Layout Shift (CLS).'
        ]
      },
      {
        id: 'font-metric-overrides',
        heading: 'Font Metric Override Pre-Calculation',
        content: [
          'We solved this by computing the exact metric differentials between our fallback font and Cormorant Garamond using modern CSS `@font-face` descriptors: `ascent-override`, `descent-override`, and `size-adjust`.',
          'This forces the system Georgia font to match the exact vertical silhouette of Cormorant Garamond prior to download. When the custom font swaps in, there is zero pixel movement.'
        ],
        codeBlock: {
          language: 'css',
          filename: 'typography/fontMetrics.css',
          code: `/* Calibrated fallback font matching Cormorant Garamond geometry */
@font-face {
  font-family: 'Cormorant-Fallback';
  src: local('Georgia');
  /* Exact metric overrides computed from Cormorant Garamond OTF tables */
  ascent-override: 92.5%;
  descent-override: 26.8%;
  line-gap-override: 0%;
  size-adjust: 104.2%;
}

:root {
  --font-editorial: 'Cormorant Garamond', 'Cormorant-Fallback', serif;
}`
        }
      },
      {
        id: 'ast-virtualization',
        heading: 'Decoupled AST Virtualization',
        content: [
          'Rendering a 400-page book directly into the DOM creates tens of thousands of DOM nodes, causing memory bloat and scroll stuttering.',
          'Instead, our parsing engine (eBaro) deconstructs manuscripts into normalized Abstract Syntax Tree (AST) nodes. A custom React virtualization hook calculates the reader viewport height and only mounts paragraphs currently within visible scrolling thresholds plus an optical 300px buffer above and below.'
        ],
        codeBlock: {
          language: 'typescript',
          filename: 'hooks/useTypographicVirtualizer.ts',
          code: `export function useTypographicVirtualizer({
  nodes,
  viewportHeight,
  scrollTop
}: VirtualizerOptions) {
  // Pre-calculated paragraph height estimates based on word count & line length
  const visibleRange = useMemo(() => {
    let accumulatedOffset = 0;
    let startIndex = 0;
    let endIndex = nodes.length - 1;

    for (let i = 0; i < nodes.length; i++) {
      const nodeHeight = nodes[i].estimatedHeight;
      if (accumulatedOffset + nodeHeight >= scrollTop - 300 && startIndex === 0) {
        startIndex = Math.max(0, i - 1);
      }
      if (accumulatedOffset >= scrollTop + viewportHeight + 300) {
        endIndex = i;
        break;
      }
      accumulatedOffset += nodeHeight;
    }

    return { startIndex, endIndex, totalHeight: accumulatedOffset };
  }, [nodes, viewportHeight, scrollTop]);

  return visibleRange;
}`
        }
      },
      {
        id: 'benchmarks',
        heading: 'Production Benchmarks & Results',
        content: [
          'Through calibrated font metrics and windowed DOM virtualization, Understory Books achieved consistent 0.00 Cumulative Layout Shift across Google Chrome Lighthouse audits on both desktop and throttled mobile devices.',
          'More importantly, readers report that the interface feels calm, dignified, and visually stable.'
        ]
      }
    ]
  },
  {
    slug: 'zero-downtime-kubernetes-gitops',
    title: 'Zero-Downtime Rolling Deployments with GitOps & Terraform',
    subtitle: 'Declarative cloud orchestration, multi-AZ VPC isolation, and automated canary verification.',
    category: 'Cloud Engineering & Infrastructure',
    publishedDate: 'August 2024',
    readingTime: '8 min read',
    excerpt:
      'A deployment should be a non-event. If releasing a new microservice version requires late-night maintenance windows or brief service dropouts, the architecture is fragile. Here is how we orchestrated zero-downtime deployments with code.',
    tableOfContents: [
      { id: 'declarative-gitops', title: 'GitOps as the Single Source of Truth' },
      { id: 'terraform-isolation', title: 'Multi-AZ VPC Isolation via Terraform' },
      { id: 'rolling-readiness', title: 'Kubernetes Pod Readiness & Connection Draining' },
      { id: 'observability-canary', title: 'Automated Rollback & Observability' }
    ],
    sections: [
      {
        id: 'declarative-gitops',
        heading: 'GitOps as the Single Source of Truth',
        content: [
          'In modern cloud engineering, manual changes in cloud provider web consoles are technical debt. Any configuration made by clicking in a web GUI cannot be peer-reviewed, tracked, or reproduced in disaster recovery scenarios.',
          'We codified our entire infrastructure into a GitOps repository. Every change to database sizes, Kubernetes deployments, ingress routes, or environment secrets begins with a signed Git commit and a Pull Request.'
        ]
      },
      {
        id: 'terraform-isolation',
        heading: 'Multi-AZ VPC Isolation via Terraform',
        content: [
          'Terraform provisions our AWS virtual private cloud spanning three Availability Zones. Public subnets host application load balancers and NAT gateways, while Kubernetes worker nodes and PostgreSQL databases reside in private subnets without public internet access.'
        ],
        codeBlock: {
          language: 'hcl',
          filename: 'terraform/vpc/main.tf',
          code: `module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.1.0"

  name = "production-atelier-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["eu-west-1a", "eu-west-1b", "eu-west-1c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

  enable_nat_gateway     = true
  single_nat_gateway     = false
  one_nat_gateway_per_az = true
  enable_dns_hostnames   = true

  tags = {
    Environment = "production"
    ManagedBy   = "Terraform"
  }
}`
        }
      },
      {
        id: 'rolling-readiness',
        heading: 'Kubernetes Pod Readiness & Connection Draining',
        content: [
          'Zero-downtime rolling updates require two components: ensuring new pods are genuinely ready to receive requests before receiving traffic, and ensuring terminating pods finish active HTTP connections before being killed.',
          'We configure strict `readinessProbe` and `livenessProbe` endpoints, coupled with `preStop` sleep lifecycle hooks to allow kube-proxy and Cilium CNI to update iptables rules before SIGTERM is sent.'
        ],
        codeBlock: {
          language: 'yaml',
          filename: 'k8s/deployment.yaml',
          code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: publishing-api
spec:
  replicas: 4
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 0
  template:
    spec:
      containers:
      - name: api
        image: ghcr.io/walikhalil/publishing-api:2.4.1
        lifecycle:
          preStop:
            exec:
              command: ["/bin/sh", "-c", "sleep 15"]
        readinessProbe:
          httpGet:
            path: /healthz/ready
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 3
        livenessProbe:
          httpGet:
            path: /healthz/live
            port: 8080
          periodSeconds: 10`
        }
      },
      {
        id: 'observability-canary',
        heading: 'Automated Rollback & Observability',
        content: [
          'Our Prometheus and Grafana alerting stack monitors HTTP 5xx error budgets and p99 latency during releases. If an error spike exceeds 0.5% within 3 minutes of a rollout, deployment operators receive instant Slack notifications while automated rollback triggers revert the deployment to the last known good replica set.'
        ]
      }
    ]
  }
];
