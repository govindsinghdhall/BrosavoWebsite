import type {
  CityLocation,
  CountryLocation,
  LocationFaq,
  LocationLink,
  LocationSection,
} from "@/data/realEstateCrmLocationTypes";

type RegionKey =
  | "india"
  | "canada"
  | "united-states"
  | "united-kingdom"
  | "australia";

type BaseCity = {
  slug: string;
  name: string;
  countrySlug: RegionKey;
  countryName: string;
  heading?: string;
};

const SHARED_PRODUCT_LINKS: LocationLink[] = [
  { href: "/real-estate-crm-for-agents", label: "CRM for real estate agents" },
  { href: "/real-estate-crm-for-brokers", label: "CRM for real estate brokers" },
  { href: "/real-estate-crm-for-realtors", label: "CRM for realtors" },
  { href: "/real-estate-lead-management", label: "Real estate lead management" },
  { href: "/real-estate-sales-crm", label: "Real estate sales CRM" },
  { href: "/real-estate-crm", label: "Real Estate CRM platform" },
];

function sharedFaqs(placeName: string, isCity: boolean): LocationFaq[] {
  const scope = isCity
    ? `in ${placeName}`
    : `in ${placeName}`;

  return [
    {
      question: "What is a real estate CRM?",
      answer:
        "A real estate CRM is software that helps agents, brokers and agencies manage leads, customers, property information, follow-ups and sales opportunities from one platform instead of scattered tools.",
    },
    {
      question: `Is Brosavo a real estate CRM ${scope}?`,
      answer: `Yes. Brosavo is real estate CRM software that teams ${scope} can use to manage leads, properties, follow-ups and sales pipelines.`,
    },
    {
      question: "Does Brosavo support real estate lead management?",
      answer:
        "Yes. Brosavo includes lead capture, qualification, assignment, follow-up tracking and conversion workflows as core CRM capabilities.",
    },
    {
      question: "Can Brosavo manage property inventory?",
      answer:
        "Yes. Brosavo includes property inventory management and property matching so customer requirements can be connected to available listings within the sales workflow.",
    },
    {
      question: "Does Brosavo support real estate sales pipelines?",
      answer:
        "Yes. Sales pipeline management is a core Brosavo capability. Teams can track opportunities through defined stages from enquiry through follow-up and conversion.",
    },
    {
      question: "Can Brosavo be used by real estate agencies?",
      answer:
        "Yes. Agencies and brokerages can use Brosavo for team collaboration, lead ownership, permissions, shared pipelines and reporting across agents.",
    },
  ];
}

function agentTerm(region: RegionKey): string {
  if (region === "united-kingdom") return "estate agents";
  if (region === "canada" || region === "united-states") return "agents and realtors";
  return "agents and brokers";
}

function buildCountrySections(
  region: RegionKey,
  countryName: string,
  cityNames: string[]
): LocationSection[] {
  const citiesList =
    cityNames.length > 0
      ? cityNames.slice(0, 6).join(", ")
      : "major markets";

  if (region === "united-kingdom") {
    return [
      {
        title: "Estate agent CRM for independent agents",
        paragraphs: [
          `Independent estate agents in ${countryName} need one place for applicant enquiries, listing availability, viewings and follow-ups. Brosavo keeps that work on the same record as the sales pipeline.`,
          "Instead of splitting applicants across email and spreadsheets, teams can manage the day-to-day estate agency workflow in one CRM.",
        ],
        bullets: [
          "Applicant and vendor records",
          "Listing inventory",
          "Follow-up reminders",
          "Sales pipeline stages",
        ],
      },
      {
        title: "Estate agency lead management",
        paragraphs: [
          "Incoming enquiries need a clear owner and next action. Brosavo helps teams capture leads, assign responsibility, track applicant activity and maintain follow-up history.",
          "Centralized lead management gives agents and managers a clearer view of which opportunities are active and which need attention.",
        ],
        bullets: [
          "Lead capture and intake",
          "Lead assignment",
          "Applicant activity history",
          "Follow-up workflows",
          "Conversion tracking",
        ],
      },
      {
        title: "Listings and customer management",
        paragraphs: [
          "Estate agency sales depend on matching the right listing to the right applicant. Brosavo connects customer requirements with property inventory so teams see availability and context together.",
        ],
        bullets: [
          "Listing inventory",
          "Applicant requirements",
          "Property matching",
          "Opportunity records",
        ],
      },
      {
        title: "Sales pipeline and follow-up management",
        paragraphs: [
          "Brosavo supports a structured workflow: enquiry, qualification, property matching, follow-up and conversion. Pipeline stages and tasks keep opportunities moving.",
        ],
        bullets: [
          "Pipeline stages",
          "Qualification and next actions",
          "Follow-up management",
          "Pipeline reporting",
        ],
      },
      {
        title: "CRM for estate agencies and multi-desk offices",
        paragraphs: [
          "The same CRM can support an independent agent, a small team or a multi-desk estate agency with assignments, permissions and shared reporting.",
        ],
        bullets: [
          "Team management",
          "Lead assignment",
          "Permissions",
          "Shared pipeline visibility",
        ],
      },
      {
        title: `Estate agent CRM for ${citiesList}`,
        paragraphs: [
          `Brosavo includes dedicated pages for ${citiesList}. Use this ${countryName} page for national product context, then open the city page that matches your market.`,
        ],
        bullets: cityNames.map((city) => `Estate agent CRM in ${city}`),
      },
    ];
  }

  if (region === "australia") {
    return [
      {
        title: "CRM for Australian real estate agencies",
        paragraphs: [
          `Agencies in ${countryName} capture enquiries from websites, portals and campaigns. Brosavo keeps those leads next to listing inventory, ownership and the next follow-up.`,
        ],
        bullets: [
          "Lead capture and ownership",
          "Listing inventory",
          "Follow-up tasks",
          "Sales pipeline",
        ],
      },
      {
        title: "Buyer’s agent workflows",
        paragraphs: [
          "Buyer’s agents work from search briefs, shortlists and client conversations. Brosavo can hold the buyer requirement, matched properties and follow-ups on one record.",
        ],
        bullets: [
          "Buyer requirements",
          "Property matching",
          "Shortlist tracking",
          "Client follow-up",
        ],
      },
      {
        title: "Real estate lead management",
        paragraphs: [
          "Incoming enquiries need a clear owner and status. Brosavo helps Australian teams capture leads, assign responsibility and maintain follow-up history in one place.",
        ],
        bullets: [
          "Lead assignment",
          "Customer activity",
          "Follow-up workflows",
          "Conversion tracking",
        ],
      },
      {
        title: "Property sales pipeline and follow-ups",
        paragraphs: [
          "Brosavo supports enquiry → qualification → property matching → follow-up → conversion. Pipeline stages give managers visibility into active opportunities.",
        ],
        bullets: [
          "Opportunity stages",
          "Next actions",
          "Property matching",
          "Team reporting",
        ],
      },
      {
        title: "CRM for agencies and sales teams",
        paragraphs: [
          "Individual agents, buyer’s agents and agency offices can use the same product with team management, assignments and reporting where needed.",
        ],
        bullets: [
          "Team collaboration",
          "Lead ownership",
          "Shared pipelines",
          "Activity reporting",
        ],
      },
      {
        title: `Real estate CRM for ${citiesList}`,
        paragraphs: [
          `Dedicated city pages cover ${citiesList}. Start here for Australia-wide product context, then open your city page for local information.`,
        ],
        bullets: cityNames.map((city) => `Real estate CRM in ${city}`),
      },
    ];
  }

  if (region === "india") {
    return [
      {
        title: `Real estate CRM for Indian agents and brokers`,
        paragraphs: [
          `Real estate teams in ${countryName} manage portal enquiries, site visits, negotiations and repeat follow-ups. Brosavo keeps leads, customer requirements, property inventory and opportunities on one record.`,
          "Teams can reduce reliance on spreadsheets and disconnected WhatsApp threads by running sales activity in one CRM.",
        ],
        bullets: [
          "Lead and enquiry management",
          "Customer requirement tracking",
          "Property inventory",
          "Follow-up tasks",
          "Sales pipeline",
        ],
      },
      {
        title: "Real estate lead management in India",
        paragraphs: [
          "Enquiries from websites, property portals and campaigns need clear ownership. Brosavo helps teams capture leads, assign agents, track activity and maintain follow-up history.",
        ],
        bullets: [
          "Lead capture",
          "Lead assignment",
          "Source tracking",
          "Follow-up workflows",
          "Conversion tracking",
        ],
      },
      {
        title: "Property and customer management",
        paragraphs: [
          "Brosavo connects buyer or tenant requirements with property inventory so teams can match listings, track availability and keep conversations grounded in current stock.",
        ],
        bullets: [
          "Property inventory",
          "Customer records",
          "Property matching",
          "Opportunity tracking",
        ],
      },
      {
        title: "Sales pipeline and follow-up management",
        paragraphs: [
          "Structure the sales process from first enquiry through qualification, property matching, follow-up and closure. Tasks and pipeline stages keep the next action visible.",
        ],
        bullets: [
          "Pipeline stages",
          "Qualification",
          "Property matching",
          "Follow-up management",
        ],
      },
      {
        title: "CRM for brokerages, agencies and developers",
        paragraphs: [
          "Brokerages and agencies can use team management, assignments and reporting. Developers managing project sales can use the same platform for inventory and pipeline visibility.",
        ],
        bullets: [
          "Team management",
          "Lead assignment",
          "Permissions",
          "Pipeline reporting",
        ],
      },
      {
        title: `Real estate CRM for ${citiesList}`,
        paragraphs: [
          `City pages are available for ${citiesList}. Use this India page for national context, then open the city that matches your market.`,
        ],
        bullets: cityNames.map((city) => `Real estate CRM in ${city}`),
      },
    ];
  }

  // canada + united-states (and default)
  const term = agentTerm(region);

  return [
    {
      title: `Real estate CRM for ${countryName} ${term}`,
      paragraphs: [
        `${countryName} ${term} handle buyer and seller enquiries, property questions and follow-ups. Brosavo keeps leads, requirements, property information and opportunities on one record.`,
        "Teams can manage day-to-day sales work in one CRM instead of scattered email and spreadsheets.",
      ],
      bullets: [
        "Lead and enquiry management",
        "Customer requirement tracking",
        "Property inventory",
        "Follow-up tasks",
        "Sales opportunity tracking",
      ],
    },
    {
      title: `Real estate lead management in ${countryName}`,
      paragraphs: [
        "Incoming enquiries from websites, campaigns and referrals need a clear owner. Brosavo helps teams capture leads, assign responsibility and track follow-up history.",
      ],
      bullets: [
        "Lead capture and intake",
        "Lead assignment",
        "Customer activity history",
        "Follow-up workflows",
        "Conversion tracking",
      ],
    },
    {
      title: "Property and customer management",
      paragraphs: [
        "Brosavo connects customer requirements with property inventory so teams see listings, availability and buyer or seller context together.",
      ],
      bullets: [
        "Property inventory management",
        "Customer records",
        "Property matching",
        "Opportunity records",
      ],
    },
    {
      title: "Real estate sales pipeline and follow-up management",
      paragraphs: [
        "Brosavo supports enquiry → qualification → property matching → follow-up → conversion. Pipeline stages and tasks keep opportunities moving.",
      ],
      bullets: [
        "Sales pipeline stages",
        "Qualification and next actions",
        "Follow-up management",
        "Pipeline reporting",
      ],
    },
    {
      title: `CRM for ${countryName} brokerages and agencies`,
      paragraphs: [
        "The same CRM supports individual agents, small teams and multi-agent offices with assignments, permissions and reporting.",
      ],
      bullets: [
        "Team management",
        "Lead assignment",
        "Permissions",
        "Shared pipeline visibility",
      ],
    },
    {
      title: `Real estate CRM for ${citiesList}`,
      paragraphs: [
        `Dedicated pages cover ${citiesList}. Use this ${countryName} page for national context, then open your city page.`,
      ],
      bullets: cityNames.map((city) => `Real estate CRM in ${city}`),
    },
  ];
}

function countryRelatedLinks(
  region: RegionKey,
  countrySlug: string
): LocationLink[] {
  const links: LocationLink[] = [...SHARED_PRODUCT_LINKS];

  if (region === "india") {
    links.unshift(
      {
        href: "/best-real-estate-crm-india",
        label: "Best real estate CRM in India",
      },
      {
        href: "/how-to-sync-99acres-and-magicbricks-leads-to-crm",
        label: "Sync 99acres and MagicBricks leads",
      }
    );
  }

  if (region === "canada") {
    links.unshift(
      {
        href: "/best-crm-for-realtors-canada",
        label: "Best CRM for realtors in Canada",
      },
      { href: "/real-estate-crm-ontario", label: "Real estate CRM in Ontario" }
    );
  }

  if (region === "united-kingdom") {
    links.unshift({
      href: "/best-real-estate-crm-guide",
      label: "Compare estate agent CRMs",
    });
    links.push({
      href: "/real-estate-crm-for-brokerages",
      label: "CRM for multi-agent offices",
    });
  }

  if (region === "australia") {
    links.unshift({
      href: `/real-estate-crm/${countrySlug}/melbourne`,
      label: "Real estate CRM in Melbourne",
    });
  }

  return links;
}

export function enrichCountry(
  country: CountryLocation,
  region: RegionKey
): CountryLocation {
  const cityNames = country.cities.map((c) => c.name);
  const enrichedCities = country.cities.map((city) =>
    enrichCity(city, region, country.name)
  );

  if (
    (country.sections?.length ?? 0) >= 6 &&
    (country.faqs?.length ?? 0) >= 6
  ) {
    return { ...country, cities: enrichedCities };
  }

  return {
    ...country,
    bodyHeading:
      country.bodyHeading ??
      (region === "united-kingdom"
        ? "CRM for estate agents and estate agencies."
        : `Real estate CRM software for ${country.name} sales teams.`),
    bodyIntro:
      country.bodyIntro ??
      `Run enquiries, property inventory, follow-ups and pipelines in one Brosavo product. This page describes the CRM for ${country.name}; comparison articles stay on the blog.`,
    sections:
      country.sections ?? buildCountrySections(region, country.name, cityNames),
    faqs: country.faqs ?? sharedFaqs(country.name, false),
    relatedLinks:
      country.relatedLinks ?? countryRelatedLinks(region, country.slug),
    cities: enrichedCities,
  };
}

function buildCitySections(
  region: RegionKey,
  cityName: string,
  countryName: string
): LocationSection[] {
  if (region === "united-kingdom") {
    return [
      {
        title: `Estate agent CRM for ${cityName}`,
        paragraphs: [
          `Estate agents in ${cityName} manage applicant enquiries, listings, viewings and follow-ups. Brosavo keeps that workflow on one record with a visible sales pipeline.`,
        ],
        bullets: [
          "Applicant records",
          "Listing inventory",
          "Viewing follow-ups",
          "Pipeline stages",
        ],
      },
      {
        title: "Lead and enquiry management",
        paragraphs: [
          `Capture and assign enquiries from ${cityName} applicants and vendors. Track activity and follow-ups without losing context between channels.`,
        ],
        bullets: [
          "Lead capture",
          "Assignment",
          "Activity history",
          "Follow-up tasks",
        ],
      },
      {
        title: "Listings, matching and pipeline",
        paragraphs: [
          "Connect applicant requirements with available listings. Move opportunities through qualification, matching, follow-up and conversion.",
        ],
        bullets: [
          "Property matching",
          "Listing inventory",
          "Sales pipeline",
          "Reporting",
        ],
      },
    ];
  }

  return [
    {
      title: `Real estate CRM for ${cityName}`,
      paragraphs: [
        `Real estate teams in ${cityName}, ${countryName} manage enquiries, property inventory, customer requirements and follow-ups. Brosavo centralizes that work in one CRM.`,
      ],
      bullets: [
        "Lead management",
        "Property inventory",
        "Customer records",
        "Sales pipeline",
      ],
    },
    {
      title: `Lead management in ${cityName}`,
      paragraphs: [
        "Capture enquiries, assign ownership and keep follow-up history on the same record so active prospects do not get lost.",
      ],
      bullets: [
        "Lead capture",
        "Lead assignment",
        "Follow-up workflows",
        "Conversion tracking",
      ],
    },
    {
      title: "Property sales workflow",
      paragraphs: [
        "Run enquiry → qualification → property matching → follow-up → conversion with pipeline stages and tasks your team can see.",
      ],
      bullets: [
        "Property matching",
        "Pipeline stages",
        "Next actions",
        "Team visibility",
      ],
    },
  ];
}

export function enrichCity(
  city: CityLocation,
  region: RegionKey,
  countryName: string
): CityLocation {
  const isUk = region === "united-kingdom";
  const defaultTitle = isUk
    ? `Estate Agent CRM Software in ${city.name} | Brosavo`
    : `Real Estate CRM Software in ${city.name} | Brosavo`;

  const defaultHeading = isUk
    ? `Estate Agent CRM Software for ${city.name}`
    : undefined;

  const defaultDescription = isUk
    ? `Brosavo helps ${city.name} estate agents and agencies manage applicant enquiries, listings, follow-ups and sales pipelines.`
    : `Brosavo helps ${city.name} real estate agents, brokers and agencies manage leads, properties, follow-ups and sales pipelines.`;

  const defaultIntro = isUk
    ? `Keep ${city.name} applicant enquiries, listing inventory, viewings and follow-ups in one estate agent CRM.`
    : `Brosavo helps real estate teams in ${city.name} manage enquiries, property inventory, customer requirements and sales opportunities from one connected CRM.`;

  return {
    ...city,
    title: city.title || defaultTitle,
    description: city.description || defaultDescription,
    intro: city.intro || defaultIntro,
    heading: city.heading ?? defaultHeading,
    bodyHeading:
      city.bodyHeading ??
      (isUk
        ? `Manage your estate agency workflow in ${city.name}.`
        : `Manage your real estate sales workflow in ${city.name}.`),
    bodyIntro:
      city.bodyIntro ??
      `Brosavo helps ${agentTerm(region)} in ${city.name} organize leads, customers, property inventory, follow-ups and sales opportunities from one CRM.`,
    highlights: city.highlights?.length
      ? city.highlights
      : [
          "Lead management",
          "Property inventory",
          "Customer management",
          "Sales pipeline",
          "Follow-ups",
          "Analytics",
        ],
    sections: city.sections ?? buildCitySections(region, city.name, countryName),
    faqs: city.faqs ?? sharedFaqs(`${city.name}, ${countryName}`, true),
    relatedLinks: city.relatedLinks ?? [
      {
        href: `/real-estate-crm/${city.countrySlug}`,
        label: `Real estate CRM in ${countryName}`,
      },
      ...SHARED_PRODUCT_LINKS.slice(0, 4),
    ],
  };
}

export const REAL_ESTATE_CRM_LOCATIONS_ENRICHED = (
  locations: CountryLocation[]
): CountryLocation[] =>
  locations.map((country) =>
    enrichCountry(country, country.slug as RegionKey)
  );
