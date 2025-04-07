import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
         <img src="/src/assets/download.png" alt="" className="h-14 w-32"/>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 text-[20px] font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/percentage-to-cgpa" className="hover:text-blue-600">Percentage to CGPA</Link>
          <Link to="/sgpa-to-cgpa" className="hover:text-blue-600">SGPA to CGPA</Link>
          <Link to="/marks-calculator" className="hover:text-blue-600">Marks Calculator</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/percentage-to-cgpa" className="block py-2 text-gray-700 hover:text-blue-600">Percentage to CGPA</Link>
          <Link to="/sgpa-to-cgpa" className="block py-2 text-gray-700 hover:text-blue-600">SGPA to CGPA</Link>
          <Link to="/marks-calculator" className="block py-2 text-gray-700 hover:text-blue-600">Marks Calculator</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
