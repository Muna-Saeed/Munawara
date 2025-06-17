"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between items-center relative">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Munawara Logo"
          width={40}
          height={40}
          className="rounded-full shadow-lg"
        />
        <h1 className="text-2xl font-bold ml-4">Munawara</h1>
      </div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden ml-4 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
          />
        </svg>
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4 text-lg font-semibold text-gray-400">
        <li><Link href="/" className="hover:text-white">Home</Link></li>
        <li><Link href="/services" className="hover:text-white">Services</Link></li>
        <li><Link href="/about" className="hover:text-white">About</Link></li>
        <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
        <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
        <li><Link href="/testimonials" className="hover:text-white">Testimonials</Link></li>
        <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
        <li><Link href="/login" className="hover:text-white">Login</Link></li>
      </ul>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full right-0 mt-2 w-48 bg-gray-900 rounded shadow-lg flex flex-col text-lg font-semibold text-gray-400 md:hidden z-50">
          <li><Link href="/" className="hover:text-white block px-4 py-2" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/services" className="hover:text-white block px-4 py-2" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link href="/about" className="hover:text-white block px-4 py-2" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/blog" className="hover:text-white block px-4 py-2" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li><Link href="/portfolio" className="hover:text-white block px-4 py-2" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
          <li><Link href="/testimonials" className="hover:text-white block px-4 py-2" onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
          <li><Link href="/contact" className="hover:text-white block px-4 py-2" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link href="/login" className="hover:text-white block px-4 py-2" onClick={() => setMenuOpen(false)}>Login</Link></li>
        </ul>
      )}
    </nav>
  );
}


