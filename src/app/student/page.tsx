// src/app/student/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  BookOpen,
  Award,
  Calendar,
  CreditCard,
  FileText,
  CheckCircle2,
  Clock,
  Printer,
  Download,
  ExternalLink,
  LogOut,
  QrCode,
  ShieldCheck,
  Building,
  User,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import { useInstitute } from "@/context/InstituteContext";

type StudentTab = "courses" | "marksheet" | "exams" | "idcard";

export default function StudentDashboardPage() {
  const router = useRouter();
  const { results, resources, siteSettings } = useInstitute();
  const [activeTab, setActiveTab] = useState<StudentTab>("courses");

  // Default active logged-in student (matches default test student NYD-2026-1042)
  const studentResult = results.find((r) => r.rollNo === "NYD-2026-1042") || results[0];

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col antialiased text-slate-800">
      
      {/* Student Portal Header Bar */}
      <header className="bg-slate-950 text-white border-b border-slate-800 sticky top-0 z-40 no-print">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white font-black text-sm shadow-sm">
                NYD
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight text-white leading-tight flex items-center gap-2">
                  <span>Student Learning Portal</span>
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] px-2 py-0.5 rounded-full font-mono uppercase font-black">
                    Trainee
                  </span>
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  Saikat Computer & Training Jubo Songhoton
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-bold transition"
            >
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              <span>Public Portal</span>
            </Link>

            <div className="flex items-center gap-2.5 pl-3 border-l border-slate-800">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xs shadow-inner">
                TH
              </div>
              <div className="hidden md:flex flex-col text-left">
                <span className="text-xs font-bold text-slate-200">
                  {studentResult?.studentName || "MD. TANVIR HASAN"}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">
                  {studentResult?.rollNo || "NYD-2026-1042"}
                </span>
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

      {/* Main Student Shell */}
      <main className="max-w-[1240px] w-full mx-auto px-4 sm:px-8 py-8 space-y-8 flex-1">
        
        {/* Welcome Student Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden no-print">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
                  Active Enrolled Trainee
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  {studentResult?.session || "Session 2026 (Jan - Jun Batch)"}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                {studentResult?.studentName || "MD. TANVIR HASAN"}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Enrolled Trade: <strong className="text-emerald-400">{studentResult?.tradeName}</strong> ({studentResult?.duration}) at {studentResult?.centerName}.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 space-y-1.5 shrink-0 text-xs">
              <div className="flex justify-between gap-6">
                <span className="text-slate-300">Roll No:</span>
                <span className="font-mono font-bold text-white">{studentResult?.rollNo}</span>
              </div>
              <div className="flex justify-between gap-6">
                <span className="text-slate-300">Registration:</span>
                <span className="font-mono font-bold text-white">{studentResult?.registrationNo}</span>
              </div>
              <div className="flex justify-between gap-6">
                <span className="text-slate-300">Cumulative GPA:</span>
                <span className="font-bold text-emerald-400">{studentResult?.gpa} (Grade {studentResult?.overallGrade})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-print border-b border-slate-200">
          <button
            type="button"
            onClick={() => setActiveTab("courses")}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition shrink-0 ${
              activeTab === "courses"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-500" />
            <span>Enrolled Course & Progress</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("marksheet")}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition shrink-0 ${
              activeTab === "marksheet"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Award className="w-4 h-4 text-emerald-500" />
            <span>Official Marksheet & Certificate</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("exams")}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition shrink-0 ${
              activeTab === "exams"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Calendar className="w-4 h-4 text-emerald-500" />
            <span>Exam Routine & Circulars</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("idcard")}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition shrink-0 ${
              activeTab === "idcard"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <CreditCard className="w-4 h-4 text-emerald-500" />
            <span>Digital Trainee ID Card</span>
          </button>
        </div>

        {/* TAB 1: ENROLLED COURSE & MODULE PROGRESS */}
        {activeTab === "courses" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Assigned Diploma Curriculum
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                    {studentResult?.tradeName}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Duration: {studentResult?.duration} • Center: {studentResult?.centerName}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-400 block">Overall Curriculum Completion</span>
                  <span className="text-2xl font-black text-emerald-700">75% Completed</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                  <div className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full w-[75%] transition-all duration-500"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-500 font-semibold">
                  <span>270 Hours Completed</span>
                  <span>90 Practical Lab Hours Remaining</span>
                </div>
              </div>

              {/* Modules Breakdown */}
              <div className="space-y-3 pt-2">
                <h3 className="font-extrabold text-slate-900 text-sm uppercase tracking-wide">
                  Practical Competency Modules
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-slate-900 text-sm">COA-101: Computer Fundamentals & OS</h4>
                      <p className="text-xs text-slate-500">Hardware architecture, Windows administration, file systems.</p>
                      <span className="inline-block text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md mt-1">Completed (92/100)</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-slate-900 text-sm">COA-102: Advanced MS Word & Documentation</h4>
                      <p className="text-xs text-slate-500">Bangla & English touch-typing speed, mail-merge, formatting.</p>
                      <span className="inline-block text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md mt-1">Completed (89/100)</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-slate-900 text-sm">COA-103: MS Excel, Formulas & Payroll</h4>
                      <p className="text-xs text-slate-500">VLOOKUP, Pivot tables, financial sheets, accounting formulas.</p>
                      <span className="inline-block text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md mt-1">Completed (94/100)</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-slate-900 text-sm">COA-104: Database Systems (MS Access) & Security</h4>
                      <p className="text-xs text-slate-500">Relational tables, query forms, network backups & cyber hygiene.</p>
                      <span className="inline-block text-[10px] font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md mt-1">In Progress (86/100)</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: MARKSHEET & TRANSCRIPT */}
        {activeTab === "marksheet" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Official Academic Transcript
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Certified examination marks logged into Saikat Training Org database.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition"
                >
                  <Printer className="w-4 h-4 text-emerald-400" />
                  <span>Print Official Transcript</span>
                </button>
                <Link
                  href={`/results`}
                  target="_blank"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Public Verification Link</span>
                </Link>
              </div>
            </div>

            {/* Marksheet Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg space-y-6">
              
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-700">
                    CERTIFICATE NO: {studentResult?.certificateNo}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    {studentResult?.studentName}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Father: {studentResult?.fatherName} • Session: {studentResult?.session}
                  </p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-right">
                  <span className="text-xs font-bold text-slate-500 block">Final Academic Grade</span>
                  <span className="text-2xl font-black text-emerald-800">
                    GPA {studentResult?.gpa} ({studentResult?.overallGrade})
                  </span>
                  <span className="text-[11px] font-extrabold text-emerald-700 block mt-0.5">
                    {studentResult?.resultStatus}
                  </span>
                </div>
              </div>

              {/* Subject Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 text-slate-600 font-bold uppercase text-[11px]">
                    <tr>
                      <th className="py-3 px-4">Subject / Module</th>
                      <th className="py-3 px-4 text-center">Full Marks</th>
                      <th className="py-3 px-4 text-center">Obtained</th>
                      <th className="py-3 px-4 text-center">Grade</th>
                      <th className="py-3 px-4 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {studentResult?.subjects.map((sub, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          <span className="font-mono text-slate-400 mr-2 text-xs">{sub.code}</span>
                          {sub.name}
                        </td>
                        <td className="py-3.5 px-4 text-center text-slate-600">{sub.fullMarks}</td>
                        <td className="py-3.5 px-4 text-center font-extrabold text-slate-900">{sub.obtainedMarks}</td>
                        <td className="py-3.5 px-4 text-center font-black text-emerald-700">{sub.grade}</td>
                        <td className="py-3.5 px-4 text-center">
                          <span className="text-[10px] font-black bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-md border border-emerald-300">
                            {sub.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-slate-900 text-white font-bold text-xs sm:text-sm">
                    <tr>
                      <td className="py-3.5 px-4">Total Academic Evaluation</td>
                      <td className="py-3.5 px-4 text-center">{studentResult?.totalMarks}</td>
                      <td className="py-3.5 px-4 text-center text-emerald-400 font-black">
                        {studentResult?.obtainedTotal} ({studentResult?.percentage})
                      </td>
                      <td className="py-3.5 px-4 text-center text-emerald-400 font-black">
                        GPA {studentResult?.gpa}
                      </td>
                      <td className="py-3.5 px-4 text-center text-emerald-400 font-black">
                        PASSED
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Security Seal */}
              <div className="pt-4 border-t border-dashed border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-3">
                  <QrCode className="w-10 h-10 text-emerald-700 shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Central Database Authenticated</p>
                    <p className="text-[11px] text-slate-400">Issue Date: {studentResult?.issueDate}</p>
                  </div>
                </div>
                <div className="text-center sm:text-right font-serif italic text-slate-700">
                  <div className="border-b border-slate-400 pb-1 mb-1 font-bold">M. Rahman</div>
                  <span className="text-[10px] font-sans font-bold text-slate-400 not-italic">Controller of Examinations</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: EXAM ROUTINE & CIRCULARS */}
        {activeTab === "exams" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-5">
              <div>
                <h3 className="font-black text-slate-900 text-lg">
                  Final Examination Schedule ({studentResult?.session})
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Admit cards are mandatory for practical lab tests and viva evaluation.
                </p>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-black text-emerald-800 uppercase tracking-wider">
                    Official Trainee Admit Card
                  </span>
                  <p className="font-bold text-slate-900 text-sm">
                    Final Trade Practical & Theory Examination 2026
                  </p>
                  <p className="text-xs text-slate-500">Roll: {studentResult?.rollNo} • Center: {studentResult?.centerName}</p>
                </div>
                <button
                  type="button"
                  onClick={() => alert(`Downloading official admit card for ${studentResult?.studentName}...`)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shrink-0 transition"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Admit Card</span>
                </button>
              </div>

              <div className="divide-y divide-slate-100">
                <div className="py-3 flex items-center justify-between text-xs sm:text-sm">
                  <div>
                    <p className="font-bold text-slate-900">Trade Practical Lab Exam (COA-101 & 102)</p>
                    <p className="text-xs text-slate-400">15 November 2026 • 10:00 AM – 1:00 PM</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">Room 204 (Lab B)</span>
                </div>
                <div className="py-3 flex items-center justify-between text-xs sm:text-sm">
                  <div>
                    <p className="font-bold text-slate-900">Advanced MS Excel & Payroll Lab (COA-103)</p>
                    <p className="text-xs text-slate-400">18 November 2026 • 10:00 AM – 1:00 PM</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">Room 204 (Lab B)</span>
                </div>
                <div className="py-3 flex items-center justify-between text-xs sm:text-sm">
                  <div>
                    <p className="font-bold text-slate-900">External Board Viva-Voce & Project Evaluation</p>
                    <p className="text-xs text-slate-400">22 November 2026 • 11:00 AM onwards</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">Board Room 1</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: DIGITAL TRAINEE ID CARD */}
        {activeTab === "idcard" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Official Digital Trainee ID Card
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Government recognized trainee identity card with security QR authentication.
                </p>
              </div>

              <button
                type="button"
                onClick={handlePrint}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition"
              >
                <Printer className="w-4 h-4 text-emerald-400" />
                <span>Print Student ID Card</span>
              </button>
            </div>

            {/* Printable ID Card */}
            <div className="max-w-md mx-auto bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-700 space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none"></div>

              {/* ID Header */}
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center font-black text-xs text-white">
                    NYD
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-tight text-white leading-tight">
                      National Youth Dev Institute
                    </h4>
                    <span className="text-[9px] text-slate-400 font-mono">Govt. Reg: 04.30.2600</span>
                  </div>
                </div>
                <span className="text-[9px] bg-emerald-500 text-slate-950 px-2 py-0.5 rounded-full font-black uppercase">
                  Trainee
                </span>
              </div>

              {/* ID Body */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-24 rounded-2xl bg-slate-800 border-2 border-emerald-500/40 flex flex-col items-center justify-center text-slate-400 shrink-0 shadow-inner">
                  <User className="w-9 h-9 text-slate-300 mb-1" />
                  <span className="text-[8px] font-bold text-slate-400 uppercase">Photo</span>
                </div>

                <div className="space-y-1 text-xs">
                  <h3 className="font-black text-white text-sm sm:text-base leading-snug">
                    {studentResult?.studentName}
                  </h3>
                  <p className="text-[11px] text-emerald-400 font-bold truncate max-w-[200px]">
                    {studentResult?.tradeName}
                  </p>
                  <p className="text-[10px] text-slate-300 font-mono">
                    ROLL: <strong className="text-white">{studentResult?.rollNo}</strong>
                  </p>
                  <p className="text-[10px] text-slate-300 font-mono">
                    REG: {studentResult?.registrationNo}
                  </p>
                </div>
              </div>

              {/* ID Footer */}
              <div className="pt-3 border-t border-slate-700/80 flex items-center justify-between text-[10px] text-slate-400">
                <div>
                  <p>Center: {studentResult?.centerName}</p>
                  <p className="text-slate-500">Valid: {studentResult?.session}</p>
                </div>
                <QrCode className="w-9 h-9 text-emerald-400" />
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-400 py-6 border-t border-slate-200 no-print">
        National Youth Development Technical Platform • Student Academic Session 2026
      </footer>

    </div>
  );
}
