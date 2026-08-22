import type { Metadata } from "next";
import Link from "next/link";

import {
  REAL_ESTATE_CRM_LOCATIONS,
  type CountryLocation,
} from "@/data/realEstateCrmLocations";

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

  return (
    <main>
      {/* ============================================================
          HERO
      ============================================================ */}

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
              Real Estate CRM Software in{" "}
              <span className="text-gradient-accent">
                {country.name}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {country.intro}
            </p>

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

      {/* ============================================================
          COUNTRY CONTENT
      ============================================================ */}

      <section className="relative py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">
              Real estate CRM for {country.name}
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Manage your real estate sales operation from one platform.
            </h2>

            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              Brosavo helps real estate agents, brokers, agencies and
              property teams manage leads, customers, property inventory,
              follow-ups, sales pipelines and communication from one
              connected CRM.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {country.cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/real-estate-crm/${country.slug}/${city.slug}`}
                  className="group rounded-2xl border border-border/70 bg-background p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-blue/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-[0.16em] text-accent-blue">
                      {country.name}
                    </span>

                    <span className="text-muted transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold">
                    Real Estate CRM in {city.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    Explore Brosavo CRM for real estate businesses in{" "}
                    {city.name}.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          HIGHLIGHTS
      ============================================================ */}

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

                  <h3 className="mt-4 text-sm font-semibold">
                    {item}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-muted">
                    Manage this part of your real estate operation from
                    one connected platform.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BREADCRUMBS
      ============================================================ */}

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
    </main>
  );
}