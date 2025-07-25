'use client';

import NewServiceRequest from "@/components/NewServiceRequest";
import Head from "next/head";
import Link from "next/link";
import { FaCode, FaSearch, FaRobot, FaPuzzlePiece } from "react-icons/fa";
import { useEffect, useState, useCallback } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

// Centralized Product interface
interface Product {
  _id: string;
  id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl?: string;
  isActive: boolean;
}

// Static descriptions for the top part of the page
const staticPageServices = [
  {
    title: "Web Development",
    icon: <FaCode className="text-sky-700 w-8 h-8 mb-3" />,
    description:
      "Build modern, responsive, and visually appealing websites to establish your online presence and connect with your audience.",
    link: "/contact?service=web-development",
  },
  {
    title: "SEO Services",
    icon: <FaSearch className="text-sky-700 w-8 h-8 mb-3" />,
    description:
      "Improve your website’s visibility and rank higher in search engines with tailored SEO strategies for your business.",
    link: "/contact?service=seo",
  },
  {
    title: "AI Tools",
    icon: <FaRobot className="text-sky-700 w-8 h-8 mb-3" />,
    description:
      "Harness the power of AI with tools like chatbots and recommendation engines to enhance customer engagement and streamline workflows.",
    link: "/contact?service=ai-tools",
  },
];

export default function ServicesPage() {
  const [availableServices, setAvailableServices] = useState<Product[]>([]);
  const [loadingServices, setLoadingServices] = useState<boolean>(true);

  // Function to fetch the dynamic service plans from your public API
  const fetchAvailableServices = useCallback(async () => {
    setLoadingServices(true);
    try {
      const res = await fetch('/api/available-services');
      if (!res.ok) {
        throw new Error(`Error fetching services: ${res.statusText}`);
      }
      const data: Product[] = await res.json();
      // Filter to ensure only active services/plans are shown for selection
      setAvailableServices(data.filter(service => service.isActive));
    } catch (err) {
      console.error('Failed to fetch available services:', err);
      setAvailableServices([]);
    } finally {
      setLoadingServices(false);
    }
  }, []);

  // Fetch the services when the component mounts
  useEffect(() => {
    fetchAvailableServices();
  }, [fetchAvailableServices]);

  return (
    <>
      <Head>
        <title>Munawara - Services</title>
        <meta
          name="description"
          content="Explore Munawara's range of digital services, including web development, SEO, AI tools, and tailored business plans."
        />
      </Head>
      <section className="min-h-screen bg-gray-50 text-gray-800 py-10 px-4 md:px-10">
        <div className="max-w-5xl mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sky-800 mb-4 tracking-tight">
              Our Digital Services
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Explore our services below to find the perfect solution for your business needs.
            </p>
          </header>

          {/* --- Section for Dynamic Business Plans --- */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <h2 className="text-4xl md:text-5xl font-bold text-sky-800 mb-8 text-center tracking-tight">
              Choose Your Business Plan
            </h2>
            {/* Conditional rendering: show loading spinner or the service request component */}
            {loadingServices ? (
              <LoadingSpinner />
            ) : (
              <NewServiceRequest
                services={availableServices}
                loading={loadingServices}
                onRefresh={fetchAvailableServices}
              />
            )}
          </div>
          {/* --- End Dynamic Section --- */}

          {/* --- Static Services Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
            {staticPageServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-7 flex flex-col items-center text-center border border-gray-100"
              >
                {service.icon}
                <h2 className="text-xl font-semibold text-sky-800 mb-3">{service.title}</h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-block px-5 py-2 bg-sky-700 text-white rounded-lg font-medium hover:bg-sky-800 transition"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          {/* --- Custom Solutions Section --- */}
          <div className="mt-16 flex justify-center">
            <div className="w-full md:w-2/3 bg-sky-800 text-white rounded-xl shadow-lg text-center p-8 relative overflow-hidden">
              <FaPuzzlePiece className="absolute left-6 top-6 text-sky-300 opacity-20 w-20 h-20 pointer-events-none hidden md:block" />
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">Custom Digital Solutions</h2>
              <p className="text-lg mb-5">
                Looking for something unique? Contact us for bespoke services that meet your specific needs and goals.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-2 bg-white text-sky-800 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}