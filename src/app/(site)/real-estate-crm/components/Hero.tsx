"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HERO_IMAGE = "/images/REAL ESTATE CRM DASHBOARD HERO.png";

const capabilities = [
  {
    label: "Lead Management",
    color: "bg-emerald-500",
  },
  {
    label: "Property Inventory",
    color: "bg-blue-500",
  },
  {
    label: "Property Matching",
    color: "bg-violet-500",
  },
  {
    label: "Sales Pipeline",
    color: "bg-indigo-500",
  },
  {
    label: "WhatsApp",
    color: "bg-cyan-500",
  },
];

export function Hero() {
  return (
    <section
      aria-labelledby="real-estate-crm-heading"
      className="relative overflow-hidden pb-12 pt-20 sm:pb-16 sm:pt-24 lg:pb-20 lg:pt-28"
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Primary glow */}
        <div className="absolute left-1/2 top-[-180px] h-[520px] w-[850px] -translate-x-1/2 rounded-full bg-blue-500/[0.055] blur-[140px]" />

        {/* Violet glow */}
        <div className="absolute right-[-180px] top-[30%] h-[400px] w-[400px] rounded-full bg-violet-500/[0.035] blur-[130px]" />

        {/* Cyan glow */}
        <div className="absolute left-[-180px] top-[45%] h-[350px] w-[350px] rounded-full bg-cyan-500/[0.025] blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="container-wide relative px-6 lg:px-10">
        {/* ============================================================
            HERO CONTENT
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        >
          {/* Eyebrow */}

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.05,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/15 bg-blue-500/[0.04] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-blue-500 sm:text-[11px]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-blue-500 opacity-40" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-blue-500" />
            </span>

            Real Estate CRM Software
          </motion.div>

          {/* ==========================================================
              SEO-FIRST HEADLINE
          ========================================================== */}

          <motion.h1
            id="real-estate-crm-heading"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-6 max-w-4xl text-center text-[3rem] font-semibold leading-[0.98] tracking-[-0.055em] text-foreground sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.25rem]"
          >
            <span className="block">
              Real Estate CRM for
            </span>

            <span className="block">
              Agents, Brokers & Teams.
            </span>

            <span className="mt-1 block text-gradient-accent">
              Everything in one place.
            </span>
          </motion.h1>

          {/* ==========================================================
              DESCRIPTION
          ========================================================== */}

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.2,
            }}
            className="mx-auto mt-5 max-w-2xl text-center text-[15px] leading-7 text-muted sm:text-base sm:leading-7"
          >
            Manage real estate leads, properties, customer relationships,
            follow-ups and sales pipelines from one intelligent CRM built
            for modern real estate businesses.
          </motion.p>

          {/* ==========================================================
              CTA
          ========================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.28,
            }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="https://crm.brosavo.com"
              aria-label="Start your free 14-day Brosavo Real Estate CRM trial"
              className="group inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-[0_8px_25px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
            >
              Start Free Trial

              <span
                aria-hidden="true"
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-border/80 bg-background/70 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-background"
            >
              Book a Demo
            </Link>
          </motion.div>

          {/* Trust / supporting text */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-muted/75"
          >
            <span>14-day free trial</span>
            <span aria-hidden="true">·</span>
            <span>Built for real estate teams</span>
            <span aria-hidden="true">·</span>
            <span>Leads · Properties · Sales</span>
          </motion.div>
        </motion.div>

        {/* ============================================================
            DASHBOARD
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.985,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-9 w-full max-w-4xl sm:mt-11 lg:mt-12"
        >
          {/* Dashboard glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.09] blur-[100px]"
          />

          {/* Browser */}

          <div className="relative rounded-[22px] border border-black/[0.07] bg-white/90 p-1 shadow-[0_25px_70px_rgba(0,0,0,0.09)] backdrop-blur-xl dark:border-white/[0.07] dark:bg-zinc-950/90 dark:shadow-[0_25px_70px_rgba(0,0,0,0.30)] sm:rounded-[26px] sm:p-1.5">
            <div className="overflow-hidden rounded-[17px] border border-black/[0.05] bg-white dark:border-white/[0.05] dark:bg-zinc-950 sm:rounded-[20px]">

              {/* Browser bar */}

              <div className="flex h-9 items-center border-b border-black/[0.06] bg-zinc-50 px-3 dark:border-white/[0.06] dark:bg-zinc-900 sm:h-10 sm:px-4">
                <div className="flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-red-400/80"
                  />
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-yellow-400/80"
                  />
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-green-400/80"
                  />
                </div>

                <div className="mx-auto hidden h-6 w-[40%] items-center justify-center rounded-md border border-black/[0.04] bg-white text-[9px] text-zinc-400 shadow-sm dark:border-white/[0.04] dark:bg-zinc-800 dark:text-zinc-500 sm:flex">
                  crm.brosavo.com
                </div>

                <div className="w-[42px]" />
              </div>

              {/* Dashboard */}

              <div className="relative overflow-hidden bg-white dark:bg-zinc-950">
                <Image
                  src={HERO_IMAGE}
                  alt="Brosavo Real Estate CRM dashboard showing leads, property inventory and sales workflow"
                  width={1800}
                  height={1100}
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="block h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* ========================================================
              CRM STATUS
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
            className="absolute -right-2 top-[18%] hidden rounded-xl border border-border/70 bg-background/90 px-3.5 py-2.5 shadow-[0_12px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:block lg:-right-4"
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

              <span className="text-[11px] font-medium text-foreground">
                CRM Live
              </span>
            </div>

            <div className="mt-0.5 text-[9px] text-muted">
              Sales workspace active
            </div>
          </motion.div>

          {/* ========================================================
              OPPORTUNITY
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.9,
            }}
            className="absolute -bottom-4 -left-2 hidden rounded-xl border border-border/70 bg-background/90 px-3.5 py-2.5 shadow-[0_12px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:block lg:-left-4"
          >
            <div className="text-[9px] uppercase tracking-[0.12em] text-muted">
              New opportunity
            </div>

            <div className="mt-0.5 text-xs font-semibold text-foreground">
              3 BHK · Gurgaon
            </div>

            <div className="mt-0.5 text-[9px] text-emerald-500">
              Ready for follow-up
            </div>
          </motion.div>
        </motion.div>

        {/* ============================================================
            CAPABILITIES
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.65,
          }}
          className="mx-auto mt-7 flex w-fit max-w-full flex-wrap items-center justify-center gap-x-5 gap-y-2.5 rounded-full border border-border/70 bg-background/75 px-5 py-2.5 shadow-sm backdrop-blur-md"
        >
          {capabilities.map((item, index) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-[11px] text-muted"
            >
              <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 rounded-full ${item.color}`}
              />

              <span>{item.label}</span>

              {index !== capabilities.length - 1 && (
                <span
                  aria-hidden="true"
                  className="ml-3 hidden h-3 w-px bg-border sm:block"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;