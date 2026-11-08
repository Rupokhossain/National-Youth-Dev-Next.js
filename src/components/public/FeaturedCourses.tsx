"use client";

import React, { useState } from "react";
import Link from "next/link";
import { coursesData, Course } from "@/lib/coursesData";
import { Clock, MapPin, GraduationCap, ArrowRight, Flame } from "lucide-react";
import CourseThumbnail from "./CourseThumbnail";

export default function FeaturedCourses() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { label: "All Programs", value: "all" },
    { label: "ICT & Digital", value: "ict-digital" },
    { label: "Electrical & Power", value: "electrical-power" },
    { label: "Welding & Tech", value: "welding-fabrication" },
    { label: "RAC & AC Servicing", value: "refrigeration-hvac" },
    { label: "Hospitality", value: "hospitality-culinary" },
    { label: "Agriculture & Dairy", value: "agriculture-livestock" },
  ];

  const filteredCourses =
    selectedCategory === "all"
      ? coursesData
      : coursesData.filter((c) => c.categorySlug === selectedCategory);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold mb-3.5">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
            <span>Admission Open for Batch 2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
            Featured Certification & Trade Programs
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-3 leading-relaxed">
            Choose from government-accredited diploma courses equipped with 80% practical workshop labs, free study toolkits, and direct job placement support.
          </p>
        </div>

        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900 hover:text-emerald-600 px-2 py-2 transition shrink-0 self-start md:self-auto group"
        >
          <span>Browse All Courses</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Category Filter Pills: Touch-Friendly Responsive Scroll */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 sm:mb-10 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`text-xs sm:text-sm md:text-base font-bold px-5 py-2.5 sm:py-3 rounded-2xl transition-all whitespace-nowrap shrink-0 ${
                isActive
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/15"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Courses Grid: 100% Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredCourses.map((course: Course) => (
          <div
            key={course.id}
            className="group bg-white rounded-3xl border border-slate-200 hover:border-emerald-500/50 shadow-sm hover:shadow-2xl hover:shadow-slate-200/70 transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail Container with Error Fallback */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                <CourseThumbnail
                  src={course.thumbnail}
                  alt={course.title}
                  title={course.title}
                  category={course.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none"></div>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-end gap-2 pointer-events-none">
                  {/* <span className="text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full bg-white/95 text-slate-800 shadow-md backdrop-blur-md">
                    {course.category}
                  </span> */}
                  <span className="text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-full bg-emerald-500 text-slate-950 shadow-md">
                    {course.seatsRemaining} Seats Left
                  </span>
                </div>

                {/* Bottom Fee Badge */}
                {/* <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <span className="inline-block text-xs sm:text-sm md:text-base font-extrabold text-white bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-xl border border-white/20 shadow-lg">
                    {course.fee}
                  </span>
                </div> */}
              </div>

              {/* Card Body with Bigger, High-Readability Fonts */}
              <div className="p-6 sm:p-7 md:p-8">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-3">
                  <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                  {course.shortDescription}
                </p>

                {/* Meta Highlights Row with Larger Text & Icons (No text truncation) */}
                <div className="space-y-3.5 py-4 border-t border-slate-100 text-sm sm:text-base text-slate-700">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      Duration: <strong className="text-slate-900 font-bold">{course.duration}</strong> ({course.totalHours} Practical Hours)
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      Eligibility: <strong className="text-slate-900 font-bold">{course.minQualification}</strong>
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="leading-snug text-slate-700 font-medium">
                      Centers: <strong className="text-slate-900 font-bold">{course.centersAvailable}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="p-6  pt-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href={`/courses/${course.slug}`}
                className="flex-1 text-center bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm sm:text-base font-bold py-3.5 px-4 rounded-xl transition duration-200"
              >
                View Details
              </Link>
              <Link
                href={`/courses/${course.slug}?apply=true`}
                className="flex-1 text-center bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-bold py-3.5 px-4 rounded-xl transition duration-200 shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 group/btn"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
