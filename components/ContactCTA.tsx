"use client";

import { useState } from "react";

export default function ContactCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [fallbackUrl, setFallbackUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFallbackUrl(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const address = formData.get("address") as string;
    const details = formData.get("details") as string;

    try {
      const response = await fetch("https://formsubmit.co/ajax/kazkleen@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        form.reset();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      } else {
        throw new Error("FormSubmit failed");
      }
    } catch (err) {
      // Offline / Ad-blocker Fallback: Create pre-filled WhatsApp link
      const waText = encodeURIComponent(
        `Hello KazKleen, I would like a quote:\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nAddress: ${address}\nNotes: ${details}`
      );
      setFallbackUrl(`https://wa.me/2349046042275?text=${waText}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-4 sm:px-6 py-20 sm:py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-brand-500/25 blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-medium text-4xl sm:text-6xl">Ready for spotless?</h2>
          <p className="mt-4 text-white/60 text-lg">Same-day quotes. No obligation, no pressure.</p>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+2349046042275"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-semibold px-7 py-3.5 rounded-full hover:bg-brand-50 transition shadow-glass"
            >
              Call +234 904 604 2275
            </a>
            <a
              href="https://wa.me/2349046042275"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-whats text-white font-semibold px-7 py-3.5 rounded-full hover:brightness-95 transition shadow-glass"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.3-.6-.5-.5-.7-.5H8c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4 0-.1-.2-.2-.5-.3zM12.1 21a9 9 0 01-4.6-1.3l-.3-.2-3.4.9.9-3.3-.2-.3A9 9 0 1112.1 21z" />
              </svg>
              Message on WhatsApp
            </a>
          </div>
        </div>

        {/* Integrated Quote Request Form */}
        <div className="glass-dark rounded-3xl p-6 sm:p-10 border border-white/10 shadow-soft max-w-3xl mx-auto">
          <h3 className="font-display text-xl text-white font-medium mb-2 text-center">
            Or Send an Instant Quote Request
          </h3>
          <p className="text-white/60 text-xs text-center mb-8">
            Tell us about your property. We review and revert within 2 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="_subject" value="New KazKleen Abuja Quote Request" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase text-white/70 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Hajiya Zainab"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/30 focus:border-brand-300 focus:bg-white/15 transition text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-mono uppercase text-white/70 mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+234 800 000 0000"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/30 focus:border-brand-300 focus:bg-white/15 transition text-sm"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="service" className="block text-xs font-mono uppercase text-white/70 mb-1">
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 bg-[#0c4a6e] border border-white/20 rounded-xl text-white focus:border-brand-300 transition text-sm"
                >
                  <option value="Residential Deep Clean">Residential Deep Clean</option>
                  <option value="Commercial Office Cleaning">Commercial Office Cleaning</option>
                  <option value="Post-Construction Clean">Post-Construction Clean</option>
                  <option value="Fumigation & Pest Control">Fumigation &amp; Pest Control</option>
                  <option value="Rug & Upholstery Care">Rug &amp; Upholstery Care</option>
                  <option value="Decluttering & Wardrobes">Decluttering &amp; Wardrobes</option>
                  <option value="After-Party Cleanup">After-Party Cleanup</option>
                </select>
              </div>
              <div>
                <label htmlFor="address" className="block text-xs font-mono uppercase text-white/70 mb-1">
                  District / Area in Abuja
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  placeholder="e.g. Maitama, Wuse 2, Jabi"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/30 focus:border-brand-300 focus:bg-white/15 transition text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="details" className="block text-xs font-mono uppercase text-white/70 mb-1">
                Project Specifics
              </label>
              <textarea
                id="details"
                name="details"
                rows={3}
                placeholder="Number of rooms, floor area, or specific problems..."
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/30 focus:border-brand-300 focus:bg-white/15 transition text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3.5 rounded-xl transition shadow-glass disabled:opacity-50 text-sm"
            >
              {isSubmitting ? "Dispatching..." : "Submit Quote Request"}
            </button>
          </form>

          {/* Ad-blocker / Offline Fallback link */}
          {fallbackUrl && (
            <div className="mt-4 p-4 bg-amber-500/20 border border-amber-400/40 rounded-xl text-center">
              <p className="text-xs text-amber-200 mb-2">
                Network blocked the automatic submission. Send details directly to our WhatsApp with one click:
              </p>
              <a
                href={fallbackUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-whats px-4 py-2 rounded-lg hover:brightness-105"
              >
                Send via WhatsApp Now →
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-6 left-6 z-50 bg-brand-600 text-white px-5 py-3 rounded-2xl shadow-soft flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3">
          <svg className="w-5 h-5 text-green-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <p className="text-xs font-bold">Request Received</p>
            <p className="text-[11px] text-white/80">A technician will reach out to you shortly.</p>
          </div>
        </div>
      )}
    </section>
  );
}