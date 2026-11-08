"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Laptop, Briefcase, ArrowRight, Award } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      id: 1,
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: "Government-Accredited Curriculum",
      description:
        "Nationally recognized diplomas and certificates valid for civil service, private sector, and overseas jobs.",
    },
    {
      id: 2,
      icon: <Laptop className="w-5 h-5 text-blue-600" />,
      title: "80% Practical Lab Workshops",
      description:
        "Real-world training in modern computer labs, electrical workshops, and industrial engineering suites.",
    },
    {
      id: 3,
      icon: <Briefcase className="w-5 h-5 text-purple-600" />,
      title: "Career Placement & Youth Loan Linkage",
      description:
        "Direct internship opportunities, freelance mentorship, and easy-term youth entrepreneurship loan guidance.",
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Visual: Composite Modern Image with Floating Trust Badge */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl shadow-slate-200/50 bg-slate-900 group">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Youth Skill Development Students"
              className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

            {/* Bottom floating summary banner on image */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 font-black flex items-center justify-center text-sm shadow-sm shrink-0">
                  <Award className="w-5 h-5 text-slate-950" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">National Technical Standards</div>
                  <div className="text-[11px] text-slate-500">Supervised by Senior Certified Instructors</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Pill Accent Badge (Top Right) */}
          <div className="hidden sm:flex absolute -top-4 -right-4 bg-slate-900 text-white rounded-2xl p-4 shadow-xl border border-slate-800 items-center gap-3 z-10">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 font-extrabold flex items-center justify-center text-xs">
              15+
            </div>
            <div>
              <div className="text-xs font-bold text-white">Years of Excellence</div>
              <div className="text-[10px] text-slate-400">Technical Education</div>
            </div>
          </div>
        </div>

        {/* Right Content: Punchy Pillars & Value Proposition (NO boring Lorem Ipsum, NO Read More button) */}
        <div className="lg:col-span-7">
          
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            About National Youth Development
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug sm:leading-tight mb-4">
            Bridging the Gap Between Technical Education & Real-World Careers
          </h2>

          {/* Subtitle / Mission */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
            The National Youth Development Technical Institute is dedicated to transforming ambitious youth into industry-ready professionals. Across 64 districts, we deliver standardized technical diplomas, ICT mastery, and self-employment initiatives.
          </p>

          {/* Feature Highlights Grid */}
          <div className="space-y-4 mb-8">
            {highlights.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-slate-200 hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="p-2.5 rounded-xl bg-white shadow-sm border border-slate-100 shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action: Instead of boring 'Read More', provide actionable course link & trust badges */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Registered Institute • Government Affiliated</span>
            </div>

            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 px-4 py-2.5 rounded-xl transition"
            >
              <span>Explore All Trade Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
