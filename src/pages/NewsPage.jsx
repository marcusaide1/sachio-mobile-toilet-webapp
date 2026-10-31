// src/pages/NewsPage.jsx
import React from 'react';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { SHOWCASE_PROJECTS } from '../data/websiteData';

export default function NewsPage({ onOpenQuoteModal }) {
  return (
    <div className="pt-[64px] md:pt-[144px] pb-20 bg-[#f8f9fa]">
      <div className="bg-[#002245] text-white py-14 mb-12">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-xs font-din text-[#7ed956] uppercase tracking-widest mb-1">
            Home / News
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-din font-bold uppercase tracking-wider mb-2">
            NEWS & INDUSTRY DEVELOPMENTS
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl font-sans">
            Stay up to date with Sachio Express international shipments, fabrication technology advancements, and modular construction trends.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHOWCASE_PROJECTS.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="h-52 overflow-hidden bg-gray-100">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-xs text-[#7ed956] font-din uppercase mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-din text-base font-bold text-[#002245] uppercase mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 font-sans line-clamp-3 mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                <button
                  onClick={() => onOpenQuoteModal(item.title)}
                  className="text-xs font-din font-bold text-[#002245] hover:text-[#7ed956] uppercase flex items-center space-x-1"
                >
                  <span>Inquire Regarding Project</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
