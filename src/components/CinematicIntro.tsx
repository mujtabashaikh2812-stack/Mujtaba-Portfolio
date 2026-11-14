import React, { useEffect, useState } from 'react';

export const CinematicIntro: React.FC = () => {
  const [stage, setStage] = useState<'loading' | 'opening' | 'complete'>('loading');
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Fast telemetry counter: 0 -> 100 in 650ms
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 15;
      });
    }, 60);

    // Trigger shutter open at 750ms
    const timerOpen = setTimeout(() => {
      setStage('opening');
    }, 750);

    // Unmount at 1350ms
    const timerDone = setTimeout(() => {
      setStage('complete');
    }, 1350);

    return () => {
      clearInterval(interval);
      clearTimeout(timerOpen);
      clearTimeout(timerDone);
    };
  }, []);

  if (stage === 'complete') return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {/* Top Shutter Half */}
      <div 
        className={`absolute top-0 left-0 right-0 h-1/2 bg-[#07070a] border-b border-crimson/40 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] flex items-end justify-center ${
          stage === 'opening' ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-crimson to-transparent shadow-[0_0_15px_#e11d48]"></div>
      </div>

      {/* Bottom Shutter Half */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-1/2 bg-[#07070a] border-t border-crimson/40 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] flex items-start justify-center ${
          stage === 'opening' ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-crimson to-transparent shadow-[0_0_15px_#e11d48]"></div>
      </div>

      {/* Center Laser Telemetry Info */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-center font-mono text-xs z-10 transition-opacity duration-300 ${
          stage === 'opening' ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
        }`}
      >
        <div className="flex items-center gap-2 text-rose-300 tracking-widest uppercase mb-2 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-crimson animate-ping"></span>
          <span>INITIALIZING SYSTEM // SHAIKH MOHD MUJTABA</span>
        </div>
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative mb-2">
          <div 
            className="h-full bg-gradient-to-r from-crimson via-scarlet to-rose-300 transition-all duration-75"
            style={{ width: `${Math.min(percent, 100)}%` }}
          ></div>
        </div>
        <span className="text-[10px] text-slate-500 tracking-widest">{Math.min(percent, 100)}% VERIFIED</span>
      </div>
    </div>
  );
};
