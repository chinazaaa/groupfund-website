import React from 'react'
import SEO from '../components/SEO'
import '../App.css'

export default function SecurityPage() {
  return (
    <>
      <SEO
        title="Security & Trust - GroupFund"
        description="Learn about GroupFund's security measures, data protection practices, and commitment to keeping your information safe and secure."
        keywords="security, data protection, privacy, encryption, secure payments, groupfund security, trust"
        canonical="https://groupfund.app/security"
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
              <p>
                <strong>Important:</strong> GroupFund does not process, hold, or store payment information. We are a tracking and organization tool only. This means:
              </p>
              <ul>
                <li>We never see or store your credit card numbers or payment credentials</li>
                <li>All payments are made directly between group members using their preferred payment methods</li>
                <li>We only track payment statuses (paid/unpaid) for organizational purposes</li>
                <li>Your financial information except your bank account details never passes through our systems</li>
              </ul>
              <p>
                This design significantly reduces security risks by ensuring that sensitive payment information is never stored on our servers.
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
                <li><strong>Multi-Factor Authentication:</strong> Available as an additional layer of security for your account</li>
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
                <li>Enable multi-factor authentication if available</li>
                <li>Don't share your account credentials with anyone</li>
                <li>Log out of your account when using shared devices</li>
                <li>Keep your device's operating system and apps updated</li>
                <li>Be cautious of phishing attempts and suspicious links</li>
                <li>Report any suspicious activity to us immediately</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Reporting Security Issues</h2>
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

