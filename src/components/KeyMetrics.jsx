// src/components/KeyMetrics.jsx
import React, { useState, useEffect, useRef } from 'react';
import { KEY_METRICS } from '../data/websiteData';

export default function KeyMetrics() {
  const [counts, setCounts] = useState(KEY_METRICS.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Animate numbers up
          const duration = 2000;
          const steps = 60;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            setCounts(
              KEY_METRICS.map((metric) => Math.floor(metric.count * easeOutQuart))
            );

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts(KEY_METRICS.map((m) => m.count));
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-14 md:py-20 bg-white border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {KEY_METRICS.map((metric, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-4 group"
            >
              {/* Slanted divider line on desktop */}
              {index < KEY_METRICS.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-200 transform rotate-12 pointer-events-none"></div>
              )}

              {/* Icon with flip on hover */}
              <div className="w-16 h-16 mb-4 flex items-center justify-center transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
                <img
                  src={metric.icon}
                  alt={metric.label}
                  className="max-h-12 w-auto object-contain"
                />
              </div>

              {/* Animated Number Count */}
              <div className="font-din text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002245] group-hover:text-[#7ed956] transition-colors flex items-baseline">
                <span>{counts[index].toLocaleString()}</span>
                <span className="text-[#7ed956] ml-1">{metric.suffix}</span>
              </div>

              {/* Label */}
              <p className="mt-2 text-xs sm:text-sm text-gray-500 font-sans tracking-wide max-w-[200px]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
