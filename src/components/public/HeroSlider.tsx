"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";

interface Slide {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  duration: string;
  highlight: string;
  bgImage: string;
}

const slides: Slide[] = [
  {
    id: 1,
    badge: "Government Accredited Technical Institute",
    title: "Empowering National Youth Through Technical Mastery",
    subtitle:
      "Transforming potential into professional excellence with industry-aligned technical, engineering, and digital skills nationwide.",
    duration: "Year-Round Programs",
    highlight: "100% Certified Diplomas",
    // Bright, professional computer lab classroom
    bgImage:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    badge: "Heavy Engineering & Automation Trade",
    title: "Electrical House Wiring & Industrial Automation",
    subtitle:
      "Master practical electrical circuits, commercial distribution panels, and industrial motor automation in modern technical labs.",
    duration: "6 Months Practical",
    highlight: "Toolsets Provided",
    bgImage:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    badge: "High-Demand Industrial Fabrication",
    title: "Certified Electric & Gas Welding Technology",
    subtitle:
      "Become an expert in TIG, MIG, and arc welding techniques with global safety protocols and hands-on heavy workshop training.",
    duration: "3 & 6 Months",
    highlight: "Overseas Job-Ready",
    // Active, high-resolution welding & fabrication image
    bgImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    badge: "Tourism, Culinary & Service Arts",
    title: "Professional Hotel Management & Food Production",
    subtitle:
      "Comprehensive training in international culinary standards, front-office operations, and premium hospitality management.",
    duration: "6 Months + Internship",
    highlight: "Five-Star Placement",
    bgImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 5,
    badge: "Digital Skills & Freelancing Hub",
    title: "Advanced Computer Applications & ICT Engineering",
    subtitle:
      "Equipping youth with modern office software, graphic design, web applications, and freelancing skills for digital self-reliance.",
    duration: "3 & 6 Months",
    highlight: "Govt Subsidized Fee",
    bgImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-play interval (5.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[current];

  return (
    // Fixed responsive height so all slides stay EXACT same size without jumping or resizing
    <section className="relative w-full overflow-hidden h-[540px] sm:h-[580px] md:h-[600px] lg:h-[620px] flex items-center bg-slate-900">
      
      {/* Background Image: Constant exact height & width, object-cover */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          key={currentSlide.id}
          src={currentSlide.bgImage}
          alt={currentSlide.title}
          className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
        />
        {/* Soft Left Gradient Scrim for crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent"></div>
        <div className="absolute inset-0 bg-slate-950/20"></div>
      </div>

      {/* Main Slide Content: Fully Responsive & Vertically Centered */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 w-full flex flex-col justify-center">
        <div className="max-w-2xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-emerald-300 text-[11px] sm:text-xs font-semibold mb-3 sm:mb-4 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
            <span className="truncate">{currentSlide.badge}</span>
          </div>

          {/* Heading with fixed responsive text scaling */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-snug sm:leading-tight mb-3 sm:mb-4">
            {currentSlide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed mb-5 sm:mb-6 max-w-xl font-normal line-clamp-2 sm:line-clamp-3">
            {currentSlide.subtitle}
          </p>

          {/* Meta Tags */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-medium text-slate-200 mb-6 sm:mb-8">
            <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
              <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              {currentSlide.duration}
            </span>
            <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              {currentSlide.highlight}
            </span>
          </div>

          {/* CTA Buttons: Full width stack on mobile, horizontal row on larger screens */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
            <Link
              href="/courses"
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/apply"
              className="bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition border border-white/25 backdrop-blur-md text-center"
            >
              Apply for Admission
            </Link>
          </div>
        </div>

        {/* Minimal Sleek Slide Pagination Dots */}
        <div className="flex items-center gap-2 mt-8 sm:mt-10">
          {slides.map((_, index) => {
            const isActive = index === current;
            return (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-7 sm:w-8 h-2 bg-emerald-400 shadow-sm"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
