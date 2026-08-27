"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const portals = [
  {
    number: "01",
    image: "/images/99acres.jpeg",
    name: "99acres",
    description: "Property listings & enquiries",
  },
  {
    number: "02",
    image: "/images/magicbricks.jpeg",
    name: "Magicbricks",
    description: "Property discovery & enquiries",
  },
  {
    number: "03",
    image: "/images/housing.jpeg",
    name: "Housing.com",
    description: "Property discovery & enquiries",
  },
];

export default function PropertyPortals() {
  return (
    <section
      aria-labelledby="property-ecosystem-heading"
      className="relative overflow-hidden bg-surface py-14 sm:py-16 lg:py-20"
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-72 w-[760px] -translate-x-1/2 rounded-full bg-blue-500/[0.025] blur-[120px]" />
      </div>

      <div className="container-wide relative">

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
          <span className="inline-flex items-center rounded-full border border-blue-500/15 bg-blue-500/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-accent-blue">
            Property Ecosystem
          </span>

          <h2
            id="property-ecosystem-heading"
            className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-[2.65rem]"
          >
            Your property channels.
            <br />
            <span className="text-gradient-accent">
              One intelligent CRM.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
            Bring 99acres, MagicBricks and Housing.com listings, enquiries and
            customer requirements closer to the same sales workflow your team
            already uses.
          </p>
        </motion.div>

        {/* ============================================================
            PORTALS
        ============================================================ */}

        <div className="mx-auto mt-9 grid max-w-6xl gap-4 md:grid-cols-3">
          {portals.map((portal, index) => (
            <motion.article
              key={portal.name}
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
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
              }}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background transition-all duration-300 hover:border-blue-500/15 hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)]"
            >
              {/* ======================================================
                  PORTAL IMAGE
              ====================================================== */}

              <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-border/60 bg-white p-7 dark:bg-zinc-950">
                {/* Background glow */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-3xl"
                />

                <Image
                  src={portal.image}
                  alt={`${portal.name} property portal`}
                  width={360}
                  height={180}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="relative max-h-24 w-auto max-w-[230px] object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              {/* ======================================================
                  CONTENT
              ====================================================== */}

              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-accent-blue/70">
                    Property Channel
                  </span>

                  <span className="font-mono text-[9px] text-muted/45">
                    {portal.number}
                  </span>
                </div>

                <p className="mt-3 text-lg font-semibold tracking-[-0.02em] text-foreground">
                  {portal.name}
                </p>

                <p className="mt-1.5 text-sm leading-6 text-muted">
                  {portal.description}
                </p>
              </div>

              {/* Hover accent */}

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 transition-all duration-500 group-hover:w-full"
              />
            </motion.article>
          ))}
        </div>

        {/* ============================================================
            BOTTOM STATEMENT
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
            delay: 0.2,
          }}
          className="mt-7 flex flex-col items-center justify-center gap-3 text-center"
        >
          <Link
            href="/how-to-sync-99acres-and-magicbricks-leads-to-crm"
            className="text-sm font-medium text-accent-blue"
          >
            Sync 99acres and MagicBricks leads
          </Link>

          <div className="flex items-center justify-center gap-3 text-[9px] uppercase tracking-[0.16em] text-muted/50">
            <span className="h-px w-8 bg-border" />

            <span>
              Listings · Enquiries · Customer Requirements
            </span>

            <span className="h-px w-8 bg-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}