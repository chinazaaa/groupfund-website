# SEO Configuration Guide

This document outlines the SEO setup for the GroupFund website.

## Files Created

### 1. robots.txt
Location: `public/robots.txt`

- Allows all search engines to crawl the site
- Blocks admin pages from being indexed
- References the sitemap location
- Includes crawl-delay to prevent server overload

### 2. sitemap.xml
Location: `public/sitemap.xml`

Contains all public pages with:
- URLs
- Last modified dates
- Change frequency
- Priority levels

**Pages included:**
- Homepage (priority: 1.0)
- How It Works (priority: 0.9)
- Features (priority: 0.9)
- Testimonials (priority: 0.8)
- FAQ (priority: 0.8)
- Blog (priority: 0.8)
- Contact (priority: 0.7)
- About (priority: 0.7)
- Privacy Policy (priority: 0.5)
- Terms of Service (priority: 0.5)

### 3. Deployment Configuration Files

#### .htaccess (Apache)
Location: `public/.htaccess`
- Security headers
- Cache control
- Gzip compression
- HTTPS redirect (commented out - uncomment when SSL is configured)

#### _redirects (Netlify)
Location: `public/_redirects`
- SPA fallback routing
- HTTPS redirects

#### vercel.json (Vercel)
Location: `public/vercel.json`
- SPA routing configuration
- Content-Type headers for sitemap and robots.txt

## Updating the Sitemap

### Manual Update
Edit `public/sitemap.xml` directly and update:
- `lastmod` dates when pages are updated
- Add new pages as needed
- Adjust priorities and change frequencies

### Automated Update
Run the sitemap generator script:
```bash
npm run generate-sitemap
```

This will automatically update the sitemap with the current date. The script runs automatically before builds via the `prebuild` script.

## Submitting to Search Engines

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (https://groupfund.app)
3. Submit the sitemap: `https://groupfund.app/sitemap.xml`

### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Submit the sitemap: `https://groupfund.app/sitemap.xml`

## Testing

### Validate Sitemap
- [Google Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [Bing Sitemap Validator](https://www.bing.com/webmasters)

### Test robots.txt
- [Google robots.txt Tester](https://www.google.com/webmasters/tools/robots-testing-tool)

## Important Notes

1. **Update Domain**: Replace `groupfund.app` with your actual domain in:
   - `sitemap.xml`
   - `robots.txt`
   - `index.html` (meta tags)
   - All page SEO components

2. **Update Dates**: When you update content, update the `lastmod` dates in the sitemap

3. **Admin Pages**: Admin pages are excluded from the sitemap and blocked in robots.txt

4. **HTTPS**: Uncomment HTTPS redirect in `.htaccess` once SSL is configured

5. **Favicon**: Add actual favicon files:
   - `public/favicon.png`
   - `public/apple-touch-icon.png`

## Monitoring

After deployment, monitor:
- Google Search Console for indexing status
- Page speed insights
- Mobile usability
- Core Web Vitals

