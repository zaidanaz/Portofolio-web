import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Users
} from 'lucide-react';
import { ACHIEVEMENTS_DATA, ADDITIONAL_ACHIEVEMENTS } from '../data/achievements';
import ScrollReveal from './react-bits/ScrollReveal';
import BorderGlow from './react-bits/BorderGlow';

export default function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalCertificate, setModalCertificate] = useState(null);

  const current = ACHIEVEMENTS_DATA[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? ACHIEVEMENTS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === ACHIEVEMENTS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="achievements" className="py-20 bg-[#FFFDF7] relative overflow-hidden">
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
          className="mb-10"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            Achievements & Recognition
          </h2>
        </ScrollReveal>

        {/* Seamless Borderless Featured Showcase wrapped in BorderGlow */}
        <ScrollReveal
          mode="scrub"
          enableBlur={true}
          blurStrength={6}
          baseOpacity={0.15}
          effect="fade"
          duration={0.8}
          smoothing={0.2}
          className="mb-14"
        >
          <BorderGlow
            borderRadius={24}
            edgeSensitivity={25}
            glowRadius={35}
            glowIntensity={0.85}
            colors={['#38bdf8', '#818cf8', '#c084fc']}
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white/70 border border-softblue/25 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left: Certificate Preview (6 cols) */}
                <div className="lg:col-span-6">
                  <div 
                    onClick={() => setModalCertificate(current)}
                    className="group relative rounded-2xl overflow-hidden bg-white border border-softblue/25 shadow-xs cursor-pointer aspect-[4/3] flex items-center justify-center p-3 hover:shadow-sm transition-all duration-300"
                  >
                    <img
                      src={current.certificateImg}
                      alt={`${current.competition} Certificate`}
                      className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-102 transition-transform duration-300"
                    />
                    
                    {/* Click to inspect badge */}
                    <div className="absolute bottom-3 right-3 bg-navy/90 text-white text-xs px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5 text-cream" />
                      <span>Inspect Certificate</span>
                    </div>

                    {/* Rank Badge */}
                    <div className="absolute top-3 left-3 bg-crimson text-white font-display font-bold text-xs uppercase px-3 py-1 rounded-full shadow-xs">
                      {current.rank}
                    </div>
                  </div>
                </div>

                {/* Right: Award Metadata & Details (6 cols) */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-cream text-maroon border border-softblue/25">
                        {current.scope}
                      </span>
                      <span className="text-xs font-semibold text-navy/60">
                        Year {current.year}
                      </span>
                      {current.project && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-softblue/20 text-navy">
                          Project: {current.project}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight mb-1">
                      {current.competition}
                    </h3>

                    <p className="text-crimson font-bold text-base mb-4">
                      {current.organizer}
                    </p>

                    <div className="space-y-1.5 mb-5">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-navy/80">
                        <Trophy className="w-4 h-4 text-amber-600 shrink-0" />
                        <span><strong>Category:</strong> {current.category}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-navy/80">
                        <Users className="w-4 h-4 text-softblue-dark shrink-0" />
                        <span><strong>Verified Scope:</strong> {current.participantStats}</span>
                      </div>
                    </div>

                    <p className="text-navy/75 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {current.description}
                    </p>
                  </div>

                  {/* Action Buttons & Carousel Arrows */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-softblue/20">
                    {current.documentationUrl ? (
                      <a
                        href={current.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-navy hover:bg-navy-dark text-white rounded-xl text-xs font-bold shadow-xs transition-all transform hover:-translate-y-0.5"
                      >
                        <span>Official Documentation</span>
                        <ExternalLink className="w-3.5 h-3.5 text-cream" />
                      </a>
                    ) : (
                      <span className="text-xs text-navy/50 italic">
                        Documentation archived internally
                      </span>
                    )}

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrev}
                        className="p-2 rounded-full bg-cream/70 hover:bg-cream text-navy border border-softblue/25 shadow-xs transition-transform active:scale-95"
                        aria-label="Previous achievement"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <span className="text-xs font-bold text-navy px-1">
                        {activeIndex + 1} / {ACHIEVEMENTS_DATA.length}
                      </span>

                      <button
                        onClick={handleNext}
                        className="p-2 rounded-full bg-cream/70 hover:bg-cream text-navy border border-softblue/25 shadow-xs transition-transform active:scale-95"
                        aria-label="Next achievement"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </BorderGlow>

          {/* Seamless Borderless Tab Pagination underneath */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-8 pt-6 border-t border-softblue/20">
            {ACHIEVEMENTS_DATA.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`p-3 rounded-2xl text-left transition-all ${
                  activeIndex === idx
                    ? 'bg-cream/80 border border-crimson shadow-xs'
                    : 'bg-white hover:bg-cream/30 border border-softblue/20 opacity-70 hover:opacity-100'
                }`}
              >
                <p className="text-[10px] font-bold uppercase text-crimson">{item.rank}</p>
                <p className="text-xs font-bold text-navy truncate">{item.organizer}</p>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Additional National Recognitions */}
        <ScrollReveal
          mode="scrub"
          enableBlur={true}
          blurStrength={6}
          baseOpacity={0.15}
          effect="fade"
          duration={0.8}
          smoothing={0.2}
          className="pt-4"
        >
          <h3 className="font-display font-bold text-navy text-lg sm:text-xl mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-crimson" />
            <span>Additional Competition Recognitions</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ADDITIONAL_ACHIEVEMENTS.map((item) => (
              <BorderGlow
                key={item.id}
                borderRadius={20}
                edgeSensitivity={25}
                glowRadius={30}
                glowIntensity={0.75}
                colors={['#38bdf8', '#818cf8', '#c084fc']}
              >
                <div className="p-5 rounded-2xl bg-white border border-softblue/20 shadow-xs hover:shadow-sm transition-shadow h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-cream text-maroon border border-softblue/20">
                        {item.rank}
                      </span>
                      <span className="text-xs text-navy/50 font-semibold">{item.year}</span>
                    </div>
                    <h4 className="font-display font-bold text-navy text-sm mb-1">
                      {item.competition}
                    </h4>
                    <p className="text-xs text-crimson font-medium mb-1.5">
                      {item.organizer}
                    </p>
                  </div>
                  <p className="text-xs text-navy/60">
                    {item.participants}
                  </p>
                </div>
              </BorderGlow>
            ))}
          </div>
        </ScrollReveal>

      </div>

      {/* Full Certificate Lightbox Inspection Modal */}
      {modalCertificate && (
        <div
          onClick={() => setModalCertificate(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center border border-softblue/30"
          >
            <div className="w-full flex items-center justify-between pb-3 border-b border-softblue/20 mb-3">
              <div>
                <h4 className="font-display font-bold text-navy text-base sm:text-lg">
                  {modalCertificate.competition}
                </h4>
                <p className="text-xs text-crimson font-medium">
                  {modalCertificate.rank} • {modalCertificate.organizer}
                </p>
              </div>
              <button
                onClick={() => setModalCertificate(null)}
                className="p-1.5 rounded-full hover:bg-cream text-navy"
                aria-label="Close certificate inspection"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-auto max-h-[75vh] w-full flex items-center justify-center p-2 bg-cream/20 rounded-2xl">
              <img
                src={modalCertificate.certificateImg}
                alt={modalCertificate.competition}
                className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-xs"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
