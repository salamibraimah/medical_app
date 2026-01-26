"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between relative sticky top-0 shadow-md z-50">
      {/* Logo */}
      <div className="text-2xl font-bold">MediBook</div>

      {/* Centered Navigation Links (desktop) */}
      <nav className="hidden md:flex flex-1 justify-center space-x-6 text-lg">
        <a href="#" className="hover:text-gray-200 transition-colors duration-300">Home</a>
        <a href="#" className="hover:text-gray-200 transition-colors duration-300">Doctors</a>
        <a href="#" className="hover:text-gray-200 transition-colors duration-300">Appointments</a>
        <a href="#" className="hover:text-gray-200 transition-colors duration-300">About</a>
      </nav>

      {/* Login / Sign-Up Buttons (desktop) */}
      <div className="hidden md:flex space-x-3 ml-6">
        <button className="px-4 py-1 border border-white text-white rounded hover:bg-white hover:text-blue-600 transition duration-300">
          Login
        </button>
        <button className="px-4 py-1 bg-white text-blue-600 rounded hover:bg-gray-100 transition duration-300">
          Sign Up
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-blue-600 flex flex-col items-center md:hidden py-4 space-y-3 shadow-md">
          <a href="#" className="hover:text-gray-200 transition-colors duration-300">Home</a>
          <a href="#" className="hover:text-gray-200 transition-colors duration-300">Doctors</a>
          <a href="#" className="hover:text-gray-200 transition-colors duration-300">Appointments</a>
          <a href="#" className="hover:text-gray-200 transition-colors duration-300">About</a>

          <div className="flex space-x-3 mt-2">
            <button className="px-4 py-1 border border-white text-white rounded hover:bg-white hover:text-blue-600 transition duration-300">
              Login
            </button>
            <button className="px-4 py-1 bg-white text-blue-600 rounded hover:bg-gray-100 transition duration-300">
              Sign Up
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
