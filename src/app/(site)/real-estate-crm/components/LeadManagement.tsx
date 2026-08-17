import Image from "next/image";

const leadWorkflow = [
  {
    number: "01",
    title: "Capture",
    description: "Bring new enquiries into one centralized workspace.",
  },
  {
    number: "02",
    title: "Organize",
    description: "Keep lead ownership, status and customer requirements clear.",
  },
  {
    number: "03",
    title: "Follow Up",
    description: "Know the next action and keep every opportunity moving.",
  },
];

export default function LeadManagement() {
  return (
    <section
      aria-labelledby="lead-management-heading"
      className="section-padding"
    >
      <div className="container-wide grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

        {/* ============================================================
            CONTENT
        ============================================================ */}

        <div className="max-w-xl">

          <span className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">
            Real Estate Lead Management
          </span>

          <h2
            id="lead-management-heading"
            className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl"
          >
            Turn every enquiry into a
            <span className="text-gradient-accent">
              {" "}clear next action.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Brosavo helps real estate teams capture, organize and follow
            leads from the first enquiry through conversion. Give every
            opportunity a clear owner, status and next step without relying
            on scattered spreadsheets or disconnected workflows.
          </p>

          {/* ==========================================================
              WORKFLOW
          ========================================================== */}

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {leadWorkflow.map((item) => (
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

        {/* ============================================================
            PRODUCT VISUAL
        ============================================================ */}

        <div className="relative mx-auto w-full max-w-2xl">

          {/* Visual glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.07] blur-[90px]"
          />

          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-background p-2 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/LEAD MANAGEMENT VISUAL.png"
              alt="Brosavo Real Estate CRM lead management workspace"
              width={1600}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full rounded-[22px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}