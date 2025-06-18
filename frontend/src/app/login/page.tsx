"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { signIn } from "next-auth/react";
import Head from 'next/head';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Placeholder for actual login logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setLoading(true);
    // Simulate async login
    setTimeout(() => {
      setLoading(false);
      // setError('Invalid credentials'); // Uncomment for error simulation
    }, 1200);
  };

  return (
    <>
      <Head>
        <title>Munawara - Login</title>
        <meta name="description" content="Login to your Munawara account to access digital solutions and services." />
      </Head>
      <section className="min-h-screen flex items-center justify-center bg-gray-100 px-2">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
          <div className="flex flex-col items-center mb-6">
            <Image src="/logo.png" alt="Munawara company logo" width={64} height={64} className="w-16 h-16 mb-2" />
            <h1 className="text-3xl font-bold text-sky-800">Munawara</h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">Welcome Back</h2>
          <p className="text-gray-600 mb-6 text-center">Sign in to your account to continue.</p>

          <form className="space-y-4" onSubmit={handleSubmit} autoComplete="on">
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
            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-800">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                disabled={loading}
              />
            </div>
            {error && (
              <div className="text-red-600 text-sm">{error}</div>
            )}
            <button
              type="submit"
              className={`w-full px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-800 transition font-semibold flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              ) : null}
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="flex justify-between mt-3 mb-4 text-sm">
            <Link href="/forgot-password" className="text-blue-600 hover:underline font-semibold">
              Forgot password?
            </Link>
            <Link href="/register" className="text-blue-600 hover:underline font-semibold">
              Create account
            </Link>
          </div>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-3 text-gray-400 text-sm">or</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => signIn("google")}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition"
              disabled={loading}
            >
              <Image src="/icons/google.svg" alt="Google" width={20} height={20} />
              Continue with Google
            </button>
            <button
              type="button"
              onClick={() => signIn("github")}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition"
              disabled={loading}
            >
              <Image src="/icons/github.svg" alt="GitHub" width={20} height={20} />
              Continue with GitHub
            </button>
            <button
              type="button"
              onClick={() => signIn("facebook")}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition"
              disabled={loading}
            >
              <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} />
              Continue with Facebook
            </button>
          </div>

          <div className="mt-6 text-xs text-gray-500 text-center">
            By logging in, you agree to our{' '}
            <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> and{' '}
            <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
          </div>
        </div>
      </section>
    </>
  );
}