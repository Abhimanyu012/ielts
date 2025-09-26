import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-2xl tracking-wide">IELTS Institute</div>
        <ul className="flex space-x-6">
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Home</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Courses</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer">About</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
