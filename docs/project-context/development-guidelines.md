# Development Guidelines

## Overview

This document outlines coding conventions, component patterns, SEO rules, and best practices for maintaining the Brosavo website codebase.

## Coding Conventions

### TypeScript Standards
- Use strict TypeScript typing throughout
- Prefer interfaces over types for object shapes
- Utilize Zod schemas for input validation
- Implement proper error handling
- Follow DRY principles

### File Structure
- Next.js App Router conventions
- Components in `src/components/` by feature
- Utilities in `src/lib/`
- Blog content in `content/blogs/`
- Consistent naming (PascalCase for components, camelCase for functions)

## Component Patterns

### Blog Components
- **BlogCard**: For listing blog posts in grids
- **BlogContent**: For rendering full blog post content  
- **RelatedPosts**: For suggesting related articles
- **TableOfContents**: For navigation within long posts
- **JsonLd**: For structured data generation
- **AuthorCard**: For displaying author information

### UI Components
- **ThemeProvider**: For dark/light mode support
- **Layout Components**: Shared page layouts and structures
- **Navigation**: Site navigation elements

## SEO Rules and Best Practices

### Metadata Standards
- All blog posts must include title, description, and image metadata
- Custom SEO titles with brand integration
- Proper canonical URLs for each page
- Open Graph and Twitter card meta tags
- Structured data (Article, BlogPosting schemas)

### Content Guidelines
- Optimize content for target keywords naturally
- Use proper heading hierarchy (H1-H3)
- Include internal links to related content
- Add FAQ sections for common questions
- Mobile-responsive design

## Data Handling and Validation

### Input Validation
- Use Zod schemas for all user inputs and API data
- Validate blog post data before publishing
- Ensure slug validation to prevent conflicts
- Frontmatter validation using Zod schemas

### Content Management
- Blog posts stored as Markdown files in `content/blogs/`
- Image path validation and normalization
- Metadata consistency checks

## Security Guidelines

### Authentication
- JWT-based authentication for admin routes
- Middleware protection for protected endpoints
- Secure cookie handling with proper attributes

### Data Protection
- No sensitive data in version control
- Environment variables for secrets
- Input sanitization for user content

## Performance Optimization

### Code Optimization
- Use React.memo for expensive components
- Implement proper loading states
- Lazy load non-critical components
- Minimize re-renders with useCallback and useMemo

### Build Optimization
- Enable tree shaking for unused code
- Use Next.js automatic optimization features
- Implement proper caching strategies

## Documentation Standards

### Code Documentation
- JSDoc comments for complex functions and APIs
- Component prop documentation
- File-level documentation for modules
- Inline comments for non-obvious logic

### Project Documentation
- Keep all documentation in `docs/project-context/` directory
- Update documentation with code changes
- Maintain consistent terminology
- Include examples where appropriate

## Version Control Practices

### Git Workflow
- Feature branches for new development
- Pull requests for code review
- Semantic versioning for releases
- Clear commit messages following conventional commits

## Maintenance and Updates

### Regular Tasks
- Dependency updates with security checks
- Content freshness reviews
- Performance audits
- SEO health monitoring