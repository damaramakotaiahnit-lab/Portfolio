import React, { useState } from 'react';
import { 
  User, Mail, Phone, MapPin, GraduationCap, Globe, 
  ExternalLink, Copy, Check, Target, Sparkles, 
  Briefcase, CheckCircle 
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const About: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="about" className="py-20 md:py-24 relative z-10 border-t border-slate-800/80 bg-[#0b101d]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 font-semibold">
            About Me & Bio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Professional Profile & Vision
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg">
            Engineering automated BI architectures, scalable cloud ETL pipelines, and executive dashboards with verified quantitative rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Full Professional Narrative */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-indigo-500/20 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/15 text-indigo-300 font-mono text-xs font-semibold">
                <Target className="w-4 h-4 text-indigo-400" />
                <span>Mission & Career Focus</span>
              </div>
              <p>
                I am an <strong className="text-white font-semibold">Enterprise Data Analyst and Business Intelligence Specialist</strong> focused on engineering automated data pipelines and decision cockpits that drive executive clarity and operational profitability.
              </p>
              <p>
                With hands-on experience building enterprise-scale reporting solutions, I specialize in <strong className="text-indigo-300 font-semibold">Power BI, Advanced DAX, SQL Server, MySQL, PostgreSQL, Snowflake, Azure SQL, and Google BigQuery</strong>. My capabilities cover On-Premises Standard Mode Gateways, Power BI Service Dataflows, cloud data warehouses, and multi-source database migrations.
              </p>
              <p>
                Backed by a Bachelor of Technology from <strong className="text-white font-medium">JNTUK</strong> and 7 verified industry certifications from <strong className="text-white">AWS, IBM, Deloitte, and LinkedIn Learning</strong>, I excel in identifying business anomalies, constructing predictive metrics, and writing high-performance SQL and DAX queries.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 italic border-l-2 border-indigo-500 pl-4 py-1">
                "Continuous learning, statistical integrity, and transforming complex raw databases into automated visual decision engines that propel companies forward."
              </p>
            </div>

            {/* Bottom Placement Status */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Immediate Placement Available</div>
                  <div className="text-xs text-slate-400">Hyderabad & Bengaluru · On-site, Hybrid, or Remote</div>
                </div>
              </div>
              
              <a 
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 hover:underline"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Personal Details & Contact Card */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-indigo-500/20 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                <User className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white tracking-tight">Personal & Contact Details</h3>
              </div>

              {/* Detail Items */}
              <div className="space-y-3.5">
                
                {/* Full Name */}
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-indigo-500/15 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Full Name</div>
                      <div className="text-sm font-bold text-white truncate">{profileData.name}</div>
                    </div>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-indigo-500/15 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Phone Number</div>
                      <a href={`tel:${profileData.phone || '+917095942623'}`} className="text-sm font-bold text-indigo-300 hover:underline truncate block">
                        {profileData.phone || '+91 7095942623'}
                      </a>
                    </div>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(profileData.phone || '+91 7095942623', 'phone')}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Email Address */}
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-indigo-500/15 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Email Address</div>
                      <a href={`mailto:${profileData.email}`} className="text-sm font-bold text-indigo-300 hover:underline truncate block">
                        {profileData.email}
                      </a>
                    </div>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(profileData.email, 'email')}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Degree */}
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-indigo-500/15 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Degree & Alma Mater</div>
                      <div className="text-sm font-bold text-white truncate">B.Tech (JNTUK University)</div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-indigo-500/15 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Location</div>
                      <div className="text-sm font-bold text-white truncate">Hyderabad, Telangana, India</div>
                      <div className="text-[11px] text-slate-400">Open to Bengaluru & Remote</div>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-indigo-500/15 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Languages Known</div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-mono text-xs font-semibold border border-indigo-500/30">
                          English (Fluent)
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 font-mono text-xs font-semibold border border-purple-500/30">
                          Telugu (Native)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Contact Action Button */}
            <a 
              href="#contact"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm text-center shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch Directly</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};