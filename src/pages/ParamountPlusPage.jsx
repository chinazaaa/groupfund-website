import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ParamountPlusSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Paramount+ Subscription Costs | Group Paramount+ Payment Tracking | GroupFund"
        description="Split Paramount+ subscription costs with GroupFund. Organize group contributions for Paramount+ Essential or Premium plans, track payments, manage deadlines, and share streaming fairly with family or housemates."
        keywords="paramount+ group subscription, share paramount plus cost, paramount+ payment splitting, paramount plus family plan, paramount+ group contributions, split paramount+ subscription, paramount plus cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/paramount-plus"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">📺 Share Paramount+ Subscription Costs</h1>
          <p className="page-subtitle">
            Split Paramount+ with friends, family, or housemates. Track payments, manage deadlines, and share your Paramount+ subscription fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Paramount+ offers CBS shows, movies, live sports, and originals, but the monthly cost adds up when paying alone. GroupFund's Subscription Groups make it easy to split Paramount+ costs within your household, set up recurring payment schedules, track who's paid, and send automatic reminders so everyone contributes on time.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Paramount+ Costs?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Share one Paramount+ subscription across your household instead of everyone paying individually and cut your total streaming spend.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Payments</h3>
                  <p>
                    See exactly who has paid and who still owes for the month. Replace group chat reminders with one clear dashboard.
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
                    The account holder confirms payments when received, keeping contributions transparent and accountable for the group.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Scheduling</h3>
                  <p>
                    Align your GroupFund schedule with your Paramount+ billing cycle and let the system handle recurring reminders automatically.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Everyone can check payment status in real-time from their phones, wherever they are.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Paramount+ Plans You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>Paramount+ Essential:</strong> Affordable plan with ads and full content library – perfect for budget-conscious households that want access to everything.
                </li>
                <li>
                  <strong>Paramount+ Premium (with SHOWTIME):</strong> Ad-free streaming plus SHOWTIME originals and live CBS sports – ideal for groups wanting premium content and multiple simultaneous streams.
                </li>
                <li>
                  <strong>Any Paramount+ Subscription:</strong> Works with your existing plan, billing date, and currency whether you pay monthly or annually.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Paramount+ with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Paramount+" as the platform.</li>
                <li>Set your billing date to match when Paramount+ charges your account each month.</li>
                <li>Add your payment account details (bank account, mobile money, etc.) where members should send their share.</li>
                <li>
                  Add clear instructions in the group description (e.g., "Once you've paid, I'll confirm and ensure you have Paramount+ access").
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
              <h2>Common Paramount+ Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏠 Housemate Paramount+ Group</h3>
                  <p>
                    Share Paramount+ with roommates as part of your household streaming package and track contributions each month.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Paramount+ Sharing</h3>
                  <p>
                    Parents and kids can use profiles under one Paramount+ account while splitting the cost fairly with GroupFund.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💑 Couples on Paramount+</h3>
                  <p>
                    Split Paramount+ 50/50 with your partner and use GroupFund to keep a simple record of payments over time.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏈 Sports & Live TV Fans</h3>
                  <p>
                    Share Paramount+ Premium for live CBS sports, NFL games, and SHOWTIME content while managing contributions smoothly.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Paramount+ Costs?</h2>
              <p>
                Start your Paramount+ subscription group today. Set up payment tracking, send reminders, and split streaming costs fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Paramount+ Group
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
                <Link to="/subscription-groups/apple-tv-plus">Share Apple TV+ Costs →</Link>
                <Link to="/subscription-groups/youtube-premium">Share YouTube Premium Costs →</Link>
                <Link to="/subscription-groups/amazon-prime">Share Amazon Prime Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
