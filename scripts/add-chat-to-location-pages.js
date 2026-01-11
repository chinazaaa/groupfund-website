const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/pages');

// Chat feature item to add
const chatFeatureItem = `                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>`;

// Read all location page files
const files = fs.readdirSync(pagesDir).filter(file => 
  file.endsWith('LocationPage.jsx')
);

let updatedCount = 0;
let skippedCount = 0;

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if chat is already mentioned
  if (content.includes('💬') || content.includes('Group Chat') || content.includes('group chat')) {
    console.log(`⏭️  Skipping ${file} - already has chat mention`);
    skippedCount++;
    return;
  }
  
  // Pattern 1: Find features-list section ending with Mobile Access/Mobile-First/Mobile Access
  // Look for pattern: </div> (end of feature-item) followed by </div> (end of features-list) followed by </div> (end of location-section)
  
  // Try to find where the features-list closes
  // Common patterns:
  // 1. Multi-line format: feature-item ends with </div>, then features-list closes
  // 2. Inline format: <div className="feature-item">...</div></div> then </div>
  
  // Look for the pattern where we have a feature-item ending, then </div></div> which closes features-list
  // We want to insert before the last </div> of the features-list
  
  // Pattern: Find the closing </div> of the last feature-item, then the closing </div> of features-list
  // Insert our chat feature before the closing </div> of features-list
  
  // More specific: Find the last feature-item div closing, then insert before the next </div> that closes features-list
  
  // Let's look for patterns like:
  // </div> (end of last feature-item)
  // </div> (end of features-list)
  // </div> (end of location-section)
  
  // Or in inline format:
  // </div></div> (end of feature-item and features-list)
  
  // Try a regex that finds the last feature-item closing before features-list closes
  // Look for: Mobile Access or Mobile-First as the last feature, then closing tags
  
  const patterns = [
    // Pattern 1: Multi-line format - last feature ends, then features-list closes
    /(\s*<\/div>\s*<\/div>\s*<\/div>\s*<div className="location-section">)/,
    /(\s*<\/div>\s*<\/div>\s*<\/div>\s*<div className="cta-box">)/,
    // Pattern 2: Inline format - last feature-item inline, then features-list closes
    /(<\/div>\s*<\/div>\s*<\/div>\s*<div className="location-section">)/,
    /(<\/div>\s*<\/div>\s*<\/div>\s*<div className="cta-box">)/,
    // Pattern 3: Just features-list closing
    /(\s*<\/div>\s*<\/div>\s*<div className="location-section">)/,
    /(\s*<\/div>\s*<\/div>\s*<div className="cta-box">)/,
  ];
  
  let found = false;
  
  // More targeted: Find where features-list closes after the last feature-item
  // Look for: </div> (end of last feature-item) followed by </div> (end of features-list)
  // But we need to make sure we're in the features-list section
  
  // Better approach: Find "features-list" section, then find the last feature-item before it closes
  const featuresListMatch = content.match(/<div className="features-list">[\s\S]*?<\/div>\s*<\/div>/);
  
  if (featuresListMatch) {
    // Find the last feature-item in this section
    const featuresListContent = featuresListMatch[0];
    
    // Check if chat is already there
    if (featuresListContent.includes('💬') || featuresListContent.includes('Group Chat')) {
      console.log(`⏭️  Skipping ${file} - already has chat in features-list`);
      skippedCount++;
      return;
    }
    
    // Find the last feature-item closing tag before features-list closes
    // Pattern: Last </div> before the closing </div></div> of features-list
    // We want to insert before: </div></div> (end of features-list and location-section)
    
    // Find the position: last feature-item's closing </div>, then insert before features-list closing
    const lastFeaturePattern = /(<\/div>\s*)(<\/div>\s*<\/div>\s*<div className="(location-section|cta-box)">)/;
    const match = content.match(lastFeaturePattern);
    
    if (match) {
      // Insert chat feature before the closing </div> of features-list
      const insertionPoint = match.index + match[1].length;
      const beforeInsert = content.substring(0, insertionPoint);
      const afterInsert = content.substring(insertionPoint);
      
      // Add newline if needed
      const needsNewline = !beforeInsert.endsWith('\n');
      const chatToInsert = needsNewline ? '\n' + chatFeatureItem : chatFeatureItem;
      
      content = beforeInsert + chatToInsert + '\n' + afterInsert;
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated ${file}`);
      updatedCount++;
      found = true;
    }
  }
  
  if (!found) {
    // Try alternative pattern: look for closing tags more flexibly
    // Find: </div></div></div> followed by location-section or cta-box
    const altPattern = /(\s*<\/div>\s*<\/div>\s*<\/div>\s*)(<div className="(location-section|cta-box)">)/;
    const altMatch = content.match(altPattern);
    
    if (altMatch && content.includes('features-list')) {
      const insertionPoint = altMatch.index;
      const beforeInsert = content.substring(0, insertionPoint);
      const afterInsert = content.substring(insertionPoint);
      
      content = beforeInsert + chatFeatureItem + '\n' + afterInsert;
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated ${file} (alternative pattern)`);
      updatedCount++;
      found = true;
    }
  }
  
  if (!found) {
    console.log(`⚠️  Could not find insertion point in ${file}`);
  }
});

console.log(`\n✅ Updated: ${updatedCount} files`);
console.log(`⏭️  Skipped: ${skippedCount} files (already had chat)`);
console.log(`📝 Total processed: ${files.length} files`);

