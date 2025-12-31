import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AmazonPrimeSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Amazon Prime & Prime Video Costs | Group Prime Payment Tracking | GroupFund"
        description="Split Amazon Prime and Prime Video costs with GroupFund. Organize group contributions, track payments, manage deadlines, and share Prime benefits fairly with family or housemates."
        keywords="amazon prime family sharing, share amazon prime cost, prime video payment splitting, amazon family subscription, amazon prime group contributions, split prime subscription, prime video cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/amazon-prime"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">📦 Share Amazon Prime & Prime Video Costs</h1>
          <p className="page-subtitle">
            Split Amazon Prime and Prime Video with family or housemates. Track payments, manage deadlines, and share your subscription fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Amazon Prime bundles fast delivery, Prime Video, music, and other benefits under one subscription, and some of these benefits can be shared with other people in your household using Amazon Family/Household. GroupFund helps you split the cost of Prime, keep a clear record of who has paid, and set up recurring reminders so everyone contributes on time.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Amazon Prime Costs?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Share one Prime membership within your household instead of multiple people paying separately and reduce your total monthly or yearly spend.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Contributions</h3>
                  <p>
                    Use GroupFund to see who has paid and who still owes for Prime or Prime Video instead of guessing or checking old chats.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Automatic Reminders</h3>
                  <p>
                    Set your Prime billing date and let GroupFund send reminders before payments are due so everyone remembers their share.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Admin Confirmation</h3>
                  <p>
                    The main Prime account holder confirms payments when received, keeping contributions transparent and accountable.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly / Yearly Scheduling</h3>
                  <p>
                    Whether you pay Prime monthly or annually, GroupFund can align reminders and contributions to match your billing cycle.
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
              <h2>Amazon Prime & Prime Video You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>Amazon Prime Membership:</strong> Share select Prime benefits (like delivery and Prime Video) with one other adult and child/teen profiles in your household via Amazon Family/Household, then split the cost with GroupFund.
                </li>
                <li>
                  <strong>Prime Video Access:</strong> Use profiles on a single Prime Video account so different people can watch with their own history while contributing their share to the main bill.
                </li>
                <li>
                  <strong>Any Prime Billing Setup:</strong> Works whether you pay Prime monthly or yearly, and whether you focus only on Prime Video or the full Prime bundle.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Amazon Prime with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select &quot;Amazon Prime&quot; as the platform.</li>
                <li>Set your billing date to match when Amazon charges your Prime membership (monthly or annually).</li>
                <li>Add your payment account details (bank account, mobile money, etc.) where members should send their share.</li>
                <li>
                  Add clear instructions in the group description (e.g., &quot;Once you&apos;ve paid, I&apos;ll keep you in my Amazon Family/Prime Video profiles&quot;).
                </li>
                <li>Invite family members or housemates using your unique GroupFund invite link or code.</li>
                <li>Members receive automatic reminders before the billing date so they remember to pay.</li>
                <li>Members mark their payment as &quot;Paid&quot; after sending money.</li>
                <li>You (the Prime account holder) confirm each payment as it arrives.</li>
                <li>Everyone can see real‑time payment statuses inside the group.</li>
                <li>GroupFund repeats this schedule automatically based on your billing cycle.
                </li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common Amazon Prime Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Prime Sharing</h3>
                  <p>
                    Use Amazon Family to share select Prime benefits with one other adult and child profiles at the same address, then split the cost fairly with GroupFund.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Housemate Prime Video Group</h3>
                  <p>
                    Share Prime Video access with housemates via profiles on one account while tracking contributions each month.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💑 Couples Sharing Prime</h3>
                  <p>
                    Split an Amazon Prime membership 50/50 with your partner and keep a simple record of who paid and when.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📦 Combined Shopping & Streaming</h3>
                  <p>
                    Use GroupFund to manage who contributes how much when Prime is used for both deliveries and entertainment in your home.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Amazon Prime Costs?</h2>
              <p>
                Start your Amazon Prime subscription group today. Set up payment tracking, send reminders, and split Prime and Prime Video costs fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Amazon Prime Group
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
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
