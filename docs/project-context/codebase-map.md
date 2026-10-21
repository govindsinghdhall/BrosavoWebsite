# Codebase Map

## Important Folders and Files

### Main Application Structure
- `src/app/` - Next.js App Router pages and routes
  - `(site)/` - Public site routes 
  - `(blog-admin)/` - Admin panel routes
  - `api/` - API endpoints
- `src/components/` - Reusable React components
- `src/lib/` - Utility functions and helpers  
- `src/server/` - Server-side logic and APIs
- `src/types/` - TypeScript type definitions
- `content/blogs/` - Blog content directory

### Key Entry Points

#### Main Application Layout
- `src/app/layout.tsx` - Root layout with metadata and theme provider

#### Blog System Components
- `src/components/blog/BlogCard.tsx` - Blog listing card component
- `src/components/blog/BlogContent.tsx` - Full blog post rendering
- `src/components/blog/RelatedPosts.tsx` - Related content suggestions
- `src/components/blog/JsonLd.tsx` - Structured data generation

#### Content Processing
- `src/lib/blogs.ts` - Main blog processing and data fetching logic
- `src/lib/blog-schema.ts` - Zod schemas for blog validation
- `src/lib/blog-urls.ts` - URL path and slug handling functions
- `src/lib/blog-seo.ts` - SEO metadata extraction and generation

#### Authentication
- `src/lib/blog-auth.ts` - Blog admin authentication utilities
- `src/middleware.ts` - Route protection middleware
- `src/app/(blog-admin)/authentication/` - Login/logout functionality

### Routing Structure

#### Public Site Routes
```
/                    - Home page
/blog                - Blog listing
/blog/[slug]         - Individual blog post (dynamic)
/contact             - Contact form
/pricing             - Pricing page
/real-estate-crm     - Main CRM product page
/real-estate-crm/*   - Product-specific pages
```

#### Admin Routes
```
/admin                - Admin dashboard
/admin/blog/new       - New blog post creation
/admin/blog/edit/[slug] - Edit existing blog post  
/api/blog/publish    - Protected publishing API endpoint
```

### Shared Utilities

#### Data Handling
- `src/lib/authors.ts` - Author resolution and management
- `src/lib/site.ts` - Site-wide constants and configurations
- `src/lib/utils.ts` - General utility functions
- `src/lib/data.ts` - Data processing utilities

#### SEO and Metadata
- `src/lib/blog-seo.ts` - Blog-specific SEO functions
- `src/components/blog/JsonLd.tsx` - Structured data components

### API Endpoints

#### Blog Publishing
- `src/app/api/blog/publish/route.ts` - Protected blog publishing endpoint

#### Authentication
- `src/app/api/login/route.ts` - Login authentication
- `src/app/api/logout/route.ts` - Logout functionality

## Reusable Components

### Blog Components
- `BlogCard` - For listing blog posts
- `BlogContent` - For rendering full blog content  
- `RelatedPosts` - For suggesting related articles
- `TableOfContents` - For blog navigation
- `AuthorCard` - For displaying author information
- `BlogBreadcrumbs` - For breadcrumb navigation

### UI Components
- `ThemeProvider` - Theme switching functionality
- `Layout` components - Shared page layouts and structures
- `Navigation` - Site navigation elements

## Backend Modules

### Server-Side Logic
- `src/server/helpers/` - Server-side helper functions
- `src/server/constants/` - System constants
- `src/server/auth/` - Authentication logic

### Data Models
- `src/types/blog.ts` - Blog type definitions
- `src/types/author.ts` - Author type definitions

## Environment Configuration

### Required Environment Variables
- `NEXT_PUBLIC_SITE_URL` - Main site URL for metadata
- `JWT_SECRET` - For admin authentication tokens
- `GITHUB_TOKEN` - For content management (if used)
- `RESEND_API_KEY` - For contact form emails

## Build and Development Scripts

### Package.json Scripts
- `dev` - Start development server
- `build` - Build production application  
- `start` - Start production server
- `lint` - Run ESLint checks

### Next.js Configuration
- `next.config.ts` - Next.js configuration options
- `tsconfig.json` - TypeScript compilation settings
- `tailwind.config.ts` - Tailwind CSS configuration