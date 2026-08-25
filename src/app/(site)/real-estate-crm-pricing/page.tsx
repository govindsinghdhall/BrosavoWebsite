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
  title: "Real Estate CRM Pricing & Plans | Brosavo",
  description:
    "See Brosavo real estate CRM pricing for agents, teams and growing brokerages, including Starter, Professional and Enterprise options.",
  eyebrow: "Real Estate CRM Pricing",
  heading: "Real estate CRM pricing that scales with your business.",
  intro:
    "Brosavo offers real estate CRM plans for individual agents, growing teams, brokerages and larger organizations. Start small and expand as your sales operation grows.",
  audience: "",
  primaryKeywords: [
    // Core pricing
    "real estate CRM pricing",
    "real estate CRM cost",
    "real estate CRM price",
    "real estate CRM software pricing",
    "real estate CRM software cost",
    "real estate CRM plans",
    "real estate CRM packages",
    "real estate CRM subscription",
    "real estate CRM pricing plans",

    // BROSAVO plans
    "₹999 Starter Plan",
    "₹2,499 Professional Plan",
    "Brosavo pricing",
    "Brosavo CRM pricing",
    "Brosavo Real Estate CRM pricing",
    "Brosavo Starter Plan",
    "Brosavo Professional Plan",
    "Brosavo Enterprise CRM",

    // Affordable / small business
    "affordable real estate CRM",
    "cheap real estate CRM",
    "low cost real estate CRM",
    "affordable CRM for real estate agents",
    "affordable CRM for realtors",
    "real estate CRM for small business",
    "real estate CRM for small teams",

    // Free trial / free CRM
    "real estate CRM free trial",
    "real estate CRM 14 day free trial",
    "real estate CRM free trial India",
    "14-Day Free Trial CRM",
    "free CRM for real estate agents",

    // WhatsApp CRM
    "WhatsApp CRM pricing",
    "WhatsApp CRM for real estate pricing",
    "real estate WhatsApp CRM pricing",
    "WhatsApp CRM software cost",

    // Website + CRM
    "real estate website and CRM",
    "real estate website CRM package",
    "real estate website with CRM",
    "real estate website and CRM pricing",
    "real estate website CRM software",

    // Enterprise
    "Enterprise CRM",
    "enterprise real estate CRM",
    "enterprise real estate CRM pricing",
    "real estate CRM for large teams",
    "real estate CRM enterprise pricing",

    // Feature/value pricing
    "real estate CRM with WhatsApp",
    "real estate CRM with website",
    "real estate CRM with lead management",
    "real estate CRM with property management",
    "real estate CRM with sales pipeline",
    "real estate CRM pricing comparison",
  ],
  sections: [
    {
      title: "Starter plan",
      paragraphs: [
        "The Starter plan is designed for individual agents and smaller real estate businesses that want a professional website and centralized CRM without a large software commitment.",
        "It includes professional website capabilities, smart CRM functionality, lead management, WhatsApp notifications and email support.",
      ],
      bullets: [
        "₹999 per month",
        "Professional website",
        "Smart CRM",
        "Unlimited lead management",
        "WhatsApp notifications",
      ],
    },
    {
      title: "Professional plan",
      paragraphs: [
        "The Professional plan is designed for growing brokerages and teams that need collaboration, automation, analytics and deeper communication capabilities.",
      ],
      bullets: [
        "₹2,499 per month",
        "Advanced website suite",
        "Team collaboration",
        "WhatsApp API integration",
        "Marketing automation",
        "Advanced analytics",
        "Call tracking",
      ],
    },
    {
      title: "Enterprise",
      paragraphs: [
        "Enterprise is intended for multi-branch agencies, developers and larger organizations that need customized infrastructure, integrations, permissions and support.",
      ],
      bullets: [
        "Unlimited users",
        "Unlimited websites",
        "Unlimited branches",
        "API access",
        "Custom integrations",
        "White label options",
        "SSO",
        "Data migration",
      ],
    },
  ],
  faqs: [
    {
      question: "How much does Brosavo Real Estate CRM cost?",
      answer:
        "Brosavo Starter costs ₹999 per month, Professional costs ₹2,499 per month and Enterprise pricing is customized.",
    },
    {
      question: "Does Brosavo have a free trial?",
      answer: "Yes. Starter and Professional include a 14-day free trial.",
    },
    {
      question: "Is the mobile app included?",
      answer: "The Brosavo mobile app is available as an add-on.",
    },
  ],
};

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: {
    canonical: `${SITE_URL}/real-estate-crm-pricing`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: config.title,
    description: config.description,
    url: `${SITE_URL}/real-estate-crm-pricing`,
    type: "website",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Brosavo Real Estate CRM",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/real-estate-crm-pricing`,
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
    <main>
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
              Explore the complete Brosavo Real Estate CRM for lead management,
              property inventory, sales pipelines, WhatsApp workflows, analytics
              and team management.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/real-estate-crm"
                className="rounded-full bg-foreground px-6 py-3.5 text-center text-sm font-medium text-background"
              >
                Review Real Estate CRM features
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
    </main>
  );
}
