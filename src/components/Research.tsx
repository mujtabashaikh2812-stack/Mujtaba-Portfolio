import React from 'react';
import { TiltCard } from './TiltCard';
import { ShieldCheck, BookOpen, KeyRound, DatabaseZap, CheckCircle2 } from 'lucide-react';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-24 border-b border-white/10 relative z-10 overflow-hidden">
      {/* Chapter Watermark */}
      <span className="chapter-watermark">03</span>

      <div className="mb-12 reveal-on-scroll relative z-10">
        <div className="flex items-center gap-2 font-mono text-xs text-crimson uppercase tracking-widest mb-3">
          <span>CHAPTER 03</span>
          <span className="h-px w-8 bg-crimson/40"></span>
          <span>SCIENTIFIC MONOGRAPH</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-tight">
          Peer-Reviewed <br />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-crimson to-scarlet">
            Publication.
          </span>
        </h2>
        <p className="text-xs font-mono text-slate-400 mt-3 max-w-xl">
          Demonstrating cryptographic security, scientific rigor, and distributed ledger architecture for critical healthcare systems.
        </p>
      </div>

      <div className="reveal-on-scroll relative z-10">
        <TiltCard className="border-crimson/30 bg-gradient-to-br from-[#140f14]/95 via-[#09080c]/95 to-[#0b0c10]/95 p-6 sm:p-10">
          <div className="max-w-4xl space-y-7">
            
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-crimson/15 border border-crimson/30 text-xs font-mono text-rose-300 font-bold">
                <BookOpen className="w-3.5 h-3.5" />
                PEER-REVIEWED SCIENTIFIC MONOGRAPH
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Published: <strong className="text-white">May 22, 2025</strong>
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
              Blockchain-Based Healthcare Records
            </h3>

            <div className="p-4 rounded-xl bg-black/70 border border-crimson/20 font-mono text-xs text-slate-300">
              <span className="text-crimson uppercase tracking-widest block text-[10px] mb-1 font-bold">Journal of Record</span>
              <span className="text-white font-semibold text-sm">
                International Research Journal of Modernization in Engineering Technology and Science (IRJMETS)
              </span>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Authored and published research detailing a decentralized architecture for clinical electronic health record (EHR) management. The paper demonstrates how cryptographic hashing and distributed ledger logic eliminate single points of failure, protecting patient clinical histories against unauthorized tampering and single-database vulnerabilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs">
              
              <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <KeyRound className="w-4 h-4" />
                  <span>CRYPTOGRAPHIC LAYER</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  SHA-256 cryptographic hashes and digital signatures verify record immutability across distributed clinical nodes.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-crimson font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ZERO FAILURE POINT</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Eliminates centralized database vulnerability by decentralizing health data verification through smart consensus.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <DatabaseZap className="w-4 h-4" />
                  <span>STACK IMPLEMENTATION</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Implemented using React.js frontend, Node.js and Express.js microservices, and MongoDB document storage.
                </p>
              </div>

            </div>

          </div>
        </TiltCard>
      </div>
    </section>
  );
};
