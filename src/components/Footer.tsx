import React from 'react';
import { profileData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 relative z-10 border-t border-slate-800 bg-[#080c16] w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          
          {/* Identity */}
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono font-bold text-sm border border-indigo-500/30">
              RD
            </div>
            <span className="text-sm font-bold text-white tracking-tight">
              {profileData.name}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              © {new Date().getFullYear()} All Rights Reserved.
            </span>
          </div>

          {/* Navigation Links - Ultra-responsive pills that wrap on any mobile device */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-3xl text-xs font-medium text-slate-300">
            <a href="#hero" className="px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/30 hover:text-white border border-slate-800 hover:border-indigo-500/40 transition-colors">Home</a>
            <a href="#about" className="px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/30 hover:text-white border border-slate-800 hover:border-indigo-500/40 transition-colors">About</a>
            <a href="#skills" className="px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/30 hover:text-white border border-slate-800 hover:border-indigo-500/40 transition-colors">Skills</a>
            <a href="#projects" className="px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/30 hover:text-white border border-slate-800 hover:border-indigo-500/40 transition-colors">Projects (5)</a>
            <a href="#education" className="px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/30 hover:text-white border border-slate-800 hover:border-indigo-500/40 transition-colors">Education (JNTUK)</a>
            <a href="#certifications" className="px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/30 hover:text-white border border-slate-800 hover:border-indigo-500/40 transition-colors">Certifications (7)</a>
            <a href="./resume.html" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-xl bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25 border border-emerald-500/30 transition-colors">ATS Resume</a>
            <a href="#contact" className="px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/30 hover:text-white border border-slate-800 hover:border-indigo-500/40 transition-colors">Contact</a>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-xl bg-indigo-500/15 text-indigo-300 hover:bg-indigo-500/25 border border-indigo-500/30 transition-colors">LinkedIn</a>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800/60 w-full max-w-md">
            <span>Engineered with</span>
            <span className="text-indigo-400 font-semibold">React</span>
            <span>•</span>
            <span className="text-purple-400 font-semibold">TypeScript</span>
            <span>•</span>
            <span className="text-sky-400 font-semibold">Tailwind CSS</span>
          </div>

        </div>
      </div>
    </footer>
  );
};