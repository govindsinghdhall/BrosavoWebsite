import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: 'Website Development in Delhi | BROSAVO',
  description: 'BROSAVO builds responsive, SEO-ready business websites in Delhi with modern design, clear messaging and conversion-focused user experiences.',
  alternates: { canonical: `${SITE_URL}/website-development-delhi` },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Website Development in Delhi | BROSAVO',
    description: 'BROSAVO builds responsive, SEO-ready business websites in Delhi with modern design, clear messaging and conversion-focused user experiences.',
    url: `${SITE_URL}/website-development-delhi`,
    type: "website",
  },
};

const faqs = [
  {
    question: "What does BROSAVO offer?",
    answer: 'Build a professional online presence with a responsive website designed around your customers, services and business goals.',
  },
  {
    question: "Can BROSAVO build a solution around our business?",
    answer: "Yes. BROSAVO structures its website, CRM and digital solutions around business goals, customer journeys and operational requirements.",
  },
];

const benefits = [
  "Responsive and modern implementation",
  "SEO-ready page architecture",
  "Clear customer journeys",
  "Conversion-focused calls to action",
  "Scalable technology foundation",
  "Analytics-ready setup",
];

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: 'Website Development in Delhi | BROSAVO',
          description: 'BROSAVO builds responsive, SEO-ready business websites in Delhi with modern design, clear messaging and conversion-focused user experiences.',
          url: `${SITE_URL}/website-development-delhi`,
          publisher: {
            "@type": "Organization",
            name: "BROSAVO",
            url: SITE_URL,
          },
        }) }}
      />

      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-accent-blue/20 bg-accent-blue/5 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-accent-blue">
              Website Development in Delhi
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Modern websites for businesses in Delhi.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              Build a professional online presence with a responsive website designed around your customers, services and business goals.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="https://crm.brosavo.com" className="rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background">
                Start Free 14-Day Trial
              </Link>
              <Link href="/contact" className="rounded-full border border-border/70 bg-background px-6 py-3.5 text-sm font-medium">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              What BROSAVO brings to the workflow
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((item) => (
                <li key={item} className="rounded-xl border border-border/60 bg-surface px-4 py-3 text-sm text-muted">
                  <span className="mr-2 text-accent-blue">✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Built around your business goals
            </h2>
            <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
              Build a professional online presence with a responsive website designed around your customers, services and business goals. BROSAVO focuses on clear information architecture, useful customer journeys and technology that can support future growth.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-surface py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Frequently asked questions
            </h2>
            <div className="mt-8 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-border/70 bg-background">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-sm font-medium">
                    <span>{faq.question}</span>
                    <span className="text-xl text-muted transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <div className="border-t border-border/60 px-6 py-5 text-sm leading-7 text-muted">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl rounded-3xl border border-border/70 bg-background p-8 sm:p-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">
              Explore BROSAVO
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Build a stronger digital foundation.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              Explore BROSAVO website development, CRM, lead management and digital marketing solutions.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-full bg-foreground px-6 py-3.5 text-center text-sm font-medium text-background">
                Talk to BROSAVO
              </Link>
              <Link href="/services" className="rounded-full border border-border/70 px-6 py-3.5 text-center text-sm font-medium">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
