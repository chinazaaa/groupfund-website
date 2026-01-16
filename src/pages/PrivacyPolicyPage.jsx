import React, { useEffect } from 'react'
import SEO from '../components/SEO'
import '../App.css'

export default function PrivacyPolicyPage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy - GroupFund",
      "description": "Read GroupFund's Privacy Policy to understand how we collect, use, and protect your personal information.",
      "url": "https://www.groupfund.app/privacy"
    }
    const existingScript = document.querySelector('script[data-privacy-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-privacy-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-privacy-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  return (
    <>
      <SEO
        title="Privacy Policy - GroupFund"
        description="Read GroupFund's Privacy Policy to understand how we collect, use, and protect your personal information when using our group contribution app."
        keywords="privacy policy, data protection, user privacy, groupfund privacy"
        canonical="https://www.groupfund.app/privacy"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-subtitle">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="legal-page">
        <div className="container">
          <div className="legal-content">
            <div className="legal-section">
              <h2>1. Introduction</h2>
              <p>
                GroupFund ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
              </p>
            </div>

            <div className="legal-section">
              <h2>2. Information We Collect</h2>
              <h3>2.1 Information You Provide</h3>
              <p>We collect information that you provide directly to us, including:</p>
              <ul>
                <li>Account information (name, email address)</li>
                <li>Group information (group names, member details, birthday dates for Birthday Groups, subscription details for Subscription Groups, event details for General Groups)</li>
                <li>Payment information (contribution amounts, payment statuses, payment methods)</li>
                <li>Bank account details (account name, bank name, account number) - required for receiving withdrawals and displayed to group members for manual payments</li>
                <li>Payment method information (debit card details stored securely via Stripe - we never store actual card numbers)</li>
                <li>Wallet balance and transaction history</li>
                <li>Communication data (messages, feedback, support requests)</li>
                <li>Payment preferences (auto-pay settings, payment timing preferences)</li>
              </ul>

              <h3>2.2 Automatically Collected Information</h3>
              <p>We may automatically collect certain information about your device and usage, including:</p>
              <ul>
                <li>Device information (device type, operating system, unique device identifiers)</li>
                <li>Usage data (features used, pages viewed, time spent in app)</li>
                <li>Log information (IP address, access times, error logs)</li>
                <li>Payment transaction data (transaction IDs, payment status, payment provider information)</li>
              </ul>

              <h3>2.3 Payment Information from Third-Party Processors</h3>
              <p>When you use automatic payment (auto-pay) features, we work with Stripe, a secure payment processor, to process payments. Stripe collects and processes your debit card information according to their privacy policy and security standards. We only receive:</p>
              <ul>
                <li>Payment method tokens (not actual card numbers)</li>
                <li>Payment status and transaction confirmations</li>
                <li>Last 4 digits of your card for display purposes</li>
              </ul>
              <p>
                <strong>We never store your full debit card number, CVV, or expiration date.</strong> All card data is handled securely by Stripe, which is PCI-DSS compliant. For more information about how Stripe handles your payment data, visit <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe's Privacy Policy</a>.
              </p>
            </div>

            <div className="legal-section">
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process automatic payments (auto-pay) through Stripe</li>
                <li>Manage your wallet balance and process withdrawals</li>
                <li>Process and manage group contributions and payments</li>
                <li>Send you notifications and reminders about birthdays, subscriptions, events, and contributions</li>
                <li>Send security notifications for critical actions (adding cards, withdrawals, etc.)</li>
                <li>Support two-factor authentication via authenticator apps for verification</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Detect, prevent, and address technical issues and fraud</li>
                <li>Comply with legal obligations and payment regulations</li>
                <li>Calculate and process fees for payments and withdrawals</li>
                <li>Maintain transaction records for accounting and compliance</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>4. Information Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
              <ul>
                <li><strong>Within Your Groups:</strong> Information you provide (name, contribution status) is visible to other members of groups you join. Your bank account details are stored in our system and displayed to group members so they can send you payments manually if needed</li>
                <li><strong>Payment Processors (Stripe):</strong> We share payment information with Stripe to process automatic payments. Stripe is a secure, PCI-DSS compliant payment processor. They handle your debit card information according to their privacy policy</li>
                <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf (e.g., email service providers for sending notifications, cloud hosting providers)</li>
                <li><strong>Bank Account Information:</strong> When processing withdrawals, we share your bank account details with Stripe (via Stripe Payouts API) to transfer funds to your bank account</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or to protect our rights, users, or comply with legal obligations</li>
                <li><strong>Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Fraud Prevention:</strong> We may share information with payment processors and financial institutions to prevent fraud and verify transactions</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </div>

            <div className="legal-section">
              <h2>6. Payment Information</h2>
              <p style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#d1fae5', borderLeft: '4px solid #10b981', borderRadius: '4px', fontSize: '1.05rem' }}>
                <strong>🔒 Important: We Do NOT Store Your Card Information</strong><br />
                GroupFund does <strong>NOT</strong> store your debit card number, CVV, or expiration date. All card information is handled securely by Stripe, a PCI-DSS Level 1 compliant payment processor. We never see or have access to your full card details. When you add a card, the information is sent directly to Stripe (not to GroupFund), and Stripe provides us with a secure token for processing payments.
              </p>
              <p>
                <strong>Automatic Payment Processing:</strong> When you enable auto-pay, we process payments through Stripe, a secure payment processor. We work with Stripe to:
              </p>
              <ul>
                <li><strong>Securely store your payment method (debit card) - we never see or store your full card number, CVV, or expiration date</strong> - All card data is handled exclusively by Stripe</li>
                <li>Process automatic payments on scheduled dates (birthdays, deadlines)</li>
                <li>Handle payment confirmations and webhooks</li>
                <li>Process withdrawals to your bank account</li>
              </ul>
              <p>
                <strong>What We Store:</strong> We store payment method tokens (provided by Stripe) and transaction records. <strong>We never store your actual debit card number, CVV, or expiration date.</strong> All sensitive card data is handled securely by Stripe, which is PCI-DSS compliant. The tokens we receive from Stripe cannot be used to access your actual card information.
              </p>
              <p>
                <strong>How It Works:</strong> When you add a debit card for auto-pay, the card information is sent directly to Stripe (not to GroupFund). Stripe securely stores your card and provides us with a token that we can use to process future payments. We cannot access your actual card number, CVV, or expiration date from this token.
              </p>
              <p>
                <strong>Bank Account Information:</strong> We store your bank account details (account name, bank name, account number) for two purposes:
              </p>
              <ul>
                <li><strong>For Manual Payments:</strong> Your bank account details are displayed to group members so they can send you payments manually (outside the app)</li>
                <li><strong>For Withdrawals:</strong> We use your stored bank account details to process withdrawals from your wallet to your bank account via Stripe Payouts API</li>
              </ul>
              <p>
                Bank account information is encrypted and stored securely. We share your bank account details with Stripe only when processing withdrawals.
              </p>
              <p>
                <strong>Manual Payments:</strong> You can choose to make payments manually (outside the app) instead of using auto-pay. Manual payments do not go through GroupFund's payment processing system, and we only track payment statuses for organizational purposes.
              </p>
              <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f0f9ff', borderLeft: '4px solid #007bff', borderRadius: '4px' }}>
                <strong>🔒 Security:</strong> We use industry-standard encryption and security measures to protect your payment information. All payment processing is handled by Stripe, which maintains the highest security standards (PCI-DSS Level 1 compliance). For critical actions (adding cards, withdrawals, etc.), we require two-factor authentication (password + verification code from an authenticator app). You must use an authenticator app (such as Google Authenticator, Authy, Microsoft Authenticator, or similar apps) for two-factor authentication.
              </p>
              <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', borderRadius: '4px' }}>
                <strong>⚠️ Important Warning:</strong> Please verify the identity of the group admin before joining. GroupFund is not liable for any fraudulent activities or financial losses. Only join groups with people you trust. Keep your account credentials secure and monitor your account for unauthorized activity.
              </p>
            </div>

            <div className="legal-section">
              <h2>7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access and review your personal information, wallet balance, and transaction history</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your account and data (subject to wallet balance requirements - see below)</li>
                <li>Opt-out of certain communications (but not security or transaction-related notifications)</li>
                <li>Export your data (account information, transaction history, group information)</li>
                <li>Remove or update your payment methods (debit cards)</li>
                <li>Update or remove your bank account details (subject to group membership restrictions)</li>
                <li>Disable auto-pay for any group at any time</li>
              </ul>
              <p><strong>Deleting Your Account:</strong> You can delete your account at any time by logging into the app and accessing the account deletion option in your settings. However, you cannot delete your account if you have a wallet balance greater than zero. You must withdraw all funds from your wallet before deleting your account. After deletion, your account and associated data will be permanently deleted, except where we are required to retain certain information for legal or regulatory purposes (e.g., transaction records for compliance).</p>
              <p><strong>Removing Bank Account Details:</strong> You can update your bank account details at any time. However, if you are a member of any active group, you cannot remove your bank account details entirely - you must leave all groups first. This ensures recipients can withdraw funds and prevents payment failures. You can always update/edit your bank details (change bank name, account number, etc.).</p>
              <p>To exercise other rights or if you need assistance, please contact us at support@groupfund.app</p>
            </div>

            <div className="legal-section">
              <h2>8. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. Specifically:
              </p>
              <ul>
                <li><strong>Account Information:</strong> Retained while your account is active and for a reasonable period after account deletion (for support and fraud prevention purposes)</li>
                <li><strong>Payment and Transaction Records:</strong> Retained for at least 7 years as required by financial regulations and tax laws</li>
                <li><strong>Payment Method Information:</strong> Retained while you have active payment methods and for a period after removal (for fraud prevention and dispute resolution)</li>
                <li><strong>Bank Account Information:</strong> Retained while your account is active and while you are a member of any group (required for withdrawals)</li>
                <li><strong>Wallet Balance and Transaction History:</strong> Retained according to financial record-keeping requirements</li>
              </ul>
              <p>
                When you delete your account, we will delete or anonymize your personal information, except where we are required to retain it for legal, regulatory, or financial record-keeping purposes. Transaction records, payment history, and financial data may be retained longer as required by law.
              </p>
            </div>

            <div className="legal-section">
              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </div>

            <div className="legal-section">
              <h2>10. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our services, you consent to the transfer of your information to these countries.
              </p>
            </div>

            <div className="legal-section">
              <h2>11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div className="legal-section">
              <h2>12. Security Notifications</h2>
              <p>
                We send security email notifications for critical actions to help you monitor your account:
              </p>
              <ul>
                <li>Adding, editing, or deleting debit cards (payment methods)</li>
                <li>Adding, editing, or removing bank account details</li>
                <li>Withdrawing funds from your wallet</li>
                <li>Enabling or disabling auto-pay</li>
                <li>Updating payment timing preferences</li>
                <li>Login from new devices (if enabled)</li>
              </ul>
              <p>
                These notifications help you detect unauthorized activity. If you receive a notification for an action you did not perform, contact security@groupfund.app immediately. We cannot disable these security notifications as they are critical for account security.
              </p>
            </div>

            <div className="legal-section">
              <h2>13. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                <strong>General Support:</strong> support@groupfund.app<br />
                <strong>Security Issues:</strong> security@groupfund.app<br />
                <strong>Website:</strong> <a href="/contact">Contact Page</a>
              </p>
              <p>
                For privacy-related concerns or data requests, please contact support@groupfund.app. For security-related concerns (e.g., unauthorized access, data breaches), please contact security@groupfund.app immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

