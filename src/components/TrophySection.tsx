import Image from "next/image";
import { Trophy } from "lucide-react";

export default function TrophySection() {
    const trophies = [
        "/trophies/award1.jpg",
        "/trophies/award2.jpg",
        "/trophies/award3.jpg",
        "/trophies/award4.jpg",
    ];

    return (
        <section className="py-16 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <Trophy className="text-accent mx-auto mb-3" size={32} />

                    <h2 className="text-3xl md:text-4xl font-heading font-bold">
                        Recognition & Trust
                    </h2>

                    <p className="text-gray-300 mt-2 text-sm md:text-base">
                        Awards and achievements earned through consistent academic excellence
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {trophies.map((img, i) => (
                        <div
                            key={i}
                            className="relative h-44 md:h-52 rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:scale-[1.03] transition"
                        >
                            <Image
                                src={img}
                                alt={`Trophy ${i + 1}`}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    ))}
                </div>

                {/* Trust note */}
                <p className="text-center text-xs text-gray-400 mt-8">
                    Recognition reflects institutional commitment to student success.
                </p>

            </div>
        </section>
    );
}