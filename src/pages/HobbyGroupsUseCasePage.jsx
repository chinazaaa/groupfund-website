import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function HobbyGroupsUseCasePage() {
  return (
    <>
      <SEO
        title="GroupFund for Hobby Groups - Manage Hobby Group Contributions"
        description="Organize contributions for hobby groups, book clubs, gaming groups, and interest-based communities. Manage shared subscriptions, events, and group expenses."
        keywords="hobby group contributions, book club contributions, gaming group payments, interest group contributions, hobby group management"
        canonical="https://groupfund.app/use-cases/hobby-groups"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Hobby Groups</h1>
          <p className="page-subtitle">
            Organize contributions for hobby groups, book clubs, gaming groups, and interest-based communities
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Use GroupFund for Hobby Groups?</h2>
              <p>
                Hobby groups, book clubs, gaming groups, and interest-based communities often need to organize contributions for shared subscriptions, events, and group expenses. GroupFund makes this simple.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Hobby Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>📚 Book Club Subscriptions</h3>
                  <p>Manage shared book subscription services with Subscription Groups.</p>
                </div>
                <div className="feature-item">
                  <h3>🎮 Gaming Subscriptions</h3>
                  <p>Organize gaming service subscriptions (Xbox Game Pass, PlayStation Plus, etc.).</p>
                </div>
                <div className="feature-item">
                  <h3>🎨 Event Contributions</h3>
                  <p>Organize contributions for hobby group events and meetups.</p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Your Hobby Group?</h2>
              <p>Start managing hobby group contributions effortlessly with GroupFund.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/resources" className="btn btn-secondary btn-large">View Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

