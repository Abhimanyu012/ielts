import React from "react";
import { Award, Sparkles, GraduationCap } from "lucide-react";

// Static testimonial samples; in a real app these could come from an API
const testimonials = [
    {
        name: "Amanpreet K.",
        review:
            "I improved my band score from 6.0 to 7.5! The speaking practice and mock tests were game-changers.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Riya S.",
        review:
            "The AI feedback was so accurate and helpful. Highly recommend this institute!",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "Mohit G.",
        review:
            "24/7 support made my preparation stress-free. Amazing trainers and resources!",
        avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    },
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-[#0a0f1c] via-[#101624] to-[#181e2a]">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section heading with icon */}
                <h2 className="flex items-center gap-2 text-4xl font-extrabold mb-12 text-center tracking-tight text-gray-100 drop-shadow-lg animate-shine uppercase font-montserrat">
                    <Award className="text-yellow-400" size={32} /> Student
                    Testimonials
                </h2>
                {/* Testimonial cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="relative bg-gradient-to-br from-[#181e2a] via-[#232946] to-[#101624] p-10 rounded-3xl shadow-2xl border-2 border-[#232946] hover:border-blue-700 hover:scale-105 transition-all text-center group animate-float"
                        >
                            {/* Avatar */}
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="mx-auto mb-4 w-20 h-20 rounded-full border-4 border-blue-400 group-hover:border-yellow-400 transition-all shadow-lg animate-bounce"
                            />
                            {/* Quote */}
                            <p className="text-lg text-gray-200 mb-4 italic">"{t.review}"</p>
                            {/* Reviewer name */}
                            <span className="block text-blue-400 font-bold text-md">{t.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
