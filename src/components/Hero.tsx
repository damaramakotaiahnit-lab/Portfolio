import React, { useState } from 'react';
import { Linkedin, Copy, Check, BarChart3, ShieldCheck, Database, Award, ArrowRight, Cloud, Layers } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Top Availability Banner */}
        <div className="flex justify-center lg:justify-start mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-indigo-200">
              Open to Work • Data Analyst & BI Developer • Hyderabad & Bengaluru
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Avatar & Title Header */}
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
              <div className="relative group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-[3px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 shadow-2xl shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300">
                  <div className="w-full h-full bg-[#080c16] rounded-[13px] overflow-hidden">
                    <img 
                      src={profileData.avatarUrl} 
                      alt={profileData.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-slate-900 border border-indigo-500/40 text-[10px] font-mono text-indigo-300 font-bold shadow-md">
                  JNTUK B.Tech
                </div>
              </div>

              <div className="space-y-1.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-indigo-500/25 text-xs text-indigo-300 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{profileData.name} (He/Him)</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Data Analyst & Business Intelligence Specialist
                </h2>
                <p className="text-xs sm:text-sm text-indigo-300 font-mono font-medium">
                  Power BI • Advanced DAX • SQL Server • BigQuery • Azure SQL • Python
                </p>
              </div>
            </div>

            {/* Impact Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Transforming Raw Enterprise Data Into <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">Actionable Business Intelligence</span>
              </h1>
              
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                Engineering end-to-end data pipelines and executive decision cockpits. Proven expertise in configuring <strong>On-Premises Data Gateways</strong>, <strong>Power BI Service Dataflows</strong>, <strong>Azure SQL</strong>, and <strong>Google BigQuery</strong> data warehouses with complex DAX modeling.
              </p>
            </div>

            {/* Core Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#projects"
                className="px-7 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all flex items-center gap-2 group border border-indigo-400/30"
              >
                <span>View 5 Enterprise Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="./resume.html"
                target="_blank"
                className="px-6 py-4 rounded-2xl glass-card text-emerald-300 font-semibold text-sm hover:border-emerald-400/50 hover:bg-slate-800/80 transition-all flex items-center gap-2 border border-emerald-500/30"
              >
                <span>ATS Resume</span>
              </a>

              <a 
                href="#certifications"
                className="px-6 py-4 rounded-2xl glass-card text-white font-semibold text-sm hover:border-indigo-400/50 hover:bg-slate-800/80 transition-all flex items-center gap-2 border border-slate-700"
              >
                <Award className="w-4 h-4 text-purple-400" />
                <span>7 Verified Credentials</span>
              </a>

              <a 
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-card text-slate-300 hover:text-white hover:border-indigo-400 transition-all border border-slate-700"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-indigo-400" />
              </a>
            </div>

            {/* Live Metrics Row */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-800/80">
              {profileData.metrics.map((m, idx) => (
                <div key={idx} className="glass-card p-3.5 rounded-2xl border border-indigo-500/20 hover:border-indigo-500/40 transition-colors">
                  <div className="text-xl sm:text-2xl font-black text-indigo-300 font-mono">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-bold text-slate-200 mt-0.5">
                    {m.label}
                  </div>
                  {m.subtext && (
                    <div className="text-[10px] text-slate-400 font-mono">
                      {m.subtext}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Live DAX & ETL Architecture Cockpit */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg">
              
              {/* Glowing decorative gradient behind card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-600 to-sky-500 rounded-3xl blur-2xl opacity-25 animate-pulse"></div>

              {/* Card Container */}
              <div className="relative rounded-3xl glass-card border border-indigo-500/25 overflow-hidden shadow-2xl p-6 sm:p-7 space-y-6">
                
                {/* Header status */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-mono text-slate-400 ml-2">enterprise_analytics.pbix</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-mono text-[11px] font-semibold">
                    ● PIPELINE ACTIVE
                  </span>
                </div>

                {/* Multi-source Data Pipeline Visualizer */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-semibold block">
                    Enterprise Source Systems & Gateways:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-slate-900/90 border border-indigo-500/20 text-slate-300 flex items-center gap-2">
                      <Database className="w-3.5 h-3.5 text-indigo-400" />
                      <span>SQL Server + Gateway</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900/90 border border-indigo-500/20 text-slate-300 flex items-center gap-2">
                      <Cloud className="w-3.5 h-3.5 text-sky-400" />
                      <span>Google BigQuery</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900/90 border border-indigo-500/20 text-slate-300 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-purple-400" />
                      <span>Azure SQL Cloud</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900/90 border border-indigo-500/20 text-slate-300 flex items-center gap-2">
                      <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Power BI Service App</span>
                    </div>
                  </div>
                </div>

                {/* Live DAX Code Card */}
                <div className="rounded-2xl bg-slate-950 p-4 border border-indigo-500/20 font-mono text-xs text-slate-300 space-y-1.5 shadow-inner">
                  <div className="text-slate-500 text-[10px] flex items-center justify-between pb-1 border-b border-slate-800/80">
                    <span>DAX Measure: YoY_Loan_Growth</span>
                    <span className="text-indigo-400 font-bold">100% Validated</span>
                  </div>
                  <div className="text-sky-400">
                    YoY_Loan_Growth =
                  </div>
                  <div className="text-slate-300 pl-3">
                    VAR CurrentYear = <span className="text-purple-400">CALCULATE</span>(SUM(Loans[Amount]))
                  </div>
                  <div className="text-slate-300 pl-3">
                    VAR PrevYear = <span className="text-purple-400">CALCULATE</span>(SUM(Loans[Amount]), <span className="text-indigo-400">SAMEPERIODLASTYEAR</span>(Dates[Date]))
                  </div>
                  <div className="text-slate-300 pl-3">
                    RETURN <span className="text-pink-400">DIVIDE</span>(CurrentYear - PrevYear, PrevYear, 0)
                  </div>
                  <div className="text-emerald-400 text-[11px] pt-1">
                    ✓ Rendered across 50,000+ records in &lt; 200ms
                  </div>
                </div>

                {/* Direct Email Quick Action */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-sky-500/10 border border-indigo-500/30 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-[10px] text-indigo-400 font-mono uppercase font-bold">Direct Recruiter Contact</div>
                    <div className="text-xs font-semibold text-white truncate">{profileData.email}</div>
                  </div>
                  <button 
                    onClick={handleCopyEmail}
                    className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};