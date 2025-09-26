import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import SparklesBg from "../components/SparklesBg";

const Contact = () => {
    // State to track form submission status
    const [submitted, setSubmitted] = useState(false);
    // State to manage form input values
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    // State to handle error messages
    const [error, setError] = useState("");

    // Handle input field changes and reset error state
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form fields
        if (!form.name || !form.email || !form.message) {
            setError("Please fill in all fields.");
            return;
        }
        // Simulate successful submission
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section className="max-w-5xl mx-auto py-12 md:py-24 px-2 md:px-4 animate-float relative overflow-hidden">
            {/* Background sparkles for a dynamic and engaging visual effect */}
            <SparklesBg count={40} />
            {/* Page heading */}
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 md:mb-10 drop-shadow-lg tracking-tight animate-shine text-blue-400 uppercase font-montserrat relative z-10">
                Contact Us
            </h1>
            {/* Form container with styling */}
            <div className="bg-gray-900/90 rounded-3xl shadow-2xl p-6 md:p-12 border border-blue-900 relative z-10 mb-8 md:mb-12 transition-all duration-300">
                <form className="space-y-8 md:space-y-10" onSubmit={handleSubmit}>
                    {/* Full Name input field */}
                    <div className="relative">
                        <label htmlFor="name" className="block mb-2 text-blue-400 font-semibold">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full p-4 rounded-lg border border-blue-900 focus:ring-2 focus:ring-blue-400 outline-none bg-gray-900/60"
                            placeholder="Enter your full name"
                        />
                    </div>
                    {/* Email Address input field */}
                    <div className="relative">
                        <label htmlFor="email" className="block mb-2 text-blue-400 font-semibold">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full p-4 rounded-lg border border-blue-900 focus:ring-2 focus:ring-blue-400 outline-none bg-gray-900/60"
                            placeholder="Enter your email address"
                        />
                    </div>
                    {/* Message textarea field */}
                    <div className="relative">
                        <label htmlFor="message" className="block mb-2 text-blue-400 font-semibold">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full p-4 rounded-lg border border-blue-900 focus:ring-2 focus:ring-blue-400 outline-none bg-gray-900/60"
                            rows={4}
                            placeholder="Type your message here"
                        />
                    </div>
                    {/* Display error message if validation fails */}
                    {error && <div className="text-red-400 font-bold">{error}</div>}
                    {/* Display success message after form submission */}
                    {submitted && <div className="text-green-400 font-bold">Thank you! We'll get back to you soon.</div>}
                    {/* Submit button */}
                    <button type="submit" className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 text-white px-6 md:px-10 py-3 md:py-4 rounded-2xl shadow-xl font-bold ring-2 ring-blue-900 hover:scale-105 hover:shadow-xl transition-all uppercase font-montserrat focus:outline-none focus:ring-4 focus:ring-yellow-400">
                        Send
                    </button>
                </form>
            </div>
            {/* Contact information cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                {/* Email card */}
                <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900 p-6 md:p-8 rounded-2xl shadow-lg text-white flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <Mail size={32} className="mb-2 text-yellow-400" />
                    <span className="font-bold text-blue-400 mb-1">Email</span>
                    <span className="text-sm">abhimanyukumarssm0012@gmail.com</span>
                </div>
                {/* Phone card */}
                <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900 p-6 md:p-8 rounded-2xl shadow-lg text-white flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <Phone size={32} className="mb-2 text-yellow-400" />
                    <span className="font-bold text-blue-400 mb-1">Phone</span>
                    <span className="text-sm">+91 98765 43210</span>
                </div>
                {/* Location card */}
                <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900 p-6 md:p-8 rounded-2xl shadow-lg text-white flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <MapPin size={32} className="mb-2 text-yellow-400" />
                    <span className="font-bold text-blue-400 mb-1">Location</span>
                    <span className="text-sm">Chandigarh, India</span>
                </div>
            </div>
        </section>
    );
};

export default Contact;
