import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const districts = [
    "Maitama",
    "Wuse II",
    "Asokoro",
    "Guzape",
    "Jabi",
    "Gwarinpa",
    "Central Area",
    "Apo",
    "Katampe",
    "Mabushi",
  ];

  return (
    <footer className="bg-ink text-white/65 px-4 sm:px-6 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
        {/* Col 1: Brand, Logo & Socials */}
        <div>
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20 shadow-sm shrink-0">
              <Image
                src="/kaz.jpg"
                alt="KazKleen Services Logo"
                width={36}
                height={36}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-display text-xl text-white font-medium">KazKleen</span>
          </div>

          <p className="mt-4 text-sm max-w-xs leading-relaxed text-white/60">
            Abuja&apos;s leading residential, corporate, post-construction cleaning, and fumigation firm.
            Vetted technicians delivering clinical precision across the FCT.
          </p>

          <div className="flex gap-3 mt-6">
            <a
              href="https://www.instagram.com/kazkleen/?hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="KazKleen on Instagram"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 7a5 5 0 100 10 5 5 0 000-10zm6.4-1.845a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 9a3 3 0 110 6 3 3 0 010-6z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@kazkleen"
              target="_blank"
              rel="noreferrer"
              aria-label="KazKleen on TikTok"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a
              href="https://wa.me/2349046042275"
              target="_blank"
              rel="noreferrer"
              aria-label="Message KazKleen on WhatsApp"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.3-.6-.5-.5-.7-.5H8c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4 0-.1-.2-.2-.5-.3zM12.1 21a9 9 0 01-4.6-1.3l-.3-.2-3.4.9.9-3.3-.2-.3A9 9 0 1112.1 21z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4 font-mono">Explore</p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="#proof" className="hover:text-white transition">
                12-Point Inspection Standard
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white transition">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="#process" className="hover:text-white transition">
                3-Step Process
              </Link>
            </li>
            <li>
              <Link href="#tools" className="hover:text-white transition">
                Free AI Stain Tool
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-white transition">
                Frequently Asked Questions
              </Link>
            </li>
            <li>
              <Link href="#reviews" className="hover:text-white transition">
                Abuja Client Reviews
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Core Services */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4 font-mono">Services</p>
          <ul className="space-y-2.5 text-sm">
            <li>Residential Deep Cleaning</li>
            <li>Commercial &amp; Office Janitorial</li>
            <li>Post-Construction Restoration</li>
            <li>Eco-Safe Fumigation &amp; Pest Control</li>
            <li>Rug &amp; Upholstery Steam Washing</li>
            <li>After-Party Fast Turnaround Cleanup</li>
          </ul>
        </div>

        {/* Col 4: Contact & Coverage Footprint */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4 font-mono">Abuja Office</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="text-white font-medium">+234 904 604 2275</li>
            <li>kazkleen@gmail.com</li>
            <li>Abuja, Federal Capital Territory, Nigeria</li>
            <li>Mon–Sat, 8:00 AM – 6:00 PM</li>
          </ul>

          <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mt-5 mb-2 font-mono">
            Key Coverage Areas
          </p>
          <div className="flex flex-wrap gap-1.5 text-[11px] text-white/50">
            {districts.map((d) => (
              <span key={d} className="bg-white/5 px-2 py-0.5 rounded border border-white/10">
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
        <p>&copy; 2026 KazKleen Services. All rights reserved.</p>
        <p>Beyond Clean. Beyond Compare.</p>
      </div>
    </footer>
  );
}