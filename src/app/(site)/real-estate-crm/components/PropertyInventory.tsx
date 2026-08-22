import Image from "next/image";
import Link from "next/link";

const inventoryWorkflow = [
  {
    number: "01",
    title: "Centralize",
    description:
      "Keep properties, listings and key details in one searchable inventory.",
  },
  {
    number: "02",
    title: "Manage",
    description:
      "Track availability, pricing and property information as it changes.",
  },
  {
    number: "03",
    title: "Sell",
    description:
      "Give your team the information they need to respond to enquiries faster.",
  },
];

export default function PropertyInventory() {
  return (
    <section
      aria-labelledby="property-inventory-heading"
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
            className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.07] blur-[90px]"
          />

          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-background p-2 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/MAIN PROPERTY INVENTORY VISUAL.png"
              alt="Brosavo Real Estate CRM property inventory showing property listings, availability and pricing"
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
            Property Inventory Management
          </span>

          <p
            id="property-inventory-heading"
            className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl"
          >
            Keep your property inventory
            <span className="text-gradient-accent">
              {" "}
              ready to sell.
            </span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Manage properties, listings, availability, pricing and property
            information from a centralized inventory built for real estate
            sales teams. Give your agents the information they need without
            relying on scattered spreadsheets or disconnected systems.
          </p>

          {/* ==========================================================
              INVENTORY WORKFLOW
          ========================================================== */}

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {inventoryWorkflow.map((item) => (
              <div
                key={item.number}
                className="group rounded-xl border border-border/70 bg-background/60 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-accent-blue/70">
                    {item.number}
                  </span>

                  <p className="text-xs font-semibold text-foreground">
                    {item.title}
                  </p>
                </div>

                <p className="mt-1.5 text-[11px] leading-5 text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* ==========================================================
              INTERNAL LINK
          ========================================================== */}

          <div className="mt-7">
            <Link
              href="/property-management-crm"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent-blue"
            >
              Explore property management CRM
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}