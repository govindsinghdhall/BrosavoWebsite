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
  title:
    "BROSAVO — Global Technology Company | AI, Software & Enterprise Systems",

  description:
    "BROSAVO is a global technology company engineering AI products, enterprise software, SaaS platforms, automation, and digital infrastructure for businesses worldwide.",

  keywords: [
    "BROSAVO",
    "Brosavo Technologies",
    "global technology company",
    "AI development",
    "enterprise software",
    "SaaS development",
    "custom software",
    "software engineering",
    "digital transformation",
    "cloud infrastructure",
    "business software",
  ],
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