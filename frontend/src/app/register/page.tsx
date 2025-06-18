"use client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    // Simulate registration process
    setTimeout(() => {
      setLoading(false);
      // Redirect or show success (not implemented)
    }, 1200);
  };

  return (
    <>
      <Head>
        <title>Munawara - Register</title>
        <meta
          name="description"
          content="Register for an account with Munawara to access our services and tools."
        />
      </Head>
      <section className="min-h-screen flex items-center justify-center bg-gray-100 px-2">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
          <h1 className="text-4xl font-bold text-sky-800 mb-2 text-center">Create your account</h1>
          <p className="text-gray-600 mb-6 text-center">
            Sign up to access Munawara's services and tools.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                placeholder="Your Password"
                value={form.password}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                placeholder="Confirm Your Password"
                value={form.confirmPassword}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}
            <button
              type="submit"
              className="w-full bg-sky-700 text-white py-2 rounded font-semibold hover:bg-sky-800 transition disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-3 text-gray-400 text-sm">or</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition"
              disabled={loading}
            >
              <Image src="/icons/google.svg" alt="Google" width={20} height={20} />
              Continue with Google
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition"
              disabled={loading}
            >
              <Image src="/icons/github.svg" alt="GitHub" width={20} height={20} />
              Continue with GitHub
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition"
              disabled={loading}
            >
              <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} />
              Continue with Facebook
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-sky-700 hover:underline font-semibold">
              Login
            </Link>
          </p>
          <div className="mt-6 text-xs text-gray-500 text-center">
            By registering, you agree to our{" "}
            <Link href="/terms" className="text-sky-700 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-sky-700 hover:underline">
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </section>
    </>
  );
}