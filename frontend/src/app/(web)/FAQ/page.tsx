"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const faqs = [
  {
    question: "What services does Munawara offer?",
    answer: (
      <>
        We provide <span className="font-semibold text-blue-600">web development</span>, <span className="font-semibold text-blue-600">SEO services</span>, <span className="font-semibold text-blue-600">AI tools</span>, and more to help small businesses grow.
      </>
    ),
  },
  {
    question: "How can I get started?",
    answer: (
      <>
        Click <Link href="/" className="text-blue-600 hover:underline font-semibold">Start Today</Link> on our homepage or <Link href="/contact" className="text-blue-600 hover:underline font-semibold">contact us</Link> for personalized assistance.
      </>
    ),
  },
  {
    question: "What is your pricing model?",
    answer: (
      <>
        We offer <span className="font-semibold text-blue-600">competitive pricing</span> tailored to your specific needs. <Link href="/contact" className="text-blue-600 hover:underline font-semibold">Contact us</Link> for a quote.
      </>
    ),
  },
  {
    question: "Do you offer support after project completion?",
    answer: (
      <>
        Yes, we provide <span className="font-semibold text-blue-600">ongoing support and maintenance</span> for all our projects.
      </>
    ),
  },
  {
    question: "Can I see examples of your work?",
    answer: (
      <>
        Absolutely! Check out our <Link href="/portfolio" className="text-blue-600 hover:underline font-semibold">portfolio</Link> to see our previous projects.
      </>
    ),
  },
  {
    question: "How do I contact you?",
    answer: (
      <div className="space-y-1">
        <span>
          You can reach us through the <Link href="/contact" className="text-blue-600 hover:underline font-semibold">contact form</Link> on our website or email us directly.
        </span>
        <div>
          <span className="font-semibold">Email:</span>{" "}
          <a href="mailto:munawara.tech@gmail.com" className="text-blue-600 hover:underline">munawara.tech@gmail.com</a>
        </div>
        <div>
          <span className="font-semibold">Phone:</span>{" "}
          <a href="tel:+251946809925" className="text-blue-600 hover:underline">+251 (946) 809-925</a>
        </div>
        <div>
          <span className="font-semibold">Address:</span> Addis Ababa, Ethiopia
        </div>
        <div>
          <span className="font-semibold">Website:</span>{" "}
          <a href="https://munawara.tech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">munawara.tech</a>
        </div>
      </div>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <Head>
        <title>Munawara - Frequently Asked Questions</title>
        <meta name="description" content="Find answers to common questions about Munawara's digital solutions and services." />
      </Head>
      <section className="min-h-screen flex items-center justify-center bg-gray-100 px-2">
        <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-2xl">
          <h1 className="text-4xl font-bold text-sky-800 mb-4 text-center">Frequently Asked Questions</h1>
          <p className="text-gray-700 mb-8 text-center">Find quick answers to common questions about our digital solutions and services.</p>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                <button
                  className={`w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none transition-colors ${openIndex === idx ? 'bg-blue-50' : 'bg-gray-50 hover:bg-gray-100'}`}
                  onClick={() => handleToggle(idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform duration-200 ${openIndex === idx ? 'transform rotate-180 text-blue-600' : 'text-gray-400'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === idx && (
                  <div
                    id={`faq-panel-${idx}`}
                    className="px-5 pb-4 text-gray-700 animate-fadeIn"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="flex-1 px-6 py-3 bg-sky-700 text-white rounded-lg text-center font-semibold hover:bg-sky-800 transition">
              Contact Us
            </Link>
            <Link href="/about" className="flex-1 px-6 py-3 bg-white border border-sky-700 text-sky-700 rounded-lg text-center font-semibold hover:bg-sky-700 hover:text-white transition">
              Learn More
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