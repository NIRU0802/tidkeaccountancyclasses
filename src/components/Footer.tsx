"use client";
import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-bold tracking-tight inline-block">
            Tidke Accountancy <span className="text-accent">Classes</span>
          </Link>
          <p className="text-gray-300 text-sm leading-relaxed">
            Empowering students with conceptual clarity and proven results.
            The premier coaching institute for CA and Commerce students.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="text-gray-300 hover:text-accent transition-colors"><FacebookIcon fontSize="small" /></a>
            <a href="#" className="text-gray-300 hover:text-accent transition-colors"><InstagramIcon fontSize="small" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {["Home", "About Us", "Courses", "Results", "Alumni"].map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase().replace(" ", "-") === "home" ? "" : link.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-300 hover:text-accent transition-colors text-sm"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Our Courses</h4>
          <ul className="space-y-3">
            <li><Link href="/courses" className="text-gray-300 hover:text-accent transition-colors text-sm">11th Commerce</Link></li>
            <li><Link href="/courses" className="text-gray-300 hover:text-accent transition-colors text-sm">12th Commerce</Link></li>
            <li><Link href="/courses" className="text-gray-300 hover:text-accent transition-colors text-sm">CA Foundation</Link></li>
            <li><Link href="/courses" className="text-gray-300 hover:text-accent transition-colors text-sm">CA Intermediate</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <span>📍</span>
              <span>Sudarshan Bunglow Sandeep Nager, Ashok Nagar,<br />Nashik, Maharashtra 422007</span>
            </li>
            <li className="flex items-center gap-3">
              <span>📞</span>
              <span>+91 9881202789</span>
            </li>
            <li className="flex items-center gap-3">
              <span>✉️</span>
              <span>info@tidkeaccountancyclasses.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Tidke Accountancy Classes. All rights reserved.</p>
      </div>
    </footer>
  );
}
