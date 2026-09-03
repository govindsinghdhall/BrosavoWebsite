import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/real-estate-sales-crm";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE = "Real Estate Sales CRM Software | BROSAVO";

const PAGE_DESCRIPTION =
  "BROSAVO Real Estate CRM helps property sales teams manage leads, property requirements, follow-ups and sales pipelines from enquiry to closing.";

const CRM_URL = "https://crm.brosavo.com";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is a real estate sales CRM?",
    answer:
      "A real estate sales CRM is software designed to help property sales teams manage enquiries, customers, property requirements, follow-ups and sales opportunities in one workflow. BROSAVO connects these activities so teams can move an opportunity from initial enquiry through qualification, property matching, follow-up and closing.",
  },
  {
    question: "How does a property sales CRM help real estate teams?",
    answer:
      "A property sales CRM gives agents and sales teams a structured place to manage leads, customer requirements, property information, follow-ups and sales pipeline stages. BROSAVO helps keep these activities connected so salespeople can see what needs attention and what should happen next.",
  },
  {
    question: "Does BROSAVO include a real estate sales pipeline?",
    answer:
      "Yes. Sales pipeline management is a core BROSAVO Real Estate CRM capability. Teams can organize opportunities by stage, track ownership and follow-up activity, and maintain visibility into opportunities as they progress through the sales process.",
  },
  {
    question: "Can BROSAVO manage property sales opportunities?",
    answer:
      "Yes. BROSAVO connects customer requirements, property inventory, follow-ups and sales opportunities. This gives real estate teams a structured workflow for managing property enquiries and progressing qualified opportunities toward a sale.",
  },
  {
    question: "Can BROSAVO match properties to customer requirements?",
    answer:
      "Yes. BROSAVO is designed to connect customer requirements with relevant property inventory. Agents can use requirements such as property type, location, budget and other preferences to identify suitable listings and continue the sales workflow.",
  },
  {
    question: "Can real estate agents track sales follow-ups in BROSAVO?",
    answer:
      "Yes. BROSAVO helps agents organize follow-up activity against leads and sales opportunities. Teams can keep track of customer conversations, next actions and pipeline progress so important property enquiries are less likely to be forgotten.",
  },
  {
    question: "Is BROSAVO suitable for real estate brokers and agencies?",
    answer:
      "Yes. BROSAVO supports individual agents as well as brokers, agencies and larger real estate teams. The CRM brings lead management, property inventory, property matching, sales pipelines, follow-ups and reporting into a connected workflow.",
  },
  {
    question: "How is BROSAVO different from a generic CRM?",
    answer:
      "BROSAVO Real Estate CRM is designed around real estate workflows where customer requirements and property inventory need to work together. Instead of managing only generic customer records, teams can connect enquiries, properties, follow-ups and sales opportunities in one real estate-focused workflow.",
  },
  {
    question: "Does BROSAVO offer a free trial?",
    answer:
      "Yes. BROSAVO offers a 14-day free trial so teams can evaluate the CRM workflow before choosing a paid plan.",
  },
];

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BROSAVO Real Estate CRM",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  url: PAGE_URL,
  description: PAGE_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "BROSAVO Technologies",
    url: SITE_URL,
  },
  manufacturer: {
    "@type": "Organization",
    name: "BROSAVO Technologies",
    url: SITE_URL,
  },
  featureList: [
    "Real Estate Sales CRM",
    "Lead Management",
    "Property Inventory",
    "Property Matching",
    "Sales Pipeline",
    "Follow-Up Management",
    "WhatsApp Integration",
    "Website Lead Capture",
    "Reports and Analytics",
    "Team Management",
    "Mobile CRM",
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  isPartOf: {
    "@type": "WebSite",
    name: "BROSAVO",
    url: SITE_URL,
  },
  about: {
    "@type": "SoftwareApplication",
    name: "BROSAVO Real Estate CRM",
    url: SITE_URL + "/real-estate-crm",
  },
};

const breadcrumbSchema = {
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
      item: `${SITE_URL}/real-estate-crm`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Real Estate Sales CRM",
      item: PAGE_URL,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  keywords: [
    "real estate sales CRM",
    "property sales CRM",
    "real estate sales CRM software",
    "real estate sales software",
    "property sales management software",
    "real estate sales pipeline",
    "real estate broker sales CRM",
    "BROSAVO Real Estate CRM",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "BROSAVO",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/REAL ESTATE CRM DASHBOARD HERO.png`,
        alt: "BROSAVO Real Estate CRM dashboard",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/images/REAL ESTATE CRM DASHBOARD HERO.png`],
  },
};

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border/50 py-16 sm:py-20 lg:py-24">
      <div className="container-wide px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          {eyebrow ? (
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">
              {eyebrow}
            </p>
          ) : null}

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            {title}
          </h2>

          <div className="mt-6">{children}</div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl border border-border/70 bg-background p-6">
      <h3 className="text-lg font-semibold tracking-[-0.02em]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
    </article>
  );
}

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
          __html: JSON.stringify(webPageSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="container-wide px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex rounded-full border border-accent-blue/20 bg-accent-blue/5 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-accent-blue">
                Real Estate Sales CRM
              </span>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Real Estate Sales CRM for Managing Property Sales from Lead to
                Close
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                BROSAVO Real Estate CRM helps agents, brokers, agencies and
                sales teams connect enquiries, customer requirements, property
                inventory, follow-ups and sales opportunities in one workflow.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={CRM_URL}
                  className="rounded-full bg-foreground px-6 py-3.5 text-center text-sm font-medium text-background transition hover:-translate-y-0.5"
                >
                  Start Free 14-Day Trial
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-border/70 bg-background px-6 py-3.5 text-center text-sm font-medium transition hover:-translate-y-0.5"
                >
                  Book a Demo
                </Link>
              </div>

              <p className="mt-5 text-xs leading-6 text-muted">
                Built by BROSAVO Technologies, a global technology company
                developing software products, AI solutions, SaaS platforms and
                digital business solutions.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-surface p-3 shadow-sm">
              <Image
                src="/images/REAL ESTATE CRM DASHBOARD HERO.png"
                alt="BROSAVO Real Estate CRM dashboard for managing leads, properties and sales"
                width={1400}
                height={900}
                className="h-auto w-full rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <Section
        eyebrow="Sales workflow"
        title="Manage the complete real estate sales workflow"
      >
        <p className="max-w-4xl text-base leading-8 text-muted">
          Property sales involve more than storing customer records. Sales
          teams need to understand the enquiry, qualify the requirement,
          identify relevant properties, follow up consistently and move the
          opportunity through the sales process. BROSAVO connects these
          activities so the team can work from a clearer view of the
          opportunity.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Capture", "Bring website and other enquiries into the CRM workflow."],
            ["02", "Qualify", "Understand customer requirements, preferences and intent."],
            ["03", "Match & Follow Up", "Connect suitable properties with ongoing customer follow-ups."],
            ["04", "Close", "Move qualified opportunities through the sales pipeline toward closing."],
          ].map(([number, title, description]) => (
            <article
              key={number}
              className="rounded-2xl border border-border/70 bg-background p-6"
            >
              <span className="text-xs font-mono text-accent-blue">
                {number}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* PIPELINE */}
      <Section
        eyebrow="Pipeline management"
        title="Real estate sales pipeline from enquiry to closing"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-base leading-8 text-muted">
              A structured sales pipeline helps teams understand which
              opportunities are progressing, which require attention and what
              the next action should be. BROSAVO brings sales opportunities
              into a central workflow so agents and managers can maintain
              visibility across active property sales.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Pipeline stages",
                "Opportunity ownership",
                "Next actions",
                "Follow-up activity",
                "Sales visibility",
                "Conversion tracking",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-border/60 bg-surface px-4 py-3 text-sm text-muted"
                >
                  <span className="mr-2 text-accent-blue">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border/70 bg-surface p-3">
            <Image
              src="/images/REAL ESTATE CRM DASHBOARD HERO.png"
              alt="Real estate CRM sales pipeline and opportunity management"
              width={1400}
              height={900}
              className="h-auto w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* PROPERTY + CUSTOMER */}
      <Section
        eyebrow="Property sales"
        title="Connect customer requirements with property inventory"
      >
        <p className="max-w-4xl text-base leading-8 text-muted">
          Property sales depend on understanding both sides of the
          conversation: what the customer is looking for and which properties
          are available. BROSAVO connects customer requirements with property
          inventory so agents can identify relevant listings and continue the
          sales process with better context.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <FeatureCard
            title="Customer requirements"
            description="Organize requirements such as property type, location, budget and other preferences."
          />

          <FeatureCard
            title="Property inventory"
            description="Maintain property information alongside customer and sales activity."
          />

          <FeatureCard
            title="Property matching"
            description="Identify suitable listings based on customer requirements and continue the opportunity workflow."
          />
        </div>
      </Section>

      {/* FOLLOW UPS */}
      <Section
        eyebrow="Follow-up management"
        title="Keep property sales follow-ups moving"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <FeatureCard
            title="Next actions"
            description="Keep track of what needs to happen next on active leads and sales opportunities."
          />

          <FeatureCard
            title="Customer context"
            description="Keep relevant customer information and sales activity connected to the opportunity."
          />

          <FeatureCard
            title="Opportunity ownership"
            description="Maintain visibility into who is responsible for progressing each opportunity."
          />

          <FeatureCard
            title="Pipeline progress"
            description="See how active opportunities are progressing through the sales workflow."
          />
        </div>
      </Section>

      {/* TEAM */}
      <Section
        eyebrow="For sales teams"
        title="Built for real estate sales teams"
      >
        <p className="max-w-4xl text-base leading-8 text-muted">
          BROSAVO can support individual agents as well as brokers, agencies
          and developers. Teams can organize leads, assign ownership, manage
          property information, track opportunities and maintain follow-up
          activity through a shared CRM workflow.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="Agents"
            description="Manage leads, requirements, properties and follow-ups from one place."
          />

          <FeatureCard
            title="Brokers"
            description="Maintain visibility across sales activity, opportunities and team workflows."
          />

          <FeatureCard
            title="Agencies"
            description="Connect lead management, property inventory and sales processes."
          />

          <FeatureCard
            title="Developers"
            description="Organize property enquiries and sales opportunities across larger operations."
          />
        </div>
      </Section>

      {/* SALES ANALYTICS */}
      <Section
        eyebrow="Sales analytics"
        title="Understand what is happening across your sales pipeline"
      >
        <p className="max-w-4xl text-base leading-8 text-muted">
          Sales visibility becomes more useful when teams can see opportunity
          status, follow-up activity and pipeline progress together. BROSAVO
          provides reporting and analytics capabilities that help teams review
          sales activity and understand where opportunities need attention.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <FeatureCard
            title="Pipeline visibility"
            description="Understand the current state of active sales opportunities."
          />

          <FeatureCard
            title="Opportunity activity"
            description="Review follow-up and sales activity associated with opportunities."
          />

          <FeatureCard
            title="Sales reporting"
            description="Use reporting and analytics to review sales workflow and activity."
          />
        </div>
      </Section>

      {/* OTHER CAPABILITIES */}
      <Section
        eyebrow="Connected CRM"
        title="More than a property sales pipeline"
      >
        <p className="max-w-4xl text-base leading-8 text-muted">
          Property sales work better when lead management, communication and
          sales activity are connected. BROSAVO Real Estate CRM brings
          multiple parts of the real estate workflow together rather than
          treating sales as a standalone spreadsheet.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Lead Management"
            description="Capture and organize real estate enquiries and customer information."
          />

          <FeatureCard
            title="WhatsApp"
            description="Keep supported WhatsApp communication capabilities closer to the CRM workflow."
          />

          <FeatureCard
            title="Website Lead Capture"
            description="Bring enquiries generated through your real estate website into the CRM workflow."
          />

          <FeatureCard
            title="Team Management"
            description="Support shared sales workflows for agents and growing real estate teams."
          />

          <FeatureCard
            title="Mobile CRM"
            description="Access CRM workflows while agents are working with prospects and visiting properties."
          />

          <FeatureCard
            title="Reports & Analytics"
            description="Review sales activity and pipeline information to maintain visibility."
          />
        </div>
      </Section>

      {/* WHAT IS SALES SOFTWARE */}
      <Section
        eyebrow="Learn"
        title="What is real estate sales software?"
      >
        <div className="space-y-5 text-base leading-8 text-muted">
          <p>
            Real estate sales software helps property businesses manage the
            activities involved in converting enquiries into sales. Unlike a
            basic contact database, a real estate sales platform can connect
            customer requirements, property inventory, follow-ups and sales
            opportunities.
          </p>

          <p>
            A useful workflow typically starts with an enquiry, continues
            through qualification and property matching, and then moves into
            follow-ups, site visits, negotiations and closing. Keeping these
            activities connected gives sales teams better context around each
            opportunity.
          </p>

          <p>
            BROSAVO Real Estate CRM is designed around this type of workflow,
            combining lead management, property inventory, property matching
            and sales pipeline capabilities in one platform.
          </p>
        </div>
      </Section>

      {/* INTERNAL LINKS */}
      <Section eyebrow="Explore BROSAVO" title="Explore the complete CRM platform">
        <p className="max-w-4xl text-base leading-8 text-muted">
          Real estate sales is one part of the broader BROSAVO CRM workflow.
          Explore the product areas most relevant to your team.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/real-estate-crm"
            className="rounded-xl border border-border/70 bg-background p-5 text-sm font-medium transition hover:-translate-y-0.5"
          >
            Complete Real Estate CRM
          </Link>

          <Link
            href="/real-estate-crm-for-agents"
            className="rounded-xl border border-border/70 bg-background p-5 text-sm font-medium transition hover:-translate-y-0.5"
          >
            CRM for Real Estate Agents
          </Link>

          <Link
            href="/real-estate-crm-for-brokers"
            className="rounded-xl border border-border/70 bg-background p-5 text-sm font-medium transition hover:-translate-y-0.5"
          >
            Real Estate CRM for Brokers
          </Link>

          <Link
            href="/real-estate-crm-for-brokerages"
            className="rounded-xl border border-border/70 bg-background p-5 text-sm font-medium transition hover:-translate-y-0.5"
          >
            CRM for Real Estate Brokerages
          </Link>

          <Link
            href="/real-estate-lead-management"
            className="rounded-xl border border-border/70 bg-background p-5 text-sm font-medium transition hover:-translate-y-0.5"
          >
            Real Estate Lead Management
          </Link>

          <Link
            href="/whatsapp-crm-for-real-estate"
            className="rounded-xl border border-border/70 bg-background p-5 text-sm font-medium transition hover:-translate-y-0.5"
          >
            WhatsApp CRM for Real Estate
          </Link>

          <Link
            href="/property-management-crm"
            className="rounded-xl border border-border/70 bg-background p-5 text-sm font-medium transition hover:-translate-y-0.5"
          >
            Property Management CRM
          </Link>

          <Link
            href="/real-estate-crm-for-realtors"
            className="rounded-xl border border-border/70 bg-background p-5 text-sm font-medium transition hover:-translate-y-0.5"
          >
            CRM for Realtors
          </Link>

          <Link
            href="/real-estate-crm-pricing"
            className="rounded-xl border border-border/70 bg-background p-5 text-sm font-medium transition hover:-translate-y-0.5"
          >
            Real Estate CRM Pricing
          </Link>
        </div>
      </Section>

      {/* FAQ */}
      <section className="border-t border-border/50 bg-surface py-16 sm:py-20 lg:py-24">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Real estate sales CRM questions
            </h2>

            <div className="mt-8 space-y-3">
              {faqs.map((faq) => (
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

      {/* FINAL CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-5xl rounded-3xl border border-border/70 bg-background p-8 sm:p-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">
              BROSAVO Real Estate CRM
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Turn property enquiries into a clearer sales workflow.
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
              Connect leads, customer requirements, property inventory,
              follow-ups and sales opportunities with BROSAVO Real Estate
              CRM.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={CRM_URL}
                className="rounded-full bg-foreground px-6 py-3.5 text-center text-sm font-medium text-background transition hover:-translate-y-0.5"
              >
                Start Free 14-Day Trial
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-border/70 px-6 py-3.5 text-center text-sm font-medium transition hover:-translate-y-0.5"
              >
                Talk to BROSAVO
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}