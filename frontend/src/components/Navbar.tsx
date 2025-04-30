// frontend/components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between">
      <div className="flex items-center justify-center mb-2">
        <Image
          src="/l.png"
          alt="Munawara Logo"
          width={40}
          height={40}
          className="rounded-full shadow-lg"
        />
        <h1 className="text-2xl font-bold ml-4">Munawara</h1>
      </div>

      <div>
        <ul className="flex space-x-4 text-lg font-semibold  text-gray-400">
          <li><Link href="/" className="hover:text-white">Home</Link></li>
          <li><a href="/services" className="hover:text-white">Services</a></li>
          <li><a href="/about" className="hover:text-white">About</a></li>
          <li><a href="/blog" className="hover:text-white">Blog</a></li>
          <li><a href="/portfolio" className="hover:text-white">Portfolio</a></li>
          <li><a href="/testimonials" className="hover:text-white">Testimonials</a></li>
          <li><a href="/contact" className="hover:text-white">Contact</a></li>
          <li><a href="/login" className="hover:text-white">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}


