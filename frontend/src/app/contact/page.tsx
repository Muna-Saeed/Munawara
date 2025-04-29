export default function Contact() {
    return (
      <section className="p-8 bg-gray-100 text-gray-700">
        <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
        <p className="text-lg mb-4">Got questions or need help? Feel free to reach out!</p>
        <form className="mt-4">
          <label className="block mb-2 text-lg">Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded mb-4"
            placeholder="Your Name"
          />
          <label className="block mb-2 text-lg">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded mb-4"
            placeholder="Your Email"
          />
          <label className="block mb-2 text-lg">Message</label>
          <textarea
            className="w-full p-2 border rounded mb-4"
            placeholder="Your Message"
          ></textarea>
          <button className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700">
            Submit
          </button>
        </form>
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
            Call Us
          </button>
          <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
            Email Us
          </button>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <ul className="flex space-x-4">
            <li><a href="https://facebook.com/munawara" className="text-blue-600">Facebook</a></li>
            <li><a href="https://x.com/munawara" className="text-blue-600">Twitter</a></li>
            <li><a href="https:/linkedin.com/munawara" className="text-blue-600">LinkedIn</a></li>
          </ul>
        </div>
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <p className="text-lg">Kality, Addis Ababa, Ethiopia</p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509999!2d144.9537353153165!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11b8c7%3A0x5045675218ceed30!2sMelbourne%20CBD%2C%20Victoria%20Australia!5e0!3m2!1sen!2sus!4v1616161616161"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
            ></iframe>
        </div>
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
            <p className="text-lg">Monday - Friday: 9 AM - 5 PM</p>
            <p className="text-lg">Saturday: 10 AM - 4 PM</p>
            <p className="text-lg">Sunday: Closed</p>
        </div>
      </section>
    );
  }