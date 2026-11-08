// src/app/login/page.tsx
"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  LogIn,
  GraduationCap,
  Building2,
  Lock,
  User,
  ShieldCheck,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  KeyRound,
  FileText,
} from "lucide-react";

function LoginForm() {
  const searchParams = useSearchParams();
  const initialRole = searchParams.get("role") === "branch" ? "branch" : "student";
  const [role, setRole] = useState<"student" | "branch">(initialRole);

  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState(role === "student" ? "NYD-2026-1042" : "C-0104");
  const [password, setPassword] = useState("••••••••");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRoleSwitch = (newRole: "student" | "branch") => {
    setRole(newRole);
    setIdentifier(newRole === "student" ? "NYD-2026-1042" : "C-0104");
    setIsSuccess(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased flex flex-col justify-between">
      {/* Top Banner Header */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-12 sm:py-14 border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/70 via-slate-900/90 to-slate-950 z-0"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official Identity & Access Gateway</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Portal Access & Authentication
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
            Sign in to your authorized student dashboard or regional branch center management system.
          </p>
        </div>
      </section>

      {/* Main Authentication Container */}
      <main className="max-w-[1080px] mx-auto w-full px-4 sm:px-8 py-10 sm:py-14 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
            
            {/* Role Switcher Tabs */}
            <div className="grid grid-cols-2 bg-slate-100 p-1.5 rounded-2xl gap-1.5 border border-slate-200">
              <button
                type="button"
                onClick={() => handleRoleSwitch("student")}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition ${
                  role === "student"
                    ? "bg-white text-emerald-700 shadow-sm border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                <span>Student / Trainee</span>
              </button>

              <button
                type="button"
                onClick={() => handleRoleSwitch("branch")}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition ${
                  role === "branch"
                    ? "bg-white text-emerald-700 shadow-sm border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Building2 className="w-4 h-4 text-emerald-600" />
                <span>Branch Institute</span>
              </button>
            </div>

            {/* Login Box Title */}
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-slate-900">
                {role === "student" ? "Trainee Portal Login" : "Branch Center Management"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-normal">
                {role === "student"
                  ? "Enter your Roll, Registration Number or email to access your admit card, syllabus, and results."
                  : "Enter your assigned Branch Center Code and administrative secret key."}
              </p>
            </div>

            {isSuccess ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-extrabold text-slate-900 text-lg">
                  Authenticated Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Redirecting to your authorized dashboard session for{" "}
                  <strong className="text-emerald-800">{identifier}</strong>...
                </p>
                <div className="pt-2">
                  <Link
                    href={role === "student" ? "/results" : "/resources"}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition"
                  >
                    <span>Proceed to Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                {/* Identifier Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                    {role === "student"
                      ? "Student Roll / Registration No or Email *"
                      : "Branch Center Code (e.g. C-0104) *"}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder={
                        role === "student"
                          ? "e.g., NYD-2026-1042 or name@example.com"
                          : "e.g., C-0104"
                      }
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm sm:text-base transition"
                    />
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                      {role === "student" ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Building2 className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                      Password / Security Key *
                    </label>
                    <a
                      href="#helpdesk"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("For password reset, please contact your district branch center with your admit card or student ID.");
                      }}
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your secret password"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm sm:text-base transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/25 hover:shadow-xl transition-all disabled:opacity-75"
                >
                  <LogIn className="w-4 h-4" />
                  <span>
                    {isLoading
                      ? "Verifying Credentials..."
                      : role === "student"
                      ? "Sign In to Trainee Account"
                      : "Sign In as Branch Authority"}
                  </span>
                </button>
              </form>
            )}

            {/* Bottom Register Prompt */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
              <span className="text-slate-500">Don't have an account yet?</span>
              <Link
                href="/register"
                className="font-bold text-emerald-700 hover:text-emerald-800 underline flex items-center gap-1"
              >
                <span>Register as New Trainee or Branch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

          {/* Right Column: Portal Info & Benefits (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-6 sm:p-10 text-white flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                Government Affiliated Digital Services
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                National Youth Development Technical Platform connects trainees and branch institutions to official verification records.
              </p>

              {/* Feature Points */}
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Download authenticated digital certificates & admit cards</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Real-time exam marksheet transcript tracking</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Batch scheduling, attendance & practical workstation access</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct job placement cell & CV assistance</span>
                </div>
              </div>
            </div>

            {/* Help & Support Footer */}
            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">Need authentication assistance?</p>
              <p>Helpline: +880 1712-345678 (9 AM - 6 PM)</p>
            </div>
          </div>

        </div>
      </main>

      {/* Subtle bottom note */}
      <footer className="text-center text-xs text-slate-400 pb-6">
        Protected by National Youth Technical Platform Security Protocols • Govt. Reg: 04.30.2600
      </footer>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
