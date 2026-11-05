"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <header
      aria-labelledby="real-estate-crm-heading"
      className="relative overflow-hidden pb-14 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-180px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/[0.055] blur-[150px]" />

        <div className="absolute right-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.045] blur-[140px]" />

        <div className="absolute left-[-200px] top-[45%] h-[450px] w-[450px] rounded-full bg-cyan-500/[0.035] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(96, 165, 250, 0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container-wide px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-center"
          >
            <span className="inline-flex items-center rounded-full border border-blue-500/15 bg-blue-500/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-blue-500">
              Real Estate CRM Platform
            </span>

            <h1
              id="real-estate-crm-heading"
              className="mt-4 text-4xl font-semibold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl"
            >
              Turn Every Property Enquiry Into a Sales Opportunity
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Manage leads, property inventory, follow-ups, and your sales pipeline in one connected real estate CRM platform.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://crm.brosavo.com"
                className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-7 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(59,130,246,0.4)]"
              >
                Start Free 14-Day Trial
                <span className="ml-2 transition-transform duration-300">
                  →
                </span>
              </Link>

              <Link
                href="/real-estate-crm-demo"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-7 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:text-blue-600"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>

          {/* Feature highlights */}
          <div className="mx-auto mt-8 grid max-w-5xl overflow-hidden rounded-2xl border border-border/70 bg-background/80 shadow-sm backdrop-blur-md sm:grid-cols-4">
            <div className="flex items-center justify-center gap-3 border-b border-border/60 px-4 py-4 sm:border-b-0 sm:border-r">
              <span className="text-lg text-blue-600">✓</span>

              <div>
                <div className="text-xs font-semibold text-foreground">
                  14-Day Free Trial
                </div>

                <div className="text-[9px] text-muted">
                  Explore the CRM platform
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 border-b border-border/60 px-4 py-4 sm:border-b-0 sm:border-r">
              <span className="text-lg text-violet-600">⚡</span>

              <div>
                <div className="text-xs font-semibold text-foreground">
                  Quick Setup
                </div>

                <div className="text-[9px] text-muted">
                  Start organizing your workflow
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 border-b border-border/60 px-4 py-4 sm:border-b-0 sm:border-r">
              <span className="text-lg text-emerald-600">◇</span>

              <div>
                <div className="text-xs font-semibold text-foreground">
                  Real Estate Focused
                </div>

                <div className="text-[9px] text-muted">
                  Built for property sales teams
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 px-4 py-4">
              <span className="text-lg text-orange-600">✦</span>

              <div>
                <div className="text-xs font-semibold text-foreground">
                  AI & Automation
                </div>

                <div className="text-[9px] text-muted">
                  Reduce repetitive work
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;