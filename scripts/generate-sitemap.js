#!/usr/bin/env node

/**
 * Generate sitemap.xml dynamically
 * Run this script before building: node scripts/generate-sitemap.js
 */

const fs = require('fs')
const path = require('path')

const baseUrl = 'https://groupfund.app'
const currentDate = new Date().toISOString().split('T')[0]

// Blog post slugs (should match BlogPostPage.jsx)
const blogPosts = [
  'organize-birthday-contributions-without-stress',
  'why-whatsapp-groups-fail-tracking-payments',
  'best-ways-collect-money-events-nigeria',
  'groupfund-vs-traditional-methods-comparison',
  'tips-fair-birthday-contribution-management',
  'churches-streamline-member-birthday-contributions'
]

const pages = [
  {
    url: '/',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    url: '/how-it-works',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/features',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/families',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/churches',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/schools',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/friend-groups',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/workplace',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/community-organizations',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/coming-soon-features',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/testimonials',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/faq',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/blog',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    url: '/download',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/pricing',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/comparisons',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/comparisons/whatsapp-groups',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/comparisons/excel-spreadsheets',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/nigeria',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/lagos',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/united-states',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/canada',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/australia',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/ghana',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/south-africa',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/brazil',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/germany',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/ireland',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/france',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/netherlands',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/switzerland',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/help',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/sitemap',
    priority: '0.5',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/thank-you',
    priority: '0.3',
    changefreq: 'yearly',
    lastmod: currentDate
  },
  {
    url: '/waitlist',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  // Add individual blog posts
  ...blogPosts.map(slug => ({
    url: `/blog/${slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  })),
  {
    url: '/contact',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/about',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/branding',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/privacy',
    priority: '0.5',
    changefreq: 'yearly',
    lastmod: currentDate
  },
  {
    url: '/terms',
    priority: '0.5',
    changefreq: 'yearly',
    lastmod: currentDate
  },
  {
    url: '/cookie-policy',
    priority: '0.5',
    changefreq: 'yearly',
    lastmod: currentDate
  },
  {
    url: '/security',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/accessibility',
    priority: '0.6',
    changefreq: 'yearly',
    lastmod: currentDate
  },
  {
    url: '/press',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/careers',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  }
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

const publicDir = path.join(__dirname, '..', 'public')
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

const sitemapPath = path.join(publicDir, 'sitemap.xml')
fs.writeFileSync(sitemapPath, sitemap, 'utf8')

console.log('✅ Sitemap generated successfully at:', sitemapPath)
console.log(`📄 Generated ${pages.length} URLs`)

