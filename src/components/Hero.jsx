import React from "react";
import banner from "../assets/ielts-banner.jpg";

const Hero = () => {
  return (
    <section className="bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Achieve Your Dream IELTS Band!</h1>
          <p className="text-lg text-blue-700 mb-6">Join our expert-led institute for personalized coaching, AI-powered assessments, and 24/7 support.</p>
          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition-colors font-semibold">Join Now</button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={banner} alt="IELTS Banner" className="rounded-xl shadow-xl w-full max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
