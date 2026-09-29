"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6">
      <nav
        aria-label="Main Navigation"
        className={`nav-pill glass max-w-6xl mx-auto flex items-center justify-between gap-4 rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 ${
          isScrolled ? "shadow-soft" : "shadow-glass"
        }`}
      >
        <Link href="#home" className="flex items-center gap-2 shrink-0">
          <span className="font-display font-medium text-xl tracking-tight text-ink">
            KazKleen
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/70">
          <Link href="#proof" className="hover:text-brand-700 transition">
            Our Standard
          </Link>
          <Link href="#services" className="hover:text-brand-700 transition">
            Services
          </Link>
          <Link href="#process" className="hover:text-brand-700 transition">
            Process
          </Link>
          <Link href="#tools" className="hover:text-brand-700 transition">
            Free Tools
          </Link>
          <Link href="#reviews" className="hover:text-brand-700 transition">
            Reviews
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-700 transition shadow-glass"
          >
            Get a Quote
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/40 transition text-ink"
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden glass max-w-6xl mx-auto mt-2 rounded-3xl shadow-glass px-6 py-5 flex flex-col gap-1 text-ink/80 font-medium animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <Link href="#proof" onClick={closeMenu} className="py-2.5 border-b border-white/40 hover:text-brand-700">
            Our Standard
          </Link>
          <Link href="#services" onClick={closeMenu} className="py-2.5 border-b border-white/40 hover:text-brand-700">
            Services
          </Link>
          <Link href="#process" onClick={closeMenu} className="py-2.5 border-b border-white/40 hover:text-brand-700">
            Process
          </Link>
          <Link href="#tools" onClick={closeMenu} className="py-2.5 border-b border-white/40 hover:text-brand-700">
            Free Tools
          </Link>
          <Link href="#reviews" onClick={closeMenu} className="py-2.5 border-b border-white/40 hover:text-brand-700">
            Reviews
          </Link>
          <Link
            href="#contact"
            onClick={closeMenu}
            className="mt-3 text-center bg-brand-600 text-white font-semibold px-5 py-3 rounded-full shadow-glass hover:bg-brand-700 transition"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}