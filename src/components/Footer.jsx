import React from 'react';
import { ArrowUp, Heart, FileDown } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white pt-16 pb-12 border-t border-softblue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Identity & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center p-1.5 rounded-xl bg-white border border-white/20 shadow-md">
                <img
                  src="/assets/logo/Logo Web.png"
                  alt="Zaidan Azizan Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Zaidan Azizan
              </span>
            </div>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-sm">
              Industrial Mechanical Engineering student at Institut Teknologi Sepuluh Nopember (ITS). Focused on sustainable energy systems, computational fluid dynamics, 3D CAD modeling, and interactive technology.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-cream border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Available for Engineering Opportunities
              </span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-cream">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me & Education
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Selected Projects & 3D CAD
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience & Leadership
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-white transition-colors">
                  Achievements & Awards
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Direct Discussion
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Download (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-cream">
              Documents & Portfolio
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Curriculum Vitae featuring academic milestones, organizational roles, and competition accomplishments.
            </p>
            <div className="pt-2">
              <a
                href="/assets/profile/CV Zaidan Azizan.pdf"
                download="CV_Zaidan_Azizan.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-crimson hover:bg-crimson-hover text-white text-xs font-bold transition-all shadow-md"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Zaidan Azizan. Built with React, Tailwind CSS, & Three.js.</p>
          
          <div className="flex items-center gap-6">
            <span>Surabaya, Indonesia</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
