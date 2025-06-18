// Affordable Solutions Section
import Image from "next/image";
import Link from "next/link";

export default function Solutions() {
  return (
    <section className="mt-16 bg-gradient-to-br from-sky-900 via-black to-sky-800 p-10 rounded-2xl shadow-2xl w-full max-w-4xl mx-auto text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-400 via-transparent to-transparent" />
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow">
        Affordable Solutions
      </h2>
      <p className="mt-2 text-lg md:text-xl text-sky-100 max-w-2xl mx-auto">
        Munawara provides affordable web development, SEO services, and AI tools to ensure cultural relevance and help small businesses establish an online presence.
      </p>
      <Link
        href="/services"
        className="mt-7 inline-flex items-center justify-center px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow hover:bg-sky-700 hover:shadow-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 text-lg"
      >
        Learn More
        <span className="ml-2 text-xl">→</span>
      </Link>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Web Services */}
        <div className="bg-white/95 p-6 border border-sky-100 rounded-2xl flex flex-col items-center shadow transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
          <div className="bg-sky-50 rounded-full p-3 mb-3 shadow group-hover:scale-110 transition-transform duration-300">
            <Image
              src="/icons/web.ico"
              alt="Web development services icon"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-sky-800 mb-2">Web Services</h3>
          <p className="text-gray-700 mb-5 text-base">
            Get a modern, responsive website developed affordably to establish your online presence.
          </p>
          <Link
            href="/services#web"
            className="mt-auto inline-flex items-center px-4 py-2 bg-sky-50 border-2 border-sky-200 text-sky-700 font-medium rounded hover:bg-sky-700 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Learn More
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* AI Tools */}
        <div className="bg-white/95 p-6 border border-sky-100 rounded-2xl flex flex-col items-center shadow transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
          <div className="bg-sky-50 rounded-full p-3 mb-3 shadow group-hover:scale-110 transition-transform duration-300">
            <Image
              src="/icons/AI.ico"
              alt="AI tools and chatbot icon"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-sky-800 mb-2">AI Tools</h3>
          <p className="text-gray-700 mb-5 text-base">
            Leverage AI innovations like chatbots and recommendation engines to boost conversions affordably.
          </p>
          <Link
            href="/ai-tools"
            className="mt-auto inline-flex items-center px-4 py-2 bg-sky-50 border-2 border-sky-200 text-sky-700 font-medium rounded hover:bg-sky-700 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Learn More
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* SEO Services */}
        <div className="bg-white/95 p-6 border border-sky-100 rounded-2xl flex flex-col items-center shadow transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
          <div className="bg-sky-50 rounded-full p-3 mb-3 shadow group-hover:scale-110 transition-transform duration-300">
            <Image
              src="/icons/seo.ico"
              alt="SEO services icon"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-sky-800 mb-2">SEO Services</h3>
          <p className="text-gray-700 mb-5 text-base">
            Improve your search engine ranking with our professional white-hat SEO services tailored for small businesses.
          </p>
          <Link
            href="/services#seo"
            className="mt-auto inline-flex items-center px-4 py-2 bg-sky-50 border-2 border-sky-200 text-sky-700 font-medium rounded hover:bg-sky-700 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Learn More
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}