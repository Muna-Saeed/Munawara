// Frontend - Components

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Social Media Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Image
              src="/l.png"
              alt="Munawara Logo"
              width={80}
              height={80}
              className="rounded-full shadow-lg mb-2"
            />
            <h3 className="text-lg font-semibold">Get in touch with Munawara</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="https://facebook.com/munawara" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/facebook.svg" alt="Facebook" width={32} height={32} />
              </a>
              <a href="https://instagram.com/munawara" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/instagram.svg" alt="Instagram" width={34} height={34} />
              </a>
              <a href="https:/linkedin.com/munawara" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/linkedin.svg" alt="linkedin" width={32} height={32} />
              </a>
              <a href="https://x.com/munawara" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/X.svg" alt="Twitter" width={34} height={34} />
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799148803!2d-74.25987368720634!3d40.69767006331253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f7635faaffed%3A0xf90e9b5b1d2d4c29!2sMunawara!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold">Learn More</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-gray-200">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><a href="/terms" className="hover:text-gray-200">Terms</a></li>
              <li><a href="/privacy" className="hover:text-gray-200">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Questions?</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><a href="/FAQ" className="hover:text-gray-200">FAQ</a></li>
              <li><a href="/help" className="hover:text-gray-200">Help</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">More</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><a href="/careers" className="hover:text-gray-200">Careers</a></li>
              <li><a href="/press" className="hover:text-gray-200">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <p className="text-center mt-8 text-gray-400">
          &copy; {new Date().getFullYear()} Munawara. All rights reserved.
        </p>
      </div>
    </footer>
  );
}