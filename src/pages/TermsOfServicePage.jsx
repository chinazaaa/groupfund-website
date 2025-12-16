import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function TermsOfServicePage() {
  return (
    <>
      <SEO
        title="Terms of Service - GroupFund"
        description="Read GroupFund's Terms of Service to understand the rules and guidelines for using our birthday contribution app and services."
        keywords="terms of service, user agreement, terms and conditions, groupfund terms"
        canonical="https://groupfund.app/terms"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Terms of Service</h1>
          <p className="page-subtitle">
            Last updated:  December 2025
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
                GroupFund is a mobile application that helps users organize and track group birthday contributions. The Service allows users to:
              </p>
              <ul>
                <li>Create and manage groups</li>
                <li>Invite members who add their own birthday dates</li>
                <li>Set contribution amounts and track payment statuses</li>
                <li>Receive automatic reminders about upcoming birthdays</li>
                <li>View contribution history and calendars</li>
              </ul>
              <p>
                <strong>Important:</strong> GroupFund is a tracking and organization tool. We do not process, hold, or facilitate payments. All payments are made directly between group members using their preferred payment methods.
              </p>
              <p>
                For more detailed information about how payment tracking works, including the two-step confirmation process, please see our <Link to="/app-rules">App Rules</Link> page.
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
              <h2>5. Payment and Financial Transactions</h2>
              <p>
                <strong>GroupFund does not process payments.</strong> We are a tracking and organization tool only. All financial transactions occur directly between group members using their chosen payment methods (bank transfers, mobile money, etc.).
              </p>
              <p>You acknowledge and agree that:</p>
              <ul>
                <li>GroupFund is not responsible for any payment disputes between group members</li>
                <li>We do not guarantee the accuracy of payment statuses reported by users</li>
                <li>You are solely responsible for verifying payments before marking them as confirmed</li>
                <li>We are not liable for any financial losses or disputes arising from group contributions</li>
              </ul>
              <p>
                For more information about how payment tracking works, including the contributor and celebrant confirmation process, visit our <Link to="/app-rules">App Rules</Link> page.
              </p>
            </div>

            <div className="legal-section">
              <h2>6. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by GroupFund and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p>
                You are granted a limited, non-exclusive, non-transferable license to access and use the Service for personal, non-commercial purposes in accordance with these Terms.
              </p>
            </div>

            <div className="legal-section">
              <h2>7. User Content</h2>
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
              <h2>8. Privacy</h2>
              <p>
                Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your information.
              </p>
            </div>

            <div className="legal-section">
              <h2>9. Service Availability</h2>
              <p>
                We strive to provide reliable service but do not guarantee that the Service will be available at all times or free from errors, interruptions, or defects. We reserve the right to modify, suspend, or discontinue the Service at any time without notice.
              </p>
            </div>

            <div className="legal-section">
              <h2>10. Limitation of Liability</h2>
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
              <h2>11. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless GroupFund and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from your use of the Service or violation of these Terms.
              </p>
            </div>

            <div className="legal-section">
              <h2>12. Termination</h2>
              <p>
                We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will cease immediately.
              </p>
              <p>
                You may terminate your account at any time by deleting it through the app settings or contacting us at support@groupfund.app
              </p>
            </div>

            <div className="legal-section">
              <h2>13. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use the Service after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>

            <div className="legal-section">
              <h2>14. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. Any disputes arising from these Terms or the Service shall be resolved through appropriate legal channels in accordance with your local jurisdiction and applicable international laws.
              </p>
            </div>

            <div className="legal-section">
              <h2>15. Severability</h2>
              <p>
                If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full effect.
              </p>
            </div>

            <div className="legal-section">
              <h2>16. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> support@groupfund.app<br />
                <strong>Website:</strong> <a href="/contact">Contact Page</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

