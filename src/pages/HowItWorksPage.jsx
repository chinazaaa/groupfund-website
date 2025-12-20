import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function HowItWorksPage() {
  const steps = [
    {
      number: '1',
      title: 'Sign Up & Verify',
      description: 'Create your account with email. Verify your account with OTP (One-Time Password) sent to your email.',
      icon: '🔐'
    },
    {
      number: '2',
      title: 'Choose Group Type & Create or Discover',
      description: 'Create Birthday Groups (for birthdays), Subscription Groups (for shared subscriptions like Netflix, Spotify), or General Groups (for weddings, events, any purpose). Preview existing groups using invite codes and see member reliability scores before joining. For subscription groups, you can also search for and discover public groups by platform name or group name, and see health metrics before joining.',
      icon: '👥'
    },
    {
      number: '3',
      title: 'Set Amount & Currency',
      description: 'Choose a fixed contribution amount per person (e.g., ₦5,000) and select your preferred currency (NGN, USD, GBP, EUR, etc.). Set maximum group size to calculate total commitment.',
      icon: '💰'
    },
    {
      number: '4',
      title: 'Manage Members',
      description: 'Approve or reject member requests based on their reliability scores. View member metrics: total groups joined, contributions made, on-time payment rates, and reliability ratings.',
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
        description="Learn how GroupFund works in 9 simple steps: sign up & verify, create/join/discover groups with reliability scores, manage members, track contributions, get smart notifications, monitor group health, member reliability scoring, and two-step contribution confirmation. Perfect for birthdays, subscriptions, and any group purpose."
        keywords="how groupfund works, group contribution app, birthday groups, subscription groups, general groups, group payment tracking, member reliability scores, group health metrics, contribution confirmation, two-step payment process, how to organize group contributions, group wallet tutorial"
        canonical="https://groupfund.app/how-it-works"
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

          <div className="cta-box">
            <h2>Ready to Get Started?</h2>
            <p>Join hundreds of groups already using GroupFund to organize their contributions for birthdays, subscriptions, and events.</p>
            <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Free Group</Link>
          </div>
        </div>
      </section>
    </>
  )
}

