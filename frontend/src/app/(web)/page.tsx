import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Munawara - Digital Solutions for Small Businesses</title>
        <meta
          name="description"
          content="Munawara provides affordable web development, SEO services, and AI tools to help small businesses establish an online presence."
        />
      </Head>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 via-white to-sky-200 p-4 md:p-8">
        <Hero />
        <Solutions />

        {/* Start Your Digital Journey Section */}
        <div className="mt-16 bg-white/95 p-8 md:p-12 rounded-2xl shadow-2xl max-w-4xl w-full border border-sky-100">
          <h2 className="text-4xl md:text-5xl font-extrabold text-sky-900 mb-3 tracking-tight text-center drop-shadow">
            Start Your Digital Journey
          </h2>
          <p className="mt-2 text-lg md:text-xl text-sky-800 text-center max-w-2xl mx-auto">
            Transform your business with Munawara&apos;s streamlined process:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {/* Sign Up */}
            <div className="bg-sky-50/80 p-6 border border-sky-100 rounded-2xl flex flex-col items-center shadow transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
              <div className="bg-sky-100 rounded-full p-4 mb-4 shadow group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/icons/signup.svg"
                  alt="Sign up for a Munawara account"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-sky-800 mb-2">Sign Up</h3>
              <p className="text-sky-700 text-center text-base">
                Create your account in minutes with some basic information.
              </p>
            </div>

            {/* Select */}
            <div className="bg-sky-50/80 p-6 border border-sky-100 rounded-2xl flex flex-col items-center shadow transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
              <div className="bg-sky-100 rounded-full p-4 mb-4 shadow group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/icons/select.svg"
                  alt="Select digital services from Munawara"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-sky-800 mb-2">Select</h3>
              <p className="text-sky-700 text-center text-base">
                Browse our catalog of digital services and pick what fits your needs.
              </p>
            </div>

            {/* Transform */}
            <div className="bg-sky-50/80 p-6 border border-sky-100 rounded-2xl flex flex-col items-center shadow transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
              <div className="bg-sky-100 rounded-full p-4 mb-4 shadow group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/icons/transform.svg"
                  alt="Transform your business with Munawara"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-sky-800 mb-2">Transform</h3>
              <p className="text-sky-700 text-center text-base">
                Our expert team customizes the selected services and helps your business grow online.
              </p>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/https://docs.google.com/forms/d/e/1FAIpQLScI4A5j50eCKdTn3FPl9VxreHgOuRp4Wk3SupE_ltr8u70gMQ/viewform"
              className="inline-flex items-center px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow hover:bg-sky-700 hover:shadow-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 text-lg"
            >
              Get Started
              <span className="ml-2 text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
