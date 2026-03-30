import AlumniSection from "@/components/AlumniSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Alumni | Tidke Accountancy Classes",
  description:
    "Our students are making waves across top corporate firms and prestigious colleges.",
};

export default function AlumniPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="bg-primary py-24 text-center border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-dark to-transparent opacity-50" />

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative z-10">
          A Global <span className="text-accent">Network</span> of Success
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto text-lg relative z-10">
          Becoming part of Tidke Classes means joining a lifelong network of
          CAs, MBAs, and financial experts.
        </p>
      </section>

      {/* FULL Alumni (no limit) */}
      <AlumniSection />

      <CTASection />
    </div>
  );
}