import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const blogPosts = [
    {
      title: "How to Organize Christmas Contributions and Secret Santa in 2025",
      excerpt: "Complete guide to organizing Christmas contributions, Secret Santa, and holiday gift funds. Learn how to set deadlines, track payments, coordinate gifts, and ensure everyone contributes fairly before Christmas Day.",
      date: "December 01, 2025",
      readTime: "7 min read",
      slug: "how-to-organize-christmas-contributions-secret-santa-2025",
      keywords: "Christmas contributions, Secret Santa contributions, organize Christmas gifts, Christmas gift funds, Christmas group payments, Secret Santa organization, Christmas contributions 2025, holiday gift coordination",
      categories: ["Event Planning", "Best Practices"]
    },
    {
      title: "How Birthday Wishlists Make Gift Giving Easier for Groups",
      excerpt: "Discover how birthday wishlists transform group gift giving. Learn how to create effective wishlists, coordinate gifts with group members, and avoid duplicate presents while ensuring everyone gets what they want.",
      date: "December 20, 2025",
      readTime: "6 min read",
      slug: "how-birthday-wishlists-make-gift-giving-easier",
      keywords: "birthday wishlists, group gift giving, birthday gift coordination, wishlist management, gift giving tips",
      categories: ["Birthday Groups", "Best Practices"]
    },
    {
      title: "Managing Group Contributions During Holiday Seasons",
      excerpt: "Holiday seasons bring unique challenges for group contributions. Learn how to navigate increased expenses, busy schedules, and gift coordination while maintaining group harmony during festive periods.",
      date: "December 15, 2025",
      readTime: "6 min read",
      slug: "managing-group-contributions-during-holiday-seasons",
      keywords: "holiday contributions, group payments holidays, managing contributions festive season",
      categories: ["Event Planning", "Best Practices"]
    },
    {
      title: "Building Trust in Contribution Groups: A Complete Guide",
      excerpt: "Trust is the foundation of successful contribution groups. Discover practical strategies for building and maintaining trust, from transparent communication to reliable payment tracking systems.",
      date: "December 15, 2025",
      readTime: "7 min read",
      slug: "building-trust-contribution-groups-complete-guide",
      keywords: "trust in groups, contribution group trust, building group trust, payment transparency",
      categories: ["Best Practices", "Payment Tracking"]
    },
    {
      title: "How to Handle Contribution Disputes Fairly and Professionally",
      excerpt: "Disputes are inevitable in group contributions. Learn proven strategies for resolving payment disagreements, handling misunderstandings, and maintaining group relationships when conflicts arise.",
      date: "December 15, 2025",
      readTime: "6 min read",
      slug: "handle-contribution-disputes-fairly-professionally",
      keywords: "contribution disputes, payment conflicts, resolving group disputes, fair dispute resolution",
      categories: ["Best Practices", "Payment Tracking"]
    },
    {
      title: "Mobile-First Contribution Management: Why It Matters",
      excerpt: "Most people manage contributions on their phones. Discover why mobile-first design is crucial for contribution tools and how it improves participation rates and user experience.",
      date: "December 15, 2025",
      readTime: "5 min read",
      slug: "mobile-first-contribution-management-why-matters",
      keywords: "mobile contribution management, mobile payment tracking, smartphone contributions",
      categories: ["Best Practices", "Payment Tracking"]
    },
    {
      title: "Scaling Your Contribution Group: From 5 to 50 Members",
      excerpt: "Growing a contribution group requires different strategies than managing a small circle. Learn how to scale your group effectively, maintain organization, and keep the personal touch as you grow.",
      date: "December 15, 2025",
      readTime: "8 min read",
      slug: "scaling-contribution-group-5-to-50-members",
      keywords: "scaling contribution groups, large group management, growing contribution groups",
      categories: ["Best Practices", "General Groups"]
    },
    {
      title: "The Psychology of Group Contributions: What Makes People Pay on Time",
      excerpt: "Understanding human psychology can dramatically improve contribution rates. Explore the psychological factors that influence payment behavior and how to design systems that encourage timely contributions.",
      date: "December 15, 2025",
      readTime: "7 min read",
      slug: "psychology-group-contributions-makes-people-pay-time",
      keywords: "contribution psychology, payment behavior, group payment psychology, timely payments",
      categories: ["Best Practices", "Payment Tracking"]
    },
    {
      title: "How to Organize Birthday Contributions Without Stress",
      excerpt: "Learn proven strategies for organizing group birthday contributions. Discover how to set clear expectations, track payments, and maintain fairness without the WhatsApp chaos.",
      date: "December 13, 2025",
      readTime: "5 min read",
      slug: "organize-birthday-contributions-without-stress",
      keywords: "organize birthday contributions, group payment organization, stress-free contributions",
      categories: ["Birthday Groups", "Best Practices"]
    },
    {
      title: "Why WhatsApp Groups Fail at Tracking Group Payments",
      excerpt: "WhatsApp groups seem convenient, but they're terrible for tracking payments. Discover the common pitfalls and why dedicated tools like GroupFund are essential for organized contributions.",
      date: "December 12, 2025",
      readTime: "6 min read",
      slug: "why-whatsapp-groups-fail-tracking-payments",
      keywords: "WhatsApp payment tracking, group payment problems, WhatsApp limitations",
      categories: ["Payment Tracking", "Best Practices"]
    },
    {
      title: "The Best Ways to Collect Money for Events in Nigeria",
      excerpt: "Explore the most effective methods for collecting money for group events in Nigeria. From bank transfers to mobile money, learn what works best for different group sizes and contexts.",
      date: "December 11, 2025",
      readTime: "7 min read",
      slug: "best-ways-collect-money-events-nigeria",
      keywords: "collect money Nigeria, group payments Nigeria, event contributions Nigeria",
      categories: ["Event Planning", "Payment Tracking"]
    },
    {
      title: "GroupFund vs. Traditional Methods: A Comparison",
      excerpt: "Compare GroupFund with traditional methods like Excel spreadsheets, WhatsApp groups, and manual tracking. See why modern tools are essential for organized group contributions.",
      date: "December 10, 2025",
      readTime: "8 min read",
      slug: "groupfund-vs-traditional-methods-comparison",
      keywords: "GroupFund comparison, traditional payment methods, group contribution tools",
      categories: ["Best Practices", "Payment Tracking"]
    },
    {
      title: "5 Tips for Fair Birthday Contribution Management",
      excerpt: "Discover five essential tips for managing birthday contributions fairly. Learn how to set amounts, handle late payments, and maintain transparency in your group.",
      date: "December 09, 2025",
      readTime: "5 min read",
      slug: "tips-fair-birthday-contribution-management",
      keywords: "fair contribution management, birthday payment tips, group fairness",
      categories: ["Birthday Groups", "Best Practices"]
    },
    {
      title: "How Churches Can Streamline Member Birthday Contributions",
      excerpt: "Churches often struggle with organizing member contributions. Learn how GroupFund helps churches manage birthday contributions efficiently while maintaining transparency and fairness.",
      date: "December 08, 2025",
      readTime: "6 min read",
      slug: "churches-streamline-member-birthday-contributions",
      keywords: "church contributions, member birthday contributions, church organization",
      categories: ["Birthday Groups", "Best Practices"]
    },
    {
      title: "How to Manage Shared Subscriptions with Subscription Groups",
      excerpt: "Learn how Subscription Groups make managing shared Netflix, Spotify, and other subscriptions effortless. Set monthly or annual frequencies, track deadlines, and never miss a payment.",
      date: "December 19, 2025",
      readTime: "6 min read",
      slug: "how-to-manage-shared-subscriptions-subscription-groups",
      keywords: "shared subscriptions, subscription groups, Netflix subscription sharing, Spotify group subscription, subscription management",
      categories: ["Subscription Groups", "Payment Tracking"]
    },
    {
      title: "Organizing Group Contributions for Weddings and Events",
      excerpt: "Planning a wedding or event? Discover how General Groups help you organize contributions, track payments, and manage deadlines for any occasion - from baby showers to graduations.",
      date: "December 19, 2025",
      readTime: "7 min read",
      slug: "organizing-group-contributions-weddings-events",
      keywords: "wedding contributions, event contributions, baby shower contributions, graduation contributions, group event planning",
      categories: ["General Groups", "Event Planning"]
    },
    {
      title: "Subscription Groups vs. Manual Payment Tracking: Which is Better?",
      excerpt: "Compare Subscription Groups with manual tracking methods. Learn why automated subscription management saves time, prevents missed payments, and keeps groups organized.",
      date: "December 19, 2025",
      readTime: "6 min read",
      slug: "subscription-groups-vs-manual-payment-tracking",
      keywords: "subscription management, subscription tracking, automated subscription payments, subscription group benefits",
      categories: ["Subscription Groups", "Payment Tracking"]
    },
    {
      title: "Setting Up Your First Subscription Group: Step-by-Step Guide",
      excerpt: "New to Subscription Groups? Follow this complete guide to set up your first shared subscription group, configure payment schedules, and manage members effectively.",
      date: "December 19, 2025",
      readTime: "5 min read",
      slug: "setting-up-first-subscription-group-step-by-step",
      keywords: "subscription group setup, shared subscription guide, how to create subscription group",
      categories: ["Subscription Groups", "Best Practices"]
    },
    {
      title: "Best Practices for General Groups: Events, Weddings, and More",
      excerpt: "Master the art of organizing General Groups for any purpose. Learn best practices for setting deadlines, managing contributions, and ensuring successful group events.",
      date: "December 19, 2025",
      readTime: "6 min read",
      slug: "best-practices-general-groups-events-weddings",
      keywords: "general groups, event planning, wedding contributions, group event management",
      categories: ["General Groups", "Event Planning", "Best Practices"]
    },
    {
      title: "How to Collect Money for Group Events in Lagos, Nigeria",
      excerpt: "Discover the most effective methods for collecting money for group events in Lagos. Learn about bank transfers, mobile money, and how GroupFund simplifies the process.",
      date: "December 19, 2025",
      readTime: "7 min read",
      slug: "how-to-collect-money-group-events-lagos-nigeria",
      keywords: "collect money Lagos, group payments Lagos, event contributions Lagos Nigeria, Lagos group fund",
      categories: ["General Groups", "Event Planning", "Payment Tracking"]
    },
    {
      title: "Managing Multiple Subscription Groups: Tips and Strategies",
      excerpt: "Juggling multiple shared subscriptions? Learn how to efficiently manage Netflix, Spotify, and other subscription groups without confusion or missed payments.",
      date: "December 19, 2025",
      readTime: "6 min read",
      slug: "managing-multiple-subscription-groups-tips-strategies",
      keywords: "multiple subscriptions, subscription group management, shared subscription tips",
      categories: ["Subscription Groups", "Best Practices"]
    },
    {
      title: "GroupFund vs. Splitwise: Which is Better for Group Payments?",
      excerpt: "Compare GroupFund with Splitwise for group payment tracking. See which platform works better for birthdays, subscriptions, events, and different group types.",
      date: "December 19, 2025",
      readTime: "8 min read",
      slug: "groupfund-vs-splitwise-group-payments-comparison",
      keywords: "GroupFund vs Splitwise, group payment comparison, Splitwise alternative, group contribution apps",
      categories: ["Best Practices", "Payment Tracking"]
    },
    {
      title: "How to Organize Baby Shower Contributions with General Groups",
      excerpt: "Planning a baby shower? Learn how General Groups help you organize contributions, track who's paid, and ensure the celebration is stress-free for everyone involved.",
      date: "December 19, 2025",
      readTime: "5 min read",
      slug: "how-to-organize-baby-shower-contributions-general-groups",
      keywords: "baby shower contributions, baby shower planning, group gift organization, event contributions",
      categories: ["General Groups", "Event Planning"]
    },
    {
      title: "Subscription Group Admin Guide: Managing Shared Services",
      excerpt: "Everything subscription group admins need to know. Learn how to set up payment schedules, manage members, track deadlines, and handle account details effectively.",
      date: "December 19, 2025",
      readTime: "7 min read",
      slug: "subscription-group-admin-guide-managing-shared-services",
      keywords: "subscription admin, shared service management, subscription group admin, managing subscriptions",
      categories: ["Subscription Groups", "Best Practices"]
    },
    {
      title: "The Complete Guide to Group Contribution Types: Birthday, Subscription, and General",
      excerpt: "Understand the three group types in GroupFund: Birthday Groups, Subscription Groups, and General Groups. Learn when to use each type and how they differ.",
      date: "December 19, 2025",
      readTime: "8 min read",
      slug: "complete-guide-group-contribution-types-birthday-subscription-general",
      keywords: "group types, birthday groups, subscription groups, general groups, group contribution types",
      categories: ["Birthday Groups", "Subscription Groups", "General Groups"]
    }
  ]

  const categories = ["Subscription Groups", "General Groups", "Birthday Groups", "Payment Tracking", "Event Planning", "Best Practices"]

  // Filter blog posts based on search query and selected category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      // Category filter
      if (selectedCategory && (!post.categories || !post.categories.includes(selectedCategory))) {
        return false
      }

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase()
        const searchableText = `${post.title} ${post.excerpt} ${post.keywords}`.toLowerCase()
        return searchableText.includes(query)
      }

      return true
    })
  }, [searchQuery, selectedCategory])

  const handleCategoryClick = (category) => {
    if (category === 'All') {
      setSelectedCategory(null) // Clear filter when "All" is clicked
    } else if (selectedCategory === category) {
      setSelectedCategory(null) // Deselect if clicking the same category
    } else {
      setSelectedCategory(category)
    }
  }

  return (
    <>
      <SEO
        title="GroupFund Blog - Tips, Guides & Insights on Organizing Group Contributions"
        description="Read our blog for tips on organizing group contributions, subscription management, event planning, why WhatsApp groups fail, best practices for collecting money in Nigeria, and comparisons with traditional methods. Expert guides on Birthday Groups, Subscription Groups, and General Groups."
        keywords="group contribution tips, group payment blog, subscription management blog, event planning blog, organize contributions Nigeria, WhatsApp payment problems, group contribution guides, birthday groups, subscription groups, general groups, shared subscriptions, wedding contributions, baby shower planning"
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
          {/* Search and Filter Section */}
          <div style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '1rem', textAlign: 'center' }}>Looking for Specific Topics?</h3>
            <p style={{ marginBottom: '1.5rem', color: '#666', textAlign: 'center' }}>
              Our blog covers a wide range of topics including subscription management, event planning, payment tracking, 
              group organization, and more. Use the search function or browse by category to find exactly what you need.
            </p>
            
            {/* Search Input */}
            <div style={{ marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  fontSize: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
            </div>

            {/* Category Filters */}
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {/* All button */}
              <button
                onClick={() => handleCategoryClick('All')}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: selectedCategory === null ? '#6366f1' : '#fff',
                  color: selectedCategory === null ? '#fff' : '#333',
                  border: '1px solid',
                  borderColor: selectedCategory === null ? '#6366f1' : '#ddd',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: selectedCategory === null ? '600' : '400'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== null) {
                    e.target.style.backgroundColor = '#f0f0f0'
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== null) {
                    e.target.style.backgroundColor = '#fff'
                  }
                }}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: selectedCategory === category ? '#6366f1' : '#fff',
                    color: selectedCategory === category ? '#fff' : '#333',
                    border: '1px solid',
                    borderColor: selectedCategory === category ? '#6366f1' : '#ddd',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontWeight: selectedCategory === category ? '600' : '400'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.backgroundColor = '#f0f0f0'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.backgroundColor = '#fff'
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results count */}
            {(searchQuery || selectedCategory) && (
              <div style={{ marginTop: '1rem', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
                {filteredPosts.length === 0 ? (
                  <p>No posts found matching your criteria.</p>
                ) : (
                  <p>Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}</p>
                )}
              </div>
            )}
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="blog-grid">
              {filteredPosts.map((post, index) => (
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
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>No posts found</p>
              <p>Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

