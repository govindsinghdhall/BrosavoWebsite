import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { FeaturedProduct } from "@/components/sections/FeaturedProduct";
import { HomeOverview } from "@/components/sections/HomeOverview";
import { Testimonials } from "@/components/sections/Testimonials";
import { Credibility } from "@/components/sections/Credibility";
import { BrandIdentity } from "@/components/sections/BrandIdentity";
import { JsonLd } from "@/components/blog/JsonLd";
import { buildFaqJsonLd } from "@/lib/blog-seo";
import { BRAND_FAQS } from "@/lib/brand-faqs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brosavo | Official Website of Brosavo Technologies",

  description:
    "Brosavo is the official website of Brosavo Technologies, a global technology company building AI, software, SaaS platforms, and digital infrastructure, with Real Estate CRM as its flagship product.",

  keywords: [
    "Brosavo",
    "Brosavo Technologies",
    "brosavo.com",
    "official Brosavo website",
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
    canonical: SITE_URL,
  },
};

export default function HomePage() {
  const faqSchema = buildFaqJsonLd(BRAND_FAQS);

  return (
    <>
      <JsonLd data={[faqSchema]} />

      <Hero />
      <FeaturedProduct />
      <HomeOverview />
      <Credibility showHeader={false} compact />
      <Testimonials />
      <BrandIdentity />
    </>
  );
}
