'use client';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';


const featuredProject = {
  image: '/hotel-system.png',
  title: 'Munawara Hotel Management System',
  description:
    'A comprehensive, enterprise-grade solution designed to streamline hotel operations. This system features real-time room booking, guest management, and a user-friendly interface for both staff and customers, demonstrating our ability to build complex, industry-specific applications.',
  tags: ['Hospitality', 'Web Application', 'Booking Engine'],
  liveLink: 'https://hotel-system-nine.vercel.app/',
  caseStudyLink: 'https://hotel-system-nine.vercel.app/',
};

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    title: 'E-Commerce Platform for a Local Retailer',
    description:
      'A clean and responsive e-commerce platform designed to help a local business expand its reach. Features include product management, secure checkout, and a mobile-first design.',
    category: 'E-Commerce',
    link: '#',
  },
  {
    image: 'https://media.istockphoto.com/id/1479572879/photo/doctor-ai-artificial-intelligence-in-modern-medical-technology-and-iot-automation-doctor.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ix3w4TBMqR_cnEutWumLXMA_w8t4IQBRXXIalsjlR_w=',
    title: 'Appointment System for a Medical Clinic',
    description:
      'A patient-friendly booking system that allows users to schedule appointments online, reducing administrative workload and improving the patient experience.',
    category: 'Healthcare',
    link: '#',
  },
  {
    // UPDATED: Real placeholder image URL
    image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    title: 'AI-Powered Customer Support Chatbot',
    description:
      'An intelligent, AI-powered chatbot developed to enhance customer support by providing instant answers and resolving common issues automatically.',
    category: 'AI Solutions',
    link: '#',
  },
];

// --- Component Section ---

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Our Work - Munawara</title>
        <meta
          name="description"
          content="Explore the portfolio of Munawara. See our work in web development, e-commerce, and custom software solutions."
        />
      </Head>
      <main className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Our Capabilities in Action
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              We build professional, tailor-made digital solutions that solve real-world problems.
              Explore some examples of our work below.
            </p>
          </div>

          {/* Featured Project Section */}
          <div className="mb-20">
            <div className="group grid grid-cols-1 md:grid-cols-5 gap-8 items-center bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              {/* Image */}
              <div className="md:col-span-3">
                <Image
                  src={featuredProject.image}
                  alt={`Screenshot of ${featuredProject.title}`}
                  width={1600}
                  height={1000}
                  className="rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Details */}
              <div className="md:col-span-2">
                <h3 className="text-sm font-bold uppercase text-blue-600 tracking-wider">
                  Featured Project
                </h3>
                <h2 className="text-3xl font-bold text-slate-900 mt-2">
                  {featuredProject.title}
                </h2>
                <p className="text-slate-600 mt-4 text-base">
                  {featuredProject.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span key={tag} className="inline-block bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <Link href={featuredProject.liveLink} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition">
                      View Live Demo
                    </a>
                  </Link>
                  <Link href={featuredProject.caseStudyLink} passHref legacyBehavior>
                    <a className="font-semibold text-blue-600 hover:text-blue-800">
                      Read Case Study &rarr;
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">
                More of Our Work
              </h2>
              <p className="mt-3 max-w-xl mx-auto text-md text-slate-600">
                Here are other examples demonstrating our versatility across different industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((p) => (
                <div
                  key={p.title}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden border border-slate-200"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={p.image}
                      alt={`Screenshot of ${p.title}`}
                      width={800}
                      height={500}
                      className="object-cover w-full h-48 transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-sm font-semibold text-blue-600">
                      {p.category}
                    </h3>
                    <h4 className="text-xl font-bold text-slate-800 mt-1 group-hover:text-blue-700">
                      {p.title}
                    </h4>
                    <p className="text-slate-600 mt-2 flex-grow">
                      {p.description}
                    </p>
                    <div className="mt-4">
                      <Link href={p.link} passHref legacyBehavior>
                        <a className="font-semibold text-blue-600 hover:text-blue-800">
                          View Project Details &rarr;
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Let's build something great together.
            </p>
            <div className="mt-8">
              <Link href="/contact" passHref legacyBehavior>
                <a className="inline-block px-10 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-700 transition">
                  Start Your Project
                </a>
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}