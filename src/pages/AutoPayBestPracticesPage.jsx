import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AutoPayBestPracticesPage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Auto-Pay Best Practices - GroupFund",
      "description": "Best practices for using auto-pay effectively. Learn when to use auto-pay, payment timing strategies, managing failed payments, and tips for successful automatic payments.",
      "url": "https://www.groupfund.app/best-practices/auto-pay-best-practices"
    }
    const existingScript = document.querySelector('script[data-auto-pay-best-practices-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-auto-pay-best-practices-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-auto-pay-best-practices-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  return (
    <>
      <SEO
        title="Auto-Pay Best Practices - Tips for Successful Automatic Payments | GroupFund"
        description="Learn best practices for using auto-pay effectively. Tips for payment timing, managing failed payments, keeping cards updated, and ensuring successful automatic payments. Never miss a contribution deadline."
        keywords="auto-pay best practices, automatic payment tips, payment timing, failed payment handling, auto-pay strategies, payment automation best practices"
        canonical="https://www.groupfund.app/best-practices/auto-pay-best-practices"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Auto-Pay Best Practices</h1>
          <p className="page-subtitle">
            Tips and strategies for successful automatic payments
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Best Practices</span>
              <span className="resource-read-time">6 min read</span>
            </div>

            <div className="resource-section">
              <h2>When to Use Auto-Pay</h2>
              <p>Auto-pay is ideal when:</p>
              <ul className="resource-list">
                <li><strong>You want convenience:</strong> Set it once and never worry about missing payments</li>
                <li><strong>Your group uses USD, EUR, GBP, CAD, or AUD:</strong> Auto-pay is only available for these currencies</li>
                <li><strong>You have a reliable debit card:</strong> Card that's not expiring soon and has sufficient funds</li>
                <li><strong>You're comfortable with fees:</strong> Contributor pays fees (recipient receives full amount)</li>
                <li><strong>You want automatic confirmation:</strong> Payments are confirmed automatically (no manual steps)</li>
                <li><strong>You're in multiple groups:</strong> Auto-pay makes managing multiple contributions effortless</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Payment Timing Best Practices</h2>
              
              <h3>Choose "1 Day Before" (Recommended)</h3>
              <p>Why "1 day before" is recommended:</p>
              <ul className="resource-list">
                <li><strong>Buffer Time:</strong> Gives you a buffer in case of processing delays</li>
                <li><strong>Early Processing:</strong> Payment is processed before the deadline</li>
                <li><strong>Reduces Risk:</strong> Less risk of missing payments due to processing issues</li>
                <li><strong>Better Planning:</strong> Recipient receives funds before the deadline</li>
                <li><strong>Peace of Mind:</strong> Payment is confirmed before the actual deadline</li>
              </ul>

              <h3>When to Use "Same Day"</h3>
              <p>"Same day" can be appropriate when:</p>
              <ul className="resource-list">
                <li>You prefer payment to happen exactly on the deadline</li>
                <li>You want to maximize time before payment</li>
                <li>You're confident your card will process successfully</li>
              </ul>

              <h3>Set a Default Preference</h3>
              <p>Best practice: Set a default payment timing preference in your account settings. This will be used for all new groups unless you specify a different preference per group.</p>
            </div>

            <div className="resource-section">
              <h2>Managing Your Debit Card</h2>
              
              <h3>Keep Card Updated</h3>
              <ul className="resource-list">
                <li><strong>Update Before Expiration:</strong> Update your card before it expires to avoid payment failures</li>
                <li><strong>Monitor Expiration Dates:</strong> Check card expiration dates regularly</li>
                <li><strong>Update Promptly:</strong> When you get a new card, update it in GroupFund immediately</li>
                <li><strong>Email Reminders:</strong> You'll receive email reminders when your card is about to expire</li>
              </ul>

              <h3>Ensure Sufficient Funds</h3>
              <ul className="resource-list">
                <li><strong>Check Balance:</strong> Monitor your bank account balance before payment dates</li>
                <li><strong>Account for Fees:</strong> Remember that fees are added on top of contribution amount</li>
                <li><strong>Plan Ahead:</strong> Ensure you have enough funds to cover contribution + fees</li>
                <li><strong>Set Reminders:</strong> Set personal reminders to check your balance before payment dates</li>
              </ul>

              <h3>Multiple Cards</h3>
              <ul className="resource-list">
                <li><strong>Add Multiple Cards:</strong> You can add multiple debit cards to your account</li>
                <li><strong>Select Per Group:</strong> Choose which card to use for each group</li>
                <li><strong>Backup Card:</strong> Consider adding a backup card in case your primary card fails</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Handling Failed Payments</h2>
              
              <h3>What Happens When Payment Fails</h3>
              <ul className="resource-list">
                <li><strong>Automatic Retry:</strong> System retries once (max 2 attempts total: initial + 1 retry)</li>
                <li><strong>Auto-Disable:</strong> If both attempts fail, auto-pay is automatically disabled</li>
                <li><strong>Email Notification:</strong> You receive an email explaining what happened</li>
                <li><strong>Revert to Manual:</strong> Contributions revert to manual payment</li>
              </ul>

              <h3>Common Failure Reasons</h3>
              <ul className="resource-list">
                <li><strong>Insufficient Funds:</strong> Not enough money in your bank account</li>
                <li><strong>Expired Card:</strong> Card has expired</li>
                <li><strong>Bank Declined:</strong> Bank declined the transaction</li>
                <li><strong>Card Not Found:</strong> Card was removed or invalid</li>
                <li><strong>Network Error:</strong> Temporary processing issue (usually succeeds on retry)</li>
              </ul>

              <h3>How to Fix Failed Payments</h3>
              <ol className="resource-list">
                <li><strong>Check Email:</strong> Read the failure notification email</li>
                <li><strong>Identify Issue:</strong> Determine why payment failed (insufficient funds, expired card, etc.)</li>
                <li><strong>Fix the Issue:</strong>
                  <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                    <li>Add funds to your bank account</li>
                    <li>Update expired card</li>
                    <li>Contact your bank if card was declined</li>
                    <li>Add a new card if card was removed</li>
                  </ul>
                </li>
                <li><strong>Re-enable Auto-Pay:</strong> After fixing the issue, re-enable auto-pay for the group</li>
                <li><strong>Pay Manually:</strong> In the meantime, you can pay manually to avoid missing the deadline</li>
              </ol>
            </div>

            <div className="resource-section">
              <h2>Monitoring Auto-Pay</h2>
              <p>Best practices for monitoring your auto-pay:</p>
              <ul className="resource-list">
                <li><strong>Check Status Regularly:</strong> Review auto-pay status for your groups periodically</li>
                <li><strong>Monitor Notifications:</strong> Pay attention to payment success/failure notifications</li>
                <li><strong>Review Transaction History:</strong> Check your wallet and transaction history to verify payments</li>
                <li><strong>Verify Card Details:</strong> Ensure your card details are current</li>
                <li><strong>Check Email:</strong> Monitor email for auto-pay status updates and failure notifications</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Fee Management</h2>
              <p>Understanding and managing fees:</p>
              <ul className="resource-list">
                <li><strong>Review Fees:</strong> Understand the fee structure before enabling auto-pay</li>
                <li><strong>Calculate Total:</strong> Remember that fees are added on top of contribution amount</li>
                <li><strong>Budget Accordingly:</strong> Account for fees when budgeting for contributions</li>
                <li><strong>Compare to Manual:</strong> Consider if fees are worth the convenience</li>
                <li><strong>Transparent Display:</strong> Fees are always displayed before you confirm</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Starting with Auto-Pay</h2>
              <p>Best practices for getting started:</p>
              <ul className="resource-list">
                <li><strong>Start Small:</strong> Enable auto-pay for one group first to get comfortable</li>
                <li><strong>Test It:</strong> Let it process one payment to see how it works</li>
                <li><strong>Expand Gradually:</strong> Once comfortable, enable auto-pay for more groups</li>
                <li><strong>Set Default Preference:</strong> Set your default payment timing preference</li>
                <li><strong>Keep Manual Option:</strong> Remember you can always disable auto-pay and use manual payments</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Group-Specific Considerations</h2>
              
              <h3>Birthday Groups</h3>
              <ul className="resource-list">
                <li><strong>Individual Birthdays:</strong> Each member's birthday is individual (different dates)</li>
                <li><strong>Annual Payments:</strong> Payments happen once per year when each person's birthday occurs</li>
                <li><strong>Recipient Check:</strong> If birthday person has overdue payments, all auto-payments are skipped</li>
              </ul>

              <h3>Subscription Groups</h3>
              <ul className="resource-list">
                <li><strong>Recurring Payments:</strong> Payments happen recurring on the deadline day</li>
                <li><strong>Monthly/Annual:</strong> Monthly subscriptions charge on deadline day each month, annual charge on deadline day/month each year</li>
                <li><strong>Deadline Changes:</strong> If admin changes deadline, payments use the updated deadline</li>
                <li><strong>Recipient Check:</strong> If admin has overdue payments, all auto-payments are skipped</li>
              </ul>

              <h3>General Groups</h3>
              <ul className="resource-list">
                <li><strong>One-Time Deadline:</strong> Payments happen once - not recurring</li>
                <li><strong>Deadline Must Not Pass:</strong> Cannot enable auto-pay if deadline has passed</li>
                <li><strong>Auto-Disable:</strong> If deadline passes and auto-pay is enabled, it's automatically disabled</li>
                <li><strong>Recipient Check:</strong> If admin has overdue payments, all auto-payments are skipped</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Security Best Practices</h2>
              <ul className="resource-list">
                <li><strong>Two-Factor Authentication:</strong> Always use two-factor authentication (authenticator app) for auto-pay actions</li>
                <li><strong>Secure Cards:</strong> Only add cards from secure devices and networks</li>
                <li><strong>Monitor Notifications:</strong> Review security email notifications for all auto-pay changes</li>
                <li><strong>Report Suspicious Activity:</strong> If you notice unauthorized auto-pay changes, contact security@groupfund.app immediately</li>
                <li><strong>Keep Account Secure:</strong> Use strong passwords and keep your account credentials secure</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Use Auto-Pay?</h2>
              <p>Follow these best practices to ensure successful automatic payments and never miss a contribution deadline.</p>
              <div className="cta-buttons">
                <Link to="/resources/setting-up-auto-pay" className="btn btn-primary btn-large">Set Up Auto-Pay →</Link>
                <Link to="/resources/payment-methods-guide" className="btn btn-secondary btn-large">Payment Methods Guide →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Resources</h3>
              <div className="related-links-grid">
                <Link to="/resources/setting-up-auto-pay">Setting Up Auto-Pay →</Link>
                <Link to="/resources/payment-methods-guide">Payment Methods Guide →</Link>
                <Link to="/resources/using-your-wallet">Using Your Wallet →</Link>
                <Link to="/resources">View All Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
