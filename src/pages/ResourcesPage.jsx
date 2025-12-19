import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ResourcesPage() {
  const guides = [
    {
      slug: 'how-to-organize-birthday-contributions',
      title: 'How to Organize Group Contributions',
      description: 'A complete step-by-step guide to organizing group contributions for your group - birthdays, subscriptions, events. Learn best practices and avoid common mistakes.',
      icon: '📋',
      category: 'Getting Started',
      readTime: '5 min read'
    },
    {
      slug: 'setting-up-your-first-group',
      title: 'Setting Up Your First Group',
      description: 'Quick start guide for creating your first group - birthday, subscription, or general. Perfect for beginners getting started with GroupFund.',
      icon: '🚀',
      category: 'Getting Started',
      readTime: '4 min read'
    },
    {
      slug: 'understanding-member-reliability-scores',
      title: 'Understanding Member Reliability Scores',
      description: 'Complete guide to how member reliability scores work, how they\'re calculated, and how to use them effectively.',
      icon: '⭐',
      category: 'Getting Started',
      readTime: '5 min read'
    },
    {
      slug: 'birthday-contribution-etiquette',
      title: 'Group Contribution Etiquette',
      description: 'Learn the dos and don\'ts of group contributions. Best practices for fair, respectful, and stress-free group contributions - for birthdays, subscriptions, events, and more.',
      icon: '🤝',
      category: 'Best Practices',
      readTime: '4 min read'
    },
    {
      slug: 'managing-large-group-contributions',
      title: 'Managing Large Group Contributions',
      description: 'Tips and strategies for organizing group contributions in large groups like churches, schools, and organizations - for birthdays, subscriptions, events, and more.',
      icon: '👥',
      category: 'Best Practices',
      readTime: '5 min read'
    },
    {
      slug: 'avoiding-birthday-contribution-mistakes',
      title: 'Avoiding Group Contribution Mistakes',
      description: 'Common mistakes people make when organizing group contributions and how to avoid them - for birthdays, subscriptions, events, and more.',
      icon: '⚠️',
      category: 'Best Practices',
      readTime: '4 min read'
    },
    {
      slug: 'calculating-group-contributions',
      title: 'Calculating Group Contributions',
      description: 'How to calculate fair contribution amounts for your group. Tips for setting amounts that work for everyone.',
      icon: '💰',
      category: 'Planning',
      readTime: '6 min read'
    },
    {
      slug: 'budgeting-for-group-contributions',
      title: 'Budgeting for Group Contributions',
      description: 'Learn how to budget for group contributions. Plan your annual expenses and manage finances effectively - for birthdays, subscriptions, events, and more.',
      icon: '📊',
      category: 'Planning',
      readTime: '6 min read'
    },
    {
      slug: 'choosing-the-right-contribution-amount',
      title: 'Choosing the Right Contribution Amount',
      description: 'Guide for setting fair contribution amounts. Factors to consider, examples by group type, and tips for choosing amounts.',
      icon: '💵',
      category: 'Planning',
      readTime: '5 min read'
    },
    {
      slug: 'multi-currency-group-payments',
      title: 'Multi-Currency Group Payments',
      description: 'Complete guide to organizing group contributions for international groups with members in different countries - for birthdays, subscriptions, events, and more.',
      icon: '🌍',
      category: 'Advanced',
      readTime: '7 min read'
    },
    {
      slug: 'advanced-group-management-strategies',
      title: 'Advanced Group Management Strategies',
      description: 'Expert tips and strategies for advanced group management. Optimize your group\'s performance and handle complex situations.',
      icon: '🎯',
      category: 'Advanced',
      readTime: '7 min read'
    },
    {
      slug: 'optimizing-payment-confirmation-workflows',
      title: 'Optimizing Payment Confirmation Workflows',
      description: 'Advanced strategies for efficient and accurate payment confirmations. Optimize workflows for large groups.',
      icon: '⚙️',
      category: 'Advanced',
      readTime: '6 min read'
    },
    {
      slug: 'using-birthday-wishlists',
      title: 'How to Use Birthday Wishlists',
      description: 'Complete guide to creating and using birthday wishlists for coordinated group gift giving. Learn how to share wishlists, claim items, and avoid duplicate gifts.',
      icon: '🎁',
      category: 'Best Practices',
      readTime: '10 min read'
    },
    {
      slug: 'setting-up-subscription-groups',
      title: 'Setting Up Subscription Groups',
      description: 'Complete guide to creating and managing Subscription Groups. Learn how to set up shared subscriptions, configure payment schedules, and manage admin account details.',
      icon: '📺',
      category: 'Getting Started',
      readTime: '6 min read'
    },
    {
      slug: 'creating-general-groups-for-events',
      title: 'Creating General Groups for Events',
      description: 'Step-by-step guide to creating General Groups for weddings, baby showers, graduations, and any event. Learn how to set deadlines and manage contributions effectively.',
      icon: '🎉',
      category: 'Getting Started',
      readTime: '5 min read'
    },
    {
      slug: 'subscription-group-best-practices',
      title: 'Subscription Group Best Practices',
      description: 'Learn best practices for managing Subscription Groups. Tips for setting frequencies, handling account details, tracking deadlines, and maintaining group harmony.',
      icon: '✅',
      category: 'Best Practices',
      readTime: '6 min read'
    },
    {
      slug: 'managing-event-contributions',
      title: 'Managing Event Contributions',
      description: 'Complete guide to organizing contributions for events using General Groups. Tips for weddings, baby showers, graduations, and special occasions.',
      icon: '🎊',
      category: 'Best Practices',
      readTime: '6 min read'
    },
    {
      slug: 'choosing-between-group-types',
      title: 'Choosing Between Group Types',
      description: 'Learn when to use Birthday Groups, Subscription Groups, or General Groups. Understand the differences and choose the right type for your needs.',
      icon: '🤔',
      category: 'Planning',
      readTime: '5 min read'
    },
    {
      slug: 'subscription-deadline-management',
      title: 'Subscription Deadline Management',
      description: 'Master subscription deadline tracking. Learn how to set monthly or annual frequencies, configure deadlines, and ensure timely payments for shared subscriptions.',
      icon: '📅',
      category: 'Planning',
      readTime: '5 min read'
    },
    {
      slug: 'admin-account-details-guide',
      title: 'Admin Account Details Guide',
      description: 'Complete guide to managing admin account details for Subscription and General Groups. Learn how to securely share payment information with group members.',
      icon: '🏦',
      category: 'Best Practices',
      readTime: '4 min read'
    },
    {
      slug: 'organizing-international-group-contributions',
      title: 'Organizing International Group Contributions',
      description: 'Guide to managing contributions for groups with members across different countries. Handle multiple currencies, time zones, and payment methods effectively.',
      icon: '🌐',
      category: 'Advanced',
      readTime: '8 min read'
    },
    {
      slug: 'subscription-group-payment-schedules',
      title: 'Subscription Group Payment Schedules',
      description: 'Learn how to set up and manage payment schedules for Subscription Groups. Understand monthly vs. annual frequencies and how to configure deadlines.',
      icon: '⏰',
      category: 'Planning',
      readTime: '5 min read'
    }
  ]

  const categories = ['All', 'Getting Started', 'Best Practices', 'Planning', 'Advanced']
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredGuides = selectedCategory === 'All' 
    ? guides 
    : guides.filter(guide => guide.category === selectedCategory)

  return (
    <>
      <SEO
        title="Resources & Guides - Group Contribution Tips & Best Practices"
        description="Learn how to organize group contributions effectively. Free guides, tips, and best practices for managing Birthday Groups, Subscription Groups, and General Groups. Educational resources covering subscription management, event planning, payment tracking, and more for families, churches, schools, and groups."
        keywords="group contribution guides, how to organize group contributions, subscription group guide, general group guide, birthday group guide, contribution tips, group payment guides, contribution best practices, educational resources, subscription management guide, event planning guide, shared subscription guide"
        canonical="https://groupfund.app/resources"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Resources & Guides</h1>
          <p className="page-subtitle">
            Learn how to organize group contributions effectively. Free guides, tips, and best practices for managing group contributions - for birthdays, subscriptions, events, and more.
          </p>
        </div>
      </section>

      <section className="resources-page">
        <div className="container">
          <div className="resources-intro">
            <h2>Educational Resources</h2>
            <p>
              Whether you're organizing group contributions for the first time or looking to improve your current process, our guides cover everything you need to know. From basic setup to advanced strategies, these resources will help you organize contributions effectively - for Birthday Groups, Subscription Groups, and General Groups.
            </p>
            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>📋 Getting Started</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  New to GroupFund? Start here with guides on setting up your first group, understanding member reliability scores, and choosing the right group type for your needs.
                </p>
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>✅ Best Practices</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  Learn proven strategies for managing contributions effectively. Discover etiquette guidelines, common mistakes to avoid, and tips for maintaining group harmony.
                </p>
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>📊 Planning</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  Plan your contributions strategically. Learn how to calculate amounts, budget effectively, manage deadlines, and choose the right contribution structure for your group.
                </p>
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🎯 Advanced</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  Master advanced techniques for large groups, international contributions, multi-currency payments, and optimizing workflows for maximum efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Guides Grid */}
          <div className="guides-grid">
            {filteredGuides.map((guide) => (
              <article key={guide.slug} className="guide-card">
                <div className="guide-icon">{guide.icon}</div>
                <div className="guide-category">{guide.category}</div>
                <h2 className="guide-title">{guide.title}</h2>
                <p className="guide-description">{guide.description}</p>
                <div className="guide-meta">
                  <span className="guide-read-time">{guide.readTime}</span>
                </div>
                <Link 
                  to={`/resources/${guide.slug}`} 
                  className="btn btn-primary"
                >
                  Read Guide →
                </Link>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="cta-box">
            <h2>Ready to Start Organizing?</h2>
            <p>Put these guides into practice with GroupFund. Start organizing group contributions for your group today - for birthdays, subscriptions, events, and more.</p>
            <div className="cta-buttons">
              <Link to="/waitlist" className="btn btn-primary btn-large">Get Started Free</Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

