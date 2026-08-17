export type CityLocation = {
  slug: string;
  name: string;
  countrySlug: string;
  countryName: string;
  title: string;
  description: string;
  intro: string;
  highlights: string[];
};

export type CountryLocation = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  cities: CityLocation[];
};

export const REAL_ESTATE_CRM_LOCATIONS: CountryLocation[] = [
  {
    slug: "india",
    name: "India",
    title: "Real Estate CRM Software in India | Brosavo",
    description:
      "Brosavo is a real estate CRM for agents, brokers, agencies and property developers in India. Manage leads, properties, follow-ups and sales pipelines from one platform.",
    intro:
      "Brosavo Real Estate CRM helps Indian real estate businesses manage leads, property inventory, customer requirements, follow-ups and sales pipelines from one connected platform.",
    cities: [
      {
        slug: "gurgaon",
        name: "Gurgaon",
        countrySlug: "india",
        countryName: "India",
        title: "Real Estate CRM Software in Gurgaon | Brosavo",
        description:
          "Manage real estate leads, property inventory, customer follow-ups and sales pipelines in Gurgaon with Brosavo Real Estate CRM.",
        intro:
          "Brosavo helps real estate agents, brokers, agencies and property sales teams in Gurgaon manage enquiries, properties, customer requirements and follow-ups from one centralized CRM.",
        highlights: [
          "Real estate lead management",
          "Property inventory management",
          "Customer requirement tracking",
          "Sales pipeline management",
          "WhatsApp workflows",
          "Website lead capture",
        ],
      },
      {
        slug: "delhi",
        name: "Delhi",
        countrySlug: "india",
        countryName: "India",
        title: "Real Estate CRM Software in Delhi | Brosavo",
        description:
          "Brosavo Real Estate CRM helps Delhi agents, brokers and agencies manage leads, properties, follow-ups and sales pipelines.",
        intro:
          "Manage real estate enquiries, customers, property inventory and sales workflows across Delhi with Brosavo Real Estate CRM.",
        highlights: [
          "Real estate lead management",
          "Property inventory",
          "Sales pipeline",
          "Customer management",
          "WhatsApp workflows",
          "Website lead capture",
        ],
      },
      {
        slug: "mumbai",
        name: "Mumbai",
        countrySlug: "india",
        countryName: "India",
        title: "Real Estate CRM Software in Mumbai | Brosavo",
        description:
          "Brosavo Real Estate CRM helps Mumbai real estate teams manage leads, properties, customers and sales opportunities from one platform.",
        intro:
          "Brosavo gives Mumbai real estate businesses a centralized workflow for managing enquiries, property inventory, customer relationships and sales opportunities.",
        highlights: [
          "Lead management",
          "Property inventory",
          "Customer management",
          "Sales pipeline",
          "Follow-ups",
          "Analytics",
        ],
      },
      {
        slug: "bangalore",
        name: "Bangalore",
        countrySlug: "india",
        countryName: "India",
        title: "Real Estate CRM Software in Bangalore | Brosavo",
        description:
          "Manage real estate leads, properties, customer relationships and sales pipelines in Bangalore with Brosavo Real Estate CRM.",
        intro:
          "Brosavo helps Bangalore real estate agents, brokers and agencies organize leads, properties, customer requirements and follow-ups in one CRM.",
        highlights: [
          "Real estate lead management",
          "Property inventory",
          "Customer management",
          "Sales pipeline",
          "WhatsApp engagement",
          "Website lead capture",
        ],
      },
      {
        slug: "hyderabad",
        name: "Hyderabad",
        countrySlug: "india",
        countryName: "India",
        title: "Real Estate CRM Software in Hyderabad | Brosavo",
        description:
          "Brosavo Real Estate CRM helps Hyderabad agents, brokers and agencies manage leads, properties, follow-ups and sales pipelines.",
        intro:
          "Centralize real estate enquiries, property inventory, customer requirements and sales activity in Hyderabad with Brosavo.",
        highlights: [
          "Lead management",
          "Property inventory",
          "Customer management",
          "Sales pipeline",
          "Follow-ups",
          "Analytics",
        ],
      },
      {
        slug: "pune",
        name: "Pune",
        countrySlug: "india",
        countryName: "India",
        title: "Real Estate CRM Software in Pune | Brosavo",
        description:
          "Manage real estate leads, properties, customer relationships and sales workflows in Pune with Brosavo Real Estate CRM.",
        intro:
          "Brosavo helps Pune real estate teams manage enquiries, property information, customers and follow-ups from one connected CRM.",
        highlights: [
          "Lead management",
          "Property inventory",
          "Customer management",
          "Sales pipeline",
          "Follow-ups",
          "Analytics",
        ],
      },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    title: "Real Estate CRM Software in Canada | Brosavo",
    description:
      "Brosavo is a real estate CRM for Canadian agents, brokers, agencies and real estate teams.",
    intro:
      "Brosavo Real Estate CRM helps Canadian real estate businesses organize leads, properties, customer relationships, follow-ups and sales pipelines from one platform.",
    cities: [
      {
        slug: "toronto",
        name: "Toronto",
        countrySlug: "canada",
        countryName: "Canada",
        title: "Real Estate CRM Software in Toronto | Brosavo",
        description:
          "Brosavo helps Toronto real estate agents, brokers and agencies manage leads, properties, follow-ups and sales pipelines.",
        intro:
          "Manage real estate leads, customer requirements, property inventory and sales opportunities across Toronto with Brosavo Real Estate CRM.",
        highlights: [
          "Real estate lead management",
          "Property inventory",
          "Customer management",
          "Sales pipeline",
          "Follow-ups",
          "Analytics",
        ],
      },
      {
        slug: "vancouver",
        name: "Vancouver",
        countrySlug: "canada",
        countryName: "Canada",
        title: "Real Estate CRM Software in Vancouver | Brosavo",
        description:
          "Manage real estate leads, properties, customers and sales pipelines in Vancouver with Brosavo.",
        intro:
          "Brosavo gives Vancouver real estate teams one connected platform for managing enquiries, properties, customers and sales activity.",
        highlights: [
          "Lead management",
          "Property inventory",
          "Customer management",
          "Sales pipeline",
          "Follow-ups",
          "Analytics",
        ],
      },
      {
        slug: "calgary",
        name: "Calgary",
        countrySlug: "canada",
        countryName: "Canada",
        title: "Real Estate CRM Software in Calgary | Brosavo",
        description:
          "Brosavo Real Estate CRM helps Calgary real estate teams manage leads, properties, customers and sales workflows.",
        intro:
          "Centralize real estate leads, property information, customer requirements and sales follow-ups in Calgary with Brosavo.",
        highlights: [
          "Lead management",
          "Property inventory",
          "Sales pipeline",
          "Customer management",
          "Follow-ups",
          "Analytics",
        ],
      },
      {
        slug: "edmonton",
        name: "Edmonton",
        countrySlug: "canada",
        countryName: "Canada",
        title: "Real Estate CRM Software in Edmonton | Brosavo",
        description:
          "Brosavo Real Estate CRM helps Edmonton real estate teams organize leads, properties, customers and sales workflows.",
        intro:
          "Manage enquiries, property inventory, customer requirements and sales opportunities in Edmonton with Brosavo.",
        highlights: [
          "Lead management",
          "Property inventory",
          "Customer management",
          "Sales pipeline",
          "Follow-ups",
          "Analytics",
        ],
      },
    ],
  },
  {
    slug: "united-states",
    name: "United States",
    title: "Real Estate CRM Software in the United States | Brosavo",
    description:
      "Brosavo is a real estate CRM for agents, brokers, agencies and real estate teams across the United States.",
    intro:
      "Brosavo helps US real estate businesses manage leads, property information, customer relationships, follow-ups and sales pipelines from one platform.",
    cities: [
      {
        slug: "new-york",
        name: "New York",
        countrySlug: "united-states",
        countryName: "United States",
        title: "Real Estate CRM Software in New York | Brosavo",
        description:
          "Manage real estate leads, properties, customers and sales pipelines in New York with Brosavo Real Estate CRM.",
        intro:
          "Brosavo helps New York real estate teams centralize enquiries, property information, customer requirements and sales follow-ups.",
        highlights: [
          "Lead management",
          "Property inventory",
          "Customer management",
          "Sales pipeline",
          "Follow-ups",
          "Analytics",
        ],
      },
      {
        slug: "miami",
        name: "Miami",
        countrySlug: "united-states",
        countryName: "United States",
        title: "Real Estate CRM Software in Miami | Brosavo",
        description:
          "Brosavo Real Estate CRM helps Miami agents, brokers and agencies manage leads, properties and sales opportunities.",
        intro:
          "Centralize real estate leads, customer requirements, property inventory and sales activity in Miami with Brosavo.",
        highlights: [
          "Lead management",
          "Property inventory",
          "Customer management",
          "Sales pipeline",
          "Follow-ups",
          "Analytics",
        ],
      },
      {
        slug: "los-angeles",
        name: "Los Angeles",
        countrySlug: "united-states",
        countryName: "United States",
        title: "Real Estate CRM Software in Los Angeles | Brosavo",
        description:
          "Brosavo Real Estate CRM helps Los Angeles real estate teams manage leads, properties, customers and sales workflows.",
        intro:
          "Brosavo gives Los Angeles real estate businesses a centralized platform for enquiries, properties, customer relationships and sales opportunities.",
        highlights: [
          "Lead management",
          "Property inventory",
          "Customer management",
          "Sales pipeline",
          "Follow-ups",
          "Analytics",
        ],
      },
      {
        slug: "dallas",
        name: "Dallas",
        countrySlug: "united-states",
        countryName: "United States",
        title: "Real Estate CRM Software in Dallas | Brosavo",
        description:
          "Manage real estate leads, property inventory, customers and sales pipelines in Dallas with Brosavo.",
        intro:
          "Brosavo helps Dallas real estate teams organize enquiries, properties, customers and follow-ups in one connected CRM.",
        highlights: [
          "Lead management",
          "Property inventory",
          "Customer management",
          "Sales pipeline",
          "Follow-ups",
          "Analytics",
        ],
      },
    ],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    title: "Real Estate CRM Software in the United Kingdom | Brosavo",
    description:
      "Brosavo is a real estate CRM for agents, brokers, agencies and property teams across the United Kingdom.",
    intro:
      "Brosavo helps UK real estate businesses manage leads, properties, customer relationships, follow-ups and sales pipelines from one platform.",
    cities: [
      {
        slug: "london",
        name: "London",
        countrySlug: "united-kingdom",
        countryName: "United Kingdom",
        title: "Real Estate CRM Software in London | Brosavo",
        description:
          "Brosavo helps London real estate agents, brokers and agencies manage leads, properties, follow-ups and sales pipelines.",
        intro:
          "Manage real estate enquiries, property inventory, customer requirements and sales opportunities across London with Brosavo.",
        highlights: [
          "Lead management",
          "Property inventory",
          "Customer management",
          "Sales pipeline",
          "Follow-ups",
          "Analytics",
        ],
      },
      {
        slug: "manchester",
        name: "Manchester",
        countrySlug: "united-kingdom",
        countryName: "United Kingdom",
        title: "Real Estate CRM Software in Manchester | Brosavo",
        description:
          "Brosavo Real Estate CRM helps Manchester real estate teams manage leads, properties, customers and sales workflows.",
        intro:
          "Centralize enquiries, property information, customer requirements and sales activity in Manchester with Brosavo.",
        highlights: [
          "Lead management",
          "Property inventory",
          "Customer management",
          "Sales pipeline",
          "Follow-ups",
          "Analytics",
        ],
      },
      {
        slug: "birmingham",
        name: "Birmingham",
        countrySlug: "united-kingdom",
        countryName: "United Kingdom",
        title: "Real Estate CRM Software in Birmingham | Brosavo",
        description:
          "Manage real estate leads, properties, customers and sales pipelines in Birmingham with Brosavo.",
        intro:
          "Brosavo helps Birmingham real estate businesses organize enquiries, property inventory, customers and sales follow-ups.",
        highlights: [
          "Lead management",
          "Property inventory",
          "Customer management",
          "Sales pipeline",
          "Follow-ups",
          "Analytics",
        ],
      },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    title: "Real Estate CRM Software in Australia | Brosavo",
    description:
      "Brosavo is a real estate CRM for agents, brokers, agencies and property teams across Australia.",
    intro:
      "Brosavo helps Australian real estate businesses manage leads, properties, customer relationships, follow-ups and sales pipelines from one platform.",
    cities: [
      {
        slug: "sydney",
        name: "Sydney",
        countrySlug: "australia",
        countryName: "Australia",
        title: "Real Estate CRM Software in Sydney | Brosavo",
        description:
          "Brosavo helps Sydney real estate agents, brokers and agencies manage leads, properties, follow-ups and sales pipelines.",
        intro:
          "Manage real estate enquiries, property inventory, customer requirements and sales opportunities across Sydney with Brosavo.",
        highlights: [
          "Lead management",
          "Property inventory",
          "Customer management",
          "Sales pipeline",
          "Follow-ups",
          "Analytics",
        ],
      },
      {
        slug: "melbourne",
        name: "Melbourne",
        countrySlug: "australia",
        countryName: "Australia",
        title: "Real Estate CRM Software in Melbourne | Brosavo",
        description:
          "Brosavo Real Estate CRM helps Melbourne real estate teams manage leads, properties, customers and sales workflows.",
        intro:
          "Centralize enquiries, property information, customer requirements and sales activity in Melbourne with Brosavo.",
        highlights: [
          "Lead management",
          "Property inventory",
          "Customer management",
          "Sales pipeline",
          "Follow-ups",
          "Analytics",
        ],
      },
      {
        slug: "brisbane",
        name: "Brisbane",
        countrySlug: "australia",
        countryName: "Australia",
        title: "Real Estate CRM Software in Brisbane | Brosavo",
        description:
          "Manage real estate leads, properties, customers and sales pipelines in Brisbane with Brosavo.",
        intro:
          "Brosavo helps Brisbane real estate businesses organize enquiries, property inventory, customers and follow-ups in one connected CRM.",
        highlights: [
          "Lead management",
          "Property inventory",
          "Customer management",
          "Sales pipeline",
          "Follow-ups",
          "Analytics",
        ],
      },
    ],
  },
];
