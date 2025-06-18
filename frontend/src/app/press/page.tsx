"use client";
import Link from "next/link";

const pressHighlights = [
  {
    title: "Munawara Launches Affordable Web Solutions",
    desc:
      "Munawara is revolutionizing the way small businesses access scalable digital tools.",
  },
  {
    title: "Innovative AI Tools Now Available",
    desc: (
      <>
        Our cutting-edge AI tools are designed to streamline business operations. Learn more{" "}
        <Link href="/services" className="text-sky-700 hover:underline font-medium">
          here
        </Link>
        .
      </>
    ),
  },
];

const sections = [
  {
    title: "Latest Articles",
    link: "/press/archive",
    items: [
      {
        title: "Munawara Partners with Local Businesses",
        date: "2023-10-01",
        desc:
          "Munawara is proud to announce its partnership with local businesses to enhance community engagement.",
      },
      {
        title: "Munawara Launches New AI Tools",
        date: "2023-09-15",
        desc:
          "Discover the latest AI tools from Munawara designed to streamline your business operations.",
      },
      {
        title: "Munawara Expands Global Reach",
        date: "2023-08-20",
        desc:
          "Munawara is excited to announce its expansion into new international markets.",
      },
      {
        title: "Munawara's Commitment to Sustainability",
        date: "2023-07-10",
        desc:
          "Learn about Munawara's initiatives to promote sustainability in the tech industry.",
      },
    ],
  },
  {
    title: "Press Releases",
    link: "/press/releases",
    items: [
      {
        title: "Munawara Announces New Funding Round",
        date: "2023-09-01",
        desc:
          "Munawara has successfully closed a new funding round to accelerate growth.",
      },
      {
        title: "Munawara's CEO Interviewed by TechCrunch",
        date: "2023-08-15",
        desc:
          "Read the exclusive interview with Munawara's CEO discussing the future of technology.",
      },
      {
        title: "Munawara's New Office Opening",
        date: "2023-07-25",
        desc:
          "Join us for the grand opening of Munawara's new office in downtown.",
      },
      {
        title: "Munawara's Community Engagement Program",
        date: "2023-06-30",
        desc:
          "Munawara is launching a new program to engage with the local community.",
      },
    ],
  },
  {
    title: "Media Coverage",
    link: "/press/media",
    items: [
      {
        title: "Munawara Featured in Forbes",
        date: "2023-09-10",
        desc:
          "Forbes highlights Munawara's innovative approach to technology.",
      },
      {
        title: "Munawara's CEO on Bloomberg",
        date: "2023-08-05",
        desc:
          "Bloomberg interviews Munawara's CEO about the future of AI.",
      },
      {
        title: "Munawara's Impact on Local Economy",
        date: "2023-07-15",
        desc:
          "Local news covers Munawara's positive impact on the local economy.",
      },
      {
        title: "Munawara's Sustainability Efforts",
        date: "2023-06-20",
        desc:
          "Media coverage of Munawara's commitment to sustainability.",
      },
    ],
  },
  {
    title: "Upcoming Events",
    link: "/press/events",
    items: [
      {
        title: "Munawara Tech Conference 2023",
        date: "2023-10-15",
        desc:
          "Join us for our annual tech conference featuring industry leaders.",
        isEvent: true,
      },
      {
        title: "Webinar on AI Innovations",
        date: "2023-11-01",
        desc:
          "Register for our upcoming webinar on the latest AI innovations.",
        isEvent: true,
      },
      {
        title: "Community Engagement Day",
        date: "2023-11-20",
        desc:
          "Join us for a day of community engagement and activities.",
        isEvent: true,
      },
      {
        title: "Sustainability Workshop",
        date: "2023-12-05",
        desc:
          "Participate in our workshop focused on sustainability practices.",
        isEvent: true,
      },
    ],
  },
  {
    title: "Recent News",
    link: "/press/news",
    items: [
      {
        title: "Munawara's New Office Opening",
        date: "2023-09-25",
        desc:
          "Join us for the grand opening of Munawara's new office in downtown.",
      },
      {
        title: "Munawara's Community Engagement Program",
        date: "2023-09-10",
        desc:
          "Munawara is launching a new program to engage with the local community.",
      },
      {
        title: "Munawara's Commitment to Sustainability",
        date: "2023-08-30",
        desc:
          "Learn about Munawara's initiatives to promote sustainability in the tech industry.",
      },
      {
        title: "Munawara's Impact on Local Economy",
        date: "2023-08-15",
        desc:
          "Local news covers Munawara's positive impact on the local economy.",
      },
    ],
  },
];

const socialLinks = [
  {
    name: "Twitter",
    href: "https://x.com/munawara",
    icon: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.01-4.49 4.49 0 .352.04.695.116 1.022C7.728 9.36 4.1 7.6 1.67 4.98a4.48 4.48 0 0 0-.607 2.26c0 1.56.795 2.94 2.01 3.75a4.48 4.48 0 0 1-2.034-.563v.057c0 2.18 1.55 4 3.61 4.42a4.5 4.5 0 0 1-2.03.077c.57 1.78 2.23 3.08 4.2 3.12A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.19-.01-.38-.02-.57A9.1 9.1 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.7z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/munawara",
    icon: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/munawara.tech",
    icon: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.322-.592 1.322-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/munawara.tech",
    icon: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
];

export default function Press() {
  return (
    <section className="p-6 md:p-10 bg-gray-50 text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-800 mb-4 tracking-tight">
            Press & Media
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Explore the latest news, updates, and achievements from Munawara.
          </p>
        </header>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {pressHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-6 border-l-4 border-sky-700"
            >
              <h2 className="text-xl font-semibold text-sky-800 mb-2">{item.title}</h2>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Sectioned News */}
        {sections.map((section, idx) => (
          <div key={section.title} className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-sky-800">{section.title}</h2>
              <Link
                href={section.link}
                className="text-sky-700 hover:underline font-medium transition"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item, i) => (
                <div
                  key={item.title + item.date}
                  className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col gap-2 border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-sky-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    {"isEvent" in item && item.isEvent ? "Date" : "Published on"}:{" "}
                    <span className="font-medium">{item.date}</span>
                  </p>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Contact & Social */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-sky-800">Contact Us</h2>
            <Link href="/contact" className="text-sky-700 hover:underline font-medium">
              Get in Touch
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-gray-700 mb-2">
                For media inquiries, please email us at{" "}
                <a
                  href="mailto:munawara.tech@gmail.com"
                  className="text-sky-700 hover:underline font-medium"
                >
                  munawara.tech@gmail.com
                </a>
                .
              </p>
              <p className="text-gray-700 mb-2">
                Follow us on social media for the latest updates:
              </p>
              <div className="flex gap-4 mt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 bg-sky-50 rounded-lg text-sky-800 hover:bg-sky-100 transition font-medium"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4 md:mt-0">
              <span className="font-semibold text-gray-800 mb-1">Quick Links</span>
              {quickLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sky-700 hover:underline font-medium"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex-1 px-6 py-3 bg-sky-700 text-white rounded-lg text-center font-semibold hover:bg-sky-800 transition"
          >
            Start Your Project
          </Link>
          <Link
            href="/about"
            className="flex-1 px-6 py-3 bg-white border border-sky-700 text-sky-700 rounded-lg text-center font-semibold hover:bg-sky-700 hover:text-white transition"
          >
            Learn More About Us
          </Link>
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>Stay tuned for more updates and exciting news from Munawara!</p>
        </footer>
      </div>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
      `}</style>
    </section>
  );
}
