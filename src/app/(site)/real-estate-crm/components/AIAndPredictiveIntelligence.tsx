"use client";

import { motion } from "framer-motion";

export default function AIAndPredictiveIntelligence() {
  return (
    <section
      aria-labelledby="ai-intelligence-heading"
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
          <span className="inline-flex items-center rounded-full border border-purple-500/15 bg-purple-500/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-purple-500">
            AI & Predictive Intelligence
          </span>

          <h2
            id="ai-intelligence-heading"
            className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-[2.65rem]"
          >
            AI-Powered Insights & Predictive
            <br />
            <span className="text-gradient-accent">Analytics</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
            Intelligent lead scoring, automated workflows and predictive analytics
            to optimize real estate sales.
          </p>
        </motion.div>
      </div>
    </section>
  );
}