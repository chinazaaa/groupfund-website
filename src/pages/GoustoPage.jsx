import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function GoustoSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Gousto Costs | Group Meal Kit Payment Tracking | GroupFund"
        description="Share Gousto subscription costs with friends and family worldwide. Organize group payments for fresh meal kits and track monthly contributions."
        keywords="gousto group sharing, share gousto cost, gousto meal kit contributions, split gousto subscription, gousto group payments, meal kit cost sharing, gousto family plan"
        canonical="https://www.groupfund.app/subscription-groups/gousto"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🍲 Share Gousto Costs</h1>
          <p className="page-subtitle">
            Split Gousto meal kits with friends, family, or housemates worldwide. Track payments, manage orders, and share delivery costs fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Gousto delivers fresh recipe boxes with pre-portioned ingredients and step-by-step recipe cards straight to your door worldwide. Perfect for busy households, international families, or housemates who want healthy home cooking without grocery shopping. GroupFund makes it simple to split Gousto costs between friends and family across countries, set up recurring payment schedules, track who's contributed to each box, and send automatic reminders so everyone pays their fair share.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Gousto Costs?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Split a Gousto box (£4.99-£7.50 per serving) between 4 housemates or family members and reduce individual meal costs while getting fresh ingredients delivered worldwide.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Box Contributions</h3>
                  <p>
                    See exactly who paid for this week's Gousto box and who owes for next week, even across different countries and timezones.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Delivery Reminders</h3>
                  <p>
                    Set your Gousto delivery date and GroupFund sends reminders before each box ships so everyone contributes on time, worldwide.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Order Confirmation</h3>
                  <p>
                    The main account holder confirms payments and finalizes the weekly Gousto order with input from international group members.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Weekly Scheduling</h3>
                  <p>
                    Match GroupFund to your Gousto delivery schedule (weekly, bi-weekly, or paused) for seamless global meal planning.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🌍 Worldwide Payments</h3>
                  <p>
                    Supports international bank transfers, Wise, PayPal, and local payment methods for friends/family across different countries.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Gousto Plans You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>2-6 Meals/Week (2-6 People):</strong> Perfect family or housemate boxes with £4.99-£7.50 per serving – split evenly for maximum international savings.
                </li>
                <li>
                  <strong>Vegetarian/Vegan/Family Boxes:</strong> Dietary-specific plans that global households with mixed preferences can share and contribute to proportionally.
                </li>
                <li>
                  <strong>Any Gousto Plan:</strong> Works with weekly deliveries, pauses, or recipe changes across worldwide delivery zones through GroupFund.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Gousto with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Gousto" as the platform.</li>
                <li>Set your delivery date (e.g., every Thursday) for automatic global reminders.</li>
                <li>Add your payment account where international members send their box share via bank transfer/Wise/PayPal.</li>
                <li>
                  Add instructions like "£25/person for 4-person box with 4 meals - vote on recipes in group chat across timezones".
                </li>
                <li>Invite worldwide friends/family using your GroupFund link or code.</li>
                <li>Members get reminders 2 days before delivery cutoff and mark "Paid" after contributing.</li>
                <li>You confirm payments and place the Gousto order with selected international-friendly recipes.</li>
                <li>Everyone sees real-time payment status for the upcoming box, regardless of location.</li>
                <li>Repeat weekly automatically matching your global delivery cadence.</li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common Gousto Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🌍 International Family Meals</h3>
                  <p>
                    Family members across UK, Europe, and beyond contribute to weekly Gousto boxes delivered to the main household.
                  </p>
                </div>
                <div className="group-type-item">
                  <h3>🏠 Expat Housemate Groups</h3>
                  <p>
                    International students or expat flatmates split Gousto costs using Wise transfers while sharing home-cooked meals.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Global Family Dinners</h3>
                  <p>
                    Parents abroad contribute to kids' weekly Gousto boxes back home, with transparent GroupFund tracking.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💼 Remote Work Households</h3>
                  <p>
                    Digital nomads and remote workers worldwide share Gousto delivery costs for the main household base.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Gousto Costs Worldwide?</h2>
              <p>
                Start your international Gousto group today. Coordinate global meal votes, track cross-border payments, send reminders, and split fresh recipe boxes fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Gousto Group
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
                <Link to="/subscription-groups/spotify">Share Spotify Costs →</Link>
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
