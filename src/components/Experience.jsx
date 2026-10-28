import React, { useState } from 'react';
import { 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  CheckCircle2
} from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/experiences';
import { ORGANIZATIONS_DATA } from '../data/organizations';
import LogoLoop from './react-bits/LogoLoop';
import ScrollReveal from './react-bits/ScrollReveal';
import BorderGlow from './react-bits/BorderGlow';

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const [highlightedExpId, setHighlightedExpId] = useState(null);

  const displayedExperiences = showAll 
    ? EXPERIENCES_DATA 
    : EXPERIENCES_DATA.filter((exp) => exp.featured);

  const handleSelectOrg = (experienceId) => {
    if (!experienceId) return;
    setHighlightedExpId(experienceId);
    setShowAll(true);

    setTimeout(() => {
      const el = document.getElementById(experienceId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);

    setTimeout(() => {
      setHighlightedExpId(null);
    }, 3500);
  };

  return (
    <section id="experience" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal
          mode="scrub"
          enableBlur={true}
          blurStrength={6}
          baseOpacity={0.15}
          effect="fade"
          duration={0.8}
          smoothing={0.2}
          className="mb-8"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            Experience & Leadership
          </h2>
        </ScrollReveal>

        {/* 1. Looping Logo Marquee with 3x Larger Logos & Hover-to-Pause Container */}
        <div className="mb-14 p-4 sm:p-6 rounded-3xl bg-cream/40 border border-softblue/30 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between px-2 mb-3">
            <span className="text-[11px] font-bold text-navy/60 uppercase tracking-wider">
              Affiliated Organizations &amp; Student Chapters
            </span>
            <span className="hidden sm:inline-block text-[11px] font-medium text-navy/45 italic">
              Hover over track to pause
            </span>
          </div>

          <LogoLoop
            logos={ORGANIZATIONS_DATA}
            speed={55}
            gap={56}
            logoHeight={84}
            fadeOut={true}
            fadeOutWidth={0.12}
            pauseOnHover={true}
            onSelect={handleSelectOrg}
            className="py-1"
          />
        </div>

        {/* 2. Structured Two-Column Experience Cards wrapped in BorderGlow */}
        <div className="space-y-6">
          {displayedExperiences.map((exp) => {
            const isHighlighted = highlightedExpId === exp.id;

            return (
              <ScrollReveal
                key={exp.id}
                mode="scrub"
                enableBlur={true}
                blurStrength={6}
                baseOpacity={0.15}
                effect="fade"
                duration={0.8}
                smoothing={0.2}
              >
                <BorderGlow
                  borderRadius={24}
                  edgeSensitivity={25}
                  glowRadius={35}
                  glowIntensity={0.85}
                  colors={['#38bdf8', '#818cf8', '#c084fc']}
                >
                  <div
                    id={exp.id}
                    className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 border ${
                      isHighlighted
                        ? 'bg-cream/40 border-crimson ring-2 ring-crimson/50 shadow-glow-crimson scale-[1.005]'
                        : 'bg-[#FFFDF7] border-softblue/25 hover:border-softblue/50 shadow-xs hover:shadow-sm'
                    }`}
                  >
                    {/* Card Header: 3x Scaled Logo freely placed without box + Date in Top-Right Corner */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 pb-5 border-b border-softblue/15">
                      <div className="flex items-center gap-5">
                        {exp.logo && (
                          <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                            <img
                              src={exp.logo}
                              alt={exp.organization}
                              className="max-h-full max-w-full object-contain filter drop-shadow-xs"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="font-display font-bold text-lg sm:text-xl text-navy">
                              {exp.organization}
                            </h3>
                            {exp.recognitionBadge && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                                <Award className="w-3 h-3 text-amber-700" />
                                <span>{exp.recognitionBadge}</span>
                              </span>
                            )}
                          </div>
                          <p className="text-crimson font-bold text-sm sm:text-base">
                            {exp.position}
                          </p>
                        </div>
                      </div>

                      {/* Execution period strictly on top-right corner */}
                      <div className="shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/70 border border-softblue/20 text-xs font-semibold text-navy/70 self-start">
                        <Calendar className="w-3 h-3 text-crimson" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Two-Column Internal Layout: Left = Context & Scope, Right = Key Responsibilities */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      
                      {/* Left Column: Role Context & Scope (5 cols) */}
                      <div className="lg:col-span-5">
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-navy/55 mb-2">
                          Context & Scope
                        </h4>
                        <p className="text-sm text-navy/80 leading-relaxed font-normal">
                          {exp.summary}
                        </p>
                      </div>

                      {/* Right Column: Key Responsibilities Bullet Points (7 cols) */}
                      <div className="lg:col-span-7">
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-navy/55 mb-2">
                          Key Responsibilities & Deliverables
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-navy/80">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                  </div>
                </BorderGlow>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Progressive Disclosure Toggle */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-cream/60 text-navy font-bold text-xs uppercase tracking-wider rounded-full border border-softblue/30 shadow-xs hover:shadow-sm transition-all duration-200"
          >
            <span>
              {showAll ? 'Show Featured Experiences Only' : `View All ${EXPERIENCES_DATA.length} Experiences & Roles`}
            </span>
            {showAll ? <ChevronUp className="w-4 h-4 text-crimson" /> : <ChevronDown className="w-4 h-4 text-crimson" />}
          </button>
        </div>

      </div>
    </section>
  );
}
