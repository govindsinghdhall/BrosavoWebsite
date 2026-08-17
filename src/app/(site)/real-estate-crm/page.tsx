import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/blog/JsonLd";
import {
  PRODUCT_CTA,
  PRODUCT_NAME,
  PRODUCT_ONE_LINER,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import { RealEstateCRMInteractive } from "./RealEstateCRMInteractive";

const PAGE_PATH = "/real-estate-crm";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Real Estate CRM Software for Agents, Brokers & Teams | Brosavo",

  description:
    "Brosavo Real Estate CRM helps agents, brokers, agencies and sales teams manage leads, customers, properties, sales pipelines, follow-ups, websites, WhatsApp and analytics from one powerful platform.",

  keywords: [
    "real estate CRM",
    "real estate CRM software",
    "CRM for real estate agents",
    "CRM for realtors",
    "CRM for brokers",
    "real estate lead management",
    "real estate sales CRM",
    "WhatsApp CRM for real estate",
    "property management CRM",
    "real estate CRM pricing",
    "real estate CRM cost",
    "real estate agent CRM",
    "best real estate CRM",
    "real estate follow-up software",
    "property CRM",
    "Brosavo Real Estate CRM",
    "Brosavo",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Real Estate CRM Software for Agents, Brokers & Teams | Brosavo",
    description: PRODUCT_ONE_LINER,
    url: PAGE_URL,
    siteName: SITE_NAME,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Real Estate CRM Software | Brosavo",
    description: PRODUCT_ONE_LINER,
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: PRODUCT_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: PRODUCT_ONE_LINER,
    url: PAGE_URL,

    offers: [
      {
        "@type": "Offer",
        name: "Starter",
        price: "999",
        priceCurrency: "INR",
        url: "https://crm.brosavo.com",
      },
      {
        "@type": "Offer",
        name: "Professional",
        price: "2499",
        priceCurrency: "INR",
        url: "https://crm.brosavo.com",
      },
    ],

    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  },

  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Real Estate CRM Software",
    description: PRODUCT_ONE_LINER,
    url: PAGE_URL,

    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  },

  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Real Estate CRM",
        item: PAGE_URL,
      },
    ],
  },
];

export default function RealEstateCrmPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}

      <section className="relative overflow-hidden border-b border-border/60">
        {/* Background mesh */}
        <div className="absolute inset-0 mesh-gradient opacity-80" />

        {/* Extra atmospheric glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent-blue/10 blur-[140px]" />

        <div className="pointer-events-none absolute right-[-200px] top-[250px] h-[500px] w-[500px] rounded-full bg-accent-violet/10 blur-[140px]" />

        <div className="container-wide relative px-6 pb-24 pt-40 sm:px-8 sm:pt-44 lg:pb-32 lg:pt-48">
          <div className="mx-auto max-w-7xl">

            {/* ========================================================== */}
            {/* CENTERED HERO CONTENT                                      */}
            {/* ========================================================== */}

            <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

              {/* Label */}
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 px-4 py-2 text-xs font-medium text-accent-blue backdrop-blur-xl">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-blue" />

                Built for modern real estate businesses
              </div>

              {/* Main heading */}
              <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl xl:text-[82px]">
                Everything your sales team needs.
                <span className="mt-2 block text-gradient-accent">
                  In one CRM.
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-muted sm:text-lg lg:text-xl">
                Replace spreadsheets, disconnected lead sources and manual
                follow-ups with one connected real estate sales platform.
              </p>

              {/* CTA buttons */}
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="https://crm.brosavo.com"
                  className="group inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  Start Free 14-Day Trial

                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <Link
                  href="/contact?plan=demo"
                  className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background/60 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-surface"
                >
                  Book a Demo
                </Link>
              </div>

              {/* Small trust line */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted">
                <span>✓ 14-day free trial</span>
                <span>✓ No credit card required</span>
                <span>✓ Built for real estate teams</span>
              </div>
            </div>

            {/* ========================================================== */}
            {/* CRM DASHBOARD                                               */}
            {/* ========================================================== */}

            <div className="relative mt-20 sm:mt-24 lg:mt-28">
              {/* Main dashboard glow */}
              <div className="pointer-events-none absolute -inset-10 rounded-[60px] bg-accent-blue/10 blur-3xl" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-violet/10 blur-[120px]" />

              {/* Dashboard */}
              <div className="relative">
                <RealEstateCRMInteractive />
              </div>

              {/* Floating metric — left */}
              <div className="pointer-events-none absolute -left-5 top-24 hidden rounded-2xl border border-border/70 bg-background/85 p-4 shadow-2xl backdrop-blur-xl lg:block">
                <div className="text-[10px] text-muted">
                  New Leads
                </div>

                <div className="mt-1 text-2xl font-semibold">
                  128
                </div>

                <div className="mt-1 text-[10px] text-green-500">
                  +18.4% this month
                </div>
              </div>

              {/* Floating metric — right */}
              <div className="pointer-events-none absolute -right-5 bottom-20 hidden rounded-2xl border border-border/70 bg-background/85 p-4 shadow-2xl backdrop-blur-xl lg:block">
                <div className="text-[10px] text-muted">
                  Conversion Rate
                </div>

                <div className="mt-1 text-2xl font-semibold">
                  24.8%
                </div>

                <div className="mt-1 text-[10px] text-accent-blue">
                  +6.2% this month
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* TRUST / CAPABILITIES                                             */}
      {/* ================================================================ */}

      <section className="border-b border-border/60 bg-background">
        <div className="container-wide grid grid-cols-2 divide-x divide-border/60 sm:grid-cols-4">
          {[
            "Lead Management",
            "Property Inventory",
            "WhatsApp",
            "Sales Pipeline",
          ].map((item, index) => (
            <div
              key={item}
              className="px-5 py-7 text-center sm:px-8 sm:py-9"
            >
              <div className="text-[10px] font-mono text-accent-blue">
                0{index + 1}
              </div>

              <div className="mt-2 text-xs font-medium sm:text-sm">
                {item}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================================ */}
      {/* OVERVIEW                                                          */}
      {/* ================================================================ */}

      <section className="section-padding">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan">
              Overview
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Your real estate operation should run from one place.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-muted sm:text-lg">
              <p>
                Brosavo Real Estate CRM is built for agents, brokers,
                agencies and sales teams that need a better way to manage
                leads, customers, properties and opportunities.
              </p>

              <p>
                Instead of keeping customer information in spreadsheets,
                properties in separate systems and follow-ups in your
                memory, Brosavo connects the entire sales process.
              </p>

              <p>
                From the moment a prospect submits a property inquiry to the
                moment the deal is closed, your team gets one centralized
                view of what needs attention next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FEATURES                                                          */}
      {/* ================================================================ */}

      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-violet">
              Platform
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              More than a CRM.
              <br />
              Your real estate operating system.
            </h2>

            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              Everything you need to organize your sales operation,
              generate leads and build a scalable real estate business.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Lead Management",
                description:
                  "Capture, organize and track leads from inquiry through conversion.",
              },
              {
                number: "02",
                title: "Customer Management",
                description:
                  "Keep customer details, requirements and property interests together.",
              },
              {
                number: "03",
                title: "Property Inventory",
                description:
                  "Manage listings, availability, pricing and property information.",
              },
              {
                number: "04",
                title: "Sales Pipeline",
                description:
                  "Move opportunities through a structured pipeline and see what happens next.",
              },
              {
                number: "05",
                title: "Follow-ups & Tasks",
                description:
                  "Schedule tasks and follow-ups so opportunities never disappear.",
              },
              {
                number: "06",
                title: "WhatsApp",
                description:
                  "Connect WhatsApp notifications and API-powered engagement workflows.",
              },
              {
                number: "07",
                title: "Website Lead Capture",
                description:
                  "Capture property inquiries directly from your real estate website.",
              },
              {
                number: "08",
                title: "Reports & Analytics",
                description:
                  "Understand leads, conversions, pipeline performance and team activity.",
              },
            ].map((feature) => (
              <article
                key={feature.number}
                className="group rounded-[26px] border border-border/70 bg-background/70 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-accent-blue/30 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-blue/10 text-accent-blue">
                    ✦
                  </div>

                  <span className="text-xs font-mono text-muted">
                    {feature.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {feature.description}
                </p>

                <div className="mt-6 h-px w-8 bg-gradient-to-r from-accent-blue to-accent-violet transition-all duration-500 group-hover:w-16" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* LEAD MANAGEMENT                                                   */}
      {/* ================================================================ */}

      <section className="section-padding">
        <div className="container-wide grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-blue">
              Lead management
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Never lose track of a promising lead again.
            </h2>

            <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
              Every inquiry becomes an organized opportunity. Capture
              leads, assign ownership, record requirements and create
              follow-ups from one place.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Website lead capture",
                "Centralized contact management",
                "Lead assignment",
                "Pipeline tracking",
                "Follow-up tasks",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-blue/10 text-accent-blue">
                    ✓
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-border/70 bg-surface/50 p-5 shadow-xl">
            <div className="rounded-[24px] border border-border/70 bg-background p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-muted">
                    Lead Pipeline
                  </div>

                  <div className="mt-1 text-lg font-semibold">
                    Active Opportunities
                  </div>
                </div>

                <div className="rounded-xl bg-accent-blue/10 px-3 py-2 text-[10px] text-accent-blue">
                  This Month
                </div>
              </div>

              <div className="mt-7 space-y-5">
                {[
                  ["New", "78%"],
                  ["Contacted", "62%"],
                  ["Qualified", "44%"],
                  ["Negotiation", "36%"],
                  ["Closed", "28%"],
                ].map(([stage, percentage]) => (
                  <div key={stage}>
                    <div className="mb-2 flex justify-between text-[10px]">
                      <span className="text-muted">{stage}</span>
                      <span>{percentage}</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-surface">
                      <div
                        style={{ width: percentage }}
                        className="h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PROPERTY INVENTORY                                                */}
      {/* ================================================================ */}

      <section className="section-padding bg-surface">
        <div className="container-wide grid items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="rounded-[30px] border border-border/70 bg-background p-5 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-muted">
                    Property Inventory
                  </div>

                  <div className="mt-1 text-xl font-semibold">
                    Available Properties
                  </div>
                </div>

                <div className="rounded-xl bg-accent-violet/10 px-3 py-2 text-[10px] text-accent-violet">
                  248 Listings
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["3 BHK Apartment", "₹1.25 Cr"],
                  ["Luxury Villa", "₹2.80 Cr"],
                  ["Commercial Space", "₹4.20 Cr"],
                  ["Residential Plot", "₹78 L"],
                ].map(([name, price]) => (
                  <div
                    key={name}
                    className="rounded-2xl border border-border/70 bg-surface p-3"
                  >
                    <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-accent-blue/20 via-accent-violet/10 to-accent-cyan/10" />

                    <div className="mt-3 truncate text-xs font-medium">
                      {name}
                    </div>

                    <div className="mt-1 text-[10px] text-muted">
                      {price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-violet">
              Property inventory
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Your properties and customers finally speak the same language.
            </h2>

            <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
              Connect property inventory with customer requirements so your
              team can quickly understand what each prospect is looking for.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Centralized property inventory",
                "Property listings",
                "Customer requirements",
                "Property matching",
                "99acres integration",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm"
                >
                  <span className="text-accent-violet">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHATSAPP                                                          */}
      {/* ================================================================ */}

      <section className="section-padding">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-[36px] border border-border/70 bg-surface p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent-cyan/10 blur-[100px]" />

            <div className="relative grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan">
                  WhatsApp CRM
                </span>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                  Turn conversations into opportunities.
                </h2>

                <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                  Keep your sales team connected to incoming inquiries with
                  WhatsApp notifications and API-powered communication
                  workflows.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "WhatsApp notifications",
                    "WhatsApp API",
                    "Templates",
                    "Lead engagement",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/70 bg-background px-4 py-2 text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mx-auto w-full max-w-md">
                <div className="rounded-[28px] border border-border/70 bg-background p-5 shadow-2xl">
                  <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-cyan/10 text-accent-cyan">
                      W
                    </div>

                    <div>
                      <div className="text-sm font-medium">
                        New Lead Received
                      </div>

                      <div className="text-[10px] text-muted">
                        Brosavo CRM
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl bg-surface p-5">
                    <div className="text-sm">
                      New property inquiry received.
                    </div>

                    <div className="mt-2 text-xs leading-5 text-muted">
                      A prospect has submitted an inquiry for a 3 BHK
                      apartment.
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <span className="rounded-full bg-accent-cyan/10 px-3 py-1.5 text-[10px] text-accent-cyan">
                      New Lead
                    </span>

                    <span className="rounded-full bg-accent-blue/10 px-3 py-1.5 text-[10px] text-accent-blue">
                      Follow-up
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WEBSITE + AI + ANALYTICS                                        */}
      {/* ================================================================ */}

      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                label: "Website",
                title: "Turn your website into a lead engine.",
                description:
                  "Build a professional property website with listings, lead capture, SEO capabilities, blog content and integrations.",
                items: [
                  "Property website",
                  "Lead capture",
                  "SEO tools",
                  "Blog",
                  "Google Maps",
                ],
              },
              {
                label: "AI",
                title: "Work smarter with AI-powered capabilities.",
                description:
                  "Use intelligent features to help your team organize information, improve workflows and make faster decisions.",
                items: [
                  "AI features",
                  "Smart workflows",
                  "Data insights",
                  "Automation",
                ],
              },
              {
                label: "Analytics",
                title: "Know what is actually driving sales.",
                description:
                  "Turn CRM activity into useful insights about leads, pipeline, conversions and team performance.",
                items: [
                  "Reports",
                  "Analytics",
                  "Pipeline insights",
                  "Team performance",
                ],
              },
            ].map((card) => (
              <article
                key={card.label}
                className="rounded-[28px] border border-border/70 bg-background p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-xs font-mono uppercase tracking-[0.18em] text-accent-blue">
                  {card.label}
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {card.description}
                </p>

                <div className="mt-7 space-y-3">
                  {card.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className="text-accent-blue">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHO IT IS FOR                                                     */}
      {/* ================================================================ */}

      <section className="section-padding">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-blue">
              Who it&apos;s for
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Built around the way real estate businesses actually work.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Agents",
                description:
                  "Manage leads, properties and follow-ups without spreadsheets.",
              },
              {
                title: "Brokers",
                description:
                  "Give your brokerage a centralized system for sales and inventory.",
              },
              {
                title: "Agencies",
                description:
                  "Connect website leads, property listings and team activity.",
              },
              {
                title: "Developers",
                description:
                  "Build scalable sales operations across projects and teams.",
              },
            ].map((audience, index) => (
              <article
                key={audience.title}
                className="rounded-[26px] border border-border/70 bg-background p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-4xl font-semibold text-accent-blue/20">
                  0{index + 1}
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {audience.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {audience.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* HOW IT WORKS                                                      */}
      {/* ================================================================ */}

      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan">
              How it works
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              From first inquiry to closed deal.
            </h2>

            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              Create a repeatable sales process that your entire team can
              follow.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan lg:block" />

            <div className="grid gap-8 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Capture",
                  text: "Bring inquiries into your CRM through your website and connected channels.",
                },
                {
                  number: "02",
                  title: "Qualify",
                  text: "Understand customer requirements and identify the right opportunities.",
                },
                {
                  number: "03",
                  title: "Follow Up",
                  text: "Use tasks, reminders and communication workflows to keep deals moving.",
                },
                {
                  number: "04",
                  title: "Close",
                  text: "Track opportunities through your pipeline and understand performance.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="relative text-center lg:text-left"
                >
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-accent-blue/30 bg-background text-sm font-semibold text-accent-blue lg:mx-0">
                    {step.number}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PRICING                                                           */}
      {/* ================================================================ */}

      <section id="pricing" className="section-padding">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-violet">
              Real estate CRM pricing
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Start small. Scale when you&apos;re ready.
            </h2>

            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              Start with a 14-day free trial and upgrade as your business
              grows.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">

            {/* STARTER */}
            <article className="flex flex-col rounded-[30px] border border-border/70 bg-background p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-sm font-semibold">
                Starter
              </div>

              <div className="mt-2 text-sm text-muted">
                Everything you need to start selling.
              </div>

              <div className="mt-8">
                <span className="text-4xl font-semibold">
                  ₹999
                </span>

                <span className="text-sm text-muted">
                  {" "}
                  / month
                </span>
              </div>

              <div className="mt-2 text-xs text-muted">
                <span className="line-through">
                  ₹1,499
                </span>{" "}
                <span className="text-green-500">
                  Save 33%
                </span>
              </div>

              <p className="mt-5 text-sm leading-6 text-muted">
                Perfect for individual agents getting started with
                professional real estate tools.
              </p>

              <a
                href="https://crm.brosavo.com"
                className="mt-7 inline-flex items-center justify-center rounded-full border border-border/70 bg-surface px-5 py-3.5 text-sm font-medium transition hover:bg-surface-hover"
              >
                Start Free 14-Day Trial
              </a>

              <div className="my-7 h-px bg-border/70" />

              <ul className="space-y-4 text-sm text-muted">
                {[
                  "Professional Website",
                  "Smart CRM",
                  "Lead Management",
                  "WhatsApp Notifications",
                  "Email Support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3"
                  >
                    <span className="text-accent-blue">
                      ✓
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </article>

            {/* PROFESSIONAL */}
            <article className="relative flex flex-col rounded-[30px] border border-accent-blue/40 bg-accent-blue/[0.035] p-8 shadow-2xl shadow-accent-blue/10">
              <div className="absolute right-6 top-6 rounded-full bg-accent-blue px-3 py-1 text-[10px] font-semibold text-white">
                Most Popular
              </div>

              <div className="text-sm font-semibold">
                Professional
              </div>

              <div className="mt-2 text-sm text-muted">
                Scale your real estate business.
              </div>

              <div className="mt-8">
                <span className="text-4xl font-semibold">
                  ₹2,499
                </span>

                <span className="text-sm text-muted">
                  {" "}
                  / month
                </span>
              </div>

              <div className="mt-2 text-xs text-muted">
                <span className="line-through">
                  ₹3,499
                </span>{" "}
                <span className="text-green-500">
                  Save 28%
                </span>
              </div>

              <p className="mt-5 text-sm leading-6 text-muted">
                Built for growing brokerages and teams who want powerful
                sales and marketing tools.
              </p>

              <a
                href="https://crm.brosavo.com"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3.5 text-sm font-medium text-background transition hover:opacity-90"
              >
                Start Free 14-Day Trial
              </a>

              <div className="my-7 h-px bg-border/70" />

              <ul className="space-y-4 text-sm text-muted">
                {[
                  "Everything in Starter",
                  "Advanced Website Suite",
                  "Blog & SEO Tools",
                  "Property Portal Integration",
                  "Google Maps",
                  "5 Users",
                  "Role Permissions",
                  "Task Management",
                  "WhatsApp API Integration",
                  "Marketing Automation",
                  "Advanced Analytics",
                  "Priority Support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3"
                  >
                    <span className="text-accent-blue">
                      ✓
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </article>

            {/* ENTERPRISE */}
            <article className="flex flex-col rounded-[30px] border border-border/70 bg-background p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-sm font-semibold">
                Enterprise
              </div>

              <div className="mt-2 text-sm text-muted">
                Unlimited power for large organizations.
              </div>

              <div className="mt-8 text-4xl font-semibold">
                Custom
              </div>

              <p className="mt-5 text-sm leading-6 text-muted">
                For multi-branch agencies and developers building at scale.
              </p>

              <Link
                href="/contact?plan=enterprise"
                className="mt-7 inline-flex items-center justify-center rounded-full border border-border/70 bg-surface px-5 py-3.5 text-sm font-medium transition hover:bg-surface-hover"
              >
                Book Live Demo
              </Link>

              <div className="my-7 h-px bg-border/70" />

              <ul className="space-y-4 text-sm text-muted">
                {[
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
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3"
                  >
                    <span className="text-accent-blue">
                      ✓
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <p className="mt-8 text-center text-sm text-muted">
            Mobile App available as an add-on.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SEO CONTENT                                                       */}
      {/* ================================================================ */}

      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-blue">
              Real estate CRM software
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              A complete CRM for modern real estate businesses.
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-muted sm:text-lg">
              <p>
                A real estate CRM helps agents, brokers and agencies
                organize customer relationships, property inventory,
                leads, sales opportunities and follow-ups in one
                centralized system.
              </p>

              <p>
                Brosavo Real Estate CRM combines lead management,
                customer management, property inventory, sales pipeline
                management, website lead capture, WhatsApp integration,
                analytics and team management.
              </p>

              <p>
                Instead of relying on spreadsheets and disconnected
                communication tools, your team can manage the complete
                real estate sales process from one platform.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Real Estate CRM",
                "Real Estate CRM Software",
                "CRM for Real Estate Agents",
                "Real Estate Agent CRM",
                "Real Estate Lead Management",
                "Real Estate Sales CRM",
                "Property CRM",
                "Real Estate Follow-up Software",
              ].map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-border/70 bg-background px-4 py-2 text-xs text-muted"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FAQ                                                               */}
      {/* ================================================================ */}

      <section className="section-padding">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-violet">
              FAQ
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Frequently asked questions
            </h2>

            <div className="mt-10 space-y-4">
              {[
                {
                  question: "What is a real estate CRM?",
                  answer:
                    "A real estate CRM is software that helps agents, brokers and agencies manage leads, customers, properties, follow-ups and sales opportunities from one centralized platform.",
                },
                {
                  question: "Who is Brosavo Real Estate CRM for?",
                  answer:
                    "Brosavo is designed for individual agents, brokers, real estate agencies, sales teams and developers.",
                },
                {
                  question: "Does Brosavo include a real estate website?",
                  answer:
                    "Yes. The Starter plan includes a professional website with property listings and lead capture. Professional adds advanced website capabilities, blog, SEO tools and property portal integration.",
                },
                {
                  question: "Does Brosavo support WhatsApp?",
                  answer:
                    "Yes. Starter includes WhatsApp notifications while Professional includes WhatsApp API integration.",
                },
                {
                  question: "Does Brosavo integrate with 99acres?",
                  answer:
                    "Yes. 99acres integration is available as part of the Professional website and property portal capabilities.",
                },
                {
                  question: "Does Brosavo have AI features?",
                  answer:
                    "Yes. Brosavo includes AI capabilities designed to help real estate teams improve workflows and productivity.",
                },
                {
                  question: "Does Brosavo have a free trial?",
                  answer:
                    "Yes. Starter and Professional include a 14-day free trial.",
                },
                {
                  question: "How much does Brosavo Real Estate CRM cost?",
                  answer:
                    "Starter costs ₹999 per month, Professional costs ₹2,499 per month and Enterprise pricing is customized.",
                },
                {
                  question: "Is a mobile app available?",
                  answer:
                    "Yes. The Brosavo mobile app is available as an add-on.",
                },
                {
                  question: "Does Brosavo provide calling?",
                  answer:
                    "Calling is not currently included as a Brosavo CRM feature.",
                },
              ].map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-border/70 bg-surface/40"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 font-medium">
                    <span>{faq.question}</span>

                    <span className="text-xl text-muted transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="border-t border-border/60 px-6 py-5 text-sm leading-7 text-muted">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FINAL CTA                                                         */}
      {/* ================================================================ */}

      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-[40px] bg-foreground px-7 py-20 text-center text-background sm:px-12 lg:py-28">

            <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-accent-blue/30 blur-[100px]" />

            <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-accent-violet/30 blur-[100px]" />

            <div className="relative mx-auto max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan">
                Get started
              </span>

              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                Ready to build a better real estate sales process?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-background/60 sm:text-lg">
                Start your 14-day free trial and bring your leads,
                properties, customers and sales pipeline into one CRM.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="https://crm.brosavo.com"
                  className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-1 hover:opacity-90"
                >
                  Start Free 14-Day Trial
                </a>

                <Link
                  href="/contact?plan=demo"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keep CTA metadata/content available without visual duplication */}
      <section className="hidden">
        <div>{PRODUCT_CTA.heading}</div>
      </section>
    </>
  );
}