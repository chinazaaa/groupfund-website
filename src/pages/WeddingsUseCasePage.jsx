import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function WeddingsUseCasePage() {
  return (
    <>
      <SEO
        title="GroupFund for Weddings - Organize Wedding Contributions & Gifts"
        description="Organize wedding contributions with General Groups. Set contribution amounts, track payments, and manage deadlines for your special day. Perfect for couples planning their wedding."
        keywords="wedding contributions, wedding fund, wedding gift organization, wedding planning, group wedding contributions, wedding gift tracking"
        canonical="https://groupfund.app/use-cases/weddings"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Weddings</h1>
          <p className="page-subtitle">
            Organize wedding contributions and gifts with General Groups
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Use GroupFund for Weddings?</h2>
              <p>
                Planning a wedding involves coordinating contributions from friends and family. General Groups make this process simple and stress-free, allowing you to focus on your special day.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Weddings</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>💒 Event Deadline Tracking</h3>
                  <p>Set deadlines for wedding contributions to ensure timely payments.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 Contribution Tracking</h3>
                  <p>See who has contributed and who hasn't in real-time.</p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Admin Account Details</h3>
                  <p>Share payment information securely with friends and family.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Payment Confirmation</h3>
                  <p>Confirm when payments are received, maintaining transparency.</p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Your Wedding Contributions?</h2>
              <p>Start managing wedding contributions effortlessly with GroupFund.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/resources/creating-general-groups-for-events" className="btn btn-secondary btn-large">Creating General Groups →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

