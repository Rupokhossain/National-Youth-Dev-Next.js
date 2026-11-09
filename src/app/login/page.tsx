// src/app/login/page.tsx
"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  LogIn,
  GraduationCap,
  Shield,
  ShieldCheck,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  KeyRound,
  Mail,
  Zap,
} from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialRole = searchParams.get("role") === "admin" ? "admin" : "student";
  const [role, setRole] = useState<"student" | "admin">(initialRole);

  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState(role === "student" ? "NYD-2026-1042" : "admin@jubounnayon.com");
  const [password, setPassword] = useState("admin123");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRoleSwitch = (newRole: "student" | "admin") => {
    setRole(newRole);
    setIdentifier(newRole === "student" ? "NYD-2026-1042" : "admin@jubounnayon.com");
    setPassword(newRole === "student" ? "student123" : "admin123");
    setIsSuccess(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      // Auto redirect to appropriate dashboard after short delay
      setTimeout(() => {
        if (role === "admin") {
          router.push("/admin");
        } else {
          router.push("/student");
        }
      }, 700);
    }, 500);
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
            <span>National Platform Authentication Gateway</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Portal Access & Login
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
            Sign in to access your personalized Student Learning Dashboard or Central Directorate Admin Control Center.
          </p>
        </div>
      </section>

      {/* Main Authentication Container */}
      <main className="max-w-[1080px] mx-auto w-full px-4 sm:px-8 py-10 sm:py-14 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
            
            {/* Role Switcher Tabs (2 Tabs: Student vs Admin) */}
            <div className="grid grid-cols-2 bg-slate-100 p-1.5 rounded-2xl gap-1.5 border border-slate-200">
              <button
                type="button"
                onClick={() => handleRoleSwitch("student")}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer ${
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
                onClick={() => handleRoleSwitch("admin")}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer ${
                  role === "admin"
                    ? "bg-white text-emerald-700 shadow-sm border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Central Admin</span>
              </button>
            </div>

            {/* Login Box Title */}
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-slate-900">
                {role === "student" ? "Trainee Portal Login" : "Central Admin Directorate"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-normal">
                {role === "student"
                  ? "Enter your Roll, Registration Number or email to access your enrolled courses, syllabus, and marksheet."
                  : "Enter your official administrative email or ID and security password to manage institute operations."}
              </p>
            </div>

            {/* Quick Demo Credentials Autofill Banner */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span><strong>Demo:</strong> {role === "student" ? "NYD-2026-1042" : "admin@jubounnayon.com"}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (role === "student") {
                    setIdentifier("NYD-2026-1042");
                    setPassword("student123");
                  } else {
                    setIdentifier("admin@jubounnayon.com");
                    setPassword("admin123");
                  }
                }}
                className="text-emerald-700 font-bold hover:underline"
              >
                Autofill Credentials
              </button>
            </div>

            {isSuccess ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-extrabold text-slate-900 text-lg">
                  Authenticated Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Redirecting to your authorized {role === "admin" ? "Admin Control Panel" : "Student Dashboard"} for{" "}
                  <strong className="text-emerald-800">{identifier}</strong>...
                </p>
                <div className="pt-2">
                  <Link
                    href={role === "admin" ? "/admin" : "/student"}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition"
                  >
                    <span>Proceed Now</span>
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
                      ? "Student Roll / Reg No or Email *"
                      : "Admin Email or Official ID *"}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder={
                        role === "student"
                          ? "e.g., NYD-2026-1042 or student@example.com"
                          : "e.g., admin@jubounnayon.com"
                      }
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm sm:text-base transition"
                    />
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                      {role === "student" ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Mail className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                      Password *
                    </label>
                    <a
                      href="#helpdesk"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("For password reset, please contact your central campus helpdesk with your student ID or admin authority token.");
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
                      placeholder="Enter your security password"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm sm:text-base transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/25 hover:shadow-xl transition-all disabled:opacity-75 cursor-pointer"
                >
                  <LogIn className="w-4 h-4" />
                  <span>
                    {isLoading
                      ? "Verifying Credentials..."
                      : role === "student"
                      ? "Sign In to Student Dashboard"
                      : "Sign In as Central Admin"}
                  </span>
                </button>
              </form>
            )}

            {/* Bottom Register Prompt */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
              <span className="text-slate-500">New trainee looking to enroll?</span>
              <Link
                href="/register"
                className="font-bold text-emerald-700 hover:text-emerald-800 underline flex items-center gap-1"
              >
                <span>Create Student Account</span>
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
                National Youth Development Portal
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Connecting students, vocational courses, and certified academic records under Saikat Computer & Training Jubo Songhoton.
              </p>

              {/* Feature Points */}
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Interactive student dashboard with enrolled trade modules</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Central admin panel for 100% dynamic website control</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Authentic digital marksheet and certificate generation</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct download of exam routines, notices, and toolkits</span>
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