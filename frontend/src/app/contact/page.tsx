"use client";
import { useState } from "react";
import Head from "next/head";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "success" | "error" | "loading">(null);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setStatus(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setError("");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  }

  return (
    <>
      <Head>
        <title>Munawara - Contact Us</title>
        <meta
          name="description"
          content="Get in touch with Munawara for digital solutions and services."
        />
      </Head>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-2xl">
          <h1 className="text-4xl font-extrabold text-sky-800 mb-3 text-center">
            Contact Us
          </h1>
          <p className="text-gray-600 mb-8 text-center">
            We'd love to hear from you. Please fill out the form below and our team will get back to you soon.
          </p>
          <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label className="block mb-1 text-base font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-200 transition"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                disabled={status === "loading"}
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block mb-1 text-base font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-200 transition"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                disabled={status === "loading"}
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block mb-1 text-base font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-200 transition"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                disabled={status === "loading"}
              ></textarea>
            </div>
            {error && (
              <div className="text-red-600 text-sm font-medium">{error}</div>
            )}
            {status === "success" && (
              <div className="text-green-600 text-sm font-medium">
                Thank you! Your message has been sent.
              </div>
            )}
            <button
              type="submit"
              className={`w-full px-4 py-3 bg-sky-700 text-white font-semibold rounded-lg transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-60 flex items-center justify-center`}
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
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
                "Send Message"
              )}
            </button>
          </form>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-sky-800 mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Info
              </h2>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m0 4v12m0 0H5a2 2 0 01-2-2V7a2 2 0 012-2h4m4 0h4a2 2 0 012 2v10a2 2 0 01-2 2h-4" />
                  </svg>
                  <span>Kality, Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                  </svg>
                  <a href="mailto:munawara.tech@gmail.com" className="hover:underline text-sky-700">munawara.tech@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2a2 2 0 012 2v10a2 2 0 01-2 2H3m0-14h2a2 2 0 012 2v10a2 2 0 01-2 2H3" />
                  </svg>
                  <a href="tel:+251946809925" className="hover:underline text-sky-700">+251 946 8099 925</a>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-sky-800 mb-2">Business Hours</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>Monday - Friday: 9 AM - 5 PM</li>
                  <li>Saturday: 10 AM - 4 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-sky-800 mb-2">Follow Us</h3>
                <ul className="flex space-x-4">
                  <li>
                    <a
                      href="https://facebook.com/munawara.tech"
                      className="text-blue-600 hover:text-blue-800 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/munawara.tech"
                      className="text-blue-600 hover:text-blue-800 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/company/munawara"
                      className="text-blue-600 hover:text-blue-800 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-sky-800 mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a8 8 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z" />
                </svg>
                Location
              </h2>
              <p className="text-gray-700 mb-3">Kality, Addis Ababa, Ethiopia</p>
              <div className="rounded-lg overflow-hidden border border-gray-200 shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1234567890123!2d38.7890123456789!3d8.9876543210987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab7b7b%3A0x1234567890abcdef!2sKality%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Munawara Location"
                ></iframe>
              </div>
              <div className="mt-6 flex gap-4">
                <a
                  href="tel:+251946809925"
                  className="flex-1 px-4 py-3 bg-sky-700 text-white rounded-lg text-center font-semibold hover:bg-sky-800 transition"
                  aria-label="Call Us"
                >
                  Call Us
                </a>
                <a
                  href="mailto:munawara.tech@gmail.com"
                  className="flex-1 px-4 py-3 bg-sky-700 text-white rounded-lg text-center font-semibold hover:bg-sky-800 transition"
                  aria-label="Email Us"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}