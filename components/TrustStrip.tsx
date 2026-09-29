"use client";

import { useEffect, useRef, useState } from "react";

interface CounterStat {
  target: number;
  suffix: string;
  label: string;
}

const STATS: CounterStat[] = [
  { target: 500, suffix: "+", label: "jobs completed" },
  { target: 5, suffix: "hr", label: "avg. response time" },
  { target: 100, suffix: "%", label: "insured & vetted staff" },
  { target: 100, suffix: "%", label: "eco-conscious products" },
];

export default function TrustStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setCounts(STATS.map((s) => s.target));
      return;
    }

    let animationFrameId: number;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;

          const duration = 1200;
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            setCounts(STATS.map((s) => Math.round(easedProgress * s.target)));

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(step);
            }
          };

          animationFrameId = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="px-4 sm:px-6 py-16 sm:py-20 bg-brand-900 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-300">
            Why Abuja trusts KazKleen
          </p>
          <h2 className="font-display font-medium text-3xl sm:text-4xl mt-3 leading-snug">
            Every technician is background-checked, uniformed, and trained on our proprietary protocol.
          </h2>
          <p className="text-white/60 mt-4 max-w-md text-sm leading-relaxed">
            Not unverified subcontractors. We are fully insured and bonded, and utilize child- and
            pet-safe eco-conscious formulations across all Abuja districts.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-8">
          {STATS.map((stat, idx) => (
            <div key={stat.label}>
              <p className="font-display text-4xl sm:text-5xl text-brand-300 font-medium">
                {counts[idx]}
                {stat.suffix}
              </p>
              <p className="text-white/55 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}