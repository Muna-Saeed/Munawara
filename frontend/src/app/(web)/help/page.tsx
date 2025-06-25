"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const helpTopics = [
  {
    question: "How do I sign up?",
    answer: (
      <>
        Click the <span className="font-semibold text-blue-600">"Start Today"</span> button on the homepage and follow the registration process. If you encounter issues, please <Link href="/contact" className="text-blue-600 hover:underline font-semibold">reach out to us</Link>.
      </>
    ),
  },
  {
    question: "What if I forgot my password?",
    answer: (
      <>
        Use the <Link href="/forgot-password" className="text-blue-600 hover:underline font-semibold">Forgot Password</Link> option on the login page, or <Link href="/contact" className="text-blue-600 hover:underline font-semibold">contact us</Link> for assistance.
      </>
    ),
  },
  {
    question: "How do I contact support?",
    answer: (
      <>
        You can reach our support team via the <Link href="/contact" className="text-blue-600 hover:underline font-semibold">Contact Us</Link> page.
      </>
    ),
  },
  {
    question: "How do I update my profile?",
    answer: (
      <>
        Log in to your account, navigate to the <span className="font-semibold text-blue-600">Profile</span> section, and make the necessary changes.
      </>
    ),
  },
  {
    question: "How do I delete my account?",
    answer: (
      <>
        If you wish to delete your account, please <Link href="/contact" className="text-blue-600 hover:underline font-semibold">contact our support team</Link> for assistance.
      </>
    ),
  },
  {
    question: "How do I provide feedback?",
    answer: (
      <>
        We value your feedback! Please use the <Link href="/feedback" className="text-blue-600 hover:underline font-semibold">Feedback</Link> page to share your thoughts.
      </>
    ),
  },
  {
    question: "How do I report a bug?",
    answer: (
      <>
        If you encounter any issues, please report them through the <Link href="/bug-report" className="text-blue-600 hover:underline font-semibold">Bug Report</Link> page.
      </>
    ),
  },
  {
    question: "How do I unsubscribe from emails?",
    answer: (
      <>
        You can unsubscribe from our emails by clicking the <span className="font-semibold text-blue-600">"Unsubscribe"</span> link at the bottom of any email we send you.
      </>
    ),
  },
  {
    question: "How do I change my subscription plan?",
    answer: (
      <>
        To change your subscription plan, log in to your account and navigate to the <span className="font-semibold text-blue-600">Subscription</span> section.
      </>
    ),
  },
  {
    question: "How do I access the API documentation?",
    answer: (
      <>
        You can find our API documentation on the <Link href="/api-docs" className="text-blue-600 hover:underline font-semibold">API Docs</Link> page.
      </>
    ),
  },
  {
    question: "How do I integrate with third-party services?",
    answer: (
      <>
        For integration instructions, please refer to the <Link href="/integration" className="text-blue-600 hover:underline font-semibold">Integration</Link> page.
      </>
    ),
  },
  {
    question: "How do I report a security issue?",
    answer: (
      <>
        If you discover a security vulnerability, please contact us immediately through the <Link href="/security" className="text-blue-600 hover:underline font-semibold">Security</Link> page.
      </>
    ),
  },
  {
    question: "How do I access the changelog?",
    answer: (
      <>
        You can view our changelog on the <Link href="/changelog" className="text-blue-600 hover:underline font-semibold">Changelog</Link> page.
      </>
    ),
  },
  {
    question: "How do I manage my notifications?",
    answer: (
      <>
        You can manage your notification preferences in the <span className="font-semibold text-blue-600">Settings</span> section of your account.
      </>
    ),
  },
  {
    question: "How do I access the knowledge base?",
    answer: (
      <>
        Our knowledge base is available on the <Link href="/knowledge-base" className="text-blue-600 hover:underline font-semibold">Knowledge Base</Link> page.
      </>
    ),
  },
  {
    question: "How do I access the community forum?",
    answer: (
      <>
        Join our community discussions on the <Link href="/forum" className="text-blue-600 hover:underline font-semibold">Forum</Link> page.
      </>
    ),
  },
  {
    question: "How do I access the API key?",
    answer: (
      <>
        You can find your API key in the <span className="font-semibold text-blue-600">API</span> section of your account settings.
      </>
    ),
  },
  {
    question: "How do I access the user guide?",
    answer: (
      <>
        The user guide is available on the <Link href="/user-guide" className="text-blue-600 hover:underline font-semibold">User Guide</Link> page.
      </>
    ),
  },
  {
    question: "How do I access the terms of service?",
    answer: (
      <>
        Our terms of service can be found on the <Link href="/terms" className="text-blue-600 hover:underline font-semibold">Terms of Service</Link> page.
      </>
    ),
  },
  {
    question: "How do I access the privacy policy?",
    answer: (
      <>
        Our privacy policy is available on the <Link href="/privacy" className="text-blue-600 hover:underline font-semibold">Privacy Policy</Link> page.
      </>
    ),
  },
  {
    question: "How do I access the API rate limits?",
    answer: (
      <>
        You can find information about API rate limits on the <Link href="/api-rate-limits" className="text-blue-600 hover:underline font-semibold">API Rate Limits</Link> page.
      </>
    ),
  },
  {
    question: "How do I access the API status page?",
    answer: (
      <>
        The API status page is available on the <Link href="/api-status" className="text-blue-600 hover:underline font-semibold">API Status</Link> page.
      </>
    ),
  },
  {
    question: "How do I access the API changelog?",
    answer: (
      <>
        The API changelog can be found on the <Link href="/api-changelog" className="text-blue-600 hover:underline font-semibold">API Changelog</Link> page.
      </>
    ),
  },
  {
    question: "How do I access the API support?",
    answer: (
      <>
        For API support, please visit the <Link href="/api-support" className="text-blue-600 hover:underline font-semibold">API Support</Link> page.
      </>
    ),
  },
  {
    question: "How do I access the API examples?",
    answer: (
      <>
        API examples can be found on the <Link href="/api-examples" className="text-blue-600 hover:underline font-semibold">API Examples</Link> page.
      </>
    ),
  },
  {
    question: "How do I access the API SDKs?",
    answer: (
      <>
        You can find our API SDKs on the <Link href="/api-sdks" className="text-blue-600 hover:underline font-semibold">API SDKs</Link> page.
      </>
    ),
  },
];

export default function Help() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <Head>
        <title>Munawara - Help Center</title>
        <meta name="description" content="Find answers and support for Munawara's digital solutions and services." />
      </Head>
      <section className="min-h-screen flex items-center justify-center bg-gray-100 px-2">
        <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-2xl">
          <h1 className="text-4xl font-bold text-sky-800 mb-4 text-center">Help Center</h1>
          <p className="text-gray-700 mb-8 text-center text-lg">Need assistance? We&apos;re here to help! Browse common topics below or reach out for personalized support.</p>
          <div className="space-y-3">
            {helpTopics.map((topic, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                <button
                  className={`w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none transition-colors ${openIndex === idx ? 'bg-blue-50' : 'bg-gray-50 hover:bg-gray-100'}`}
                  onClick={() => handleToggle(idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`help-panel-${idx}`}
                >
                  <span className="text-lg font-semibold text-gray-900">{topic.question}</span>
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
                    id={`help-panel-${idx}`}
                    className="px-5 pb-4 text-gray-700 animate-fadeIn"
                  >
                    {topic.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="flex-1 px-6 py-3 bg-sky-700 text-white rounded-lg text-center font-semibold hover:bg-sky-800 transition">
              Contact Support
            </Link>
            <Link href="/faq" className="flex-1 px-6 py-3 bg-white border border-sky-700 text-sky-700 rounded-lg text-center font-semibold hover:bg-sky-700 hover:text-white transition">
              Visit FAQ
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
