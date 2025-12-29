import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SpotifySubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Spotify Subscription Costs | Group Spotify Payment Tracking | GroupFund"
        description="Split Spotify Premium costs with GroupFund. Organize group contributions for Spotify Duo or Family plans, track payments, manage deadlines, and share music streaming fairly with friends and family."
        keywords="spotify group subscription, share spotify cost, spotify payment splitting, spotify family plan, spotify duo sharing, spotify group contributions, split spotify subscription, spotify cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/spotify"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🎧 Share Spotify Subscription Costs</h1>
          <p className="page-subtitle">
            Split Spotify Premium with friends, family, or housemates. Track payments, manage deadlines, and share your Spotify subscription fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Spotify Premium is cheaper and easier to manage when you share it. GroupFund&apos;s Subscription Groups make it simple to split Spotify Duo or Family plans with people you live with. Set up monthly payment schedules, track who&apos;s paid, send automatic reminders, and manage your shared Spotify subscription without chasing anyone.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Spotify Costs?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Split Spotify Premium Family (up to 6 people) instead of everyone paying individually and reduce monthly costs for the whole household.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Payments</h3>
                  <p>See exactly who has paid for the month and who still owes. No more guessing or chasing people in group chats.</p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Automatic Reminders</h3>
                  <p>Set your billing date and GroupFund sends reminders before payments are due so no one forgets their share.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Admin Confirmation</h3>
                  <p>The plan owner confirms payments when received, keeping the group transparent and accountable.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Scheduling</h3>
                  <p>Set up recurring monthly contributions that match your Spotify billing cycle. GroupFund handles the scheduling for you.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>Everyone can check their payment status in real-time from their phone, wherever they are.</p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Spotify Plans You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>Spotify Premium Duo:</strong> 2 Premium accounts for people at the same address – ideal for couples or flatmates who want to split music costs.
                </li>
                <li>
                  <strong>Spotify Premium Family:</strong> Up to 6 Premium accounts under one plan – perfect for households that want separate profiles but one shared bill.
                </li>
                <li>
                  <strong>Any Spotify Subscription:</strong> Works with your existing Spotify billing date and currency, no matter which Premium plan you use.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Spotify with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select &quot;Spotify&quot; as the platform.</li>
                <li>Set your billing date (e.g., 1st of every month) for automatic reminders.</li>
                <li>Add your payment account details (bank account, mobile money, etc.) where members should send their contribution.</li>
                <li>
                  Add instructions in the group description (e.g., &quot;Message me once paid so I can send your Spotify invite link&quot;).
                </li>
                <li>Invite household members using your unique GroupFund invite link or code.</li>
                <li>Members receive automatic reminders before the billing date so they pay on time.</li>
                <li>Members mark their payment as &quot;Paid&quot; after sending money.</li>
                <li>You (the admin) confirm each payment when received.</li>
                <li>Everyone can see live payment statuses in the group.</li>
                <li>Repeat every month – GroupFund keeps the schedule running for you.</li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common Spotify Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏠 Housemate Spotify Group</h3>
                  <p>Split a Spotify Family or Duo plan with people you live with and keep track of who has paid each month.</p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Music Subscription</h3>
                  <p>Parents and kids can each have their own Premium account under one plan while sharing the cost fairly.</p>
                </div>
                <div className="feature-item">
                  <h3>💑 Couples on Spotify Duo</h3>
                  <p>Couples can use Spotify Duo to save compared to two individual plans and use GroupFund to track 50/50 payments.</p>
                </div>
                <div className="feature-item">
                  <h3>🎵 Shared Home Entertainment</h3>
                  <p>Combine Spotify with other streaming costs in your household and use GroupFund to keep contributions organised.</p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Spotify Costs?</h2>
              <p>Start your Spotify subscription group today. Track payments, send reminders, and split music streaming costs fairly.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Spotify Group
                </Link>
                <Link to="/group-types/subscription-groups" className="btn btn-secondary btn-large">
                  Learn About Subscription Groups →
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Subscription Services</h3>
              <div className="related-links-grid">
                <Link to="/subscription-groups/netflix">Share Netflix Costs →</Link>
                <Link to="/subscription-groups/disney-plus">Share Disney+ Costs →</Link>
                <Link to="/subscription-groups/hulu">Share Hulu Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
