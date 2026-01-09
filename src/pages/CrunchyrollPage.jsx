import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function CrunchyrollPage() {
  return (
    <>
      <SEO
        title="Share Crunchyroll Subscription Costs | Group Crunchyroll Payment Tracking | GroupFund"
        description="Split Crunchyroll subscription costs with GroupFund. Organize group contributions for anime streaming, track payments, manage deadlines, and share Crunchyroll fairly among friends and family."
        keywords="crunchyroll group subscription, share crunchyroll cost, crunchyroll payment splitting, crunchyroll group contributions, split crunchyroll subscription"
        canonical="https://www.groupfund.app/subscription-groups/crunchyroll"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🎌 Share Crunchyroll Subscription Costs</h1>
          <p className="page-subtitle">
            Split Crunchyroll costs with anime fans. Track payments, manage deadlines, and share your Crunchyroll subscription fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Crunchyroll offers anime streaming, manga access, and ad-free viewing. GroupFund's Subscription Groups make it easy to share Crunchyroll costs with anime fans. Set up monthly payment schedules, track who's paid, get automatic reminders, and manage your shared Crunchyroll account efficiently.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Crunchyroll Costs?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>Split Crunchyroll subscription costs between multiple anime fans. Save significantly compared to paying alone.</p>
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
                  <p>Set up recurring monthly payments that match your Crunchyroll billing cycle. GroupFund handles the scheduling.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>Track payments on the go. Everyone can see payment status in real-time from their phones.</p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>How to Share Crunchyroll with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Crunchyroll" as the platform</li>
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
              <h2>Ready to Share Crunchyroll Costs?</h2>
              <p>Start managing your Crunchyroll subscription group today. Set up payment tracking, send reminders, and split costs fairly.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Crunchyroll Group</Link>
                <Link to="/group-types/subscription-groups" className="btn btn-secondary btn-large">Learn About Subscription Groups →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Subscription Services</h3>
              <div className="related-links-grid">
                <Link to="/subscription-groups/netflix">Share Netflix Costs →</Link>
                <Link to="/subscription-groups/disney-plus">Share Disney+ Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

