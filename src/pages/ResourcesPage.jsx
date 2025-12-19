import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ResourcesPage() {
  const guides = [
    {
      slug: 'how-to-organize-birthday-contributions',
      title: 'How to Organize Birthday Contributions',
      description: 'A complete step-by-step guide to organizing birthday contributions for your group. Learn best practices and avoid common mistakes.',
      icon: '📋',
      category: 'Getting Started',
      readTime: '5 min read'
    },
    {
      slug: 'setting-up-your-first-group',
      title: 'Setting Up Your First Group',
      description: 'Quick start guide for creating your first birthday contribution group. Perfect for beginners getting started with GroupFund.',
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
      title: 'Birthday Contribution Etiquette',
      description: 'Learn the dos and don\'ts of birthday contributions. Best practices for fair, respectful, and stress-free group contributions.',
      icon: '🤝',
      category: 'Best Practices',
      readTime: '4 min read'
    },
    {
      slug: 'managing-large-group-contributions',
      title: 'Managing Large Group Contributions',
      description: 'Tips and strategies for organizing birthday contributions in large groups like churches, schools, and organizations.',
      icon: '👥',
      category: 'Best Practices',
      readTime: '5 min read'
    },
    {
      slug: 'avoiding-birthday-contribution-mistakes',
      title: 'Avoiding Birthday Contribution Mistakes',
      description: 'Common mistakes people make when organizing birthday contributions and how to avoid them.',
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
      description: 'Learn how to budget for group birthday contributions. Plan your annual expenses and manage finances effectively.',
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
      description: 'Complete guide to organizing birthday contributions for international groups with members in different countries.',
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
        title="Resources & Guides - Birthday Contribution Tips & Best Practices"
        description="Learn how to organize birthday contributions effectively. Free guides, tips, and best practices for managing group birthday contributions. Educational resources for families, churches, schools, and groups."
        keywords="birthday contribution guides, how to organize birthday contributions, birthday contribution tips, group payment guides, birthday contribution best practices, educational resources"
        canonical="https://groupfund.app/resources"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Resources & Guides</h1>
          <p className="page-subtitle">
            Learn how to organize birthday contributions effectively. Free guides, tips, and best practices for managing group contributions.
          </p>
        </div>
      </section>

      <section className="resources-page">
        <div className="container">
          <div className="resources-intro">
            <h2>Educational Resources</h2>
            <p>
              Whether you're organizing birthday contributions for the first time or looking to improve your current process, our guides cover everything you need to know. From basic setup to advanced strategies, these resources will help you organize contributions effectively.
            </p>
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
            <p>Put these guides into practice with GroupFund. Start organizing birthday contributions for your group today.</p>
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

