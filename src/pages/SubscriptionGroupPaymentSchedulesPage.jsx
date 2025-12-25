import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SubscriptionGroupPaymentSchedulesPage() {
  return (
    <>
      <SEO
        title="Subscription Group Payment Schedules - Monthly vs Annual"
        description="Learn how to set up and manage payment schedules for Subscription Groups. Understand monthly vs. annual frequencies and how to configure deadlines."
        keywords="subscription payment schedules, monthly subscriptions, annual subscriptions, payment frequency, subscription deadlines"
        canonical="https://www.groupfund.app/resources/subscription-group-payment-schedules"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Subscription Group Payment Schedules</h1>
          <p className="page-subtitle">
            Learn how to set up and manage payment schedules for Subscription Groups
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Planning</span>
              <span className="resource-read-time">5 min read</span>
            </div>

            <div className="resource-section">
              <h2>Understanding Payment Schedules</h2>
              <p>
                Payment schedules determine how often members contribute to shared subscriptions. GroupFund supports two frequencies:
              </p>
              <ul className="resource-list">
                <li><strong>Monthly:</strong> Payments due every month</li>
                <li><strong>Annual:</strong> Payments due once per year</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Monthly Payment Schedules</h2>
              <p>Best for most streaming services:</p>
              <ul className="resource-list">
                <li><strong>Frequency:</strong> Payments due each month</li>
                <li><strong>Deadline:</strong> Set the day of the month (e.g., 15th of each month)</li>
                <li><strong>Benefits:</strong> Smaller, more manageable payments</li>
                <li><strong>Best For:</strong> Netflix, Spotify, Disney+, and most monthly subscriptions</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Annual Payment Schedules</h2>
              <p>Best for services with annual plans:</p>
              <ul className="resource-list">
                <li><strong>Frequency:</strong> Payments due once per year</li>
                <li><strong>Deadline:</strong> Set the day and month (e.g., March 15th)</li>
                <li><strong>Benefits:</strong> Often cheaper, fewer reminders</li>
                <li><strong>Considerations:</strong> Larger upfront payments</li>
                <li><strong>Best For:</strong> Services with significant annual discounts</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Choosing the Right Schedule</h2>
              <p>Consider these factors:</p>
              <ul className="resource-list">
                <li><strong>Subscription Type:</strong> What the service offers (monthly vs. annual)</li>
                <li><strong>Cost Savings:</strong> Annual plans often save money</li>
                <li><strong>Member Preferences:</strong> What works for your group</li>
                <li><strong>Payment Size:</strong> Can members afford annual payments?</li>
                <li><strong>Convenience:</strong> Fewer reminders with annual plans</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Configuring Deadlines</h2>
              <p>When setting up payment schedules:</p>
              <ul className="resource-list">
                <li><strong>Monthly:</strong> Choose a day (1-31) that works for your group</li>
                <li><strong>Annual:</strong> Choose both day and month</li>
                <li><strong>Buffer Time:</strong> Set deadlines before subscription renews</li>
                <li><strong>Consistency:</strong> Use the same deadline pattern each period</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Set Up Payment Schedules?</h2>
              <p>Start managing your subscription payment schedules effectively with GroupFund.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/resources/setting-up-subscription-groups" className="btn btn-secondary btn-large">Setting Up Subscription Groups →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/setting-up-subscription-groups">Setting Up Subscription Groups →</Link>
                <Link to="/resources/subscription-deadline-management">Subscription Deadline Management →</Link>
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

