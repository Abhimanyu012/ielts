import React from "react";
import banner from "../assets/ielts-banner.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-white to-blue-200 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 drop-shadow-xl">Achieve Your Dream IELTS Band!</h1>
            <p className="text-lg text-blue-700 mb-6">Join our expert-led institute for personalized coaching, AI-powered assessments, and 24/7 support.</p>
            <button className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 text-white px-8 py-4 rounded-xl shadow-xl hover:scale-105 hover:brightness-110 transition-all font-semibold ring-2 ring-blue-300">Join Now</button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={banner} alt="IELTS Banner" className="rounded-2xl shadow-2xl w-full max-w-md border-4 border-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
