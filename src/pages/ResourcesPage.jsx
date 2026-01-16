import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ResourcesPage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Resources & Guides - GroupFund",
      "description": "Comprehensive guides and resources for organizing group contributions. Learn best practices, tips, and strategies for managing birthday, subscription, and general groups.",
      "url": "https://www.groupfund.app/resources"
    }
    const existingScript = document.querySelector('script[data-resources-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-resources-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-resources-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

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
      slug: 'how-to-create-birthday-wishlist',
      title: 'How to Create a Birthday Wishlist',
      description: 'Step-by-step guide on how to create a birthday wishlist. Learn how to add items, set prices, include photos, and organize your wishlist effectively for group gift coordination.',
      icon: '✨',
      category: 'Getting Started',
      readTime: '8 min read'
    },
    {
      slug: 'birthday-wishlist-meaning',
      title: 'Birthday Wishlist Meaning - What is a Birthday Wishlist?',
      description: 'Learn what a birthday wishlist means and how it works. Discover how birthday wishlists help coordinate group gift giving, prevent duplicate gifts, and ensure celebrants receive items they actually want.',
      icon: '📖',
      category: 'Getting Started',
      readTime: '5 min read'
    },
    {
      slug: 'setting-up-birthday-groups',
      title: 'Setting Up Birthday Groups',
      description: 'Complete guide to creating and managing Birthday Groups. Learn how to add birthdays, set up wishlists, configure reminders, and organize birthday contributions effectively.',
      icon: '🎂',
      category: 'Getting Started',
      readTime: '6 min read'
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
    },
    {
      slug: 'using-group-chat-and-messaging',
      title: 'Using Group Chat & Messaging',
      description: 'Complete guide to GroupFund\'s per-group chat feature. Learn how to enable chat, mention members, customize notification preferences, and use chat effectively for group communication.',
      icon: '💬',
      category: 'Getting Started',
      readTime: '6 min read'
    },
    {
      slug: 'group-chat-best-practices',
      title: 'Group Chat Best Practices',
      description: 'Learn best practices for using group chat effectively. Tips for respectful communication, when to use mentions, managing notifications, and maintaining group harmony through chat.',
      icon: '✨',
      category: 'Best Practices',
      readTime: '5 min read',
      link: '/best-practices/group-chat-best-practices'
    },
    {
      slug: 'best-app-for-splitting-bills',
      title: 'Best App for Splitting Bills',
      description: 'Discover the best app for splitting bills with friends, roommates, and family. Learn how to split rent, utilities, subscriptions, and expenses easily. Track payments, send reminders, and avoid awkward money conversations.',
      icon: '💳',
      category: 'Best Practices',
      readTime: '8 min read'
    },
    {
      slug: 'setting-up-auto-pay',
      title: 'Setting Up Auto-Pay',
      description: 'Complete guide to setting up automatic payments (auto-pay) in GroupFund. Learn how to enable auto-pay, choose payment timing, and never miss a contribution deadline.',
      icon: '🔄',
      category: 'Getting Started',
      readTime: '6 min read'
    },
    {
      slug: 'using-your-wallet',
      title: 'Using Your Wallet',
      description: 'Complete guide to using GroupFund\'s in-app wallet system. Learn how to receive funds, view balance, check transaction history, and understand wallet usage rules.',
      icon: '💼',
      category: 'Getting Started',
      readTime: '5 min read'
    },
    {
      slug: 'withdrawing-funds',
      title: 'Withdrawing Funds',
      description: 'Complete guide to withdrawing funds from your GroupFund wallet to your bank account. Learn about withdrawal fees, 24-hour security hold, and the withdrawal process.',
      icon: '🏦',
      category: 'Getting Started',
      readTime: '5 min read'
    },
    {
      slug: 'payment-methods-guide',
      title: 'Payment Methods Guide',
      description: 'Complete guide to payment methods in GroupFund. Learn about auto-pay vs manual payments, when to use each, currency restrictions, and payment processing.',
      icon: '💳',
      category: 'Getting Started',
      readTime: '7 min read'
    },
    {
      slug: 'auto-pay-best-practices',
      title: 'Auto-Pay Best Practices',
      description: 'Best practices for using auto-pay effectively. Learn when to use auto-pay, payment timing strategies, managing failed payments, and tips for successful automatic payments.',
      icon: '✅',
      category: 'Best Practices',
      readTime: '6 min read',
      link: '/best-practices/auto-pay-best-practices'
    },
    {
      slug: 'wallet-management-best-practices',
      title: 'Wallet Management Best Practices',
      description: 'Best practices for managing your GroupFund wallet. Learn how to monitor balance, review transaction history, plan withdrawals, and maintain wallet security.',
      icon: '💼',
      category: 'Best Practices',
      readTime: '5 min read',
      link: '/best-practices/wallet-management-best-practices'
    },
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
        description="Learn how to organize group contributions effectively. Free guides, tips, and best practices for managing Birthday Groups, Subscription Groups, and General Groups. Educational resources covering subscription management, event planning, payment tracking, group chat, and more for families, churches, schools, and groups."
        keywords="group contribution guides, how to organize group contributions, subscription group guide, general group guide, birthday group guide, contribution tips, group payment guides, contribution best practices, educational resources, subscription management guide, event planning guide, shared subscription guide, group chat guide, messaging guide"
        canonical="https://www.groupfund.app/resources"
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
          {/* Tools Section */}
          <div className="tools-section" style={{ marginBottom: '3rem', textAlign: 'center', padding: '2rem', background: '#f9fafb', borderRadius: '12px' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: '#111827' }}>🛠️ Interactive Tools</h2>
            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Use our free calculators to plan and estimate your group contributions.</p>
            <Link to="/tools" className="btn btn-primary btn-large" style={{ textDecoration: 'none' }}>
              View All Tools →
            </Link>
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
                  to={guide.link || `/resources/${guide.slug}`} 
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
              <Link to="/get-started" className="btn btn-primary btn-large">Get Started for Free</Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

