# Brosavo Website Project Context

This documentation provides a comprehensive overview of the Brosavo website project, its architecture, blog content system, and technical implementation.

## Overview

The Brosavo website is a Next.js 15 application built with TypeScript that serves as the official website for Brosavo Technologies. The site features:

- A modern, responsive design with Next.js App Router
- Comprehensive blog content system for real estate CRM and technology topics
- Product pages for Brosavo's flagship Real Estate CRM platform
- SEO optimization with structured data and metadata
- Admin functionality for blog management

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: React, Framer Motion, Three.js for 3D elements
- **CMS/Content Management**: Markdown-based static content with custom blog system
- **Authentication**: JWT-based authentication for admin panel
- **Deployment**: Vercel (indicated by Next.js patterns)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages and routes
│   ├── (blog-admin)/       # Admin panel routes
│   ├── (site)/             # Public site routes  
│   └── api/                # API endpoints
├── components/             # Reusable React components
├── lib/                    # Utility functions and helpers
├── server/                 # Server-side logic and APIs
├── types/                  # TypeScript type definitions
└── content/                # Static content (blogs, etc.)
    └── blogs/              # Markdown blog posts
```

## Key Features

1. **Blog System**: Markdown-based blog with rich metadata, SEO optimization, and related content suggestions
2. **Real Estate CRM Product Pages**: Dedicated pages for different CRM use cases and target audiences
3. **Admin Panel**: Protected admin area for publishing and managing blog content
4. **SEO Optimization**: Structured data (JSON-LD), Open Graph, Twitter cards, sitemaps, robots.txt
5. **Responsive Design**: Mobile-first approach with modern UI components

## Documentation Files

This directory contains the following documentation files:

1. `architecture.md` - Application architecture and module relationships
2. `codebase-map.md` - Important folders, files, and their responsibilities
3. `blog-inventory.md` - Complete inventory of blog posts and content
4. `blog-content-context.md` - Synthesis of blog content, topics, and writing patterns
5. `blog-seo-audit.md` - Current SEO implementation and findings
6. `database-and-api-map.md` - API routes and data flows
7. `environment-and-deployment.md` - Environment variables and deployment setup
8. `development-guidelines.md` - Coding conventions and best practices
9. `project-status.md` - Verified findings and next steps

## Blog System Overview

The blog system uses a Markdown-based approach with frontmatter metadata. All blog posts are stored in `content/blogs/` directory as `.md` or `.mdx` files, and are processed at build time using:
- gray-matter for frontmatter parsing
- remark/rehype for markdown processing
- slugify for URL generation
- zod for schema validation

Each blog post is automatically converted to HTML and rendered with proper SEO metadata.