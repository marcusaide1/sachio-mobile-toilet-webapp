// src/pages/AboutPage.jsx
import React from 'react';
import { 
  Factory, 
  Award, 
  Users, 
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  Building2, 
  ArrowRight,
  Truck,
  FileCheck
} from 'lucide-react';
import { COMPANY_INFO, KEY_METRICS } from '../data/websiteData';

export default function AboutPage({ onOpenQuoteModal }) {
  return (
    <div className="pt-24 md:pt-28 pb-20 bg-white">
      {/* Banner */}
      <div className="bg-[#002245] text-white py-14 mb-12">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-xs font-din text-[#7ed956] uppercase tracking-widest mb-1">
            Home / About Us
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-din font-bold uppercase tracking-wider mb-2">
            ABOUT SACHIO EXPRESS
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl font-sans">
            Sachio Express — Global leader in prefabricated modular structures, portable container housing, and industrial steel building manufacturing.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-din font-bold text-[#7ed956] uppercase tracking-widest block mb-2">
              Corporate Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-din font-bold text-[#002245] uppercase mb-6 leading-tight">
              15+ Years of Dedicated Prefabricated Engineering & Global Distribution
            </h2>
            <div className="space-y-4 text-sm text-gray-600 font-sans leading-relaxed">
              <p>
                <strong>Sachio Express</strong> is a professional manufacturer and global supplier specializing in steel structure buildings, modular construction, and prefabricated housing solutions. Headquartered in Xiamen, China, our international trade team provides comprehensive support for overseas customers, while our manufacturing facilities located in Quanzhou, Fujian and Weifang, Shandong cover more than 10,000 square meters with over 200 skilled employees.
              </p>
              <p>
                With a monthly production capacity of approximately 50,000 square meters of housing, we are capable of delivering both standard products and customized projects for customers worldwide. We offer free design consultation, CAD drawings, project planning, customized solutions, quality inspection, and international shipping support.
              </p>
              <p>
                As a reliable partner in the modular construction industry, Sachio Express serves a wide range of global markets, including residential, commercial, industrial, construction, tourism, and emergency applications.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="btn-topindus-more px-7 py-3 text-xs font-din font-bold uppercase tracking-wider text-white shadow-lg"
              >
                <span>Request Company Dossier</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-none overflow-hidden shadow-2xl border-4 border-gray-100 bg-black">
              <iframe
                src="https://www.youtube.com/embed/OnDDVdpgAfg"
                title="Sachio Express Manufacturing & Factory Tour"
                className="w-full aspect-video"
                allowFullScreen
              ></iframe>
              <div className="bg-[#002245] p-4 text-white text-xs font-din uppercase flex items-center justify-between">
                <span>Certified High-Tech Factory Production</span>
                <span className="text-[#7ed956]">ISO 9001 / 14001 / 45001</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#f8f9fa] p-8 border border-gray-200 mb-16 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-din font-bold text-[#002245]">25,000 m²</div>
            <div className="text-xs text-gray-500 uppercase mt-1">Total Workshop Area</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-din font-bold text-[#002245]">200+</div>
            <div className="text-xs text-gray-500 uppercase mt-1">Skilled Fabricators</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-din font-bold text-[#002245]">50,000 m²</div>
            <div className="text-xs text-gray-500 uppercase mt-1">Monthly Capacity</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-din font-bold text-[#002245]">50+ Countries</div>
            <div className="text-xs text-gray-500 uppercase mt-1">Export Destinations</div>
          </div>
        </div>

        {/* Manufacturing Strengths Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-din font-bold text-[#002245] uppercase">
              Why Global Partners Choose Sachio Express
            </h3>
            <div className="w-12 h-1 bg-[#7ed956] mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded bg-[#002245] text-[#7ed956] flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="font-din text-lg font-bold text-[#002245] uppercase mb-2">Free CAD & BIM Drafting</h4>
              <p className="text-xs text-gray-600 font-sans leading-relaxed">
                Our in-house design team provides free 3D architectural drawings, structural calculations, and installation manuals tailored to your site.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded bg-[#002245] text-[#7ed956] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-din text-lg font-bold text-[#002245] uppercase mb-2">Strict QC & Hot-Dip Galvanizing</h4>
              <p className="text-xs text-gray-600 font-sans leading-relaxed">
                Every beam, column, and panel undergoes ultrasonic weld testing, slag removal, and anti-corrosion hot-dip galvanizing before container loading.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded bg-[#002245] text-[#7ed956] flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h4 className="font-din text-lg font-bold text-[#002245] uppercase mb-2">Ocean Container Packaging</h4>
              <p className="text-xs text-gray-600 font-sans leading-relaxed">
                Specialized steel packing frames optimize container space, prevent sea voyage vibration damage, and expedite on-site fork unloading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
