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
  'managing-group-contributions-during-holiday-seasons',
  'building-trust-contribution-groups-complete-guide',
  'handle-contribution-disputes-fairly-professionally',
  'mobile-first-contribution-management-why-matters',
  'scaling-contribution-group-5-to-50-members',
  'psychology-group-contributions-makes-people-pay-time',
  'organize-birthday-contributions-without-stress',
  'why-whatsapp-groups-fail-tracking-payments',
  'best-ways-collect-money-events-nigeria',
  'groupfund-vs-traditional-methods-comparison',
  'tips-fair-birthday-contribution-management',
  'churches-streamline-member-birthday-contributions',
  'how-birthday-wishlists-make-gift-giving-easier',
  'how-to-manage-shared-subscriptions-subscription-groups',
  'organizing-group-contributions-weddings-events',
  'subscription-groups-vs-manual-payment-tracking',
  'setting-up-first-subscription-group-step-by-step',
  'best-practices-general-groups-events-weddings',
  'how-to-collect-money-group-events-lagos-nigeria',
  'managing-multiple-subscription-groups-tips-strategies',
  'groupfund-vs-splitwise-group-payments-comparison',
  'how-to-organize-baby-shower-contributions-general-groups',
  'subscription-group-admin-guide-managing-shared-services',
  'complete-guide-group-contribution-types-birthday-subscription-general'
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
    url: '/use-cases/shared-subscriptions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/weddings',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/baby-showers',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/graduations',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/sports-teams',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/hobby-groups',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/alumni-associations',
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
    url: '/comparisons/google-sheets',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/comparisons/manual-methods',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/comparisons/splitwise',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/comparisons/venmo',
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
    url: '/locations/new-york',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/toronto',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/sydney',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/accra',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/johannesburg',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/sao-paulo',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/berlin',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/dublin',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/paris',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/amsterdam',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/zurich',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/united-kingdom',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/london',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/india',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/mumbai',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/kenya',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/nairobi',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/mexico',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/mexico-city',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/how-to-organize-birthday-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/birthday-contribution-etiquette',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/calculating-group-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/multi-currency-group-payments',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/managing-large-group-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/avoiding-birthday-contribution-mistakes',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/setting-up-your-first-group',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/understanding-member-reliability-scores',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/budgeting-for-group-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/choosing-the-right-contribution-amount',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/advanced-group-management-strategies',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/optimizing-payment-confirmation-workflows',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/using-birthday-wishlists',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/setting-up-subscription-groups',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/creating-general-groups-for-events',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/subscription-group-best-practices',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/managing-event-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/choosing-between-group-types',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/subscription-deadline-management',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/admin-account-details-guide',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/organizing-international-group-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/subscription-group-payment-schedules',
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
    url: '/app-rules',
    priority: '0.8',
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

