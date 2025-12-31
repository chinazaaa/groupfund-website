import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function YoutubePremiumSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share YouTube Premium Costs | Group YouTube Premium Payment Tracking | GroupFund"
        description="Split YouTube Premium costs with GroupFund. Organize group contributions for YouTube Premium Family plans, track payments, manage deadlines, and share ad‑free YouTube fairly with family or housemates."
        keywords="youtube premium family, share youtube premium cost, youtube premium payment splitting, youtube premium group contributions, split youtube premium subscription, youtube premium family sharing"
        canonical="https://www.groupfund.app/subscription-groups/youtube-premium"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">▶️ Share YouTube Premium Costs</h1>
          <p className="page-subtitle">
            Split YouTube Premium with family or housemates. Track payments, manage deadlines, and share your ad‑free YouTube subscription fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                YouTube Premium gives you ad‑free videos, background play, offline downloads, and YouTube Music in one subscription, and it becomes even better value when you share it using a Family plan. A YouTube Premium Family membership can be shared with up to 5 other family members in your household, and GroupFund helps you split the cost, schedule recurring payments, and track who has paid each month.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share YouTube Premium?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    One YouTube Premium Family plan can cover up to 6 people, making it much cheaper than everyone paying for an individual subscription.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Contributions</h3>
                  <p>
                    Use GroupFund to see who has paid and who still owes for the month instead of relying on memory or scattered chats.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Automatic Reminders</h3>
                  <p>
                    Set your Premium billing date and let GroupFund send reminders before payments are due so everyone contributes on time.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Admin Confirmation</h3>
                  <p>
                    The family manager or account owner confirms payments when received, keeping everything transparent and accountable.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Scheduling</h3>
                  <p>
                    Match your GroupFund schedule to your YouTube Premium billing cycle and let the system handle recurring reminders.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Everyone can check their payment status in real time from their phones, wherever they are.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>YouTube Premium Plans You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>YouTube Premium Family:</strong> Share Premium with up to 5 other family members in the same household, each with their own Google Account and recommendations.
                </li>
                <li>
                  <strong>Individual YouTube Premium:</strong> Use GroupFund if you informally share access with a partner or housemate and want to track 50/50 splits.
                </li>
                <li>
                  <strong>Any YouTube Premium Subscription:</strong> Works with your existing billing date and currency, whether you pay monthly or annually.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share YouTube Premium with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select &quot;YouTube Premium&quot; as the platform.</li>
                <li>Set your billing date to match when Google charges your YouTube Premium plan.</li>
                <li>Add your payment account details (bank account, mobile money, etc.) where members should send their share.</li>
                <li>
                  Add clear instructions in the group description (e.g., &quot;Once you&apos;ve paid, I&apos;ll make sure you stay in the YouTube Premium Family group&quot;).
                </li>
                <li>Invite family members or housemates using your unique GroupFund invite link or code.</li>
                <li>Members receive automatic reminders before the billing date so they remember to pay.</li>
                <li>Members mark their payment as &quot;Paid&quot; after sending money.</li>
                <li>You (the family manager/admin) confirm each payment as it arrives.</li>
                <li>Everyone can see real‑time payment statuses inside the group.</li>
                <li>GroupFund repeats this schedule automatically based on your billing cycle.</li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common YouTube Premium Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Premium Group</h3>
                  <p>
                    Use a YouTube Premium Family plan so parents and kids each have their own account while sharing one subscription and splitting the cost with GroupFund.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Housemate YouTube Premium</h3>
                  <p>
                    Share ad‑free YouTube and YouTube Music with people you live with while tracking who has paid each month.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💑 Couples Sharing Premium</h3>
                  <p>
                    Split an individual or family plan 50/50 with your partner and keep a clear record of contributions over time.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📦 Combined Streaming Bundle</h3>
                  <p>
                    Manage YouTube Premium alongside other streaming services and use GroupFund to keep all contributions organised.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share YouTube Premium Costs?</h2>
              <p>
                Start your YouTube Premium subscription group today. Set up payment tracking, send reminders, and split ad‑free YouTube fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your YouTube Premium Group
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
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
