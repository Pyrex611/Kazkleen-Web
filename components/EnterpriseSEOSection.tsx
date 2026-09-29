"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  badge: string;
}

const FAQS: FAQItem[] = [
  {
    badge: "Pricing & Quotes",
    question: "How much does professional cleaning cost in Abuja?",
    answer:
      "KazKleen pricing is calculated based on property size, number of rooms, and cleaning intensity. Apartment cleaning starts at approximately ₦18,000 for standard maintenance and ₦26,000 for deep cleans. Duplexes and commercial spaces in Maitama, Wuse II, and Guzape are quoted following an instant room-count assessment. All quotes include technician insurance, industrial equipment, and safe supplies with no hidden logistics surcharges.",
  },
  {
    badge: "Post-Construction",
    question: "What does KazKleen's post-construction cleaning service include?",
    answer:
      "Our post-construction protocol clears fine plaster dust, paint splatter, cement haze, and silicone residue from all surfaces. We deep-scrub floor grout with rotary scrubbers, polish window glass and framing streak-free, sanitize light fixtures, clean inside cabinetry, and extract HVAC vents to ensure move-in ready air quality.",
  },
  {
    badge: "Health & Safety",
    question: "Are your fumigation and pest control treatments safe for kids and pets?",
    answer:
      "Yes. KazKleen utilizes low-odor, eco-conscious synthetic pyrethroid formulations approved by NAFDAC and international safety standards. Our treatments target pests—including cockroaches, termites, bedbugs, and mosquitoes—without leaving toxic airborne residues. We advise a short 2 to 3-hour re-entry window, after which premises are 100% safe for children, infants, and pets.",
  },
  {
    badge: "Equipment & Supplies",
    question: "Do KazKleen cleaners bring their own cleaning equipment and supplies?",
    answer:
      "Always. Our uniformed team arrives fully autonomous in a KazKleen service van equipped with industrial wet/dry HEPA vacuum extractors, microfiber systems, floor buffers, ladders, and eco-certified sanitization agents. We do not borrow detergents, brooms, or cloths from our clients.",
  },
  {
    badge: "Locations Covered",
    question: "Which districts and areas in Abuja does KazKleen service?",
    answer:
      "We operate dedicated field teams across all phase 1 to phase 3 Abuja districts. Primary coverage includes Maitama, Wuse II, Asokoro, Guzape, Jabi, Gwarinpa, Central Business District, Katampe, Mabushi, Utako, Apo, and Life Camp. Same-day emergency response is available across the municipal area.",
  },
  {
    badge: "Service Guarantee",
    question: "What is the KazKleen 12-point quality inspection guarantee?",
    answer:
      "Before our team packs up, the lead technician conducts a physical walk-through with you using our Form KK-QC clipboard. If any detail—such as baseboards, tile grout, or under-couch vacuuming—does not meet our clinical standard, we re-clean it on the spot at no additional charge.",
  },
];

const DISTRICT_HUBS = [
  { name: "Maitama", type: "Residential & Diplomatic" },
  { name: "Wuse II", type: "Commercial & Luxury Living" },
  { name: "Asokoro", type: "Government & Private Estates" },
  { name: "Guzape", type: "Hills & Modern Developments" },
  { name: "Jabi", type: "Lake & Commercial Hub" },
  { name: "Gwarinpa", type: "Large Residential Estates" },
  { name: "Central Area (CBD)", type: "Corporate Headquarters" },
  { name: "Apo / Gudu", type: "Residential & Retail Parks" },
  { name: "Katampe Extension", type: "Contemporary Villas" },
  { name: "Mabushi & Utako", type: "Corporate & Mixed-use" },
];

export default function EnterpriseSEOSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="px-4 sm:px-6 py-20 sm:py-28 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-700">
            Abuja Cleaning Knowledge Base
          </p>
          <h2 className="font-display font-medium text-3xl sm:text-5xl mt-3 text-ink">
            Frequently Asked Questions
          </h2>
          <p className="text-ink/65 mt-3 text-sm leading-relaxed">
            Direct, transparent facts on pricing, chemical safety, post-construction protocols, and district
            coverage across the Abuja Federal Capital Territory.
          </p>
        </div>

        {/* FAQ Accordion List - Structured for Human & AI Crawler Parsing */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="glass rounded-2xl border border-white/80 overflow-hidden transition-all duration-300 shadow-glass"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="font-mono text-[10px] tracking-wider uppercase text-brand-700 bg-brand-50 border border-brand-200/60 px-2.5 py-1 rounded-full w-fit">
                      {faq.badge}
                    </span>
                    <span className="font-display font-medium text-base sm:text-lg text-ink">
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={`w-7 h-7 rounded-full bg-brand-50 flex items-center justify-center shrink-0 text-brand-700 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-brand-600 text-white" : ""
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* CSS Transition ensures search bots index content regardless of JS execution state */}
                <div
                  className={`grid transition-all duration-300 ease-in-out px-6 ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-ink/75 leading-relaxed border-t border-brand-100/60 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local Area Footprint Matrix (RankBrain Entity Anchor) */}
        <div className="mt-16 glass rounded-3xl p-8 border border-white/80 shadow-soft">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <p className="font-mono text-[11px] tracking-wider uppercase text-brand-700">
                Local Presence &amp; Fast Response
              </p>
              <h3 className="font-display font-medium text-2xl text-ink mt-1">
                Servicing Every District in Abuja
              </h3>
            </div>
            <Link
              href="#contact"
              className="text-xs font-semibold text-brand-700 hover:text-brand-800 transition underline underline-offset-4"
            >
              Check coverage for your street →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {DISTRICT_HUBS.map((hub) => (
              <div
                key={hub.name}
                className="bg-white/70 p-3.5 rounded-xl border border-white/90 hover:bg-white transition"
              >
                <p className="font-semibold text-sm text-ink">{hub.name}</p>
                <p className="text-[11px] text-ink/50 mt-0.5">{hub.type}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-ink/45 mt-6 font-mono">
            All teams dispatched from our central Abuja hub with immediate same-day deployment capabilities.
          </p>
        </div>
      </div>
    </section>
  );
}