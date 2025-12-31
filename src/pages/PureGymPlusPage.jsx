import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function PureGymPlusSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share PureGym Plus Costs | Group Gym Payment Tracking | GroupFund"
        description="Share PureGym Plus subscription costs with friends and family in the UK. Organize group payments for 24/7 gym access, classes, and buddy guests, and track monthly contributions."
        keywords="puregym plus sharing, share puregym cost, puregym group subscription, puregym payment splitting, split puregym plus, puregym group contributions, gym membership cost sharing uk"
        canonical="https://www.groupfund.app/subscription-groups/puregym-plus"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">💪 Share PureGym Plus Costs</h1>
          <p className="page-subtitle">
            Split PureGym Plus with gym buddies, family, or housemates across the UK. Track payments, manage access, and share 24/7 gym perks fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                PureGym Plus unlocks 24/7 access to 300+ UK gyms, unlimited classes, free guest passes, premium equipment, and no contract flexibility. Perfect for gym buddies, fitness families, or housemates sharing training motivation. GroupFund makes it simple to split PureGym Plus costs across UK locations, set up recurring payment schedules, track who's contributed to the current month, and send automatic reminders so everyone maintains their gym access and fitness goals.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share PureGym Plus?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Split PureGym Plus (£24.99/month) between 2-4 gym partners and reduce individual costs to £6-£12/month for nationwide 24/7 access.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Gym Contributions</h3>
                  <p>
                    See exactly who paid for this month's PureGym Plus and who owes. No more "I paid last month" gym membership arguments.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Access Reminders</h3>
                  <p>
                    Set your PureGym renewal date and GroupFund sends reminders before membership lapses so gym access never expires.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Guest Pass Coordination</h3>
                  <p>
                    Main member confirms payments and coordinates free buddy guest passes across 300+ UK PureGym locations.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Scheduling</h3>
                  <p>
                    Match GroupFund to PureGym's flexible monthly billing for seamless recurring fitness contributions nationwide.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Everyone checks payment status from phones while checking into any PureGym across the UK 24/7.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>PureGym Plus Benefits You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>PureGym Plus (£24.99/month):</strong> 24/7 access to 300+ UK gyms, unlimited classes, free guest passes – perfect for gym buddies splitting nationwide access.
                </li>
                <li>
                  <strong>Multi-Gym Access:</strong> Train at any PureGym location from London to Scotland while sharing costs through one membership.
                </li>
                <li>
                  <strong>Any PureGym Plan:</strong> Works with monthly Plus renewals across UK cities through GroupFund flexible tracking.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share PureGym Plus with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "PureGym Plus" as the platform.</li>
                <li>Set your PureGym renewal date (e.g., 1st of every month) for automatic reminders.</li>
                <li>Add payment details where gym buddies send their share of the £24.99 monthly fee.</li>
                <li>
                  Add instructions like "Paid members get free guest passes at any PureGym UK - share check-in photos!"
                </li>
                <li>Invite UK gym partners using your GroupFund link or code.</li>
                <li>Members get reminders 5 days before renewal and mark "Paid" after contributing.</li>
                <li>You confirm payments and ensure PureGym Plus stays active for 24/7 access.</li>
                <li>Everyone sees real-time payment status and gym check-in logs across UK locations.</li>
                <li>Repeat monthly automatically matching PureGym's no-contract billing.
                </li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common PureGym Plus Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏋️ Gym Buddy Pairs</h3>
                  <p>
                    Training partners split PureGym Plus 50/50 and use free guest passes when traveling between UK cities together.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Housemate Fitness Crew</h3>
                  <p>
                    Flatmates share 24/7 gym access near home and rotate free guest passes for evening classes.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Fitness Challenge</h3>
                  <p>
                    Parents and teens share PureGym Plus for family gym sessions and unlimited classes across UK holidays.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📍 Multi-City Professionals</h3>
                  <p>
                    Remote workers in London, Manchester, Edinburgh split nationwide access for work trips and home gyms.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share PureGym Plus Across the UK?</h2>
              <p>
                Start your gym buddy group today. Track fitness contributions, coordinate guest passes, send reminders, and split 24/7 UK gym access fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your PureGym Group
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
                  <Link to="/subscription-groups/hello-fresh">Share HelloFresh Costs →</Link>
                <Link to="/subscription-groups/uber-eats-pass">Share Uber Eats Pass Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
