import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BlogPage() {
  const blogPosts = [
    {
      title: "How Birthday Wishlists Make Gift Giving Easier for Groups",
      excerpt: "Discover how birthday wishlists transform group gift giving. Learn how to create effective wishlists, coordinate gifts with group members, and avoid duplicate presents while ensuring everyone gets what they want.",
      date: "December 20, 2025",
      readTime: "6 min read",
      slug: "how-birthday-wishlists-make-gift-giving-easier",
      keywords: "birthday wishlists, group gift giving, birthday gift coordination, wishlist management, gift giving tips"
    },
    {
      title: "Managing Group Contributions During Holiday Seasons",
      excerpt: "Holiday seasons bring unique challenges for group contributions. Learn how to navigate increased expenses, busy schedules, and gift coordination while maintaining group harmony during festive periods.",
      date: "December 15, 2025",
      readTime: "6 min read",
      slug: "managing-group-contributions-during-holiday-seasons",
      keywords: "holiday contributions, group payments holidays, managing contributions festive season"
    },
    {
      title: "Building Trust in Contribution Groups: A Complete Guide",
      excerpt: "Trust is the foundation of successful contribution groups. Discover practical strategies for building and maintaining trust, from transparent communication to reliable payment tracking systems.",
      date: "December 15, 2025",
      readTime: "7 min read",
      slug: "building-trust-contribution-groups-complete-guide",
      keywords: "trust in groups, contribution group trust, building group trust, payment transparency"
    },
    {
      title: "How to Handle Contribution Disputes Fairly and Professionally",
      excerpt: "Disputes are inevitable in group contributions. Learn proven strategies for resolving payment disagreements, handling misunderstandings, and maintaining group relationships when conflicts arise.",
      date: "December 15, 2025",
      readTime: "6 min read",
      slug: "handle-contribution-disputes-fairly-professionally",
      keywords: "contribution disputes, payment conflicts, resolving group disputes, fair dispute resolution"
    },
    {
      title: "Mobile-First Contribution Management: Why It Matters",
      excerpt: "Most people manage contributions on their phones. Discover why mobile-first design is crucial for contribution tools and how it improves participation rates and user experience.",
      date: "December 15, 2025",
      readTime: "5 min read",
      slug: "mobile-first-contribution-management-why-matters",
      keywords: "mobile contribution management, mobile payment tracking, smartphone contributions"
    },
    {
      title: "Scaling Your Contribution Group: From 5 to 50 Members",
      excerpt: "Growing a contribution group requires different strategies than managing a small circle. Learn how to scale your group effectively, maintain organization, and keep the personal touch as you grow.",
      date: "December 15, 2025",
      readTime: "8 min read",
      slug: "scaling-contribution-group-5-to-50-members",
      keywords: "scaling contribution groups, large group management, growing contribution groups"
    },
    {
      title: "The Psychology of Group Contributions: What Makes People Pay on Time",
      excerpt: "Understanding human psychology can dramatically improve contribution rates. Explore the psychological factors that influence payment behavior and how to design systems that encourage timely contributions.",
      date: "December 15, 2025",
      readTime: "7 min read",
      slug: "psychology-group-contributions-makes-people-pay-time",
      keywords: "contribution psychology, payment behavior, group payment psychology, timely payments"
    },
    {
      title: "How to Organize Birthday Contributions Without Stress",
      excerpt: "Learn proven strategies for organizing group birthday contributions. Discover how to set clear expectations, track payments, and maintain fairness without the WhatsApp chaos.",
      date: "December 13, 2025",
      readTime: "5 min read",
      slug: "organize-birthday-contributions-without-stress",
      keywords: "organize birthday contributions, group payment organization, stress-free contributions"
    },
    {
      title: "Why WhatsApp Groups Fail at Tracking Group Payments",
      excerpt: "WhatsApp groups seem convenient, but they're terrible for tracking payments. Discover the common pitfalls and why dedicated tools like GroupFund are essential for organized contributions.",
      date: "December 12, 2025",
      readTime: "6 min read",
      slug: "why-whatsapp-groups-fail-tracking-payments",
      keywords: "WhatsApp payment tracking, group payment problems, WhatsApp limitations"
    },
    {
      title: "The Best Ways to Collect Money for Events in Nigeria",
      excerpt: "Explore the most effective methods for collecting money for group events in Nigeria. From bank transfers to mobile money, learn what works best for different group sizes and contexts.",
      date: "December 11, 2025",
      readTime: "7 min read",
      slug: "best-ways-collect-money-events-nigeria",
      keywords: "collect money Nigeria, group payments Nigeria, event contributions Nigeria"
    },
    {
      title: "GroupFund vs. Traditional Methods: A Comparison",
      excerpt: "Compare GroupFund with traditional methods like Excel spreadsheets, WhatsApp groups, and manual tracking. See why modern tools are essential for organized group contributions.",
      date: "December 10, 2025",
      readTime: "8 min read",
      slug: "groupfund-vs-traditional-methods-comparison",
      keywords: "GroupFund comparison, traditional payment methods, group contribution tools"
    },
    {
      title: "5 Tips for Fair Birthday Contribution Management",
      excerpt: "Discover five essential tips for managing birthday contributions fairly. Learn how to set amounts, handle late payments, and maintain transparency in your group.",
      date: "December 09, 2025",
      readTime: "5 min read",
      slug: "tips-fair-birthday-contribution-management",
      keywords: "fair contribution management, birthday payment tips, group fairness"
    },
    {
      title: "How Churches Can Streamline Member Birthday Contributions",
      excerpt: "Churches often struggle with organizing member contributions. Learn how GroupFund helps churches manage birthday contributions efficiently while maintaining transparency and fairness.",
      date: "December 08, 2025",
      readTime: "6 min read",
      slug: "churches-streamline-member-birthday-contributions",
      keywords: "church contributions, member birthday contributions, church organization"
    }
  ]

  return (
    <>
      <SEO
        title="GroupFund Blog - Tips, Guides & Insights on Organizing Group Contributions"
        description="Read our blog for tips on organizing group contributions, why WhatsApp groups fail, best practices for collecting money in Nigeria, and comparisons with traditional methods."
        keywords="group contribution tips, group payment blog, organize contributions Nigeria, WhatsApp payment problems, group contribution guides"
        canonical="https://groupfund.app/blog"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Blog & Resources</h1>
          <p className="page-subtitle">
            Tips, guides, and insights on organizing group contributions effectively - for birthdays, subscriptions, events, and more.
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

