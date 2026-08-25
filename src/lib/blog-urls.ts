/**
 * Public URL path for a published blog post.
 * Posts live at /{slug} (not /blog/{slug}).
 * The blog index remains at /blog.
 */
export function blogPostPath(slug: string): string {
  const cleaned = slug.replace(/^\/+/, "");
  return `/${cleaned}`;
}

export function blogPostAbsoluteUrl(
  slug: string,
  siteUrl: string
): string {
  return `${siteUrl}${blogPostPath(slug)}`;
}

/**
 * Old slug → new slug for posts that conflicted with
 * existing marketing pages when moving to /{slug}.
 */
export const BLOG_SLUG_REDIRECTS: Record<string, string> = {
  "best-real-estate-crm": "best-real-estate-crm-guide",
  "property-management-crm": "property-management-crm-guide",
  "real-estate-crm": "real-estate-crm-software-guide",
  "real-estate-crm-for-agents": "real-estate-crm-for-agents-guide",
  "real-estate-crm-for-brokers": "real-estate-crm-for-brokers-guide",
  "real-estate-crm-for-developers": "real-estate-crm-for-developers-guide",
  "real-estate-crm-pricing": "real-estate-crm-pricing-guide",
  "real-estate-lead-management": "real-estate-lead-management-guide",
  "real-estate-sales-crm": "real-estate-sales-crm-guide",
  "whatsapp-crm-for-real-estate": "whatsapp-crm-for-real-estate-guide",
};

/**
 * Top-level path segments that must not be used as blog slugs.
 * Includes marketing pages, app routes, and system paths.
 */
export const RESERVED_TOP_LEVEL_SLUGS = new Set([
  "about",
  "admin",
  "api",
  "authentication",
  "best-real-estate-crm",
  "blog",
  "contact",
  "data-deletion",
  "digital-marketing",
  "digital-marketing-delhi",
  "digital-marketing-gurgaon",
  "feed.xml",
  "follow-up-boss-alternatives",
  "founders-office",
  "global",
  "images",
  "industries",
  "lead-management-system",
  "lead-management-system-delhi",
  "lead-management-system-gurgaon",
  "manifest.webmanifest",
  "pricing",
  "privacy",
  "products",
  "property-management-crm",
  "real-estate-crm",
  "real-estate-crm-for-agents",
  "real-estate-crm-for-brokerages",
  "real-estate-crm-for-brokers",
  "real-estate-crm-for-developers",
  "real-estate-crm-for-realtors",
  "real-estate-crm-pricing",
  "real-estate-lead-management",
  "real-estate-sales-crm",
  "real-estate-website-development",
  "real-estate-website-for-agents",
  "real-estate-website-for-brokers",
  "real-estate-website-for-developers",
  "robots.txt",
  "services",
  "sitemap.xml",
  "team",
  "technology",
  "terms",
  "thank-you",
  "website-development",
  "website-development-delhi",
  "website-development-gurgaon",
  "website-development-noida",
  "whatsapp-crm-for-real-estate",
  "why-us",
]);

export function isReservedBlogSlug(slug: string): boolean {
  return RESERVED_TOP_LEVEL_SLUGS.has(slug.replace(/^\/+/, ""));
}
