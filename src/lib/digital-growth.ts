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

const INDEXED_DIGITAL_CITY_KEYS = new Set([
  "india:gurgaon",
  "india:delhi",
  "india:noida",
  "india:mumbai",
  "canada:toronto",
  "canada:vancouver",
]);

export function isIndexedDigitalCity(countrySlug: string, citySlug: string) {
  return INDEXED_DIGITAL_CITY_KEYS.has(`${countrySlug}:${citySlug}`);
}

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

function uniqueIndexedCityCopy(
  service: DigitalGrowthService,
  country: AgencyCountry,
  city: AgencyCity
): DigitalLocationCopy | null {
  const key = `${country.slug}:${city.slug}`;
  const serviceName = service.name;
  const shortName = service.shortName;

  if (key === "india:gurgaon") {
    return {
      title: `${serviceName} in Gurgaon | Golf Course Road, Cyber Hub | Brosavo`,
      description: `Brosavo delivers ${serviceName.toLowerCase()} for Gurgaon teams around Golf Course Road, Cyber Hub and Sohna Road — built for NCR comparison shopping, Google Ads and WhatsApp enquiries.`,
      heading: `${serviceName} in Gurgaon`,
      intro: `Gurgaon buyers and tenants shortlist on the commute between Cyber Hub, DLF, and Golf Course Road. ${shortName} here has to win that comparison: fast pages, project-level proof, and enquiry paths that survive WhatsApp handoffs.`,
      bodyHeading: `${serviceName} for Gurgaon businesses that sell against DLF, Sohna Road and New Gurgaon inventory.`,
      bodyIntro: `Search in Gurugram is not generic NCR SEO. Queries mix millennial office demand, HNI housing on Golf Course Extension, and channel-partner traffic from Delhi. We plan ${shortName} around those intents instead of a national brochure with “Gurgaon” swapped in.`,
      highlights: [
        "Golf Course Road and Cyber Hub landing systems",
        "NCR Google Ads message-match",
        "WhatsApp + CRM enquiry routing",
        "AEO blocks for project and locality FAQs",
        "Page speed for 4G office-park traffic",
        `${serviceName} owned by a product team, not a slide deck`,
      ],
      faqs: [
        {
          question: `Do you build ${shortName} specifically for Gurgaon, or is this a template city page?`,
          answer:
            "Gurgaon is a priority delivery market. Copy, landing architecture and ads QA are written around Golf Course Road, Cyber Hub, Sohna Road and New Gurgaon demand — not a nationwide template.",
        },
        {
          question: "Can you connect website enquiries to a real estate CRM?",
          answer:
            "Yes. Gurgaon teams typically split leads across WhatsApp, portals and Google Ads. We route those into one CRM workflow so Golf Course Road walk-ins and Cyber Hub form fills are not lost in chat threads.",
        },
        {
          question: "Will this help if we already run Google Ads into Gurugram?",
          answer:
            "Yes. We align landing-page headlines, locality proof and load time with the queries you bid on, which is usually where Gurgaon Quality Score leaks.",
        },
      ],
      sections: [
        {
          title: "How Gurgaon search actually works",
          paragraphs: [
            "Office parks around Cyber Hub and Udyog Vihar train people to compare vendors on mobile between meetings. Pages that open slowly or hide the phone number lose the enquiry before a human replies.",
            `Housing demand along Golf Course Road, Golf Course Extension and Sohna Road is project-led. ${shortName} has to support inventory pages, locality clusters and FAQs that AI Overviews can quote — not a single “Properties in Gurgaon” dump.`,
          ],
        },
        {
          title: `What Brosavo ships for ${shortName} in Gurgaon`,
          paragraphs: [
            `We implement ${serviceName.toLowerCase()} as a conversion system: technical SEO, answer-ready modules, and ads landing QA on the same codebase your sales team will actually use.`,
            "Measurement goes to enquiries and CRM stages, not vanity sessions. That matters in Gurugram where CPC is high and channel partners already flood WhatsApp.",
          ],
        },
      ],
    };
  }

  if (key === "india:delhi") {
    return {
      title: `${serviceName} in Delhi | South Delhi, New Delhi & NCR | Brosavo`,
      description: `Brosavo provides ${serviceName.toLowerCase()} in Delhi for brands competing in South Delhi, Central Delhi and NCR search — with SEO, AEO, GEO and ads landing pages that convert.`,
      heading: `${serviceName} in Delhi`,
      intro: `Delhi search is noisy: South Delhi service brands, Central Delhi institutions, and NCR shoppers who still type “Delhi” even when they live in Noida or Gurgaon. ${shortName} has to disambiguate who you serve and make the next step obvious on mobile.`,
      bodyHeading: `${serviceName} for Delhi teams that cannot hide behind a generic NCR website.`,
      bodyIntro: `Google Maps, WhatsApp and high-CPC ads all compete for the same Delhi enquiry. We build one site architecture that supports local pack visibility, extractable answers, and paid landing pages — then send the lead to your team.`,
      highlights: [
        "South Delhi and New Delhi intent mapping",
        "Google Business Profile aligned pages",
        "Hindi + English query coverage where it matters",
        "Ads landing pages for expensive Delhi CPCs",
        "AEO modules for “best in Delhi” questions",
        `${serviceName} with CRM-ready forms`,
      ],
      faqs: [
        {
          question: `Is ${shortName} in Delhi different from a Gurgaon or Noida page?`,
          answer:
            "Yes. Delhi queries often mean South Delhi prestige, Central Delhi institutions, or “NCR but typed Delhi.” We write information architecture for that ambiguity instead of cloning a Gurugram page.",
        },
        {
          question: "Do you work with businesses that serve all of NCR from Delhi?",
          answer:
            "Yes. We keep a Delhi-owned narrative and use internal links to Gurgaon and Noida pages so you do not cannibalize yourself with three identical city URLs.",
        },
        {
          question: "Can you improve Google Ads conversion rate in Delhi?",
          answer:
            "Yes. Delhi CPCs punish slow or mismatched landers. We rebuild message match, proof and form friction on the pages you actually buy traffic into.",
        },
      ],
      sections: [
        {
          title: "Delhi is not a suburb of Gurgaon",
          paragraphs: [
            "South Delhi buyers judge credibility from photography, address clarity and response time. Central Delhi and New Delhi queries often need institutional proof and map-pack hygiene more than lifestyle hero videos.",
            `People still search “Delhi” for work that will close in Noida or Gurugram. ${shortName} should capture that traffic without pretending every lead is Lutyens-adjacent.`,
          ],
        },
        {
          title: `How we deliver ${serviceName.toLowerCase()} in Delhi`,
          paragraphs: [
            "We pair on-page SEO and AEO with landing pages that survive Google Ads Quality Score reviews, then connect forms and WhatsApp to the same CRM your Delhi floor already uses.",
            "If you operate across NCR, Delhi remains the canonical story; Gurgaon and Noida pages cover Golf Course Road and Expressway demand without duplicate paragraphs.",
          ],
        },
      ],
    };
  }

  if (key === "india:noida") {
    return {
      title: `${serviceName} in Noida | Expressway, Sector 18 & Greater Noida | Brosavo`,
      description: `Brosavo builds ${serviceName.toLowerCase()} for Noida and Greater Noida — Expressway inventory, IT-park demand, and conversion pages for Google, Maps and ads.`,
      heading: `${serviceName} in Noida`,
      intro: `Noida demand sits on the Expressway, Sector 62 IT parks, Sector 18 retail, and Greater Noida West inventory. ${shortName} has to speak to that geography — not “Delhi NCR” as a blur.`,
      bodyHeading: `${serviceName} for Noida companies selling into IT parks and Expressway catchments.`,
      bodyIntro: `Buyers compare Noida vs Greater Noida vs Yamuna Expressway projects in the same week. Pages that collapse those markets into one generic NCR block lose both SEO and sales conversations.`,
      highlights: [
        "Noida Expressway and Sector 18 intent",
        "Greater Noida West vs Noida city distinction",
        "IT-park mobile performance",
        "Portal + Google Ads landing alignment",
        "WhatsApp capture for after-hours enquiries",
        `${serviceName} with locality clusters`,
      ],
      faqs: [
        {
          question: `Do you cover Greater Noida as well as Noida city for ${shortName}?`,
          answer:
            "Yes. We keep Noida city, Greater Noida and Expressway intents separate in IA so you do not rank one page for three incompatible searches.",
        },
        {
          question: "Is this only for real estate developers?",
          answer:
            "No. IT services, clinics and education brands in Sector 62 and around Sector 18 need the same conversion stack. Real estate is a large vertical, not the only one.",
        },
        {
          question: "Can enquiries go into Brosavo CRM?",
          answer:
            "Yes. Noida teams often run ads late into the evening. Forms, WhatsApp and call tracking should land in one pipeline, not three inboxes.",
        },
      ],
      sections: [
        {
          title: "Noida search is Expressway-shaped",
          paragraphs: [
            "Queries split between Noida city (established sectors, Sector 18), Noida Expressway (new housing and offices), and Greater Noida / Yamuna Expressway (ticket size and commute stories).",
            `${shortName} should use those clusters in headings, FAQs and internal links. A single “best company in Noida” page cannot answer all three without sounding templated.`,
          ],
        },
        {
          title: `What we implement for ${serviceName.toLowerCase()} in Noida`,
          paragraphs: [
            "Technical SEO, answer modules and ads landers share one codebase. We measure form and WhatsApp conversion by catchment, not by a blended NCR number that hides Expressway waste.",
            "If you also sell in Delhi or Gurgaon, those markets get their own indexed pages. Noida copy stays about sectors, IT parks and the Expressway.",
          ],
        },
      ],
    };
  }

  if (key === "india:mumbai") {
    return {
      title: `${serviceName} in Mumbai | MMR, Bandra to Thane | Brosavo`,
      description: `Brosavo delivers ${serviceName.toLowerCase()} across Mumbai and the MMR — Bandra, Andheri, Thane and Navi Mumbai — with SEO, AEO, GEO and high-CPC ads landers.`,
      heading: `${serviceName} in Mumbai`,
      intro: `Mumbai decisions happen on local trains, in Andheri traffic, and on WhatsApp at 11pm. ${shortName} has to be fast on mid-range Androids and honest about whether you serve Island City, Western Suburbs, Thane or Navi Mumbai.`,
      bodyHeading: `${serviceName} for Mumbai businesses that waste budget on MMR-generic pages.`,
      bodyIntro: `MMR search is hyper-local. A Bandra clinic, a Thane developer and a Navi Mumbai SaaS firm should not share one paragraph with the city name swapped. We write Mumbai as a set of catchments.`,
      highlights: [
        "Western Suburbs vs Island City IA",
        "Thane and Navi Mumbai catchment pages",
        "WhatsApp-first enquiry UX",
        "High-CPC Google Ads landers",
        "Marathi + English where it helps Maps",
        `${serviceName} measured to enquiries`,
      ],
      faqs: [
        {
          question: `Can Brosavo handle ${shortName} for the whole MMR, not just South Mumbai?`,
          answer:
            "Yes. We plan Island City, Western Suburbs, Thane and Navi Mumbai as related but distinct intents so you do not cannibalize one Mumbai URL.",
        },
        {
          question: "Why do Mumbai Google Ads convert poorly even with traffic?",
          answer:
            "Usually message mismatch and slow landers. Mumbai CPCs are unforgiving. We rebuild the page you pay for so locality, offer and form match the keyword.",
        },
        {
          question: "Do you integrate WhatsApp?",
          answer:
            "Yes. Most Mumbai sales floors close on WhatsApp. The website should start that thread with context, then log it in CRM.",
        },
      ],
      sections: [
        {
          title: "Mumbai is many markets under one name",
          paragraphs: [
            "Searchers in Bandra-Khar do not behave like searchers in Thane or Kharghar. Treating “Mumbai” as one SEO bucket produces thin pages Google eventually devalues.",
            `${shortName} here includes catchment-aware landing pages, Maps hygiene, and AEO blocks for the questions Mumbaikars actually ask about travel time, ticket size and trust.`,
          ],
        },
        {
          title: `How Brosavo runs ${serviceName.toLowerCase()} in Mumbai`,
          paragraphs: [
            "We ship performance, structured content and ads QA together, then connect enquiries to CRM so Andheri form fills are not stranded in a shared inbox.",
            "If you advertise across MMR, we keep Mumbai as the indexed commercial page and use on-page sections plus internal links for Thane and Navi Mumbai rather than cloning the same essay twenty times.",
          ],
        },
      ],
    };
  }

  if (key === "canada:toronto") {
    return {
      title: `${serviceName} in Toronto | GTA, downtown & 905 | Brosavo`,
      description: `Brosavo provides ${serviceName.toLowerCase()} in Toronto and the GTA — downtown, North York, Mississauga and Vaughan — with SEO, AEO, GEO and Google Ads landing systems.`,
      heading: `${serviceName} in Toronto`,
      intro: `Toronto buyers compare you against downtown brands, 905 operators, and US-looking SaaS sites. ${shortName} needs Canadian proof, GTA geography, and pages that work in Google, Maps and AI answers.`,
      bodyHeading: `${serviceName} for GTA teams tired of US-template websites.`,
      bodyIntro: `A Toronto page that could equally describe Dallas will not earn trust. We write for PATH commuters, North York bilingual households, and Mississauga/Vaughan demand without pretending the GTA is one neighbourhood.`,
      highlights: [
        "Downtown vs 905 intent split",
        "Google Business Profile + Maps",
        "Canadian spelling, privacy and trust cues",
        "AEO for “best in Toronto” questions",
        "Google Ads landers for competitive GTA CPCs",
        `${serviceName} with CRM-ready capture`,
      ],
      faqs: [
        {
          question: `Do you deliver ${shortName} for the GTA or only downtown Toronto?`,
          answer:
            "Both. Downtown, North York, Mississauga, Vaughan and the rest of the 905 have different queries. We keep Toronto as the commercial hub and structure content so 905 intent is not stuffed into one paragraph.",
        },
        {
          question: "Are you a Toronto agency?",
          answer:
            "Brosavo is Canada × India. Toronto is a priority market we write and engineer for — not a directory listing generated from a city database.",
        },
        {
          question: "Can this support both organic search and Google Ads?",
          answer:
            "Yes. GTA CPCs are high. Organic pages and paid landers share one conversion layer so you are not maintaining two sites.",
        },
      ],
      sections: [
        {
          title: "Toronto search includes the 905 whether you like it or not",
          paragraphs: [
            `People type Toronto when they mean Mississauga, Vaughan or Markham. ${shortName} should capture that without ranking a hollow “Greater Toronto Area” door for every suburb.`,
            "Trust cues matter: Canadian spelling, local case studies, and clear service area. US stock photography and “schedule a demo” copy that ignores time zones underperform here.",
          ],
        },
        {
          title: `What we ship for ${serviceName.toLowerCase()} in Toronto`,
          paragraphs: [
            "Information architecture, Core Web Vitals, FAQ schema, and ads landing QA on production URLs. Enquiries route into CRM with UTM and page context.",
            "Vancouver and other Canadian cities stay separate indexed pages. Toronto copy stays about the GTA, not a national Canada template.",
          ],
        },
      ],
    };
  }

  if (key === "canada:vancouver") {
    return {
      title: `${serviceName} in Vancouver | Lower Mainland | Brosavo`,
      description: `Brosavo delivers ${serviceName.toLowerCase()} in Vancouver and the Lower Mainland — downtown, Richmond, Burnaby and Surrey — for Google, Maps, AI answers and ads.`,
      heading: `${serviceName} in Vancouver`,
      intro: `Vancouver is a small, expensive attention market. ${shortName} has to earn clicks against local agencies and North American brands, with Lower Mainland geography that downtown-only copy misses.`,
      bodyHeading: `${serviceName} for Vancouver companies selling across the Lower Mainland.`,
      bodyIntro: `Richmond, Burnaby, Surrey and the North Shore do not convert from a Gastown hero image. We plan ${shortName} for how people actually search the region — including multilingual queries where they are material.`,
      highlights: [
        "Downtown vs Richmond / Burnaby / Surrey IA",
        "Lower Mainland Maps and local pack",
        "Multilingual search where it is real demand",
        "High-intent landing pages for scarce CPC",
        "AEO for Vancouver-specific questions",
        `${serviceName} with enquiry-to-CRM routing`,
      ],
      faqs: [
        {
          question: `Is your Vancouver ${shortName} page unique or copied from Toronto?`,
          answer:
            "It is unique. Toronto GTA dynamics do not describe Richmond, Surrey or the North Shore. We do not reuse Toronto paragraphs here.",
        },
        {
          question: "Do you work with real estate and other local service brands?",
          answer:
            "Yes. Property, professional services and B2B firms in the Lower Mainland all need the same conversion stack: speed, proof, and a path into CRM.",
        },
        {
          question: "Can you support Google Ads in a small, expensive metro?",
          answer:
            "Yes. Vancouver waste usually comes from broad match plus a generic lander. We tighten message match and page speed on the URLs you bid on.",
        },
      ],
      sections: [
        {
          title: "The Lower Mainland is not downtown Vancouver",
          paragraphs: [
            "Richmond and Burnaby queries, Surrey family demand, and downtown professional services are different jobs. Stuffing them into one “Vancouver SEO” essay is how city pages get ignored.",
            `${shortName} should name those catchments, answer commute and trust questions, and still keep one commercial Vancouver URL that is worth indexing.`,
          ],
        },
        {
          title: `How Brosavo delivers ${serviceName.toLowerCase()} in Vancouver`,
          paragraphs: [
            "We implement technical SEO, answer-ready content and ads landers together, then connect forms to CRM so after-hours Lower Mainland enquiries are not lost.",
            "Toronto remains a separate indexed city. Vancouver copy stays about this metro — harbour-to-suburbs — not a Canada-wide template.",
          ],
        },
      ],
    };
  }

  return null;
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
  const unique = uniqueIndexedCityCopy(service, country, city);
  if (unique) return unique;

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
