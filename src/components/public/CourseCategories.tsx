"use client";

import React from "react";
import Link from "next/link";
import {
  Laptop,
  Zap,
  Wrench,
  Fan,
  Car,
  Scissors,
  Sprout,
  Hotel,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface Category {
  id: number;
  slug: string;
  title: string;
  subTrades: string;
  coursesCount: number;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  badgeColor: string;
}

const categories: Category[] = [
  {
    id: 1,
    slug: "ict-digital",
    title: "ICT & Digital Engineering",
    subTrades: "Computer Office App, Graphics, Web Dev, Freelancing",
    coursesCount: 24,
    icon: <Laptop className="w-6 h-6" />,
    iconBg: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: 2,
    slug: "electrical-power",
    title: "Electrical & Industrial Power",
    subTrades: "House Wiring, Substation, Motor Automation, Solar Tech",
    coursesCount: 18,
    icon: <Zap className="w-6 h-6" />,
    iconBg: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    id: 3,
    slug: "welding-fabrication",
    title: "Mechanical & Gas Welding",
    subTrades: "TIG/MIG Welding, Machinist, Metal Fabrication, Lathe",
    coursesCount: 12,
    icon: <Wrench className="w-6 h-6" />,
    iconBg: "bg-orange-50 border-orange-100",
    iconColor: "text-orange-600",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    id: 4,
    slug: "refrigeration-hvac",
    title: "Refrigeration & AC (HVAC)",
    subTrades: "Split AC Servicing, Industrial Chiller, Fridge Repair",
    coursesCount: 10,
    icon: <Fan className="w-6 h-6" />,
    iconBg: "bg-cyan-50 border-cyan-100",
    iconColor: "text-cyan-600",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    id: 5,
    slug: "automobile-mechanics",
    title: "Automobile & Driving Tech",
    subTrades: "Engine Diagnostics, Commercial Driving, EV Maintenance",
    coursesCount: 8,
    icon: <Car className="w-6 h-6" />,
    iconBg: "bg-rose-50 border-rose-100",
    iconColor: "text-rose-600",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    id: 6,
    slug: "garments-apparel",
    title: "Garments & Fashion Apparel",
    subTrades: "Industrial Sewing, Pattern Making, Quality Inspection",
    coursesCount: 14,
    icon: <Scissors className="w-6 h-6" />,
    iconBg: "bg-purple-50 border-purple-100",
    iconColor: "text-purple-600",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    id: 7,
    slug: "agriculture-livestock",
    title: "Modern Agriculture & Dairy",
    subTrades: "Commercial Dairy, Poultry, Bio-Farming, Fishery",
    coursesCount: 16,
    icon: <Sprout className="w-6 h-6" />,
    iconBg: "bg-emerald-50 border-emerald-100",
    iconColor: "text-emerald-600",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    id: 8,
    slug: "hospitality-culinary",
    title: "Hospitality & Culinary Arts",
    subTrades: "Food Preparation, Front-Office, Tourism Management",
    coursesCount: 8,
    icon: <Hotel className="w-6 h-6" />,
    iconBg: "bg-teal-50 border-teal-100",
    iconColor: "text-teal-600",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
  },
];

export default function CourseCategories() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 py-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Browse By Trade Disciplines</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Explore Diverse Technical & Vocational Sectors
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-2 max-w-2xl">
            Choose from government-standard training programs curated for immediate employment, enterprise incubation, and technical mastery.
          </p>
        </div>

        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700 bg-white border border-slate-200 hover:border-emerald-300 px-5 py-2.5 rounded-xl transition shadow-sm shrink-0"
        >
          <span>View All Programs</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Categories Grid (4 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/courses?category=${cat.slug}`}
            className="group bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Card Header: Icon + Arrow */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-2xl ${cat.iconBg} ${cat.iconColor} border flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-sm`}
                >
                  {cat.icon}
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-emerald-50 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                {cat.title}
              </h3>

              {/* Sub-Trades List */}
              <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                {cat.subTrades}
              </p>
            </div>

            {/* Bottom Row: Course Count Badge */}
            <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
              <span
                className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${cat.badgeColor}`}
              >
                {cat.coursesCount} Programs
              </span>
              <span className="text-xs font-semibold text-slate-400 group-hover:text-emerald-600 transition-colors">
                Explore Trade &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
