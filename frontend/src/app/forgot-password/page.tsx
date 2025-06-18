"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    setLoading(true);
    // Simulate async request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      <Head>
        <title>Munawara - Forgot Password</title>
        <meta name="description" content="Reset your password with Munawara's easy-to-use password reset process." />
      </Head>
      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Forgot Password?
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 text-center">
            Enter your email address and we&apos;ll send you a link to reset your password.
          </p>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 rounded p-4 text-center mb-4">
              <span className="font-semibold">Success!</span> If an account exists for <span className="font-mono">{email}</span>, a reset link has been sent.
              <div className="mt-2 text-sm text-gray-500">
                Please check your inbox and spam folder.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-800">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  disabled={loading}
                />
              </div>
              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}
              <button
                type="submit"
                className={`w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                ) : null}
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
              <div className="text-xs text-gray-500 mt-2 text-center">
                By clicking &quot;Send Reset Link&quot;, you agree to our{' '}
                <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> and{' '}
                <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">
                Didn&apos;t get the email? Check your spam folder or{' '}
                <Link href="/support" className="text-blue-600 hover:underline">contact support</Link>.
              </div>
            </form>
          )}
          <div className="mt-6 flex flex-col gap-2 text-center">
            <span className="text-gray-700 text-sm">
              Remembered your password?{' '}
              <Link href="/login" className="text-blue-600 hover:underline font-semibold">Login</Link>
            </span>
            <span className="text-gray-700 text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-blue-600 hover:underline font-semibold">Sign Up</Link>
            </span>
            <span className="text-gray-700 text-sm">
              Need more help?{' '}
              <Link href="/contact" className="text-blue-600 hover:underline font-semibold">Contact Us</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}