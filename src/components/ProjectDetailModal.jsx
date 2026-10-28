import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Layers, 
  ChevronRight, 
  CheckCircle2, 
  Eye, 
  Box, 
  Image as ImageIcon 
} from 'lucide-react';
import Interactive3DViewer from './Interactive3DViewer';

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const [activeTab, setActiveTab] = useState(project.has3DModel ? '3d' : 'overview');
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-navy/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#FFFDF7] rounded-3xl shadow-2xl border border-softblue/30 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-softblue/20">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cream text-maroon border border-softblue/30">
              {project.category}
            </span>
            <span className="text-xs text-navy/60 hidden sm:inline">Project Details</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-cream/70 text-navy transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 bg-white/50 border-b border-softblue/20">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold transition-all relative ${
              activeTab === 'overview'
                ? 'text-crimson'
                : 'text-navy/70 hover:text-navy'
            }`}
          >
            Overview & Approach
            {activeTab === 'overview' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-crimson rounded-full" />
            )}
          </button>

          {project.has3DModel && (
            <button
              onClick={() => setActiveTab('3d')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 relative ${
                activeTab === '3d'
                  ? 'text-crimson'
                  : 'text-navy/70 hover:text-navy'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>Interactive 3D CAD</span>
              {activeTab === '3d' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-crimson rounded-full" />
              )}
            </button>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <button
              onClick={() => setActiveTab('gallery')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 relative ${
                activeTab === 'gallery'
                  ? 'text-crimson'
                  : 'text-navy/70 hover:text-navy'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Visual Gallery ({project.gallery.length})</span>
              {activeTab === 'gallery' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-crimson rounded-full" />
              )}
            </button>
          )}
        </div>

        {/* Modal Body Scroll Area */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* 3D Tab */}
          {activeTab === '3d' && project.has3DModel && (
            <div className="space-y-4">
              <Interactive3DViewer
                modelPath={project.modelUrl}
                height="480px"
              />
              <div className="p-4 rounded-2xl bg-cream/60 border border-softblue/30 text-xs sm:text-sm text-navy/80">
                <p className="font-semibold text-navy mb-1">Authentic Autodesk Fusion 360 Model</p>
                <p>
                  This model was created for the EduTools program at Society of Renewable Energy (SRE) ITS. Use your mouse or touchscreen to orbit 360°, inspect the nacelle housing, rotor hub, and tower geometry.
                </p>
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="space-y-4">
              {/* Main Preview Container */}
              <div className="relative rounded-2xl overflow-hidden bg-navy/5 border border-softblue/30 aspect-video flex items-center justify-center p-2">
                <img
                  src={project.gallery[activeGalleryIndex]?.src}
                  alt={project.gallery[activeGalleryIndex]?.title}
                  className="max-h-full max-w-full object-contain rounded-lg"
                />
              </div>

              {/* Caption */}
              <div className="p-3.5 rounded-xl bg-white border border-softblue/20">
                <h4 className="font-display font-bold text-navy text-sm">
                  {project.gallery[activeGalleryIndex]?.title}
                </h4>
                <p className="text-xs text-navy/70 mt-1">
                  {project.gallery[activeGalleryIndex]?.caption}
                </p>
              </div>

              {/* Thumbnail Strip */}
              {project.gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {project.gallery.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGalleryIndex(idx)}
                      className={`relative shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                        activeGalleryIndex === idx
                          ? 'border-crimson shadow-md scale-105'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Title & Short Description */}
              <div>
                <h3 className="font-display font-bold text-2xl text-navy tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-navy/80 text-sm leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>

              {/* Tools Badges */}
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-softblue/30 text-navy shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Objective & Approach Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-softblue/25 shadow-sm">
                  <h4 className="font-display font-bold text-navy text-sm mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-crimson" />
                    <span>Project Objective</span>
                  </h4>
                  <p className="text-xs text-navy/75 leading-relaxed">
                    {project.objective}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-softblue/25 shadow-sm">
                  <h4 className="font-display font-bold text-navy text-sm mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-softblue-dark" />
                    <span>Engineering Approach</span>
                  </h4>
                  <p className="text-xs text-navy/75 leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              </div>

              {/* Key Learnings List */}
              {project.keyLearnings && (
                <div className="p-5 rounded-2xl bg-cream/40 border border-softblue/25">
                  <h4 className="font-display font-bold text-navy text-sm mb-3">
                    Key Outcomes & Engineering Learnings
                  </h4>
                  <ul className="space-y-2">
                    {project.keyLearnings.map((learning, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-navy/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white border-t border-softblue/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.has3DModel && (
              <button
                onClick={() => setActiveTab('3d')}
                className="flex items-center gap-1.5 px-4 py-2 bg-navy hover:bg-navy-dark text-white rounded-xl text-xs font-semibold shadow-sm transition-all"
              >
                <Box className="w-3.5 h-3.5" />
                <span>Open 3D Model</span>
              </button>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 bg-crimson hover:bg-crimson-hover text-white rounded-xl text-xs font-semibold shadow-glow-crimson transition-all"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-cream/80 hover:bg-cream text-navy rounded-xl text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
