import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ESPNPlusPage() {
  return (
    <>
      <SEO
        title="Share ESPN+ Subscription Costs | Group ESPN+ Payment Tracking | GroupFund"
        description="Split ESPN+ subscription costs with GroupFund. Organize group contributions for live sports streaming, track payments, manage deadlines, and share ESPN+ fairly among friends and family."
        keywords="espn plus group subscription, share espn+ cost, espn plus payment splitting, espn+ group contributions, split espn subscription"
        canonical="https://www.groupfund.app/subscription-groups/espn-plus"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">⚽ Share ESPN+ Subscription Costs</h1>
          <p className="page-subtitle">
            Split ESPN+ costs with sports fans. Track payments, manage deadlines, and share your ESPN+ subscription fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                ESPN+ offers live sports, exclusive content, and sports analysis. GroupFund's Subscription Groups make it easy to share ESPN+ costs with sports fans. Set up monthly payment schedules, track who's paid, get automatic reminders, and manage your shared ESPN+ account efficiently.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share ESPN+ Costs?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>Split ESPN+ subscription costs between multiple sports fans. Save significantly compared to paying alone.</p>
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
                  <p>Set up recurring monthly payments that match your ESPN+ billing cycle. GroupFund handles the scheduling.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>Track payments on the go. Everyone can see payment status in real-time from their phones.</p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>How to Share ESPN+ with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "ESPN+" as the platform</li>
                <li>Set your billing date for automatic reminders</li>
                <li>Add your payment account details where members send contributions</li>
                <li>Add login credential instructions in the group description</li>
                <li>Invite friends/family using the unique invite code</li>
                <li>Members receive automatic reminders before the billing date</li>
                <li>Members mark their payment as "Paid" after sending money</li>
                <li>You (the admin) confirm when you receive each payment</li>
                <li>Everyone sees payment statuses in real-time</li>
                <li>Repeat every month - GroupFund handles the scheduling automatically</li>
              </ol>
            </div>

            <div className="cta-box">
              <h2>Ready to Share ESPN+ Costs?</h2>
              <p>Start managing your ESPN+ subscription group today. Set up payment tracking, send reminders, and split costs fairly.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your ESPN+ Group</Link>
                <Link to="/group-types/subscription-groups" className="btn btn-secondary btn-large">Learn About Subscription Groups →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Subscription Services</h3>
              <div className="related-links-grid">
                <Link to="/subscription-groups/fubotv">Share FuboTV Costs →</Link>
                <Link to="/subscription-groups/youtube-tv">Share YouTube TV Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

