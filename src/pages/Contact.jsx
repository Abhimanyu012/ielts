import React from "react";

const Contact = () => (
  <section className="max-w-4xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold text-blue-800 mb-6 drop-shadow-lg">Contact Us</h1>
    <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8">
      <form className="space-y-6">
        <div>
          <label className="block text-blue-700 font-semibold mb-2">Name</label>
          <input type="text" className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-blue-700 font-semibold mb-2">Email</label>
          <input type="email" className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Your Email" />
        </div>
        <div>
          <label className="block text-blue-700 font-semibold mb-2">Message</label>
          <textarea className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none" rows={4} placeholder="Your Message" />
        </div>
        <button type="submit" className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 text-white px-8 py-3 rounded-xl shadow-xl hover:scale-105 hover:brightness-110 transition-all font-semibold ring-2 ring-blue-300">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
