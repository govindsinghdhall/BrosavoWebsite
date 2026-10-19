# Google Search Console "Excluded by noindex tag" Audit

## Affected Routes Analysis

| URL | Source File | Current robots directive | Canonical URL | Sitemap status | Recommended action | Reason |
|-----|-------------|--------------------------|---------------|----------------|-------------------|---------|
| https://www.brosavo.com/geo/united-kingdom/london | src/app/(site)/geo/[country]/[city]/page.tsx | index: false, follow: true | https://www.brosavo.com/geo/united-kingdom/london | Included in sitemap | Remove noindex | London page is not in the INDEXED_DIGITAL_CITY_KEYS set |
| https://www.brosavo.com/geo/united-kingdom/manchester | src/app/(site)/geo/[country]/[city]/page.tsx | index: false, follow: true | https://www.brosavo.com/geo/united-kingdom/manchester | Included in sitemap | Remove noindex | Manchester page is not in the INDEXED_DIGITAL_CITY_KEYS set |
| https://www.brosavo.com/seo/india/bangalore | src/app/(site)/seo/[country]/[city]/page.tsx | index: false, follow: true | https://www.brosavo.com/seo/india/bangalore | Included in sitemap | Remove noindex | Bangalore page is not in the INDEXED_DIGITAL_CITY_KEYS set |
| https://www.brosavo.com/website-development/australia/brisbane | src/app/(site)/website-development/[country]/[city]/page.tsx | index: false, follow: true | https://www.brosavo.com/website-development/australia/brisbane | Included in sitemap | Remove noindex | Brisbane page is not in the INDEXED_DIGITAL_CITY_KEYS set |
| https://www.brosavo.com/aeo/canada/calgary | src/app/(site)/aeo/[country]/[city]/page.tsx | index: false, follow: true | https://www.brosavo.com/aeo/canada/calgary | Included in sitemap | Remove noindex | Calgary page is not in the INDEXED_DIGITAL_CITY_KEYS set |
| https://www.brosavo.com/digital-marketing/united-states/new-york | src/app/(site)/digital-marketing/[country]/[city]/page.tsx | index: false, follow: true | https://www.brosavo.com/digital-marketing/united-states/new-york | Included in sitemap | Remove noindex | New York page is not in the INDEXED_DIGITAL_CITY_KEYS set |

## Analysis Summary

### Root Cause
The `isIndexedDigitalCity` function in `src/lib/digital-growth.ts` only returns true for a specific set of cities (gurgaon, delhi, noida, mumbai, toronto, vancouver) and false for all others. This causes the DigitalLocationPages component to generate noindex robots tags for unlisted cities.

### Current Configuration
- **Indexed cities**: india:gurgaon, india:delhi, india:noida, india:mumbai, canada:toronto, canada:vancouver  
- **All other city pages**: robots = { index: false, follow: true }

### Pages that should be indexed based on business strategy

Based on the existing content structure and SEO strategy:
1. **High-value cities with unique content**: 
   - India: Delhi, Gurgaon, Mumbai (already indexed)
   - Canada: Toronto, Vancouver (already indexed) 
   - Australia: Sydney, Melbourne (should consider adding if they have unique content)

2. **Cities that should be considered for indexing**:
   - United Kingdom: London, Manchester
   - India: Bangalore, Hyderabad, Pune (may have value but need content review)
   - Canada: Calgary, Edmonton  
   - United States: Miami, Los Angeles, Dallas
   - Australia: Brisbane

### Recommendation
1. **For pages that should be indexed**: Remove the noindex directive
2. **For intentionally excluded pages**: Keep noindex, remove from sitemap
3. **For pages with low value content**: Keep noindex and remove from sitemap

## Implementation Plan

### Step 1: Identify which cities have valuable unique content
Based on the existing code, the current strategy seems to be:
- Only index cities that are major markets with unique content 
- Exclude smaller or less significant cities to avoid duplicate content issues

### Step 2: Update the INDEXED_DIGITAL_CITY_KEYS set appropriately
This will require careful review of content quality and uniqueness for each city.

### Step 3: Ensure sitemap generation excludes noindex pages
The sitemap already correctly filters using `isIndexedDigitalCity` function, so this should work automatically.

### Step 4: Verify all changes don't break existing functionality
- All existing indexed pages continue to work
- New indexed pages return HTTP 200 with correct metadata
- Sitemap is updated correctly

## Specific Fixes Required

1. **Update INDEXED_DIGITAL_CITY_KEYS in src/lib/digital-growth.ts**:
   - Add cities that have unique, high-quality content
   - Remove cities that don't meet quality standards

2. **Verify sitemap generation**: 
   - Confirm that only indexed pages appear in sitemap.xml
   - Ensure noindex pages are not included in the sitemap

3. **Test page functionality**:
   - All affected URLs should return HTTP 200
   - Metadata should be correct (title, description, canonical)
   - Noindex pages should still remain excluded from search results