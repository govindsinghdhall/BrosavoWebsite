import Image from "next/image";

export default function MobileCRM() {
  return (
    <section className="section-padding">
      <div className="container-wide grid items-center gap-14 lg:grid-cols-2">
        <div className="">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">Mobile CRM</span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Take your sales operation with you.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">Keep your team connected to leads, customers and property information even when they are away from their desk.</p>
          <div className="mt-6 inline-flex rounded-full border border-accent-blue/20 bg-accent-blue/5 px-4 py-2 text-xs text-accent-blue">Mobile App available as an add-on</div>
        </div>

        <div className=" mx-auto w-full max-w-2xl">
          <div className="overflow-hidden rounded-3xl border border-border/70 bg-background p-2 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/MOBILE CRM APP VISUAL.png"
              alt="Brosavo real estate CRM mobile application"
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
