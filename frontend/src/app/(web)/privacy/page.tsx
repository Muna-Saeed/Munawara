"use client";
import Head from "next/head";
import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Munawara - Privacy Policy</title>
        <meta
          name="description"
          content="Learn about Munawara's privacy policy and how we protect your personal information."
        />
      </Head>
      <section className="min-h-screen flex items-center justify-center bg-gray-100 px-2">
        <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-2xl">
          <h1 className="text-4xl font-bold text-sky-800 mb-4 text-center">
            Privacy Policy
          </h1>
          <p className="text-gray-700 mb-6 text-lg text-center">
            At Munawara, we value your privacy and are committed to protecting your personal information. This page outlines how we collect, use, and safeguard your data.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-sky-700 mb-2">
                Information We Collect
              </h2>
              <p className="text-gray-700 text-base">
                We may collect personal information such as your name, email address, and contact details when you register or interact with our services. We also collect non-personal information such as browser type, IP address, and usage data to improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sky-700 mb-2">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 text-base">
                We use your information to provide, maintain, and improve our services, communicate with you, and personalize your experience. We may also use your data for research and analysis purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sky-700 mb-2">
                Data Security
              </h2>
              <p className="text-gray-700 text-base">
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sky-700 mb-2">
                Your Rights
              </h2>
              <p className="text-gray-700 text-base">
                You have the right to access, correct, or delete your personal information. You can also object to the processing of your data or request a restriction on its use. To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sky-700 mb-2">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 text-base">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website. Your continued use of our services after any changes indicates your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sky-700 mb-2">
                Contact Us
              </h2>
              <div className="text-gray-700 text-base space-y-1">
                <div>
                  <span className="font-semibold">Email: </span>
                  <a
                    href="mailto:munawara.tech@gmail.com"
                    className="text-sky-700 hover:underline font-medium"
                  >
                    munawara.tech@gmail.com
                  </a>
                </div>
                <div>
                  <span className="font-semibold">Phone: </span>
                  <span>+251 (946) 809-925</span>
                </div>
                <div>
                  <span className="font-semibold">Address: </span>
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                <div>
                  <span className="font-semibold">Website: </span>
                  <a
                    href="https://munawara.tech"
                    className="text-sky-700 hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    munawara.tech
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="flex-1 px-6 py-3 bg-sky-700 text-white rounded-lg text-center font-semibold hover:bg-sky-800 transition"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="flex-1 px-6 py-3 bg-white border border-sky-700 text-sky-700 rounded-lg text-center font-semibold hover:bg-sky-700 hover:text-white transition"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
      `}</style>
    </>
  );
}