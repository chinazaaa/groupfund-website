import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AdminAccountDetailsGuidePage() {
  return (
    <>
      <SEO
        title="Admin Account Details Guide - Sharing Payment Information Securely"
        description="Complete guide to managing admin account details for Subscription and General Groups. Learn how to securely share payment information with group members."
        keywords="admin account details, payment information, bank account details, secure payment sharing, subscription admin, general group admin"
        canonical="https://www.groupfund.app/resources/admin-account-details-guide"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Admin Account Details Guide</h1>
          <p className="page-subtitle">
            Complete guide to managing admin account details for Subscription and General Groups
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Best Practices</span>
              <span className="resource-read-time">4 min read</span>
            </div>

            <div className="resource-section">
              <h2>What Are Admin Account Details?</h2>
              <p>
                Admin account details are payment information that group admins share with members so they know where to send contributions. This applies to:
              </p>
              <ul className="resource-list">
                <li><strong>Subscription Groups:</strong> Admin's account for receiving subscription payments</li>
                <li><strong>General Groups:</strong> Admin's account for receiving event contributions</li>
                <li><strong>Birthday Groups:</strong> Celebrants add their own account details (not admin)</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>What Information to Include</h2>
              <p>When adding admin account details, include:</p>
              <ul className="resource-list">
                <li><strong>Bank Account Number:</strong> The account number for receiving payments</li>
                <li><strong>Bank Name:</strong> Name of the bank</li>
                <li><strong>Account Holder Name:</strong> Name on the account</li>
                <li><strong>Routing/Sort Code:</strong> If applicable for your country</li>
                <li><strong>Additional Notes:</strong> Any other relevant payment information</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Security Considerations</h2>
              <p>Account details are shared securely:</p>
              <ul className="resource-list">
                <li><strong>Group Members Only:</strong> Details are only visible to group members</li>
                <li><strong>No Public Access:</strong> Not visible to people outside the group</li>
                <li><strong>Secure Storage:</strong> Information is stored securely in the app</li>
                <li><strong>Update When Needed:</strong> Keep information current</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Best Practices</h2>
              <ul className="resource-list">
                <li><strong>Keep Details Updated:</strong> Ensure account information is current</li>
                <li><strong>Verify Information:</strong> Double-check account details before sharing</li>
                <li><strong>Communicate Changes:</strong> Notify members if account details change</li>
                <li><strong>Use Dedicated Accounts:</strong> Consider using a separate account for group payments</li>
                <li><strong>Monitor Transactions:</strong> Regularly check for received payments</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Updating Account Details</h2>
              <p>If you need to update account details:</p>
              <ol className="resource-list">
                <li>Go to your group settings</li>
                <li>Update the admin account details</li>
                <li>Notify members of the change</li>
                <li>Confirm the new details are correct</li>
              </ol>
            </div>

            <div className="cta-box">
              <h2>Ready to Set Up Admin Account Details?</h2>
              <p>Start managing your group's payment information securely with GroupFund.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/resources/setting-up-subscription-groups" className="btn btn-secondary btn-large">Setting Up Subscription Groups →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/setting-up-subscription-groups">Setting Up Subscription Groups →</Link>
                <Link to="/resources/creating-general-groups-for-events">Creating General Groups →</Link>
                <Link to="/resources/subscription-group-best-practices">Subscription Best Practices →</Link>
                <Link to="/resources">View All Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

