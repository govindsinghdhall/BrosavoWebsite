import type { MetadataRoute } from "next";
import { getAllBlogs } from "@/lib/blogs";
import { SITE_URL } from "@/lib/site";

const STATIC_ROUTES = [
  {
    route: "",
    priority: 1.0,
    changeFrequency: "weekly" as const,
  },

  // Core company pages
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

  // Blog
  {
    route: "/blog",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },

  // ============================================================
  // REAL ESTATE CRM SEO CLUSTER
  // ============================================================

  {
    route: "/real-estate-crm",
    priority: 1.0,
    changeFrequency: "weekly" as const,
  },
  {
    route: "/best-real-estate-crm-india",
    priority: 0.95,
    changeFrequency: "weekly" as const,
  },
  {
    route: "/real-estate-crm-for-agents",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/real-estate-crm-for-brokers",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/real-estate-crm-for-developers",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
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
  {
    route: "/free-real-estate-crm",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
  {
    route: "/real-estate-crm-pricing",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },

  // Legal
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
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(
    ({ route, priority, changeFrequency }) => ({
      url: `${SITE_URL}${route}`,
      changeFrequency,
      priority,
    })
  );

  const blogEntries: MetadataRoute.Sitemap = getAllBlogs().map((blog) => ({
    url: `${SITE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}