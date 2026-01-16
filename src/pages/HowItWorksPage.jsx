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
      "url": "https://www.groupfund.app/how-it-works"
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
      description: 'Approve or reject member requests based on their reliability scores. View member metrics: total groups joined, contributions made, on-time payment rates, reliability ratings and number of reports. Promote trusted members to co-admin to help manage large groups.',
      icon: '✅'
    },
    {
      number: '5',
      title: 'Enable Auto-Pay or Make Manual Payments',
      description: 'For groups using USD, EUR, or GBP: Enable auto-pay to have your debit card automatically charged on payment dates. Choose "1 day before" or "same day" timing. Payments are processed securely via Stripe and automatically confirmed. For other currencies or if you prefer: Make manual payments outside the app and mark as "Paid". Recipients confirm receipt for manual payments. Note: For birthday contributions, only the celebrant can confirm/reject, not admins or co-admins.',
      icon: '💳'
    },
    {
      number: '6',
      title: 'Track Contributions & Deadlines',
      description: 'For Birthday Groups: View upcoming and past birthdays in the calendar. Create and share birthday wishlists. For Subscription Groups: Track monthly or annual subscription deadlines. For General Groups: Track event deadlines. Auto-pay payments are automatically confirmed. Manual payments require confirmation from admins/co-admins (Subscription/General Groups) or celebrants (Birthday Groups). Track overdue contributions automatically.',
      icon: '📅'
    },
    {
      number: '7',
      title: 'Get Smart Notifications',
      description: 'Receive automatic reminders before deadlines (7 days, 1 day, same day for birthdays; before subscription deadlines; before event deadlines). Get in-app and push notifications for contributions, overdue payments, member requests, confirmations, auto-pay status, and withdrawal updates.',
      icon: '🔔'
    },
    {
      number: '8',
      title: 'Receive Funds in Wallet & Withdraw',
      description: 'When others contribute to you via auto-pay, funds are credited to your in-app wallet balance. Wallet is only available for USD, EUR, and GBP. You can withdraw funds from your wallet to your bank account at any time. Withdrawals have a 24-hour security hold period. Withdrawal fees: FREE for GBP and EUR, 1% for USD. View complete transaction history and bank statements in the app.',
      icon: '💼'
    },
    {
      number: '9',
      title: 'Monitor Group Health',
      description: 'Track group compliance metrics and health ratings. See how well your group maintains contribution standards. Pause/resume accepting members or close/reopen groups as needed.',
      icon: '📈'
    },
    {
      number: '10',
      title: 'Member Reliability Scoring',
      description: 'Every member has a reliability score (0-100) based on their contribution history. View metrics like on-time payment rates and summary ratings to make informed decisions when approving new members.',
      icon: '⭐'
    },
    {
      number: '11',
      title: 'Payment Confirmation',
      description: 'Auto-pay payments are automatically confirmed after successful processing by Stripe. Manual payments require two-step confirmation: members mark contributions as "Paid", then admins/co-admins (for Subscription/General Groups) or celebrants (for Birthday Groups) confirm receipt or reject if not received. Note: For birthday contributions, only the celebrant can confirm/reject, not admins or co-admins. Track status in real-time for full transparency.',
      icon: '🔄'
    },
    {
      number: '12',
      title: 'Group Chat & Communication',
      description: 'Enable optional per-group chat when creating or editing groups (disabled by default). Mention members with @username, get smart notifications for mentions or all messages, and customize your notification preferences. Only active members can participate in chat.',
      icon: '💬'
    }
  ]

  return (
    <>
      <SEO
        title="How GroupFund Works - Simple Steps to Organize Group Contributions"
        description="Learn how GroupFund works in 10 simple steps: sign up & verify, create/join groups with reliability scores, manage members, track contributions, get smart notifications, monitor group health, member reliability scoring, two-step contribution confirmation, and per-group chat. Perfect for birthdays, subscriptions, and any group purpose."
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
              <h2 className="payment-flow-title">How Payments Work</h2>
              
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#6366f1' }}>Automatic Payments (Auto-Pay)</h3>
                <div className="payment-flow-container">
                  <div className="payment-step">
                    <div className="payment-step-number">1</div>
                    <div className="payment-step-icon">💳</div>
                    <h3 className="payment-step-title">Enable Auto-Pay</h3>
                    <p className="payment-step-description">
                      Add debit card and enable auto-pay for groups using USD, EUR, or GBP. Choose payment timing: "1 day before" or "same day".
                    </p>
                  </div>

                  <div className="payment-flow-arrow">
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 5L50 30L30 55M50 30H10" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  <div className="payment-step">
                    <div className="payment-step-number">2</div>
                    <div className="payment-step-icon">⚡</div>
                    <h3 className="payment-step-title">Automatic Charge</h3>
                    <p className="payment-step-description">
                      Your debit card is automatically charged on the payment date (birthday, subscription deadline, or event deadline). Processed securely via Stripe.
                    </p>
                  </div>

                  <div className="payment-flow-arrow">
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 5L50 30L30 55M50 30H10" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  <div className="payment-step">
                    <div className="payment-step-number">3</div>
                    <div className="payment-step-icon">💼</div>
                    <h3 className="payment-step-title">Funds in Wallet</h3>
                    <p className="payment-step-description">
                      Money is automatically credited to recipient's wallet balance. Payment is automatically confirmed. Recipient can withdraw to bank account.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#6366f1' }}>Manual Payments</h3>
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
                      Admin/co-admin (Subscription/General Groups) or celebrant (Birthday Groups) confirms receipt or marks as "Not Received" for transparency. Note: For birthday contributions, only the celebrant can confirm/reject.
                    </p>
                  </div>
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
            <Link to="/get-started" className="btn btn-primary btn-large">Start Your Free Group</Link>
            </div>
        </div>
      </section>
    </>
  )
}

