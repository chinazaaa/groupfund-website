#!/usr/bin/env node

/**
 * Generate sitemap.xml dynamically
 * Run this script before building: node scripts/generate-sitemap.js
 */

const fs = require('fs')
const path = require('path')

const baseUrl = 'https://www.groupfund.app'
const currentDate = new Date().toISOString().split('T')[0]

// Blog post slugs (should match BlogPostPage.jsx)
const blogPosts = [
  'how-to-organize-christmas-contributions-secret-santa-2025',
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
    url: '/use-cases/parties-and-events',
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
    url: '/locations/spain',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/italy',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/china',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/japan',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/barcelona',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/milan',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/tokyo',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/shanghai',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/manila',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/philippines',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/poland',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/south-korea',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/estonia',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/uganda',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/pakistan',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/russia',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/ukraine',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/turkey',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/indonesia',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/malaysia',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/colombia',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/finland',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/sweden',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/vietnam',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/yemen',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/iraq',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/jordan',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/jamaica',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/singapore',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/lebanon',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/sri-lanka',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/serbia',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/afghanistan',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/warsaw',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/seoul',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/tallinn',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/kampala',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/islamabad',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/moscow',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/kyiv',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/istanbul',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/jakarta',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/kuala-lumpur',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/bogota',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/helsinki',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/stockholm',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/ho-chi-minh-city',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/sanaa',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/baghdad',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/amman',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/kingston',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/singapore-city',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/beirut',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/colombo',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/belgrade',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/kabul',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },  
  {
    url: '/group-types',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/group-types/birthday-groups',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/group-types/subscription-groups',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/group-types/general-groups',
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
    url: '/resources/how-to-create-birthday-wishlist',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/birthday-wishlist-meaning',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/setting-up-birthday-groups',
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
    url: '/glossary',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/tools',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/tools/contribution-calculator',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/tools/yearly-contribution-estimator',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/industries',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/industries/real-estate',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/industries/healthcare',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/industries/retail',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/best-practices',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/best-practices/managing-large-groups',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/best-practices/international-groups',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/case-studies',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/case-studies/church-birthday-group',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/case-studies/family-birthday-fund',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/case-studies/school-subscription-group',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/case-studies/workplace-event-group',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/seasonal',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/seasonal/holiday-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/seasonal/back-to-school-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/seasonal/wedding-season-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/report',
    priority: '0.7',
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
  },
  {
    url: '/subscription-groups',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/netflix',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/disney-plus',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/hulu',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/hbo-max',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/youtube-premium',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },  
  {
    url: '/subscription-groups/amazon-prime',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/paramount-plus',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/apple-music',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/chatgpt-plus',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/canva-pro',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/apple-tv',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/spotify',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/now-entertainment',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/peacock',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/amazon-music',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/deliveroo-plus',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/just-eat-plus',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/doordash-dashpass',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/postmates-unlimited',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/grubhub-plus',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/gousto',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/universal-yums',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/blue-apron',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/hello-fresh',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/uber-eats-pass',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/home-chef',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/bokksu',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/puregym-plus',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/the-gym-group-ultimate',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/la-fitness',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/apple-fitness-plus',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/fitness-bliss',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/mindbody-family',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/planet-fitness',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/get-started',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  
  {
    url: '/seasonal/valentine-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  
  {
    url: '/seasonal/easter-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  
  {
    url: '/seasonal/mothers-day-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  
  {
    url: '/seasonal/teacher-appreciation-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  
  {
    url: '/seasonal/graduation-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  
  {
    url: '/seasonal/fathers-day-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
    {
    url: '/seasonal/independence-day-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/seasonal/labor-day-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/seasonal/halloween-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/seasonal/diwali-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/seasonal/baby-shower-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/seasonal/housewarming-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/seasonal/office-party-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/seasonal/thanksgiving-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },    
  {
    url: '/seasonal/new-year-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/blog/how-to-organize-new-year-contributions-party-funds-2026',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
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

