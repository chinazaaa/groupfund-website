import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function PostmatesUnlimitedSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Postmates Unlimited Costs | Group Postmates Payment Tracking | GroupFund"
        description="Share Postmates Unlimited (via Uber One) subscription costs with friends. Organize group payments for waived delivery fees on orders over minimums, and track contributions."
        keywords="postmates unlimited sharing, share postmates cost, postmates group subscription, uber one postmates payment splitting, split postmates unlimited, postmates group contributions, food delivery cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/postmates-unlimited"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🚚 Share Postmates Unlimited Costs</h1>
          <p className="page-subtitle">
            Split Postmates Unlimited (via Uber One) with friends or housemates. Track payments, manage orders, and share waived delivery fees fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Postmates Unlimited (now part of Uber One) waives delivery fees on orders over minimums from thousands of local restaurants, plus exclusive discounts and priority service. Perfect for friends, housemates, or families who order takeout regularly. GroupFund makes it easy to split Postmates Unlimited costs, set up recurring payment schedules, track who's contributed to the current month, and send automatic reminders so everyone pays their fair share of the delivery savings.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Postmates Unlimited?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Split Postmates Unlimited ($9.99/month via Uber One) between 3-5 friends and save $30-50/month on delivery fees across all your food orders.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Delivery Contributions</h3>
                  <p>
                    See who has paid for the current Unlimited month and who owes. No more "I covered Postmates last time" confusion.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Order Reminders</h3>
                  <p>
                    Set your Uber One renewal date and GroupFund sends reminders before waived delivery fees expire.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Account Coordination</h3>
                  <p>
                    Main account holder confirms payments and coordinates Uber One login sharing for Postmates Unlimited access.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Scheduling</h3>
                  <p>
                    Match GroupFund to your Uber One/Postmates billing cycle for seamless recurring contributions and continuous savings.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Everyone checks payment status from phones while placing Postmates orders with waived delivery fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Postmates Unlimited Plans You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>Postmates Unlimited via Uber One ($9.99/month):</strong> $0 delivery fees on orders over $15, reduced service fees from 100,000+ restaurants – perfect for frequent takeout.
                </li>
                <li>
                  <strong>Uber One Annual ($99.99/year):</strong> Same Postmates Unlimited perks for 12 months – great value when split across friends through GroupFund.
                </li>
                <li>
                  <strong>Any Uber One Subscription:</strong> Works with monthly/annual renewals covering Postmates, Uber Eats, and more through coordinated sharing.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Postmates Unlimited with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Postmates Unlimited" as the platform.</li>
                <li>Set your Uber One renewal date for automatic reminders to all friends.</li>
                <li>Add payment details where members send their share of the monthly Unlimited cost.</li>
                <li>
                  Add instructions like "Paid members get Uber One login for Postmates $0 delivery fees" or "Rotate ordering account weekly."
                </li>
                <li>Invite friends/housemates using your GroupFund link or code.</li>
                <li>Members get reminders 3 days before Uber One expires and mark "Paid" after contributing.</li>
                <li>You confirm payments and ensure Postmates Unlimited access stays active.</li>
                <li>Everyone sees real-time payment status for current Unlimited coverage.</li>
                <li>Repeat monthly/annually automatically matching Uber One billing cycle.</li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common Postmates Unlimited Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>👥 Friend Group Takeouts</h3>
                  <p>
                    College friends or gaming buddies share Postmates Unlimited for late-night pizza and wing orders with waived fees.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Housemate Dinner Rotation</h3>
                  <p>
                    Roommates order burgers, sushi, and tacos with $0 delivery while splitting costs evenly each month.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💑 Couples Food Deliveries</h3>
                  <p>
                    Partners split Uber One 50/50 covering Postmates, Uber Eats, and grocery deliveries for the household.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏃‍♀️ Busy Professional Circle</h3>
                  <p>
                    Work friends share Unlimited discounts for office lunches, gym post-workout meals, and evening takeout.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Postmates Unlimited Costs?</h2>
              <p>
                Start your Postmates Unlimited group today. Keep $0 delivery fees active across Uber One, track payments, send reminders, and split food delivery savings with friends.
              </p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Postmates Group
                </Link>
                <Link to="/group-types/subscription-groups" className="btn btn-secondary btn-large">
                  Learn About Subscription Groups →
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Subscription Services</h3>
              <div className="related-links-grid">
                <Link to="/subscription-groups/doordash-dashpass">Share DoorDash DashPass Costs →</Link>
                <Link to="/subscription-groups/uber-eats-pass">Share Uber Eats Pass Costs →</Link>
                <Link to="/subscription-groups/deliveroo-plus">Share Deliveroo Plus Costs →</Link>
                <Link to="/subscription-groups/just-eat-plus">Share Just Eat+ Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
