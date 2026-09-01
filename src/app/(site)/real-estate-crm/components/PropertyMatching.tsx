"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const matchingSteps = [
  {
    number: "01",
    title: "Understand",
  },
  {
    number: "02",
    title: "Match",
  },
  {
    number: "03",
    title: "Recommend",
  },
];

export default function PropertyMatching() {
  return (
    <section
      aria-labelledby="property-matching-heading"
      className="relative overflow-hidden py-10 sm:py-12 lg:py-14"
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Primary violet glow */}
        <div className="absolute left-1/2 top-[28%] h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-violet-500/[0.035] blur-[130px]" />

        {/* Secondary blue glow */}
        <div className="absolute left-1/2 top-[65%] h-[280px] w-[650px] -translate-x-1/2 rounded-full bg-blue-500/[0.025] blur-[120px]" />
      </div>

      <div className="container-wide px-6 lg:px-10">

        {/* ============================================================
            HEADER
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
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
          {/* Eyebrow */}

          <span className="inline-flex items-center rounded-full border border-violet-500/15 bg-violet-500/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-violet-500">
            Real Estate Property Matching
          </span>

          {/* Heading */}

          <p
            id="property-matching-heading"
            className="mt-3 text-3xl font-semibold leading-[1.02] tracking-[-0.05em] text-foreground sm:text-4xl lg:text-[2.5rem]"
          >
            Match customers with
            <br />
            <span className="text-gradient-accent">
              properties that fit.
            </span>
          </p>

          {/* Description */}

          <p className="mx-auto mt-2.5 max-w-2xl text-sm leading-6 text-muted sm:text-base">
            Connect customer requirements — property type, location, budget
            and preferences — with relevant listings from your inventory.
            Agents can recommend properties faster and move qualified
            opportunities into the sales pipeline with the right context.
          </p>
        </motion.div>

        {/* ============================================================
            MATCHING WORKFLOW
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-5 flex w-fit max-w-full items-center justify-center overflow-hidden rounded-full border border-border/60 bg-background/65 px-2 py-1.5 backdrop-blur-sm"
        >
          {matchingSteps.map((step, index) => (
            <div
              key={step.number}
              className="flex items-center"
            >
              <div className="flex items-center gap-1.5 px-3 text-[10px] sm:px-4 sm:text-[11px]">
                <span className="font-mono text-[8px] tracking-[0.08em] text-violet-500/70 sm:text-[9px]">
                  {step.number}
                </span>

                <span className="font-medium text-foreground">
                  {step.title}
                </span>
              </div>

              {index !== matchingSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="h-3 w-px bg-border/70"
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* ============================================================
            PROPERTY MATCHING VISUAL
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
            scale: 0.99,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-4 w-full max-w-5xl"
        >
          {/* ==========================================================
              VISUAL GLOW
          ========================================================== */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.075] blur-[100px]"
          />

          {/* ==========================================================
              IMAGE FRAME
          ========================================================== */}

          <div className="relative overflow-hidden rounded-[24px] border border-border/60 bg-background/80 p-1.5 shadow-[0_25px_80px_rgba(0,0,0,0.07)] backdrop-blur-xl sm:rounded-[28px] sm:p-2">
            <div className="overflow-hidden rounded-[18px] bg-white dark:bg-zinc-950 sm:rounded-[22px]">
              <Image
                src="/images/PROPERTY MATCHING HERO COMPOSITE.png"
                alt="Brosavo Real Estate CRM property matching interface showing customer requirements, matching intelligence and recommended properties"
                width={1800}
                height={1100}
                sizes="(max-width: 1280px) 100vw, 1024px"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}