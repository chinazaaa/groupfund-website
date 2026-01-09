import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ChineseNewYearContributionsPage() {
  return (
    <>
      <SEO
        title="Chinese New Year Group Contributions - Lunar New Year Funds | GroupFund"
        description="Organize group contributions for Chinese New Year and Lunar New Year celebrations. Manage red envelope funds, celebration contributions, and traditional New Year expenses with GroupFund. Perfect for families, communities, and organizations."
        keywords="chinese new year group contributions, lunar new year contributions, chinese new year gift funds, red envelope contributions, chinese new year celebration funds, lunar new year group payments"
        canonical="https://www.groupfund.app/seasonal/chinese-new-year-contributions"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Chinese New Year Contributions</h1>
          <p className="page-subtitle">
            Organize group contributions for Chinese New Year and Lunar New Year celebrations. Manage red envelope funds, celebration contributions, and traditional New Year expenses with ease.
          </p>
        </div>
      </section>

      <section className="industry-page">
        <div className="container">
          <div className="industry-content">
            <div className="industry-section">
              <h2>Why Chinese New Year Contributions Need Organization</h2>
              <p>
                Chinese New Year and Lunar New Year bring opportunities for group celebrations, red envelope exchanges, and traditional events. Organizing contributions for New Year activities can be complex due to:
              </p>
              <ul className="feature-list">
                <li>Red envelope (hongbao) coordination and budget management</li>
                <li>Family reunion dinner contributions</li>
                <li>Traditional celebration expenses and decorations</li>
                <li>Community New Year event contributions</li>
                <li>Gift exchange coordination</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Chinese New Year Contribution Use Cases</h2>
              
              <div className="use-case-card">
                <h3>🧧 Red Envelope Funds</h3>
                <p>
                  Organize contributions for red envelope (hongbao) exchanges. Coordinate red envelope funds, set contribution amounts, and track who has contributed for traditional gift giving.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with Chinese New Year date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🍽️ Reunion Dinner Contributions</h3>
                <p>
                  Coordinate contributions for Chinese New Year reunion dinners. Split costs for traditional meals, ingredients, and celebration expenses among family members.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with reunion dinner date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🎊 New Year Celebration Funds</h3>
                <p>
                  Organize contributions for Chinese New Year celebrations, community events, or neighborhood parties. Track contributions from community members for shared celebration expenses.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with celebration dates as deadlines</p>
              </div>

              <div className="use-case-card">
                <h3>🎁 Gift Exchange Contributions</h3>
                <p>
                  Coordinate Chinese New Year gift exchanges and contributions. Set gift budgets, track who has contributed, and ensure everyone participates fairly.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with gift exchange dates as deadlines</p>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Chinese New Year Contributions?</h2>
              <p>Start managing your Chinese New Year celebration group today. Set up payment tracking, send reminders, and coordinate contributions effectively.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Chinese New Year Group</Link>
                <Link to="/seasonal" className="btn btn-secondary btn-large">View All Seasonal Events →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

