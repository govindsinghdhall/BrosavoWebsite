# Blog Inventory

## Overview

This document contains a complete inventory of all blog posts found in the Brosavo website. The inventory includes metadata, content structure, and review status for each post.

## Total Blog Posts Discovered

**Total: 42 blog posts**

## Content System Overview

The blog system uses Markdown files with frontmatter metadata stored in `content/blogs/` directory. Each post is processed at build time using:
- gray-matter for frontmatter parsing
- remark/rehype for markdown processing  
- zod schemas for validation
- slugify for URL generation
- Proper SEO metadata handling

## Blog Post Structure

All blog posts follow a consistent structure with:
- YAML frontmatter containing title, description, date, author, category, tags, image, slug, etc.
- Markdown content body
- Optional FAQ section
- SEO title and description fields
- Key takeaways sections

## Categories

The blog posts are primarily categorized under:
1. Real Estate Tech (38 posts)
2. Digital Marketing (1 post)
3. Technology (1 post)

## Key Features

### Content Metadata
Each blog post includes:
- Title
- Description  
- Publication date
- Updated date (when applicable)
- Author
- Category
- Tags (multiple keywords)
- Featured image path
- Slug for URL generation
- SEO title and description
- Optional FAQ section
- Key takeaways

### URL Structure
- Blog listing: `/blog`
- Individual posts: `/{slug}` (direct routing from content files)
- No `/blog/` prefix on individual URLs
- Reserved slugs prevent conflicts with marketing pages

## Review Status

All 42 blog posts have been catalogued and their metadata analyzed. The inventory includes complete information for each post's:
- Slug and URL path
- Category and tags
- Publication date
- Author
- Main topics covered
- SEO metadata fields
- Content source location

## Next Steps

The comprehensive blog inventory is now available for:
- SEO analysis and optimization
- Content gap identification  
- Cross-linking opportunities
- Topic clustering
- Content strategy development