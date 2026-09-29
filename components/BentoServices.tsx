import Image from "next/image";
import Link from "next/link";

export default function BentoServices() {
  return (
    <section id="services" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="max-w-lg">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-700">What we do</p>
            <h2 className="font-display font-medium text-4xl sm:text-5xl mt-3 text-ink">
              One team, every kind of clean.
            </h2>
          </div>
          <p className="text-ink/60 max-w-xs text-sm leading-relaxed">
            From single apartments to multi-level commercial hubs in Abuja. Choose a service below or let us
            tailor a custom scope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {/* Card 1: Residential Cleaning (Large Bento 2x2) */}
          <div className="md:col-span-2 md:row-span-2 group relative rounded-[28px] overflow-hidden shadow-glass min-h-[300px] border border-white/40">
            <Image
              src="/images/IMG_2155.PNG"
              alt="Residential cleaning completed in Abuja apartment by KazKleen"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/25 to-transparent"></div>
            <div className="absolute bottom-0 p-7">
              <h3 className="font-display text-2xl text-white font-medium">Residential Cleaning</h3>
              <p className="text-white/80 text-sm mt-2 max-w-xs leading-relaxed">
                Recurring or one-off deep cleans for homes and apartments. Kitchens, bathrooms, and living
                spaces sanitised to clinical standards.
              </p>
            </div>
          </div>

          {/* Card 2: Commercial Cleaning */}
          <div className="group relative rounded-[28px] overflow-hidden shadow-glass min-h-[140px] border border-white/40">
            <Image
              src="/images/IMG_2179.PNG"
              alt="Commercial office space cleaned by KazKleen in Abuja"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-900/60 transition-colors group-hover:bg-brand-900/50"></div>
            <div className="relative p-6 flex flex-col justify-between h-full z-10">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H3m16 0h2M5 21H3m8-10h.01M11 15h.01"
                />
              </svg>
              <div>
                <h3 className="font-display text-xl text-white font-medium">Commercial</h3>
                <p className="text-white/70 text-xs mt-1">Offices &amp; retail hubs, before opening hours.</p>
              </div>
            </div>
          </div>

          {/* Card 3: Post-Construction Cleaning */}
          <div className="group relative rounded-[28px] overflow-hidden shadow-glass min-h-[140px] border border-white/40">
            <Image
              src="/images/IMG_2160.PNG"
              alt="Post-construction dust and debris removal by KazKleen"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-900/55 transition-colors group-hover:bg-brand-900/45"></div>
            <div className="absolute bottom-0 p-6 z-10">
              <h3 className="font-display text-xl text-white font-medium">Post-Construction</h3>
              <p className="text-white/75 text-xs mt-1">Fine dust, paint splatter &amp; debris — eradicated.</p>
            </div>
          </div>

          {/* Card 4: Fumigation & Pest Control */}
          <div className="group relative rounded-[28px] overflow-hidden shadow-glass min-h-[200px] border border-white/40">
            <Image
              src="/images/IMG_2130.PNG"
              alt="Safe professional fumigation service in Abuja"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-900/55 transition-colors group-hover:bg-brand-900/45"></div>
            <div className="absolute bottom-0 p-6 z-10">
              <h3 className="font-display text-xl text-white font-medium">Fumigation</h3>
              <p className="text-white/75 text-xs mt-1">Safe, targeted pest eradication for homes and premises.</p>
            </div>
          </div>

          {/* Card 5: Rug & Upholstery Care */}
          <div className="group relative rounded-[28px] overflow-hidden shadow-glass min-h-[200px] border border-white/40">
            <Image
              src="/images/IMG_2158.PNG"
              alt="Rug and sofa upholstery deep extraction"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-900/55 transition-colors group-hover:bg-brand-900/45"></div>
            <div className="absolute bottom-0 p-6 z-10">
              <h3 className="font-display text-xl text-white font-medium">Rug &amp; Upholstery</h3>
              <p className="text-white/75 text-xs mt-1">Deep extraction for sofas and delicate rugs.</p>
            </div>
          </div>

          {/* Card 6: Specialty Projects */}
          <div className="md:col-span-2 relative rounded-[28px] overflow-hidden glass shadow-glass min-h-[200px] p-7 flex flex-col justify-between border border-white/70">
            <div>
              <h3 className="font-display text-xl text-ink font-medium">Specialty Projects</h3>
              <p className="text-ink/65 text-sm mt-1 max-w-sm leading-relaxed">
                Wardrobe organisation, seasonal decluttering, and discreet after-party emergency cleanup.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:gap-2.5 transition-all group"
            >
              Ask about your custom project
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}