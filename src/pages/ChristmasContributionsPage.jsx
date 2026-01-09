import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ChristmasContributionsPage() {
  return (
    <>
      <SEO
        title="Christmas Group Contributions - Secret Santa & Holiday Gift Funds | GroupFund"
        description="Organize group contributions for Christmas celebrations. Manage Secret Santa funds, Christmas gift contributions, holiday party expenses, and Christmas dinner funds with GroupFund."
        keywords="christmas group contributions, christmas gift funds, secret santa contributions, christmas party funds, christmas group payments, holiday gift contributions"
        canonical="https://www.groupfund.app/seasonal/christmas-contributions"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Christmas Contributions</h1>
          <p className="page-subtitle">
            Organize group contributions for Christmas celebrations. Manage Secret Santa funds, Christmas gift contributions, holiday party expenses, and Christmas dinner funds with ease.
          </p>
        </div>
      </section>

      <section className="industry-page">
        <div className="container">
          <div className="industry-content">
            <div className="industry-section">
              <h2>Why Christmas Contributions Need Organization</h2>
              <p>
                Christmas brings unique opportunities and challenges for group contributions. Organizing contributions for Christmas activities can be complex due to:
              </p>
              <ul className="feature-list">
                <li>Multiple celebration types (Secret Santa, office parties, family gatherings)</li>
                <li>Gift coordination and budget management</li>
                <li>Party planning and venue bookings requiring advance payments</li>
                <li>Family Christmas dinner contributions</li>
                <li>Office Christmas celebrations and decoration funds</li>
                <li>Tight deadlines as December 25th approaches</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Christmas Contribution Use Cases</h2>
              
              <div className="use-case-card">
                <h3>🎁 Secret Santa Contributions</h3>
                <p>
                  Organize Secret Santa gift exchanges with contribution tracking. Set gift budgets, track who has contributed, and ensure everyone participates fairly.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with gift exchange date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🎄 Christmas Party Funds</h3>
                <p>
                  Coordinate contributions for Christmas parties, office celebrations, or friend group gatherings. Manage party expenses, decorations, food, and drinks.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with party date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🍽️ Christmas Dinner Contributions</h3>
                <p>
                  Organize contributions for Christmas dinner expenses. Split costs for meals, ingredients, and holiday feast preparations among family or friends.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with December 25th as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🎅 Family Gift Funds</h3>
                <p>
                  Coordinate family Christmas gift contributions. Pool money for larger gifts, organize group gift purchases, and track contributions from extended family members.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with gift exchange date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🏢 Office Christmas Celebrations</h3>
                <p>
                  Coordinate workplace Christmas contributions for office decorations, team treats, or Christmas party expenses. Ensure fair contributions from all participating colleagues.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with office celebration date as deadline</p>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Christmas Contributions?</h2>
              <p>Start managing your Christmas celebration group today. Set up payment tracking, send reminders, and coordinate contributions effectively.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Christmas Group</Link>
                <Link to="/seasonal" className="btn btn-secondary btn-large">View All Seasonal Events →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

