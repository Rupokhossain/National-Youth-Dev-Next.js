"use client";

import React, { useState } from "react";
import {
  Bell,
  FileText,
  Download,
  Calendar,
  Search,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  BookOpen,
  PhoneCall,
  Clock,
  Sparkles,
  X,
  Printer,
  Share2,
} from "lucide-react";

interface Notice {
  id: string;
  title: string;
  refNo: string;
  category: string;
  categorySlug: "admission" | "exam" | "results" | "grants";
  date: {
    day: string;
    month: string;
    year: string;
  };
  isNew: boolean;
  isUrgent: boolean;
  fileSize: string;
  description: string;
  content: string;
}

const noticesList: Notice[] = [
  {
    id: "notice-1",
    title: "Official Circular: Admission Schedule for Winter 2026 Vocational & Technical Trade Diploma Courses",
    refNo: "NYDTI/ACAD/2026/CIRC-1084",
    category: "Admission Circular",
    categorySlug: "admission",
    date: { day: "12", month: "DEC", year: "2026" },
    isNew: true,
    isUrgent: true,
    fileSize: "1.4 MB",
    description: "Applications are invited from eligible candidates across all 64 district training hubs for subsidized 3-month and 6-month trade diploma courses. Orientation begins on January 5, 2027.",
    content: "National Youth Development Technical Institute announces the commencement of admission for the Winter Session 2026. Subsidized technical courses include ICT, Electrical House Wiring, Certified Welding, RAC Servicing, Hotel Management, and Dairy Farming. Candidates must apply through their regional centers or online portal before December 25, 2026. Minimum academic qualification is Class 8 / SSC depending on the selected trade.",
  },
  {
    id: "notice-2",
    title: "National Board Practical Examination Routine: November-December Trade Assessment Session",
    refNo: "NYDTI/EXAM/2026/ROUT-491",
    category: "Exam Routine",
    categorySlug: "exam",
    date: { day: "08", month: "DEC", year: "2026" },
    isNew: true,
    isUrgent: false,
    fileSize: "850 KB",
    description: "Detailed schedule of practical laboratory evaluations, viva-voce demonstrations, and board assessments for all enrolled candidates.",
    content: "All candidates registered for the November-December 2026 trade examinations are hereby informed that practical assessments will commence on December 20, 2026 across designated district examination centers. Trainees must bring their valid student identity card and official admit slip. Contact center superintendents for specific lab batch allocations.",
  },
  {
    id: "notice-3",
    title: "Published Merit List & Grade Sheets: Computer Office Application & Graphic Design Batch 2026-A",
    refNo: "NYDTI/RES/2026/MERIT-302",
    category: "Results & Merit",
    categorySlug: "results",
    date: { day: "02", month: "DEC", year: "2026" },
    isNew: false,
    isUrgent: false,
    fileSize: "2.1 MB",
    description: "Official roll-wise final grading sheet and certificate dispatch notification for accredited regional branch trainees.",
    content: "The Academic Evaluation Council has formally published the final examination results of Batch 2026-A Computer Office Application & Graphic Design diploma programs. Out of 1,240 examinees nationwide, 1,180 trainees have successfully cleared the practical viva and board evaluation. Digital transcripts are accessible on the portal.",
  },
  {
    id: "notice-4",
    title: "Gazette Notification: Disbursal of Government Youth Enterprise Microcredit & Startup Toolkits",
    refNo: "NYDTI/GRNT/2026/GAZ-089",
    category: "Grants & Loans",
    categorySlug: "grants",
    date: { day: "28", month: "NOV", year: "2026" },
    isNew: false,
    isUrgent: false,
    fileSize: "1.1 MB",
    description: "Approved nomination list of certified technical graduates eligible for low-interest self-employment credit facilities up to BDT 100,000.",
    content: "Under the National Youth Self-Reliance & Employment Scheme, 350 certified trade graduates from Electrical, AC Servicing, and Dairy Farming disciplines have been selected for initial free toolkits and low-interest startup microcredit disbursement. Selected applicants must report to their district youth development offices.",
  },
  {
    id: "notice-5",
    title: "Urgent Notice: Online Form Fill-up & Admit Card Correction for Semester Final Examinations",
    refNo: "NYDTI/ADMIT/2026/CORR-112",
    category: "Exam Routine",
    categorySlug: "exam",
    date: { day: "22", month: "NOV", year: "2026" },
    isNew: false,
    isUrgent: true,
    fileSize: "620 KB",
    description: "Instructions for correcting trainee personal details, photo mismatches, and trade code discrepancies before admit generation.",
    content: "Trainees experiencing spelling errors in their names, guardian names, or national ID details on provisional admit cards must submit correction requests through the branch portal before December 10, 2026. No modifications will be entertained after the deadline.",
  },
  {
    id: "notice-6",
    title: "Special Workshop Circular: Advanced Inverter AC & Solar Energy Systems Masterclass",
    refNo: "NYDTI/WKSHP/2026/CIRC-55",
    category: "Admission Circular",
    categorySlug: "admission",
    date: { day: "15", month: "NOV", year: "2026" },
    isNew: false,
    isUrgent: false,
    fileSize: "940 KB",
    description: "3-day specialized practical workshop conducted in collaboration with leading technical industry partners.",
    content: "A special 3-day intensive masterclass on modern eco-friendly R32 refrigerant handling and rooftop photovoltaic solar installation will be hosted at the Central Laboratory. Participation is limited to 40 candidates holding prior electrical or HVAC certifications.",
  },
];

export default function NoticeBoard() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const tabs = [
    { label: "All Circulars", value: "all", count: noticesList.length },
    { label: "Admission", value: "admission", count: noticesList.filter((n) => n.categorySlug === "admission").length },
    { label: "Exam Routine", value: "exam", count: noticesList.filter((n) => n.categorySlug === "exam").length },
    { label: "Results & Merit", value: "results", count: noticesList.filter((n) => n.categorySlug === "results").length },
    { label: "Grants & Loans", value: "grants", count: noticesList.filter((n) => n.categorySlug === "grants").length },
  ];

  const filteredNotices = noticesList.filter((notice) => {
    const matchesTab = activeTab === "all" || notice.categorySlug === activeTab;
    const matchesSearch =
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.refNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="notices" className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 py-12 sm:py-16 md:py-20">
      
      {/* 1. Urgent Broadcast Marquee Ticker */}
      <div className="mb-10 sm:mb-12 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3 sm:p-4 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 overflow-hidden">
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping"></span>
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">Live Broadcast</span>
        </div>
        
        <div className="flex-1 text-xs sm:text-sm md:text-base text-slate-800 font-semibold truncate leading-relaxed">
          <span className="text-emerald-700 font-bold mr-2">[Notice #1084]:</span>
          Winter 2026 Batch admission applications are now open across all 64 district branches. Free practical toolkit allocation for early registrants.
        </div>

        <button
          onClick={() => setSelectedNotice(noticesList[0])}
          className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl transition shrink-0 flex items-center gap-1.5"
        >
          <span>Read Circular</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 2. Main Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs sm:text-sm font-bold mb-3.5">
            <Bell className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Official Institutional Bulletins & Gazettes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
            Academic Notice Board & Circulars
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-3 leading-relaxed">
            Stay updated with real-time academic announcements, board examination routines, semester results, and public government gazettes.
          </p>
        </div>

        {/* Real-time Search Input */}
        <div className="w-full md:w-80 shrink-0">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search circular or memo ref..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition shadow-xs"
            />
          </div>
        </div>
      </div>

      {/* 3. Main Content: 8 / 4 Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (8 cols): Interactive Filter Pills + Notice Rows */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Category Tabs: Touch-Friendly Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 shrink-0 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/15"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Notices List */}
          <div className="space-y-4">
            {filteredNotices.length > 0 ? (
              filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200 hover:border-emerald-500/50 shadow-xs hover:shadow-lg hover:shadow-slate-200/60 p-5 sm:p-6 transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
                >
                  {/* Left: Date Badge + Details */}
                  <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                    {/* Date Block */}
                    <div className="w-16 h-18 sm:w-18 sm:h-20 rounded-2xl bg-slate-900 text-white flex flex-col items-center justify-center shrink-0 shadow-sm border border-slate-800">
                      <span className="text-xl sm:text-2xl font-black leading-none">{notice.date.day}</span>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400 mt-1">
                        {notice.date.month}
                      </span>
                      <span className="text-[9px] text-slate-400 font-medium">{notice.date.year}</span>
                    </div>

                    {/* Notice Metadata & Title */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[11px] sm:text-xs font-bold px-3 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                          {notice.category}
                        </span>
                        {notice.isNew && (
                          <span className="text-[10px] sm:text-[11px] font-extrabold px-2.5 py-0.5 rounded-md bg-emerald-500 text-slate-950 uppercase">
                            New
                          </span>
                        )}
                        {notice.isUrgent && (
                          <span className="text-[10px] sm:text-[11px] font-extrabold px-2.5 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200 uppercase">
                            Urgent
                          </span>
                        )}
                        <span className="text-[11px] text-slate-400 font-mono hidden md:inline-block">
                          {notice.refNo}
                        </span>
                      </div>

                      <h3
                        onClick={() => setSelectedNotice(notice)}
                        className="text-base sm:text-lg md:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition cursor-pointer leading-snug line-clamp-2"
                      >
                        {notice.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                        {notice.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 shrink-0">
                    <span className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-slate-400" />
                      <span>{notice.fileSize}</span>
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedNotice(notice)}
                        className="text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition"
                      >
                        View Notice
                      </button>
                      <button
                        onClick={() => alert(`Downloading official PDF copy: ${notice.title} (${notice.refNo})`)}
                        className="text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 p-2.5 sm:px-3.5 sm:py-2 rounded-xl transition flex items-center gap-1.5 shadow-sm"
                        title="Download PDF"
                      >
                        <Download className="w-4 h-4" />
                        <span className="hidden sm:inline">PDF</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-slate-800">No Circulars Found</h4>
                <p className="text-sm text-slate-500 mt-1">Try searching with a different keyword or selecting "All Circulars".</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column (4 cols): Quick Downloads + Academic Advisory */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Quick Downloads Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 flex items-center gap-2.5">
              <Download className="w-5 h-5 text-emerald-600" />
              <span>Essential Downloads & Forms</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-5">
              Official institutional documents, syllabi, and application guidelines.
            </p>

            <div className="space-y-3">
              {[
                { title: "2026 Academic Calendar & Exam Schedule", size: "PDF • 2.4 MB" },
                { title: "Student Code of Conduct & Lab Safety Rules", size: "PDF • 950 KB" },
                { title: "Youth Microcredit Application Form (Form-A)", size: "PDF • 1.2 MB" },
                { title: "Admit Card Correction Request Form", size: "PDF • 480 KB" },
                { title: "Vocational Trade Syllabus Handbook 2026", size: "PDF • 4.6 MB" },
              ].map((doc, idx) => (
                <div
                  key={idx}
                  onClick={() => alert(`Downloading document: ${doc.title}`)}
                  className="p-3.5 rounded-2xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-100 hover:border-emerald-200 transition cursor-pointer flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <FileText className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-emerald-800 transition block truncate leading-snug">
                        {doc.title}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium block mt-0.5">{doc.size}</span>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0 transition" />
                </div>
              ))}
            </div>
          </div>

          {/* Academic Desk Helpline Card */}
          <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-md p-6 sm:p-7">
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-400/20">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white leading-tight">Notice Inquiries & Support</h4>
                <span className="text-xs text-slate-400">Academic & Examination Section</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              For circular clarification, gazette confirmation, or examination routine queries, contact the Registrar Desk:
            </p>

            <div className="space-y-2 py-3 border-t border-slate-800 text-xs sm:text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">National Helpline:</span>
                <span className="font-mono font-bold text-emerald-400">333</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Academic Desk:</span>
                <span className="font-mono font-bold text-emerald-400">01700-000000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Official Email:</span>
                <span className="font-mono font-semibold text-slate-200">academic@nydti.gov.bd</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Working Hours:</span>
                <span className="text-slate-200">Sat – Thu (9 AM – 5 PM)</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* 4. Interactive Notice Detail / PDF Preview Modal */}
      {selectedNotice && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-6 sm:p-7 flex items-start justify-between gap-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  National Youth Development Technical Institute
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Official Memo: {selectedNotice.refNo}
                </span>
              </div>
              <button
                onClick={() => setSelectedNotice(null)}
                className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm border-b border-slate-100 pb-4">
                <span className="font-bold px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {selectedNotice.category}
                </span>
                <span className="text-slate-500 font-semibold flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>Date: {selectedNotice.date.day} {selectedNotice.date.month} {selectedNotice.date.year}</span>
                </span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug">
                {selectedNotice.title}
              </h3>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm text-slate-700 leading-relaxed font-medium">
                {selectedNotice.description}
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Official Gazetted Statement:</h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {selectedNotice.content}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm text-emerald-950 font-medium flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Digitally signed and sealed by the Academic & Examination Council.</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="bg-slate-50 p-6 sm:p-7 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <button
                onClick={() => setSelectedNotice(null)}
                className="px-5 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs sm:text-sm font-bold transition text-center"
              >
                Close Window
              </button>
              <button
                onClick={() => alert(`Downloading: ${selectedNotice.title} (PDF ${selectedNotice.fileSize})`)}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Gazette (PDF)</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
