// src/app/page.tsx
import HeroSlider from "@/components/public/HeroSlider";
import ImpactStats from "@/components/public/ImpactStats";
import AboutSection from "@/components/public/AboutSection";
import CourseCategories from "@/components/public/CourseCategories";
import FeaturedCourses from "@/components/public/FeaturedCourses";
import InstructorsSection from "@/components/public/InstructorsSection";
import LeadershipVision from "@/components/public/LeadershipVision";
import ChairmanSpeech from "@/components/public/ChairmanSpeech";
import TestimonialsSection from "@/components/public/TestimonialsSection";
import NoticeBoard from "@/components/public/NoticeBoard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <HeroSlider />
      <ImpactStats />
      <AboutSection />
      <CourseCategories />
      <FeaturedCourses />
      <InstructorsSection />
      <LeadershipVision />
      <ChairmanSpeech />
      <TestimonialsSection />
      {/* <NoticeBoard /> */}
    </main>
  );
}
