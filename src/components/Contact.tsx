import React, { useState } from 'react';
import { Phone, Check, Copy, ArrowUpRight } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "mujtabashaikh2812@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="py-28 text-center relative z-10 border-t border-white/10 overflow-hidden">
      {/* Chapter Watermark */}
      <span className="chapter-watermark">06</span>

      <div className="max-w-3xl mx-auto space-y-8 reveal-on-scroll relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-crimson/15 border border-crimson/30 text-xs font-mono text-rose-300 font-bold">
          <span>CHAPTER 06</span>
          <span>•</span>
          <span>COLLABORATION & HIRING</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-7xl font-bold text-white leading-tight">
          Let's Build the <br />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-crimson to-scarlet">
            Extraordinary.
          </span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          Currently open to full-time engineering roles, high-growth engineering teams, and high-impact distributed AI architectures. Available for immediate worldwide remote or on-site relocation.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleCopyEmail}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-crimson via-scarlet to-blood text-white font-black text-xs hover:scale-105 transition-all duration-300 shadow-xl shadow-crimson/30 flex items-center gap-2 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-950 font-bold" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Email ({email})</span>
              </>
            )}
          </button>

          <a
            href="tel:+919359110610"
            className="px-7 py-4 rounded-full bg-black/60 border border-white/15 hover:border-crimson text-white font-mono text-xs transition flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>+91 9359110610</span>
          </a>
        </div>

        {/* Social Network Channels */}
        <div className="pt-10 flex items-center justify-center gap-8 text-xs font-mono text-slate-400 border-t border-white/5 max-w-md mx-auto">
          <a 
            href="https://linkedin.com/in/mujtabashaikh-dev" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-rose-300 transition flex items-center gap-1.5"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-crimson" />
          </a>
          <span className="text-slate-700">•</span>
          <a 
            href="https://github.com/mujtabashaikh2812-stack" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-white transition flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5 text-crimson" />
            <span>GitHub</span>
          </a>
          <span className="text-slate-700">•</span>
          <a 
            href="mailto:mujtabashaikh2812@gmail.com" 
            className="hover:text-rose-300 transition"
          >
            <span>Direct Email</span>
          </a>
        </div>

        {/* Legal & Authorship Line */}
        <div className="pt-8 text-[11px] font-mono text-slate-600">
          © 2026 Shaikh Mohd Mujtaba. All engineering architectures verified.
        </div>

      </div>
    </footer>
  );
};
