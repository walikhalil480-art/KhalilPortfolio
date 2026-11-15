import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';

interface CommandOutput {
  id: string;
  command: string;
  response: React.ReactNode;
}

export const TerminalModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 'init',
      command: 'system.init',
      response: (
        <div>
          <div style={{ color: '#4ade80', fontWeight: 600 }}>Khalil Wali — Engineering Shell v2.4.0</div>
          <div style={{ color: '#9ca3af', fontSize: '0.82rem', marginTop: '2px' }}>
            Type <span style={{ color: '#fbbf24' }}>help</span> to view available operations or navigate via CLI.
          </div>
        </div>
      )
    }
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Global key listener for ~ or `
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  const handleExecute = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputVal.trim();
    if (!trimmed) return;

    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);
    setInputVal('');

    const parts = trimmed.toLowerCase().split(' ');
    const cmd = parts[0];
    const arg = parts[1];

    let responseNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        responseNode = (
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '4px', fontSize: '0.85rem' }}>
            <span style={{ color: '#fbbf24' }}>about</span>
            <span style={{ color: '#d1d5db' }}>Engineering focus, philosophy, and background</span>
            <span style={{ color: '#fbbf24' }}>projects</span>
            <span style={{ color: '#d1d5db' }}>List flagship systems &amp; case studies</span>
            <span style={{ color: '#fbbf24' }}>goto &lt;route&gt;</span>
            <span style={{ color: '#d1d5db' }}>Navigate to: home, projects, resume, journal, contact</span>
            <span style={{ color: '#fbbf24' }}>skills</span>
            <span style={{ color: '#d1d5db' }}>List core technology proficiencies</span>
            <span style={{ color: '#fbbf24' }}>journal</span>
            <span style={{ color: '#d1d5db' }}>List technical essays and dispatches</span>
            <span style={{ color: '#fbbf24' }}>contact</span>
            <span style={{ color: '#d1d5db' }}>Display verified contact channels</span>
            <span style={{ color: '#fbbf24' }}>clear</span>
            <span style={{ color: '#d1d5db' }}>Clear terminal screen</span>
            <span style={{ color: '#fbbf24' }}>exit</span>
            <span style={{ color: '#d1d5db' }}>Close terminal shell</span>
          </div>
        );
        break;

      case 'about':
        responseNode = (
          <div style={{ color: '#e5e7eb', fontSize: '0.85rem', lineHeight: 1.5 }}>
            <div style={{ fontWeight: 600, color: '#4ade80' }}>Khalil Wali &bull; Senior Full-Stack &amp; Systems Architect</div>
            <div style={{ marginTop: '4px' }}>
              6+ years engineering distributed backends, offline-first client architectures, and zero-layout-shift editorial interfaces. Based in Mogadishu, Somalia &mdash; operating globally.
            </div>
          </div>
        );
        break;

      case 'projects':
        responseNode = (
          <div style={{ fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div>
              <span style={{ color: '#fbbf24', fontWeight: 600 }}>1. Understory Books &amp; eBaro</span> &mdash;{' '}
              <span style={{ color: '#9ca3af' }}>Typographic Reader &amp; Publishing CMS (0.00 CLS)</span>
            </div>
            <div>
              <span style={{ color: '#fbbf24', fontWeight: 600 }}>2. TillPro POS</span> &mdash;{' '}
              <span style={{ color: '#9ca3af' }}>Offline-Resilient Retail Point of Sale</span>
            </div>
            <div>
              <span style={{ color: '#fbbf24', fontWeight: 600 }}>3. Cloud Infrastructure</span> &mdash;{' '}
              <span style={{ color: '#9ca3af' }}>Terraform, Kubernetes &amp; GitOps Orchestration</span>
            </div>
            <div style={{ color: '#a3e635', marginTop: '4px' }}>
              Type <span style={{ color: '#ffffff' }}>goto understory</span> or <span style={{ color: '#ffffff' }}>goto tillpro</span> to inspect.
            </div>
          </div>
        );
        break;

      case 'skills':
        responseNode = (
          <div style={{ fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '4px', color: '#d1d5db' }}>
            <div><strong style={{ color: '#4ade80' }}>Languages:</strong> TypeScript, JavaScript (ESNext), Python, SQL</div>
            <div><strong style={{ color: '#4ade80' }}>Frontend:</strong> React 18, Next.js, Web Workers, IndexedDB, Vite</div>
            <div><strong style={{ color: '#4ade80' }}>Backend:</strong> Node.js, Express, Fastify, WebSockets, gRPC</div>
            <div><strong style={{ color: '#4ade80' }}>Databases:</strong> PostgreSQL, Redis, SQLite WASM, TimescaleDB</div>
            <div><strong style={{ color: '#4ade80' }}>Cloud:</strong> Docker, Kubernetes, Terraform, AWS, GitHub Actions</div>
          </div>
        );
        break;

      case 'journal':
        responseNode = (
          <div style={{ fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div>1. <span style={{ color: '#fbbf24' }}>offline-resilient-pos-architecture</span> &mdash; Local-first POS sync</div>
            <div>2. <span style={{ color: '#fbbf24' }}>eliminating-cls-in-digital-readers</span> &mdash; 0.00 CLS typography</div>
            <div>3. <span style={{ color: '#fbbf24' }}>zero-downtime-kubernetes-gitops</span> &mdash; Rolling deployments via code</div>
            <div style={{ color: '#a3e635', marginTop: '4px' }}>Type <span style={{ color: '#ffffff' }}>goto journal</span> to read.</div>
          </div>
        );
        break;

      case 'goto':
        if (!arg) {
          responseNode = <div style={{ color: '#f87171' }}>Usage: goto &lt;home|about|projects|resume|journal|contact|understory|tillpro|cloud&gt;</div>;
        } else {
          const validRoutes: Record<string, string> = {
            home: '/',
            about: '/about',
            projects: '/projects',
            resume: '/resume',
            cv: '/resume',
            journal: '/journal',
            contact: '/contact',
            understory: '/projects/understory',
            tillpro: '/projects/tillpro',
            cloud: '/projects/cloud'
          };
          if (validRoutes[arg]) {
            navigate(validRoutes[arg]);
            setIsOpen(false);
            return;
          } else {
            responseNode = <div style={{ color: '#f87171' }}>Route not recognized: {arg}. Available: {Object.keys(validRoutes).join(', ')}</div>;
          }
        }
        break;

      case 'contact':
        responseNode = (
          <div style={{ fontSize: '0.85rem', color: '#d1d5db', lineHeight: 1.5 }}>
            <div>Email: <a href="mailto:walikhalil480@gmail.com" style={{ color: '#4ade80' }}>walikhalil480@gmail.com</a></div>
            <div>GitHub: <a href="https://github.com/walikhalil480-art" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>github.com/walikhalil480-art</a></div>
            <div>LinkedIn: <a href="https://linkedin.com/in/khalil-wali" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>linkedin.com/in/khalil-wali</a></div>
          </div>
        );
        break;

      case 'sudo':
        responseNode = (
          <div style={{ color: '#f87171', fontSize: '0.85rem' }}>
            User &lsquo;guest&rsquo; is not in the sudoers file. This incident will be reported to Khalil.
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
      case 'quit':
        setIsOpen(false);
        return;

      default:
        responseNode = (
          <div style={{ color: '#f87171', fontSize: '0.85rem' }}>
            Command not found: <span style={{ color: '#ffffff' }}>{cmd}</span>. Type <span style={{ color: '#fbbf24' }}>help</span> for available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: trimmed,
        response: responseNode
      }
    ]);
  };

  const handleHistoryNav = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIdx === -1 ? cmdHistory.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInputVal(cmdHistory[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx === -1) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx >= cmdHistory.length) {
        setHistoryIdx(-1);
        setInputVal('');
      } else {
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="terminal-trigger-btn"
        aria-label="Open Interactive Engineering Terminal"
        title="Open Terminal Shell (Hotkey: ` or ~)"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 990,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 14px',
          backgroundColor: '#1b2620',
          color: '#4ade80',
          border: '1px solid #2e3e34',
          borderRadius: '24px',
          fontSize: '0.78rem',
          fontWeight: 600,
          fontFamily: 'var(--font-mono)',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
      >
        <TerminalIcon size={14} strokeWidth={2} />
        <span>CLI</span>
        <span style={{ fontSize: '0.68rem', opacity: 0.6, border: '1px solid #3b4e42', padding: '1px 5px', borderRadius: '4px' }}>~</span>
      </button>

      {/* Terminal Modal Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 20, 18, 0.75)',
              backdropFilter: 'blur(4px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.2 }}
              style={{
                width: '100%',
                maxWidth: '720px',
                height: '460px',
                backgroundColor: '#111815',
                border: '1px solid #28372d',
                borderRadius: '8px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                fontFamily: 'var(--font-mono)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Window Title Bar */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 16px',
                  backgroundColor: '#0d1310',
                  borderBottom: '1px solid #233027',
                  fontSize: '0.76rem',
                  color: '#9ca3af'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#eab308' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                  </div>
                  <span style={{ marginLeft: '6px', color: '#d1d5db', fontWeight: 600 }}>khalil@atelier: ~</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '0.7rem', color: '#6b7280' }}>ESC to close</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    style={{ background: 'transparent', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: 0 }}
                    aria-label="Close terminal"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* Terminal Logs Viewport */}
              <div
                style={{
                  flex: 1,
                  padding: '16px',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((item) => (
                  <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                      <span style={{ color: '#4ade80' }}>khalil@atelier:~$</span>
                      <span style={{ color: '#f3f4f6' }}>{item.command}</span>
                    </div>
                    <div style={{ paddingLeft: '16px' }}>{item.response}</div>
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Input Prompt Row */}
              <form
                onSubmit={handleExecute}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px 16px',
                  backgroundColor: '#0d1310',
                  borderTop: '1px solid #233027',
                  gap: '8px'
                }}
              >
                <span style={{ color: '#4ade80', fontSize: '0.85rem' }}>khalil@atelier:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleHistoryNav}
                  placeholder="type command (help, projects, goto...)"
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#f9fafb',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem'
                  }}
                  autoFocus
                />
                <button
                  type="submit"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#4ade80',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  aria-label="Execute command"
                >
                  <CornerDownLeft size={14} />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
