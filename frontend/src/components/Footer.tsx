// Frontend - Components

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-900 via-sky-800 to-sky-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info & Social Media */}
          <div className="text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <span className="inline-flex items-center justify-center bg-white/90 rounded-full shadow-lg border-2 border-sky-400 hover:scale-105 transition-transform duration-200 mb-4" style={{ width: 80, height: 80 }}>
                <Image
                  src="/logo.png"
                  alt="Munawara company logo"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </span>
              <h3 className="text-xl font-bold text-sky-100 mb-3">Get in touch with Munawara</h3>
              <p className="text-gray-300 mb-4 max-w-xs">
                Empowering small businesses with affordable digital solutions
              </p>
              <div className="flex gap-4">
                {[
                  { href: "https://facebook.com/munawara.tech", icon: "/icons/facebook.svg", alt: "Facebook" },
                  { href: "https://instagram.com/munawara.tech", icon: "/icons/instagram.svg", alt: "Instagram" },
                  { href: "https://linkedin.com/company/munawara", icon: "/icons/linkedin.svg", alt: "LinkedIn" },
                  { href: "https://x.com/munawara", icon: "/icons/X.svg", alt: "X (Twitter)" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-800 hover:bg-sky-600 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label={`Follow us on ${social.alt}`}
                  >
                    <Image src={social.icon} alt={`${social.alt} social media icon`} width={24} height={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-sky-100 mb-4 border-b border-sky-600 pb-2">Learn More</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-300 hover:text-sky-300 transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  <span className="ml-2">About Us</span>
                </Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-sky-300 transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  <span className="ml-2">Contact</span>
                </Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-sky-300 transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  <span className="ml-2">Services</span>
                </Link></li>
                <li><Link href="/careers" className="text-gray-300 hover:text-sky-300 transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  <span className="ml-2">Careers</span>
                </Link></li>
                <li><Link href="/press" className="text-gray-300 hover:text-sky-300 transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  <span className="ml-2">Press</span>
                </Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-sky-100 mb-4 border-b border-sky-600 pb-2">Support</h3>
              <ul className="space-y-3">
                <li><Link href="/faq" className="text-gray-300 hover:text-sky-300 transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  <span className="ml-2">FAQ</span>
                </Link></li>
                <li><Link href="/help" className="text-gray-300 hover:text-sky-300 transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  <span className="ml-2">Help Center</span>
                </Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-sky-300 transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  <span className="ml-2">Get Support</span>
                </Link></li>
              </ul>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-sky-100 mb-4 border-b border-sky-600 pb-2">Our Location</h3>
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1234567890123!2d38.7890123456789!3d8.9876543210987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab7b7b%3A0x1234567890abcdef!2sKality%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full"
                title="Munawara office location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-sky-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Munawara. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-sky-300 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-sky-300 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-sky-300 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}