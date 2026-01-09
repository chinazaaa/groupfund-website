import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function XboxGamePassPage() {
  return (
    <>
      <SEO
        title="Share Xbox Game Pass Subscription Costs | Group Xbox Game Pass Payment Tracking | GroupFund"
        description="Split Xbox Game Pass subscription costs with GroupFund. Organize group contributions for game library access, Xbox Live Gold, and cloud gaming, track payments, manage deadlines, and share Xbox Game Pass fairly among gamers."
        keywords="xbox game pass group subscription, share xbox game pass cost, xbox payment splitting, xbox game pass group contributions, split xbox subscription"
        canonical="https://www.groupfund.app/subscription-groups/xbox-game-pass"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🎮 Share Xbox Game Pass Subscription Costs</h1>
          <p className="page-subtitle">
            Split Xbox Game Pass costs with gamers. Track payments, manage deadlines, and share your Xbox Game Pass subscription fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Xbox Game Pass offers game library access, Xbox Live Gold, and cloud gaming. GroupFund's Subscription Groups make it easy to share Xbox Game Pass costs with gamers. Set up monthly payment schedules, track who's paid, get automatic reminders, and manage your shared Xbox Game Pass account efficiently.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Xbox Game Pass Costs?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>Split Xbox Game Pass subscription costs between gamers. Save significantly compared to paying alone.</p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Payments</h3>
                  <p>See exactly who has paid and who owes for the month. No more chasing people in WhatsApp groups.</p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Automatic Reminders</h3>
                  <p>Set your billing date and GroupFund sends reminders before payments are due. Never miss a payment deadline.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Admin Confirmation</h3>
                  <p>The account holder confirms payments when received, keeping everyone accountable and transparent.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Scheduling</h3>
                  <p>Set up recurring monthly payments that match your Xbox Game Pass billing cycle. GroupFund handles the scheduling.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>Track payments on the go. Everyone can see payment status in real-time from their phones.</p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>How to Share Xbox Game Pass with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Xbox Game Pass" as the platform</li>
                <li>Set your billing date for automatic reminders</li>
                <li>Add your payment account details where members send contributions</li>
                <li>Add login credential instructions in the group description</li>
                <li>Invite gamers using the unique invite code</li>
                <li>Members receive automatic reminders before the billing date</li>
                <li>Members mark their payment as "Paid" after sending money</li>
                <li>You (the admin) confirm when you receive each payment</li>
                <li>Everyone sees payment statuses in real-time</li>
                <li>Repeat every month - GroupFund handles the scheduling automatically</li>
              </ol>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Xbox Game Pass Costs?</h2>
              <p>Start managing your Xbox Game Pass subscription group today. Set up payment tracking, send reminders, and split costs fairly.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Xbox Game Pass Group</Link>
                <Link to="/group-types/subscription-groups" className="btn btn-secondary btn-large">Learn About Subscription Groups →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Subscription Services</h3>
              <div className="related-links-grid">
                <Link to="/subscription-groups/playstation-plus">Share PlayStation Plus Costs →</Link>
                <Link to="/subscription-groups/nintendo-switch-online">Share Nintendo Switch Online Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

