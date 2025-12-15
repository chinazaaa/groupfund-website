import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function NigeriaLocationPage() {
  return (
    <>
      <SEO
        title="GroupFund Nigeria - Birthday Contributions App for Nigeria"
        description="Organize birthday contributions in Nigeria with GroupFund. Perfect for families, churches, schools, and groups in Nigeria. Support for NGN (Nigerian Naira). Free to start."
        keywords="birthday contributions Nigeria, Nigerian birthday app, groupfund Nigeria, birthday contributions app Nigeria, NGN birthday tracker, Nigeria group payments"
        canonical="https://groupfund.app/locations/nigeria"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Nigeria 🇳🇬</h1>
          <p className="page-subtitle">
            Organize birthday contributions in Nigeria with GroupFund. Perfect for Nigerian families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Nigeria</h2>
              <p>
                GroupFund is perfect for organizing birthday contributions in Nigeria. Whether you're managing contributions for your extended family, church members, school groups, or friend circles, GroupFund makes it simple and transparent.
              </p>
              <p>
                With support for Nigerian Naira (NGN) and local bank details, GroupFund is designed to work seamlessly for Nigerian groups.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Nigeria</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇳🇬 Nigerian Naira (NGN) Support</h3>
                  <p>Full support for Nigerian Naira. Set contribution amounts in NGN, and local bank details are displayed automatically.</p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>Perfect for Nigerian bank transfers. Members can transfer directly to celebrants' bank accounts.</p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Nigerian Families</h3>
                  <p>Organize contributions for extended Nigerian families. Track who has contributed across multiple family members.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Church Groups</h3>
                  <p>Ideal for Nigerian churches organizing birthday contributions for members. Manage large congregations efficiently.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for Nigerian schools, universities, and student groups organizing birthday contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>Native mobile app perfect for Nigeria's mobile-first culture. Access from anywhere, get push notifications.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Nigeria</h2>
              <ul className="scenarios-list">
                <li><strong>Family Birthday Contributions:</strong> Organize contributions for extended Nigerian families across different states.</li>
                <li><strong>Church Member Contributions:</strong> Manage birthday contributions for church members in Nigerian churches.</li>
                <li><strong>School Groups:</strong> Organize contributions for teachers, staff, and students in Nigerian schools.</li>
                <li><strong>Alumni Associations:</strong> Manage contributions for Nigerian university and school alumni groups.</li>
                <li><strong>Workplace Groups:</strong> Organize office birthday funds for Nigerian companies and organizations.</li>
                <li><strong>Friend Groups:</strong> Keep friend groups organized for birthday celebrations in Nigeria.</li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Nigeria</h2>
              <ol className="steps-list">
                <li><strong>Create Your Group:</strong> Set up a group with Nigerian Naira (NGN) as the currency.</li>
                <li><strong>Set Contribution Amounts:</strong> Set amounts in NGN (e.g., ₦5,000 or ₦10,000 per person).</li>
                <li><strong>Add Member Birthdays:</strong> Add all group member birthdays to the calendar.</li>
                <li><strong>Track Contributions:</strong> Members mark payments as paid after transferring to bank accounts.</li>
                <li><strong>Automatic Reminders:</strong> Get reminders 7 days before, 1 day before, and on deadline day.</li>
                <li><strong>Celebrate Together:</strong> Focus on celebrating birthdays instead of managing contributions.</li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why Nigerian Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Nigerian Naira (NGN)</li>
                <li>Perfect for Nigerian bank transfers</li>
                <li>Mobile-first design for Nigeria's mobile culture</li>
                <li>Free to use - no hidden fees</li>
                <li>Works for groups of any size</li>
                <li>Transparent tracking builds trust</li>
                <li>Automatic reminders reduce follow-ups</li>
                <li>Member reliability scores help make informed decisions</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Birthday Contributions in Nigeria?</h2>
              <p>Join Nigerian groups using GroupFund to make birthday celebrations organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Nigerian Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/lagos">Lagos, Nigeria →</Link>
                <Link to="/use-cases">View Use Cases →</Link>
                <Link to="/features">View Features →</Link>
                <Link to="/pricing">See Pricing →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

