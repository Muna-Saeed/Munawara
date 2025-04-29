export default function Blog() {
    return (
      <section className="p-8 bg-gray-100 text-gray-700">
        <h1 className="text-4xl font-bold text-black mb-6">Blog</h1>
        <p className="text-lg mb-4">
          Explore the latest insights, news, and updates from Munawara.
        </p>
        <p className="text-lg mb-8">
          Stay informed with our expert articles and resources designed to help you succeed.
        </p>

        {/* Featured Post */}
        <div className="bg-white p-6 rounded shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">The Future of Business</h2>
            <p className="text-gray-700 mb-4">
                Discover the trends and technologies shaping the future of business in our latest article.
            </p>
            <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">
                Read More
            </button>
        </div>
            
    
            {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Category 1 */}
            <div className="p-6 bg-white rounded shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Business</h2>
                <p className="text-gray-700 mb-4">
                Explore articles on business strategies, growth, and management.
                </p>
                <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">
                View Articles
                </button>       
            </div>
        </div>
        
        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Post 1 */}
          <div className="p-6 bg-white rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-4">How to Scale Your Business</h2>
            <p className="text-gray-700 mb-4">
              Learn tips and tricks for scaling small businesses in a competitive market.
            </p>
            <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">
              Read More
            </button>
          </div>
  
          {/* Post 2 */}
          <div className="p-6 bg-white rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-4">The Power of AI Tools</h2>
            <p className="text-gray-700 mb-4">
              Discover how AI tools can transform your workflows and boost efficiency.
            </p>
            <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">
              Read More
            </button>
          </div>

          {/* Post 3 */}
          <div className="p-6 bg-white rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Marketing Strategies for 2023</h2>
            <p className="text-gray-700 mb-4">  
                Explore the latest marketing strategies to stay ahead in 2023.
            </p>
            <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">
                Read More
            </button>
          </div>
          </div>
      </section>
    );
  }