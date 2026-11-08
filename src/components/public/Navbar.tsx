// src/components/public/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogIn, UserPlus, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Exam Result", href: "/results", hasBadge: true },
    { label: "Gallery", href: "/gallery" },
    { label: "Resources", href: "/resources" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="w-full bg-white border-b border-slate-200/80 sticky top-0 z-50">
      {/* 1440px Extended Width Container */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 py-4 flex items-center justify-between">
        
        {/* Poppins Bold Text Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white font-extrabold text-base shadow-sm group-hover:scale-105 transition-transform">
            NYD
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-bold tracking-tight text-slate-900 leading-tight">
              National Youth <span className="text-emerald-600">Dev</span>
            </span>
            <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase mt-0.5">
              Technical Institute
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-sm md:text-[15px] font-medium text-slate-600">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-2 rounded-xl transition flex items-center gap-2 ${
                  active
                    ? "text-emerald-700 bg-emerald-50/90 font-bold"
                    : "hover:text-slate-900 hover:bg-slate-50 font-medium"
                }`}
              >
                <span>{link.label}</span>
                {link.hasBadge && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Login & Register Buttons (Direct Links, No Dropdown) */}
        <div className="hidden sm:flex items-center gap-2.5">
          <Link
            href="/login"
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold px-4 py-2.5 rounded-xl transition"
          >
            <LogIn className="w-4 h-4 text-slate-600" />
            <span>Login</span>
          </Link>
          <Link
            href="/register"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-4 py-2.5 rounded-xl transition shadow-sm"
          >
            <UserPlus className="w-4 h-4" />
            <span>Register</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden px-6 pb-4 pt-2 border-t border-slate-100 space-y-1.5 bg-white">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm transition ${
                  active
                    ? "text-emerald-700 bg-emerald-50 font-bold"
                    : "font-medium text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label}</span>
                  {link.hasBadge && (
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                      Live
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
          <div className="pt-2 grid grid-cols-2 gap-2">
            <Link
              href="/login"
              onClick={() => setIsMobileOpen(false)}
              className="w-full bg-slate-100 text-slate-800 font-bold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>
            <Link
              href="/register"
              onClick={() => setIsMobileOpen(false)}
              className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>Register</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
