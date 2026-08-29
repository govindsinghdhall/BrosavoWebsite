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
  bodyHeading?: string;
  bodyIntro?: string;
  sections?: LocationSection[];
  faqs?: LocationFaq[];
  relatedLinks?: LocationLink[];
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
