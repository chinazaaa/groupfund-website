import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function MemorialDayContributionsPage() {
  return (
    <>
      <SEO
        title="Memorial Day Group Contributions - BBQ Funds & Remembrance Events | GroupFund"
        description="Organize group contributions for Memorial Day celebrations. Manage BBQ funds, family gathering contributions, and remembrance events with GroupFund. Perfect for families, communities, and workplaces."
        keywords="memorial day group contributions, memorial day party funds, memorial day group payments, memorial day bbq contributions, memorial day event payments"
        canonical="https://www.groupfund.app/seasonal/memorial-day-contributions"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Memorial Day Contributions</h1>
          <p className="page-subtitle">
            Organize group contributions for Memorial Day celebrations. Manage BBQ funds, family gathering contributions, and remembrance events with ease.
          </p>
        </div>
      </section>

      <section className="industry-page">
        <div className="container">
          <div className="industry-content">
            <div className="industry-section">
              <h2>Why Memorial Day Contributions Need Organization</h2>
              <p>
                Memorial Day brings opportunities for group celebrations, BBQs, and remembrance events. Organizing contributions for Memorial Day activities can be complex due to:
              </p>
              <ul className="feature-list">
                <li>BBQ and outdoor party planning requiring advance coordination</li>
                <li>Family gathering expenses and shared meal costs</li>
                <li>Community remembrance event contributions</li>
                <li>Weekend celebration planning and activity coordination</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Memorial Day Contribution Use Cases</h2>
              
              <div className="use-case-card">
                <h3>🍖 Memorial Day BBQ Funds</h3>
                <p>
                  Organize contributions for Memorial Day BBQs and outdoor parties. Coordinate food, drinks, and party supplies expenses among family or friends.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with Memorial Day as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>👨‍👩‍👧‍👦 Family Gathering Contributions</h3>
                <p>
                  Coordinate contributions for Memorial Day family gatherings. Split costs for meals, activities, and shared expenses among family members.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with gathering date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🇺🇸 Community Remembrance Events</h3>
                <p>
                  Organize contributions for community Memorial Day remembrance events, parades, or ceremonies. Track contributions from community members for shared event expenses.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with event date as deadline</p>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Memorial Day Contributions?</h2>
              <p>Start managing your Memorial Day celebration group today. Set up payment tracking, send reminders, and coordinate contributions effectively.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Memorial Day Group</Link>
                <Link to="/seasonal" className="btn btn-secondary btn-large">View All Seasonal Events →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

