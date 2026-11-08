import React from "react";
import Link from "next/link";
import { coursesData, Course } from "@/lib/coursesData";
import {
  Clock,
  MapPin,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Download,
  PhoneCall,
  ShieldCheck,
  Award,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Users,
} from "lucide-react";
import CourseThumbnail from "@/components/public/CourseThumbnail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">Program Not Found</h1>
        <p className="text-base sm:text-lg text-slate-600 mb-8">The technical trade program you are looking for does not exist or has been archived.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold text-base px-7 py-3.5 rounded-2xl hover:bg-emerald-700 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      {/* Top Banner: 100% Responsive */}
      <div className="bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 py-8 sm:py-12 lg:py-16">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base font-semibold text-slate-400 mb-6 sm:mb-8">
            <Link href="/" className="hover:text-white transition shrink-0">Home</Link>
            <span>/</span>
            <Link href="/#courses" className="hover:text-white transition shrink-0">Courses</Link>
            <span>/</span>
            <span className="text-emerald-400 break-words">{course.title}</span>
          </nav>

          <div className="max-w-4xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-5">
              <span className="text-xs sm:text-sm md:text-base font-bold px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                {course.category}
              </span>
              <span className="text-xs sm:text-sm md:text-base font-bold px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
                <span>{course.seatsRemaining} Seats Left in Batch 2026</span>
              </span>
            </div>

            {/* Course Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
              {course.title}
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
              {course.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Layout: 100% Responsive Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (7 Cols on desktop): Syllabus, Outcomes, Details */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            
            {/* Overview Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-sm">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-5 flex items-center gap-3">
                <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600 shrink-0" />
                <span>Program Comprehensive Overview</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {course.fullDescription}
              </p>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-sm">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600 shrink-0" />
                <span>Core Competencies & Learning Outcomes</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.learningOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition"
                  >
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-medium text-slate-800 leading-snug">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Syllabus Breakdown (Modules) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600 shrink-0" />
                    <span>Curriculum & Modular Syllabus</span>
                  </h2>
                  <p className="text-sm sm:text-base text-slate-500 mt-1.5 font-medium">
                    Total {course.totalHours} Practical Hours of Lab Practice & Applied Theory
                  </p>
                </div>
                <span className="text-xs sm:text-sm md:text-base font-bold text-slate-700 bg-slate-100 px-4 py-2 rounded-2xl border border-slate-200 self-start sm:self-auto">
                  {course.modules.length} Modules
                </span>
              </div>

              <div className="space-y-5">
                {course.modules.map((mod) => (
                  <div
                    key={mod.moduleNumber}
                    className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
                  >
                    <div className="bg-slate-50/90 px-5 sm:px-7 py-4.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3.5">
                        <span className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-medium text-sm sm:text-base flex items-center justify-center shrink-0">
                          0{mod.moduleNumber}
                        </span>
                        <span className="text-base sm:text-lg md:text-xl font-bold text-slate-900">{mod.title}</span>
                      </div>
                      <span className="text-xs sm:text-sm md:text-base font-bold text-slate-600 bg-white px-3 py-1 rounded-xl border border-slate-200/80 shrink-0">
                        {mod.hours} Hours
                      </span>
                    </div>
                    <div className="p-5 sm:p-7 bg-white">
                      <ul className="space-y-3">
                        {mod.topics.map((t, tidx) => (
                          <li key={tidx} className="flex items-start gap-3.5 text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-normal">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-2"></span>
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Career Paths */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-sm">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-5 flex items-center gap-3">
                <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600 shrink-0" />
                <span>Target Career Paths & Self-Employment</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.careerOpportunities.map((career, cidx) => (
                  <div
                    key={cidx}
                    className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/70 flex items-center gap-3.5"
                  >
                    <span className="w-3 h-3 rounded-full bg-emerald-600 shrink-0"></span>
                    <span className="text-sm sm:text-base md:text-lg font-medium text-emerald-950 leading-snug">{career}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (5 Cols on desktop): Sticky on Large Screens, Natural Stacking on Mobile */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6 w-full">
            
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-200/80 overflow-hidden">
              {/* Thumbnail Container with Error Fallback */}
              <div className="relative h-60 sm:h-72 w-full bg-slate-900">
                <CourseThumbnail
                  src={course.thumbnail}
                  alt={course.title}
                  title={course.title}
                  category={course.category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white pointer-events-none">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400">Official Certification</span>
                  <span className="text-xs sm:text-sm font-bold bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-xl">Batch 2026</span>
                </div>
              </div>

              {/* Pricing Header */}
              <div className="p-6 sm:p-8 md:p-9">
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <span className="text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wider block">Official Training Fee</span>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-1 leading-tight break-words">
                    {course.fee}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-emerald-600 font-bold mt-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                    <span>No Hidden Exam, Lab or Certificate Charges</span>
                  </div>
                </div>

                {/* Key Facts Stacked Cards (Zero Cutoff, Big Fonts, Fully Responsive) */}
                <div className="space-y-3.5 sm:space-y-4 mb-8">
                  {/* Duration */}
                  <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <Clock className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <span className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider block">Duration & Hours</span>
                      <span className="text-base sm:text-lg font-medium text-slate-900 leading-snug mt-0.5 block break-words">
                        {course.duration} ({course.totalHours} Practical Hours)
                      </span>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <Calendar className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <span className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider block">Class Schedule</span>
                      <span className="text-base sm:text-lg font-medium text-slate-900 leading-snug mt-0.5 block break-words">
                        {course.schedule}
                      </span>
                    </div>
                  </div>

                  {/* Eligibility */}
                  <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <GraduationCap className="w-6 h-6 text-purple-600 shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <span className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider block">Minimum Eligibility</span>
                      <span className="text-base sm:text-lg font-medium text-slate-900 leading-snug mt-0.5 block break-words">
                        {course.minQualification}
                      </span>
                    </div>
                  </div>

                  {/* Batch Seats */}
                  <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <Users className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <span className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider block">Batch Seats Availability</span>
                      <span className="text-base sm:text-lg font-medium text-slate-900 leading-snug mt-0.5 block break-words">
                        {course.seatsRemaining} of {course.seatsTotal} Remaining (Admissions Closing Soon)
                      </span>
                    </div>
                  </div>

                  {/* Available Centers */}
                  <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <MapPin className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <span className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider block">Available Training Hubs</span>
                      <span className="text-base sm:text-lg font-medium text-slate-900 leading-snug mt-0.5 block break-words">
                        {course.centersAvailable}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Big Bold Action Buttons */}
                <div className="space-y-3.5">
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base sm:text-lg py-4 sm:py-4.5 rounded-2xl transition duration-200 shadow-xl shadow-emerald-600/25 flex items-center justify-center gap-2.5 group">
                    <span>Apply for Admission</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm sm:text-base py-3.5 sm:py-4 rounded-2xl transition flex items-center justify-center gap-2.5">
                    <Download className="w-5 h-5 text-slate-600" />
                    <span>Download Full Syllabus (PDF)</span>
                  </button>
                </div>
              </div>

              {/* Verified Certificate Footer */}
              <div className="bg-slate-50 px-6 sm:px-8 py-4.5 border-t border-slate-100 flex items-center gap-3.5">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-snug">
                  Graduates receive a <strong>Nationally Verified Technical Diploma</strong> with digital QR validation.
                </div>
              </div>
            </div>

            {/* Helpline Advisory Box */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-lg">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-400/20">
                  <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-white">Need Guidance on Choosing a Trade?</div>
                  <div className="text-xs sm:text-sm text-slate-400">Speak directly to an academic career advisor</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed mt-3">
                Call our national technical hotline at <strong className="text-emerald-400 font-mono text-base sm:text-lg">333</strong> or <strong className="text-emerald-400 font-mono text-base sm:text-lg">01700-000000</strong> (Saturday – Thursday, 9 AM – 5 PM).
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
