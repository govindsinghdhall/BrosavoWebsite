export type AgencyCity = {
  slug: string;
  name: string;
};

export type AgencyCountry = {
  slug: string;
  name: string;
  adjective: string;
  cities: AgencyCity[];
};

export const AGENCY_MARKETS: AgencyCountry[] = [
  {
    slug: "india",
    name: "India",
    adjective: "Indian",
    cities: [
      { slug: "gurgaon", name: "Gurgaon" },
      { slug: "delhi", name: "Delhi" },
      { slug: "noida", name: "Noida" },
      { slug: "mumbai", name: "Mumbai" },
      { slug: "bangalore", name: "Bangalore" },
      { slug: "hyderabad", name: "Hyderabad" },
      { slug: "pune", name: "Pune" },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    adjective: "Canadian",
    cities: [
      { slug: "toronto", name: "Toronto" },
      { slug: "vancouver", name: "Vancouver" },
      { slug: "calgary", name: "Calgary" },
      { slug: "edmonton", name: "Edmonton" },
    ],
  },
  {
    slug: "united-states",
    name: "United States",
    adjective: "US",
    cities: [
      { slug: "new-york", name: "New York" },
      { slug: "miami", name: "Miami" },
      { slug: "los-angeles", name: "Los Angeles" },
      { slug: "dallas", name: "Dallas" },
    ],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    adjective: "UK",
    cities: [
      { slug: "london", name: "London" },
      { slug: "manchester", name: "Manchester" },
      { slug: "birmingham", name: "Birmingham" },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    adjective: "Australian",
    cities: [
      { slug: "sydney", name: "Sydney" },
      { slug: "melbourne", name: "Melbourne" },
      { slug: "brisbane", name: "Brisbane" },
    ],
  },
];

export function getAgencyCountry(slug: string) {
  return AGENCY_MARKETS.find((country) => country.slug === slug);
}

export function getAgencyCity(countrySlug: string, citySlug: string) {
  const country = getAgencyCountry(countrySlug);
  if (!country) return null;

  const city = country.cities.find((item) => item.slug === citySlug);
  if (!city) return null;

  return { country, city };
}
