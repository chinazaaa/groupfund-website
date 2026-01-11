import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function CouplesUseCasePage() {
  return (
    <>
      <SEO
        title="GroupFund for Couples - Manage Shared Expenses with Your Partner"
        description="Manage shared expenses, subscriptions, and gifts with your partner using GroupFund. Organize contributions for dates, anniversaries, and shared subscriptions in one place."
        keywords="couple expenses, shared subscriptions couples, partner contributions, relationship expenses, couple bill splitting, shared expenses couples"
        canonical="https://www.groupfund.app/use-cases/couples"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Couples</h1>
          <p className="page-subtitle">
            Manage shared expenses, subscriptions, and gifts with your partner. Organize contributions for dates, anniversaries, and shared subscriptions in one place.
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Couples Love GroupFund</h2>
              <p>
                Managing shared expenses with your partner can be challenging. From shared subscriptions to date nights and anniversaries, GroupFund helps couples organize contributions, track payments, and split costs fairly.
              </p>
              <p>
                Whether you're sharing streaming subscriptions, organizing anniversary gifts, or splitting date expenses, GroupFund makes it easy to keep everything organized and transparent.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Couples</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>💑 Shared Subscriptions</h3>
                  <p>Share Netflix, Spotify, and other subscriptions with your partner. Use Subscription Groups for recurring payments.</p>
                </div>
                <div className="feature-item">
                  <h3>🎁 Anniversary & Gift Contributions</h3>
                  <p>Organize contributions for anniversaries, birthdays, and special occasions. Track who has contributed to shared gifts.</p>
                </div>
                <div className="feature-item">
                  <h3>🍽️ Date Night Expenses</h3>
                  <p>Split costs for dates, dinners, and activities. Organize contributions for special outings and experiences.</p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Shared Household Expenses</h3>
                  <p>Track shared household expenses, groceries, and utilities. Split costs fairly and transparently.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Automatic Reminders</h3>
                  <p>Get reminders before subscription deadlines and special dates. Never miss important payments or occasions.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Transparent Tracking</h3>
                  <p>See who has paid and track contributions together. Maintain transparency in shared expenses.</p>
                </div>
                <div className="feature-item">
                  <h3>💬 Couple Group Chat</h3>
                  <p>Coordinate shared expenses with optional per-group chat. Mention your partner with @username, share account details, and confirm payments - all in one place. Perfect for couples managing shared expenses.</p>
                </div>
              </div>
            </div>

            <div className="use-case-section">
              <h2>Common Couple Scenarios</h2>
              <ul className="scenarios-list">
                <li><strong>Shared Streaming Subscriptions:</strong> Split Netflix, Spotify, and other entertainment subscriptions.</li>
                <li><strong>Anniversary Contributions:</strong> Organize contributions for anniversary gifts, trips, or celebrations.</li>
                <li><strong>Date Night Expenses:</strong> Split costs for dinners, activities, and special outings.</li>
                <li><strong>Household Expenses:</strong> Track shared groceries, utilities, and household items.</li>
                <li><strong>Travel & Trips:</strong> Organize contributions for couple trips and vacations.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Manage Shared Expenses with Your Partner?</h2>
              <p>Join thousands of couples who use GroupFund to make shared expenses stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Couple Group</Link>
                <Link to="/use-cases" className="btn btn-secondary btn-large">View All Use Cases</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

