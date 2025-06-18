import Head from 'next/head';

const categories = [
  {
    name: "Business",
    description: "Explore articles on business strategies, growth, and management.",
    color: "bg-blue-50",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "Technology",
    description: "Stay updated on the latest tech trends and innovations.",
    color: "bg-green-50",
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Marketing",
    description: "Discover marketing strategies and digital growth hacks.",
    color: "bg-purple-50",
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
      </svg>
    ),
  },
];

const posts = [
  {
    title: "How to Scale Your Business",
    description: "Learn tips and tricks for scaling small businesses in a competitive market.",
    date: "May 10, 2024",
    category: "Business",
    image: "/images/blog/scale-business.jpg",
  },
  {
    title: "The Power of AI Tools",
    description: "Discover how AI tools can transform your workflows and boost efficiency.",
    date: "April 28, 2024",
    category: "Technology",
    image: "/images/blog/ai-tools.jpg",
  },
  {
    title: "Marketing Strategies for 2023",
    description: "Explore the latest marketing strategies to stay ahead in 2023.",
    date: "March 15, 2024",
    category: "Marketing",
    image: "/images/blog/marketing-2023.jpg",
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Munawara - Blog</title>
        <meta name="description" content="Read the latest articles and updates from Munawara on digital solutions and services." />
      </Head>
      <section className="py-12 px-4 sm:px-8 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl mb-2 text-gray-600">
            Explore the latest insights, news, and updates from Munawara.
          </p>
          <p className="text-lg mb-10 text-gray-500">
            Stay informed with our expert articles and resources designed to help you succeed.
          </p>

          {/* Featured Post */}
          <div className="relative bg-white p-8 rounded-2xl shadow-xl mb-12 flex flex-col md:flex-row items-center gap-8 transition-shadow hover:shadow-2xl">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-3 text-sky-800">The Future of Business</h2>
              <p className="text-gray-700 mb-5 text-lg">
                Discover the trends and technologies shaping the future of business in our latest article.
              </p>
              <button className="inline-flex items-center px-5 py-2.5 bg-sky-700 text-white rounded-lg font-medium hover:bg-sky-800 transition duration-200 shadow">
                Read More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="w-full md:w-64 h-40 md:h-48 rounded-xl overflow-hidden bg-sky-100 flex items-center justify-center">
              <img
                src="/images/blog/featured.jpg"
                alt="The Future of Business"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((cat, idx) => (
                <div
                  key={cat.name}
                  className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col items-start ${cat.color}`}
                >
                  <div className="mb-3">{cat.icon}</div>
                  <h4 className="text-lg font-bold mb-2 text-gray-900">{cat.name}</h4>
                  <p className="text-gray-600 mb-4">{cat.description}</p>
                  <button className="mt-auto px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-800 transition duration-200 text-sm font-medium">
                    View Articles
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Latest Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post, idx) => (
                <div
                  key={post.title}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200 flex flex-col"
                >
                  <div className="h-40 rounded-t-xl overflow-hidden bg-gray-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 flex flex-col p-6">
                    <span className="text-xs text-sky-700 font-semibold uppercase mb-2 tracking-wide">{post.category}</span>
                    <h4 className="text-lg font-bold mb-2 text-gray-900">{post.title}</h4>
                    <p className="text-gray-600 mb-4 flex-1">{post.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-gray-400">{post.date}</span>
                      <button className="inline-flex items-center px-3 py-1.5 bg-sky-700 text-white rounded hover:bg-sky-800 transition duration-200 text-xs font-medium">
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}