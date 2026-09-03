import type { Metadata } from "next";
import Link from "next/link";

import {
  LocationCardImage,
  LocationHeroImage,
} from "@/components/real-estate-crm/LocationHeroImage";
import {
  buildFaqSchema,
  LocationFaqs,
  LocationRelatedLinks,
  LocationSections,
} from "@/components/real-estate-crm/LocationPageSections";
import {
  REAL_ESTATE_CRM_LOCATIONS,
  type CountryLocation,
} from "@/data/realEstateCrmLocations";
import {
  getCityCardImageAlt,
  getCityCardImagePath,
  getCountryHeroImageAlt,
  getCountryHeroImagePath,
} from "@/lib/real-estate-crm-location-images";
import { SITE_URL } from "@/lib/site";

interface CountryPageProps {
  params: Promise<{
    country: string;
  }>;
}

function getCountry(countrySlug: string): CountryLocation | undefined {
  return REAL_ESTATE_CRM_LOCATIONS.find(
    (country) => country.slug === countrySlug
  );
}

export function generateStaticParams() {
  return REAL_ESTATE_CRM_LOCATIONS.map((country) => ({
    country: country.slug,
  }));
}

export async function generateMetadata({
  params,
}: CountryPageProps): Promise<Metadata> {
  const { country: countrySlug } = await params;

  const country = getCountry(countrySlug);

  if (!country) {
    return {};
  }

  const canonical = `${SITE_URL}/real-estate-crm/${country.slug}`;
  const heroImage = getCountryHeroImagePath(country.slug);
  const heroAlt = getCountryHeroImageAlt(country.name);

  return {
    title: country.title,
    description: country.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: country.title,
      description: country.description,
      url: canonical,
      type: "website",
      images: [{ url: `${SITE_URL}${heroImage}`, alt: heroAlt }],
    },
  };
}

export default async function RealEstateCrmCountryPage({
  params,
}: CountryPageProps) {
  const { country: countrySlug } = await params;

  const country = getCountry(countrySlug);

  if (!country) {
    return null;
  }

  const canonical = `${SITE_URL}/real-estate-crm/${country.slug}`;
  const heading =
    country.heading ?? `Real Estate CRM Software in ${country.name}`;
  const bodyHeading =
    country.bodyHeading ??
    "Manage your real estate sales operation from one platform.";
  const bodyIntro =
    country.bodyIntro ??
    "Brosavo helps real estate agents, brokers, agencies and property teams manage leads, customers, property inventory, follow-ups, sales pipelines and communication from one connected CRM.";

  const faqSchema = country.faqs?.length ? buildFaqSchema(country.faqs) : null;
  const heroImage = getCountryHeroImagePath(country.slug);
  const heroAlt = getCountryHeroImageAlt(country.name);

  return (
    <div>
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
              {heading}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {country.intro}
            </p>

            <div className="mx-auto mt-10 max-w-4xl">
              <LocationHeroImage
                src={heroImage}
                alt={heroAlt}
                label={`${country.name} real estate CRM hero`}
                priority
              />
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/real-estate-crm"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:-translate-y-0.5"
              >
                See all Real Estate CRM features
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-border/70 bg-background px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">
              Real estate CRM for {country.name}
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              {bodyHeading}
            </h2>

            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              {bodyIntro}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {country.cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/real-estate-crm/${country.slug}/${city.slug}`}
                  className="group overflow-hidden rounded-2xl border border-border/70 bg-background transition duration-300 hover:-translate-y-1 hover:border-accent-blue/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                >
                  <LocationCardImage
                    src={getCityCardImagePath(country.slug, city.slug)}
                    alt={getCityCardImageAlt(city.name, country.name)}
                    cityName={city.name}
                  />

                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-[0.16em] text-accent-blue">
                        {country.name}
                      </span>

                      <span className="text-muted transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold">
                      {country.slug === "united-kingdom"
                        ? `Estate agent CRM in ${city.name}`
                        : `Real Estate CRM in ${city.name}`}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted">
                      Explore Brosavo CRM for real estate businesses in{" "}
                      {city.name}.
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {country.sections?.length ? (
        <LocationSections sections={country.sections} />
      ) : null}

      {country.relatedLinks?.length ? (
        <LocationRelatedLinks links={country.relatedLinks} />
      ) : null}

      {country.faqs?.length ? <LocationFaqs faqs={country.faqs} /> : null}

      <section className="bg-surface py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Lead management",
                "Property inventory",
                "Sales pipeline",
                "WhatsApp workflows",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border/70 bg-background p-5"
                >
                  <span className="text-accent-blue">✦</span>

                  <h3 className="mt-4 text-sm font-semibold">{item}</h3>

                  <p className="mt-2 text-xs leading-5 text-muted">
                    Manage this part of your real estate operation from one
                    connected platform.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                item: canonical,
              },
            ],
          }),
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
    </div>
  );
}
