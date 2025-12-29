import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function NowTvEntertainmentSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share NOW Entertainment Costs | Group NOW TV Payment Tracking | GroupFund"
        description="Split NOW Entertainment subscription costs with GroupFund. Organize group contributions for NOW TV Entertainment passes, track payments, manage deadlines, and share TV streaming fairly with family or housemates."
        keywords="now tv entertainment sharing, share now tv cost, now entertainment group subscription, now tv payment splitting, split now tv entertainment, now tv group contributions, share now pass"
        canonical="https://www.groupfund.app/subscription-groups/now-entertainment"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">📺 Share NOW Entertainment Costs</h1>
          <p className="page-subtitle">
            Split NOW TV Entertainment with family or housemates. Track payments, manage deadlines, and share your TV streaming pass fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                NOW Entertainment gives you Sky channels, box sets, new releases, and premium TV content on flexible monthly passes. Perfect for UK households sharing Sky Atlantic, Sky Max, and thousands of hours of on-demand TV. GroupFund makes it easy to split NOW TV Entertainment costs, set up recurring payment schedules, track who's paid, and send automatic reminders so everyone contributes on time.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share NOW Entertainment?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Split one NOW Entertainment pass (£9.99/month) between housemates or family instead of everyone paying separately for Sky content.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Payments</h3>
                  <p>
                    See exactly who has paid for the month. No more chasing people in WhatsApp groups about who's turn it is to pay NOW TV.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Automatic Reminders</h3>
                  <p>
                    Set your NOW pass renewal date and GroupFund sends reminders before the next billing so nobody forgets.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Account Confirmation</h3>
                  <p>
                    The main account holder confirms payments received and keeps everyone in the loop about pass status and access.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Flexible Scheduling</h3>
                  <p>
                    Match GroupFund to your NOW Entertainment pass billing cycle (flexible monthly passes) for seamless contributions.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Everyone can check payment status from phones while watching NOW TV on any device in the house.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>NOW Entertainment Passes You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>NOW Entertainment (£9.99/month):</strong> Sky Atlantic, Sky Max, Sky Comedy, Comedy Central, MTV, box sets – perfect for housemates sharing premium TV channels.
                </li>
                <li>
                  <strong>NOW Entertainment + Boost (£15/month):</strong> HD streaming, 3 streams at once – ideal for households watching on multiple TVs/phones simultaneously.
                </li>
                <li>
                  <strong>Any NOW Pass:</strong> Works with Entertainment, Cinema, Sports passes or combinations on flexible monthly billing.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share NOW Entertainment with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "NOW TV Entertainment" as the platform.</li>
                <li>Set your billing date to match your NOW pass renewal (flexible monthly).</li>
                <li>Add your payment account details (bank transfer, mobile money) where members send their share.</li>
                <li>
                  Add instructions like "Paid members get full access to my NOW TV profiles - message for login after payment".
                </li>
                <li>Invite housemates or family using your unique GroupFund invite link or code.</li>
                <li>Members receive automatic reminders 3 days before pass renewal.</li>
                <li>Members mark "Paid" after sending their contribution.</li>
                <li>You confirm payments and ensure everyone's NOW TV profiles stay active.</li>
                <li>Everyone sees real-time payment status for the current Entertainment pass.</li>
                <li>GroupFund auto-repeats monthly matching NOW's flexible pass system.</li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common NOW Entertainment Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏠 Student House NOW TV</h3>
                  <p>
                    Housemates share Sky Atlantic box sets and live channels during evenings while splitting costs evenly each month.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Entertainment Pass</h3>
                  <p>
                    Parents and older kids watch Sky shows with personal profiles while contributing to the monthly Entertainment pass.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💑 Couples Sharing Sky Content</h3>
                  <p>
                    Partners split NOW Entertainment 50/50 for Sky Max dramas and Comedy Central without subscription arguments.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📺 Multi-Room Household</h3>
                  <p>
                    Family watching Sky on living room TV + kids streaming on iPads - one Entertainment pass covers everyone.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share NOW Entertainment Costs?</h2>
              <p>
                Start your NOW TV Entertainment group today. Track payments, send reminders, and split Sky channels and box sets fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your NOW Entertainment Group
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
                <Link to="/subscription-groups/sky-cinema">Share Sky Cinema Costs →</Link>
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
