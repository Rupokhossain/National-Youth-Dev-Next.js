"use client";

import React from "react";
import { Quote, Sparkles, Award, CheckCircle2, Calendar, MapPin, Cpu, Users } from "lucide-react";

export default function LeadershipVision() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 py-12">
      
      {/* Section Header with Executive Centered Title */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs sm:text-sm font-bold shadow-sm">
          <Award className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>National Digital & ICT Leadership Vision</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Thank you Prime Minister
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600 font-medium">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Wednesday, 06 December, 2017</span>
          </span>
          <span className="hidden sm:inline text-slate-400">•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
            <span>Digital World-2017 Inauguration Ceremony, BICC, Dhaka</span>
          </span>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <div className="w-12 h-1 bg-emerald-600 rounded-full"></div>
          <div className="w-3 h-1 bg-amber-500 rounded-full"></div>
          <div className="w-12 h-1 bg-emerald-600 rounded-full"></div>
        </div>
      </div>

      {/* Main Leadership Vision Feature Container */}
      <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl overflow-hidden p-6 sm:p-10 md:p-12 lg:p-14">
        
        {/* Subtle Ambient Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (5 Cols): Clean, 100% Uncut Executive Portrait Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm sm:max-w-md rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/90 group">
              
              {/* Full, Uncropped 5:3 Natural Photo Frame (Zero Image Cutoff) */}
              <div className="relative w-full aspect-[5/3] overflow-hidden bg-slate-950">
                <img
                  src="/images/prime-minister.jpg"
                  alt="Tarique Rahman - Prime Minister"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Top Badge */}
                <div className="absolute top-3 left-3 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-black shadow-md backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>Visionary Address</span>
                  </span>
                </div>
              </div>

              {/* Dedicated Nameplate Below the Photo (Stacked & Clean Layout) */}
              <div className="p-4 sm:p-5 bg-slate-900/95 border-t border-white/10 text-center space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
                  Tarique Rahman
                </h3>
                
                <div className="flex items-center justify-center">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 text-xs font-bold uppercase tracking-wider">
                    Prime Minister
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">
                  People&apos;s Republic of Bangladesh
                </p>
              </div>

            </div>
          </div>

          {/* Right Column (7 Cols): Modern Vision & Quotation Showcase */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quotation Box */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <Quote className="w-10 h-10 text-emerald-400/25 absolute -top-4 -left-3 rotate-180 pointer-events-none" />
              
              <p className="text-base sm:text-lg md:text-xl text-slate-100 leading-relaxed font-normal italic">
                &ldquo;Since 2011, we have compulsory ICT Education at the Secondary level. As well as setting up Computer Labs and Digital Classrooms in Educational Institutions, digital converting education materials and textbooks is being done. The country&apos;s training program is being strengthened. For this reason about 50 thousand boys and girls are being trained by the Department of Information and Communication Technology. Robotics, Big data, Internet of Things, Data Analytics Labs is being developed in the Universities.&rdquo;
              </p>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-base font-bold text-white block">Tarique Rahman</span>
                  <span className="text-xs text-emerald-400 font-medium">Prime Minister, Government of the People&apos;s Republic of Bangladesh</span>
                </div>
                <div className="hidden sm:block">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    BICC Dhaka Address
                  </span>
                </div>
              </div>
            </div>

            {/* 3 Key National Milestone Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-2.5 text-emerald-400 mb-1.5">
                  <Users className="w-5 h-5 shrink-0" />
                  <span className="text-lg font-black text-white">50,000+</span>
                </div>
                <span className="text-xs text-slate-400 leading-snug block">
                  Youth Trained Across Digital & ICT Trades
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2.5 text-blue-400 mb-1.5">
                  <Cpu className="w-5 h-5 shrink-0" />
                  <span className="text-lg font-black text-white">4IR Labs</span>
                </div>
                <span className="text-xs text-slate-400 leading-snug block">
                  Robotics, IoT & Data Analytics Facilities
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-colors">
                <div className="flex items-center gap-2.5 text-amber-400 mb-1.5">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-lg font-black text-white">Secondary Level</span>
                </div>
                <span className="text-xs text-slate-400 leading-snug block">
                  Compulsory Digital Education & Classrooms
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
