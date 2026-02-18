'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-blue-400 font-bold text-xl mb-4 md:mb-0 drop-shadow-lg">MediApp</div>
        <div className="flex flex-wrap gap-6 text-gray-300">
          <a href="/" className="hover:text-blue-400 transition">Home</a>
          <a href="/features" className="hover:text-blue-400 transition">Features</a>
          <a href="/about" className="hover:text-blue-400 transition">About</a>
          <a href="/payment" className="hover:text-blue-400 transition">Payment</a>
          <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
        <div className="text-gray-400 mt-4 md:mt-0">&copy; {new Date().getFullYear()} Mahlock MediApp. All rights reserved.</div>
      </div>
    </footer>
  );
}
