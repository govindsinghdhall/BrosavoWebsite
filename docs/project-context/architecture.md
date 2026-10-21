# Application Architecture

## Overview

The Brosavo website follows a modern Next.js 15 architecture using the App Router with a clear separation of concerns between public site content, admin functionality, and API endpoints.

## Major Modules

### 1. Public Site (`src/app/(site)`)
- **Route Structure**: Contains all publicly accessible pages
- **Pages**: Home, About, Blog, Product pages, Service pages, Contact, etc.
- **Dynamic Routes**: `[slug]` for individual blog posts and product detail pages
- **Layouts**: Shared layouts for site sections

### 2. Admin Panel (`src/app/(blog-admin)`)
- **Protected Routes**: `/admin` and `/admin/blog`
- **Authentication**: JWT-based authentication system
- **Content Management**: Blog publishing, editing, and management interfaces
- **API Access**: Protected API endpoints for content operations

### 3. API Endpoints (`src/app/api`)
- **Blog Publishing**: `/api/blog/publish` - For admin blog creation
- **Contact Forms**: `/api/contact` - For contact form submissions
- **Authentication**: `/api/login`, `/api/logout` - For admin authentication
- **Protected Routes**: Various endpoints requiring authentication

### 4. Content Management
- **Blog Storage**: `content/blogs/` directory with Markdown files
- **Metadata Processing**: Frontmatter parsing with gray-matter
- **Markdown Rendering**: Using remark/rehype ecosystem
- **SEO Generation**: Dynamic metadata and structured data

## Data Flow

```
[User Request] 
    ↓
src/app/(site)/[slug] → (Dynamic Route)
    ↓
BlogPost component → fetches content from content/blogs/
    ↓
Markdown files processed by src/lib/blogs.ts
    ↓
Rendered HTML with SEO metadata
```

## Component Architecture

### Blog Components
- `BlogCard` - For blog listing cards
- `BlogContent` - For full blog post rendering  
- `RelatedPosts` - For content suggestions
- `TableOfContents` - For blog navigation
- `JsonLd` - For structured data generation

### Core Components
- `ThemeProvider` - For dark/light mode support
- `Layout` components - Shared page layouts
- `Navigation` - Site navigation structure

## API Routes and Endpoints

### Public Routes
- `/blog` - Blog listing page
- `/{slug}` - Individual blog post pages (dynamic)
- `/contact` - Contact form page
- `/pricing` - Pricing page
- `/real-estate-crm` - Main CRM product page

### Admin Routes  
- `/admin/blog/new` - New blog creation
- `/admin/blog/edit/[slug]` - Blog editing
- `/api/blog/publish` - Protected publishing endpoint
- `/api/login` - Authentication endpoint

## Dependencies and Integrations

### Frontend Dependencies
- Next.js 15 (App Router)
- React 19, React DOM 19
- Tailwind CSS 4
- Framer Motion 12
- Three.js 0.184 for 3D elements
- Lucide React icons
- GSAP for animations

### Content Processing
- gray-matter - Markdown frontmatter parsing
- remark/rehype ecosystem - Markdown processing
- slugify - URL slug generation
- zod - Schema validation

## Security Considerations

1. **Authentication**: JWT-based access control for admin routes
2. **Rate Limiting**: Middleware protection for API endpoints
3. **Input Validation**: Zod schemas for blog publishing forms
4. **Route Protection**: Middleware checking authentication for protected routes
5. **Reserved Slugs**: Prevents conflicts with marketing pages

## Deployment Architecture

The application follows standard Next.js patterns:
- Server-side rendering (SSR) for SEO benefits
- Static site generation (SSG) where appropriate
- API routes for server-side functionality
- Environment variables for configuration
- Protected admin areas with authentication