# GroupFund Landing Page

A modern, SEO-optimized, and responsive landing page for GroupFund built with React and Vite.

## Features

- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD structured data on every page
- **Multi-Page Website**: Complete website with 8 essential SEO pages
- **Modern Design**: Sophisticated UI with gradient designs, smooth animations, and polished interactions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Accessibility**: Semantic HTML, ARIA labels, and proper heading hierarchy
- **Performance**: Fast loading with Vite and optimized assets
- **React Router**: Client-side routing for seamless navigation

## SEO Features

- Meta tags (title, description, keywords, robots)
- Open Graph tags for social media sharing
- Twitter Card support
- JSON-LD structured data (SoftwareApplication and Organization schemas)
- Canonical URLs
- Semantic HTML5 elements
- Proper heading hierarchy (h1, h2, h3)
- Alt text for images
- ARIA labels for accessibility

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Pages

The website includes the following SEO-optimized pages:

1. **Home** (`/`) - Landing page with hero, features, use cases, and CTA
2. **How It Works** (`/how-it-works`) - Step-by-step guide explaining the app flow
3. **Features** (`/features`) - Detailed feature showcase with app store badges
4. **Testimonials** (`/testimonials`) - Success stories from real users
5. **FAQ** (`/faq`) - Frequently asked questions with expandable answers
6. **Blog** (`/blog`) - Blog listing page for organic traffic
7. **Contact** (`/contact`) - Contact form and support information
8. **About** (`/about`) - Mission, values, and company story

Each page has:
- Unique meta descriptions
- Targeted keywords for SEO
- Proper semantic HTML structure
- Open Graph and Twitter Card tags
- Canonical URLs

## Project Structure

```
website/
├── index.html          # HTML entry point with SEO meta tags
├── src/
│   ├── main.jsx       # React entry point
│   ├── App.jsx        # Router setup
│   ├── App.css        # Sophisticated styling with animations
│   ├── index.css      # Global styles
│   ├── components/
│   │   ├── SEO.jsx    # SEO component for dynamic meta tags
│   │   ├── Layout.jsx # Shared layout with navigation
│   │   └── Layout.css # Layout styles
│   └── pages/
│       ├── HomePage.jsx
│       ├── HowItWorksPage.jsx
│       ├── FeaturesPage.jsx
│       ├── TestimonialsPage.jsx
│       ├── FAQPage.jsx
│       ├── BlogPage.jsx
│       ├── ContactPage.jsx
│       └── AboutPage.jsx
├── package.json       # Dependencies
├── vite.config.js     # Vite configuration
└── README.md          # This file
```

## Customization

### Update App Store Links
Replace the `#` placeholders in page components with your actual App Store and Google Play URLs:
- `HomePage.jsx`: App Store badges
- `FeaturesPage.jsx`: App Store badges

### Update Meta Tags
Each page uses the `SEO` component. Update meta tags in:
- `index.html`: Base Open Graph image URL and canonical URL
- Individual page components: Page-specific SEO props

### Modify Colors
Update gradient colors in `App.css`:
- Primary gradient: `#667eea` to `#764ba2`
- Search for color values to customize the theme

### Update Content
- **Testimonials**: Edit `TestimonialsPage.jsx` to add real testimonials with permission
- **Blog Posts**: Add actual blog content in `BlogPage.jsx` or create individual blog post pages
- **FAQ**: Update questions and answers in `FAQPage.jsx`
- **Contact Form**: Connect the contact form in `ContactPage.jsx` to your backend
- **About Page**: Update mission and values in `AboutPage.jsx`

### Add Blog Post Pages
Currently, the blog shows a listing. To add individual blog post pages:
1. Create `src/pages/BlogPostPage.jsx`
2. Add route in `App.jsx`: `<Route path="/blog/:slug" element={<BlogPostPage />} />`
3. Update blog card links to use the slug

## IndexNow Integration

IndexNow is integrated for instant search engine indexing. See [INDEXNOW_SETUP.md](./INDEXNOW_SETUP.md) for complete documentation.

**Quick Start:**
- Key file is hosted at: `public/65470e0d5653976027dd5306768af9a94759c7fa802f7ef49363f229b6a88b26.txt`
- Submit URLs: `node scripts/submit-indexnow.js https://www.groupfund.app/page`
- Submit all from sitemap: `node scripts/submit-indexnow.js --all`

## SEO Checklist

Before deploying, ensure:
- [ ] Update Open Graph image URL with actual image
- [ ] Update canonical URL to your domain
- [ ] Add actual App Store and Google Play links
- [ ] Update social media links in structured data
- [ ] Add favicon and apple-touch-icon files
- [ ] Test with Google's Rich Results Test
- [ ] Verify meta tags with social media debuggers
- [ ] Verify IndexNow key file is accessible after deployment
- [ ] Set up Bing Webmaster Tools for URL verification

## Deployment

After building (`npm run build`), deploy the `dist` folder to your hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your repo or deploy the `dist` folder
- **GitHub Pages**: Use GitHub Actions or deploy manually
- **AWS S3**: Upload `dist` contents to an S3 bucket

### Recommended Hosting
- Vercel (recommended for React apps)
- Netlify
- Cloudflare Pages

## Performance Tips

- Images are lazy-loaded by default
- Fonts are preconnected for faster loading
- CSS is optimized and minified in production
- Consider adding a CDN for static assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

