"use client";
import { useContext, useState, useEffect, useRef } from 'react';
import ThemeContext from '@/Context/ThemeContext';
import Link from 'next/link';
import { FaUserCircle, FaSearch, FaBars } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { signOut, useSession } from "next-auth/react";
import NavOverlayItem from '../NavOverlayItem/NavOverlayItem';
import SearchOverlay from '../Search/SearchOverlay';

function Header() {
    const { theme, setTheme } = useContext(ThemeContext);
    const { data: session } = useSession();
    const [showDropdown, setShowDropdown] = useState(false);
    const [showSearchOverlay, setShowSearchOverlay] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const mobileNavRef = useRef<HTMLDivElement>(null);

    const handleSearchToggle = () => {
        setShowSearchOverlay((prev) => !prev);
    };

    const handleSearch = (query: string) => {
        console.log('Searching for:', query);
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
            if (mobileNavRef.current &&
                !mobileNavRef.current.contains(event.target as Node) &&
                !(event.target as Element).closest('.mobile-menu-button')) {
                setMobileNavOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex flex-col md:flex-row items-center justify-between py-3 px-4">
                {/* Main header bar */}
                <div className="flex w-full md:w-auto items-center justify-between">
                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-accent hover:text-accent-foreground mobile-menu-button"
                        onClick={() => setMobileNavOpen(!mobileNavOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        <FaBars className="h-5 w-5" />
                    </button>

                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold tracking-tight">
                        Munawara
                    </Link>

                    {/* User controls */}
                    <div className="flex items-center space-x-2 md:space-x-4 ml-4">
                        <button
                            className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground"
                            onClick={handleSearchToggle}
                            aria-label="Search"
                        >
                            <FaSearch className="h-5 w-5" />
                        </button>

                        <button
                            className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground"
                            onClick={() => {
                                localStorage.setItem('hotel-theme', (!theme).toString());
                                setTheme(!theme);
                            }}
                            aria-label={theme ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {theme ? (
                                <MdOutlineLightMode className="h-5 w-5" />
                            ) : (
                                <MdDarkMode className="h-5 w-5" />
                            )}
                        </button>

                        <div className="relative" ref={dropdownRef}>
                            {session?.user ? (
                                <button
                                    className="p-1 rounded-full hover:bg-accent hover:text-accent-foreground"
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    aria-label="User menu"
                                >
                                    {session.user.image ? (
                                        <div className="h-8 w-8 rounded-full overflow-hidden">
                                            <img
                                                src={session.user.image}
                                                alt="User profile"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <FaUserCircle className="h-8 w-8" />
                                    )}
                                </button>
                            ) : (
                                <Link
                                    href="/auth"
                                    className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground"
                                    aria-label="Sign in"
                                >
                                    <FaUserCircle className="h-5 w-5" />
                                </Link>
                            )}
                            {showDropdown && (
                                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg origin-top-right">
                                    <div className="rounded-md border shadow-sm">
                                        <Link
                                            href={`/users/${session?.user.id}`}
                                            className="block w-full px-4 py-2 text-left text-sm hover:bg-accent"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            Profile
                                        </Link>
                                        <button
                                            onClick={() => signOut()}
                                            className="block w-full px-4 py-2 text-left text-sm hover:bg-accent"
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <NavOverlayItem label="Why Munawara">
                        <h3 className="text-lg font-semibold mb-2">Why Choose Us</h3>
                        <p className="text-sm">We bridge the digital divide with culturally-aware, tailored services.</p>
                    </NavOverlayItem>

                    <NavOverlayItem label="Solutions">
                        <h3 className="text-lg font-semibold mb-2">What We Offer</h3>
                        <ul className="text-sm list-disc list-inside">
                            <li><Link href={"/custom-websites"}> Custom Websites </Link></li>
                            <li><Link href={"/seo"}>SEO Strategies</Link></li>
                            <li><Link href={"/ai"}>AI-Powered Tools </Link></li>
                            <li><Link href={"/support"}>Localized Support</Link></li>
                        </ul>
                    </NavOverlayItem>

                    <NavOverlayItem label="Contact">
                        <h3 className="text-lg font-semibold mb-2">Let's Talk</h3>
                        <p className="text-sm">Email: contact@munawara.com<br />Phone: +123-456-7890</p>
                    </NavOverlayItem>
                </nav>

                {/* Mobile Navigation */}
                {mobileNavOpen && (
                    <div
                        ref={mobileNavRef}
                        className="md:hidden w-full mt-2 border-t pt-2"
                    >
                        <nav className="flex flex-col space-y-2">
                            <NavOverlayItem label="Home">
                                <h3 className="text-lg font-semibold mb-2">Welcome to Munawara</h3>
                                <p className="text-sm">Your digital partner for custom tools and growth.</p>
                            </NavOverlayItem>

                            <NavOverlayItem label="Why Munawara">
                                <h3 className="text-lg font-semibold mb-2">Why Choose Us</h3>
                                <p className="text-sm">We bridge the digital divide with culturally-aware, tailored services.</p>
                            </NavOverlayItem>

                            <NavOverlayItem label="Solutions">
                                <h3 className="text-lg font-semibold mb-2">What We Offer</h3>
                                <ul className="text-sm list-disc list-inside">
                                    <li>Custom Websites</li>
                                    <li>SEO Strategies</li>
                                    <li>AI-Powered Tools</li>
                                    <li>Localized Support</li>
                                </ul>
                            </NavOverlayItem>

                            <NavOverlayItem label="Contact">
                                <h3 className="text-lg font-semibold mb-2">Let's Talk</h3>
                                <p className="text-sm">Email: contact@munawara.com<br />Phone: +123-456-7890</p>
                            </NavOverlayItem>
                        </nav>
                    </div>
                )}
            </div>

            {/* Search Overlay */}
            <SearchOverlay
                isOpen={showSearchOverlay}
                onClose={handleSearchToggle}
                handleSearch={handleSearch}
            />
        </header>
    );
}

export default Header;