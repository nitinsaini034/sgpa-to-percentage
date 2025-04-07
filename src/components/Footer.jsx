import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/Aboutus" className="hover:text-blue-400">About</a>
          <a href="/Contactus" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-500">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-pink-500">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-sky-400">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} SGPATO%. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
