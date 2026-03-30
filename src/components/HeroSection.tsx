"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent -z-10" />
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-2">
            🎓 15+ Years of Excellence in Commerce Education
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15]">
            Shape Your Career With <span className="text-primary block mt-2">Conceptual Clarity</span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
            Join the premier coaching institute for 11th, 12th Commerce, and CA Foundation.
            We focus on understanding, not just memorization, to guarantee proven results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/courses"
              className="px-8 py-4 bg-primary text-white rounded-2xl hover:bg-primary/90 transition-all font-semibold text-center hover:scale-105 shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
            >
              Explore Courses
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>

            <Link
              href="/results"
              className="px-8 py-4 bg-white text-primary border border-gray-200 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all font-semibold text-center hover:shadow-md flex items-center justify-center gap-2"
            >
              View Our Results
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 flex items-center gap-6 text-sm text-gray-500 font-medium">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative">
                  <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" fill sizes="40px" className="object-cover" />
                </div>
              ))}
            </div>
            <p>Trusted by <strong className="text-gray-900">5,000+</strong> students</p>
          </div>
        </motion.div>

        {/* Right Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Main Image Container */}
          <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[90%] rounded-3xl overflow-hidden shadow-2xl">
            {/* Replace with actual high-quality class/study picture */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
              alt="Students studying"
              className="w-full h-full object-cover"
            />

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-6 top-1/4 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:flex items-center gap-3 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Success Rate</p>
                <p className="text-xl font-bold text-gray-900">98%</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
