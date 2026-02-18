"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PaymentPage() {
  const payments = [
    { method: "Credit Card", desc: "Pay securely with Visa, Mastercard, or AMEX." },
    { method: "PayPal", desc: "Fast and reliable online payments." },
    { method: "Insurance", desc: "Use your health insurance for billing." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 font-sans">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center drop-shadow-lg">Payment Options</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {payments.map((p) => (
            <div key={p.method} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
              <h3 className="font-semibold text-xl mb-2 text-blue-400">{p.method}</h3>
              <p className="text-gray-300">{p.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
