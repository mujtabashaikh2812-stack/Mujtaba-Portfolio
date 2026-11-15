import React, { useEffect, useState } from 'react';
import { X, Shield, GitBranch, ArrowRight, CheckCircle2, Layers, Terminal } from 'lucide-react';

interface ArchitectureModalProps {
  projectId: string | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ projectId, onClose }) => {
  const [activeTab, setActiveTab] = useState<'interview-coach' | 'orbit'>(
    projectId === 'orbit' ? 'orbit' : 'interview-coach'
  );
  const [activeNode, setActiveNode] = useState<number>(0);

  useEffect(() => {
    if (projectId === 'orbit') {
      setActiveTab('orbit');
    } else {
      setActiveTab('interview-coach');
    }
    setActiveNode(0);
  }, [projectId]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (projectId) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [projectId, onClose]);

  if (!projectId) return null;

  const architectures = {
    'interview-coach': {
      title: 'AI Interview Coach Platform',
      badge: 'STREAMING LLM & PROMPT PIPELINE',
      accentColor: 'text-crimson',
      borderColor: 'border-crimson/30',
      gradient: 'from-crimson via-scarlet to-blood',
      summary: 'Low-latency streaming architecture generating dynamic mock technical interviews and automated candidate evaluation rubrics with sub-1.5s time-to-first-token (TTFT).',
      metrics: [
        { label: 'Latency Benchmark', value: 'Sub-1.5s TTFT', highlight: 'text-emerald-400' },
        { label: 'Uptime SLA', value: '99.9% Vercel Edge', highlight: 'text-white' },
        { label: 'Inference Engine', value: 'OpenAI SSE Streams', highlight: 'text-rose-300' },
        { label: 'Concurrency Handling', value: 'Edge Edge Streaming', highlight: 'text-cyan-400' },
      ],
      nodes: [
        {
          tier: 'TIER 01',
          name: 'Client Hydration & Input Capture',
          tech: 'Next.js 14 App Router, React, Tailwind CSS',
          description: 'Captures user verbal/text interview responses, optimizes client hydration, and sends non-blocking requests to Edge handlers with zero layout shifts (CLS < 0.01).',
        },
        {
          tier: 'TIER 02',
          name: 'Edge API Gateway & Session Context',
          tech: 'Next.js Edge Runtime, Vercel Serverless',
          description: 'Lightweight Vercel Edge middleware validates authentication, sanitizes interview context parameters, and dispatches streaming requests with sub-10ms cold start latency.',
        },
        {
          tier: 'TIER 03',
          name: 'Streaming Prompt Inference Core',
          tech: 'OpenAI API (Server-Sent Events / SSE)',
          description: 'Leverages streaming HTTP chunks to pipe candidate evaluation text back to the browser in real time, delivering conversational feedback before the entire prompt finishes evaluating.',
        },
        {
          tier: 'TIER 04',
          name: 'Evaluation Rubric & JSON Schema Parser',
          tech: 'Zod Validation, Structured JSON Outputs',
          description: 'Evaluates domain-specific metrics across technical accuracy, communication structure, and code complexity, parsing them into structured candidate scoring cards.',
        },
      ],
      deepDive: [
        {
          title: 'Perceived Latency Mitigation',
          detail: 'Traditional HTTP request-response cycles on LLM generation require 8–12 seconds of blocking wait time. By shifting to Server-Sent Events (SSE) streaming chunks, initial tokens render within 1.2s–1.4s, reducing perceived user waiting time by over 80%.',
        },
        {
          title: 'Resilience & Token Fallbacks',
          detail: 'Engineered automatic retry fallbacks on rate-limit triggers (HTTP 429) and stream interruption handlers that gracefully recover partial responses without requiring candidates to re-submit interviews.',
        },
      ],
    },
    'orbit': {
      title: 'Orbit – Leads & Sales Intelligence',
      badge: 'HIGH-CONCURRENCY DATABASE ENGINE',
      accentColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      gradient: 'from-cyan-500 to-blue-600',
      summary: 'High-throughput sales intelligence dashboard featuring compound B-tree indexed databases, sub-80ms P99 query retrieval, and automated asynchronous qualification microservices.',
      metrics: [
        { label: 'Query Latency (P99)', value: '< 80ms Index Retrieval', highlight: 'text-emerald-400' },
        { label: 'Cycle Time Reduction', value: '60% Faster Qualification', highlight: 'text-cyan-300' },
        { label: 'Cache Strategy', value: 'Redis In-Memory TTL', highlight: 'text-rose-300' },
        { label: 'Database Core', value: 'PostgreSQL + MongoDB', highlight: 'text-white' },
      ],
      nodes: [
        {
          tier: 'TIER 01',
          name: 'Pipeline Filtering & Virtualized View',
          tech: 'React, Next.js, Virtualized Lists',
          description: 'High-performance UI handling thousands of prospect records with multi-dimensional filtering (revenue, stage, employee count) with zero DOM lag.',
        },
        {
          tier: 'TIER 02',
          name: 'API Gateway & JWT RBAC Auth',
          tech: 'Node.js, Express Microservices',
          description: 'Secures all query routes using cryptographic JWT tokens and hardened Role-Based Access Control, routing read/write traffic with sub-15ms overhead.',
        },
        {
          tier: 'TIER 03',
          name: 'In-Memory Cache Layer (Redis)',
          tech: 'Redis Key-Value Cache',
          description: 'Caches frequently queried company profiles and dashboard aggregations with an invalidation TTL strategy, yielding sub-5ms cache hits on hot queries.',
        },
        {
          tier: 'TIER 04',
          name: 'Compound Indexed Storage Engine',
          tech: 'PostgreSQL & MongoDB (B-Tree Indexes)',
          description: 'Engineered compound indexes on (orgId, status, leadScore, createdAt), completely eliminating full collection scans and keeping P99 retrieval under 80ms.',
        },
      ],
      deepDive: [
        {
          title: 'Compound Indexing & Query Plans',
          detail: 'Standard collection scans on un-indexed tables scale quadratically with dataset growth. By analyzing MongoDB and PostgreSQL query execution plans (EXPLAIN ANALYZE), compound B-Tree indexes eliminated full-table scans, dropping query times from 840ms to 64ms.',
        },
        {
          title: 'Asynchronous Qualification Queues',
          detail: 'Decoupled prospect scoring logic into asynchronous background workers. Webhook payloads trigger background enrichment without holding open client HTTP connections, cutting sales qualification cycle time by 60%.',
        },
      ],
    },
  };

  const current = architectures[activeTab];

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Dark Ambient Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog Window */}
      <div className="relative w-full max-w-5xl bg-[#08080c] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh] my-auto">
        
        {/* Top Header & Architecture Selector */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-5 border-b border-white/10 bg-[#0c0c12]/95 backdrop-blur-md sticky top-0 z-20 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-crimson/15 border border-crimson/30 flex items-center justify-center text-rose-300">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-crimson font-bold uppercase tracking-widest">SYSTEM ARCHITECTURE BLUEPRINT</span>
                <span className="text-slate-600">•</span>
                <span className="font-mono text-[10px] text-slate-400">ENGINEERING DEEP DIVE</span>
              </div>
              <h2 className="font-serif text-white font-bold text-lg sm:text-xl">{current.title}</h2>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
            {/* Project Switcher Tabs */}
            <div className="inline-flex rounded-full bg-black/60 p-1 border border-white/10 text-xs font-mono">
              <button
                onClick={() => { setActiveTab('interview-coach'); setActiveNode(0); }}
                className={`px-3 sm:px-4 py-1.5 rounded-full transition-all ${
                  activeTab === 'interview-coach' 
                    ? 'bg-crimson text-white font-bold shadow-md shadow-crimson/30' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                AI Coach
              </button>
              <button
                onClick={() => { setActiveTab('orbit'); setActiveNode(0); }}
                className={`px-3 sm:px-4 py-1.5 rounded-full transition-all ${
                  activeTab === 'orbit' 
                    ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/30' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Orbit CRM
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Architecture Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10">
          
          {/* Executive Overview & Telemetry Benchmarks */}
          <div className="space-y-6">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {current.summary}
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
              {current.metrics.map((m) => (
                <div key={m.label} className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <span className="text-slate-500 text-[10px] uppercase tracking-wider block">{m.label}</span>
                  <span className={`text-sm sm:text-base font-bold ${m.highlight}`}>{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* End-to-End Data Flow Pipeline (Interactive Node Chain) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-xs text-crimson uppercase tracking-widest font-bold flex items-center gap-2">
                <GitBranch className="w-4 h-4" />
                <span>DATA FLOW & TOPOLOGY PIPELINE</span>
              </h3>
              <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">Click any node to inspect layer specs</span>
            </div>

            {/* Interactive Topology Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {current.nodes.map((node, index) => {
                const isSelected = activeNode === index;
                return (
                  <div
                    key={node.tier}
                    onClick={() => setActiveNode(index)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all border relative flex flex-col justify-between ${
                      isSelected 
                        ? `${current.borderColor} bg-white/5 shadow-xl scale-[1.02]` 
                        : 'border-white/10 bg-black/50 hover:border-white/25 hover:bg-black/80'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className={isSelected ? current.accentColor : 'text-slate-500 font-bold'}>{node.tier}</span>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-crimson animate-ping" />}
                      </div>
                      <h4 className="font-serif text-white font-bold text-sm leading-snug">{node.name}</h4>
                      <p className="text-[11px] font-mono text-slate-400">{node.tech}</p>
                    </div>

                    <div className="pt-4 flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                      <span>Inspect Layer</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Focused Layer Inspector */}
            <div className="p-6 rounded-2xl bg-black/80 border border-white/15 space-y-2 font-mono text-xs">
              <div className="flex items-center gap-2 text-rose-300 font-bold">
                <Terminal className="w-4 h-4" />
                <span>ACTIVE INSPECTOR: {current.nodes[activeNode].tier} — {current.nodes[activeNode].name}</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed pt-1">
                {current.nodes[activeNode].description}
              </p>
              <div className="pt-2 text-[11px] text-slate-500">
                Technology Core: <span className="text-white">{current.nodes[activeNode].tech}</span>
              </div>
            </div>
          </div>

          {/* Deep Dive: Bottlenecks & Resilience Solved */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-crimson uppercase tracking-widest font-bold flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>ENGINEERING DECISIONS & BOTTLENECKS SOLVED</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {current.deepDive.map((d) => (
                <div key={d.title} className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-white font-serif font-bold text-base">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{d.title}</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                    {d.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
