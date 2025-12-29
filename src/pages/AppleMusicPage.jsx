import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AppleMusicSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Apple Music Subscription Costs | Group Apple Music Payment Tracking | GroupFund"
        description="Split Apple Music subscription costs with GroupFund. Organize group contributions for Apple Music Family plans, track payments, manage deadlines, and share music streaming fairly with family or housemates."
        keywords="apple music family sharing, share apple music cost, apple music payment splitting, apple music group contributions, split apple music subscription, apple music family plan, apple music cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/apple-music"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🎵 Share Apple Music Subscription Costs</h1>
          <p className="page-subtitle">
            Split Apple Music with family or housemates. Track payments, manage deadlines, and share your Apple Music subscription fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Apple Music offers millions of songs, personalized playlists, and spatial audio, and it becomes incredible value when shared through Family Sharing. One Apple Music Family plan can be shared with up to 5 other family members, and GroupFund makes it easy to split the cost, set up recurring payment schedules, track who's paid, and send automatic reminders so everyone contributes on time.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Apple Music Costs?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Share one Apple Music Family subscription across up to 6 people instead of everyone paying individually and reduce your total music streaming spend.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Payments</h3>
                  <p>
                    See exactly who has paid and who still owes for the month. No more chasing people in group chats or forgetting who paid last.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Automatic Reminders</h3>
                  <p>
                    Set your billing date and GroupFund sends reminders before payments are due so nobody misses their music contribution.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Admin Confirmation</h3>
                  <p>
                    The family organizer confirms payments when received, keeping contributions transparent and accountable for everyone.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Scheduling</h3>
                  <p>
                    Match your GroupFund schedule to your Apple Music billing cycle and let the system handle recurring reminders automatically.
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
              <h2>Apple Music Plans You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>Apple Music Family:</strong> Share with up to 5 other family members using Apple Family Sharing – each person gets their own personalized recommendations and library.
                </li>
                <li>
                  <strong>Apple Music Individual:</strong> Perfect for couples or small groups sharing one account while splitting costs 50/50 through GroupFund.
                </li>
                <li>
                  <strong>Apple One Bundles:</strong> Use GroupFund to manage contributions when Apple Music is part of Apple One Family or Premier that you share with others.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Apple Music with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Apple Music" as the platform.</li>
                <li>Set your billing date to match when Apple charges your Apple ID each month.</li>
                <li>Add your payment account details (bank account, mobile money, etc.) where members should send their share.</li>
                <li>
                  Add clear instructions in the group description (e.g., "Once you've paid, I'll keep you in the Apple Family Sharing group for Apple Music").
                </li>
                <li>Invite family members or housemates using your unique GroupFund invite link or code.</li>
                <li>Members receive automatic reminders before the billing date so they pay on time.</li>
                <li>Members mark their payment as "Paid" after sending money.</li>
                <li>You (the family organizer/admin) confirm each payment as it arrives.</li>
                <li>Everyone can see real-time payment statuses inside the group.</li>
                <li>GroupFund repeats this schedule automatically based on your billing cycle.</li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common Apple Music Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Apple Music Sharing</h3>
                  <p>
                    Use Apple Family Sharing so parents and kids each have their own Apple Music profile while sharing one subscription and splitting costs fairly.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Housemate Music Group</h3>
                  <p>
                    Share Apple Music with housemates who live together while tracking monthly contributions through GroupFund.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💑 Couples on Apple Music</h3>
                  <p>
                    Split Apple Music 50/50 with your partner and keep a clear record of payments without awkward reminders.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📦 Apple One Bundle Sharing</h3>
                  <p>
                    Manage Apple Music alongside iCloud, Apple TV+, and other services in an Apple One Family plan using GroupFund for contributions.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Apple Music Costs?</h2>
              <p>
                Start your Apple Music subscription group today. Set up payment tracking, send reminders, and split music streaming costs fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Apple Music Group
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
                <Link to="/subscription-groups/paramount-plus">Share Paramount+ Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
