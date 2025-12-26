import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function HowItWorksPage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "How It Works - GroupFund",
      "description": "Learn how GroupFund works to organize group contributions for birthdays, subscriptions, and events. Simple steps to get started.",
      "url": "https://groupfund.app/how-it-works"
    }
    const existingScript = document.querySelector('script[data-how-it-works-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-how-it-works-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-how-it-works-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])
  const steps = [
    {
      number: '1',
      title: 'Sign Up & Verify',
      description: 'Create your account with email. Verify your account with OTP (One-Time Password) sent to your email.',
      icon: '🔐'
    },
    {
      number: '2',
      title: 'Choose Group Type & Create',
      description: 'Create Birthday Groups, Subscription Groups (Netflix, Spotify, etc.), or General Groups (weddings, events). Preview groups using invite codes to see reliability scores. ⚠️ Verify admin identity before joining - only join groups with people you trust.',
      icon: '👥'
    },
    {
      number: '3',
      title: 'Set Amount & Currency',
      description: 'Choose a fixed contribution amount per person (e.g., 5,000) and select your preferred currency (NGN, USD, GBP, EUR, etc.). Set maximum group size to calculate total commitment.',
      icon: '💰'
    },
    {
      number: '4',
      title: 'Manage Members',
      description: 'Approve or reject member requests based on their reliability scores. View member metrics: total groups joined, contributions made, on-time payment rates, reliability ratings and number of reports.',
      icon: '✅'
    },
    {
      number: '5',
      title: 'Track Contributions & Deadlines',
      description: 'For Birthday Groups: View upcoming and past birthdays in the calendar. Create and share birthday wishlists. For Subscription Groups: Track monthly or annual subscription deadlines. For General Groups: Track event deadlines. Members mark contributions as "Paid", then admins/celebrants confirm receipt or reject if not received. Track overdue contributions automatically.',
      icon: '📅'
    },
    {
      number: '6',
      title: 'Get Smart Notifications',
      description: 'Receive automatic reminders before deadlines (7 days, 1 day, same day for birthdays; before subscription deadlines; before event deadlines). Get in-app and push notifications for contributions, overdue payments, member requests, and confirmations.',
      icon: '🔔'
    },
    {
      number: '7',
      title: 'Monitor Group Health',
      description: 'Track group compliance metrics and health ratings. See how well your group maintains contribution standards. Pause/resume accepting members or close/reopen groups as needed.',
      icon: '📈'
    },
    {
      number: '8',
      title: 'Member Reliability Scoring',
      description: 'Every member has a reliability score (0-100) based on their contribution history. View metrics like on-time payment rates and summary ratings to make informed decisions when approving new members.',
      icon: '⭐'
    },
    {
      number: '9',
      title: 'Two-Step Contribution Confirmation',
      description: 'Members mark contributions as "Paid", then celebrants confirm receipt or reject if not received. Track status in real-time from not paid to confirmed or not received for full transparency.',
      icon: '🔄'
    }
  ]

  return (
    <>
      <SEO
        title="How GroupFund Works - Simple Steps to Organize Group Contributions"
        description="Learn how GroupFund works in 9 simple steps: sign up & verify, create/join groups with reliability scores, manage members, track contributions, get smart notifications, monitor group health, member reliability scoring, and two-step contribution confirmation. Perfect for birthdays, subscriptions, and any group purpose."
        keywords="how groupfund works, group contribution app, birthday groups, subscription groups, general groups, group payment tracking, member reliability scores, group health metrics, contribution confirmation, two-step payment process, how to organize group contributions, group wallet tutorial"
        canonical="https://www.groupfund.app/how-it-works"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">How GroupFund Works</h1>
          <p className="page-subtitle">
            Organizing group contributions has never been easier. Follow these simple steps to get started.
          </p>
          <p className="page-subtitle" style={{ fontSize: '1rem', marginTop: '0.5rem', opacity: 0.8 }}>
            From signup to contribution tracking, discover how GroupFund makes group contributions transparent and reliable for birthdays, subscriptions, and any purpose.
          </p>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h2 className="step-title">{step.title}</h2>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Payment Flow Visual Section */}
          <div className="payment-flow-section">
            <div className="container">
              <h2 className="payment-flow-title">How External Payments Work</h2>
              
              <div className="payment-flow-container">
                <div className="payment-step">
                  <div className="payment-step-number">1</div>
                  <div className="payment-step-icon">💸</div>
                  <h3 className="payment-step-title">Make Payment</h3>
                  <p className="payment-step-description">
                    Transfer money externally (bank, mobile money, cash) to the celebrant or admin.
                  </p>
                </div>

                <div className="payment-flow-arrow">
                  <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 5L50 30L30 55M50 30H10" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="payment-step">
                  <div className="payment-step-number">2</div>
                  <div className="payment-step-icon">✅</div>
                  <h3 className="payment-step-title">Mark as Paid</h3>
                  <p className="payment-step-description">
                    Open GroupFund and mark your payment as "Paid" in the app.
                  </p>
                </div>

                <div className="payment-flow-arrow">
                  <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 5L50 30L30 55M50 30H10" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="payment-step">
                  <div className="payment-step-number">3</div>
                  <div className="payment-step-icon">✔️</div>
                  <h3 className="payment-step-title">Get Confirmed</h3>
                  <p className="payment-step-description">
                    Recipient confirms receipt or marks as "Not Received" for transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-box">
            <h2>Ready to Get Started?</h2>
            <p>Join hundreds of groups already using GroupFund to organize their contributions for birthdays, subscriptions, and events.</p>
            <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', borderRadius: '4px', fontSize: '0.9rem' }}>
              <strong>⚠️ Important Warning:</strong> Please verify the identity of the group admin before joining. GroupFund is not liable for any fraudulent activities or financial losses. Only join groups with people you trust.
            </p>
            <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Free Group</Link>
          </div>
        </div>
      </section>
    </>
  )
}

