"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FeaturesPage() {
  const features = [
    { title: "Easy Booking", desc: "Book appointments in seconds.", icon: "📅" },
    { title: "Online Consultations", desc: "Talk to doctors remotely.", icon: "💬" },
    { title: "Secure Records", desc: "Keep your medical data safe.", icon: "🔒" },
    { title: "24/7 Support", desc: "Assistance whenever you need.", icon: "🩺" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 font-sans">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center drop-shadow-lg">Our Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-xl mb-2 text-blue-400">{f.title}</h3>
              <p className="text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
