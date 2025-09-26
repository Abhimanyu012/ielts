import React from "react";
import { Facebook, Instagram, Mail, GraduationCap } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-r from-[#0a0f1c] via-[#101624] to-[#181e2a] py-10 mt-0 border-t-2 border-[#232946] overflow-hidden animate-gradient">
            {/* Thin glowing divider at the top for subtle visual separation */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 via-indigo-500 to-blue-700 blur-md opacity-60" />
            {/* Decorative blurred blobs/overlays for depth (pointer-events-none so it doesn't block clicks) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-10 top-1/2 w-32 h-32 bg-blue-900/20 rounded-full blur-2xl animate-float" />
                <div className="absolute right-10 bottom-0 w-24 h-24 bg-indigo-700/20 rounded-full blur-2xl animate-float" />
            </div>
            {/* Footer content: brand + quick links + social icons */}
            <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 z-10">
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                    {/* Brand mark and name */}
                    <GraduationCap className="text-blue-100" size={24} />
                    <span className="font-bold text-lg text-gray-100 tracking-wide uppercase font-montserrat">
                        IELTS <span className="text-indigo-400">Institute</span>
                    </span>
                    {/* Quick mail link (keeps contact easy) */}
                    <a
                        href="mailto:info@ieltsinstitute.com"
                        className="hover:text-blue-400 transition-colors animate-bounce"
                        title="Email"
                    >
                        <Mail size={22} />
                    </a>
                </div>
                {/* Small navigation / legal links */}
                <ul className="flex space-x-6 text-sm items-center">
                    <li className="hover:text-blue-400 transition-colors cursor-pointer animate-pulse">
                        <a href="/privacy" className="transition-transform hover:scale-110">Privacy</a>
                    </li>
                    <li className="hover:text-blue-400 transition-colors cursor-pointer animate-pulse">
                        <a href="/terms" className="transition-transform hover:scale-110">Terms</a>
                    </li>
                    <li className="hover:text-blue-400 transition-colors cursor-pointer animate-pulse">
                        <a href="/contact" className="transition-transform hover:scale-110">Contact</a>
                    </li>
                    {/* Social logins (links kept generic) */}
                    <li>
                        <a
                            href="https://www.instagram.com/accounts/login/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-400 hover:text-pink-600 transition-transform hover:scale-125"
                            title="Instagram Login"
                        >
                            <Instagram size={22} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/login/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-600 transition-transform hover:scale-125"
                            title="Facebook Login"
                        >
                            <Facebook size={22} />
                        </a>
                    </li>
                </ul>
            </div>
            {/* Copyright line */}
            <div className="relative text-center text-xs mt-4 text-gray-300 z-10">
                © 2025 IELTS Institute. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
