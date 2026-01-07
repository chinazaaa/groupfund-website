import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function HomeChefSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Home Chef Costs | Group Meal Kit Payment Tracking | GroupFund"
        description="Share Home Chef subscription costs with friends and family worldwide. Organize group payments for customizable meal kits and track contributions."
        keywords="home chef group sharing, share home chef cost, home chef meal kit contributions, split home chef subscription, home chef group payments, customizable meal kit cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/home-chef"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">👨‍🍳 Share Home Chef Costs</h1>
          <p className="page-subtitle">
            Split Home Chef customizable meal kits with friends, family, or housemates worldwide. Track payments, manage orders, and share delivery costs fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Home Chef offers fully customizable meal kits with mix-and-match proteins, premium ingredients, and chef-inspired recipes delivered worldwide. Perfect for diverse households, international families, or housemates who want personalized healthy meals without grocery planning. GroupFund makes it simple to split Home Chef costs between friends and family across countries, set up recurring payment schedules, track who's contributed to each customizable box, and send automatic reminders so everyone pays their fair share of premium meal delivery.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Home Chef Costs?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Split a Home Chef box ($9.95-$12.95 per serving) between 4 housemates or family members and reduce gourmet customizable meal costs worldwide.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Custom Contributions</h3>
                  <p>
                    See exactly who paid for this week's chicken/veggie/salmon box and who owes for next week's personalized selections.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Delivery Reminders</h3>
                  <p>
                    Set your Home Chef delivery date and GroupFund sends reminders before each customizable box cutoff so everyone contributes globally.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Order Customization</h3>
                  <p>
                    Main account holder confirms payments and lets group vote on proteins/add-ons before finalizing weekly Home Chef orders.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Flexible Scheduling</h3>
                  <p>
                    Match GroupFund to Home Chef's customizable delivery (2-6 meals/week, any day) for seamless international meal planning.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🌍 Worldwide Payments</h3>
                  <p>
                    Supports Wise, PayPal, international transfers for global households customizing premium meal kits together.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Home Chef Plans You Can Share</h2>
              <ul class="use-cases-list">
                <li>
                  <strong>2-6 Meals/Week (2 People): $9.95/serving</strong> Fully customizable proteins/sides – perfect for couples or small groups worldwide.
                </li>
                <li>
                  <strong>4 Meals/Week (4 People): $9.95/serving</strong> Family boxes with mix-and-match options for diverse dietary preferences globally.
                </li>
                <li>
                  <strong>Premium/Family Boxes:</strong> Oven-ready, 15-minute meals, calorie-smart – ideal for busy international households sharing costs.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Home Chef with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Home Chef" as the platform.</li>
                <li>Set your delivery date (any day Home Chef delivers) for automatic global reminders.</li>
                <li>Add payment account where international members send their customizable box share.</li>
                <li>
                  Add instructions like "$25/person for 4-person box - vote: chicken/shrimp/tofu + veggie/salad sides by Friday".
                </li>
                <li>Invite worldwide foodies using your GroupFund invite code.</li>
                <li>Members vote on customizations and get reminders before delivery cutoff, mark "Paid" after contributing.</li>
                <li>You confirm payments and finalize Home Chef order with group's protein/side selections.</li>
                <li>Everyone sees real-time payment status and final menu across timezones.</li>
                <li>Repeat weekly automatically matching your personalized delivery cadence.</li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common Home Chef Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🌍 Global Custom Meal Families</h3>
                  <p>
                    Family members worldwide contribute to customizable Home Chef boxes with everyone's protein preferences included.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Dietary Diverse Households</h3>
                  <p>
                    Housemates with different needs (keto/vegan/gluten-free) customize one box together while splitting costs via Wise.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 International Family Meals</h3>
                  <p>
                    Parents abroad fund kids' personalized Home Chef boxes with family recipe voting across continents.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💼 Remote Work Food Teams</h3>
                  <p>
                    Distributed colleagues share Home Chef lunch boxes with customizable proteins for virtual team meals.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Home Chef Worldwide?</h2>
              <p>
                Start your international Home Chef group today. Customize global menus, track cross-border payments, vote on proteins, and split premium meal kits fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Home Chef Group
                </Link>
                <Link to="/group-types/subscription-groups" className="btn btn-secondary btn-large">
                  Learn About Subscription Groups →
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Subscription Services</h3>
              <div className="related-links-grid">
                <Link to="/subscription-groups/blue-apron">Share Blue Apron Costs →</Link>
                <Link to="/subscription-groups/gousto">Share Gousto Costs →</Link>
                  <Link to="/subscription-groups/hello-fresh">Share HelloFresh Costs →</Link>
                <Link to="/subscription-groups/universal-yums">Share Universal Yums Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
