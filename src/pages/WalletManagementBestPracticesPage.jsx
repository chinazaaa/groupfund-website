import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function WalletManagementBestPracticesPage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Wallet Management Best Practices - GroupFund",
      "description": "Best practices for managing your GroupFund wallet. Learn how to monitor balance, review transaction history, plan withdrawals, and maintain wallet security.",
      "url": "https://www.groupfund.app/best-practices/wallet-management-best-practices"
    }
    const existingScript = document.querySelector('script[data-wallet-best-practices-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-wallet-best-practices-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-wallet-best-practices-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  return (
    <>
      <SEO
        title="Wallet Management Best Practices - Tips for Managing Your Wallet | GroupFund"
        description="Learn best practices for managing your GroupFund wallet. Tips for monitoring balance, reviewing transaction history, planning withdrawals, maintaining security, and understanding wallet usage rules."
        keywords="wallet management, wallet best practices, wallet balance, transaction history, wallet security, wallet monitoring"
        canonical="https://www.groupfund.app/best-practices/wallet-management-best-practices"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Wallet Management Best Practices</h1>
          <p className="page-subtitle">
            Tips and strategies for effectively managing your wallet balance
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Best Practices</span>
              <span className="resource-read-time">5 min read</span>
            </div>

            <div className="resource-section">
              <h2>Understanding Your Wallet</h2>
              <p>Your wallet is where you receive funds from auto-pay contributions:</p>
              <ul className="resource-list">
                <li><strong>Purpose:</strong> Receive funds and withdraw to bank account</li>
                <li><strong>Currency Support:</strong> Only available for USD, EUR, GBP, CAD, and AUD</li>
                <li><strong>Multi-Currency:</strong> Separate balances for each currency</li>
                <li><strong>Cannot Pay Contributions:</strong> Wallet balance cannot be used to pay contributions (must use debit card)</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Monitoring Your Wallet Balance</h2>
              <ul className="resource-list">
                <li><strong>Check Regularly:</strong> Review your wallet balance periodically</li>
                <li><strong>Monitor Incoming Payments:</strong> Track contributions you receive via auto-pay</li>
                <li><strong>Verify Transactions:</strong> Verify that all expected contributions have been received</li>
                <li><strong>View All Currencies:</strong> Check balances for USD, EUR, GBP, CAD, and AUD separately</li>
                <li><strong>Set Reminders:</strong> Set personal reminders to check your wallet balance</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Reviewing Transaction History</h2>
              <ul className="resource-list">
                <li><strong>Regular Reviews:</strong> Review transaction history regularly for accuracy</li>
                <li><strong>Verify Amounts:</strong> Ensure all received amounts match expected contributions</li>
                <li><strong>Check Dates:</strong> Verify payment dates match expected deadlines</li>
                <li><strong>Review Bank Statements:</strong> Access detailed records and bank statements</li>
                <li><strong>Track Withdrawals:</strong> Monitor withdrawal history and status</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Planning Withdrawals</h2>
              <ul className="resource-list">
                <li><strong>Withdraw Regularly:</strong> Consider withdrawing when balance reaches a comfortable amount</li>
                <li><strong>Plan for 24-Hour Hold:</strong> Remember the 24-hour security hold period</li>
                <li><strong>Understand Fees:</strong> Know withdrawal fees (FREE for GBP/EUR, 1% for USD, CAD, and AUD)</li>
                <li><strong>Minimum Amounts:</strong> Be aware of minimum withdrawal amounts</li>
                <li><strong>Before Account Deletion:</strong> Withdraw all funds before deleting your account</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Wallet Security</h2>
              <ul className="resource-list">
                <li><strong>Monitor Notifications:</strong> Review email notifications for all wallet transactions</li>
                <li><strong>Report Suspicious Activity:</strong> Contact security@groupfund.app if you notice unauthorized transactions</li>
                <li><strong>Secure Account:</strong> Keep your account credentials secure</li>
                <li><strong>Two-Factor Authentication:</strong> Use 2FA for withdrawals and critical actions</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Manage Your Wallet?</h2>
              <p>Follow these best practices to effectively manage your wallet balance and transactions.</p>
              <div className="cta-buttons">
                <Link to="/resources/using-your-wallet" className="btn btn-primary btn-large">Learn About Wallet →</Link>
                <Link to="/resources/withdrawing-funds" className="btn btn-secondary btn-large">Withdrawing Funds →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
