import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const glossaryTerms = [
    {
      term: "Member Reliability Score",
      definition: "A numerical score (0-100) that indicates how reliable a member is at making contributions on time. The score is calculated based on total contributions made, on-time payment rate, total groups joined, and overdue contributions. Members are rated as Excellent, Good, Moderate, Poor, or New based on their score.",
      category: "scores",
      relatedTerms: ["Group Health Score", "On-Time Payment Rate", "Overdue Contributions"]
    },
    {
      term: "Group Health Score",
      definition: "A metric that tracks overall group performance and compliance. It shows how well a group maintains contribution standards, member participation rates, and overall reliability. Groups with higher health scores are more likely to have consistent contributions and active members. Reports and member behavior affect the group health score.",
      category: "scores",
      relatedTerms: ["Member Reliability Score", "Reports", "Group Status"]
    },
    {
      term: "Contribution Confirmation",
      definition: "A two-step process where members mark their payment as 'Paid' and then the celebrant (for Birthday Groups) or admin (for Subscription/General Groups) confirms receipt by marking it as 'Confirmed' or 'Not Received'. This ensures accuracy and transparency in payment tracking.",
      category: "payments",
      relatedTerms: ["Two-Step Payment Process", "Payment Status", "Celebrant", "Admin"]
    },
    {
      term: "Two-Step Payment Process",
      definition: "The payment confirmation workflow where (1) members mark their contribution as 'Paid' after making the payment, and (2) the recipient (celebrant or admin) verifies and marks it as 'Confirmed' if received, or 'Not Received' if not received. This ensures accuracy and helps resolve payment disputes.",
      category: "payments",
      relatedTerms: ["Contribution Confirmation", "Payment Status"]
    },
    {
      term: "Payment Status",
      definition: "The current state of a contribution, which can be: 'Not Paid' (payment not yet made), 'Paid' (member marked as paid, awaiting confirmation), 'Confirmed' (recipient confirmed receipt), or 'Not Received' (recipient marked as not received). Payment status is visible to all group members for transparency.",
      category: "payments",
      relatedTerms: ["Contribution Confirmation", "Two-Step Payment Process", "Overdue Contributions"]
    },
    {
      term: "Birthday Groups",
      definition: "A group type designed for organizing birthday contributions. Members contribute to the birthday celebrant on their birthday. Features include birthday calendar view, birthday wishlists, automatic reminders (7 days before, 1 day before, and on the birthday), and tracking of both upcoming and past birthdays. Requires birthday to be set in profile.",
      category: "groups",
      relatedTerms: ["Subscription Groups", "General Groups", "Celebrant", "Birthday Wishlist"]
    },
    {
      term: "Subscription Groups",
      definition: "A group type for managing shared subscriptions like Netflix, Spotify, etc. Members contribute to the admin (group creator) who pays for the subscription. Features include monthly or annual frequency settings, subscription deadline management, and reminders before subscription deadlines. No birthday required.",
      category: "groups",
      relatedTerms: ["General Groups", "Birthday Groups", "Admin", "Subscription Deadline"]
    },
    {
      term: "General Groups",
      definition: "A flexible group type for any purpose - weddings, baby showers, events, or anything else. Members contribute to the admin (group creator) who manages the funds. Features include optional deadline dates, event tracking, and reminders before deadlines. No birthday required.",
      category: "groups",
      relatedTerms: ["Birthday Groups", "Subscription Groups", "Admin", "Event Contributions"]
    },
    {
      term: "Invite Code",
      definition: "A unique code that allows people to preview and request to join a group. When someone receives an invite code, they can preview the group details (member reliability scores, group health metrics, contribution amounts, currency, maximum group size) before requesting to join. The group admin then approves or rejects the request.",
      category: "groups",
      relatedTerms: ["Group Preview", "Admin", "Member Approval"]
    },
    {
      term: "Group Preview",
      definition: "The ability to view group details before joining, including member reliability scores, group health metrics, contribution amounts, currency, maximum group size, and current members. This helps users make informed decisions before requesting to join a group. Accessible via invite code.",
      category: "groups",
      relatedTerms: ["Invite Code", "Member Reliability Score", "Group Health Score"]
    },
    {
      term: "OTP Verification",
      definition: "One-Time Password verification - a security feature where users receive a unique code via email when signing up or resetting their password. Users enter the OTP code to verify their account, ensuring account security and preventing unauthorized access.",
      category: "security",
      relatedTerms: ["Account Security", "Password Reset"]
    },
    {
      term: "Overdue Contributions",
      definition: "Contributions that have passed their deadline without being paid. The system automatically tracks overdue contributions, marks them clearly, and sends additional reminders. Overdue contributions affect member reliability scores and are visible to all group members for transparency.",
      category: "payments",
      relatedTerms: ["Payment Status", "Member Reliability Score", "Payment Reminders"]
    },
    {
      term: "Celebrant",
      definition: "The person whose birthday is being celebrated in a Birthday Group. The celebrant receives contributions from group members and can confirm or reject contributions they receive. Celebrants can also create and share birthday wishlists.",
      category: "roles",
      relatedTerms: ["Birthday Groups", "Contribution Confirmation", "Birthday Wishlist"]
    },
    {
      term: "Admin",
      definition: "Short for Group Administrator - the person who creates and manages a group. Admins can approve/reject member requests, update group settings (contribution amounts, maximum size), pause/resume accepting members, close/reopen groups, and confirm contributions (for Subscription and General Groups).",
      category: "roles",
      relatedTerms: ["Group Management", "Member Approval", "Contribution Confirmation"]
    },
    {
      term: "Fixed Contribution Amount",
      definition: "A set amount that each member contributes (e.g., ₦5,000 per person). Fixed amounts ensure fairness and clarity - everyone knows exactly what to contribute. Admins can update contribution amounts, and all active members are notified of changes via email, push, and in-app notifications.",
      category: "payments",
      relatedTerms: ["Maximum Group Size", "Contribution Calculation", "Admin"]
    },
    {
      term: "Maximum Group Size",
      definition: "The maximum number of members that can join a group. Set when creating the group, this helps calculate total yearly contribution amounts upfront. For example, if contribution is ₦5,000 and max size is 10, total commitment is ₦50,000. Admins can update this setting.",
      category: "groups",
      relatedTerms: ["Fixed Contribution Amount", "Contribution Calculation", "Admin"]
    },
    {
      term: "Birthday Wishlist",
      definition: "A feature in Birthday Groups where celebrants can create and share a list of items they'd like to receive. Group members can view the wishlist, claim items they want to gift, and the celebrant can mark items as 'done' when received. This helps avoid duplicate gifts and ensures celebrants get items they actually want.",
      category: "features",
      relatedTerms: ["Birthday Groups", "Celebrant", "Gift Coordination"]
    },
    {
      term: "On-Time Payment Rate",
      definition: "The percentage of contributions a member has made on or before the deadline. This metric is part of the member reliability score calculation. Higher on-time payment rates indicate more reliable members.",
      category: "scores",
      relatedTerms: ["Member Reliability Score", "Overdue Contributions", "Payment Status"]
    },
    {
      term: "Contribution History",
      definition: "A complete record of all contributions made by a member, including received contributions, payment confirmations, overdue contributions, and payment statuses. For Birthday Groups, this includes both upcoming and past birthdays. Helps maintain transparency and track long-term participation.",
      category: "features",
      relatedTerms: ["Payment Status", "Payment Tracking", "Transparency"]
    },
    {
      term: "Payment Reminders",
      definition: "Automatic notifications sent before contribution deadlines. For Birthday Groups: 7 days before, 1 day before, and on the birthday. For Subscription Groups: before subscription deadlines. For General Groups: before event deadlines. Reminders include helpful recaps like '8 out of 10 members have paid'.",
      category: "features",
      relatedTerms: ["Overdue Contributions", "Notifications", "Payment Deadlines"]
    },
    {
      term: "Multi-Currency Support",
      definition: "The ability to use different currencies in groups, including NGN (Nigerian Naira), USD (US Dollar), GBP (British Pound), EUR (Euro), and more. Each group can choose its preferred currency, and the app displays local bank details accordingly. Perfect for international groups with members in different countries.",
      category: "features",
      relatedTerms: ["International Groups", "Currency Selection", "Bank Details"]
    },
    {
      term: "Group Status",
      definition: "The current state of a group, which can be: 'Active' (accepting members and contributions), 'Paused' (not accepting new members but existing members can still contribute), or 'Closed' (all activity frozen - no new members or contributions). Admins can change group status at any time.",
      category: "groups",
      relatedTerms: ["Admin", "Group Management", "Member Status"]
    },
    {
      term: "Member Status",
      definition: "The current state of a member, which can be: 'Active' (can participate in groups) or 'Inactive' (cannot participate - typically due to reports or violations). Members with 3+ pending reports or 5+ total reports are marked as inactive.",
      category: "roles",
      relatedTerms: ["Reports", "Group Status", "Member Reliability Score"]
    },
    {
      term: "Reports",
      definition: "A system for reporting groups or members for violations (spam, fraud, harassment, inappropriate content, etc.). Pending reports reduce group health scores by 5 points. Groups with 3+ pending reports are automatically closed. Members with 3+ pending reports or 5+ total reports are marked as inactive. All reports are reviewed by the GroupFund team.",
      category: "safety",
      relatedTerms: ["Group Health Score", "Member Status", "Safety"]
    },
    {
      term: "Payment Progress Recap",
      definition: "Helpful summaries that show contribution progress, such as '8 out of 10 members have paid'. These recaps appear in reminders and notifications, helping everyone stay informed about contribution status without needing to check the app constantly.",
      category: "features",
      relatedTerms: ["Payment Reminders", "Notifications", "Transparency"]
    },
    {
      term: "Account Details",
      definition: "Bank account information that members add to their profile. These details are visible to all group members for easy reference when making contributions. For Birthday Groups, the celebrant's account details are shown. For Subscription and General Groups, the admin's account details are displayed.",
      category: "payments",
      relatedTerms: ["Bank Transfer", "Payment Methods", "Profile"]
    },
    {
      term: "Group Types",
      definition: "The three types of groups available in GroupFund: Birthday Groups (for birthday contributions), Subscription Groups (for shared subscriptions), and General Groups (for any purpose like weddings, events). Each type has specific features tailored to its use case.",
      category: "groups",
      relatedTerms: ["Birthday Groups", "Subscription Groups", "General Groups"]
    },
    {
      term: "Notification Preferences",
      definition: "Settings that allow users to customize which notifications they receive and how. Users can choose notification channels (in-app, push, email), frequency (7 days before, 1 day before, same day), and notification types (birthday wishes, overdue reminders, member requests, confirmations, group updates).",
      category: "features",
      relatedTerms: ["Payment Reminders", "Notifications", "Settings"]
    },
    {
      term: "Contribution Deadline",
      definition: "The date by which a contribution should be made. For Birthday Groups, this is the birthday date. For Subscription Groups, this is the subscription deadline (monthly or annual). For General Groups, this is the optional event deadline. The system sends reminders before deadlines and tracks overdue contributions after deadlines pass.",
      category: "payments",
      relatedTerms: ["Payment Reminders", "Overdue Contributions", "Payment Status"]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Terms' },
    { id: 'groups', name: 'Groups' },
    { id: 'payments', name: 'Payments' },
    { id: 'scores', name: 'Scores & Metrics' },
    { id: 'roles', name: 'Roles' },
    { id: 'features', name: 'Features' },
    { id: 'security', name: 'Security' },
    { id: 'safety', name: 'Safety' }
  ]

  // Filter terms based on search and category
  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Group terms by first letter for alphabetical display
  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const firstLetter = term.term.charAt(0).toUpperCase()
    if (!acc[firstLetter]) {
      acc[firstLetter] = []
    }
    acc[firstLetter].push(term)
    return acc
  }, {})

  const sortedLetters = Object.keys(groupedTerms).sort()

  // Add structured data for SEO
  useEffect(() => {
    const glossaryStructuredData = {
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      "name": "GroupFund Glossary",
      "description": "Complete glossary of terms and definitions for GroupFund - the group contribution tracking app",
      "url": "https://groupfund.app/glossary",
      "hasDefinedTerm": glossaryTerms.map(term => ({
        "@type": "DefinedTerm",
        "name": term.term,
        "description": term.definition
      }))
    }

    // Remove existing glossary structured data if any
    const existingScript = document.querySelector('script[data-glossary-schema]')
    if (existingScript) {
      existingScript.remove()
    }

    // Add new structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-glossary-schema', 'true')
    script.textContent = JSON.stringify(glossaryStructuredData)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.querySelector('script[data-glossary-schema]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [])

  return (
    <>
      <SEO
        title="GroupFund Glossary - Complete Guide to Terms & Definitions"
        description="Complete glossary of GroupFund terms and definitions. Learn about member reliability scores, group health metrics, contribution confirmation, payment status, group types, and more. Understand all GroupFund features and terminology."
        keywords="groupfund glossary, group contribution terms, member reliability score meaning, group health metrics explained, contribution tracking glossary, group payment definitions, birthday group terms, subscription group terms, payment confirmation meaning, group contribution terminology"
        canonical="https://groupfund.app/glossary"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund Glossary</h1>
          <p className="page-subtitle">
            Complete guide to all terms, definitions, and concepts used in GroupFund. Understand member reliability scores, group health metrics, payment processes, and more.
          </p>
        </div>
      </section>

      <section className="glossary-page">
        <div className="container">
          {/* Search and Filter */}
          <div className="glossary-controls">
            <div className="glossary-search">
              <input
                type="text"
                placeholder="Search terms..."
                className="glossary-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="glossary-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
            <div className="glossary-filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`glossary-filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          {filteredTerms.length > 0 && (
            <div className="glossary-results-count">
              <p>Found {filteredTerms.length} {filteredTerms.length === 1 ? 'term' : 'terms'}</p>
            </div>
          )}

          {/* No Results */}
          {filteredTerms.length === 0 && (
            <div className="glossary-no-results">
              <p>No terms found matching your search.</p>
              <p>Try different keywords or <button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }} className="link-button">clear filters</button>.</p>
            </div>
          )}

          {/* Glossary Terms */}
          {filteredTerms.length > 0 && (
            <div className="glossary-content">
              {sortedLetters.map(letter => (
                <div key={letter} className="glossary-section">
                  <h2 className="glossary-letter">{letter}</h2>
                  <div className="glossary-terms">
                    {groupedTerms[letter].map((term, index) => (
                      <div key={index} className="glossary-term-card">
                        <h3 className="glossary-term-title">{term.term}</h3>
                        <p className="glossary-term-definition">{term.definition}</p>
                        {term.relatedTerms && term.relatedTerms.length > 0 && (
                          <div className="glossary-related-terms">
                            <strong>Related Terms:</strong>
                            <div className="glossary-related-links">
                              {term.relatedTerms.map((relatedTerm, idx) => {
                                const relatedTermObj = glossaryTerms.find(t => t.term === relatedTerm)
                                if (relatedTermObj) {
                                  return (
                                    <button
                                      key={idx}
                                      className="glossary-related-link"
                                      onClick={() => {
                                        setSearchQuery(relatedTerm)
                                        setSelectedCategory('all')
                                        document.querySelector('.glossary-term-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                      }}
                                    >
                                      {relatedTerm}
                                    </button>
                                  )
                                }
                                return null
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quick Links */}
          <div className="glossary-quick-links">
            <h2>Quick Links</h2>
            <div className="glossary-quick-links-grid">
              <Link to="/how-it-works" className="glossary-quick-link">
                <span className="quick-link-icon">📖</span>
                <div>
                  <h3>How It Works</h3>
                  <p>Learn how to use GroupFund</p>
                </div>
              </Link>
              <Link to="/faq" className="glossary-quick-link">
                <span className="quick-link-icon">❓</span>
                <div>
                  <h3>FAQ</h3>
                  <p>Common questions answered</p>
                </div>
              </Link>
              <Link to="/help" className="glossary-quick-link">
                <span className="quick-link-icon">💡</span>
                <div>
                  <h3>Help Center</h3>
                  <p>Get detailed help and support</p>
                </div>
              </Link>
              <Link to="/resources" className="glossary-quick-link">
                <span className="quick-link-icon">📚</span>
                <div>
                  <h3>Resources</h3>
                  <p>Guides and tutorials</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .glossary-page {
          padding: 3rem 0;
        }

        .glossary-controls {
          margin-bottom: 2rem;
        }

        .glossary-search {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .glossary-search-input {
          width: 100%;
          padding: 1rem 3rem 1rem 1rem;
          font-size: 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          transition: border-color 0.3s;
        }

        .glossary-search-input:focus {
          outline: none;
          border-color: #667eea;
        }

        .glossary-search-clear {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #6b7280;
          cursor: pointer;
          padding: 0.25rem 0.5rem;
          line-height: 1;
        }

        .glossary-search-clear:hover {
          color: #374151;
        }

        .glossary-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .glossary-filter-btn {
          padding: 0.5rem 1rem;
          background: #f3f4f6;
          border: 2px solid transparent;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #374151;
          cursor: pointer;
          transition: all 0.3s;
        }

        .glossary-filter-btn:hover {
          background: #e5e7eb;
        }

        .glossary-filter-btn.active {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .glossary-results-count {
          margin-bottom: 1.5rem;
          color: #6b7280;
          font-size: 0.9rem;
        }

        .glossary-no-results {
          text-align: center;
          padding: 3rem 1rem;
          color: #6b7280;
        }

        .link-button {
          background: none;
          border: none;
          color: #667eea;
          text-decoration: underline;
          cursor: pointer;
          font-size: inherit;
        }

        .link-button:hover {
          color: #5568d3;
        }

        .glossary-content {
          margin-bottom: 3rem;
        }

        .glossary-section {
          margin-bottom: 3rem;
        }

        .glossary-letter {
          font-size: 2rem;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #e5e7eb;
        }

        .glossary-terms {
          display: grid;
          gap: 1.5rem;
        }

        .glossary-term-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.5rem;
          transition: box-shadow 0.3s;
        }

        .glossary-term-card:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .glossary-term-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.75rem;
        }

        .glossary-term-definition {
          color: #4b5563;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .glossary-related-terms {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }

        .glossary-related-terms strong {
          display: block;
          margin-bottom: 0.5rem;
          color: #374151;
          font-size: 0.9rem;
        }

        .glossary-related-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .glossary-related-link {
          padding: 0.25rem 0.75rem;
          background: #f3f4f6;
          border: none;
          border-radius: 4px;
          font-size: 0.85rem;
          color: #667eea;
          cursor: pointer;
          transition: all 0.3s;
        }

        .glossary-related-link:hover {
          background: #667eea;
          color: white;
        }

        .glossary-quick-links {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 2px solid #e5e7eb;
        }

        .glossary-quick-links h2 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #111827;
        }

        .glossary-quick-links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .glossary-quick-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s;
        }

        .glossary-quick-link:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .quick-link-icon {
          font-size: 2rem;
        }

        .glossary-quick-link h3 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: #111827;
        }

        .glossary-quick-link p {
          font-size: 0.85rem;
          color: #6b7280;
          margin: 0;
        }

        @media (max-width: 768px) {
          .glossary-filters {
            gap: 0.5rem;
          }

          .glossary-filter-btn {
            padding: 0.4rem 0.8rem;
            font-size: 0.85rem;
          }

          .glossary-letter {
            font-size: 1.5rem;
          }

          .glossary-term-card {
            padding: 1rem;
          }

          .glossary-quick-links-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

