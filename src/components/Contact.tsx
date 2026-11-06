import React, { useState } from 'react';
import { Linkedin, Mail, Github, Globe, ArrowUpRight, Copy, Check, ExternalLink, Send, Phone, PhoneCall } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, loading: false });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true });
    setTimeout(() => {
      setFormStatus({ submitted: true, loading: false });
      setContactForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus({ submitted: false, loading: false }), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-24 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 font-semibold">
            Connect & Hire
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Discuss Analytics Impact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg">
            Available for full-time Data Analyst & BI Developer roles in Hyderabad & Bengaluru (On-site, Hybrid, Remote).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Phone & Direct Call Banner */}
            <div className="glass-card rounded-2xl p-6 border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-bold text-white">Direct Phone Contact</h4>
                  <p className="text-xs text-slate-400">{profileData.phone}</p>
                </div>
              </div>
              <p className="text-sm text-slate-300">
                Reach out directly for interview scheduling, role discussions, or hiring briefings.
              </p>
              <div className="flex gap-2">
                <a 
                  href={`tel:${profileData.phone}`}
                  className="inline-flex items-center justify-center gap-2 flex-1 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm transition-colors shadow-lg shadow-indigo-500/25"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Directly</span>
                </a>
                <button 
                  onClick={handleCopyPhone}
                  className="p-3 rounded-xl bg-slate-900 border border-indigo-500/25 text-slate-300 hover:text-white"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-indigo-400" />}
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 border border-indigo-500/20 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-slate-300 flex items-center justify-center border border-indigo-500/20 flex-shrink-0">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400 font-mono">Direct Email</div>
                    <div className="text-sm font-semibold text-white break-all">{profileData.email}</div>
                  </div>
                </div>
                <button 
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-indigo-500/20 flex-shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-indigo-400" />}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-card rounded-2xl p-6 border border-indigo-500/20 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-indigo-400 flex items-center justify-center border border-indigo-500/20 flex-shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-400 font-mono">LinkedIn Profile</div>
                  <div className="text-sm font-semibold text-white truncate">1,304+ Followers • 1,481+ Impressions</div>
                </div>
              </div>
              <a 
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-indigo-500/20 flex-shrink-0"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Location & Availability Card */}
            <div className="glass-card rounded-2xl p-6 border border-indigo-500/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center border border-indigo-500/20 flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Location & Relocation</div>
                <div className="text-sm font-semibold text-white">{profileData.location}</div>
                <div className="text-xs text-indigo-400 font-mono">Open to Hyderabad, Bengaluru, Remote</div>
              </div>
            </div>

          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-5 sm:p-7 md:p-9 border border-indigo-500/20 shadow-xl">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="p-2 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400">
                <Send className="w-4 h-4" />
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Send Direct Message</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mb-5 sm:mb-7 leading-relaxed">
              Recruiters, hiring managers & teams: submit role requirements or inquiries below. Ramakotaiah replies within 24 hours.
            </p>

            {formStatus.submitted ? (
              <div className="p-6 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-indigo-500/25 text-indigo-300 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Dispatched!</h4>
                <p className="text-sm text-slate-300">
                  Thank you for reaching out, Ramakotaiah has received your message.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-slate-300 uppercase font-semibold">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Recruiter / Hiring Manager"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-slate-300 uppercase font-semibold">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="recruiter@company.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-slate-300 uppercase font-semibold">Subject / Role Title</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Data Analyst Opportunity / Interview Invitation"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-slate-300 uppercase font-semibold">Message</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Role requirements, interview details, or inquiries..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none text-white text-sm placeholder:text-slate-500 resize-none transition-all"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 active:scale-[0.99] shadow-xl shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 border border-indigo-400/30 cursor-pointer"
                >
                  <span>Send Direct Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 uppercase">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="recruiter@company.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-indigo-400 focus:outline-none text-white text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 uppercase">Subject</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Interview Invitation / Job Opportunity"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-indigo-400 focus:outline-none text-white text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 uppercase">Message</label>
                  <textarea 
                    rows={4} 
                    required
                    placeholder="Role requirements, interview details, or inquiries..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-indigo-400 focus:outline-none text-white text-sm resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={formStatus.loading}
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-xl shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 border border-indigo-400/30"
                >
                  {formStatus.loading ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};