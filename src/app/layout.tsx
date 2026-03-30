import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Body font (clean, readable)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

// Heading font (premium, authority)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title:
    "Best Commerce Coaching Classes in Nashik & Satpur | 11th 12th Commerce | Tidke Accountancy Classes",

  description:
    "Tidke Accountancy Classes is a leading commerce coaching institute in Nashik & Satpur. Expert coaching for 11th Commerce, 12th Commerce, and CA Foundation with conceptual clarity, discipline, and proven results.",

  keywords: [
    "commerce coaching Nashik",
    "commerce classes Nashik",
    "commerce coaching Satpur",
    "11th commerce classes Nashik",
    "12th commerce classes Nashik",
    "CA foundation coaching Nashik",
    "best coaching classes Nashik",
    "accountancy classes Nashik",
    "Tidke Accountancy Classes",
    "commerce tuition Nashik",
    "11th 12th commerce coaching Satpur",
    "best commerce classes in Nashik",
    "top commerce coaching Nashik",
    "accountancy coaching Satpur",
  ],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title:
      "Best Commerce Coaching Classes in Nashik & Satpur | Tidke Accountancy Classes",
    description:
      "Top commerce coaching in Nashik & Satpur for 11th, 12th Commerce & CA Foundation. Concept-based teaching with strong academic results.",
    url: "https://yourdomain.com",
    siteName: "Tidke Accountancy Classes",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Commerce Coaching Classes in Nashik & Satpur | Tidke Accountancy Classes",
    description:
      "Top commerce coaching in Nashik & Satpur for 11th, 12th Commerce & CA Foundation students.",
  },

  alternates: {
    canonical: "https://yourdomain.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable} 
          ${playfair.variable} 
          bg-gray-50 
          text-gray-900 
          min-h-screen 
          flex flex-col 
          font-body
        `}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}