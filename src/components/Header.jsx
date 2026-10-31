// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Search, 
  X, 
  ChevronDown, 
  ChevronRight, 
  Menu, 
  Send,
  Layers,
  Home,
  Info,
  Package,
  Award,
  Newspaper,
  Video,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO, LANGUAGES, PRODUCT_CATEGORIES } from '../data/websiteData';

export default function Header({ 
  currentView, 
  setCurrentView, 
  onOpenQuoteModal, 
  selectedCategory, 
  setSelectedCategory 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [megaMenuHovered, setMegaMenuHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentView('products');
      setSearchOpen(false);
    }
  };

  const navigateTo = (view, category = null) => {
    setCurrentView(view);
    if (category) {
      setSelectedCategory(category);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Search Overlay Dropdown */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4 transition-all animate-fadeIn">
          <div className="bg-white rounded-none shadow-2xl w-full max-w-2xl p-6 relative border-t-4 border-[#7ed956]">
            <button 
              onClick={() => setSearchOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-800 transition"
              aria-label="Close search"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-din text-[#002245] uppercase mb-4 tracking-wide">
              What Are You Looking For?
            </h3>
            <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <input
                type="text"
                placeholder="Search prefabricated houses, container cabins, mobile toilets, tents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full sm:flex-1 bg-[#f7f7f7] border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#7ed956] transition"
              />
              <button 
                type="submit" 
                className="bg-[#0d2d4e] hover:bg-[#7ed956] text-white px-6 py-3 font-din uppercase text-sm tracking-wider flex items-center gap-2 transition"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </form>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
              <span className="font-semibold text-gray-700">Quick Searches:</span>
              <button onClick={() => { setSearchQuery('Expandable Container'); setCurrentView('products'); setSearchOpen(false); }} className="hover:text-[#7ed956] underline">Expandable Container</button>
              <button onClick={() => { setSearchQuery('Portable Toilet'); setCurrentView('products'); setSearchOpen(false); }} className="hover:text-[#7ed956] underline">Portable Toilet</button>
              <button onClick={() => { setSearchQuery('Steel Structure'); setCurrentView('products'); setSearchOpen(false); }} className="hover:text-[#7ed956] underline">Steel Structure</button>
              <button onClick={() => { setSearchQuery('Mobile Trailer'); setCurrentView('products'); setSearchOpen(false); }} className="hover:text-[#7ed956] underline">Mobile Trailer</button>
            </div>
          </div>
        </div>
      )}

      {/* Top Header Row (Disappears on compact scroll for sleek look) */}
      <div className={`bg-[#0d2d4e] border-b border-white/10 transition-all duration-300 ${isScrolled ? 'hidden' : 'hidden md:block'}`}>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Left: Brand Identity / Quick Tagline */}
            <div className="hidden lg:flex items-center space-x-3 text-xs text-gray-300">
              <span className="bg-[#002245] px-2 py-1 text-[#7ed956] font-bold tracking-wider uppercase">Global Supplier</span>
              <span>Prefabricated Houses & Mobile Sanitation Solutions Worldwide</span>
            </div>

            {/* Right Group: Contact info, Socials, Languages */}
            <div className="flex items-center justify-between w-full lg:w-auto space-x-6 text-xs text-white">
              {/* Phone & Email Highlights */}
              <div className="hidden sm:flex items-center space-x-6">
                <a 
                  href={`tel:${COMPANY_INFO.hotline1}`} 
                  className="flex items-center space-x-2 text-gray-200 hover:text-[#7ed956] transition"
                  title="Call Sachio Express Sales Hotline"
                >
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[#7ed956]">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Call Us</span>
                    <span className="font-bold tracking-wide">{COMPANY_INFO.hotline1}</span>
                  </div>
                </a>

                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="flex items-center space-x-2 text-gray-200 hover:text-[#7ed956] transition"
                  title="Email Sachio Express"
                >
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[#7ed956]">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Email Us</span>
                    <span className="font-bold tracking-wide">{COMPANY_INFO.email}</span>
                  </div>
                </a>
              </div>

              {/* Social Icons */}
              <div className="hidden xl:flex items-center space-x-2 border-l border-white/15 pl-6">
                <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noreferrer" className="w-7 h-7 rounded flex items-center justify-center border border-white/20 hover:border-[#7ed956] hover:bg-[#7ed956] transition" title="Facebook">
                  <span className="font-bold text-xs">f</span>
                </a>
                <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noreferrer" className="w-7 h-7 rounded flex items-center justify-center border border-white/20 hover:border-[#7ed956] hover:bg-[#7ed956] transition" title="Instagram">
                  <span className="font-bold text-xs">ig</span>
                </a>
                <a href={COMPANY_INFO.socials.twitter} target="_blank" rel="noreferrer" className="w-7 h-7 rounded flex items-center justify-center border border-white/20 hover:border-[#7ed956] hover:bg-[#7ed956] transition" title="Twitter">
                  <span className="font-bold text-xs">X</span>
                </a>
              </div>

              {/* Multi-Language Dropdown */}
              <div className="relative ml-auto sm:ml-0 border-l border-white/15 pl-4 sm:pl-6">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  onBlur={() => setTimeout(() => setLangDropdownOpen(false), 200)}
                  className="flex items-center space-x-2 text-[#7ed956] hover:text-white transition uppercase font-semibold text-xs tracking-wider"
                >
                  <span className="text-gray-400 text-[11px] hidden sm:inline">Language:</span>
                  <img src={selectedLang.flag} alt={selectedLang.name} className="w-4 h-3 object-cover rounded-none" />
                  <span className="text-white">{selectedLang.name}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white shadow-2xl border border-gray-100 py-1 z-50 animate-fadeIn">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLang(lang);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center space-x-2 hover:bg-[#f7f7f7] hover:text-[#7ed956] transition ${
                          selectedLang.code === lang.code ? 'font-bold text-[#002245] bg-gray-50' : 'text-gray-700'
                        }`}
                      >
                        <img src={lang.flag} alt={lang.name} className="w-4 h-3 object-cover" />
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`bg-[#002245] text-white transition-all duration-300 ${isScrolled ? 'py-1 shadow-md bg-[#002245]/95 backdrop-blur-md' : 'py-0'}`}>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo with Angle Cut Polygon Background */}
            <div className="flex items-center">
              <button 
                onClick={() => navigateTo('home')}
                className="relative flex items-center pr-8 py-2 group text-left"
              >
                <div className="relative z-10 flex items-center space-x-3">
                  <img 
                    src={COMPANY_INFO.logo} 
                    alt={COMPANY_INFO.name} 
                    className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="hidden sm:block">
                    <span className="block font-din text-base sm:text-lg font-bold leading-tight tracking-wider text-white">
                      SACHIO EXPRESS
                    </span>
                    <span className="block text-[10px] text-gray-300 uppercase tracking-widest">
                      Modular & Prefab Solutions
                    </span>
                  </div>
                </div>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-din uppercase tracking-wider">
              {/* Home */}
              <button
                onClick={() => navigateTo('home')}
                className={`px-3 py-2 transition-colors relative hover:text-[#7ed956] ${
                  currentView === 'home' ? 'text-[#7ed956] font-bold after:content-[""] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#7ed956]' : 'text-white'
                }`}
              >
                Home
              </button>

              {/* About Us */}
              <button
                onClick={() => navigateTo('about')}
                className={`px-3 py-2 transition-colors relative hover:text-[#7ed956] ${
                  currentView === 'about' ? 'text-[#7ed956] font-bold after:content-[""] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#7ed956]' : 'text-white'
                }`}
              >
                About Us
              </button>

              {/* Products with Full Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setMegaMenuHovered(true)}
                onMouseLeave={() => setMegaMenuHovered(false)}
              >
                <button
                  onClick={() => navigateTo('products')}
                  className={`px-3 py-2 flex items-center space-x-1 transition-colors relative hover:text-[#7ed956] ${
                    currentView === 'products' ? 'text-[#7ed956] font-bold after:content-[""] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#7ed956]' : 'text-white'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {/* Mega Menu Dropdown */}
                {megaMenuHovered && (
                  <div className="fixed left-0 right-0 top-[110px] w-full bg-white text-gray-800 shadow-2xl border-t-2 border-[#7ed956] py-8 z-50 animate-fadeIn cursor-default">
                    <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
                      <div className="grid grid-cols-5 gap-6">
                        {PRODUCT_CATEGORIES.map((cat) => (
                          <div key={cat.id} className="border-r border-gray-100 last:border-none pr-4">
                            <button
                              onClick={() => {
                                navigateTo('products', cat.title);
                                setMegaMenuHovered(false);
                              }}
                              className="w-full text-left group"
                            >
                              <div className="h-28 overflow-hidden rounded bg-gray-50 mb-3 border border-gray-200">
                                <img 
                                  src={cat.image} 
                                  alt={cat.title} 
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                                />
                              </div>
                              <h4 className="font-din text-base font-bold text-[#002245] group-hover:text-[#7ed956] transition uppercase mb-2 flex items-center justify-between">
                                <span>{cat.title}</span>
                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                              </h4>
                            </button>

                            <ul className="space-y-1.5 text-xs text-gray-600 font-sans normal-case">
                              {cat.subcategories.map((sub) => (
                                <li key={sub.slug}>
                                  <button
                                    onClick={() => {
                                      navigateTo('products', cat.title);
                                      setMegaMenuHovered(false);
                                    }}
                                    className="hover:text-[#7ed956] hover:translate-x-1 transition-all duration-200 block py-0.5 text-left"
                                  >
                                    • {sub.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-sans normal-case">
                        <span>Looking for customized modular specifications? We offer OEM & ODM fabrication.</span>
                        <button
                          onClick={() => {
                            setMegaMenuHovered(false);
                            onOpenQuoteModal();
                          }}
                          className="text-[#002245] font-bold hover:text-[#7ed956] uppercase flex items-center space-x-1"
                        >
                          <span>Request Custom Dimensions</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Showcase */}
              <button
                onClick={() => navigateTo('showcase')}
                className={`px-3 py-2 transition-colors relative hover:text-[#7ed956] ${
                  currentView === 'showcase' ? 'text-[#7ed956] font-bold after:content-[""] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#7ed956]' : 'text-white'
                }`}
              >
                Showcase
              </button>

              {/* News */}
              <button
                onClick={() => navigateTo('news')}
                className={`px-3 py-2 transition-colors relative hover:text-[#7ed956] ${
                  currentView === 'news' ? 'text-[#7ed956] font-bold after:content-[""] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#7ed956]' : 'text-white'
                }`}
              >
                News
              </button>

              {/* Video */}
              <button
                onClick={() => navigateTo('about')}
                className={`px-3 py-2 transition-colors relative hover:text-[#7ed956] ${
                  currentView === 'video' ? 'text-[#7ed956] font-bold after:content-[""] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#7ed956]' : 'text-white'
                }`}
              >
                Video
              </button>

              {/* Contact Us */}
              <button
                onClick={() => navigateTo('contact')}
                className={`px-3 py-2 transition-colors relative hover:text-[#7ed956] ${
                  currentView === 'contact' ? 'text-[#7ed956] font-bold after:content-[""] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#7ed956]' : 'text-white'
                }`}
              >
                Contact Us
              </button>
            </nav>

            {/* Header Right Actions: Search trigger & Get A Quote CTA */}
            <div className="flex items-center space-x-3">
              {/* Search Icon */}
              <button
                onClick={() => setSearchOpen(true)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#7ed956] flex items-center justify-center text-white transition"
                title="Search Products & Info"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Get A Quote Action Button */}
              <button
                onClick={onOpenQuoteModal}
                className="btn-topindus-more hidden sm:inline-flex px-5 py-2.5 text-xs font-din font-bold uppercase tracking-wider text-white shadow-md rounded-none"
              >
                <span>Get A Quote</span>
                <Send className="w-3.5 h-3.5 ml-2" />
              </button>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-[#7ed956] transition"
                aria-label="Open mobile navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[64px] bg-[#002245] z-50 text-white overflow-y-auto px-6 py-8 border-t border-white/10 animate-fadeIn">
          <div className="space-y-4 font-din uppercase tracking-wider text-base">
            <button
              onClick={() => navigateTo('home')}
              className="w-full text-left py-2.5 border-b border-white/10 flex items-center justify-between text-white hover:text-[#7ed956]"
            >
              <span className="flex items-center space-x-3">
                <Home className="w-4 h-4 text-[#7ed956]" />
                <span>Home</span>
              </span>
            </button>

            <button
              onClick={() => navigateTo('about')}
              className="w-full text-left py-2.5 border-b border-white/10 flex items-center justify-between text-white hover:text-[#7ed956]"
            >
              <span className="flex items-center space-x-3">
                <Info className="w-4 h-4 text-[#7ed956]" />
                <span>About Us</span>
              </span>
            </button>

            {/* Products Accordion */}
            <div className="border-b border-white/10 pb-2">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full text-left py-2.5 flex items-center justify-between text-white hover:text-[#7ed956]"
              >
                <span className="flex items-center space-x-3">
                  <Package className="w-4 h-4 text-[#7ed956]" />
                  <span>Products</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileProductsOpen && (
                <div className="pl-6 pt-2 space-y-2 text-xs font-sans normal-case text-gray-300">
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => navigateTo('products', cat.title)}
                      className="block w-full text-left py-1 hover:text-[#7ed956]"
                    >
                      • {cat.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => navigateTo('showcase')}
              className="w-full text-left py-2.5 border-b border-white/10 flex items-center justify-between text-white hover:text-[#7ed956]"
            >
              <span className="flex items-center space-x-3">
                <Award className="w-4 h-4 text-[#7ed956]" />
                <span>Showcase</span>
              </span>
            </button>

            <button
              onClick={() => navigateTo('news')}
              className="w-full text-left py-2.5 border-b border-white/10 flex items-center justify-between text-white hover:text-[#7ed956]"
            >
              <span className="flex items-center space-x-3">
                <Newspaper className="w-4 h-4 text-[#7ed956]" />
                <span>News</span>
              </span>
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className="w-full text-left py-2.5 border-b border-white/10 flex items-center justify-between text-white hover:text-[#7ed956]"
            >
              <span className="flex items-center space-x-3">
                <MessageSquare className="w-4 h-4 text-[#7ed956]" />
                <span>Contact Us</span>
              </span>
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-[#7ed956] hover:bg-[#6cbf3a] text-[#002245] font-din font-bold uppercase py-3.5 tracking-wider text-center"
            >
              Request A Quote Now
            </button>

            <div className="mt-6 flex flex-col space-y-2 text-xs text-gray-300">
              <a href={`tel:${COMPANY_INFO.hotline1}`} className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#7ed956]" />
                <span>{COMPANY_INFO.hotline1}</span>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#7ed956]" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
