import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import RubberSegment from './react-bits/RubberSegment';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['about', 'projects', 'experience', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', value: 'about', href: '#about' },
    { label: 'Projects', value: 'projects', href: '#projects' },
    { label: 'Experience', value: 'experience', href: '#experience' },
    { label: 'Achievements', value: 'achievements', href: '#achievements' },
    { label: 'Contact', value: 'contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/95 backdrop-blur-md shadow-sm border-b border-softblue/20'
          : 'py-4 sm:py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Vector Logo Asset */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-crimson rounded-lg"
          >
            <div className="h-10 w-10 flex items-center justify-center p-1 rounded-xl bg-white/80 border border-softblue/30 shadow-sm group-hover:scale-105 transition-all duration-300">
              <img
                src="/assets/logo/Logo Web.png"
                alt="Zaidan Azizan Portfolio"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-navy tracking-tight text-base sm:text-lg group-hover:text-crimson transition-colors">
                Zaidan Azizan
              </span>
              <span className="text-[11px] text-navy/60 font-medium tracking-wide uppercase hidden sm:block">
                Industrial Mechanical Eng. • ITS
              </span>
            </div>
          </a>

          {/* Desktop Navigation: RubberSegment Motion */}
          <nav className="hidden md:flex items-center">
            <RubberSegment
              items={navItems}
              value={activeSection}
              onChange={(val) => setActiveSection(val)}
              trackColor="rgba(255, 242, 213, 0.7)"
              thumbColor="#003049"
              textColor="#003049"
              activeTextColor="#FFFFFF"
              size="md"
              radius={9999}
              inset={3}
              stretch={100}
              squash={3}
              speed={1}
              glide={75}
              draggable
              className="border border-softblue/30 shadow-xs"
            />
          </nav>

          {/* Action Button: Download CV */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/assets/profile/CV Zaidan Azizan.pdf"
              download="CV_Zaidan_Azizan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-crimson hover:bg-crimson-hover rounded-full shadow-glow-crimson hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-crimson focus:ring-offset-2"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="/assets/profile/CV Zaidan Azizan.pdf"
              download="CV_Zaidan_Azizan.pdf"
              className="p-2 text-xs font-bold text-white bg-crimson rounded-full shadow-sm"
              title="Download CV"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/80 border border-softblue/30 text-navy hover:text-crimson hover:bg-cream/50 transition-colors focus:outline-none focus:ring-2 focus:ring-crimson"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-softblue/30 bg-white/95 backdrop-blur-md px-4 py-4 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.value;
            return (
              <a
                key={item.value}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-navy text-white shadow-xs font-bold'
                    : 'text-navy/80 hover:bg-cream/50 hover:text-navy'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-crimson" />}
              </a>
            );
          })}
          <div className="pt-2 border-t border-softblue/20">
            <a
              href="/assets/profile/CV Zaidan Azizan.pdf"
              download="CV_Zaidan_Azizan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-crimson rounded-xl shadow-glow-crimson"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
