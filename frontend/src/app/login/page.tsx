import Image from 'next/image';

export default function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-lg">
        <h1 className="text-4xl font-bold text-black mb-6">Login</h1>
        <p className="text-gray-700 mb-4">Welcome back! Please login to your account.</p>

        {/* Login Form */}
        <div className="flex items-center justify-center mb-4">
          <Image src="/l.png" alt="Logo" width={64} height={64} className="w-16 h-16 mr-2" />
          <h1 className="text-3xl font-bold text-sky-800">Munawara</h1>
        </div>
        <p className="text-gray-700 mb-4">Login to your account</p>

        {/* Form Fields */}
        <form className="mb-4">
          <label className="block mb-2 text-lg text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded mb-4"
            placeholder="Your Email"
          />

          <label className="block mb-2 text-lg text-gray-700">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded mb-4"
            placeholder="Your Password"
          />

          <button className="w-full px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">
            Login
          </button>
        </form>

        <p className="text-center text-gray-700 mb-4">or</p>
        <button className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 mb-4">
          Login with Google
        </button>
        <button className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 mb-4">
          Login with GitHub
        </button>

        <button className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 mb-4">
          Login with Facebook
        </button>
        <p className="text-center text-gray-700 mt-4">
          Don&apos;t have an account? <a href="/register" className="text-sky-800 hover:underline">Register</a>
        </p>
        <p className="text-center text-gray-700 mt-4">
          Forgot your password? <a href="/forgot-password" className="text-sky-800 hover:underline">Reset it</a>
        </p>
        <p className="text-center text-gray-700 mt-4">
          By logging in, you agree to our <a href="/terms" className="text-sky-800 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-sky-800 hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
}