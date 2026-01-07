import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BabyShowersUseCasePage() {
  return (
    <>
      <SEO
        title="GroupFund for Baby Showers - Organize Baby Shower Contributions"
        description="Plan baby shower contributions with General Groups. Organize group gifts, track contributions, and ensure the celebration is stress-free for everyone involved."
        keywords="baby shower contributions, baby shower planning, baby shower gifts, group baby shower contributions, baby shower fund"
        canonical="https://www.groupfund.app/use-cases/baby-showers"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Baby Showers</h1>
          <p className="page-subtitle">
            Plan baby shower contributions with General Groups
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Use GroupFund for Baby Showers?</h2>
              <p>
                Planning a baby shower involves coordinating contributions from friends and family. General Groups make this process simple and stress-free.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Baby Showers</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>👶 Event Planning</h3>
                  <p>Set deadlines for baby shower contributions to ensure timely payments.</p>
                </div>
                <div className="feature-item">
                  <h3>🎁 Group Gift Coordination</h3>
                  <p>Organize group gifts and track individual contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Transparent Tracking</h3>
                  <p>Everyone can see who has contributed, maintaining transparency.</p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Plan Your Baby Shower?</h2>
              <p>Start organizing baby shower contributions effortlessly with GroupFund.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/resources/creating-general-groups-for-events" className="btn btn-secondary btn-large">Creating General Groups →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

