import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function PeacockSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Peacock Subscription Costs | Group Peacock Payment Tracking | GroupFund"
        description="Split Peacock subscription costs with GroupFund. Organize group contributions for Peacock Premium or Premium Plus plans, track payments, manage deadlines, and share NBC streaming fairly with family or housemates."
        keywords="peacock group subscription, share peacock cost, peacock payment splitting, peacock family plan, peacock group contributions, split peacock subscription, peacock cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/peacock"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🦚 Share Peacock Subscription Costs</h1>
          <p className="page-subtitle">
            Split Peacock with friends, family, or housemates. Track payments, manage deadlines, and share your Peacock subscription fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Peacock streams NBC shows, live sports, Universal movies, and originals like The Office and Parks & Recreation. Perfect for households sharing premium NBC content and live events. GroupFund's Subscription Groups make it easy to split Peacock costs, set up monthly payment schedules, track who's paid, and send automatic reminders so everyone contributes on time.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Peacock Costs?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Share one Peacock subscription across your household instead of everyone paying individually and reduce your total streaming spend.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Payments</h3>
                  <p>
                    See exactly who has paid and who still owes for the month. No more group chat arguments about Peacock billing.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Automatic Reminders</h3>
                  <p>
                    Set your billing date and GroupFund sends reminders before payments are due so nobody forgets their share.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Admin Confirmation</h3>
                  <p>
                    The account holder confirms payments when received, keeping contributions transparent and accountable.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Scheduling</h3>
                  <p>
                    Match your GroupFund schedule to your Peacock billing cycle for seamless recurring contributions.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Everyone can check payment status in real-time from their phones while streaming Peacock anywhere.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Peacock Plans You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>Peacock Premium ($7.99/month):</strong> Full library with ads – great value for households sharing The Office, SNL, and sports highlights.
                </li>
                <li>
                  <strong>Peacock Premium Plus ($13.99/month):</strong> Ad-free viewing + local NBC + live sports – ideal for groups wanting premium experience and multiple streams.
                </li>
                <li>
                  <strong>Any Peacock Subscription:</strong> Works with your existing plan and billing cycle, monthly or annual.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Peacock with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Peacock" as the platform.</li>
                <li>Set your billing date to match when Peacock charges your account each month.</li>
                <li>Add your payment account details (bank transfer, mobile money, etc.) where members send their share.</li>
                <li>
                  Add clear instructions in the group description (e.g., "Paid members get Peacock profile access - message after payment for login").
                </li>
                <li>Invite housemates, family, or friends using your unique GroupFund invite link or code.</li>
                <li>Members receive automatic reminders before the billing date so they pay on time.</li>
                <li>Members mark their payment as "Paid" after sending money.</li>
                <li>You (the admin) confirm each payment as it arrives.</li>
                <li>Everyone can see real-time payment statuses inside the group.</li>
                <li>GroupFund repeats this schedule automatically based on your billing cycle.</li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common Peacock Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏠 Housemate Peacock Group</h3>
                  <p>
                    Roommates binge The Office and watch live sports together while splitting costs evenly each month.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family NBC Favorites</h3>
                  <p>
                    Parents and kids share Peacock profiles for SNL, Chicago shows, and Universal movies with fair contributions.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💑 Couples Streaming Package</h3>
                  <p>
                    Partners split Peacock 50/50 alongside other streaming services using organized GroupFund tracking.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏈 Sports Season Sharing</h3>
                  <p>
                    NFL fans share Peacock Premium Plus for live games and highlights during football season.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Peacock Costs?</h2>
              <p>
                Start your Peacock subscription group today. Set up payment tracking, send reminders, and split NBC streaming costs fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Peacock Group
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
                <Link to="/subscription-groups/paramount-plus">Share Paramount+ Costs →</Link>
                <Link to="/subscription-groups/now-entertainment">Share NOW Entertainment Costs →</Link>
                <Link to="/subscription-groups/hulu">Share Hulu Costs →</Link>
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
