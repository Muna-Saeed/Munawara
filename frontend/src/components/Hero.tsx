export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-12 bg-gray-100">
      {/* Left Column - Image */}
      <div className="flex justify-center">
        <img
          src="/l.png"
          alt="Empowering Small Businesses in the Digital Age"
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
            Start Today
          </button>
          <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}