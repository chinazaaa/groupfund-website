import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SportsTeamsUseCasePage() {
  return (
    <>
      <SEO
        title="GroupFund for Sports Teams - Manage Team Contributions"
        description="Manage team contributions for equipment, subscriptions, and events. Perfect for sports clubs, teams, and athletic organizations organizing group payments."
        keywords="sports team contributions, team fund, sports club contributions, athletic group payments, sports team management"
        canonical="https://www.groupfund.app/use-cases/sports-teams"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Sports Teams</h1>
          <p className="page-subtitle">
            Manage team contributions for equipment, subscriptions, and events
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Use GroupFund for Sports Teams?</h2>
              <p>
                Sports teams often need to organize contributions for equipment, shared subscriptions, and team events. GroupFund makes managing these contributions simple and transparent.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Sports Teams</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>⚽ Equipment Contributions</h3>
                  <p>Organize contributions for team equipment using General Groups.</p>
                </div>
                <div className="feature-item">
                  <h3>📺 Subscription Management</h3>
                  <p>Manage shared subscriptions (sports streaming services) with Subscription Groups.</p>
                </div>
                <div className="feature-item">
                  <h3>🎉 Event Planning</h3>
                  <p>Organize contributions for team events and celebrations.</p>
                </div>
                <div className="feature-item">
                  <h3>💬 Team Chat</h3>
                  <p>Coordinate team contributions with optional per-group chat. Mention team members with @username, share account details, and confirm payments - all in one place. Perfect for sports teams.</p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Manage Your Team Contributions?</h2>
              <p>Start organizing team contributions effortlessly with GroupFund.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/resources" className="btn btn-secondary btn-large">View Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

