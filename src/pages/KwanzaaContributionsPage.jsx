import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function KwanzaaContributionsPage() {
  return (
    <>
      <SEO
        title="Kwanzaa Group Contributions - Celebration Funds | GroupFund"
        description="Organize group contributions for Kwanzaa celebrations. Manage Kwanzaa gift funds, community celebration contributions, and traditional celebration expenses with GroupFund. Perfect for families, communities, and organizations celebrating Kwanzaa."
        keywords="kwanzaa group contributions, kwanzaa gift funds, kwanzaa celebration contributions, kwanzaa community funds, kwanzaa group payments, african american holiday contributions"
        canonical="https://www.groupfund.app/seasonal/kwanzaa-contributions"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Kwanzaa Contributions</h1>
          <p className="page-subtitle">
            Organize group contributions for Kwanzaa celebrations. Manage Kwanzaa gift funds, community celebration contributions, and traditional celebration expenses with ease.
          </p>
        </div>
      </section>

      <section className="industry-page">
        <div className="container">
          <div className="industry-content">
            <div className="industry-section">
              <h2>Why Kwanzaa Contributions Need Organization</h2>
              <p>
                Kwanzaa brings opportunities for group celebrations, community events, and traditional activities. Organizing contributions for Kwanzaa activities can be complex due to:
              </p>
              <ul className="feature-list">
                <li>Seven days of celebration requiring ongoing coordination</li>
                <li>Community celebration and event planning</li>
                <li>Traditional food and celebration expenses</li>
                <li>Gift exchange coordination and budget management</li>
                <li>Cultural event contributions</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Kwanzaa Contribution Use Cases</h2>
              
              <div className="use-case-card">
                <h3>🕯️ Kwanzaa Celebration Funds</h3>
                <p>
                  Organize contributions for Kwanzaa celebrations and community events. Coordinate celebration expenses, decorations, and traditional activities across the seven days.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with Kwanzaa start date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🎁 Kwanzaa Gift Contributions</h3>
                <p>
                  Coordinate Kwanzaa gift exchanges and contributions. Set gift budgets, track who has contributed, and ensure everyone participates fairly.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with gift exchange dates as deadlines</p>
              </div>

              <div className="use-case-card">
                <h3>🌍 Community Kwanzaa Events</h3>
                <p>
                  Organize contributions for community Kwanzaa celebrations, cultural events, or neighborhood parties. Track contributions from community members.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with event dates as deadlines</p>
              </div>

              <div className="use-case-card">
                <h3>🍽️ Traditional Food Contributions</h3>
                <p>
                  Organize contributions for traditional Kwanzaa foods and celebration meals. Split costs for ingredients and preparation among family or community members.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with celebration dates as deadlines</p>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Kwanzaa Contributions?</h2>
              <p>Start managing your Kwanzaa celebration group today. Set up payment tracking, send reminders, and coordinate contributions effectively.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Kwanzaa Group</Link>
                <Link to="/seasonal" className="btn btn-secondary btn-large">View All Seasonal Events →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

