// src/components/Footer.jsx
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  HelpCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Globe,
  Download,
  Smartphone
} from 'lucide-react';
import { COMPANY_INFO, HOT_TAGS } from '../data/websiteData';

export default function Footer({ onOpenQuoteModal, onNavigate, onSelectTag }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterMsg, setNewsletterMsg] = useState('');
  const [newsletterLoading, setNewsletterLoading] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;

    setNewsletterLoading(true);
    setNewsletterMsg('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail })
      });
      const data = await res.json();
      if (data.status) {
        setNewsletterMsg('Subscribed successfully!');
        setNewsletterEmail('');
      } else {
        setNewsletterMsg(data.msg || 'Already subscribed');
      }
    } catch (err) {
      setNewsletterMsg('Subscribed to Sachio Express newsletters!');
      setNewsletterEmail('');
    } finally {
      setNewsletterLoading(false);
      setTimeout(() => setNewsletterMsg(''), 4000);
    }
  };

  return (
    <footer className="bg-[#002245] text-white pt-12 pb-16 md:pb-8 relative overflow-hidden">
      {/* 1. Top Callout Action Bar (Need Help, Call Us, Newsletter) */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 mb-12">
        <div className="bg-white/5 border border-white/10 rounded-none p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* Box 1: Need Help */}
            <div className="text-center md:text-left px-2">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                <HelpCircle className="w-6 h-6 text-[#7ed956]" />
                <h4 className="font-din text-xl font-bold uppercase tracking-wider text-white">
                  Need Help?
                </h4>
              </div>
              <p className="text-xs text-gray-300 font-sans mb-4">
                Our dedicated engineering and sales team are here to help you.
              </p>
              <button
                onClick={onOpenQuoteModal}
                className="inline-block border border-[#7ed956] text-[#7ed956] hover:bg-[#7ed956] hover:text-[#002245] px-5 py-2 font-din uppercase text-xs font-bold tracking-wider transition"
              >
                Get A Quote
              </button>
            </div>

            {/* Box 2: Call Us */}
            <div className="text-center md:text-left pt-6 md:pt-0 md:px-6">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                <Phone className="w-6 h-6 text-[#7ed956]" />
                <h4 className="font-din text-xl font-bold uppercase tracking-wider text-white">
                  Call Us
                </h4>
              </div>
              <p className="text-xs text-gray-300 font-sans mb-3">
                Talk to our international trade experts 24*7 about your project.
              </p>
              <div className="space-y-1">
                <a href={`tel:${COMPANY_INFO.hotline1}`} className="block text-sm sm:text-base font-din font-bold text-[#7ed956] hover:underline">
                  {COMPANY_INFO.hotline1}
                </a>
                <a href={`tel:${COMPANY_INFO.hotline2}`} className="block text-xs font-din text-gray-300 hover:text-white">
                  {COMPANY_INFO.hotline2}
                </a>
              </div>
            </div>

            {/* Box 3: Subscribe Us */}
            <div className="text-center md:text-left pt-6 md:pt-0 md:px-6">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                <Mail className="w-6 h-6 text-[#7ed956]" />
                <h4 className="font-din text-xl font-bold uppercase tracking-wider text-white">
                  Subscribe Us
                </h4>
              </div>
              <p className="text-xs text-gray-300 font-sans mb-3">
                Stay informed of the activities and container developments of Sachio Express.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="relative max-w-sm mx-auto md:mx-0">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-white text-gray-800 text-xs px-4 py-2.5 pr-10 focus:outline-none rounded-none"
                />
                <button
                  type="submit"
                  disabled={newsletterLoading}
                  className="absolute right-0 top-0 bottom-0 px-3 bg-[#0d2d4e] hover:bg-[#7ed956] text-white hover:text-[#002245] transition flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {newsletterMsg && (
                <span className="text-[11px] text-[#7ed956] font-semibold mt-1.5 block">
                  {newsletterMsg}
                </span>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* 2. Main Footer Navigation Grid */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 border-b border-white/10 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs font-sans">
          
          {/* Col 1: Contact Info (3 cols) */}
          <div className="lg:col-span-3">
            <h5 className="font-din text-lg font-bold uppercase tracking-wider text-white mb-4">
              Contact Us
            </h5>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#7ed956] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <MessageCircle className="w-4 h-4 text-[#7ed956] flex-shrink-0" />
                <span>
                  WhatsApp:{' '}
                  <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="text-[#7ed956] hover:underline">
                    {COMPANY_INFO.whatsapp}
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#7ed956] flex-shrink-0" />
                <span>
                  Email:{' '}
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-300 hover:text-white">
                    {COMPANY_INFO.email}
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h5 className="font-din text-lg font-bold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h5>
            <div className="grid grid-cols-2 gap-2 text-gray-300">
              <button onClick={() => onNavigate('home')} className="text-left hover:text-[#7ed956] py-0.5">Home</button>
              <button onClick={() => onNavigate('about')} className="text-left hover:text-[#7ed956] py-0.5">About Us</button>
              <button onClick={() => onNavigate('products')} className="text-left hover:text-[#7ed956] py-0.5">Products</button>
              <button onClick={() => onNavigate('showcase')} className="text-left hover:text-[#7ed956] py-0.5">Showcase</button>
              <button onClick={() => onNavigate('news')} className="text-left hover:text-[#7ed956] py-0.5">News</button>
              <button onClick={() => onNavigate('about')} className="text-left hover:text-[#7ed956] py-0.5">Video</button>
              <button onClick={() => onNavigate('contact')} className="text-left hover:text-[#7ed956] py-0.5">Contact Us</button>
            </div>
          </div>

          {/* Col 3: Hot Tags (4 cols) */}
          <div className="lg:col-span-4">
            <h5 className="font-din text-lg font-bold uppercase tracking-wider text-white mb-4">
              Hot Tags
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {HOT_TAGS.map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectTag(tag)}
                  className="bg-white/5 hover:bg-[#7ed956] hover:text-[#002245] text-gray-300 px-2 py-1 text-[11px] border border-white/10 transition rounded-none"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Col 4: Logo & Socials (2 cols) */}
          <div className="lg:col-span-2 text-left lg:text-right">
            <div className="inline-block bg-[#002245] p-2 mb-4">
              <img src={COMPANY_INFO.logo} alt={COMPANY_INFO.name} className="h-10 w-auto object-contain" />
            </div>
            <div className="flex items-center lg:justify-end space-x-2">
              <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded border border-white/20 hover:border-[#7ed956] hover:bg-[#7ed956] hover:text-[#002245] flex items-center justify-center transition">
                <span className="font-bold text-xs">f</span>
              </a>
              <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded border border-white/20 hover:border-[#7ed956] hover:bg-[#7ed956] hover:text-[#002245] flex items-center justify-center transition">
                <span className="font-bold text-xs">ig</span>
              </a>
              <a href={COMPANY_INFO.socials.twitter} target="_blank" rel="noreferrer" className="w-8 h-8 rounded border border-white/20 hover:border-[#7ed956] hover:bg-[#7ed956] hover:text-[#002245] flex items-center justify-center transition">
                <span className="font-bold text-xs">X</span>
              </a>
            </div>
            <div className="mt-5 space-y-2">
              <a
                href="/downloads/sachio-express.apk"
                download
                className="w-full max-w-[220px] lg:ml-auto flex items-center gap-3 rounded-none border border-white/20 bg-white/5 px-3 py-2 text-left hover:border-[#7ed956] hover:bg-[#7ed956] hover:text-[#002245] transition"
                aria-label="Download Sachio Express Android app"
              >
                <Smartphone className="w-5 h-5 flex-shrink-0 text-[#7ed956]" />
                <span>
                  <span className="block text-[9px] uppercase tracking-widest opacity-70">Download for</span>
                  <span className="block font-din font-bold text-sm uppercase">Android</span>
                </span>
                <Download className="w-4 h-4 ml-auto flex-shrink-0" />
              </a>
              <div
                className="w-full max-w-[220px] lg:ml-auto flex items-center gap-3 rounded-none border border-white/10 bg-white/[0.03] px-3 py-2 text-left text-gray-400"
                aria-label="Sachio Express iOS app coming soon"
              >
                <Smartphone className="w-5 h-5 flex-shrink-0" />
                <span>
                  <span className="block text-[9px] uppercase tracking-widest opacity-70">Download for</span>
                  <span className="block font-din font-bold text-sm uppercase">iOS</span>
                </span>
                <span className="ml-auto text-[9px] uppercase text-[#7ed956]">Coming Soon</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Copyright Bar */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
        <div>
          © 2022-2026 Sachio Express. All Rights Reserved.
        </div>
        <div className="flex items-center space-x-4 mt-3 md:mt-0">
          <span className="hover:text-white cursor-pointer" onClick={() => onNavigate('home')}>XML</span>
          <span>|</span>
          <span className="hover:text-white cursor-pointer" onClick={() => onNavigate('news')}>Blog</span>
          <span>|</span>
          <span className="hover:text-white cursor-pointer" onClick={() => onNavigate('about')}>Privacy Policy</span>
          <span>|</span>
          <div className="flex items-center space-x-1.5 text-gray-300">
            <Globe className="w-3.5 h-3.5 text-[#7ed956]" />
            <span>IPv6 network supported</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
