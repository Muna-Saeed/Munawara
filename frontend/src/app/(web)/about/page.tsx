'use client';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

// --- Type Definitions ---
type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  bio: string[];
};

// --- Data Section ---
const teamMembers: TeamMember[] = [
  {
    name: 'Muna Said',
    role: 'Founder & CEO',
    imageUrl: '/muna.png',
    bio: [
      "Holds a Computer Science degree with expertise in product development and digital strategy.",
      "A graduate of the ALX SE program and a current participant in the ALX Ethiopia Incubation Program.",
      "Driven by a passion for empowering underserved communities through technology."
    ]
  },
  {
    name: 'Abdiwoli Hassen',
    role: 'Co-Founder & CTO',
    imageUrl: '/abdiwoli.jpg',
    bio: [
      "Software Engineer with a Computer Science degree and advanced training from ALX Africa and Udacity.",
      "Expert in full-stack development with deep experience building scalable backend APIs and systems.",
      "Specializes in creating robust, data-driven applications to ensure a strong technical foundation."
    ]
  },
];

const values = [
  {
    name: 'Custom-Built Solutions',
    description: "We don't believe in one-size-fits-all. Our expert team builds a unique website and digital strategy tailored to each business's specific needs.",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082a.75.75 0 00-.814.814c.032.249.059.5.082.75v5.714a2.25 2.25 0 001.591 2.25l5.657 1.678a2.25 2.25 0 002.25-1.592l1.678-5.657a2.25 2.25 0 00-1.59-2.25l-5.657-1.678a2.25 2.25 0 00-1.59-2.25z" />
      </svg>
    ),
  },
  {
    name: 'All-in-One Platform',
    description: "From SEO and e-commerce to AI-powered tools, we provide everything a business needs to grow online, all in one place.",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    name: 'Human-Powered Support',
    description: "We provide real, ongoing support from our expert team, so business owners are never left to figure things out on their own.",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18 18.72v7.217A2.25 2.25 0 0115.75 24H5.25A2.25 2.25 0 013 21.75V18.72m18 0v-7.217A2.25 2.25 0 0015.75 9H5.25A2.25 2.25 0 003 11.25v7.217m18 0h-2.25m-7.5-10.5h7.5" />
      </svg>
    ),
  },
];


// --- Component Section ---
const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Munawara - Empowering Small Businesses</title>
        <meta
          name="description"
          content="Learn about Munawara's mission to provide human-powered digital solutions for small businesses in East Africa."
        />
      </Head>
      <main className="bg-white text-slate-800">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(0deg,#000,rgba(0,0,0,0.6))]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Your Partner in Digital Growth
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg lg:text-xl text-slate-300">
              Munawara was founded to bridge the digital divide for small businesses. We combine powerful technology with a dedicated team to build the online presence you need to succeed.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        {/* Our Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">

              {/* Text Card */}
              <div className="flex flex-col justify-center">
                <div className="prose prose-lg max-w-none text-slate-600">
                  <h2 className="text-base font-semibold text-blue-600 tracking-wider uppercase">Our Story</h2>
                  <h3 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight">
                    Why Millions of Businesses Remain Invisible
                  </h3>
                  <p>
                    While working closely with entrepreneurs in East Africa, we saw a recurring, frustrating problem. The vast majority of small businesses—the lifeblood of the economy—were completely disconnected from the digital world.
                  </p>
                  <p>
                    We founded Munawara to be the answer: a true partner that handles the technology so our clients can focus on running their business.
                  </p>
                </div>
              </div>

              {/* Image Card */}
              <div className="w-full">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1661764208945-094aa182f923?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c21hbGwlMjBidXNzaW5lc3N8ZW58MHx8MHx8fDA%3D"
                    alt="East African entrepreneurs collaborating"
                    width={800}
                    height={200}
                    className="w-full object-cover" // <-- h-full has been removed
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base font-semibold text-blue-600 tracking-wider uppercase">Our Philosophy</h2>
              <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                A Different Approach to Digital Solutions
              </p>
              <p className="mt-4 max-w-2xl text-xl text-slate-600 lg:mx-auto">
                We succeed when you succeed. That's why our service is built on three core principles.
              </p>
            </div>
            <div className="mt-12">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {values.map((value) => (
                  <div key={value.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <value.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-bold text-slate-900">{value.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-slate-600">{value.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                The Team Behind The Vision
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                A balanced team with the technical expertise and strategic vision to succeed.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {teamMembers.map((person) => (
                <div key={person.name} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                  <div className="flex flex-col sm:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-24 w-24 rounded-full object-cover ring-4 ring-white"
                        src={person.imageUrl}
                        alt={`Headshot of ${person.name}`}
                        width={96}
                        height={96}
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-slate-900">{person.name}</h3>
                      <p className="text-blue-600 font-semibold">{person.role}</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2">
                    {person.bio.map((line, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="ml-3 text-slate-600">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-white pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="relative isolate overflow-hidden bg-slate-900 px-6 py-20 text-center shadow-2xl rounded-2xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to bring your business online?</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">Let us handle the technical details so you can focus on what you do best—running your business.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/contact" passHref legacyBehavior>
                  <a className="rounded-md bg-white px-5 py-3 text-base font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Start Your Project
                  </a>
                </Link>
                <Link href="/portfolio" passHref legacyBehavior>
                  <a className="text-base font-semibold leading-6 text-white">
                    See our work <span aria-hidden="true">→</span>
                  </a>
                </Link>
              </div>
              {/* Background decorative elements */}
              <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true"><circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7"></circle><defs><radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217"><stop stopColor="#7775D6"></stop><stop offset="1" stopColor="#E935C1"></stop></radialGradient></defs></svg>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;