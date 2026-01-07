import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AppleTvPlusSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Apple TV+ Subscription Costs | Group Apple TV+ Payment Tracking | GroupFund"
        description="Split Apple TV+ subscription costs with GroupFund. Organize group contributions, track payments, manage deadlines, and share Apple TV+ fairly with family and housemates."
        keywords="apple tv+ group subscription, share apple tv plus cost, apple tv+ payment splitting, apple tv plus family sharing, apple tv+ group contributions, split apple tv+ subscription, apple tv plus cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/apple-tv-plus"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">📺 Share Apple TV+ Subscription Costs</h1>
          <p className="page-subtitle">
            Split Apple TV+ with family or housemates. Track payments, manage deadlines, and share your Apple TV+ subscription fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Apple TV+ offers premium original shows and films, and it becomes even better value when you share it. With Family Sharing, one Apple TV+ subscription can be shared with up to five other family members, and GroupFund helps you split the cost, set up recurring payment schedules, and track who has paid each month.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Apple TV+ Costs?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Share a single Apple TV+ subscription across your family group instead of each person paying separately, lowering your overall streaming spend.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Payments</h3>
                  <p>
                    Use GroupFund to see who has paid and who still owes for the month instead of relying on memory or scattered chats.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Automatic Reminders</h3>
                  <p>
                    Set your Apple TV+ billing date and let GroupFund send reminders before payments are due so everyone contributes on time.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Admin Confirmation</h3>
                  <p>
                    The family organiser or account owner confirms payments when received, keeping contributions transparent and accountable.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Scheduling</h3>
                  <p>
                    Match your GroupFund schedule to your Apple TV+ billing cycle and let the system handle recurring reminders every month.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Everyone can check their payment status in real-time from their phones, wherever they are.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Apple TV+ Plans You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>Apple TV+ Monthly:</strong> Standard monthly subscription that you can share with up to five other family members using Family Sharing.
                </li>
                <li>
                  <strong>Apple TV+ Annual:</strong> Yearly Apple TV+ plan, ideal if your family commits for a full year and wants to split the cost up front or monthly via GroupFund.
                </li>
                <li>
                  <strong>Apple One Bundles:</strong> Use GroupFund to manage contributions when Apple TV+ is part of an Apple One Family or Premier bundle that you share with others.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Apple TV+ with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select &quot;Apple TV+&quot; as the platform.</li>
                <li>Set your billing date to match when Apple charges your Apple ID each month or year.</li>
                <li>Add your payment account details (bank account, mobile money, etc.) where members should send their share.</li>
                <li>
                  Add clear instructions in the group description (e.g., &quot;Once you&apos;ve paid, I&apos;ll keep you in the Apple Family Sharing group for Apple TV+&quot;).
                </li>
                <li>Invite family members or housemates using your unique GroupFund invite link or code.</li>
                <li>Members receive automatic reminders before the billing date so they remember to pay.</li>
                <li>Members mark their payment as &quot;Paid&quot; after sending money.</li>
                <li>You (the organiser/admin) confirm each payment as it arrives.</li>
                <li>Everyone can see real-time payment statuses inside the group.</li>
                <li>GroupFund repeats this schedule automatically based on your billing cycle settings.</li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common Apple TV+ Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Apple TV+ Sharing</h3>
                  <p>
                    Use Apple Family Sharing so parents and kids each have their own Apple ID while accessing the same Apple TV+ subscription and splitting the cost with GroupFund.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Housemate Apple TV+ Group</h3>
                  <p>
                    Share Apple TV+ with housemates who use the same Apple ID for the subscription while tracking who paid each month.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💑 Couples Sharing Apple TV+</h3>
                  <p>
                    Split the Apple TV+ or Apple One bill 50/50 with your partner and keep a simple record of contributions over time.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📦 Apple One Bundle Sharing</h3>
                  <p>
                    Combine Apple TV+ with other Apple services in an Apple One Family plan and use GroupFund to manage each person&apos;s share of the bundle.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Apple TV+ Costs?</h2>
              <p>
                Start your Apple TV+ subscription group today. Set up payment tracking, send reminders, and split streaming costs fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Apple TV+ Group
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
                <Link to="/subscription-groups/spotify">Share Spotify Costs →</Link>
                <Link to="/subscription-groups/disney-plus">Share Disney+ Costs →</Link>
                <Link to="/subscription-groups/hulu">Share Hulu Costs →</Link>
                <Link to="/subscription-groups/hbo-max">Share HBO Max Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
