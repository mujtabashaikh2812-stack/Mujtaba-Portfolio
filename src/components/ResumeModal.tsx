import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, Award, FileText, CheckCircle2, ShieldCheck, Cpu, Server } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Dark Ambient Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog Window */}
      <div className="relative w-full max-w-4xl bg-[#09090d] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh] my-auto">
        
        {/* Top Control Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0c0c12]/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-crimson/20 border border-crimson/40 flex items-center justify-center text-rose-300">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-white font-bold text-sm sm:text-base">Curated Technical Resume</h3>
              <p className="font-mono text-[10px] text-slate-400">Shaikh Mohd Mujtaba • Applied AI & Full-Stack Systems</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs flex items-center gap-1.5 transition cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-rose-300" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-crimson via-scarlet to-blood text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-crimson/25 hover:scale-105 transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Area (Screen View + Print Optimized) */}
        <div className="p-6 sm:p-12 overflow-y-auto space-y-10 font-sans text-slate-200 print:text-black print:bg-white print:p-0">
          
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-crimson/15 border border-crimson/30 text-rose-300 font-mono text-[11px] font-bold uppercase tracking-wider inline-block">
                Final Year B.Tech CSE (Graduating June 2026)
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight">
                SHAIKH MOHD MUJTABA
              </h1>
              <p className="text-base sm:text-lg font-mono text-rose-300 font-medium">
                Applied AI & Full-Stack Systems Engineer
              </p>
            </div>

            <div className="font-mono text-xs text-slate-400 space-y-1 md:text-right">
              <p>Solapur, Maharashtra, India</p>
              <p className="text-slate-200 font-medium">mujtabashaikh2812@gmail.com</p>
              <p>+91 9359110610</p>
              <div className="flex md:justify-end gap-3 pt-1">
                <a href="https://linkedin.com/in/mujtabashaikh-dev" target="_blank" rel="noreferrer" className="text-rose-300 hover:underline flex items-center gap-0.5">
                  LinkedIn <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <span>•</span>
                <a href="https://github.com/mujtabashaikh2812-stack" target="_blank" rel="noreferrer" className="text-white hover:underline flex items-center gap-0.5">
                  GitHub <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs text-crimson uppercase tracking-widest font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>01. EXECUTIVE PROFILE</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Final-year Computer Science & Engineering undergraduate with demonstrated capability engineering high-concurrency full-stack architectures and low-latency Applied AI systems. Author of peer-reviewed research in blockchain-based healthcare record security. Proven expertise in sub-80ms database query optimization, streaming LLM prompt pipelines, cryptographic RBAC authorization, and zero-downtime production deployment.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs text-crimson uppercase tracking-widest font-bold flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>02. ACADEMIC CREDENTIALS</span>
            </h2>
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-3">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">Bachelor of Technology (B.Tech) in Computer Science & Engineering</h3>
                  <p className="text-xs font-mono text-rose-300">A.G. Patil Institute of Technology, Solapur</p>
                </div>
                <span className="font-mono text-xs text-slate-400 bg-white/5 px-2.5 py-1 rounded">11/2022 – 06/2026</span>
              </div>
              <p className="font-mono text-xs text-slate-400">
                <strong>Core Coursework:</strong> Data Structures & Algorithms, DBMS, Operating Systems, Object-Oriented Programming, Computer Networks, Software Engineering.
              </p>
            </div>
          </div>

          {/* Research Publication */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs text-crimson uppercase tracking-widest font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>03. PEER-REVIEWED SCIENTIFIC MONOGRAPH</span>
            </h2>
            <div className="p-5 rounded-2xl bg-black/60 border border-crimson/25 space-y-2">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                <h3 className="font-serif text-base sm:text-lg font-bold text-white">Blockchain-Based Healthcare Records Management</h3>
                <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">Published May 22, 2025</span>
              </div>
              <p className="font-mono text-xs text-slate-400">
                <strong>Journal:</strong> International Research Journal of Modernization in Engineering Technology and Science (IRJMETS)
              </p>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                Authored monograph detailing distributed ledger consensus and SHA-256 cryptographic verification for electronic health records, eliminating centralized failure points and ensuring verifiable tamper-resistance.
              </p>
            </div>
          </div>

          {/* Production Systems */}
          <div className="space-y-5">
            <h2 className="font-mono text-xs text-crimson uppercase tracking-widest font-bold flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>04. PRODUCTION ARCHITECTURES</span>
            </h2>

            {/* Project 1 */}
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2.5">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                <h3 className="font-serif text-lg font-bold text-white">AI Interview Coach Platform</h3>
                <span className="font-mono text-xs text-rose-300">Next.js, OpenAI API, Tailwind CSS, Vercel Edge</span>
              </div>
              <ul className="font-mono text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                <li>Architected interactive interview preparation system delivering dynamic mock technical interviews and automated evaluation rubrics with <strong>sub-1.5s time-to-first-token (TTFT)</strong>.</li>
                <li>Engineered low-latency streaming prompt pipelines via OpenAI SSE and client-side hydration optimizations, maintaining <strong>99.9% uptime on Vercel</strong>.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2.5">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                <h3 className="font-serif text-lg font-bold text-white">Orbit – Leads & Sales Intelligence</h3>
                <span className="font-mono text-xs text-cyan-300">Next.js, Node.js, PostgreSQL, MongoDB, Redis</span>
              </div>
              <ul className="font-mono text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                <li>Engineered compound indexing and multi-tier caching strategies across PostgreSQL and MongoDB, slashing query latency down to <strong>sub-80ms P99</strong> for high-volume prospect records.</li>
                <li>Automated asynchronous prospect qualification microservices in Node.js, cutting manual sales qualification cycle time by <strong>60%</strong>.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2.5">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                <h3 className="font-serif text-lg font-bold text-white">CampusConnect Portal</h3>
                <span className="font-mono text-xs text-emerald-300">React, Node.js, Express, MongoDB, JWT RBAC</span>
              </div>
              <ul className="font-mono text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                <li>Deployed centralized academic administration portal featuring student records, real-time analytics, and cryptographic JWT Role-Based Access Control (RBAC).</li>
              </ul>
            </div>
          </div>

          {/* Competency Matrix */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs text-crimson uppercase tracking-widest font-bold flex items-center gap-2">
              <Server className="w-4 h-4" />
              <span>05. TECHNICAL MATRIX</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <span className="text-white font-bold block text-crimson">Languages & Runtime</span>
                <p className="text-slate-300">JavaScript (ES6+), TypeScript, Python, Java, C, SQL (PostgreSQL, MySQL), HTML5, CSS3</p>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <span className="text-white font-bold block text-cyan-400">Frontend Architecture</span>
                <p className="text-slate-300">Next.js (App Router, SSR/SSG), React.js, Tailwind CSS, Redux Toolkit, Vite, Client Hydration</p>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <span className="text-white font-bold block text-emerald-400">Backend & Security</span>
                <p className="text-slate-300">Node.js, Express.js, RESTful APIs, JWT Auth, Microservices, Async Event Queues, RBAC</p>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <span className="text-white font-bold block text-rose-300">Databases & AI Toolchains</span>
                <p className="text-slate-300">PostgreSQL, MongoDB, Redis, OpenAI APIs, Claude API, Docker, Git, Vercel Edge</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
