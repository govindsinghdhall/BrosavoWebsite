# Database and API Map

## Overview

This document maps the database models, API routes, data flows, and how blog content is retrieved and published in the Brosavo website system.

## Content Storage System

### Blog Content Location
- **Primary Storage**: `content/blogs/` directory with Markdown files (.md/.mdx)
- **File Format**: YAML frontmatter + Markdown body
- **Metadata Structure**: 
  - Title, description, date, author, category, tags
  - Image paths and alt text
  - SEO titles and descriptions
  - FAQ sections
  - Key takeaways

### Content Processing Pipeline
1. **File Reading**: `src/lib/blogs.ts` reads Markdown files from `content/blogs/`
2. **Frontmatter Parsing**: Uses `gray-matter` library for YAML parsing  
3. **Markdown Conversion**: `remark/rehype` ecosystem for HTML rendering
4. **Data Validation**: Zod schemas for input validation
5. **Metadata Extraction**: SEO metadata and structured data generation
6. **Content Caching**: Build-time processing with optional revalidation

## API Routes and Endpoints

### Protected Blog Management APIs
- **POST /api/blog/publish** - Admin-only endpoint for publishing new blog posts
- **PUT /api/blog/update/[slug]** - Update existing blog post (admin only)
- **DELETE /api/blog/delete/[slug]** - Delete blog post (admin only)

### Public Data Endpoints  
- **GET /api/blog/list** - Get list of all published blogs
- **GET /api/blog/[slug]** - Get specific blog post by slug
- **GET /api/blog/related/[slug]** - Get related blog posts
- **GET /api/blog/categories** - Get all blog categories

## Authentication and Authorization

### Admin Authentication
- **JWT-based System**: Secure token authentication for admin routes
- **Middleware Protection**: `src/middleware.ts` protects admin endpoints
- **Cookie Management**: BLOG_ADMIN_COOKIE for session handling
- **Token Validation**: Time-based expiration with refresh capability

### Access Control
- Public routes: `/blog`, `/{slug}` (individual posts)
- Protected routes: `/admin`, `/api/blog/*` 
- Route-level authorization checking
- Session management and token validation

## Data Models

### BlogPost Model (in-memory)
```typescript
interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt?: string;
  slug: string;
  seoTitle?: string;
  seoDescription?: string;
  keyTakeaways?: string[];
  faqs?: BlogFaq[];
}

interface BlogMeta extends BlogFrontmatter {
  readingTime: number;
}

interface BlogPost extends BlogMeta {
  content: string;
  html: string;
  headings: TocHeading[];
}
```

### Authentication Model
- JWT tokens with expiration times
- Access type validation (access token type)
- Session management
- Cookie-based authentication

## Data Flow Diagram

```
[User Request]
    ↓
src/app/(site)/[slug] → Dynamic Route Handler
    ↓
BlogPost component fetches data from src/lib/blogs.ts
    ↓
Markdown files processed through gray-matter + remark/rehype
    ↓
Data transformed to BlogPost objects with HTML content
    ↓
Rendered to HTML with SEO metadata and structured data
```

## Content Management System

### Admin Workflow
1. **Authentication**: Login via `/authentication` route
2. **Content Creation**: Form-based interface for new posts
3. **Validation**: Zod schema validation before publishing
4. **Storage**: Markdown file creation in `content/blogs/`
5. **Publication**: File saved, site rebuilt (if needed)
6. **Preview**: Live preview capabilities

### Data Validation
- **Frontend Forms**: Type-safe form inputs using Zod schemas  
- **Backend Validation**: Server-side validation of blog data
- **Slug Validation**: Ensures valid URL-friendly slugs
- **Reserved Slug Check**: Prevents conflicts with marketing pages

## Environment Integration

### Required Environment Variables
- `NEXT_PUBLIC_SITE_URL` - For metadata generation
- `JWT_SECRET` - For admin authentication tokens  
- `GITHUB_TOKEN` - For content management (if integrated)
- `RESEND_API_KEY` - For contact form emails

### Configuration Files
- `next.config.ts` - Next.js configuration with build settings
- `tsconfig.json` - TypeScript compilation settings
- `tailwind.config.ts` - Styling configuration

## Performance Considerations

### Build Time Processing
- All blog posts processed at build time
- Markdown files converted to HTML during build
- Caching mechanisms for repeated data access
- Optimized file reading and parsing

### Runtime Performance  
- Server-side rendering for SEO benefits
- Client-side hydration for interactivity
- Lazy loading for images and components
- Efficient data fetching patterns

## Security Considerations

### Data Protection
- Protected API endpoints with authentication
- Input validation for all user submissions
- File system access restrictions
- Environment variable security

### Access Control
- Role-based permissions for admin functions
- Token expiration and refresh mechanisms  
- Session management
- Rate limiting on API endpoints

## Future Scalability

The current system supports:
- Easy content addition through Markdown files
- Flexible metadata structure
- Modular component architecture
- Server-side rendering capabilities
- Static site generation for performance