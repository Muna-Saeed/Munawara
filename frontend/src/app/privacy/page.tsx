export default function Privacy() {
    return (
      <section className="p-8 bg-gray-100 text-gray-700">
        <h1 className="text-4xl font-bold text-black mb-4">Privacy Policy</h1>
        <p className="text-lg">
          At Munawara, we value your privacy and are committed to protecting your personal information. This page outlines how we collect, use, and safeguard your data.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
        <p className="text-lg mt-2">    
            We may collect personal information such as your name, email address, and contact details when you register or interact with our services. We also collect non-personal information such as browser type, IP address, and usage data to improve our services.   
        </p>
        <h2 className="text-2xl font-semibold mt-6">How We Use Your Information</h2>
        <p className="text-lg mt-2">    
            We use your information to provide, maintain, and improve our services, communicate with you, and personalize your experience. We may also use your data for research and analysis purposes.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Data Security</h2>
        <p className="text-lg mt-2">
            We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the internet or electronic storage is 100% secure.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Your Rights</h2>
        <p className="text-lg mt-2">
            You have the right to access, correct, or delete your personal information. You can also object to the processing of your data or request a restriction on its use. To exercise these rights, please contact us using the information provided below.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Changes to This Privacy Policy</h2>
        <p className="text-lg mt-2">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website. Your continued use of our services after any changes indicates your acceptance of the updated policy.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
        <p className="text-lg mt-2">
            If you have any questions or concerns about this privacy policy, please contact us at:
            <br />
            <strong>Email:</strong>
            <a href="mailto:munawara.tech@gmail.com" className="text-blue-600 hover:underline">Munawara</a>
            <br />
            <strong>Phone:</strong> +251 (946) 809-925
            <br />
            <strong>Address:</strong> Addis Ababa, Ethiopia
            <br />
            <strong>Website:</strong>
            <a href="https://munawara.tech" className="text-blue-600 hover:underline">munawara.tech</a>
        </p>
        <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
                Contact Us
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
                Learn More
            </button>   
        </div>
      </section>
    );
  }