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
  primaryKeywords: {
    title: string;
    description: string;
  }[];
  sections: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
    link?: {
      href: string;
      label: string;
    };
  }[];
  faqs: FAQ[];
};

const config: PageConfig = {
  title: "Real Estate CRM for Developers | Brosavo",

  description:
    "Brosavo is a real estate CRM for developers that helps manage project leads, unit inventory, sales pipelines, customer requirements, teams and analytics.",

  eyebrow: "CRM for Real Estate Developers",

  heading:
    "A real estate CRM for developers managing sales at scale.",

  intro:
    "Connect project inventory, customer enquiries, sales teams and opportunities in one structured real estate CRM built for property developers and large sales operations.",

  primaryKeywords: [
    {
      title: "Developer CRM",
      description:
        "Centralize project enquiries, customer relationships and sales activity in one workspace.",
    },
    {
      title: "Project Sales",
      description:
        "Give sales teams a structured workflow for managing opportunities across property projects.",
    },
    {
      title: "Unit Inventory",
      description:
        "Keep unit availability, property information and pricing connected to the sales process.",
    },
    {
      title: "Lead Management",
      description:
        "Capture, qualify and assign property enquiries while maintaining visibility across the sales team.",
    },
    {
      title: "Sales Teams",
      description:
        "Manage ownership, responsibilities and permissions across project sales teams.",
    },
    {
      title: "Analytics",
      description:
        "Understand pipeline activity, lead performance and sales progress from one reporting layer.",
    },
  ],

  sections: [
    {
      title: "Connect project inventory with sales",

      paragraphs: [
        "Real estate developers need a clear connection between available inventory, customer requirements and sales activity. Brosavo brings these workflows closer together so sales teams can work from current property information while managing opportunities.",

        "Instead of maintaining separate spreadsheets for units, enquiries and sales follow-ups, teams can use a centralized CRM workflow to keep customer and property information connected.",
      ],

      bullets: [
        "Property and unit inventory",
        "Customer requirements",
        "Availability and pricing",
        "Opportunity tracking",
      ],

      link: {
        href: "/property-management-crm",
        label: "Explore property management CRM",
      },
    },

    {
      title: "Manage project leads from enquiry to conversion",

      paragraphs: [
        "Developers often receive enquiries across websites, campaigns and connected communication channels. Brosavo helps bring those enquiries into a structured sales workflow where teams can qualify prospects, assign ownership and track progress.",

        "Sales managers can maintain visibility into opportunities while individual team members have a clear view of the leads and follow-ups assigned to them.",
      ],

      bullets: [
        "Lead capture",
        "Lead qualification",
        "Sales ownership",
        "Follow-up management",
      ],

      link: {
        href: "/real-estate-lead-management",
        label: "Explore real estate lead management",
      },
    },

    {
      title: "Scale sales operations across projects",

      paragraphs: [
        "As developers manage multiple projects or larger sales organizations, a repeatable sales process becomes increasingly important. Brosavo provides centralized team management, assignments, permissions and reporting to support structured operations.",

        "Teams can organize responsibilities around their sales process while managers gain a clearer view of activity and opportunities across the organization.",
      ],

      bullets: [
        "Team assignments",
        "User permissions",
        "Project workflows",
        "Activity visibility",
      ],

      link: {
        href: "/real-estate-sales-crm",
        label: "Explore real estate sales CRM",
      },
    },

    {
      title: "Understand what is happening across your sales pipeline",

      paragraphs: [
        "A developer's sales operation needs more than a list of enquiries. Brosavo helps teams track opportunities through defined sales stages and understand where prospects are progressing, waiting or requiring attention.",

        "Reporting and analytics provide a centralized view of pipeline activity and team performance, helping sales leaders identify where action may be needed.",
      ],

      bullets: [
        "Pipeline visibility",
        "Conversion tracking",
        "Team activity",
        "Sales reporting",
      ],
    },

    {
      title: "Report by holding, subsidiary, project, and unit",

      paragraphs: [
        "Property developers and constructor groups often need a hierarchy: holding company, subsidiary or brand, project, then unit. Sales pipelines can differ by brand or channel while leadership still needs aggregated reporting at each level.",

        "Brosavo is built for project inventory and team sales operations. Use projects, unit inventory, ownership and pipeline reporting to keep that hierarchy visible without running a separate spreadsheet for each brand.",
      ],

      bullets: [
        "Project and unit inventory",
        "Pipelines by team or channel",
        "Aggregated sales reporting",
        "Permissions by role",
      ],
    },
  ],

  faqs: [
    {
      question: "Is Brosavo suitable for real estate developers?",

      answer:
        "Yes. Brosavo is designed to support developers and larger sales organizations managing leads, property inventory, customer relationships and sales pipelines.",
    },

    {
      question: "Can developers manage project property inventory?",

      answer:
        "Yes. Property inventory is a core Brosavo CRM capability and can be used to organize property information, availability and pricing within the sales workflow.",
    },

    {
      question: "Can Brosavo support multiple sales team members?",

      answer:
        "Yes. Brosavo provides team management capabilities including users, assignments, permissions and responsibilities.",
    },

    {
      question: "Can developers manage leads and sales opportunities?",

      answer:
        "Yes. Brosavo provides lead management and sales pipeline workflows that allow teams to capture enquiries, assign ownership, follow opportunities and track progress.",
    },

    {
      question: "Does Brosavo support WhatsApp?",

      answer:
        "Yes. WhatsApp notifications are included in Starter and WhatsApp API integration is available on Professional.",
    },

    {
      question: "Does Brosavo provide analytics for real estate sales teams?",

      answer:
        "Yes. Brosavo includes reporting and analytics capabilities for understanding leads, conversions, pipeline performance and team activity.",
    },

    {
      question:
        "Can Brosavo model holding, subsidiary, project and unit reporting?",

      answer:
        "Brosavo supports project-level inventory, unit availability, team pipelines and aggregated reporting. Constructor groups that sell through multiple brands or channels can keep those pipelines separate while reviewing activity at the project and organization level.",
    },
  ],
};

/* ============================================================
   METADATA
============================================================ */

export const metadata: Metadata = {
  title: config.title,

  description: config.description,

  alternates: {
    canonical: `${SITE_URL}/real-estate-crm-for-developers`,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: config.title,
    description: config.description,
    url: `${SITE_URL}/real-estate-crm-for-developers`,
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

  url: `${SITE_URL}/real-estate-crm-for-developers`,

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

/* ============================================================
   PAGE
============================================================ */

export default function Page() {
  return (
    <main>
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
              {config.primaryKeywords.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border/70 bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/20 hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)]"
                >
                  <span
                    aria-hidden="true"
                    className="text-accent-blue"
                  >
                    ✦
                  </span>

                  <h2 className="mt-3 text-sm font-semibold text-foreground">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MAIN CONTENT
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

              {/* ======================================================
                  BULLETS
              ====================================================== */}

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

              {section.link ? (
                <div className="mt-8">
                  <Link
                    href={section.link.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent-blue"
                  >
                    {section.link.label}

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              ) : null}
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
                Build a better real estate sales operation.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                Explore the complete Brosavo Real Estate CRM for project
                inventory, lead management, sales pipelines, WhatsApp
                workflows, analytics and team management.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/real-estate-crm"
                  className="rounded-full bg-foreground px-6 py-3.5 text-center text-sm font-medium text-background transition hover:-translate-y-0.5"
                >
                  View CRM for every real estate team
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-border/70 px-6 py-3.5 text-center text-sm font-medium transition hover:-translate-y-0.5"
                >
                  Talk to Brosavo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}