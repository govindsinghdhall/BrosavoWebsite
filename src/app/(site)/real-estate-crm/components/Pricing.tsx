"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "₹999",
    oldPrice: "₹1,499",
    save: "Save 33%",
    description: "Everything you need to start selling.",
    note: "Ideal for individual real estate agents and small teams getting started with a professional CRM.",
    bestFor: "Individual agents",
    features: [
      "Professional Website",
      "Smart CRM",
      "Unlimited Lead Management",
      "WhatsApp Notifications",
      "Email Support",
    ],
    href: "https://crm.brosavo.com",
    primary: false,
  },
  {
    name: "Professional",
    price: "₹2,499",
    oldPrice: "₹3,499",
    save: "Save 28%",
    description: "Scale your real estate sales operation.",
    note: "Built for growing brokerages and teams that need collaboration, automation and deeper sales visibility.",
    bestFor: "Growing teams & brokerages",
    features: [
      "Everything in Starter",
      "Advanced Website Suite",
      "Team Collaboration",
      "WhatsApp API Integration",
      "Marketing Automation",
      "Advanced Analytics",
      "Call Tracking",
      "Priority Support",
    ],
    href: "https://crm.brosavo.com",
    primary: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    oldPrice: "",
    save: "",
    description: "Built for organizations operating at scale.",
    note: "For multi-branch agencies, property developers and larger real estate organizations.",
    bestFor: "Developers & enterprises",
    features: [
      "Unlimited Users",
      "Unlimited Websites",
      "Unlimited Branches",
      "Custom Integrations",
      "API Access",
      "White Label Solutions",
      "Dedicated Account Manager",
      "Advanced Security",
      "SSO",
      "Advanced Permissions",
      "Data Migration",
    ],
    href: "/contact",
    primary: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative overflow-hidden bg-surface py-14 sm:py-16 lg:py-20"
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-80 w-[850px] -translate-x-1/2 rounded-full bg-violet-500/[0.035] blur-[130px]" />

        <div className="absolute left-[15%] top-[55%] h-64 w-64 rounded-full bg-blue-500/[0.02] blur-[100px]" />

        <div className="absolute right-[10%] top-[60%] h-64 w-64 rounded-full bg-cyan-500/[0.02] blur-[100px]" />
      </div>

      <div className="container-wide relative">
        {/* ============================================================
            HEADER
        ============================================================ */}

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
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-violet-500/15 bg-violet-500/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-accent-violet">
            Real Estate CRM Pricing
          </span>

          <h2
            id="pricing-heading"
            className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            Real Estate CRM pricing plans
            <br />
            <span className="text-gradient-accent">
              that scale with your team.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
            Brosavo pricing is simple: Starter at ₹999 per month, Professional
            at ₹2,499 per month, and custom Enterprise for multi-branch teams.
            Starter and Professional include a 14-day free trial so you can
            evaluate lead management, property inventory and pipeline tools
            before you commit.
          </p>
        </motion.div>

        {/* ============================================================
            PRICING GRID
        ============================================================ */}

        <div className="mx-auto mt-9 grid max-w-7xl items-stretch gap-4 lg:grid-cols-3 lg:gap-5">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
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
                amount: 0.1,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
                plan.primary
                  ? "border-accent-blue/30 bg-background shadow-[0_24px_70px_rgba(59,130,246,0.10)] lg:-translate-y-2"
                  : "border-border/70 bg-background hover:-translate-y-1 hover:border-blue-500/15 hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)]"
              }`}
            >
              {/* ======================================================
                  POPULAR BADGE
              ====================================================== */}

              {plan.primary && (
                <div className="absolute right-4 top-4 rounded-full bg-accent-blue px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_6px_18px_rgba(59,130,246,0.22)]">
                  Most Popular
                </div>
              )}

              {/* ======================================================
                  CARD CONTENT
              ====================================================== */}

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="pr-24 text-sm font-semibold text-foreground">
                  {plan.name} Plan
                </h3>

                <p className="mt-1.5 max-w-[90%] text-sm leading-5 text-muted">
                  {plan.description}
                </p>

                <div className="mt-4 inline-flex w-fit items-center rounded-full border border-border/60 bg-surface px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-muted">
                  Best for · {plan.bestFor}
                </div>

                <div className="mt-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-[2.65rem]">
                      {plan.price}
                    </span>

                    {plan.price !== "Custom" && (
                      <span className="text-xs text-muted">
                        / month
                      </span>
                    )}
                  </div>

                  {plan.oldPrice && (
                    <div className="mt-1.5 flex items-center gap-2 text-xs">
                      <span className="text-muted line-through">
                        {plan.oldPrice}
                      </span>

                      <span className="font-medium text-emerald-500">
                        {plan.save}
                      </span>
                    </div>
                  )}
                </div>

                <p className="mt-4 min-h-[72px] text-sm leading-6 text-muted">
                  {plan.note}
                </p>

                <Link
                  href={plan.href}
                  className={`mt-5 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                    plan.primary
                      ? "bg-foreground text-background shadow-sm hover:shadow-md"
                      : "border border-border/70 bg-surface text-foreground hover:bg-background"
                  }`}
                >
                  {plan.name === "Enterprise"
                    ? "Request Enterprise CRM pricing"
                    : plan.name === "Professional"
                      ? "Start Professional plan trial"
                      : "Start Starter plan trial"}
                </Link>

                <div className="my-5 h-px bg-border/70" />

                <div className="mb-3 text-[10px] font-mono uppercase tracking-[0.18em] text-muted/60">
                  Includes
                </div>

                <ul className="space-y-2.5 text-sm text-muted">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-blue/[0.08] text-[9px] font-semibold text-accent-blue"
                      >
                        ✓
                      </span>

                      <span className="leading-5">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                aria-hidden="true"
                className={`absolute bottom-0 left-0 h-px transition-all duration-500 ${
                  plan.primary
                    ? "w-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500"
                    : "w-0 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 group-hover:w-full"
                }`}
              />
            </motion.article>
          ))}
        </div>

        {/* ============================================================
            SUPPORTING NOTE
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          className="mt-7 flex flex-col items-center justify-center gap-3 text-center"
        >
          <p className="text-sm text-muted">
            Mobile app available as an add-on.
          </p>

          {/* ==========================================================
              INTERNAL LINK
          ========================================================== */}

          <Link
            href="/real-estate-crm-pricing"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent-blue"
          >
            Compare BROSAVO real estate CRM plans
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>

          <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.16em] text-muted/45">
            <span className="h-px w-8 bg-border" />
            <span>14-day free trial · No long-term commitment</span>
            <span className="h-px w-8 bg-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}