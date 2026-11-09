// src/app/admin/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Award,
  FileText,
  Image as ImageIcon,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  Plus,
  Search,
  Trash2,
  Edit3,
  CheckCircle2,
  XCircle,
  ExternalLink,
  ShieldCheck,
  Eye,
  AlertCircle,
  Bell,
  RefreshCw,
  TrendingUp,
  Download,
  Calendar,
  Building,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { useInstitute, TraineeApplication, ContactInquiry } from "@/context/InstituteContext";
import { Course } from "@/lib/coursesData";
import { StudentResult } from "@/lib/resultsData";
import { ResourceItem } from "@/lib/resourcesData";
import { GalleryItem } from "@/lib/galleryData";

type AdminTab =
  | "overview"
  | "courses"
  | "results"
  | "resources"
  | "gallery"
  | "admissions"
  | "inquiries"
  | "settings";

export default function AdminDashboardPage() {
  const router = useRouter();
  const {
    courses,
    results,
    resources,
    gallery,
    admissions,
    inquiries,
    siteSettings,
    addCourse,
    updateCourse,
    deleteCourse,
    addResult,
    deleteResult,
    addResource,
    deleteResource,
    addGalleryItem,
    deleteGalleryItem,
    updateAdmissionStatus,
    deleteAdmission,
    updateInquiryStatus,
    deleteInquiry,
    updateSiteSettings,
    resetToDefaults,
  } = useInstitute();

  const [activeTab, setActiveTab] = useState<AdminTab>("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Modals state
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [isResourceModalOpen, setIsResourceModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [selectedResultPreview, setSelectedResultPreview] = useState<StudentResult | null>(null);

  const showToast = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  // Forms state
  const [newCourse, setNewCourse] = useState<Omit<Course, "id">>({
    slug: "",
    title: "",
    category: "ICT & Digital Engineering",
    categorySlug: "ict-digital",
    shortDescription: "",
    fullDescription: "",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    duration: "6 Months",
    totalHours: 360,
    seatsTotal: 30,
    seatsRemaining: 15,
    fee: "Government Subsidized (BDT 1,500)",
    isGovtSubsidized: true,
    minQualification: "SSC / Equivalent",
    schedule: "Morning Batch: 9:00 AM – 1:00 PM",
    centersAvailable: "Available across all 64 district branches",
    admissionDeadline: "20 Jan 2027",
    learningOutcomes: ["Hands-on practical competence", "Govt. certified diploma"],
    modules: [
      { moduleNumber: 1, title: "Trade Foundations", hours: 120, topics: ["Introduction", "Lab safety"] },
      { moduleNumber: 2, title: "Advanced Practical Labs", hours: 240, topics: ["Project work", "Viva"] },
    ],
    careerOpportunities: ["Technician", "Self-employed contractor"],
  });

  const [newResult, setNewResult] = useState<StudentResult>({
    rollNo: "",
    registrationNo: "",
    certificateNo: "",
    studentName: "",
    fatherName: "",
    motherName: "",
    gender: "Male",
    dateOfBirth: "10 Jan 2003",
    session: "January - June 2026",
    tradeName: "Computer Office Applications & Database Management",
    tradeCode: "COA-101",
    duration: "6 Months (360 Hours)",
    centerName: "Dhaka Central Technical Hub",
    centerCode: "C-0104",
    district: "Dhaka",
    issueDate: "28 June 2026",
    verificationCode: "NYD-VERIFY-2026",
    overallGrade: "A+",
    gpa: "4.00",
    totalMarks: 500,
    obtainedTotal: 460,
    percentage: "92.0%",
    resultStatus: "PASSED WITH DISTINCTION",
    subjects: [
      { code: "MOD-1", name: "Core Fundamentals & Systems", fullMarks: 100, obtainedMarks: 94, grade: "A+", status: "Pass" },
      { code: "MOD-2", name: "Advanced Practical Lab Assignment", fullMarks: 100, obtainedMarks: 92, grade: "A+", status: "Pass" },
      { code: "MOD-3", name: "Comprehensive Viva & External Evaluation", fullMarks: 100, obtainedMarks: 96, grade: "A+", status: "Pass" },
    ],
  });

  const [newResource, setNewResource] = useState<Omit<ResourceItem, "id">>({
    title: "",
    category: "notices",
    categoryLabel: "Official Circular",
    fileType: "PDF",
    fileSize: "1.2 MB",
    pageCount: "4 Pages",
    date: "10 Nov 2026",
    issuingDept: "Controller of Examinations",
    description: "",
    isUrgent: false,
    downloadUrl: "#",
  });

  const [newGallery, setNewGallery] = useState<Omit<GalleryItem, "id">>({
    title: "",
    category: "labs",
    categoryLabel: "Practical Labs",
    image: "/images/gallery-1.jpg",
    location: "Central Training Complex, Dhaka",
    date: "Session 2026",
    description: "",
  });

  // Action handlers
  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourse.title.trim()) return;
    const generatedSlug = newCourse.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    addCourse({ ...newCourse, slug: generatedSlug });
    setIsCourseModalOpen(false);
    showToast("New Course published to website successfully!");
    setNewCourse({ ...newCourse, title: "", shortDescription: "" });
  };

  const handleCreateResult = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newResult.rollNo.trim() || !newResult.studentName.trim()) return;
    addResult(newResult);
    setIsResultModalOpen(false);
    showToast(`Result published for Roll: ${newResult.rollNo}!`);
  };

  const handleCreateResource = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newResource.title.trim()) return;
    addResource(newResource);
    setIsResourceModalOpen(false);
    showToast("Resource & notice uploaded to repository!");
  };

  const handleCreateGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGallery.title.trim()) return;
    addGalleryItem(newGallery);
    setIsGalleryModalOpen(false);
    showToast("Photo added to campus gallery!");
  };

  const pendingAdmissionsCount = admissions.filter((a) => a.status === "Pending").length;
  const newInquiriesCount = inquiries.filter((i) => i.status === "New").length;

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex flex-col antialiased text-slate-800">
      
      {/* Top Directorate Header Bar */}
      <header className="bg-slate-950 text-white border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          
          {/* Logo & Portal Identity */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white font-black text-sm shadow-sm">
                NYD
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight text-white leading-tight flex items-center gap-2">
                  <span>Directorate Control Center</span>
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] px-2 py-0.5 rounded-full font-mono uppercase font-black">
                    Super Admin
                  </span>
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  Saikat Computer & Training Jubo Songhoton
                </span>
              </div>
            </Link>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-bold transition shadow-xs"
            >
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              <span>Live Public Website</span>
            </Link>

            <button
              type="button"
              onClick={() => {
                if (confirm("Reset all courses, results, notices, and media back to initial demo data?")) {
                  resetToDefaults();
                  showToast("Platform data reset to factory defaults!");
                }
              }}
              title="Reset sample data"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition text-xs"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            {/* Admin Avatar Profile */}
            <div className="flex items-center gap-2.5 pl-3 border-l border-slate-800">
              <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-xs shadow-inner">
                AD
              </div>
              <div className="hidden md:flex flex-col text-left">
                <span className="text-xs font-bold text-slate-200">Executive Director</span>
                <span className="text-[10px] text-emerald-400 font-mono">admin@jubounnayon.com</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => router.push("/login")}
              className="p-2 rounded-xl text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition ml-1"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

        </div>
      </header>

      {/* Main Body Layout with Sidebar */}
      <div className="max-w-[1600px] w-full mx-auto px-3 sm:px-6 py-6 flex-1 flex flex-col lg:flex-row gap-6">
        
        {/* Left Navigation Sidebar */}
        <aside className="w-full lg:w-64 shrink-0 bg-white rounded-3xl p-4 shadow-sm border border-slate-200/90 h-fit space-y-2">
          <div className="px-3 py-2 text-[11px] font-black tracking-wider uppercase text-slate-400">
            System Modules
          </div>

          <nav className="space-y-1">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeTab === "overview"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <LayoutDashboard className="w-4 h-4 text-emerald-500" />
                <span>Overview & Stats</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("courses")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeTab === "courses"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-emerald-500" />
                <span>Courses & Trades</span>
              </div>
              <span className="text-[11px] bg-slate-100 text-slate-600 font-extrabold px-2 py-0.5 rounded-full">
                {courses.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("results")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeTab === "results"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-emerald-500" />
                <span>Results & Marksheets</span>
              </div>
              <span className="text-[11px] bg-slate-100 text-slate-600 font-extrabold px-2 py-0.5 rounded-full">
                {results.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("resources")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeTab === "resources"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-emerald-500" />
                <span>Notices & Circulars</span>
              </div>
              <span className="text-[11px] bg-slate-100 text-slate-600 font-extrabold px-2 py-0.5 rounded-full">
                {resources.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("gallery")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeTab === "gallery"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ImageIcon className="w-4 h-4 text-emerald-500" />
                <span>Gallery & Media</span>
              </div>
              <span className="text-[11px] bg-slate-100 text-slate-600 font-extrabold px-2 py-0.5 rounded-full">
                {gallery.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("admissions")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeTab === "admissions"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-emerald-500" />
                <span>Trainee Admissions</span>
              </div>
              {pendingAdmissionsCount > 0 ? (
                <span className="text-[11px] bg-amber-500 text-slate-950 font-black px-2 py-0.5 rounded-full animate-pulse">
                  {pendingAdmissionsCount}
                </span>
              ) : (
                <span className="text-[11px] bg-slate-100 text-slate-600 font-extrabold px-2 py-0.5 rounded-full">
                  {admissions.length}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("inquiries")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeTab === "inquiries"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>Inquiries & Messages</span>
              </div>
              {newInquiriesCount > 0 && (
                <span className="text-[11px] bg-emerald-500 text-slate-950 font-black px-2 py-0.5 rounded-full">
                  {newInquiriesCount} new
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("settings")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeTab === "settings"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Settings className="w-4 h-4 text-emerald-500" />
                <span>Site Tickers & Config</span>
              </div>
            </button>
          </nav>

          <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-2">
            <div className="p-3 bg-emerald-50/70 border border-emerald-200/60 rounded-2xl">
              <span className="font-bold text-emerald-900 block text-[11px] uppercase">
                Active Session
              </span>
              <span className="font-extrabold text-emerald-700 text-xs">
                {siteSettings.currentSession}
              </span>
            </div>
          </div>
        </aside>

        {/* Main Workspace Area */}
        <main className="flex-1 space-y-6">
          
          {/* Floating Toast notification */}
          {successToast && (
            <div className="bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-lg flex items-center gap-2.5 font-bold text-xs sm:text-sm animate-bounce">
              <CheckCircle2 className="w-5 h-5" />
              <span>{successToast}</span>
            </div>
          )}

          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Courses</span>
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <BookOpen className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">{courses.length}</div>
                  <p className="text-[11px] text-emerald-600 font-bold">
                    {courses.filter((c) => c.isGovtSubsidized).length} Govt. Subsidized
                  </p>
                </div>

                <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Published Results</span>
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">{results.length}</div>
                  <p className="text-[11px] text-emerald-600 font-bold">100% Certified Marksheets</p>
                </div>

                <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Admissions</span>
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">{admissions.length}</div>
                  <p className="text-[11px] text-amber-600 font-bold">
                    {pendingAdmissionsCount} Pending Review
                  </p>
                </div>

                <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Inquiries</span>
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">{inquiries.length}</div>
                  <p className="text-[11px] text-purple-600 font-bold">
                    {newInquiriesCount} Unread / New
                  </p>
                </div>
              </div>

              {/* Urgent Notice Toggle Card */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                      Website Public Notice Bar
                    </span>
                    <span className="text-xs text-slate-400">
                      {siteSettings.urgentNoticeEnabled ? "Status: ACTIVE ON FRONTEND" : "Status: HIDDEN"}
                    </span>
                  </div>
                  <p className="text-sm text-slate-200 font-semibold">
                    "{siteSettings.emergencyNoticeText}"
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      updateSiteSettings({ urgentNoticeEnabled: !siteSettings.urgentNoticeEnabled });
                      showToast(
                        siteSettings.urgentNoticeEnabled
                          ? "Notice bar disabled on public site"
                          : "Notice bar enabled on public site"
                      );
                    }}
                    className={`px-4 py-2 rounded-xl font-bold text-xs transition ${
                      siteSettings.urgentNoticeEnabled
                        ? "bg-rose-600 hover:bg-rose-700 text-white"
                        : "bg-emerald-600 hover:bg-emerald-700 text-white"
                    }`}
                  >
                    {siteSettings.urgentNoticeEnabled ? "Turn OFF Notice" : "Turn ON Notice"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("settings")}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs"
                  >
                    Edit Text
                  </button>
                </div>
              </div>

              {/* 2-Column Split: Recent Admissions & Inquiries */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Admissions */}
                <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-600" />
                      <span>Recent Trainee Registrations</span>
                    </h3>
                    <button
                      type="button"
                      onClick={() => setActiveTab("admissions")}
                      className="text-xs font-bold text-emerald-700 hover:underline"
                    >
                      View All ({admissions.length})
                    </button>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {admissions.slice(0, 4).map((adm) => (
                      <div key={adm.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                        <div>
                          <p className="font-bold text-slate-900">{adm.fullName}</p>
                          <p className="text-slate-500 text-[11px]">{adm.trade}</p>
                          <span className="text-[10px] text-slate-400">{adm.phone} • {adm.district}</span>
                        </div>
                        <div className="text-right space-y-1">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                              adm.status === "Approved"
                                ? "bg-emerald-100 text-emerald-800"
                                : adm.status === "Rejected"
                                ? "bg-rose-100 text-rose-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {adm.status}
                          </span>
                          {adm.status === "Pending" && (
                            <button
                              type="button"
                              onClick={() => {
                                const roll = `NYD-2026-${Math.floor(1000 + Math.random() * 9000)}`;
                                updateAdmissionStatus(adm.id, "Approved", roll);
                                showToast(`Approved ${adm.fullName} with Roll ${roll}`);
                              }}
                              className="block text-[11px] font-bold text-emerald-700 hover:underline"
                            >
                              Approve Now
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Inquiries */}
                <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>Contact Desk Messages</span>
                    </h3>
                    <button
                      type="button"
                      onClick={() => setActiveTab("inquiries")}
                      className="text-xs font-bold text-emerald-700 hover:underline"
                    >
                      View All ({inquiries.length})
                    </button>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {inquiries.slice(0, 4).map((inq) => (
                      <div key={inq.id} className="py-3 space-y-1.5 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900">{inq.name} ({inq.phone})</span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                              inq.status === "New"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {inq.status}
                          </span>
                        </div>
                        <p className="text-slate-600 text-[11px] line-clamp-2">
                          "{inq.message}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: COURSES MANAGEMENT */}
          {activeTab === "courses" && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Courses & Trade Programs
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Add, edit, or remove technical training programs visible on the public /courses page.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCourseModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Course</span>
                </button>
              </div>

              {/* Courses Table */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[11px]">
                      <tr>
                        <th className="py-3.5 px-4 sm:px-6">Course Title</th>
                        <th className="py-3.5 px-4">Category</th>
                        <th className="py-3.5 px-4 text-center">Duration</th>
                        <th className="py-3.5 px-4 text-center">Seats Left</th>
                        <th className="py-3.5 px-4 text-center">Subsidy</th>
                        <th className="py-3.5 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      {courses.map((course) => (
                        <tr key={course.id} className="hover:bg-slate-50/80 transition">
                          <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 max-w-[280px]">
                            <p className="truncate">{course.title}</p>
                            <p className="text-[11px] text-slate-400 font-normal truncate">
                              {course.shortDescription}
                            </p>
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-slate-600">
                            {course.category}
                          </td>
                          <td className="py-3.5 px-4 text-center font-bold">
                            {course.duration}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                              {course.seatsRemaining} / {course.seatsTotal}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            {course.isGovtSubsidized ? (
                              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-black px-2 py-0.5 rounded-full">
                                Subsidized
                              </span>
                            ) : (
                              <span className="text-[10px] bg-slate-100 text-slate-600 font-bold px-2 py-0.5 rounded-full">
                                Regular
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              type="button"
                              onClick={() => {
                                if (confirm(`Delete course "${course.title}"?`)) {
                                  deleteCourse(course.id);
                                  showToast("Course removed from directory");
                                }
                              }}
                              className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 transition"
                              title="Delete Course"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: RESULTS MANAGEMENT */}
          {activeTab === "results" && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Official Exam Results & Marksheets
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Manage certified student marks, QR verification hashes, and certificate serials for public lookup.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsResultModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition"
                >
                  <Plus className="w-4 h-4" />
                  <span>Issue New Student Result</span>
                </button>
              </div>

              {/* Results Table */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[11px]">
                      <tr>
                        <th className="py-3.5 px-4 sm:px-6">Roll & Student Name</th>
                        <th className="py-3.5 px-4">Trade Program</th>
                        <th className="py-3.5 px-4 text-center">Session</th>
                        <th className="py-3.5 px-4 text-center">GPA / Grade</th>
                        <th className="py-3.5 px-4 text-center">Status</th>
                        <th className="py-3.5 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      {results.map((res) => (
                        <tr key={res.rollNo} className="hover:bg-slate-50/80 transition">
                          <td className="py-3.5 px-4 sm:px-6">
                            <span className="font-mono text-emerald-700 font-extrabold block">
                              {res.rollNo}
                            </span>
                            <span className="font-bold text-slate-900 text-xs sm:text-sm">
                              {res.studentName}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 max-w-[240px] truncate text-slate-600">
                            {res.tradeName}
                          </td>
                          <td className="py-3.5 px-4 text-center text-xs text-slate-500">
                            {res.session}
                          </td>
                          <td className="py-3.5 px-4 text-center font-black text-emerald-700">
                            GPA {res.gpa} ({res.overallGrade})
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <span className="text-[10px] bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-full font-black border border-emerald-300">
                              {res.resultStatus}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right space-x-1">
                            <button
                              type="button"
                              onClick={() => setSelectedResultPreview(res)}
                              className="p-1.5 rounded-lg text-emerald-700 hover:bg-emerald-50 transition"
                              title="Preview Marksheet"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                if (confirm(`Delete result record for Roll ${res.rollNo}?`)) {
                                  deleteResult(res.rollNo);
                                  showToast(`Result for ${res.rollNo} deleted`);
                                }
                              }}
                              className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 transition"
                              title="Delete Result"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: RESOURCES & NOTICES */}
          {activeTab === "resources" && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Notices, Syllabi & Downloadable Forms
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Manage documents displayed on the public /resources repository.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsResourceModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition"
                >
                  <Plus className="w-4 h-4" />
                  <span>Upload New Document</span>
                </button>
              </div>

              {/* Resources Table */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[11px]">
                      <tr>
                        <th className="py-3.5 px-4 sm:px-6">Document Title</th>
                        <th className="py-3.5 px-4">Category</th>
                        <th className="py-3.5 px-4 text-center">Format</th>
                        <th className="py-3.5 px-4">Department</th>
                        <th className="py-3.5 px-4 text-center">Date</th>
                        <th className="py-3.5 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      {resources.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50/80 transition">
                          <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 max-w-[260px]">
                            <p className="truncate">{item.title}</p>
                            {item.isUrgent && (
                              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-black px-2 py-0.5 rounded-full inline-block mt-0.5">
                                Urgent Notice
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-slate-600">
                            {item.categoryLabel}
                          </td>
                          <td className="py-3.5 px-4 text-center font-bold">
                            {item.fileType} ({item.fileSize})
                          </td>
                          <td className="py-3.5 px-4 text-slate-500 text-xs">
                            {item.issuingDept}
                          </td>
                          <td className="py-3.5 px-4 text-center text-xs text-slate-400">
                            {item.date}
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              type="button"
                              onClick={() => {
                                if (confirm(`Delete document "${item.title}"?`)) {
                                  deleteResource(item.id);
                                  showToast("Document removed");
                                }
                              }}
                              className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 transition"
                              title="Delete Document"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: GALLERY & MEDIA */}
          {activeTab === "gallery" && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Campus Gallery & Activity Archive
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Manage practical lab photos and field training highlights shown on /gallery.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsGalleryModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Photo to Gallery</span>
                </button>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gallery.map((photo) => (
                  <div
                    key={photo.id}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group"
                  >
                    <div className="relative h-44 bg-slate-100 overflow-hidden">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 left-3 bg-slate-950/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs">
                        {photo.categoryLabel}
                      </span>
                    </div>

                    <div className="p-4 space-y-2">
                      <h4 className="font-extrabold text-slate-900 text-sm leading-snug truncate">
                        {photo.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {photo.description}
                      </p>
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                        <span>{photo.location}</span>
                        <button
                          type="button"
                          onClick={() => {
                            if (confirm(`Remove photo "${photo.title}"?`)) {
                              deleteGalleryItem(photo.id);
                              showToast("Photo deleted from gallery");
                            }
                          }}
                          className="text-rose-600 font-bold hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: TRAINEE ADMISSIONS */}
          {activeTab === "admissions" && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Online Student Admissions Desk
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Applications received directly from candidates submitting the /register form.
                </p>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[11px]">
                      <tr>
                        <th className="py-3.5 px-4 sm:px-6">Candidate</th>
                        <th className="py-3.5 px-4">Applied Trade</th>
                        <th className="py-3.5 px-4 text-center">District</th>
                        <th className="py-3.5 px-4 text-center">Status</th>
                        <th className="py-3.5 px-4 text-center">Assigned Roll</th>
                        <th className="py-3.5 px-4 text-right">Review Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      {admissions.map((adm) => (
                        <tr key={adm.id} className="hover:bg-slate-50/80 transition">
                          <td className="py-3.5 px-4 sm:px-6">
                            <span className="font-bold text-slate-900 block">{adm.fullName}</span>
                            <span className="text-slate-400 text-xs">{adm.phone} • {adm.email}</span>
                          </td>
                          <td className="py-3.5 px-4 max-w-[220px] truncate text-slate-700">
                            {adm.trade}
                          </td>
                          <td className="py-3.5 px-4 text-center font-bold text-slate-600">
                            {adm.district}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <span
                              className={`px-2.5 py-1 rounded-full text-xs font-black ${
                                adm.status === "Approved"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : adm.status === "Rejected"
                                  ? "bg-rose-100 text-rose-800"
                                  : "bg-amber-100 text-amber-800"
                              }`}
                            >
                              {adm.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-center font-mono font-bold text-emerald-700">
                            {adm.assignedRoll || "—"}
                          </td>
                          <td className="py-3.5 px-4 text-right space-x-1.5">
                            {adm.status === "Pending" && (
                              <button
                                type="button"
                                onClick={() => {
                                  const roll = `NYD-2026-${Math.floor(1000 + Math.random() * 9000)}`;
                                  updateAdmissionStatus(adm.id, "Approved", roll);
                                  showToast(`Approved ${adm.fullName}! Assigned Roll: ${roll}`);
                                }}
                                className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs"
                              >
                                Approve
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => {
                                if (confirm(`Remove application of ${adm.fullName}?`)) {
                                  deleteAdmission(adm.id);
                                  showToast("Application deleted");
                                }
                              }}
                              className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 transition"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: INQUIRIES DESK */}
          {activeTab === "inquiries" && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Contact Desk & Helpline Inquiries
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Messages received through the public /contact form from trainees and visitors.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {inquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <h4 className="font-extrabold text-slate-900 text-base">{inq.name}</h4>
                        <p className="text-xs text-slate-400">
                          Mobile: <strong className="text-slate-700">{inq.phone}</strong> • Email: <strong className="text-slate-700">{inq.email}</strong> • District: {inq.district}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] bg-slate-100 text-slate-700 font-bold px-2.5 py-1 rounded-md">
                          {inq.inquiryType}
                        </span>
                        <span
                          className={`text-[10px] font-black px-2.5 py-1 rounded-full ${
                            inq.status === "New"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-emerald-100 text-emerald-800"
                          }`}
                        >
                          {inq.status}
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl text-slate-700 text-xs sm:text-sm leading-relaxed border border-slate-100">
                      "{inq.message}"
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-slate-400">Received on: {inq.date}</span>
                      <div className="flex items-center gap-2">
                        {inq.status === "New" && (
                          <button
                            type="button"
                            onClick={() => {
                              updateInquiryStatus(inq.id, "Replied");
                              showToast(`Inquiry from ${inq.name} marked as replied`);
                            }}
                            className="px-3 py-1.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
                          >
                            Mark as Replied
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            if (confirm("Delete this message?")) {
                              deleteInquiry(inq.id);
                              showToast("Inquiry deleted");
                            }
                          }}
                          className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: PLATFORM SETTINGS */}
          {activeTab === "settings" && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Platform Ticker & Global Site Config
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Update scrolling announcements, central helplines, and active academic cycle dynamically.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-5 max-w-3xl">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Scrolling Marquee Ticker Announcement
                  </label>
                  <textarea
                    rows={2}
                    value={siteSettings.tickerText}
                    onChange={(e) => updateSiteSettings({ tickerText: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <span className="text-[11px] text-slate-400">
                    Appears across the top header of the public website.
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Emergency Urgent Notice Text
                  </label>
                  <input
                    type="text"
                    value={siteSettings.emergencyNoticeText}
                    onChange={(e) => updateSiteSettings({ emergencyNoticeText: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Helpline Mobile
                    </label>
                    <input
                      type="text"
                      value={siteSettings.helplinePhone}
                      onChange={(e) => updateSiteSettings({ helplinePhone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Official Email
                    </label>
                    <input
                      type="email"
                      value={siteSettings.helplineEmail}
                      onChange={(e) => updateSiteSettings({ helplineEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Current Academic Cycle
                  </label>
                  <input
                    type="text"
                    value={siteSettings.currentSession}
                    onChange={(e) => updateSiteSettings({ currentSession: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => showToast("Platform configurations saved live!")}
                    className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition"
                  >
                    Save All Site Configurations
                  </button>
                </div>
              </div>
            </div>
          )}

        </main>

      </div>

      {/* MODAL: ADD NEW COURSE */}
      {isCourseModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">Add New Technical Course</h3>
              <button
                type="button"
                onClick={() => setIsCourseModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateCourse} className="space-y-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <label className="font-bold text-slate-800 uppercase text-xs">Course Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Industrial PLC Automation & Robotics"
                  value={newCourse.title}
                  onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-800 uppercase text-xs">Category</label>
                  <select
                    value={newCourse.category}
                    onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  >
                    <option value="ICT & Digital Engineering">ICT & Digital</option>
                    <option value="Electrical & Power Engineering">Electrical & Power</option>
                    <option value="Mechanical & Automobile">Mechanical & Auto</option>
                    <option value="Civil & Architectural Drafting">Civil & Drafting</option>
                    <option value="Textile, Apparel & Garments">Textile & Garments</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-800 uppercase text-xs">Duration</label>
                  <select
                    value={newCourse.duration}
                    onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  >
                    <option value="3 Months">3 Months (360 Hours)</option>
                    <option value="6 Months">6 Months (720 Hours)</option>
                    <option value="1 Year">1 Year Diploma</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-800 uppercase text-xs">Total Seats</label>
                  <input
                    type="number"
                    value={newCourse.seatsTotal}
                    onChange={(e) => setNewCourse({ ...newCourse, seatsTotal: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-800 uppercase text-xs">Available Seats</label>
                  <input
                    type="number"
                    value={newCourse.seatsRemaining}
                    onChange={(e) => setNewCourse({ ...newCourse, seatsRemaining: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-800 uppercase text-xs">Short Summary *</label>
                <textarea
                  required
                  rows={2}
                  placeholder="Summary of skills learned in this trade..."
                  value={newCourse.shortDescription}
                  onChange={(e) => setNewCourse({ ...newCourse, shortDescription: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="subsidizedToggle"
                  checked={newCourse.isGovtSubsidized}
                  onChange={(e) => setNewCourse({ ...newCourse, isGovtSubsidized: e.target.checked })}
                  className="w-4 h-4 rounded text-emerald-600"
                />
                <label htmlFor="subsidizedToggle" className="font-bold text-slate-800 cursor-pointer text-xs">
                  Mark as Government Subsidized Course
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsCourseModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold"
                >
                  Publish Course Live
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD STUDENT RESULT */}
      {isResultModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">Issue Certified Exam Result</h3>
              <button
                type="button"
                onClick={() => setIsResultModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateResult} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-800 uppercase text-xs">Roll Number *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., NYD-2026-9099"
                    value={newResult.rollNo}
                    onChange={(e) => setNewResult({ ...newResult, rollNo: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono font-bold"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-800 uppercase text-xs">Certificate Serial *</label>
                  <input
                    type="text"
                    required
                    placeholder="CERT-2026-09888"
                    value={newResult.certificateNo}
                    onChange={(e) => setNewResult({ ...newResult, certificateNo: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono font-bold"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-800 uppercase text-xs">Student Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., MD. SHOHANUR RAHMAN"
                  value={newResult.studentName}
                  onChange={(e) => setNewResult({ ...newResult, studentName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-800 uppercase text-xs">Father's Name</label>
                  <input
                    type="text"
                    value={newResult.fatherName}
                    onChange={(e) => setNewResult({ ...newResult, fatherName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-800 uppercase text-xs">Trade Program</label>
                  <input
                    type="text"
                    value={newResult.tradeName}
                    onChange={(e) => setNewResult({ ...newResult, tradeName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-800 uppercase text-xs">Total Marks</label>
                  <input
                    type="number"
                    value={newResult.totalMarks}
                    onChange={(e) => setNewResult({ ...newResult, totalMarks: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-800 uppercase text-xs">Obtained</label>
                  <input
                    type="number"
                    value={newResult.obtainedTotal}
                    onChange={(e) => setNewResult({ ...newResult, obtainedTotal: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-800 uppercase text-xs">GPA (e.g. 4.00)</label>
                  <input
                    type="text"
                    value={newResult.gpa}
                    onChange={(e) => setNewResult({ ...newResult, gpa: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-emerald-700"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsResultModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold"
                >
                  Save & Publish Result
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD RESOURCE */}
      {isResourceModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">Publish Academic Document</h3>
              <button
                type="button"
                onClick={() => setIsResourceModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateResource} className="space-y-3.5 text-xs sm:text-sm">
              <div className="space-y-1">
                <label className="font-bold text-slate-800 uppercase text-xs">Document Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Academic Session 2026 Examination Routine"
                  value={newResource.title}
                  onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-800 uppercase text-xs">Category</label>
                  <select
                    value={newResource.category}
                    onChange={(e) => setNewResource({ ...newResource, category: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  >
                    <option value="notices">Official Notices</option>
                    <option value="syllabus">Curriculum & Syllabus</option>
                    <option value="forms">Registration Forms</option>
                    <option value="career">Career Toolkits</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-800 uppercase text-xs">Format</label>
                  <select
                    value={newResource.fileType}
                    onChange={(e) => setNewResource({ ...newResource, fileType: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  >
                    <option value="PDF">PDF Document</option>
                    <option value="DOC">Word Document</option>
                    <option value="ZIP">ZIP Package</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="urgentNoticeToggle"
                  checked={newResource.isUrgent}
                  onChange={(e) => setNewResource({ ...newResource, isUrgent: e.target.checked })}
                  className="w-4 h-4 rounded text-emerald-600"
                />
                <label htmlFor="urgentNoticeToggle" className="font-bold text-slate-800 cursor-pointer text-xs">
                  Feature as Top Urgent Notice Banner
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsResourceModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold"
                >
                  Upload & Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD GALLERY PHOTO */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">Add Campus Training Photo</h3>
              <button
                type="button"
                onClick={() => setIsGalleryModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateGallery} className="space-y-3.5 text-xs sm:text-sm">
              <div className="space-y-1">
                <label className="font-bold text-slate-800 uppercase text-xs">Photo Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Computer Networking Lab Practical"
                  value={newGallery.title}
                  onChange={(e) => setNewGallery({ ...newGallery, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-800 uppercase text-xs">Image Path or URL *</label>
                <input
                  type="text"
                  required
                  value={newGallery.image}
                  onChange={(e) => setNewGallery({ ...newGallery, image: e.target.value })}
                  placeholder="/images/gallery-1.jpg"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-800 uppercase text-xs">Description</label>
                <textarea
                  rows={2}
                  value={newGallery.description}
                  onChange={(e) => setNewGallery({ ...newGallery, description: e.target.value })}
                  placeholder="Brief note about the training activity..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsGalleryModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold"
                >
                  Add to Gallery
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: PREVIEW MARKSHEET */}
      {selectedResultPreview && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-4 max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600" />
                <h3 className="font-extrabold text-slate-900 text-base">
                  Authenticated Digital Marksheet Preview
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedResultPreview(null)}
                className="text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Student Name:</span>
                <span className="font-black text-slate-900">{selectedResultPreview.studentName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Roll Number:</span>
                <span className="font-mono font-bold text-emerald-700">{selectedResultPreview.rollNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Registration No:</span>
                <span className="font-mono font-bold text-slate-800">{selectedResultPreview.registrationNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Trade Program:</span>
                <span className="font-bold text-slate-800">{selectedResultPreview.tradeName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Academic Session:</span>
                <span className="font-bold text-slate-800">{selectedResultPreview.session}</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-slate-200">
                <span className="text-slate-700 font-black">Final Evaluation:</span>
                <span className="font-black text-emerald-700 text-sm">
                  GPA {selectedResultPreview.gpa} ({selectedResultPreview.overallGrade}) — {selectedResultPreview.resultStatus}
                </span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedResultPreview(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
