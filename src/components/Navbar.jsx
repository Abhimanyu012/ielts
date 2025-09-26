import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-700/70 backdrop-blur-md text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-2xl tracking-wide drop-shadow-lg">IELTS Institute</div>
        <ul className="flex space-x-6">
          <li className="hover:text-blue-300 transition-colors cursor-pointer font-medium drop-shadow-md">Home</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer font-medium drop-shadow-md">Courses</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer font-medium drop-shadow-md">About</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer font-medium drop-shadow-md">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
