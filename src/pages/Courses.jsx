import React from "react";

const Courses = () => (
  <section className="max-w-4xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold text-blue-800 mb-6 drop-shadow-lg">Our Courses</h1>
    <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8">
      <ul className="space-y-6">
        <li className="border-b border-blue-100 pb-4">
          <span className="font-semibold text-blue-700">IELTS Academic</span> – Intensive training for academic test takers.
        </li>
        <li className="border-b border-blue-100 pb-4">
          <span className="font-semibold text-blue-700">IELTS General</span> – Focused coaching for general module.
        </li>
        <li>
          <span className="font-semibold text-blue-700">Crash Course</span> – Fast-track preparation for last-minute needs.
        </li>
      </ul>
    </div>
  </section>
);

export default Courses;
