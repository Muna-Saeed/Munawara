"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { UserSessionType } from "next-auth";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const userMenuRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  const [hasTrackedLogin, setHasTrackedLogin] = useState(false);


  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";


  useEffect(() => {
    if (!isAuthenticated || !session?.user?.id || hasTrackedLogin) return;
    console.log(session)

    const trackLogin = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const geo = await res.json();

        const data = {
          userId: session.user.id,
          sessionId: session.id,
          loginTime: new Date(),
          lastActiveAt: new Date(),
          isOnline: true,
          ipAddress: geo.ip || '',
          location: {
            city: geo.city,
            country: geo.country_name,
            lat: geo.latitude,
            lon: geo.longitude,
          },
          userAgent: navigator.userAgent,
        };

        const response = await fetch(`/api/users/${data.userId}/login-log`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setHasTrackedLogin(true);
        } else {
          console.warn('Login tracking failed with status:', response.status);
        }
      } catch (err) {
        console.error('Failed to track login session', err);
      }
    };

    trackLogin();
  }, [isAuthenticated, session, hasTrackedLogin]);



  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const NAV_LINKS = useMemo(() => {
    const base = [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/contact", label: "Contact" },
    ];

    if (!isAuthenticated) {
      base.push({ href: "/login", label: "Login" });
    }

    return base;
  }, [isAuthenticated]);

  const UserCircleIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.121 17.804A9 9 0 1119.88 6.196 9 9 0 015.12 17.804z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14c-3.314 0-6 1.686-6 3.75v.75h12v-.75c0-2.064-2.686-3.75-6-3.75z"
      />
    </svg>
  );

  return (
    <nav className="p-3 md:p-4 bg-gradient-to-r from-sky-900 via-sky-800 to-sky-700 text-white flex justify-between items-center relative shadow-md z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center group">
        <span className="inline-flex items-center justify-center bg-white/90 rounded-full shadow-lg border-2 border-sky-400 group-hover:scale-105 transition-transform duration-200 w-16 h-16">
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
      <ul className="hidden md:flex space-x-2 lg:space-x-4 text-base font-medium items-center h-[44px]">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`px-3 py-2 rounded transition-colors duration-200 hover:bg-sky-700/20 hover:text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 relative ${pathname === href ? "text-sky-200 font-bold" : ""
                }`}
              style={{ lineHeight: "1.25rem" }}
            >
              {label}
              {pathname === href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-300 rounded-full"></span>
              )}
            </Link>
          </li>
        ))}

        {/* User Menu */}
        {isAuthenticated && (
          <li className="relative" ref={userMenuRef}>
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="p-2 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-sky-700/30 hover:text-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              style={{ transform: "translateY(1px)" }}
              aria-expanded={userMenuOpen}
              aria-haspopup="true"
            >
              {session?.user?.image ? (
                <Image
                  src={session.user.image}
                  width={28}
                  height={28}
                  className="rounded-full"
                  alt="User profile"
                />
              ) : (
                <UserCircleIcon />
              )}
              <span className="sr-only">User menu</span>
            </button>

            {/* Enhanced Dropdown Menu */}
            {userMenuOpen && (
              <div
                className="absolute right-0 mt-1 w-48 bg-white text-sky-900 rounded-lg shadow-xl overflow-hidden z-50 animate-fade-in"
                style={{
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transformOrigin: "top right"
                }}
              >
                <div className="py-1">
                  <div className="px-4 py-2 text-sm text-sky-700 border-b border-sky-100">
                    {session.user?.name || "My Account"}
                  </div>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm hover:bg-sky-50 transition-colors"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-sky-50 transition-colors"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    onClick={() => {
                      signOut({ callbackUrl: "/" });
                      setUserMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-sky-50 text-red-600 transition-colors"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </li>
        )}
      </ul>

      {/* Mobile Menu Button */}
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
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-sky-900 via-sky-800 to-sky-700 shadow-2xl flex flex-col text-lg font-semibold text-gray-100 md:hidden z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
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

        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`block px-6 py-3 w-full hover:bg-sky-700/20 hover:text-sky-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 relative ${pathname === href ? "text-sky-200 bg-sky-700/10 font-bold" : ""
                }`}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {label}
              {pathname === href && (
                <span className="absolute left-0 top-0 w-1 h-full bg-sky-300 rounded-r-full"></span>
              )}
            </Link>
          </li>
        ))}

        {isAuthenticated && (
          <>
            <div className="border-t border-sky-800">
              <Link
                href="/profile"
                className={`block px-6 py-3 w-full hover:bg-sky-700/20 hover:text-sky-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 relative ${pathname === "/profile" ? "text-sky-200 bg-sky-700/10 font-bold" : ""
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
              <Link
                href="/settings"
                className={`block px-6 py-3 w-full hover:bg-sky-700/20 hover:text-sky-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 relative ${pathname === "/settings" ? "text-sky-200 bg-sky-700/10 font-bold" : ""
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                Settings
              </Link>
              <button
                onClick={() => {
                  signOut({ callbackUrl: "/" });
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-6 py-3 hover:bg-sky-700/20 hover:text-sky-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 text-red-300"
              >
                Sign out
              </button>
            </div>
          </>
        )}

        <li className="mt-auto px-6 py-4 text-xs text-gray-300 border-t border-sky-800">
          &copy; {new Date().getFullYear()} Munawara. All rights reserved.
        </li>
      </ul>
    </nav>
  );
}