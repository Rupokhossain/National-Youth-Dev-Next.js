"use client";

import React, { useState, useEffect } from "react";
import { Quote, Star, CheckCircle2, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  course: string;
  batch: string;
  district: string;
  rating: number;
  quote: string;
  avatar: string;
  initials: string;
  avatarGradient: string;
}

const baseTestimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Tanjila Akter",
    course: "Computer Office Programme & Graphic Design",
    batch: "Batch 42",
    district: "Tangail District Hub",
    rating: 5,
    quote:
      "Before enrolling at Saikat Computer & Training Jubo Songhoton, I had zero computing confidence. The instructors guided me through every step in the modern lab. Within 2 months of graduation, I started earning online and now support my entire family.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    initials: "TA",
    avatarGradient: "from-emerald-500 to-teal-700",
  },
  {
    id: "test-2",
    name: "Mohammad Arif Hossain",
    course: "Electrical House Wiring & Solar Installation",
    batch: "Batch 38",
    district: "Cumilla Technical Complex",
    rating: 5,
    quote:
      "The practical safety protocols and solar inverter troubleshooting on physical test boards prepared me for real industrial challenges. My government-verified certificate gave building contractors the confidence to hire me directly.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    initials: "AH",
    avatarGradient: "from-blue-600 to-indigo-800",
  },
  {
    id: "test-3",
    name: "Sumaiya Yasmin",
    course: "Professional Dress Making, Tailoring & Boutique",
    batch: "Batch 45",
    district: "Bogura Youth Training Center",
    rating: 5,
    quote:
      "I came to learn basic tailoring to support my family. Today, not only am I financially independent, but I have also established my own boutique that employs six young women from my village. The entrepreneurship classes were life-changing.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    initials: "SY",
    avatarGradient: "from-rose-500 to-pink-700",
  },
  {
    id: "test-4",
    name: "Mehedi Hasan",
    course: "Refrigeration & Air Conditioning (RAC) Servicing",
    batch: "Batch 36",
    district: "Dhaka Central Heavy Workshop",
    rating: 5,
    quote:
      "A 3-month course in a private institute was out of my reach due to high tuition fees. Here, the government subsidy made the course virtually free while providing top-grade vacuum pumps, manifold gauges, and inverter split AC lab stations.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    initials: "MH",
    avatarGradient: "from-cyan-600 to-blue-800",
  },
  {
    id: "test-5",
    name: "Fatema Tuz Zohra",
    course: "Digital Marketing, SEO & E-Commerce",
    batch: "Batch 49",
    district: "Chattogram Regional Hub",
    rating: 5,
    quote:
      "Most courses only teach theory with slides. Here, our mentors set up live Facebook pixel tracking, Google Merchant accounts, and SEO tools directly on our workstations. I landed a remote marketing position right after graduation.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    initials: "FZ",
    avatarGradient: "from-purple-600 to-indigo-900",
  },
  {
    id: "test-6",
    name: "Rashedul Islam",
    course: "Modern Dairy Farming, Poultry & Cattle Fattening",
    batch: "Batch 31",
    district: "Rangpur Agro Development Farm",
    rating: 5,
    quote:
      "Before this course, my family suffered severe losses due to preventable cattle diseases and poor feed balance. The veterinary sessions, silage preservation methods, and youth loan counseling empowered me to build a profitable modern farm.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    initials: "RI",
    avatarGradient: "from-amber-600 to-orange-800",
  },
];

// Triplicated array for seamless infinite looping in both directions
const extendedTestimonials = [
  ...baseTestimonials.map((t, idx) => ({ ...t, uniqueKey: `set1-${t.id}-${idx}` })),
  ...baseTestimonials.map((t, idx) => ({ ...t, uniqueKey: `set2-${t.id}-${idx}` })),
  ...baseTestimonials.map((t, idx) => ({ ...t, uniqueKey: `set3-${t.id}-${idx}` })),
];

const BASE_COUNT = baseTestimonials.length;

export default function TestimonialsSection() {
  // Start at the beginning of the middle copy (index = BASE_COUNT)
  const [currentIndex, setCurrentIndex] = useState(BASE_COUNT);
  const [visibleCount, setVisibleCount] = useState(3);
  const [withTransition, setWithTransition] = useState(true);
  const [isSliding, setIsSliding] = useState(false);

  // Responsive visible cards count
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const handleNext = () => {
    if (isSliding) return;
    setIsSliding(true);
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isSliding) return;
    setIsSliding(true);
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Seamless jump without backward animation once transition finishes
  const handleTransitionEnd = () => {
    if (currentIndex >= BASE_COUNT * 2) {
      // Reached the end copy -> jump seamlessly to middle copy without rewind
      setWithTransition(false);
      setCurrentIndex((prev) => prev - BASE_COUNT);
      setTimeout(() => {
        setWithTransition(true);
        setIsSliding(false);
      }, 50);
    } else if (currentIndex < BASE_COUNT) {
      // Reached the start copy -> jump seamlessly to middle copy without rewind
      setWithTransition(false);
      setCurrentIndex((prev) => prev + BASE_COUNT);
      setTimeout(() => {
        setWithTransition(true);
        setIsSliding(false);
      }, 50);
    } else {
      setIsSliding(false);
    }
  };

  // Normalize active dot indicator index
  const activeDotIndex = ((currentIndex % BASE_COUNT) + BASE_COUNT) % BASE_COUNT;

  const handleDotClick = (dotIdx: number) => {
    if (isSliding) return;
    setIsSliding(true);
    setWithTransition(true);
    setCurrentIndex(BASE_COUNT + dotIdx);
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 py-12">
      
      {/* Clean Header: Title on Left, 2 Slide Arrow Buttons on Right */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
        <div>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 inline-block">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-3">
            What Our Students Say
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1.5 max-w-xl">
            Real feedback from graduates across our technical and vocational training programs.
          </p>
        </div>

        {/* The 2 Slide Arrow Buttons */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonials"
            className="w-11 h-11 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 flex items-center justify-center transition-all duration-200 shadow-xs active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Testimonials"
            className="w-11 h-11 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 flex items-center justify-center transition-all duration-200 shadow-xs active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Smooth Continuous Infinite Sliding Carousel */}
      <div className="overflow-hidden -mx-2 sm:-mx-3">
        <div
          onTransitionEnd={handleTransitionEnd}
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            transition: withTransition ? "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)" : "none",
          }}
        >
          {extendedTestimonials.map((item) => (
            <div
              key={item.uniqueKey}
              className="shrink-0 px-2 sm:px-3"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="h-full bg-white rounded-3xl border border-slate-200 hover:border-emerald-500/40 p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
                
                {/* Top Row: 5 Stars & Verified Alumni Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>Verified Alumni</span>
                    </span>
                  </div>

                  {/* Subtle Background Quote Watermark */}
                  <Quote className="w-8 h-8 text-slate-100 absolute top-6 right-6 -rotate-12 pointer-events-none group-hover:text-emerald-50 transition-colors" />

                  {/* Student Quote */}
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal italic relative z-10 mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Bottom Student Profile */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3 mt-auto">
                  
                  {/* Avatar with Image & Fallback Initials */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-slate-200 shadow-xs">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.display = "none";
                        if (target.nextElementSibling) {
                          (target.nextElementSibling as HTMLElement).style.display = "flex";
                        }
                      }}
                    />
                    <div
                      style={{ display: "none" }}
                      className={`absolute inset-0 w-full h-full bg-gradient-to-tr ${item.avatarGradient} text-white font-black text-sm items-center justify-center`}
                    >
                      {item.initials}
                    </div>
                  </div>

                  {/* Name, Course & District */}
                  <div className="min-w-0">
                    <h4 className="text-sm font-black text-slate-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-emerald-700 font-semibold truncate">
                      {item.course}
                    </p>
                    <p className="text-[11px] text-slate-400 truncate flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      <span>{item.district}</span>
                      <span>•</span>
                      <span>{item.batch}</span>
                    </p>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Slide Indicators */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {baseTestimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeDotIndex === idx ? "w-6 bg-emerald-600" : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
