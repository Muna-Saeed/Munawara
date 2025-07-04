"use client";
import { useState } from "react";
import Head from "next/head";
import Chatbot from "@/components/Chatbot";

export default function AITools() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleAsk() {
    if (!input.trim()) {
      setError("Please enter a question.");
      setReply("");
      return;
    }
    setLoading(true);
    setError("");
    setReply("");
    try {
      const res = await fetch(`/api/ai?message=${encodeURIComponent(input)}`);
      if (!res.ok) throw new Error("Something went wrong. Please try again.");
      const data = await res.json();
      setReply(data.reply || data.message || "No response received.");
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    setError("");
  }

  return (
    <>
      <Head>
        <title>Munawara - AI Tools</title>
        <meta
          name="description"
          content="Explore Munawara's AI tools and innovations to enhance your business operations."
        />
      </Head>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-2xl">
          <h1 className="text-4xl font-extrabold text-sky-800 mb-4 text-center">
            AI Tools
          </h1>
          <p className="text-gray-600 mb-8 text-center">
            Discover how our AI tools can help streamline your business operations and improve efficiency.
          </p>
          <div className="mb-8">
            <label htmlFor="ai-question" className="block text-gray-700 font-medium mb-2">
              Ask our AI assistant
            </label>
            <div className="flex">
              <input
                id="ai-question"
                className="border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 p-2 rounded-l-md w-full transition"
                value={input}
                onChange={handleInputChange}
                placeholder="Type your question..."
                onKeyDown={e => {
                  if (e.key === "Enter") handleAsk();
                }}
                disabled={loading}
                autoComplete="off"
              />
              <button
                className={`px-5 py-2 bg-sky-700 text-white font-semibold rounded-r-md transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-60`}
                onClick={handleAsk}
                disabled={loading}
                aria-label="Ask AI"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 mx-auto" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                ) : (
                  "Ask"
                )}
              </button>
            </div>
            {error && (
              <div className="mt-2 text-sm text-red-600">{error}</div>
            )}
            {reply && (
              <div className="mt-6 bg-sky-50 border border-sky-100 p-4 rounded-lg shadow-inner text-gray-800 transition">
                <span className="font-semibold text-sky-700">AI:</span> {reply}
              </div>
            )}
          </div>
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our AI Solutions</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h.01" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Chatbots</h3>
                  <p className="text-gray-600 text-sm">
                    Enhance customer support with AI-powered chatbots that provide instant, 24/7 responses.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 17v-2a4 4 0 014-4h8" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h.01" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Recommendation Engines</h3>
                  <p className="text-gray-600 text-sm">
                    Boost conversions with personalized recommendations based on user behavior and preferences.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Data Analytics</h3>
                  <p className="text-gray-600 text-sm">
                    Gain actionable insights from your data with advanced AI analytics and reporting tools.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </>
  );
}