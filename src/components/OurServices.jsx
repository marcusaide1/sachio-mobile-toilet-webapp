// src/components/OurServices.jsx
import React from 'react';
import { SERVICES } from '../data/websiteData';

export default function OurServices() {
  return (
    <section className="relative py-20 md:py-28 bg-[#002245] overflow-hidden">
      {/* Background with Industrial Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{
          backgroundImage: "url('https://www.topinduscabin.com/storage/uploads/images/202604/22/1776855061_bdxzKhWQjM.jpg')"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#002245]/90 via-[#002245]/80 to-[#002245]/95"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-din font-bold text-white uppercase tracking-wider">
            OUR SERVICE
          </h2>
          <div className="w-14 h-1 bg-[#7ed956] mx-auto mt-4 mb-3"></div>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto font-sans">
            End-to-end engineering support, customized architectural drafting, quality assurance, and round-the-clock technical service.
          </p>
        </div>

        {/* Service Card Grid inside Glassmorphism Frame */}
        <div className="bg-[#002245]/70 backdrop-blur-md border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={`p-8 md:p-10 text-center group transition-colors hover:bg-white/5 relative ${
                  index >= 3 ? 'lg:border-t lg:border-white/10' : ''
                }`}
              >
                {/* Icon with bounce animation on hover */}
                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="max-h-12 w-auto object-contain filter brightness-110"
                  />
                </div>

                {/* Title */}
                <h3 className="font-din text-xl md:text-2xl font-bold text-white group-hover:text-[#7ed956] uppercase transition-colors mb-2">
                  {service.title}
                </h3>

                {/* Small white line indicator */}
                <div className="w-6 h-0.5 bg-white/20 mx-auto mb-4 group-hover:w-10 group-hover:bg-[#7ed956] transition-all"></div>

                {/* Description */}
                <p className="text-xs md:text-sm text-gray-300 font-sans leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
