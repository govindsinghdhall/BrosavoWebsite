import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/blog/JsonLd";

import {
  COMPANY_DESCRIPTION,
  LEGAL_NAME,
  PRODUCT_NAME,
  PRODUCT_ONE_LINER,
  SITE_NAME,
  SITE_URL,
  ORGANIZATION_ID,
} from "@/lib/site";

import { REAL_ESTATE_CRM_LOCATIONS } from "@/data/realEstateCrmLocations";
import { absoluteUrl } from "@/lib/blog-seo";
import { REAL_ESTATE_CRM_FAQS } from "./faqs";

import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import LeadManagement from "./components/LeadManagement";
import PropertyInventory from "./components/PropertyInventory";
import PropertyMatching from "./components/PropertyMatching";
import SalesPipeline from "./components/SalesPipeline";
import WhatsAppCRM from "./components/WhatsAppCRM";
import GrowthTools from "./components/GrowthTools";
import TeamManagement from "./components/TeamManagement";
import MobileCRM from "./components/MobileCRM";
import PropertyPortals from "./components/PropertyPortals";
import WhoItsFor from "./components/WhoItsFor";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";

const PAGE_PATH = "/real-estate-crm";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "Real Estate CRM Software | BROSAVO Real Estate CRM";

const PAGE_DESCRIPTION =
  "BROSAVO Real Estate CRM is real estate CRM software built by BROSAVO Technologies, a global technology company. Manage leads, property inventory, sales pipelines, WhatsApp follow-ups and website enquiries in one platform. Start a 14-day free trial.";

export const metadata: Metadata = {
  title: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  keywords: [
    "real estate CRM",
    "real estate CRM software",
    "real estate CRM platform",
    "best real estate CRM",
    "best CRM for real estate",
    "best CRM software for real estate",
    "CRM for real estate agents",
    "real estate sales CRM",
    "real estate lead management",
    "WhatsApp CRM for real estate",
    "property management CRM",
    "BROSAVO Real Estate CRM",
    "BROSAVO Technologies",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/REAL ESTATE CRM DASHBOARD HERO.png"),
        alt: "BROSAVO Real Estate CRM dashboard showing leads, properties and sales pipeline",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [absoluteUrl("/images/REAL ESTATE CRM DASHBOARD HERO.png")],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: LEGAL_NAME,
    alternateName: [SITE_NAME, PRODUCT_NAME],
    url: SITE_URL,
    description: COMPANY_DESCRIPTION,
  },

  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",

    name: PRODUCT_NAME,

    applicationCategory: "BusinessApplication",

    operatingSystem: "Web, iOS, Android",

    description: PRODUCT_ONE_LINER,

    url: PAGE_URL,

    image: absoluteUrl("/images/REAL ESTATE CRM DASHBOARD HERO.png"),

    featureList: [
      "Lead Management",
      "Property Inventory",
      "Property Matching",
      "Sales Pipeline",
      "WhatsApp Integration",
      "Website Lead Capture",
      "Reports and Analytics",
      "Team Management",
      "Mobile CRM",
    ],

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
      "@id": ORGANIZATION_ID,
      name: LEGAL_NAME,
      url: SITE_URL,
    },

    manufacturer: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: LEGAL_NAME,
    },
  },

  {
    "@context": "https://schema.org",
    "@type": "WebPage",

    name: "Real Estate CRM Software",

    description: PAGE_DESCRIPTION,

    url: PAGE_URL,

    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },

    about: {
      "@type": "SoftwareApplication",
      name: PRODUCT_NAME,
      url: PAGE_URL,
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

  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: REAL_ESTATE_CRM_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

/**
 * Full viewport section wrapper.
 *
 * Every major product section gets:
 * - Full viewport width
 * - At least one viewport of height
 * - Vertical centering
 * - Natural overflow when content needs more space
 *
 * `100svh` is used instead of `100vh` for better mobile browser behavior.
 */
function FullScreenSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative flex min-h-[100svh] w-full items-center ${className}`}
    >
      {children}
    </div>
  );
}

export default function RealEstateCrmPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <article aria-labelledby="real-estate-crm-heading">

      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}

      <FullScreenSection className="min-h-[100svh]">
        <div className="w-full">
          <Hero />
        </div>
      </FullScreenSection>

      {/* ================================================================ */}
      {/* CORE CRM CAPABILITIES                                             */}
      {/* ================================================================ */}

      <FullScreenSection>
        <div className="w-full">
          <Capabilities />
        </div>
      </FullScreenSection>

      {/* ================================================================ */}
      {/* LEAD MANAGEMENT                                                   */}
      {/* ================================================================ */}

      <FullScreenSection>
        <div className="w-full">
          <LeadManagement />
        </div>
      </FullScreenSection>

      {/* ================================================================ */}
      {/* PROPERTY INVENTORY                                                */}
      {/* ================================================================ */}

      <FullScreenSection>
        <div className="w-full">
          <PropertyInventory />
        </div>
      </FullScreenSection>

      {/* ================================================================ */}
      {/* PROPERTY MATCHING                                                 */}
      {/* ================================================================ */}

      <FullScreenSection>
        <div className="w-full">
          <PropertyMatching />
        </div>
      </FullScreenSection>

      {/* ================================================================ */}
      {/* SALES PIPELINE                                                    */}
      {/* ================================================================ */}

      <FullScreenSection>
        <div className="w-full">
          <SalesPipeline />
        </div>
      </FullScreenSection>

      {/* ================================================================ */}
      {/* WHATSAPP CRM                                                      */}
      {/* ================================================================ */}

      <FullScreenSection>
        <div className="w-full">
          <WhatsAppCRM />
        </div>
      </FullScreenSection>

      {/* ================================================================ */}
      {/* WEBSITE / AI / ANALYTICS                                          */}
      {/* ================================================================ */}

      <FullScreenSection>
        <div className="w-full">
          <GrowthTools />
        </div>
      </FullScreenSection>

      {/* ================================================================ */}
      {/* TEAM MANAGEMENT                                                   */}
      {/* ================================================================ */}

      <FullScreenSection>
        <div className="w-full">
          <TeamManagement />
        </div>
      </FullScreenSection>

      {/* ================================================================ */}
      {/* MOBILE CRM                                                        */}
      {/* ================================================================ */}

      <FullScreenSection>
        <div className="w-full">
          <MobileCRM />
        </div>
      </FullScreenSection>

      {/* ================================================================ */}
      {/* PROPERTY PORTALS                                                  */}
      {/* ================================================================ */}

      <FullScreenSection>
        <div className="w-full">
          <PropertyPortals />
        </div>
      </FullScreenSection>

      {/* ================================================================ */}
      {/* WHO IT'S FOR                                                      */}
      {/* ================================================================ */}

      <FullScreenSection>
        <div className="w-full">
          <WhoItsFor />
        </div>
      </FullScreenSection>

      {/* ================================================================ */}
      {/* HOW IT WORKS                                                      */}
      {/* ================================================================ */}

      <FullScreenSection>
        <div className="w-full">
          <HowItWorks />
        </div>
      </FullScreenSection>

      {/* ================================================================ */}
      {/* PRICING                                                           */}
      {/* ================================================================ */}

      <FullScreenSection>
        <div className="w-full">
          <Pricing />
        </div>
      </FullScreenSection>

      {/* ================================================================ */}
      {/* SEO CONTENT + INTERNAL LINKING                                   */}
      {/* ================================================================ */}

      <section
        aria-labelledby="real-estate-crm-markets-heading"
        className="relative py-16 sm:py-20 lg:py-24"
      >
        <div className="container-wide">
          <div className="mx-auto max-w-5xl">

            {/* ============================================================
                SEO INTRO
            ============================================================ */}

            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full border border-blue-500/15 bg-blue-500/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-accent-blue">
                BROSAVO Real Estate CRM
              </span>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                Real estate CRM software
                <br />
                <span className="text-gradient-accent">
                  from a global technology company.
                </span>
              </h2>

              <div className="mt-7 space-y-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
                <p>
                  <strong className="font-medium text-foreground">
                    BROSAVO Technologies
                  </strong>{" "}
                  is a global technology company that builds websites, custom
                  software, AI-powered applications and industry-specific
                  business platforms.{" "}
                  <strong className="font-medium text-foreground">
                    BROSAVO Real Estate CRM
                  </strong>{" "}
                  is one of those products — a real estate CRM platform for
                  agents, brokers, agencies, property consultants and
                  developers who need lead management, property inventory,
                  sales pipelines, WhatsApp workflows and reporting in one
                  connected system.
                </p>

                <p>
                  Teams evaluating the best real estate CRM or the best CRM
                  software for real estate typically need the same core
                  workflow: capture enquiries, qualify prospects, match
                  customers with listings, follow up consistently and track
                  what converts. BROSAVO Real Estate CRM is built around that
                  sales process — from website lead capture and WhatsApp
                  conversations through property matching, pipeline stages
                  and team accountability.
                </p>

                <p>
                  Whether your team operates in India, Canada, the United
                  States, the United Kingdom, Australia or other international
                  markets, the platform gives you a centralized workflow for
                  managing real estate sales and customer relationships instead
                  of relying on spreadsheets and disconnected tools.
                </p>
              </div>
            </div>

            {/* ============================================================
                CORE CAPABILITIES
            ============================================================ */}

            <div className="mt-9">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted/60">
                What the platform includes
              </div>

              <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Lead management and qualification",
                  "Property inventory and listings",
                  "Property matching by requirements",
                  "Sales pipeline and deal tracking",
                  "WhatsApp integration for follow-ups",
                  "Website lead capture",
                  "Reports and analytics",
                  "Team management and permissions",
                  "Mobile CRM for field sales",
                ].map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-2 rounded-xl border border-border/60 bg-surface px-3.5 py-2.5 text-[12px] text-muted"
                  >
                    <span className="mt-0.5 text-accent-blue">✓</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            {/* ============================================================
                LOCATION HUB
            ============================================================ */}

            <div className="mt-12 border-t border-border/60 pt-9">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted/60">
                    Explore by market
                  </div>

                  <h2
                    id="real-estate-crm-markets-heading"
                    className="mt-2 text-xl font-semibold tracking-[-0.025em] sm:text-2xl"
                  >
                    Real estate CRM by country and city
                  </h2>
                </div>

                <p className="max-w-md text-xs leading-5 text-muted sm:text-right">
                  Explore Brosavo real estate CRM software by country and
                  city. Each market page covers how agents use lead
                  management, property inventory and local sales workflows
                  in that region.
                </p>
              </div>

              {/* ==========================================================
                  COUNTRY GRID
              ========================================================== */}

              <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {REAL_ESTATE_CRM_LOCATIONS.map((country) => {
                  const visibleCities = country.cities.slice(0, 6);

                  return (
                    <article
                      key={country.slug}
                      className="group rounded-2xl border border-border/70 bg-background p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent-blue/25 hover:shadow-[0_16px_40px_rgba(0,0,0,0.05)]"
                    >
                      {/* Country link */}

                      <Link
                        href={`/real-estate-crm/${country.slug}`}
                        className="flex items-center justify-between gap-4"
                      >
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-accent-blue">
                            Market
                          </div>

                          <p className="mt-1 text-base font-semibold">
                            Real Estate CRM in {country.name}
                          </p>
                        </div>

                        <span className="text-sm text-muted transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>

                      {/* City links */}

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {visibleCities.map((city) => (
                          <Link
                            key={city.slug}
                            href={`/real-estate-crm/${country.slug}/${city.slug}`}
                            className="rounded-full border border-border/60 bg-surface px-2.5 py-1 text-[10px] text-muted transition hover:border-accent-blue/25 hover:text-accent-blue"
                          >
                            {city.name} real estate CRM
                          </Link>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* ============================================================
                MAIN PRODUCT INTERNAL LINK
            ============================================================ */}

            <nav
              aria-label="Related real estate CRM resources"
              className="mt-8 rounded-2xl border border-accent-blue/10 bg-accent-blue/[0.03] px-5 py-5"
            >
              <p className="text-sm font-semibold">
                Related real estate CRM resources
              </p>
              <p className="mt-1 text-xs leading-5 text-muted">
                Continue with pricing, agent workflows, lead management and
                comparison guides. Each page links back to this Real Estate
                CRM overview.
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                <li>
                  <Link
                    href="/real-estate-crm-pricing"
                    className="text-[13px] font-medium text-accent-blue"
                  >
                    Real estate CRM pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/real-estate-crm-for-agents"
                    className="text-[13px] font-medium text-accent-blue"
                  >
                    CRM for real estate agents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/real-estate-crm-for-realtors"
                    className="text-[13px] font-medium text-accent-blue"
                  >
                    CRM for realtors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/real-estate-crm-for-brokers"
                    className="text-[13px] font-medium text-accent-blue"
                  >
                    CRM for real estate brokers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/real-estate-crm-for-brokerages"
                    className="text-[13px] font-medium text-accent-blue"
                  >
                    CRM for real estate brokerages
                  </Link>
                </li>
                <li>
                  <Link
                    href="/real-estate-crm-for-developers"
                    className="text-[13px] font-medium text-accent-blue"
                  >
                    CRM for property developers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/real-estate-sales-crm"
                    className="text-[13px] font-medium text-accent-blue"
                  >
                    Real estate sales CRM
                  </Link>
                </li>
                <li>
                  <Link
                    href="/real-estate-lead-management"
                    className="text-[13px] font-medium text-accent-blue"
                  >
                    Real estate lead management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/whatsapp-crm-for-real-estate"
                    className="text-[13px] font-medium text-accent-blue"
                  >
                    WhatsApp CRM for real estate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/property-management-crm"
                    className="text-[13px] font-medium text-accent-blue"
                  >
                    Property management CRM
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FAQ                                                              */}
      {/* ================================================================ */}

      <FullScreenSection>
        <div className="w-full">
          <FAQ />
        </div>
      </FullScreenSection>

      {/* ================================================================ */}
      {/* FINAL CTA                                                         */}
      {/* ================================================================ */}

      <section className="relative flex min-h-[80svh] w-full items-center">
        <div className="w-full">
          <FinalCTA />
        </div>
      </section>
    </article>
    </>
  );
}