import {
  AGENCY_MARKETS,
  getAgencyCity,
  getAgencyCountry,
  type AgencyCity,
  type AgencyCountry,
} from "@/data/agencyMarkets";
import {
  getDigitalService,
  getLocationServices,
  type DigitalFaq,
  type DigitalGrowthService,
} from "@/data/digitalGrowthServices";
import { SITE_URL } from "@/lib/site";

export function getDigitalServiceOrThrow(slug: string): DigitalGrowthService {
  const service = getDigitalService(slug);
  if (!service) {
    throw new Error(`Unknown digital service: ${slug}`);
  }
  return service;
}

export function digitalServicePath(slug: string) {
  return `/${slug}`;
}

export function digitalCountryPath(serviceSlug: string, countrySlug: string) {
  return `/${serviceSlug}/${countrySlug}`;
}

export function digitalCityPath(
  serviceSlug: string,
  countrySlug: string,
  citySlug: string
) {
  return `/${serviceSlug}/${countrySlug}/${citySlug}`;
}

export function generateDigitalCountryParams(serviceSlug: string) {
  const service = getDigitalServiceOrThrow(serviceSlug);
  if (!service.hasLocations) return [];

  return AGENCY_MARKETS.map((country) => ({
    country: country.slug,
  }));
}

export function generateDigitalCityParams(serviceSlug: string) {
  const service = getDigitalServiceOrThrow(serviceSlug);
  if (!service.hasLocations) return [];

  return AGENCY_MARKETS.flatMap((country) =>
    country.cities.map((city) => ({
      country: country.slug,
      city: city.slug,
    }))
  );
}

export type DigitalLocationCopy = {
  title: string;
  description: string;
  heading: string;
  intro: string;
  bodyHeading: string;
  bodyIntro: string;
  highlights: string[];
  faqs: DigitalFaq[];
  sections: Array<{ title: string; paragraphs: string[] }>;
};

function cityHighlights(service: DigitalGrowthService, city: string) {
  return [
    `${service.name} in ${city}`,
    "Conversion-focused websites",
    "SEO, AEO and GEO architecture",
    "Google Ads landing-page QA",
    "Analytics and CRM-ready enquiries",
    "Local search and city pages",
  ];
}

export function buildCountryCopy(
  service: DigitalGrowthService,
  country: AgencyCountry
): DigitalLocationCopy {
  return {
    title: `${service.name} in ${country.name} | Brosavo`,
    description: `Brosavo provides ${service.name.toLowerCase()} in ${country.name} for businesses that need modern websites, SEO, AEO, GEO and conversion-focused digital marketing.`,
    heading: `${service.name} in ${country.name}`,
    intro: `Brosavo helps ${country.adjective} businesses get found in Google, AI answers and generative search — then turn that demand into enquiries with ${service.shortName} built as a software system, not a one-off brochure.`,
    bodyHeading: `${service.name} for ${country.adjective} teams that want pipeline, not just a pretty site.`,
    bodyIntro: `Whether you operate nationally or across ${country.name}'s major cities, we combine website engineering with SEO, AEO and GEO so paid and organic traffic share one conversion layer.`,
    highlights: [
      `${service.name} for ${country.name}`,
      "Website development",
      "SEO / AEO / GEO",
      "Local and national search",
      "Ads landing systems",
      "CRM-connected lead capture",
    ],
    faqs: [
      {
        question: `Do you offer ${service.name.toLowerCase()} in ${country.name}?`,
        answer: `Yes. Brosavo delivers ${service.shortName} for ${country.adjective} companies from our Canada × India delivery model, with location pages for major cities.`,
      },
      {
        question: "Is this only for real estate?",
        answer:
          "No. Real estate is a flagship vertical. The same stack serves services, SaaS, ecommerce and local businesses.",
      },
      {
        question: "Can this support Google Ads?",
        answer:
          "Yes. Landing-page speed, message match and conversion tracking are part of how we ship websites and marketing pages.",
      },
    ],
    sections: [
      {
        title: `How Brosavo approaches ${service.name.toLowerCase()} in ${country.name}`,
        paragraphs: [
          `Search behaviour in ${country.name} is split between classic Google results, Maps, and AI-generated answers. We plan pages for all three: SEO for ranked lists, AEO for extractable answers, and GEO for generative citations.`,
          `Delivery includes information architecture, on-site implementation and measurement — not a slide deck your developers never ship.`,
        ],
      },
    ],
  };
}

export function buildCityCopy(
  service: DigitalGrowthService,
  country: AgencyCountry,
  city: AgencyCity
): DigitalLocationCopy {
  return {
    title: `${service.name} in ${city.name} | Brosavo`,
    description: `Brosavo provides ${service.name.toLowerCase()} in ${city.name}, ${country.name}. Build a conversion-focused website with SEO, AEO, GEO and Google Ads-ready landing pages.`,
    heading: `${service.name} in ${city.name}`,
    intro: `Work with Brosavo for ${service.shortName} in ${city.name}: a website and search system designed to win local and high-intent queries, AI answers, and paid traffic — then route enquiries to your team.`,
    bodyHeading: `${service.name} for businesses competing in ${city.name}.`,
    bodyIntro: `Local buyers in ${city.name} compare you in Google, maps, ads and chat assistants in the same week. We build one site architecture that supports all of those surfaces instead of bolting SEO on after launch.`,
    highlights: cityHighlights(service, city.name),
    faqs: [
      {
        question: `Can Brosavo build ${service.shortName} for a company in ${city.name}?`,
        answer: `Yes. ${city.name} is a priority market. We combine remote product engineering with local-intent page architecture for ${city.name}, ${country.name}.`,
      },
      {
        question: "Do you create a unique city page or just swap the name?",
        answer: `City pages describe how we deliver in ${city.name} and link to the national ${service.name.toLowerCase()} hub, related services, and a consultation. We only publish cities we intend to serve.`,
      },
      {
        question: "What should I prepare before a call?",
        answer:
          "Your offer, cities you serve, whether traffic will come from ads or organic, and any existing CRM or WhatsApp workflow.",
      },
    ],
    sections: [
      {
        title: `Website, SEO, AEO and GEO in ${city.name}`,
        paragraphs: [
          `Businesses in ${city.name} lose deals when the site is slow, unclear, or invisible in AI Overviews. Brosavo implements technical SEO, answer modules and generative-ready structure on the production website.`,
          `If you run Google Ads into ${city.name}, we also align landing pages to the queries you bid on so Quality Score and conversion rate can improve together.`,
        ],
      },
      {
        title: `Who this is for in ${city.name}`,
        paragraphs: [
          `Service companies, SaaS, real estate, clinics and multi-location brands that need a credible digital presence in ${city.name} and nearby markets — with measurement back to enquiries, not vanity sessions.`,
        ],
      },
    ],
  };
}

export function relatedServiceLinks(currentSlug: string) {
  return getLocationServices()
    .filter((service) => service.slug !== currentSlug)
    .map((service) => ({
      href: digitalServicePath(service.slug),
      label: service.name,
    }));
}

export function locationJsonLd(options: {
  service: DigitalGrowthService;
  canonical: string;
  name: string;
  description: string;
  areaServed: string;
  faqs: DigitalFaq[];
  breadcrumbs: Array<{ name: string; path: string }>;
}) {
  const { service, canonical, name, description, areaServed, faqs, breadcrumbs } =
    options;

  return [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name,
      description,
      url: canonical,
      areaServed,
      serviceType: service.serviceType,
      provider: {
        "@type": "Organization",
        name: "Brosavo Technologies",
        url: SITE_URL,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.path.startsWith("http") ? item.path : `${SITE_URL}${item.path}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];
}

export function hubJsonLd(service: DigitalGrowthService) {
  const url = `${SITE_URL}${digitalServicePath(service.slug)}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      serviceType: service.serviceType,
      description: service.description,
      url,
      provider: {
        "@type": "Organization",
        name: "Brosavo Technologies",
        url: SITE_URL,
      },
      areaServed: AGENCY_MARKETS.map((country) => country.name),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: service.name,
          item: url,
        },
      ],
    },
  ];
}

export { getAgencyCity, getAgencyCountry };
