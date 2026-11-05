"use client";

import { motion } from "framer-motion";

export default function FieldForceAndSiteVisits() {
  return (
    <section
      aria-labelledby="field-force-heading"
      className="relative py-12 sm:py-14 lg:py-16"
    >
      <div className="container-wide px-6 lg:px-10">
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
          <span className="inline-flex items-center rounded-full border border-cyan-500/15 bg-cyan-500/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-500">
            Field Force
          </span>

          <h2
            id="field-force-heading"
            className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-[2.65rem]"
          >
            Field Force & Site Visits
            <br />
            <span className="text-gradient-accent">Management</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
            Mobile-friendly visit scheduling, GPS tracking and site operation
            management.
          </p>
        </motion.div>
      </div>
    </section>
  );
}