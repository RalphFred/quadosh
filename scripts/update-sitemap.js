#!/usr/bin/env node

/**
 * Simple script to update sitemap.xml dates
 * Run with: node scripts/update-sitemap.js
 */

const fs = require('fs');
const path = require('path');

function updateSitemap() {
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  try {
    let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    
    // Update all lastmod dates to current date
    sitemapContent = sitemapContent.replace(
      /<lastmod>.*?<\/lastmod>/g,
      `<lastmod>${currentDate}</lastmod>`
    );
    
    fs.writeFileSync(sitemapPath, sitemapContent);
    console.log(`✅ Sitemap updated with current date: ${currentDate}`);
    
  } catch (error) {
    console.error('❌ Error updating sitemap:', error.message);
    process.exit(1);
  }
}

// Run the update
updateSitemap();
