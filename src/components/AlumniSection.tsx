"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, GraduationCap, Quote } from "lucide-react";

type Alumni = {
  id: number;
  name: string;
  batch: string;
  status: string;
  company: string;
  image: string;
  successLine: string;
  review: string;
};

type Props = {
  limit?: number;
  showCTA?: boolean;
};

export default function AlumniSection({ limit, showCTA = false }: Props) {
  const [alumni, setAlumni] = useState<Alumni[]>([]);

  useEffect(() => {
    fetch("/data/alumni.json")
      .then((res) => res.json())
      .then((data) => setAlumni(data))
      .catch((err) => console.error("Error loading alumni:", err));
  }, []);

  const displayAlumni = limit ? alumni.slice(0, limit) : alumni;

  return (
    <section className="py-24 bg-primary text-white relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-accent text-sm font-bold uppercase mb-2">
              Alumni Network
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold">
              Where Are They Now?
            </h3>
          </div>

          {showCTA && (
            <Link
              href="/alumni"
              className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10"
            >
              View All →
            </Link>
          )}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayAlumni.map((person, idx) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 p-6 rounded-2xl border border-white/10"
            >
              {/* Image */}
              <div className="relative mb-6">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={96}
                  height={96}
                  className="rounded-xl"
                />
                <span className="absolute -bottom-2 -right-2 bg-accent text-primary text-xs px-2 py-1 rounded">
                  {person.batch}
                </span>
              </div>

              <h4 className="font-bold text-lg">{person.name}</h4>

              <div className="text-sm text-gray-300 mt-2 space-y-1">
                <div className="flex gap-2 items-center">
                  <GraduationCap size={14} />
                  {person.status}
                </div>
                <div className="flex gap-2 items-center">
                  <Briefcase size={14} />
                  <span className="text-white">{person.company}</span>
                </div>
              </div>

              {/* Review */}
              <div className="mt-4 border-t border-white/10 pt-4 relative">
                <Quote className="absolute right-0 top-0 text-white/20" size={16} />

                <p className="text-accent text-sm">
                  {person.successLine}
                </p>

                <p className="text-gray-300 text-sm italic mt-1">
                  "{person.review}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}