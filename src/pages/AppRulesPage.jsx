import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AppRulesPage() {
  return (
    <>
      <SEO
        title="App Rules - How GroupFund Works | Payment Tracking Guidelines"
        description="Understand how GroupFund works: We don't collect payments, only track contributions for birthday, subscription, and general groups. Learn the two-step payment confirmation process and how contributors and admins/celebrants interact."
        keywords="groupfund rules, how groupfund works, payment tracking, contribution rules, app guidelines, payment confirmation process, birthday groups, subscription groups, general groups"
        canonical="https://groupfund.app/app-rules"
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
                GroupFund is a <strong>tracking and organization tool</strong> designed to help groups manage contributions for birthdays, subscriptions, events, and any purpose. We provide:
              </p>
              <ul>
                <li>Multiple group types: Birthday Groups, Subscription Groups, and General Groups</li>
                <li>Group creation and member management</li>
                <li>Birthday calendar and tracking (for Birthday Groups)</li>
                <li>Subscription deadline tracking (for Subscription Groups)</li>
                <li>Event deadline tracking (for General Groups)</li>
                <li>Contribution amount settings</li>
                <li>Payment status tracking</li>
                <li>Automatic reminders</li>
                <li>Member reliability scores</li>
                <li>Group health metrics</li>
                <li>Payment history and transparency</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>What GroupFund Does NOT Do</h2>
              <p>
                <strong>GroupFund does not collect, process, hold, or facilitate payments.</strong> This is important to understand:
              </p>
              <ul>
                <li>We do not process payments through the app</li>
                <li>We do not hold money in escrow or any account</li>
                <li>We do not facilitate money transfers</li>
                <li>We do not store credit card or payment credentials, only bank account details to display to the contributors</li>
                <li>We do not act as a payment intermediary</li>
              </ul>
              <p>
                All payments are made <strong>directly between group members</strong> using their preferred payment methods (bank transfers, mobile money, cash, online payment platforms, etc.).
              </p>
              <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', borderRadius: '4px' }}>
                <strong>⚠️ Important Warning:</strong> Please verify the identity of the group admin before joining. GroupFund is not liable for any fraudulent activities or financial losses. Only join groups with people you trust.
              </p>
            </div>

            <div className="legal-section">
              <h2>How Payment Tracking Works</h2>
              <p>
                GroupFund uses a <strong>two-step confirmation process</strong> to ensure accurate payment tracking:
              </p>
              
              <div style={{ marginTop: '2rem' }}>
                <h3>Step 1: Contributor Marks Payment as Paid</h3>
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
                  <strong>Note:</strong> For Birthday Groups, payments go to the celebrant. For Subscription Groups and General Groups, payments go to the admin (group creator).
                </p>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <h3>Step 2: Admin/Celebrant Confirms or Rejects</h3>
                <p>
                  The person receiving the contribution (celebrant for Birthday Groups, admin for Subscription/General Groups) then:
                </p>
                <ul>
                  <li>Receives a notification that a payment has been marked as "Paid"</li>
                  <li>Checks their bank account, mobile money, or other payment method</li>
                  <li>Verifies whether they actually received the payment</li>
                  <li>Marks it as either:
                    <ul style={{ marginTop: '0.5rem' }}>
                      <li><strong>"Confirmed"</strong> - if they received the payment</li>
                      <li><strong>"Not Received"</strong> - if they did not receive the payment</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #007bff' }}>
                <h3 style={{ marginTop: '0' }}>Why This Process?</h3>
                <p style={{ marginBottom: '0' }}>
                  This two-step system ensures accuracy and transparency. It prevents false "paid" statuses and helps resolve payment disputes by requiring both parties to confirm the transaction.
                </p>
              </div>
            </div>

            <div className="legal-section">
              <h2>Payment Statuses Explained</h2>
              <p>Here's what each payment status means:</p>
              <ul>
                <li><strong>Not Paid:</strong> The contributor has not yet marked their payment as paid</li>
                <li><strong>Paid (awaiting confirmation):</strong> The contributor has marked it as paid, but the admin/celebrant hasn't confirmed yet</li>
                <li><strong>Confirmed:</strong> The admin (for Subscription/General Groups) or celebrant (for Birthday Groups) has verified they received the payment</li>
                <li><strong>Not Received:</strong> The admin/celebrant has marked that they did not receive the payment</li>
                <li><strong>Overdue:</strong> The payment deadline has passed and the payment is still not confirmed</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>What Happens If Payment Is Marked "Not Received"?</h2>
              <p>
                If an admin or celebrant marks a payment as "Not Received":
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
              <h2>Your Responsibilities</h2>
              <p>When using GroupFund, you agree to:</p>
              <ul>
                <li><strong>Make payments outside the app:</strong> All payments happen directly between you and other group members</li>
                <li><strong>Accurately mark payment status:</strong> Only mark payments as "Paid" after you've actually made the payment</li>
                <li><strong>Verify payments before confirming:</strong> Admins and celebrants should check their accounts before confirming receipt</li>
                <li><strong>Resolve disputes directly:</strong> If there's a payment issue, work it out directly with the other party</li>
                <li><strong>Use appropriate payment methods:</strong> Choose payment methods that work for your group (bank transfers, mobile money, etc.)</li>
                <li><strong>Verify group admin identity:</strong> Before joining any group, verify the identity of the group admin. Only join groups with people you trust</li>
                <li><strong>Report violations:</strong> If you encounter groups or members engaging in spam, fraud, harassment, or other violations, report them through our <Link to="/report">Report page</Link> to help keep the platform safe</li>
              </ul>
              <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', borderRadius: '4px' }}>
                <strong>⚠️ Important Warning:</strong> GroupFund is not liable for any fraudulent activities or financial losses. Always verify the identity of group admins before joining and contributing. If you encounter suspicious behavior, report it immediately.
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
                GroupFund's role is limited to:
              </p>
              <ul>
                <li>Providing a platform to track payment statuses</li>
                <li>Organizing group information for birthdays, subscriptions, and events</li>
                <li>Sending reminders about upcoming contributions and deadlines</li>
                <li>Providing reporting tools to maintain platform safety</li>
                <li>Displaying payment history and transparency</li>
                <li>Calculating reliability scores based on payment behavior</li>
              </ul>
              <p>
                <strong>GroupFund is not responsible for:</strong>
              </p>
              <ul>
                <li>Payment disputes between members</li>
                <li>Failed or delayed payments</li>
                <li>Incorrect payment amounts</li>
                <li>Fraudulent transactions</li>
                <li>Any financial losses</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Why This Design?</h2>
              <p>
                GroupFund is designed this way for several important reasons:
              </p>
              <ul>
                <li><strong>Security:</strong> By not handling payments, we reduce security risks and don't store sensitive payment information</li>
                <li><strong>Flexibility:</strong> Works with any payment method your group prefers (bank transfers, mobile money, cash, etc.)</li>
                <li><strong>Global Access:</strong> Works in any country with any currency without payment processing restrictions</li>
                <li><strong>Simplicity:</strong> No need for payment integrations, fees, or complex financial regulations</li>
                <li><strong>Trust:</strong> Members maintain direct relationships and control over their payments</li>
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
                GroupFund is a tracking tool, not a payment processor. Contributors make payments outside the app and mark them as "Paid" in the app. Admins (for Subscription/General Groups) or celebrants (for Birthday Groups) then confirm receipt or mark as "Not Received." This two-step process ensures accuracy and transparency while keeping payments simple and secure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

