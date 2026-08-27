export type LocationFaq = {
  question: string;
  answer: string;
};

export type LocationSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LocationLink = {
  href: string;
  label: string;
};

export type CityLocation = {
  slug: string;
  name: string;
  countrySlug: string;
  countryName: string;
  title: string;
  description: string;
  intro: string;
  highlights: string[];
  heading?: string;
};

export type CountryLocation = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  heading?: string;
  bodyHeading?: string;
  bodyIntro?: string;
  sections?: LocationSection[];
  faqs?: LocationFaq[];
  relatedLinks?: LocationLink[];
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
    bodyHeading: "Real estate CRM software for Indian sales teams.",
    bodyIntro:
      "Run portal enquiries, inventory and follow-ups in one product. Rankings for “best CRM in India” belong on the comparison guide; this page is the Brosavo platform for India.",
    relatedLinks: [
      {
        href: "/best-real-estate-crm-india",
        label: "Best real estate CRM in India",
      },
      {
        href: "/how-to-sync-99acres-and-magicbricks-leads-to-crm",
        label: "Sync 99acres and MagicBricks leads",
      },
    ],
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
    bodyHeading: "A real estate CRM for Canadian agents and brokerages.",
    bodyIntro:
      "Use Brosavo to run lead intake, listing inventory, follow-ups and pipelines in one product. Comparison articles for Canadian realtors stay on the blog; this page is the software itself.",
    relatedLinks: [
      {
        href: "/best-crm-for-realtors-canada",
        label: "Best CRM for realtors in Canada",
      },
      {
        href: "/real-estate-crm-ontario",
        label: "Real estate CRM in Ontario",
      },
    ],
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
    title: "Estate Agent CRM Software in the UK | Brosavo",
    description:
      "Brosavo is CRM software for UK estate agents and estate agencies. Manage applicant enquiries, listings, follow-ups and sales pipelines from one platform.",
    intro:
      "Brosavo helps UK estate agents and estate agencies keep applicant enquiries, listings, follow-ups and sales pipelines in one CRM instead of spreadsheets and disconnected inboxes.",
    heading: "Estate Agent CRM Software in the United Kingdom",
    bodyHeading: "CRM for estate agents and estate agencies.",
    bodyIntro:
      "UK teams typically talk about estate agents, not realtors. Brosavo is the product page for that workflow: applicants, vendors, listings, viewings and a clear next action. Use the comparison guide if you are still choosing among CRM platforms.",
    sections: [
      {
        title: "Estate agent CRM for independent agents",
        paragraphs: [
          "Independent estate agents need one place for new enquiries, applicant requirements, listing availability and follow-ups. Brosavo keeps that work on the same record as the sales pipeline so a viewing request does not get lost in WhatsApp or email.",
        ],
        bullets: [
          "Applicant and vendor records",
          "Listing inventory",
          "Follow-up reminders",
          "Sales pipeline stages",
        ],
      },
      {
        title: "Estate agency CRM for multi-desk offices",
        paragraphs: [
          "Estate agencies need ownership, assignment and a shared view of the pipeline. Brosavo is built for that office workflow, while the brokers and brokerages pages cover similar desk structures in other markets.",
        ],
        bullets: [
          "Lead assignment",
          "Team permissions",
          "Pipeline visibility",
          "Activity reporting",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Brosavo an estate agent CRM?",
        answer:
          "Yes. Brosavo is real estate CRM software that UK estate agents and estate agencies can use to manage enquiries, listings, follow-ups and sales pipelines.",
      },
      {
        question: "What is the difference between an estate agent CRM and an estate agency CRM?",
        answer:
          "An estate agent CRM is typically used by an individual or small desk. An estate agency CRM is the same product used across a multi-agent office with assignment, permissions and shared reporting.",
      },
    ],
    relatedLinks: [
      {
        href: "/best-real-estate-crm-guide",
        label: "Compare estate agent CRMs",
      },
      {
        href: "/real-estate-crm-for-brokerages",
        label: "CRM for multi-agent offices",
      },
    ],
    cities: [
      {
        slug: "london",
        name: "London",
        countrySlug: "united-kingdom",
        countryName: "United Kingdom",
        title: "Estate Agent CRM Software in London | Brosavo",
        description:
          "Brosavo helps London estate agents and agencies manage applicant enquiries, listings, follow-ups and sales pipelines.",
        intro:
          "Keep London applicant enquiries, listing inventory, viewings and follow-ups in one estate agent CRM.",
        heading: "Estate Agent CRM Software for London",
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
        title: "Estate Agent CRM Software in Manchester | Brosavo",
        description:
          "Brosavo helps Manchester estate agents manage enquiries, listings, customers and sales workflows.",
        intro:
          "Centralize applicant enquiries, listing information and follow-ups for Manchester estate agencies.",
        heading: "Estate Agent CRM Software for Manchester",
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
        title: "Estate Agent CRM Software in Birmingham | Brosavo",
        description:
          "Manage estate agency enquiries, listings, customers and sales pipelines in Birmingham with Brosavo.",
        intro:
          "Brosavo helps Birmingham estate agents organize enquiries, listing inventory and follow-ups in one CRM.",
        heading: "Estate Agent CRM Software for Birmingham",
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
      "Brosavo is real estate CRM and sales software for Australian agencies, buyer’s agents and property sales teams. Manage leads, listings, follow-ups and pipelines from one platform.",
    intro:
      "Brosavo helps Australian agencies, buyer’s agents and property sales teams manage enquiries, listings, follow-ups and sales pipelines from one CRM.",
    heading: "Real Estate CRM Software in Australia",
    bodyHeading: "Australian agency, buyer’s agent, and property sales CRM.",
    bodyIntro:
      "Australian teams need a CRM that can handle agency listings, buyer’s agent search briefs, and a property sales pipeline without splitting contacts and inventory. This page is the Brosavo product for Australia. City pages cover Sydney, Melbourne and Brisbane.",
    sections: [
      {
        title: "CRM for Australian real estate agencies",
        paragraphs: [
          "Agencies capture enquiries from websites, portals and campaigns. Brosavo keeps those leads next to listing inventory, ownership and the next follow-up so a sales process can run the same way in every office.",
        ],
        bullets: [
          "Lead capture and ownership",
          "Listing inventory",
          "Follow-up tasks",
          "Sales pipeline",
        ],
      },
      {
        title: "Buyer’s agent CRM in Australia",
        paragraphs: [
          "Buyer’s agents work from search briefs, shortlists and vendor conversations rather than a simple listing desk. Brosavo can hold the buyer requirement, matched properties and follow-ups on one record so the brief does not live only in email.",
        ],
        bullets: [
          "Buyer requirements",
          "Property matching",
          "Shortlist tracking",
          "Client follow-up",
        ],
      },
      {
        title: "Real estate sales software for Australian teams",
        paragraphs: [
          "Property sales CRM in Australia is the same workflow as the sales CRM product page: enquiry, qualification, matching, follow-up and close. Use this Australia page for local context and the sales CRM page for the pipeline itself.",
        ],
        bullets: [
          "Opportunity stages",
          "Next actions",
          "Conversion tracking",
          "Team reporting",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Brosavo work as real estate CRM software in Australia?",
        answer:
          "Yes. Brosavo is real estate CRM software that Australian agencies, buyer’s agents and sales teams can use to manage leads, listings, follow-ups and pipelines.",
      },
      {
        question: "Is Brosavo a buyer’s agent CRM?",
        answer:
          "Buyer’s agents can use Brosavo to store search briefs, match properties and keep follow-ups on the client record. There is no separate buyer’s agent product URL; that workflow lives on this Australia page and on the agents product page.",
      },
    ],
    relatedLinks: [
      {
        href: "/real-estate-sales-crm",
        label: "Real estate sales CRM",
      },
      {
        href: "/real-estate-crm-for-agents",
        label: "CRM for real estate agents",
      },
      {
        href: "/real-estate-crm/australia/melbourne",
        label: "Real estate CRM in Melbourne",
      },
    ],
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
