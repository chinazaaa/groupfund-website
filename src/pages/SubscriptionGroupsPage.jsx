import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SubscriptionGroupsPage() {
  return (
    <>
      <SEO
        title="Subscription Groups - Manage Shared Subscriptions | GroupFund"
        description="Learn about Subscription Groups in GroupFund. Manage shared subscriptions like Netflix, Spotify, Disney+ with monthly or annual payment schedules, automatic deadline tracking, and reliable payment management."
        keywords="subscription groups, shared subscriptions, Netflix subscription, Spotify group subscription, subscription management, recurring payments"
        canonical="https://www.groupfund.app/group-types/subscription-groups"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Subscription Groups</h1>
          <p className="page-subtitle">
            Manage shared subscriptions with automatic deadline tracking
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Subscription Groups are designed specifically for managing shared subscriptions like Netflix, Spotify, Disney+, and other streaming services. With monthly or annual payment schedules, deadline tracking, and admin account details, Subscription Groups make sharing subscriptions simple and organized.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Key Features</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>📺 Platform Tracking</h3>
                  <p>Specify which service you're sharing (Netflix, Spotify, etc.) and track it clearly in your group.</p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Payment Frequency</h3>
                  <p>Set monthly or annual payment schedules based on your subscription plan. Choose what works best for your group.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Deadline Tracking</h3>
                  <p>Automatic reminders before subscription deadlines ensure no missed payments. Set deadline day (and month for annual subscriptions).</p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Admin Account Details</h3>
                  <p>Securely share payment account information so members know where to send subscription payments.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Admin Confirmation</h3>
                  <p>Group admin confirms when payments are received, maintaining transparency and accuracy.</p>
                </div>
                <div className="feature-item">
                  <h3>📊 Payment History</h3>
                  <p>Track all subscription payments over time. See payment patterns and maintain complete records.</p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Perfect For</h2>
              <ul className="use-cases-list">
                <li><strong>Netflix Sharing:</strong> Manage Netflix Premium or Standard plans</li>
                <li><strong>Spotify Family:</strong> Organize Spotify Family subscription payments</li>
                <li><strong>Disney+:</strong> Share Disney+ subscriptions with friends or family</li>
                <li><strong>Any Streaming Service:</strong> Works for any subscription service</li>
                <li><strong>Software Subscriptions:</strong> Share Adobe Creative Cloud, Microsoft 365, and more</li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How It Works</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and specify the platform</li>
                <li>Set payment frequency (monthly or annual) and deadline</li>
                <li>Add admin account details for receiving payments</li>
                <li>Add instructions in group notes/description for sharing login credentials (e.g., "Email me at abc@example.com for login details")</li>
                <li>Invite members to join the group using invite codes</li>
                <li>Automatic reminders are sent before deadlines</li>
                <li>Members mark payments as "Paid" after transferring</li>
                <li>Admin confirms receipt of payments</li>
                <li>Members can access subscription credentials via group description/notes after joining</li>
                <li>Everyone can see payment statuses in real-time</li>
              </ol>
            </div>


            <div className="cta-box">
              <h2>Ready to Create a Subscription Group?</h2>
              <p>Start managing your shared subscriptions effortlessly with GroupFund.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/resources/setting-up-subscription-groups" className="btn btn-secondary btn-large">Setting Up Subscription Groups →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Resources</h3>
              <div className="related-links-grid">
                <Link to="/group-types">View All Group Types →</Link>
                <Link to="/resources/subscription-group-best-practices">Subscription Best Practices →</Link>
                <Link to="/resources/subscription-deadline-management">Deadline Management →</Link>
                <Link to="/use-cases/shared-subscriptions">For Shared Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

