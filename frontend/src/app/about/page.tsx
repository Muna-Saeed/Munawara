import Head from 'next/head';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Head>
        <title>Munawara - About Us</title>
        <meta name="description" content="Learn more about Munawara and our mission to empower small businesses with affordable and scalable digital solutions." />
      </Head>
      <section className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <div className="bg-white py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-black mb-6">About Munawara</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We empower small businesses with affordable, scalable digital solutions that drive growth and success in the modern marketplace.
            </p>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Vision */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-black">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the leading digital partner for small businesses, making advanced technology accessible and affordable for entrepreneurs worldwide.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-black">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Empower small businesses with innovative digital solutions that drive growth, enhance customer engagement, and create lasting competitive advantages.
                </p>
              </div>
            </div>

            {/* Our Culture */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <h2 className="text-3xl font-bold text-black mb-6 text-center">Our Culture</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                  <p className="text-gray-600">We believe in the power of teamwork and building strong partnerships with our clients.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600">Constantly exploring new technologies and creative solutions to solve complex challenges.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Passion</h3>
                  <p className="text-gray-600">We're passionate about helping businesses succeed and making a positive impact.</p>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-black mb-8 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <h3 className="text-lg font-semibold mb-2 text-sky-600">Excellence</h3>
                  <p className="text-gray-600 text-sm">Delivering the highest quality solutions that exceed expectations</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-lg font-semibold mb-2 text-green-600">Integrity</h3>
                  <p className="text-gray-600 text-sm">Building trust through honest, transparent relationships</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-lg font-semibold mb-2 text-purple-600">Creativity</h3>
                  <p className="text-gray-600 text-sm">Bringing fresh ideas and unique perspectives to every project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}