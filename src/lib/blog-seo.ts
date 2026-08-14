import type { AuthorProfile } from "@/lib/authors";
import {
  COMPANY_DESCRIPTION,
  LEGAL_NAME,
  PRODUCT_NAME,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import { CONTACT } from "@/lib/data";
import type { BlogFaq, BlogPost, TocHeading } from "@/types/blog";

export function absoluteUrl(path: string): string {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://")
  ) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/* ============================================================
   BLOG ARTICLE
============================================================ */

export function buildArticleJsonLd(
  post: BlogPost,
  author: AuthorProfile
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: post.title,

    description:
      post.seoDescription || post.description,

    image: [absoluteUrl(post.image)],

    datePublished: post.date,

    dateModified:
      post.updatedAt || post.date,

    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
      url: author.website || SITE_URL,
      sameAs: [
        author.linkedin,
        author.website,
      ].filter(Boolean),
    },

    publisher: {
      "@type": "Organization",
      name: LEGAL_NAME,
      url: SITE_URL,

      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.svg"),
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(
        `/blog/${post.slug}`
      ),
    },

    keywords: post.tags.join(", "),

    articleSection: post.category,

    wordCount: post.content
      .trim()
      .split(/\s+/)
      .filter(Boolean).length,

    /*
     * Don't claim every article is about the
     * Real Estate CRM.
     *
     * The article itself determines what it is about.
     */
    about: {
      "@type": "Thing",
      name: post.category,
    },

    isPartOf: {
      "@type": "Blog",
      name: `${SITE_NAME} Blog`,
      url: absoluteUrl("/blog"),
    },
  };
}

/* ============================================================
   BREADCRUMBS
============================================================ */

export function buildBreadcrumbJsonLd(
  items: Array<{
    name: string;
    url: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: items.map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.url),
      })
    ),
  };
}

/* ============================================================
   FAQ
============================================================ */

export function buildFaqJsonLd(
  faqs: BlogFaq[]
) {
  if (!faqs.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/* ============================================================
   BROSAVO ORGANIZATION
============================================================ */

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: SITE_NAME,

    legalName: LEGAL_NAME,

    url: SITE_URL,

    logo: absoluteUrl("/favicon.png"),

    description: COMPANY_DESCRIPTION,

    /*
     * Helps search engines understand the
     * areas Brosavo operates in.
     *
     * These are knowledge areas, not fake
     * claims about clients or certifications.
     */
    knowsAbout: [
      "Software Development",
      "Custom Software Development",
      "Artificial Intelligence",
      "AI Solutions",
      "SaaS Platforms",
      "Digital Products",
      "Business Software",
      "Real Estate Technology",
      "Real Estate CRM",
      "Lead Management",
      "WhatsApp Automation",
      "Property Management",
      "Lead Generation",
      "Sales Pipeline Management",
    ],

    /*
     * Brosavo's major product/solution area.
     *
     * This does NOT say Brosavo is only a CRM company.
     */
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",

        name: PRODUCT_NAME,

        applicationCategory:
          "BusinessApplication",

        operatingSystem: "Web",

        url: absoluteUrl(
          "/products#real-estate-crm"
        ),

        description:
          "Real Estate CRM software for managing leads, properties, WhatsApp conversations, follow-ups, sales pipelines, and real estate operations.",
      },
    },

    sameAs: [
      CONTACT.social.linkedin.href,
      CONTACT.social.github.href,
      CONTACT.social.facebook.href,
      CONTACT.social.instagram.href,
      CONTACT.social.youtube.href,
      CONTACT.social.x.href,
    ],
  };
}

/* ============================================================
   WEBSITE SCHEMA
============================================================ */

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: SITE_NAME,

    alternateName: [
      "Brosavo Technologies",
      "Brosavo",
    ],

    url: SITE_URL,

    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/* ============================================================
   REAL ESTATE CRM PRODUCT SCHEMA
============================================================ */

export function buildRealEstateCrmJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",

    name: PRODUCT_NAME,

    applicationCategory:
      "BusinessApplication",

    operatingSystem: "Web",

    url: absoluteUrl(
      "/products#real-estate-crm"
    ),

    description:
      "Real Estate CRM software by Brosavo for real estate teams, brokers, and property businesses to manage leads, properties, WhatsApp conversations, follow-ups, sales pipelines, and customer relationships.",

    creator: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },

    featureList: [
      "Real Estate CRM",
      "Lead Management",
      "WhatsApp Automation",
      "Property Management",
      "Lead Generation",
      "Sales Pipeline Management",
    ],
  };
}

/* ============================================================
   HEADING SLUG
============================================================ */

export function slugifyHeading(
  value: string
): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* ============================================================
   TABLE OF CONTENTS
============================================================ */

export function extractHeadings(
  markdown: string
): TocHeading[] {
  const regex = /^(#{2,3})\s+(.+)$/gm;

  const headings: TocHeading[] = [];

  const seen = new Map<string, number>();

  let match: RegExpExecArray | null;

  while (
    (match = regex.exec(markdown)) !== null
  ) {
    const level = match[1].length;

    const text = match[2]
      .replace(/[#*_`]/g, "")
      .trim();

    if (!text) continue;

    const base = slugifyHeading(text);

    const count =
      seen.get(base) ?? 0;

    const id =
      count > 0
        ? `${base}-${count}`
        : base;

    seen.set(
      base,
      count + 1
    );

    headings.push({
      id,
      text,
      level,
    });
  }

  return headings;
}

/* ============================================================
   FAQ EXTRACTION
============================================================ */

export function extractFaqsFromMarkdown(
  markdown: string
): BlogFaq[] {
  const faqIndex = markdown.search(
    /^##\s+Frequently Asked Questions\s*$/im
  );

  if (faqIndex === -1) {
    return [];
  }

  const section =
    markdown
      .slice(faqIndex)
      .split(/\n##\s+/)[0] ?? "";

  const faqs: BlogFaq[] = [];

  const qaRegex =
    /###\s+(.+?)\n+([\s\S]*?)(?=\n###\s+|\n##\s+|$)/g;

  let match: RegExpExecArray | null;

  while (
    (match = qaRegex.exec(section)) !== null
  ) {
    const question =
      match[1]
        .trim()
        .replace(/\?$/, "") + "?";

    const answer =
      match[2]
        .trim()
        .replace(/\n+/g, " ");

    if (question && answer) {
      faqs.push({
        question,
        answer,
      });
    }
  }

  return faqs;
}

/* ============================================================
   KEY TAKEAWAYS
============================================================ */

export function extractKeyTakeawaysFromMarkdown(
  markdown: string
): string[] {
  const index = markdown.search(
    /^##\s+Key Takeaways\s*$/im
  );

  if (index === -1) {
    return [];
  }

  const section =
    markdown
      .slice(index)
      .split(/\n##\s+/)[0] ?? "";

  return section
    .split("\n")
    .map((line) =>
      line
        .replace(/^[-*]\s+/, "")
        .trim()
    )
    .filter(
      (line) =>
        Boolean(line) &&
        !/^##\s+Key Takeaways$/i.test(
          line
        ) &&
        !line.startsWith("#")
    );
}

/* ============================================================
   REMOVE MARKDOWN SECTION
============================================================ */

export function stripMarkdownSection(
  markdown: string,
  heading: string
): string {
  const escaped = heading.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );

  const regex = new RegExp(
    `^##\\s+${escaped}\\s*\\n[\\s\\S]*?(?=^##\\s+|$)`,
    "im"
  );

  return markdown
    .replace(regex, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}