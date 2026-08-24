import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/layout/PageHero";
import { BrandIdentity } from "@/components/sections/BrandIdentity";
import { JsonLd } from "@/components/blog/JsonLd";
import { buildFaqJsonLd } from "@/lib/blog-seo";
import { BRAND_FAQS } from "@/lib/brand-faqs";

import {
  LEGAL_NAME,
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
} from "@/lib/site";

/* ============================================================
   COMPANY INFORMATION
   ============================================================ */

const COMPANY_NAME = "Brosavo Technologies";

const COMPANY_DESCRIPTION =
  "Brosavo Technologies is a global technology company building software products, AI solutions, SaaS platforms, cloud solutions, automation systems, and digital products for businesses worldwide. We specialize in software development, web and mobile applications, CRM solutions, artificial intelligence, business automation, and digital transformation. Brosavo is also the developer of Brosavo Real Estate CRM, a platform designed for real estate agents, brokers, agencies, developers, and teams. We combine modern technology, product design, and business-focused engineering to build secure, scalable, and practical digital solutions that help businesses build, modernize, automate, and scale their digital operations.";

const COMPANY_SHORT_DESCRIPTION =
  "Brosavo Technologies is a global software company building software products, AI solutions, SaaS platforms, cloud solutions, automation systems, CRM solutions, and digital products for businesses worldwide.";

const SOCIAL_PROFILES = [
  "https://www.linkedin.com/company/143083050",
  "https://www.facebook.com/profile.php?id=61593174631745",
  "https://www.instagram.com/brosavo/",
  "https://www.youtube.com/@brosavo",
  "https://x.com/hellobrosavo",
  "https://github.com/brosavotechnologies",
];

/* ============================================================
   METADATA
   ============================================================ */

export const metadata: Metadata = {
  title: "About Brosavo Technologies | Software, AI & SaaS Company",

  description:
    "Brosavo Technologies is a global software company building software products, AI solutions, SaaS platforms, cloud solutions, automation systems, CRM solutions, and digital products for businesses worldwide.",

  keywords: [
    "Brosavo Technologies",
    "Brosavo",
    "software company",
    "software development company",
    "AI solutions",
    "SaaS company",
    "CRM development",
    "cloud solutions",
    "business automation",
    "digital transformation",
    "Brosavo Real Estate CRM",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Brosavo Technologies | Software, AI & SaaS Company",

    description:
      "Brosavo Technologies builds software products, AI solutions, SaaS platforms, CRM solutions, cloud solutions, automation systems, and digital products for businesses worldwide.",

    url: `${SITE_URL}/about`,

    siteName: SITE_NAME,

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "About Brosavo Technologies | Software, AI & SaaS Company",

    description:
      "Brosavo Technologies builds software products, AI solutions, SaaS platforms, CRM solutions, cloud solutions, automation systems, and digital products for businesses worldwide.",
  },
};

/* ============================================================
   STRUCTURED DATA
   ============================================================ */

const organizationSchema = {
  "@context": "https://schema.org",

  "@type": "Organization",

  "@id": ORGANIZATION_ID,

  name: COMPANY_NAME,

  legalName: LEGAL_NAME,

  alternateName: "Brosavo",

  url: SITE_URL,

  description: COMPANY_DESCRIPTION,

  foundingDate: "2023",

  industry: "Software & Technology",

  sameAs: SOCIAL_PROFILES,

  email: "mailto:hello@brosavo.com",

  areaServed: "Worldwide",

  knowsAbout: [
    "Software Development",
    "Artificial Intelligence",
    "SaaS",
    "Cloud Computing",
    "Web Development",
    "Mobile Application Development",
    "CRM Software",
    "Business Automation",
    "Digital Transformation",
    "Real Estate Technology",
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",

    name: "Brosavo Technologies Products and Services",

    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Brosavo Real Estate CRM",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: `${SITE_URL}/real-estate-crm`,
          description:
            "Brosavo Real Estate CRM is a customer relationship management platform designed for real estate agents, brokers, agencies, developers, and teams.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CRM Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud Solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Automation",
        },
      },
    ],
  },
};

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
      <JsonLd data={[organizationSchema, aboutPageSchema, faqSchema]} />

      {/* ========================================================
          HERO
      ======================================================== */}

      <PageHero
        label="About Brosavo"
        title="About Brosavo Technologies"
        description="Brosavo Technologies is a global technology company building software products, AI solutions, SaaS platforms, cloud solutions, automation systems, and digital products for businesses worldwide."
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
                  A software company focused on building practical digital
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
                    We focus on creating practical technology that solves real
                    business problems, improves operations, and gives
                    organizations a foundation they can continue to build on as
                    they grow.
                  </p>
                </div>
              </div>

              {/* At a glance */}

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
                    <p className="text-sm text-muted">Founded</p>

                    <p className="mt-1 text-lg font-medium">2023</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted">Company type</p>

                    <p className="mt-1 text-lg font-medium">Software Company</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted">Industry</p>

                    <p className="mt-1 text-lg font-medium">
                      Software & Technology
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted">Operating locations</p>

                    <p className="mt-1 text-lg font-medium">Canada & India</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted">Website</p>

                    <p className="mt-1 text-lg font-medium">www.brosavo.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            COMPANY STORY
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-5xl">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-blue">
              Our story
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              From software engineering to digital products.
            </h2>

            <div className="mt-6 max-w-4xl space-y-5 text-base leading-8 text-muted sm:text-lg">
              <p>
                Brosavo Technologies was founded in 2023 with a focus on
                building technology that businesses can actually use.
              </p>

              <p>
                As businesses increasingly depend on software, artificial
                intelligence, cloud platforms, automation, and digital
                experiences, Brosavo focuses on bringing these technologies
                together into practical products and systems.
              </p>

              <p>
                Today, Brosavo works across software development, AI, SaaS, CRM
                solutions, cloud technology, automation, and digital products,
                while continuing to develop its own software products for
                specific industries.
              </p>
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
                  title: "Software Products",
                  description:
                    "Purpose-built software products designed to solve specific business and industry problems.",
                },
                {
                  title: "AI Solutions",
                  description:
                    "AI-powered applications and intelligent workflows that help businesses automate tasks and work with data more effectively.",
                },
                {
                  title: "SaaS Platforms",
                  description:
                    "Scalable software-as-a-service platforms designed for recurring business workflows and multi-tenant environments.",
                },
                {
                  title: "Web Applications",
                  description:
                    "Websites, web applications, dashboards, portals, and customer-facing digital experiences.",
                },
                {
                  title: "Mobile Applications",
                  description:
                    "Mobile experiences and applications designed around customer, employee, and business workflows.",
                },
                {
                  title: "CRM Solutions",
                  description:
                    "Customer relationship management systems for leads, customers, communication, sales, and business operations.",
                },
                {
                  title: "Cloud Solutions",
                  description:
                    "Cloud-based applications and infrastructure designed for scalability, reliability, and modern deployment environments.",
                },
                {
                  title: "Business Automation",
                  description:
                    "Automated workflows and integrations that reduce repetitive work and connect business processes.",
                },
                {
                  title: "Digital Transformation",
                  description:
                    "Technology solutions that help businesses modernize their operations, systems, and customer experiences.",
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
            PRODUCTS
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-5xl">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-blue">
              Our products
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Software products built by Brosavo.
            </h2>

            <p className="mt-6 max-w-4xl text-base leading-8 text-muted sm:text-lg">
              Alongside technology services and custom software development,
              Brosavo develops its own software products designed around
              specific business and industry needs.
            </p>

            {/* Real Estate CRM */}

            <div className="mt-10 rounded-3xl border border-border/70 bg-surface/40 p-8 sm:p-12">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan">
                Featured product
              </span>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                Brosavo Real Estate CRM
              </h3>

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
            WHY WE BUILT THE REAL ESTATE CRM
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-5xl">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-violet">
              Why we built it
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Why we built Brosavo Real Estate CRM
            </h2>

            <div className="mt-6 max-w-4xl space-y-5 text-base leading-8 text-muted sm:text-lg">
              <p>
                Real estate businesses manage a large amount of information
                every day. Leads, customers, properties, conversations,
                follow-ups, appointments, and sales activities can quickly
                become difficult to manage when they are spread across
                spreadsheets, messaging applications, email, and disconnected
                systems.
              </p>

              <p>
                Brosavo Real Estate CRM was built to bring these workflows
                together in one practical platform designed specifically for
                real estate professionals.
              </p>

              <p>
                The goal is to help real estate agents, brokers, agencies,
                developers, and teams organize their customer relationships,
                manage leads, communicate with prospects, and create a more
                structured sales process.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Capture",
                  description: "Organize leads and customer information.",
                },
                {
                  number: "02",
                  title: "Engage",
                  description: "Manage communication and follow-ups.",
                },
                {
                  number: "03",
                  title: "Manage",
                  description:
                    "Connect properties, customers, and sales workflows.",
                },
                {
                  number: "04",
                  title: "Grow",
                  description:
                    "Create a more structured and scalable sales operation.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-border/70 bg-surface/40 p-6"
                >
                  <span className="text-sm font-mono text-accent-cyan">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            SERVICES
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-5xl">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan">
              Services
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Technology services for businesses building their digital future.
            </h2>

            <p className="mt-6 max-w-4xl text-base leading-8 text-muted sm:text-lg">
              Brosavo works with businesses that need to build new digital
              products, modernize existing systems, automate operations, or
              develop technology around specific business requirements.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Software Development",
                  description:
                    "Custom software applications and business systems designed around specific operational requirements.",
                },
                {
                  title: "AI Development",
                  description:
                    "Artificial intelligence applications, intelligent workflows, and AI-powered business solutions.",
                },
                {
                  title: "SaaS Development",
                  description:
                    "Multi-tenant SaaS platforms and cloud-based software products built for scale.",
                },
                {
                  title: "CRM Development",
                  description:
                    "CRM platforms and customer management systems tailored to business workflows.",
                },
                {
                  title: "Cloud Solutions",
                  description:
                    "Cloud applications, infrastructure, integrations, and scalable deployment solutions.",
                },
                {
                  title: "Business Automation",
                  description:
                    "Automation systems that connect tools, processes, data, and teams.",
                },
                {
                  title: "Web Development",
                  description:
                    "Business websites, web applications, portals, dashboards, and digital experiences.",
                },
                {
                  title: "Mobile Development",
                  description:
                    "Mobile applications and experiences designed for modern customer and business workflows.",
                },
                {
                  title: "Digital Transformation",
                  description:
                    "Technology solutions that help organizations modernize their systems and digital operations.",
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

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Understand",
                  description:
                    "Understand the business, users, workflows, goals, and problems behind the product.",
                },
                {
                  number: "02",
                  title: "Plan",
                  description:
                    "Define the product requirements, technology approach, architecture, and delivery priorities.",
                },
                {
                  number: "03",
                  title: "Design",
                  description:
                    "Create practical digital experiences and workflows around real user and business requirements.",
                },
                {
                  number: "04",
                  title: "Build",
                  description:
                    "Develop secure, scalable, and maintainable technology using the right tools for the product.",
                },
                {
                  number: "05",
                  title: "Launch",
                  description:
                    "Deploy products using modern infrastructure and establish a reliable production environment.",
                },
                {
                  number: "06",
                  title: "Improve",
                  description:
                    "Continuously improve products through feedback, changing requirements, automation, and new technology.",
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
            TECHNOLOGY
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-5xl">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan">
              Our technology
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Engineering, AI, cloud, and product design working together.
            </h2>

            <p className="mt-6 max-w-4xl text-base leading-8 text-muted sm:text-lg">
              Brosavo combines software engineering with product thinking and
              business-focused design. Depending on the product and business
              requirement, our technology work can span application development,
              artificial intelligence, cloud infrastructure, automation, APIs,
              databases, integrations, and scalable SaaS architecture.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Software Engineering",
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
            CANADA × INDIA
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl border border-border/70 bg-surface/40 p-8 sm:p-12">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-blue">
                Global presence
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Canada × India
              </h2>

              <p className="mt-6 max-w-4xl text-base leading-8 text-muted sm:text-lg">
                Brosavo operates across Canada and India, combining global
                business perspective with software engineering, product
                development, and digital technology capabilities.
              </p>

              <p className="mt-5 max-w-4xl text-base leading-8 text-muted sm:text-lg">
                We work with businesses worldwide looking to build, modernize,
                automate, and scale their digital operations.
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
            COMPANY INFORMATION
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-5xl">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-violet">
              Company information
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Brosavo Technologies
            </h2>

            <div className="mt-8 overflow-hidden rounded-3xl border border-border/70 bg-surface/40">
              {[
                ["Company", "Brosavo Technologies"],
                ["Founded", "2023"],
                ["Company type", "Software Company"],
                ["Industry", "Software & Technology"],
                ["Operating locations", "Canada & India"],
                ["Website", "www.brosavo.com"],
                ["Email", "hello@brosavo.com"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-2 border-b border-border/60 px-6 py-5 last:border-b-0 sm:grid-cols-[220px_1fr] sm:gap-8"
                >
                  <span className="text-sm font-medium text-muted">
                    {label}
                  </span>

                  <span className="text-sm text-foreground/90">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            OFFICIAL PROFILES
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-5xl">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan">
              Official profiles
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Find Brosavo online.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              Follow Brosavo Technologies across its official company and
              technology profiles.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href="https://www.linkedin.com/company/143083050"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-border/70 bg-surface/40 p-6 transition-colors hover:bg-surface"
              >
                <h3 className="font-semibold">LinkedIn</h3>

                <p className="mt-2 text-sm text-muted">
                  Brosavo Technologies on LinkedIn
                </p>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61593174631745"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-border/70 bg-surface/40 p-6 transition-colors hover:bg-surface"
              >
                <h3 className="font-semibold">Facebook</h3>

                <p className="mt-2 text-sm text-muted">
                  Official Brosavo Facebook profile
                </p>
              </a>

              <a
                href="https://www.instagram.com/brosavo/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-border/70 bg-surface/40 p-6 transition-colors hover:bg-surface"
              >
                <h3 className="font-semibold">Instagram</h3>

                <p className="mt-2 text-sm text-muted">
                  Follow Brosavo on Instagram
                </p>
              </a>

              <a
                href="https://www.youtube.com/@brosavo"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-border/70 bg-surface/40 p-6 transition-colors hover:bg-surface"
              >
                <h3 className="font-semibold">YouTube</h3>

                <p className="mt-2 text-sm text-muted">
                  Brosavo videos and technology content
                </p>
              </a>

              <a
                href="https://x.com/hellobrosavo"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-border/70 bg-surface/40 p-6 transition-colors hover:bg-surface"
              >
                <h3 className="font-semibold">X</h3>

                <p className="mt-2 text-sm text-muted">Follow @hellobrosavo</p>
              </a>

              <a
                href="https://github.com/brosavotechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-border/70 bg-surface/40 p-6 transition-colors hover:bg-surface"
              >
                <h3 className="font-semibold">GitHub</h3>

                <p className="mt-2 text-sm text-muted">
                  Brosavo Technologies on GitHub
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* ======================================================
            DUN & BRADSTREET
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-blue">
              Business identity
            </span>

            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
              Brosavo Technologies
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted">
              Brosavo Technologies maintains an established business profile
              with Dun & Bradstreet.
            </p>

            <div className="mt-7">
              <a
                href="https://www.dnb.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
              >
                View Dun & Bradstreet
              </a>
            </div>
          </div>
        </section>

        {/* ======================================================
            FAQ
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-violet">
              Frequently asked questions
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              About Brosavo Technologies
            </h2>

            <div className="mt-8 space-y-4">
              {BRAND_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-border/70 bg-surface/40 p-6"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold">
                    {faq.question}
                  </summary>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            FINAL CTA
        ====================================================== */}

        <section className="section-padding">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan">
              Brosavo Technologies
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build something useful.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Whether you need software development, an AI solution, a SaaS
              platform, CRM software, business automation, cloud solutions, or a
              complete digital product, Brosavo can help turn your business
              requirements into working technology.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Start a conversation
              </Link>

              <Link
                href="/real-estate-crm"
                className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:bg-surface"
              >
                Explore Brosavo Real Estate CRM
              </Link>
            </div>
          </div>
        </section>

        {/* ======================================================
            FOOTER COMPANY STATEMENT
        ====================================================== */}

        <section className="pb-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm leading-7 text-muted">
              Brosavo Technologies is a global software company building
              software products, AI solutions, SaaS platforms, cloud solutions,
              automation systems, and digital products for businesses worldwide.
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
