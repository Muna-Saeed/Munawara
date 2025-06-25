import Head from "next/head";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO",
    image: "/images/client1.png",
    quote:
      "Munawara transformed my small business with their expert web development and AI tools. Highly recommend!",
  },
  {
    name: "Jane Smith",
    title: "Entrepreneur",
    image: "/images/client2.png",
    quote:
      "Their SEO services helped my website rank #1 on Google within months. Incredible team!",
  },
  {
    name: "Sarah Johnson",
    title: "Operations Manager",
    image: "/images/client3.png",
    quote:
      "The AI tools provided by Munawara have streamlined our operations and improved efficiency.",
  },
  {
    name: "Michael Lee",
    title: "Marketing Director",
    image: "/images/client4.png",
    quote:
      "Professional, responsive, and creative. Munawara exceeded our expectations at every step.",
  },
];

export default function Testimonials() {
  return (
    <>
      <Head>
        <title>Munawara - Testimonials</title>
        <meta
          name="description"
          content="Read what our clients have to say about Munawara's services and results."
        />
      </Head>
      <section className="min-h-screen bg-gray-50 py-12 px-4 md:px-0 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sky-800 mb-4 tracking-tight">
              What Our Clients Say
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-2">
              We pride ourselves on delivering exceptional service and results.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              Here’s what our clients have to say about working with Munawara.
            </p>
          </header>

          {/* Client Logos */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                className="flex flex-col items-center"
                aria-label={`Logo of ${t.name}`}
              >
                <div className="bg-white rounded-full shadow-md p-2">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover h-16 w-16"
                  />
                </div>
                <span className="mt-2 text-xs text-gray-500 font-medium">{t.name.split(" ")[0]}</span>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={t.name + t.title}
                className="relative bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="rounded-full border-4 border-sky-100 shadow"
                  />
                </div>
                <div className="mt-8 text-center">
                  <svg
                    className="mx-auto mb-3 text-sky-300"
                    width="32"
                    height="32"
                    fill="none"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M12 12c0-3.314-2.686-6-6-6S0 8.686 0 12c0 2.21 1.79 4 4 4h2v2c0 2.21 1.79 4 4 4s4-1.79 4-4v-2h-2c-2.21 0-4-1.79-4-4zm20 0c0-3.314-2.686-6-6-6s-6 2.686-6 6c0 2.21 1.79 4 4 4h2v2c0 2.21 1.79 4 4 4s4-1.79 4-4v-2h-2c-2.21 0-4-1.79-4-4z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="italic text-gray-700 mb-4">&quot;{t.quote}&quot;</p>
                  <p className="font-semibold text-sky-800">
                    {t.name}
                    <span className="block text-sm font-normal text-gray-500">{t.title}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}