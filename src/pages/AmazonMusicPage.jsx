import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AmazonMusicSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Amazon Music Costs | Group Amazon Music Payment Tracking | GroupFund"
        description="Split Amazon Music subscription costs with GroupFund. Organize group contributions for Amazon Music Unlimited Family plans, track payments, manage deadlines, and share music streaming fairly with family or housemates."
        keywords="amazon music family sharing, share amazon music cost, amazon music payment splitting, amazon music group contributions, split amazon music subscription, amazon music family plan, amazon music cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/amazon-music"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🎵 Share Amazon Music Costs</h1>
          <p className="page-subtitle">
            Split Amazon Music with family or housemates. Track payments, manage deadlines, and share your music streaming subscription fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Amazon Music Unlimited offers millions of songs, HD/Ultra HD audio, offline playback, and Alexa integration. The Family plan supports up to 6 household accounts, making it perfect for sharing premium music streaming. GroupFund helps you split Amazon Music costs, set up recurring payment schedules, track who's paid, and send automatic reminders so everyone contributes on time.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Amazon Music Costs?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Share one Amazon Music Unlimited Family plan across up to 6 people instead of individual subscriptions and reduce your total music streaming spend.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Payments</h3>
                  <p>
                    See exactly who has paid and who still owes for the month. No more group chat reminders about Amazon Music billing.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Automatic Reminders</h3>
                  <p>
                    Set your billing date and GroupFund sends reminders before Amazon charges so nobody forgets their share.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Admin Confirmation</h3>
                  <p>
                    The family organizer confirms payments when received, keeping contributions transparent and accountable.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Scheduling</h3>
                  <p>
                    Match your GroupFund schedule to your Amazon Music billing cycle for seamless recurring contributions.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Everyone can check payment status in real-time from phones while streaming Amazon Music anywhere.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Amazon Music Plans You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>Amazon Music Unlimited Family:</strong> Up to 6 household accounts with full library access, HD/Ultra HD audio – perfect for families sharing premium sound quality.
                </li>
                <li>
                  <strong>Amazon Music Unlimited Individual:</strong> Great for couples or small groups splitting one high-quality music subscription.
                </li>
                <li>
                  <strong>Prime Music + Unlimited Add-on:</strong> Use GroupFund when some household members have Prime Music included and others upgrade to Unlimited Family.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Amazon Music with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Amazon Music" as the platform.</li>
                <li>Set your billing date to match when Amazon charges your Music Unlimited plan.</li>
                <li>Add your payment account details (bank transfer, mobile money, etc.) where members send their share.</li>
                <li>
                  Add clear instructions (e.g., "Paid members stay in Amazon Household for Music Unlimited access").
                </li>
                <li>Invite family or housemates using your unique GroupFund invite link or code.</li>
                <li>Members receive automatic reminders before the billing date so they pay on time.</li>
                <li>Members mark their payment as "Paid" after sending money.</li>
                <li>You (the admin) confirm each payment as it arrives.</li>
                <li>Everyone can see real-time payment statuses inside the group.</li>
                <li>GroupFund repeats this schedule automatically based on your Amazon billing cycle.</li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common Amazon Music Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Music Streaming</h3>
                  <p>
                    Parents and kids each have personal Amazon Music profiles under one Family plan while splitting costs evenly.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Housemate Music Group</h3>
                  <p>
                    Roommates share Amazon Music Unlimited through Amazon Household while tracking monthly contributions.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💑 Couples Music Subscription</h3>
                  <p>
                    Partners split Amazon Music Unlimited 50/50 with personal libraries and playlists under one account.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🔊 Alexa Home Integration</h3>
                  <p>
                    Household with Echo devices streams HD music everywhere while managing contributions through GroupFund.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Amazon Music Costs?</h2>
              <p>
                Start your Amazon Music subscription group today. Set up payment tracking, send reminders, and split premium music streaming fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Amazon Music Group
                </Link>
                <Link to="/group-types/subscription-groups" className="btn btn-secondary btn-large">
                  Learn About Subscription Groups →
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Subscription Services</h3>
              <div className="related-links-grid">
                <Link to="/subscription-groups/spotify">Share Spotify Costs →</Link>
                <Link to="/subscription-groups/apple-music">Share Apple Music Costs →</Link>
                <Link to="/subscription-groups/amazon-prime">Share Amazon Prime Costs →</Link>
                <Link to="/subscription-groups/youtube-premium">Share YouTube Premium Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
