export default function ForgetPassword() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-lg">
        <h1 className="text-4xl font-bold text-black mb-6">Reset Your Password</h1>
        <p className="text-lg text-gray-700 mb-4">
          We understand that forgetting your password can be frustrating. But don't worry, we're here to help you get back on track!
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Please enter your email address below, and we'll send you a link to reset your password.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Enter your email below and we’ll send you a link to reset your password.
        </p>
        <form>
          <label className="block mb-2 text-lg">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded mb-4"
            placeholder="Your Email"
          />
          <button className="w-full px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">
            Send Reset Link
          </button>
          <p className="text-sm text-gray-500 mt-2">
            By clicking "Send Reset Link", you agree to our <a href="/terms" className="text-sky-800 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-sky-800 hover:underline">Privacy Policy</a>.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            If you don't receive the email, please check your spam folder or <a href="/support" className="text-sky-800 hover:underline">contact support</a>.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            If you have any questionsor need further assistance, feel free to <a href="/contact" className="text-sky-800 hover:underline">contact us</a>.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            If you are having trouble, please <a href="/help" className="text-sky-800 hover:underline">visit our help center</a>.
          </p>

          
        <p className="text-lg text-gray-700 mb-4">
          If you have any questions or need further assistance, feel free to reach out to our support team.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Your security is our top priority, and we take it seriously. Rest assured that your information is safe with us.
        </p>
          

        </form>
        <p className="text-center text-gray-700 mt-4">
          Remembered your password? <a href="/login" className="text-sky-800 hover:underline">Login</a>
        </p>
        <p className="text-center text-gray-700 mt-4">
          Don't have an account? <a href="/register" className="text-sky-800 hover:underline">Sign Up</a>
        </p>
        <p className="text-center text-gray-700 mt-4">
          By signing up, you agree to our <a href="/terms" className="text-sky-800 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-sky-800 hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
}