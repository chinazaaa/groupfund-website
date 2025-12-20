import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AlumniAssociationsUseCasePage() {
  return (
    <>
      <SEO
        title="GroupFund for Alumni Associations - Organize Alumni Contributions"
        description="Organize contributions for alumni events, reunions, and shared subscriptions. Perfect for alumni associations managing group payments and maintaining connections."
        keywords="alumni contributions, alumni association payments, reunion contributions, alumni group fund, alumni event planning"
        canonical="https://groupfund.app/use-cases/alumni-associations"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Alumni Associations</h1>
          <p className="page-subtitle">
            Organize contributions for alumni events, reunions, and shared subscriptions
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Use GroupFund for Alumni Associations?</h2>
              <p>
                Alumni associations often need to organize contributions for reunions, events, and shared subscriptions. GroupFund makes managing these contributions simple while maintaining connections.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Alumni Associations</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🎓 Reunion Planning</h3>
                  <p>Organize contributions for alumni reunions using General Groups.</p>
                </div>
                <div className="feature-item">
                  <h3>📺 Shared Subscriptions</h3>
                  <p>Manage shared subscriptions (alumni networks, services) with Subscription Groups.</p>
                </div>
                <div className="feature-item">
                  <h3>🌍 International Alumni</h3>
                  <p>Handle contributions from alumni across different countries with multi-currency support.</p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Alumni Contributions?</h2>
              <p>Start managing alumni contributions effortlessly with GroupFund.</p>
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

