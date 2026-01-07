import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function GraduationsUseCasePage() {
  return (
    <>
      <SEO
        title="GroupFund for Graduations - Organize Graduation Contributions & Gifts"
        description="Organize graduation contributions and gifts with General Groups. Perfect for class groups, families, and friends celebrating graduation milestones together."
        keywords="graduation contributions, graduation gifts, graduation fund, class graduation contributions, graduation planning"
        canonical="https://www.groupfund.app/use-cases/graduations"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Graduations</h1>
          <p className="page-subtitle">
            Organize graduation contributions and gifts with General Groups
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Use GroupFund for Graduations?</h2>
              <p>
                Celebrating graduation milestones often involves organizing contributions from class groups, families, and friends. General Groups make this process simple and organized.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Graduations</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🎓 Class Group Management</h3>
                  <p>Perfect for organizing contributions from class groups.</p>
                </div>
                <div className="feature-item">
                  <h3>🎁 Gift Coordination</h3>
                  <p>Track group gift contributions and individual payments.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Transparent Tracking</h3>
                  <p>Everyone can see who has contributed, maintaining transparency.</p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Graduation Contributions?</h2>
              <p>Start managing graduation contributions effortlessly with GroupFund.</p>
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

