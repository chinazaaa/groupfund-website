import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function WithdrawingFundsPage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Withdrawing Funds - GroupFund",
      "description": "Complete guide to withdrawing funds from your GroupFund wallet to your bank account. Learn about withdrawal fees, 24-hour security hold, and the withdrawal process.",
      "url": "https://www.groupfund.app/resources/withdrawing-funds"
    }
    const existingScript = document.querySelector('script[data-withdrawal-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-withdrawal-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-withdrawal-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  return (
    <>
      <SEO
        title="Withdrawing Funds - Complete Guide | GroupFund"
        description="Learn how to withdraw funds from your GroupFund wallet to your bank account. Complete guide to withdrawal process, fees (FREE for GBP/EUR, 1% for USD), 24-hour security hold, and tracking withdrawal requests."
        keywords="withdraw funds, withdrawal guide, wallet withdrawal, bank withdrawal, withdrawal fees, withdraw money groupfund, bank transfer withdrawal"
        canonical="https://www.groupfund.app/resources/withdrawing-funds"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Withdrawing Funds</h1>
          <p className="page-subtitle">
            Complete guide to withdrawing funds from your wallet to your bank account
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Getting Started</span>
              <span className="resource-read-time">5 min read</span>
            </div>

            <div className="resource-section">
              <h2>What is Withdrawal?</h2>
              <p>
                Withdrawal is the process of transferring funds from your GroupFund wallet to your bank account. Once you receive contributions in your wallet (from auto-pay), you can withdraw the funds to your bank account at any time.
              </p>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '6px' }}>
                <strong>Important:</strong> Withdrawals are only available for wallet balances in USD (US Dollar), EUR (Euro), GBP (British Pound), CAD (Canadian Dollar), or AUD (Australian Dollar). If your group uses a different currency, withdrawals are not available.
              </p>
            </div>

            <div className="resource-section">
              <h2>Requirements for Withdrawal</h2>
              <p>Before you can withdraw funds, you need:</p>
              <ul className="resource-list">
                <li><strong>Wallet Balance:</strong> You must have funds in your wallet (from auto-pay contributions)</li>
                <li><strong>Valid Bank Account:</strong> You must have valid bank account details in your profile</li>
                <li><strong>Supported Currency:</strong> Wallet balance must be in USD, EUR, GBP, CAD, or AUD</li>
                <li><strong>Minimum Amount:</strong> Minimum withdrawal amounts apply:
                  <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                    <li>USD: $10</li>
                    <li>EUR: €10</li>
                    <li>GBP: £10</li>
                    <li>CAD: C$10</li>
                    <li>AUD: A$10</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step-by-Step: Withdrawing Funds</h2>
              
              <p>Withdrawals require two-factor authentication for security. Here's the complete process:</p>
              <ol className="resource-list">
                <li>Go to your wallet section</li>
                <li>Click "Withdraw Funds" or "Withdraw"</li>
                <li>Enter your password</li>
                <li>Select the currency (USD, EUR, GBP, CAD, or AUD)</li>
                <li>Enter the withdrawal amount (must be less than or equal to your wallet balance)</li>
                <li>Enter the 6-digit authenticator code from your authenticator app (Google Authenticator, Authy, Microsoft Authenticator, or similar)</li>
                <li>Review your bank account details (displayed for confirmation)</li>
                <li>Review withdrawal fees (displayed transparently)</li>
                <li>Confirm withdrawal request</li>
              </ol>

              <h3>After Submitting: 24-Hour Security Hold</h3>
              <p>After submitting your withdrawal request:</p>
              <ul className="resource-list">
                <li><strong>Status:</strong> Withdrawal is marked as "Pending" (24-hour security hold period)</li>
                <li><strong>Email Notification:</strong> You receive an email notification:
                  <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                    <li>Subject: "Withdrawal Request Received"</li>
                    <li>Includes: Amount, currency, bank account details, security warning</li>
                    <li>If you didn't request it, contact security@groupfund.app immediately</li>
                  </ul>
                </li>
                <li><strong>Processing:</strong> Funds will be sent to your bank account within 24 hours</li>
              </ul>

              <h3>Funds Sent</h3>
              <p>After the 24-hour hold period:</p>
              <ul className="resource-list">
                <li><strong>Processing:</strong> Withdrawal is processed via Stripe Payouts API</li>
                <li><strong>Status Update:</strong> Status changes to "Processing" then "Completed"</li>
                <li><strong>Notification:</strong> You receive email notification when funds are sent</li>
                <li><strong>Bank Account:</strong> Money arrives in your bank account (usually within 1-3 business days)</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Withdrawal Fees</h2>
              <p>Withdrawal fees vary by currency:</p>
              
              <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', backgroundColor: '#d1fae5', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                  <h3 style={{ marginTop: '0', color: '#065f46' }}>GBP (British Pound)</h3>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#065f46', margin: '0.5rem 0' }}>FREE</p>
                  <p style={{ color: '#065f46', margin: '0' }}>No withdrawal fee</p>
                </div>
                <div style={{ padding: '1.5rem', backgroundColor: '#d1fae5', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                  <h3 style={{ marginTop: '0', color: '#065f46' }}>EUR (Euro)</h3>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#065f46', margin: '0.5rem 0' }}>FREE</p>
                  <p style={{ color: '#065f46', margin: '0' }}>No withdrawal fee</p>
                </div>
                <div style={{ padding: '1.5rem', backgroundColor: '#fee2e2', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                  <h3 style={{ marginTop: '0', color: '#991b1b' }}>USD (US Dollar)</h3>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#991b1b', margin: '0.5rem 0' }}>1% Fee</p>
                  <p style={{ color: '#991b1b', margin: '0' }}>Example: $100 withdrawal = $1.00 fee</p>
                </div>
                <div style={{ padding: '1.5rem', backgroundColor: '#fee2e2', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                  <h3 style={{ marginTop: '0', color: '#991b1b' }}>CAD (Canadian Dollar)</h3>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#991b1b', margin: '0.5rem 0' }}>1% Fee</p>
                  <p style={{ color: '#991b1b', margin: '0' }}>Example: $100 CAD withdrawal = $1.00 CAD fee</p>
                </div>
                <div style={{ padding: '1.5rem', backgroundColor: '#fee2e2', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                  <h3 style={{ marginTop: '0', color: '#991b1b' }}>AUD (Australian Dollar)</h3>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#991b1b', margin: '0.5rem 0' }}>1% Fee</p>
                  <p style={{ color: '#991b1b', margin: '0' }}>Example: $100 AUD withdrawal = $1.00 AUD fee</p>
                </div>
              </div>

              <p style={{ marginTop: '1.5rem' }}>
                <strong>Fee Display:</strong> All fees are displayed transparently before you confirm a withdrawal. You'll see exactly how much you'll receive after fees.
              </p>
            </div>

            <div className="resource-section">
              <h2>Minimum Withdrawal Amounts</h2>
              <p>Minimum withdrawal amounts apply for each supported currency:</p>
              
              <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                  <h3 style={{ marginTop: '0', color: '#1e40af' }}>USD (US Dollar)</h3>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e40af', margin: '0.5rem 0' }}>$10</p>
                </div>
                <div style={{ padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                  <h3 style={{ marginTop: '0', color: '#1e40af' }}>EUR (Euro)</h3>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e40af', margin: '0.5rem 0' }}>€10</p>
                </div>
                <div style={{ padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                  <h3 style={{ marginTop: '0', color: '#1e40af' }}>GBP (British Pound)</h3>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e40af', margin: '0.5rem 0' }}>£10</p>
                </div>
                <div style={{ padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                  <h3 style={{ marginTop: '0', color: '#1e40af' }}>CAD (Canadian Dollar)</h3>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e40af', margin: '0.5rem 0' }}>C$10</p>
                </div>
                <div style={{ padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                  <h3 style={{ marginTop: '0', color: '#1e40af' }}>AUD (Australian Dollar)</h3>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e40af', margin: '0.5rem 0' }}>A$10</p>
                </div>
              </div>

              <p style={{ marginTop: '1.5rem' }}>
                <strong>Note:</strong> You cannot withdraw amounts below these minimums. If your wallet balance is below the minimum for a currency, you'll need to accumulate more funds before withdrawing.
              </p>
            </div>

            <div className="resource-section">
              <h2>24-Hour Security Hold Period</h2>
              <p>All withdrawal requests are subject to a 24-hour security hold period:</p>
              <ul className="resource-list">
                <li><strong>Purpose:</strong> Fraud prevention - gives you time to detect and report unauthorized withdrawal requests</li>
                <li><strong>Duration:</strong> 24 hours from the time you submit the withdrawal request</li>
                <li><strong>Status:</strong> Withdrawal shows as "Pending" during this period</li>
                <li><strong>Processing:</strong> Funds are sent to your bank account within 24 hours after your request</li>
                <li><strong>Email Notification:</strong> You receive an email when withdrawal is requested</li>
                <li><strong>Security Warning:</strong> Email includes warning: "If you didn't make this withdrawal, contact security@groupfund.app immediately"</li>
              </ul>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '6px' }}>
                <strong>Why 24 Hours?</strong> This security measure helps prevent fraudulent withdrawals. If someone gains unauthorized access to your account, you have 24 hours to detect and report the withdrawal before funds are sent.
              </p>
            </div>

            <div className="resource-section">
              <h2>Tracking Withdrawal Requests</h2>
              <p>You can track all your withdrawal requests:</p>
              <ul className="resource-list">
                <li><strong>Withdrawal History:</strong> View all withdrawal requests in your wallet section</li>
                <li><strong>Status Tracking:</strong> See status of each withdrawal:
                  <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                    <li><strong>Pending:</strong> 24-hour security hold period</li>
                    <li><strong>Processing:</strong> Being sent to your bank account</li>
                    <li><strong>Completed:</strong> Successfully sent to your bank account</li>
                    <li><strong>Failed:</strong> Withdrawal failed (you'll be notified)</li>
                  </ul>
                </li>
                <li><strong>Details:</strong> View amount, currency, fees, bank account, date, and status for each withdrawal</li>
                <li><strong>Notifications:</strong> Receive email notifications for withdrawal status updates</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Bank Account Requirements</h2>
              <p>Your bank account details are used for withdrawals:</p>
              <ul className="resource-list">
                <li><strong>Stored Securely:</strong> Bank account details are stored securely in our system</li>
                <li><strong>Used for Withdrawals:</strong> We use your stored bank account details to process withdrawals via Stripe Payouts API</li>
                <li><strong>Displayed for Manual Payments:</strong> Bank details are also displayed to group members for manual payments</li>
                <li><strong>Cannot Remove:</strong> If you're a member of any active group, you cannot remove your bank account details (must leave all groups first)</li>
                <li><strong>Can Update:</strong> You can always update/edit your bank details (change bank name, account number, etc.)</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Withdrawal Limits</h2>
              <p>Withdrawal limits help ensure smooth processing:</p>
              <ul className="resource-list">
                <li><strong>Minimum Amount:</strong> Typically $10 (USD), €10 (EUR), £10 (GBP) minimum</li>
                <li><strong>Maximum Amount:</strong> Generally no strict maximum (let payment processors handle fraud detection)</li>
                <li><strong>Balance Limit:</strong> You can only withdraw up to your current wallet balance</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Failed Withdrawals</h2>
              <p>If a withdrawal fails:</p>
              <ul className="resource-list">
                <li><strong>Notification:</strong> You'll receive an email notification explaining the failure</li>
                <li><strong>Status Update:</strong> Withdrawal status changes to "Failed"</li>
                <li><strong>Funds Returned:</strong> Funds remain in your wallet (not deducted)</li>
                <li><strong>Common Reasons:</strong> Invalid bank account details, bank account closed, processing error</li>
                <li><strong>Resolution:</strong> Update your bank account details and try again</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Best Practices for Withdrawals</h2>
              <ul className="resource-list">
                <li><strong>Monitor Your Wallet:</strong> Check your wallet balance regularly</li>
                <li><strong>Withdraw Regularly:</strong> Consider withdrawing when your balance reaches a comfortable amount</li>
                <li><strong>Plan Ahead:</strong> Remember the 24-hour hold period when planning withdrawals</li>
                <li><strong>Keep Bank Details Updated:</strong> Ensure your bank account details are current</li>
                <li><strong>Review Fees:</strong> Understand withdrawal fees before requesting (FREE for GBP/EUR, 1% for USD, CAD, and AUD)</li>
                <li><strong>Check Email:</strong> Monitor email notifications for withdrawal status updates</li>
                <li><strong>Report Issues:</strong> If you notice unauthorized withdrawal requests, contact security@groupfund.app immediately</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Security & Two-Factor Authentication</h2>
              <p>Withdrawals require two-factor authentication for security:</p>
              <ul className="resource-list">
                <li><strong>Password Verification:</strong> Enter your password first</li>
                <li><strong>Authenticator App Code:</strong> Enter 6-digit code from your authenticator app (Google Authenticator, Authy, Microsoft Authenticator, or similar)</li>
                <li><strong>Note:</strong> Withdrawals use authenticator app codes only. Email OTP is only used for account signup and password resets, not for withdrawals.</li>
                <li><strong>Security Email:</strong> You receive email notification when withdrawal is requested</li>
                <li><strong>24-Hour Hold:</strong> Additional security measure to prevent fraud</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Withdraw Funds?</h2>
              <p>Withdraw your wallet balance to your bank account anytime. Track all withdrawal requests and history in your wallet.</p>
              <div className="cta-buttons">
                <Link to="/resources/using-your-wallet" className="btn btn-primary btn-large">Learn About Wallet →</Link>
                <Link to="/resources/setting-up-auto-pay" className="btn btn-secondary btn-large">Set Up Auto-Pay →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/using-your-wallet">Using Your Wallet →</Link>
                <Link to="/resources/setting-up-auto-pay">Setting Up Auto-Pay →</Link>
                <Link to="/resources/payment-methods-guide">Payment Methods Guide →</Link>
                <Link to="/resources">View All Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
