//  Affordable Solutions Section 
import Image from 'next/image';

export default function Solutions() {
  return (
      <div className="mt-12 bg-black p-8 rounded shadow-md w-full max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white">Affordable Solutions</h2>
        <p className="mt-4 text-lg text-gray-300">
          Munawara provides affordable web development, SEO services, and AI tools to ensure cultural relevance and help small businesses establish an online presence.
        </p>
        <button className="mt-6 px-4 py-2 bg-white  text-blue-500 rounded hover:bg-sky-700 hover:text-white flex items-center">
          Learn More 
          <span className="ml-2">→</span>
        </button>

        {/* Services List */}
        <div className="text-black grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Web Services */}
          <div className="bg-white p-4 border rounded flex flex-col items-center">
            <Image src="/icons/web.ico" alt="Web development services icon" width={50} height={50} className="transition-transform duration-300 hover:scale-110"/>
            <h3 className="text-xl font-semibold">Web Services</h3>
            <p className="text-gray-700">
              Get a modern, responsive website developed affordably to establish your online presence.
            </p>
            <button className="mt-6 px-4 py-2 bg-white border-2 border-blue-200 text-blue-500 rounded hover:bg-sky-700 hover:text-white flex items-center">
              Learn More 
              <span className="ml-2">→</span>
            </button>
          </div>

          {/* AI Tools */}
          <div className="bg-white p-4 border rounded flex flex-col items-center">
            <Image src="/icons/AI.ico" alt="AI tools and chatbot icon" width={50} height={50} className="transition-transform duration-300 hover:scale-110"/>
            <h3 className="text-xl font-semibold">AI Tools</h3>
            <p className="text-gray-700">
              Leverage AI innovations like chatbots and recommendation engines to boost conversions affordably.
            </p>
            <a href='/ai-tools'>
            <button className="mt-6 px-4 py-2 bg-white border-2 border-blue-200 text-blue-500 rounded hover:bg-sky-700 hover:text-white flex items-center">
              Learn More 
              <span className="ml-2">→</span>
            </button>
            </a>
          </div>

          {/* SEO Services */}
          <div className="bg-white p-4 border rounded flex flex-col items-center">
            <Image src="/icons/seo.ico" alt="SEO services icon" width={50} height={50} className="transition-transform duration-300 hover:scale-110"/>
            <h3 className="text-xl font-semibold">SEO Services</h3>
            <p className="text-gray-700">
              Improve your search engine ranking with our professional white-hat SEO services tailored for small businesses.
            </p>
            <button className="mt-6 px-4 py-2 bg-white border-2 border-blue-200 text-blue-500 rounded hover:bg-sky-700 hover:text-white flex items-center">
              Learn More 
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
  );
}