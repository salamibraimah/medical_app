"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 font-sans">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">About Us</h1>
        <p className="text-gray-300 text-lg mb-6 drop-shadow-md">
          MediApp combines technology and healthcare expertise to provide fast, secure, and trusted medical services.
        </p>
        <div className="flex flex-wrap gap-6 mt-6">
          <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full shadow-lg">Trusted Doctors</span>
          <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full shadow-lg">Secure & Private</span>
          <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full shadow-lg">Easy Appointments</span>
        </div>
      </main>

      <Footer />
    </div>
  );
}
