import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function HelloFreshSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share HelloFresh Costs | Group Meal Kit Payment Tracking | GroupFund"
        description="Share HelloFresh subscription costs with friends and family. Organize group payments for meal kits, track contributions, and split delivery costs fairly."
        keywords="hellofresh group sharing, share hellofresh cost, hellofresh meal kit contributions, split hellofresh subscription, hellofresh group payments, meal kit cost sharing, hellofresh family plan"
        canonical="https://www.groupfund.app/subscription-groups/hellofresh"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🍽️ Share HelloFresh Costs</h1>
          <p className="page-subtitle">
            Split HelloFresh meal kits with friends, family, or housemates. Track payments, manage orders, and share delivery costs fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                HelloFresh delivers fresh meal kits with easy recipes straight to your door, perfect for busy households that want healthy home cooking without shopping or planning. GroupFund makes it simple to split HelloFresh costs between housemates, family, or friends who share meals. Set up recurring payment schedules, track who's contributed to each box, and send automatic reminders so everyone pays their fair share.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share HelloFresh Costs?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Split a HelloFresh box (£3.99-£6.99 per serving) between 4 housemates and reduce individual meal costs dramatically while getting fresh ingredients delivered.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Box Contributions</h3>
                  <p>
                    See exactly who paid for this week's box and who owes for next week. No more "I thought you were paying" arguments.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Delivery Reminders</h3>
                  <p>
                    Set your HelloFresh delivery date and GroupFund sends reminders before each box ships so everyone contributes on time.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Order Confirmation</h3>
                  <p>
                    The main account holder confirms payments and finalizes the weekly HelloFresh order with everyone's input.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Weekly Scheduling</h3>
                  <p>
                    Match GroupFund to your HelloFresh delivery schedule (weekly, bi-weekly, or paused) for seamless meal planning.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Everyone checks payment status and votes on next week's meals from their phones while ingredients arrive.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>HelloFresh Plans You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>2-6 Meals/Week (2-4 People):</strong> Perfect family or housemate boxes with 3-6.99 per serving – split evenly for maximum savings.
                </li>
                <li>
                  <strong>Vegetarian/Vegan Boxes:</strong> Dietary-specific plans that households with mixed preferences can share and contribute to proportionally.
                </li>
                <li>
                  <strong>Any HelloFresh Plan:</strong> Works with weekly deliveries, pauses, or recipe changes – GroupFund adapts to your meal schedule.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share HelloFresh with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "HelloFresh" as the platform.</li>
                <li>Set your delivery date (e.g., every Wednesday) for automatic reminders.</li>
                <li>Add your payment account where members send their share of the box cost.</li>
                <li>
                  Add instructions like "£20/person for 4-person box with 3 meals - vote on recipes in group chat".
                </li>
                <li>Invite housemates/family using your GroupFund link or code.</li>
                <li>Members get reminders 2 days before delivery cutoff and mark "Paid" after contributing.</li>
                <li>You confirm payments and place the HelloFresh order with selected recipes.</li>
                <li>Everyone sees real-time payment status for the upcoming box.</li>
                <li>Repeat weekly (or bi-weekly) automatically matching your delivery cadence.</li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common HelloFresh Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏠 Housemate Meal Rotation</h3>
                  <p>
                    4 roommates rotate who picks recipes each week while splitting box costs evenly through GroupFund tracking.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Dinner Planning</h3>
                  <p>
                    Parents and teens vote on family-friendly meals while contributing proportionally to the HelloFresh box.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💑 Couples Cooking Together</h3>
                  <p>
                    Partners split 2-person HelloFresh boxes 50/50 and alternate recipe selection each week.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏃‍♀️ Busy Professional Households</h3>
                  <p>
                    Working housemates share meal prep convenience without grocery shopping or takeout expense.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share HelloFresh Costs?</h2>
              <p>
                Start your HelloFresh group today. Coordinate meal votes, track payments, send reminders, and split meal kit delivery fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your HelloFresh Group
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
