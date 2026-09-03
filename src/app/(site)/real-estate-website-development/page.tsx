import type { Metadata } from "next";

import { JsonLd } from "@/components/blog/JsonLd";
import { SITE_URL } from "@/lib/site";

import { RealEstateWebsiteDevelopmentClient } from "./RealEstateWebsiteDevelopmentClient";

const PAGE_PATH = "/real-estate-website-development";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "Real Estate Website Development | Property Sites, SEO & CRM | Brosavo";

const PAGE_DESCRIPTION =
  "Brosavo builds high-converting real estate websites for realtors, agencies, builders and developers — with listings, lead capture, WhatsApp, SEO and CRM-connected enquiries.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "real estate website development",
    "real estate website",
    "realtor website",
    "property website development",
    "real estate website for agents",
    "builder website",
    "real estate SEO",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const faqs = [
  {
    question: "What should a real estate website include?",
    answer:
      "A modern real estate website should make properties easy to discover, present listings clearly, provide strong enquiry paths, work beautifully on mobile devices and support the business's sales process.",
  },
  {
    question: "Can you build property listing pages?",
    answer:
      "Yes. We can build property and project pages with images, pricing, locations, specifications, amenities, galleries, enquiry forms and conversion-focused calls to action.",
  },
  {
    question: "Can the website connect with a CRM?",
    answer:
      "Yes. Brosavo websites can connect website enquiries with Brosavo CRM workflows so leads can be organized, assigned, tracked and followed up by your sales team.",
  },
  {
    question: "Can you integrate WhatsApp?",
    answer:
      "Yes. WhatsApp can be integrated into property pages and enquiry flows so potential buyers can contact your team quickly.",
  },
  {
    question: "Will the website be SEO-ready?",
    answer:
      "Yes. We can build the website with SEO-friendly architecture, metadata, internal linking, structured content, location pages, property pages and performance-focused implementation.",
  },
  {
    question: "Can you redesign my existing real estate website?",
    answer:
      "Yes. We can redesign an existing website to create a faster, more modern and conversion-focused experience while preserving useful content and improving its structure.",
  },
  {
    question: "How much does a real estate website cost?",
    answer:
      "Brosavo offers professional and premium website packages, with custom pricing available for larger real estate businesses, builders and developers with more advanced requirements.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Real Estate Website Development",
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    serviceType: "Real Estate Website Development",
    provider: {
      "@type": "Organization",
      name: "Brosavo Technologies",
      url: SITE_URL,
    },
    areaServed: ["India", "Canada", "United States", "United Kingdom", "Australia"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Real Estate Website Development",
        item: PAGE_URL,
      },
    ],
  },
];

export default function RealEstateWebsiteDevelopmentPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <RealEstateWebsiteDevelopmentClient />
    </>
  );
}
