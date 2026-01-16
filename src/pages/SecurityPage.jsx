import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SecurityPage() {
  return (
    <>
      <SEO
        title="Security & Trust - GroupFund"
        description="Learn about GroupFund's security measures, data protection practices, and commitment to keeping your information safe and secure."
        keywords="security, data protection, privacy, encryption, secure payments, groupfund security, trust"
        canonical="https://www.groupfund.app/security"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Security & Trust</h1>
          <p className="page-subtitle">
            Your security and privacy are our top priorities
          </p>
        </div>
      </section>

      <section className="legal-page">
        <div className="container">
          <div className="legal-content">
            <div className="legal-section">
              <h2>Our Commitment to Security</h2>
              <p>
                At GroupFund, we take the security of your data seriously. We understand that you're entrusting us with sensitive information about your groups, members, and financial contributions. That's why we've implemented comprehensive security measures to protect your information at every level.
              </p>
            </div>

            <div className="legal-section">
              <h2>Data Encryption</h2>
              <p>
                All data transmitted between your device and our servers is encrypted using industry-standard TLS (Transport Layer Security) encryption. This ensures that your information cannot be intercepted or read by unauthorized parties during transmission.
              </p>
              <ul>
                <li><strong>In Transit:</strong> All communications are encrypted using TLS 1.2 or higher</li>
                <li><strong>At Rest:</strong> Sensitive data stored in our databases is encrypted using advanced encryption standards</li>
                <li><strong>End-to-End Protection:</strong> Your data is protected from the moment it leaves your device until it reaches our secure servers</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Payment Security</h2>
              <p style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#d1fae5', borderLeft: '4px solid #10b981', borderRadius: '4px', fontSize: '1.05rem' }}>
                <strong>🔒 Important: We Do NOT Store Your Card Information</strong><br />
                GroupFund does <strong>NOT</strong> store your debit card number, CVV, or expiration date. All card information is handled securely by Stripe, a PCI-DSS Level 1 compliant payment processor. We never see or have access to your full card details.
              </p>
              <p>
                <strong>Automatic Payment Processing:</strong> GroupFund processes automatic payments securely via Stripe, a PCI-DSS Level 1 compliant payment processor. This means:
              </p>
              <ul>
                <li><strong>We never see or store your full debit card number, CVV, or expiration date</strong> - All card data is handled exclusively by Stripe</li>
                <li><strong>All card data is handled securely by Stripe (PCI-DSS compliant)</strong> - Stripe maintains the highest security standards and compliance certifications</li>
                <li><strong>We only store payment method tokens (provided by Stripe) for future charges</strong> - These tokens cannot be used to access your actual card information</li>
                <li><strong>All payment processing is encrypted and secure</strong> - Transactions are protected end-to-end</li>
                <li><strong>Manual payments are made directly between group members</strong> - Using their preferred payment methods outside the app</li>
              </ul>
              <p>
                <strong>How It Works:</strong> When you add a debit card for auto-pay, the card information is sent directly to Stripe (not to GroupFund). Stripe securely stores your card and provides us with a token that we can use to process future payments. We cannot access your actual card number, CVV, or expiration date from this token.
              </p>
              <p>
                <strong>Wallet Security:</strong> Your in-app wallet balance is stored securely. Withdrawals require two-factor authentication and are subject to a 24-hour security hold period for fraud prevention.
              </p>
              <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f0f9ff', borderLeft: '4px solid #007bff', borderRadius: '4px' }}>
                <strong>🔒 Secure Processing:</strong> All automatic payments are processed via Stripe, which maintains the highest security standards (PCI-DSS Level 1 compliance). We use industry-standard encryption and security measures to protect your payment information. Your card data never touches our servers - it's all handled by Stripe's secure infrastructure.
              </p>
              <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', borderRadius: '4px' }}>
                <strong>⚠️ Security Warning:</strong> Please verify the identity of the group admin before joining. GroupFund is not liable for any fraudulent activities or financial losses. Only join groups with people you trust.
              </p>
            </div>

            <div className="legal-section">
              <h2>Account Security</h2>
              <h3>Authentication</h3>
              <ul>
                <li><strong>Secure Signup:</strong> Sign up with email. All accounts require verification before activation</li>
                <li><strong>OTP Verification:</strong> One-Time Password (OTP) verification via email ensures account authenticity. You'll receive an OTP code when signing up or when verification is required. OTPs expire after a short period for security</li>
                <li><strong>Secure Passwords:</strong> We require strong passwords and use secure hashing algorithms to store them. Passwords are never stored in plain text</li>
                <li><strong>Password Reset:</strong> Reset passwords securely via OTP sent to your email. This ensures only authorized users can reset account passwords</li>
                <li><strong>Change Password:</strong> If you're logged in, you can change your password from your account settings. You'll need to enter your current password and then set a new one. This helps keep your account secure and allows you to update your password regularly</li>
                <li><strong>JWT Authentication:</strong> Secure login using JSON Web Tokens (JWT) that are cryptographically signed and expire after periods of inactivity</li>
                <li><strong>Two-Factor Authentication (2FA):</strong> Enhanced security for critical actions (adding/deleting debit cards, changing bank account details, withdrawing funds, enabling/disabling auto-pay). 2FA uses authenticator apps (Google Authenticator, Authy, Microsoft Authenticator, or similar) to generate verification codes. You must set up an authenticator app in your account settings to use these features. Note: Two-factor authentication (2FA) is only available on mobile apps (Android, iOS), not on the web version.</li>
                <li><strong>Email Verification:</strong> Email OTP verification for account signup and password resets ensures account authenticity. This is separate from 2FA and provides an additional layer of security for account access.</li>
                <li><strong>Session Management:</strong> Secure session tokens that expire after periods of inactivity. You'll be automatically logged out for security</li>
                <li><strong>Device Recognition:</strong> We monitor for suspicious login attempts from unrecognized devices</li>
              </ul>

              <h3>User Verification System</h3>
              <ul>
                <li>All users must verify their accounts via OTP before full access is granted</li>
                <li>User verification status is displayed on profiles to build trust within groups</li>
                <li>Users can resend OTP codes if they don't receive them initially</li>
                <li>Account status (active/inactive) is managed to ensure only active users participate in groups</li>
              </ul>

              <h3>Access Controls</h3>
              <ul>
                <li>Role-based access control ensures users only see data they're authorized to access</li>
                <li>Group administrators have appropriate permissions to manage their groups</li>
                <li>Regular security audits to identify and fix potential vulnerabilities</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Infrastructure Security</h2>
              <h3>Server Security</h3>
              <ul>
                <li>Our servers are hosted on secure, reputable cloud infrastructure providers</li>
                <li>Regular security updates and patches are applied to all systems</li>
                <li>Intrusion detection and prevention systems monitor for suspicious activity</li>
                <li>Firewalls and network security measures protect against unauthorized access</li>
              </ul>

              <h3>Backup and Recovery</h3>
              <ul>
                <li>Regular automated backups of all data</li>
                <li>Backups are encrypted and stored in secure, geographically distributed locations</li>
                <li>Disaster recovery plans ensure service continuity</li>
                <li>Regular testing of backup and recovery procedures</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Email System Security</h2>
              <p>
                GroupFund uses a secure email service (Resend) to send important communications:
              </p>
              <ul>
                <li><strong>OTP Emails:</strong> Secure One-Time Password codes sent for account verification and password resets</li>
                <li><strong>Password Reset Emails:</strong> Secure links and OTP codes for password recovery</li>
                <li><strong>Birthday Wish Emails:</strong> Automated birthday wishes sent to celebrants</li>
                <li><strong>Birthday Reminder Emails:</strong> Reminders sent 7 days before, 1 day before, and on the birthday deadline</li>
                <li><strong>Overdue Contribution Reminders:</strong> Notifications about missed payment deadlines</li>
                <li><strong>Comprehensive Birthday Reminders:</strong> Summary emails with multiple upcoming birthdays</li>
                <li><strong>Contact Form Confirmations:</strong> Confirmation emails when you contact support</li>
                <li><strong>Waitlist Confirmations:</strong> Confirmation emails when joining the waitlist</li>
              </ul>
              <p>
                All emails are sent through secure, encrypted channels. We never share your email address with third parties except for email delivery services. You can customize email notification preferences in your account settings.
              </p>
            </div>

            <div className="legal-section">
              <h2>Privacy Protection</h2>
              <p>
                We are committed to protecting your privacy. Our privacy practices include:
              </p>
              <ul>
                <li><strong>Data Minimization:</strong> We only collect the data necessary to provide our services</li>
                <li><strong>Purpose Limitation:</strong> Your data is only used for the purposes you've consented to</li>
                <li><strong>Access Controls:</strong> Only authorized personnel have access to user data, and access is logged and monitored</li>
                <li><strong>Data Retention:</strong> We only retain your data for as long as necessary to provide our services</li>
                <li><strong>Right to Deletion:</strong> You can delete your account and all associated data at any time</li>
                <li><strong>Profile Management:</strong> You have full control over your profile information and can update it at any time</li>
              </ul>
              <p>
                For more details, please review our <a href="/privacy">Privacy Policy</a>.
              </p>
            </div>

            <div className="legal-section">
              <h2>Compliance and Certifications</h2>
              <p>
                We are committed to maintaining compliance with relevant data protection regulations, including:
              </p>
              <ul>
                <li><strong>GDPR:</strong> General Data Protection Regulation (for European users)</li>
                <li><strong>CCPA:</strong> California Consumer Privacy Act (for California users)</li>
                <li><strong>Industry Standards:</strong> We follow industry best practices for data security and privacy</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Security Monitoring</h2>
              <p>
                We continuously monitor our systems for security threats and vulnerabilities:
              </p>
              <ul>
                <li>24/7 security monitoring and incident response</li>
                <li>Regular security audits and penetration testing</li>
                <li>Automated threat detection systems</li>
                <li>Regular security training for our team</li>
                <li>Vulnerability disclosure program for security researchers</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Your Role in Security</h2>
              <p>
                Security is a shared responsibility. Here's how you can help keep your account secure:
              </p>
              <ul>
                <li>Use a strong, unique password for your GroupFund account</li>
                <li>Set up two-factor authentication using an authenticator app (Google Authenticator, Authy, Microsoft Authenticator, or similar) for critical actions. Note: 2FA is only available on mobile apps (Android, iOS)</li>
                <li>Don't share your account credentials with anyone</li>
                <li>Log out of your account when using shared devices</li>
                <li>Keep your device's operating system and apps updated</li>
                <li>Be cautious of phishing attempts and suspicious links</li>
                <li>Monitor your wallet balance and transaction history regularly</li>
                <li>Review security email notifications for all critical actions</li>
                <li>Report any suspicious activity to security@groupfund.app immediately</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Reporting Issues</h2>
              
              <h3>Reporting Groups or Members</h3>
              <p>
                If you encounter a group or member that violates our community guidelines, you can report them through our <Link to="/report">Report page</Link>. You can report for:
              </p>
              <ul>
                <li><strong>Spam:</strong> Unwanted or repetitive content</li>
                <li><strong>Inappropriate:</strong> Content violating community standards</li>
                <li><strong>Fraud:</strong> Suspected fraudulent activities or scams</li>
                <li><strong>Harassment:</strong> Bullying or abusive behavior</li>
                <li><strong>Other:</strong> Any other violation of our terms</li>
              </ul>
              <p>
                <strong>Impact of Reports:</strong> Reports affect group health scores (pending reports reduce by 5 points) and member status (users with 3+ pending or 5+ total reports are marked inactive). Groups with 3+ pending reports are automatically closed. All reports are reviewed by our team.
              </p>

              <h3>Reporting Security Issues</h3>
              <p>
                If you discover a security vulnerability or have concerns about the security of our service, please report it to us immediately. We take all security reports seriously and will investigate promptly.
              </p>
              <p>
                <strong>Email:</strong> security@groupfund.app<br />
                <strong>Response Time:</strong> We aim to respond to security reports within 48 hours
              </p>
              <p>
                Please do not publicly disclose security vulnerabilities until we've had a chance to address them.
              </p>
            </div>

            <div className="legal-section">
              <h2>Updates to Our Security Practices</h2>
              <p>
                We continuously improve our security measures and may update this page from time to time to reflect changes in our practices or technology. We encourage you to review this page periodically to stay informed about how we protect your information.
              </p>
            </div>

            <div className="legal-section">
              <h2>Contact Us</h2>
              <p>
                If you have any questions about our security practices or this Security page, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> support@groupfund.app<br />
                <strong>Security Issues:</strong> security@groupfund.app<br />
                <strong>Website:</strong> <a href="/contact">Contact Page</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

