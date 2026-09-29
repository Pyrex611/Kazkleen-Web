import Image from "next/image";

export default function Gallery() {
  const images = [
    {
      src: "/images/IMG_2156.PNG",
      alt: "Pristine living room cleaning by KazKleen in Abuja",
      className: "h-56 sm:h-72",
    },
    {
      src: "/images/IMG_2157.PNG",
      alt: "Organised space after KazKleen decluttering session",
      className: "h-40 sm:h-52 mt-6 sm:mt-10",
    },
    {
      src: "/images/IMG_2161.PNG",
      alt: "Post-construction deep clean floor restoration",
      className: "h-56 sm:h-72",
    },
    {
      src: "/images/IMG_2162.PNG",
      alt: "Revitalised fabric and rug extraction",
      className: "h-40 sm:h-52 mt-6 sm:mt-10",
    },
  ];

  return (
    <section className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-lg mb-12">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-700">Recent work</p>
          <h2 className="font-display font-medium text-4xl sm:text-5xl mt-3 text-ink">
            A peek inside the job bag.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {images.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl overflow-hidden border-4 border-white/60 shadow-glass ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <p className="text-xs text-ink/40 mt-6 font-mono">
          Authentic site photography captured on location across Abuja residential and corporate projects.
        </p>
      </div>
    </section>
  );
}