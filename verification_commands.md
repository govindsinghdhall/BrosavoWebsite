# Verification Commands

## 1. Check sitemap generation

```bash
# Build the project to generate sitemap
npm run build

# View generated sitemap entries for affected URLs
curl -s https://www.brosavo.com/sitemap.xml | grep -A 2 -B 2 "geo/united-kingdom/london\|seo/india/bangalore\|website-development/australia/brisbane\|aeo/canada/calgary\|digital-marketing/united-states/new-york"
```

## 2. Verify page status codes and metadata

```bash
# Check that the pages return HTTP 200
curl -I https://www.brosavo.com/geo/united-kingdom/london | head -1
curl -I https://www.brosavo.com/seo/india/bangalore | head -1
curl -I https://www.brosavo.com/website-development/australia/brisbane | head -1
curl -I https://www.brosavo.com/aeo/canada/calgary | head -1
curl -I https://www.brosavo.com/digital-marketing/united-states/new-york | head -1

# Check robots meta tag in response headers
curl -I https://www.brosavo.com/geo/united-kingdom/london | grep -i robots
curl -I https://www.brosavo.com/seo/india/bangalore | grep -i robots
```

## 3. Run existing tests to ensure no regressions

```bash
# Run unit tests if any exist
npm test

# Run build validation
npm run build
```

## 4. Validate sitemap structure

```bash
# Check that only indexed pages are in sitemap
curl -s https://www.brosavo.com/sitemap.xml | grep "geo/united-kingdom/london" | wc -l
curl -s https://www.brosavo.com/sitemap.xml | grep "geo/united-kingdom/manchester" | wc -l
```

## 5. Check specific page content

```bash
# View title and meta description of one of the fixed pages
curl -s https://www.brosavo.com/geo/united-kingdom/london | grep -i title
curl -s https://www.brosavo.com/geo/united-kingdom/london | grep -i description
```