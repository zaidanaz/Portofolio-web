import React from 'react';
import ScrollReveal from './react-bits/ScrollReveal';

const TECH_STACK = [
  {
    name: 'Autodesk Fusion 360',
    category: '3D CAD & CAM',
    logo: '/assets/tech-stack/Fusion360.png'
  },
  {
    name: 'ANSYS Fluent',
    category: 'CFD Simulation',
    logo: '/assets/tech-stack/Ansys.png'
  },
  {
    name: 'AutoCAD',
    category: 'Engineering Drafting',
    logo: '/assets/tech-stack/AutoCAD.png'
  },
  {
    name: 'React.js',
    category: 'Frontend Engineering',
    logo: '/assets/tech-stack/React JS.png'
  },
  {
    name: 'VS Code',
    category: 'Code Environment',
    logo: '/assets/tech-stack/VsCode.png'
  },
  {
    name: 'Figma',
    category: 'UI/UX Interface Design',
    logo: '/assets/tech-stack/Figma.png'
  },
  {
    name: 'Canva',
    category: 'Visual & Presentation',
    logo: '/assets/tech-stack/Canva.png'
  },
  {
    name: 'Google Sheets',
    category: 'Data Analytics & Models',
    logo: '/assets/tech-stack/Spreadsheet.png'
  },
  {
    name: 'Google Docs',
    category: 'Technical Documentation',
    logo: '/assets/tech-stack/Docs.png'
  }
];

export default function SoftwareExpertStrip() {
  return (
    <section className="relative z-10 py-16 sm:py-20 bg-gradient-to-b from-[#F7F1E1]/70 via-[#FFFDF7] to-[#FFFDF7] border-b border-softblue/20 shadow-[inset_0_14px_24px_-10px_rgba(0,48,73,0.08)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <ScrollReveal
          mode="scrub"
          enableBlur={true}
          blurStrength={6}
          baseOpacity={0.15}
          effect="fade"
          duration={0.8}
          smoothing={0.2}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream border border-softblue/30 text-navy font-semibold text-xs tracking-wider uppercase mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
            <span>Tools &amp; Technologies</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mb-2">
            SOFTWARE PROFICIENCY
          </h2>
          <p className="text-navy/70 text-xs sm:text-sm">
            Standard computational tooling for parametric CAD modeling, CFD fluid dynamics, and modern software development.
          </p>
        </ScrollReveal>

        {/* Static Grid Layout: 3x Larger Logos, No Looping, Natural Aspect Ratios */}
        <ScrollReveal
          mode="scrub"
          enableBlur={true}
          blurStrength={6}
          baseOpacity={0.15}
          effect="fade"
          duration={0.8}
          smoothing={0.2}
        >
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-6 sm:gap-8 items-center justify-center">
            {TECH_STACK.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center text-center p-2 transition-all duration-300"
              >
                {/* 3x Scaled Static Logo */}
                <div className="w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Software Name Label */}
                <span className="font-display font-semibold text-xs sm:text-[13px] text-navy/90 group-hover:text-crimson transition-colors mt-2 text-center line-clamp-2">
                  {item.name}
                </span>
                
                {/* Discipline Tag */}
                <span className="text-[10px] text-navy/55 font-medium tracking-tight mt-0.5 hidden sm:block text-center">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
