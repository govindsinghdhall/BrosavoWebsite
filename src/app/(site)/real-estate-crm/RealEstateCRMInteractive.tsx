"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const metrics = [
  {
    label: "New Leads",
    value: "128",
    change: "+18.4%",
  },
  {
    label: "Qualified",
    value: "64",
    change: "+12.2%",
  },
  {
    label: "Follow-ups",
    value: "42",
    change: "Today",
  },
  {
    label: "Deals",
    value: "18",
    change: "+8.7%",
  },
];

const leads = [
  {
    name: "3 BHK Buyer",
    status: "New",
  },
  {
    name: "Luxury Villa",
    status: "Qualified",
  },
  {
    name: "Commercial Space",
    status: "Follow-up",
  },
  {
    name: "Residential Plot",
    status: "Contacted",
  },
];

const pipeline = [
  {
    name: "New",
    value: 78,
  },
  {
    name: "Contacted",
    value: 62,
  },
  {
    name: "Qualified",
    value: 44,
  },
  {
    name: "Negotiation",
    value: 36,
  },
  {
    name: "Closed",
    value: 28,
  },
];

const navigation = [
  "Dashboard",
  "Leads",
  "Properties",
  "Pipeline",
  "Tasks",
  "Analytics",
];

export function RealEstateCRMInteractive() {
  const [active, setActive] = useState("Dashboard");

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.96,
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
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-10 overflow-hidden rounded-[30px] border border-border/70 bg-background shadow-[0_40px_120px_rgba(0,0,0,0.18)]"
    >
      {/* ============================================================ */}
      {/* BROWSER HEADER                                               */}
      {/* ============================================================ */}

      <div className="flex h-12 items-center gap-2 border-b border-border/70 px-4 sm:px-5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

        <div className="ml-3 flex h-7 flex-1 items-center rounded-lg border border-border/60 bg-surface px-3 sm:ml-5">
          <span className="truncate text-[9px] text-muted">
            crm.brosavo.com/dashboard
          </span>
        </div>

        <div className="hidden h-7 w-7 items-center justify-center rounded-lg bg-surface sm:flex">
          <span className="text-[10px] text-muted">•••</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* APPLICATION                                                   */}
      {/* ============================================================ */}

      <div className="grid min-h-[500px] md:grid-cols-[190px_1fr]">
        {/* ========================================================== */}
        {/* SIDEBAR                                                    */}
        {/* ========================================================== */}

        <aside className="hidden border-r border-border/70 p-5 md:block">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue via-accent-violet to-accent-cyan text-xs font-bold text-white">
              B
            </div>

            <div>
              <div className="text-xs font-semibold">
                Brosavo
              </div>

              <div className="text-[8px] text-muted">
                Real Estate CRM
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 space-y-1">
            {navigation.map((item) => {
              const isActive = active === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActive(item)}
                  className={[
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[10px] transition-all duration-200",
                    isActive
                      ? "bg-accent-blue/10 text-accent-blue"
                      : "text-muted hover:bg-surface hover:text-foreground",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "h-1.5 w-1.5 rounded-full",
                      isActive
                        ? "bg-accent-blue"
                        : "bg-muted/40",
                    ].join(" ")}
                  />

                  {item}
                </button>
              );
            })}
          </div>

          {/* User */}
          <div className="mt-10 border-t border-border/60 pt-5">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-violet text-[9px] font-semibold text-white">
                GS
              </div>

              <div>
                <div className="text-[9px] font-medium">
                  Sales Manager
                </div>

                <div className="text-[8px] text-muted">
                  Admin
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* ========================================================== */}
        {/* MAIN CONTENT                                                */}
        {/* ========================================================== */}

        <div className="min-w-0 p-4 sm:p-6 lg:p-7">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[9px] uppercase tracking-[0.16em] text-muted">
                Overview
              </div>

              <motion.p
                key={active}
                initial={{
                  opacity: 0,
                  y: 5,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="mt-1 text-lg font-semibold tracking-tight sm:text-xl"
              >
                {active}
              </motion.p>
            </div>

            <button
              type="button"
              className="shrink-0 rounded-xl bg-foreground px-3 py-2 text-[9px] font-medium text-background transition hover:opacity-90 sm:px-4"
            >
              + Add Lead
            </button>
          </div>

          {/* ======================================================== */}
          {/* METRICS                                                   */}
          {/* ======================================================== */}

          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.15 + index * 0.08,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-2xl border border-border/70 bg-background p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/30 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="text-[9px] text-muted">
                    {metric.label}
                  </div>

                  <div className="h-5 w-5 rounded-lg bg-accent-blue/10" />
                </div>

                <div className="mt-3 text-2xl font-semibold tracking-tight">
                  {metric.value}
                </div>

                <div className="mt-1 text-[9px] text-accent-blue">
                  {metric.change}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ======================================================== */}
          {/* CHART + RECENT LEADS                                      */}
          {/* ======================================================== */}

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.45fr_0.85fr]">
            {/* Pipeline */}
            <div className="rounded-2xl border border-border/70 bg-background p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold">
                    Sales Pipeline
                  </div>

                  <div className="mt-1 text-[9px] text-muted">
                    Opportunity progression
                  </div>
                </div>

                <div className="rounded-lg bg-surface px-3 py-1.5 text-[9px] text-muted">
                  This month
                </div>
              </div>

              <div className="mt-7 space-y-5">
                {pipeline.map((stage, index) => (
                  <div key={stage.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-[9px] text-muted">
                        {stage.name}
                      </span>

                      <span className="text-[9px] font-medium">
                        {stage.value}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-surface">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: `${stage.value}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.9,
                          delay: 0.25 + index * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Leads */}
            <div className="rounded-2xl border border-border/70 bg-background p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold">
                    Recent Leads
                  </div>

                  <div className="mt-1 text-[9px] text-muted">
                    Latest opportunities
                  </div>
                </div>

                <button
                  type="button"
                  className="text-[9px] text-accent-blue"
                >
                  View all
                </button>
              </div>

              <div className="mt-5 space-y-2">
                {leads.map((lead, index) => (
                  <motion.div
                    key={lead.name}
                    initial={{
                      opacity: 0,
                      x: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.3 + index * 0.08,
                      duration: 0.4,
                    }}
                    className="flex items-center justify-between gap-3 rounded-xl bg-surface px-3 py-3 transition hover:bg-surface-hover"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-violet/20 text-[9px] font-semibold">
                        {lead.name.charAt(0)}
                      </div>

                      <span className="truncate text-[9px] font-medium">
                        {lead.name}
                      </span>
                    </div>

                    <span className="shrink-0 rounded-full bg-accent-blue/10 px-2 py-1 text-[7px] text-accent-blue">
                      {lead.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* BOTTOM ROW                                                 */}
          {/* ======================================================== */}

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {/* Activity */}
            <div className="rounded-2xl border border-border/70 bg-background p-4">
              <div className="text-[9px] text-muted">
                Activity
              </div>

              <div className="mt-2 text-xl font-semibold">
                384
              </div>

              <div className="mt-1 text-[8px] text-muted">
                actions this month
              </div>

              <div className="mt-4 flex items-end gap-1">
                {[35, 50, 42, 70, 58, 80, 65, 92, 75, 88].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        height: 0,
                      }}
                      whileInView={{
                        height: `${height}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.5,
                      }}
                      className="h-12 flex-1 rounded-sm bg-accent-blue/30"
                    />
                  )
                )}
              </div>
            </div>

            {/* Tasks */}
            <div className="rounded-2xl border border-border/70 bg-background p-4">
              <div className="text-[9px] text-muted">
                Follow-ups
              </div>

              <div className="mt-2 text-xl font-semibold">
                42
              </div>

              <div className="mt-1 text-[8px] text-muted">
                tasks due today
              </div>

              <div className="mt-4 flex items-center gap-2">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface">
                  <div className="h-full w-[68%] rounded-full bg-accent-violet" />
                </div>

                <span className="text-[8px] text-muted">
                  68%
                </span>
              </div>
            </div>

            {/* Conversion */}
            <div className="rounded-2xl border border-border/70 bg-background p-4">
              <div className="text-[9px] text-muted">
                Conversion
              </div>

              <div className="mt-2 text-xl font-semibold">
                24.8%
              </div>

              <div className="mt-1 text-[8px] text-accent-cyan">
                +6.2% this month
              </div>

              <div className="mt-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-4 border-accent-cyan/20 border-t-accent-cyan text-[7px]">
                  25%
                </div>

                <span className="text-[8px] text-muted">
                  lead to deal conversion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* SUBTLE GLOW                                                  */}
      {/* ============================================================ */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-accent-blue/[0.04] to-transparent" />
    </motion.div>
  );
}