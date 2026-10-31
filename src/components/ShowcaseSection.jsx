// src/components/ShowcaseSection.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, MapPin, X } from 'lucide-react';
import { SHOWCASE_PROJECTS } from '../data/websiteData';

export default function ShowcaseSection({ onNavigateToShowcase }) {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  // Show 3 items on desktop, 2 on tablet, 1 on mobile
  const prevSlide = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : SHOWCASE_PROJECTS.length - 3));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % (SHOWCASE_PROJECTS.length - 2));
  };

  return (
    <section className="py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* Detail Modal for Selected Case Study */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border-t-4 border-[#7ed956]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 w-9 h-9 bg-gray-100 hover:bg-[#7ed956] text-gray-700 hover:text-white flex items-center justify-center transition z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 sm:h-80 overflow-hidden relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <span className="bg-[#7ed956] text-[#002245] text-xs font-din font-bold px-3 py-1 uppercase tracking-wider">
                  {selectedProject.location}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2 font-din uppercase">
                <Calendar className="w-3.5 h-3.5 text-[#7ed956]" />
                <span>{selectedProject.date}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-din font-bold text-[#002245] uppercase mb-4">
                {selectedProject.title}
              </h3>

              <div className="bg-gray-50 p-4 border-l-4 border-[#002245] mb-6 text-xs font-sans text-gray-700">
                <strong className="block text-[#002245] font-din uppercase text-sm mb-1">Project Technical Specifications:</strong>
                {selectedProject.specs}
              </div>

              <p className="text-sm text-gray-600 font-sans leading-relaxed mb-6">
                {selectedProject.excerpt}
              </p>

              <div className="pt-4 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-[#002245] hover:bg-[#7ed956] text-white px-6 py-2.5 font-din uppercase text-xs tracking-wider transition"
                >
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-din font-bold text-[#002245] uppercase tracking-wider">
              PROJECT SHOWCASE
            </h2>
            <div className="w-14 h-1 bg-[#7ed956] mt-4 mb-2"></div>
            <p className="text-xs sm:text-sm text-gray-500 font-sans max-w-xl">
              Real-world engineering deliveries, container ocean shipments, and turnkey site assembly across 50+ countries.
            </p>
          </div>

          {/* Slider Prev/Next Controls */}
          <div className="flex items-center space-x-3 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              className="w-10 h-10 border border-gray-300 hover:border-[#7ed956] hover:bg-[#7ed956] hover:text-white text-gray-700 flex items-center justify-center transition"
              aria-label="Previous showcase"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 border border-gray-300 hover:border-[#7ed956] hover:bg-[#7ed956] hover:text-white text-gray-700 flex items-center justify-center transition"
              aria-label="Next showcase"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={onNavigateToShowcase}
              className="btn-topindus-more text-xs font-din font-bold uppercase px-4 py-2.5 ml-2"
            >
              All Projects
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHOWCASE_PROJECTS.slice(startIndex, startIndex + 3).map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white relative flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-400 border-b-2 border-transparent hover:border-[#7ed956]"
            >
              {/* Project Image with Date Banner Badge */}
              <div className="relative h-60 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                
                {/* Date Banner Badge matching reference */}
                <div className="absolute top-0 left-0 bg-[#002245] group-hover:bg-[#7ed956] text-white text-[11px] font-din font-bold uppercase tracking-wider px-4 py-2 transition-colors duration-300 flex items-center space-x-1 shadow-md">
                  <Calendar className="w-3 h-3 text-[#7ed956] group-hover:text-[#002245]" />
                  <span>{project.date}</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[11px] px-2.5 py-1 flex items-center space-x-1 backdrop-blur-xs">
                  <MapPin className="w-3 h-3 text-[#7ed956]" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-din text-lg font-bold text-[#333333] group-hover:text-[#002245] line-clamp-2 leading-snug mb-3 uppercase transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-sans line-clamp-3 leading-relaxed mb-4">
                    {project.excerpt}
                  </p>
                </div>

                {/* Bottom Read More with Diamond Arrow */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-din font-bold text-[#002245] group-hover:text-[#7ed956] uppercase tracking-wider transition-colors">
                    Read Case Study
                  </span>
                  <div className="w-7 h-7 bg-gray-100 group-hover:bg-[#7ed956] text-gray-700 group-hover:text-white transform rotate-45 flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
