import type { Metadata } from "next";
import { Suspense } from "react";
import { Contact } from "@/components/sections/Contact";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Brosavo | Software, AI & Business Solutions",

  description:
    "Contact Brosavo to discuss software development, AI solutions, SaaS products, business automation, digital infrastructure, or our flagship Real Estate CRM.",

  alternates: {
    canonical: `${SITE_URL}/contact`,
  },

  openGraph: {
    title: "Contact Brosavo | Software, AI & Business Solutions",
    description:
      "Talk to Brosavo about software, AI, SaaS, automation, digital infrastructure, and our flagship Real Estate CRM.",
    url: `${SITE_URL}/contact`,
    siteName: "Brosavo",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <>
      <Suspense
        fallback={
          <section className="section-padding">
            <div className="container-wide">
              <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface/40 p-8 text-center">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Contact Brosavo
                </h2>

                <p className="mt-3 text-muted">
                  Tell us about your project, business requirements, or
                  technology goals.
                </p>
              </div>
            </div>
          </section>
        }
      >
        <Contact showHeader={true} />
      </Suspense>

      {/* Office Location */}
      <section className="container-wide section-padding">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted">
            Visit Us
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Find BROSAVO
          </h2>

          <p className="mt-3 max-w-2xl text-muted">
            Visit our office in Gurugram. Find us at 101-R, near Gaba Ki
            Kothi, New Colony, Sector 7.
          </p>
        </div>

        <div className="w-full overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7014.736857087527!2d77.014152!3d28.468449200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d5c8a9c373%3A0x688f90bc1560a5a0!2sBrisavo%20Technologies!5e0!3m2!1sen!2sin!4v1786336353361!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{
              border: 0,
              width: "100%",
              height: "450px",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="BROSAVO Technologies office location"
          />
        </div>
      </section>
    </>
  );
}