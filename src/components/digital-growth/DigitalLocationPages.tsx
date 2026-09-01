import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { JsonLd } from "@/components/blog/JsonLd";
import {
  buildCityCopy,
  buildCountryCopy,
  digitalCityPath,
  digitalCountryPath,
  digitalServicePath,
  generateDigitalCityParams,
  generateDigitalCountryParams,
  getAgencyCity,
  getAgencyCountry,
  getDigitalServiceOrThrow,
  locationJsonLd,
  relatedServiceLinks,
} from "@/lib/digital-growth";
import { SITE_URL } from "@/lib/site";

type CountryParams = { country: string };
type CityParams = { country: string; city: string };

export function digitalCountryStaticParams(serviceSlug: string) {
  return generateDigitalCountryParams(serviceSlug);
}

export function digitalCityStaticParams(serviceSlug: string) {
  return generateDigitalCityParams(serviceSlug);
}

export async function digitalCountryMetadata(
  serviceSlug: string,
  params: Promise<CountryParams>
): Promise<Metadata> {
  const { country: countrySlug } = await params;
  const service = getDigitalServiceOrThrow(serviceSlug);
  const country = getAgencyCountry(countrySlug);
  if (!country) return {};

  const copy = buildCountryCopy(service, country);
  const canonical = `${SITE_URL}${digitalCountryPath(service.slug, country.slug)}`;

  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: canonical,
      type: "website",
    },
  };
}

export async function digitalCityMetadata(
  serviceSlug: string,
  params: Promise<CityParams>
): Promise<Metadata> {
  const { country: countrySlug, city: citySlug } = await params;
  const service = getDigitalServiceOrThrow(serviceSlug);
  const result = getAgencyCity(countrySlug, citySlug);
  if (!result) return {};

  const copy = buildCityCopy(service, result.country, result.city);
  const canonical = `${SITE_URL}${digitalCityPath(
    service.slug,
    result.country.slug,
    result.city.slug
  )}`;

  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: canonical,
      type: "website",
    },
  };
}

function ContactRow({ intent }: { intent: string }) {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <Link
        href={`/contact?intent=${intent}`}
        className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:-translate-y-0.5"
      >
        Request a proposal
      </Link>
      <Link
        href="/website-development"
        className="rounded-full border border-border/70 bg-background px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5"
      >
        Website development hub
      </Link>
    </div>
  );
}

export async function DigitalCountryPage({
  serviceSlug,
  params,
}: {
  serviceSlug: string;
  params: Promise<CountryParams>;
}) {
  const { country: countrySlug } = await params;
  const service = getDigitalServiceOrThrow(serviceSlug);
  const country = getAgencyCountry(countrySlug);
  if (!country) notFound();

  const copy = buildCountryCopy(service, country);
  const canonical = `${SITE_URL}${digitalCountryPath(service.slug, country.slug)}`;
  const related = relatedServiceLinks(service.slug);

  return (
    <main>
      <JsonLd
        data={locationJsonLd({
          service,
          canonical,
          name: copy.heading,
          description: copy.description,
          areaServed: country.name,
          faqs: copy.faqs,
          breadcrumbs: [
            { name: "Home", path: SITE_URL },
            { name: service.name, path: digitalServicePath(service.slug) },
            { name: country.name, path: digitalCountryPath(service.slug, country.slug) },
          ],
        })}
      />

      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <Link
              href={digitalServicePath(service.slug)}
              className="inline-flex rounded-full border border-accent-blue/20 bg-accent-blue/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-accent-blue"
            >
              {service.name}
            </Link>
            <h1 className="mt-7 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              {copy.heading}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {copy.intro}
            </p>
            <ContactRow intent={service.intent} />
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-surface py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              {copy.bodyHeading}
            </h2>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              {copy.bodyIntro}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {copy.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-muted"
                >
                  <span className="mr-2 text-accent-blue">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-[-0.04em]">
              Cities in {country.name}
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {country.cities.map((city) => (
                <Link
                  key={city.slug}
                  href={digitalCityPath(service.slug, country.slug, city.slug)}
                  className="rounded-2xl border border-border/70 bg-background p-6 transition hover:-translate-y-1 hover:border-accent-blue/30"
                >
                  <div className="text-xs font-mono uppercase tracking-[0.16em] text-accent-blue">
                    {country.name}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">
                    {service.name} in {city.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Website, SEO, AEO and GEO delivery for teams in {city.name}.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {copy.sections.map((section) => (
        <section key={section.title} className="border-t border-border/50 py-16">
          <div className="container-wide px-6 lg:px-10">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em]">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-5 text-base leading-8 text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-border/50 bg-surface py-16">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-semibold">Related services</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {related.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
            <div className="mt-8 space-y-3">
              {copy.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-border/70 bg-background"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-sm font-medium">
                    <span>{faq.question}</span>
                    <span className="text-xl text-muted group-open:rotate-45">+</span>
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
    </main>
  );
}

export async function DigitalCityPage({
  serviceSlug,
  params,
}: {
  serviceSlug: string;
  params: Promise<CityParams>;
}) {
  const { country: countrySlug, city: citySlug } = await params;
  const service = getDigitalServiceOrThrow(serviceSlug);
  const result = getAgencyCity(countrySlug, citySlug);
  if (!result) notFound();

  const { country, city } = result;
  const copy = buildCityCopy(service, country, city);
  const canonical = `${SITE_URL}${digitalCityPath(service.slug, country.slug, city.slug)}`;

  return (
    <main>
      <JsonLd
        data={locationJsonLd({
          service,
          canonical,
          name: copy.heading,
          description: copy.description,
          areaServed: `${city.name}, ${country.name}`,
          faqs: copy.faqs,
          breadcrumbs: [
            { name: "Home", path: SITE_URL },
            { name: service.name, path: digitalServicePath(service.slug) },
            {
              name: country.name,
              path: digitalCountryPath(service.slug, country.slug),
            },
            {
              name: city.name,
              path: digitalCityPath(service.slug, country.slug, city.slug),
            },
          ],
        })}
      />

      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <Link
              href={digitalCountryPath(service.slug, country.slug)}
              className="inline-flex rounded-full border border-accent-blue/20 bg-accent-blue/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-accent-blue"
            >
              {service.name} in {country.name}
            </Link>
            <h1 className="mt-7 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              {copy.heading}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {copy.intro}
            </p>
            <ContactRow intent={service.intent} />
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-surface py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-[-0.04em]">
              {copy.bodyHeading}
            </h2>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              {copy.bodyIntro}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {copy.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-muted"
                >
                  <span className="mr-2 text-accent-blue">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {copy.sections.map((section) => (
        <section key={section.title} className="py-16">
          <div className="container-wide px-6 lg:px-10">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em]">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="mt-5 text-base leading-8 text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-border/50 bg-surface py-16">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
            <div className="mt-8 space-y-3">
              {copy.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-border/70 bg-background"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-sm font-medium">
                    <span>{faq.question}</span>
                    <span className="text-xl text-muted group-open:rotate-45">+</span>
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
    </main>
  );
}
