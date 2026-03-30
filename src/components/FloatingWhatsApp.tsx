"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay before showing the button for a nice entrance effect
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://wa.me/9881202789" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 animate-bounce hover:animate-none transition-transform hover:scale-110 shadow-2xl rounded-full"
      aria-label="Chat on WhatsApp"
    >
      <div className="bg-green-500 p-3 rounded-full shadow-lg border-2 border-white/50 relative group">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Logo"
          width={36}
          height={36}
          className="w-8 h-8 md:w-10 md:h-10"
        />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border border-gray-100">
          Chat with us!
        </span>
      </div>
    </a>
  );
}
