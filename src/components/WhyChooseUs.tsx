"use client";
import { motion } from "framer-motion";
import { Brain, CalendarCheck, Users, Trophy } from "lucide-react";

const features = [
  {
    icon: <Brain size={32} className="text-primary" />,
    title: "Concept Clarity",
    desc: "Understanding logic deeply instead of rote memorization. We simplify complex CA and Commerce concepts.",
    color: "bg-blue-50 border-blue-100",
  },
  {
    icon: <CalendarCheck size={32} className="text-emerald-600" />,
    title: "Regular Tests",
    desc: "Chapter-wise, topic-wise, and full syllabus mocks. We train you for exam pressure.",
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    icon: <Users size={32} className="text-purple-600" />,
    title: "Personal Attention",
    desc: "Small batch sizes ensure every doubt is solved. 1-on-1 mentoring and performance tracking.",
    color: "bg-purple-50 border-purple-100",
  },
  {
    icon: <Trophy size={32} className="text-amber-600" />,
    title: "Proven Results",
    desc: "A legacy of AIRs and school toppers. Our methodology guarantees score improvement.",
    color: "bg-amber-50 border-amber-100",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50 relative" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-bold text-sm uppercase tracking-wider mb-2">
            Our Methodology
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Why Students Win Here
          </h3>
          <p className="mt-4 text-gray-600 text-lg">
            We don&apos;t just teach syllabus; we engineer success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border ${feature.color} group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}