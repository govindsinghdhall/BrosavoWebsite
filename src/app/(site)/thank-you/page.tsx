import type { Metadata } from "next";
import Link from "next/link";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You | Brosavo",
  description:
    "Thank you for contacting Brosavo. Our team will get back to you shortly.",

  alternates: {
    canonical: `${SITE_URL}/thank-you`,
  },

  openGraph: {
    title: "Thank You | Brosavo",
    description:
      "Thank you for contacting Brosavo. Our team will get back to you shortly.",
    url: `${SITE_URL}/thank-you`,
    siteName: "Brosavo",
    type: "website",
  },

  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-24">
      <section className="w-full max-w-2xl text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-10 w-10 text-primary"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5 12 4 4L19 6"
            />
          </svg>
        </div>

        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted">
          Message Received
        </p>

        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Thank You for Contacting BROSAVO
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted">
          We’ve received your message. Our team will review your requirements
          and get back to you shortly.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-surface"
          >
            Contact Us Again
          </Link>
        </div>
      </section>
    </main>
  );
}