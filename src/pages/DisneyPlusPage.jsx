import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function DisneyPlusSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Disney+ Subscription Costs | Group Disney+ Payment Tracking | GroupFund"
        description="Split Disney+ subscription costs with GroupFund. Organize group contributions for Disney+ Premium or Standard plans, track payments, manage deadlines, and share streaming fairly with friends and family."
        keywords="disney+ group subscription, share disney plus cost, disney+ payment splitting, disney plus family plan, disney+ group contributions, split disney+ subscription, disney plus cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/disney-plus"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🎥 Share Disney+ Subscription Costs</h1>
          <p className="page-subtitle">
            Split Disney+ with friends and family. Track payments, manage deadlines, and share your Disney+ subscription fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Disney+ subscriptions add up quickly when you pay alone. GroupFund&apos;s Subscription Groups make it easy to share Disney+ costs with friends and family in your household. Set up monthly payment schedules, track who&apos;s paid, send automatic reminders, and manage your shared Disney+ account without messy spreadsheets or group chats.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Disney+ Costs?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Share one Disney+ subscription across your household instead of everyone paying separately and reduce your monthly streaming spend.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Payments</h3>
                  <p>
                    See exactly who has paid and who still owes for the month. No more chasing people manually in WhatsApp or iMessage.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Automatic Reminders</h3>
                  <p>
                    Set your billing date and GroupFund sends reminders before payments are due so people remember to pay on time.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Admin Confirmation</h3>
                  <p>
                    The account holder confirms payments when received, keeping everything transparent and accountable for the group.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Scheduling</h3>
                  <p>
                    Match your recurring GroupFund schedule to your Disney+ billing cycle. GroupFund takes care of the monthly routine.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Everyone can view payment status in real-time from their phone, whether they are at home or away.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Disney+ Plans You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>Disney+ Premium:</strong> Up to 4 simultaneous streams, higher video quality – ideal for larger households that watch on multiple devices at once.
                </li>
                <li>
                  <strong>Disney+ Standard:</strong> Great for smaller households that only need a couple of streams and still want full access to Disney+ content.
                </li>
                <li>
                  <strong>Any Disney+ Subscription:</strong> Works with your existing Disney+ plan, billing cycle, and currency.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Disney+ with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select &quot;Disney+&quot; as the platform.</li>
                <li>Set your billing date (e.g., 10th of every month) for automatic reminders.</li>
                <li>Add your payment account details (bank account, mobile money, etc.) where members should send their share.</li>
                <li>
                  Add clear instructions in the group description (e.g., &quot;Message me once paid and I&apos;ll add you to the Disney+ account&quot;).
                </li>
                <li>Invite friends or family using your unique GroupFund invite link or code.</li>
                <li>Members receive automatic reminders before the billing date so they remember to pay.</li>
                <li>Members mark their payment as &quot;Paid&quot; after sending money.</li>
                <li>You (the admin) confirm each payment when you receive it.</li>
                <li>Everyone in the group can see payment statuses in real-time.</li>
                <li>Repeat every month – GroupFund keeps the schedule running automatically.</li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common Disney+ Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Disney+ Sharing</h3>
                  <p>
                    Share one Disney+ subscription across parents and kids, while each person has their own profile and watchlist.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Housemate Disney+ Group</h3>
                  <p>
                    Flatmates can split the cost of Disney+ as part of shared household expenses and track who has paid each month.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👥 Extended Family</h3>
                  <p>
                    Share Disney+ with close relatives while keeping contributions organised and transparent.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💼 Couples or Partners</h3>
                  <p>
                    Split Disney+ 50/50 with your partner and use GroupFund to keep a simple record of who paid when.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Disney+ Costs?</h2>
              <p>
                Start your Disney+ subscription group today. Set up payment tracking, send reminders, and split streaming costs fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Disney+ Group
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
