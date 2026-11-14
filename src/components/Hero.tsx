import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  // Scroll Dispersion & Lens Warp effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute scroll dispersion values
  const maxScroll = 550;
  const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
  const heroScale = 1 + progress * 0.10; // Scales up smoothly
  const heroOpacity = Math.max(1 - progress * 1.35, 0); // Dissolves into obsidian canvas
  const heroBlur = progress * 14; // Dispersion blur up to 14px
  const heroTranslateY = -progress * 60; // Parallax shift upward

  return (
    <section 
      id="hero" 
      className="min-h-screen h-screen w-full relative overflow-hidden flex flex-col justify-end items-center bg-[#07070a]"
    >
      {/* 1. FULL-SCREEN 100VW x 100VH POSTER COVER (NO BLACK BARS, NO BOX IN CENTER) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden will-change-transform z-0"
        style={{
          transform: `translateY(${heroTranslateY}px) scale(${heroScale})`,
          opacity: heroOpacity,
          filter: `blur(${heroBlur}px)`,
          transition: 'transform 0.08s ease-out, opacity 0.08s ease-out, filter 0.08s ease-out'
        }}
      >
        {/* Ambient Volumetric Crimson Backlight Halo */}
        <div className="absolute inset-0 crimson-halo rounded-full blur-3xl opacity-80 pointer-events-none"></div>

        {/* Responsive Edge-to-Edge Poster Image (Widescreen on desktop, Portrait on mobile) */}
        <picture className="w-full h-full block">
          <source media="(max-width: 768px)" srcSet="/hero_theme_mobile_v3.jpg" />
          <img 
            src="/hero_theme_wide_v3.jpg" 
            alt="Shaikh Mohd Mujtaba - AI Full Stack Developer" 
            className="w-full h-full object-cover object-center select-none pointer-events-none hero-animate-enter"
          />
        </picture>

        {/* Subtle Vignette Gradient at Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* 2. ONLY THE CLEAN BOUNCING SCROLL BUTTON (NO CLUTTER, NO TEXT BELOW IT) */}
      <div className="relative z-20 pb-10 flex flex-col items-center justify-center">
        <a
          href="#about"
          title="Scroll to reveal story"
          className="crimson-circle-btn w-12 h-12 rounded-full flex items-center justify-center text-white cursor-pointer group shadow-2xl transition-transform"
        >
          <ArrowDown className="w-5 h-5 font-bold animate-bounce group-hover:scale-110" />
        </a>
      </div>
    </section>
  );
};
