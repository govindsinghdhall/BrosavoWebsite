"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HOME_LINKS } from "@/lib/data";
import { BlurReveal } from "@/components/animations/TextReveal";
import { ArrowUpRight, Layers, Cpu, Box, Globe, Star, Users } from "lucide-react";

const ICON_MAP = {
  layers: Layers,
  cpu: Cpu,
  box: Box,
  globe: Globe,
  star: Star,
  users: Users,
} as const;

const DURGA_SOLUTIONS = [
  {
    label: "Real Estate CRM",
    description:
      "Centralized customer, lead, property, and sales management for everyday real estate operations.",
  },
  {
    label: "Lead Management",
    description:
      "Organize, track, assign, and manage real estate leads throughout the sales journey.",
  },
  {
    label: "WhatsApp",
    description:
      "Connect WhatsApp communication with customer engagement, lead follow-ups, and sales workflows.",
  },
  {
    label: "Property Management",
    description:
      "Manage property information and inventory alongside customer and sales activity.",
  },
  {
    label: "Website",
    description:
      "A digital presence designed to support the business and its real estate operations.",
  },
  {
    label: "Lead Generation",
    description:
      "Create digital pathways for attracting and capturing new real estate opportunities.",
  },
  {
    label: "Sales Pipeline",
    description:
      "Track opportunities from initial enquiry through follow-ups, negotiations, and closing.",
  },
] as const;

export function HomeOverview() {
  return (
    <section className="relative section-padding !py-16 md:!py-20">
      <div className="container-wide">

        {/* =========================================================
            REAL CLIENT / PROOF SECTION
        ========================================================= */}
        <BlurReveal delay={0.03}>
          <div className="mb-16 md:mb-20">
            <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-background via-background/95 to-accent-cyan/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] md:p-8">

              {/* Background glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-blue/10 blur-[100px]" />

              <div className="relative z-10">

                {/* Header */}
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-3xl">
                    <span className="mb-3 block text-xs font-mono uppercase tracking-[0.25em] text-accent-cyan">
                      Real-World Proof
                    </span>

                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                      Trusted in Real Estate Operations
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
                      Brosavo is helping{" "}
                      <strong className="font-medium text-foreground">
                        Durga Property
                      </strong>{" "}
                      bring its real estate operations into one connected
                      technology ecosystem — from CRM and lead management to
                      WhatsApp, property management, website, lead generation,
                      and sales pipeline management.
                    </p>
                  </div>

                  {/* Client */}
                  <div className="shrink-0">
                    <div className="rounded-2xl border border-border/70 bg-background/70 px-6 py-5 backdrop-blur-xl">
                      <span className="mb-2 block text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
                        Client
                      </span>

                      <div className="text-xl font-semibold tracking-tight">
                        Durga Property
                      </div>

                      <div className="mt-1 text-xs text-muted">
                        Real Estate
                      </div>
                    </div>
                  </div>
                </div>

                {/* =====================================================
                    CLIENT SOLUTIONS
                ===================================================== */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {DURGA_SOLUTIONS.map((item, index) => (
                    <motion.div
                      key={item.label}
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
                      }}
                      transition={{
                        delay: index * 0.04,
                      }}
                      className="rounded-2xl border border-border/60 bg-background/60 p-4 transition-colors hover:border-accent-blue/30"
                    >
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-accent-blue/10">
                        <span className="text-xs font-semibold text-accent-blue">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="text-sm font-semibold">
                        {item.label}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-muted">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </BlurReveal>

        {/* =========================================================
            REAL ESTATE SOLUTIONS
        ========================================================= */}
        <BlurReveal>
          <div className="mb-10 text-center">
            <span className="mb-3 block text-xs font-mono uppercase tracking-[0.2em] text-accent-cyan">
              Real Estate Solutions
            </span>

            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
              More Than a CRM. Technology for the Entire Real Estate Journey.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
              From capturing the first lead to managing properties,
              conversations, follow-ups, site visits, and sales pipelines,
              Brosavo connects the technology real estate teams need to
              operate and grow.
            </p>
          </div>
        </BlurReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <RealEstateSolutionCard
            title="Real Estate CRM"
            description="Centralize leads, customers, properties, activities, and sales workflows in one platform."
            href="/products#real-estate-crm"
          />

          <RealEstateSolutionCard
            title="Lead Management"
            description="Capture, organize, assign, qualify, and track leads throughout the real estate sales journey."
            href="/products#real-estate-crm"
          />

          <RealEstateSolutionCard
            title="WhatsApp Automation"
            description="Connect WhatsApp conversations with lead engagement, follow-ups, and sales workflows."
            href="/products#real-estate-crm"
          />

          <RealEstateSolutionCard
            title="Property Management"
            description="Organize property information, inventory, availability, and customer requirements."
            href="/products#real-estate-crm"
          />

          <RealEstateSolutionCard
            title="Sales Pipeline"
            description="Track opportunities from enquiry and follow-up through site visits, negotiation, and closing."
            href="/products#real-estate-crm"
          />

          <RealEstateSolutionCard
            title="Site Visits & Follow-ups"
            description="Keep appointments, site visits, tasks, reminders, and customer interactions connected."
            href="/products#real-estate-crm"
          />
        </div>

        {/* =========================================================
            BROADER BROSAVO TECHNOLOGY
        ========================================================= */}
        <BlurReveal>
          <div className="mb-10 mt-20 text-center md:mt-24">
            <span className="mb-3 block text-xs font-mono uppercase tracking-[0.2em] text-accent-cyan">
              Beyond Real Estate
            </span>

            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
              Technology Built Around Your Business
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
              Real estate is one of Brosavo&apos;s core industries, but our
              technology capabilities extend to AI products, SaaS platforms,
              custom software, and digital infrastructure for businesses
              across industries.
            </p>
          </div>
        </BlurReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_LINKS.map((item, i) => {
            const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP];

            return (
              <BlurReveal key={item.href} delay={i * 0.05}>
                <Link href={item.href} className="block h-full group">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass flex h-full rounded-2xl border border-border p-5 transition-all duration-500 hover:border-accent-blue/30 md:p-6"
                  >
                    <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-blue/10 transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5 text-accent-blue" />
                    </div>

                    <div className="flex flex-1 items-start justify-between gap-3">
                      <div>
                        <h3 className="mb-1.5 text-lg font-semibold">
                          {item.label}
                        </h3>

                        <p className="text-sm leading-6 text-muted">
                          {item.description}
                        </p>
                      </div>

                      <ArrowUpRight className="h-5 w-5 shrink-0 text-foreground/30 transition-colors group-hover:text-foreground" />
                    </div>
                  </motion.div>
                </Link>
              </BlurReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   REAL ESTATE SOLUTION CARD
=============================================================== */

function RealEstateSolutionCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <BlurReveal>
      <Link href={href} className="block h-full group">
        <motion.div
          whileHover={{ y: -4 }}
          className="glass flex h-full rounded-2xl border border-border p-5 transition-all duration-500 hover:border-accent-blue/30 md:p-6"
        >
          <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-blue/10 transition-transform group-hover:scale-110">
            <Layers className="h-5 w-5 text-accent-blue" />
          </div>

          <div className="flex flex-1 items-start justify-between gap-3">
            <div>
              <h3 className="mb-1.5 text-lg font-semibold">
                {title}
              </h3>

              <p className="text-sm leading-6 text-muted">
                {description}
              </p>
            </div>

            <ArrowUpRight className="h-5 w-5 shrink-0 text-foreground/30 transition-colors group-hover:text-foreground" />
          </div>
        </motion.div>
      </Link>
    </BlurReveal>
  );
}