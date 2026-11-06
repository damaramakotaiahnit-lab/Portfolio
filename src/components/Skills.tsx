import React, { useState } from 'react';
import { Database, BarChart3, Cpu, Cloud, Sparkles } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Database: <Database className="w-6 h-6 text-indigo-400" />,
  Cloud: <Cloud className="w-6 h-6 text-sky-400" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-purple-400" />,
  Cpu: <Cpu className="w-6 h-6 text-pink-400" />,
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All', 
    'Databases & SQL Engineering', 
    'Cloud Platforms & Data Warehousing', 
    'Power BI & Business Intelligence', 
    'Python, Analytics & GenAI'
  ];

  const displayedSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-24 relative z-10 bg-[#090d18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 font-semibold shadow-sm">
            Technical Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Enterprise Analytics & BI Tooling Matrix
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg">
            Split one-by-one: relational databases, multi-cloud platforms, BI visualization pipelines, and predictive data science.
          </p>

          {/* Interactive Category Filter */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold border-indigo-400/30 shadow-lg shadow-indigo-500/20"
                    : "bg-slate-900/80 text-slate-400 border-indigo-500/15 hover:text-white hover:border-indigo-500/30"
                }`}
              >
                {cat === 'All' ? 'All Skills Matrix' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {displayedSkills.map((cat, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-3xl p-6 sm:p-7 md:p-8 border border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-start gap-4 mb-6 pb-5 border-b border-slate-800">
                  <div className="w-12 h-12 p-3 rounded-2xl bg-slate-900/90 border border-indigo-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-indigo-500/50 transition-all duration-300 shadow-md flex-shrink-0">
                    {iconMap[cat.icon] || <Cpu className="w-6 h-6 text-indigo-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Individual Skill Items - Split One by One */}
                <div className="space-y-3.5">
                  {cat.items.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5 p-2.5 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 border border-indigo-500/10 hover:border-indigo-500/30 transition-all">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-bold text-slate-200">{skill.name}</span>
                        <span className="text-[11px] font-mono font-bold text-indigo-300 px-2 py-0.5 rounded bg-indigo-500/15 border border-indigo-500/25">
                          {skill.tag}
                        </span>
                      </div>
                      
                      {skill.highlight && (
                        <div className="text-[11px] text-slate-400 font-mono">
                          ↳ {skill.highlight}
                        </div>
                      )}

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden mt-1.5">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 transition-all duration-1000 shadow-sm"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Status */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-indigo-300">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
                  Production Ready
                </span>
                <span className="text-slate-300 font-bold">100% Validated</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner: End-to-End Stack Mastery */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl glass-card border border-indigo-500/20 bg-gradient-to-r from-slate-950 via-indigo-950/20 to-slate-950 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Full-Lifecycle Cloud & Database Competency
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              MySQL, PostgreSQL, Snowflake, Microsoft Azure, AWS (EC2 & S3), and Power BI Enterprise Architecture.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 text-xs font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-indigo-500/25 text-indigo-300">MySQL</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-indigo-500/25 text-sky-300">PostgreSQL</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-indigo-500/25 text-purple-300">Snowflake</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-indigo-500/25 text-pink-300">Microsoft Azure</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-indigo-500/25 text-emerald-300">AWS EC2 & S3</span>
          </div>
        </div>

      </div>
    </section>
  );
};