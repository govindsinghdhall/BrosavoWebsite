"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const featureGroups = [
  {
    title: "CRM & Sales",
    icon: "◉",
    iconClass: "bg-blue-500/10 text-blue-600",
    items: [
      "Lead Management",
      "Contact & Customer Management",
      "Sales Pipeline",
      "Follow-ups & Reminders",
      "Tasks & Activities",
      "Team Management",
      "Reports & Analytics",
      "Mobile CRM",
    ],
  },
  {
    title: "Property Management",
    icon: "⌂",
    iconClass: "bg-violet-500/10 text-violet-600",
    items: [
      "Property Inventory",
      "Property Matching",
      "Property Management",
      "Listing Management",
      "Buyer & Seller Management",
      "Sales Tracking",
    ],
  },
  {
    title: "Communication",
    icon: "◌",
    iconClass: "bg-emerald-500/10 text-emerald-600",
    items: [
      "WhatsApp Integration",
      "Google Business",
      "Email Integration",
      "SMS Integration",
      "Calling Agent",
      "Website Integration",
      "Website Lead Capture",
    ],
  },
  {
    title: "Marketing",
    icon: "✦",
    iconClass: "bg-pink-500/10 text-pink-600",
    items: [
      "Email Marketing",
      "SMS Marketing",
      "WhatsApp Marketing",
      "Campaign Management",
      "Marketing Automation",
      "AI Content Generator",
    ],
  },
  {
    title: "AI & Automation",
    icon: "✧",
    iconClass: "bg-orange-500/10 text-orange-600",
    items: [
      "Automation Agent",
      "AI Lead Engagement",
      "Automated Follow-ups",
      "Lead Nurturing",
      "Workflow Automation",
      "AI Marketing Content",
    ],
  },
];

const integrations = [
  {
    name: "WhatsApp",
    icon: "WA",
    className: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    name: "Google Business",
    icon: "G",
    className: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    name: "Email",
    icon: "@",
    className: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    name: "SMS",
    icon: "SMS",
    className: "bg-cyan-50 text-cyan-600 border-cyan-100",
  },
  {
    name: "Calling",
    icon: "☎",
    className: "bg-orange-50 text-orange-600 border-orange-100",
  },
];

export function Hero() {
  return (
    <header
      aria-labelledby="real-estate-crm-heading"
      className="relative overflow-hidden pb-14 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24"
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-180px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/[0.055] blur-[150px]" />

        <div className="absolute right-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.045] blur-[140px]" />

        <div className="absolute left-[-200px] top-[45%] h-[450px] w-[450px] rounded-full bg-cyan-500/[0.035] blur-[140px]" />

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
            MAIN HERO
        ============================================================ */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">

          {/* ============================================================
              LEFT — CONTENT
          ============================================================ */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl"
          >
            {/* Eyebrow */}

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/15 bg-blue-500/[0.045] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-[11px]"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-blue-500 opacity-40" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-blue-500" />
              </span>

              Real Estate CRM Software
            </motion.div>

            {/* Headline */}

            <motion.h1
              id="real-estate-crm-heading"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.055em] text-foreground sm:text-5xl md:text-6xl lg:text-[4.15rem]"
            >
              Real Estate CRM

              <span className="block">
                Built to Help You
              </span>

              <span className="block text-gradient-accent">
                Close More Deals.
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.18,
              }}
              className="mt-6 max-w-xl text-[15px] leading-7 text-muted sm:text-base sm:leading-7"
            >
              BROSAVO helps real estate agents, brokers, developers and
              sales teams manage leads, properties, sales pipelines,
              customer conversations and follow-ups from one powerful
              real estate CRM.
            </motion.p>

            {/* Feature highlights */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.24,
              }}
              className="mt-6 flex flex-wrap gap-x-5 gap-y-3"
            >
              {[
                "Lead Management",
                "Property Management",
                "Property Matching",
                "Sales Pipeline",
                "WhatsApp",
                "AI Automation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-foreground"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">
                    ✓
                  </span>

                  {item}
                </div>
              ))}
            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.3,
              }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="https://crm.brosavo.com"
                aria-label="Start your free 14-day Brosavo Real Estate CRM trial"
                className="group inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.16)]"
              >
                Start Free Trial

                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-border/80 bg-background/80 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-background"
              >
                Book a Demo
              </Link>
            </motion.div>

            {/* Trust */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted/75"
            >
              <span>14-day free trial</span>
              <span>·</span>
              <span>Built for real estate teams</span>
              <span>·</span>
              <span>Leads · Properties · Sales</span>
            </motion.div>
          </motion.div>

          {/* ============================================================
              RIGHT — CRM VISUAL
          ============================================================ */}

          <motion.div
            initial={{ opacity: 0, x: 25, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.85,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[600px]"
          >
            {/* Glow */}

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[360px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[100px]"
            />

            {/* Main CRM card */}

            <div className="relative rounded-[28px] border border-border/70 bg-background/80 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.10)] backdrop-blur-xl sm:p-5">

              {/* Top bar */}

              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-600">
                    BROSAVO CRM
                  </div>

                  <div className="mt-1 text-lg font-semibold tracking-[-0.03em] text-foreground">
                    Real Estate Sales
                  </div>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                  ◉
                </div>
              </div>

              {/* Metrics */}

              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-2xl border border-border/60 bg-background p-3">
                  <div className="text-[9px] text-muted">
                    Active Leads
                  </div>

                  <div className="mt-1 text-xl font-semibold text-foreground">
                    248
                  </div>

                  <div className="mt-1 text-[9px] text-emerald-600">
                    +12.4%
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background p-3">
                  <div className="text-[9px] text-muted">
                    Properties
                  </div>

                  <div className="mt-1 text-xl font-semibold text-foreground">
                    1,284
                  </div>

                  <div className="mt-1 text-[9px] text-blue-600">
                    Inventory
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background p-3">
                  <div className="text-[9px] text-muted">
                    Follow-ups
                  </div>

                  <div className="mt-1 text-xl font-semibold text-foreground">
                    36
                  </div>

                  <div className="mt-1 text-[9px] text-orange-600">
                    Today
                  </div>
                </div>
              </div>

              {/* Pipeline */}

              <div className="mt-4 rounded-2xl border border-border/60 bg-background p-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-foreground">
                    Sales Pipeline
                  </div>

                  <span className="text-[9px] text-muted">
                    This Month
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-4 gap-2">

                  <div>
                    <div className="mb-2 text-[9px] text-muted">
                      New
                    </div>

                    <div className="space-y-2">
                      <div className="rounded-xl bg-blue-500/10 p-2 text-[9px] font-medium text-blue-700">
                        Rahul · 3 BHK
                      </div>

                      <div className="rounded-xl bg-blue-500/10 p-2 text-[9px] font-medium text-blue-700">
                        Priya · Villa
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 text-[9px] text-muted">
                      Contacted
                    </div>

                    <div className="space-y-2">
                      <div className="rounded-xl bg-violet-500/10 p-2 text-[9px] font-medium text-violet-700">
                        Aman · 2 BHK
                      </div>

                      <div className="rounded-xl bg-violet-500/10 p-2 text-[9px] font-medium text-violet-700">
                        Neha · Plot
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 text-[9px] text-muted">
                      Site Visit
                    </div>

                    <div className="space-y-2">
                      <div className="rounded-xl bg-orange-500/10 p-2 text-[9px] font-medium text-orange-700">
                        Karan · 4 BHK
                      </div>

                      <div className="rounded-xl bg-orange-500/10 p-2 text-[9px] font-medium text-orange-700">
                        Simran · Villa
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 text-[9px] text-muted">
                      Closed
                    </div>

                    <div className="space-y-2">
                      <div className="rounded-xl bg-emerald-500/10 p-2 text-[9px] font-medium text-emerald-700">
                        Arjun · 3 BHK
                      </div>

                      <div className="rounded-xl bg-emerald-500/10 p-2 text-[9px] font-medium text-emerald-700">
                        Meera · Villa
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom cards */}

              <div className="mt-3 grid gap-3 sm:grid-cols-2">

                {/* WhatsApp */}

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-[9px] font-bold text-white">
                      WA
                    </div>

                    <div>
                      <div className="text-[10px] font-semibold text-foreground">
                        WhatsApp
                      </div>

                      <div className="text-[9px] text-emerald-600">
                        Connected
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 rounded-xl bg-white p-2.5 text-[9px] text-muted shadow-sm">
                    New property enquiry received
                  </div>
                </div>

                {/* AI */}

                <div className="rounded-2xl border border-violet-100 bg-violet-50/70 p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500 text-[9px] font-bold text-white">
                      AI
                    </div>

                    <div>
                      <div className="text-[10px] font-semibold text-foreground">
                        AI Automation
                      </div>

                      <div className="text-[9px] text-violet-600">
                        Active
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 rounded-xl bg-white p-2.5 text-[9px] text-muted shadow-sm">
                    Follow-up scheduled automatically
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Property Match */}

            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
              }}
              className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-border/70 bg-background/90 p-3 shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:block lg:-left-7"
            >
              <div className="text-[9px] uppercase tracking-[0.12em] text-muted">
                Property Match
              </div>

              <div className="mt-1 text-xs font-semibold text-foreground">
                8 matching properties
              </div>

              <div className="mt-1 text-[9px] text-emerald-600">
                Based on lead requirements
              </div>
            </motion.div>

            {/* Floating Follow-up */}

            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.9,
              }}
              className="absolute -right-3 top-[18%] hidden rounded-2xl border border-border/70 bg-background/90 p-3 shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:block lg:-right-7"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600">
                  ✓
                </span>

                <div>
                  <div className="text-[10px] font-semibold text-foreground">
                    Follow-up Reminder
                  </div>

                  <div className="text-[9px] text-muted">
                    3 leads need attention
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* ============================================================
            FEATURE SECTION
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            delay: 0.5,
          }}
          className="mt-16"
        >
          <div className="mx-auto mb-7 max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600">
              Everything Your Real Estate Team Needs
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl">
              One CRM for Your Entire Real Estate Sales Process
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted">
              Capture leads, manage properties, match requirements,
              communicate with prospects, automate follow-ups and
              track your sales — all from BROSAVO.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {featureGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.55 + index * 0.06,
                }}
                className="group rounded-2xl border border-border/70 bg-background/80 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)]"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-semibold ${group.iconClass}`}
                  >
                    {group.icon}
                  </span>

                  <h3 className="text-sm font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-[10px] leading-4 text-muted"
                    >
                      <span className="mt-[3px] flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-[8px] font-bold text-emerald-600">
                        ✓
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ============================================================
            INTEGRATIONS
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
          }}
          className="mt-6 rounded-2xl border border-border/70 bg-background/70 px-5 py-5 shadow-sm backdrop-blur-md"
        >
          <div className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            Connect Your Real Estate Business
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            {integrations.map((item) => (
              <div
                key={item.name}
                className={`flex items-center gap-2 rounded-full border px-3.5 py-2 text-[10px] font-semibold ${item.className}`}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[9px] font-bold shadow-sm">
                  {item.icon}
                </span>

                {item.name}
              </div>
            ))}

            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-2 text-[10px] font-semibold text-gray-600">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] shadow-sm">
                +
              </span>

              APIs & Integrations
            </div>
          </div>
        </motion.div>

        {/* ============================================================
            TRUST BAR
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.95,
          }}
          className="mx-auto mt-4 grid max-w-5xl overflow-hidden rounded-2xl border border-border/70 bg-background/80 shadow-sm backdrop-blur-md sm:grid-cols-4"
        >
          <div className="flex items-center justify-center gap-3 border-b border-border/60 px-4 py-4 sm:border-b-0 sm:border-r">
            <span className="text-lg text-blue-600">
              ✓
            </span>

            <div>
              <div className="text-xs font-semibold text-foreground">
                14-Day Free Trial
              </div>

              <div className="text-[9px] text-muted">
                No credit card required
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 border-b border-border/60 px-4 py-4 sm:border-b-0 sm:border-r">
            <span className="text-lg text-violet-600">
              ⚡
            </span>

            <div>
              <div className="text-xs font-semibold text-foreground">
                Quick Setup
              </div>

              <div className="text-[9px] text-muted">
                Get started quickly
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 border-b border-border/60 px-4 py-4 sm:border-b-0 sm:border-r">
            <span className="text-lg text-emerald-600">
              ◇
            </span>

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
            <span className="text-lg text-orange-600">
              ✦
            </span>

            <div>
              <div className="text-xs font-semibold text-foreground">
                AI & Automation
              </div>

              <div className="text-[9px] text-muted">
                Automate repetitive work
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </header>
  );
}

export default Hero;