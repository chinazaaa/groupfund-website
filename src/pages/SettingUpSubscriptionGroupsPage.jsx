import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SettingUpSubscriptionGroupsPage() {
  return (
    <>
      <SEO
        title="Setting Up Subscription Groups - Complete Guide"
        description="Complete guide to creating and managing Subscription Groups. Learn how to set up shared subscriptions, configure payment schedules, and manage admin account details."
        keywords="subscription group setup, shared subscription guide, how to create subscription group, Netflix subscription sharing, Spotify group subscription"
        canonical="https://www.groupfund.app/resources/setting-up-subscription-groups"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Setting Up Subscription Groups</h1>
          <p className="page-subtitle">
            Complete guide to creating and managing Subscription Groups for shared services
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Getting Started</span>
              <span className="resource-read-time">6 min read</span>
            </div>

            <div className="resource-section">
              <h2>What Are Subscription Groups?</h2>
              <p>
                Subscription Groups are designed specifically for managing shared subscriptions like Netflix, Spotify, Disney+, and other streaming services. They provide features tailored for recurring payments:
              </p>
              <ul className="resource-list">
                <li><strong>Payment Frequency:</strong> Set monthly or annual payment schedules</li>
                <li><strong>Platform Name:</strong> Specify which service you're sharing</li>
                <li><strong>Deadline Tracking:</strong> Automatic reminders based on subscription deadlines</li>
                <li><strong>Admin Account Details:</strong> Securely share payment account information</li>
                <li><strong>No Birthday Required:</strong> Perfect for groups that don't need birthday tracking</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step 1: Create Your Subscription Group</h2>
              <p>When creating a new group in GroupFund:</p>
              <ol className="resource-list">
                <li>Select "Subscription Group" as the group type</li>
                <li>Enter a descriptive group name (e.g., "Netflix Premium Family")</li>
                <li>Choose your currency (NGN, USD, EUR, etc.)</li>
                <li>Set the contribution amount per member</li>
                <li>Set the maximum number of members</li>
              </ol>
            </div>

            <div className="resource-section">
              <h2>Step 2: Configure Subscription Details</h2>
              <p>For Subscription Groups, you'll need to set:</p>
              <ul className="resource-list">
                <li><strong>Platform Name:</strong> Enter the service name (e.g., "Netflix Premium", "Spotify Family")</li>
                <li><strong>Payment Frequency:</strong> Choose monthly or annual</li>
                <li><strong>Deadline Day:</strong> Set the day of the month when payments are due</li>
                <li><strong>Deadline Month:</strong> For annual subscriptions, set the month</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step 3: Add Admin Account Details</h2>
              <p>
                As the group admin, you'll need to add your bank account details. This is required for:
              </p>
              <ul className="resource-list">
                <li>Receiving manual payments (members send money directly to your bank account)</li>
                <li>Withdrawing funds from your wallet (if members use auto-pay)</li>
              </ul>
              <p>Add your bank account details:</p>
              <ul className="resource-list">
                <li>Bank account number</li>
                <li>Bank name</li>
                <li>Account holder name</li>
                <li>Any other relevant payment information</li>
              </ul>
              <p>
                These details are stored securely and displayed to all group members when it's time to contribute (for manual payments).
              </p>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '6px' }}>
                <strong>Note:</strong> If your group uses USD, EUR, GBP, CAD, or AUD, members can use auto-pay (funds go to your wallet). If they use manual payments, funds go directly to your bank account.
              </p>
            </div>

            <div className="resource-section">
              <h2>Step 3.5: Share Subscription Login Credentials (Optional)</h2>
              <p>
                To help members access the shared subscription after they've contributed, you can add instructions in the group notes or description field:
              </p>
              <ul className="resource-list">
                <li><strong>Contact Information:</strong> Add instructions like "Email me at abc@example.com for login details"</li>
                <li><strong>Alternative Contact:</strong> You can also say "Contact me via WhatsApp for credentials" or similar</li>
                <li><strong>Visibility:</strong> The group description/notes are visible to all members after they've joined the group, making it easy for them to know how to get access</li>
                <li><strong>Security:</strong> This approach allows you to share credentials securely after verifying payment, rather than posting them publicly</li>
              </ul>
              <p>
                <strong>Example:</strong> In your group description, you could write: "After contributing, email me at netflix@example.com to receive the login credentials. Please include your name so I can verify your payment."
              </p>
            </div>

            <div className="resource-section">
              <h2>Step 4: Invite Members</h2>
              <p>
                Share your group invite code with people you want to join. Members can:
              </p>
              <ul className="resource-list">
                <li>Preview the group using the invite code</li>
                <li>See member reliability scores and group health metrics</li>
                <li>Request to join the group</li>
                <li>Get approved or rejected by the admin</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Managing Subscription Payments</h2>
              <p>Once your Subscription Group is set up:</p>
              <ul className="resource-list">
                <li><strong>Automatic Reminders:</strong> GroupFund sends reminders before each payment deadline</li>
                <li><strong>Payment Tracking:</strong> See who has paid and who hasn't in real-time</li>
                <li><strong>Admin Confirmation:</strong> You confirm when payments are received</li>
                <li><strong>Payment History:</strong> Track all subscription payments over time</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Best Practices</h2>
              <ul className="resource-list">
                <li><strong>Set Clear Deadlines:</strong> Choose deadlines that give everyone time to pay</li>
                <li><strong>Communicate Early:</strong> Remind members about upcoming payments</li>
                <li><strong>Keep Account Details Updated:</strong> Ensure admin account information is current</li>
                <li><strong>Track Consistently:</strong> Confirm payments promptly to maintain accuracy</li>
                <li><strong>Handle Late Payments:</strong> Have a plan for members who pay late</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Set Up Your Subscription Group?</h2>
              <p>Start managing your shared subscriptions effortlessly with GroupFund. Create your first Subscription Group today.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/subscription-group-best-practices">Subscription Group Best Practices →</Link>
                <Link to="/resources/subscription-deadline-management">Subscription Deadline Management →</Link>
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

