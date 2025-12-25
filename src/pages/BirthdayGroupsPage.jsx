import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BirthdayGroupsPage() {
  return (
    <>
      <SEO
        title="Birthday Groups - Organize Birthday Contributions | GroupFund"
        description="Learn about Birthday Groups in GroupFund. Organize birthday contributions with wishlists, calendar tracking, and automatic reminders. Perfect for families and friend groups."
        keywords="birthday groups, birthday contributions, birthday calendar, birthday wishlists, birthday gift coordination, group birthday tracking"
        canonical="https://www.groupfund.app/group-types/birthday-groups"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Birthday Groups</h1>
          <p className="page-subtitle">
            Organize birthday contributions with wishlists and calendar tracking
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Birthday Groups are designed specifically for organizing birthday contributions. With integrated calendar tracking, wishlist coordination, and automatic reminders, Birthday Groups make celebrating birthdays together effortless.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Key Features</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>📅 Birthday Calendar</h3>
                  <p>Never miss a birthday with our integrated calendar view. See all upcoming and past birthdays, plan contributions ahead of time, and track contribution history.</p>
                </div>
                <div className="feature-item">
                  <h3>🎁 Birthday Wishlists</h3>
                  <p>Create and share birthday wishlists with group members. Add items with pictures and prices. Group members can claim items they want to gift, making gift coordination easy and avoiding duplicates.</p>
                </div>
                <div className="feature-item">
                  <h3>🔔 Automatic Reminders</h3>
                  <p>Get automatic reminders 7 days before, 1 day before, and on the birthday. Never forget to contribute to a birthday celebration.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Celebrant Confirmation</h3>
                  <p>The birthday person (celebrant) confirms when payments are received, ensuring accuracy and transparency.</p>
                </div>
                <div className="feature-item">
                  <h3>📊 Contribution History</h3>
                  <p>Track all birthday contributions over time. See who contributed to which birthdays and maintain complete records.</p>
                </div>
                <div className="feature-item">
                  <h3>👥 Member Profiles</h3>
                  <p>Members must have birthdays set in their profiles to join Birthday Groups, ensuring accurate calendar tracking.</p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Perfect For</h2>
              <ul className="use-cases-list">
                <li><strong>Family Groups:</strong> Organize birthday contributions for extended family members</li>
                <li><strong>Friend Groups:</strong> Coordinate birthday gifts and contributions among friends</li>
                <li><strong>Workplace Groups:</strong> Manage colleague birthday contributions professionally</li>
                <li><strong>Community Organizations:</strong> Organize birthday contributions for community members</li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How It Works</h2>
              <ol className="how-it-works-list">
                <li>Create a Birthday Group and add member birthdays</li>
                <li>Set contribution amounts and group size</li>
                <li>Members can create and share birthday wishlists</li>
                <li>Automatic reminders are sent before each birthday</li>
                <li>Members mark payments as "Paid" after transferring</li>
                <li>Celebrants confirm receipt of payments</li>
                <li>Everyone can see payment statuses in real-time</li>
              </ol>
            </div>

            <div className="cta-box">
              <h2>Ready to Create a Birthday Group?</h2>
              <p>Start organizing birthday contributions effortlessly with GroupFund.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/resources/setting-up-birthday-groups" className="btn btn-secondary btn-large">Setting Up Birthday Groups →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Resources</h3>
              <div className="related-links-grid">
                <Link to="/group-types">View All Group Types →</Link>
                <Link to="/resources/using-birthday-wishlists">Using Birthday Wishlists →</Link>
                <Link to="/resources/choosing-between-group-types">Choosing Between Group Types →</Link>
                <Link to="/use-cases/families">For Families →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

