import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { FeaturedProduct } from "@/components/sections/FeaturedProduct";
import { HomeOverview } from "@/components/sections/HomeOverview";
import { Testimonials } from "@/components/sections/Testimonials";
import { Credibility } from "@/components/sections/Credibility";
import { JsonLd } from "@/components/blog/JsonLd";
import { buildOrganizationJsonLd } from "@/lib/blog-seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brosavo | Global Technology Company & Real Estate CRM",

  description:
    "Brosavo is a global technology company building AI, software, SaaS platforms, and digital infrastructure, with Real Estate CRM as its flagship product.",

  keywords: [
    "Brosavo",
    "Brosavo Technologies",
    "global technology company",
    "real estate CRM",
    "real estate CRM software",
    "CRM for real estate",
    "CRM for realtors",
    "real estate lead management",
    "real estate sales CRM",
    "AI software",
    "SaaS platforms",
    "enterprise software",
  ],

  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const organizationSchema = buildOrganizationJsonLd();

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: "Brosavo Technologies",
    url: SITE_URL,
  };

  return (
    <>
      <JsonLd data={[organizationSchema, websiteSchema]} />

      <Hero />
      <FeaturedProduct />
      <HomeOverview />
      <Credibility showHeader={false} compact />
      <Testimonials />
    </>
  );
}