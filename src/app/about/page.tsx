import Image from "next/image";
import { Trophy, BookOpen, Target } from "lucide-react";
import TrophySection from "@/components/TrophySection";

export const metadata = {
  title: "About Us | Tidke Accountancy Classes",
  description:
    "Learn about our journey, vision, and the expert faculty behind our students' success.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28 pb-20">

      {/* ================= HERO FOUNDER SECTION ================= */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <p className="text-accent uppercase tracking-wider text-sm mb-3 flex items-center gap-3">

              <span>Founder & Chief Educator</span>

              {/* ISO Badge */}
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-lg border border-white/20 text-white text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3 h-3 text-accent"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.586-2.586a2 2 0 010 2.828l-7.586 7.586a2 2 0 01-2.828 0L4 13.414a2 2 0 010-2.828l7.586-7.586a2 2 0 012.828 0z"
                  />
                </svg>
                ISO Certified
              </span>

            </p>

            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Prof. Shashikant Tidke
            </h1>

            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              Building commerce toppers for over{" "}
              <span className="text-accent font-semibold">15+ years</span> through
              conceptual clarity, discipline, and result-driven teaching.
            </p>

            <div className="mt-8 flex gap-4">
              <div className="bg-white/10 px-4 py-3 rounded-xl">
                <p className="text-accent font-bold text-xl">5000+</p>
                <p className="text-xs text-gray-300">Students Guided</p>
              </div>

              <div className="bg-white/10 px-4 py-3 rounded-xl">
                <p className="text-accent font-bold text-xl">500+</p>
                <p className="text-xs text-gray-300">CA Professionals</p>
              </div>

              <div className="bg-white/10 px-4 py-3 rounded-xl">
                <p className="text-accent font-bold text-xl">95%</p>
                <p className="text-xs text-gray-300">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[480px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/Avatar.png"
              alt="Founder - Prof. Shashikant Tidke"
              fill
              priority
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ================= ORIGIN STORY ================= */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-3xl font-heading font-bold mb-6 text-primary">
            Why I Started This Institute
          </h2>

          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              I saw a major gap in commerce education — students were memorizing, not understanding.
            </p>

            <p>
              That’s when I decided to build an institute focused on one thing:
              <span className="text-primary font-semibold">
                {" "}conceptual clarity that produces toppers
              </span>.
            </p>

            <p>
              Every lecture is designed to make accounting logical, simple, and exam-oriented.
            </p>
          </div>
        </div>

        {/* Visual */}
        <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2670&auto=format&fit=crop"
            alt="Classroom"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading font-bold mb-12">
            Achievements & Recognition
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-md">
              <Trophy className="text-accent mx-auto mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Academic Excellence</h3>
              <p className="text-gray-600 text-sm">
                Consistently producing toppers across 11th, 12th & CA Foundation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md">
              <BookOpen className="text-accent mx-auto mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Concept-Based Teaching</h3>
              <p className="text-gray-600 text-sm">
                Focus on understanding over memorization.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md">
              <Target className="text-accent mx-auto mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Result Driven System</h3>
              <p className="text-gray-600 text-sm">
                Structured teaching methodology focused on exam success.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TROPHY SECTION (NEW) ================= */}
      <TrophySection />

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-20 max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-heading font-bold mb-6">
          My Teaching Philosophy
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          True learning is not memorization — it is the ability to think, reason, and apply concepts under exam pressure.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mt-4">
          My approach is built on one principle: when a student understands the <span className="text-primary font-semibold">“why behind every concept”</span>, performance becomes consistent, confidence becomes natural, and success becomes predictable.
        </p>

      </section>

    </div>
  );
}