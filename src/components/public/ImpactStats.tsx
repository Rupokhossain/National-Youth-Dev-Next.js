"use client";

import React from "react";
import { GraduationCap, BookOpen, Building2, TrendingUp } from "lucide-react";

interface StatItem {
  id: number;
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  badge: string;
  badgeColor: string;
  iconBg: string;
  iconColor: string;
}

const stats: StatItem[] = [
  {
    id: 1,
    icon: <GraduationCap className="w-6 h-6" />,
    value: "1,500+",
    label: "Certified Trainees",
    description: "Govt-recognized technical and ICT graduates",
    badge: "Verified Diplomas",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconBg: "bg-emerald-50 border-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    id: 2,
    icon: <BookOpen className="w-6 h-6" />,
    value: "150+",
    label: "Industry Courses",
    description: "Hands-on trades, engineering & digital programs",
    badge: "Practical Syllabus",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    iconBg: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 3,
    icon: <Building2 className="w-6 h-6" />,
    value: "64+",
    label: "Regional Branches",
    description: "Accredited training centers nationwide",
    badge: "Across Bangladesh",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    iconBg: "bg-purple-50 border-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    icon: <TrendingUp className="w-6 h-6" />,
    value: "94.2%",
    label: "Employment Rate",
    description: "Active placement and startup support for youth",
    badge: "Self-Reliance",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    iconBg: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
  },
];

export default function ImpactStats() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 py-12 md:py-16">
      {/* Modern SaaS Card Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg shadow-slate-200/50 border border-slate-200/80 transition-all">
        {/* Generous symmetrical padding on every column so badges never touch divider lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col justify-between py-2 sm:py-0 px-2 sm:px-4 lg:px-8 ${
                idx !== stats.length - 1 ? "lg:border-r border-slate-200/70" : ""
              } group`}
            >
              <div>
                {/* Header: Icon + Badge with comfortable inner gap */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl ${stat.iconBg} ${stat.iconColor} border flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-sm shrink-0`}
                  >
                    {stat.icon}
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${stat.badgeColor} shrink-0`}
                  >
                    {stat.badge}
                  </span>
                </div>

                {/* Counter Metric Number */}
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                  {stat.value}
                </div>

                {/* Metric Label */}
                <div className="text-sm sm:text-base font-bold text-slate-800 mt-2">
                  {stat.label}
                </div>

                {/* Short Subtitle */}
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator Bar */}
              <div className="w-full h-1 bg-slate-100 rounded-full mt-6 overflow-hidden">
                <div
                  className={`h-full ${
                    idx === 0
                      ? "w-4/5 bg-emerald-500"
                      : idx === 1
                      ? "w-3/4 bg-blue-500"
                      : idx === 2
                      ? "w-2/3 bg-purple-500"
                      : "w-11/12 bg-amber-500"
                  } rounded-full transition-all duration-500 group-hover:w-full`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
