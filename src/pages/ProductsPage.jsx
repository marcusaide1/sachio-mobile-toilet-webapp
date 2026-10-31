// src/pages/ProductsPage.jsx
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Send, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  Maximize, 
  X,
  FileText
} from 'lucide-react';
import { ALL_PRODUCTS, PRODUCT_CATEGORIES } from '../data/websiteData';

export default function ProductsPage({ 
  selectedCategory, 
  setSelectedCategory, 
  onOpenQuoteModal 
}) {
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['All', ...PRODUCT_CATEGORIES.map(c => c.title)];

  const filteredProducts = ALL_PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'All' || !selectedCategory || product.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = !searchFilter || 
      product.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      product.category.toLowerCase().includes(searchFilter.toLowerCase()) ||
      product.subCategory.toLowerCase().includes(searchFilter.toLowerCase()) ||
      product.structure.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-[64px] md:pt-[144px] pb-20 bg-[#f8f9fa]">
      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border-t-4 border-[#7ed956]">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 w-9 h-9 bg-gray-100 hover:bg-[#7ed956] text-gray-700 hover:text-white flex items-center justify-center transition z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 sm:h-80 overflow-hidden bg-gray-100">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <span className="bg-[#002245] text-[#7ed956] text-xs font-din font-bold uppercase tracking-wider px-3 py-1 inline-block mb-2">
                {selectedProduct.category} • {selectedProduct.subCategory}
              </span>
              <h2 className="text-2xl font-din font-bold text-[#002245] uppercase mb-4">
                {selectedProduct.name}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 border border-gray-200 mb-6 text-xs font-sans">
                <div>
                  <strong className="block text-gray-700 font-din uppercase text-xs mb-0.5">Dimensions:</strong>
                  <span>{selectedProduct.dimensions}</span>
                </div>
                <div>
                  <strong className="block text-gray-700 font-din uppercase text-xs mb-0.5">Estimated Lifespan:</strong>
                  <span>{selectedProduct.lifespan}</span>
                </div>
                <div className="sm:col-span-2">
                  <strong className="block text-gray-700 font-din uppercase text-xs mb-0.5">Structure & Framing:</strong>
                  <span>{selectedProduct.structure}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-din text-sm font-bold uppercase tracking-wider text-[#002245] mb-2">
                  Key Features & Advantages:
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-600 font-sans">
                  {selectedProduct.features.map((feat, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7ed956] flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    onOpenQuoteModal(selectedProduct.name);
                  }}
                  className="btn-topindus-more px-6 py-2.5 text-xs font-din font-bold uppercase tracking-wider text-white shadow-md"
                >
                  Request Official Quote for this Model
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2.5 font-din uppercase text-xs tracking-wider transition"
                >
                  Back to Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Header Banner */}
      <div className="bg-[#002245] text-white py-12 mb-10">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-din text-[#7ed956] uppercase tracking-widest mb-1">
                Home / Products
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-din font-bold uppercase tracking-wider">
                OUR PRODUCTS
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md font-sans">
              Export-grade prefabricated housing, modular expandable container cabins, portable toilets, event marquee tents, and commercial trailer units.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 mb-8">
        <div className="bg-white p-4 shadow-sm border border-gray-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs font-din uppercase tracking-wider transition rounded-none ${
                  (selectedCategory === cat || (!selectedCategory && cat === 'All'))
                    ? 'bg-[#002245] text-white font-bold border border-[#002245]'
                    : 'bg-[#f7f7f7] text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <input
              type="text"
              placeholder="Search product model..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full bg-[#f7f7f7] border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-[#002245]"
            />
            <Search className="w-4 h-4 text-gray-400 absolute right-3 top-2.5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white border border-gray-200 p-8">
            <h3 className="font-din text-xl font-bold uppercase text-[#002245] mb-2">No Products Found</h3>
            <p className="text-xs text-gray-500 mb-4">Try clearing your search term or select another category.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchFilter(''); }}
              className="bg-[#002245] text-white px-5 py-2 text-xs font-din uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="group bg-white border border-gray-200 hover:border-[#7ed956] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div 
                    onClick={() => setSelectedProduct(prod)}
                    className="relative h-52 overflow-hidden bg-gray-50 cursor-pointer"
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 bg-[#002245]/90 text-[#7ed956] text-[10px] font-din font-bold uppercase tracking-wider px-2 py-0.5">
                      {prod.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4">
                    <span className="text-[11px] text-gray-400 font-sans block mb-1">
                      {prod.subCategory}
                    </span>
                    <h3 
                      onClick={() => setSelectedProduct(prod)}
                      className="font-din text-base font-bold text-[#002245] group-hover:text-[#7ed956] line-clamp-2 leading-tight uppercase cursor-pointer transition-colors mb-3"
                    >
                      {prod.name}
                    </h3>

                    {/* Quick Specs */}
                    <div className="space-y-1.5 text-[11px] text-gray-600 font-sans bg-gray-50 p-2.5 border border-gray-100 mb-3">
                      <div>
                        <strong className="text-gray-700">Dim:</strong> {prod.dimensions}
                      </div>
                      <div className="truncate">
                        <strong className="text-gray-700">Material:</strong> {prod.structure}
                      </div>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-1 text-[11px] text-gray-500 font-sans">
                      {prod.features.slice(0, 2).map((feat, i) => (
                        <li key={i} className="flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7ed956] flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedProduct(prod)}
                    className="bg-gray-100 hover:bg-gray-200 text-[#002245] py-2 text-xs font-din font-bold uppercase text-center transition"
                  >
                    Specs Details
                  </button>
                  <button
                    onClick={() => onOpenQuoteModal(prod.name)}
                    className="bg-[#002245] hover:bg-[#7ed956] text-white hover:text-[#002245] py-2 text-xs font-din font-bold uppercase text-center transition flex items-center justify-center space-x-1"
                  >
                    <Send className="w-3 h-3" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
