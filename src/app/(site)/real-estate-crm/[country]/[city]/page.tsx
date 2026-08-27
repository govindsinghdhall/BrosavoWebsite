import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { REAL_ESTATE_CRM_LOCATIONS } from "@/data/realEstateCrmLocations";
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

  const city = country.cities.find(
    (item) => item.slug === citySlug
  );

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

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { country: countrySlug, city: citySlug } = await params;

  const result = getCity(countrySlug, citySlug);

  if (!result) {
    return {};
  }

  const { city } = result;

  const canonical =
    `${SITE_URL}/real-estate-crm/${countrySlug}/${citySlug}`;

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
    },
  };
}

export default async function RealEstateCrmCityPage({
  params,
}: Props) {
  const { country: countrySlug, city: citySlug } = await params;

  const result = getCity(countrySlug, citySlug);

  if (!result) {
    notFound();
  }

  const { country, city } = result;

  const canonical =
    `${SITE_URL}/real-estate-crm/${countrySlug}/${citySlug}`;

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

      {/* HERO */}

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

      {/* CITY CONTENT */}

      <section className="relative py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">
              Real estate CRM for {city.name}
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Manage your real estate sales workflow from one platform.
            </h2>

            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              Brosavo helps real estate agents, brokers, agencies and
              property teams in {city.name} manage leads, customers,
              property inventory, follow-ups and sales opportunities
              from one connected CRM.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {city.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-border/70 bg-background p-6"
                >
                  <span className="text-accent-blue">✦</span>

                  <h3 className="mt-4 text-sm font-semibold">
                    {highlight}
                  </h3>

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

      {/* CAPABILITIES */}

      <section className="bg-surface py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-violet">
              CRM capabilities
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              A complete real estate CRM for {city.name}.
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Lead Management",
                  `Capture and organize real estate enquiries from ${city.name} prospects.`,
                ],
                [
                  "Property Inventory",
                  "Keep listings, availability, pricing and property information organized.",
                ],
                [
                  "Customer Management",
                  "Keep customer requirements, property interests and interactions connected.",
                ],
                [
                  "Sales Pipeline",
                  "Track opportunities from qualification through closing.",
                ],
                [
                  "Follow-ups & Tasks",
                  "Keep next actions, reminders and sales activity visible to your team.",
                ],
                [
                  "WhatsApp",
                  "Connect customer engagement workflows with your CRM sales process.",
                ],
              ].map(([title, description]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-border/70 bg-background p-6"
                >
                  <h3 className="text-base font-semibold">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}

      <section className="py-16 sm:py-20">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-4xl rounded-3xl border border-border/70 bg-surface p-8 sm:p-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">
              Explore Brosavo
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Build a better real estate sales process.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              Explore the complete Brosavo Real Estate CRM and see how
              lead management, property inventory, sales pipelines,
              WhatsApp workflows and analytics work together.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/real-estate-crm"
                className="inline-flex justify-center rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background"
              >
                Open the Real Estate CRM platform
              </Link>

              <Link
                href={`/real-estate-crm/${countrySlug}`}
                className="inline-flex justify-center rounded-full border border-border/70 bg-background px-6 py-3.5 text-sm font-medium"
              >
                Real Estate CRM in {country.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="pb-20 sm:pb-24">
        <div className="container-wide px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Ready to organize your real estate sales operation?
            </h2>

            <p className="mt-4 text-muted">
              Start with Brosavo Real Estate CRM and build a repeatable
              sales workflow for your team.
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