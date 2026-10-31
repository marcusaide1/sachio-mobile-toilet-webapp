// src/pages/HomePage.jsx
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ProductCategories from '../components/ProductCategories';
import AboutSection from '../components/AboutSection';
import KeyMetrics from '../components/KeyMetrics';
import OurServices from '../components/OurServices';
import ShowcaseSection from '../components/ShowcaseSection';

export default function HomePage({ 
  onSelectCategory, 
  onOpenQuoteModal, 
  onNavigateToAbout, 
  onNavigateToShowcase 
}) {
  return (
    <div className="pt-16 md:pt-20">
      {/* 1. Hero Banner Slider */}
      <HeroSlider
        onNavigateToCategory={onSelectCategory}
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* 2. Product Categories Grid */}
      <ProductCategories
        onSelectCategory={onSelectCategory}
      />

      {/* 3. About Us Section with 15-year Image Mask & Video */}
      <AboutSection
        onNavigateToAbout={onNavigateToAbout}
      />

      {/* 4. Key Metrics Counter Section */}
      <KeyMetrics />

      {/* 5. Our Services Section with Parallax Background */}
      <OurServices />

      {/* 6. Showcase & Project Case Studies Slider */}
      <ShowcaseSection
        onNavigateToShowcase={onNavigateToShowcase}
      />
    </div>
  );
}
