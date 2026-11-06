import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const education = educationData[0];

  return (
    <section id="education" className="py-20 md:py-24 relative z-10 border-t border-slate-800/80 bg-[#080c16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 font-semibold">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Formal Education & Foundations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg">
            Engineering foundation in relational database architecture, applied mathematics, statistical computing, and analytical modeling.
          </p>
        </div>

        {/* Dedicated Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-indigo-500/25 relative overflow-hidden shadow-2xl space-y-8">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* University & Degree Banner */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="flex items-start sm:items-center gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-900 border border-indigo-500/30 p-2 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-lg">
                  <img 
                    src={education.logoUrl} 
                    alt={education.institution} 
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-semibold mb-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Graduated Engineer</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {education.degree}
                  </h3>
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-300 mt-0.5">
                    {education.institution}
                  </h4>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  {education.location}
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  {education.period}
                </span>
              </div>
            </div>

            {/* Description & Core Academic Pillars */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                Academic Overview & Technical Rigor:
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {education.description} Comprehensive coursework in database design, mathematical statistics, algorithm optimization, and computing theory provided the rigorous analytical mindset required for enterprise-scale Data Analysis and Business Intelligence architectures.
              </p>
            </div>

            {/* Coursework Pills */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                Core Engineering & Analytical Coursework:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {education.coursework.map((course, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-900/90 border border-indigo-500/20 text-center flex flex-col items-center justify-center gap-1 hover:border-indigo-500/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 mb-0.5" />
                    <span className="text-xs font-bold text-slate-200">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Highlights Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-sky-500/10 border border-indigo-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Engineering Degree Verified</div>
                  <div className="text-xs text-slate-400">Jawaharlal Nehru Technological University, Kakinada</div>
                </div>
              </div>
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-indigo-500/30 text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Strong Academic Record
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};