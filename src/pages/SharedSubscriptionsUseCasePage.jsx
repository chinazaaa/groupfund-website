import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SharedSubscriptionsUseCasePage() {
  return (
    <>
      <SEO
        title="GroupFund for Shared Subscriptions - Manage Netflix, Spotify & More"
        description="Manage shared subscriptions like Netflix, Spotify, Disney+, and more with Subscription Groups. Set monthly or annual payment schedules, track deadlines, and never miss a payment."
        keywords="shared subscriptions, Netflix subscription sharing, Spotify group subscription, subscription management app, shared streaming services, subscription groups"
        canonical="https://groupfund.app/use-cases/shared-subscriptions"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Shared Subscriptions</h1>
          <p className="page-subtitle">
            Manage shared subscriptions like Netflix, Spotify, Disney+, and more with Subscription Groups
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Subscription Groups?</h2>
              <p>
                Sharing subscriptions like Netflix, Spotify, Disney+, and other streaming services is common, but managing payments can be a hassle. Who's paying this month? When is the payment due? Did everyone contribute? Subscription Groups in GroupFund solve these problems.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Subscription Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>📺 Platform Management</h3>
                  <p>Specify which service you're sharing (Netflix, Spotify, etc.) and track it clearly.</p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Payment Frequency</h3>
                  <p>Set monthly or annual payment schedules based on your subscription plan.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Deadline Tracking</h3>
                  <p>Automatic reminders before subscription deadlines ensure no missed payments.</p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Admin Account Details</h3>
                  <p>Securely share payment account information so members know where to send payments.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Payment Confirmation</h3>
                  <p>Admin confirms when payments are received, maintaining transparency.</p>
                </div>
              </div>
            </div>

            <div className="use-case-section">
              <h2>Perfect For</h2>
              <ul className="scenarios-list">
                <li><strong>Netflix Sharing:</strong> Manage Netflix Premium or Standard plans</li>
                <li><strong>Spotify Family:</strong> Organize Spotify Family subscription payments</li>
                <li><strong>Disney+:</strong> Share Disney+ subscriptions with friends or family</li>
                <li><strong>Any Streaming Service:</strong> Works for any subscription service</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Manage Your Shared Subscriptions?</h2>
              <p>Start organizing your subscription payments effortlessly with GroupFund.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/resources/setting-up-subscription-groups" className="btn btn-secondary btn-large">Setting Up Subscription Groups →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

