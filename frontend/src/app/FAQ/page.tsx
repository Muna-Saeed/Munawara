export default function FAQ() {
    return (
      <section className="p-8 bg-gray-100 text-gray-700">
        <h1 className="text-4xl font-bold text-black mb-4">FAQ</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">What services does Munawara offer?</h2>
            <p className="text-gray-700">
              We provide web development, SEO services, AI tools, and more to help small businesses grow.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">How can I get started?</h2>
            <p className="text-gray-700">
              Click “Start Today” on our homepage or contact us for personalized assistance.
            </p>
          </div>
            <div>
                <h2 className="text-lg font-semibold">What is your pricing model?</h2>
                <p className="text-gray-700">
                We offer competitive pricing tailored to your specific needs. Contact us for a quote.
                </p>
            </div>
            <div>
                <h2 className="text-lg font-semibold">Do you offer support after project completion?</h2>
                <p className="text-gray-700">
                Yes, we provide ongoing support and maintenance for all our projects.
                </p>
            </div>
            <div>
                <h2 className="text-lg font-semibold">Can I see examples of your work?</h2>
                <p className="text-gray-700">
                Absolutely! Check out our portfolio on our website to see our previous projects.
                </p>
            </div>
            <div>
                <h2 className="text-lg font-semibold">How do I contact you?</h2>
                <p className="text-gray-700">
                You can reach us through the contact form on our website or email us directly at
                <br />
                <strong>Email:</strong>
                <a href="mailto:munawara.tech@gmail.com" className="text-blue-600 hover:underline">Munawara</a>
                <br />
                <strong>Phone:</strong> +251 (946) 809-925
                <br />
                <strong>Address:</strong> Addis Ababa, Ethiopia
                <br />
                <strong>Website:</strong>
                <a href="https://munawara.tech" className="text-blue-600 hover:underline">munawara.tech</a>
                </p>
        </div>
        <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
                Contact Us
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
                Learn More
            </button>
        </div>
        </div>
      </section>
    );
  }