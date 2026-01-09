import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function HanukkahContributionsPage() {
  return (
    <>
      <SEO
        title="Hanukkah Group Contributions - Festival of Lights Funds | GroupFund"
        description="Organize group contributions for Hanukkah celebrations. Manage Festival of Lights funds, Hanukkah gift contributions, and traditional celebration expenses with GroupFund. Perfect for Jewish families, communities, and organizations."
        keywords="hanukkah group contributions, hanukkah gift funds, festival of lights contributions, hanukkah celebration funds, hanukkah group payments, jewish holiday contributions"
        canonical="https://www.groupfund.app/seasonal/hanukkah-contributions"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Hanukkah Contributions</h1>
          <p className="page-subtitle">
            Organize group contributions for Hanukkah celebrations. Manage Festival of Lights funds, Hanukkah gift contributions, and traditional celebration expenses with ease.
          </p>
        </div>
      </section>

      <section className="industry-page">
        <div className="container">
          <div className="industry-content">
            <div className="industry-section">
              <h2>Why Hanukkah Contributions Need Organization</h2>
              <p>
                Hanukkah brings opportunities for group celebrations, gift exchanges, and traditional events. Organizing contributions for Hanukkah activities can be complex due to:
              </p>
              <ul className="feature-list">
                <li>Eight nights of celebration requiring ongoing coordination</li>
                <li>Gift exchange coordination and budget management</li>
                <li>Traditional food and celebration expenses</li>
                <li>Community Hanukkah event contributions</li>
                <li>Synagogue celebration funds</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Hanukkah Contribution Use Cases</h2>
              
              <div className="use-case-card">
                <h3>🕎 Festival of Lights Funds</h3>
                <p>
                  Organize contributions for Hanukkah celebrations and Festival of Lights events. Coordinate celebration expenses, decorations, and traditional activities.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with Hanukkah start date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🎁 Hanukkah Gift Contributions</h3>
                <p>
                  Coordinate Hanukkah gift exchanges and contributions. Set gift budgets, track who has contributed, and ensure everyone participates fairly across the eight nights.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with gift exchange dates as deadlines</p>
              </div>

              <div className="use-case-card">
                <h3>🍩 Traditional Food Contributions</h3>
                <p>
                  Organize contributions for traditional Hanukkah foods like latkes, sufganiyot, and other celebration foods. Split costs for ingredients and preparation.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with celebration dates as deadlines</p>
              </div>

              <div className="use-case-card">
                <h3>🕯️ Community Hanukkah Events</h3>
                <p>
                  Organize contributions for community Hanukkah celebrations, synagogue events, or neighborhood parties. Track contributions from community members.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with event dates as deadlines</p>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Hanukkah Contributions?</h2>
              <p>Start managing your Hanukkah celebration group today. Set up payment tracking, send reminders, and coordinate contributions effectively.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Hanukkah Group</Link>
                <Link to="/seasonal" className="btn btn-secondary btn-large">View All Seasonal Events →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

