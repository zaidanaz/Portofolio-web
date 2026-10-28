import React from 'react';
import { 
  Wind, 
  Code, 
  Lightbulb, 
  Layers, 
  Sparkles,
  Compass
} from 'lucide-react';
import ScrollReveal from './react-bits/ScrollReveal';
import BorderGlow from './react-bits/BorderGlow';

export default function About() {
  const technicalInterests = [
    {
      title: 'Mechanical Design & CAD',
      desc: 'Parametric 3D part modeling, mechanical assembly design, and tolerance integration.',
      icon: Layers,
      color: 'text-crimson bg-crimson/10'
    },
    {
      title: 'Computational Fluid Dynamics',
      desc: 'Velocity fields, streamline mapping, and fluid dynamics behavior simulation in ANSYS Fluent.',
      icon: Wind,
      color: 'text-softblue-dark bg-softblue/15'
    },
    {
      title: 'Sustainable Energy',
      desc: 'Renewable technology conceptualization including wind turbine design and clean systems.',
      icon: Sparkles,
      color: 'text-emerald-700 bg-emerald-50'
    },
    {
      title: 'Software Development',
      desc: 'Interactive engineering and educational web applications built with React and cloud backends.',
      icon: Code,
      color: 'text-navy bg-navy/10'
    },
    {
      title: 'Research & Innovation',
      desc: 'Proposal synthesis, experimental design, and tech-driven smart agricultural systems.',
      icon: Lightbulb,
      color: 'text-amber-700 bg-amber-50'
    },
    {
      title: 'Engineering Problem Solving',
      desc: 'Translating open-ended industrial challenges into rigorous, verifiable physical prototypes.',
      icon: Compass,
      color: 'text-maroon bg-maroon/10'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cream/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-softblue/10 rounded-full blur-3xl pointer-events-none -z-10" />

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
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream border border-softblue/30 text-navy font-semibold text-xs tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
            <span>Profile Overview</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            About Me
          </h2>
        </ScrollReveal>

        {/* Row 1: Left = Condensed Overview (7 cols), Right = Enlarged Education Card (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Left Column: Core Overview wrapped in BorderGlow & ScrollReveal */}
          <div className="lg:col-span-7 flex flex-col">
            <ScrollReveal
              mode="scrub"
              enableBlur={true}
              blurStrength={6}
              baseOpacity={0.15}
              effect="fade"
              duration={0.8}
              smoothing={0.2}
              className="h-full"
            >
              <BorderGlow
                borderRadius={24}
                edgeSensitivity={25}
                glowRadius={35}
                glowIntensity={0.85}
                colors={['#38bdf8', '#818cf8', '#c084fc']}
                className="h-full"
              >
                <div className="h-full flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-[#FFFDF7] border border-softblue/25 shadow-xs">
                  <div className="space-y-5 text-navy/85 text-base sm:text-lg leading-relaxed font-normal">
                    <p>
                      I'm an Industrial Mechanical Engineering student at <strong className="text-navy font-semibold">Institut Teknologi Sepuluh Nopember (ITS)</strong>, exploring the intersection of mechanical design, sustainable energy, computational fluid dynamics (CFD), 3D CAD modeling, and digital software tools.
                    </p>
                    <p>
                      Driven by curiosity and empirical problem-solving, I combine rigorous engineering principles with modern software architectures to translate real-world challenges into practical, sustainable solutions. Beyond technical simulation, I actively participate in research initiatives, student organizations, and interdisciplinary innovation.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-softblue/20 mt-6 flex items-center gap-3 text-xs sm:text-sm text-navy/70 italic">
                    <span className="w-2 h-2 rounded-full bg-crimson shrink-0" />
                    <span>"Engineering is about understanding problems, continuously learning, and creating solutions that positively impact society."</span>
                  </div>
                </div>
              </BorderGlow>
            </ScrollReveal>
          </div>

          {/* Right Column: Higher Education Card with 3x Scaled ITS Logo without enclosing box */}
          <div className="lg:col-span-5 flex flex-col">
            <ScrollReveal
              mode="scrub"
              enableBlur={true}
              blurStrength={6}
              baseOpacity={0.15}
              effect="fade"
              duration={0.8}
              smoothing={0.2}
              className="h-full"
            >
              <BorderGlow
                borderRadius={24}
                edgeSensitivity={25}
                glowRadius={35}
                glowIntensity={0.85}
                colors={['#38bdf8', '#818cf8', '#c084fc']}
                className="h-full"
              >
                <div className="h-full p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#FFFDF7] to-cream/60 border border-softblue/30 shadow-xs flex flex-col justify-between">
                  <div>
                    {/* Header: 3x Scaled Logo freely placed on surface, no enclosing box */}
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 flex items-center justify-center">
                        <img
                          src="/assets/logo/Logo ITS.png"
                          alt="Institut Teknologi Sepuluh Nopember"
                          className="w-full h-full object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-navy text-white mb-2 inline-block">
                          Higher Education
                        </span>
                        <h3 className="font-display font-bold text-navy text-xl sm:text-2xl lg:text-[26px] leading-tight">
                          Institut Teknologi Sepuluh Nopember (ITS)
                        </h3>
                        <p className="text-crimson font-bold text-base sm:text-lg mt-1">
                          Industrial Mechanical Engineering
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-navy/75 mb-6 leading-relaxed">
                      Class of 2025 • Third-semester student focusing on fluid dynamics, thermal systems, and parametric mechanical drafting.
                    </p>
                  </div>

                  {/* Verification Status Cards */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-softblue/20">
                    <div className="p-3.5 rounded-2xl bg-white/80 border border-softblue/20">
                      <p className="text-[10px] uppercase font-bold text-navy/55 tracking-wider">Current Standing</p>
                      <p className="text-base font-bold text-navy mt-0.5">Semester 3</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white/80 border border-softblue/20">
                      <p className="text-[10px] uppercase font-bold text-navy/55 tracking-wider">Cumulative GPA</p>
                      <p className="text-base font-bold text-crimson mt-0.5">3.61 / 4.00</p>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </ScrollReveal>
          </div>

        </div>

        {/* Row 2: Technical Interests Section Spanning Horizontally Across Bottom */}
        <ScrollReveal
          mode="scrub"
          enableBlur={true}
          blurStrength={6}
          baseOpacity={0.15}
          effect="fade"
          duration={0.8}
          smoothing={0.2}
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-bold text-navy text-xl flex items-center gap-2">
                <span>Technical Interests & Engineering Disciplines</span>
              </h3>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cream text-maroon border border-softblue/25">
                Core Competencies
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {technicalInterests.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <BorderGlow
                    key={idx}
                    borderRadius={20}
                    edgeSensitivity={25}
                    glowRadius={30}
                    glowIntensity={0.75}
                    colors={['#38bdf8', '#818cf8', '#c084fc']}
                  >
                    <div className="p-5 rounded-2xl bg-[#FFFDF7] border border-softblue/25 shadow-xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between h-full">
                      <div>
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${item.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-display font-bold text-navy text-base mb-1.5">
                          {item.title}
                        </h4>
                        <p className="text-navy/70 text-xs sm:text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </BorderGlow>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
