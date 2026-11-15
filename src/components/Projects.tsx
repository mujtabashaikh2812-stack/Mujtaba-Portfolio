import React from 'react';
import { TiltCard } from './TiltCard';
import { ExternalLink, Zap, Terminal, Layers } from 'lucide-react';

interface ProjectsProps {
  onOpenArchitecture?: (projectId: string) => void;
}

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Projects: React.FC<ProjectsProps> = ({ onOpenArchitecture }) => {
  return (
    <section id="work" className="py-24 border-b border-white/10 relative z-10 overflow-hidden">
      {/* Chapter Watermark */}
      <span className="chapter-watermark">02</span>

      {/* Section Header (Completely clean without exhibits text) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 relative z-10 reveal-on-scroll">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-crimson uppercase tracking-widest mb-3">
            <span>CHAPTER 02</span>
            <span className="h-px w-8 bg-crimson/40"></span>
            <span>PRODUCTION SYSTEMS</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-tight">
            Selected <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-crimson to-scarlet">
              Architectures.
            </span>
          </h2>
        </div>
      </div>

      <div className="space-y-14 perspective-container relative z-10">

        {/* 1. AI INTERVIEW COACH PLATFORM */}
        <div className="reveal-on-scroll">
          <TiltCard className="p-6 sm:p-10 border-crimson/25 bg-black/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-crimson/15 border border-crimson/30 text-rose-300 font-mono text-xs font-bold">
                    FLAGSHIP APPLIED AI
                  </span>
                  <span className="text-xs font-mono text-slate-500">Live Production Deployment</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  AI Interview Coach Platform
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Architected an interactive interview prep application delivering dynamic mock technical interviews, automated candidate evaluation rubrics, and structured feedback reports with sub-1.5s response latency.
                </p>

                <div className="space-y-3 font-mono text-xs text-slate-300 pt-2">
                  <div className="flex items-start gap-2.5">
                    <span className="text-crimson font-bold mt-0.5">❯</span>
                    <span><strong>Streaming Prompt Pipelines:</strong> Engineered low-latency streaming evaluations via the OpenAI API to evaluate domain-specific technical accuracy, communication clarity, and candidate response structures across engineering tracks.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-crimson font-bold mt-0.5">❯</span>
                    <span><strong>Hydration & Optimization:</strong> Built responsive UI workflows in Next.js and Tailwind CSS with client-side hydration optimizations, achieving 99.9% uptime on Vercel.</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a 
                    href="https://ai-interview-coach-platform-rust.vercel.app" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-crimson to-scarlet text-white font-bold text-xs hover:scale-105 transition flex items-center gap-2 shadow-lg shadow-crimson/30"
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {onOpenArchitecture && (
                    <button
                      onClick={() => onOpenArchitecture('interview-coach')}
                      className="px-5 py-3 rounded-full bg-crimson/15 hover:bg-crimson/25 border border-crimson/40 hover:border-crimson text-xs font-mono text-rose-300 transition flex items-center gap-2 cursor-pointer hover:scale-105"
                      title="Inspect Pipeline & Streaming Architecture"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Architecture Blueprint ↗</span>
                    </button>
                  )}

                  <a 
                    href="https://github.com/mujtabashaikh2812-stack/AI-INTERVIEW-COACH-PLATFORM" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-5 py-3 rounded-full bg-black/60 border border-white/10 hover:border-crimson text-xs font-mono text-slate-300 transition flex items-center gap-2"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Inspect Codebase ↗</span>
                  </a>
                </div>
              </div>

              {/* Architecture Telemetry Box */}
              <div className="lg:col-span-5 bg-black/60 rounded-2xl p-6 border border-white/10 space-y-4 font-mono text-xs">
                <span className="text-[11px] text-slate-500 uppercase tracking-widest block flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-crimson" />
                  System Telemetry & Specs
                </span>
                
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Response Latency</span>
                    <span className="text-emerald-400 font-bold">Sub-1.5s TTFT</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Inference Core</span>
                    <span className="text-rose-300">OpenAI API (Streaming Chunks)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Frontend Stack</span>
                    <span className="text-white">Next.js, React, Tailwind CSS</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-400">Availability</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <Zap className="w-3 h-3" /> 99.9% Vercel Edge
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* 2. ORBIT – LEADS & SALES INTELLIGENCE */}
        <div className="reveal-on-scroll">
          <TiltCard className="p-6 sm:p-10 border-crimson/25 bg-black/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-crimson/15 border border-crimson/30 text-rose-300 font-mono text-xs font-bold">
                    DATA & ANALYTICS PLATFORM
                  </span>
                  <span className="text-xs font-mono text-slate-500">Commercial Architecture</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  Orbit – Leads & Sales Intelligence
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Engineered a comprehensive sales and lead intelligence dashboard integrating complex multi-dimensional pipeline filtering, automated contact enrichment, and high-concurrency database queries.
                </p>

                <div className="space-y-3 font-mono text-xs text-slate-300 pt-2">
                  <div className="flex items-start gap-2.5">
                    <span className="text-crimson font-bold mt-0.5">❯</span>
                    <span><strong>Sub-80ms Retrieval:</strong> Engineered compound indexing and caching strategies across PostgreSQL and MongoDB, slashing query latency for high-volume prospect records.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-crimson font-bold mt-0.5">❯</span>
                    <span><strong>Automated Qualification:</strong> Automated multi-tier prospect scoring pipelines with asynchronous Node.js microservices, cutting manual sales qualification cycle time by 60%.</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a 
                    href="https://orbit-sales-platform.vercel.app" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-crimson to-scarlet text-white font-bold text-xs hover:scale-105 transition flex items-center gap-2 shadow-lg shadow-crimson/30"
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {onOpenArchitecture && (
                    <button
                      onClick={() => onOpenArchitecture('orbit')}
                      className="px-5 py-3 rounded-full bg-crimson/15 hover:bg-crimson/25 border border-crimson/40 hover:border-crimson text-xs font-mono text-rose-300 transition flex items-center gap-2 cursor-pointer hover:scale-105"
                      title="Inspect Database & Microservices Blueprint"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Architecture Blueprint ↗</span>
                    </button>
                  )}

                  <a 
                    href="https://github.com/mujtabashaikh2812-stack/orbit-sales-platform" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-5 py-3 rounded-full bg-black/60 border border-white/10 hover:border-crimson text-xs font-mono text-slate-300 transition flex items-center gap-2"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Inspect Codebase ↗</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-black/60 rounded-2xl p-6 border border-white/10 space-y-4 font-mono text-xs">
                <span className="text-[11px] text-slate-500 uppercase tracking-widest block flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-crimson" />
                  Engineering Benchmarks
                </span>
                
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Query Retrieval</span>
                    <span className="text-emerald-400 font-bold">&lt; 80ms Index P99</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Cycle Time Reduction</span>
                    <span className="text-rose-300 font-bold">60% Faster Qualification</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-400">Storage Engines</span>
                    <span className="text-white">MongoDB, PostgreSQL, Redis</span>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* 3 & 4. CAMPUSCONNECT & DECENTRALIZED HEALTHCARE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="reveal-on-scroll">
            <TiltCard className="p-6 sm:p-8 border-white/10 bg-black/80 space-y-5">
              <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold inline-block">
                MERN FULL-STACK
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">CampusConnect Portal</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Centralized university administration platform powering student portals, attendance tracking, and event scheduling with sub-100ms response times and cryptographic JWT RBAC authorization.
              </p>
              <div className="pt-2 font-mono text-xs text-slate-400 flex justify-between border-t border-white/5">
                <span>Stack: React, Vite, Node, Mongo</span>
                <span className="text-emerald-400">&lt; 100ms Analytics</span>
              </div>
            </TiltCard>
          </div>

          <div className="reveal-on-scroll">
            <TiltCard className="p-6 sm:p-8 border-white/10 bg-black/80 space-y-5">
              <span className="px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 font-mono text-xs font-bold inline-block">
                CRYPTOGRAPHY & LEDGER
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">Decentralized Healthcare EHR</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Distributed electronic health record management architecture utilizing SHA-256 cryptographic verification and smart consensus to eliminate single points of clinical data failure.
              </p>
              <div className="pt-2 font-mono text-xs text-slate-400 flex justify-between border-t border-white/5">
                <span>Stack: React, Node, Crypto, MongoDB</span>
                <span className="text-rose-300">IRJMETS Monograph</span>
              </div>
            </TiltCard>
          </div>
        </div>

      </div>
    </section>
  );
};
