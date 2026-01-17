import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function GrubhubPlusSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Grubhub+ Costs | Group Grubhub Payment Tracking | GroupFund"
        description="Share Grubhub+ subscription costs with friends and family. Organize group payments for $0 delivery fees, lower service fees, and exclusive perks on food orders, and track monthly contributions."
        keywords="grubhub+ sharing, share grubhub cost, grubhub group subscription, grubhub payment splitting, split grubhub+, grubhub group contributions, food delivery cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/grubhub-plus"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🍔 Share Grubhub+ Costs</h1>
          <p className="page-subtitle">
            Split Grubhub+ with friends, family, or housemates. Track payments, manage orders, and share $0 delivery fees fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Grubhub+ eliminates delivery fees, reduces service fees, and unlocks exclusive restaurant perks for frequent food orders from local favorites. Perfect for friends, families, or housemates who love takeout. GroupFund makes it easy to split Grubhub+ costs, set up recurring payment schedules, track who's contributed to the current month, and send automatic reminders so everyone pays their fair share of the delivery savings.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Grubhub+?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Split Grubhub+ ($9.99/month) between 3-6 friends/family and save $30-60/month on delivery and service fees across all your food orders.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Delivery Contributions</h3>
                  <p>
                    See who has paid for the current Grubhub+ month and who owes. No more "I paid for Chinese last time" arguments.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Order Reminders</h3>
                  <p>
                    Set your Grubhub+ renewal date and GroupFund sends reminders before $0 delivery perks expire.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Account Coordination</h3>
                  <p>
                    Main account holder confirms payments and coordinates Grubhub+ login sharing or family ordering access transparently.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🔄 Automatic Recurring Billing</h3>
                  <p>
                    With auto-pay enabled (USD, EUR, GBP, CAD, or AUD), set up true recurring subscriptions with automatic monthly billing. Stripe automatically charges members each month without requiring any action - no manual payment needed each billing cycle. Perfect for matching your Grubhub+ billing cycle.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Everyone checks payment status from phones while placing Grubhub orders with $0 delivery fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Grubhub+ Plans You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>Grubhub+ Monthly ($9.99/month):</strong> $0 delivery fees on orders over $12, 5% credit on pickup orders, exclusive perks – perfect for frequent takeout.
                </li>
                <li>
                  <strong>Grubhub+ Annual ($99.99/year):</strong> Same perks for 12 months – maximum value when split across friends/family through GroupFund.
                </li>
                <li>
                  <strong>Any Grubhub Subscription:</strong> Works with monthly/annual renewals covering local restaurants through coordinated sharing.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Grubhub+ with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Grubhub+" as the platform.</li>
                <li>Set your Grubhub+ renewal date for automatic reminders to all members.</li>
                <li>Add payment details where friends/family send their share of the monthly cost.</li>
                <li>
                  Add instructions like "Paid members get Grubhub+ login for $0 delivery fees" or "Weekly ordering rotation with shared account."
                </li>
                <li>Invite friends/housemates using your GroupFund invite code.</li>
                <li><strong>For auto-pay (USD, EUR, GBP, CAD, or AUD):</strong> Members enable auto-pay and Stripe automatically charges them each month - no action required. This creates true recurring subscriptions with automatic monthly billing.</li>
                <li><strong>For manual payments:</strong> Members get reminders 3 days before Grubhub+ expires and mark "Paid" after contributing, and you confirm payments and ensure Grubhub+ stays active for all orders</li>
                <li>Everyone sees real-time payment status for current Grubhub+ coverage.</li>
                <li>Repeat monthly/annually automatically, and with auto-pay, members are charged automatically each billing cycle.</li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common Grubhub+ Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>👥 Friend Group Takeouts</h3>
                  <p>
                    College friends or work buddies share Grubhub+ for pizza nights, wing orders, and late-night Chinese with $0 delivery.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Dinner Deliveries</h3>
                  <p>
                    Parents and teens share Grubhub+ for weeknight meals from local favorites and weekend family feasts.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Housemate Food Rotation</h3>
                  <p>
                    Roommates order burgers, sushi, Mexican, and Thai with waived fees while splitting costs evenly each month.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏃‍♀️ Busy Professional Households</h3>
                  <p>
                    Young professionals share Grubhub+ discounts for office lunches, gym meals, and post-work dinners.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Grubhub+ Costs?</h2>
              <p>
                Start your Grubhub+ group today. Keep $0 delivery fees and exclusive perks active, track payments, send reminders, and split food delivery savings fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Grubhub Group
                </Link>
                <Link to="/group-types/subscription-groups" className="btn btn-secondary btn-large">
                  Learn About Subscription Groups →
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Subscription Services</h3>
              <div className="related-links-grid">
                <Link to="/subscription-groups/postmates-unlimited">Share Postmates Unlimited Costs →</Link>
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
