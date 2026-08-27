"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const audiences = [
  {
    number: "01",
    title: "Real Estate Agents",
    href: "/real-estate-crm-for-agents",
    description:
      "Manage leads, properties and follow-ups from one place instead of relying on spreadsheets and scattered tools.",
  },
  {
    number: "02",
    title: "Real Estate Brokers",
    href: "/real-estate-crm-for-brokers",
    description:
      "Give your desk a broker CRM for lead assignment, inventory, pipelines and team activity.",
  },
  {
    number: "03",
    title: "Real Estate Agencies",
    href: "/real-estate-crm-for-brokerages",
    description:
      "Connect website enquiries, property listings, customer requirements and team workflows in one CRM.",
  },
  {
    number: "04",
    title: "Property Developers",
    href: "/real-estate-crm-for-developers",
    description:
      "Build scalable sales operations across projects, teams, inventory and customer opportunities.",
  },
];

export default function WhoItsFor() {
  return (
    <section
      aria-labelledby="who-its-for-heading"
      className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[30%] h-72 w-[760px] -translate-x-1/2 rounded-full bg-violet-500/[0.025] blur-[120px]" />
      </div>

      <div className="container-wide">

        {/* ============================================================
            HEADER
        ============================================================ */}

        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-blue-500/15 bg-blue-500/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-accent-blue">
            Who It&apos;s For
          </span>

          <p
            id="who-its-for-heading"
            className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-[2.65rem]"
          >
            Built around how
            <br />
            <span className="text-gradient-accent">
              real estate businesses work.
            </span>
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
            Whether you work independently, manage a brokerage, run an agency
            or sell across multiple projects, Brosavo gives your team one
            connected sales workflow.
          </p>
        </motion.div>

        {/* ============================================================
            AUDIENCE GRID
        ============================================================ */}

        <div className="mx-auto mt-9 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => (
            <motion.article
              key={audience.title}
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
                amount: 0.12,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
              }}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background p-5 transition-all duration-300 hover:border-blue-500/15 hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)] sm:p-6"
            >
              {/* Number */}

              <div className="flex items-start justify-between">
                <span className="font-mono text-3xl font-semibold tracking-[-0.05em] text-accent-blue/20 transition-colors duration-300 group-hover:text-accent-blue/35">
                  {audience.number}
                </span>

                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-blue/40 transition-all duration-300 group-hover:bg-accent-blue group-hover:shadow-[0_0_12px_rgba(59,130,246,0.45)]"
                />
              </div>

              {/* Content */}

              <p className="mt-5 text-lg font-semibold leading-tight tracking-[-0.02em] text-foreground">
                {audience.title}
              </p>

              <p className="mt-2.5 text-sm leading-6 text-muted">
                {audience.description}
              </p>

              <Link
                href={audience.href}
                className="mt-4 inline-flex text-sm font-medium text-accent-blue"
              >
                Open this CRM page →
              </Link>

              {/* Bottom accent */}

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 transition-all duration-500 group-hover:w-full"
              />
            </motion.article>
          ))}
        </div>

        {/* ============================================================
            BOTTOM MICRO-LINE
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          className="mt-7 flex items-center justify-center gap-3 text-[9px] uppercase tracking-[0.16em] text-muted/50"
        >
          <span className="h-px w-8 bg-border" />

          <span>
            Agents · Brokers · Agencies · Developers ·{" "}
            <Link href="/real-estate-crm-for-realtors" className="text-muted">
              Realtors
            </Link>
          </span>

          <span className="h-px w-8 bg-border" />
        </motion.div>
      </div>
    </section>
  );
}