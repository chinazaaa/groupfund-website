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
        { path: "/download", label: "Download" }
      ]
    },
    {
      category: "Resources",
      links: [
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
        { path: "/contact", label: "Contact" }
      ]
    },
    {
      category: "Legal",
      links: [
        { path: "/privacy", label: "Privacy Policy" },
        { path: "/terms", label: "Terms of Service" },
        { path: "/delete-account", label: "Delete Account" }
      ]
    },
    {
      category: "Blog Posts",
      links: [
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
