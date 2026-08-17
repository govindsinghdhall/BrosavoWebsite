import Image from "next/image";

export default function SalesPipeline() {
  return (
    <section className="section-padding">
      <div className="container-wide grid items-center gap-14 lg:grid-cols-2">
        <div className="">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">Sales pipeline</span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">See every opportunity and what needs to happen next.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">Move leads through a structured sales pipeline, assign ownership and understand where opportunities are progressing or getting stuck.</p>

        </div>

        <div className=" mx-auto w-full max-w-2xl">
          <div className="overflow-hidden rounded-3xl border border-border/70 bg-background p-2 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/SALES PIPELINE VISUAL.png"
              alt="Brosavo real estate CRM sales pipeline"
              width={1600}
              height={1000}
              className="h-auto w-full rounded-[22px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
