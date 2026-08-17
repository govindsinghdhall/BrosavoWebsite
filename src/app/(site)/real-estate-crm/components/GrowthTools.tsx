import Image from "next/image";

const cards = [
  {
    label: "Website",
    title: "Turn your website into a lead channel.",
    description: "Capture property enquiries directly from a professional real estate website.",
    image: "/images/WEBSITE LEAD CAPTURE VISUAL.png",
    alt: "Brosavo real estate website lead capture",
  },
  {
    label: "AI",
    title: "Use AI to work smarter.",
    description: "Surface customer insights, recommendations and next-best actions for your sales team.",
    image: "/images/AI REAL ESTATE ASSISTANT VISUAL.png",
    alt: "Brosavo AI real estate assistant",
  },
  {
    label: "Analytics",
    title: "Understand what is driving sales.",
    description: "Track leads, conversions, pipeline performance and team activity from one reporting layer.",
    image: "/images/ANALYTICS & REPORTS VISUAL.png",
    alt: "Brosavo real estate CRM analytics",
  },
];

export default function GrowthTools() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-cyan">Growth tools</span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Tools that help your real estate business grow.</h2>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            Extend your CRM with website lead capture, AI assistance and practical sales analytics.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {cards.map((card) => (
            <article key={card.label} className="overflow-hidden rounded-3xl border border-border/70 bg-background">
              <div className="border-b border-border/60 p-3">
                <div className="overflow-hidden rounded-2xl bg-surface">
                  <Image src={card.image} alt={card.alt} width={1200} height={800} className="h-auto w-full object-contain" />
                </div>
              </div>
              <div className="p-7">
                <span className="text-xs font-mono uppercase tracking-[0.18em] text-accent-blue">{card.label}</span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
