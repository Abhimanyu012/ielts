import React from "react";

const testimonials = [
  {
    name: "Amanpreet K.",
    review:
      "I improved my band score from 6.0 to 7.5! The speaking practice and mock tests were game-changers.",
  },
  {
    name: "Riya S.",
    review:
      "The AI feedback was so accurate and helpful. Highly recommend this institute!",
  },
  {
    name: "Mohit G.",
    review:
      "24/7 support made my preparation stress-free. Amazing trainers and resources!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Student Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <p className="text-blue-700 mb-4 italic">“{t.review}”</p>
              <div className="font-semibold text-blue-800">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
