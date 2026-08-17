const audiences = [
  ["01", "Agents", "Manage leads, properties and follow-ups without spreadsheets."],
  ["02", "Brokers", "Give your brokerage a centralized system for sales and inventory."],
  ["03", "Agencies", "Connect website leads, property listings and team activity."],
  ["04", "Developers", "Build scalable sales operations across projects and teams."],
] as const;

export default function WhoItsFor() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-blue">Who it&apos;s for</span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Built around the way real estate businesses actually work.</h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(([number, title, description]) => (
            <article key={title} className="rounded-2xl border border-border/70 bg-background p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl font-semibold text-accent-blue/20">{number}</div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
