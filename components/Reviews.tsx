export default function Reviews() {
  return (
    <section id="reviews" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-lg mb-12">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-700">What Abuja is saying</p>
          <h2 className="font-display font-medium text-4xl sm:text-5xl mt-3 text-ink">
            Real jobs, real feedback.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Featured Testimonial */}
          <figure className="md:col-span-2 bg-brand-600 text-white rounded-[28px] p-8 sm:p-10 shadow-soft flex flex-col justify-between min-h-[260px]">
            <blockquote className="font-display text-2xl sm:text-3xl leading-snug">
              &ldquo;They moved my entire wardrobe, cleaned behind it, and put everything back better organised
              than I left it. I didn&apos;t lift a single finger.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-white/80 text-sm">
              — Amaka O., Maitama <span className="mx-2">·</span> Residential Deep Clean
            </figcaption>
          </figure>

          {/* Testimonial 2 */}
          <figure className="glass rounded-[28px] p-7 shadow-glass flex flex-col justify-between border border-white/70">
            <blockquote className="text-ink/75 leading-relaxed text-sm">
              &ldquo;Punctual, professional, and our corporate office in Wuse II smelled fresh for days. The 12-point
              checklist made all the difference.&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-ink/50 text-xs font-medium">
              — Tunde A., Wuse II <span className="mx-1">·</span> Commercial Janitorial
            </figcaption>
          </figure>

          {/* Testimonial 3 */}
          <figure className="glass rounded-[28px] p-7 shadow-glass flex flex-col justify-between border border-white/70">
            <blockquote className="text-ink/75 leading-relaxed text-sm">
              &ldquo;Booked them the morning after a large housewarming in Guzape — the entire venue looked
              completely untouched by 2:00 PM.&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-ink/50 text-xs font-medium">
              — Fatima B., Guzape <span className="mx-1">·</span> After-Party Cleanup
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}