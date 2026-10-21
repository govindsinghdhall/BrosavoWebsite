# Environment and Deployment

## Overview

This document details the environment variables, configuration files, build processes, and deployment architecture for the Brosavo website.

## Environment Variables

### Required Variables

#### Site Configuration
- `NEXT_PUBLIC_SITE_URL` - Main site URL for metadata and links (e.g., "https://www.brosavo.com")

#### Authentication
- `JWT_SECRET` - Secret key for JWT token generation and validation (used for admin authentication)

#### Email Integration
- `RESEND_API_KEY` - API key for Resend email service (contact form functionality)

#### Content Management (if applicable)
- `GITHUB_TOKEN` - GitHub personal access token for content management operations

### Optional Variables
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` - Google Analytics tracking ID
- `NEXT_PUBLIC_GTAG_ID` - Google Tag Manager ID  
- `NEXT_PUBLIC_SENTRY_DSN` - Sentry error tracking DSN
- `NODE_ENV` - Environment mode (production, development)

## Configuration Files

### Next.js Configuration
- `next.config.ts` - Main Next.js configuration with build settings and optimizations
- `tsconfig.json` - TypeScript compilation settings and type checking rules  
- `tailwind.config.ts` - Tailwind CSS configuration for styling utilities

### Build and Development Scripts
- `package.json` scripts:
  - `dev`: Start development server with hot reloading
  - `build`: Create production build of the application
  - `start`: Start production server
  - `lint`: Run ESLint for code quality checks

### Linting Configuration
- `.eslintrc.mjs` - ESLint configuration for TypeScript and React linting
- `eslint.config.mjs` - Modern ESLint configuration file

## Deployment Architecture

### Hosting Platform
- **Primary**: Vercel (indicated by Next.js patterns and deployment practices)
- **Static Site Generation**: Built with Next.js SSG/SSR capabilities
- **Serverless Functions**: API routes deployed as serverless functions

### Build Process
1. **Source Code**: Git repository with Markdown blog content
2. **Build Steps**: 
   - Install dependencies (`npm install`)
   - Run build script (`npm run build`)  
   - Process Markdown files into HTML content
   - Compile TypeScript to JavaScript
   - Generate static assets and pages
3. **Output**: Static site ready for deployment

### Deployment Flow
- **CI/CD Pipeline**: Automated deployment from main branch
- **Environment Variables**: Secure handling of secrets in deployment environment
- **Preview Deployments**: Pull request deployments for review
- **Production Deployment**: Manual or automated release process

## Development Environment Setup

### Prerequisites
- Node.js 18+ (recommended LTS version)
- npm or yarn package manager  
- Git for version control

### Local Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Directory Structure
```
src/
├── app/                    # Next.js App Router pages
├── components/             # React components  
├── lib/                    # Utility functions
├── types/                  # TypeScript definitions
└── content/                # Static content (blogs)
    └── blogs/              # Markdown blog posts
```

## Security Considerations

### Environment Management
- Secrets stored in deployment environment, not version control
- `.env.example` file provided for development setup
- No sensitive data committed to repository
- Regular security updates and dependency monitoring

### Access Control
- Admin routes protected by JWT authentication
- Middleware-based route protection
- Session management with secure cookies
- Rate limiting on API endpoints

## Performance Optimization

### Build Optimizations
- Next.js App Router with automatic code splitting
- Server-side rendering for SEO benefits  
- Static site generation for performance
- Image optimization through Next.js Image component
- Automatic lazy loading for components

### Runtime Performance
- Caching strategies for API endpoints
- Efficient data fetching patterns
- Minimized bundle sizes
- Optimized image delivery

## Monitoring and Maintenance

### Health Checks
- Automated deployment monitoring
- Error tracking with Sentry (if configured)
- Performance monitoring
- SEO health checks

### Maintenance Tasks
- Regular dependency updates
- Content freshness reviews
- Security patching
- Performance audits