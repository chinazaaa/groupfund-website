import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AppRulesPage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "App Rules - GroupFund",
      "description": "Understand how GroupFund works: Automatic payment processing via Stripe, wallet system, and manual payment options. Learn about auto-pay, payment confirmation, fees, and app guidelines.",
      "url": "https://www.groupfund.app/app-rules"
    }
    const existingScript = document.querySelector('script[data-app-rules-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-app-rules-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-app-rules-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  return (
    <>
      <SEO
        title="App Rules - How GroupFund Works | Payment Tracking Guidelines"
        description="Understand how GroupFund works: Automatic payment processing via Stripe, wallet system, and manual payment options. Learn about auto-pay, payment confirmation, fees, and how contributors and admins/celebrants interact."
        keywords="groupfund rules, how groupfund works, payment tracking, contribution rules, app guidelines, payment confirmation process, birthday groups, subscription groups, general groups"
        canonical="https://www.groupfund.app/app-rules"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">App Rules</h1>
          <p className="page-subtitle">
            Understanding how GroupFund works and what you can expect
          </p>
        </div>
      </section>

      <section className="legal-page">
        <div className="container">
          <div className="legal-content">
            <div className="legal-section">
              <h2>What GroupFund Does</h2>
              <p>
                GroupFund is a <strong>payment processing and organization platform</strong> designed to help groups manage contributions for birthdays, subscriptions, events, and any purpose. We provide:
              </p>
              <ul>
                <li>Multiple group types: Birthday Groups, Subscription Groups, and General Groups</li>
                <li>Group creation and member management</li>
                <li>Birthday calendar and tracking (for Birthday Groups)</li>
                <li>Subscription deadline tracking (for Subscription Groups)</li>
                <li>Event deadline tracking (for General Groups)</li>
                <li>Contribution amount settings</li>
                <li><strong>Automatic payment processing (auto-pay)</strong> via Stripe - debit cards are automatically charged on birthdays/deadlines</li>
                <li><strong>In-app wallet system</strong> - receive and withdraw funds</li>
                <li>Payment status tracking (automatic and manual payments)</li>
                <li>Automatic reminders</li>
                <li>Per-group chat and messaging (optional, can be enabled/disabled by group creator)</li>
                <li>Member reliability scores</li>
                <li>Group health metrics</li>
                <li>Payment history and transparency</li>
                <li>Support for multiple currencies when creating groups (USD, EUR, GBP, NGN, and more)</li>
                <li>Auto-pay, wallet, and withdrawals available for USD, EUR, GBP, CAD, and AUD only</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Payment Methods Available</h2>
              <p>
                GroupFund offers <strong>two ways</strong> to make contributions:
              </p>
              
              <h3>1. Automatic Payments (Auto-Pay)</h3>
              <p>
                <strong>How it works:</strong>
              </p>
              <ul>
                <li>Add a debit card to your account</li>
                <li>Enable auto-pay for a group</li>
                <li>Choose payment timing: "1 day before" or "same day" as the payment date</li>
                <li>Your card is automatically charged on the scheduled date (birthday, subscription deadline, or general group deadline)</li>
                <li>Funds are credited to the recipient's in-app wallet balance</li>
                <li>Payments are automatically confirmed (no manual confirmation needed)</li>
              </ul>
              <p>
                <strong>Requirements:</strong>
              </p>
              <ul>
                <li>The group must use a currency that supports auto-pay: USD (US Dollar), EUR (Euro), GBP (British Pound), CAD (Canadian Dollar), or AUD (Australian Dollar)</li>
                <li>If your group uses a different currency (e.g., NGN - Nigerian Naira), auto-pay is not available, but you can still use manual payments</li>
                <li>Valid debit card (Visa, Mastercard, etc.) that works with the group's currency (USD, EUR, GBP, CAD, or AUD cards for their respective currencies)</li>
                <li>Bank account details in your profile (required for withdrawals)</li>
                <li>No overdue payments (defaulters cannot enable auto-pay)</li>
              </ul>
              <p>
                <strong>Fees:</strong> Contributor pays fees (added on top of contribution amount). Fees include payment processor fee (Stripe) and platform fee (1-2%). Recipient receives full contribution amount. See fee details below.
              </p>
              
              <h3>2. Manual Payments</h3>
              <p>
                <strong>How it works:</strong>
              </p>
              <ul>
                <li>Make payment directly to recipient's bank account (outside the app)</li>
                <li>Mark payment as "Paid" in the app</li>
                <li>Recipient confirms they received the payment</li>
                <li>Two-step confirmation process (contributor marks as paid → recipient confirms)</li>
              </ul>
              <p>
                <strong>No fees:</strong> Manual payments have no fees (payment happens outside the app)
              </p>
              
              <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', borderRadius: '4px' }}>
                <strong>⚠️ Important Warning:</strong> Please verify the identity of the group admin before joining. GroupFund is not liable for any fraudulent activities or financial losses. Only join groups with people you trust.
              </p>
            </div>

            <div className="legal-section">
              <h2>How Payments Work</h2>
              
              <h3>Automatic Payments (Auto-Pay) Flow</h3>
              <p>
                When auto-pay is enabled, payments are processed automatically:
              </p>
              <ol>
                <li><strong>Payment Date Arrives:</strong> On the scheduled date (birthday, subscription deadline, or general group deadline) - or 1 day before if you chose "1 day before" timing</li>
                <li><strong>System Checks:</strong>
                  <ul>
                    <li>Checks if recipient has overdue payments (if yes, skips all auto-payments)</li>
                    <li>Checks if contributor has overdue payments (if yes, skips their payment)</li>
                    <li>Checks if payment status is still 'not_paid' (prevents double payment if user paid manually)</li>
                  </ul>
                </li>
                <li><strong>Payment Processing:</strong> Debit card is charged via Stripe (includes contribution amount + fees)</li>
                <li><strong>Funds Credited:</strong> Money is credited to recipient's in-app wallet balance</li>
                <li><strong>Auto-Confirmation:</strong> Payment status is automatically set to "Confirmed" (no manual confirmation needed - payment verified by Stripe)</li>
                <li><strong>Notifications:</strong> Both contributor and recipient receive notifications</li>
              </ol>
              
              <h3>Manual Payments Flow (Two-Step Confirmation)</h3>
              <p>
                When making manual payments (outside the app), GroupFund uses a <strong>two-step confirmation process</strong>:
              </p>
              
              <div style={{ marginTop: '2rem' }}>
                <h4>Step 1: Contributor Marks Payment as Paid</h4>
                <p>
                  After making a payment <strong>outside the app</strong> (via bank transfer, mobile money, cash, etc.), the contributor:
                </p>
                <ul>
                  <li>Opens the GroupFund app</li>
                  <li>Finds the relevant contribution (birthday, subscription, or general group)</li>
                  <li>Marks their payment as <strong>"Paid"</strong></li>
                </ul>
                <p>
                  At this point, the status shows as <strong>"Paid" (awaiting confirmation)</strong>, indicating that the contributor has notified the app that they've made the payment.
                </p>
                <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '6px' }}>
                  <strong>Note:</strong> For Birthday Groups, payments go to the celebrant. For Subscription Groups and General Groups, payments go to the admin (group creator). Co-admins can help confirm contributions for Subscription and General Groups, but cannot confirm birthday contributions.
                </p>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <h4>Step 2: Admin/Co-Admin/Celebrant Confirms or Rejects</h4>
                <p>
                  The person receiving the contribution then:
                </p>
                <ul>
                  <li>For <strong>Subscription and General Groups</strong>: Admins or co-admins receive a notification that a payment has been marked as "Paid"</li>
                  <li>For <strong>Birthday Groups</strong>: Only the celebrant receives a notification (admins and co-admins cannot confirm/reject birthday contributions)</li>
                  <li>Checks their bank account, mobile money, or other payment method</li>
                  <li>Verifies whether they actually received the payment</li>
                  <li>Marks it as either:
                    <ul style={{ marginTop: '0.5rem' }}>
                      <li><strong>"Confirmed"</strong> - if they received the payment</li>
                      <li><strong>"Not Received"</strong> - if they did not receive the payment</li>
                    </ul>
                  </li>
                </ul>
                <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '6px' }}>
                  <strong>Note:</strong> For Birthday Groups, only the celebrant can confirm or reject contributions. Admins and co-admins cannot confirm/reject birthday contributions.
                </p>
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #007bff' }}>
                <h4 style={{ marginTop: '0' }}>Why Different Processes?</h4>
                <p style={{ marginBottom: '0' }}>
                  <strong>Auto-pay:</strong> Automatically confirmed because payment is verified by Stripe (secure payment processor). No manual confirmation needed.
                </p>
                <p style={{ marginTop: '1rem', marginBottom: '0' }}>
                  <strong>Manual payments:</strong> Two-step confirmation ensures accuracy and transparency. It prevents false "paid" statuses and helps resolve payment disputes by requiring both parties to confirm the transaction.
                </p>
              </div>
            </div>

            <div className="legal-section">
              <h2>Payment Statuses Explained</h2>
              <p>Here's what each payment status means:</p>
              <ul>
                <li><strong>Not Paid:</strong> The contributor has not yet paid (for manual payments) or auto-pay hasn't processed yet (for auto-pay)</li>
                <li><strong>Paid (awaiting confirmation):</strong> <strong>Manual payments only</strong> - The contributor has marked it as paid, but the admin/co-admin/celebrant hasn't confirmed yet. This status does not apply to auto-pay (auto-pay is automatically confirmed)</li>
                <li><strong>Confirmed:</strong> 
                  <ul>
                    <li><strong>Auto-pay:</strong> Payment automatically confirmed after successful processing by Stripe</li>
                    <li><strong>Manual payments:</strong> The admin or co-admin (for Subscription/General Groups) or celebrant (for Birthday Groups) has verified they received the payment</li>
                  </ul>
                </li>
                <li><strong>Not Received:</strong> <strong>Manual payments only</strong> - The admin/co-admin/celebrant has marked that they did not receive the payment. This status does not apply to auto-pay (auto-pay is verified by payment processor)</li>
                <li><strong>Overdue:</strong> The payment deadline has passed and the payment is still not confirmed</li>
              </ul>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '6px' }}>
                <strong>Note:</strong> For Birthday Groups, only the celebrant can confirm or reject contributions. Admins and co-admins cannot confirm/reject birthday contributions. Auto-pay payments are automatically confirmed for all group types.
              </p>
            </div>

            <div className="legal-section">
              <h2>What Happens If Payment Is Marked "Not Received"?</h2>
              <p>
                If an admin, co-admin, or celebrant marks a payment as "Not Received":
              </p>
              <ul>
                <li>The status changes to "Not Received"</li>
                <li>The contributor is notified</li>
                <li>The contributor can follow up with the admin/celebrant to resolve the issue</li>
                <li>This might involve checking payment details, transaction references, or making the payment again</li>
                <li>Once resolved, the contributor can mark it as "Paid" again for the admin/celebrant to confirm</li>
              </ul>
              <p>
                This system helps ensure accurate tracking and resolves payment disputes transparently.
              </p>
            </div>

            <div className="legal-section">
              <h2>Wallet System</h2>
              <p>
                GroupFund includes an in-app wallet system for receiving and withdrawing funds:
              </p>
              
              <h3>Receiving Funds</h3>
              <ul>
                <li>When others contribute to you via auto-pay, funds are automatically credited to your wallet balance</li>
                <li>You can see your wallet balance in the app</li>
                <li><strong>Currency restriction:</strong> Wallet system is only available for groups using USD (US Dollar), EUR (Euro), GBP (British Pound), CAD (Canadian Dollar), or AUD (Australian Dollar). If your group uses a different currency (e.g., NGN - Nigerian Naira), the wallet system is not available, but you can still receive manual payments</li>
              </ul>
              
              <h3>Wallet Usage Rules (Important)</h3>
              <p>
                <strong>Wallet balance can ONLY be used for:</strong>
              </p>
              <ul>
                <li>✅ Receiving money (credited when others contribute to you via auto-pay)</li>
                <li>✅ Withdrawing money to your bank account</li>
              </ul>
              <p>
                <strong>Wallet balance CANNOT be used for:</strong>
              </p>
              <ul>
                <li>❌ Paying contributions (you must use a debit card for contributions)</li>
                <li>❌ Any payments (all payments must use debit cards via Stripe)</li>
              </ul>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#fff3cd', borderLeft: '4px solid #ffc107', borderRadius: '4px' }}>
                <strong>💡 Why?</strong> All contributions must go through payment processors (Stripe) for security, fee collection, and tracking. Wallet balance is only for receiving and withdrawing funds.
              </p>
              
              <h3>Withdrawals</h3>
              <ul>
                <li>You can withdraw funds from your wallet to your bank account at any time</li>
                <li><strong>Currency restriction:</strong> Withdrawals are only available for wallet balances in USD (US Dollar), EUR (Euro), GBP (British Pound), CAD (Canadian Dollar), or AUD (Australian Dollar). If your group uses a different currency, withdrawals are not available</li>
                <li><strong>Withdrawal fees:</strong>
                  <ul>
                    <li>GBP (British Pound): FREE - No withdrawal fee</li>
                    <li>EUR (Euro): FREE - No withdrawal fee</li>
                    <li>USD (US Dollar): 1% fee applies</li>
                    <li>CAD (Canadian Dollar): 1% fee applies</li>
                    <li>AUD (Australian Dollar): 1% fee applies</li>
                  </ul>
                </li>
                <li><strong>24-hour security hold:</strong> All withdrawal requests are subject to a 24-hour security hold period for fraud prevention. Funds will be sent to your bank account within 24 hours after your withdrawal request</li>
                <li><strong>Security notification:</strong> You will receive an email notification when your withdrawal request is received. If you did not request the withdrawal, contact security@groupfund.app immediately</li>
                <li><strong>Requirements:</strong> You must have valid bank account details in your profile to withdraw funds</li>
              </ul>
              
              <h3>Account Deletion</h3>
              <p>
                You cannot delete your account if you have a wallet balance greater than zero. You must withdraw all funds from your wallet before deleting your account.
              </p>
            </div>

            <div className="legal-section">
              <h2>Fees</h2>
              
              <h3>Automatic Payment Fees</h3>
              <p>
                When you use auto-pay to make a contribution:
              </p>
              <ul>
                <li><strong>You pay the fees</strong> - All fees are added on top of your contribution amount</li>
                <li><strong>Recipient receives full amount</strong> - The recipient receives the full contribution amount (no fees deducted from their side)</li>
                <li><strong>Fee breakdown:</strong>
                  <ul>
                    <li>Payment processor fee (Stripe): Approximately 2.9% + $0.30 for USD, 1.4% + €0.25 for EUR, 1.4% + £0.20 for GBP, 2.9% + $0.30 CAD for CAD, 2.9% + $0.30 AUD for AUD</li>
                    <li>Platform fee: 1-2% of contribution amount (kept competitive to stay affordable)</li>
                  </ul>
                </li>
                <li><strong>Example:</strong> If you want to contribute $50 via auto-pay:
                  <ul>
                    <li>Stripe fee: ~$1.75 (2.9% + $0.30)</li>
                    <li>Platform fee: $0.50 (1%)</li>
                    <li>Total charged to you: $52.25</li>
                    <li>Recipient receives: $50 (full amount)</li>
                  </ul>
                </li>
              </ul>
              
              <h3>Manual Payment Fees</h3>
              <p>
                <strong>No fees apply to manual payments</strong> - Manual payments happen outside the app, so no fees are charged.
              </p>
              
              <h3>Withdrawal Fees</h3>
              <ul>
                <li>GBP (British Pound): FREE - No withdrawal fee</li>
                <li>EUR (Euro): FREE - No withdrawal fee</li>
                <li>USD (US Dollar): 1% fee applies</li>
                <li>CAD (Canadian Dollar): 1% fee applies</li>
                <li>AUD (Australian Dollar): 1% fee applies</li>
              </ul>
              <p>
                All fees are displayed transparently before you confirm a payment or withdrawal.
              </p>
            </div>

            <div className="legal-section">
              <h2>Requirements and Restrictions</h2>
              
              <h3>Bank Account Details</h3>
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
                <strong>Bank details cannot be removed:</strong> If you are a member of any active group, you cannot remove your bank account details. You must leave all groups before removing bank details. This ensures recipients can withdraw funds and prevents payment failures. You can always update/edit your bank details (change bank name, account number, etc.).
              </p>
              
              <h3>Auto-Pay Requirements</h3>
              <p>
                To enable auto-pay, you must:
              </p>
              <ul>
                <li>The group must use a currency that supports auto-pay: USD (US Dollar), EUR (Euro), or GBP (British Pound)</li>
                <li>If your group uses a different currency (e.g., NGN - Nigerian Naira), auto-pay is not available, but you can still use manual payments</li>
                <li>Have a valid debit card (Visa, Mastercard, etc.)</li>
                <li>Have bank account details in your profile (required for withdrawals)</li>
                <li>Not have any overdue payments (defaulters cannot enable auto-pay until all overdue payments are cleared)</li>
                <li>For General Groups: Deadline must not have passed (cannot enable auto-pay if deadline has already passed)</li>
              </ul>
              
              <h3>Payment Timing Preferences</h3>
              <p>
                When you enable auto-pay, you can choose when to be charged:
              </p>
              <ul>
                <li><strong>"1 day before"</strong> - Your card is charged 1 day before the payment date (birthday, subscription deadline, or general group deadline)</li>
                <li><strong>"Same day"</strong> - Your card is charged on the actual payment date</li>
              </ul>
              <p>
                You can set a default payment timing preference for all groups, or set a specific preference per group.
              </p>
              
              <h3>Defaulters and Payment Restrictions</h3>
              <p>
                <strong>Defaulters (users with overdue payments):</strong>
              </p>
              <ul>
                <li>Cannot enable auto-pay until all overdue payments are cleared</li>
                <li>If it's your birthday/deadline and you're a defaulter, auto-pay contributions to you will be skipped until you clear your overdue payments</li>
                <li>If you're a contributor and you're a defaulter, your auto-pay payment will be skipped (you must pay your overdue payments first)</li>
              </ul>
              
              <h3>Failed Payment Handling</h3>
              <p>
                If your automatic payment fails:
              </p>
              <ul>
                <li>System will retry once (max 2 attempts total: initial + 1 retry)</li>
                <li>If both attempts fail, auto-pay will be automatically disabled for that group</li>
                <li>You will receive an email notification</li>
                <li>You can re-enable auto-pay after resolving the issue (e.g., updating your card, ensuring sufficient funds)</li>
                <li>Contributions revert to manual payment (you must mark as paid manually)</li>
              </ul>
              
              <h3>General Group Deadlines</h3>
              <p>
                For General Groups (one-time deadline groups):
              </p>
              <ul>
                <li>You cannot enable auto-pay if the group deadline has already passed</li>
                <li>If auto-pay is enabled and the deadline passes, auto-pay will be automatically disabled (no more automatic payments will be processed)</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Your Responsibilities</h2>
              <p>When using GroupFund, you agree to:</p>
              <ul>
                <li><strong>Maintain valid payment methods:</strong> Keep your debit card information up to date for auto-pay</li>
                <li><strong>Ensure sufficient funds:</strong> Make sure you have sufficient funds available for automatic payments</li>
                <li><strong>Maintain bank account details:</strong> Keep your bank account details accurate for withdrawals</li>
                <li><strong>For manual payments:</strong> Only mark payments as "Paid" after you've actually made the payment outside the app</li>
                <li><strong>Verify payments before confirming:</strong> Admins and celebrants should check their accounts before confirming receipt of manual payments</li>
                <li><strong>Resolve disputes directly:</strong> If there's a payment issue, work it out directly with the other party</li>
                <li><strong>Verify group admin identity:</strong> Before joining any group, verify the identity of the group admin. Only join groups with people you trust</li>
                <li><strong>Monitor your account:</strong> Check your wallet balance, transaction history, and payment statuses regularly</li>
                <li><strong>Report violations:</strong> If you encounter groups or members engaging in spam, fraud, harassment, or other violations, report them through our <Link to="/report">Report page</Link> to help keep the platform safe</li>
                <li><strong>Security:</strong> Keep your account credentials secure and enable two-factor authentication for critical actions (adding cards, withdrawals, etc.)</li>
              </ul>
              <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', borderRadius: '4px' }}>
                <strong>⚠️ Important Warning:</strong> GroupFund is not liable for any fraudulent activities or financial losses. Always verify the identity of group admins before joining and contributing. If you encounter suspicious behavior, report it immediately. Monitor your account for unauthorized activity and contact security@groupfund.app if you notice anything suspicious.
              </p>
            </div>

            <div className="legal-section">
              <h2>Reporting Groups and Members</h2>
              <p>
                If you encounter a group or member that violates our community guidelines or engages in suspicious behavior, you can and should report them. Reporting helps us maintain a safe and trustworthy platform for everyone.
              </p>
              
              <h3>When to Report</h3>
              <p>You should report a group or member if you encounter:</p>
              <ul>
                <li><strong>Spam:</strong> Groups or members posting spam or unwanted content</li>
                <li><strong>Inappropriate Content:</strong> Content that violates community standards</li>
                <li><strong>Fraud or Scams:</strong> Suspected fraudulent activities, scams, or deceptive practices</li>
                <li><strong>Harassment:</strong> Harassment, bullying, or abusive behavior</li>
                <li><strong>Other Violations:</strong> Any other behavior that violates our terms of service or community guidelines</li>
              </ul>

              <h3>How Reporting Works</h3>
              <p>
                GroupFund has a reporting system to help maintain platform safety:
              </p>
              <ul>
                <li><strong>Group Reports:</strong> You can report groups for violations. Pending reports reduce group health by 5 points. Groups with 3+ pending reports are automatically closed.</li>
                <li><strong>Member Reports:</strong> You can report members for violations. Users with 3+ pending reports or 5+ total reports are marked as inactive. This affects all users, including group admins.</li>
                <li><strong>Review Process:</strong> Our team reviews all reports. Reviewed reports reduce health by 2 points (less impact than pending reports).</li>
                <li><strong>Spam Prevention:</strong> Duplicate pending reports are prevented. Public reports have a 24-hour cooldown per email/group or email/member combination.</li>
              </ul>
              
              <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f0f9ff', borderLeft: '4px solid #007bff', borderRadius: '4px' }}>
                <strong>💡 Remember:</strong> If something doesn't seem right or you encounter suspicious behavior, don't hesitate to report it. Your reports help protect the entire GroupFund community. Visit our <Link to="/report">Report page</Link> to submit a report.
              </p>
              
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', borderRadius: '4px' }}>
                <strong>⚠️ Important:</strong> Please only report legitimate violations. False reports may result in action against your account. Reports are taken seriously and affect group health and member status.
              </p>
            </div>

            <div className="legal-section">
              <h2>GroupFund's Role</h2>
              <p>
                GroupFund's role includes:
              </p>
              <ul>
                <li>Processing automatic payments via Stripe (secure payment processor)</li>
                <li>Maintaining wallet balances for users</li>
                <li>Processing withdrawals to bank accounts</li>
                <li>Providing a platform to track payment statuses (automatic and manual)</li>
                <li>Organizing group information for birthdays, subscriptions, and events</li>
                <li>Sending reminders about upcoming contributions and deadlines</li>
                <li>Providing reporting tools to maintain platform safety</li>
                <li>Displaying payment history and transparency</li>
                <li>Calculating reliability scores based on payment behavior</li>
                <li>Handling payment confirmations (automatic for auto-pay, manual for manual payments)</li>
              </ul>
              <p>
                <strong>GroupFund is not responsible for:</strong>
              </p>
              <ul>
                <li>Payment disputes between members (disputes should be resolved directly between parties)</li>
                <li>Failed payments due to insufficient funds, expired cards, or bank declines (we'll notify you, but you're responsible for resolving)</li>
                <li>Incorrect payment amounts (group admins set contribution amounts)</li>
                <li>Fraudulent transactions due to unauthorized access to your account (keep your credentials secure)</li>
                <li>Financial losses arising from joining groups with untrustworthy admins (always verify admin identity)</li>
                <li>Chargebacks initiated by cardholders (we'll work with Stripe to resolve, but you're responsible for providing evidence if needed)</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Why This Design?</h2>
              <p>
                GroupFund offers both automatic and manual payment options for several important reasons:
              </p>
              <ul>
                <li><strong>Convenience:</strong> Auto-pay makes contributing effortless - set it once and never miss a payment</li>
                <li><strong>Security:</strong> Payment processing via Stripe (PCI-DSS compliant) ensures secure handling of payment information. We never store your full card number</li>
                <li><strong>Transparency:</strong> All fees are displayed upfront, and recipients receive full contribution amounts</li>
                <li><strong>Flexibility:</strong> You can choose auto-pay for convenience or manual payments for control (no fees for manual payments)</li>
                <li><strong>Accessibility:</strong> Supports multiple currencies for groups (USD, EUR, GBP, NGN, and more). Auto-pay, wallet, and withdrawals available for USD, EUR, and GBP only</li>
                <li><strong>Trust:</strong> Automatic confirmation for auto-pay reduces disputes, while manual confirmation for manual payments ensures accuracy</li>
                <li><strong>Affordability:</strong> Low platform fees (1-2%) keep costs competitive so users don't switch to alternatives</li>
                <li><strong>Reliability:</strong> Payment tracking, reminders, and automatic processing help groups stay organized and on track</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Need More Information?</h2>
              <p>
                If you have questions about how GroupFund works:
              </p>
              <ul>
                <li>Visit our <Link to="/help">Help Center</Link> for detailed guides</li>
                <li>Check our <Link to="/faq">FAQ page</Link> for common questions</li>
                <li>Read our <Link to="/how-it-works">How It Works</Link> page for an overview</li>
                <li>Review our <Link to="/security">Security page</Link> for information about data protection</li>
                <li><Link to="/contact">Contact us</Link> if you need additional support</li>
              </ul>
            </div>

            <div className="legal-section" style={{ padding: '1.5rem', backgroundColor: '#e7f3ff', borderRadius: '8px', borderLeft: '4px solid #007bff' }}>
              <h2 style={{ marginTop: '0' }}>Summary</h2>
              <p style={{ marginBottom: '0', fontWeight: '500' }}>
                GroupFund processes automatic payments via Stripe and maintains wallet balances for users. You can choose automatic payments (auto-pay) for convenience - debit cards are automatically charged on birthdays/deadlines, and funds are credited to recipients' wallets. Auto-pay payments are automatically confirmed. Alternatively, you can make manual payments (outside the app) - contributors mark as "Paid" and recipients confirm receipt. Manual payments require two-step confirmation. Wallet balance can only be used to receive and withdraw funds (not to pay contributions - you must use a debit card). Fees apply to auto-pay only (contributor pays, recipient receives full amount). Bank account details are required to join/create groups. For birthday contributions, only the celebrant can confirm/reject manual payments, not admins or co-admins. Auto-pay payments are automatically confirmed for all group types.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

