import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function CreatingGeneralGroupsForEventsPage() {
  return (
    <>
      <SEO
        title="Creating General Groups for Events - Step-by-Step Guide"
        description="Step-by-step guide to creating General Groups for weddings, baby showers, graduations, and any event. Learn how to set deadlines and manage contributions effectively."
        keywords="general groups, event planning, wedding contributions, baby shower contributions, graduation contributions, group event management"
        canonical="https://www.groupfund.app/resources/creating-general-groups-for-events"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Creating General Groups for Events</h1>
          <p className="page-subtitle">
            Step-by-step guide to creating General Groups for weddings, baby showers, graduations, and any event
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Getting Started</span>
              <span className="resource-read-time">5 min read</span>
            </div>

            <div className="resource-section">
              <h2>What Are General Groups?</h2>
              <p>
                General Groups are flexible group types designed for any purpose. They're perfect for:
              </p>
              <ul className="resource-list">
                <li><strong>Weddings:</strong> Organize wedding contributions and gifts</li>
                <li><strong>Baby Showers:</strong> Coordinate group gifts for expecting parents</li>
                <li><strong>Graduations:</strong> Collect contributions for graduation celebrations</li>
                <li><strong>Anniversaries:</strong> Organize group gifts for milestone anniversaries</li>
                <li><strong>Any Event:</strong> Use for any occasion that requires group contributions</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step 1: Create Your General Group</h2>
              <p>When creating a new group in GroupFund:</p>
              <ol className="resource-list">
                <li>Select "General Group" as the group type</li>
                <li>Enter a descriptive group name (e.g., "Sarah & John's Wedding Fund")</li>
                <li>Choose your currency (NGN, USD, EUR, etc.)</li>
                <li>Set the contribution amount per person</li>
                <li>Set the maximum number of members</li>
              </ol>
            </div>

            <div className="resource-section">
              <h2>Step 2: Set Event Deadline (Optional)</h2>
              <p>
                For General Groups, you can optionally set a deadline:
              </p>
              <ul className="resource-list">
                <li><strong>Event Date:</strong> Set the date when contributions are needed</li>
                <li><strong>Deadline:</strong> Set a deadline before the event date to ensure timely contributions</li>
                <li><strong>No Deadline:</strong> You can also leave the deadline open if needed</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step 3: Add Admin Account Details</h2>
              <p>
                As the group admin, add your payment account details so members know where to send contributions:
              </p>
              <ul className="resource-list">
                <li>Bank account number</li>
                <li>Bank name</li>
                <li>Account holder name</li>
                <li>Any other relevant payment information</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step 4: Invite Members</h2>
              <p>
                Share your group invite code with friends and family. They can preview the group and request to join.
              </p>
            </div>

            <div className="resource-section">
              <h2>Managing Event Contributions</h2>
              <p>Once your General Group is set up:</p>
              <ul className="resource-list">
                <li><strong>Track Payments:</strong> See who has contributed and who hasn't</li>
                <li><strong>Automatic Reminders:</strong> GroupFund sends reminders before deadlines</li>
                <li><strong>Admin Confirmation:</strong> You confirm when payments are received</li>
                <li><strong>Transparency:</strong> All members can see contribution status</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Best Practices for Event Groups</h2>
              <ul className="resource-list">
                <li><strong>Set Realistic Deadlines:</strong> Give people enough time to contribute</li>
                <li><strong>Communicate Clearly:</strong> Explain what contributions are for</li>
                <li><strong>Be Transparent:</strong> Let everyone see who has contributed</li>
                <li><strong>Thank Contributors:</strong> Acknowledge those who contribute</li>
                <li><strong>Handle Gracefully:</strong> Be understanding of those who can't contribute</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Create Your Event Group?</h2>
              <p>Start organizing contributions for your event with GroupFund. Create your first General Group today.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/managing-event-contributions">Managing Event Contributions →</Link>
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

