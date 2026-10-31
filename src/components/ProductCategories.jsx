// src/components/ProductCategories.jsx
import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/websiteData';

export default function ProductCategories({ onSelectCategory, onOpenQuoteModal }) {
  return (
    <section id="categories-section" className="py-16 md:py-24 bg-[#f7f7f7] relative">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-din font-bold text-[#002245] uppercase tracking-wider">
            PRODUCT CATEGORIES
          </h2>
          {/* Green Line Indicator */}
          <div className="w-14 h-1 bg-[#7ed956] mx-auto mt-4 mb-3"></div>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-sans">
            Innovative modular engineering, prefabricated steel structures, high-durability portable sanitation cubicles, and mobile trailer units for industrial and commercial projects.
          </p>
        </div>

        {/* Categories Grid (5 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {PRODUCT_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.title)}
              className="group cursor-pointer bg-white relative p-4 pb-6 transition-all duration-400 hover:shadow-topindus-hover border-b border-gray-100 flex flex-col justify-between"
            >
              {/* Animated Green Line on Top */}
              <div className="absolute top-0 left-0 h-1 bg-[#7ed956] w-0 group-hover:w-full transition-all duration-500 ease-out"></div>

              {/* Card Header with Number and Title */}
              <div>
                <div className="relative flex items-center justify-between pt-4 pb-3 border-b border-gray-100 mb-3">
                  {/* Huge background number */}
                  <span className="absolute -left-1 -top-1 font-din text-6xl text-gray-900 opacity-5 pointer-events-none group-hover:text-[#7ed956] group-hover:opacity-10 transition-all">
                    {cat.num}
                  </span>

                  <div>
                    <span className="text-xs font-din font-bold text-[#7ed956] tracking-widest block uppercase">
                      Category {cat.num}
                    </span>
                    <h3 className="text-lg md:text-xl font-din font-bold text-[#002245] group-hover:text-[#7ed956] uppercase transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  {/* 45-degree diamond arrow badge */}
                  <div className="w-8 h-8 rounded-none bg-gray-100 group-hover:bg-[#7ed956] text-gray-600 group-hover:text-white flex items-center justify-center transform rotate-45 transition-colors shadow-sm flex-shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Subtitle / Excerpt */}
                <p className="text-xs text-gray-500 font-sans line-clamp-2 leading-relaxed mb-4">
                  {cat.desc}
                </p>
              </div>

              {/* Product Image with Zoom */}
              <div className="h-44 sm:h-48 overflow-hidden rounded bg-gray-50 flex items-center justify-center border border-gray-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
              </div>

              {/* Hover Footer Link */}
              <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-xs font-din uppercase tracking-wider text-[#002245] group-hover:text-[#7ed956] font-bold">
                <span>View Products</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => onOpenQuoteModal('Mobile Toilets')}
            className="w-full sm:w-auto bg-[#7ed956] hover:bg-[#002245] text-[#002245] hover:text-white px-8 py-4 font-din font-bold uppercase text-sm sm:text-base tracking-wider shadow-lg transition-colors duration-300"
          >
            Book Mobile Toilets
          </button>
        </div>
      </div>
    </section>
  );
}
