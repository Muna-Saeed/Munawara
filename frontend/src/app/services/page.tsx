export default function Services() {
  return (
    <section className="p-8 bg-gray-100 text-gray-700">
      <h1 className="text-4xl font-bold text-black mb-6">Our Services</h1>
      <p className="text-lg mb-4">
        At Munawara, we offer a range of services tailored to empower small businesses, entrepreneurs, and professionals with affordable, scalable digital solutions.
      </p>
      <p className="text-lg mb-4">
        Our mission is to help you establish a strong online presence, enhance your brand visibility, and drive growth through innovative technology.
      </p>
      <p className="text-lg mb-4">
        Whether you need a stunning website, effective SEO strategies, or AI-powered tools, we have the expertise to help you succeed.
      </p>
      <p className="text-lg mb-4">
        Explore our services below to find the perfect solution for your business needs.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Web Development Service */}
        <div className="p-6 bg-white rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Web Development</h2>
          <p className="text-gray-700 mb-4">
            Build modern, responsive, and visually appealing websites to establish your online presence and connect with your audience.
          </p>
          <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">
            Learn More
          </button>
        </div>

        {/* SEO Service */}
        <div className="p-6 bg-white rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-4">SEO Services</h2>
          <p className="text-gray-700 mb-4">
            Improve your website&rsquo;s visibility and rank higher in search engines with tailored SEO strategies for your business.
          </p>
          <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">
            Learn More
          </button>
        </div>

        {/* AI Tools Service */}
        <div className="p-6 bg-white rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-4">AI Tools</h2>
          <p className="text-gray-700 mb-4">
            Harness the power of AI with tools like chatbots and recommendation engines to enhance customer engagement and streamline workflows.
          </p>
          <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">
            Learn More
          </button>
        </div>
      </div>

      {/* Custom Solutions */}
      <div className="mt-12 p-6 bg-sky-800 text-white rounded shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Custom Digital Solutions</h2>
        <p className="text-lg mb-4">
          Looking for something unique? Contact us for bespoke services that meet your specific needs and goals.
        </p>
        <a href="/contact" className="px-4 py-2 bg-white text-sky-800 rounded hover:bg-gray-100">
          Get in Touch
        </a>
      </div>
    </section>
  );
}