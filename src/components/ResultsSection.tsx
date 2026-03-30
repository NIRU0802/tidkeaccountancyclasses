"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ================= TYPES ================= */
type Student = {
  name: string;
  rank: number;
  score: string;
  exam: string;
  class: "11th" | "12th";
  image: string;
};

type Props = {
  variant?: "full" | "home";
};

/* ================= MOTION ================= */
const spring = {
  type: "spring" as const,
  stiffness: 200,
  damping: 18,
};

/* ================= YEAR TIMELINE ================= */
function YearTimeline({
  year,
  setYear,
}: {
  year: string;
  setYear: (y: string) => void;
}) {
  const years = ["2022", "2023", "2024", "2025"];

  return (
    <div className="relative w-full flex justify-center mb-16">
      <div className="relative w-full max-w-4xl">
        <div className="absolute top-5 left-0 right-0 h-16 pointer-events-none">
          <svg viewBox="0 0 1000 60" className="w-full h-full">
            <motion.path
              d="M0,30 C120,0 220,60 350,30 C480,0 580,60 720,30 C850,10 920,50 1000,30"
              fill="transparent"
              stroke="#000"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
          </svg>
        </div>

        <div className="relative flex justify-between">
          {years.map((y) => {
            const active = y === year;

            return (
              <button
                key={y}
                onClick={() => setYear(y)}
                className="flex flex-col items-center"
              >
                <motion.div
                  animate={{ scale: active ? 1.5 : 1 }}
                  transition={spring}
                  className={`w-4 h-4 rounded-full ${
                    active ? "bg-black" : "bg-gray-300"
                  }`}
                />
                <span
                  className={`mt-3 text-sm ${
                    active ? "text-black" : "text-gray-400"
                  }`}
                >
                  {y}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ================= MAIN ================= */
export default function PremiumResultsSection({
  variant = "full",
}: Props) {
  const [year, setYear] = useState("2022"); // ✅ fallback fixed
  const [students, setStudents] = useState<Student[]>([]);

  /* ================= FETCH ================= */
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(`/data/${year}.json`, {
          cache: "no-store",
        });

        if (!res.ok) {
          setStudents([]);
          return;
        }

        const json = await res.json();

        const class11 = json?.data?.["11th"] || [];
        const class12 = json?.data?.["12th"] || [];

        const merged = [
          ...class11.map((s: any) => ({ ...s, class: "11th" as const })),
          ...class12.map((s: any) => ({ ...s, class: "12th" as const })),
        ];

        const normalized: Student[] = merged.map((s: any) => {
          let safeImage = "/students/default.jpg";

          if (typeof s.image === "string" && s.image.trim() !== "") {
            safeImage = s.image;
          }

          return {
            name: s.name || "Unknown",
            rank: parseInt(s.rank, 10) || 0, // ✅ FIXED
            score: s.score ? `${s.score}%` : "--",
            exam: "HSC",
            class: s.class,
            image: safeImage,
          };
        });

        console.log("Loaded Students:", normalized); // ✅ debug

        setStudents(normalized);
      } catch (err) {
        console.error("Fetch error:", err);
        setStudents([]);
      }
    };

    loadData();
  }, [year]);

  /* ================= DATA ================= */

  const toppers11 = students
    .filter((s) => s.class === "11th" && s.rank > 0 && s.rank <= 3)
    .sort((a, b) => a.rank - b.rank);

  const toppers12 = students
    .filter((s) => s.class === "12th" && s.rank > 0 && s.rank <= 3)
    .sort((a, b) => a.rank - b.rank);

  const others = students
    .filter((s) => s.rank > 3)
    .sort((a, b) => a.rank - b.rank);

  /* ================= HOME LOGIC ================= */

  const displayToppers11 =
    variant === "home" ? toppers11.slice(0, 3) : toppers11;

  const displayToppers12 =
    variant === "home" ? toppers12.slice(0, 3) : toppers12;

  const showOthers = variant === "full";

  return (
    <section className="py-28 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Student Achievements</h2>
        </div>

        {/* TIMELINE */}
        {variant === "full" && (
          <YearTimeline year={year} setYear={setYear} />
        )}

        {/* EMPTY STATE */}
        {students.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No results available for this year.
          </div>
        )}

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={year}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* ================= 11TH TOPPERS ================= */}
            {displayToppers11.length > 0 && (
              <div className="mb-12">
                <h3 className="text-center text-lg font-semibold mb-6">
                  11th Toppers
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {displayToppers11.map((s, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -6 }}
                      className="bg-white border rounded-2xl p-6 shadow-sm text-center relative"
                    >
                      <div className="absolute top-2 left-2 text-xs bg-yellow-400 px-2 py-1 rounded-full font-bold">
                        TOP {s.rank}
                      </div>

                      <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border mb-3">
                        <Image src={s.image} alt={s.name} fill className="object-cover" />
                      </div>

                      <h3 className="font-semibold">{s.name}</h3>
                      <div className="mt-2 font-bold text-lg">{s.score}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ================= 12TH TOPPERS ================= */}
            {displayToppers12.length > 0 && (
              <div className="mb-16">
                <h3 className="text-center text-lg font-semibold mb-6">
                  12th Toppers
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {displayToppers12.map((s, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -6 }}
                      className="bg-white border rounded-2xl p-6 shadow-sm text-center relative"
                    >
                      <div className="absolute top-2 left-2 text-xs bg-yellow-400 px-2 py-1 rounded-full font-bold">
                        TOP {s.rank}
                      </div>

                      <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border mb-3">
                        <Image src={s.image} alt={s.name} fill className="object-cover" />
                      </div>

                      <h3 className="font-semibold">{s.name}</h3>
                      <div className="mt-2 font-bold text-lg">{s.score}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ================= VIEW ALL BUTTON ================= */}
            {variant === "home" && (
              <div className="text-center mt-6 mb-10">
                <a
                  href="/results"
                  className="inline-block px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:opacity-90 transition"
                >
                  View All Results →
                </a>
              </div>
            )}

            {/* ================= OTHER STUDENTS ================= */}
            {showOthers && others.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {others.map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    className="bg-white border rounded-2xl p-4 shadow-sm text-center"
                  >
                    <div className="relative w-14 h-14 mx-auto rounded-full overflow-hidden border mb-2">
                      <Image src={s.image} alt={s.name} fill className="object-cover" />
                    </div>

                    <h4 className="font-semibold text-sm">{s.name}</h4>

                    <span className="text-[10px] text-gray-500">
                      {s.class}
                    </span>

                    <div className="mt-1 font-bold text-sm">{s.score}</div>
                  </motion.div>
                ))}
              </div>
            )}

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}