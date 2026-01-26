"use client";
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">MyApp</div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4">
        <a href="#" className="hover:text-gray-200">Home</a>
        <a href="#" className="hover:text-gray-200">About</a>
        <a href="#" className="hover:text-gray-200">Contact</a>
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-blue-600 flex flex-col items-center md:hidden py-4 space-y-2">
          <a href="#" className="hover:text-gray-200">Home</a>
          <a href="#" className="hover:text-gray-200">About</a>
          <a href="#" className="hover:text-gray-200">Contact</a>
        </nav>
      )}
    </header>
  );
}
