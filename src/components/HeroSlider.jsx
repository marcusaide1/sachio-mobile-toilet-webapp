// src/components/HeroSlider.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/websiteData';

export default function HeroSlider({ onNavigateToCategory, onOpenQuoteModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const scrollToCategories = () => {
    const el = document.getElementById('categories-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="relative w-full h-[380px] sm:h-[480px] md:h-[620px] lg:h-[700px] overflow-hidden bg-[#0d2d4e]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide Images & Overlays */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Background Image with slight scale animation */}
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover object-center transform transition-transform duration-7000 ease-out ${
              index === currentSlide ? 'scale-105' : 'scale-100'
            }`}
          />
          {/* Gradient Overlay for high text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Slide Text Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
              <div className="max-w-2xl transform transition-all duration-700 delay-300">
                {/* Category Pill Tag */}
                <span className="inline-block bg-[#7ed956] text-[#002245] text-xs font-din font-bold uppercase tracking-widest px-3 py-1 mb-3 clip-polygon-banner-badge">
                  {slide.category}
                </span>

                {/* Big Title */}
                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-din font-bold text-white uppercase leading-[1.1] mb-4 drop-shadow-md">
                  {slide.title}
                </h2>

                {/* Subtitle / Excerpt */}
                <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 font-sans leading-relaxed drop-shadow max-w-xl">
                  {slide.subtitle}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onNavigateToCategory(slide.category)}
                    className="btn-topindus-more px-6 py-3 font-din font-bold text-xs sm:text-sm uppercase tracking-wider text-white shadow-xl flex items-center gap-2 group"
                  >
                    <span>{slide.linkText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={onOpenQuoteModal}
                    className="bg-white/10 hover:bg-white text-white hover:text-[#002245] border border-white/40 px-6 py-3 font-din font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors duration-300 backdrop-blur-sm"
                  >
                    Quick Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-14 bg-black/30 hover:bg-[#7ed956] text-white hover:text-[#002245] flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-14 bg-black/30 hover:bg-[#7ed956] text-white hover:text-[#002245] flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Bullets */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 relative rounded-full ${
              idx === currentSlide
                ? 'w-8 h-2.5 bg-[#7ed956] shadow-[0_0_10px_#7ed956]'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Mouse Scroll Down Indicator Prompt */}
      <div 
        onClick={scrollToCategories}
        className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 z-20 cursor-pointer text-center opacity-75 hover:opacity-100 transition group"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full mx-auto relative p-1">
          <div className="w-1.5 h-2.5 bg-[#7ed956] rounded-full mx-auto animate-scroll-prompt"></div>
        </div>
      </div>
    </div>
  );
}
