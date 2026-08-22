"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="section-padding pt-0"
    >
      <div className="container-wide">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[28px] bg-foreground px-6 py-16 text-center text-background sm:px-10 sm:py-20 lg:rounded-[36px] lg:px-16 lg:py-24"
        >
          {/* ==========================================================
              BACKGROUND GLOWS
          ========================================================== */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-36 h-96 w-96 rounded-full bg-accent-blue/30 blur-[110px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 left-[15%] h-96 w-96 rounded-full bg-accent-violet/25 blur-[110px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/[0.08] blur-[100px]"
          />

          {/* ==========================================================
              CONTENT
          ========================================================== */}

          <div className="relative mx-auto max-w-3xl">

            {/* Eyebrow */}

            <span className="inline-flex items-center rounded-full border border-background/15 bg-background/[0.06] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-accent-cyan">
              Get Started
            </span>

            {/* Heading */}

            <h2
              id="final-cta-heading"
              className="mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl"
            >
              Start growing your
              <br />
              <span className="text-background/60">
                real estate business today
              </span>
            </h2>

            {/* Description */}

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-background/65 sm:text-base sm:leading-8 lg:text-lg"
            >
              Start with Brosavo Real Estate CRM and bring lead management,
              property inventory, customer records, WhatsApp follow-ups and
              your sales pipeline into one workflow. Individual agents can
              begin on Starter; growing teams can move to Professional or
              talk with us about Enterprise. Start a 14-day free trial and
              see how faster follow-ups and clearer ownership help you close
              more deals.
            </p>

            {/* ========================================================
                CTA BUTTONS
            ======================================================== */}

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="https://crm.brosavo.com"
                className="inline-flex h-12 items-center justify-center rounded-full bg-background px-7 text-sm font-semibold text-foreground shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(0,0,0,0.2)]"
              >
                Open your Brosavo CRM trial
                <span className="ml-2 transition-transform duration-300">
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-background/20 bg-background/[0.04] px-7 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-background/[0.09]"
              >
                Speak with Brosavo sales
              </Link>
            </div>

            {/* ========================================================
                TRUST MICRO-COPY
            ======================================================== */}

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.14em] text-background/40">
              <span>14-day free trial</span>

              <span
                aria-hidden="true"
                className="hidden h-3 w-px bg-background/15 sm:block"
              />

              <span>Starter from ₹999/month</span>

              <span
                aria-hidden="true"
                className="hidden h-3 w-px bg-background/15 sm:block"
              />

              <span>Built for real estate teams</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}