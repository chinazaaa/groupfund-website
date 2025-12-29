import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AppleFitnessPlusSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Apple Fitness+ Costs | Group Workout Payment Tracking | GroupFund"
        description="Share Apple Fitness+ subscription costs with family worldwide. Organize group payments for guided workouts, yoga, HIIT, and track contributions."
        keywords="apple fitness+ family sharing, share apple fitness cost, fitness+ group subscription, apple fitness payment splitting, split fitness+, fitness+ group contributions, workout app cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/apple-fitness-plus"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">💪 Share Apple Fitness+ Costs</h1>
          <p className="page-subtitle">
            Split Apple Fitness+ with family worldwide. Track payments, manage workouts, and share guided yoga, HIIT, and classes fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Apple Fitness+ delivers thousands of guided workouts including yoga, HIIT, strength training, meditation, cycling, and dance classes optimized for Apple Watch with trainer progress tracking. Perfect for international fitness families using Family Sharing. GroupFund makes it simple to split Apple Fitness+ costs worldwide, set up recurring payment schedules, track who's contributed to the current month, and send automatic reminders so everyone maintains access to premium guided workouts across timezones.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Apple Fitness+?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Split Apple Fitness+ ($9.99/month) between 2-6 family members worldwide and reduce individual costs to $1.67-$5/month for unlimited guided workouts.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Workout Contributions</h3>
                  <p>
                    See exactly who paid for this month's Fitness+ and who owes. No more confusion about yoga vs. HIIT class access.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Class Reminders</h3>
                  <p>
                    Set your Fitness+ renewal date and GroupFund sends reminders before guided workout access expires globally.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Family Sharing Coordination</h3>
                  <p>
                    Family organizer confirms payments and maintains Apple Family Sharing for seamless Fitness+ access worldwide.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Scheduling</h3>
                  <p>
                    Match GroupFund to Apple Fitness+ monthly billing for seamless recurring workout contributions across countries.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Apple Watch Integration</h3>
                  <p>
                    Everyone checks payment status while tracking real-time workout metrics during guided HIIT and yoga sessions.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Apple Fitness+ Features You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>Apple Fitness+ ($9.99/month):</strong> 7,000+ guided workouts (yoga, HIIT, strength, meditation) via Family Sharing – perfect for global fitness families.
                </li>
                <li>
                  <strong>Apple One Bundle:</strong> Fitness+ + Music + TV+ + Arcade – split comprehensive Apple services through Family Sharing worldwide.
                </li>
                <li>
                  <strong>Any Apple Fitness Plan:</strong> Works with monthly renewals through Family Sharing and GroupFund tracking globally.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Apple Fitness+ with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Apple Fitness+" as the platform.</li>
                <li>Set your Fitness+ renewal date for automatic global family reminders.</li>
                <li>Add payment details where worldwide family sends their $9.99 share.</li>
                <li>
                  Add instructions like "Paid family members stay in Apple Family Sharing for Fitness+ yoga/HIIT access - share workout rings!"
                </li>
                <li>Invite global family using your GroupFund link or code.</li>
                <li>Members get reminders 5 days before renewal and mark "Paid" after contributing.</li>
                <li>You confirm payments and ensure Family Sharing keeps Fitness+ active worldwide.</li>
                <li>Everyone sees real-time payment status and shared workout progress across timezones.</li>
                <li>Repeat monthly automatically matching Apple billing cycle.
                </li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common Apple Fitness+ Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Global Family Fitness Challenges</h3>
                  <p>
                    Parents abroad and kids at home share Fitness+ for daily yoga rings and weekly HIIT challenges across continents.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Remote Work Wellness Groups</h3>
                  <p>
                    Distributed colleagues worldwide split Fitness+ for morning meditation and lunch break strength sessions.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🧘‍♀️ International Yoga Families</h3>
                  <p>
                    Families across timezones follow the same Fitness+ yoga flows while sharing progress screenshots daily.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🚴 Cross-Country Cycling Crew</h3>
                  <p>
                    Cycling enthusiasts worldwide contribute to Fitness+ for virtual studio cycling classes and leaderboard competition.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Apple Fitness+ Worldwide?</h2>
              <p>
                Start your global fitness family group today. Track workout contributions across timezones, maintain Family Sharing, send reminders, and split guided classes fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Fitness+ Group
                </Link>
                <Link to="/group-types/subscription-groups" className="btn btn-secondary btn-large">
                  Learn About Subscription Groups →
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Subscription Services</h3>
              <div className="related-links-grid">
                <Link to="/subscription-groups/la-fitness">Share LA Fitness Costs →</Link>
                <Link to="/subscription-groups/planet-fitness-black-card">Share Planet Fitness Black Card Costs →</Link>
                <Link to="/subscription-groups/puregym-plus">Share PureGym Plus Costs →</Link>
                <Link to="/subscription-groups/apple-music">Share Apple Music Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
