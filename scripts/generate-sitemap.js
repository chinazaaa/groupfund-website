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
  'how-to-organize-valentines-day-contributions-romantic-celebrations',
  'galentines-day-organize-group-celebrations-friends',
  'how-to-organize-group-gifts-couples-valentines-anniversaries',
  'romantic-date-night-funds-organizing-group-contributions-couples',
  'how-to-organize-new-year-contributions-party-funds-2026',
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
  'complete-guide-group-contribution-types-birthday-subscription-general',
  'how-to-organize-easter-contributions-spring-celebrations',
  'mothers-day-group-gift-coordination-complete-guide',
  'fathers-day-contributions-organizing-group-gifts-celebrations',
  'how-to-organize-graduation-contributions-celebration-funds',
  'summer-vacation-group-planning-organizing-trip-contributions',
  'back-to-school-contributions-organizing-group-funds-students',
  'how-to-organize-halloween-party-contributions-costume-funds',
  'thanksgiving-group-planning-organizing-dinner-contributions'
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
    url: '/use-cases/group-trips-and-holidays',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/office-birthday-fund',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/shared-rent-and-bills',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/group-birthday-gifts',
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
    url: '/use-cases/students',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/roommates',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/couples',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/emergency-funds',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/funeral-memorial',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/savings-groups',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/non-profits',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/moving-relocation',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/use-cases/home-renovation',
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
    url: '/locations/israel',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/venezuela',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/morocco',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/macau',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/senegal',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/saudi-arabia',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/guinea-bissau',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/bangladesh',
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
    url: '/locations/tel-aviv',
    priority: '0.6',
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
    url: '/locations/egypt',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/argentina',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/chile',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/portugal',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/greece',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/belgium',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/denmark',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/norway',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/new-zealand',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/thailand',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/cairo',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/buenos-aires',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/santiago',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/lisbon',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/athens',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/brussels',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/copenhagen',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/oslo',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/auckland',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/bangkok',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/austria',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/bulgaria',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/croatia',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/czech-republic',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/hungary',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/iceland',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/latvia',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/liechtenstein',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/lithuania',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/luxembourg',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/malta',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/romania',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/slovakia',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/slovenia',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/vienna',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/sofia',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/zagreb',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/prague',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/budapest',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/reykjavik',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/riga',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/vaduz',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/vilnius',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/luxembourg-city',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/valletta',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/bucharest',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/caracas',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/casablanca',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/macau-city',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/dakar',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/riyadh',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/bissau',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/dhaka',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/bratislava',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/locations/ljubljana',
    priority: '0.6',
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
    url: '/industries/education',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/industries/finance',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/industries/technology',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/industries/hospitality',
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
    url: '/best-practices/group-trips-with-friends',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/best-practices/workplace-leaving-gifts',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/best-practices/group-birthday-gifts',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/best-practices/best-way-to-collect-money-from-group',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/best-app-for-splitting-bills',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/resources/best-app-for-splitting-bills',
    priority: '0.8',
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
    url: '/subscription-groups/virgin-active',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/showtime',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/starz',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/amc-plus',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/crunchyroll',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/discovery-plus',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/espn-plus',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/sling-tv',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/fubotv',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/youtube-tv',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/adobe-creative-cloud',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/microsoft-365',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/notion',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/grammarly-premium',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/linkedin-premium',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/xbox-game-pass',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/playstation-plus',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/nintendo-switch-online',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/dropbox',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/google-one',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/icloud-plus',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/nordvpn',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/expressvpn',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/new-york-times',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/subscription-groups/wall-street-journal',
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
    url: '/seasonal/st-patricks-day-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/seasonal/christmas-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/seasonal/memorial-day-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/seasonal/hanukkah-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/seasonal/kwanzaa-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/seasonal/chinese-new-year-contributions',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/seasonal/ramadan-eid-contributions',
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

