import type { MetadataRoute } from "next";

import { getAllBlogs } from "@/lib/blogs";
import { REAL_ESTATE_CRM_LOCATIONS } from "@/data/realEstateCrmLocations";
import { SITE_URL } from "@/lib/site";

const STATIC_ROUTES = [
  {
    route: "",
    priority: 1.0,
    changeFrequency: "weekly" as const,
  },

  // ============================================================
  // CORE COMPANY PAGES
  // ============================================================

  {
    route: "/about",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/why-us",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/services",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/technology",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/products",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/pricing",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/global",
    priority: 0.6,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/team",
    priority: 0.6,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/founders-office",
    priority: 0.6,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/contact",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },

  // ============================================================
  // BLOG
  // ============================================================

  {
    route: "/blog",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },

  // ============================================================
  // REAL ESTATE CRM — CORE
  // ============================================================

  {
    route: "/real-estate-crm",
    priority: 1.0,
    changeFrequency: "weekly" as const,
  },
  {
    route: "/best-real-estate-crm",
    priority: 0.95,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/real-estate-crm-pricing",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },

  // ============================================================
  // REAL ESTATE CRM — AUDIENCE
  // ============================================================

  {
    route: "/real-estate-crm-for-agents",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/real-estate-crm-for-realtors",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/real-estate-crm-for-brokers",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/real-estate-crm-for-brokerages",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/real-estate-crm-for-developers",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },

  // ============================================================
  // REAL ESTATE CRM — FEATURE / PROBLEM
  // ============================================================

  {
    route: "/real-estate-lead-management",
    priority: 0.95,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/real-estate-sales-crm",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/whatsapp-crm-for-real-estate",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/property-management-crm",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },

  // ============================================================
  // REAL ESTATE CRM — COMPARISON
  // ============================================================

  {
    route: "/follow-up-boss-alternatives",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },

  // ============================================================
  // REAL ESTATE WEBSITE — COMMERCIAL PAGES
  // ============================================================

  {
    route: "/real-estate-website-development",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/real-estate-website-for-agents",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/real-estate-website-for-brokers",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/real-estate-website-for-developers",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },

  // ============================================================
  // LEGAL
  // ============================================================

  {
    route: "/terms",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
  {
    route: "/privacy",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // ============================================================
  // STATIC ROUTES
  // ============================================================

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(
    ({ route, priority, changeFrequency }) => ({
      url: `${SITE_URL}${route}`,
      changeFrequency,
      priority,
    })
  );

  // ============================================================
  // REAL ESTATE CRM LOCATION ROUTES
  //
  // /real-estate-crm
  //      ↓
  // /real-estate-crm/india
  //      ↓
  // /real-estate-crm/india/gurgaon
  // ============================================================

  const locationEntries: MetadataRoute.Sitemap =
    REAL_ESTATE_CRM_LOCATIONS.flatMap((country) => {
      const countryEntry: MetadataRoute.Sitemap[number] = {
        url: `${SITE_URL}/real-estate-crm/${country.slug}`,
        changeFrequency: "monthly",
        priority: 0.85,
      };

      const cityEntries: MetadataRoute.Sitemap[number][] =
        country.cities.map((city) => ({
          url: `${SITE_URL}/real-estate-crm/${country.slug}/${city.slug}`,
          changeFrequency: "monthly",
          priority: 0.75,
        }));

      return [countryEntry, ...cityEntries];
    });

  // ============================================================
  // BLOG POSTS
  // ============================================================

  const blogEntries: MetadataRoute.Sitemap = getAllBlogs().map((blog) => ({
    url: `${SITE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // ============================================================
  // FINAL SITEMAP
  // ============================================================

  return [
    ...staticEntries,
    ...locationEntries,
    ...blogEntries,
  ];
}