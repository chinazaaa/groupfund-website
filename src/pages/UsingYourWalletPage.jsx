import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function UsingYourWalletPage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Using Your Wallet - GroupFund",
      "description": "Complete guide to using GroupFund's in-app wallet system. Learn how to receive funds, view balance, check transaction history, and understand wallet usage rules.",
      "url": "https://www.groupfund.app/resources/using-your-wallet"
    }
    const existingScript = document.querySelector('script[data-wallet-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-wallet-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-wallet-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  return (
    <>
      <SEO
        title="Using Your Wallet - Complete Guide | GroupFund"
        description="Learn how to use GroupFund's in-app wallet system. Complete guide to receiving funds, viewing balance, checking transaction history, understanding wallet usage rules, and withdrawing funds."
        keywords="groupfund wallet, in-app wallet, wallet balance, receive funds, wallet system, wallet guide, transaction history, wallet balance"
        canonical="https://www.groupfund.app/resources/using-your-wallet"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Using Your Wallet</h1>
          <p className="page-subtitle">
            Complete guide to GroupFund's in-app wallet system
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
              <h2>What is the Wallet System?</h2>
              <p>
                GroupFund's wallet is an in-app balance where you receive funds when others contribute to you via auto-pay. Think of it as your GroupFund account balance - money that's been credited to you and is ready to withdraw to your bank account.
              </p>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '6px' }}>
                <strong>Important:</strong> Wallet is only available for groups using USD (US Dollar), EUR (Euro), GBP (British Pound), CAD (Canadian Dollar), or AUD (Australian Dollar). If your group uses a different currency (like NGN), the wallet system is not available, but you can still receive manual payments.
              </p>
            </div>

            <div className="resource-section">
              <h2>How Funds Enter Your Wallet</h2>
              <p>Money is automatically credited to your wallet when:</p>
              <ul className="resource-list">
                <li><strong>Others contribute via auto-pay:</strong> When group members use auto-pay to contribute to you, funds are automatically credited to your wallet balance</li>
                <li><strong>Automatic processing:</strong> After Stripe successfully processes the payment, money is immediately added to your wallet</li>
                <li><strong>Auto-confirmation:</strong> Payments are automatically confirmed (no manual confirmation needed for auto-pay)</li>
              </ul>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#fff3cd', borderRadius: '6px' }}>
                <strong>Note:</strong> Manual payments (payments made outside the app) do NOT go into your wallet. Manual payments are tracked separately and require recipient confirmation.
              </p>
            </div>

            <div className="resource-section">
              <h2>Viewing Your Wallet Balance</h2>
              <p>You can view your wallet balance and transaction history:</p>
              <ol className="resource-list">
                <li>Go to your account or wallet section in the app</li>
                <li>View your current wallet balance (displayed in your group's currency)</li>
                <li>See all incoming payments from auto-pay contributions</li>
                <li>View transaction history with details:
                  <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                    <li>Date and time of each transaction</li>
                    <li>Amount received</li>
                    <li>Group name and contributor</li>
                    <li>Transaction type (auto-pay contribution)</li>
                    <li>Status (confirmed automatically)</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="resource-section">
              <h2>Wallet Usage Rules (Critical)</h2>
              <p>It's important to understand what you can and cannot do with your wallet balance:</p>
              
              <div style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#d1fae5', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                <h3 style={{ marginTop: '0', color: '#065f46' }}>✅ What Wallet CAN Be Used For</h3>
                <ul style={{ marginLeft: '1.5rem', color: '#065f46' }}>
                  <li><strong>Receiving money:</strong> Funds are credited to your wallet when others contribute via auto-pay</li>
                  <li><strong>Withdrawing money:</strong> You can withdraw funds from your wallet to your bank account at any time</li>
                </ul>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#fee2e2', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                <h3 style={{ marginTop: '0', color: '#991b1b' }}>❌ What Wallet CANNOT Be Used For</h3>
                <ul style={{ marginLeft: '1.5rem', color: '#991b1b' }}>
                  <li><strong>Paying contributions:</strong> You cannot use wallet balance to pay contributions</li>
                  <li><strong>Any payments:</strong> All contributions must be paid using debit cards via Stripe</li>
                </ul>
              </div>

              <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fff3cd', borderRadius: '6px' }}>
                <strong>💡 Why?</strong> All contributions must go through payment processors (Stripe) for security, fee collection, and tracking. Wallet balance is only for receiving and withdrawing funds. To make contributions, you must use a debit card (either via auto-pay or manual payment outside the app).
              </p>
            </div>

            <div className="resource-section">
              <h2>Multi-Currency Wallet Balances</h2>
              <p>Your wallet can hold balances in multiple currencies:</p>
              <ul className="resource-list">
                <li><strong>Separate Balances:</strong> You have separate wallet balances for USD, EUR, GBP, CAD, and AUD</li>
                <li><strong>Currency-Specific:</strong> Funds received in USD go to your USD wallet, EUR funds go to EUR wallet, CAD funds go to CAD wallet, etc.</li>
                <li><strong>View All Balances:</strong> You can see all your wallet balances in one place</li>
                <li><strong>Withdraw Separately:</strong> You withdraw from each currency balance separately</li>
              </ul>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '6px' }}>
                <strong>Example:</strong> If you're in a USD group and receive $50, it goes to your USD wallet. If you're also in a EUR group and receive €40, it goes to your EUR wallet. If you're in a CAD group and receive $50 CAD, it goes to your CAD wallet. You can withdraw from each balance separately.
              </p>
            </div>

            <div className="resource-section">
              <h2>Transaction History & Bank Statements</h2>
              <p>You can view complete transaction history:</p>
              <ul className="resource-list">
                <li><strong>All Contributions:</strong> See all auto-pay contributions you've received</li>
                <li><strong>Withdrawal History:</strong> View all withdrawal requests and their status</li>
                <li><strong>Fees:</strong> See fees charged for auto-pay contributions (contributor pays, you receive full amount)</li>
                <li><strong>Payment Confirmations:</strong> All auto-pay payments are automatically confirmed</li>
                <li><strong>Detailed Records:</strong> Access detailed transaction records and bank statements for all your financial activity</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                <strong>Export:</strong> Export functionality for detailed reports is coming soon. For now, you can view all transaction history and bank statements in the app.
              </p>
            </div>

            <div className="resource-section">
              <h2>Monitoring Your Wallet</h2>
              <p>Best practices for managing your wallet:</p>
              <ul className="resource-list">
                <li><strong>Check Regularly:</strong> Review your wallet balance and transaction history regularly</li>
                <li><strong>Monitor Incoming Payments:</strong> Keep track of contributions you receive via auto-pay</li>
                <li><strong>Verify Transactions:</strong> Verify that all expected contributions have been received</li>
                <li><strong>Plan Withdrawals:</strong> Consider withdrawing funds when your balance reaches a comfortable amount</li>
                <li><strong>Review Statements:</strong> Review transaction history and bank statements for accuracy</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Wallet Security</h2>
              <p>Your wallet is secure:</p>
              <ul className="resource-list">
                <li><strong>Encrypted Storage:</strong> Wallet balances are stored securely and encrypted</li>
                <li><strong>Secure Processing:</strong> All payments are processed via Stripe (PCI-DSS compliant)</li>
                <li><strong>Withdrawal Protection:</strong> Withdrawals require two-factor authentication and have a 24-hour security hold</li>
                <li><strong>Transaction Monitoring:</strong> All transactions are logged and monitored</li>
                <li><strong>Email Notifications:</strong> You receive email notifications for all wallet transactions</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Account Deletion with Wallet Balance</h2>
              <p>Important restriction:</p>
              <ul className="resource-list">
                <li><strong>Cannot Delete with Balance:</strong> You cannot delete your account if you have a wallet balance greater than zero</li>
                <li><strong>Must Withdraw First:</strong> You must withdraw all funds from your wallet before deleting your account</li>
                <li><strong>Error Message:</strong> If you try to delete with a balance, you'll see: "Cannot delete account. Please withdraw all funds ({amount} {currency_symbol} remaining) before deleting your account."</li>
              </ul>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#fef2f2', borderRadius: '6px' }}>
                <strong>Why?</strong> This prevents you from losing your money. You must withdraw all funds first, then you can delete your account.
              </p>
            </div>

            <div className="cta-box">
              <h2>Ready to Use Your Wallet?</h2>
              <p>Start receiving contributions in your wallet and withdraw funds when you're ready.</p>
              <div className="cta-buttons">
                <Link to="/resources/withdrawing-funds" className="btn btn-primary btn-large">Learn About Withdrawals →</Link>
                <Link to="/resources/setting-up-auto-pay" className="btn btn-secondary btn-large">Set Up Auto-Pay →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/withdrawing-funds">Withdrawing Funds →</Link>
                <Link to="/resources/setting-up-auto-pay">Setting Up Auto-Pay →</Link>
                <Link to="/resources/payment-methods-guide">Payment Methods Guide →</Link>
                <Link to="/best-practices/wallet-management-best-practices">Wallet Management Best Practices →</Link>
                <Link to="/resources">View All Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
