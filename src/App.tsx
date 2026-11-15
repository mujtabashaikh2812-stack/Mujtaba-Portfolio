import React, { useEffect, useState } from 'react';
import { CinematicIntro } from './components/CinematicIntro';
import { ScrollHUD } from './components/ScrollHUD';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { ArchitectureModal } from './components/ArchitectureModal';

export const App: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeArchitecture, setActiveArchitecture] = useState<string | null>(null);

  // Intersection Observer for scroll-triggered reveal animations across every section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#07070a] text-slate-100 relative selection:bg-crimson/30 selection:text-rose-200 overflow-x-hidden">
      {/* 1. CINEMATIC SHUTTER & LASER OPENING SEQUENCE (1.2s Impressive Entrance) */}
      <CinematicIntro />

      {/* 2. 35MM ANALOG FILM GRAIN OVERLAY */}
      <div className="grain-overlay" />

      {/* 3. CONTINUOUS CRIMSON GRADIENT BACKGROUND (Flowing down the entire website to the footer) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Upper Left Ambient Airbrush Aura (Manifesto & Projects) */}
        <div className="absolute top-[100vh] -left-[200px] w-[650px] h-[650px] rounded-full bg-crimson/15 blur-[140px] pointer-events-none"></div>

        {/* Mid-Right Ambient Scarlet Glow (Research & Academics) */}
        <div className="absolute top-[240vh] -right-[220px] w-[700px] h-[700px] rounded-full bg-scarlet/12 blur-[150px] pointer-events-none"></div>

        {/* Mid-Left Ambient Red Haze (Competency Engine) */}
        <div className="absolute top-[360vh] -left-[220px] w-[650px] h-[650px] rounded-full bg-blood/10 blur-[140px] pointer-events-none"></div>

        {/* Deep Centered Crimson Ambient Bloom Behind Finale (Contact Footer) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-crimson/20 blur-[160px] pointer-events-none"></div>
      </div>

      {/* 4. TOP SCROLL PROGRESS & RIGHT HUD (Auto-hidden on Hero) */}
      <ScrollHUD />

      {/* 5. FLOATING TOP NAVIGATION (Auto-hidden on Hero; fades in on Chapter 01) */}
      <Navigation onOpenResume={() => setResumeOpen(true)} />

      {/* 6. FULL-SCREEN 100VH OPENING HERO COVER */}
      <main className="relative z-10 w-full">
        <Hero />

        {/* 7. STORYTELLING CHAPTERS WITH SCROLL REVEAL ANIMATIONS */}
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-20 py-16">
          <About onOpenResume={() => setResumeOpen(true)} />
          <Projects onOpenArchitecture={(id) => setActiveArchitecture(id)} />
          <Research />
          <Education />
          <Skills />
          <Contact onOpenResume={() => setResumeOpen(true)} />
        </div>
      </main>

      {/* 8. INTERACTIVE MODALS */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      <ArchitectureModal projectId={activeArchitecture} onClose={() => setActiveArchitecture(null)} />
    </div>
  );
};

export default App;
