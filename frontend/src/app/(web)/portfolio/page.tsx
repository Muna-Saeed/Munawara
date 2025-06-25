'use client';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const categories = [
  'Web Development',
  'Mobile Apps',
  'AI Solutions',
  'E-Commerce',
  'UI/UX Design',
];

const highlights = [
  {
    image: '/highlight1.jpg',
    title: 'AI-Powered Analytics',
    desc: 'A cutting-edge analytics platform that leverages AI for data insights.',
    link: '#',
  },
  {
    image: '/highlight2.jpg',
    title: 'Mobile Banking App',
    desc: 'A secure and user-friendly mobile banking application for a leading bank.',
    link: '#',
  },
];

const projects = [
  {
    image: '/project1.jpg',
    title: 'E-Commerce Platform',
    desc: 'A modern, responsive e-commerce site built for a local retailer.',
    link: '#',
    category: 'E-Commerce',
  },
  {
    image: '/project2.jpg',
    title: 'AI Chatbot',
    desc: 'Developed an AI-powered chatbot to enhance customer support experiences.',
    link: '#',
    category: 'AI Solutions',
  },
  // Add more projects as needed
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory && selectedCategory !== 'All'
      ? projects.filter((p) => p.category === selectedCategory)
      : projects;

  return (
    <>
      <Head>
        <title>Munawara - Our Portfolio</title>
        <meta
          name="description"
          content="Explore Munawara's portfolio of projects, including web development, mobile apps, AI solutions, and more."
        />
      </Head>
      <section className="min-h-screen bg-gray-100 text-gray-700 px-2 py-10 flex items-center justify-center">
        <div className="w-full max-w-6xl bg-white rounded-xl shadow-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/portfolio-overview.jpg"
                alt="Circular portfolio overview image for Munawara"
                width={64}
                height={64}
                className="rounded-full border-2 border-sky-700"
                priority
              />
              <div>
                <h1 className="text-4xl font-bold text-sky-800 mb-1">Our Portfolio</h1>
                <p className="text-gray-600 text-lg">
                  Explore our diverse range of projects that showcase our expertise and creativity.
                </p>
              </div>
            </div>
            <Link
              href="#projects"
              className="px-6 py-3 bg-sky-700 text-white rounded-lg font-semibold shadow hover:bg-sky-800 transition"
            >
              View All Projects
            </Link>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-sky-50 rounded-lg shadow text-center">
              <h3 className="text-3xl font-extrabold text-sky-800 mb-1">50+</h3>
              <p className="text-gray-700">Projects Completed</p>
            </div>
            <div className="p-6 bg-sky-50 rounded-lg shadow text-center">
              <h3 className="text-3xl font-extrabold text-sky-800 mb-1">20+</h3>
              <p className="text-gray-700">Happy Clients</p>
            </div>
            <div className="p-6 bg-sky-50 rounded-lg shadow text-center">
              <h3 className="text-3xl font-extrabold text-sky-800 mb-1">10+</h3>
              <p className="text-gray-700">Awards Won</p>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            <button
              className={`px-4 py-2 rounded-lg font-semibold transition border ${
                !selectedCategory
                  ? 'bg-sky-700 text-white border-sky-700'
                  : 'bg-white text-sky-700 border-sky-700 hover:bg-sky-50'
              }`}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-lg font-semibold transition border ${
                  selectedCategory === cat
                    ? 'bg-sky-700 text-white border-sky-700'
                    : 'bg-white text-sky-700 border-sky-700 hover:bg-sky-50'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Highlights */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/portfolio-highlight.jpg"
                alt="Portfolio highlight image for Munawara"
                width={48}
                height={48}
                className="rounded-full border-2 border-sky-700"
              />
              <h2 className="text-2xl font-bold text-sky-800">Project Highlights</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Here are some of our standout projects that we are particularly proud of.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((h, idx) => (
                <div
                  key={h.title}
                  className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col"
                >
                  <Image
                    src={h.image}
                    alt={`Screenshot of ${h.title}`}
                    width={500}
                    height={320}
                    className="mb-4 rounded-lg object-cover w-full h-48"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-sky-800 group-hover:underline">
                    {h.title}
                  </h3>
                  <p className="text-gray-700 mb-4 flex-1">{h.desc}</p>
                  <Link
                    href={h.link}
                    className="inline-block px-4 py-2 bg-sky-700 text-white rounded-lg font-semibold hover:bg-sky-800 transition text-center"
                  >
                    View Project
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div id="projects" className="mb-4">
            <h2 className="text-2xl font-bold text-sky-800 mb-4">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.length === 0 ? (
                <div className="col-span-full text-center text-gray-500 py-8">
                  No projects found in this category.
                </div>
              ) : (
                filteredProjects.map((p) => (
                  <div
                    key={p.title}
                    className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col"
                  >
                    <Image
                      src={p.image}
                      alt={`Screenshot of ${p.title}`}
                      width={500}
                      height={320}
                      className="mb-4 rounded-lg object-cover w-full h-48"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-sky-800 group-hover:underline">
                      {p.title}
                    </h3>
                    <p className="text-gray-700 mb-4 flex-1">{p.desc}</p>
                    <Link
                      href={p.link}
                      className="inline-block px-4 py-2 bg-sky-700 text-white rounded-lg font-semibold hover:bg-sky-800 transition text-center"
                    >
                      View Project
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="flex-1 px-6 py-3 bg-sky-700 text-white rounded-lg text-center font-semibold hover:bg-sky-800 transition"
            >
              Start Your Project
            </Link>
            <Link
              href="/about"
              className="flex-1 px-6 py-3 bg-white border border-sky-700 text-sky-700 rounded-lg text-center font-semibold hover:bg-sky-700 hover:text-white transition"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
      `}</style>
    </>
  );
}
