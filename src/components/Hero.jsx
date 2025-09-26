import React from "react";
import { Sparkles } from "lucide-react";

const bannerUrl = "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80";

// Industry-standard Hero component
// - Uses semantic <header>
// - Provides clear primary and secondary CTAs
// - Keeps decorative elements lightweight and non-blocking
// - Ensures accessible focus states and descriptive alt text
const Hero = () => {
    const scrollToCourses = (e) => {
        e.preventDefault();
        document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className="relative min-h-[72vh] flex items-center bg-gradient-to-br from-[#071022] via-[#0b1420] to-[#0f1724] overflow-hidden">
            {/* Lightweight decorative blobs (pure CSS) */}
            <div className="absolute left-0 top-0 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl pointer-events-none transform -translate-x-1/4 -translate-y-1/4" aria-hidden="true" />
            <div className="absolute right-0 bottom-0 w-56 h-56 bg-indigo-900/20 rounded-full blur-2xl pointer-events-none transform translate-x-1/6 translate-y-1/6" aria-hidden="true" />

            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left column: core messaging */}
                <div>
                    <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-blue-300 mb-4">
                        <Sparkles className="text-yellow-400" size={16} aria-hidden="true" />
                        Trusted IELTS coaching
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-100 mb-4">
                        Achieve Your Dream IELTS Band
                    </h1>

                    <p className="text-lg text-gray-300 mb-6 max-w-xl">
                        Individualized lesson plans, real exam simulations, and AI-assisted scoring to help you improve fast. Join a community of 10,000+ students who improved their bands.
                    </p>

                    {/* CTA group: primary + secondary */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button
                            onClick={scrollToCourses}
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:scale-[1.02] transition-transform focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400"
                        >
                            Get Started
                        </button>

                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-blue-700 text-blue-200 hover:bg-blue-900/30 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400"
                        >
                            Schedule a Free Consultation
                        </a>
                    </div>

                    {/* Trust stats (semantic, small) */}
                    <ul className="mt-8 flex gap-8 text-sm text-gray-300" aria-hidden="false">
                        <li>
                            <strong className="block text-lg text-blue-300">10,000+</strong>
                            <span className="text-xs">Students</span>
                        </li>
                        <li>
                            <strong className="block text-lg text-blue-300">4.9/5</strong>
                            <span className="text-xs">Avg. rating</span>
                        </li>
                        <li>
                            <strong className="block text-lg text-blue-300">98%</strong>
                            <span className="text-xs">Success rate</span>
                        </li>
                    </ul>
                </div>

                {/* Right column: illustrative image (made slightly larger on md+ screens) */}
                <div className="flex items-center justify-center">
                    <picture className="w-full max-w-lg md:max-w-xl rounded-3xl overflow-hidden shadow-2xl">
                        {/* Provide a larger default image but allow browser to pick best source */}
                        <img
                            src={bannerUrl}
                            alt="Students in a coaching session preparing for IELTS"
                            loading="lazy"
                            className="w-full h-64 sm:h-80 md:h-[480px] lg:h-[540px] object-cover block"
                        />
                    </picture>
                </div>
            </div>

            {/* Accessibility note: keep focus order logical and ensure high contrast on text */}
        </header>
    );
};

export default Hero;
