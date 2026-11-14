import React, { useEffect, useState } from 'react';

export const ScrollHUD: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      setScrolledPastHero(currentScroll > 320);

      // Check active section
      const sections = ['hero', 'about', 'work', 'research', 'education', 'skills', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: '01. MANIFESTO' },
    { id: 'work', label: '02. SYSTEMS' },
    { id: 'research', label: '03. RESEARCH' },
    { id: 'education', label: '04. ACADEMICS' },
    { id: 'skills', label: '05. ENGINE' },
    { id: 'contact', label: '06. EPILOGUE' },
  ];

  return (
    <>
      {/* Top Dynamic Gradient Progress Bar (Hidden on Hero) */}
      <div 
        className={`fixed top-0 left-0 h-[3px] bg-gradient-to-r from-crimson via-scarlet to-rose-400 z-50 transition-all duration-150 ${
          scrolledPastHero ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Right HUD Navigation (Only visible when scrolling through chapters, NEVER on Hero) */}
      <aside 
        className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col gap-4 font-mono text-[11px] text-slate-500 transition-all duration-500 ${
          scrolledPastHero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
        }`}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center gap-3 transition-colors duration-200 group ${
                isActive ? 'text-crimson font-bold' : 'hover:text-slate-200'
              }`}
            >
              <span className="tracking-widest">{item.label}</span>
              <span 
                className={`w-2 h-2 rounded-full border transition-all duration-200 ${
                  isActive 
                    ? 'border-crimson bg-crimson scale-125 shadow-lg shadow-crimson/50' 
                    : 'border-slate-700 group-hover:border-crimson'
                }`}
              />
            </a>
          );
        })}
      </aside>
    </>
  );
};
