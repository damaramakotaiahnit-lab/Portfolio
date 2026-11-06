import React, { useState } from 'react';
import { Award, ExternalLink, ZoomIn, X, ShieldCheck, Calendar, Hash } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { Certification } from '../types';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [filterIssuer, setFilterIssuer] = useState<string>('All');

  const issuers = ['All', 'AWS', 'IBM Cognitive Class', 'Deloitte', 'LinkedIn Learning', 'Simplilearn'];

  const filteredCerts = filterIssuer === 'All'
    ? certificationsData
    : certificationsData.filter(c => c.issuer.toLowerCase().includes(filterIssuer.toLowerCase()));

  return (
    <section id="certifications" className="py-24 relative z-10 bg-[#0b101e]/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 font-semibold">
              Industry Certifications
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Verified Licenses & Certifications
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              8 industry-recognized certifications across Data Analytics Bootcamp, AWS Cloud, IBM SQL & Python, Tableau, and Deloitte simulations.
            </p>
          </div>

          {/* Issuer Filters */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl glass-card border border-indigo-500/20 self-start md:self-auto">
            {issuers.map((issuer) => (
              <button
                key={issuer}
                onClick={() => setFilterIssuer(issuer)}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  filterIssuer === issuer
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {issuer}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCerts.map((cert) => (
            <div 
              key={cert.id}
              className="glass-card rounded-2xl overflow-hidden border border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Certificate Image Banner */}
                <div 
                  onClick={() => setSelectedCert(cert)}
                  className="relative h-44 bg-slate-950/80 cursor-pointer overflow-hidden border-b border-indigo-500/20 group-hover:opacity-95"
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Zoom Overlay Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-950/70 backdrop-blur-xs transition-opacity duration-200">
                    <span className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg">
                      <ZoomIn className="w-3.5 h-3.5" />
                      View Certificate
                    </span>
                  </div>

                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-slate-900/90 backdrop-blur-md text-[10px] font-mono text-indigo-300 border border-indigo-500/30 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-indigo-400" />
                    {cert.badge || "Verified"}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-indigo-400 font-medium">
                    <Award className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{cert.issuer}</span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug line-clamp-2 group-hover:text-indigo-300 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((s, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-700/60">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer info */}
              <div className="p-5 pt-0 border-t border-slate-800/60 mt-3 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 text-[11px] font-mono">
                  <Calendar className="w-3 h-3 text-slate-500" />
                  {cert.issueDate}
                </span>

                <button 
                  onClick={() => setSelectedCert(cert)}
                  className="text-indigo-400 hover:text-indigo-300 font-mono text-[11px] flex items-center gap-1"
                >
                  Preview
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="glass-card max-w-3xl w-full rounded-3xl border border-indigo-500/30 p-6 space-y-5 relative max-h-[92vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-indigo-500/20 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-semibold">
                {selectedCert.issuer}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Issued {selectedCert.issueDate}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {selectedCert.title}
            </h3>

            {/* High-res Image Preview */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center max-h-[500px]">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title}
                className="w-full h-auto max-h-[500px] object-contain"
              />
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-indigo-500/20 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold block">
                Verification Details & Competency
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedCert.description}
              </p>
              {selectedCert.credentialId && (
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-1">
                  <Hash className="w-3.5 h-3.5 text-slate-500" />
                  <span>Credential ID: <strong className="text-slate-200">{selectedCert.credentialId}</strong></span>
                </div>
              )}
            </div>

            <div className="flex gap-3 pt-2">
              <a 
                href={selectedCert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm text-center shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2"
              >
                Open Verification Link
                <ExternalLink className="w-4 h-4" />
              </a>
              <button 
                onClick={() => setSelectedCert(null)}
                className="px-6 py-3 rounded-xl bg-slate-900 text-slate-300 hover:text-white font-semibold text-sm border border-indigo-500/30 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};