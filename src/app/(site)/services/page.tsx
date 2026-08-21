import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Services } from "@/components/sections/Services";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software Development & Technology Services | Brosavo",

  description:
    "Brosavo provides custom software development, AI solutions, SaaS development, cloud infrastructure, business automation, and real estate technology solutions.",

  keywords: [
    "software development company",
    "software development services",
    "custom software development",
    "AI solutions",
    "AI development services",
    "SaaS development",
    "web application development",
    "mobile app development",
    "cloud infrastructure",
    "business automation",
    "enterprise software",
    "real estate technology",
    "real estate CRM",
    "real estate software",
    "Brosavo",
    "Brosavo Technologies",
  ],

  alternates: {
    canonical: `${SITE_URL}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Software & Technology"
        title="Technology Solutions Built Around Your Business"
        description="Brosavo designs and builds custom software, AI solutions, SaaS platforms, automation systems, cloud infrastructure, and industry-specific technology that helps businesses operate, automate, and scale."
      />

      <Services showHeader={false} />
    </>
  );
}