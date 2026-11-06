import React from 'react';
import { MapPin, GraduationCap, Briefcase, CheckCircle2, Building } from 'lucide-react';
import { experienceData, educationData, profileData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 bg-[#090d18] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25">
            Professional Trajectory
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Simulations, Experience & Education
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical enterprise simulations, analytics training, and academic background from JNTUK.
          </p>
        </div>

        {/* Ready to Hire Banner */}
        <div className="mb-14 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-sky-500/10 border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-widest">
                Immediate Availability
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Open to Data Analyst & Business Analyst Roles
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Target Locations: <strong className="text-white">Hyderabad, Telangana</strong> & <strong className="text-white">Bengaluru, Karnataka</strong> (On-site, Hybrid, or Remote).
            </p>
          </div>
          <a
            href={`mailto:${profileData.email}?subject=Job%20Opportunity%20-%20Data%20Analyst`}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all whitespace-nowrap border border-indigo-400/30"
          >
            Hire Ramakotaiah
          </a>
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-indigo-500/20 ml-4 sm:ml-32 space-y-12">
          
          {/* Practical Experience / Simulations */}
          {experienceData.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#080c16] border-2 border-indigo-400 group-hover:scale-125 group-hover:bg-indigo-400 transition-all duration-300"></div>

              {/* Date Pill */}
              <div className="sm:absolute sm:-left-32 sm:w-24 sm:text-right text-xs font-mono text-indigo-400 font-bold pt-1 mb-2 sm:mb-0">
                {item.period}
              </div>

              {/* Content Card */}
              <div className="glass-card rounded-2xl p-6 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-indigo-400" />
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    {item.location}
                  </span>
                </div>
                
                <div className="text-sm font-semibold text-indigo-300 flex items-center gap-2">
                  <Building className="w-4 h-4 text-purple-400" />
                  <span>{item.company}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    Industry Simulation
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                  {item.skills.map((s, sI) => (
                    <span key={sI} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 border border-indigo-500/20 text-indigo-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}

          {/* Education Items */}
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#080c16] border-2 border-purple-400 group-hover:scale-125 group-hover:bg-purple-400 transition-all duration-300"></div>

              <div className="sm:absolute sm:-left-32 sm:w-24 sm:text-right text-xs font-mono text-purple-400 font-bold pt-1 mb-2 sm:mb-0">
                {edu.period}
              </div>

              <div className="glass-card rounded-2xl p-6 border border-indigo-500/20 group-hover:border-purple-500/40 transition-colors space-y-4">
                <div className="flex items-start gap-4">
                  {(edu.logoUrl || (edu as any).logo) && (
                    <img 
                      src={edu.logoUrl || (edu as any).logo} 
                      alt={edu.institution}
                      className="w-12 h-12 rounded-xl object-contain bg-slate-900 border border-indigo-500/25 p-1 flex-shrink-0"
                    />
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-purple-400" />
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    </div>
                    <div className="text-sm font-semibold text-purple-300 mt-0.5">
                      {edu.institution}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {edu.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-mono text-indigo-300 pt-2 border-t border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Rigorous Quantitative, Analytical, and Computational Foundation</span>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};