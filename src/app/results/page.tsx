import ResultsSection from "@/components/ResultsSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Results | Tidke Accountancy Classes",
  description:
    "Consistent toppers in 11th & 12th Commerce. Explore real student success stories and outstanding results.",
};

export default function ResultsPage() {
  return (
    <div className="pt-24 md:pt-32">

      {/* ================= HERO ================= */}
      <section className="relative py-28 text-center bg-gradient-to-b from-primary/10 via-primary/5 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Results That <span className="text-accent">Define Excellence</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Consistent toppers across 11th & 12th Commerce. Our students don’t just pass — they dominate.
          </p>

          {/* 🔥 TRUST STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "500+", label: "Top Scores" },
              { value: "95%+", label: "Above Distinction" },
              { value: "10+", label: "Years Experience" },
              { value: "100%", label: "Concept Clarity" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border rounded-xl py-5 shadow-sm"
              >
                <div className="text-2xl font-bold text-accent">
                  {item.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <div className="bg-white">
        <ResultsSection />
      </div>

      {/* ================= CTA ================= */}
      <CTASection />

    </div>
  );
}