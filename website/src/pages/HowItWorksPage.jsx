import React from 'react'
import SEO from '../components/SEO'
import '../App.css'

export default function HowItWorksPage() {
  const steps = [
    {
      number: '1',
      title: 'Create Your Group',
      description: 'Start by creating a group and giving it a name. You can create groups for your family, church, school, or any friend circle.',
      icon: '👥'
    },
    {
      number: '2',
      title: 'Add Members',
      description: 'Invite members to your group by adding their names and contact information. You can add as many members as your group allows.',
      icon: '➕'
    },
    {
      number: '3',
      title: 'Set Amount & Currency',
      description: 'Choose a fixed contribution amount per person (e.g., ₦5,000) and select your preferred currency (NGN, USD, GBP, EUR, etc.).',
      icon: '💰'
    },
    {
      number: '4',
      title: 'Add Birthdays',
      description: 'Add birthday dates for each member. The app will automatically track upcoming birthdays and calculate contribution deadlines.',
      icon: '🎂'
    },
    {
      number: '5',
      title: 'Track Payments',
      description: 'Monitor payment statuses in real-time. See who has paid (Paid/Confirmed) and who still needs to contribute (Not Paid).',
      icon: '📊'
    },
    {
      number: '6',
      title: 'Get Automatic Reminders',
      description: 'Receive automatic reminders 7 days before each birthday and on the deadline day. Get helpful recaps showing payment progress.',
      icon: '🔔'
    }
  ]

  return (
    <>
      <SEO
        title="How GroupWallet Works - Simple Steps to Organize Birthday Contributions"
        description="Learn how GroupWallet works in 6 simple steps: create group, add members, set amount/currency, track payments, get reminders. Perfect for families, churches, and groups in Nigeria."
        keywords="how groupfund works, birthday contribution app, group payment tracking, how to organize birthday contributions, group wallet tutorial, Nigeria"
        canonical="https://groupfund.app/how-it-works"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">How GroupWallet Works</h1>
          <p className="page-subtitle">
            Organizing group birthday contributions has never been easier. Follow these simple steps to get started.
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
            <p>Join hundreds of groups already using GroupWallet to organize their birthday contributions.</p>
            <a href="#download" className="btn btn-primary btn-large">Start Your Free Group</a>
          </div>
        </div>
      </section>
    </>
  )
}

