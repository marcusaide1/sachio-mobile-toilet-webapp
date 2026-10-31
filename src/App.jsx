// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import QuoteModal from './components/QuoteModal';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ShowcasePage from './pages/ShowcasePage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteDefaultProduct, setQuoteDefaultProduct] = useState('');

  const openQuoteModal = (productName = '') => {
    setQuoteDefaultProduct(typeof productName === 'string' ? productName : '');
    setQuoteModalOpen(true);
  };

  const handleSelectCategory = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
    setCurrentView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTag = (tagName) => {
    setSelectedCategory('All');
    setCurrentView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333] selection:bg-[#7ed956] selection:text-white">
      {/* Global Navigation Header */}
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        onOpenQuoteModal={openQuoteModal}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage
            onSelectCategory={handleSelectCategory}
            onOpenQuoteModal={openQuoteModal}
            onNavigateToAbout={() => { setCurrentView('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            onNavigateToShowcase={() => { setCurrentView('showcase'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          />
        )}

        {currentView === 'products' && (
          <ProductsPage
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onOpenQuoteModal={openQuoteModal}
          />
        )}

        {currentView === 'about' && (
          <AboutPage
            onOpenQuoteModal={openQuoteModal}
          />
        )}

        {currentView === 'showcase' && (
          <ShowcasePage
            onOpenQuoteModal={openQuoteModal}
          />
        )}

        {currentView === 'news' && (
          <NewsPage
            onOpenQuoteModal={openQuoteModal}
          />
        )}

        {currentView === 'contact' && (
          <ContactPage />
        )}

        {currentView === 'admin' && (
          <AdminPage />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onOpenQuoteModal={openQuoteModal}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectTag={handleSelectTag}
      />

      {/* Floating Right Bar, Pulsing Message Widget, Scroll to Top, and Mobile Bottom Bar */}
      <FloatingWidgets
        onOpenQuoteModal={openQuoteModal}
        onNavigateHome={() => { setCurrentView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        onNavigateProducts={() => { setCurrentView('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        onNavigateContact={() => { setCurrentView('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      />

      {/* Quote / Inquiry Interactive Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultProduct={quoteDefaultProduct}
      />
    </div>
  );
}
