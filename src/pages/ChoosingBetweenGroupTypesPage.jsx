import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ChoosingBetweenGroupTypesPage() {
  return (
    <>
      <SEO
        title="Choosing Between Group Types - Birthday, Subscription, or General"
        description="Learn when to use Birthday Groups, Subscription Groups, or General Groups. Understand the differences and choose the right type for your needs."
        keywords="group types, birthday groups, subscription groups, general groups, choosing group type, which group type to use"
        canonical="https://www.groupfund.app/resources/choosing-between-group-types"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Choosing Between Group Types</h1>
          <p className="page-subtitle">
            Learn when to use Birthday Groups, Subscription Groups, or General Groups
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
              <h2>Understanding the Three Group Types</h2>
              <p>GroupFund offers three distinct group types, each designed for specific purposes:</p>
            </div>

            <div className="resource-section">
              <h2>Birthday Groups</h2>
              <p><strong>Best for:</strong> Organizing birthday contributions</p>
              <ul className="resource-list">
                <li><strong>Requires Birthdays:</strong> Members must have birthdays set in their profiles</li>
                <li><strong>Birthday Calendar:</strong> Automatic calendar tracking</li>
                <li><strong>Wishlists:</strong> Profile-level wishlists for gift coordination</li>
                <li><strong>Celebrant Confirmation:</strong> Birthday person confirms payments</li>
                <li><strong>Perfect For:</strong> Family groups, friend groups organizing birthdays</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Subscription Groups</h2>
              <p><strong>Best for:</strong> Managing shared subscriptions</p>
              <ul className="resource-list">
                <li><strong>No Birthday Required:</strong> Perfect for subscription-only groups</li>
                <li><strong>Payment Frequency:</strong> Monthly or annual schedules</li>
                <li><strong>Platform Name:</strong> Specify which service (Netflix, Spotify, etc.)</li>
                <li><strong>Deadline Tracking:</strong> Automatic deadline reminders</li>
                <li><strong>Admin Account Details:</strong> Share payment information</li>
                <li><strong>Perfect For:</strong> Shared Netflix, Spotify, Disney+, and other subscriptions</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>General Groups</h2>
              <p><strong>Best for:</strong> Any purpose or event</p>
              <ul className="resource-list">
                <li><strong>No Birthday Required:</strong> Flexible for any use case</li>
                <li><strong>Optional Deadline:</strong> Set deadlines when needed</li>
                <li><strong>Admin Account Details:</strong> Share payment information</li>
                <li><strong>Flexible Use:</strong> Weddings, baby showers, events, or any purpose</li>
                <li><strong>Perfect For:</strong> One-time events, special occasions, flexible contributions</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Decision Guide</h2>
              
              <h3>Use Birthday Groups when:</h3>
              <ul className="resource-list">
                <li>You want to organize birthday contributions</li>
                <li>Members have birthdays to track</li>
                <li>You want wishlist functionality</li>
                <li>You need automatic birthday reminders</li>
              </ul>

              <h3>Use Subscription Groups when:</h3>
              <ul className="resource-list">
                <li>You're sharing a subscription service</li>
                <li>You need recurring payment tracking</li>
                <li>You want automatic deadline reminders</li>
                <li>You don't need birthday features</li>
              </ul>

              <h3>Use General Groups when:</h3>
              <ul className="resource-list">
                <li>You're organizing for a specific event</li>
                <li>You need flexibility</li>
                <li>You don't need birthday or subscription features</li>
                <li>You want a one-time contribution group</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Can You Mix Group Types?</h2>
              <p>
                Yes! You can create multiple groups of different types. For example:
              </p>
              <ul className="resource-list">
                <li>A Birthday Group for family birthdays</li>
                <li>A Subscription Group for shared Netflix</li>
                <li>A General Group for a wedding</li>
              </ul>
              <p>
                Each group type serves its specific purpose, and you can manage them all in one place.
              </p>
            </div>

            <div className="cta-box">
              <h2>Ready to Choose Your Group Type?</h2>
              <p>Start organizing contributions with the right group type for your needs.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/resources/setting-up-your-first-group" className="btn btn-secondary btn-large">Setting Up Your First Group →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/setting-up-your-first-group">Setting Up Your First Group →</Link>
                <Link to="/resources/setting-up-subscription-groups">Setting Up Subscription Groups →</Link>
                <Link to="/resources/creating-general-groups-for-events">Creating General Groups →</Link>
                <Link to="/resources">View All Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

