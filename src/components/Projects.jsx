import React, { useState } from 'react';
import { 
  ExternalLink, 
  Eye, 
  Maximize2,
  X,
  Target,
  Wrench,
  Cpu
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import ScrollReveal from './react-bits/ScrollReveal';
import BorderGlow from './react-bits/BorderGlow';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [inspectImage, setInspectImage] = useState(null);

  const categories = [
    'All Projects',
    'Engineering Simulation',
    '3D CAD Design',
    'Web Development'
  ];

  const filteredProjects = selectedCategory === 'All Projects'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-[#FFFDF7] relative">
      {/* Decorative background shapes */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-softblue/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cream/70 rounded-full blur-3xl pointer-events-none -z-10" />

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
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream border border-softblue/30 text-navy font-semibold text-xs tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
              <span>Selected Works</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight mb-2">
              Selected Projects
            </h2>
            <p className="text-navy/70 text-base">
              Hands-on engineering simulation, parametric CAD assembly, and web development.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-softblue/30 shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-navy text-white shadow-xs'
                    : 'text-navy/70 hover:text-navy hover:bg-cream/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Cards List with BorderGlow & ScrollReveal */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => {
            const isTurbine = project.id === 'wind-turbine-cad';
            const isEnglish = project.id === 'english-mastery-app';
            const isAnsys = project.id === 'ansys-exhaust-manifold';

            return (
              <ScrollReveal
                key={project.id}
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
                  <div className="bg-white rounded-3xl border border-softblue/30 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                      
                      {/* Left: Visual Showcase (7 cols) */}
                      <div className="lg:col-span-7 bg-[#FAF7F0] p-4 sm:p-6 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-softblue/20">
                        
                        {/* 1. Fusion 360: Static High-Resolution Image Showcase (No 3D Loader) */}
                        {isTurbine && (
                          <div className="space-y-3">
                            <div 
                              onClick={() => setInspectImage({ src: project.coverImage, title: project.title })}
                              className="relative rounded-2xl overflow-hidden bg-white border border-softblue/30 shadow-xs cursor-pointer group"
                            >
                              <img
                                src={project.coverImage}
                                alt="Autodesk Fusion 360 Wind Turbine Assembly"
                                className="w-full h-auto max-h-[380px] object-contain group-hover:scale-102 transition-transform duration-300"
                              />
                              <div className="absolute top-3 left-3 bg-navy/85 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-white">
                                Autodesk Fusion 360 CAD
                              </div>
                              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-navy flex items-center gap-1.5 shadow-xs opacity-90 group-hover:opacity-100 transition-opacity">
                                <Maximize2 className="w-3.5 h-3.5 text-crimson" />
                                <span>Click to Expand</span>
                              </div>
                            </div>
                            <p className="text-[11px] text-navy/60 italic text-center">
                              Figure: SRE ITS EduTools Wind Turbine assembly showcasing nacelle, aerofoil blade, and gearbox housing.
                            </p>
                          </div>
                        )}

                        {/* 2. English Mastery: Clean Seamless Connected Preview Strip (No Fake Browser Bar) */}
                        {isEnglish && (
                          <div className="space-y-3">
                            <div className="relative rounded-2xl bg-white border border-softblue/25 p-3 shadow-xs">
                              {/* Connected Horizontal Preview Strip */}
                              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
                                {project.gallery.map((item, gIdx) => (
                                  <div
                                    key={gIdx}
                                    onClick={() => setInspectImage({ src: item.src, title: `English Mastery — ${item.title}` })}
                                    className="group shrink-0 w-64 sm:w-72 rounded-xl overflow-hidden bg-[#FAF7F0] border border-softblue/20 shadow-xs cursor-pointer hover:shadow-sm transition-all duration-200"
                                  >
                                    <div className="aspect-[16/10] overflow-hidden bg-white">
                                      <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="p-2.5 bg-white border-t border-softblue/15 flex items-center justify-between text-xs">
                                      <span className="font-semibold text-navy truncate">{item.title}</span>
                                      <Maximize2 className="w-3 h-3 text-crimson opacity-70 group-hover:opacity-100 shrink-0 ml-1" />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <p className="text-[11px] text-navy/60 italic text-center">
                              Connected preview strip: Click any screen to view full resolution.
                            </p>
                          </div>
                        )}

                        {/* 3. ANSYS Fluent CFD Manifold Preview */}
                        {isAnsys && (
                          <div className="space-y-3">
                            <div 
                              onClick={() => setInspectImage({ src: project.coverImage, title: project.title })}
                              className="relative rounded-2xl overflow-hidden bg-navy/95 border border-navy/20 shadow-xs cursor-pointer group"
                            >
                              <img
                                src={project.coverImage}
                                alt="ANSYS Fluent CFD Velocity Contours"
                                className="w-full h-auto max-h-[380px] object-cover group-hover:scale-102 transition-transform duration-300"
                              />
                              <div className="absolute top-3 left-3 bg-navy/85 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-cream">
                                ANSYS Fluent CFD Post-Processing
                              </div>
                              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-navy flex items-center gap-1.5 shadow-xs opacity-90 group-hover:opacity-100 transition-opacity">
                                <Maximize2 className="w-3.5 h-3.5 text-crimson" />
                                <span>Click to Expand</span>
                              </div>
                            </div>
                            <p className="text-[11px] text-navy/60 italic text-center">
                              Figure: Fluid flow velocity distribution and streamline convergence inside 4-to-1 manifold runners.
                            </p>
                          </div>
                        )}

                      </div>

                      {/* Right: Scannable Technical Problem -> Solution -> Skills Architecture (5 cols) */}
                      <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                          {/* Category Badge & Index */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-cream text-maroon border border-softblue/30">
                              {project.categoryFull || project.category}
                            </span>
                            <span className="font-display font-bold text-navy/30 text-sm">
                              0{idx + 1}
                            </span>
                          </div>

                          {/* Project Title */}
                          <h3 className="font-display font-bold text-xl sm:text-2xl text-navy tracking-tight mb-4">
                            {project.title}
                          </h3>

                          {/* Scannable Architecture Pattern */}
                          <div className="space-y-3 mb-6 text-xs sm:text-sm">
                            {/* 1. Problem / Objective */}
                            <div className="p-3 rounded-xl bg-white border border-softblue/20">
                              <p className="font-bold text-navy text-[11px] uppercase tracking-wider flex items-center gap-1.5 mb-1 text-crimson">
                                <Target className="w-3.5 h-3.5" />
                                <span>Objective</span>
                              </p>
                              <p className="text-navy/80 leading-relaxed">
                                {project.objective}
                              </p>
                            </div>

                            {/* 2. Core Solution */}
                            <div className="p-3 rounded-xl bg-white border border-softblue/20">
                              <p className="font-bold text-navy text-[11px] uppercase tracking-wider flex items-center gap-1.5 mb-1 text-navy">
                                <Wrench className="w-3.5 h-3.5 text-softblue-dark" />
                                <span>Core Solution</span>
                              </p>
                              <p className="text-navy/80 leading-relaxed">
                                {project.solution}
                              </p>
                            </div>

                            {/* 3. Key Technical Skills Applied */}
                            <div className="p-3 rounded-xl bg-cream/40 border border-softblue/20">
                              <p className="font-bold text-navy text-[11px] uppercase tracking-wider flex items-center gap-1.5 mb-1 text-maroon">
                                <Cpu className="w-3.5 h-3.5" />
                                <span>Key Technical Skills</span>
                              </p>
                              <p className="text-navy/80 font-medium leading-relaxed">
                                {project.keySkillsApplied}
                              </p>
                            </div>
                          </div>

                          {/* Software Badges */}
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.tools.map((tool, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[#F5EFE0] text-navy border border-softblue/20"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="pt-4 border-t border-softblue/20 flex flex-wrap items-center gap-3">
                          {isEnglish && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 bg-crimson hover:bg-crimson-hover text-white rounded-xl text-xs font-bold shadow-glow-crimson transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                            >
                              <span>Visit Live Website</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}

                          <button
                            onClick={() => setInspectImage({ src: project.coverImage, title: project.title })}
                            className="flex items-center gap-1.5 px-4 py-2.5 bg-white hover:bg-cream/60 text-navy border border-softblue/30 rounded-xl text-xs font-semibold transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Inspect Full Graphic</span>
                          </button>
                        </div>

                      </div>

                    </div>
                  </div>
                </BorderGlow>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

      {/* High-Resolution Image Lightbox Modal */}
      {inspectImage && (
        <div
          onClick={() => setInspectImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[92vh] bg-white rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center border border-softblue/30"
          >
            <div className="w-full flex items-center justify-between pb-3 border-b border-softblue/20 mb-3">
              <h4 className="font-display font-bold text-navy text-sm sm:text-base truncate max-w-md">
                {inspectImage.title}
              </h4>
              <button
                onClick={() => setInspectImage(null)}
                className="p-1.5 rounded-full hover:bg-cream text-navy"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-auto max-h-[78vh] w-full flex items-center justify-center p-2 bg-[#FAF7F0] rounded-2xl">
              <img
                src={inspectImage.src}
                alt={inspectImage.title}
                className="max-h-[75vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
