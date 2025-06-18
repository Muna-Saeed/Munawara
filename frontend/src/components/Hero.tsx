import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-white to-blue-100 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <Image
              src="/logo.png"
              alt="Munawara - Empowering Small Businesses in the Digital Age"
              width={360}
              height={360}
              className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-2xl border-4 border-sky-200 group-hover:scale-105 transition-transform duration-300"
              priority
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-4 py-2 rounded-full shadow text-sky-700 font-semibold text-sm backdrop-blur-md">
              Munawara Digital Solutions
            </div>
          </div>
        </div>
        {/* Right Column - Text Content */}
        <div className="bg-white/90 p-8 rounded-2xl shadow-xl flex flex-col items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-800 mb-5 leading-tight tracking-tight">
            Empower Your Business
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
            Affordable, scalable digital solutions for small businesses, entrepreneurs, and professionals. Grow, manage, and thrive in the digital age with Munawara.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Link
              href="/services"
              className="inline-block px-7 py-3 bg-sky-700 text-white font-semibold rounded-lg shadow hover:bg-sky-800 hover:shadow-lg transition-colors duration-200 text-center w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              Start Today
            </Link>
            <Link
              href="/about"
              className="inline-block px-7 py-3 bg-white text-sky-700 font-semibold rounded-lg border-2 border-sky-700 shadow hover:bg-sky-50 hover:text-sky-900 transition-colors duration-200 text-center w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}