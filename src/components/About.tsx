import React from 'react';
import { TiltCard } from './TiltCard';
import { Layers, Cpu, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-white/10 relative z-10 overflow-hidden">
      {/* Chapter Watermark */}
      <span className="chapter-watermark">01</span>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left: Biography Overview */}
        <div className="lg:col-span-5 space-y-6 reveal-on-scroll">
          <div className="flex items-center gap-2 font-mono text-xs text-crimson uppercase tracking-widest">
            <span>CHAPTER 01</span>
            <span className="h-px w-8 bg-crimson/40"></span>
            <span>THE MANIFESTO</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
            Engineering with <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-crimson to-scarlet">
              Purpose & Rigor.
            </span>
          </h2>

          <p className="text-xs font-mono text-slate-400 leading-relaxed">
            Bridging foundational computer science rigor with production velocity to deliver sub-second intelligence.
          </p>

          <TiltCard className="p-6 space-y-4 font-mono text-xs border-crimson/25 bg-black/70">
            <div className="flex items-center gap-2 text-slate-300">
              <Award className="w-4 h-4 text-crimson" />
              <span className="font-semibold text-white tracking-wider">CURRENT ACADEMIC STATUS</span>
            </div>
            <p className="text-slate-300 font-medium leading-relaxed">
              Final Year B.Tech Computer Science & Engineering candidate at A.G. Patil Institute of Technology, Solapur (Graduating June 2026).
            </p>
            <div className="pt-3 border-t border-white/10 space-y-1.5">
              <span className="text-[10px] text-crimson uppercase tracking-widest block font-bold">Primary Target Roles</span>
              <p className="text-white font-semibold">
                AI Full Stack Developer • Systems Engineer • Applied AI Architect
              </p>
            </div>
          </TiltCard>
        </div>

        {/* Right: Detailed Story & Engineering Philosophy */}
        <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed reveal-on-scroll stagger-1">
          <p>
            I am <strong className="text-white font-semibold">Shaikh Mohd Mujtaba</strong>, an Applied AI & Full-Stack Systems Engineer dedicated to crafting robust software architectures that thrive under high concurrent throughput and stringent latency requirements.
          </p>

          <p>
            My engineering philosophy is rooted in fundamental computer science: I treat <strong className="text-rose-300 font-medium">latency as a primary feature</strong>, design database schemas with rigorous normalization and strategic indexing, and build modular, testable microservices that maintain deterministic reliability.
          </p>

          {/* Dual Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3 hover:border-crimson/40 transition-colors reveal-on-scroll stagger-2">
              <div className="flex items-center gap-2 text-crimson font-mono text-xs font-bold">
                <Layers className="w-4 h-4" />
                <span>01. PRODUCTION RESILIENCE</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Hardened RESTful APIs, cryptographic JWT Role-Based Access Control (RBAC), and query retrieval optimized down to sub-80ms across high-volume pipelines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3 hover:border-cyan-400/30 transition-colors reveal-on-scroll stagger-3">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                <Cpu className="w-4 h-4" />
                <span>02. APPLIED AI EXECUTION</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Low-latency streaming prompt pipelines (sub-1.5s TTFT), automated unstructured metadata enrichment, and verifiable LLM evaluation rubrics with measurable ROI.
              </p>
            </div>

          </div>

          <p className="text-slate-400 text-sm pt-2">
            Whether accelerating sales qualification cycles by 60%, deploying educational portals with sub-100ms analytics, or authoring peer-reviewed cryptographic research, my goal is always to deliver <strong className="text-white font-medium">quantifiable business impact, uncompromised security, and museum-grade craft</strong>.
          </p>
        </div>

      </div>
    </section>
  );
};
