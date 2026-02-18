"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 font-sans">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Contact Us</h1>
        <p className="text-gray-300 text-lg mb-6 drop-shadow-md">
          Have questions? Reach out to our support team or send us a message below.
        </p>
        <form className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col gap-4 max-w-xl mx-auto">
          <input type="text" placeholder="Name" className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600"/>
          <input type="email" placeholder="Email" className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600"/>
          <textarea placeholder="Message" className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600"></textarea>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-400 transition">
            Send Message
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
