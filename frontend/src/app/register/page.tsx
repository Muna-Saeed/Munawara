export default function Register() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-lg">
        <h1 className="text-4xl font-bold text-black mb-6">Register</h1>
        <form>
          <label className="block mb-2 text-lg text-black">Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded mb-4"
            placeholder="Your Name"
          />

          <label className="block mb-2 text-lg text-black">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded mb-4"
            placeholder="Your Email"
          />

          <label className="block mb-2 text-lg text-black">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded mb-4"
            placeholder="Your Password"
          />

          <label className="block mb-2 text-lg text-black">Confirm Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded mb-4"
            placeholder="Confirm Your Password"
          />

          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
            Register
          </button> 

          <p className="mt-4 text-center text-black">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>  
          </p>
        </form>
      </div>
    </section>
  );  
}
// This code defines a registration page using React and Tailwind CSS.