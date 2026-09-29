export default function ProcessSteps() {
  const steps = [
    {
      num: "01",
      title: "Book",
      description:
        "Tell us about your space and requirements — in two minutes over WhatsApp, by phone, or through our online quote form.",
    },
    {
      num: "02",
      title: "We clean",
      description:
        "A vetted, uniformed team arrives on schedule equipped with professional tools and eco-conscious agents — nothing borrowed from your home.",
    },
    {
      num: "03",
      title: "You relax",
      description:
        "We walk the space together with the 12-point inspection clipboard before departure. Nothing is signed off until you are completely satisfied.",
    },
  ];

  return (
    <section id="process" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-700">How it works</p>
        <h2 className="font-display font-medium text-4xl sm:text-5xl mt-3 text-ink">Three steps to spotless</h2>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Connecting Vertical Track on Desktop */}
        <div className="absolute left-6 top-6 bottom-6 w-px bg-brand-200 hidden sm:block"></div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={step.num} className="flex gap-6 sm:gap-8 relative items-start">
              <div className="shrink-0 w-12 h-12 rounded-full glass border-2 border-brand-500 flex items-center justify-center font-display text-lg font-semibold text-brand-700 relative z-10 shadow-glass">
                {step.num}
              </div>
              <div className="pt-1.5">
                <h3 className="font-semibold text-lg text-ink font-display">{step.title}</h3>
                <p className="text-ink/65 mt-1.5 max-w-md text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}