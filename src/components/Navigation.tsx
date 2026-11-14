import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show navbar when scrolled past hero into Chapter 01
      setScrolled(window.scrollY > 320);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 sm:px-12 py-4 flex items-center justify-between ${
        scrolled 
          ? 'opacity-100 translate-y-0 pointer-events-auto bg-[#07070a]/90 backdrop-blur-md border-b border-white/10 shadow-2xl' 
          : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}
    >
      <a href="#hero" className="flex items-center gap-3 group">
        <span className="w-2.5 h-2.5 rounded-full bg-crimson group-hover:scale-125 transition-transform shadow-lg shadow-crimson/50"></span>
        <div className="flex flex-col">
          <span className="font-cinzel text-sm sm:text-base tracking-widest text-white font-bold uppercase group-hover:text-rose-300 transition-colors">
            MUJTABA SHAIKH
          </span>
          <span className="font-mono text-[9px] text-rose-300/80 tracking-widest uppercase">
            AI FULL STACK DEVELOPER
          </span>
        </div>
      </a>

      <nav className="hidden lg:flex items-center gap-8 text-[11px] font-mono tracking-widest text-slate-400 uppercase">
        <a href="#about" className="hover:text-rose-300 transition-colors">01. Manifesto</a>
        <a href="#work" className="hover:text-rose-300 transition-colors">02. Systems</a>
        <a href="#research" className="hover:text-rose-300 transition-colors">03. Research</a>
        <a href="#education" className="hover:text-rose-300 transition-colors">04. Academics</a>
        <a href="#skills" className="hover:text-rose-300 transition-colors">05. Engine</a>
      </nav>

      <div className="flex items-center gap-4">
        <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>AVAILABLE FOR HIRE</span>
        </div>

        <a 
          href="#contact" 
          className="px-5 py-2.5 rounded-full bg-gradient-to-r from-crimson via-scarlet to-blood text-white font-black text-xs hover:scale-105 transition-all duration-300 flex items-center gap-1.5 shadow-lg shadow-crimson/25"
        >
          <span>Connect</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-white" />
        </a>
      </div>
    </header>
  );
};
