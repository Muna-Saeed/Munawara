import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-12 bg-gray-100">
      {/* Left Column - Image */}
      <div className="flex justify-center">
        <Image
          src="/l.png"
          alt="Empowering Small Businesses in the Digital Age"
          width={400}
          height={400}
          className="w-full max-w-sm rounded-lg shadow-lg"
        />
      </div>

      {/* Right Column - Text Content */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Empower Your Business
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to Munawara, where creativity meets technology. Explore modern web development and innovative solutions.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Get affordable and scalable digital solutions tailored for small businesses, entrepreneurs, and professionals to help grow and manage your venture.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScI4A5j50eCKdTn3FPl9VxreHgOuRp4Wk3SupE_ltr8u70gMQ/viewform">Start Today</a>
          </button>
          <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}