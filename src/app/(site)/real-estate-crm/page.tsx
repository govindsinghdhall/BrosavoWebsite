import type { Metadata } from "next";

import { JsonLd } from "@/components/blog/JsonLd";

import {
  PRODUCT_NAME,
  PRODUCT_ONE_LINER,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

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
    <section
      className={`relative flex min-h-[100svh] w-full items-center ${className}`}
    >
      {children}
    </section>
  );
}

export default function RealEstateCrmPage() {
  return (
    <>
      {/* ================================================================ */}
      {/* SEO / STRUCTURED DATA                                            */}
      {/* ================================================================ */}

      <JsonLd data={jsonLd} />

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
      {/* SEO CONTENT                                                       */}
      {/* ================================================================ */}

      <section
        aria-labelledby="real-estate-crm-software-heading"
        className="relative py-16 sm:py-20 lg:py-24"
      >
        <div className="container-wide">
          <div className="mx-auto max-w-4xl">

            <span className="inline-flex items-center rounded-full border border-blue-500/15 bg-blue-500/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-accent-blue">
              Real Estate CRM Software
            </span>

            <h2
              id="real-estate-crm-software-heading"
              className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl"
            >
              A complete CRM for modern
              <br />
              <span className="text-gradient-accent">
                real estate businesses.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              <p>
                Brosavo is a real estate CRM software platform for agents,
                brokers, agencies, property consultants and developers. Manage
                leads, customers, property inventory, sales pipelines,
                follow-ups, websites, WhatsApp workflows and analytics from
                one connected platform.
              </p>

              <p>
                Whether your team operates in India, Canada, the United States,
                the United Kingdom, Australia or other international markets,
                Brosavo provides a centralized workflow for managing real estate
                sales and customer relationships.
              </p>

              <p>
                Instead of relying on spreadsheets and disconnected communication
                tools, your team can capture enquiries, qualify prospects,
                match customers with properties, follow opportunities and track
                conversions from one real estate sales platform.
              </p>
            </div>

            {/* ============================================================
          CORE TOPICS
      ============================================================ */}

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Real Estate CRM",
                "Real Estate CRM Software",
                "CRM for Real Estate Agents",
                "Real Estate Agent CRM",
                "CRM for Realtors",
                "Real Estate Lead Management",
                "Real Estate Sales CRM",
                "Property CRM",
                "Real Estate Follow-up Software",
                "Real Estate CRM Pricing",
                "WhatsApp CRM for Real Estate",
                "Real Estate Sales Pipeline",
                "Property Inventory Management",
                "Real Estate Customer Management",
              ].map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-border/60 bg-surface px-3 py-1.5 text-[11px] text-muted"
                >
                  {topic}
                </span>
              ))}
            </div>

            {/* ============================================================
          LOCATION COVERAGE
          Keep this as useful navigation, not a keyword dump.
      ============================================================ */}

            <div className="mt-10 border-t border-border/60 pt-8">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted/60">
                Real estate teams worldwide
              </div>

              <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {/* India */}

                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    India
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-muted">
                    Real estate CRM India · Real estate CRM Gurgaon ·
                    Real estate CRM Delhi · Real estate CRM Mumbai ·
                    Real estate CRM Bangalore · Real estate CRM Hyderabad ·
                    Real estate CRM Pune · Real estate CRM Chennai ·
                    Real estate CRM Noida · Real estate CRM Ahmedabad
                  </p>
                </div>

                {/* Canada */}

                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Canada
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-muted">
                    Real estate CRM Canada · Real estate CRM Toronto ·
                    Real estate CRM Vancouver · Real estate CRM Calgary ·
                    Real estate CRM Edmonton · Real estate CRM Montreal ·
                    Real estate CRM Ottawa · Real estate CRM Mississauga
                  </p>
                </div>

                {/* United States */}

                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    United States
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-muted">
                    Real estate CRM USA · Real estate CRM New York ·
                    Real estate CRM Los Angeles · Real estate CRM Miami ·
                    Real estate CRM Chicago · Real estate CRM Houston ·
                    Real estate CRM Dallas · Real estate CRM San Francisco
                  </p>
                </div>

                {/* United Kingdom */}

                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    United Kingdom
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-muted">
                    Real estate CRM UK · Real estate CRM London ·
                    Real estate CRM Manchester · Real estate CRM Birmingham ·
                    Real estate CRM Leeds · Real estate CRM Liverpool ·
                    Real estate CRM Bristol · Real estate CRM Edinburgh
                  </p>
                </div>

                {/* Australia */}

                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Australia
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-muted">
                    Real estate CRM Australia · Real estate CRM Sydney ·
                    Real estate CRM Melbourne · Real estate CRM Brisbane ·
                    Real estate CRM Perth · Real estate CRM Adelaide ·
                    Real estate CRM Gold Coast · Real estate CRM Canberra
                  </p>
                </div>

                {/* International */}

                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    International
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-muted">
                    Real estate CRM software · property sales CRM ·
                    real estate lead management software · property sales
                    platform · real estate business software · real estate
                    sales automation
                  </p>
                </div>
              </div>
            </div>
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
    </>
  );
}