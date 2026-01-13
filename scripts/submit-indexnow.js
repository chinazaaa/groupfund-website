#!/usr/bin/env node

/**
 * IndexNow URL Submission Script
 * 
 * This script submits URLs to IndexNow API for instant indexing.
 * Usage:
 *   node scripts/submit-indexnow.js <url1> [url2] [url3] ...
 *   node scripts/submit-indexnow.js --file urls.txt
 *   node scripts/submit-indexnow.js --all (submits all URLs from sitemap)
 */

const INDEXNOW_KEY = '65470e0d5653976027dd5306768af9a94759c7fa802f7ef49363f229b6a88b26';
const INDEXNOW_API_ENDPOINT = 'https://api.indexnow.org/IndexNow';
const KEY_FILE_URL = `https://${process.env.VITE_SITE_URL || 'groupfund.app'}/${INDEXNOW_KEY}.txt`;

const fs = require('fs');
const path = require('path');
const https = require('https');

function submitUrls(urls, host) {
  if (!urls || urls.length === 0) {
    console.error('Error: No URLs provided');
    process.exit(1);
  }

  // Validate URLs
  const validUrls = urls.filter(url => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      console.warn(`Warning: Invalid URL skipped: ${url}`);
      return false;
    }
  });

  if (validUrls.length === 0) {
    console.error('Error: No valid URLs to submit');
    process.exit(1);
  }

  const payload = {
    host: host || new URL(validUrls[0]).hostname,
    key: INDEXNOW_KEY,
    keyLocation: KEY_FILE_URL,
    urlList: validUrls
  };

  const data = JSON.stringify(payload);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  console.log(`Submitting ${validUrls.length} URL(s) to IndexNow...`);
  console.log(`Key location: ${KEY_FILE_URL}`);
  console.log(`Host: ${payload.host}`);
  console.log(`URLs:`, validUrls);

  const req = https.request(INDEXNOW_API_ENDPOINT, options, (res) => {
    let responseData = '';

    res.on('data', (chunk) => {
      responseData += chunk;
    });

    res.on('end', () => {
      if (res.statusCode === 200 || res.statusCode === 202) {
        console.log('\n✅ Success! URLs submitted to IndexNow');
        console.log(`Status Code: ${res.statusCode}`);
        if (responseData) {
          console.log(`Response: ${responseData}`);
        }
        console.log('\n📝 Next steps:');
        console.log('1. Verify key file is accessible at:', KEY_FILE_URL);
        console.log('2. Check Bing Webmaster Tools to verify URLs were received');
        console.log('3. Monitor indexing status in search console');
      } else {
        console.error(`\n❌ Error: HTTP ${res.statusCode}`);
        console.error(`Response: ${responseData}`);
        process.exit(1);
      }
    });
  });

  req.on('error', (error) => {
    console.error('\n❌ Network error:', error.message);
    process.exit(1);
  });

  req.write(data);
  req.end();
}

function readUrlsFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('#'));
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    process.exit(1);
  }
}

function readUrlsFromSitemap() {
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  try {
    const content = fs.readFileSync(sitemapPath, 'utf-8');
    const urlMatches = content.match(/<loc>(.*?)<\/loc>/g);
    if (!urlMatches) {
      console.error('No URLs found in sitemap.xml');
      process.exit(1);
    }
    return urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
  } catch (error) {
    console.error(`Error reading sitemap:`, error.message);
    process.exit(1);
  }
}

// Parse command line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(`
IndexNow URL Submission Script

Usage:
  node scripts/submit-indexnow.js <url1> [url2] [url3] ...
  node scripts/submit-indexnow.js --file <urls.txt>
  node scripts/submit-indexnow.js --all
  node scripts/submit-indexnow.js --help

Options:
  --file <path>    Read URLs from a text file (one URL per line)
  --all            Submit all URLs from sitemap.xml
  --help           Show this help message

Examples:
  node scripts/submit-indexnow.js https://yourdomain.com/page1
  node scripts/submit-indexnow.js https://yourdomain.com/page1 https://yourdomain.com/page2
  node scripts/submit-indexnow.js --file urls.txt
  node scripts/submit-indexnow.js --all

Note: Set VITE_SITE_URL environment variable to specify your domain.
  `);
  process.exit(0);
}

if (args[0] === '--help') {
  process.exit(0);
}

let urls = [];
let host = null;

if (args[0] === '--file') {
  if (!args[1]) {
    console.error('Error: --file requires a file path');
    process.exit(1);
  }
  urls = readUrlsFromFile(args[1]);
} else if (args[0] === '--all') {
  urls = readUrlsFromSitemap();
  if (urls.length > 0) {
    host = new URL(urls[0]).hostname;
  }
} else {
  urls = args;
  if (urls.length > 0) {
    host = new URL(urls[0]).hostname;
  }
}

submitUrls(urls, host);
