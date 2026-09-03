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
  audience: string;
  primaryKeywords: string[];
  sections: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  faqs: FAQ[];
};

const config: PageConfig = {
  "title": "Real Estate Lead Management Software | Brosavo",
  "description": "Brosavo real estate lead management software helps agents and teams capture, qualify, assign, follow up and convert property enquiries.",
  "eyebrow": "Real Estate Lead Management",
  "heading": "Turn real estate enquiries into an organized sales pipeline.",
  "intro": "Capture every enquiry, understand the customer requirement, assign ownership and keep the next action visible with Brosavo real estate lead management.",
  "audience": "",
  "primaryKeywords": [
    "Lead Capture",
    "Lead Qualification",
    "Lead Assignment",
    "Lead Follow-Up",
    "Property Matching",
    "Conversion Tracking"
  ],
  "sections": [
    {
      "title": "Capture and organize every lead",
      "paragraphs": [
        "Bring website and connected-channel enquiries into a centralized workflow instead of tracking prospects across spreadsheets and disconnected conversations."
      ],
      "bullets": [
        "Website lead capture",
        "Lead records",
        "Lead status",
        "Ownership"
      ]
    },
    {
      "title": "Qualify prospects faster",
      "paragraphs": [
        "Keep customer requirements and property interests together so sales teams can understand the opportunity and identify relevant inventory."
      ],
      "bullets": [
        "Customer requirements",
        "Property interests",
        "Lead qualification",
        "Property matching"
      ]
    },
    {
      "title": "Keep follow-ups moving",
      "paragraphs": [
        "Tasks, reminders and structured pipeline stages help teams maintain consistent follow-up until the opportunity is converted."
      ],
      "bullets": [
        "Tasks",
        "Reminders",
        "Pipeline stages",
        "Conversion tracking"
      ]
    }
  ],
  "faqs": [
    {
      "question": "What is real estate lead management?",
      "answer": "Real estate lead management is the process of capturing, qualifying, assigning, following up with and converting property enquiries."
    },
    {
      "question": "Does Brosavo manage real estate leads?",
      "answer": "Yes. Lead management is a core Brosavo CRM capability."
    }
  ]
};

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: {
    canonical: `${SITE_URL}/real-estate-lead-management`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: config.title,
    description: config.description,
    url: `${SITE_URL}/real-estate-lead-management`,
    type: "website",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Brosavo Real Estate CRM",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/real-estate-lead-management`,
  description: config.description,
  provider: {
    "@type": "Organization",
    name: "Brosavo",
    url: SITE_URL,
  },
};

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

      <section className="py-14 sm:py-18">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {config.primaryKeywords.map((keyword) => (
                <div
                  key={keyword}
                  className="rounded-2xl border border-border/70 bg-background p-5"
                >
                  <span className="text-accent-blue">✦</span>
                  <h2 className="mt-3 text-sm font-semibold">{keyword}</h2>
                  <p className="mt-2 text-xs leading-5 text-muted">
                    A focused part of the Brosavo real estate sales workflow.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {config.sections.map((section) => (
        <section
          key={section.title}
          className="border-t border-border/50 py-16 sm:py-20"
        >
          <div className="container-wide px-6 lg:px-10">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
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
                      <span className="mr-2 text-accent-blue">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-border/50 bg-surface py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
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

      <section className="py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl rounded-3xl border border-border/70 bg-background p-8 sm:p-12">
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
                className="rounded-full bg-foreground px-6 py-3.5 text-center text-sm font-medium text-background"
              >
                Connect leads to Real Estate CRM
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-border/70 px-6 py-3.5 text-center text-sm font-medium"
              >
                Talk to Brosavo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
