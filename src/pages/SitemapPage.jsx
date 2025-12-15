import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SitemapPage() {
  const pages = [
    {
      category: "Main Pages",
      links: [
        { path: "/", label: "Home" },
        { path: "/how-it-works", label: "How It Works" },
        { path: "/features", label: "Features" },
        { path: "/coming-soon-features", label: "Coming Soon Features" },
        { path: "/download", label: "Download" },
        { path: "/pricing", label: "Pricing" },
        { path: "/waitlist", label: "Join Waitlist" }
      ]
    },
    {
      category: "Use Cases",
      links: [
        { path: "/use-cases", label: "Use Cases Overview" },
        { path: "/use-cases/families", label: "For Families" },
        { path: "/use-cases/churches", label: "For Churches" },
        { path: "/use-cases/schools", label: "For Schools" },
        { path: "/use-cases/friend-groups", label: "For Friend Groups" },
        { path: "/use-cases/workplace", label: "For Workplace" },
        { path: "/use-cases/community-organizations", label: "For Community Organizations" }
      ]
    },
    {
      category: "Comparisons",
      links: [
        { path: "/comparisons", label: "Comparisons Overview" },
        { path: "/comparisons/whatsapp-groups", label: "vs. WhatsApp Groups" },
        { path: "/comparisons/excel-spreadsheets", label: "vs. Excel Spreadsheets" },
        { path: "/comparisons/google-sheets", label: "vs. Google Sheets" },
        { path: "/comparisons/manual-methods", label: "vs. Manual Methods" },
        { path: "/comparisons/splitwise", label: "vs. Splitwise" }
      ]
    },
    {
      category: "Locations",
      links: [
        { path: "/locations", label: "Locations Overview" },
        { path: "/locations/nigeria", label: "Nigeria" },
        { path: "/locations/lagos", label: "Lagos" },
        { path: "/locations/united-states", label: "United States" },
        { path: "/locations/new-york", label: "New York" },
        { path: "/locations/canada", label: "Canada" },
        { path: "/locations/toronto", label: "Toronto" },
        { path: "/locations/australia", label: "Australia" },
        { path: "/locations/sydney", label: "Sydney" },
        { path: "/locations/ghana", label: "Ghana" },
        { path: "/locations/accra", label: "Accra" },
        { path: "/locations/south-africa", label: "South Africa" },
        { path: "/locations/johannesburg", label: "Johannesburg" },
        { path: "/locations/brazil", label: "Brazil" },
        { path: "/locations/sao-paulo", label: "São Paulo" },
        { path: "/locations/germany", label: "Germany" },
        { path: "/locations/berlin", label: "Berlin" },
        { path: "/locations/ireland", label: "Ireland" },
        { path: "/locations/dublin", label: "Dublin" },
        { path: "/locations/france", label: "France" },
        { path: "/locations/paris", label: "Paris" },
        { path: "/locations/netherlands", label: "Netherlands" },
        { path: "/locations/amsterdam", label: "Amsterdam" },
        { path: "/locations/switzerland", label: "Switzerland" },
        { path: "/locations/zurich", label: "Zurich" },
        { path: "/locations/united-kingdom", label: "United Kingdom" },
        { path: "/locations/london", label: "London" },
        { path: "/locations/india", label: "India" },
        { path: "/locations/mumbai", label: "Mumbai" },
        { path: "/locations/kenya", label: "Kenya" },
        { path: "/locations/nairobi", label: "Nairobi" },
        { path: "/locations/mexico", label: "Mexico" },
        { path: "/locations/mexico-city", label: "Mexico City" }
      ]
    },
    {
      category: "Resources",
      links: [
        { path: "/resources", label: "Resources Overview" },
        { path: "/resources/how-to-organize-birthday-contributions", label: "How to Organize Birthday Contributions" },
        { path: "/resources/birthday-contribution-etiquette", label: "Birthday Contribution Etiquette" },
        { path: "/resources/calculating-group-contributions", label: "Calculating Group Contributions" },
        { path: "/resources/multi-currency-group-payments", label: "Multi-Currency Group Payments" },
        { path: "/resources/managing-large-group-contributions", label: "Managing Large Group Contributions" },
        { path: "/resources/avoiding-birthday-contribution-mistakes", label: "Avoiding Birthday Contribution Mistakes" },
        { path: "/resources/setting-up-your-first-group", label: "Setting Up Your First Group" },
        { path: "/resources/understanding-member-reliability-scores", label: "Understanding Member Reliability Scores" },
        { path: "/resources/budgeting-for-group-contributions", label: "Budgeting for Group Contributions" },
        { path: "/resources/choosing-the-right-contribution-amount", label: "Choosing the Right Contribution Amount" },
        { path: "/resources/advanced-group-management-strategies", label: "Advanced Group Management Strategies" },
        { path: "/resources/optimizing-payment-confirmation-workflows", label: "Optimizing Payment Confirmation Workflows" },
        { path: "/blog", label: "Blog" },
        { path: "/testimonials", label: "Testimonials" },
        { path: "/faq", label: "FAQ" },
        { path: "/help", label: "Help & Support" }
      ]
    },
    {
      category: "Company",
      links: [
        { path: "/about", label: "About Us" },
        { path: "/contact", label: "Contact" },
        { path: "/press", label: "Press" },
        { path: "/careers", label: "Careers" },
        { path: "/branding", label: "Branding Guidelines" }
      ]
    },
    {
      category: "Legal & Policies",
      links: [
        { path: "/privacy", label: "Privacy Policy" },
        { path: "/terms", label: "Terms of Service" },
        { path: "/cookie-policy", label: "Cookie Policy" },
        { path: "/security", label: "Security" },
        { path: "/accessibility", label: "Accessibility" },
        { path: "/delete-account", label: "Delete Account" }
      ]
    },
    {
      category: "Blog Posts",
      links: [
        { path: "/blog/managing-group-contributions-during-holiday-seasons", label: "Managing Group Contributions During Holiday Seasons" },
        { path: "/blog/building-trust-contribution-groups-complete-guide", label: "Building Trust in Contribution Groups: A Complete Guide" },
        { path: "/blog/handle-contribution-disputes-fairly-professionally", label: "How to Handle Contribution Disputes Fairly and Professionally" },
        { path: "/blog/mobile-first-contribution-management-why-matters", label: "Mobile-First Contribution Management: Why It Matters" },
        { path: "/blog/scaling-contribution-group-5-to-50-members", label: "Scaling Your Contribution Group: From 5 to 50 Members" },
        { path: "/blog/psychology-group-contributions-makes-people-pay-time", label: "The Psychology of Group Contributions: What Makes People Pay on Time" },
        { path: "/blog/organize-birthday-contributions-without-stress", label: "How to Organize Birthday Contributions Without Stress" },
        { path: "/blog/why-whatsapp-groups-fail-tracking-payments", label: "Why WhatsApp Groups Fail at Tracking Group Payments" },
        { path: "/blog/best-ways-collect-money-events-nigeria", label: "The Best Ways to Collect Money for Events in Nigeria" },
        { path: "/blog/groupfund-vs-traditional-methods-comparison", label: "GroupFund vs. Traditional Methods: A Comparison" },
        { path: "/blog/tips-fair-birthday-contribution-management", label: "5 Tips for Fair Birthday Contribution Management" },
        { path: "/blog/churches-streamline-member-birthday-contributions", label: "How Churches Can Streamline Member Birthday Contributions" }
      ]
    }
  ]

  return (
    <>
      <SEO
        title="Sitemap - All Pages | GroupFund"
        description="Browse all pages on the GroupFund website. Find features, blog posts, support resources, and more."
        keywords="sitemap, GroupFund pages, website navigation"
        canonical="https://groupfund.app/sitemap"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Sitemap</h1>
          <p className="page-subtitle">
            Find all pages and content on the GroupFund website.
          </p>
        </div>
      </section>

      <section className="sitemap-page">
        <div className="container">
          <div className="sitemap-content">
            {pages.map((category, index) => (
              <div key={index} className="sitemap-category">
                <h2 className="sitemap-category-title">{category.category}</h2>
                <ul className="sitemap-links">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.path}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="sitemap-note">
            <p>
              <strong>Note:</strong> This is a human-readable sitemap. For search engines, 
              see our <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">XML sitemap</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
