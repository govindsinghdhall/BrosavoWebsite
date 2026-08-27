import type { Metadata } from "next";
import { Products } from "@/components/sections/Products";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Real Estate CRM & Business Software | Brosavo",

  description:
    "Explore Brosavo's software products and business platforms, including our real estate CRM for managing leads, properties, follow-ups, WhatsApp conversations, and sales.",

  keywords: [
    "Brosavo products",
    "Brosavo Real Estate CRM",
    "business software",
    "SaaS platforms",
  ],

  alternates: {
    canonical: `${SITE_URL}/products`,
  },

  openGraph: {
    title: "Real Estate CRM & Business Software | Brosavo",
    description:
      "Explore Brosavo's software products and business platforms, including our flagship real estate CRM for leads, properties, follow-ups, WhatsApp, and sales.",
    url: `${SITE_URL}/products`,
    siteName: "Brosavo",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Real Estate CRM & Business Software | Brosavo",
    description:
  "Explore Brosavo's software products, including our flagship real estate CRM for realtors, brokers, lead management, automation, AI, and business platforms.",
},
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProductsPage() {
  return (
    <>
      <Products showHeader={false} />
    </>
  );
}