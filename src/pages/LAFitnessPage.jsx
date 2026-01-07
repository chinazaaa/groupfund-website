import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function LAFitnessSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share LA Fitness Costs | Group Gym Payment Tracking | GroupFund"
        description="Share LA Fitness subscription costs with friends and family worldwide. Organize group payments for gym access, pools, classes, and track monthly contributions."
        keywords="la fitness group sharing, share la fitness cost, la fitness group subscription, la fitness payment splitting, split la fitness membership, la fitness group contributions, gym membership cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/la-fitness"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🏋️ Share LA Fitness Costs</h1>
          <p className="page-subtitle">
            Split LA Fitness memberships with gym buddies, family, or friends worldwide. Track payments, manage access, and share pools/classes fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                LA Fitness offers full-service gyms with pools, saunas, group fitness classes, basketball courts, racquetball, personal training, and 700+ locations nationwide. Perfect for fitness families, workout groups, or housemates sharing premium amenities. GroupFund makes it simple to split LA Fitness costs worldwide, set up recurring payment schedules, track who's contributed to the current month, and send automatic reminders so everyone maintains gym access, pool time, and class bookings.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share LA Fitness?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Split LA Fitness Signature ($39.99/month) between 2-4 workout partners and reduce individual costs to $10-$20/month for pools, classes, and full gym access.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Amenity Contributions</h3>
                  <p>
                    See exactly who paid for this month's LA Fitness and who owes. No more confusion about pool laps vs. class bookings.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Access Reminders</h3>
                  <p>
                    Set your LA Fitness renewal date and GroupFund sends reminders before membership lapses worldwide.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Facility Coordination</h3>
                  <p>
                    Main member confirms payments and coordinates class bookings, pool lane reservations, and racquetball court times.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Scheduling</h3>
                  <p>
                    Match GroupFund to LA Fitness monthly billing for seamless recurring fitness contributions across 700+ locations.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Everyone checks payment status from phones while booking classes or checking into LA Fitness pools/saunas.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>LA Fitness Memberships You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>LA Fitness Signature ($39.99/month):</strong> Full access to gyms, pools, classes, basketball, racquetball – perfect for groups sharing premium amenities.
                </li>
                <li>
                  <strong>Multi-Club Access:</strong> Use any of 700+ locations nationwide while splitting costs through one primary membership.
                </li>
                <li>
                  <strong>Any LA Fitness Plan:</strong> Works with monthly renewals across US cities through GroupFund flexible tracking.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share LA Fitness with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "LA Fitness" as the platform.</li>
                <li>Set your LA Fitness renewal date for automatic reminders to all members.</li>
                <li>Add payment details where workout partners send their membership share.</li>
                <li>
                  Add instructions like "Paid members get class booking priority + pool lane reservations - share workout selfies!"
                </li>
                <li>Invite gym buddies using your GroupFund invite code.</li>
                <li>Members get reminders 7 days before renewal and mark "Paid" after contributing.</li>
                <li>You confirm payments and ensure LA Fitness stays active for pools/classes.
                </li>
                <li>Everyone sees real-time payment status and shared class schedules across locations.
                </li>
                <li>Repeat monthly automatically matching LA Fitness billing cycle.
                </li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common LA Fitness Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏊 Pool & Class Groups</h3>
                  <p>
                    Fitness friends split Signature membership for daily lap swimming, yoga classes, and sauna sessions together.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Fitness Package</h3>
                  <p>
                    Parents and teens share LA Fitness for family swim lessons, basketball games, and group fitness classes.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏀 Multi-Sport Households</h3>
                  <p>
                    Housemates use racquetball courts, basketball, weights, and pools while splitting premium facility costs.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🌍 Relocating Professionals</h3>
                  <p>
                    Remote workers worldwide contribute to LA Fitness for seamless gym/pool access during US business travel.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share LA Fitness Worldwide?</h2>
              <p>
                Start your LA Fitness group today. Track fitness contributions globally, coordinate class/pool bookings, send reminders, and split premium gym amenities fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your LA Fitness Group
                </Link>
                <Link to="/group-types/subscription-groups" className="btn btn-secondary btn-large">
                  Learn About Subscription Groups →
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Subscription Services</h3>
              <div className="related-links-grid">
                <Link to="/subscription-groups/planet-fitness-black-card">Share Planet Fitness Black Card Costs →</Link>
                <Link to="/subscription-groups/puregym-plus">Share PureGym Plus Costs →</Link>
                <Link to="/subscription-groups/netflix">Share Netflix Costs →</Link>
                <Link to="/subscription-groups/spotify">Share Spotify Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
