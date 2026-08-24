import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { BrandIdentity } from "@/components/sections/BrandIdentity";
import { JsonLd } from "@/components/blog/JsonLd";
import { buildFaqJsonLd } from "@/lib/blog-seo";
import { BRAND_FAQS } from "@/lib/brand-faqs";
import Link from "next/link";

import {
  LEGAL_NAME,
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
} from "@/lib/site";

/* ============================================================
   METADATA
   ============================================================ */

const COMPANY_DESCRIPTION =
  "Brosavo Technologies is a global technology company building software products, AI solutions, SaaS platforms, cloud solutions, automation systems, and digital products for businesses worldwide. We specialize in software development, web and mobile applications, CRM solutions, artificial intelligence, business automation, and digital transformation. Brosavo is also the developer of Brosavo Real Estate CRM, a platform designed for real estate agents, brokers, agencies, developers, and teams. We combine modern technology, product design, and business-focused engineering to build secure, scalable, and practical digital solutions that help businesses build, modernize, automate, and scale their digital operations.";

export const metadata: Metadata = {
  title: "About Brosavo Technologies | Software, AI & SaaS Company",

  description:
    "Brosavo Technologies is a global technology company building software products, AI solutions, SaaS platforms, cloud solutions, automation systems, CRM software, and digital products for businesses worldwide.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Brosavo Technologies | Software, AI & SaaS Company",

    description:
      "Brosavo Technologies builds software products, AI solutions, SaaS platforms, CRM solutions, automation systems, cloud solutions, and digital products for businesses worldwide.",

    url: `${SITE_URL}/about`,

    siteName: SITE_NAME,

    type: "website",
  },
};

/* ============================================================
   STRUCTURED DATA
   ============================================================ */

const aboutPageSchema = {
  "@context": "https://schema.org",

  "@type": "AboutPage",

  name: "About Brosavo Technologies",

  description: COMPANY_DESCRIPTION,

  url: `${SITE_URL}/about`,

  isPartOf: {
    "@id": WEBSITE_ID,
  },

  about: {
    "@id": ORGANIZATION_ID,

    "@type": "Organization",

    name: SITE_NAME,

    legalName: LEGAL_NAME,

    url: SITE_URL,

    description: COMPANY_DESCRIPTION,
  },

  mainEntity: {
    "@id": ORGANIZATION_ID,
  },
};

/* ============================================================
   PAGE
   ============================================================ */

export default function AboutPage() {
  const faqSchema = buildFaqJsonLd(BRAND_FAQS);

  return (
    <>
      <JsonLd data={[aboutPageSchema, faqSchema]} />

      {/* ========================================================
          HERO
      ======================================================== */}

      <PageHero
        label="About Brosavo"
        title="Technology built for businesses that want to grow."
        description="Brosavo Technologies builds software products, AI solutions, SaaS platforms, cloud solutions, automation systems, and digital products for businesses worldwide."
      />

      <main className="container-wide">
        {/* ======================================================
            WHO WE ARE
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan">
                  Who we are
                </span>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  A technology company focused on building useful digital
                  products.
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-muted sm:text-lg">
                  <p>{COMPANY_DESCRIPTION}</p>

                  <p>
                    Our work brings together software engineering, product
                    design, artificial intelligence, cloud technology,
                    automation, and business-focused thinking.
                  </p>

                  <p>
                    Rather than building technology for technology&apos;s sake,
                    we focus on creating practical systems that solve real
                    business problems and can grow with the organizations that
                    use them.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-border/70 bg-surface/40 p-7 sm:p-8">
                <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-violet">
                  At a glance
                </span>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-sm text-muted">Company</p>

                    <p className="mt-1 text-lg font-medium">
                      Brosavo Technologies
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted">Focus</p>

                    <p className="mt-1 text-lg font-medium">
                      Software, AI, SaaS & Digital Products
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted">Product</p>

                    <p className="mt-1 text-lg font-medium">
                      Brosavo Real Estate CRM
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted">Markets</p>

                    <p className="mt-1 text-lg font-medium">
                      Businesses worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            WHAT WE BUILD
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-5xl">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-violet">
              What we build
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Software products and digital systems for modern businesses.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              Brosavo works across multiple areas of technology, helping
              businesses turn ideas, operational challenges, and growth
              opportunities into practical digital products and systems.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Software Development",
                  description:
                    "Custom software applications and business systems designed around specific operational requirements.",
                },
                {
                  title: "Web & Mobile Applications",
                  description:
                    "Websites, web applications, mobile applications, portals, dashboards, and customer-facing digital experiences.",
                },
                {
                  title: "AI Solutions",
                  description:
                    "AI-powered applications and intelligent workflows that help businesses automate tasks and make better use of their data.",
                },
                {
                  title: "SaaS Platforms",
                  description:
                    "Scalable software-as-a-service products designed for recurring business workflows and multi-tenant environments.",
                },
                {
                  title: "CRM Solutions",
                  description:
                    "Customer relationship management systems that help businesses organize leads, customers, communication, sales, and operations.",
                },
                {
                  title: "Automation Systems",
                  description:
                    "Business automation solutions that reduce repetitive work and connect processes across teams and systems.",
                },
                {
                  title: "Cloud Solutions",
                  description:
                    "Cloud-based infrastructure and applications designed for scalability, reliability, and modern deployment environments.",
                },
                {
                  title: "Digital Transformation",
                  description:
                    "Technology strategies and software solutions that help businesses modernize how they operate and serve customers.",
                },
                {
                  title: "Digital Products",
                  description:
                    "End-to-end digital products that combine technology, product design, user experience, and business strategy.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/70 bg-surface/40 p-6"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            BROSAVO REAL ESTATE CRM
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl border border-border/70 bg-surface/40 p-8 sm:p-12">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-blue">
                Our product
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Brosavo Real Estate CRM
              </h2>

              <p className="mt-6 max-w-4xl text-base leading-8 text-muted sm:text-lg">
                Brosavo is the developer of Brosavo Real Estate CRM, a customer
                relationship management platform designed for real estate
                agents, brokers, agencies, developers, and teams.
              </p>

              <p className="mt-5 max-w-4xl text-base leading-8 text-muted sm:text-lg">
                The platform brings real estate lead management, customer
                relationships, property workflows, communication, and sales
                operations into one digital environment.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Real Estate CRM",
                  "Lead Management",
                  "Property Management",
                  "Sales Management",
                  "WhatsApp Integration",
                  "Team Management",
                  "Automation",
                  "Real Estate Software",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/70 bg-background/60 px-4 py-2 text-sm text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/real-estate-crm"
                  className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Explore Brosavo Real Estate CRM
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            TECHNOLOGY
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-5xl">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan">
              Our technology
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Engineering, AI, cloud and product design working together.
            </h2>

            <p className="mt-6 max-w-4xl text-base leading-8 text-muted sm:text-lg">
              Brosavo combines modern software engineering with product thinking
              and business-focused design. Depending on the product and business
              requirement, our technology work can span application development,
              artificial intelligence, cloud infrastructure, automation, APIs,
              databases, integrations, and scalable SaaS architecture.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Web Development",
                "Mobile Development",
                "Artificial Intelligence",
                "SaaS",
                "Cloud Computing",
                "APIs & Integrations",
                "CRM",
                "Automation",
                "Databases",
                "Digital Products",
                "Custom Software",
                "Enterprise Systems",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/70 bg-background/60 px-4 py-2 text-sm text-foreground/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            HOW WE WORK
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-5xl">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-violet">
              How we work
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Business problems first. Technology second.
            </h2>

            <p className="mt-6 max-w-4xl text-base leading-8 text-muted sm:text-lg">
              Every digital product starts with understanding the problem it
              needs to solve. Our approach combines business requirements,
              product design, engineering, technology, and continuous
              improvement.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Understand",
                  description:
                    "We start by understanding the business, users, workflows, goals, and problems behind the product.",
                },
                {
                  number: "02",
                  title: "Design",
                  description:
                    "We translate requirements into practical product experiences, system architecture, and digital workflows.",
                },
                {
                  number: "03",
                  title: "Build",
                  description:
                    "We develop secure and scalable software using appropriate technologies for the product and its requirements.",
                },
                {
                  number: "04",
                  title: "Improve",
                  description:
                    "We continuously refine products using feedback, changing business requirements, automation opportunities, and new technology.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-border/70 bg-surface/40 p-7"
                >
                  <span className="text-sm font-mono text-accent-cyan">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            GLOBAL PRESENCE
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl border border-border/70 bg-surface/40 p-8 sm:p-12">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-blue">
                Global presence
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Built with a global perspective.
              </h2>

              <p className="mt-6 max-w-4xl text-base leading-8 text-muted sm:text-lg">
                Brosavo works with businesses worldwide, combining global
                business perspective with software engineering, product
                development, and digital technology capabilities across Canada
                and India.
              </p>

              <p className="mt-5 max-w-4xl text-base leading-8 text-muted sm:text-lg">
                Our goal is simple: help businesses build, modernize, automate,
                and scale their digital operations with technology that is
                practical, secure, and designed for long-term use.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-background/40 p-6">
                  <h3 className="text-lg font-semibold">Canada</h3>

                  <p className="mt-2 text-sm leading-7 text-muted">
                    Connecting technology development with global business needs
                    and markets.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background/40 p-6">
                  <h3 className="text-lg font-semibold">India</h3>

                  <p className="mt-2 text-sm leading-7 text-muted">
                    Supporting software engineering, product development, and
                    technology delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            WHY BROSAVO
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-5xl">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan">
              Why Brosavo
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Technology designed to create business value.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Business-focused",
                  description:
                    "We focus on the business outcome behind the technology rather than building unnecessary complexity.",
                },
                {
                  title: "Product-minded",
                  description:
                    "We think about users, workflows, usability, scalability, and long-term product evolution.",
                },
                {
                  title: "Built to scale",
                  description:
                    "Our solutions are designed with maintainability, security, performance, and future growth in mind.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/70 bg-surface/40 p-7"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            CTA
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan">
              Brosavo Technologies
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Have an idea? Let&apos;s build it.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Whether you need a website, custom software, AI solution, SaaS
              platform, CRM, automation system, or complete digital product,
              Brosavo can help turn your business requirements into working
              technology.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Start a conversation
              </a>

              <Link
                href="/real-estate-crm"
                className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:bg-surface"
              >
                Explore our CRM
              </Link>
            </div>
          </div>
        </section>

        {/* ======================================================
            BUSINESS IDENTITY
        ====================================================== */}

        <section className="pb-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm leading-7 text-muted">
              Brosavo Technologies is focused on building software products, AI
              solutions, SaaS platforms, cloud solutions, automation systems,
              and digital products for businesses worldwide.
            </p>

            <p className="mt-3 text-xs text-muted/70">
              Official website: www.brosavo.com
            </p>
          </div>
        </section>
      </main>

      <BrandIdentity />
    </>
  );
}
