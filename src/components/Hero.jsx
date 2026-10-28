import React from 'react';
import { Compass, FileDown, MessageSquare, ArrowDown } from 'lucide-react';
import ScrollReveal from './react-bits/ScrollReveal';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-20 min-h-[92vh] lg:min-h-[96vh] pt-24 sm:pt-28 pb-0 flex items-end justify-center overflow-hidden bg-gradient-to-b from-[#FFFDF7] via-[#FFF9ED] to-[#FFFDF7] border-b border-softblue/30 shadow-[0_22px_45px_-12px_rgba(0,48,73,0.18),0_8px_20px_-6px_rgba(0,48,73,0.10)]"
    >
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-softblue/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-16 right-0 w-[42rem] h-[42rem] bg-cream-dark/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[34rem] h-[34rem] bg-softblue/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-end">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end">
          
          {/* Left Column: Typography, Bio Summary, Metrics, CTAs (6 cols on lg/xl) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left z-10 pt-4 pb-10 sm:pb-14 lg:pb-20">
            <ScrollReveal
              mode="scrub"
              enableBlur={true}
              blurStrength={6}
              baseOpacity={0.15}
              effect="fade"
              duration={0.8}
              smoothing={0.2}
              className="w-full"
            >
              {/* 1. Sub-badge strictly "HELLO, I'M" */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream border border-softblue/30 text-navy font-semibold text-xs tracking-wider uppercase mb-4 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-crimson" />
                <span>HELLO, I'M</span>
              </div>

              {/* 2. Headline: Name "Zaidan Azizan" */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.75rem] font-bold text-navy tracking-tight leading-[1.05] mb-4">
                Zaidan <span className="text-crimson inline-block">Azizan</span>
              </h1>

              {/* Sub-identity tag */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-maroon mb-4">
                <span className="px-2.5 py-1 rounded-md bg-cream/80 border border-softblue/20">
                  Industrial Mechanical Engineering Student at ITS
                </span>
                <span className="text-navy/40 hidden sm:inline">•</span>
                <span className="text-navy/70 font-medium">
                  Sustainable Energy | CAD & CFD | Innovation
                </span>
              </div>

              {/* 3. Concise 2-line Bio Summary */}
              <p className="text-navy/80 text-base sm:text-lg leading-relaxed max-w-xl mb-6 font-normal">
                Industrial Mechanical Engineering student at Institut Teknologi Sepuluh Nopember, exploring sustainable energy, 3D CAD design, CFD simulation, and web development to create impactful solutions.
              </p>

              {/* 4. Compact Highlight Achievement Stats Metrics */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-xl pt-4 pb-6 border-y border-softblue/20 mb-7">
                <div className="flex flex-col">
                  <span className="font-display font-bold text-2xl sm:text-3xl text-navy">3.61</span>
                  <span className="text-[11px] sm:text-xs text-navy/65 font-medium">Cumulative GPA / 4.00</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-2xl sm:text-3xl text-crimson">1st</span>
                  <span className="text-[11px] sm:text-xs text-navy/65 font-medium">National Winner (2x)</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-2xl sm:text-3xl text-softblue-dark">10+</span>
                  <span className="text-[11px] sm:text-xs text-navy/65 font-medium">Leadership Projects</span>
                </div>
              </div>

              {/* 5. Call-To-Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-crimson hover:bg-crimson-hover text-white text-sm font-bold tracking-wide rounded-full shadow-glow-crimson transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Compass className="w-4 h-4" />
                  <span>Explore My Work</span>
                </a>

                <a
                  href="/assets/profile/CV Zaidan Azizan.pdf"
                  download="CV_Zaidan_Azizan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-cream/60 text-navy text-sm font-bold tracking-wide rounded-full border border-softblue/40 shadow-xs hover:shadow transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <FileDown className="w-4 h-4 text-crimson" />
                  <span>Download CV</span>
                </a>

                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-navy hover:bg-navy-dark text-white text-sm font-bold tracking-wide rounded-full shadow-xs hover:shadow transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 text-cream" />
                  <span>Contact Me</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Photo 80% Scale (6 cols on lg/xl) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-end justify-center lg:justify-end self-end w-full h-full overflow-visible">
            {/* Ambient Backlight Behind Portrait */}
            <div className="absolute bottom-10 right-0 w-[28rem] h-[28rem] sm:w-[34rem] sm:h-[34rem] lg:w-[40rem] lg:h-[40rem] bg-softblue/25 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-0 right-10 w-80 h-80 sm:w-[26rem] sm:h-[26rem] bg-cream-dark/40 rounded-full blur-2xl pointer-events-none -z-10" />

            {/* Substantial Grounded Photo Container filling the right space */}
            <div className="relative w-full flex items-end justify-center lg:justify-end overflow-visible">
              <img
                src="/assets/profile/Photo Profile.png"
                alt="Zaidan Azizan"
                className="w-auto h-auto max-h-[480px] sm:max-h-[560px] md:max-h-[640px] lg:max-h-[700px] xl:max-h-[740px] max-w-full object-contain object-bottom filter drop-shadow-2xl block -mb-1 select-none transform-gpu scale-[1.06] sm:scale-[1.08] lg:scale-[1.10] xl:scale-[1.12] origin-bottom transition-transform duration-300"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Realistic Layer Depth Shadow casting downward at the boundary */}
      <div 
        className="absolute -bottom-8 left-0 right-0 h-8 pointer-events-none z-30 bg-gradient-to-b from-[rgba(0,48,73,0.16)] via-[rgba(0,48,73,0.06)] to-transparent" 
        aria-hidden="true" 
      />

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-navy/40 hover:text-crimson transition-colors text-xs font-medium z-20"
        aria-label="Scroll down to About section"
      >
        <span>Scroll to explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
}
