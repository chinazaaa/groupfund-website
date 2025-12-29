import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function DeliverooPlusSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Deliveroo Plus Costs | Group Deliveroo Payment Tracking | GroupFund"
        description="Split Deliveroo Plus subscription costs with GroupFund. Organize group contributions for delivery discounts, track payments, manage deadlines, and share food delivery savings fairly with housemates or family."
        keywords="deliveroo plus sharing, share deliveroo plus cost, deliveroo group subscription, deliveroo payment splitting, split deliveroo plus, deliveroo group contributions, food delivery cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/deliveroo-plus"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🍕 Share Deliveroo Plus Costs</h1>
          <p className="page-subtitle">
            Split Deliveroo Plus with housemates or family. Track payments, manage orders, and share delivery discounts fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Deliveroo Plus saves money on delivery fees and offers exclusive restaurant discounts for frequent food delivery orders across the UK. Perfect for busy households, students, or housemates who love takeaways. GroupFund makes it easy to split Deliveroo Plus costs, set up recurring payment schedules, track who's contributed to the current month, and send automatic reminders so everyone pays their fair share of the delivery savings.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Deliveroo Plus?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Split Deliveroo Plus (£3.49-£8.99/month) between 3-6 housemates and save £20-50/month on delivery fees across all your takeaway orders.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Delivery Contributions</h3>
                  <p>
                    See who has paid for the current Plus month and who owes. No more "Who's paying Deliveroo this week?" confusion.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Order Reminders</h3>
                  <p>
                    Set your Plus renewal date and GroupFund sends reminders before it expires so delivery discounts never lapse.
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
                    Match GroupFund to your Deliveroo Plus billing cycle for seamless recurring contributions and continuous discounts.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Everyone checks payment status from phones while placing discounted Deliveroo orders anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Deliveroo Plus Plans You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>Deliveroo Plus Standard (£3.49/month):</strong> Free delivery on orders over £15 from 100+ restaurants – perfect for frequent small orders.
                </li>
                <li>
                  <strong>Deliveroo Plus Premium (£8.99/month):</strong> Free delivery from 300+ restaurants, priority dispatch, exclusive discounts – ideal for heavy delivery households.
                </li>
                <li>
                  <strong>Any Deliveroo Subscription:</strong> Works with monthly Plus renewals across UK cities through GroupFund scheduling.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Deliveroo Plus with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Deliveroo Plus" as the platform.</li>
                <li>Set your Plus renewal date (e.g., 15th of every month) for automatic reminders.</li>
                <li>Add payment details where members send their share of the monthly Plus cost.</li>
                <li>
                  Add instructions like "Paid members get Deliveroo Plus login for free delivery orders" or "Use shared account for group takeaways."
                </li>
                <li>Invite housemates using your GroupFund link or code.</li>
                <li>Members get reminders 3 days before Plus expires and mark "Paid" after contributing.</li>
                <li>You confirm payments and ensure Plus stays active for free deliveries.</li>
                <li>Everyone sees real-time payment status for current Plus coverage.</li>
                <li>Repeat monthly automatically matching Deliveroo billing cycle.</li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common Deliveroo Plus Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏠 Student Flat Takeaways</h3>
                  <p>
                    Housemates order pizza, curry, and kebabs with £0 delivery fees while splitting Plus costs evenly each month.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Dinner Deliveries</h3>
                  <p>
                    Parents and kids share Deliveroo Plus for weeknight meals and weekend treats with proportional contributions.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💑 Working Couples</h3>
                  <p>
                    Partners split Deliveroo Plus Premium 50/50 for healthy salads, date night sushi, and post-gym meals.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏃‍♀️ City Professionals</h3>
                  <p>
                    Flatmates in London/Manchester share Plus discounts for office lunches, gym meals, and evening takeaways.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Deliveroo Plus Costs?</h2>
              <p>
                Start your Deliveroo Plus group today. Keep delivery fees at £0, track payments, send reminders, and split food delivery savings fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Deliveroo Group
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
                <Link to="/subscription-groups/hellofresh">Share HelloFresh Costs →</Link>
                <Link to="/subscription-groups/netflix">Share Netflix Costs →</Link>
                <Link to="/subscription-groups/amazon-prime">Share Amazon Prime Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
