import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function GeneralGroupsPage() {
  return (
    <>
      <SEO
        title="General Groups - Flexible Groups for Events & Any Purpose | GroupFund"
        description="Learn about General Groups in GroupFund. Flexible groups for weddings, baby showers, graduations, and any purpose. Set optional deadlines and organize contributions for any event."
        keywords="general groups, event contributions, wedding contributions, baby shower contributions, graduation contributions, flexible group contributions"
        canonical="https://www.groupfund.app/group-types/general-groups"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">General Groups</h1>
          <p className="page-subtitle">
            Flexible groups for weddings, events, and any purpose
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                General Groups are flexible group types designed for any purpose. Whether you're organizing contributions for weddings, baby showers, graduations, or any special event, General Groups provide the flexibility you need with optional deadline tracking and admin account details.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Key Features</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>🎯 Flexible Purpose</h3>
                  <p>Use General Groups for any purpose - weddings, baby showers, graduations, anniversaries, or any event that requires group contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Optional Deadline</h3>
                  <p>Set a deadline date when contributions are needed, or leave it open for flexible timing. Perfect for both time-sensitive and ongoing events.</p>
                </div>
                <div className="feature-item">
                  <h3>🔔 Automatic Reminders</h3>
                  <p>If you set a deadline, automatic reminders are sent before the deadline to ensure timely contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Admin Account Details</h3>
                  <p>Securely share payment account information so members know where to send contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Admin Confirmation</h3>
                  <p>Group admin confirms when payments are received, maintaining transparency and accuracy.</p>
                </div>
                <div className="feature-item">
                  <h3>📊 Contribution Tracking</h3>
                  <p>Track all contributions in real-time. See who has contributed and who still needs to.</p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Perfect For</h2>
              <ul className="use-cases-list">
                <li><strong>Weddings:</strong> Organize wedding contributions and gifts</li>
                <li><strong>Baby Showers:</strong> Coordinate group gifts for expecting parents</li>
                <li><strong>Graduations:</strong> Collect contributions for graduation celebrations</li>
                <li><strong>Anniversaries:</strong> Organize group gifts for milestone anniversaries</li>
                <li><strong>Any Event:</strong> Use for any occasion that requires group contributions</li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How It Works</h2>
              <ol className="how-it-works-list">
                <li>Create a General Group and set a descriptive name</li>
                <li>Optionally set a deadline date for contributions</li>
                <li>Add admin account details for receiving payments</li>
                <li>Invite members to join the group</li>
                <li>If a deadline is set, automatic reminders are sent before it</li>
                <li>Members mark payments as "Paid" after transferring</li>
                <li>Admin confirms receipt of payments</li>
                <li>Everyone can see contribution statuses in real-time</li>
              </ol>
            </div>

            <div className="cta-box">
              <h2>Ready to Create a General Group?</h2>
              <p>Start organizing contributions for your event effortlessly with GroupFund.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/resources/creating-general-groups-for-events" className="btn btn-secondary btn-large">Creating General Groups →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Resources</h3>
              <div className="related-links-grid">
                <Link to="/group-types">View All Group Types →</Link>
                <Link to="/resources/managing-event-contributions">Managing Event Contributions →</Link>
                <Link to="/resources/choosing-between-group-types">Choosing Between Group Types →</Link>
                <Link to="/use-cases/weddings">For Weddings →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

