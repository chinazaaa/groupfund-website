import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function FuneralMemorialUseCasePage() {
  return (
    <>
      <SEO
        title="Funeral & Memorial Contributions - Organize Funeral Expenses with GroupFund"
        description="Organize contributions for funeral expenses, memorial services, and supporting families during difficult times with GroupFund. Track contributions respectfully and transparently."
        keywords="funeral contributions, memorial fund, funeral expense contributions, bereavement fund, memorial service contributions, funeral expense fund"
        canonical="https://www.groupfund.app/use-cases/funeral-memorial"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Funeral & Memorial Contributions</h1>
          <p className="page-subtitle">
            Organize contributions for funeral expenses, memorial services, and supporting families during difficult times. Track contributions respectfully and transparently.
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Supporting Families During Difficult Times</h2>
              <p>
                Organizing contributions for funeral expenses and memorial services requires sensitivity and organization. GroupFund helps you coordinate support respectfully, track contributions transparently, and provide assistance to families during their most difficult times.
              </p>
              <p>
                Whether you're organizing funeral expense contributions, memorial service funds, or supporting a grieving family, GroupFund makes it easy to coordinate support while maintaining respect and transparency.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Funeral & Memorial Contributions</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🕯️ Respectful Organization</h3>
                  <p>Organize contributions respectfully and sensitively. Set up groups quickly when time is of the essence.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 Funeral Expense Tracking</h3>
                  <p>Track contributions for funeral expenses, burial costs, and memorial services. See who has contributed.</p>
                </div>
                <div className="feature-item">
                  <h3>💝 Family Support Funds</h3>
                  <p>Organize contributions to support families during difficult times. Help with immediate expenses and ongoing support.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Transparent Tracking</h3>
                  <p>Maintain transparency in contributions while respecting privacy. See who has contributed without awkward conversations.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Easy Sharing</h3>
                  <p>Share the group invite code easily with family, friends, and community members. Make it simple for people to contribute.</p>
                </div>
                <div className="feature-item">
                  <h3>🎯 Goal Tracking</h3>
                  <p>Set fundraising goals for funeral expenses and track progress. See how close you are to your target amount.</p>
                </div>
              </div>
            </div>

            <div className="use-case-section">
              <h2>Common Funeral & Memorial Scenarios</h2>
              <ul className="scenarios-list">
                <li><strong>Funeral Expense Contributions:</strong> Organize contributions for funeral costs, burial expenses, and memorial services.</li>
                <li><strong>Family Support Funds:</strong> Coordinate support for families during bereavement with immediate and ongoing expenses.</li>
                <li><strong>Memorial Service Contributions:</strong> Organize contributions for memorial services, celebrations of life, and remembrance events.</li>
                <li><strong>Community Support:</strong> Coordinate contributions from community members, colleagues, and friends.</li>
                <li><strong>Educational Funds:</strong> Organize contributions for children's education or other long-term support needs.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Funeral & Memorial Contributions?</h2>
              <p>Set up a respectful fundraising group to support families during difficult times.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Memorial Fund</Link>
                <Link to="/use-cases" className="btn btn-secondary btn-large">View All Use Cases</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

