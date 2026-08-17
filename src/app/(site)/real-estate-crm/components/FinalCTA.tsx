import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="section-padding pt-0">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-[32px] bg-foreground px-7 py-20 text-center text-background sm:px-12 lg:py-24">
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-accent-blue/30 blur-[100px]" />
          <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-accent-violet/30 blur-[100px]" />
          <div className="relative mx-auto max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan">Get started</span>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">Ready to build a better real estate sales process?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-background/65 sm:text-lg">
              Start your 14-day free trial or talk to the Brosavo team about building a sales operation around your business.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href="https://crm.brosavo.com" className="rounded-full bg-background px-7 py-3.5 text-sm font-medium text-foreground transition hover:opacity-90">Start Free Trial</Link>
              <Link href="/contact" className="rounded-full border border-background/20 px-7 py-3.5 text-sm font-medium text-background transition hover:bg-background/10">Book a Demo</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
