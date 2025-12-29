import React, { useState, useMemo } from 'react'
import '../App.css'

export default function SubscriptionGroupsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const subscriptions = [
    {
      slug: 'netflix',
      title: 'Netflix',
      description: 'Share Netflix costs with friends and family. Organize group contributions for Netflix subscriptions, track payments, and split streaming service costs fairly among group members.',
      icon: '🎬',
      keywords: 'netflix group subscription, share netflix cost, netflix payment splitting, netflix group contributions, split netflix subscription',
      category: 'Entertainment'
    },
    {
      slug: 'spotify',
      title: 'Spotify',
      description: 'Split Spotify Premium Family costs with your group. Manage music streaming subscriptions, track monthly contributions, and organize payments for Spotify group plans.',
      icon: '🎵',
      keywords: 'spotify group subscription, spotify family plan splitting, share spotify cost, spotify group payments, split spotify premium',
      category: 'Music'
    },
    {
      slug: 'disney-plus',
      title: 'Disney+',
      description: 'Share Disney+ subscription costs with your group. Coordinate contributions for Disney Plus, track payments, and split streaming costs for family and friends.',
      icon: '🏰',
      keywords: 'disney plus group subscription, share disney+ cost, disney plus payment splitting, split disney subscription, disney+ group contributions',
      category: 'Entertainment'
    },
    {
      slug: 'hulu',
      title: 'Hulu',
      description: 'Organize group contributions for Hulu subscriptions. Split streaming costs, track payments, and manage Hulu subscription sharing with friends and family.',
      icon: '📺',
      keywords: 'hulu group subscription, share hulu cost, hulu payment splitting, split hulu subscription, hulu group contributions',
      category: 'Entertainment'
    },
    {
      slug: 'hbo-max',
      title: 'HBO Max',
      description: 'Split HBO Max subscription costs with your group. Coordinate streaming service payments, track contributions, and share HBO Max fairly among members.',
      icon: '🎭',
      keywords: 'hbo max group subscription, share hbo max cost, hbo max payment splitting, split hbo subscription, hbo max group contributions',
      category: 'Entertainment'
    },
    {
      slug: 'apple-tv',
      title: 'Apple TV+',
      description: 'Share Apple TV+ subscription costs with friends and family. Organize group payments for Apple streaming services and track monthly contributions.',
      icon: '🍎',
      keywords: 'apple tv plus group subscription, share apple tv cost, apple tv payment splitting, split apple tv subscription, apple tv+ group contributions',
      category: 'Entertainment'
    },
    {
      slug: 'youtube-premium',
      title: 'YouTube Premium',
      description: 'Split YouTube Premium Family costs with your group. Manage ad-free streaming subscriptions, track payments, and organize YouTube Premium contributions.',
      icon: '▶️',
      keywords: 'youtube premium group subscription, youtube family plan splitting, share youtube premium cost, split youtube subscription, youtube premium group payments',
      category: 'Entertainment'
    },
    {
      slug: 'amazon-prime',
      title: 'Amazon Prime',
      description: 'Share Amazon Prime costs including Prime Video. Organize group contributions for Prime membership, track payments, and split subscription costs.',
      icon: '📦',
      keywords: 'amazon prime group subscription, share prime cost, prime video splitting, amazon prime group payments, split prime membership',
      category: 'Entertainment'
    },
    {
      slug: 'paramount-plus',
      title: 'Paramount+',
      description: 'Organize Paramount+ subscription sharing with your group. Split streaming costs, track monthly payments, and manage Paramount Plus contributions.',
      icon: '⛰️',
      keywords: 'paramount plus group subscription, share paramount+ cost, paramount plus payment splitting, split paramount subscription, paramount+ group contributions',
      category: 'Entertainment'
    },
    {
      slug: 'apple-music',
      title: 'Apple Music',
      description: 'Share Apple Music Family subscription costs. Organize group contributions for music streaming, track payments, and split Apple Music expenses fairly.',
      icon: '🎼',
      keywords: 'apple music group subscription, apple music family plan, share apple music cost, split apple music subscription',
      category: 'Music'
    },
    {
      slug: 'chatgpt',
      title: 'ChatGPT Plus',
      description: 'Split ChatGPT Plus subscription costs with your team. Organize group contributions for AI tools, track monthly payments, and share access efficiently.',
      icon: '🤖',
      keywords: 'chatgpt plus subscription, share chatgpt cost, AI tool subscription splitting, chatgpt group payments',
      category: 'Productivity'
    },
    {
      slug: 'canva',
      title: 'Canva Pro',
      description: 'Share Canva Pro subscription with your team. Organize design tool contributions, track payments, and split Canva costs for collaborative creative work.',
      icon: '🎨',
      keywords: 'canva pro subscription, share canva cost, design tool subscription splitting, canva group payments',
      category: 'Productivity'
    }
  ]

  const categories = ['Entertainment', 'Music', 'Productivity']

  // Filter subscriptions based on search query and selected category
  const filteredSubscriptions = useMemo(() => {
    return subscriptions.filter(sub => {
      // Category filter
      if (selectedCategory && sub.category !== selectedCategory) {
        return false
      }

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase()
        const searchableText = `${sub.title} ${sub.description} ${sub.keywords}`.toLowerCase()
        return searchableText.includes(query)
      }

      return true
    })
  }, [searchQuery, selectedCategory])

  const handleCategoryClick = (category) => {
    if (category === 'All') {
      setSelectedCategory(null)
    } else if (selectedCategory === category) {
      setSelectedCategory(null)
    } else {
      setSelectedCategory(category)
    }
  }

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Share Subscription Costs</h1>
          <p className="page-subtitle">
          Subscription services are better when shared. From Netflix and Spotify to Disney+ and YouTube Premium, GroupFund helps you organize group contributions, track payments, and split subscription costs fairly among friends and family.
          </p>
        
        </div>
      </section>

      <section className="subscription-groups-page">
        <div className="container">
          {/* Search and Filter Section */}
          <div style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '1rem', textAlign: 'center' }}>Find Your Subscription</h3>
            <p style={{ marginBottom: '1.5rem', color: '#666', textAlign: 'center' }}>
              Browse subscription services by category or search for a specific service. From Netflix and Spotify to ChatGPT and Canva, find the perfect subscription to share with your group.
            </p>
            
            {/* Search Input */}
            <div style={{ marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
              <input
                type="text"
                placeholder="Search subscriptions..."
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
            <div className="category-filters">
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
                {filteredSubscriptions.length === 0 ? (
                  <p>No subscriptions found matching your criteria.</p>
                ) : (
                  <p>Showing {filteredSubscriptions.length} {filteredSubscriptions.length === 1 ? 'subscription' : 'subscriptions'}</p>
                )}
              </div>
            )}
          </div>

          {/* <div className="subscription-groups-intro">
            <p>
              Subscription services are better when shared. From Netflix and Spotify to Disney+ and YouTube Premium, GroupFund helps you organize group contributions, track payments, and split subscription costs fairly among friends and family.
            </p>
            <div className="intro-cta">
              <a href="/group-types/subscription-groups" className="learn-more-link">
                Learn how Subscription Groups work →
              </a>
            </div>
          </div> */}

          {/* Subscriptions Grid */}
          {filteredSubscriptions.length > 0 ? (
            <div className="subscription-groups-grid">
              {filteredSubscriptions.map((subscription) => (
                <a 
                  key={subscription.slug} 
                  href={`/subscription-groups/${subscription.slug}`}
                  className="subscription-group-card"
                >
                  <div className="subscription-group-icon">{subscription.icon}</div>
                  <h2 className="subscription-group-title">{subscription.title}</h2>
                  <p className="subscription-group-description">{subscription.description}</p>
                  <div className="subscription-group-link">
                    <span>Learn More →</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>No subscriptions found</p>
              <p>Try adjusting your search or category filter.</p>
            </div>
          )}

          <div className="subscription-groups-info">
            <h2>Why Share Subscription Costs?</h2>
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">💰</div>
                <h3>Save Money</h3>
                <p>Split costs and save on monthly subscription expenses.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📊</div>
                <h3>Track Payments</h3>
                <p>Keep track of who's paid and who owes for the subscription.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">⚖️</div>
                <h3>Fair Splitting</h3>
                <p>Ensure everyone pays their fair share of the subscription cost.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🔔</div>
                <h3>Payment Reminders</h3>
                <p>Automated reminders so no one forgets to contribute.</p>
              </div>
            </div>
          </div>

          <div className="subscription-groups-cta">
            <h2>Ready to Start Sharing Subscriptions?</h2>
            <p>Create your subscription group today and start splitting costs with friends and family. Whether it's Netflix, Spotify, or any other service, GroupFund makes it easy.</p>
            <div className="cta-buttons">
              <a href="/waitlist" className="btn btn-primary btn-large">Start Your Free Group</a>
              <a href="/how-it-works" className="btn btn-secondary btn-large">See How It Works</a>
            </div>
          </div>

          <div className="related-pages">
            <h2>Related Pages</h2>
            <div className="related-grid">
              <a href="/group-types/subscription-groups" className="related-card">
                <span className="related-icon">⚙️</span>
                <h3>How Subscription Groups Work</h3>
                <p>Learn about the features and setup process</p>
              </a>
              <a href="/use-cases" className="related-card">
                <span className="related-icon">📋</span>
                <h3>Use Cases</h3>
                <p>Explore all use cases for group contributions</p>
              </a>
              <a href="/group-types" className="related-card">
                <span className="related-icon">👥</span>
                <h3>Group Types</h3>
                <p>Learn about different types of groups</p>
              </a>
              <a href="/tools" className="related-card">
                <span className="related-icon">🧮</span>
                <h3>Cost Calculator</h3>
                <p>Calculate subscription cost splits</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .subscription-groups-page {
          padding: 3rem 0;
        }

        .subscription-groups-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
          color: #6b7280;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .intro-cta {
          margin-top: 1.5rem;
        }

        .learn-more-link {
          display: inline-block;
          color: #6366f1;
          font-weight: 600;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border: 2px solid #6366f1;
          border-radius: 6px;
          transition: all 0.3s;
        }

        .learn-more-link:hover {
          background: #6366f1;
          color: white;
        }

        .subscription-groups-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .subscription-group-card {
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          padding: 2rem;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
        }

        .subscription-group-card:hover {
          border-color: #6366f1;
          box-shadow: 0 8px 16px rgba(99, 102, 241, 0.15);
          transform: translateY(-4px);
        }

        .subscription-group-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .subscription-group-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .subscription-group-description {
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .subscription-group-link {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }

        .subscription-group-link span {
          color: #6366f1;
          font-weight: 600;
          font-size: 1rem;
        }

        .subscription-group-card:hover .subscription-group-link span {
          color: #5568d3;
        }

        .subscription-groups-info {
          margin: 4rem 0;
          padding: 3rem 0;
          border-top: 2px solid #e5e7eb;
          border-bottom: 2px solid #e5e7eb;
        }

        .subscription-groups-info h2 {
          font-size: 1.75rem;
          text-align: center;
          margin-bottom: 2rem;
          color: #111827;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .info-card {
          text-align: center;
          padding: 1.5rem;
        }

        .info-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .info-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .info-card p {
          color: #6b7280;
          line-height: 1.6;
        }

        .subscription-groups-cta {
          text-align: center;
          padding: 3rem 2rem;
          background: #f9fafb;
          border-radius: 12px;
          margin: 4rem 0;
        }

        .subscription-groups-cta h2 {
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .subscription-groups-cta p {
          color: #6b7280;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .related-pages {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 2px solid #e5e7eb;
        }

        .related-pages h2 {
          font-size: 1.75rem;
          margin-bottom: 2rem;
          color: #111827;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .related-card {
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s;
        }

        .related-card:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .related-icon {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }

        .related-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #111827;
        }

        .related-card p {
          font-size: 0.9rem;
          color: #6b7280;
          margin: 0;
        }

        @media (max-width: 768px) {
          .subscription-groups-grid {
            grid-template-columns: 1fr;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .related-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-buttons .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}