import type { Metadata } from "next";

import { DigitalGrowthLanding } from "@/components/digital-growth/DigitalGrowthLanding";
import { JsonLd } from "@/components/blog/JsonLd";
import { getDigitalService } from "@/data/digitalGrowthServices";
import { hubJsonLd } from "@/lib/digital-growth";
import { SITE_URL } from "@/lib/site";

export function digitalHubMetadata(slug: string): Metadata {
  const service = getDigitalService(slug);
  if (!service) return {};

  const canonical = `${SITE_URL}/${service.slug}`;

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: service.title,
      description: service.description,
      url: canonical,
      type: "website",
    },
  };
}

export function DigitalHubPage({ slug }: { slug: string }) {
  const service = getDigitalService(slug);
  if (!service) return null;

  return (
    <>
      <JsonLd data={hubJsonLd(service)} />
      <DigitalGrowthLanding service={service} />
    </>
  );
}
