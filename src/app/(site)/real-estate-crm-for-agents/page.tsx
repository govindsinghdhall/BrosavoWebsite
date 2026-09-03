import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

type FAQ = {
  question: string;
  answer: string;
};

type PageConfig = {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  primaryKeywords: string[];
  sections: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  faqs: FAQ[];
};

const config: PageConfig = {
  title: "Real Estate CRM for Agents | Brosavo",

  description:
    "Brosavo is a real estate CRM for agents that helps capture leads, manage properties, schedule follow-ups, match customers and track sales.",

  eyebrow: "CRM for Real Estate Agents",

  heading: "A real estate CRM built around the agent's daily workflow.",

  intro:
    "Spend less time managing spreadsheets and disconnected conversations. Brosavo helps agents organize enquiries, property requirements, follow-ups and opportunities from one workspace.",

  primaryKeywords: [
    "Lead Management",
    "Property Matching",
    "Follow-Ups",
    "Mobile CRM",
    "WhatsApp",
    "Sales Pipeline",
  ],

  sections: [
    {
      title: "Capture every property enquiry",

      paragraphs: [
        "Bring enquiries from your website and connected channels into one organized workflow. Give each prospect clear ownership, status and next action.",
      ],

      bullets: [
        "Lead capture",
        "Lead qualification",
        "Customer requirements",
        "Lead ownership",
      ],
    },

    {
      title: "Turn requirements into property opportunities",

      paragraphs: [
        "Keep customer preferences and property information connected so agents can identify relevant inventory and move conversations forward faster.",
      ],

      bullets: [
        "Property matching",
        "Inventory visibility",
        "Customer preferences",
        "Opportunity tracking",
      ],
    },

    {
      title: "Never lose the next follow-up",

      paragraphs: [
        "Tasks and reminders help agents maintain consistent follow-up throughout the sales process, from first contact to conversion.",
      ],

      bullets: [
        "Tasks",
        "Reminders",
        "Pipeline stages",
        "Activity visibility",
      ],
    },

    {
      title: "Buyer’s agent workflows",

      paragraphs: [
        "Buyer’s agents work from a search brief rather than a listing desk. Brosavo can store the buyer requirement, matched properties and follow-ups on one record. Australian buyer’s agents should also use the Australia CRM page for local context.",
      ],

      bullets: [
        "Search briefs",
        "Property matching",
        "Shortlists",
        "Client follow-up",
      ],
    },
  ],

  faqs: [
    {
      question: "Is Brosavo suitable for individual real estate agents?",

      answer:
        "Yes. Brosavo's Starter plan is designed for individual agents and smaller real estate businesses.",
    },

    {
      question: "Can agents manage properties in Brosavo?",

      answer:
        "Yes. Brosavo includes property inventory and customer-property matching workflows.",
    },

    {
      question: "Does Brosavo support WhatsApp?",

      answer:
        "Yes. WhatsApp notifications are included in Starter and WhatsApp API integration is available on Professional.",
    },
  ],
};

export const metadata: Metadata = {
  title: config.title,

  description: config.description,

  alternates: {
    canonical: `${SITE_URL}/real-estate-crm-for-agents`,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: config.title,
    description: config.description,
    url: `${SITE_URL}/real-estate-crm-for-agents`,
    type: "website",
  },
};

/* ============================================================
   SOFTWARE SCHEMA
============================================================ */

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",

  name: "Brosavo Real Estate CRM",

  applicationCategory: "BusinessApplication",

  operatingSystem: "Web",

  url: `${SITE_URL}/real-estate-crm-for-agents`,

  description: config.description,

  provider: {
    "@type": "Organization",
    name: "Brosavo",
    url: SITE_URL,
  },
};

/* ============================================================
   FAQ SCHEMA
============================================================ */

const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: config.faqs.map((faq) => ({
    "@type": "Question",

    name: faq.question,

    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Page() {
  return (
    <div>
      {/* ============================================================
          STRUCTURED DATA
      ============================================================ */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* ============================================================
          HERO
      ============================================================ */}

      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-accent-blue/20 bg-accent-blue/5 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-accent-blue">
              {config.eyebrow}
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              {config.heading}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {config.intro}
            </p>

            {/* ========================================================
                HERO CTA
            ======================================================== */}

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="https://crm.brosavo.com"
                className="rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:-translate-y-0.5"
              >
                Start Free 14-Day Trial
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-border/70 bg-background px-6 py-3.5 text-sm font-medium transition hover:-translate-y-0.5"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CORE CAPABILITIES
      ============================================================ */}

      <section className="py-14 sm:py-18">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {config.primaryKeywords.map((keyword) => (
                <div
                  key={keyword}
                  className="rounded-2xl border border-border/70 bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/20 hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)]"
                >
                  <span
                    aria-hidden="true"
                    className="text-accent-blue"
                  >
                    ✦
                  </span>

                  <h2 className="mt-3 text-sm font-semibold">
                    {keyword}
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-muted">
                    A focused part of the Brosavo real estate sales
                    workflow.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MAIN CONTENT SECTIONS
      ============================================================ */}

      {config.sections.map((section, index) => (
        <section
          key={section.title}
          className="border-t border-border/50 py-16 sm:py-20"
        >
          <div className="container-wide px-6 lg:px-10">
            <div className="mx-auto max-w-4xl">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue/70">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {section.title}
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.bullets?.length ? (
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-xl border border-border/60 bg-surface px-4 py-3 text-sm text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mr-2 text-accent-blue"
                      >
                        ✓
                      </span>

                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}

              {/* ======================================================
                  CONTEXTUAL INTERNAL LINK
              ====================================================== */}

              {index === 0 && (
                <div className="mt-8">
                  <Link
                    href="/real-estate-lead-management"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent-blue"
                  >
                    Explore real estate lead management
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* ============================================================
          FAQ
      ============================================================ */}

      <section className="border-t border-border/50 bg-surface py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-violet">
              FAQ
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Frequently asked questions
            </h2>

            <div className="mt-8 space-y-3">
              {config.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-border/70 bg-background"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-sm font-medium">
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

      {/* ============================================================
          FINAL CTA
      ============================================================ */}

      <section className="py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-background p-8 sm:p-12">
            {/* Background glow */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-accent-blue/[0.08] blur-[100px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-accent-violet/[0.08] blur-[100px]"
            />

            <div className="relative">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">
                Explore Brosavo
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Build a better real estate sales process.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                Explore the complete Brosavo Real Estate CRM for lead
                management, property inventory, sales pipelines, WhatsApp
                workflows, analytics and team management.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/real-estate-crm"
                  className="rounded-full bg-foreground px-6 py-3.5 text-center text-sm font-medium text-background transition hover:-translate-y-0.5"
                >
                  Browse the complete Real Estate CRM
                </Link>

                <Link
                  href="/real-estate-crm/australia"
                  className="rounded-full border border-border/70 px-6 py-3.5 text-center text-sm font-medium transition hover:-translate-y-0.5"
                >
                  Real estate CRM in Australia
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}