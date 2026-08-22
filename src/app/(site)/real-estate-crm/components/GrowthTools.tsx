"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    number: "01",
    label: "Website",
    title: "Turn your website into a lead channel.",
    description:
      "Capture property enquiries from your real estate website and bring them directly into your CRM workflow.",
    image: "/images/WEBSITE LEAD CAPTURE VISUAL.png",
    alt: "Brosavo real estate website lead capture connected to CRM",
  },
  {
    number: "02",
    label: "AI",
    title: "Give your sales team an intelligent assist.",
    description:
      "Surface customer insights, recommendations and next-best actions to help your team work more efficiently.",
    image: "/images/AI REAL ESTATE ASSISTANT VISUAL.png",
    alt: "Brosavo AI real estate assistant for sales teams",
  },
  {
    number: "03",
    label: "Analytics",
    title: "Understand what is driving sales.",
    description:
      "Track leads, conversions, pipeline performance and team activity from one reporting layer.",
    image: "/images/ANALYTICS & REPORTS VISUAL.png",
    alt: "Brosavo real estate CRM analytics and sales reports",
  },
];

export default function GrowthTools() {
  return (
    <section
      aria-labelledby="growth-tools-heading"
      className="relative overflow-hidden bg-surface py-14 sm:py-16 lg:py-20"
    >
      {/* ============================================================
          SUBTLE BACKGROUND
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.025] blur-[110px]" />
      </div>

      <div className="container-wide relative">

        {/* ============================================================
            HEADER
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
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
          <span className="inline-flex items-center rounded-full border border-cyan-500/15 bg-cyan-500/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-accent-cyan">
            Growth Tools
          </span>

          <h3
            id="growth-tools-heading"
            className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-[2.65rem]"
          >
            Real-time analytics &amp; reporting
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
            Capture more enquiries, help your team work smarter and understand
            what is driving performance across your real estate business.
          </p>
        </motion.div>

        {/* ============================================================
            GROWTH TOOLS
        ============================================================ */}

        <div className="mx-auto mt-9 grid max-w-6xl gap-4 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.label}
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
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
              }}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background transition-all duration-300 hover:border-blue-500/15 hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)]"
            >
              {/* ======================================================
                  IMAGE
              ====================================================== */}

              <div className="relative border-b border-border/60 p-2.5">
                <div className="relative overflow-hidden rounded-xl bg-surface">
                  {/* Image glow */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-3xl"
                  />

                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={1200}
                    height={800}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="relative block aspect-[3/2] h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                </div>
              </div>

              {/* ======================================================
                  CONTENT
              ====================================================== */}

              <div className="p-5 sm:p-6">

                {/* Number + label */}

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-accent-blue">
                    {card.label}
                  </span>

                  <span className="font-mono text-[9px] text-muted/45">
                    {card.number}
                  </span>
                </div>

                <p className="mt-3 text-xl font-semibold leading-tight tracking-[-0.025em] text-foreground">
                  {card.title}
                </p>

                <p className="mt-2.5 text-sm leading-6 text-muted">
                  {card.description}
                </p>
              </div>

              {/* Bottom hover accent */}

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 transition-all duration-500 group-hover:w-full"
              />
            </motion.article>
          ))}
        </div>

        {/* ============================================================
            WORKFLOW LINE
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          className="mt-7 flex items-center justify-center gap-3 text-[9px] uppercase tracking-[0.16em] text-muted/50"
        >
          <span className="h-px w-8 bg-border" />

          <span>
            Capture · Assist · Optimize
          </span>

          <span className="h-px w-8 bg-border" />
        </motion.div>
      </div>
    </section>
  );
}