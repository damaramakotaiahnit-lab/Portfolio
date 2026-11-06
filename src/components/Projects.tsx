import React, { useState } from 'react';
import { Zap, Check, Maximize2, Github, Linkedin, X, CheckCircle2, Database, Sparkles, FolderGit2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [filterProject, setFilterProject] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions = ['All', 'Project 01', 'Project 02', 'Project 03', 'Project 04', 'Project 05'];

  const filteredProjects = filterProject === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.projectNumber === filterProject);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-bold shadow-sm">
              <FolderGit2 className="w-4 h-4 text-indigo-400" />
              <span>Production Capstones • End-to-End Analytics</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              5 Enterprise Data & BI Projects
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Full-scale enterprise implementations: On-Premises Gateways, Power BI Service Dataflows, Azure SQL Cloud, Google BigQuery, and cross-platform database migrations.
            </p>
          </div>

          {/* Section Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl glass-card border border-indigo-500/20 self-start md:self-auto">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilterProject(opt)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  filterProject === opt
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md font-bold border border-indigo-400/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden border border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Banner */}
                <div className={`p-6 sm:p-7 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]"></div>
                  
                  <div className="relative z-10 flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-xs font-mono font-bold text-white border border-white/15 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                        {project.projectNumber}
                      </span>
                      {project.sectionBadge && (
                        <span className="px-2.5 py-1 rounded-full bg-indigo-600/90 text-[10px] font-mono font-bold text-white border border-indigo-400/30">
                          {project.sectionBadge}
                        </span>
                      )}
                      <span className="text-xs font-mono text-slate-200 hidden sm:inline">
                        • {project.category}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-mono text-indigo-200 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-yellow-300" />
                      {project.metrics}
                    </span>
                  </div>

                  <div className="relative z-10 space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm group-hover:translate-x-1 transition-transform">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-indigo-100 font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-6">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-indigo-500/20 space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Data Pipeline & Source Systems:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.dataSources.map((source, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 text-[11px] font-mono border border-slate-800">
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-semibold block">
                      Core Technical Deliverables:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {project.highlights.slice(0, 3).map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200">
                    <strong className="text-white block mb-0.5 font-mono uppercase">Business Outcome:</strong>
                    {project.businessImpact}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 sm:p-7 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                  {project.toolsUsed.map((tool, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-800/80 text-[11px] font-mono text-slate-300">
                      #{tool}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 min-w-[140px] py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-indigo-500/25 transition-colors shadow-sm"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Deep Dive</span>
                  </button>

                  <a
                    href={project.linkedinPostUrl || "https://www.linkedin.com/in/ramakotaiah-dama-04789b245/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 hover:text-white border border-indigo-500/30 transition-colors flex items-center gap-1.5 text-xs font-mono font-semibold"
                    title="LinkedIn Project Post"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Post</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-indigo-500/25 transition-colors flex items-center gap-1.5 text-xs font-mono"
                    title="GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="glass-card max-w-3xl w-full rounded-3xl border border-indigo-500/30 p-6 sm:p-8 space-y-6 relative max-h-[92vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 border border-indigo-500/20 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold">
                  {selectedProject.projectNumber}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {selectedProject.category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-slate-400 text-sm">
                {selectedProject.subtitle}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-300 text-sm leading-relaxed">
              {selectedProject.description}
            </div>

            {selectedProject.daxFunctions && selectedProject.daxFunctions.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-indigo-300 uppercase tracking-wider font-mono flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  Key DAX Functions & Formulations Engineered:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  {selectedProject.daxFunctions.map((dax, dIdx) => (
                    <div key={dIdx} className="p-2.5 rounded-xl bg-slate-950 border border-indigo-500/20 text-indigo-200">
                      • {dax}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Architecture & Engineering Workflows:
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-sm text-indigo-200">
              <strong className="text-white block font-mono text-xs uppercase mb-1">Business Impact & Stakeholder Value:</strong>
              {selectedProject.businessImpact}
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
              <button 
                onClick={() => setSelectedProject(null)}
                className="flex-1 min-w-[120px] py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 text-white font-bold text-sm shadow-lg hover:shadow-indigo-500/25 transition-all"
              >
                Close
              </button>
              <a 
                href={selectedProject.linkedinPostUrl || "https://www.linkedin.com/in/ramakotaiah-dama-04789b245/"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] py-3 rounded-xl bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600/30 font-semibold text-sm text-center border border-indigo-500/30 transition-colors flex items-center justify-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-indigo-400" />
                <span>LinkedIn Post</span>
              </a>
              <a 
                href={selectedProject.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm text-center border border-indigo-500/30 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Code Repo</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};