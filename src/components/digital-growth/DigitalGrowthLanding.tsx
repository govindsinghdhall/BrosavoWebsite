"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Search,
  Sparkles,
} from "lucide-react";

import { AGENCY_MARKETS } from "@/data/agencyMarkets";
import type { DigitalGrowthService } from "@/data/digitalGrowthServices";
import {
  DIGITAL_GROWTH_PILLARS,
  getLocationServices,
} from "@/data/digitalGrowthServices";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-1 text-center">
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-blue">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function DigitalGrowthLanding({
  service,
}: {
  service: DigitalGrowthService;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const contactHref = `/contact?intent=${service.intent}`;
  const locationServices = getLocationServices();

  return (
    <div className="overflow-hidden bg-background">
      <section className="relative overflow-hidden bg-background mesh-gradient noise-overlay">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_82%_45%,rgba(139,92,246,0.17),transparent_30%),radial-gradient(circle_at_45%_90%,rgba(6,182,212,0.11),transparent_30%)]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-28 lg:px-12 lg:pb-20 lg:pt-32">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <span className="inline-flex rounded-full border border-accent-blue/20 bg-accent-blue/5 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-accent-blue">
                {service.eyebrow}
              </span>

              <h1 className="mt-6 text-balance font-black leading-[1.12] tracking-[-0.05em]">
                <span className="block text-[clamp(1.75rem,5vw,3.75rem)] text-foreground">
                  {service.h1Line1}
                </span>
                <span className="mt-1 block bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan bg-clip-text text-[clamp(1.75rem,5vw,3.75rem)] text-transparent">
                  {service.h1Line2}
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8 lg:mx-0">
                {service.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href={contactHref}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(59,130,246,0.22)] transition hover:-translate-y-1"
                >
                  {service.contactCta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={service.secondaryHref}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-glass px-7 py-4 text-sm font-semibold backdrop-blur-xl transition hover:-translate-y-1 hover:bg-surface"
                >
                  {service.secondaryCta}
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] text-muted lg:justify-start">
                {["SEO-ready", "AEO-ready", "GEO-ready", "Ads-ready"].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-accent-blue" />
                      {item}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl border border-border/70 bg-glass p-6 shadow-[0_24px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:p-8">
                <div className="flex items-center gap-3 border-b border-border pb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-blue/10">
                    <Search className="h-5 w-5 text-accent-blue" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Discovery stack</div>
                    <div className="mt-1 text-[10px] text-muted">
                      How customers find Brosavo-built sites
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {service.discovery.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-border bg-background p-4"
                    >
                      <div className="text-sm font-semibold">{item.title}</div>
                      <p className="mt-1 text-xs leading-6 text-muted">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-surface py-20 sm:py-24">
        <div className="container-wide mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="What we ship"
            title={`${service.name} as a product, not a PDF.`}
            description="Every engagement is implemented on a real website with tracking, schema and conversion paths."
          />
          <div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.06, duration: 0.5 }}
                className="rounded-3xl border border-border bg-background p-7 transition hover:-translate-y-1 hover:border-accent-blue/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-blue/10">
                  <Sparkles className="h-4 w-4 text-accent-blue" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-wide mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Who it is for"
            title="Built for companies that need pipeline."
          />
          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2">
            {service.audiences.map((audience) => (
              <article
                key={audience.title}
                className="rounded-3xl border border-border bg-glass p-7 backdrop-blur-xl sm:p-9"
              >
                <h3 className="text-2xl font-semibold">{audience.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {audience.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-surface py-20 sm:py-24">
        <div className="container-wide mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-blue">
                Included
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                From architecture to launch.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted">
                {service.intro}
              </p>
              <Link
                href={contactHref}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition hover:-translate-y-1"
              >
                Talk to Brosavo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {service.included.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4 text-sm"
                >
                  <Check className="h-4 w-4 shrink-0 text-accent-blue" />
                  <span className="text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-wide mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="Process" title="A delivery path your team can follow." />
          <div className="mx-auto mt-14 max-w-5xl">
            {service.process.map((step) => (
              <div
                key={step.number}
                className="flex gap-5 border-b border-border py-7 first:border-t"
              >
                <div className="font-mono text-xs font-semibold text-accent-blue">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.packages ? (
        <section className="border-y border-border/50 bg-surface py-20 sm:py-24">
          <div className="container-wide mx-auto px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Packages"
              title="Choose the depth that matches your growth plan."
            />
            <div className="mx-auto mt-14 grid max-w-6xl gap-5 lg:grid-cols-3">
              {service.packages.map((pack) => (
                <article
                  key={pack.name}
                  className={`rounded-3xl border bg-background p-7 sm:p-8 ${
                    pack.popular
                      ? "border-accent-blue/40 shadow-[0_20px_70px_rgba(59,130,246,0.12)]"
                      : "border-border"
                  }`}
                >
                  {pack.popular ? (
                    <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
                      Most requested
                    </div>
                  ) : null}
                  <div className="text-sm font-semibold">{pack.name}</div>
                  <div className="mt-4 text-4xl font-black tracking-tight">
                    {pack.price}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {pack.description}
                  </p>
                  <div className="my-7 h-px bg-border" />
                  <ul className="space-y-3 text-sm text-muted">
                    {pack.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={contactHref}
                    className={`mt-8 flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition ${
                      pack.popular
                        ? "bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan text-white"
                        : "border border-border hover:bg-surface"
                    }`}
                  >
                    {pack.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.hasLocations ? (
        <section className="py-20 sm:py-24">
          <div className="container-wide mx-auto px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Locations"
              title={`${service.name} where your customers search.`}
              description="Country and city pages for SEO, AEO and GEO — the same markets we use for Real Estate CRM."
            />
            <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
              {AGENCY_MARKETS.map((country) => (
                <Link
                  key={country.slug}
                  href={`/${service.slug}/${country.slug}`}
                  className="rounded-3xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent-blue/30"
                >
                  <div className="text-xs font-mono uppercase tracking-[0.16em] text-accent-blue">
                    {country.name}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">
                    {service.name} in {country.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {country.cities.map((city) => city.name).join(" · ")}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-y border-border/50 bg-surface py-20 sm:py-24">
        <div className="container-wide mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="The growth stack"
            title="Website, search and marketing as one system."
          />
          <div className="mx-auto mt-14 grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {locationServices.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className={`rounded-2xl border p-5 text-sm font-semibold transition hover:border-accent-blue/40 ${
                  item.slug === service.slug
                    ? "border-accent-blue/40 bg-accent-blue/5"
                    : "border-border bg-background"
                }`}
              >
                {item.name}
                <span className="mt-1 block text-xs font-normal text-muted">
                  {item.description.slice(0, 90)}…
                </span>
              </Link>
            ))}
            {DIGITAL_GROWTH_PILLARS.slice(0, 6).map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="rounded-2xl border border-border bg-background p-5 text-sm font-semibold transition hover:border-accent-blue/40"
              >
                {item.name}
                <span className="mt-1 block text-xs font-normal text-muted">
                  {item.h1Line1} {item.h1Line2}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-wide mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-blue">
                FAQ
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                Questions before you start?
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted">
                Straight answers for teams comparing website vendors, SEO agencies and AI-search specialists.
              </p>
            </div>
            <div className="space-y-3">
              {service.faqs.map((faq, index) => {
                const open = openFaq === index;
                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-2xl border border-border bg-background"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : index)}
                      className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left text-sm font-semibold"
                      aria-expanded={open}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {open ? (
                      <div className="border-t border-border px-5 py-4 text-sm leading-7 text-muted">
                        {faq.answer}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="container-wide relative z-10 mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-border bg-glass p-8 text-center shadow-[0_30px_100px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:p-12">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-cyan">
              Google Ads + organic
            </span>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black tracking-[-0.05em] sm:text-5xl">
              Ready to turn search demand into a sales process?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              Tell us the offer, the cities, and whether traffic will come from ads, SEO or both. We will propose the website and discovery stack.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={contactHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan px-8 py-4 text-sm font-semibold text-white"
              >
                {service.contactCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact?intent=website"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-8 py-4 text-sm font-semibold"
              >
                Talk to Brosavo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
