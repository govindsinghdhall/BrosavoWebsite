import type { Metadata } from "next";
import { Products } from "@/components/sections/Products";

export const metadata: Metadata = {
  title: "Real Estate CRM & Business Software | Brosavo",

  description:
    "Explore Brosavo's software products and business platforms, including our real estate CRM for managing leads, properties, follow-ups, WhatsApp conversations, and sales.",

  keywords: [
    "real estate CRM",
    "real estate CRM software",
    "CRM for real estate",
    "CRM for realtors",
    "CRM for real estate agents",
    "real estate lead management",
    "real estate sales CRM",
    "property management CRM",
    "real estate CRM India",
    "Brosavo",
    "Brosavo real estate CRM",
    "business software",
    "SaaS platforms",
    "AI software",
  ],

  alternates: {
    canonical: "https://brosavo.com/products",
  },

  openGraph: {
    title: "Real Estate CRM & Business Software | Brosavo",
    description:
      "Explore Brosavo's software products and business platforms, including our flagship real estate CRM for leads, properties, follow-ups, WhatsApp, and sales.",
    url: "https://brosavo.com/products",
    siteName: "Brosavo",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Real Estate CRM & Business Software | Brosavo",
    description:
      "Explore Brosavo's software products and platforms, including our flagship real estate CRM.",
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