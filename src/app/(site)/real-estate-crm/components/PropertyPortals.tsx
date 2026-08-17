import Image from "next/image";

const portals = [
  ["/images/99acres.jpeg", "99acres", "Property listings & enquiries"],
  ["/images/magicbricks.jpeg", "Magicbricks", "Property discovery & enquiries"],
  ["/images/housing.jpeg", "Housing.com", "Property discovery & enquiries"],
];

export default function PropertyPortals() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">Property ecosystem</span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Your property channels.
            <br />
            <span className="text-gradient-accent">One intelligent CRM.</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            Bring property listings, enquiries and customer requirements closer to the same sales workflow your team already uses.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {portals.map(([image, name, description]) => (
            <article key={name} className="overflow-hidden rounded-3xl border border-border/70 bg-background">
              <div className="flex h-48 items-center justify-center bg-white p-8">
                <Image src={image} alt={`${name} real estate portal`} width={360} height={180} className="max-h-28 w-auto max-w-[260px] object-contain" />
              </div>
              <div className="border-t border-border/60 p-6">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="mt-1 text-sm text-muted">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
