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

      <section className="relative flex min-h-[100svh] w-full items-center py-16 lg:py-24">
        <div className="container-wide w-full">
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
                  className="rounded-full border border-border/70 bg-surface px-4 py-2 text-xs text-muted"
                >
                  {keyword}
                </span>
              ))}
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