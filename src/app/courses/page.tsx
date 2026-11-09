"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { coursesData, Course } from "@/lib/coursesData";
import CourseThumbnail from "@/components/public/CourseThumbnail";
import { useInstitute } from "@/context/InstituteContext";
import {
  Search,
  Filter,
  X,
  Clock,
  GraduationCap,
  MapPin,
  CheckCircle2,
  ArrowRight,
  LayoutGrid,
  List,
  Phone,
  BookOpen,
  Award,
  Flame,
  RotateCcw,
} from "lucide-react";

export default function CoursesPage() {
  const { courses } = useInstitute();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [subsidizedOnly, setSubsidizedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("recommended");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Dynamically extract unique categories with count
  const categories = useMemo(() => {
    const map = new Map<string, { label: string; count: number }>();
    courses.forEach((course) => {
      const existing = map.get(course.categorySlug);
      if (existing) {
        existing.count += 1;
      } else {
        map.set(course.categorySlug, {
          label: course.category,
          count: 1,
        });
      }
    });

    return [
      { slug: "all", label: "All Programs", count: courses.length },
      ...Array.from(map.entries()).map(([slug, data]) => ({
        slug,
        label: data.label,
        count: data.count,
      })),
    ];
  }, [courses]);

  // Filter & Sort Logic
  const filteredCourses = useMemo(() => {
    let result = courses.filter((course) => {
      // Search query check
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesDesc = course.shortDescription.toLowerCase().includes(query);
        const matchesCat = course.category.toLowerCase().includes(query);
        const matchesOutcomes = course.learningOutcomes?.some((o) =>
          o.toLowerCase().includes(query)
        );
        if (!matchesTitle && !matchesDesc && !matchesCat && !matchesOutcomes) {
          return false;
        }
      }

      // Category check
      if (selectedCategory !== "all" && course.categorySlug !== selectedCategory) {
        return false;
      }

      // Duration check
      if (selectedDuration !== "all") {
        if (!course.duration.toLowerCase().includes(selectedDuration.toLowerCase())) {
          return false;
        }
      }

      // Subsidized toggle
      if (subsidizedOnly && !course.isGovtSubsidized) {
        return false;
      }

      return true;
    });

    // Sorting
    switch (sortBy) {
      case "seats-asc":
        result = [...result].sort((a, b) => a.seatsRemaining - b.seatsRemaining);
        break;
      case "hours-desc":
        result = [...result].sort((a, b) => b.totalHours - a.totalHours);
        break;
      case "hours-asc":
        result = [...result].sort((a, b) => a.totalHours - b.totalHours);
        break;
      case "title-asc":
        result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "recommended":
      default:
        // Keep original curated order
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedDuration, subsidizedOnly, sortBy]);

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== "all" ||
    selectedDuration !== "all" ||
    subsidizedOnly;

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedDuration("all");
    setSubsidizedOnly(false);
    setSortBy("recommended");
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC]">
      
      {/* Hero Header with Background Image & Modern Search Bar */}
      <section className="w-full relative overflow-hidden py-14 sm:py-20 border-b border-slate-800 bg-slate-950 text-white">
        
        {/* Background Image with Dark Professional Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000&auto=format&fit=crop"
            alt="Technical Training Workshop"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/90 backdrop-blur-[2px]"></div>
        </div>

        {/* Subtle Ambient Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none z-0"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none z-0"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 relative z-10 text-center max-w-4xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-bold mb-4 shadow-sm backdrop-blur-md">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
            <span>Admission Open • Academic Session 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Technical & Vocational Training Programs
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-200 mt-4 leading-relaxed max-w-2xl mx-auto font-normal">
            Choose from government-subsidized, high-impact certification courses with 100% practical lab workstations, certified instructors, and national employment support.
          </p>

          {/* Redesigned Clean & Modern Search Bar */}
          <div className="mt-8 sm:mt-10 max-w-2xl mx-auto">
            <div className="relative flex items-center bg-white rounded-2xl shadow-2xl p-1.5 border border-white/20">
              <Search className="w-5 h-5 text-slate-400 ml-3.5 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search trades (e.g., Graphic Design, RAC, Solar, Wiring)..."
                className="w-full px-3.5 py-3 text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-none bg-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-2 text-slate-400 hover:text-slate-600 transition cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md shadow-emerald-900/30 transition shrink-0 cursor-pointer"
              >
                <span>Find Course</span>
              </button>
            </div>

            {/* Quick Popular Keywords */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3.5 text-xs text-slate-300">
              <span className="font-semibold text-slate-400">Popular:</span>
              {["Graphic Design", "Electrical", "RAC Servicing", "Welding", "Tailoring"].map((kw) => (
                <button
                  key={kw}
                  onClick={() => setSearchQuery(kw)}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition text-xs font-medium cursor-pointer"
                >
                  {kw}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Main Course Directory Area */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 py-10 sm:py-14 md:py-16">
        
        {/* Category Filter: Wrapped Box Layout (Never Cuts Off Any Category) */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 mb-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3.5 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-emerald-600" />
              <span className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
                Filter by Trade Category
              </span>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Select a category to filter all matching training programs
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-102"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold ${
                      isActive
                        ? "bg-emerald-500 text-slate-950"
                        : "bg-white text-slate-600 border border-slate-200"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Controls & View Switcher Bar (Clean, Symmetrical Enterprise Layout) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 mb-8 shadow-xs space-y-4">
          
          {/* Top Row: Course Counter on Left, Reset & View Switcher on Right */}
          <div className="flex items-center justify-between gap-4 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-black text-slate-900">
                Showing <span className="text-emerald-700">{filteredCourses.length}</span> Course{filteredCourses.length !== 1 ? "s" : ""}
              </span>
              {subsidizedOnly && (
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Subsidized Only
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}

              {/* Grid vs List View Toggle */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-lg transition cursor-pointer ${
                    viewMode === "grid"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                  aria-label="Grid View"
                  title="Grid View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded-lg transition cursor-pointer ${
                    viewMode === "list"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                  aria-label="List View"
                  title="List View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row: Symmetrical 3-Column Filter Controls Grid (Never Wraps Unevenly) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
            
            {/* Duration Dropdown */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Duration
              </label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full text-xs sm:text-sm font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 focus:outline-none focus:border-emerald-500 cursor-pointer transition"
              >
                <option value="all">All Durations</option>
                <option value="1 Month">1 Month Intensive</option>
                <option value="3 Months">3 Months Diploma</option>
                <option value="6 Months">6 Months Comprehensive</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full text-xs sm:text-sm font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 focus:outline-none focus:border-emerald-500 cursor-pointer transition"
              >
                <option value="recommended">Recommended</option>
                <option value="seats-asc">Fewest Seats Remaining</option>
                <option value="hours-desc">Highest Practical Hours</option>
                <option value="hours-asc">Shortest Hours</option>
                <option value="title-asc">Course Title (A-Z)</option>
              </select>
            </div>

            {/* Subsidized Only Toggle Button */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Govt Aid
              </label>
              <button
                type="button"
                onClick={() => setSubsidizedOnly(!subsidizedOnly)}
                className={`w-full py-2.5 px-3.5 rounded-xl border text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  subsidizedOnly
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                }`}
              >
                <CheckCircle2 className={`w-4 h-4 ${subsidizedOnly ? "text-white" : "text-slate-400"}`} />
                <span>Subsidized Only</span>
              </button>
            </div>

          </div>

        </div>

        {/* Course Cards Container: Grid Mode or List Mode */}
        {filteredCourses.length > 0 ? (
          viewMode === "grid" ? (
            /* GRID VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredCourses.map((course: Course) => (
                <div
                  key={course.id}
                  className="group bg-white rounded-3xl border border-slate-200 hover:border-emerald-500/50 shadow-xs hover:shadow-2xl hover:shadow-slate-200/70 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail Container */}
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
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/95 text-slate-800 shadow-md backdrop-blur-md">
                          {course.category}
                        </span>
                        <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500 text-slate-950 shadow-md">
                          {course.seatsRemaining} Seats Left
                        </span>
                      </div>

                      {/* Bottom Fee Pill */}
                      <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                        <span className="inline-block text-xs font-bold px-3.5 py-1.5 rounded-xl bg-slate-900/90 text-emerald-400 border border-emerald-400/20 backdrop-blur-md shadow-lg">
                          {course.fee}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <Link href={`/courses/${course.slug}`}>
                        <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                          {course.title}
                        </h3>
                      </Link>

                      <p className="text-xs sm:text-sm text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                        {course.shortDescription}
                      </p>

                      {/* Course Meta Key Facts */}
                      <div className="mt-5 pt-5 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="font-semibold text-slate-800">Duration:</span>
                          <span>{course.duration} ({course.totalHours} Hours)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="font-semibold text-slate-800">Eligibility:</span>
                          <span className="truncate">{course.minQualification}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="font-semibold text-slate-800">Hubs:</span>
                          <span className="truncate">{course.centersAvailable}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar: View Details + Apply Now */}
                  <div className="p-6 pt-0 flex items-center gap-2.5">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="flex-1 py-3 px-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm text-center transition"
                    >
                      View Details
                    </Link>
                    <Link
                      href={`/courses/${course.slug}#admission-form`}
                      className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm text-center transition shadow-md shadow-emerald-900/20 flex items-center justify-center gap-1.5"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* LIST VIEW */
            <div className="space-y-6">
              {filteredCourses.map((course: Course) => (
                <div
                  key={course.id}
                  className="group bg-white rounded-3xl border border-slate-200 hover:border-emerald-500/50 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
                >
                  {/* Thumbnail on Left */}
                  <div className="relative w-full md:w-80 lg:w-96 shrink-0 h-56 md:h-auto bg-slate-900 overflow-hidden">
                    <CourseThumbnail
                      src={course.thumbnail}
                      alt={course.title}
                      title={course.title}
                      category={course.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500 text-slate-950 shadow-md">
                        {course.seatsRemaining} Seats Left
                      </span>
                    </div>
                  </div>

                  {/* Details on Right */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                          {course.category}
                        </span>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-900 text-emerald-400">
                          {course.fee}
                        </span>
                      </div>

                      <Link href={`/courses/${course.slug}`}>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                          {course.title}
                        </h3>
                      </Link>

                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                        {course.shortDescription}
                      </p>

                      {/* Fact Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span><strong>Duration:</strong> {course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="truncate"><strong>Eligibility:</strong> {course.minQualification}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="truncate"><strong>Centers:</strong> {course.centersAvailable}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions: View Details + Apply */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="py-2.5 px-5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm transition"
                      >
                        View Details
                      </Link>
                      <Link
                        href={`/courses/${course.slug}#admission-form`}
                        className="py-2.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition shadow-md shadow-emerald-900/20 flex items-center gap-1.5"
                      >
                        <span>Apply for Admission</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          /* EMPTY STATE */
          <div className="text-center py-16 sm:py-24 bg-white rounded-3xl border border-slate-200 p-8 max-w-xl mx-auto shadow-xs">
            <div className="w-16 h-16 rounded-3xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4 border border-slate-200">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              No Matching Courses Found
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              We couldn&apos;t find any technical trades matching your filter criteria. Try searching for a different keyword or reset filters.
            </p>
            <button
              onClick={handleClearFilters}
              className="mt-6 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition inline-flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

        {/* Bottom Counseling & Advisory Help Banner */}
        <div className="mt-14 sm:mt-20 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 border border-slate-800 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                <Award className="w-3.5 h-3.5" />
                <span>Free Academic & Trade Counseling</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Not Sure Which Technical Trade is Best For You?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Speak directly with our regional academic advisors to learn about trade prospects, government loan opportunities for graduates, and practical lab schedules in your district.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center lg:items-end gap-3 shrink-0">
              <a
                href="tel:+8801700000000"
                className="w-full sm:w-auto lg:w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm text-center shadow-lg shadow-emerald-900/40 transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline: +880 1700-000000</span>
              </a>
              <Link
                href="/#notice-board"
                className="w-full sm:w-auto lg:w-full py-3 px-6 rounded-2xl bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15 font-semibold text-xs sm:text-sm text-center transition"
              >
                Admission Circulars & Guidelines
              </Link>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}
