export default function Press() {
    return (
      <section className="p-8 bg-gray-100 text-gray-700">
        <h1 className="text-4xl font-bold text-black mb-6">Press</h1>
        <p className="text-lg mb-4">
          Explore the latest news, updates, and achievements from Munawara:
        </p>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Munawara Launches Affordable Web Solutions</h2>
            <p>
              Munawara is revolutionizing the way small businesses access scalable digital tools.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Innovative AI Tools Now Available</h2>
            <p>
              Our cutting-edge AI tools are designed to streamline business operations. Learn more <a href="/services" className="text-sky-800 hover:underline">here</a>.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Latest Articles</h2>
          <a href="/press/archive" className="text-sky-800 hover:underline">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold">Munawara Partners with Local Businesses</h3>
            <p className="text-gray-600">Published on: 2023-10-01</p>
            <p className="text-gray-700">Munawara is proud to announce its partnership with local businesses to enhance community engagement.</p>
          </div>
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold">Munawara Launches New AI Tools</h3>
            <p className="text-gray-600">Published on: 2023-09-15</p>
            <p className="text-gray-700">Discover the latest AI tools from Munawara designed to streamline your business operations.</p>
          </div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Munawara Expands Global Reach</h3>
                <p className="text-gray-600">Published on: 2023-08-20</p>
                <p className="text-gray-700">Munawara is excited to announce its expansion into new international markets.</p>
            </div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Munawara's Commitment to Sustainability</h3>
                <p className="text-gray-600">Published on: 2023-07-10</p>
                <p className="text-gray-700">Learn about Munawara's initiatives to promote sustainability in the tech industry.</p>
            </div>
        </div>
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Press Releases</h2>
            <a href="/press/releases" className="text-sky-800 hover:underline">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Munawara Announces New Funding Round</h3>
                <p className="text-gray-600">Published on: 2023-09-01</p>
                <p className="text-gray-700">Munawara has successfully closed a new funding round to accelerate growth.</p>
            </div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Munawara's CEO Interviewed by TechCrunch</h3>
                <p className="text-gray-600">Published on: 2023-08-15</p>
                <p className="text-gray-700">Read the exclusive interview with Munawara's CEO discussing the future of technology.</p>
            </div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Munawara's New Office Opening</h3>
                <p className="text-gray-600">Published on: 2023-07-25</p>
                <p className="text-gray-700">Join us for the grand opening of Munawara's new office in downtown.</p>
            </div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Munawara's Community Engagement Program</h3>
                <p className="text-gray-600">Published on: 2023-06-30</p>
                <p className="text-gray-700">Munawara is launching a new program to engage with the local community.</p>
            </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Media Coverage</h2>
          <a href="/press/media" className="text-sky-800 hover:underline">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Munawara Featured in Forbes</h3>
                <p className="text-gray-600">Published on: 2023-09-10</p>
                <p className="text-gray-700">Forbes highlights Munawara's innovative approach to technology.</p>
            </div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Munawara's CEO on Bloomberg</h3>
                <p className="text-gray-600">Published on: 2023-08-05</p>
                <p className="text-gray-700">Bloomberg interviews Munawara's CEO about the future of AI.</p>
            </div>  
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Munawara's Impact on Local Economy</h3>
                <p className="text-gray-600">Published on: 2023-07-15</p>
                <p className="text-gray-700">Local news covers Munawara's positive impact on the local economy.</p>
            </div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Munawara's Sustainability Efforts</h3>
                <p className="text-gray-600">Published on: 2023-06-20</p>
                <p className="text-gray-700">Media coverage of Munawara's commitment to sustainability.</p>
            </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Upcoming Events</h2>
          <a href="/press/events" className="text-sky-800 hover:underline">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Munawara Tech Conference 2023</h3>
                <p className="text-gray-600">Date: 2023-10-15</p>
                <p className="text-gray-700">Join us for our annual tech conference featuring industry leaders.</p>
            </div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Webinar on AI Innovations</h3>
                <p className="text-gray-600">Date: 2023-11-01</p>
                <p className="text-gray-700">Register for our upcoming webinar on the latest AI innovations.</p>
            </div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">        
                <h3 className="text-xl font-semibold">Community Engagement Day</h3>
                <p className="text-gray-600">Date: 2023-11-20</p>
                <p className="text-gray-700">Join us for a day of community engagement and activities.</p>
            </div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Sustainability Workshop</h3>
                <p className="text-gray-600">Date: 2023-12-05</p>
                <p className="text-gray-700">Participate in our workshop focused on sustainability practices.</p>
            </div>
        </div>
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Recent News</h2>
            <a href="/press/news" className="text-sky-800 hover:underline">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Munawara's New Office Opening</h3>
                <p className="text-gray-600">Published on: 2023-09-25</p>
                <p className="text-gray-700">Join us for the grand opening of Munawara's new office in downtown.</p>
            </div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Munawara's Community Engagement Program</h3>
                <p className="text-gray-600">Published on: 2023-09-10</p>
                <p className="text-gray-700">Munawara is launching a new program to engage with the local community.</p>
            </div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Munawara's Commitment to Sustainability</h3>
                <p className="text-gray-600">Published on: 2023-08-30</p>
                <p className="text-gray-700">Learn about Munawara's initiatives to promote sustainability in the tech industry.</p>
            </div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Munawara's Impact on Local Economy</h3>
                <p className="text-gray-600">Published on: 2023-08-15</p>
                <p className="text-gray-700">Local news covers Munawara's positive impact on the local economy.</p>
            </div>
        </div>
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <a href="/contact" className="text-sky-800 hover:underline">Get in Touch</a>
        </div>
        <p className="text-gray-700 mb-4">For media inquiries, please contact us at <a href="mailto:munawara.tech@gmail.com" className="text-sky-800 hover:underline">Munawara</a>.</p>
        <p className="text-gray-700 mb-4">Follow us on our social media channels for the latest updates:</p>
        <ul className="list-disc list-inside mb-4">
          <li><a href="https://x.com/munawara" className="text-sky-800 hover:underline">Twitter</a></li>
          <li><a href="https://linkedin.com/company/munawara" className="text-sky-800 hover:underline">LinkedIn</a></li>
          <li><a href="https://facebook.com/munawara" className="text-sky-800 hover:underline">Facebook</a></li>
          <li><a href="https://instagram.com/munawara" className="text-sky-800 hover:underline">Instagram</a></li>
        </ul>
        <p className="text-gray-700 mb-4">Stay tuned for more updates and exciting news from Munawara!</p>
        <p className="text-gray-700 mb-4">For more information, visit our <a href="/about" className="text-sky-800 hover:underline">About Us</a> page.</p>
        <p className="text-gray-700 mb-4">Check out our <a href="/blog" className="text-sky-800 hover:underline">Blog</a> for insights and articles.</p>
        <p className="text-gray-700 mb-4">Explore our <a href="/services" className="text-sky-800 hover:underline">Services</a> to see how we can help you.</p>
        <p className="text-gray-700 mb-4">Visit our <a href="/careers" className="text-sky-800 hover:underline">Careers</a> page to join our team.</p>       
      
      </section>
    );
  }