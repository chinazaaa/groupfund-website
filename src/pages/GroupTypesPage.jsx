import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function GroupTypesPage() {
  return (
    <>
      <SEO
        title="Group Types - Birthday, Subscription & General Groups | GroupFund"
        description="Learn about GroupFund's three group types: Birthday Groups for birthdays, Subscription Groups for shared subscriptions, and General Groups for events. Choose the right type for your needs."
        keywords="group types, birthday groups, subscription groups, general groups, group contribution types, birthday contributions, subscription management, event contributions"
        canonical="https://groupfund.app/group-types"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Group Types</h1>
          <p className="page-subtitle">
            Three powerful group types designed for different purposes
          </p>
        </div>
      </section>

      <section className="group-types-page">
        <div className="container">
          <div className="group-types-intro">
            <p>
              GroupFund offers three distinct group types, each optimized for specific use cases. Whether you're organizing birthday contributions, managing shared subscriptions, or planning events, there's a group type perfect for your needs.
            </p>
          </div>

          <div className="group-types-grid">
            <div className="group-type-card">
              <div className="group-type-icon">🎂</div>
              <h2>Birthday Groups</h2>
              <p className="group-type-subtitle">
                Organize birthday contributions with wishlists and calendar tracking
              </p>
              <ul className="group-type-features">
                <li>✓ Birthday calendar with automatic reminders</li>
                <li>✓ Profile-level wishlists for gift coordination</li>
                <li>✓ Celebrant confirms payments</li>
                <li>✓ Requires birthdays in member profiles</li>
                <li>✓ Perfect for families and friend groups</li>
              </ul>
              <div className="group-type-cta">
                <Link to="/group-types/birthday-groups" className="btn btn-primary">Learn More About Birthday Groups →</Link>
              </div>
            </div>

            <div className="group-type-card">
              <div className="group-type-icon">📺</div>
              <h2>Subscription Groups</h2>
              <p className="group-type-subtitle">
                Manage shared subscriptions like Netflix, Spotify, and more
              </p>
              <ul className="group-type-features">
                <li>✓ Monthly or annual payment schedules</li>
                <li>✓ Platform name tracking (Netflix, Spotify, etc.)</li>
                <li>✓ Automatic deadline reminders</li>
                <li>✓ Admin account details sharing</li>
                <li>✓ No birthday required</li>
              </ul>
              <div className="group-type-cta">
                <Link to="/group-types/subscription-groups" className="btn btn-primary">Learn More About Subscription Groups →</Link>
              </div>
            </div>

            <div className="group-type-card">
              <div className="group-type-icon">🎉</div>
              <h2>General Groups</h2>
              <p className="group-type-subtitle">
                Flexible groups for weddings, events, and any purpose
              </p>
              <ul className="group-type-features">
                <li>✓ Optional deadline tracking</li>
                <li>✓ Admin account details sharing</li>
                <li>✓ Flexible for any use case</li>
                <li>✓ No birthday required</li>
                <li>✓ Perfect for one-time events</li>
              </ul>
              <div className="group-type-cta">
                <Link to="/group-types/general-groups" className="btn btn-primary">Learn More About General Groups →</Link>
              </div>
            </div>
          </div>

          <div className="group-types-comparison">
            <h2>Quick Comparison</h2>
            <div className="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Birthday Groups</th>
                    <th>Subscription Groups</th>
                    <th>General Groups</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Birthday Required</td>
                    <td>✓ Yes</td>
                    <td>✗ No</td>
                    <td>✗ No</td>
                  </tr>
                  <tr>
                    <td>Calendar View</td>
                    <td>✓ Yes</td>
                    <td>✗ No</td>
                    <td>✗ No</td>
                  </tr>
                  <tr>
                    <td>Wishlists</td>
                    <td>✓ Yes</td>
                    <td>✗ No</td>
                    <td>✗ No</td>
                  </tr>
                  <tr>
                    <td>Payment Frequency</td>
                    <td>Per Birthday</td>
                    <td>Monthly/Annual</td>
                    <td>One-time/Optional</td>
                  </tr>
                  <tr>
                    <td>Deadline Tracking</td>
                    <td>✓ Automatic</td>
                    <td>✓ Automatic</td>
                    <td>Optional</td>
                  </tr>
                  <tr>
                    <td>Admin Account Details</td>
                    <td>✗ No (Celebrant)</td>
                    <td>✓ Yes</td>
                    <td>✓ Yes</td>
                  </tr>
                  <tr>
                    <td>Best For</td>
                    <td>Birthday Contributions</td>
                    <td>Shared Subscriptions</td>
                    <td>Events, Weddings, Any Purpose</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="cta-box">
            <h2>Ready to Create Your Group?</h2>
            <p>Choose the group type that fits your needs and start organizing contributions today.</p>
            <div className="cta-buttons">
              <Link to="/waitlist" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
              <Link to="/resources/choosing-between-group-types" className="btn btn-secondary btn-large">Choosing Between Group Types →</Link>
            </div>
          </div>

          <div className="related-links">
            <h3>Related Resources</h3>
            <div className="related-links-grid">
              <Link to="/resources/choosing-between-group-types">Choosing Between Group Types →</Link>
              <Link to="/resources/setting-up-your-first-group">Setting Up Your First Group →</Link>
              <Link to="/resources/setting-up-subscription-groups">Setting Up Subscription Groups →</Link>
              <Link to="/resources/creating-general-groups-for-events">Creating General Groups →</Link>
              <Link to="/features">View All Features →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

