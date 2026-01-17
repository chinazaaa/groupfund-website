import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function GrammarlyPremiumPage() {
  return (
    <>
      <SEO
        title="Share Grammarly Premium Subscription Costs | Group Grammarly Payment Tracking | GroupFund"
        description="Split Grammarly Premium subscription costs with GroupFund. Organize group contributions for writing assistance, grammar checking, and style suggestions, track payments, manage deadlines, and share Grammarly Premium fairly among your team."
        keywords="grammarly premium group subscription, share grammarly cost, grammarly payment splitting, grammarly group contributions, split grammarly subscription"
        canonical="https://www.groupfund.app/subscription-groups/grammarly-premium"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">✍️ Share Grammarly Premium Subscription Costs</h1>
          <p className="page-subtitle">
            Split Grammarly Premium costs with your team. Track payments, manage deadlines, and share your Grammarly Premium subscription fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Grammarly Premium offers writing assistance, grammar checking, and style suggestions. GroupFund's Subscription Groups make it easy to share Grammarly Premium costs with your team. Set up monthly payment schedules, track who's paid, get automatic reminders, and manage your shared Grammarly account efficiently.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Grammarly Premium Costs?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>Split Grammarly Premium subscription costs between team members. Save significantly compared to paying alone.</p>
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
                  <h3>🔄 Automatic Recurring Billing</h3>
                  <p>With auto-pay enabled (USD, EUR, GBP, CAD, or AUD), set up true recurring subscriptions with automatic monthly billing. Stripe automatically charges members each month without requiring any action - no manual payment needed each billing cycle. Perfect for matching your Grammarly billing cycle.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>Track payments on the go. Everyone can see payment status in real-time from their phones.</p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>How to Share Grammarly Premium with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Grammarly Premium" as the platform</li>
                <li>Set your billing date for automatic reminders</li>
                <li>Add your payment account details where members send contributions</li>
                <li>Add login credential instructions in the group description</li>
                <li>Invite team members using the unique invite code</li>
                <li>Members receive automatic reminders before the billing date</li>
                <li>Members mark their payment as "Paid" after sending money</li>
                <li>You (the admin) confirm when you receive each payment</li>
                <li>Everyone sees payment statuses in real-time</li>
                <li>Repeat every month - GroupFund handles the scheduling automatically</li>
              </ol>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Grammarly Premium Costs?</h2>
              <p>Start managing your Grammarly Premium subscription group today. Set up payment tracking, send reminders, and split costs fairly.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Grammarly Premium Group</Link>
                <Link to="/group-types/subscription-groups" className="btn btn-secondary btn-large">Learn About Subscription Groups →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Subscription Services</h3>
              <div className="related-links-grid">
                <Link to="/subscription-groups/notion">Share Notion Costs →</Link>
                <Link to="/subscription-groups/chatgpt-plus">Share ChatGPT Plus Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

