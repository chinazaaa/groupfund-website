import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BokksuSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Bokksu Costs | Group Japanese Snack Payment Tracking | GroupFund"
        description="Share Bokksu subscription costs with friends and family worldwide. Organize group payments for Japanese snacks and tea, and track monthly contributions."
        keywords="bokksu group sharing, share bokksu cost, bokksu japanese snack contributions, split bokksu subscription, bokksu group payments, japanese snack box cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/bokksu"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🍙 Share Bokksu Costs</h1>
          <p className="page-subtitle">
            Split Bokksu Japanese snack boxes with friends, family, or anime fans worldwide. Track payments, manage shipments, and share authentic treats fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Bokksu delivers authentic Japanese snacks, candies, Pocky, KitKats, ramen, and premium teas curated from Japan each month with tasting notes and cultural stories. Perfect for anime fans, sushi lovers, or international snack enthusiasts worldwide. GroupFund makes it simple to split Bokksu costs between friends and family across countries, set up recurring payment schedules, track who's contributed to each Japan box, and send automatic reminders so everyone enjoys their share of exclusive Japanese treats.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Bokksu?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Split a Bokksu box ($49.99/month) between 4-8 Japan snack lovers worldwide and reduce individual costs to $6-$12 per authentic tasting experience.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Japan Snack Contributions</h3>
                  <p>
                    See exactly who paid for this month's matcha KitKats and who owes for next month's exclusive Pocky flavors.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Shipment Reminders</h3>
                  <p>
                    Set your Bokksu ship date and GroupFund sends reminders before each Japan box cutoff so everyone contributes on time globally.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Unboxing Coordination</h3>
                  <p>
                    Main account holder confirms payments and organizes virtual Japan snack tastings across international timezones.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Japan Drop</h3>
                  <p>
                    Match GroupFund to Bokksu's monthly Japan import schedule for seamless global snack adventures from Tokyo.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🌍 Worldwide Payments</h3>
                  <p>
                    Supports PayPal, Wise, crypto for anime fans and snack lovers contributing from anywhere to ship from Japan.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Bokksu Boxes You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>Bokksu Classic ($49.99/month):</strong> 20+ full-size Japanese snacks, candies, teas – perfect for small anime fan groups sharing KitKat exclusives.
                </li>
                <li>
                  <strong>Bokksu Japanese Sake ($89.99/month):</strong> Premium snacks + authentic sake – ideal for larger groups or Japan culture enthusiasts.
                </li>
                <li>
                  <strong>Any Bokksu Plan:</strong> Works with monthly Japan shipments worldwide through GroupFund global coordination.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Bokksu with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Bokksu" as the platform.</li>
                <li>Set your monthly Japan ship date for automatic global reminders to anime fans.</li>
                <li>Add payment account where worldwide members send their Japanese snack share.</li>
                <li>
                  Add instructions like "$10/person for Classic Bokksu - RSVP for Friday Japan unboxing livestream".
                </li>
                <li>Invite global Japan lovers using your GroupFund invite code.</li>
                <li>Members get reminders 7 days before Japan shipment cutoff and mark "Paid" after contributing.</li>
                <li>You confirm payments and finalize Bokksu order for group's exclusive Japanese treats.</li>
                <li>Everyone sees real-time payment status and this month's Japan snack preview worldwide.</li>
                <li>Repeat monthly automatically matching Bokksu's Japan import schedule.
                </li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common Bokksu Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🎌 Anime Fan Discord Communities</h3>
                  <p>
                    Global anime watchers split Bokksu boxes and host monthly Japan snack unboxing streams together.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🌍 International Japan Culture Clubs</h3>
                  <p>
                    Japan enthusiasts worldwide contribute to Bokksu deliveries for virtual cultural tastings and tea ceremonies.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Expat Family Japan Connection</h3>
                  <p>
                    Families abroad share authentic Japanese snacks with kids back home, maintaining cultural ties monthly.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🍵 Remote Work Japan Snack Fridays</h3>
                  <p>
                    Distributed teams worldwide split Bokksu for "Japan Snack Friday" morale boosts with matcha and Pocky.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Bokksu Worldwide?</h2>
              <p>
                Start your global Japan snack group today. Track worldwide contributions, coordinate virtual unboxings, send reminders, and split authentic Japanese treats fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Bokksu Group
                </Link>
                <Link to="/group-types/subscription-groups" className="btn btn-secondary btn-large">
                  Learn About Subscription Groups →
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Subscription Services</h3>
              <div className="related-links-grid">
                <Link to="/subscription-groups/universal-yums">Share Universal Yums Costs →</Link>
                <Link to="/subscription-groups/home-chef">Share Home Chef Costs →</Link>
                <Link to="/subscription-groups/gousto">Share Gousto Costs →</Link>
                <Link to="/subscription-groups/blue-apron">Share Blue Apron Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
