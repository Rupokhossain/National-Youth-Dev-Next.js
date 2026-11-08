"use client";

import React from "react";
import {
  GraduationCap,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-950 text-slate-300 relative overflow-hidden pt-12 sm:pt-16 lg:pt-20 border-t border-slate-800">
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Main 4-Column Directory Grid with Enhanced, Highly Readable Fonts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 sm:pb-16 border-b border-slate-800/80">
          
          {/* Column 1 (4.5 Cols): Brand Identity & Mission */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Logo Emblem & Platform Title */}
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-900/40 shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight leading-tight block">
                  National Youth Development
                </span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-wider block mt-0.5">
                  Technical Training Platform
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Official technical and vocational education platform operated by <strong className="text-white font-semibold">Saikat Computer and Training Jubo Songhoton</strong>. Dedicated to empowering the youth of Bangladesh with authentic practical skills across all 64 districts.
            </p>

            {/* Govt Affiliation Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Govt. Reg. Affiliated Technical Directorate</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Official Channels
              </span>
              <div className="flex items-center gap-2.5">
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-400 border border-slate-800 flex items-center justify-center transition shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-red-600 hover:text-white text-slate-400 border border-slate-800 flex items-center justify-center transition shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-sky-600 hover:text-white text-slate-400 border border-slate-800 flex items-center justify-center transition shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="#"
                  aria-label="X (Twitter)"
                  className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 hover:text-white text-slate-400 border border-slate-800 flex items-center justify-center transition shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Column 2 (2.5 Cols): Popular Technical Courses */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-wider border-b border-slate-800 pb-2.5">
              Trades
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li>
                <a href="#featured-courses" className="text-slate-300 hover:text-emerald-400 transition font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>Computer Office</span>
                </a>
              </li>
              <li>
                <a href="#featured-courses" className="text-slate-300 hover:text-emerald-400 transition font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>Graphic Design</span>
                </a>
              </li>
              <li>
                <a href="#featured-courses" className="text-slate-300 hover:text-emerald-400 transition font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>Electrical & Solar</span>
                </a>
              </li>
              <li>
                <a href="#featured-courses" className="text-slate-300 hover:text-emerald-400 transition font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>RAC Servicing</span>
                </a>
              </li>
              <li>
                <a href="#featured-courses" className="text-slate-300 hover:text-emerald-400 transition font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>Dress Making</span>
                </a>
              </li>
              <li>
                <a href="#featured-courses" className="text-slate-300 hover:text-emerald-400 transition font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>Dairy Farming</span>
                </a>
              </li>
              <li>
                <a href="#featured-courses" className="text-slate-300 hover:text-emerald-400 transition font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>Digital Marketing</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 (2 Cols): Student Portals & Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-wider border-b border-slate-800 pb-2.5">
              Portals
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li>
                <a href="#featured-courses" className="text-slate-300 hover:text-emerald-400 transition font-medium">
                  Online Admission
                </a>
              </li>
              <li>
                <a href="#notice-board" className="text-slate-300 hover:text-emerald-400 transition font-medium">
                  Notice Board
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-emerald-400 transition font-medium">
                  4IR Practical Labs
                </a>
              </li>
              <li>
                <a href="#leadership-vision" className="text-slate-300 hover:text-emerald-400 transition font-medium">
                  Digital World Roadmap
                </a>
              </li>
              <li>
                <a href="#chairman-speech" className="text-slate-300 hover:text-emerald-400 transition font-medium">
                  Chairman&apos;s Message
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-slate-300 hover:text-emerald-400 transition font-medium">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#instructors" className="text-slate-300 hover:text-emerald-400 transition font-medium">
                  Expert Instructors
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 (3 Cols): Campus Helpdesk & Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-wider border-b border-slate-800 pb-2.5">
              Helpdesk & Campus
            </h4>

            <div className="space-y-3.5 text-sm sm:text-base">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  Saikat Bhaban, Central Technical Directorate, Dhaka, Bangladesh
                </span>
              </div>

              {/* Hotlines */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:+8801700000000" className="text-white hover:text-emerald-400 block font-bold text-base sm:text-lg">
                    +880 1700-000000
                  </a>
                  <a href="tel:+8801800000000" className="text-slate-300 hover:text-emerald-400 block text-xs sm:text-sm">
                    +880 1800-000000 (Admissions)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="mailto:info@jubounnayon.com" className="text-white hover:text-blue-400 block font-semibold text-sm sm:text-base">
                    info@jubounnayon.com
                  </a>
                  <a href="mailto:admissions@jubounnayon.com" className="text-slate-400 hover:text-blue-400 block text-xs">
                    admissions@jubounnayon.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug text-xs sm:text-sm">
                  Sat – Thu: 8:30 AM – 6:00 PM <br />
                  <span className="text-slate-500 text-xs">(Friday Closed)</span>
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="py-7 sm:py-9 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          
          <div className="text-center md:text-left space-y-1">
            <p className="text-slate-300 font-semibold text-sm">
              © 2026 National Youth Development Technical Platform. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs">
              Operated with dedication by Saikat Computer and Training Jubo Songhoton.
            </p>
          </div>

          {/* Links & Scroll to Top */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300 text-xs sm:text-sm font-medium">
            <a href="#" className="hover:text-emerald-400 transition">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-emerald-400 transition">Terms of Admission</a>
            <span>•</span>
            <a href="#" className="hover:text-emerald-400 transition">Verification Policy</a>
            <span>•</span>
            
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 transition shadow-xs cursor-pointer ml-2 text-xs sm:text-sm font-bold active:scale-95"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
}
