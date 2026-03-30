"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: "5000+",
    label: "Students Trained",
    sub: "Across Nashik",
  },
  {
    value: "95%",
    label: "Pass Percentage",
    sub: "Consistent Results",
  },
  {
    value: "15+",
    label: "Years Experience",
    sub: "Expert Faculty",
  },
  {
    value: "500+",
    label: "CA Professionals",
    sub: "Successful Careers",
  },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 md:py-20 bg-primary text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[250px] h-[250px] bg-accent/10 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Proven Results That Speak
          </h2>
          <p className="text-gray-300 mt-2 text-sm md:text-base">
            Numbers that reflect trust, consistency, and success
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl 
          bg-white text-primary shadow-md hover:shadow-xl 
          hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              {/* Number */}
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-accent">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="mt-1 text-sm font-semibold text-primary text-center">
                {stat.label}
              </p>

              {/* Subtext */}
              <p className="mt-0.5 text-xs text-gray-500 text-center">
                {stat.sub}
              </p>

              {/* Accent underline */}
              <div className="mt-3 h-[2px] w-6 bg-accent group-hover:w-12 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}