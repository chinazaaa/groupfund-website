import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function FranceLocationPage() {
  return (
    <>
      <SEO
        title="GroupFund France - Birthday Contributions App for France"
        description="Organize birthday contributions in France with GroupFund. Perfect for French families, churches, schools, and groups. Support for EUR (Euro). Free to start."
        keywords="birthday contributions France, French birthday app, groupfund France, birthday contributions app France, EUR birthday tracker, France group payments"
        canonical="https://groupfund.app/locations/france"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for France 🇫🇷</h1>
          <p className="page-subtitle">
            Organize birthday contributions in France with GroupFund. Perfect for French families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in France</h2>
              <p>
                GroupFund is perfect for organizing birthday contributions in France. Whether you're managing contributions for your extended family, church members, school groups, or friend circles, GroupFund makes it simple and transparent.
              </p>
              <p>
                With support for Euro (EUR) and local bank details, GroupFund is designed to work seamlessly for French groups.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for France</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇫🇷 Euro (EUR) Support</h3>
                  <p>Full support for Euro. Set contribution amounts in EUR, and local bank details are displayed automatically.</p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>Perfect for French bank transfers (SEPA). Members can transfer directly to celebrants' bank accounts.</p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for French Families</h3>
                  <p>Organize contributions for extended French families. Track who has contributed across multiple family members.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Church Groups</h3>
                  <p>Ideal for French churches organizing birthday contributions for members. Manage large congregations efficiently.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for French schools, universities, and student groups organizing birthday contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>Native mobile app perfect for France's mobile culture. Access from anywhere, get push notifications.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in France</h2>
              <ul className="scenarios-list">
                <li><strong>Family Birthday Contributions:</strong> Organize contributions for extended French families.</li>
                <li><strong>Church Member Contributions:</strong> Manage birthday contributions for church members in French churches.</li>
                <li><strong>School Groups:</strong> Organize contributions for teachers, staff, and students in French schools.</li>
                <li><strong>Alumni Associations:</strong> Manage contributions for French university and school alumni groups.</li>
                <li><strong>Workplace Groups:</strong> Organize office birthday funds for French companies and organizations.</li>
                <li><strong>Friend Groups:</strong> Keep friend groups organized for birthday celebrations in France.</li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in France</h2>
              <ol className="steps-list">
                <li><strong>Create Your Group:</strong> Set up a group with Euro (EUR) as the currency.</li>
                <li><strong>Set Contribution Amounts:</strong> Set amounts in EUR (e.g., €20 or €50 per person).</li>
                <li><strong>Add Member Birthdays:</strong> Add all group member birthdays to the calendar.</li>
                <li><strong>Track Contributions:</strong> Members mark payments as paid after transferring to bank accounts.</li>
                <li><strong>Automatic Reminders:</strong> Get reminders 7 days before, 1 day before, and on deadline day.</li>
                <li><strong>Celebrate Together:</strong> Focus on celebrating birthdays instead of managing contributions.</li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why French Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Euro (EUR)</li>
                <li>Perfect for French bank transfers (SEPA)</li>
                <li>Mobile-first design</li>
                <li>Free to use - no hidden fees</li>
                <li>Works for groups of any size</li>
                <li>Transparent tracking builds trust</li>
                <li>Automatic reminders reduce follow-ups</li>
                <li>Member reliability scores help make informed decisions</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Birthday Contributions in France?</h2>
              <p>Join French groups using GroupFund to make birthday celebrations organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your French Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations">All Locations →</Link>
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

