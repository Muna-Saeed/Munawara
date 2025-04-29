export default function Portfolio() {
    return (
      <section className="p-8 bg-gray-100 text-gray-700">
        <h1 className="text-4xl font-bold text-black mb-6">Our Portfolio</h1>
        <p className="text-lg mb-4">Check out some of the amazing projects we’ve worked on:</p>

        <p className="text-lg mb-8">We take pride in our work and are always looking for new challenges.</p>
  
        {/* Portfolio Overview */}
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
                <img src="/portfolio-overview.jpg" alt="Portfolio Overview" className="w-16 h-16 rounded-full" />
                <h2 className="text-2xl font-semibold">Portfolio Overview</h2>
            </div>
            <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">
                View All Projects
            </button>
        </div>

        <p className="text-gray-600 mb-4">Explore our diverse range of projects that showcase our expertise and creativity.</p>
  
        {/* Portfolio Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-white rounded shadow-lg text-center">
                <h3 className="text-2xl font-bold text-sky-800">50+</h3>
                <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="p-6 bg-white rounded shadow-lg text-center">
                <h3 className="text-2xl font-bold text-sky-800">20+</h3>
                <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="p-6 bg-white rounded shadow-lg text-center">
                <h3 className="text-2xl font-bold text-sky-800">10+</h3>
                <p className="text-gray-600">Awards Won</p>
            </div>
        </div>
            
    
            {/* Portfolio Categories */}
        <div className="flex space-x-4 mb-8">
            <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">Web Development</button>
            <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">Mobile Apps</button>
            <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">AI Solutions</button>
            <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">E-Commerce</button>
            <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">UI/UX Design</button>
        </div>
            
    
            {/* Portfolio Highlights */}
        <div className="flex items-center space-x-4 mb-8">
            <img src="/portfolio-highlight.jpg" alt="Portfolio Highlight" className="w-16 h-16 rounded-full" />
            <h2 className="text-2xl font-semibold">Project Highlights</h2>
        </div>

        <p className="text-gray-600 mb-4">Here are some of our standout projects that we are particularly proud of.</p>
  
        {/* Portfolio Highlight Items */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Highlight 1 */}
          <div className="p-6 bg-white rounded shadow-lg">
            <img src="/highlight1.jpg" alt="Highlight 1" className="mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-4">AI-Powered Analytics</h2>
            <p className="text-gray-700 mb-4">
              A cutting-edge analytics platform that leverages AI for data insights.
            </p>
            <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">
              View Project
            </button>
          </div>
  
          {/* Highlight 2 */}
          <div className="p-6 bg-white rounded shadow-lg">
            <img src="/highlight2.jpg" alt="Highlight 2" className="mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-4">Mobile Banking App</h2>
            <p className="text-gray-700 mb-4">
              A secure and user-friendly mobile banking application for a leading bank.
            </p>
            <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">
              View Project
            </button>
          </div>    
  
        {/* Portfolio Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Project 1 */}
          <div className="p-6 bg-white rounded shadow-lg">
            <img src="/project1.jpg" alt="Project 1" className="mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-4">E-Commerce Platform</h2>
            <p className="text-gray-700 mb-4">
              A modern, responsive e-commerce site built for a local retailer.
            </p>
            <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">
              View Project
            </button>
          </div>
  
          {/* Project 2 */}
          <div className="p-6 bg-white rounded shadow-lg">
            <img src="/project2.jpg" alt="Project 2" className="mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-4">AI Chatbot</h2>
            <p className="text-gray-700 mb-4">
              Developed an AI-powered chatbot to enhance customer support experiences.
            </p>
            <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">
              View Project
            </button>
          </div>
        </div>
        </div>
      </section>
    );
  }