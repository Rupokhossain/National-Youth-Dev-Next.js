// src/app/register/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  UserPlus,
  GraduationCap,
  Building2,
  Lock,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  BookOpen,
} from "lucide-react";

export default function RegisterPage() {
  const [accountType, setAccountType] = useState<"student" | "branch">("student");
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

  // Branch Form State
  const [branchForm, setBranchForm] = useState({
    centerName: "",
    directorName: "",
    phone: "",
    email: "",
    district: "Dhaka",
    labCapacity: "20+ Workstations",
    password: "",
    confirmPassword: "",
    agreeTerms: true,
  });

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleBranchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
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
            <span>National Trainee Enrollment & Branch Licensing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Create Your Official Account
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
            Register as a new trainee for subsidized technical training or submit an institutional application to affiliate your training center.
          </p>
        </div>
      </section>

      {/* Main Registration Container */}
      <main className="max-w-[1120px] mx-auto w-full px-4 sm:px-8 py-10 sm:py-14 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
            
            {/* Account Type Tabs */}
            <div className="grid grid-cols-2 bg-slate-100 p-1.5 rounded-2xl gap-1.5 border border-slate-200">
              <button
                type="button"
                onClick={() => {
                  setAccountType("student");
                  setIsSuccess(false);
                }}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition ${
                  accountType === "student"
                    ? "bg-white text-emerald-700 shadow-sm border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                <span>New Trainee Enrollment</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setAccountType("branch");
                  setIsSuccess(false);
                }}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition ${
                  accountType === "branch"
                    ? "bg-white text-emerald-700 shadow-sm border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Building2 className="w-4 h-4 text-emerald-600" />
                <span>Branch Center Affiliation</span>
              </button>
            </div>

            {/* Title */}
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-slate-900">
                {accountType === "student"
                  ? "Trainee Registration (Session 2026)"
                  : "Branch Center Affiliation Request"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-normal">
                {accountType === "student"
                  ? "Enroll in certified vocational courses across 64 district technical hubs."
                  : "Apply for official accreditation under Saikat Computer & Training Jubo Songhoton."}
              </p>
            </div>

            {isSuccess ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-7 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                <h3 className="font-extrabold text-slate-900 text-xl">
                  Registration Received Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {accountType === "student"
                    ? "Your trainee profile has been initiated. You can now log in using your registered mobile number or email."
                    : "Your branch center licensing request has been queued for quality inspection. Our Directorate will contact you within 48 hours."}
                </p>
                <div className="pt-3">
                  <Link
                    href="/login"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-extrabold text-sm hover:bg-slate-800 transition shadow-md"
                  >
                    <span>Proceed to Sign In</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ) : accountType === "student" ? (
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
                  className="w-full mt-2 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 hover:shadow-xl transition-all disabled:opacity-75"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>{isSubmitting ? "Submitting Registration..." : "Create Trainee Account"}</span>
                </button>
              </form>
            ) : (
              /* Branch Registration Form */
              <form onSubmit={handleBranchSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Institute / Center Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={branchForm.centerName}
                      onChange={(e) => setBranchForm({ ...branchForm, centerName: e.target.value })}
                      placeholder="e.g. Apex IT & Technical Center"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Director / Principal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={branchForm.directorName}
                      onChange={(e) => setBranchForm({ ...branchForm, directorName: e.target.value })}
                      placeholder="e.g. Engr. Rafiqul Islam"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Official Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={branchForm.phone}
                      onChange={(e) => setBranchForm({ ...branchForm, phone: e.target.value })}
                      placeholder="018XX-XXXXXX"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Center District *
                    </label>
                    <select
                      value={branchForm.district}
                      onChange={(e) => setBranchForm({ ...branchForm, district: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm transition"
                    >
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chattogram">Chattogram</option>
                      <option value="Gazipur">Gazipur</option>
                      <option value="Bogura">Bogura</option>
                      <option value="Sylhet">Sylhet</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Khulna">Khulna</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Existing Practical Lab Facilities *
                  </label>
                  <select
                    value={branchForm.labCapacity}
                    onChange={(e) => setBranchForm({ ...branchForm, labCapacity: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm transition"
                  >
                    <option value="20+ Workstations">Computer Lab (20+ Dedicated Workstations)</option>
                    <option value="Electrical Workshop">Electrical & Motor Winding Lab Workshop</option>
                    <option value="Apparel Workshop">Industrial Sewing & Tailoring Lab</option>
                    <option value="Multi-disciplinary">Multi-disciplinary Technical Trade Facilities</option>
                  </select>
                </div>

                {/* Password & Confirm */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Administrative Password *
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="Create security key"
                      value={branchForm.password}
                      onChange={(e) => setBranchForm({ ...branchForm, password: e.target.value })}
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
                      placeholder="Repeat security key"
                      value={branchForm.confirmPassword}
                      onChange={(e) => setBranchForm({ ...branchForm, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm transition"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 hover:shadow-xl transition-all disabled:opacity-75"
                >
                  <Building2 className="w-4 h-4" />
                  <span>{isSubmitting ? "Submitting Application..." : "Submit Branch Affiliation Request"}</span>
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
                Why Join Our National Network?
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
                  <span>Direct eligibility for government youth entrepreneurship loan schemes</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Central online verification portal with digital QR authentication</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Job placement cell with corporate partnerships across 64 districts</span>
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
