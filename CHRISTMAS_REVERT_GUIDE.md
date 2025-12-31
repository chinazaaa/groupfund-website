# Christmas SEO Changes - Revert Guide

This document lists all Christmas 2025 SEO changes made on December 25, 2025, and how to revert them.

## ⚡ Quick Revert (Easiest Method)

### Option 1: Toggle Christmas Mode (RECOMMENDED)
Change `NEW_YEAR_MODE` to `false` in **2 files**:

1. **`src/pages/HomePage.jsx`** (line 8):
```javascript
const NEW_YEAR_MODE = false; // Change from true to false
```

2. **`src/components/Layout.jsx`** (line 7):
```javascript
const NEW_YEAR_MODE = false; // Change from true to false
```

This will automatically:
- ✅ Hide the Christmas animation (snowflakes & "Merry Christmas!" message)
- ✅ Hide the Christmas banner
- ✅ Revert hero headline to normal
- ✅ Revert hero description to normal
- ✅ Revert CTA buttons to normal
- ✅ Revert problem section to normal
- ✅ Revert SEO meta tags to normal

**Note:** You'll still need to manually revert `index.html` changes (see below).

### Option 2: Manual Revert

## Files Changed

### 1. `index.html`

**Changes to revert:**
- **Line 55**: Title tag - Remove "Christmas Contributions & Secret Santa 2025"
- **Line 56**: Meta title - Remove Christmas references
- **Line 57**: Meta description - Remove Christmas/Secret Santa references
- **Line 58**: Meta keywords - Remove Christmas-related keywords
- **Line 67**: OG title - Remove Christmas references
- **Line 68**: OG description - Remove Christmas references
- **Line 76**: Twitter title - Remove Christmas references
- **Line 77**: Twitter description - Remove Christmas references
- **Lines 137-188**: Remove Christmas Event and Article structured data blocks

**Original values (approximate):**
```html
<title>GroupFund - Organize Group Contributions | Birthday, Subscription & General Groups</title>
<meta name="title" content="GroupFund - Organize Group Contributions | Birthday, Subscription & General Groups" />
<meta name="description" content="Organize group contributions for birthdays, shared subscriptions, and any purpose. Track who paid, set fixed amounts, get automatic reminders. Multi-currency support (NGN, USD, GBP). Free to start." />
```

### 2. `src/pages/HomePage.jsx`

**Changes to revert:**
- **Lines 51-56**: SEO component - Remove Christmas from title/description/keywords
- **Lines 58-66**: Remove Christmas banner section
- **Line 70**: Hero badge - Remove "🎄 Perfect for Christmas 2025"
- **Line 72**: Hero headline - Remove Christmas/Secret Santa references
- **Line 74**: Hero subheadline - Remove Christmas references
- **Lines 89-94**: Hero CTAs - Revert to original button text
- **Line 105**: Problem section title - Remove "Christmas" reference

**Original values (approximate):**
```javascript
<SEO
  title="GroupFund - Organize Group Contributions | Birthday, Subscription & General Groups"
  description="Organize group contributions for birthdays, shared subscriptions, and any purpose..."
  keywords="group contributions, birthday contributions..."
/>

<h1 className="hero-headline">
  Organize Group Contributions for Any Purpose
</h1>

<Link to="/waitlist" className="btn btn-primary">
  Start Your Free Group
</Link>
```

## Automated Revert Script

To quickly revert all changes, you can use find/replace:

### In `index.html`:
- Find: "Christmas Contributions & Secret Santa 2025"
- Replace: "Group Contributions | Birthday, Subscription & General Groups"

### In `src/pages/HomePage.jsx`:
- Find: `const NEW_YEAR_MODE = true;`
- Replace: `const NEW_YEAR_MODE = false;`

## Date to Revert

**Recommended revert date:** January 1, 2026 or after New Year's Day

The Christmas changes are optimized for December 25, 2025, but can remain active through the holiday season (until early January 2026).

