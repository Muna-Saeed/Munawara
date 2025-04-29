export default function Testimonials() {
    return (
      <section className="p-8 bg-gray-100 text-gray-700">
        <h1 className="text-4xl font-bold text-black mb-6">Testimonials</h1>
        <p className="text-lg mb-4">See what our clients have to say about Munawara.</p>
        <p className="text-lg mb-8">We pride ourselves on delivering exceptional service and results.</p>
  
        {/* Client Logos */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">  
            <img src="/images/client1.png" alt="Client 1" className="h-16 w-auto" />
            <img src="/images/client2.png" alt="Client 2" className="h-16 w-auto" />
            <img src="/images/client3.png" alt="Client 3" className="h-16 w-auto" />
            <img src="/images/client4.png" alt="Client 4" className="h-16 w-auto" />
        </div>
  
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Testimonial 1 */}
          <div className="p-6 bg-white rounded shadow-lg">
            <p className="italic text-gray-700 mb-4">
              "Munawara transformed my small business with their expert web development and AI tools. Highly recommend!"
            </p>
            <p className="font-semibold text-black">- John Doe, CEO</p>
          </div>
  
          {/* Testimonial 2 */}
          <div className="p-6 bg-white rounded shadow-lg">
            <p className="italic text-gray-700 mb-4">
              "Their SEO services helped my website rank #1 on Google within months. Incredible team!"
            </p>
            <p className="font-semibold text-black">- Jane Smith, Entrepreneur</p>
          </div>

          {/* Testimonial 3 */}
            <div className="p-6 bg-white rounded shadow-lg">
                <p className="italic text-gray-700 mb-4">
                "The AI tools provided by Munawara have streamlined our operations and improved efficiency."
                </p>
                <p className="font-semibold text-black">- Sarah Johnson, Operations Manager</p>
            </div>
        </div>
      </section>
    );
  }