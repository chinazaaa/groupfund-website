import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function StPatricksDayContributionsPage() {
  return (
    <>
      <SEO
        title="St. Patrick's Day Group Contributions - Party Funds & Celebration Contributions | GroupFund"
        description="Organize group contributions for St. Patrick's Day celebrations. Manage party funds, parade contributions, and Irish-themed events with GroupFund. Perfect for friend groups, office celebrations, and community events."
        keywords="st patricks day group contributions, st patrick's day party funds, st patricks day group payments, irish celebration contributions, st patricks day event payments"
        canonical="https://www.groupfund.app/seasonal/st-patricks-day-contributions"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">St. Patrick's Day Contributions</h1>
          <p className="page-subtitle">
            Organize group contributions for St. Patrick's Day celebrations. Manage party funds, parade contributions, and Irish-themed events with ease.
          </p>
        </div>
      </section>

      <section className="industry-page">
        <div className="container">
          <div className="industry-content">
            <div className="industry-section">
              <h2>Why St. Patrick's Day Contributions Need Organization</h2>
              <p>
                St. Patrick's Day brings opportunities for group celebrations, parties, and Irish-themed events. Organizing contributions for St. Patrick's Day activities can be complex due to:
              </p>
              <ul className="feature-list">
                <li>Multiple celebration types (parades, parties, pub crawls, office celebrations)</li>
                <li>Party planning and venue bookings requiring advance payments</li>
                <li>Group activity coordination and shared expenses</li>
                <li>Office St. Patrick's Day celebrations and decoration funds</li>
                <li>Last-minute planning as March 17th approaches</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>St. Patrick's Day Contribution Use Cases</h2>
              
              <div className="use-case-card">
                <h3>☘️ St. Patrick's Day Party Funds</h3>
                <p>
                  Organize contributions for St. Patrick's Day parties, pub crawls, or celebration events. Coordinate party expenses, decorations, food, drinks, and activities.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with March 17th as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🎪 Parade Celebration Contributions</h3>
                <p>
                  Coordinate contributions for St. Patrick's Day parade celebrations, viewing parties, or community events. Pool money for food, drinks, and parade-related expenses.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with parade date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🍺 Pub Crawl Contributions</h3>
                <p>
                  Organize contributions for St. Patrick's Day pub crawls or bar-hopping activities. Manage shared expenses for drinks, transportation, and group activities.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with event date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🏢 Office St. Patrick's Day Celebrations</h3>
                <p>
                  Coordinate workplace St. Patrick's Day contributions for office decorations, team treats, or celebration expenses. Ensure fair contributions from all participating colleagues.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with office celebration date as deadline</p>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize St. Patrick's Day Contributions?</h2>
              <p>Start managing your St. Patrick's Day celebration group today. Set up payment tracking, send reminders, and coordinate contributions effectively.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your St. Patrick's Day Group</Link>
                <Link to="/seasonal" className="btn btn-secondary btn-large">View All Seasonal Events →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

