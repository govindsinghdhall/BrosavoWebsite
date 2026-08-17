const steps = [
  ["01", "Capture", "Bring enquiries into your CRM through your website and connected channels."],
  ["02", "Qualify", "Understand customer requirements and identify the right opportunities."],
  ["03", "Follow Up", "Use tasks, reminders and communication workflows to keep deals moving."],
  ["04", "Close", "Track opportunities through your pipeline and understand performance."],
] as const;

export default function HowItWorks() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan">How it works</span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">From first inquiry to closed deal.</h2>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">Create a repeatable sales process that your entire team can follow.</p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-4">
          {steps.map(([number, title, text]) => (
            <div key={number}>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent-blue/30 bg-background text-sm font-semibold text-accent-blue">{number}</div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
