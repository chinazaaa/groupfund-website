import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function JustEatPlusSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Just Eat+ Costs | Group Just Eat Payment Tracking | GroupFund"
        description="Split Just Eat+ subscription costs with GroupFund. Organize group contributions for delivery discounts, track payments, manage deadlines, and share food delivery savings fairly with housemates or family."
        keywords="just eat plus sharing, share just eat+ cost, just eat group subscription, just eat payment splitting, split just eat plus, just eat group contributions, food delivery cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/just-eat-plus"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🍔 Share Just Eat+ Costs</h1>
          <p className="page-subtitle">
            Split Just Eat+ with housemates or family. Track payments, manage orders, and share delivery discounts fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Just Eat+ saves money on delivery fees and offers exclusive restaurant discounts for frequent takeaway orders across the UK. Perfect for busy households, students, or housemates who order from local takeaways regularly. GroupFund makes it easy to split Just Eat+ costs, set up recurring payment schedules, track who's contributed to the current month, and send automatic reminders so everyone pays their fair share of the delivery savings.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Just Eat+?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Split Just Eat+ (£4.99-£9.99/month) between 3-6 housemates and save £15-40/month on delivery fees across all your takeaway orders.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Takeaway Contributions</h3>
                  <p>
                    See who has paid for the current Plus month and who owes. No more "I paid for pizza last time" arguments.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Order Reminders</h3>
                  <p>
                    Set your Plus renewal date and GroupFund sends reminders before it expires so takeaway discounts never lapse.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Account Sharing</h3>
                  <p>
                    Main account holder confirms payments and coordinates login sharing or group ordering access transparently.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Scheduling</h3>
                  <p>
                    Match GroupFund to your Just Eat+ billing cycle for seamless recurring contributions and continuous discounts.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Everyone checks payment status from phones while placing discounted Just Eat orders from local takeaways.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Just Eat+ Plans You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>Just Eat+ Standard (£4.99/month):</strong> Free delivery on orders over £12 from participating takeaways – perfect for frequent small orders.
                </li>
                <li>
                  <strong>Just Eat+ Premium (£9.99/month):</strong> Free delivery from more restaurants, exclusive discounts, priority service – ideal for heavy takeaway households.
                </li>
                <li>
                  <strong>Any Just Eat Subscription:</strong> Works with monthly Plus renewals across UK towns and cities through GroupFund scheduling.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Just Eat+ with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Just Eat+" as the platform.</li>
                <li>Set your Plus renewal date (e.g., 1st of every month) for automatic reminders.</li>
                <li>Add payment details where members send their share of the monthly Plus cost.</li>
                <li>
                  Add instructions like "Paid members get Just Eat+ login for free delivery takeaways" or "Group orders using shared account."
                </li>
                <li>Invite housemates using your GroupFund link or code.</li>
                <li>Members get reminders 3 days before Plus expires and mark "Paid" after contributing.</li>
                <li>You confirm payments and ensure Plus stays active for free deliveries.</li>
                <li>Everyone sees real-time payment status for current Plus coverage.</li>
                <li>Repeat monthly automatically matching Just Eat billing cycle.</li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common Just Eat+ Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏠 Student House Takeaways</h3>
                  <p>
                    Housemates order chip shop, pizza, and Chinese with £0 delivery fees while splitting Plus costs evenly each month.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Friday Nights</h3>
                  <p>
                    Parents and kids share Just Eat+ for weekly fish & chips, curry nights, and weekend takeaways.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💑 Working Couples</h3>
                  <p>
                    Partners split Just Eat+ 50/50 for post-work kebabs, healthy salads, and date night deliveries.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏘️ Suburban Family Meals</h3>
                  <p>
                    Families in towns share Plus discounts for local Indian, pizza, and kebab shop deliveries.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Just Eat+ Costs?</h2>
              <p>
                Start your Just Eat+ group today. Keep delivery fees at £0, track payments, send reminders, and split takeaway savings fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Just Eat Group
                </Link>
                <Link to="/group-types/subscription-groups" className="btn btn-secondary btn-large">
                  Learn About Subscription Groups →
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Subscription Services</h3>
              <div className="related-links-grid">
                <Link to="/subscription-groups/deliveroo-plus">Share Deliveroo Plus Costs →</Link>
                <Link to="/subscription-groups/uber-eats-pass">Share Uber Eats Pass Costs →</Link>
                <Link to="/subscription-groups/hellofresh">Share HelloFresh Costs →</Link>
                <Link to="/subscription-groups/netflix">Share Netflix Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
