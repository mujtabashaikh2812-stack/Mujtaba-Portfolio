import React from 'react';
import { TiltCard } from './TiltCard';
import { GraduationCap, Calendar, MapPin, BookOpenCheck } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 border-b border-white/10 relative z-10 overflow-hidden">
      {/* Chapter Watermark */}
      <span className="chapter-watermark">04</span>

      <div className="mb-14 reveal-on-scroll relative z-10">
        <div className="flex items-center gap-2 font-mono text-xs text-crimson uppercase tracking-widest mb-3">
          <span>CHAPTER 04</span>
          <span className="h-px w-8 bg-crimson/40"></span>
          <span>ACADEMIC FOUNDATIONS</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-tight">
          Academic <br />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-crimson to-scarlet">
            Credentials.
          </span>
        </h2>
        <p className="text-xs font-mono text-slate-400 mt-3">
          Computer Science degree education and foundational scientific training.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono relative z-10">
        
        {/* DEGREE 01: B.TECH CSE */}
        <div className="reveal-on-scroll">
          <TiltCard className="p-6 sm:p-8 space-y-6 border border-white/10 bg-black/80">
            <div className="flex justify-between items-center text-xs text-crimson border-b border-white/10 pb-3">
              <span className="font-bold flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                UNDERGRADUATE DEGREE
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <Calendar className="w-3.5 h-3.5" /> 11/2022 – 06/2026
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                Bachelor of Technology (B.Tech)
              </h3>
              <p className="text-crimson text-sm font-semibold">
                Computer Science & Engineering
              </p>
            </div>

            <div className="text-slate-300 text-xs space-y-1">
              <div className="text-white font-medium text-sm">A.G. Patil Institute of Technology</div>
              <div className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5" /> Solapur, Maharashtra, India
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-2.5">
              <span className="text-[11px] text-slate-500 uppercase tracking-widest flex items-center gap-1.5 font-bold">
                <BookOpenCheck className="w-3.5 h-3.5 text-crimson" />
                Core Computer Science Coursework
              </span>
              <div className="flex flex-wrap gap-2 text-[11px]">
                {['Data Structures & Algorithms', 'Database Management (DBMS)', 'Operating Systems', 'Object Oriented Programming', 'Computer Networks', 'Software Engineering'].map((course) => (
                  <span key={course} className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard>
        </div>

        {/* DEGREE 02: HIGHER SECONDARY */}
        <div className="reveal-on-scroll stagger-1">
          <TiltCard className="p-6 sm:p-8 space-y-6 border border-white/10 bg-black/80">
            <div className="flex justify-between items-center text-xs text-slate-400 border-b border-white/10 pb-3">
              <span className="font-bold flex items-center gap-1.5 text-slate-300">
                <GraduationCap className="w-4 h-4 text-slate-400" />
                HIGHER SECONDARY CERTIFICATE
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> 07/2020 – 05/2022
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                Class XII (HSC) – Science
              </h3>
              <p className="text-slate-400 text-sm font-semibold">
                Physics, Chemistry, Mathematics
              </p>
            </div>

            <div className="text-slate-300 text-xs space-y-1">
              <div className="text-white font-medium text-sm">Sangmeshwar College</div>
              <div className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5" /> Solapur, Maharashtra, India
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-2.5">
              <span className="text-[11px] text-slate-500 uppercase tracking-widest flex items-center gap-1.5 font-bold">
                <BookOpenCheck className="w-3.5 h-3.5 text-slate-400" />
                Scientific Foundation
              </span>
              <div className="flex flex-wrap gap-2 text-[11px]">
                {['Advanced Mathematics', 'Physics Mechanics', 'Computational Logic', 'Statistical Methods'].map((course) => (
                  <span key={course} className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard>
        </div>

      </div>
    </section>
  );
};
