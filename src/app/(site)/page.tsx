import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProduct } from "@/components/sections/FeaturedProduct";
import { HomeOverview } from "@/components/sections/HomeOverview";
import { Testimonials } from "@/components/sections/Testimonials";
import { Credibility } from "@/components/sections/Credibility";
import {JsonLd} from "@/components/blog/JsonLd";
import { buildOrganizationJsonLd } from "@/lib/blog-seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brosavo | Technology & Software Solutions",
  description:
    "Brosavo is a technology company building modern software, websites, business applications, and industry-specific management solutions for businesses.",
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