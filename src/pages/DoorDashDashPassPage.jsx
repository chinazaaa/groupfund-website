import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function DoorDashDashPassSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share DoorDash DashPass Costs | Group DoorDash Payment Tracking | GroupFund"
        description="Share DoorDash DashPass subscription costs with family sharing. Organize group payments for free delivery and perks on orders, and track monthly contributions."
        keywords="doordash dashpass sharing, share doordash cost, dashpass group subscription, doordash payment splitting, split dashpass, doordash group contributions, food delivery cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/doordash-dashpass"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🚚 Share DoorDash DashPass Costs</h1>
          <p className="page-subtitle">
            Split DoorDash DashPass with family or housemates. Track payments, manage orders, and share free delivery perks fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                DoorDash DashPass saves money on delivery fees, service fees, and offers exclusive restaurant discounts for frequent food delivery orders. Perfect for busy families or households who order takeout regularly. GroupFund makes it easy to share DoorDash DashPass costs through family sharing, set up recurring payment schedules, track who's contributed to the current month, and send automatic reminders so everyone pays their fair share of the delivery savings.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share DoorDash DashPass?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Split DashPass ($9.99/month) between 3-5 family members or housemates and save $30-60/month on delivery fees across all your food orders.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Delivery Contributions</h3>
                  <p>
                    See who has paid for the current DashPass month and who owes. No more confusion about who's covering DoorDash fees.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Order Reminders</h3>
                  <p>
                    Set your DashPass renewal date and GroupFund sends reminders before it expires so free delivery perks never lapse.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Family Account Sharing</h3>
                  <p>
                    Main account holder confirms payments and coordinates DashPass family sharing access transparently for all members.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Scheduling</h3>
                  <p>
                    Match GroupFund to your DoorDash DashPass billing cycle for seamless recurring contributions and continuous discounts.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Everyone checks payment status from phones while placing discounted DoorDash orders anytime.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>DashPass Plans You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>DashPass Standard ($9.99/month):</strong> $0 delivery fees on orders over $12, reduced service fees from 175,000+ restaurants – perfect for frequent orders.
                </li>
                <li>
                  <strong>DashPass Annual ($96/year):</strong> Same perks for 12 months – great value when split across family members through GroupFund.
                </li>
                <li>
                  <strong>Any DashPass Subscription:</strong> Works with monthly/annual renewals through family sharing and GroupFund tracking.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share DoorDash DashPass with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "DoorDash DashPass" as the platform.</li>
                <li>Set your DashPass renewal date for automatic reminders to all family members.</li>
                <li>Add payment details where members send their share of the monthly DashPass cost.</li>
                <li>
                  Add instructions like "Paid members get DashPass family sharing access for $0 delivery fees" or "Use shared family account."
                </li>
                <li>Invite family/housemates using your GroupFund invite code.</li>
                <li>Members get reminders 3 days before DashPass expires and mark "Paid" after contributing.</li>
                <li>You confirm payments and ensure DashPass family sharing stays active.</li>
                <li>Everyone sees real-time payment status for current DashPass coverage.</li>
                <li>Repeat monthly/annually automatically matching DoorDash billing cycle.</li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common DoorDash DashPass Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Dinner Deliveries</h3>
                  <p>
                    Parents and teens share DashPass for school night meals, weekend pizza, and family takeout favorites.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Housemate Takeout Rotation</h3>
                  <p>
                    Roommates order burgers, sushi, and Mexican with $0 delivery fees while splitting costs evenly each month.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💑 Working Couples</h3>
                  <p>
                    Partners split DashPass 50/50 for post-work dinners, healthy salads, and date night deliveries.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏃‍♀️ Busy Professional Households</h3>
                  <p>
                    Young professionals share DashPass discounts for office lunches, gym meals, and evening takeout.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share DoorDash DashPass Costs?</h2>
              <p>
                Start your DashPass family sharing group today. Keep $0 delivery fees active, track payments, send reminders, and split food delivery savings fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your DashPass Group
                </Link>
                <Link to="/group-types/subscription-groups" className="btn btn-secondary btn-large">
                  Learn About Subscription Groups →
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Subscription Services</h3>
              <div className="related-links-grid">
                <Link to="/subscription-groups/uber-eats-pass">Share Uber Eats Pass Costs →</Link>
                <Link to="/subscription-groups/deliveroo-plus">Share Deliveroo Plus Costs →</Link>
                <Link to="/subscription-groups/just-eat-plus">Share Just Eat+ Costs →</Link>
                  <Link to="/subscription-groups/hello-fresh">Share HelloFresh Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
