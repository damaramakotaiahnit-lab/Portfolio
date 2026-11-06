import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080c16] text-slate-100 relative overflow-x-hidden">
      
      {/* Animated Background Mesh & Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-indigo-600/15 rounded-full blur-[110px] animate-blob"></div>
        <div className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] bg-purple-600/15 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '3s' }}></div>
        <div className="absolute -bottom-40 left-1/3 w-[34rem] h-[34rem] bg-sky-500/12 rounded-full blur-[110px] animate-blob" style={{ animationDelay: '6s' }}></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#312e8112_1px,transparent_1px),linear-gradient(to_bottom,#312e8112_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;