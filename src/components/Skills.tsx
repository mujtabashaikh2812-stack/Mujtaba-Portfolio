import React from 'react';
import { TiltCard } from './TiltCard';
import { Code2, Binary, Layout, Server, Database, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages & Core',
      icon: <Code2 className="w-4 h-4 text-crimson" />,
      tag: '01',
      accentColor: 'text-crimson',
      skills: [
        { name: 'JavaScript (ES6+)', level: 'Expert' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'Python', level: 'Advanced' },
        { name: 'Java & C', level: 'Solid' },
        { name: 'SQL (Postgres/MySQL)', level: 'Advanced' },
        { name: 'HTML5 / CSS3', level: 'Expert' },
      ],
    },
    {
      title: 'Computer Science Core',
      icon: <Binary className="w-4 h-4 text-cyan-400" />,
      tag: '02',
      accentColor: 'text-cyan-400',
      skills: [
        { name: 'Data Structures & Algo (DSA)', level: 'Core' },
        { name: 'Object-Oriented Design (OOP)', level: 'Core' },
        { name: 'DBMS & Query Normalization', level: 'Core' },
        { name: 'Operating Systems (OS)', level: 'Core' },
        { name: 'Computer Networks', level: 'Core' },
        { name: 'Distributed Systems & Crypto', level: 'Published' },
      ],
    },
    {
      title: 'Frontend Architecture',
      icon: <Layout className="w-4 h-4 text-emerald-400" />,
      tag: '03',
      accentColor: 'text-emerald-400',
      skills: [
        { name: 'Next.js (App Router, SSR/SSG)', level: 'Daily' },
        { name: 'React.js', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Expert' },
        { name: 'Vite', level: 'Production' },
        { name: 'Redux Toolkit', level: 'Advanced' },
        { name: 'Client Hydration & Zero CLS', level: 'Optimized' },
      ],
    },
    {
      title: 'Backend & Systems',
      icon: <Server className="w-4 h-4 text-purple-400" />,
      tag: '04',
      accentColor: 'text-purple-400',
      skills: [
        { name: 'Node.js & Express.js', level: 'Production' },
        { name: 'RESTful APIs & Webhooks', level: 'Production' },
        { name: 'JWT Auth & Hardened RBAC', level: 'Hardened' },
        { name: 'Microservices Architecture', level: 'Applied' },
        { name: 'Asynchronous Event Handlers', level: 'Queues' },
        { name: 'Error Handling Middleware', level: 'Robust' },
      ],
    },
    {
      title: 'Databases & Caching',
      icon: <Database className="w-4 h-4 text-rose-300" />,
      tag: '05',
      accentColor: 'text-rose-300',
      skills: [
        { name: 'PostgreSQL (Relational Indexing)', level: '<80ms' },
        { name: 'MongoDB (Mongoose ODM)', level: 'Advanced' },
        { name: 'Database Schema Normalization', level: 'Rigorous' },
        { name: 'Index Optimization & Aggregations', level: 'Tuned' },
        { name: 'Data Validation Middleware', level: 'Secured' },
        { name: 'Redis (Caching Strategies)', level: 'Applied' },
      ],
    },
    {
      title: 'DevOps & AI Toolchains',
      icon: <Wrench className="w-4 h-4 text-rose-400" />,
      tag: '06',
      accentColor: 'text-rose-400',
      skills: [
        { name: 'OpenAI & Claude APIs', level: 'Streaming' },
        { name: 'Docker & Containerization', level: 'Configured' },
        { name: 'Git & GitHub Actions', level: 'CI/CD' },
        { name: 'Vercel Deployments', level: '99.9% Uptime' },
        { name: 'Postman & API Testing', level: 'Daily' },
        { name: 'Linux / Bash Shell', level: 'Proficient' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 border-b border-white/10 relative z-10 overflow-hidden">
      {/* Chapter Watermark */}
      <span className="chapter-watermark">05</span>

      <div className="mb-14 reveal-on-scroll relative z-10">
        <div className="flex items-center gap-2 font-mono text-xs text-crimson uppercase tracking-widest mb-3">
          <span>CHAPTER 05</span>
          <span className="h-px w-8 bg-crimson/40"></span>
          <span>COMPETENCY INDEX</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-tight">
          Core <br />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-crimson to-scarlet">
            Competencies.
          </span>
        </h2>
        <p className="text-xs font-mono text-slate-400 mt-3">
          Exhaustive multi-tier matrix spanning programming languages, distributed infrastructure, and AI engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs relative z-10">
        {skillCategories.map((category, idx) => (
          <div key={category.tag} className={`reveal-on-scroll stagger-${(idx % 3) + 1}`}>
            <TiltCard className="p-6 space-y-4 border border-white/10 bg-black/80">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 font-bold uppercase text-white">
                  {category.icon}
                  <span className={category.accentColor}>{category.title}</span>
                </div>
                <span className="text-slate-500 text-[11px] font-bold">{category.tag}</span>
              </div>

              <div className="space-y-2 pt-1">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded transition-colors group">
                    <span className="text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
                    <span className="text-[10px] text-slate-400 group-hover:text-rose-300 font-medium px-2 py-0.5 rounded bg-white/5 border border-white/5 transition-colors">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
};
