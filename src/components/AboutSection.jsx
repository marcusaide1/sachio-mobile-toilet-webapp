// src/components/AboutSection.jsx
import React, { useState } from 'react';
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Factory, Award } from 'lucide-react';

export default function AboutSection({ onNavigateToAbout }) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Content Column (7 cols) */}
          <div className="lg:col-span-7">
            {/* Tagline */}
            <div className="flex items-center space-x-2 text-xs font-din font-bold text-[#7ed956] tracking-widest uppercase mb-2">
              <span className="w-8 h-0.5 bg-[#7ed956]"></span>
              <span>About Sachio Express</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-din font-bold text-[#002245] uppercase leading-tight mb-6">
              PROFESSIONAL PORTABLE PRODUCTS MANUFACTURER
            </h2>

            {/* Giant "15 Years of Experience" Counter Banner */}
            <div className="flex items-center space-x-6 mb-8 pb-6 border-b border-gray-100">
              <div className="text-6xl sm:text-7xl md:text-8xl font-din font-bold text-image-clip tracking-tighter">
                15
              </div>
              <div>
                <span className="block font-din text-xl sm:text-2xl md:text-3xl font-bold text-[#002245] uppercase tracking-wide">
                  YEARS OF EXPERIENCE
                </span>
                <span className="text-xs sm:text-sm text-gray-500 font-sans">
                  Manufacturing Excellence • Global Export Coordination • Turnkey Engineering
                </span>
              </div>
            </div>

            {/* Two Core Advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#f7f7f7] p-4 border-l-4 border-[#7ed956]">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded bg-[#002245] text-[#7ed956] flex items-center justify-center">
                    <Factory className="w-4 h-4" />
                  </div>
                  <h4 className="font-din text-base font-bold text-[#002245] uppercase">OEM & ODM Custom</h4>
                </div>
                <p className="text-xs text-gray-600 font-sans leading-relaxed">
                  Sachio Express has its own in-house design engineering team and factory facilities. Both OEM and ODM are fully supported.
                </p>
              </div>

              <div className="bg-[#f7f7f7] p-4 border-l-4 border-[#002245]">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded bg-[#7ed956] text-[#002245] flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="font-din text-base font-bold text-[#002245] uppercase">Global Track Record</h4>
                </div>
                <p className="text-xs text-gray-600 font-sans leading-relaxed">
                  More than 15 years' proven expertise in prefabricated housing, structural steel frames, and portable sanitation worldwide.
                </p>
              </div>
            </div>

            {/* Descriptive Text */}
            <p className="text-sm text-gray-600 font-sans leading-relaxed mb-4">
              Sachio Group delivers premier portable sanitation services and modern modular construction solutions across Nigeria and global markets.
            </p>

            <p className="text-xs sm:text-sm text-gray-500 font-sans leading-relaxed mb-8">
              Sachio Mobile Toilets is Nigeria’s fastest-growing provider of portable restrooms and VIP luxury trailers, supporting corporate events, private celebrations, and large-scale construction sites.
            </p>

            {/* "More About" Button */}
            <button
              onClick={onNavigateToAbout}
              className="btn-topindus-more px-7 py-3 text-xs sm:text-sm font-din font-bold uppercase tracking-wider text-white shadow-lg"
            >
              <span>More About Us</span>
              <ArrowRight className="w-4 h-4 ml-3" />
            </button>
          </div>

          {/* Right Video / Media Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-none overflow-hidden shadow-2xl border-4 border-white bg-black">
              {/* YouTube video embed or thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                <iframe
                  src="https://www.youtube.com/embed/OnDDVdpgAfg"
                  title="Sachio Express Manufacturing & Factory Tour"
                  className="w-full h-full object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Decorative Frame Overlay */}
              <div className="bg-[#002245] text-white p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-din text-sm font-bold uppercase tracking-wide text-[#7ed956]">
                    Factory & Workshop Tour
                  </h4>
                  <p className="text-[11px] text-gray-300">
                    Watch our automated steel fabrication & modular assembly lines
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#7ed956] text-[#002245] flex items-center justify-center font-bold text-xs">
                  HD
                </div>
              </div>
            </div>

            {/* Quality Badges */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="bg-gray-50 p-2 border border-gray-100">
                <span className="block font-din text-xs font-bold text-[#002245]">ISO 9001</span>
                <span className="text-[10px] text-gray-500">Quality Certified</span>
              </div>
              <div className="bg-gray-50 p-2 border border-gray-100">
                <span className="block font-din text-xs font-bold text-[#002245]">ISO 14001</span>
                <span className="text-[10px] text-gray-500">Environmental</span>
              </div>
              <div className="bg-gray-50 p-2 border border-gray-100">
                <span className="block font-din text-xs font-bold text-[#002245]">ISO 45001</span>
                <span className="text-[10px] text-gray-500">Safety Standard</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
