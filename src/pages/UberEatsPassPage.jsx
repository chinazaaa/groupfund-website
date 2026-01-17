import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function UberEatsPassSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Uber Eats Pass Costs | Group Uber Eats Payment Tracking | GroupFund"
        description="Split Uber Eats Pass subscription costs with GroupFund. Organize group contributions for delivery discounts, track payments, manage deadlines, and share food delivery savings fairly with housemates or family."
        keywords="uber eats pass sharing, share uber eats pass cost, uber eats group subscription, uber eats payment splitting, split uber eats pass, uber eats group contributions, food delivery cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/uber-eats-pass"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🍔 Share Uber Eats Pass Costs</h1>
          <p className="page-subtitle">
            Split Uber Eats Pass with housemates or family. Track payments, manage orders, and share delivery discounts fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Uber Eats Pass saves money on delivery fees, service fees, and restaurant discounts for frequent food delivery orders. Perfect for busy households or housemates who order takeaways regularly. GroupFund makes it easy to split Uber Eats Pass costs, set up recurring payment schedules, track who's contributed to the current month, and send automatic reminders so everyone pays their fair share of the delivery savings.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Uber Eats Pass?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Split Uber Eats Pass (£4.99-£9.99/month) between 3-5 housemates and reduce individual delivery costs by 50-80% on every order.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Delivery Contributions</h3>
                  <p>
                    See who has paid for the current Pass month and who owes. No more "I thought you were covering Uber Eats this month."
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Order Reminders</h3>
                  <p>
                    Set your Pass renewal date and GroupFund sends reminders before it expires so everyone contributes before discounts end.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Account Sharing</h3>
                  <p>
                    Main account holder confirms payments and coordinates login sharing or group ordering access transparently.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🔄 Automatic Recurring Billing</h3>
                  <p>
                    With auto-pay enabled (USD, EUR, GBP, CAD, or AUD), set up true recurring subscriptions with automatic monthly billing. Stripe automatically charges members each month without requiring any action - no manual payment needed each billing cycle. Perfect for matching your Uber Eats Pass billing cycle.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Everyone checks payment status from phones while placing discounted Uber Eats orders anytime.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Uber Eats Pass Plans You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>Uber Eats Pass (£4.99/month):</strong> £0 delivery fees on orders over £15, 5-10% off restaurant bills – perfect for frequent small orders.
                </li>
                <li>
                  <strong>Uber One (£9.99/month):</strong> Higher discounts, free delivery on more restaurants, priority support – ideal for heavy delivery households.
                </li>
                <li>
                  <strong>Any Uber Eats Subscription:</strong> Works with monthly Pass renewals in your local currency through GroupFund scheduling.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Uber Eats Pass with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Uber Eats Pass" as the platform.</li>
                <li>Set your Pass renewal date (e.g., 1st of every month) for automatic reminders.</li>
                <li>Add payment details where members send their share of the monthly Pass cost.</li>
                <li>
                  Add instructions like "Paid members get Uber Eats Pass login for discounted orders" or "Group orders using shared account."
                </li>
                <li>Invite housemates using your GroupFund invite code.</li>
                <li><strong>For auto-pay (USD, EUR, GBP, CAD, or AUD):</strong> Members enable auto-pay and Stripe automatically charges them each month - no action required. This creates true recurring subscriptions with automatic monthly billing.</li>
                <li><strong>For manual payments:</strong> Members get reminders 3 days before Pass expires and mark "Paid" after contributing, and you confirm payments and ensure Pass stays active for discounted deliveries</li>
                <li>Everyone sees real-time payment status for current Pass coverage.</li>
                <li>Repeat monthly automatically, and with auto-pay, members are charged automatically each billing cycle.</li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common Uber Eats Pass Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏠 Student House Takeaways</h3>
                  <p>
                    Housemates order late-night takeaways with £0 delivery fees while splitting Pass costs evenly each month.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Dinner Deliveries</h3>
                  <p>
                    Parents and teens share Uber Eats Pass for school night dinners and weekend takeaways with proportional contributions.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💑 Working Couples</h3>
                  <p>
                    Partners split Uber One 50/50 for weekday dinners and date night deliveries without delivery fee arguments.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏃‍♀️ Busy Professional Flat</h3>
                  <p>
                    Young professionals share Pass discounts for healthy salads, gym meals, and office lunches delivered daily.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Uber Eats Pass Costs?</h2>
              <p>
                Start your Uber Eats Pass group today. Keep delivery discounts active, track payments, send reminders, and split food delivery savings fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Uber Eats Group
                </Link>
                <Link to="/group-types/subscription-groups" className="btn btn-secondary btn-large">
                  Learn About Subscription Groups →
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Subscription Services</h3>
              <div className="related-links-grid">
                  <Link to="/subscription-groups/hello-fresh">Share HelloFresh Costs →</Link>
                <Link to="/subscription-groups/netflix">Share Netflix Costs →</Link>
                <Link to="/subscription-groups/amazon-prime">Share Amazon Prime Costs →</Link>
                <Link to="/subscription-groups/canva-pro">Share Canva Pro Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
