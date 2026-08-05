"use client";

import { useState, useEffect, FormEvent } from "react";

export default function Home() {
  // --- States ---
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);
  const [isPreloaderFading, setIsPreloaderFading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  // AI States
  const [aiInput, setAiInput] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState("");

  const rotatingImages = ["/images/IMG_2160.PNG", "/images/IMG_2161.PNG"];

  // --- Effects ---
  useEffect(() => {
    // Preloader Logic
    const timer = setTimeout(() => {
      setIsPreloaderFading(true);
      setTimeout(() => setIsPreloaderVisible(false), 500);
    }, 100); 

    // Rotating Image Logic
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % rotatingImages.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(imageInterval);
    };
  }, []);

  // --- Handlers ---
  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/hello@kazkleen.com", {
        method: "POST",
        body: formData,
      });
      
      if (response.ok) {
        (e.target as HTMLFormElement).reset();
        setSelectedService("");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try contacting us via WhatsApp or Phone.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAiAnalyze = async () => {
    if (!aiInput) return;
    setIsAiLoading(true);
    
    const apiKey = "AIzaSyAA1bavg316K09wqvpgR6_LnEA83kmfrcY";
    const prompt = `You are a cleaning expert for KazKleen. Briefly explain how to clean this stain: "${aiInput}". strict limit 50 words.`;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      });
      const data = await response.json();
      setAiResult(data.candidates?.[0]?.content?.parts?.[0]?.text || "Error retrieving advice.");
    } catch (e) {
      alert("AI Service currently unavailable.");
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <>
      {/* Preloader */}
      {isPreloaderVisible && (
        <div
          id="preloader"
          style={{ opacity: isPreloaderFading ? 0 : 1 }}
          className="transition-opacity duration-500 ease-out"
        >
          <div className="text-center">
            <div className="loader mx-auto mb-4"></div>
            <h2 className="text-brand-900 font-bold text-xl tracking-wider">KazKleen</h2>
          </div>
        </div>
      )}

      {/* Top Bar */}
      <div className="bg-brand-900 text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.308 1.154a11.06 11.06 0 006.313 6.313l1.154-2.308a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +234 904 604 2275
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              kazkleen@gmail.com
            </span>
          </div>
          <div className="flex space-x-4">
            <a href="#contact" className="hover:text-brand-200 transition">Get a Quote</a>
            <span className="text-brand-700">|</span>
            <span className="text-brand-200">Abuja's Trusted Choice</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-40 transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#" className="flex items-center gap-2 group">
              <span className="text-2xl font-extrabold text-brand-800 tracking-tight group-hover:opacity-80 transition">
                Kaz<span className="text-brand-600">Kleen</span>
              </span>
            </a>

            <div className="hidden md:flex items-center space-x-8 font-medium text-sm">
              <a href="#home" className="text-gray-600 hover:text-brand-600 transition">Home</a>
              <a href="#services" className="text-gray-600 hover:text-brand-600 transition">Services</a>
              <a href="#about" className="text-gray-600 hover:text-brand-600 transition">About</a>
              <a href="#contact" className="bg-brand-600 text-white px-6 py-2.5 rounded shadow hover:bg-brand-700 transition transform hover:-translate-y-0.5">
                Book Service
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 p-2 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md">Home</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md">Services</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md">About</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block mt-4 text-center w-full bg-brand-600 text-white px-5 py-3 rounded-lg font-bold shadow-sm">
                Book Service
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative bg-brand-900 overflow-hidden min-h-[600px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
              alt="Clean Luxury Living Room"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/95 to-brand-800/40"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-500/30 bg-brand-800/50 text-brand-100 text-xs font-semibold uppercase tracking-wide mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span> Serving All Abuja Districts
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
                Beyond Clean. <br />
                <span className="text-brand-500">Beyond Compare.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                From residential deep cleaning to corporate facility management. We bring professional precision to cleaning, fumigation, and organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 md:text-lg transition shadow-lg hover:shadow-xl">
                  Get Your Quote
                </a>
                <a href="#services" className="inline-flex justify-center items-center px-8 py-4 border border-gray-500 text-base font-medium rounded-md text-gray-200 bg-transparent hover:bg-white/10 md:text-lg transition">
                  Explore Services
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-8">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-sm text-gray-400">Vetted Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-sm text-gray-400">On-Time Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
                  <span className="text-sm text-gray-400">Eco-Friendly Products</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest">How It Works</h2>
              <h3 className="mt-2 text-3xl font-bold text-gray-900">Seamless Service Delivery</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10 transform -translate-y-1/2"></div>

              <div className="bg-white p-6">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-100 shadow-sm text-brand-600 font-bold text-xl">1</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Book Online</h4>
                <p className="text-gray-500 text-sm">Select your service and schedule a time that fits your calendar via our form or phone.</p>
              </div>
              <div className="bg-white p-6">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-100 shadow-sm text-brand-600 font-bold text-xl">2</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">We Clean</h4>
                <p className="text-gray-500 text-sm">Our fully equipped, vetted team arrives and performs the service to high standards.</p>
              </div>
              <div className="bg-white p-6">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-100 shadow-sm text-brand-600 font-bold text-xl">3</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">You Relax</h4>
                <p className="text-gray-500 text-sm">Enjoy your pristine space. We only leave when you are 100% satisfied.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-2xl">
                <h2 className="text-brand-600 font-bold uppercase tracking-wide text-sm mb-2">Our Expertise</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Facility Services</h3>
              </div>
              <a href="#contact" className="hidden md:inline-flex items-center text-brand-600 font-semibold hover:text-brand-700 transition">
                View Pricing Plans <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Residential */}
              <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src="/images/IMG_2155.PNG" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" alt="Home Cleaning" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Residential Cleaning</h4>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">Regular or deep cleaning for apartments and homes. We handle dusting, vacuuming, and sanitizing kitchens and bathrooms.</p>
                  <button onClick={() => handleServiceSelect("Residential Cleaning")} className="text-brand-600 font-semibold text-sm uppercase tracking-wide flex items-center group-hover:gap-2 transition-all">
                    Book Now <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>

              {/* Commercial */}
              <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src="/images/IMG_2179.PNG" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" alt="Office Cleaning" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Commercial Cleaning</h4>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">Janitorial services for offices, retail, and corporate spaces. Create a productive environment for your team.</p>
                  <button onClick={() => handleServiceSelect("Commercial Cleaning")} className="text-brand-600 font-semibold text-sm uppercase tracking-wide flex items-center group-hover:gap-2 transition-all">
                    Book Now <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>

              {/* Post Construction */}
              <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={rotatingImages[currentImageIndex]} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" alt="Post Construction" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Post-Construction</h4>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">Heavy-duty cleaning to remove dust, paint splatter, and debris after renovations or new builds.</p>
                  <button onClick={() => handleServiceSelect("Post Construction")} className="text-brand-600 font-semibold text-sm uppercase tracking-wide flex items-center group-hover:gap-2 transition-all">
                    Book Now <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>

              {/* Deep Cleaning */}
              <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1527515637-62da857c5a71?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" alt="Deep Cleaning" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Deep Cleaning</h4>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">Intensive sanitization for move-ins, move-outs, or seasonal refreshing. We reach the hidden corners.</p>
                  <button onClick={() => handleServiceSelect("Deep Cleaning")} className="text-brand-600 font-semibold text-sm uppercase tracking-wide flex items-center group-hover:gap-2 transition-all">
                    Book Now <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>

              {/* Decluttering */}
              <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" alt="Wardrobe & Room Organization" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Decluttering & Organization</h4>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">Expert organization for wardrobes and living spaces. We fold, sort, and arrange your rooms to maximize space and reduce stress.</p>
                  <button onClick={() => handleServiceSelect("Decluttering & Organization")} className="text-brand-600 font-semibold text-sm uppercase tracking-wide flex items-center group-hover:gap-2 transition-all">
                    Book Now <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>

              {/* Fumigation */}
              <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src="https://plus.unsplash.com/premium_photo-1661664150532-6028a3064e40?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" alt="Fumigation" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Fumigation Services</h4>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">Professional pest control and fumigation. Safe, effective treatments to keep your property pest-free.</p>
                  <button onClick={() => handleServiceSelect("Fumigation")} className="text-brand-600 font-semibold text-sm uppercase tracking-wide flex items-center group-hover:gap-2 transition-all">
                    Book Now <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>

              {/* Rug Cleaning */}
              <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1558317374-a3545eca46f2?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" alt="Rug Cleaning" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-xl font-bold text-gray-900">Rug & Upholstery</h4>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-semibold">NEW</span>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">Revitalize your fabrics. specialized washing for carpets, rugs, and sofas to remove deep-seated dirt and allergens.</p>
                  <button onClick={() => handleServiceSelect("Rug & Upholstery")} className="text-brand-600 font-semibold text-sm uppercase tracking-wide flex items-center group-hover:gap-2 transition-all">
                    Book Now <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>

              {/* After Party Cleanup */}
              <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" alt="Party Cleanup" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-xl font-bold text-gray-900">After-Party Cleanup</h4>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-semibold">NEW</span>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">The fun is over, let us handle the mess. Fast, discreet cleanup for events, ensuring your venue returns to pristine condition.</p>
                  <button onClick={() => handleServiceSelect("After Party Cleanup")} className="text-brand-600 font-semibold text-sm uppercase tracking-wide flex items-center group-hover:gap-2 transition-all">
                    Book Now <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-12 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-500 rounded-full opacity-20 filter blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <span className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded uppercase tracking-widest font-semibold">Coming Soon</span>
              <h2 className="mt-3 text-3xl font-bold">Interior Decoration Services</h2>
              <p className="mt-2 text-gray-400 max-w-xl">We are expanding! Soon, KazKleen will offer full-service interior styling and decoration to complement our cleaning excellence.</p>
            </div>
            <button
              className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg transition duration-300"
              onClick={() => alert('Thank you! We will notify you when Interior Decoration launches.')}
            >
              Notify Me When Available
            </button>
          </div>
        </section>

        {/* AI Assistant Section */}
        <section id="ai-assistant" className="py-20 bg-gradient-to-br from-indigo-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase">Smart Helper</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">Free AI Stain Expert</h2>
              <p className="text-gray-500 mt-2">Describe a stain, and our AI will tell you how to treat it immediately.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-indigo-100 p-6 sm:p-8">
              <div className="flex gap-4">
                <textarea
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition resize-none"
                  rows={2}
                  placeholder="e.g. Red wine on a white wool carpet..."
                />
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleAiAnalyze}
                  disabled={isAiLoading || !aiInput}
                  className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-6 py-2 rounded-lg font-medium transition flex items-center gap-2"
                >
                  {isAiLoading ? (
                    "Analyzing..."
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      Analyze Stain
                    </>
                  )}
                </button>
              </div>
              
              {aiResult && (
                <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100 text-gray-700 text-sm">
                  <h4 className="font-bold text-indigo-900 mb-2">Expert Recommendation:</h4>
                  <div className="leading-relaxed">{aiResult}</div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Request a Quote</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Ready to experience the KazKleen difference? Fill out the form, and our team will provide a tailored estimate for your specific needs within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.308 1.154a11.06 11.06 0 006.313 6.313l1.154-2.308a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">Phone Support</h3>
                      <p className="text-gray-500">+234 904 604 2275</p>
                      <p className="text-xs text-gray-400 mt-1">Mon - Sat, 8am - 6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">Email</h3>
                      <p className="text-gray-500">hello@kazkleen.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">Address</h3>
                      <p className="text-gray-500">Abuja, FCT, Nigeria</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Connect With Us</h3>
                  <div className="flex space-x-5">
                    <a href="https://www.instagram.com/kazkleen/?hl=en" target="_blank" rel="noreferrer" className="group transition transform hover:-translate-y-1">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center shadow-md">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                      </div>
                    </a>

                    <a href="https://tiktok.com/kazkleen" target="_blank" rel="noreferrer" className="group transition transform hover:-translate-y-1">
                      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-md border border-gray-200">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                      </div>
                    </a>

                    <a href="https://threads.net/kazkleen" target="_blank" rel="noreferrer" className="group flex flex-col items-center">
                      <img src="/threads.png" alt="Threads" className="w-12 h-12 rounded-full shadow-md transform transition group-hover:scale-110 object-cover" />
                    </a>

                    <a href="https://wa.me/2349046042275" target="_blank" rel="noreferrer" className="group transition transform hover:-translate-y-1">
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-md">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl shadow-inner border border-gray-200">
                <form onSubmit={handleFormSubmit}>
                  <input type="hidden" name="_subject" value="New KazKleen Quote Request" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                      <input type="text" name="first-name" required className="w-full px-4 py-3 rounded-lg border-gray-300 bg-white border shadow-sm focus:border-brand-500 focus:ring-brand-500 transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                      <input type="text" name="last-name" required className="w-full px-4 py-3 rounded-lg border-gray-300 bg-white border shadow-sm focus:border-brand-500 focus:ring-brand-500 transition" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border-gray-300 bg-white border shadow-sm focus:border-brand-500 focus:ring-brand-500 transition" />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                    <select
                      name="service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-gray-300 bg-white border shadow-sm focus:border-brand-500 focus:ring-brand-500 transition"
                    >
                      <option value="">Select a Service</option>
                      <option value="Residential Cleaning">Residential Cleaning</option>
                      <option value="Commercial Cleaning">Commercial Cleaning</option>
                      <option value="Post Construction">Post Construction</option>
                      <option value="Decluttering & Organization">Decluttering & Organization</option>
                      <option value="Rug & Upholstery">Rug & Upholstery Washing</option>
                      <option value="After Party Cleanup">After Party Cleanup</option>
                      <option value="Fumigation">Fumigation</option>
                      <option value="Deep Cleaning">Deep Cleaning</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Details / Address</label>
                    <textarea name="message" rows={3} className="w-full px-4 py-3 rounded-lg border-gray-300 bg-white border shadow-sm focus:border-brand-500 focus:ring-brand-500 transition"></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-600 text-white font-bold py-4 rounded-lg hover:bg-brand-700 transition duration-300 shadow-md transform active:scale-95 disabled:opacity-75"
                  >
                    {isSubmitting ? "Sending..." : "Send Request"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold text-white tracking-tight">Kaz<span className="text-brand-500">Kleen</span></span>
            <p className="text-sm text-gray-500 mt-2">&copy; 2026 KazKleen Services. All rights reserved. Designed by Pyrexx</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
          </div>
        </div>
      </footer>

      {/* Toast Notification */}
      <div
        className={`fixed bottom-5 right-5 bg-green-600 text-white px-6 py-4 rounded-lg shadow-2xl transition-all duration-500 flex items-center gap-3 z-50 ${
          showToast ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <div>
          <h4 className="font-bold">Message Sent</h4>
          <p className="text-xs text-green-100">We will contact you shortly.</p>
        </div>
      </div>
    </>
  );
}