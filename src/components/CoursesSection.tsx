"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calculator, Landmark } from "lucide-react";
import { useRouter } from "next/navigation";

const courses = [
  {
    id: "11th-commerce",
    title: "11th Commerce",
    description:
      "Build a strong foundation in Book Keeping, Economics, and OC.",
    duration: "1 Year Program",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
    highlights: [
      "Strong fundamentals in Accounts",
      "Weekly test system",
      "Concept clarity sessions",
    ],
    syllabus: [
      "Introduction to Accounting",
      "Journal Entries",
      "Ledger & Trial Balance",
      "Economics Basics",
      "Organisation of Commerce",
    ],
  },
  {
    id: "12th-commerce",
    title: "12th Commerce",
    description:
      "Board exam focused preparation with mock tests and practice.",
    duration: "1 Year Program",
    icon: Calculator,
    color: "from-emerald-400 to-emerald-600",
    highlights: [
      "Board exam strategy",
      "Full syllabus revision",
      "Mock test series",
    ],
    syllabus: [
      "Final Accounts",
      "Partnership Accounts",
      "Cash Flow Statement",
      "Macro Economics",
      "Exam Writing Practice",
    ],
  },
  {
    id: "ca-foundation",
    title: "CA Foundation",
    description:
      "Complete CA entrance preparation with structured coaching.",
    duration: "6 Months Intensive",
    icon: Landmark,
    color: "from-orange-400 to-orange-600",
    highlights: [
      "CA exam strategy",
      "Concept-based learning",
      "Time management training",
    ],
    syllabus: [
      "Principles of Accounting",
      "Business Laws",
      "Quantitative Aptitude",
      "Business Economics",
      "Mock Exams",
    ],
  },
];

export default function CoursesSection() {
  const router = useRouter();

  // ✅ IMPORTANT: no default selection
  const [selected, setSelected] = useState<null | typeof courses[0]>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-sm uppercase tracking-wider text-primary font-semibold">
            Our Programs
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mt-2">
            Premium Courses Designed for Success
          </h3>
          <p className="text-gray-600 mt-3">
            Select a course to explore syllabus & details
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10">

          {/* LEFT LIST */}
          <div className="md:col-span-4 space-y-4">
            {courses.map((course) => {
              const Icon = course.icon;

              return (
                <motion.div
                  key={course.id}
                  onClick={() => setSelected(course)}
                  whileHover={{ scale: 1.02 }}
                  className={`cursor-pointer p-5 rounded-2xl border transition-all flex items-center gap-4
                    ${
                      selected?.id === course.id
                        ? "bg-white shadow-xl border-primary/20"
                        : "bg-gray-50 hover:bg-white border-gray-200"
                    }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${course.color}`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {course.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {course.duration}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT PANEL */}
          <div className="md:col-span-8">
            <AnimatePresence mode="wait">

              {/* ✅ EMPTY STATE */}
              {!selected ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-3xl p-14 shadow-xl border border-gray-100 text-center"
                >
                  <h3 className="text-2xl font-semibold text-gray-800">
                    No Course Selected
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Choose a course from the left to view syllabus and details
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
                >

                  {/* TITLE */}
                  <h2 className="text-3xl font-bold text-gray-900">
                    {selected.title}
                  </h2>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 mt-4 text-lg">
                    {selected.description}
                  </p>

                  {/* DURATION */}
                  <div className="mt-6 inline-block bg-primary/5 text-primary px-4 py-2 rounded-xl text-sm font-semibold">
                    {selected.duration}
                  </div>

                  {/* HIGHLIGHTS */}
                  <div className="mt-10">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Key Highlights
                    </h4>

                    <div className="space-y-3">
                      {selected.highlights.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3"
                        >
                          <span className="w-2 h-2 mt-2 rounded-full bg-primary" />
                          <span className="text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* SYLLABUS */}
                  <div className="mt-10">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Syllabus Overview
                    </h4>

                    <div className="space-y-3">
                      {selected.syllabus.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3"
                        >
                          <span className="w-2 h-2 mt-2 rounded-full bg-indigo-500" />
                          <span className="text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-10 flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        router.push(`/contact?course=${selected.id}`)
                      }
                      className="px-6 py-3 rounded-xl font-semibold bg-primary text-white hover:opacity-90 transition"
                    >
                      Enroll Now →
                    </motion.button>
                  </div>

                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}