"use client";

import { motion } from "framer-motion";

const features = [
  [
    "01",
    "Lead Management",
    "Capture, organize and track leads from inquiry through conversion.",
  ],
  [
    "02",
    "Customer Management",
    "Keep customer details, requirements and property interests together.",
  ],
  [
    "03",
    "Property Inventory",
    "Manage listings, availability, pricing and property information.",
  ],
  [
    "04",
    "Sales Pipeline",
    "Move opportunities through a structured pipeline and see what happens next.",
  ],
  [
    "05",
    "Follow-ups & Tasks",
    "Schedule tasks and follow-ups so opportunities never disappear.",
  ],
  [
    "06",
    "WhatsApp",
    "Connect WhatsApp notifications and API-powered engagement workflows.",
  ],
  [
    "07",
    "Website Lead Capture",
    "Capture property inquiries directly from your real estate website.",
  ],
  [
    "08",
    "Reports & Analytics",
    "Understand leads, conversions, pipeline performance and team activity.",
  ],
] as const;

export default function Capabilities() {
  return (
    <section className="relative py-12 sm:py-14 lg:py-16">
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
            CRM Platform
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-foreground sm:text-4xl lg:text-[2.75rem]">
            More than a CRM.
            <br />

            <span className="text-gradient-accent">
              Your real estate operating system.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
            Everything your real estate team needs to manage leads,
            properties, customers and sales from one connected platform.
          </p>
        </motion.div>

        {/* ============================================================
            FEATURE GRID
        ============================================================ */}

        <div className="mx-auto mt-8 max-w-6xl">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {features.map(([number, title, description], index) => (
              <motion.article
                key={number}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -3,
                }}
                className="group relative min-h-[170px] overflow-hidden rounded-xl border border-border/70 bg-background/80 p-4 transition-all duration-300 hover:border-blue-500/20 hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)]"
              >
                {/* Subtle hover glow */}

                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/[0.04] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top row */}

                <div className="relative flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/[0.08] text-xs text-blue-500">
                    ✦
                  </span>

                  <span className="font-mono text-[10px] text-muted/60">
                    {number}
                  </span>
                </div>

                {/* Content */}

                <h3 className="relative mt-4 text-[15px] font-semibold tracking-[-0.01em] text-foreground">
                  {title}
                </h3>

                <p className="relative mt-1.5 text-xs leading-5 text-muted">
                  {description}
                </p>

                {/* Bottom accent */}

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />
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
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.16em] text-muted/60"
        >
          <span className="h-px w-10 bg-border" />

          <span>
            One platform · One workflow · One source of truth
          </span>

          <span className="h-px w-10 bg-border" />
        </motion.div>
      </div>
    </section>
  );
}