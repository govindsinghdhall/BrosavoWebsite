/**
 * Convention-based image paths for real estate CRM location pages.
 *
 * Drop files here — no code changes required when adding a country or city:
 *
 * Country hero:
 *   public/images/real-estate-crm/locations/{country-slug}/hero.webp
 *
 * City hero:
 *   public/images/real-estate-crm/locations/{country-slug}/{city-slug}/hero.webp
 *
 * Optional city card (country page grid):
 *   public/images/real-estate-crm/locations/{country-slug}/{city-slug}/card.webp
 */

export const LOCATION_IMAGE_BASE = "/images/real-estate-crm/locations";

export function getCountryHeroImagePath(countrySlug: string): string {
  return `${LOCATION_IMAGE_BASE}/${countrySlug}/hero.webp`;
}

export function getCityHeroImagePath(
  countrySlug: string,
  citySlug: string
): string {
  return `${LOCATION_IMAGE_BASE}/${countrySlug}/${citySlug}/hero.webp`;
}

export function getCityCardImagePath(
  countrySlug: string,
  citySlug: string
): string {
  return `${LOCATION_IMAGE_BASE}/${countrySlug}/${citySlug}/card.webp`;
}

export function getCountryHeroImageAlt(countryName: string): string {
  return `Real estate CRM software in ${countryName}`;
}

export function getCityHeroImageAlt(
  cityName: string,
  countryName: string
): string {
  return `Real estate CRM software in ${cityName}, ${countryName}`;
}

export function getCityCardImageAlt(
  cityName: string,
  countryName: string
): string {
  return `Real estate CRM in ${cityName}, ${countryName}`;
}

/**
 * Image generation prompt template — substitute {country} or {city} + {country}.
 * Full prompt list lives in src/data/REAL_ESTATE_CRM_LOCATION_IMAGE_PROMPTS.md
 */
export function getCountryHeroImagePrompt(countryName: string): string {
  return `Professional SaaS marketing hero image for a real estate CRM software page in ${countryName}. Modern clean interface on a laptop or tablet showing a real estate dashboard with leads, property listings, and sales pipeline. Subtle ${countryName} city skyline or architectural cues in the background. Bright, trustworthy, corporate tech style. No text overlays, no logos, no watermarks. 16:9 aspect ratio.`;
}

export function getCityHeroImagePrompt(
  cityName: string,
  countryName: string
): string {
  return `Professional SaaS marketing hero image for a real estate CRM software page in ${cityName}, ${countryName}. Modern CRM dashboard on screen with leads, properties, and pipeline stages. Recognizable ${cityName} skyline or local architecture softly blurred in background. Clean B2B software aesthetic. No text overlays, no logos, no watermarks. 16:9 aspect ratio.`;
}

export function getCityCardImagePrompt(
  cityName: string,
  countryName: string
): string {
  return `Compact real estate CRM card image for ${cityName}, ${countryName}. Minimal SaaS UI preview with property and lead icons. Subtle local city cue. Square 1:1 crop friendly. No text, no logos.`;
}
