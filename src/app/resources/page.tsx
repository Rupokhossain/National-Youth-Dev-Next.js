// src/app/resources/page.tsx
"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  Search,
  Filter,
  Calendar,
  Building,
  Bell,
  Sparkles,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  FileCode,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  PhoneCall,
  X,
  FileCheck2,
  FileCheck,
} from "lucide-react";
import { resourcesData, ResourceItem } from "@/lib/resourcesData";

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [previewItem, setPreviewItem] = useState<ResourceItem | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const categories = [
    { key: "all", label: "All Resources" },
    { key: "notices", label: "Notices & Routines" },
    { key: "syllabus", label: "Course Syllabi" },
    { key: "forms", label: "Official Forms" },
    { key: "career", label: "Career & Toolkits" },
  ];

  const filteredResources = useMemo(() => {
    return resourcesData.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.issuingDept.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleDownload = (item: ResourceItem) => {
    setDownloadToast(`Starting download: ${item.title} (${item.fileType} • ${item.fileSize})`);
    setTimeout(() => {
      setDownloadToast(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased pb-24">
      {/* Toast Notification */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-emerald-500/40 flex items-center gap-3 animate-slideUp">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">{downloadToast}</span>
        </div>
      )}

      {/* Institutional Hero Banner (Compact & Modern) */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-14 sm:py-16 border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/70 via-slate-900/90 to-slate-950 z-0"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-14 text-center space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold tracking-wide">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Central Document Repository & Notice Board</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Academic Resources, Circulars & <br className="hidden sm:inline" />
            <span className="text-emerald-400">Downloadable Forms</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Access official trade course syllabi, government subsidy circulars, examination routines, offline trainee registration forms, and youth career toolkits.
          </p>
        </div>
      </section>

      {/* Main 1240px Container (Cleanly placed below Hero, No Negative Margins) */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-8 pt-10 sm:pt-12 relative z-20 space-y-6 sm:space-y-7">
        
        {/* Search & Category Filter Card */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border border-slate-200/90 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
            {/* Search Bar with Large Legible Font */}
            <div className="md:col-span-7 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notices, syllabi, forms (e.g. Exam Routine, MS Office, Admission Form)..."
                className="w-full pl-12 pr-10 py-3.5 sm:py-4 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-base sm:text-lg transition shadow-inner"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 bg-slate-200/80 hover:bg-slate-200 p-1.5 rounded-xl transition"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Stats Counter */}
            <div className="md:col-span-5 flex items-center justify-between md:justify-end gap-3 text-xs sm:text-sm font-bold text-slate-500">
              <span className="bg-slate-100 text-slate-700 px-3.5 py-2 rounded-xl border border-slate-200">
                Showing <strong className="text-emerald-700">{filteredResources.length}</strong> of {resourcesData.length} Documents
              </span>
              {(searchQuery || selectedCategory !== "all") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="text-xs text-rose-600 hover:text-rose-700 font-bold underline"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills (Compact, Clean, Fully Responsive) */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100">
            {categories.map((cat) => {
              const count =
                cat.key === "all"
                  ? resourcesData.length
                  : resourcesData.filter((i) => i.category === cat.key).length;
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-slate-100/80 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] font-black px-2 py-0.5 rounded-full ${
                      isActive ? "bg-emerald-500 text-slate-950" : "bg-white text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Urgent Notice Card (Compact & High Impact) */}
        {selectedCategory === "all" && !searchQuery && (
          <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 text-white rounded-3xl p-5 sm:p-6 shadow-md border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                <Bell className="w-6 h-6 animate-pulse" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] sm:text-xs font-black tracking-wider uppercase">
                    Urgent Notice
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Session 2026 Examination</span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-white">
                  Academic Session 2026 Final Examination Routine & Practical Guidelines
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Practical lab examinations begin from 15 November 2026 across all 64 district branches.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleDownload(resourcesData[0])}
              className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shrink-0 transition shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Routine (PDF)</span>
            </button>
          </div>
        )}

        {/* Resource Cards Grid (Spacious, Tight Gap, Modern Card Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5">
          {filteredResources.map((item) => {
            const isPdf = item.fileType === "PDF";
            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                {/* Card Top Row: File Badge + Metadata */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-sm ${
                        isPdf
                          ? "bg-rose-50 text-rose-700 border border-rose-200"
                          : "bg-blue-50 text-blue-700 border border-blue-200"
                      }`}
                    >
                      {item.fileType}
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-extrabold tracking-wide">
                        {item.categoryLabel}
                      </span>
                      <p className="text-xs text-slate-400 font-medium mt-1 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.issuingDept}</span>
                      </p>
                    </div>
                  </div>

                  <span className="text-xs text-slate-400 font-semibold shrink-0 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </span>
                </div>

                {/* Card Center: Title & Description (Enlarged Fonts) */}
                <div className="space-y-2">
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-emerald-700 transition leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Card Bottom: File Info & Download Action */}
                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <span className="font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-lg">
                      {item.fileSize}
                    </span>
                    <span>•</span>
                    <span>{item.pageCount}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setPreviewItem(item)}
                      className="px-3.5 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm transition"
                    >
                      Details
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDownload(item)}
                      className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State when Search Yields Zero */}
        {filteredResources.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center space-y-3 border border-slate-200">
            <FileText className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No resources found</h3>
            <p className="text-sm text-slate-500">
              No documents matched your query "{searchQuery}". Try different keywords or reset filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-bold mt-2"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Bottom Helpdesk / Assistance Banner */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                Need an Attested Copy or Physical Institutional Form?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Hardcopy forms, embossed certificates, and syllabus manuals are available at all affiliated district branch centers. For urgent academic clearance, contact our central helpdesk.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition text-center"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Contact Academic Wing</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Resource Detail & Preview Modal */}
      {previewItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative max-w-xl w-full bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-5">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-sm ${
                    previewItem.fileType === "PDF"
                      ? "bg-rose-100 text-rose-700 border border-rose-300"
                      : "bg-blue-100 text-blue-700 border border-blue-300"
                  }`}
                >
                  {previewItem.fileType}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                    {previewItem.categoryLabel}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug">
                    {previewItem.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setPreviewItem(null)}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-xs sm:text-sm">
              <p className="text-slate-600 leading-relaxed font-normal">
                {previewItem.description}
              </p>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Issuing Directorate:</span>
                  <span className="font-bold text-slate-800">{previewItem.issuingDept}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Publication Date:</span>
                  <span className="font-bold text-slate-800">{previewItem.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Document Format:</span>
                  <span className="font-bold text-slate-800">{previewItem.fileType} ({previewItem.fileSize})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Page Extent:</span>
                  <span className="font-bold text-slate-800">{previewItem.pageCount}</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setPreviewItem(null)}
                className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  handleDownload(previewItem);
                  setPreviewItem(null);
                }}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-md transition"
              >
                <Download className="w-4 h-4" />
                <span>Download Document</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
