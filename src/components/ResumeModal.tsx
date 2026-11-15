import React, { useEffect } from 'react';
import { X, Download, ExternalLink, Award, FileText, CheckCircle2, ShieldCheck, Cpu, Code2 } from 'lucide-react';

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
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0c0c12]/95 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-crimson/20 border border-crimson/40 flex items-center justify-center text-rose-300">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-white font-bold text-sm sm:text-base">Curated Technical Resume</h3>
              <p className="font-mono text-[10px] text-slate-400">Shaikh Mohd Mujtaba Sadique Ahmed • Applied AI & Full-Stack Systems</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Download of Authentic Normal Resume PDF */}
            <a
              href="/Shaikh_Mohd_Mujtaba_Resume.pdf"
              download="Shaikh_Mohd_Mujtaba_Resume.pdf"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-crimson via-scarlet to-blood text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-crimson/30 hover:scale-105 transition cursor-pointer"
              title="Download standard ATS-compliant PDF resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Normal PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Area (Obsidian & Crimson Editorial Theme) */}
        <div className="p-6 sm:p-12 overflow-y-auto space-y-10 font-sans text-slate-200">
          
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-crimson/15 border border-crimson/30 text-rose-300 font-mono text-[11px] font-bold uppercase tracking-wider inline-block">
                Final Year B.Tech CSE (Graduating June 2026)
              </span>
              <h1 className="font-serif text-2xl sm:text-4xl font-black text-white tracking-tight">
                SHAIKH MOHD MUJTABA SADIQUE AHMED
              </h1>
              <p className="text-sm sm:text-base font-mono text-rose-300 font-medium">
                Full-Stack Software Engineer • Applied AI & Systems Architecture
              </p>
            </div>

            <div className="font-mono text-xs text-slate-400 space-y-1 md:text-right">
              <p>Solapur, Maharashtra, India • <span className="text-emerald-400 font-semibold">Remote Worldwide</span></p>
              <p className="text-slate-200 font-medium">mujtabashaikh2812@gmail.com • +91 9359110610</p>
              <div className="flex md:justify-end gap-3 pt-1">
                <a 
                  href="https://linkedin.com/in/mujtaba-shaikh-0a1392369" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-rose-300 hover:underline flex items-center gap-0.5"
                >
                  LinkedIn <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <span>•</span>
                <a 
                  href="https://github.com/mujtabashaikh2812-stack" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white hover:underline flex items-center gap-0.5"
                >
                  GitHub <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <span>•</span>
                <a 
                  href="https://github.com/1Mujtaba1" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-slate-400 hover:text-white hover:underline flex items-center gap-0.5"
                >
                  1Mujtaba1 <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>

          {/* 01. Professional Summary */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs text-crimson uppercase tracking-widest font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>01. PROFESSIONAL SUMMARY</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed bg-black/50 p-5 rounded-2xl border border-white/5 font-sans">
              Full-Stack Software Engineer with expertise in building production-grade web platforms, automated data workflows, and LLM integrations using Next.js, React, Node.js, Express, and modern database architectures. Experienced in building resilient RESTful APIs, implementing Role-Based Access Control (RBAC), and optimizing query performance to maintain low latency and high availability.
            </p>
          </div>

          {/* 02. Technical Skills */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs text-crimson uppercase tracking-widest font-bold flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>02. TECHNICAL SKILLS</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1.5">
                <span className="text-crimson font-bold block">Languages</span>
                <p className="text-slate-300">JavaScript (ES6+), TypeScript, Python, Java, SQL, C, HTML5/CSS3</p>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1.5">
                <span className="text-cyan-400 font-bold block">Frontend</span>
                <p className="text-slate-300">React.js, Next.js, Tailwind CSS, Vite, Redux Toolkit, Responsive Web Design, SSR/SSG</p>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1.5">
                <span className="text-emerald-400 font-bold block">Backend & Systems</span>
                <p className="text-slate-300">Node.js, Express.js, RESTful APIs, Webhooks, JWT Authentication, Microservices</p>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1.5">
                <span className="text-rose-300 font-bold block">Databases & Caching</span>
                <p className="text-slate-300">MongoDB, Mongoose, PostgreSQL, MySQL, Redis</p>
              </div>

              <div className="sm:col-span-2 p-4 rounded-xl bg-black/60 border border-white/10 space-y-1.5">
                <span className="text-rose-400 font-bold block">DevOps & Tooling</span>
                <p className="text-slate-300">Docker, Git, GitHub Actions, Vercel, Postman, Linux/Bash, OpenAI & Claude APIs</p>
              </div>
            </div>
          </div>

          {/* 03. Featured Software Projects */}
          <div className="space-y-6">
            <h2 className="font-mono text-xs text-crimson uppercase tracking-widest font-bold flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>03. FEATURED SOFTWARE PROJECTS</span>
            </h2>

            {/* Project 1: AI Interview Coach */}
            <div className="p-6 rounded-2xl bg-black/70 border border-crimson/25 space-y-3">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">AI Interview Coach Platform</h3>
                  <div className="flex flex-wrap gap-3 pt-1 text-xs font-mono">
                    <a 
                      href="https://ai-interview-coach-platform-rust.vercel.app" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-rose-300 hover:underline flex items-center gap-1 font-semibold"
                    >
                      Live Demo ↗
                    </a>
                    <span className="text-slate-600">•</span>
                    <a 
                      href="https://github.com/mujtabashaikh2812-stack/AI-INTERVIEW-COACH-PLATFORM" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-slate-300 hover:underline flex items-center gap-1"
                    >
                      GitHub Repo ↗
                    </a>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-slate-400 bg-white/5 px-2.5 py-1 rounded">
                  Next.js, React, Tailwind CSS, OpenAI API, Vercel
                </span>
              </div>
              <ul className="font-mono text-xs text-slate-300 space-y-2 list-disc pl-4 pt-1">
                <li>Architected an interactive AI interview prep application delivering dynamic mock interviews, automated candidate evaluation rubrics, and feedback reports with <strong>sub-1.5s response latency</strong>.</li>
                <li>Engineered streaming LLM prompt pipelines utilizing the OpenAI API to evaluate domain-specific technical accuracy, communication clarity, and candidate response structures across engineering tracks.</li>
                <li>Built responsive UI workflows in Next.js and Tailwind CSS with client-side hydration optimizations, deployed on Vercel with <strong>99.9% uptime</strong>.</li>
              </ul>
            </div>

            {/* Project 2: Orbit */}
            <div className="p-6 rounded-2xl bg-black/70 border border-white/10 space-y-3">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">Orbit - Leads & Sales Intelligence Platform</h3>
                  <p className="font-mono text-xs text-cyan-400">Full-Stack Commercial Lead Routing & Intelligence Engine</p>
                </div>
                <span className="font-mono text-[11px] text-slate-400 bg-white/5 px-2.5 py-1 rounded">
                  Next.js, Node.js, Express.js, MongoDB, Webhooks
                </span>
              </div>
              <ul className="font-mono text-xs text-slate-300 space-y-2 list-disc pl-4 pt-1">
                <li>Designed an end-to-end sales intelligence and pipeline management platform that ingests, scores, and routes inbound commercial leads via automated webhooks.</li>
                <li>Automated lead enrichment workflows using LLM API parsing, <strong>cutting qualification cycle times by over 60%</strong> and standardizing contact metadata.</li>
                <li>Structured relational data models and query indexes in MongoDB/PostgreSQL, reducing lead filter retrieval latency to <strong>under 80ms</strong> across high-volume pipeline views.</li>
                <li>Built modular outbound notification services and team activity tracking using asynchronous REST endpoints and status-driven audit logs.</li>
              </ul>
            </div>

            {/* Project 3: CampusConnect */}
            <div className="p-6 rounded-2xl bg-black/70 border border-white/10 space-y-3">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">CampusConnect - Academic Collaboration Portal</h3>
                  <div className="pt-1 text-xs font-mono">
                    <a 
                      href="https://github.com/mujtabashaikh2812-stack/CampusConnect1" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      GitHub: CampusConnect1 ↗
                    </a>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-slate-400 bg-white/5 px-2.5 py-1 rounded">
                  MERN Stack, Vite, Tailwind CSS, Recharts
                </span>
              </div>
              <ul className="font-mono text-xs text-slate-300 space-y-2 list-disc pl-4 pt-1">
                <li>Developed a full-stack educational platform centralizing administrative notices, peer resources, and student communication streams.</li>
                <li>Implemented secure JWT authentication paired with Role-Based Access Control (RBAC), strictly enforcing permission boundaries between administrators and students.</li>
                <li>Built an administrative analytics engine with Recharts to deliver real-time visualization of platform activity, rendering data visualizations with <strong>sub-100ms API response times</strong>.</li>
                <li>Standardized REST API endpoints using modular Express routers, centralized error-handling middleware, and strict request schema validations.</li>
              </ul>
            </div>

            {/* Project 4: Decentralized Healthcare Records */}
            <div className="p-6 rounded-2xl bg-black/70 border border-white/10 space-y-3">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">Decentralized Healthcare Records System</h3>
                  <p className="font-mono text-xs text-rose-300">Research Published in IRJMETS (May 2025)</p>
                </div>
                <span className="font-mono text-[11px] text-slate-400 bg-white/5 px-2.5 py-1 rounded">
                  React.js, Node.js, Express.js, MongoDB, Cryptography
                </span>
              </div>
              <ul className="font-mono text-xs text-slate-300 space-y-2 list-disc pl-4 pt-1">
                <li>Implemented a secure, decentralized architecture for managing clinical electronic health records (EHR) using React, Node.js, and MongoDB.</li>
                <li>Applied cryptographic verification to ensure medical data integrity and safeguard patient history against unauthorized tampering.</li>
                <li>Enhanced healthcare data privacy and accessibility through custom blockchain logic, preventing unauthorized access across distributed clinical records.</li>
              </ul>
            </div>
          </div>

          {/* 04. Publications */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs text-crimson uppercase tracking-widest font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>04. PUBLICATIONS</span>
            </h2>
            <div className="p-6 rounded-2xl bg-black/70 border border-crimson/25 space-y-2">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                <h3 className="font-serif text-base sm:text-lg font-bold text-white">Blockchain-Based Healthcare Records</h3>
                <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
                  Published: May 22, 2025
                </span>
              </div>
              <p className="font-mono text-xs text-slate-400">
                <strong>Journal:</strong> International Research Journal of Modernization in Engineering Technology and Science (IRJMETS)
              </p>
              <ul className="font-mono text-xs text-slate-300 list-disc pl-4 pt-2">
                <li>Authored and published research detailing a decentralized architecture for clinical data management, demonstrating how cryptographic verification mitigates single points of failure and unauthorized clinical data tampering.</li>
              </ul>
            </div>
          </div>

          {/* 05. Education */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs text-crimson uppercase tracking-widest font-bold flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>05. EDUCATION</span>
            </h2>
            <div className="p-6 rounded-2xl bg-black/70 border border-white/10 space-y-3">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">Bachelor of Technology (B.Tech) in Computer Science & Engineering</h3>
                  <p className="text-xs font-mono text-rose-300">A.G. Patil Institute of Technology, Solapur, Maharashtra</p>
                </div>
                <span className="font-mono text-xs text-slate-400 bg-white/5 px-2.5 py-1 rounded">11/2022 – 06/2026</span>
              </div>
              <p className="font-mono text-xs text-slate-400 pt-1 leading-relaxed">
                <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
