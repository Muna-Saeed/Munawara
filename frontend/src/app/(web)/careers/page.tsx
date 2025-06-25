export default function Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-sky-600">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Munawara, we're passionate about innovation and empowering businesses. 
            Explore career opportunities that match your skills and aspirations.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Company Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Why Work With Us */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Why Work With Us?</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We offer a collaborative environment, competitive salaries, and opportunities for growth. 
                Join us in making a difference in the digital world!
              </p>
            </div>

            {/* Our Values */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We believe in integrity, innovation, and teamwork. Our culture fosters creativity 
                and encourages personal development at every level.
              </p>
            </div>

            {/* Current Openings */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Current Openings</h2>
              </div>
              <p className="text-gray-600 mb-6">
                We are currently looking for talented individuals to join our team. 
                Check out the positions below:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Web Developer",
                    description: "We are seeking talented developers experienced in Next.js and Tailwind CSS.",
                    hasApply: true
                  },
                  {
                    title: "Digital Marketer", 
                    description: "Join our team to create and manage campaigns that grow Munawara's client base."
                  },
                  {
                    title: "Graphic Designer",
                    description: "We are looking for a creative designer to help us with branding and marketing materials."
                  },
                  {
                    title: "Data Analyst",
                    description: "Join us to analyze data and provide insights that drive our business decisions."
                  }
                ].map((job, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-sky-300 transition-colors duration-300">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                    {job.hasApply && (
                      <a 
                        href="/contact" 
                        className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium text-sm"
                      >
                        Apply here
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Benefits & Info */}
          <div className="space-y-6">
            {/* How to Apply */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How to Apply</h3>
              <p className="text-gray-600 mb-4">
                Interested candidates can send their resumes to:
              </p>
              <a 
                href="mailto:munawara.tech@gmail.com" 
                className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium"
              >
                munawara.tech@gmail.com
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Health Insurance
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Flexible Work Hours
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Professional Development
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Paid Time Off
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}