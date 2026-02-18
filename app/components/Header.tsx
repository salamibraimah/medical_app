"use client"; // ✅ This allows useState to work

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div>
  <Link href="/">
    <span className="text-2xl font-bold text-blue-400 drop-shadow-lg cursor-pointer">
      MediApp
    </span>
  </Link>
</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-blue-300 transition">Home</a>
          <Link href="/features" className="hover:text-blue-300 transition">Features</Link>
          <Link href="/about" className="hover:text-blue-300 transition">About</Link>
          <Link href="/payment" className="hover:text-blue-300 transition">Payment</Link>
          <Link href="/contact" className="hover:text-blue-300 transition">Contact</Link>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-400 transition">
              Book Appointment
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-400 focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white px-4 py-4 space-y-4">
          <Link href="/features" className="block hover:text-blue-300 transition" onClick={() => setMenuOpen(false)}>Features</Link>
          <Link href="/about" className="block hover:text-blue-300 transition" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/payment" className="block hover:text-blue-300 transition" onClick={() => setMenuOpen(false)}>Payment</Link>
          <Link href="/contact" className="block hover:text-blue-300 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/contact">
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-400 transition">
              Book Appointment
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
