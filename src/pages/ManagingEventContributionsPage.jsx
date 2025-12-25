import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ManagingEventContributionsPage() {
  return (
    <>
      <SEO
        title="Managing Event Contributions - Complete Guide"
        description="Complete guide to organizing contributions for events using General Groups. Tips for weddings, baby showers, graduations, and special occasions."
        keywords="event contributions, wedding contributions, baby shower contributions, graduation contributions, managing event payments, group event planning"
        canonical="https://www.groupfund.app/resources/managing-event-contributions"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Managing Event Contributions</h1>
          <p className="page-subtitle">
            Complete guide to organizing contributions for events using General Groups
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Best Practices</span>
              <span className="resource-read-time">6 min read</span>
            </div>

            <div className="resource-section">
              <h2>Introduction</h2>
              <p>
                Planning a wedding, baby shower, graduation, or any special event often involves organizing contributions from friends and family. General Groups in GroupFund provide the perfect solution for managing these contributions transparently and efficiently.
              </p>
            </div>

            <div className="resource-section">
              <h2>Setting Up Your Event Group</h2>
              <p>When creating a General Group for your event:</p>
              <ul className="resource-list">
                <li><strong>Clear Group Name:</strong> Use descriptive names (e.g., "Sarah & John's Wedding Fund")</li>
                <li><strong>Set Realistic Deadlines:</strong> Give people enough time to contribute</li>
                <li><strong>Fair Contribution Amounts:</strong> Consider everyone's financial situation</li>
                <li><strong>Add Admin Account Details:</strong> Share payment information securely</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Managing Contributions</h2>
              <p>Once your event group is set up:</p>
              <ul className="resource-list">
                <li><strong>Track Regularly:</strong> Monitor payment status frequently</li>
                <li><strong>Send Reminders:</strong> Use automatic reminders before deadlines</li>
                <li><strong>Be Transparent:</strong> Let everyone see contribution status</li>
                <li><strong>Confirm Promptly:</strong> Confirm payments when received</li>
                <li><strong>Thank Contributors:</strong> Acknowledge those who contribute</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Event-Specific Tips</h2>
              
              <h3>For Weddings</h3>
              <ul className="resource-list">
                <li>Set deadlines well before the wedding date</li>
                <li>Communicate clearly about what contributions are for</li>
                <li>Consider multiple contribution options</li>
                <li>Thank contributors personally</li>
              </ul>

              <h3>For Baby Showers</h3>
              <ul className="resource-list">
                <li>Coordinate with the expecting parents</li>
                <li>Set deadlines before the baby shower date</li>
                <li>Consider group gifts vs. individual contributions</li>
                <li>Keep the celebration stress-free</li>
              </ul>

              <h3>For Graduations</h3>
              <ul className="resource-list">
                <li>Set deadlines before graduation ceremonies</li>
                <li>Coordinate with class groups or families</li>
                <li>Consider gift options</li>
                <li>Celebrate the milestone together</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Best Practices</h2>
              <ul className="resource-list">
                <li><strong>Plan Ahead:</strong> Set up your group well in advance</li>
                <li><strong>Clear Communication:</strong> Explain what contributions are for</li>
                <li><strong>Transparency:</strong> Let everyone see who has contributed</li>
                <li><strong>Gratitude:</strong> Thank contributors for their participation</li>
                <li><strong>Flexibility:</strong> Be understanding of those who can't contribute</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Your Event Contributions?</h2>
              <p>Start managing event contributions effortlessly with GroupFund.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/resources/creating-general-groups-for-events" className="btn btn-secondary btn-large">Creating General Groups →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/creating-general-groups-for-events">Creating General Groups for Events →</Link>
                <Link to="/resources/choosing-between-group-types">Choosing Between Group Types →</Link>
                <Link to="/resources/admin-account-details-guide">Admin Account Details Guide →</Link>
                <Link to="/resources">View All Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

