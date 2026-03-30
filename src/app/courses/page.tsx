import CoursesSection from "@/components/CoursesSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Courses | Tidke Accountancy Classes",
  description: "Explore our premium programs for 11th Commerce, 12th Commerce, and CA Foundation.",
};

export default function CoursesPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Page Header */}
       <section className="bg-primary py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-dark to-transparent opacity-50" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Programs Designed for <span className="text-accent underline decoration-4 decoration-accent/50">Toppers</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Comprehensive syllabus coverage, extreme test series, and mentorship that delivers results.
          </p>
        </div>
      </section>

      {/* Embedded Component handles layout and styling */}
      <CoursesSection />
      
      {/* Detailed Table structure could go here if needed, but keeping it clean with the reusable component for now. */}
      
      <CTASection />
    </div>
  );
}
