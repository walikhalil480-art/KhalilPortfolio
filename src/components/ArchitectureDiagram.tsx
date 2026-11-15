import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Server,
  Database,
  Cloud,
  ShieldCheck,
  Terminal,
  Cpu,
  ArrowRight,
  Info,
  CheckCircle2,
  HardDrive
} from 'lucide-react';

export interface ArchitectureNode {
  id: string;
  label: string;
  category: 'client' | 'api' | 'service' | 'data' | 'infra' | 'queue';
  technology: string;
  protocol?: string;
  status: 'Implemented' | 'Active Production' | 'Planned Extension';
  summary: string;
  details: string[];
}

export interface ArchitectureData {
  title: string;
  systemName: string;
  overview: string;
  nodes: ArchitectureNode[];
  connections: { from: string; to: string; label: string }[];
}

interface Props {
  data: ArchitectureData;
}

export const ArchitectureDiagram: React.FC<Props> = ({ data }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(data.nodes[0]?.id || '');

  const selectedNode = data.nodes.find((n) => n.id === selectedNodeId) || data.nodes[0];

  const getCategoryIcon = (category: ArchitectureNode['category']) => {
    switch (category) {
      case 'client':
        return <Layers size={18} strokeWidth={1.8} />;
      case 'api':
        return <Cpu size={18} strokeWidth={1.8} />;
      case 'service':
        return <Server size={18} strokeWidth={1.8} />;
      case 'data':
        return <Database size={18} strokeWidth={1.8} />;
      case 'queue':
        return <HardDrive size={18} strokeWidth={1.8} />;
      case 'infra':
        return <Cloud size={18} strokeWidth={1.8} />;
      default:
        return <Server size={18} strokeWidth={1.8} />;
    }
  };

  return (
    <div className="arch-diagram-card">
      <div className="arch-header">
        <div>
          <span className="arch-kicker">Interactive System Blueprint</span>
          <h3 className="arch-title">{data.title}</h3>
          <p className="arch-overview">{data.overview}</p>
        </div>
        <div className="arch-badge">
          <Terminal size={14} strokeWidth={2} />
          <span>Click any node to inspect data flow</span>
        </div>
      </div>

      <div className="arch-diagram-grid">
        {/* Left Side: Topology Pipeline */}
        <div className="arch-topology-column">
          <div className="arch-nodes-flow">
            {data.nodes.map((node, index) => {
              const isSelected = node.id === selectedNode.id;
              const hasNext = index < data.nodes.length - 1;

              return (
                <React.Fragment key={node.id}>
                  <motion.button
                    type="button"
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`arch-node-btn ${isSelected ? 'active' : ''}`}
                    whileHover={{ scale: 1.01, x: 2 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="arch-node-icon">{getCategoryIcon(node.category)}</div>
                    <div className="arch-node-content">
                      <div className="arch-node-tech">{node.technology}</div>
                      <div className="arch-node-name">{node.label}</div>
                    </div>
                    <div className="arch-node-status-tag">{node.status}</div>
                  </motion.button>

                  {hasNext && (
                    <div className="arch-node-connector">
                      <div className="arch-connector-line" />
                      <div className="arch-connector-meta">
                        {data.connections[index]?.label || 'Data Stream'}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Right Side: Component Deep-Dive Inspection Panel */}
        <div className="arch-inspection-column">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="arch-inspect-panel"
            >
              <div className="arch-inspect-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div className="capability-icon-badge" style={{ margin: 0, width: '38px', height: '38px' }}>
                    {getCategoryIcon(selectedNode.category)}
                  </div>
                  <div>
                    <span className="arch-inspect-cat">{selectedNode.technology}</span>
                    <h4 className="arch-inspect-title">{selectedNode.label}</h4>
                  </div>
                </div>

                <span
                  className={`arch-inspect-status ${
                    selectedNode.status === 'Active Production'
                      ? 'prod'
                      : selectedNode.status === 'Implemented'
                      ? 'impl'
                      : 'plan'
                  }`}
                >
                  {selectedNode.status}
                </span>
              </div>

              {selectedNode.protocol && (
                <div className="arch-protocol-row">
                  <span className="arch-proto-label">Protocol / Ingress:</span>
                  <code className="arch-proto-code">{selectedNode.protocol}</code>
                </div>
              )}

              <p className="arch-inspect-summary">{selectedNode.summary}</p>

              <div className="arch-inspect-specs">
                <h5 className="arch-specs-heading">Architectural Specifications &amp; Guarantees</h5>
                <ul className="arch-specs-list">
                  {selectedNode.details.map((detail, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={15} strokeWidth={2} style={{ color: 'var(--text-accent)', flexShrink: 0, marginTop: '3px' }} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
