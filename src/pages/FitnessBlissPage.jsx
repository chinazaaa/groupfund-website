import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function FitnessBlissSubscriptionPage() {
  return (
    <>
      <SEO
        title="Share Fitness Bliss Costs | Group Training Payment Tracking | GroupFund"
        description="Share Fitness Bliss subscription costs with friends and family worldwide. Organize group payments for strength training programs, form checks, and track monthly contributions."
        keywords="fitness bliss group sharing, share fitness bliss cost, fitness bliss group subscription, fitness bliss payment splitting, split fitness bliss, fitness bliss group contributions, strength training cost sharing"
        canonical="https://www.groupfund.app/subscription-groups/fitness-bliss"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🏋️ Share Fitness Bliss Costs</h1>
          <p className="page-subtitle">
            Split Fitness Bliss with workout partners worldwide. Track payments, manage programs, and share strength training + form checks fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Fitness Bliss delivers personalized strength training programs, expert form checks via video analysis, progressive overload tracking, and community challenges for serious lifters worldwide. Perfect for international workout groups, lifting families, or online training partners. GroupFund makes it simple to split Fitness Bliss costs across countries, set up recurring payment schedules, track who's contributed to the current month, and send automatic reminders so everyone maintains access to premium form coaching and strength programs.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Fitness Bliss?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>
                    Split Fitness Bliss ($29.99-$49.99/month) between 2-5 lifting partners worldwide and reduce individual costs to $6-$25/month for expert coaching.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Form Check Contributions</h3>
                  <p>
                    See exactly who paid for this month's video analysis and who owes. No more confusion about program access vs. form feedback.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Program Reminders</h3>
                  <p>
                    Set your Fitness Bliss renewal date and GroupFund sends reminders before strength programs and form checks expire globally.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Coaching Coordination</h3>
                  <p>
                    Main member confirms payments and coordinates form check submissions, program adjustments, and lifting challenges across timezones.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Cycle Scheduling</h3>
                  <p>
                    Match GroupFund to Fitness Bliss 4-week program cycles for seamless recurring strength contributions worldwide.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Video Analysis Friendly</h3>
                  <p>
                    Everyone checks payment status while submitting squat/deadlift form videos for expert feedback during workouts.
                  </p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Fitness Bliss Programs You Can Share</h2>
              <ul className="use-cases-list">
                <li>
                  <strong>Strength Program ($29.99/month):</strong> Personalized lifting plans + weekly form checks – perfect for global gym buddies sharing coaching.
                </li>
                <li>
                  <strong>Powerlifting Package ($49.99/month):</strong> Competition prep, technique analysis, progressive overload – ideal for serious lifters worldwide.
                </li>
                <li>
                  <strong>Any Fitness Bliss Plan:</strong> Works with monthly renewals through GroupFund tracking across international timezones.
                </li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Fitness Bliss with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Fitness Bliss" as the platform.</li>
                <li>Set your program cycle renewal date for automatic global reminders.</li>
                <li>Add payment details where worldwide lifters send their coaching share.</li>
                <li>
                  Add instructions like "Paid members submit weekly squat form videos by Sunday - $10/person for Strength Program".
                </li>
                <li>Invite global workout partners using your GroupFund link or code.</li>
                <li>Members get reminders before form check deadlines and mark "Paid" after contributing.</li>
                <li>You confirm payments and ensure program access + coaching stays active worldwide.</li>
                <li>Everyone sees real-time payment status and shared lifting progress across gyms.</li>
                <li>Repeat monthly automatically matching Fitness Bliss program cycles.
                </li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Common Fitness Bliss Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🌍 Global Lifting Partners</h3>
                  <p>
                    Lifters in different countries share Strength Program coaching and compare squat PRs across timezones.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Remote Powerlifting Teams</h3>
                  <p>
                    Distributed powerlifters worldwide split form analysis costs for competition prep and technique refinement.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Strength Challenge</h3>
                  <p>
                    Parents and teens share Fitness Bliss for family lifting programs with shared form check feedback.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💪 Online Coaching Circles</h3>
                  <p>
                    Fitness influencers' communities worldwide contribute to group coaching packages with collective form analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Fitness Bliss Worldwide?</h2>
              <p>
                Start your global lifting group today. Track strength contributions across timezones, coordinate form checks, send program reminders, and split expert coaching fairly.
              </p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Fitness Bliss Group
                </Link>
                <Link to="/group-types/subscription-groups" className="btn btn-secondary btn-large">
                  Learn About Subscription Groups →
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Subscription Services</h3>
              <div className="related-links-grid">
                <Link to="/subscription-groups/apple-fitness-plus">Share Apple Fitness+ Costs →</Link>
                <Link to="/subscription-groups/la-fitness">Share LA Fitness Costs →</Link>
                <Link to="/subscription-groups/planet-fitness-black-card">Share Planet Fitness Black Card Costs →</Link>
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
