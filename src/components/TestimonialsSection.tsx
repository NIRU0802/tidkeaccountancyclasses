"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Suraj Verma",
    role: "CA Intermediate Ranker",
    text: "The conceptual clarity I got here was unmatched...",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    name: "Anjali Dubey",
    role: "12th CBSE Topper",
    text: "Regular tests removed my exam fear...",
    image: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 3,
    name: "Rahul Nair",
    role: "B.Com Graduate (EY)",
    text: "The foundation built here isn’t just for exams...",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "CA Foundation",
    text: "Best classes for Accounts.",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

// duplicate for seamless looping
const loopData = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-16">
          Loved by Students
        </h2>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 20, // control speed
              repeat: Infinity,
            }}
          >
            {loopData.map((item, i) => (
              <div
                key={i}
                className="w-[280px] bg-white rounded-2xl p-6 shadow-md border"
              >
                <p className="text-gray-600 mb-6 italic text-sm">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}