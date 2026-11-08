"use client";

import React from "react";
import { Quote, Sparkles, Award, ShieldCheck, Laptop, Briefcase, GraduationCap } from "lucide-react";

export default function ChairmanSpeech() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 py-10 sm:py-14 md:py-16">
      
      {/* Section Header with Executive Centered Title */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs sm:text-sm font-bold shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Executive Leadership & Academic Vision</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Chairman&apos;s Speech
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium max-w-xl mx-auto">
          Message from the Chairman & Academic Director of Saikat Computer and Training Jubo Songhoton
        </p>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <div className="w-12 h-1 bg-emerald-600 rounded-full"></div>
          <div className="w-3 h-1 bg-amber-500 rounded-full"></div>
          <div className="w-12 h-1 bg-emerald-600 rounded-full"></div>
        </div>
      </div>

      {/* Main Chairman Speech Container */}
      <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl overflow-hidden p-6 sm:p-10 md:p-12 lg:p-14">
        
        {/* Subtle Ambient Glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (7 Cols on LG): Speech Quotation & Core Commitments */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            
            {/* Quotation Box */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <Quote className="w-10 h-10 text-amber-400/25 absolute -top-4 -left-3 rotate-180 pointer-events-none" />
              
              <div className="space-y-4">
                <p className="text-base sm:text-lg md:text-xl text-slate-100 leading-relaxed font-normal italic">
                  &ldquo;Our paramount mission is to empower the young generation of Bangladesh with practical, industry-driven technical skills. In a rapidly transforming world, theoretical knowledge alone is never enough—every young student must master authentic hands-on competence in digital computing, modern engineering trades, and digital entrepreneurship.&rdquo;
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  &ldquo;Through government subsidized training programs, state-of-the-art laboratory facilities, and dedicated mentors, Saikat Computer and Training Jubo Songhoton remains relentlessly devoted to building a self-reliant, skilled, and employed youth workforce for our beloved nation.&rdquo;
                </p>
              </div>

              {/* Chairman Sign-off & Title Block */}
              <div className="pt-5 mt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl font-black text-white tracking-tight">
                      Shariyat Ullah Saikat
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                      Chairman
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-amber-400 font-semibold block mt-0.5">
                    Saikat Computer and Training Jubo Songhoton
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    National Youth Development Technical Training Directorate
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-2">
                  <div className="text-right">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Accreditation
                    </span>
                    <span className="text-xs font-semibold text-emerald-400">
                      Govt. Reg. Affiliated
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Award className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              </div>

            </div>

            {/* 3 Strategic Pillars / Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-colors">
                <div className="flex items-center gap-2.5 text-amber-400 mb-1.5">
                  <Laptop className="w-5 h-5 shrink-0" />
                  <span className="text-base font-black text-white">100% Practical</span>
                </div>
                <span className="text-xs text-slate-400 leading-snug block">
                  Workstation-based hands-on lab projects for real mastery
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-2.5 text-emerald-400 mb-1.5">
                  <Briefcase className="w-5 h-5 shrink-0" />
                  <span className="text-base font-black text-white">Career Ready</span>
                </div>
                <span className="text-xs text-slate-400 leading-snug block">
                  Job placement support, freelancing, and self-employment
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2.5 text-blue-400 mb-1.5">
                  <GraduationCap className="w-5 h-5 shrink-0" />
                  <span className="text-base font-black text-white">Subsidized</span>
                </div>
                <span className="text-xs text-slate-400 leading-snug block">
                  Affordable government fee structure for every youth
                </span>
              </div>
            </div>

          </div>

          {/* Right Column (5 Cols on LG): 100% Full-View Executive Portrait Frame */}
          <div className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2">
            <div className="w-full max-w-sm sm:max-w-md rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/90 group">
              
              {/* Natural Vertical 4:5 Aspect Ratio (Exact Match to 480x600 Portrait) */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-950">
                <img
                  src="/images/Efra Khan.jpg"
                  alt="Shariyat Ullah Saikat - Chairman"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Top Badge */}
                <div className="absolute top-3 right-3 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black shadow-md backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>Founder & Chairman</span>
                  </span>
                </div>

                {/* Subtle Bottom Vignette Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none"></div>
              </div>

              {/* Dedicated Nameplate Below the Photo (Stacked & Clean Layout) */}
              <div className="p-4 sm:p-5 bg-slate-900/95 border-t border-white/10 text-center space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
                  Shariyat Ullah Saikat
                </h3>
                
                <div className="flex items-center justify-center">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-bold uppercase tracking-wider">
                    Chairman
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">
                  Saikat Computer and Training Jubo Songhoton
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
