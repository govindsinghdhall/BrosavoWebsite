import Image from "next/image";
import Link from "next/link";

const propertySalesWorkflow = [
  {
    number: "01",
    title: "Capture enquiries",
    description:
      "Capture property enquiries from your website and sales channels so every buyer or seller opportunity enters one central system.",
  },
  {
    number: "02",
    title: "Assign leads",
    description:
      "Assign property leads to the right agents and keep ownership clear throughout the sales process.",
  },
  {
    number: "03",
    title: "Track requirements",
    description:
      "Record buyer requirements such as preferred property type, location, budget and other criteria.",
  },
  {
    number: "04",
    title: "Match properties",
    description:
      "Match customer requirements with relevant properties and listings from your inventory.",
  },
  {
    number: "05",
    title: "Follow up",
    description:
      "Schedule and manage follow-ups so promising property opportunities do not get lost or forgotten.",
  },
  {
    number: "06",
    title: "Track negotiations",
    description:
      "Keep sales conversations, ownership and opportunity progress organized as buyers move toward a decision.",
  },
  {
    number: "07",
    title: "Manage sales stages",
    description:
      "Move opportunities through defined stages such as new, qualified, site visit, negotiation and closed.",
  },
  {
    number: "08",
    title: "Monitor agents",
    description:
      "Give managers visibility into agent activity, workloads, opportunities and follow-up performance.",
  },
  {
    number: "09",
    title: "Close deals",
    description:
      "Track opportunities through the final stages and maintain a clear record of completed property sales.",
  },
  {
    number: "10",
    title: "Analyze conversion",
    description:
      "Use sales reporting and analytics to understand lead conversion, pipeline performance and team results.",
  },
];

const pipelineStages = [
  {
    number: "01",
    title: "Qualify",
    description:
      "Understand buyer requirements and identify which property opportunities are ready to move forward.",
  },
  {
    number: "02",
    title: "Progress",
    description:
      "Move opportunities through your defined sales stages while keeping ownership and next actions clear.",
  },
  {
    number: "03",
    title: "Close",
    description:
      "Track negotiations, completed deals and the performance of your property sales pipeline.",
  },
];

export default function SalesPipeline() {
  return (
    <section
      aria-labelledby="sales-pipeline-heading"
      className="section-padding"
    >
      <div className="container-wide">
        {/* ============================================================
            MAIN SALES PIPELINE CONTENT
        ============================================================ */}

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* ============================================================
              CONTENT
          ============================================================ */}

          <div className="max-w-xl">
            <span className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">
              Property Sales CRM
            </span>

            <h3
              id="sales-pipeline-heading"
              className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl"
            >
              Manage your property sales pipeline from enquiry to close
            </h3>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              BROSAVO helps real estate teams manage the complete property
              sales process in one connected CRM. Capture property enquiries,
              assign leads to agents, understand buyer requirements, match
              customers with properties, manage follow-ups and move
              opportunities through every stage of the sales pipeline.
            </p>

            {/* ==========================================================
                PIPELINE WORKFLOW
            ========================================================== */}

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {pipelineStages.map((stage) => (
                <div
                  key={stage.number}
                  className="group rounded-xl border border-border/70 bg-background/60 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] text-accent-blue/70">
                      {stage.number}
                    </span>

                    <p className="text-xs font-semibold text-foreground">
                      {stage.title}
                    </p>
                  </div>

                  <p className="mt-1.5 text-[11px] leading-5 text-muted">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>

            {/* ==========================================================
                INTERNAL LINK
            ========================================================== */}

            <div className="mt-7">
              <Link
                href="/real-estate-sales-crm"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent-blue"
              >
                Explore BROSAVO Real Estate Sales CRM

                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
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

            {/* Product frame */}

            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-background p-2 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/SALES PIPELINE VISUAL.png"
                alt="BROSAVO property sales CRM showing real estate sales pipeline, opportunities, stages and ownership"
                width={1600}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full rounded-[22px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* ============================================================
            PROPERTY SALES CRM WORKFLOW
        ============================================================ */}

        <div className="mt-20 border-t border-border/60 pt-16 sm:mt-24 sm:pt-20">
          <div className="mx-auto max-w-4xl">
            <div className="max-w-3xl">
              <span className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">
                Complete property sales workflow
              </span>

              <h4 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                From property enquiry to completed deal
              </h4>

              <p className="mt-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
                A property sales CRM should do more than store contacts.
                BROSAVO connects lead management, property requirements,
                property matching, agent follow-ups and sales pipeline
                management so your team can manage opportunities from the
                first enquiry through to the final deal.
              </p>
            </div>

            {/* ==========================================================
                WORKFLOW GRID
            ========================================================== */}

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {propertySalesWorkflow.map((item) => (
                <div
                  key={item.number}
                  className="group rounded-2xl border border-border/70 bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/25 hover:shadow-[0_16px_40px_rgba(0,0,0,0.05)]"
                >
                  <span className="font-mono text-[10px] text-accent-blue/70">
                    {item.number}
                  </span>

                  <h5 className="mt-4 text-sm font-semibold text-foreground">
                    {item.title}
                  </h5>

                  <p className="mt-2 text-xs leading-5 text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}