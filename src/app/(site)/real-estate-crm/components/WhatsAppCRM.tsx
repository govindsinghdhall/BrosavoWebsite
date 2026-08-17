import Image from "next/image";

const whatsappWorkflow = [
  {
    number: "01",
    title: "Connect",
    description:
      "Keep WhatsApp engagement connected to the leads your team is managing.",
  },
  {
    number: "02",
    title: "Engage",
    description:
      "Use notifications and API-powered workflows to respond at the right time.",
  },
  {
    number: "03",
    title: "Follow Up",
    description:
      "Keep important conversations connected to opportunities and next actions.",
  },
];

export default function WhatsAppCRM() {
  return (
    <section
      aria-labelledby="whatsapp-crm-heading"
      className="section-padding"
    >
      <div className="container-wide grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

        {/* ============================================================
            PRODUCT VISUAL
        ============================================================ */}

        <div className="relative mx-auto w-full max-w-2xl lg:order-1">

          {/* Visual glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.07] blur-[90px]"
          />

          {/* Product frame */}

          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-background p-2 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/WHATSAPP CRM VISUAL.png"
              alt="Brosavo WhatsApp CRM workflow connecting customer conversations with real estate leads and sales opportunities"
              width={1600}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full rounded-[22px] object-contain"
            />
          </div>
        </div>

        {/* ============================================================
            CONTENT
        ============================================================ */}

        <div className="max-w-xl lg:order-2">

          <span className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">
            WhatsApp CRM
          </span>

          <h2
            id="whatsapp-crm-heading"
            className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl"
          >
            Keep every customer conversation
            <span className="text-gradient-accent">
              {" "}connected to the sale.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Connect WhatsApp engagement with your real estate sales workflow.
            Use notifications and API-powered workflows to respond faster
            while keeping important customer conversations connected to leads
            and opportunities.
          </p>

          {/* ==========================================================
              WHATSAPP WORKFLOW
          ========================================================== */}

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {whatsappWorkflow.map((item) => (
              <div
                key={item.number}
                className="rounded-xl border border-border/70 bg-background/60 p-3.5"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-accent-blue/70">
                    {item.number}
                  </span>

                  <h3 className="text-xs font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-1.5 text-[11px] leading-5 text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}