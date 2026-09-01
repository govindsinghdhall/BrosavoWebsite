"use client";

import { motion } from "framer-motion";

import { REAL_ESTATE_CRM_FAQS } from "../faqs";

export default function FAQ() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[760px] -translate-x-1/2 rounded-full bg-violet-500/[0.025] blur-[120px]"
      />

      <div className="container-wide relative">
        <div className="mx-auto max-w-4xl">

          {/* ========================================================
              HEADER
          ======================================================== */}

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
          >
            <span className="inline-flex items-center rounded-full border border-violet-500/15 bg-violet-500/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-accent-violet">
              Real Estate CRM FAQ
            </span>

            <h2
              id="faq-heading"
              className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-4xl lg:text-5xl"
            >
              Frequently asked questions
              <br />
              <span className="text-gradient-accent">
                about real estate CRM
              </span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
              Answers to common questions about BROSAVO Real Estate CRM,
              pricing, integrations and how the platform fits into a real
              estate sales workflow.
            </p>
          </motion.div>

          {/* ========================================================
              FAQ LIST
          ======================================================== */}

          <div className="mt-8 space-y-2.5">
            {REAL_ESTATE_CRM_FAQS.map((faq, index) => (
              <motion.details
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.05,
                }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.025, 0.25),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group overflow-hidden rounded-2xl border border-border/70 bg-background transition-colors duration-300 hover:border-violet-500/15"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-4.5 text-sm font-medium text-foreground sm:px-6 sm:py-5">
                  <h3 className="pr-4 text-sm font-medium">
                    {faq.question}
                  </h3>

                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border/70 text-base font-normal text-muted transition-all duration-300 group-open:rotate-45 group-open:border-violet-500/20 group-open:text-accent-violet"
                  >
                    +
                  </span>
                </summary>

                <div className="border-t border-border/60">
                  <div className="px-5 py-4 text-sm leading-7 text-muted sm:px-6 sm:py-5">
                    {faq.answer}
                  </div>
                </div>
              </motion.details>
            ))}
          </div>

          {/* ========================================================
              BOTTOM NOTE
          ======================================================== */}

          <div className="mt-8 flex items-center justify-center gap-3 text-center text-[9px] uppercase tracking-[0.16em] text-muted/45">
            <span className="h-px w-8 bg-border" />

            <span>
              Real estate CRM · Sales · Properties · Customers
            </span>

            <span className="h-px w-8 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
}