"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PropertyMatching() {
  return (
    <section className="relative py-12 sm:py-14 lg:py-16">
      <div className="container-wide px-6 lg:px-10">

        {/* ============================================================
            HEADER
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-violet-500/15 bg-violet-500/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-violet-500">
            Property Matching
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[2.75rem]">
            Match customers with
            <br />
            <span className="text-gradient-accent">
              the right properties.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
            Turn customer requirements into actionable property
            recommendations without manually searching through inventory.
          </p>
        </motion.div>

        {/* ============================================================
            PROPERTY MATCHING VISUAL
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.985,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.75,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-8 max-w-4xl"
        >
          <div className="relative">

            {/* Subtle background glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.04] blur-[80px]" />

            {/* Main image */}
            <div className="relative">
              <Image
                src="/images/PROPERTY MATCHING HERO COMPOSITE.png"
                alt="Brosavo property matching CRM"
                width={1800}
                height={1100}
                className="mx-auto block h-auto w-full object-contain"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}