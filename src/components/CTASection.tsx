"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-dark to-transparent opacity-50" />
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-accent text-sm font-semibold mb-6 backdrop-blur-sm border border-white/10">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Admissions Open for 2025-26
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ready to Build a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">
              Brilliant Future?
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Don&apos;t wait. Limited seats available in our upcoming batches. 
            Secure your spot and start your journey with the best.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-primary">
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent hover:bg-yellow-400 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-accent/20 w-full sm:w-auto"
            >
              Enroll Now
            </Link>
            
            <a
              href="tel:+919876543210"
              className="px-8 py-4 bg-white/10 text-white border border-white/20 hover:bg-white/20 rounded-2xl font-semibold text-lg hover:scale-105 transition-all w-full sm:w-auto"
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
