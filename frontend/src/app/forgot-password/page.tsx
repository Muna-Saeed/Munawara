export default function ForgetPassword() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-lg">
        <h1 className="text-4xl font-bold text-black mb-6">Reset Your Password</h1>
        <p className="text-lg text-gray-700 mb-4">
          Please enter your email address below, and we&apos;ll send you a link to reset your password.
        </p>
        <form>
          <label className="block mb-2 text-lg text-black">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded mb-4"
            placeholder="Your Email"
          />
          <button className="w-full px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">
            Send Reset Link
          </button>
          <p className="text-sm text-gray-500 mt-2">
            By clicking &quot;Send Reset Link&quot;, you agree to our <a href="/terms" className="text-sky-800 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-sky-800 hover:underline">Privacy Policy</a>.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            If you don&apos;t receive the email, please check your spam folder or <a href="/support" className="text-sky-800 hover:underline">contact support</a>.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            If you have any questions or need further assistance, feel free to <a href="/contact" className="text-sky-800 hover:underline">contact us</a>.
          </p>

        </form>
        <p className="text-center text-gray-700 mt-4">
          Remembered your password? <a href="/login" className="text-sky-800 hover:underline">Login</a>
        </p>
        <p className="text-center text-gray-700 mt-4">
          Do not have an account? <a href="/register" className="text-sky-800 hover:underline">Sign Up</a>
        </p>
      </div>
    </section>
  );
}