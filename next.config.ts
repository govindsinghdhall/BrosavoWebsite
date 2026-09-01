import type { NextConfig } from "next";

/**
 * Old blog slugs that were renamed because they conflicted
 * with existing marketing pages when posts moved to /{slug}.
 * Keep in sync with src/lib/blog-urls.ts BLOG_SLUG_REDIRECTS.
 */
const BLOG_SLUG_REDIRECTS: Record<string, string> = {
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

const nextConfig: NextConfig = {
  transpilePackages: ["three"],

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    const renamedFromBlog = Object.entries(BLOG_SLUG_REDIRECTS).flatMap(
      ([oldSlug, newSlug]) => [
        {
          source: `/blog/${oldSlug}`,
          destination: `/${newSlug}`,
          statusCode: 301 as const,
        },
        {
          source: `/blogs/${oldSlug}`,
          destination: `/${newSlug}`,
          statusCode: 301 as const,
        },
      ]
    );

    return [
      {
        source: "/website-development-delhi",
        destination: "/website-development/india/delhi",
        statusCode: 301,
      },
      {
        source: "/website-development-gurgaon",
        destination: "/website-development/india/gurgaon",
        statusCode: 301,
      },
      {
        source: "/website-development-noida",
        destination: "/website-development/india/noida",
        statusCode: 301,
      },
      {
        source: "/digital-marketing-delhi",
        destination: "/digital-marketing/india/delhi",
        statusCode: 301,
      },
      {
        source: "/digital-marketing-gurgaon",
        destination: "/digital-marketing/india/gurgaon",
        statusCode: 301,
      },

      // Comparison intent lives on the guide, not a duplicate product URL
      {
        source: "/best-real-estate-crm",
        destination: "/best-real-estate-crm-guide",
        statusCode: 301,
      },

      // Commercial pricing owner is /pricing
      {
        source: "/real-estate-crm-pricing",
        destination: "/pricing",
        statusCode: 301,
      },

      // Renamed posts that conflicted with marketing pages
      ...renamedFromBlog,

      // Legacy /blog/{slug} → /{slug}
      {
        source: "/blog/:slug",
        destination: "/:slug",
        statusCode: 301,
      },

      // Older /blogs/{slug} typo path
      {
        source: "/blogs/:slug",
        destination: "/:slug",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
