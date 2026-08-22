"use client";

import { motion } from "framer-motion";

const features = [
  [
    "01",
    "Lead Management",
    "Capture and track real estate leads from enquiry to conversion.",
  ],
  [
    "02",
    "Customer Management",
    "Keep customer requirements, property interests and conversations together.",
  ],
  [
    "03",
    "Property Inventory",
    "Manage properties, availability, pricing and listings in one place.",
  ],
  [
    "04",
    "Sales Pipeline",
    "Track opportunities through your sales stages and know what happens next.",
  ],
  [
    "05",
    "Follow-ups & Tasks",
    "Schedule reminders and follow-ups so opportunities keep moving.",
  ],
  [
    "06",
    "WhatsApp CRM",
    "Connect WhatsApp notifications and engagement workflows to your CRM.",
  ],
  [
    "07",
    "Website Lead Capture",
    "Capture property enquiries from your website directly into Brosavo.",
  ],
  [
    "08",
    "Reports & Analytics",
    "Monitor leads, conversions, pipeline performance and team activity.",
  ],
] as const;

export default function Capabilities() {
  return (
    <section
      aria-labelledby="real-estate-crm-features-heading"
      className="relative py-12 sm:py-14 lg:py-16"
    >
      <div className="container-wide px-6 lg:px-10">

        {/* ============================================================
            SECTION HEADER
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-violet-500/15 bg-violet-500/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-violet-500">
            Real Estate CRM Features
          </span>

          <h2
            id="real-estate-crm-features-heading"
            className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-[2.65rem]"
          >
            Essential CRM features for
            <br />
            <span className="text-gradient-accent">
              real estate professionals.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
            Brosavo is built as a CRM for agents, brokers, agencies and
            developers who need lead management and property management in
            the same place. Capture enquiries, organize customer requirements,
            match listings, run a sales pipeline, follow up on WhatsApp and
            review team activity without switching tools. The sections below
            cover how Brosavo helps agents prioritize work, move deals through
            pipeline stages and measure what is converting.
          </p>
        </motion.div>

        {/* ============================================================
            FEATURE GRID
        ============================================================ */}

        <div className="mx-auto mt-7 max-w-6xl">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {features.map(([number, title, description], index) => (
              <motion.article
                key={number}
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -3,
                }}
                className="group relative min-h-[145px] overflow-hidden rounded-xl border border-border/70 bg-background/80 p-4 transition-all duration-300 hover:border-blue-500/20 hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
              >
                {/* Hover glow */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-500/[0.045] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Top row */}

                <div className="relative flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/[0.08] text-[11px] text-blue-500"
                  >
                    ✦
                  </span>

                  <span className="font-mono text-[9px] text-muted/55">
                    {number}
                  </span>
                </div>

                {/* Content */}

                <p className="relative mt-3.5 text-[14px] font-semibold tracking-[-0.01em] text-foreground">
                  {title}
                </p>

                <p className="relative mt-1.5 text-[11px] leading-[1.55] text-muted">
                  {description}
                </p>

                {/* Bottom accent */}

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 transition-all duration-500 group-hover:w-full"
                />
              </motion.article>
            ))}

          </div>
        </div>

        {/* ============================================================
            BOTTOM MICRO-LINE
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-5 flex items-center justify-center gap-3 text-[9px] uppercase tracking-[0.16em] text-muted/55"
        >
          <span className="h-px w-8 bg-border" />

          <span>
            Leads · Properties · Follow-ups · Sales
          </span>

          <span className="h-px w-8 bg-border" />
        </motion.div>
      </div>
    </section>
  );
}