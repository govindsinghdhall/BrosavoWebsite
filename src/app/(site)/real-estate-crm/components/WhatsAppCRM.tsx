import Image from "next/image";

export default function WhatsAppCRM() {
  return (
    <section className="section-padding">
      <div className="container-wide grid items-center gap-14 lg:grid-cols-2">
        <div className="">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">WhatsApp CRM</span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Keep customer conversations connected to your sales workflow.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">Use WhatsApp notifications and API-powered engagement workflows to respond faster and keep important customer conversations connected to leads and opportunities.</p>

        </div>

        <div className=" mx-auto w-full max-w-2xl">
          <div className="overflow-hidden rounded-3xl border border-border/70 bg-background p-2 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/WHATSAPP CRM VISUAL.png"
              alt="Brosavo WhatsApp CRM integration"
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
