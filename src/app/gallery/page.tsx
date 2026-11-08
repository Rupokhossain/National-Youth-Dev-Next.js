// src/app/gallery/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Layers,
  MapPin,
  Calendar,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
} from "lucide-react";
import { galleryItems, GalleryItem } from "@/lib/galleryData";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const categories = [
    { key: "all", label: "All Photos" },
    { key: "labs", label: "Practical Labs & Engineering" },
    { key: "women", label: "Women Empowerment & Sewing" },
    { key: "ict", label: "ICT & Digital Skills" },
    { key: "ceremony", label: "Convocation & Events" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === "Escape") setActiveModalIndex(null);
      if (e.key === "ArrowLeft") {
        setActiveModalIndex((prev) =>
          prev !== null ? (prev === 0 ? filteredItems.length - 1 : prev - 1) : null
        );
      }
      if (e.key === "ArrowRight") {
        setActiveModalIndex((prev) =>
          prev !== null ? (prev === filteredItems.length - 1 ? 0 : prev + 1) : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalIndex, filteredItems.length]);

  const activePhoto = activeModalIndex !== null ? filteredItems[activeModalIndex] : null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased pb-28">
      {/* Institutional Hero Banner */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-20 border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/70 via-slate-900/90 to-slate-950 z-0"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-14 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold tracking-wide">
            <Camera className="w-4 h-4 text-emerald-400" />
            <span>Campus Activities & Field Training Archive</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Moments of Skill, Innovation & <br className="hidden sm:inline" />
            <span className="text-emerald-400">Youth Empowerment</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Glimpses into real-life practical labs, hands-on industrial workshops, women entrepreneurship classes, and national certificate ceremonies across our 64 district branches.
          </p>

          {/* Impact Metrics Pill Strip */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-300">
            <span className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Practical Lab Sessions</span>
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-full">
              <Users className="w-4 h-4 text-emerald-400" />
              <span>50,000+ Skilled Graduates</span>
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-full">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Govt. Affiliated Certification</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Gallery Container (1240px Wide for Spacious, Breathable Layout) */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-8 mt-10 space-y-10">
        
        {/* Category Filter Toolbar */}
        <div className="bg-white p-2.5 sm:p-3 rounded-2xl shadow-sm border border-slate-200 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const count =
              cat.key === "all"
                ? galleryItems.length
                : galleryItems.filter((i) => i.category === cat.key).length;
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-200/80 text-slate-700"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid (Spacious, Asymmetric, Visual Richness) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            const isFeatured = item.featured && selectedCategory === "all";
            return (
              <div
                key={item.id}
                onClick={() => setActiveModalIndex(index)}
                className={`group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col ${
                  isFeatured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Image Container with Hover Zoom */}
                <div
                  className={`relative w-full overflow-hidden bg-slate-900 ${
                    isFeatured
                      ? "h-72 sm:h-96"
                      : "h-64 sm:h-72"
                  }`}
                >
                  {/* Real Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>

                  {/* Top Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-xs font-black tracking-wide shadow-md">
                      {item.categoryLabel}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  {/* Bottom Hover Action Prompt */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md text-slate-900 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Maximize2 className="w-4 h-4 text-emerald-700" />
                    </div>
                  </div>
                </div>

                {/* Card Content & Captions */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-3 bg-white">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700">
                      <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl group-hover:text-emerald-700 transition leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-400 group-hover:text-emerald-700 transition">
                    <span>Click to view in high resolution</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State if Category has no images */}
        {filteredItems.length === 0 && (
          <div className="bg-white rounded-3xl p-16 text-center space-y-3 border border-slate-200">
            <Camera className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-700">No photos in this category</h3>
            <p className="text-sm text-slate-500">Please choose another category or select "All Photos".</p>
          </div>
        )}

        {/* Bottom Campus Tour Invitation Card */}
        <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Campus Visits & Hands-On Demonstrations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Want to see our practical labs in person?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Prospective trainees and parents are welcome to visit any of our affiliated branch training centers across 64 districts. Experience workstations, consult with certified trainers, and select the right trade for your future.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/courses"
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition"
              >
                <span>Explore Technical Trades</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-md transition"
              >
                <span>Find Nearest District Campus</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Full-Screen Lightbox Modal for High-Res Photo Viewing */}
      {activePhoto && activeModalIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          {/* Modal Container */}
          <div className="relative max-w-5xl w-full bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Modal Top Bar */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-extrabold">
                  {activePhoto.categoryLabel}
                </span>
                <span className="text-xs text-slate-400 font-semibold hidden sm:inline">
                  Photo {activeModalIndex + 1} of {filteredItems.length}
                </span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalIndex(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
                title="Close (Esc)"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body: Image & Controls */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[350px] sm:min-h-[480px]">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="max-h-[60vh] w-auto max-w-full object-contain mx-auto"
              />

              {/* Previous Button */}
              <button
                type="button"
                onClick={() =>
                  setActiveModalIndex(
                    activeModalIndex === 0
                      ? filteredItems.length - 1
                      : activeModalIndex - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-2xl bg-slate-900/80 text-white hover:bg-emerald-600 flex items-center justify-center transition border border-white/10 shadow-lg"
                title="Previous Photo (Left Arrow)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={() =>
                  setActiveModalIndex(
                    activeModalIndex === filteredItems.length - 1
                      ? 0
                      : activeModalIndex + 1
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-2xl bg-slate-900/80 text-white hover:bg-emerald-600 flex items-center justify-center transition border border-white/10 shadow-lg"
                title="Next Photo (Right Arrow)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Bottom Caption Bar */}
            <div className="p-5 sm:p-6 bg-slate-950 border-t border-slate-800 text-white space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-extrabold text-base sm:text-xl text-white">
                  {activePhoto.title}
                </h3>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-400 font-medium">
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <MapPin className="w-4 h-4" />
                    <span>{activePhoto.location}</span>
                  </span>
                  <span>•</span>
                  <span>{activePhoto.date}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {activePhoto.description}
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
