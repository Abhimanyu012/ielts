import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <div className="font-bold text-lg">IELTS Institute</div>
          <div className="text-sm">info@ieltsinstitute.com | +91-98765-43210</div>
        </div>
        <ul className="flex space-x-6 text-sm">
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Privacy</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Terms</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className="text-center text-xs mt-4">© 2025 IELTS Institute. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
