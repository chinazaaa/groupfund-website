import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SettingUpAutoPayPage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Setting Up Auto-Pay - GroupFund",
      "description": "Complete guide to setting up automatic payments (auto-pay) in GroupFund. Learn how to enable auto-pay, choose payment timing, and never miss a contribution deadline.",
      "url": "https://www.groupfund.app/resources/setting-up-auto-pay"
    }
    const existingScript = document.querySelector('script[data-auto-pay-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-auto-pay-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-auto-pay-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  return (
    <>
      <SEO
        title="Setting Up Auto-Pay - Complete Guide | GroupFund"
        description="Learn how to set up automatic payments (auto-pay) in GroupFund. Step-by-step guide to enabling auto-pay, choosing payment timing (1 day before or same day), and managing your automatic payments. Never miss a contribution deadline again."
        keywords="setting up auto-pay, automatic payments, auto-pay setup, enable auto-pay, payment automation, automatic contribution payments, groupfund auto-pay guide"
        canonical="https://www.groupfund.app/resources/setting-up-auto-pay"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Setting Up Auto-Pay</h1>
          <p className="page-subtitle">
            Complete guide to enabling automatic payments and never missing a contribution deadline
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Getting Started</span>
              <span className="resource-read-time">6 min read</span>
            </div>

            <div className="resource-section">
              <h2>What is Auto-Pay?</h2>
              <p>
                Auto-pay is GroupFund's automatic payment feature that charges your debit card automatically on payment dates (birthdays, subscription deadlines, or event deadlines). Once enabled, you never have to remember to pay - your card is charged automatically, and payments are confirmed instantly.
              </p>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '6px' }}>
                <strong>Benefits:</strong> Never miss a payment, automatic confirmation, no manual steps required, peace of mind knowing contributions are handled automatically.
              </p>
            </div>

            <div className="resource-section">
              <h2>Requirements for Auto-Pay</h2>
              <p>Before you can enable auto-pay, you need:</p>
              <ul className="resource-list">
                <li><strong>Group Currency:</strong> The group must use USD (US Dollar), EUR (Euro), GBP (British Pound), CAD (Canadian Dollar), or AUD (Australian Dollar). Auto-pay is not available for other currencies (like NGN).</li>
                <li><strong>Valid Debit Card:</strong> You need a debit card (Visa, Mastercard, etc.) that works with the group's currency. For groups using USD, you can use a USD debit card; for EUR groups, an EUR card; for GBP groups, a GBP card; for CAD groups, a CAD card; for AUD groups, an AUD card. Credit cards are not supported.</li>
                <li><strong>Bank Account Details:</strong> You must have bank account details in your profile (required for withdrawals).</li>
                <li><strong>No Overdue Payments:</strong> You cannot enable auto-pay if you have any overdue payments. You must clear all overdue payments first.</li>
                <li><strong>For General Groups:</strong> The deadline must not have passed. You cannot enable auto-pay for general groups with deadlines in the past.</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step-by-Step: Enabling Auto-Pay</h2>
              
              <h3>Step 1: Add Your Debit Card</h3>
              <p>Before enabling auto-pay, you need to add a debit card to your account that works with the group's currency:</p>
              <ul className="resource-list">
                <li><strong>For USD groups:</strong> Add a USD debit card</li>
                <li><strong>For EUR groups:</strong> Add an EUR debit card</li>
                <li><strong>For GBP groups:</strong> Add a GBP debit card</li>
                <li><strong>For CAD groups:</strong> Add a CAD debit card</li>
                <li><strong>For AUD groups:</strong> Add an AUD debit card</li>
              </ul>
              <p>To add your debit card:</p>
              <ol className="resource-list">
                <li>Go to your account settings</li>
                <li>Navigate to "Payment Methods" or "Cards"</li>
                <li>Click "Add Debit Card"</li>
                <li>Enter your card details (card number, expiration date, CVV)</li>
                <li>Card details are securely processed by Stripe - we never see or store your full card number</li>
                <li>Complete two-factor authentication (password + authenticator app code)</li>
                <li>Your card is now saved and ready to use for groups in that currency</li>
              </ol>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#fff3cd', borderRadius: '6px' }}>
                <strong>Security:</strong> Adding a debit card requires two-factor authentication using an authenticator app (Google Authenticator, Authy, Microsoft Authenticator, or similar). This ensures your payment methods are secure.
              </p>

              <h3>Step 2: Enable Auto-Pay for a Group</h3>
              <p>Once you have a debit card, you can enable auto-pay for any eligible group:</p>
              <ol className="resource-list">
                <li>Open the group where you want to enable auto-pay</li>
                <li>Navigate to group settings or payment preferences</li>
                <li>Click "Enable Auto-Pay" or "Set Up Automatic Payments"</li>
                <li>Complete two-factor authentication (password + authenticator app code)</li>
                <li>Select your payment method (the debit card you added)</li>
                <li>Choose your payment timing preference:
                  <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                    <li><strong>"1 day before"</strong> - Your card is charged 1 day before the payment date (recommended)</li>
                    <li><strong>"Same day"</strong> - Your card is charged on the actual payment date</li>
                  </ul>
                </li>
                <li>Review fees (displayed transparently before confirmation)</li>
                <li>Confirm to enable auto-pay</li>
              </ol>

              <h3>Step 3: Verify Auto-Pay is Enabled</h3>
              <p>After enabling, you should see:</p>
              <ul className="resource-list">
                <li>Auto-pay status showing as "Enabled"</li>
                <li>Your selected payment timing preference</li>
                <li>Your payment method (last 4 digits of your card)</li>
                <li>Next payment date information</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Payment Timing Options</h2>
              <p>You can choose when your card is charged:</p>
              
              <div style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #007bff' }}>
                <h3 style={{ marginTop: '0' }}>"1 Day Before" (Recommended)</h3>
                <p><strong>How it works:</strong> Your card is charged 1 day before the payment date.</p>
                <p><strong>Example:</strong> If someone's birthday is on March 15th, your card is charged on March 14th.</p>
                <p><strong>Benefits:</strong> Gives you a buffer, ensures payment is processed before the deadline, reduces risk of missing payments.</p>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #6b7280' }}>
                <h3 style={{ marginTop: '0' }}>"Same Day"</h3>
                <p><strong>How it works:</strong> Your card is charged on the actual payment date.</p>
                <p><strong>Example:</strong> If someone's birthday is on March 15th, your card is charged on March 15th.</p>
                <p><strong>Benefits:</strong> Payment happens exactly on the deadline, no early charges.</p>
              </div>

              <p style={{ marginTop: '1.5rem' }}>
                <strong>Default Preference:</strong> You can set a default payment timing preference in your account settings. This will be used for all new groups unless you specify a different preference per group.
              </p>
            </div>

            <div className="resource-section">
              <h2>Understanding Fees</h2>
              <p>When you use auto-pay, fees are added on top of your contribution amount:</p>
              <ul className="resource-list">
                <li><strong>Payment Processor Fee (Stripe):</strong> Approximately 2.9% + $0.30 for USD, 1.4% + €0.25 for EUR, 1.4% + £0.20 for GBP</li>
                <li><strong>Platform Fee:</strong> 1-2% of contribution amount (kept competitive to stay affordable)</li>
                <li><strong>Total Charged:</strong> Contribution amount + all fees</li>
                <li><strong>Recipient Receives:</strong> Full contribution amount (no fees deducted from their side)</li>
              </ul>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '6px' }}>
                <strong>Example:</strong> If you want to contribute $50 via auto-pay:
                <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                  <li>Stripe fee: ~$1.75 (2.9% + $0.30)</li>
                  <li>Platform fee: $0.50 (1%)</li>
                  <li>Total charged to you: $52.25</li>
                  <li>Recipient receives: $50 (full amount)</li>
                </ul>
              </p>
              <p>
                <strong>Manual Payments:</strong> No fees apply to manual payments (payments made outside the app).
              </p>
            </div>

            <div className="resource-section">
              <h2>Managing Auto-Pay</h2>
              
              <h3>Updating Payment Timing</h3>
              <p>You can change your payment timing preference at any time:</p>
              <ol className="resource-list">
                <li>Go to the group's auto-pay settings</li>
                <li>Click "Update Preferences" or "Change Timing"</li>
                <li>Complete two-factor authentication</li>
                <li>Select new payment timing ("1 day before" or "same day")</li>
                <li>Confirm the change</li>
              </ol>

              <h3>Changing Payment Method</h3>
              <p>If you want to use a different card:</p>
              <ol className="resource-list">
                <li>Add a new debit card in your account settings</li>
                <li>Go to the group's auto-pay settings</li>
                <li>Select the new card as your payment method</li>
                <li>Save changes</li>
              </ol>

              <h3>Disabling Auto-Pay</h3>
              <p>You can disable auto-pay at any time:</p>
              <ol className="resource-list">
                <li>Go to the group's auto-pay settings</li>
                <li>Click "Disable Auto-Pay"</li>
                <li>Complete two-factor authentication</li>
                <li>Confirm to disable</li>
              </ol>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#fff3cd', borderRadius: '6px' }}>
                <strong>Note:</strong> After disabling auto-pay, contributions revert to manual payment. You'll need to mark payments as "Paid" manually and recipients will need to confirm receipt.
              </p>
            </div>

            <div className="resource-section">
              <h2>What Happens When Auto-Pay Processes</h2>
              <p>When a payment date arrives (or 1 day before, based on your preference):</p>
              <ol className="resource-list">
                <li><strong>System Checks:</strong>
                  <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                    <li>Checks if recipient has overdue payments (if yes, skips all auto-payments)</li>
                    <li>Checks if you have overdue payments (if yes, skips your payment)</li>
                    <li>Checks if payment status is still 'not_paid' (prevents double payment if you paid manually)</li>
                  </ul>
                </li>
                <li><strong>Payment Processing:</strong> Your debit card is charged via Stripe (includes contribution amount + fees)</li>
                <li><strong>Funds Credited:</strong> Money is automatically credited to recipient's in-app wallet balance</li>
                <li><strong>Auto-Confirmation:</strong> Payment status is automatically set to "Confirmed" (no manual confirmation needed)</li>
                <li><strong>Notifications:</strong> Both you and the recipient receive notifications about the successful payment</li>
              </ol>
            </div>

            <div className="resource-section">
              <h2>Failed Payments</h2>
              <p>If your automatic payment fails:</p>
              <ul className="resource-list">
                <li><strong>Retry:</strong> System will automatically retry once (max 2 attempts total: initial + 1 retry)</li>
                <li><strong>If Both Fail:</strong> Auto-pay is automatically disabled for that group</li>
                <li><strong>Notification:</strong> You'll receive an email notification explaining what happened</li>
                <li><strong>Revert to Manual:</strong> Contributions revert to manual payment (you must mark as paid manually)</li>
                <li><strong>Re-enable:</strong> After fixing the issue (updating card, ensuring sufficient funds), you can re-enable auto-pay</li>
              </ul>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#fef2f2', borderRadius: '6px' }}>
                <strong>Common Failure Reasons:</strong> Insufficient funds, expired card, bank declined, card not found. Check your card details and account balance, then re-enable auto-pay.
              </p>
            </div>

            <div className="resource-section">
              <h2>Best Practices for Auto-Pay</h2>
              <ul className="resource-list">
                <li><strong>Choose "1 Day Before":</strong> Recommended to give you a buffer and ensure payments process before deadlines</li>
                <li><strong>Keep Card Updated:</strong> Update your card before it expires to avoid payment failures</li>
                <li><strong>Monitor Your Account:</strong> Check your bank account to ensure you have sufficient funds before payment dates</li>
                <li><strong>Review Fees:</strong> Understand the fee structure before enabling auto-pay</li>
                <li><strong>Start with One Group:</strong> Enable auto-pay for one group first to get comfortable with the process</li>
                <li><strong>Set Default Preference:</strong> Set a default payment timing preference in your account settings</li>
                <li><strong>Monitor Notifications:</strong> Pay attention to payment success/failure notifications</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Auto-Pay vs Manual Payments</h2>
              <p>You can choose between auto-pay and manual payments:</p>
              
              <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #007bff' }}>
                  <h3 style={{ marginTop: '0' }}>Auto-Pay</h3>
                  <ul style={{ marginLeft: '1.5rem' }}>
                    <li>Automatic charging on payment dates</li>
                    <li>Never miss a payment</li>
                    <li>Automatic confirmation</li>
                    <li>Fees apply (contributor pays)</li>
                    <li>Only for USD, EUR, GBP</li>
                    <li>Requires debit card</li>
                  </ul>
                </div>
                <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #6b7280' }}>
                  <h3 style={{ marginTop: '0' }}>Manual Payments</h3>
                  <ul style={{ marginLeft: '1.5rem' }}>
                    <li>Pay outside the app</li>
                    <li>Mark as "Paid" in app</li>
                    <li>Recipient confirms receipt</li>
                    <li>No fees</li>
                    <li>Works for all currencies</li>
                    <li>Any payment method</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="resource-section">
              <h2>Security & Two-Factor Authentication</h2>
              <p>Auto-pay requires two-factor authentication for security:</p>
              <ul className="resource-list">
                <li><strong>Enabling Auto-Pay:</strong> Requires password + authenticator app code</li>
                <li><strong>Disabling Auto-Pay:</strong> Requires password + authenticator app code</li>
                <li><strong>Updating Preferences:</strong> Requires password + authenticator app code</li>
                <li><strong>Adding Cards:</strong> Requires password + authenticator app code</li>
              </ul>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '6px' }}>
                <strong>Authenticator Apps:</strong> Use Google Authenticator, Authy, Microsoft Authenticator, or similar apps. Set up your authenticator app in your account settings before enabling auto-pay.
              </p>
            </div>

            <div className="cta-box">
              <h2>Ready to Set Up Auto-Pay?</h2>
              <p>Never miss a contribution deadline again. Enable auto-pay and let GroupFund handle your payments automatically.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/resources/using-your-wallet" className="btn btn-secondary btn-large">Learn About Wallet →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/using-your-wallet">Using Your Wallet →</Link>
                <Link to="/resources/withdrawing-funds">Withdrawing Funds →</Link>
                <Link to="/resources/payment-methods-guide">Payment Methods Guide →</Link>
                <Link to="/best-practices/auto-pay-best-practices">Auto-Pay Best Practices →</Link>
                <Link to="/resources">View All Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
