"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const teamCapabilities = [
  {
    number: "01",
    title: "Assign",
    description:
      "Give every lead and opportunity a clear owner.",
  },
  {
    number: "02",
    title: "Control",
    description:
      "Manage users, roles and permissions across your team.",
  },
  {
    number: "03",
    title: "Account",
    description:
      "See activity, responsibilities and team performance in one place.",
  },
];

export default function TeamManagement() {
  return (
    <section
      aria-labelledby="team-management-heading"
      className="section-padding"
    >
      <div className="container-wide grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* ============================================================
            PRODUCT VISUAL
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-2xl lg:order-1"
        >
          {/* Visual glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.06] blur-[90px]"
          />

          {/* Product frame */}

          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-background p-2 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
            <div className="overflow-hidden rounded-[22px]">
              <Image
                src="/images/TEAM MANAGEMENT VISUAL.png"
                alt="Brosavo real estate CRM team management showing users, assignments, permissions and responsibilities"
                width={1600}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* ============================================================
            CONTENT
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.65,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-xl lg:order-2"
        >
          <span className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">
            Real Estate Team Management
          </span>

          <h2
            id="team-management-heading"
            className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl"
          >
            Give your team
            <br />
            <span className="text-gradient-accent">
              clarity and accountability.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Manage users, permissions, assignments and responsibilities from
            one centralized real estate CRM. Give every team member a clear
            view of what they own and what needs attention.
          </p>

          {/* ==========================================================
              TEAM WORKFLOW
          ========================================================== */}

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {teamCapabilities.map((item) => (
              <div
                key={item.number}
                className="group rounded-xl border border-border/70 bg-background/60 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-accent-blue/70">
                    {item.number}
                  </span>

                  <h3 className="text-xs font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-1.5 text-[11px] leading-5 text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* ==========================================================
              INTERNAL LINK
          ========================================================== */}

          <div className="mt-7">
            <Link
              href="/real-estate-crm-for-brokerages"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent-blue"
            >
              Explore CRM for real estate brokerages
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}