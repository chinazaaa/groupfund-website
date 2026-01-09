import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function RamadanEidContributionsPage() {
  return (
    <>
      <SEO
        title="Ramadan & Eid Group Contributions - Iftar Funds & Celebration Contributions | GroupFund"
        description="Organize group contributions for Ramadan and Eid celebrations. Manage iftar dinner funds, Eid gift contributions, and religious celebration expenses with GroupFund. Perfect for Muslim families, communities, and organizations."
        keywords="ramadan group contributions, eid contributions, iftar dinner funds, eid gift funds, ramadan celebration contributions, eid al-fitr contributions, eid al-adha contributions"
        canonical="https://www.groupfund.app/seasonal/ramadan-eid-contributions"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Ramadan & Eid Contributions</h1>
          <p className="page-subtitle">
            Organize group contributions for Ramadan and Eid celebrations. Manage iftar dinner funds, Eid gift contributions, and religious celebration expenses with ease.
          </p>
        </div>
      </section>

      <section className="industry-page">
        <div className="container">
          <div className="industry-content">
            <div className="industry-section">
              <h2>Why Ramadan & Eid Contributions Need Organization</h2>
              <p>
                Ramadan and Eid bring opportunities for group celebrations, iftar dinners, and religious events. Organizing contributions for Ramadan and Eid activities can be complex due to:
              </p>
              <ul className="feature-list">
                <li>Daily iftar dinner coordination throughout Ramadan</li>
                <li>Eid gift exchange and contribution management</li>
                <li>Community iftar and celebration event expenses</li>
                <li>Religious celebration planning and coordination</li>
                <li>Charity and zakat contribution tracking</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Ramadan & Eid Contribution Use Cases</h2>
              
              <div className="use-case-card">
                <h3>🌙 Iftar Dinner Funds</h3>
                <p>
                  Organize contributions for iftar dinners throughout Ramadan. Coordinate daily iftar expenses, food costs, and shared meal contributions among family or community members.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with iftar dates as deadlines</p>
              </div>

              <div className="use-case-card">
                <h3>🎁 Eid Gift Contributions</h3>
                <p>
                  Coordinate Eid al-Fitr and Eid al-Adha gift exchanges and contributions. Set gift budgets, track who has contributed, and ensure everyone participates fairly.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with Eid dates as deadlines</p>
              </div>

              <div className="use-case-card">
                <h3>🤝 Community Iftar Events</h3>
                <p>
                  Organize contributions for community iftar events, mosque celebrations, or neighborhood parties. Track contributions from community members for shared event expenses.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with event dates as deadlines</p>
              </div>

              <div className="use-case-card">
                <h3>💝 Charity & Zakat Contributions</h3>
                <p>
                  Organize contributions for charity, zakat, and religious giving during Ramadan and Eid. Track contributions transparently and coordinate charitable giving.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with contribution deadlines</p>
              </div>

              <div className="use-case-card">
                <h3>🎉 Eid Celebration Funds</h3>
                <p>
                  Coordinate contributions for Eid celebration expenses, traditional foods, decorations, and family gathering costs. Split expenses fairly among participants.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with Eid dates as deadlines</p>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Ramadan & Eid Contributions?</h2>
              <p>Start managing your Ramadan and Eid celebration groups today. Set up payment tracking, send reminders, and coordinate contributions effectively.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Ramadan & Eid Group</Link>
                <Link to="/seasonal" className="btn btn-secondary btn-large">View All Seasonal Events →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

