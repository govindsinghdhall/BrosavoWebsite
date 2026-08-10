/**
 * Brand entity constants — keep identical across website,
 * social profiles, listings, and structured data.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://brosavo.com";

/** Display company name used in UI and SEO titles. */
export const SITE_NAME = "Brosavo";

/** Legal company name for schema / footer. */
export const LEGAL_NAME = "Brosavo Technologies";

/**
 * Primary Brosavo product.
 *
 * Brosavo is not limited to this product.
 */
export const PRODUCT_NAME = "Brosavo Real Estate CRM";

export const PRODUCT_ONE_LINER =
  "An AI-powered real estate management platform that helps agencies, brokers, builders, and developers manage leads, properties, follow-ups, sales, marketing, and customer relationships from one platform.";

/**
 * Company-level description.
 *
 * Important: Brosavo is a technology company, not only
 * a real estate CRM company.
 */
export const COMPANY_DESCRIPTION =
  "Brosavo Technologies is a global technology company building modern websites, custom software, AI-powered applications, SaaS products, automation solutions, and industry-specific business management systems for businesses worldwide.";

export const DEFAULT_OG_IMAGE = "/images/og/default-blog.webp";

export const DEFAULT_BLOG_COVER =
  "/images/blog/real-estate-crm-benefits.webp";

export const BLOG_TITLE_SUFFIX = " | Brosavo Blog";

/**
 * General Brosavo CTA.
 */
export const DEFAULT_CTA = {
  heading: "Ready to Build Something Better?",
  text: "Whether you need a modern website, custom software, AI-powered automation, or a complete business management platform, Brosavo can help turn your idea into a scalable digital solution.",
  primaryLabel: "Start a Conversation",
  primaryHref: "/contact",
  secondaryLabel: "Get a Free Consultation",
  secondaryHref: "/services",
} as const;

/**
 * Real Estate CRM specific CTA.
 */
export const PRODUCT_CTA = {
  heading: "Transform Your Real Estate Business with Brosavo",
  text: "Brosavo Real Estate CRM helps real estate professionals capture leads, automate follow-ups, manage properties, organize customer relationships, and streamline their daily operations from one modern platform.",
  primaryLabel: "Book a Free Demo",
  primaryHref: "/contact",
  secondaryLabel: "Explore Brosavo Real Estate CRM",
  secondaryHref: "/products#real-estate-crm",
} as const;

/**
 * Default blog content template.
 *
 * This is industry-neutral so Brosavo can publish content
 * about websites, AI, software, SaaS, real estate,
 * automotive, technology, and other business solutions.
 */
export const BLOG_CONTENT_TEMPLATE = `# Introduction

Write a clear opening that defines the topic and explains why it matters.

## Key Takeaways

- Takeaway one
- Takeaway two
- Takeaway three

## What is _____?

Give a direct definition near the top.

## Why it Matters

Explain the business and practical impact.

## Benefits

- Benefit one
- Benefit two
- Benefit three

## Features

Describe the most important capabilities.

## How it Works

Explain the workflow in plain language.

## Step-by-Step Guide

1. Step one
2. Step two
3. Step three

## Best Practices

Share practical recommendations.

## Common Mistakes

List mistakes to avoid.

## Comparison Table

| Option | Best For | Key Advantage |
| ------ | -------- | ------------- |
| Option A | Teams | Advantage |
| Option B | Businesses | Advantage |

## Industry Statistics

- Stat one (Source)
- Stat two (Source)

## Frequently Asked Questions

### Question one?

Answer one.

### Question two?

Answer two.

## Conclusion

Summarize the main points and reinforce the primary keyword.

## Call to Action

Invite readers to contact Brosavo, explore a relevant solution, or learn more about the applicable Brosavo product or service.
`;