import React from 'react'
import SEO from '../components/SEO'
import '../App.css'

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy - GroupFund"
        description="Read GroupFund's Privacy Policy to understand how we collect, use, and protect your personal information when using our birthday contribution app."
        keywords="privacy policy, data protection, user privacy, groupfund privacy"
        canonical="https://groupfund.app/privacy"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-subtitle">
            Last updated: December 2025
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
                <li>Group information (group names, member details, birthday dates)</li>
                <li>Payment information (contribution amounts, payment statuses)</li>
                <li>Communication data (messages, feedback, support requests)</li>
              </ul>

              <h3>2.2 Automatically Collected Information</h3>
              <p>We may automatically collect certain information about your device and usage, including:</p>
              <ul>
                <li>Device information (device type, operating system, unique device identifiers)</li>
                <li>Usage data (features used, pages viewed, time spent in app)</li>
                <li>Log information (IP address, access times, error logs)</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process and manage group contributions and payments</li>
                <li>Send you notifications and reminders about birthdays and contributions</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>4. Information Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
              <ul>
                <li><strong>Within Your Groups:</strong> Information you provide (name, contribution status) is visible to other members of groups you join</li>
                <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of assets</li>
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
              <p>
                <strong>Important:</strong> GroupFund does not process payments directly. We do not store your credit card information, or payment credentials. All payments are made directly between group members using their preferred payment methods. We only track payment statuses for organizational purposes.
              </p>
            </div>

            <div className="legal-section">
              <h2>7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of certain communications</li>
                <li>Export your data</li>
              </ul>
              <p><strong>Deleting Your Account:</strong> You can delete your account at any time by logging into the app and accessing the account deletion option in your settings. This will permanently delete your account and associated data. For more information, visit our <a href="/delete-account">Delete Account page</a>.</p>
              <p>To exercise other rights or if you need assistance, please contact us at support@groupfund.app</p>
            </div>

            <div className="legal-section">
              <h2>8. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. When you delete your account, we will delete or anonymize your personal information, except where we are required to retain it for legal purposes.
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
              <h2>12. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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

