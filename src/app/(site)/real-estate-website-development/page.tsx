import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Real Estate Website Development | Brosavo",
  description: "Build a modern real estate website with property listings, lead capture, CRM integration and SEO-ready pages.",
  alternates: { canonical: `${SITE_URL}/real-estate-website-development` },
  openGraph: {
    title: "Real Estate Website Development | Brosavo",
    description: "Build a modern real estate website with property listings, lead capture, CRM integration and SEO-ready pages.",
    url: `${SITE_URL}/real-estate-website-development`,
    type: "website",
  },
};

const faqs = [
  {
    "question": "What should a real estate website include?",
    "answer": "A useful real estate website should present properties or projects clearly, explain the business or services, provide strong enquiry paths and work well on mobile devices."
  },
  {
    "question": "Can the website connect with a CRM?",
    "answer": "Yes. Brosavo is designed to connect website enquiries with its real estate CRM workflow so leads can be organized, assigned and followed up."
  },
  {
    "question": "Is the website designed for search engines?",
    "answer": "The page architecture can be built with descriptive metadata, internal links, structured content and search-friendly information architecture."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Real Estate Website Development",
  description: "Build a modern real estate website with property listings, lead capture, CRM integration and SEO-ready pages.",
  provider: { "@type": "Organization", name: "Brosavo", url: SITE_URL },
  url: `${SITE_URL}/real-estate-website-development`,
  serviceType: "Real Estate Website Development",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-accent-blue/20 bg-accent-blue/5 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-accent-blue">
              Real Estate Website Development
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Build a real estate website that turns property traffic into enquiries.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              Build a modern real estate website with property listings, lead capture, CRM integration and SEO-ready pages.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:-translate-y-0.5">
                Book a Website Demo
              </Link>
              <Link href="/real-estate-crm" className="rounded-full border border-border/70 bg-background px-6 py-3.5 text-sm font-medium transition hover:-translate-y-0.5">
                Pair websites with Real Estate CRM
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-surface py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-2xl border border-border/70 bg-background p-6">
      <h2 className="text-base font-semibold">Property Listings</h2>
      <p className="mt-2 text-sm leading-6 text-muted">Showcase properties with structured details, images and clear enquiry actions.</p>
    </article>
<article className="rounded-2xl border border-border/70 bg-background p-6">
      <h2 className="text-base font-semibold">Lead Capture</h2>
      <p className="mt-2 text-sm leading-6 text-muted">Turn website visitors and property interest into structured enquiries.</p>
    </article>
<article className="rounded-2xl border border-border/70 bg-background p-6">
      <h2 className="text-base font-semibold">CRM Integration</h2>
      <p className="mt-2 text-sm leading-6 text-muted">Connect website activity with Brosavo lead management and sales workflows.</p>
    </article>
<article className="rounded-2xl border border-border/70 bg-background p-6">
      <h2 className="text-base font-semibold">SEO Foundation</h2>
      <p className="mt-2 text-sm leading-6 text-muted">Build useful pages and information architecture that can be discovered organically.</p>
    </article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">Built for real estate</span>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                More than a property showcase.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                Your website should support the sales process, not operate as a disconnected brochure.
                Brosavo brings presentation, lead capture and CRM workflows closer together.
              </p>
              <ul className="mt-7 space-y-3 text-sm text-muted">
                <li className="flex gap-3"><span className="text-accent-blue">✓</span><span>Professional responsive design</span></li>
<li className="flex gap-3"><span className="text-accent-blue">✓</span><span>Property or project presentation</span></li>
<li className="flex gap-3"><span className="text-accent-blue">✓</span><span>Enquiry and contact forms</span></li>
<li className="flex gap-3"><span className="text-accent-blue">✓</span><span>Clear conversion-focused calls to action</span></li>
<li className="flex gap-3"><span className="text-accent-blue">✓</span><span>CRM-connected lead capture</span></li>
<li className="flex gap-3"><span className="text-accent-blue">✓</span><span>SEO-ready page structure</span></li>
<li className="flex gap-3"><span className="text-accent-blue">✓</span><span>Mobile-friendly experience</span></li>
<li className="flex gap-3"><span className="text-accent-blue">✓</span><span>Scalable content and location pages</span></li>
              </ul>
            </div>

            <div className="rounded-3xl border border-border/70 bg-background p-7 sm:p-9">
              <h2 className="text-2xl font-semibold">A website connected to the sales operation.</h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                Website visitors can become enquiries, enquiries can become leads,
                and leads can move into a structured sales process through Brosavo CRM.
              </p>
              <div className="mt-7 rounded-2xl border border-border/60 bg-surface p-5 text-sm leading-7 text-muted">
                Website → Enquiry → Lead → Follow-up → Sales Pipeline → Customer
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-surface py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Frequently asked questions</h2>
            <div className="mt-8 space-y-3">
              <details key="What should a real estate website include?" className="group rounded-2xl border border-border/70 bg-background">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-sm font-medium">
        <span>What should a real estate website include?</span><span className="text-xl text-muted transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="border-t border-border/60 px-6 py-5 text-sm leading-7 text-muted">A useful real estate website should present properties or projects clearly, explain the business or services, provide strong enquiry paths and work well on mobile devices.</div>
    </details>
<details key="Can the website connect with a CRM?" className="group rounded-2xl border border-border/70 bg-background">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-sm font-medium">
        <span>Can the website connect with a CRM?</span><span className="text-xl text-muted transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="border-t border-border/60 px-6 py-5 text-sm leading-7 text-muted">Yes. Brosavo is designed to connect website enquiries with its real estate CRM workflow so leads can be organized, assigned and followed up.</div>
    </details>
<details key="Is the website designed for search engines?" className="group rounded-2xl border border-border/70 bg-background">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-sm font-medium">
        <span>Is the website designed for search engines?</span><span className="text-xl text-muted transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="border-t border-border/60 px-6 py-5 text-sm leading-7 text-muted">The page architecture can be built with descriptive metadata, internal links, structured content and search-friendly information architecture.</div>
    </details>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl rounded-3xl bg-foreground p-8 text-background sm:p-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-cyan">Website + CRM</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Turn your website into part of your real estate sales process.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-background/65">
              Explore Brosavo CRM for lead management, property inventory, sales pipelines,
              WhatsApp workflows, analytics and team management.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/real-estate-crm" className="rounded-full bg-background px-6 py-3.5 text-center text-sm font-medium text-foreground">
                See how CRM and websites connect
              </Link>
              <Link href="/contact" className="rounded-full border border-background/20 px-6 py-3.5 text-center text-sm font-medium text-background">
                Talk to Brosavo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
