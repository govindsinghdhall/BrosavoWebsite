import type { Metadata } from "next";

import { SITE_URL } from "@/lib/site";

import { ThankYouClient } from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | Brosavo",
  description:
    "We received your enquiry. A Brosavo specialist will follow up shortly.",
  alternates: { canonical: `${SITE_URL}/thank-you` },
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
