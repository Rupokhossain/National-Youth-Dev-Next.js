// src/app/results/page.tsx
"use client";

import React, { useState } from "react";
import {
  Search,
  Award,
  CheckCircle2,
  Printer,
  Download,
  ShieldCheck,
  AlertCircle,
  QrCode,
  RotateCcw,
  FileCheck,
  Building2,
  BookOpen,
  HelpCircle,
  GraduationCap,
} from "lucide-react";
import { findStudentResult, StudentResult } from "@/lib/resultsData";
import { useInstitute } from "@/context/InstituteContext";

export default function ExamResultsPage() {
  const { results } = useInstitute();
  const [activeTab, setActiveTab] = useState<"result" | "cert">("result");
  const [searchQuery, setSearchQuery] = useState("NYD-2026-1042");
  const [selectedSession, setSelectedSession] = useState("2026");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<StudentResult | null>(() => findStudentResult("NYD-2026-1042"));
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSearch = (queryOverride?: string) => {
    const query = (queryOverride ?? searchQuery).trim();
    if (!query) {
      setErrorMessage("Please enter a valid Roll, Registration, or Certificate Number.");
      setResult(null);
      return;
    }

    setErrorMessage(null);
    setIsLoading(true);

    setTimeout(() => {
      const clean = query.trim().toLowerCase();
      const match =
        results.find(
          (r) =>
            r.rollNo.toLowerCase() === clean ||
            r.registrationNo.toLowerCase() === clean ||
            r.certificateNo.toLowerCase() === clean
        ) || findStudentResult(query);

      setIsLoading(false);
      if (match) {
        setResult(match);
      } else {
        setResult(null);
        setErrorMessage(
          `No student record found matching "${query}" for the ${selectedSession} academic cycle. Please verify your Admit Card or registration document.`
        );
      }
    }, 350);
  };

  const handleSampleClick = (sampleVal: string, tab: "result" | "cert") => {
    setActiveTab(tab);
    setSearchQuery(sampleVal);
    handleSearch(sampleVal);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <>
      {/* Print Specific CSS to ensure an executive, clean A4 printout */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          header, footer, nav, .no-print {
            display: none !important;
          }
          body {
            background: #ffffff !important;
            color: #000000 !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          #printableTranscript {
            box-shadow: none !important;
            border: 1px solid #cbd5e1 !important;
            border-radius: 0 !important;
            padding: 24px !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}} />

      <div className="min-h-screen bg-slate-50 text-slate-800 antialiased pb-24 sm:pb-28">
        {/* Institutional Hero Banner */}
        <section className="relative bg-slate-950 text-white overflow-hidden py-12 sm:py-16 md:py-20 border-b border-slate-800 no-print">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/70 via-slate-900/90 to-slate-950 z-0"></div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 text-center space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              <span>Central Academic & Certification Registry</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Official Examination Results & <br className="hidden sm:inline" />
              <span className="text-emerald-400">Transcript Verification</span>
            </h1>
            <p className="text-xs sm:text-base md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              Verify authenticated marksheet transcripts, academic grades, and government-affiliated trade diplomas across all 64 district branches.
            </p>
          </div>
        </section>

        {/* Extended 1240px Container for Spacious, Non-Cramped Layout */}
        <main className="max-w-[1240px] mx-auto px-3 sm:px-6 lg:px-8 pt-6 sm:pt-10 md:pt-14 relative z-20 space-y-6 sm:space-y-10">
          
          {/* Executive Search Box */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden no-print">
            {/* Top Switcher Tabs with Mobile Optimization (1 single clean line on phones) */}
            <div className="grid grid-cols-2 bg-slate-100/90 p-1.5 sm:p-2.5 gap-1.5 sm:gap-2 border-b border-slate-200">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("result");
                  setSearchQuery("NYD-2026-1042");
                }}
                className={`flex items-center justify-center gap-1.5 sm:gap-2.5 py-3 sm:py-4 px-2 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-base transition ${
                  activeTab === "result"
                    ? "bg-white text-emerald-700 shadow-sm border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <FileCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                <span className="truncate">Student Result</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("cert");
                  setSearchQuery("CERT-2026-09412");
                }}
                className={`flex items-center justify-center gap-1.5 sm:gap-2.5 py-3 sm:py-4 px-2 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-base transition ${
                  activeTab === "cert"
                    ? "bg-white text-emerald-700 shadow-sm border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                <span className="truncate">Verify Certificate</span>
              </button>
            </div>

            {/* Search Input Form */}
            <div className="p-4 sm:p-8 md:p-10 space-y-5 sm:space-y-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 sm:gap-5 items-end">
                  <div className="sm:col-span-8">
                    <label className="block text-xs sm:text-base font-bold text-slate-800 uppercase tracking-wider mb-1.5 sm:mb-2.5">
                      {activeTab === "result"
                        ? "Student Roll or Registration Number"
                        : "Official Certificate Serial Number"}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={
                          activeTab === "result"
                            ? "e.g., NYD-2026-1042 or 2026-8940-02"
                            : "e.g., CERT-2026-09412"
                        }
                        className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm sm:text-lg tracking-wide transition shadow-inner"
                      />
                      {searchQuery && (
                        <button
                          type="button"
                          onClick={() => setSearchQuery("")}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs font-bold bg-slate-200/80 hover:bg-slate-200 px-2.5 py-1 rounded-lg transition"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label className="block text-xs sm:text-base font-bold text-slate-800 uppercase tracking-wider mb-1.5 sm:mb-2.5">
                      Academic Session
                    </label>
                    <select
                      value={selectedSession}
                      onChange={(e) => setSelectedSession(e.target.value)}
                      className="w-full px-3.5 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm sm:text-lg transition"
                    >
                      <option value="2026">2026 (Jan - Jun Session)</option>
                      <option value="2025-2">2025 (Jul - Dec Session)</option>
                      <option value="2025-1">2025 (Jan - Jun Session)</option>
                      <option value="2024">2024 (Annual Batch)</option>
                    </select>
                  </div>
                </div>

                {/* Instant Quick-Test Chips in Horizontal Swipe Bar on Mobile */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-slate-400 block">
                    Sample Demo Rolls (Tap to test):
                  </span>
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-none">
                    <button
                      type="button"
                      onClick={() => handleSampleClick("NYD-2026-1042", "result")}
                      className="whitespace-nowrap shrink-0 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold text-xs sm:text-sm hover:bg-emerald-100 transition shadow-sm"
                    >
                      NYD-2026-1042 (Office App)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSampleClick("NYD-2026-1088", "result")}
                      className="whitespace-nowrap shrink-0 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm hover:bg-slate-200 transition shadow-sm"
                    >
                      NYD-2026-1088 (Graphic)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSampleClick("NYD-2026-1120", "result")}
                      className="whitespace-nowrap shrink-0 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm hover:bg-slate-200 transition shadow-sm"
                    >
                      NYD-2026-1120 (Electrical)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSampleClick("NYD-2026-1210", "result")}
                      className="whitespace-nowrap shrink-0 px-3 py-1.5 rounded-xl bg-purple-50 text-purple-900 border border-purple-300 font-bold text-xs sm:text-sm hover:bg-purple-100 transition shadow-sm"
                    >
                      NYD-2026-1210 (Short Course)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSampleClick("CERT-2026-05499", "cert")}
                      className="whitespace-nowrap shrink-0 px-3 py-1.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-300 font-bold text-xs sm:text-sm hover:bg-amber-100 transition shadow-sm"
                    >
                      CERT-05499 (HVAC RAC)
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 sm:py-4.5 px-6 rounded-xl sm:rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-lg flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/25 hover:shadow-xl transition-all disabled:opacity-75"
                >
                  {isLoading ? (
                    <>
                      <RotateCcw className="w-4 h-4 sm:w-6 sm:h-6 animate-spin" />
                      <span>Verifying Central Academic Registry...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 sm:w-6 sm:h-6" />
                      <span>Search & Verify Transcript</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Error / Not Found Message */}
          {errorMessage && !isLoading && (
            <div className="bg-rose-50 border border-rose-300 rounded-2xl sm:rounded-3xl p-5 sm:p-9 flex items-start gap-3.5 sm:gap-4 text-rose-900 shadow-sm no-print">
              <AlertCircle className="w-5 h-5 sm:w-7 sm:h-7 text-rose-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="font-extrabold text-sm sm:text-lg">Record Not Found</h3>
                <p className="text-xs sm:text-base text-rose-700 leading-relaxed">
                  {errorMessage}
                </p>
                <div className="pt-1.5 text-[11px] sm:text-sm text-rose-800 font-semibold">
                  Need help? Contact the Academic Verification Desk at{" "}
                  <span className="font-bold underline">+880 1712-345678</span>.
                </div>
              </div>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="bg-white rounded-2xl sm:rounded-3xl p-10 sm:p-16 border border-slate-200 text-center space-y-3 sm:space-y-4 shadow-sm no-print">
              <div className="w-10 h-10 sm:w-14 sm:h-14 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <div className="space-y-1">
                <p className="font-extrabold text-slate-800 text-base sm:text-xl">Querying Central Academic Registry...</p>
                <p className="text-xs sm:text-base text-slate-500">Verifying security hashes, examination records, and digital seals</p>
              </div>
            </div>
          )}

          {/* Empty / Initial State */}
          {!result && !isLoading && !errorMessage && (
            <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-14 border border-slate-200 text-center space-y-3 sm:space-y-4 shadow-sm no-print">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="space-y-1.5 max-w-lg mx-auto">
                <h3 className="text-lg sm:text-2xl font-black text-slate-900">
                  Ready to View Certified Results
                </h3>
                <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
                  Enter your 10-digit Roll or Registration Number in the search box above, or click any of the Quick Demo buttons to see a live authenticated marksheet.
                </p>
              </div>
            </div>
          )}

          {/* Verified Academic Marksheet Transcript */}
          {result && !isLoading && (
            <div className="space-y-4 sm:space-y-6">
              {/* Paper Marksheet Container */}
              <div
                id="printableTranscript"
                className="bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-300 shadow-xl sm:shadow-2xl overflow-hidden p-4 sm:p-8 md:p-12 relative"
              >
                {/* Background Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
                  <span className="text-7xl sm:text-9xl md:text-[180px] font-black text-slate-900 tracking-widest">
                    NYDTI
                  </span>
                </div>

                {/* Marksheet Header */}
                <div className="border-b-2 border-slate-900/10 pb-6 mb-6 sm:pb-8 sm:mb-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 sm:gap-6 text-center md:text-left">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                      <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-emerald-700 to-teal-600 flex items-center justify-center text-white font-black text-xl sm:text-3xl shadow-md shrink-0">
                        NYD
                      </div>
                      <div className="space-y-1">
                        <h2 className="text-lg sm:text-2xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                          National Youth Development Technical Platform
                        </h2>
                        <p className="text-xs sm:text-base text-slate-600 font-semibold uppercase tracking-wider">
                          Affiliated with Saikat Computer & Training Jubo Songhoton • Govt. Reg: 04.30.2600
                        </p>
                        <p className="text-[11px] sm:text-sm text-emerald-700 font-extrabold tracking-wide pt-0.5">
                          OFFICIAL ACADEMIC TRANSCRIPT & RECORD OF ACHIEVEMENT
                        </p>
                      </div>
                    </div>

                    <div className="text-center md:text-right shrink-0">
                      <span className="inline-block px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-black tracking-wide border border-emerald-300 shadow-sm">
                        {result.resultStatus}
                      </span>
                      <p className="text-[11px] sm:text-sm text-slate-500 mt-1 sm:mt-2">
                        Verification Code:{" "}
                        <span className="font-mono font-bold text-slate-900">
                          {result.verificationCode}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trainee & Course Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 bg-slate-50/90 p-4 sm:p-7 md:p-9 rounded-2xl sm:rounded-3xl border border-slate-200">
                  
                  {/* Column 1: Personal Profile */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="border-b border-slate-200/80 pb-1.5">
                      <span className="text-[11px] sm:text-xs uppercase font-extrabold text-emerald-800 tracking-wider">Trainee Profile</span>
                    </div>
                    <div>
                      <span className="block text-[11px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">Full Name</span>
                      <p className="text-sm sm:text-lg font-black text-slate-900 mt-0.5">{result.studentName}</p>
                    </div>
                    <div>
                      <span className="block text-[11px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">Father's Name</span>
                      <p className="text-xs sm:text-base font-bold text-slate-800 mt-0.5">{result.fatherName}</p>
                    </div>
                    <div>
                      <span className="block text-[11px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">Mother's Name</span>
                      <p className="text-xs sm:text-base font-bold text-slate-800 mt-0.5">{result.motherName}</p>
                    </div>
                    <div>
                      <span className="block text-[11px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">Birth & Gender</span>
                      <p className="text-xs sm:text-base font-medium text-slate-700 mt-0.5">{result.dateOfBirth} • {result.gender}</p>
                    </div>
                  </div>

                  {/* Column 2: Academic Registry */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="border-b border-slate-200/80 pb-1.5">
                      <span className="text-[11px] sm:text-xs uppercase font-extrabold text-emerald-800 tracking-wider">Enrollment Details</span>
                    </div>
                    <div>
                      <span className="block text-[11px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">Roll Number</span>
                      <p className="text-base sm:text-xl font-mono font-black text-emerald-700 mt-0.5">{result.rollNo}</p>
                    </div>
                    <div>
                      <span className="block text-[11px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">Registration Number</span>
                      <p className="text-xs sm:text-base font-mono font-bold text-slate-900 mt-0.5">{result.registrationNo}</p>
                    </div>
                    <div>
                      <span className="block text-[11px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">Academic Session</span>
                      <p className="text-xs sm:text-base font-bold text-slate-800 mt-0.5">{result.session}</p>
                    </div>
                    <div>
                      <span className="block text-[11px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">Course Duration</span>
                      <p className="text-xs sm:text-base font-medium text-slate-700 mt-0.5">{result.duration}</p>
                    </div>
                  </div>

                  {/* Column 3: Trade & Center */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="border-b border-slate-200/80 pb-1.5">
                      <span className="text-[11px] sm:text-xs uppercase font-extrabold text-emerald-800 tracking-wider">Trade & Institute</span>
                    </div>
                    <div>
                      <span className="block text-[11px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">Vocational Trade</span>
                      <p className="text-sm sm:text-lg font-black text-slate-900 mt-0.5 leading-snug">{result.tradeName}</p>
                    </div>
                    <div>
                      <span className="block text-[11px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">Affiliated Training Center</span>
                      <p className="text-xs sm:text-base font-bold text-slate-800 mt-0.5 leading-snug">
                        {result.centerName} ({result.centerCode}, {result.district})
                      </p>
                    </div>
                    <div>
                      <span className="block text-[11px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">Certificate Serial</span>
                      <p className="text-xs sm:text-base font-mono font-bold text-slate-900 mt-0.5">{result.certificateNo}</p>
                    </div>
                    <div>
                      <span className="block text-[11px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">Issued On</span>
                      <p className="text-xs sm:text-base font-medium text-slate-700 mt-0.5">{result.issueDate}</p>
                    </div>
                  </div>

                </div>

                {/* Subject Marks Breakdown Table */}
                <div className="mt-8 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1.5 border-b border-slate-200/80 pb-2.5">
                    <div>
                      <h3 className="font-black text-slate-900 text-base sm:text-xl">
                        Course Modules & Evaluated Subjects
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium">
                        Detailed breakdown for: <span className="font-bold text-slate-800">{result.tradeName}</span>
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full w-fit">
                      <span>{result.subjects.length} {result.subjects.length === 1 ? 'Module Exam' : 'Modules Examined'}</span>
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-slate-300 -mx-1 sm:mx-0">
                    <table className="w-full min-w-[620px] text-left">
                      <thead className="bg-slate-100 text-slate-800 uppercase font-extrabold text-xs sm:text-sm border-b border-slate-300">
                        <tr>
                          <th className="py-3 sm:py-4 px-4 sm:px-6 w-[50%]">Subject / Competency Module</th>
                          <th className="py-3 sm:py-4 px-3 text-center w-[12%]">Full Marks</th>
                          <th className="py-3 sm:py-4 px-3 text-center w-[14%]">Obtained Marks</th>
                          <th className="py-3 sm:py-4 px-3 text-center w-[12%]">Letter Grade</th>
                          <th className="py-3 sm:py-4 px-3 text-center w-[12%]">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 font-medium text-slate-800 text-xs sm:text-base">
                        {result.subjects.map((sub, i) => (
                          <tr key={i} className="hover:bg-slate-50/80 transition">
                            <td className="py-3.5 sm:py-5 px-4 sm:px-6 font-bold text-slate-900">
                              <span className="font-mono text-slate-400 mr-2 text-xs">
                                {sub.code}
                              </span>
                              {sub.name}
                            </td>
                            <td className="py-3.5 sm:py-5 px-3 text-center font-semibold">{sub.fullMarks}</td>
                            <td className="py-3.5 sm:py-5 px-3 text-center font-black text-slate-900 text-sm sm:text-lg">
                              {sub.obtainedMarks}
                            </td>
                            <td className="py-3.5 sm:py-5 px-3 text-center font-black text-emerald-700 text-sm sm:text-lg">
                              {sub.grade}
                            </td>
                            <td className="py-3.5 sm:py-5 px-3 text-center">
                              <span className="text-[11px] sm:text-sm bg-emerald-50 text-emerald-800 px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-lg font-extrabold border border-emerald-300">
                                {sub.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot className="bg-slate-900 text-white font-bold text-xs sm:text-base">
                        <tr>
                          <td className="py-4 sm:py-5 px-4 sm:px-6 font-black">Comprehensive Evaluation</td>
                          <td className="py-4 sm:py-5 px-3 text-center">{result.totalMarks}</td>
                          <td className="py-4 sm:py-5 px-3 text-center text-emerald-400 font-extrabold text-xs sm:text-lg">
                            {result.obtainedTotal} / {result.totalMarks} ({result.percentage})
                          </td>
                          <td className="py-4 sm:py-5 px-3 text-center text-emerald-400 font-black text-xs sm:text-lg">
                            GPA {result.gpa} ({result.overallGrade})
                          </td>
                          <td className="py-4 sm:py-5 px-3 text-center text-emerald-400 font-black text-xs sm:text-base">
                            {result.resultStatus === "PASSED WITH DISTINCTION"
                              ? "PASSED"
                              : result.resultStatus}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <p className="sm:hidden text-[11px] text-slate-400 text-center pt-1.5 flex items-center justify-center gap-1">
                    <span>👉 Swipe horizontally to view full marks table</span>
                  </p>
                </div>

                {/* Signatures & QR Code Footer (Completely responsive on mobile - No cutoff!) */}
                <div className="mt-8 pt-6 sm:mt-12 sm:pt-8 border-t-2 border-dashed border-slate-300 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
                  {/* Digital Security Seal */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5 text-center sm:text-left">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-900 rounded-2xl p-2 flex flex-col items-center justify-center text-[9px] sm:text-[10px] font-mono text-emerald-400 border border-emerald-500/40 text-center leading-tight shrink-0 shadow-lg">
                      <QrCode className="w-7 h-7 sm:w-9 sm:h-9 text-emerald-400 mb-0.5" />
                      <span>AUTHENTIC</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600">
                      <p className="font-black text-slate-900 flex items-center justify-center sm:justify-start gap-1.5 text-xs sm:text-base">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Digitally Authenticated Document</span>
                      </p>
                      <p className="mt-0.5 text-[11px] sm:text-xs text-slate-500">Centrally logged into Saikat Training Org Database</p>
                      <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                        Certified Issue Date: {result.issueDate}
                      </p>
                    </div>
                  </div>

                  {/* Official Signatures (2-Column Grid on Mobile: Zero Text Cutoff) */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-10 w-full sm:w-auto text-center">
                    <div className="w-full">
                      <div className="w-full max-w-[130px] sm:max-w-[160px] border-b border-slate-400 mb-1.5 font-serif italic text-slate-800 text-sm sm:text-lg tracking-wider mx-auto">
                        S. Saikat
                      </div>
                      <p className="font-extrabold text-slate-900 text-xs sm:text-sm truncate">Executive Director</p>
                      <p className="text-[10px] sm:text-xs text-slate-500 truncate">National Youth Platform</p>
                    </div>
                    <div className="w-full">
                      <div className="w-full max-w-[130px] sm:max-w-[160px] border-b border-slate-400 mb-1.5 font-serif italic text-slate-800 text-sm sm:text-lg tracking-wider mx-auto">
                        M. Rahman
                      </div>
                      <p className="font-extrabold text-slate-900 text-xs sm:text-sm truncate">Controller of Exams</p>
                      <p className="text-[10px] sm:text-xs text-slate-500 truncate">Saikat Training Org</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Toolbar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4 pt-1 no-print">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-base flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition"
                >
                  <Printer className="w-4 h-4 text-emerald-400" />
                  <span>Print Official Transcript</span>
                </button>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      alert(
                        `Downloading authenticated digital certificate for ${result.studentName} (${result.certificateNo})...`
                      );
                    }}
                    className="w-full sm:w-auto px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-300 font-extrabold text-xs sm:text-base hover:bg-emerald-100 transition flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Certificate</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setResult(null);
                      setErrorMessage(null);
                    }}
                    className="w-full sm:w-auto px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-100 text-slate-800 font-bold text-xs sm:text-base hover:bg-slate-200 transition text-center"
                  >
                    Verify Another
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Educational / Helpdesk Guidance Section */}
          <section className="pt-6 sm:pt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 no-print">
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-2.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">Where to Find Roll No?</h4>
              <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
                Your 10-digit Roll or Registration Number is prominently printed on your examination Admit Card and trainee ID card.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-2.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">Employer Verification</h4>
              <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
                Employers, embassies, and overseas recruiters can authenticate diploma legitimacy by searching the Certificate Serial number.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-2.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">Discrepancy or Corrections</h4>
              <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
                For spelling corrections in trainee name or father's name, submit a formal application to your affiliated regional center within 30 days.
              </p>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
