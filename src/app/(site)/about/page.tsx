import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BrandIdentity } from "@/components/sections/BrandIdentity";
import { JsonLd } from "@/components/blog/JsonLd";
import { buildFaqJsonLd } from "@/lib/blog-seo";
import { BRAND_FAQS } from "@/lib/brand-faqs";
import {
  LEGAL_NAME,
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About Brosavo — Brosavo Technologies",
  description:
    "Brosavo Technologies is a global technology company building modern websites, AI-powered software, SaaS platforms, automation solutions, and industry-specific business systems across Canada and India. Official website: www.brosavo.com.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Brosavo — Brosavo Technologies",
    description:
      "Brosavo Technologies builds websites, AI-powered software, SaaS platforms, automation solutions, and industry-specific business systems.",
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Brosavo",
  description:
    "Learn about Brosavo Technologies, a global technology company building websites, software, AI, SaaS, automation, and industry-specific business systems.",
  url: `${SITE_URL}/about`,
  isPartOf: {
    "@id": WEBSITE_ID,
  },
  about: {
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
  },
};

export default function AboutPage() {
  const faqSchema = buildFaqJsonLd(BRAND_FAQS);

  return (
    <>
      <JsonLd data={[aboutPageSchema, faqSchema]} />

      <PageHero
        label="About Brosavo"
        title="About Brosavo Technologies"
        description="Brosavo Technologies builds modern digital products, software platforms, AI solutions, and business systems for ambitious companies worldwide. Official site: www.brosavo.com."
      />

      <main className="container-wide">
        <section className="section-padding">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan">
                Who we are
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Technology built around real business needs.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-muted sm:text-lg">
                <p>
                  Brosavo Technologies is a global technology company
                  delivering modern digital products for businesses across
                  industries.
                </p>

                <p>
                  We design and build high-performance websites, custom
                  software, AI-powered applications, SaaS platforms,
                  automation solutions, and industry-specific business
                  management systems.
                </p>

                <p>
                  Our approach combines product thinking, software engineering,
                  cloud technology, artificial intelligence, and modern digital
                  experiences to help businesses turn ideas into scalable
                  technology.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border/70 bg-surface/40 p-7">
                <h3 className="text-xl font-semibold">
                  What we build
                </h3>

                <ul className="mt-5 space-y-3 text-muted">
                  <li>• Modern business websites</li>
                  <li>• Custom web applications</li>
                  <li>• AI-powered software</li>
                  <li>• SaaS platforms</li>
                  <li>• Business automation systems</li>
                  <li>• Industry-specific software</li>
                  <li>• Cloud-based platforms</li>
                  <li>• Enterprise technology solutions</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border/70 bg-surface/40 p-7">
                <h3 className="text-xl font-semibold">
                  How we work
                </h3>

                <ul className="mt-5 space-y-3 text-muted">
                  <li>• Understand the business problem</li>
                  <li>• Design the right digital experience</li>
                  <li>• Build scalable technology</li>
                  <li>• Integrate AI and automation where useful</li>
                  <li>• Deploy using modern cloud infrastructure</li>
                  <li>• Continuously improve the product</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-violet">
              Our technology
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              From websites to mission-critical platforms.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              Brosavo works across the technology stack to create digital
              experiences and software systems that are reliable, scalable,
              secure, and designed around the way businesses actually operate.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Web Development",
                "AI",
                "SaaS",
                "Cloud",
                "Automation",
                "Custom Software",
                "Enterprise Systems",
                "Digital Products",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/70 bg-background/60 px-4 py-2 text-sm text-foreground/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="mx-auto max-w-4xl rounded-3xl border border-border/70 bg-surface/40 p-8 sm:p-12">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-blue">
              Global presence
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Canada × India
            </h2>

            <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
              Brosavo operates across Canada and India, combining global
              business perspective with a strong engineering and technology
              delivery network.
            </p>

            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              We work with businesses looking to launch, modernize, automate,
              and scale their digital operations.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan">
              Brosavo Technologies
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Have an idea? Let&apos;s build it.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Whether you need a modern website, a custom business platform,
              AI automation, or a complete digital product, Brosavo can help
              turn your idea into working technology.
            </p>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Start a conversation
              </a>
            </div>
          </div>
        </section>
      </main>

      <BrandIdentity />
    </>
  );
}