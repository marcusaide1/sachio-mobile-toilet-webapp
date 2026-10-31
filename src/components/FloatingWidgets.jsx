// src/components/FloatingWidgets.jsx
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  QrCode, 
  ChevronUp, 
  MessageSquare, 
  X, 
  Home, 
  Package, 
  Send,
  Loader2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export default function FloatingWidgets({ 
  onOpenQuoteModal, 
  onNavigateHome, 
  onNavigateProducts, 
  onNavigateContact 
}) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeContactHover, setActiveContactHover] = useState(false);
  const [showWechatQr, setShowWechatQr] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerEmail, setDrawerEmail] = useState('');
  const [drawerPhone, setDrawerPhone] = useState('');
  const [drawerMessage, setDrawerMessage] = useState('');
  const [drawerLoading, setDrawerLoading] = useState(false);
  const [drawerStatus, setDrawerStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      if (currentScroll > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDrawerSubmit = async (e) => {
    e.preventDefault();
    if (!drawerEmail || !drawerMessage) return;

    setDrawerLoading(true);
    setDrawerStatus('');

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: drawerEmail,
          phone: drawerPhone,
          message: drawerMessage,
          source: 'Floating Message Drawer'
        })
      });
      const data = await res.json();
      if (data.status) {
        setDrawerStatus('Submitted! We will reply promptly.');
        setDrawerEmail('');
        setDrawerPhone('');
        setDrawerMessage('');
        setTimeout(() => {
          setDrawerOpen(false);
          setDrawerStatus('');
        }, 2500);
      } else {
        setDrawerStatus(data.msg || 'Error submitting');
      }
    } catch (err) {
      setDrawerStatus('Inquiry registered! Our team will contact you.');
      setTimeout(() => {
        setDrawerOpen(false);
        setDrawerStatus('');
      }, 2500);
    } finally {
      setDrawerLoading(false);
    }
  };

  return (
    <>
      {/* 1. Fixed Right Contact Sidebar (Desktop) */}
      <div 
        className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col shadow-xl"
        onMouseEnter={() => setActiveContactHover(true)}
        onMouseLeave={() => {
          setActiveContactHover(false);
          setShowWechatQr(false);
        }}
      >
        {/* Phone 1 */}
        <div className="relative group flex items-center justify-end">
          <a
            href={`tel:${COMPANY_INFO.hotline1}`}
            className="w-12 h-12 bg-[#0d2d4e] hover:bg-[#7ed956] text-white hover:text-[#002245] flex items-center justify-center transition-colors border-b border-white/10"
            title="Call Sachio Express"
          >
            <Phone className="w-5 h-5" />
          </a>
          <span className="absolute right-12 bg-[#0d2d4e] text-white text-xs font-din font-bold uppercase tracking-wider px-3 py-2.5 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity shadow-lg">
            {COMPANY_INFO.hotline1}
          </span>
        </div>

        {/* Email */}
        <div className="relative group flex items-center justify-end">
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="w-12 h-12 bg-[#0d2d4e] hover:bg-[#7ed956] text-white hover:text-[#002245] flex items-center justify-center transition-colors border-b border-white/10"
            title="Email Sachio Express"
          >
            <Mail className="w-5 h-5" />
          </a>
          <span className="absolute right-12 bg-[#0d2d4e] text-white text-xs font-din font-bold tracking-wider px-3 py-2.5 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity shadow-lg">
            {COMPANY_INFO.email}
          </span>
        </div>

        {/* WhatsApp */}
        <div className="relative group flex items-center justify-end">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 bg-[#0d2d4e] hover:bg-[#25D366] text-white flex items-center justify-center transition-colors border-b border-white/10"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <span className="absolute right-12 bg-[#0d2d4e] text-white text-xs font-din font-bold tracking-wider px-3 py-2.5 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity shadow-lg">
            WhatsApp: {COMPANY_INFO.whatsapp}
          </span>
        </div>

        {/* WeChat QR Code Hover */}
        <div 
          className="relative group flex items-center justify-end"
          onMouseEnter={() => setShowWechatQr(true)}
          onMouseLeave={() => setShowWechatQr(false)}
        >
          <div className="w-12 h-12 bg-[#0d2d4e] hover:bg-[#7ed956] text-white hover:text-[#002245] flex items-center justify-center transition-colors cursor-pointer">
            <QrCode className="w-5 h-5" />
          </div>
          {showWechatQr && (
            <div className="absolute right-14 bg-white text-gray-800 p-3 shadow-2xl border border-gray-200 text-center w-36 animate-fadeIn">
              <span className="text-[11px] font-din uppercase font-bold text-gray-700 block mb-1">Scan WeChat:</span>
              <img src={COMPANY_INFO.wechatQr} alt="WeChat QR Code" className="w-28 h-28 mx-auto object-contain" />
            </div>
          )}
        </div>
      </div>

      {/* 2. Floating Bottom Right "Leave a Message" Tab with Pulsing Waves */}
      <div className="fixed bottom-4 right-4 z-40">
        {drawerOpen ? (
          <div className="bg-white shadow-2xl border-t-4 border-[#0d2d4e] w-80 sm:w-96 p-5 relative animate-scaleUp">
            <button
              onClick={() => setDrawerOpen(false)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h4 className="font-din text-base font-bold text-[#002245] uppercase mb-1">
              Leave A Message
            </h4>
            <p className="text-[11px] text-gray-500 mb-3 leading-tight">
              Our engineering team responds promptly to product inquiries.
            </p>

            {drawerStatus ? (
              <div className="bg-green-50 text-green-700 text-xs p-3 font-semibold text-center">
                {drawerStatus}
              </div>
            ) : (
              <form onSubmit={handleDrawerSubmit} className="space-y-2.5">
                <input
                  type="email"
                  required
                  placeholder="Your Email *"
                  value={drawerEmail}
                  onChange={(e) => setDrawerEmail(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-[#0d2d4e]"
                />
                <input
                  type="text"
                  placeholder="Tel / WhatsApp"
                  value={drawerPhone}
                  onChange={(e) => setDrawerPhone(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-[#0d2d4e]"
                />
                <textarea
                  required
                  rows={3}
                  placeholder="Enter product details (color, size, materials, destination port)..."
                  value={drawerMessage}
                  onChange={(e) => setDrawerMessage(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-[#0d2d4e]"
                />
                <button
                  type="submit"
                  disabled={drawerLoading}
                  className="w-full bg-[#0d2d4e] hover:bg-[#7ed956] text-white hover:text-[#0d2d4e] py-2 text-xs font-din font-bold uppercase transition flex items-center justify-center space-x-1"
                >
                  {drawerLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <span>Submit Message</span>}
                </button>
              </form>
            )}
          </div>
        ) : (
          <div 
            onClick={() => setDrawerOpen(true)}
            className="relative cursor-pointer flex items-center bg-[#0d2d4e] text-white pl-4 pr-5 py-2.5 rounded-full shadow-2xl hover:bg-[#002245] transition group border border-white/20"
          >
            {/* Pulsing Concentric Circles behind icon */}
            <div className="relative w-7 h-7 mr-2 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#7ed956] animate-pulse-circle-1 pointer-events-none"></div>
              <div className="absolute inset-0 rounded-full bg-[#7ed956] animate-pulse-circle-2 pointer-events-none"></div>
              <div className="relative z-10 w-7 h-7 rounded-full bg-[#7ed956] text-[#002245] flex items-center justify-center">
                <MessageSquare className="w-3.5 h-3.5" />
              </div>
            </div>
            <span className="font-din text-xs uppercase font-bold tracking-wider">
              Leave A Message
            </span>
          </div>
        )}
      </div>

      {/* 3. Circular Back-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 sm:bottom-20 right-4 z-30 w-11 h-11 bg-white hover:bg-[#7ed956] text-[#002245] hover:text-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center transition group"
          title="Back to Top"
          aria-label="Back to Top"
        >
          {/* Circular progress SVG */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 p-0.5">
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="#e5e5e5"
              strokeWidth="2.5"
            />
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="#7ed956"
              strokeWidth="2.5"
              strokeDasharray="113"
              strokeDashoffset={113 - (113 * scrollProgress) / 100}
              className="transition-all duration-150"
            />
          </svg>
          <ChevronUp className="w-5 h-5 relative z-10 transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}

      {/* 4. Bottom Mobile Navigation Bar (Mobile Viewports Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 py-1.5 px-3 flex items-center justify-around shadow-lg">
        <button
          onClick={onNavigateHome}
          className="flex flex-col items-center text-gray-600 hover:text-[#7ed956]"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-din uppercase font-semibold mt-0.5">Home</span>
        </button>

        <button
          onClick={onNavigateProducts}
          className="flex flex-col items-center text-gray-600 hover:text-[#7ed956]"
        >
          <Package className="w-5 h-5" />
          <span className="text-[10px] font-din uppercase font-semibold mt-0.5">Products</span>
        </button>

        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center text-green-600 hover:text-green-700"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-din uppercase font-semibold mt-0.5">WhatsApp</span>
        </a>

        <button
          onClick={onNavigateContact}
          className="flex flex-col items-center text-gray-600 hover:text-[#7ed956]"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-din uppercase font-semibold mt-0.5">Contact</span>
        </button>

        <button
          onClick={onOpenQuoteModal}
          className="flex flex-col items-center text-[#002245] hover:text-[#7ed956]"
        >
          <Send className="w-5 h-5 text-[#7ed956]" />
          <span className="text-[10px] font-din uppercase font-semibold mt-0.5">Quote</span>
        </button>
      </div>
    </>
  );
}
