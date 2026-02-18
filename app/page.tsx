export default function HomePage() {
  return (
    <div className="font-sans text-gray-100 bg-gray-900">

      {/* 1. Header / Navigation */}
      <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="text-2xl font-bold text-blue-400 drop-shadow-lg">MediApp</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-blue-300 transition">Features</a>
            <a href="#about" className="hover:text-blue-300 transition">About</a>
            <a href="#testimonials" className="hover:text-blue-300 transition">Testimonials</a>
            <a href="#contact" className="hover:text-blue-300 transition">Contact</a>
          </nav>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-400 transition">
            Book Appointment
          </button>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto mt-20 px-4 md:px-8 py-24
                          bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-inner">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Your Health, Our Priority
          </h1>
          <p className="text-gray-300 text-lg drop-shadow-md">
            Book doctors, consult online, and manage your health securely with ease.
          </p>
          <div className="flex space-x-4 mt-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-400 transition">
              Book Appointment
            </button>
            <button className="border border-blue-500 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          {/* Placeholder for app mockup / illustration */}
          <img src="/app-mockup.png" alt="App Mockup" className="w-full rounded-xl shadow-2xl ring-2 ring-blue-500 ring-opacity-50"/>
        </div>
        {/* Optional glowing blue overlay for effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-blue-400/10 to-transparent rounded-xl pointer-events-none animate-pulse"></div>
      </section>

      {/* 3. Features / How It Works */}
      <section id="features" className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-md">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {title: "Easy Booking", desc: "Book appointments in seconds.", icon: "📅"},
            {title: "Online Consultations", desc: "Talk to doctors remotely.", icon: "💬"},
            {title: "Secure Records", desc: "Keep your medical data safe.", icon: "🔒"},
            {title: "24/7 Support", desc: "Assistance whenever you need.", icon: "🩺"},
          ].map((feature) => (
            <div key={feature.title} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-xl mb-2 text-blue-400">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. About / Why Choose Us */}
      <section id="about" className="bg-gray-900 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-6 px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">Why Choose MediApp?</h2>
          <p className="text-gray-300 text-lg drop-shadow-md">
            Combining technology and healthcare expertise to provide fast, secure, and trusted medical services.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full shadow-lg">Trusted Doctors</span>
            <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full shadow-lg">Secure & Private</span>
            <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full shadow-lg">Easy Appointments</span>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section id="testimonials" className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-md">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {name: "Jane D.", review: "Booking was simple and fast. Highly recommend!", avatar: "/avatar1.png"},
            {name: "Mark T.", review: "The consultation feature is amazing.", avatar: "/avatar2.png"},
            {name: "Lucy P.", review: "Secure and easy to use. Love the app!", avatar: "/avatar3.png"},
          ].map((t) => (
            <div key={t.name} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
              <img src={t.avatar} alt={t.name} className="w-16 h-16 mx-auto rounded-full mb-4 ring-2 ring-blue-400"/>
              <p className="text-gray-300 mb-2"> {t.review} </p>
              <h4 className="font-semibold text-blue-400">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA / App Download */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white py-20">
        <div className="max-w-5xl mx-auto text-center space-y-6 px-4 md:px-0">
          <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Ready to Take Care of Your Health?</h2>
          <p className="text-gray-100 drop-shadow-md">Download the app and book your first appointment today.</p>
          <div className="flex justify-center space-x-4 mt-6">
            <img src="/appstore-badge.png" alt="App Store" className="h-12 drop-shadow-lg"/>
            <img src="/playstore-badge.png" alt="Google Play" className="h-12 drop-shadow-lg"/>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-blue-400 font-bold text-xl mb-4 md:mb-0 drop-shadow-lg">MediApp</div>
          <div className="flex flex-wrap gap-6 text-gray-300">
            <a href="#features" className="hover:text-blue-400 transition">Features</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#testimonials" className="hover:text-blue-400 transition">Testimonials</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
          <div className="text-gray-400 mt-4 md:mt-0">&copy; {new Date().getFullYear()} Mahlock MediApp. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}
