// src/app/contact/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  MessageSquare,
  PhoneCall,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    district: "Dhaka",
    inquiryType: "Admission & Scholarship",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        district: "Dhaka",
        inquiryType: "Admission & Scholarship",
        message: "",
      });
    }, 600);
  };

  const divisionalHubs = [
    {
      division: "Dhaka Central Division",
      center: "Dhaka Central Technical Hub (#C-0104)",
      address: "Mirpur-10 Main Circle, Dhaka - 1216",
      phone: "+880 1712-345678",
      email: "dhaka@jubounnayon.com",
    },
    {
      division: "Chattogram Division",
      center: "Chattogram Youth Technical Center (#C-0208)",
      address: "Agrabad Commercial Area, Chattogram",
      phone: "+880 1819-456789",
      email: "ctg@jubounnayon.com",
    },
    {
      division: "Rajshahi Division",
      center: "Bogura Regional Vocational Hub (#C-0518)",
      address: "Sherpur Road, Satmatha, Bogura",
      phone: "+880 1714-890123",
      email: "bogura@jubounnayon.com",
    },
    {
      division: "Sylhet Division",
      center: "Sylhet Technical Training Center (#C-0604)",
      address: "Subidbazar, Sylhet Sadar, Sylhet",
      phone: "+880 1611-234567",
      email: "sylhet@jubounnayon.com",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased pb-28">
      {/* Institutional Hero Banner */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-14 sm:py-16 border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/70 via-slate-900/90 to-slate-950 z-0"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-14 text-center space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold tracking-wide">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>Central Secretariat & 64 District Campus Network</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Connect With Our Directorate & <br className="hidden sm:inline" />
            <span className="text-emerald-400">Technical Helpdesks</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Reach out for vocational course admissions, transcript authentication, branch center affiliations, or schedule a hands-on campus lab visit.
          </p>
        </div>
      </section>

      {/* Main 1240px Container (Cleanly placed below Hero, No Negative Margins) */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-8 pt-10 sm:pt-14 space-y-10">
        
        {/* Quick Contact Cards (4-Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: Head Office */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Central Directorate</span>
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mt-0.5">Head Secretariat</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Saikat Computer & Training Jubo Songhoton Central Complex, Mirpur-10, Dhaka - 1216.
              </p>
            </div>
          </div>

          {/* Card 2: Hotlines */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Helpline & WhatsApp</span>
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mt-0.5">Direct Hotlines</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-semibold">
                +880 1712-345678<br />
                +880 1912-894021
              </p>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Digital Support</span>
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mt-0.5">Official Emails</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-semibold">
                info@jubounnayon.com<br />
                support@jubounnayon.com
              </p>
            </div>
          </div>

          {/* Card 4: Hours */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Office Schedule</span>
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mt-0.5">Academic Hours</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Saturday – Thursday: <br />
                <strong>9:00 AM – 6:00 PM</strong> (Friday Closed)
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Main Section: Interactive Form + Campus Hubs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Contact & Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-lg space-y-6">
            <div className="space-y-1.5 border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-700 uppercase tracking-wider">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Direct Inquiry Desk</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Send Us a Message
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Fill out the form below. Our academic counseling officers will respond within 24 working hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-7 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-extrabold text-slate-900 text-lg">Thank You! Your Message Was Received</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Our regional district coordinator will review your inquiry and reach out to you via phone or email shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tanvir Hasan"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm sm:text-base transition"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="017XX-XXXXXX"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm sm:text-base transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm sm:text-base transition"
                    />
                  </div>

                  {/* District */}
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                      Your District
                    </label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm sm:text-base transition"
                    >
                      <option value="Dhaka">Dhaka Division</option>
                      <option value="Chattogram">Chattogram Division</option>
                      <option value="Rajshahi">Rajshahi Division</option>
                      <option value="Khulna">Khulna Division</option>
                      <option value="Barishal">Barishal Division</option>
                      <option value="Sylhet">Sylhet Division</option>
                      <option value="Rangpur">Rangpur Division</option>
                      <option value="Mymensingh">Mymensingh Division</option>
                    </select>
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                    Nature of Inquiry
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm sm:text-base transition"
                  >
                    <option value="Admission & Scholarship">New Admission & Govt. Subsidized Training</option>
                    <option value="Certificate Verification">Certificate Authentication & Marksheet Verification</option>
                    <option value="Branch Center Affiliation">Branch Center Affiliation & Institutional Licensing</option>
                    <option value="Exam & Results">Examination Routine & Results Inquiries</option>
                    <option value="General Support">General Inquiries / Campus Visit Schedule</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                    Your Message / Query *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please mention your question, course of interest, or relevant roll number..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm sm:text-base transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/25 hover:shadow-xl transition-all disabled:opacity-75"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Sending Your Inquiry..." : "Submit Inquiry to Academic Desk"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column (5 cols): Regional Divisional Hubs */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg border border-slate-800">
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  National Footprint
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Divisional Training Hubs
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  Our network covers all 64 districts. You can walk into your nearest divisional hub during official hours for direct admission and practical lab visits.
                </p>
              </div>

              {/* Hub Cards */}
              <div className="space-y-3 pt-2">
                {divisionalHubs.map((hub, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/80 space-y-1.5 hover:border-emerald-500/50 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-emerald-400">{hub.division}</span>
                      <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                        Active Lab
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-100 text-sm">{hub.center}</h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{hub.address}</span>
                    </p>
                    <p className="text-xs text-slate-300 font-semibold pt-0.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{hub.phone}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
