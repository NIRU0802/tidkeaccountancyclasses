import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import CoursesSection from "@/components/CoursesSection";
import ResultsSection from "@/components/ResultsSection";
import AlumniSection from "@/components/AlumniSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CoursesSection />
      <WhyChooseUs />
      <ResultsSection variant="home" />
      <AlumniSection limit={4} showCTA />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
