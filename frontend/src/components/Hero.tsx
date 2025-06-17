import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-12 bg-gray-100">
      {/* Left Column - Image */}
      <div className="flex justify-center">
        <Image
          src="/logo.png"
          alt="Empowering Small Businesses in the Digital Age"
          width={400}
          height={400}
          className="w-full max-w-sm rounded-lg shadow-lg"
        />
      </div>
      {/* Right Column - Text Content */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Empower Your Business
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
          Get affordable and scalable digital solutions tailored for small
          businesses, entrepreneurs, and professionals to help grow and manage
          your venture.
        </p>
        <div className="flex gap-4">
          <a
            href="/services"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
          >
            Start Today
          </a>
          <a
            href="/about"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}