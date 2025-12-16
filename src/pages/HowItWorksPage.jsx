import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function HowItWorksPage() {
  const steps = [
    {
      number: '1',
      title: 'Sign Up & Verify',
      description: 'Create your account with email or phone number. Verify your account with OTP (One-Time Password) sent to your email. Set up your profile and add your birthday.',
      icon: '🔐'
    },
    {
      number: '2',
      title: 'Create or Join Groups',
      description: 'Create your own group or preview existing groups using invite codes. See member reliability scores and group health metrics before joining to make informed decisions.',
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
      title: 'Track Birthdays & Contributions',
      description: 'View upcoming and past birthdays in the calendar. Members mark contributions as "Paid", then celebrants confirm receipt or reject if not received. Track overdue contributions automatically.',
      icon: '🎂'
    },
    {
      number: '6',
      title: 'Get Smart Notifications',
      description: 'Receive automatic reminders 7 days before, 1 day before, and on the birthday deadline. Get in-app and push notifications for birthdays, overdue contributions, member requests, and confirmations.',
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
      description: 'Every member has a comprehensive reliability score (0-100) based on their contribution history. View detailed metrics: total groups joined, total contributions made, overdue contributions, on-time payment rate, and summary ratings (excellent/good/moderate/poor/new). Make informed decisions when approving new members.',
      icon: '⭐'
    },
    {
      number: '9',
      title: 'Two-Step Contribution Confirmation',
      description: 'Contributions follow a transparent two-step process: members mark contributions as "Paid", then celebrants confirm receipt or reject if not received. Track status in real-time: not_paid → paid (awaiting confirmation) → confirmed or not_received. This ensures accountability and trust in every transaction.',
      icon: '🔄'
    }
  ]

  return (
    <>
      <SEO
        title="How GroupFund Works - Simple Steps to Organize Birthday Contributions"
        description="Learn how GroupFund works in 9 simple steps: sign up & verify, create/join groups with reliability scores, manage members, track contributions, get smart notifications, monitor group health, member reliability scoring, and two-step contribution confirmation. Perfect for families, churches, and groups in Nigeria."
        keywords="how groupfund works, birthday contribution app, group payment tracking, member reliability scores, group health metrics, contribution confirmation, two-step payment process, how to organize birthday contributions, group wallet tutorial, Nigeria"
        canonical="https://groupfund.app/how-it-works"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">How GroupFund Works</h1>
          <p className="page-subtitle">
            Organizing group birthday contributions has never been easier. Follow these simple steps to get started.
          </p>
          <p className="page-subtitle" style={{ fontSize: '1rem', marginTop: '0.5rem', opacity: 0.8 }}>
            From signup to contribution tracking, discover how GroupFund makes group birthday contributions transparent and reliable.
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
            <p>Join hundreds of groups already using GroupFund to organize their birthday contributions.</p>
            <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Free Group</Link>
          </div>
        </div>
      </section>
    </>
  )
}

