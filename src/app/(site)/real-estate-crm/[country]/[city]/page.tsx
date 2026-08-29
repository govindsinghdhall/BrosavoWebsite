import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { LocationHeroImage } from "@/components/real-estate-crm/LocationHeroImage";
import {
  buildFaqSchema,
  LocationFaqs,
  LocationRelatedLinks,
  LocationSections,
} from "@/components/real-estate-crm/LocationPageSections";
import { REAL_ESTATE_CRM_LOCATIONS } from "@/data/realEstateCrmLocations";
import {
  getCityHeroImageAlt,
  getCityHeroImagePath,
} from "@/lib/real-estate-crm-location-images";
import { SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{
    country: string;
    city: string;
  }>;
};

function getCity(countrySlug: string, citySlug: string) {
  const country = REAL_ESTATE_CRM_LOCATIONS.find(
    (item) => item.slug === countrySlug
  );

  if (!country) return null;

  const city = country.cities.find((item) => item.slug === citySlug);

  if (!city) return null;

  return { country, city };
}

export function generateStaticParams() {
  return REAL_ESTATE_CRM_LOCATIONS.flatMap((country) =>
    country.cities.map((city) => ({
      country: country.slug,
      city: city.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: countrySlug, city: citySlug } = await params;

  const result = getCity(countrySlug, citySlug);

  if (!result) {
    return {};
  }

  const { city } = result;

  const canonical = `${SITE_URL}/real-estate-crm/${countrySlug}/${citySlug}`;
  const heroImage = getCityHeroImagePath(countrySlug, citySlug);
  const heroAlt = getCityHeroImageAlt(city.name, city.countryName);

  return {
    title: city.title,
    description: city.description,
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: city.title,
      description: city.description,
      url: canonical,
      type: "website",
      images: [{ url: `${SITE_URL}${heroImage}`, alt: heroAlt }],
    },
  };
}

export default async function RealEstateCrmCityPage({ params }: Props) {
  const { country: countrySlug, city: citySlug } = await params;

  const result = getCity(countrySlug, citySlug);

  if (!result) {
    notFound();
  }

  const { country, city } = result;

  const canonical = `${SITE_URL}/real-estate-crm/${countrySlug}/${citySlug}`;
  const heroImage = getCityHeroImagePath(countrySlug, citySlug);
  const heroAlt = getCityHeroImageAlt(city.name, city.countryName);
  const faqSchema = city.faqs?.length ? buildFaqSchema(city.faqs) : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Brosavo",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Real Estate CRM",
        item: `${SITE_URL}/real-estate-crm`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: country.name,
        item: `${SITE_URL}/real-estate-crm/${countrySlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: city.name,
        item: canonical,
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      ) : null}

      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <Link
              href="/real-estate-crm"
              className="inline-flex items-center rounded-full border border-accent-blue/20 bg-accent-blue/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-accent-blue transition hover:bg-accent-blue/10"
            >
              Real Estate CRM
            </Link>

            <h1 className="mt-7 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              {city.heading ?? (
                <>
                  Real Estate CRM Software
                  <br />
                  <span className="text-gradient-accent">
                    for {city.name}.
                  </span>
                </>
              )}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {city.intro}
            </p>

            <div className="mx-auto mt-10 max-w-4xl">
              <LocationHeroImage
                src={heroImage}
                alt={heroAlt}
                label={`${city.name}, ${city.countryName} real estate CRM hero`}
                priority
              />
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="https://crm.brosavo.com"
                className="rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:-translate-y-0.5"
              >
                Start Free 14-Day Trial
              </Link>

              <Link
                href="/real-estate-crm"
                className="rounded-full border border-border/70 bg-background px-6 py-3.5 text-sm font-medium transition hover:-translate-y-0.5"
              >
                See all Real Estate CRM features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">
              Real estate CRM for {city.name}
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              {city.bodyHeading ??
                `Manage your real estate sales workflow in ${city.name}.`}
            </h2>

            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              {city.bodyIntro ??
                `Brosavo helps real estate teams in ${city.name} manage leads, customers, property inventory, follow-ups and sales opportunities from one connected CRM.`}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {city.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-border/70 bg-background p-6"
                >
                  <span className="text-accent-blue">✦</span>

                  <h3 className="mt-4 text-sm font-semibold">{highlight}</h3>

                  <p className="mt-2 text-xs leading-5 text-muted">
                    Keep this part of your real estate sales operation
                    organized in one place.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {city.sections?.length ? (
        <LocationSections sections={city.sections} />
      ) : null}

      {city.relatedLinks?.length ? (
        <LocationRelatedLinks links={city.relatedLinks} />
      ) : null}

      {city.faqs?.length ? <LocationFaqs faqs={city.faqs} /> : null}

      <section className="pb-20 sm:pb-24">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Ready to organize your real estate sales operation?
            </h2>

            <p className="mt-4 text-muted">
              Start with Brosavo Real Estate CRM and build a repeatable sales
              workflow for your team in {city.name}.
            </p>

            <Link
              href="https://crm.brosavo.com"
              className="mt-7 inline-flex rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background"
            >
              Start Free 14-Day Trial
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
