import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function TermsOfServicePage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service - GroupFund",
      "description": "Read GroupFund's Terms of Service to understand the rules and guidelines for using our group contribution app.",
      "url": "https://www.groupfund.app/terms"
    }
    const existingScript = document.querySelector('script[data-terms-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-terms-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-terms-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  return (
    <>
      <SEO
        title="Terms of Service - GroupFund"
        description="Read GroupFund's Terms of Service to understand the rules and guidelines for using our group contribution app and services."
        keywords="terms of service, user agreement, terms and conditions, groupfund terms"
        canonical="https://www.groupfund.app/terms"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Terms of Service</h1>
          <p className="page-subtitle">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="legal-page">
        <div className="container">
          <div className="legal-content">
            <div className="legal-section">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using GroupFund ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
              </p>
            </div>

            <div className="legal-section">
              <h2>2. Description of Service</h2>
              <p>
                GroupFund is a mobile application that helps users organize and manage group contributions - for birthdays, subscriptions, events, and more. The Service allows users to:
              </p>
              <ul>
                <li>Create and manage groups (Birthday Groups, Subscription Groups, and General Groups)</li>
                <li>Invite members (who add their own birthday dates for Birthday Groups)</li>
                <li>Set contribution amounts and track payment statuses</li>
                <li>Enable automatic payment collection (auto-pay) using debit cards</li>
                <li>Receive automatic reminders about upcoming birthdays, subscription deadlines, and events</li>
                <li>View contribution history and calendars</li>
                <li>Receive payments in an in-app wallet balance</li>
                <li>Withdraw funds from wallet to bank account</li>
              </ul>
              <p>
                <strong>Group Currencies:</strong> Groups can be created in multiple currencies, including USD (US Dollar), EUR (Euro), GBP (British Pound), NGN (Nigerian Naira), and more. The group currency is set when creating the group.
              </p>
              <p>
                <strong>Payment Processing (Auto-Pay, Wallet, Withdrawals):</strong> Automatic payment collection (auto-pay), wallet system, and withdrawals are only available for five currencies: USD (US Dollar), EUR (Euro), GBP (British Pound), CAD (Canadian Dollar), and AUD (Australian Dollar). All automatic payments are processed via Stripe, a secure payment processor. If your group uses a currency that doesn't support auto-pay (e.g., NGN), you can still use manual payments.
              </p>
              <p>
                <strong>Manual Payments:</strong> Users can choose to make payments manually (outside the app) and mark them as paid in the app, regardless of the group's currency. Manual payments do not go through GroupFund's payment processing system and work for all currencies.
              </p>
              <p>
                For more detailed information about how payments work, including auto-pay, wallet functionality, and payment confirmation, please see our <Link to="/app-rules">App Rules</Link> page.
              </p>
            </div>

            <div className="legal-section">
              <h2>3. User Accounts</h2>
              <h3>3.1 Account Creation</h3>
              <p>To use certain features of the Service, you must create an account. You agree to:</p>
              <ul>
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information to keep it accurate</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>

              <h3>3.2 Account Security</h3>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </div>

            <div className="legal-section">
              <h2>4. User Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the Service for any illegal purpose or in violation of any laws</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Attempt to gain unauthorized access to the Service or other accounts</li>
                <li>Upload or transmit viruses, malware, or harmful code</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Collect or store personal data about other users without permission</li>
                <li>Use automated systems to access the Service without authorization</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>5. Reporting Violations</h2>
              <p>
                If you encounter a group or member that violates these Terms or engages in suspicious, fraudulent, or harmful behavior, you can and should report them through our reporting system. This includes but is not limited to:
              </p>
              <ul>
                <li>Spam or unwanted content</li>
                <li>Inappropriate content or behavior</li>
                <li>Fraudulent activities or scams</li>
                <li>Harassment, bullying, or abusive behavior</li>
                <li>Any other violation of these Terms</li>
              </ul>
              <p>
                Reports are reviewed by our team and may result in actions such as group closure or member account restrictions. False or malicious reports may result in action against your account. For more information about our reporting system, visit our <Link to="/report">Report page</Link> and <Link to="/app-rules">App Rules</Link> page.
              </p>
            </div>

            <div className="legal-section">
              <h2>6. Payment and Financial Transactions</h2>
              
              <h3>6.1 Automatic Payment Collection (Auto-Pay)</h3>
              <p>
                GroupFund offers automatic payment collection (auto-pay) through Stripe, a secure payment processor. When you enable auto-pay for a group:
              </p>
              <ul>
                <li>Your debit card will be automatically charged on the payment date (birthday, subscription deadline, or general group deadline)</li>
                <li>You can choose to be charged "1 day before" or on the "same day" as the payment date</li>
                <li>Auto-pay is only available for groups using one of five currencies: USD (US Dollar), EUR (Euro), GBP (British Pound), CAD (Canadian Dollar), or AUD (Australian Dollar)</li>
                <li>If your group uses a different currency (e.g., NGN), auto-pay is not available, but you can still use manual payments</li>
                <li>Fees apply to automatic payments (see Section 6.3)</li>
                <li>Funds are credited to the recipient's in-app wallet balance</li>
              </ul>
              <p>
                <strong>Requirements for Auto-Pay:</strong>
              </p>
              <ul>
                <li>The group must use a currency that supports auto-pay: USD, EUR, GBP, CAD, or AUD</li>
                <li>You must have a valid debit card on file</li>
                <li>You must have bank account details in your profile (required for withdrawals)</li>
                <li>You must not have any overdue payments (defaulters cannot enable auto-pay)</li>
              </ul>
              
              <h3>6.2 Wallet System</h3>
              <p>
                GroupFund maintains an in-app wallet system for receiving and withdrawing funds:
              </p>
              <ul>
                <li><strong>Wallet Balance:</strong> When others contribute to you via auto-pay, funds are credited to your wallet balance</li>
                <li><strong>Wallet Usage:</strong> Wallet balance can ONLY be used to receive payments and withdraw to your bank account. Wallet balance CANNOT be used to pay contributions - you must use a debit card for contributions</li>
                <li><strong>Withdrawals:</strong> You can withdraw funds from your wallet to your bank account. Withdrawals are subject to fees (see Section 6.4) and a 24-hour security hold period</li>
                <li><strong>Account Deletion:</strong> You cannot delete your account if you have a wallet balance greater than zero. You must withdraw all funds before deleting your account</li>
              </ul>
              
              <h3>6.3 Fees for Automatic Payments</h3>
              <p>
                When you use auto-pay to make a contribution:
              </p>
              <ul>
                <li><strong>You pay the fees:</strong> All fees are added on top of your contribution amount</li>
                <li><strong>Recipient receives full amount:</strong> The recipient receives the full contribution amount (without fees deducted)</li>
                <li><strong>Fee structure:</strong>
                  <ul>
                    <li>Payment processor fee (Stripe): Approximately 2.9% + $0.30 for USD, 1.4% + €0.25 for EUR, 1.4% + £0.20 for GBP, 2.9% + $0.30 CAD for CAD, 2.9% + $0.30 AUD for AUD</li>
                    <li>Platform fee: 1-2% of contribution amount (kept competitive to stay affordable)</li>
                  </ul>
                </li>
                <li><strong>Manual payments:</strong> No fees apply to manual payments (payments made outside the app)</li>
              </ul>
              <p>
                All fees are displayed transparently before you confirm a payment. Our goal is to keep fees low and affordable so users don't switch to alternative methods like WhatsApp groups.
              </p>
              
              <h3>6.4 Withdrawal Fees</h3>
              <p>
                Withdrawal fees vary by currency:
              </p>
              <ul>
                <li><strong>GBP (British Pound):</strong> FREE - No withdrawal fee</li>
                <li><strong>EUR (Euro):</strong> FREE - No withdrawal fee</li>
                <li><strong>USD (US Dollar):</strong> 1% fee applies</li>
                <li><strong>CAD (Canadian Dollar):</strong> 1% fee applies</li>
                <li><strong>AUD (Australian Dollar):</strong> 1% fee applies</li>
              </ul>
              <p>
                <strong>24-Hour Security Hold:</strong> All withdrawal requests are subject to a 24-hour security hold period. Funds will be sent to your bank account within 24 hours after your withdrawal request. You will receive an email notification when your withdrawal request is received. If you did not request the withdrawal, contact security@groupfund.app immediately.
              </p>
              
              <h3>6.5 Manual Payments</h3>
              <p>
                You can choose to make payments manually (outside the app) instead of using auto-pay:
              </p>
              <ul>
                <li>Make the payment directly to the recipient's bank account using your preferred payment method</li>
                <li>Mark the payment as "Paid" in the app</li>
                <li>The recipient must confirm they received the payment</li>
                <li>No fees apply to manual payments (payment happens outside the app)</li>
              </ul>
              
              <h3>6.6 Bank Account Requirements</h3>
              <p>
                <strong>Required for all users:</strong> You must have valid bank account details in your profile to:
              </p>
              <ul>
                <li>Create or join any group</li>
                <li>Receive withdrawals from your wallet (we use your stored bank account details to process withdrawals via Stripe Payouts API)</li>
              </ul>
              <p>
                <strong>How bank details are used:</strong> Your bank account details are stored in our system and used for:
              </p>
              <ul>
                <li><strong>Withdrawals:</strong> We use your stored bank account details to process withdrawals from your wallet to your bank account</li>
                <li><strong>Manual payments:</strong> Your bank account details are displayed to group members so they can send you payments manually (outside the app)</li>
              </ul>
              <p>
                <strong>Bank details cannot be removed:</strong> If you are a member of any active group, you cannot remove your bank account details. You must leave all groups before removing bank details. This ensures recipients can withdraw funds and prevents payment failures.
              </p>
              
              <h3>6.7 Payment Confirmation</h3>
              <p>
                <strong>Automatic Payments (Auto-Pay):</strong> When payments are processed via auto-pay, they are automatically confirmed (status = 'confirmed') after successful processing by Stripe. No manual confirmation is required.
              </p>
              <p>
                <strong>Manual Payments:</strong> Manual payments require two-step confirmation:
              </p>
              <ol>
                <li>Contributor marks payment as "Paid" (status = 'paid')</li>
                <li>Recipient confirms they received the payment (status = 'confirmed')</li>
              </ol>
              
              <h3>6.8 Payment Failures and Defaulters</h3>
              <p>
                <strong>Failed Auto-Pay Attempts:</strong> If your automatic payment fails after 2 attempts (initial + 1 retry), auto-pay will be automatically disabled for that group. You will be notified via email. You can re-enable auto-pay after resolving the issue (e.g., updating your card, ensuring sufficient funds).
              </p>
              <p>
                <strong>Defaulters (Users with Overdue Payments):</strong>
              </p>
              <ul>
                <li>Users with overdue payments cannot enable auto-pay until all overdue payments are cleared</li>
                <li>If you are a defaulter and it's your birthday or deadline, auto-pay contributions will be skipped until you clear your overdue payments</li>
                <li>If a recipient (birthday person or admin) is a defaulter, all auto-pay contributions to them will be skipped until they clear their overdue payments</li>
              </ul>
              
              <h3>6.9 General Group Deadlines</h3>
              <p>
                For General Groups (one-time deadline groups):
              </p>
              <ul>
                <li>You cannot enable auto-pay if the group deadline has already passed</li>
                <li>If auto-pay is enabled and the deadline passes, auto-pay will be automatically disabled (no more automatic payments will be processed)</li>
              </ul>
              
              <h3>6.10 Payment Disputes and Chargebacks</h3>
              <p>
                <strong>Payment Disputes:</strong> Payment disputes between group members should be resolved directly between the parties. GroupFund provides payment processing services but is not responsible for resolving payment disputes.
              </p>
              <p>
                <strong>Chargebacks:</strong> If a cardholder disputes a payment (chargeback), GroupFund will work with Stripe to resolve the dispute. Evidence of the legitimate transaction may be required. High chargeback rates may result in account restrictions.
              </p>
              
              <h3>6.11 Your Responsibilities</h3>
              <p>You acknowledge and agree that:</p>
              <ul>
                <li>You are responsible for maintaining valid payment methods (debit cards) and bank account details</li>
                <li>You are responsible for ensuring sufficient funds are available for automatic payments</li>
                <li>You are responsible for verifying payment statuses and confirming manual payments accurately</li>
                <li>GroupFund is not responsible for payment disputes between group members</li>
                <li>We are not liable for any financial losses arising from unauthorized access to your account (see Security section)</li>
                <li>You must verify the identity of group admins before joining groups</li>
              </ul>
              
              <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', borderRadius: '4px' }}>
                <strong>⚠️ Important Warning:</strong> Please verify the identity of the group admin before joining. GroupFund is not liable for any fraudulent activities or financial losses. Only join groups with people you trust. Keep your account credentials secure and enable two-factor authentication for critical actions.
              </p>
              
              <p>
                For more information about how payments work, including detailed payment flows and confirmation processes, visit our <Link to="/app-rules">App Rules</Link> page.
              </p>
            </div>

            <div className="legal-section">
              <h2>7. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by GroupFund and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p>
                You are granted a limited, non-exclusive, non-transferable license to access and use the Service for personal, non-commercial purposes in accordance with these Terms.
              </p>
            </div>

            <div className="legal-section">
              <h2>8. User Content</h2>
              <p>
                You retain ownership of any content you submit, post, or display on or through the Service ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content solely for the purpose of providing the Service.
              </p>
              <p>You represent and warrant that:</p>
              <ul>
                <li>You own or have the right to submit the User Content</li>
                <li>The User Content does not violate any third-party rights</li>
                <li>The User Content complies with these Terms and applicable laws</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>9. Privacy</h2>
              <p>
                Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your information.
              </p>
            </div>

            <div className="legal-section">
              <h2>10. Service Availability</h2>
              <p>
                We strive to provide reliable service but do not guarantee that the Service will be available at all times or free from errors, interruptions, or defects. We reserve the right to modify, suspend, or discontinue the Service at any time without notice.
              </p>
            </div>

            <div className="legal-section">
              <h2>11. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, GroupFund shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul>
                <li>Your use or inability to use the Service</li>
                <li>Any conduct or content of third parties on the Service</li>
                <li>Any unauthorized access to or use of our servers or data</li>
                <li>Any interruption or cessation of transmission to or from the Service</li>
                <li>Any bugs, viruses, or similar items transmitted through the Service</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>12. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless GroupFund and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from your use of the Service or violation of these Terms.
              </p>
            </div>

            <div className="legal-section">
              <h2>13. Termination</h2>
              <p>
                We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will cease immediately.
              </p>
              <p>
                <strong>Account Deletion Requirements:</strong> You may terminate your account at any time by deleting it through the app settings or contacting us at support@groupfund.app. However, you cannot delete your account if you have a wallet balance greater than zero. You must withdraw all funds from your wallet before deleting your account.
              </p>
              <p>
                Upon account deletion, all your data will be permanently deleted in accordance with our Privacy Policy, except where we are required to retain certain information for legal or regulatory purposes (e.g., transaction records for tax or compliance purposes).
              </p>
            </div>

            <div className="legal-section">
              <h2>14. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use the Service after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>

            <div className="legal-section">
              <h2>15. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. Any disputes arising from these Terms or the Service shall be resolved through appropriate legal channels in accordance with your local jurisdiction and applicable international laws.
              </p>
            </div>

            <div className="legal-section">
              <h2>16. Severability</h2>
              <p>
                If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full effect.
              </p>
            </div>

            <div className="legal-section">
              <h2>17. Two-Factor Authentication</h2>
              <p>
                For security purposes, certain critical actions require two-factor authentication (password + verification code from an authenticator app):
              </p>
              <ul>
                <li>Adding, editing, or deleting debit cards (payment methods)</li>
                <li>Adding, editing, or removing bank account details</li>
                <li>Withdrawing funds from your wallet</li>
                <li>Enabling or disabling auto-pay</li>
                <li>Updating payment timing preferences</li>
              </ul>
              <p>
                <strong>2FA Method:</strong> Two-factor authentication uses authenticator apps (such as Google Authenticator, Authy, Microsoft Authenticator, or similar apps) to generate verification codes. You must set up an authenticator app in your account settings to use these features.
              </p>
              <p>
                You will receive security email notifications for all critical actions. If you receive a notification for an action you did not perform, contact security@groupfund.app immediately.
              </p>
            </div>

            <div className="legal-section">
              <h2>18. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p>
                <strong>General Support:</strong> support@groupfund.app<br />
                <strong>Security Issues:</strong> security@groupfund.app<br />
                <strong>Website:</strong> <a href="/contact">Contact Page</a>
              </p>
              <p>
                For security-related concerns (e.g., unauthorized transactions, suspicious account activity), please contact security@groupfund.app immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

