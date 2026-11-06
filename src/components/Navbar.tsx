import React, { useState } from 'react';
import { Linkedin, Github, ArrowRight, Menu, X, Award, GraduationCap } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-indigo-500/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Title */}
          <a href="#hero" className="flex items-center gap-3.5 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 p-[2px] shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-all duration-300">
                <div className="w-full h-full bg-[#080c16] rounded-[10px] flex items-center justify-center font-mono font-bold text-lg text-indigo-400 group-hover:text-white transition-colors overflow-hidden">
                  <img 
                    src={profileData.avatarUrl} 
                    alt={profileData.name} 
                    className="w-full h-full object-cover rounded-[10px]"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = '1';
                        target.src = './Ramakotaiah Dama _ LinkedIn_files/1793940865669';
                      } else {
                        target.style.display = 'none';
                      }
                    }}
                  />
                  <span className="fallback-initials">RD</span>
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#080c16] rounded-full"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                  {profileData.name}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-medium hidden sm:inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open to Work
                </span>
              </div>
              <span className="block text-xs font-mono text-indigo-400 font-semibold">
                Enterprise BI & Data Analyst
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Projects (10)</a>
            <a href="#education" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
              <span>Education</span>
            </a>
            <a href="#certifications" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-purple-400" />
              <span>Certifications (7)</span>
            </a>
            <a href="./resume.html" target="_blank" className="text-xs px-3 py-1 rounded-full font-semibold text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 transition-all flex items-center gap-1">
              <span>Resume</span>
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Contact</a>
          </div>

          {/* Actions: Social & Connect CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-indigo-500/20 hover:border-indigo-400 text-slate-300 hover:text-indigo-300 transition-all duration-200"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-indigo-500/20 hover:border-indigo-400 text-slate-300 hover:text-indigo-300 transition-all duration-200"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 transition-all duration-200 border border-indigo-400/30"
            >
              <span>Connect / Hire</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-indigo-500/25 text-slate-200 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-indigo-500/20 px-5 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Open to Work in Hyderabad & Bengaluru</span>
          </div>
          <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-300 hover:text-indigo-400">Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-300 hover:text-indigo-400">About (Personal Details)</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-300 hover:text-indigo-400">Skills (Split One by One)</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-indigo-300 hover:text-indigo-400">Projects (10)</a>
          <a href="#education" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-300 hover:text-indigo-400 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-indigo-400" />
            <span>Education (B.Tech JNTUK)</span>
          </a>
          <a href="#certifications" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-300 hover:text-indigo-400 flex items-center gap-2">
            <Award className="w-4 h-4 text-purple-400" />
            <span>Certifications (7 Verified)</span>
          </a>
          <a href="./resume.html" target="_blank" className="block py-2 text-sm font-semibold text-emerald-300 hover:text-emerald-400">
            📄 View ATS Resume (Print / PDF)
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-300 hover:text-indigo-400">Contact</a>
          <div className="pt-3 flex gap-3">
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2.5 rounded-xl bg-slate-900 border border-indigo-500/25 text-indigo-300 font-semibold text-sm flex items-center justify-center gap-2">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex-1 text-center py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm">Connect</a>
          </div>
        </div>
      )}
    </nav>
  );
};