// src/app/register/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  UserPlus,
  GraduationCap,
  Lock,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  BookOpen,
  Award,
  Sparkles,
} from "lucide-react";
import { useInstitute } from "@/context/InstituteContext";

export default function RegisterPage() {
  const { addAdmission } = useInstitute();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Student Form State
  const [studentForm, setStudentForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    trade: "Computer Office Applications & Database",
    district: "Dhaka",
    password: "",
    confirmPassword: "",
    agreeTerms: true,
  });

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    addAdmission({
      fullName: studentForm.fullName,
      phone: studentForm.phone,
      email: studentForm.email || `${studentForm.phone}@student.jubounnayon.com`,
      trade: studentForm.trade,
      district: studentForm.district,
    });
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 450);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased flex flex-col justify-between pb-12">
      {/* Top Banner Header */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-12 sm:py-14 border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/70 via-slate-900/90 to-slate-950 z-0"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide">
            <UserPlus className="w-4 h-4 text-emerald-400" />
            <span>National Trainee Enrollment (Session 2026)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Student Registration Portal
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
            Enroll in government subsidized technical trade courses, build high-demand vocational skills, and receive nationally certified credentials.
          </p>
        </div>
      </section>

      {/* Main Registration Container */}
      <main className="max-w-[1120px] mx-auto w-full px-4 sm:px-8 py-10 sm:py-14 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Student Registration Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
            
            {/* Header Badge */}
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <h2 className="text-2xl font-black text-slate-900">
                  New Trainee Registration
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-normal">
                  Create your student profile to access classes, course materials, and certified marksheet.
                </p>
              </div>
            </div>

            {isSuccess ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-7 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                <h3 className="font-extrabold text-slate-900 text-xl">
                  Registration Successful!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Welcome to National Youth Development Institute! Your trainee registration has been recorded. You can now log into your student dashboard with your registered mobile number or email and password.
                </p>
                <div className="pt-3">
                  <Link
                    href="/login?role=student"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-extrabold text-sm hover:bg-slate-800 transition shadow-md"
                  >
                    <span>Proceed to Student Login</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ) : (
              /* Student Registration Form */
              <form onSubmit={handleStudentSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={studentForm.fullName}
                      onChange={(e) => setStudentForm({ ...studentForm, fullName: e.target.value })}
                      placeholder="e.g. Tanvir Hasan"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={studentForm.phone}
                      onChange={(e) => setStudentForm({ ...studentForm, phone: e.target.value })}
                      placeholder="017XX-XXXXXX"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={studentForm.email}
                      onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Preferred District
                    </label>
                    <select
                      value={studentForm.district}
                      onChange={(e) => setStudentForm({ ...studentForm, district: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm transition"
                    >
                      <option value="Dhaka">Dhaka Central</option>
                      <option value="Chattogram">Chattogram</option>
                      <option value="Gazipur">Gazipur</option>
                      <option value="Narayanganj">Narayanganj</option>
                      <option value="Bogura">Bogura</option>
                      <option value="Sylhet">Sylhet</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Khulna">Khulna</option>
                    </select>
                  </div>
                </div>

                {/* Trade of Interest */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Desired Technical Trade Program *
                  </label>
                  <select
                    value={studentForm.trade}
                    onChange={(e) => setStudentForm({ ...studentForm, trade: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm transition"
                  >
                    <option value="Computer Office Applications & Database">Computer Office Applications & Database Management (6 Months)</option>
                    <option value="Professional Graphic Design & Multimedia">Professional Graphic Design & Multimedia (6 Months)</option>
                    <option value="Electrical House Wiring & Motor Winding">Electrical House Wiring & Industrial Motor Installation (6 Months)</option>
                    <option value="Refrigeration & Air Conditioning (HVAC)">Refrigeration & Air Conditioning Servicing (6 Months)</option>
                    <option value="Industrial Sewing & Garments Quality">Industrial Sewing & Garments Quality Control (3 Months)</option>
                    <option value="AutoCAD 2D & 3D Drafting">AutoCAD 2D & 3D Architectural Drafting (3 Months)</option>
                  </select>
                </div>

                {/* Password & Confirm */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Password *
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="Create password"
                      value={studentForm.password}
                      onChange={(e) => setStudentForm({ ...studentForm, password: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="Repeat password"
                      value={studentForm.confirmPassword}
                      onChange={(e) => setStudentForm({ ...studentForm, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm transition"
                    />
                  </div>
                </div>

                {/* Agreement Checkbox */}
                <div className="flex items-center gap-2 pt-1 text-xs text-slate-600">
                  <input
                    type="checkbox"
                    id="termsStudent"
                    checked={studentForm.agreeTerms}
                    onChange={(e) => setStudentForm({ ...studentForm, agreeTerms: e.target.checked })}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <label htmlFor="termsStudent" className="cursor-pointer">
                    I confirm that the information provided is accurate and agree to institutional training protocols.
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 hover:shadow-xl transition-all disabled:opacity-75 cursor-pointer"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>{isSubmitting ? "Submitting Registration..." : "Create Trainee Account"}</span>
                </button>
              </form>
            )}

            {/* Bottom Login Link */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
              <span className="text-slate-500">Already registered with us?</span>
              <Link
                href="/login"
                className="font-bold text-emerald-700 hover:text-emerald-800 underline flex items-center gap-1"
              >
                <span>Sign In to Existing Account</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

          {/* Right Column: Institutional Benefits (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-6 sm:p-10 text-white flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                Trainee Benefits & Certification
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Affiliated with Saikat Computer & Training Jubo Songhoton • Govt. Reg: 04.30.2600. Providing certified pathways for Bangladesh's youth workforce.
              </p>

              {/* Benefit List */}
              <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Nationally & internationally recognized technical trade certificates</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Government youth entrepreneurship & self-employment guidance</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Central online verification portal with digital QR authentication</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>100% practical lab assignments with experienced certified trainers</span>
                </div>
              </div>
            </div>

            {/* Assistance Footer */}
            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">Need help with registration?</p>
              <p>Helpline: +880 1712-345678 (Sat-Thu 9AM - 6PM)</p>
            </div>
          </div>

        </div>
      </main>

      {/* Footer Note */}
      <footer className="text-center text-xs text-slate-400">
        National Youth Development Technical Platform • Empowering 50,000+ Skilled Youth Nationwide
      </footer>
    </div>
  );
}