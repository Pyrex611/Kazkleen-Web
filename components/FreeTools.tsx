"use client";

import { useState } from "react";
import {
  calculateCleaningEstimate,
  PropertyType,
  ServiceType,
  EstimateResult,
} from "@/lib/pricing-config";

export default function FreeTools() {
  const [activeTab, setActiveTab] = useState<"stain" | "estimate">("stain");

  // AI Stain Advisor States
  const [stainQuery, setStainQuery] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiAdvice, setAiAdvice] = useState<string | null>(null);

  // Estimator States
  const [propType, setPropType] = useState<PropertyType>("Apartment");
  const [rooms, setRooms] = useState<number>(2);
  const [service, setService] = useState<ServiceType>("standard");
  const [estimate, setEstimate] = useState<EstimateResult | null>(null);

  const handleStainSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stainQuery.trim() || isAiLoading) return;

    setIsAiLoading(true);
    setAiAdvice(null);

    try {
      const res = await fetch("/api/stain-advice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: stainQuery.trim() }),
      });

      const data = await res.json();
      if (data.advice) {
        setAiAdvice(data.advice);
      } else {
        setAiAdvice(
          "Blot (do not rub) with cold water and mild liquid soap immediately. Keep away from heat until fully dry."
        );
      }
    } catch (err) {
      setAiAdvice(
        "Blot gently with a clean microfiber cloth and cool water. Avoid heat and harsh chemicals to prevent fiber damage."
      );
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleCalculateEstimate = () => {
    const result = calculateCleaningEstimate(propType, rooms, service);
    setEstimate(result);
  };

  return (
    <section id="tools" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-700">Free tools</p>
          <h2 className="font-display font-medium text-4xl sm:text-5xl mt-3 text-ink">
            Answers most companies make you call for.
          </h2>
          <p className="text-ink/60 mt-3 text-sm">
            Instant stain advice and a ballpark price — no telephone calls, no waiting on hold.
          </p>
        </div>

        <div className="glass rounded-[32px] shadow-soft p-6 sm:p-8 border border-white/80">
          {/* Tab Selector */}
          <div className="flex justify-center mb-7" role="tablist">
            <div className="inline-flex bg-white/60 rounded-full p-1 border border-white/70">
              <button
                role="tab"
                aria-selected={activeTab === "stain"}
                onClick={() => setActiveTab("stain")}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === "stain"
                    ? "bg-brand-600 text-white shadow-sm"
                    : "text-ink/60 hover:text-ink"
                }`}
              >
                Stain Advice
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "estimate"}
                onClick={() => setActiveTab("estimate")}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === "estimate"
                    ? "bg-brand-600 text-white shadow-sm"
                    : "text-ink/60 hover:text-ink"
                }`}
              >
                Instant Estimate
              </button>
            </div>
          </div>

          {/* Panel 1: AI Stain Advice */}
          {activeTab === "stain" && (
            <form onSubmit={handleStainSubmit} className="space-y-4">
              <label htmlFor="stainInput" className="sr-only">
                Describe your stain
              </label>
              <textarea
                id="stainInput"
                rows={2}
                value={stainQuery}
                onChange={(e) => setStainQuery(e.target.value)}
                placeholder="e.g. red wine on white wool rug in Maitama..."
                className="w-full p-4 bg-white/75 border border-white/80 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:bg-white transition resize-none placeholder:text-ink/35 text-ink text-sm"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isAiLoading || !stainQuery.trim()}
                  className="inline-flex items-center gap-2 bg-brand-600 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-brand-700 transition shadow-glass disabled:opacity-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span>{isAiLoading ? "Consulting AI..." : "Get instant advice"}</span>
                </button>
              </div>

              {aiAdvice && (
                <div className="mt-6 p-5 bg-brand-50/90 rounded-2xl border border-brand-100 animate-in fade-in">
                  <p className="font-semibold text-brand-700 text-sm mb-1.5 flex items-center gap-1.5">
                    <span>✨</span> KazKleen Expert Advice
                  </p>
                  <p className="text-ink/80 text-sm leading-relaxed">{aiAdvice}</p>
                </div>
              )}
            </form>
          )}

          {/* Panel 2: Instant Estimate */}
          {activeTab === "estimate" && (
            <div className="space-y-6">
              <div className="grid sm:grid-cols-3 gap-5">
                {/* Property Type */}
                <div>
                  <p className="text-xs font-semibold text-ink/55 mb-2 font-mono uppercase">Property Type</p>
                  <div className="flex flex-wrap gap-2">
                    {(["Apartment", "House", "Office"] as PropertyType[]).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setPropType(type)}
                        className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                          propType === type
                            ? "bg-brand-600 text-white"
                            : "bg-white/70 text-ink/65 border border-white/80 hover:bg-white"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rooms */}
                <div>
                  <p className="text-xs font-semibold text-ink/55 mb-2 font-mono uppercase">Rooms</p>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setRooms(num)}
                        className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                          rooms === num
                            ? "bg-brand-600 text-white"
                            : "bg-white/70 text-ink/65 border border-white/80 hover:bg-white"
                        }`}
                      >
                        {num === 5 ? "5+" : num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service */}
                <div>
                  <p className="text-xs font-semibold text-ink/55 mb-2 font-mono uppercase">Service Level</p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setService("standard")}
                      className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                        service === "standard"
                          ? "bg-brand-600 text-white"
                          : "bg-white/70 text-ink/65 border border-white/80 hover:bg-white"
                      }`}
                    >
                      Standard
                    </button>
                    <button
                      type="button"
                      onClick={() => setService("deep")}
                      className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                        service === "deep"
                          ? "bg-brand-600 text-white"
                          : "bg-white/70 text-ink/65 border border-white/80 hover:bg-white"
                      }`}
                    >
                      Deep Clean
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCalculateEstimate}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-600 text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-brand-700 transition shadow-glass"
              >
                Calculate my estimate
              </button>

              {estimate && (
                <div className="mt-6 p-5 bg-brand-50/90 rounded-2xl border border-brand-100 text-center animate-in fade-in">
                  <p className="font-display text-3xl text-brand-700 font-semibold">{estimate.formattedRange}</p>
                  <p className="text-sm text-ink/60 mt-1">{estimate.summaryText}</p>
                </div>
              )}

              <p className="text-xs text-ink/45 text-center">
                Ballpark estimate only. Final quote confirmed by our lead technician following inspection.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}