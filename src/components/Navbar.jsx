import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#0a0f1c] via-[#101624] to-[#181e2a] shadow-lg border-b-2 border-[#232946]">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {/* Brand logo: simple SVG mark + typographic brand */}
                    <span className="flex items-center gap-2">
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-blue-400 animate-float"
                        >
                            <path
                                d="M2 7l10-4 10 4-10 4-10-4z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 11v7"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M7 14v2a5 5 0 0 0 10 0v-2"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="font-extrabold text-xl text-blue-400 tracking-wide uppercase font-montserrat drop-shadow-lg">
                            IELTS{" "}
                            <span className="text-indigo-400">Institute</span>
                        </span>
                    </span>
                </div>
                {/* Desktop nav links */}
                <ul className="hidden md:flex gap-8 text-gray-200 font-semibold text-lg">
                    {[
                        { label: "Home", href: "/" },
                        { label: "Courses", href: "/courses" },
                        { label: "About", href: "/about" },
                        { label: "Contact", href: "/contact" },
                    ].map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="relative px-2 py-1 transition-colors duration-200 hover:text-blue-400 focus:text-blue-400 uppercase font-montserrat"
                            >
                                {item.label}
                                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </a>
                        </li>
                    ))}
                </ul>
                {/* Mobile menu button (toggles small-screen menu) */}
                <div className="md:hidden">
                    <button
                        className="p-2 rounded-lg bg-blue-700 hover:bg-blue-800 transition"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            width="28"
                            height="28"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                {/* Mobile sliding menu (renders only when open) */}
                {menuOpen && (
                    <ul className="absolute top-full left-0 w-full bg-gradient-to-r from-blue-900 via-indigo-900 to-[#232946] border-b border-blue-900 flex flex-col items-center py-4 md:hidden animate-slide-down">
                        {navLinks.map((link) => (
                            <li key={link.name} className="mb-2">
                                <Link
                                    to={link.path}
                                    className={`font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${location.pathname === link.path
                                            ? "text-blue-400 bg-blue-700/30"
                                            : "text-blue-100 hover:text-blue-400 hover:bg-blue-700/20"
                                        }`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
