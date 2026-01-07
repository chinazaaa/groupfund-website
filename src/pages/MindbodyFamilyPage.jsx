import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function MindbodyFamilySubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Mindbody Family Costs | Group Fitness Payment Tracking | GroupFund"
        description="Share Mindbody family account costs with friends and family worldwide. Organize group payments for gym bookings, classes, and track contributions via shared profiles."
        keywords="mindbody family sharing, share mindbody cost, mindbody group subscription, mindbody payment splitting, split mindbody family, mindbody group contributions, fitness class booking cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/mindbody-family"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🧘 Share Mindbody Family Costs</h1>
          <p className="page-subtitle">
            Split Mindbody family accounts with fitness friends worldwide. Track payments, manage class bookings, and share gym/yoga profiles fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Mindbody powers bookings for 60,000+ gyms, yoga studios, Pilates, spin classes, personal training, and wellness worldwide through shared family accounts. Perfect for international fitness groups, class-loving families, or workout communities. GroupFund makes it simple to split Mindbody family account costs across countries, set up recurring payment schedules, track who's contributed to class bookings, and send automatic reminders so everyone maintains access to premium studio schedules and shared profiles globally.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Mindbody Family?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Split Mindbody family account ($19.99-$49.99/month) between 3-6 fitness friends worldwide and reduce individual class booking costs dramatically.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Class Contributions</h3>
                  <p>
                    See exactly who paid for this month's yoga/Pilates/spin bookings and who owes for next week's studio schedule.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Booking Reminders</h3>
                  <p>
                    Set your Mindbody renewal date and GroupFund sends reminders before class access and studio profiles expire globally.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Profile Coordination</h3>
                  <p>
                    Main account holder confirms payments and manages shared Mindbody profiles, class reservations, and waitlists across studios.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Studio Scheduling</h3>
                  <p>
                    Match GroupFund to Mindbody's monthly billing for seamless class booking contributions worldwide.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 App Integration</h3>
                  <p>
                    Everyone checks payment status while booking hot yoga or HIIT classes through the Mindbody app globally.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Mindbody Family Features You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>Mindbody Family ($19.99-$49.99/month):</strong> Shared profiles for 60,000+ studios worldwide – book yoga, Pilates, barre, spin classes together.
                </li>
                <li>
                  <strong>Multi-Studio Access:</strong> Book classes at any participating gym/studio globally while splitting family account costs.
                </li>
                <li>
                  <strong>Any Mindbody Plan:</strong> Works with monthly family renewals through GroupFund tracking across international studios.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Mindbody Family with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Mindbody Family" as the platform.</li>
                <li>Set your family account renewal date for automatic global reminders.</li>
                <li>Add payment details where worldwide class-goers send their studio share.</li>
                <li>
                  Add instructions like "Paid members get Mindbody profile access for this week's hot yoga + Friday Pilates - book via shared calendar".
                </li>
                <li>Invite global fitness friends using your GroupFund link or code.</li>
                <li>Members get reminders before class booking deadlines and mark "Paid" after contributing.</li>
                <li>You confirm payments and ensure family profiles stay active for studio bookings worldwide.</li>
                <li>Everyone sees real-time payment status and shared class schedules across 60,000+ locations.</li>
                <li>Repeat monthly automatically matching Mindbody family billing.
                </li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common Mindbody Family Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🧘 Global Yoga collectives</h3>
                  <p>
                    International yogis share Mindbody family access for hot yoga, vinyasa, and restorative classes across world studios.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Remote Pilates Partners</h3>
                  <p>
                    Distributed Pilates enthusiasts worldwide split family account for reformer and mat classes through shared profiles.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👯‍♀️ Dance Fitness Families</h3>
                  <p>
                    Families across timezones book Zumba, barre, and dance cardio together while splitting Mindbody costs proportionally.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🚴 Cross-Country Spin Crews</h3>
                  <p>
                    Indoor cycling groups worldwide contribute to family account for studio spin classes and leaderboard competitions.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Mindbody Family Worldwide?</h2>
              <p>
                Start your global fitness class group today. Track studio contributions across 60,000+ locations, coordinate class bookings, send reminders, and split premium profiles fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Mindbody Group
                </Link>
                <Link to="/group-types/subscription-groups" className="btn btn-secondary btn-large">
                  Learn About Subscription Groups →
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Subscription Services</h3>
              <div className="related-links-grid">
                <Link to="/subscription-groups/fitness-bliss">Share Fitness Bliss Costs →</Link>
                <Link to="/subscription-groups/apple-fitness-plus">Share Apple Fitness+ Costs →</Link>
                <Link to="/subscription-groups/la-fitness">Share LA Fitness Costs →</Link>
                <Link to="/subscription-groups/puregym-plus">Share PureGym Plus Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
