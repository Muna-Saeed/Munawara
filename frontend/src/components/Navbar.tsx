"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Login" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();

  // Close menu on outside click (mobile)
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="p-3 md:p-4 bg-gradient-to-r from-sky-900 via-sky-800 to-sky-700 text-white flex justify-between items-center relative shadow-md z-50">
      <Link href="/" className="flex items-center group">
        <span className="inline-flex items-center justify-center bg-white/90 rounded-full shadow-lg border-2 border-sky-400 group-hover:scale-105 transition-transform duration-200" style={{ width: 64, height: 64 }}>
          <Image
            src="/logo.png"
            alt="Munawara Logo"
            width={56}
            height={56}
            className="object-contain"
            priority
          />
        </span>
        <span className="text-3xl font-extrabold ml-4 tracking-tight group-hover:text-sky-300 transition-colors duration-200 drop-shadow-lg">
          Munawara
        </span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-2 lg:space-x-4 text-base font-medium">
        {NAV_LINKS.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`px-3 py-2 rounded transition-colors duration-200 hover:bg-sky-700/20 hover:text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 relative ${
                  isActive ? "text-sky-200 font-bold" : ""
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-300 rounded-full"></span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Hamburger Icon */}
      <button
        className="md:hidden ml-2 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition hover:bg-sky-800"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden animate-fade-in"
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <ul
        id="mobile-menu"
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-sky-900 via-sky-800 to-sky-700 shadow-2xl flex flex-col text-lg font-semibold text-gray-100 md:hidden z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ willChange: "transform" }}
        tabIndex={menuOpen ? 0 : -1}
        aria-label="Mobile Navigation"
      >
        <li className="flex items-center justify-between px-6 py-4 border-b border-sky-800">
          <span className="text-xl font-bold tracking-tight">Menu</span>
          <button
            className="p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 hover:bg-sky-800"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
        {NAV_LINKS.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`block px-6 py-3 w-full hover:bg-sky-700/20 hover:text-sky-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 relative ${
                  isActive ? "text-sky-200 bg-sky-700/10 font-bold" : ""
                }`}
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {label}
                {isActive && (
                  <span className="absolute left-0 top-0 w-1 h-full bg-sky-300 rounded-r-full"></span>
                )}
              </Link>
            </li>
          );
        })}
        <li className="mt-auto px-6 py-4 text-xs text-gray-300 border-t border-sky-800">
          &copy; {new Date().getFullYear()} Munawara. All rights reserved.
        </li>
      </ul>
    </nav>
  );
}
