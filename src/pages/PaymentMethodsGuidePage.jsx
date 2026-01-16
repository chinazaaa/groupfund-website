import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function PaymentMethodsGuidePage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Payment Methods Guide - GroupFund",
      "description": "Complete guide to payment methods in GroupFund. Learn about auto-pay vs manual payments, when to use each, currency restrictions, and payment processing.",
      "url": "https://www.groupfund.app/resources/payment-methods-guide"
    }
    const existingScript = document.querySelector('script[data-payment-methods-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-payment-methods-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-payment-methods-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  return (
    <>
      <SEO
        title="Payment Methods Guide - Auto-Pay vs Manual Payments | GroupFund"
        description="Complete guide to payment methods in GroupFund. Learn about automatic payments (auto-pay) vs manual payments, when to use each, currency restrictions, fees, and payment processing."
        keywords="payment methods, auto-pay, manual payments, payment guide, automatic payments, payment options, groupfund payment methods"
        canonical="https://www.groupfund.app/resources/payment-methods-guide"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Payment Methods Guide</h1>
          <p className="page-subtitle">
            Complete guide to payment methods: auto-pay vs manual payments
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Getting Started</span>
              <span className="resource-read-time">7 min read</span>
            </div>

            <div className="resource-section">
              <h2>Two Payment Methods Available</h2>
              <p>
                GroupFund offers two ways to make contributions:
              </p>
              <ol className="resource-list">
                <li><strong>Automatic Payments (Auto-Pay):</strong> Your debit card is automatically charged on payment dates</li>
                <li><strong>Manual Payments:</strong> You make payments outside the app and mark them as paid</li>
              </ol>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '6px' }}>
                <strong>Your Choice:</strong> You can choose which method to use for each group. Some groups may use auto-pay, others may use manual payments. You can even mix methods within the same group (some members use auto-pay, others use manual payments).
              </p>
            </div>

            <div className="resource-section">
              <h2>Automatic Payments (Auto-Pay)</h2>
              
              <h3>How It Works</h3>
              <p>Auto-pay automatically charges your debit card on payment dates:</p>
              <ul className="resource-list">
                <li><strong>Setup:</strong> Add a debit card and enable auto-pay for a group</li>
                <li><strong>Timing:</strong> Choose "1 day before" or "same day" as the payment date</li>
                <li><strong>Automatic:</strong> Your card is charged automatically - no manual steps required</li>
                <li><strong>Processing:</strong> Payments are processed securely via Stripe</li>
                <li><strong>Confirmation:</strong> Payments are automatically confirmed (no manual confirmation needed)</li>
                <li><strong>Wallet:</strong> Funds are credited to recipient's in-app wallet balance</li>
              </ul>

              <h3>Requirements</h3>
              <ul className="resource-list">
                <li><strong>Currency:</strong> Group must use USD, EUR, or GBP (auto-pay not available for other currencies)</li>
                <li><strong>Debit Card:</strong> Valid debit card (Visa, Mastercard, etc.)</li>
                <li><strong>Bank Account:</strong> Bank account details in your profile (required for withdrawals)</li>
                <li><strong>No Overdue:</strong> You must not have any overdue payments</li>
              </ul>

              <h3>Fees</h3>
              <ul className="resource-list">
                <li><strong>You Pay:</strong> Contribution amount + fees (payment processor fee + platform fee of 1-2%)</li>
                <li><strong>Recipient Receives:</strong> Full contribution amount (no fees deducted)</li>
                <li><strong>Transparent:</strong> All fees displayed before you confirm</li>
              </ul>

              <h3>Benefits</h3>
              <ul className="resource-list">
                <li>✅ Never miss a payment</li>
                <li>✅ Automatic confirmation</li>
                <li>✅ No manual steps</li>
                <li>✅ Peace of mind</li>
                <li>✅ Convenient and effortless</li>
              </ul>

              <h3>When to Use Auto-Pay</h3>
              <ul className="resource-list">
                <li>You want convenience and automation</li>
                <li>You're in groups using USD, EUR, or GBP</li>
                <li>You have a valid debit card</li>
                <li>You want to never miss a payment</li>
                <li>You're comfortable with fees (contributor pays fees)</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Manual Payments</h2>
              
              <h3>How It Works</h3>
              <p>Manual payments are made outside the app:</p>
              <ul className="resource-list">
                <li><strong>Step 1:</strong> Make payment directly to recipient's bank account (bank transfer, mobile money, cash, etc.)</li>
                <li><strong>Step 2:</strong> Mark payment as "Paid" in the app</li>
                <li><strong>Step 3:</strong> Recipient confirms they received the payment</li>
                <li><strong>Two-Step Confirmation:</strong> Contributor marks as paid → Recipient confirms receipt</li>
              </ul>

              <h3>Requirements</h3>
              <ul className="resource-list">
                <li><strong>Any Currency:</strong> Works for all currencies (NGN, USD, EUR, GBP, and more)</li>
                <li><strong>Any Payment Method:</strong> Bank transfers, mobile money, cash, online payment platforms, etc.</li>
                <li><strong>No Card Needed:</strong> You don't need a debit card for manual payments</li>
                <li><strong>Recipient Confirmation:</strong> Recipient must confirm they received the payment</li>
              </ul>

              <h3>Fees</h3>
              <ul className="resource-list">
                <li><strong>No Fees:</strong> Manual payments have no fees (payment happens outside the app)</li>
                <li><strong>You Pay:</strong> Only the contribution amount (no additional fees)</li>
                <li><strong>Recipient Receives:</strong> Full contribution amount</li>
              </ul>

              <h3>Benefits</h3>
              <ul className="resource-list">
                <li>✅ No fees</li>
                <li>✅ Works for all currencies</li>
                <li>✅ Use any payment method</li>
                <li>✅ Full control over payments</li>
                <li>✅ No card required</li>
              </ul>

              <h3>When to Use Manual Payments</h3>
              <ul className="resource-list">
                <li>You want to avoid fees</li>
                <li>Your group uses a currency that doesn't support auto-pay (like NGN)</li>
                <li>You prefer to pay directly to bank accounts</li>
                <li>You don't have a debit card</li>
                <li>You want full control over when and how you pay</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Comparison: Auto-Pay vs Manual Payments</h2>
              
              <div style={{ marginTop: '1.5rem', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f3f4f6' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>Feature</th>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>Auto-Pay</th>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>Manual Payments</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}><strong>Payment Method</strong></td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Debit card (Visa, Mastercard)</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Any method (bank transfer, mobile money, cash, etc.)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}><strong>Currency Support</strong></td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>USD, EUR, GBP only</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>All currencies (NGN, USD, EUR, GBP, etc.)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}><strong>Fees</strong></td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Contributor pays fees (processor + platform 1-2%)</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>No fees</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}><strong>Confirmation</strong></td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Automatic (verified by Stripe)</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Manual (recipient confirms receipt)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}><strong>Recipient Receives</strong></td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Funds in wallet (can withdraw)</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Direct to bank account</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}><strong>Convenience</strong></td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Fully automatic - never miss a payment</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Requires manual steps</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}><strong>Setup Required</strong></td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Add debit card, enable auto-pay</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>No setup required</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="resource-section">
              <h2>Currency Restrictions</h2>
              <p>Understanding currency support:</p>
              
              <div style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #007bff' }}>
                <h3 style={{ marginTop: '0' }}>Groups Can Be Created In Any Currency</h3>
                <p>Groups can be created in multiple currencies including:</p>
                <ul style={{ marginLeft: '1.5rem' }}>
                  <li>USD (US Dollar)</li>
                  <li>EUR (Euro)</li>
                  <li>GBP (British Pound)</li>
                  <li>NGN (Nigerian Naira)</li>
                  <li>And many more currencies</li>
                </ul>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#fff3cd', borderRadius: '8px', borderLeft: '4px solid #ffc107' }}>
                <h3 style={{ marginTop: '0' }}>Auto-Pay, Wallet, and Withdrawals: USD, EUR, GBP Only</h3>
                <p>These features are only available for groups using:</p>
                <ul style={{ marginLeft: '1.5rem' }}>
                  <li>USD (US Dollar)</li>
                  <li>EUR (Euro)</li>
                  <li>GBP (British Pound)</li>
                </ul>
                <p style={{ marginTop: '1rem' }}>
                  <strong>If your group uses a different currency (like NGN):</strong> You can still use manual payments. Auto-pay, wallet, and withdrawals are not available, but manual payments work perfectly for all currencies.
                </p>
              </div>
            </div>

            <div className="resource-section">
              <h2>Choosing the Right Payment Method</h2>
              <p>Consider these factors when choosing:</p>
              
              <h3>Choose Auto-Pay If:</h3>
              <ul className="resource-list">
                <li>You want convenience and automation</li>
                <li>Your group uses USD, EUR, or GBP</li>
                <li>You have a valid debit card</li>
                <li>You want to never miss a payment</li>
                <li>You're comfortable paying fees (contributor pays)</li>
                <li>You want automatic confirmation</li>
              </ul>

              <h3>Choose Manual Payments If:</h3>
              <ul className="resource-list">
                <li>You want to avoid fees</li>
                <li>Your group uses a currency that doesn't support auto-pay (like NGN)</li>
                <li>You prefer to pay directly to bank accounts</li>
                <li>You don't have a debit card</li>
                <li>You want full control over payments</li>
                <li>You want to use specific payment methods (mobile money, cash, etc.)</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Mixing Payment Methods in Groups</h2>
              <p>Groups can have members using different payment methods:</p>
              <ul className="resource-list">
                <li><strong>Some members use auto-pay:</strong> Their cards are charged automatically</li>
                <li><strong>Other members use manual payments:</strong> They pay outside the app and mark as paid</li>
                <li><strong>Both work together:</strong> All payments are tracked in the same group</li>
                <li><strong>Recipients receive:</strong> Auto-pay funds go to wallet, manual payments go directly to bank account</li>
              </ul>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '6px' }}>
                <strong>Example:</strong> In a USD birthday group, 3 members use auto-pay (funds go to celebrant's wallet) and 2 members use manual payments (funds go directly to celebrant's bank account). All payments are tracked together in the group.
              </p>
            </div>

            <div className="resource-section">
              <h2>Payment Processing</h2>
              
              <h3>Auto-Pay Processing</h3>
              <ul className="resource-list">
                <li><strong>Provider:</strong> Stripe (PCI-DSS compliant payment processor)</li>
                <li><strong>Security:</strong> We never see or store your full card number, CVV, or expiration date</li>
                <li><strong>Processing:</strong> Payments are processed securely via Stripe</li>
                <li><strong>Confirmation:</strong> Automatic confirmation after successful processing</li>
                <li><strong>Wallet:</strong> Funds credited to recipient's wallet balance</li>
              </ul>

              <h3>Manual Payment Processing</h3>
              <ul className="resource-list">
                <li><strong>Provider:</strong> You choose (bank, mobile money, cash, etc.)</li>
                <li><strong>Processing:</strong> Payment happens outside GroupFund</li>
                <li><strong>Tracking:</strong> GroupFund only tracks payment status</li>
                <li><strong>Confirmation:</strong> Manual confirmation required (recipient confirms receipt)</li>
                <li><strong>Direct Transfer:</strong> Funds go directly to recipient's bank account</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Choose Your Payment Method?</h2>
              <p>Set up auto-pay for convenience or use manual payments for flexibility. The choice is yours!</p>
              <div className="cta-buttons">
                <Link to="/resources/setting-up-auto-pay" className="btn btn-primary btn-large">Set Up Auto-Pay →</Link>
                <Link to="/resources/using-your-wallet" className="btn btn-secondary btn-large">Learn About Wallet →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/setting-up-auto-pay">Setting Up Auto-Pay →</Link>
                <Link to="/resources/using-your-wallet">Using Your Wallet →</Link>
                <Link to="/resources/withdrawing-funds">Withdrawing Funds →</Link>
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
