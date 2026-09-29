import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden">
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-brand-700 glass px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
            Abuja · Residential &amp; Commercial
          </div>

          <h1 className="font-display font-medium text-[2.6rem] leading-[1.05] sm:text-6xl sm:leading-[1.03] text-ink">
            Sparkling Kleen<br />
            <span className="italic text-brand-600">Always.</span>
          </h1>

          <p className="mt-6 text-lg text-ink/65 max-w-md leading-relaxed">
            We treat every room like it&apos;s the one being inspected — because to us, it is. Deep cleaning,
            fumigation, and organisation for homes and corporate spaces across Abuja, handled by a vetted,
            insured team.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-full shadow-soft hover:bg-brand-700 transition"
            >
              Get a Free Quote
            </Link>
            <Link
              href="#proof"
              className="inline-flex items-center gap-2 text-ink font-semibold px-2 py-3.5 group hover:text-brand-700 transition"
            >
              See our standard
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/60 flex flex-wrap gap-x-8 gap-y-3">
            <div className="flex items-center gap-2 text-sm text-ink/60">
              <svg className="w-4 h-4 text-brand-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Insured &amp; vetted team
            </div>
            <div className="flex items-center gap-2 text-sm text-ink/60">
              <svg className="w-4 h-4 text-brand-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Same-day response
            </div>
            <div className="flex items-center gap-2 text-sm text-ink/60">
              <svg className="w-4 h-4 text-brand-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              Eco-conscious products
            </div>
          </div>
        </div>

        {/* Right Column: Layered Stock Photos & Badge */}
        <div className="lg:col-span-6 relative h-[420px] sm:h-[480px] isolate">
          <div className="absolute top-0 right-0 w-[78%] h-[72%] rounded-[28px] overflow-hidden shadow-soft rotate-[2deg] border-4 border-white/70">
            <Image
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=900&auto=format&fit=crop"
              alt="Bright, pristine living room cleaned by KazKleen in Abuja"
              fill
              priority
              sizes="(max-width: 1024px) 70vw, 450px"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0 w-[54%] h-[48%] rounded-[24px] overflow-hidden shadow-glass -rotate-[3deg] border-4 border-white/70">
            <Image
              src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=700&auto=format&fit=crop"
              alt="Neatly organised wardrobe after KazKleen decluttering session"
              fill
              sizes="(max-width: 1024px) 50vw, 300px"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-6 right-4 sm:right-10 glass rounded-2xl shadow-glass px-5 py-4 max-w-[195px] rotate-[1.5deg] z-10">
            <p className="font-display text-2xl text-brand-700 leading-none font-semibold">500+</p>
            <p className="text-xs text-ink/65 mt-1 font-medium">spaces transformed across Abuja</p>
          </div>
        </div>
      </div>
    </section>
  );
}