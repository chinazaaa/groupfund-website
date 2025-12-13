import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BlogPage() {
  const blogPosts = [
    {
      title: "How to Organize Birthday Contributions Without Stress",
      excerpt: "Learn proven strategies for organizing group birthday contributions. Discover how to set clear expectations, track payments, and maintain fairness without the WhatsApp chaos.",
      date: "January 15, 2024",
      readTime: "5 min read",
      slug: "organize-birthday-contributions-without-stress",
      keywords: "organize birthday contributions, group payment organization, stress-free contributions"
    },
    {
      title: "Why WhatsApp Groups Fail at Tracking Group Payments",
      excerpt: "WhatsApp groups seem convenient, but they're terrible for tracking payments. Discover the common pitfalls and why dedicated tools like GroupWallet are essential for organized contributions.",
      date: "January 10, 2024",
      readTime: "6 min read",
      slug: "why-whatsapp-groups-fail-tracking-payments",
      keywords: "WhatsApp payment tracking, group payment problems, WhatsApp limitations"
    },
    {
      title: "The Best Ways to Collect Money for Events in Nigeria",
      excerpt: "Explore the most effective methods for collecting money for group events in Nigeria. From bank transfers to mobile money, learn what works best for different group sizes and contexts.",
      date: "January 5, 2024",
      readTime: "7 min read",
      slug: "best-ways-collect-money-events-nigeria",
      keywords: "collect money Nigeria, group payments Nigeria, event contributions Nigeria"
    },
    {
      title: "GroupWallet vs. Traditional Methods: A Comparison",
      excerpt: "Compare GroupWallet with traditional methods like Excel spreadsheets, WhatsApp groups, and manual tracking. See why modern tools are essential for organized group contributions.",
      date: "December 28, 2023",
      readTime: "8 min read",
      slug: "groupfund-vs-traditional-methods-comparison",
      keywords: "GroupWallet comparison, traditional payment methods, group contribution tools"
    },
    {
      title: "5 Tips for Fair Birthday Contribution Management",
      excerpt: "Discover five essential tips for managing birthday contributions fairly. Learn how to set amounts, handle late payments, and maintain transparency in your group.",
      date: "December 20, 2023",
      readTime: "5 min read",
      slug: "tips-fair-birthday-contribution-management",
      keywords: "fair contribution management, birthday payment tips, group fairness"
    },
    {
      title: "How Churches Can Streamline Member Birthday Contributions",
      excerpt: "Churches often struggle with organizing member contributions. Learn how GroupWallet helps churches manage birthday contributions efficiently while maintaining transparency and fairness.",
      date: "December 15, 2023",
      readTime: "6 min read",
      slug: "churches-streamline-member-birthday-contributions",
      keywords: "church contributions, member birthday contributions, church organization"
    }
  ]

  return (
    <>
      <SEO
        title="GroupWallet Blog - Tips, Guides & Insights on Organizing Group Contributions"
        description="Read our blog for tips on organizing birthday contributions, why WhatsApp groups fail, best practices for collecting money in Nigeria, and comparisons with traditional methods."
        keywords="birthday contribution tips, group payment blog, organize contributions Nigeria, WhatsApp payment problems, group contribution guides"
        canonical="https://groupfund.app/blog"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Blog & Resources</h1>
          <p className="page-subtitle">
            Tips, guides, and insights on organizing group birthday contributions effectively.
          </p>
        </div>
      </section>

      <section className="blog-page">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <article key={index} className="blog-card">
                <div className="blog-card-header">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h2 className="blog-title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="blog-read-more">
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

