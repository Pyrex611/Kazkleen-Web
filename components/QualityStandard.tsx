"use client";

import { useEffect, useRef, useState } from "react";

const CHECKLIST_ITEMS = [
  "Skirting boards & baseboards wiped",
  "Light switches & door handles sanitised",
  "Under furniture reached, not just around it",
  "Kitchen surfaces degreased & disinfected",
  "Bathroom tiles & grout scrubbed clean",
  "Mirrors & windows left streak-free",
  "Trash bins emptied, liners replaced",
  "Carpets vacuumed in two directions",
  "Cushions & throws dressed & straightened",
  "Cobwebs cleared from corners & ceiling lines",
  "Fixtures polished — taps, handles, rails",
  "Final walk-through with you before sign-off",
];

export default function QualityStandard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeCount, setActiveCount] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setActiveCount(CHECKLIST_ITEMS.length);
      setIsVerified(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;

          // Staggered checkmarks animation
          CHECKLIST_ITEMS.forEach((_, idx) => {
            setTimeout(() => {
              setActiveCount((prev) => Math.max(prev, idx + 1));
            }, idx * 95);
          });

          // Trigger stamp appearance
          setTimeout(() => {
            setIsVerified(true);
          }, CHECKLIST_ITEMS.length * 95 + 200);

          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="proof" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-700">
          Our quality standard
        </p>
        <h2 className="font-display font-medium text-4xl sm:text-5xl mt-3 text-ink">
          The clipboard that leaves with every job
        </h2>
        <p className="mt-4 text-ink/60 max-w-lg mx-auto">
          Every KazKleen visit runs the same rigorous protocol before we consider it finished.
          Watch it check itself off — then ask for your signed copy.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-14 relative">
        <div
          ref={cardRef}
          className="glass relative rounded-[32px] shadow-soft px-6 sm:px-12 pt-12 pb-10 border border-white/80"
        >
          {/* Physical Clipboard Visual Elements */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-brand-600 rounded-b-2xl shadow-glass"></div>
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-4 border-brand-600"></div>

          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="font-display text-xl text-ink font-medium">12-Point Inspection</p>
              <p className="text-xs text-ink/45 font-mono tracking-wide">FORM KK-QC · EVERY VISIT</p>
            </div>
            <span className="hidden sm:inline-flex text-xs font-semibold text-brand-700 bg-brand-100/70 px-3 py-1.5 rounded-full">
              Included, always
            </span>
          </div>

          {/* Checklist Grid */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {CHECKLIST_ITEMS.map((item, index) => {
              const isChecked = index < activeCount;
              return (
                <div
                  key={item}
                  className={`flex items-center gap-3 transition-opacity duration-300 ${
                    isChecked ? "opacity-100" : "opacity-35"
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isChecked ? "bg-brand-600 border-brand-600" : "border-brand-300 bg-transparent"
                    }`}
                  >
                    <svg
                      className={`w-3.5 h-3.5 text-white transition-all duration-300 ${
                        isChecked ? "opacity-100 scale-100" : "opacity-0 scale-50"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-ink/75 font-medium">{item}</span>
                </div>
              );
            })}
          </div>

          {/* Signoff Row */}
          <div className="mt-8 pt-6 border-t border-white/60 flex items-center justify-between">
            <div>
              <p className="text-xs text-ink/45 uppercase font-mono tracking-wider">Signed off by</p>
              <p className="font-display italic text-lg text-ink/70">Lead Technician</p>
            </div>
            <svg
              className="w-24 h-8 text-brand-700/50"
              viewBox="0 0 100 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                d="M2 22c8-14 14-14 18-4 3 7 6 7 10-2 3-8 7-10 12-2 4 7 8 7 12-3 3-7 7-9 11-3 3 5 7 6 10 2"
              />
            </svg>
          </div>

          {/* Verification QC Stamp */}
          <div
            className={`absolute -top-6 -right-3 sm:-right-8 w-24 h-24 rounded-full glass flex flex-col items-center justify-center shadow-glass border-2 border-brand-600 transition-all duration-500 ${
              isVerified
                ? "opacity-100 scale-100 -rotate-12 pointer-events-auto"
                : "opacity-0 scale-75 rotate-0 pointer-events-none"
            }`}
          >
            <span className="text-[9px] font-bold tracking-widest text-brand-700">VERIFIED</span>
            <svg
              className="w-5 h-5 text-brand-600 my-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[8px] font-semibold text-brand-700/70">KazKleen QC</span>
          </div>
        </div>
      </div>
    </section>
  );
}