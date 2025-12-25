import React from 'react'
import SEO from '../components/SEO'
import '../App.css'

export default function AccessibilityPage() {
  return (
    <>
      <SEO
        title="Accessibility Statement - GroupFund"
        description="GroupFund is committed to making our website and mobile app accessible to everyone. Learn about our accessibility features and how to report issues."
        keywords="accessibility, WCAG, inclusive design, disability access, assistive technology, groupfund accessibility"
        canonical="https://www.groupfund.app/accessibility"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Accessibility Statement</h1>
          <p className="page-subtitle">
            Committed to making GroupFund accessible to everyone
          </p>
        </div>
      </section>

      <section className="legal-page">
        <div className="container">
          <div className="legal-content">
            <div className="legal-section">
              <h2>Our Commitment</h2>
              <p>
                GroupFund is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to achieve our goals.
              </p>
              <p>
                We believe that technology should be accessible to everyone, regardless of ability. Our goal is to provide an inclusive experience that works for all users, including those who use assistive technologies.
              </p>
            </div>

            <div className="legal-section">
              <h2>Accessibility Standards</h2>
              <p>
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and user-friendly for everyone.
              </p>
              <p>
                Our accessibility efforts include:
              </p>
              <ul>
                <li>Semantic HTML structure for screen readers</li>
                <li>Proper heading hierarchy and navigation</li>
                <li>Alt text for images and meaningful link text</li>
                <li>Keyboard navigation support</li>
                <li>Sufficient color contrast ratios</li>
                <li>Responsive design for various screen sizes</li>
                <li>ARIA labels where appropriate</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Accessibility Features</h2>
              
              <h3>Keyboard Navigation</h3>
              <p>
                Our website and app can be navigated using only a keyboard. All interactive elements are accessible via keyboard shortcuts, and we provide clear focus indicators.
              </p>

              <h3>Screen Reader Support</h3>
              <p>
                We use semantic HTML and ARIA attributes to ensure that screen readers can properly interpret and announce content. Our pages include:
              </p>
              <ul>
                <li>Proper heading structure (h1, h2, h3, etc.)</li>
                <li>Descriptive alt text for images</li>
                <li>ARIA labels for interactive elements</li>
                <li>Landmark regions for navigation</li>
              </ul>

              <h3>Color and Contrast</h3>
              <p>
                We maintain sufficient color contrast ratios to ensure text is readable for users with visual impairments. We also ensure that information is not conveyed by color alone.
              </p>

              <h3>Text Size and Scaling</h3>
              <p>
                Our website and app support text scaling up to 200% without loss of functionality. Users can adjust text size through their browser or device settings.
              </p>

              <h3>Mobile Accessibility</h3>
              <p>
                Our mobile app is designed with accessibility in mind, supporting:
              </p>
              <ul>
                <li>VoiceOver (iOS) and TalkBack (Android) compatibility</li>
                <li>Touch target sizes that meet accessibility guidelines</li>
                <li>Responsive layouts that work with screen magnifiers</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Areas for Improvement</h2>
              <p>
                We recognize that accessibility is an ongoing effort. We are actively working to improve accessibility in the following areas:
              </p>
              <ul>
                <li>Enhanced keyboard navigation in complex interfaces</li>
                <li>Additional ARIA labels and descriptions</li>
                <li>Improved focus management in dynamic content</li>
                <li>More comprehensive screen reader testing</li>
                <li>User testing with people who use assistive technologies</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Third-Party Content</h2>
              <p>
                Some content on our website may be provided by third parties. While we strive to ensure all content meets accessibility standards, we may not have full control over third-party content. If you encounter accessibility issues with third-party content, please let us know.
              </p>
            </div>

            <div className="legal-section">
              <h2>Assistive Technologies</h2>
              <p>
                We test our website and app with various assistive technologies, including:
              </p>
              <ul>
                <li>Screen readers (NVDA, JAWS, VoiceOver, TalkBack)</li>
                <li>Screen magnifiers</li>
                <li>Voice recognition software</li>
                <li>Keyboard-only navigation</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Feedback and Support</h2>
              <p>
                We welcome feedback on the accessibility of GroupFund. If you encounter any accessibility barriers or have suggestions for improvement, please contact us. We are committed to addressing accessibility issues promptly.
              </p>
              <p>
                When reporting accessibility issues, please include:
              </p>
              <ul>
                <li>The page or feature where you encountered the issue</li>
                <li>A description of the problem</li>
                <li>The assistive technology you're using (if applicable)</li>
                <li>Your device and browser information</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Ongoing Efforts</h2>
              <p>
                Accessibility is not a one-time effort but an ongoing commitment. We regularly:
              </p>
              <ul>
                <li>Conduct accessibility audits and testing</li>
                <li>Review and update our accessibility practices</li>
                <li>Train our team on accessibility best practices</li>
                <li>Stay informed about new accessibility standards and technologies</li>
                <li>Incorporate accessibility into our design and development processes</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Contact Us</h2>
              <p>
                If you have questions, concerns, or feedback about accessibility at GroupFund, please contact us:
              </p>
              <p>
                <strong>Email:</strong> accessibility@groupfund.app<br />
                <strong>General Support:</strong> support@groupfund.app<br />
                <strong>Website:</strong> <a href="/contact">Contact Page</a>
              </p>
              <p>
                We aim to respond to accessibility inquiries within 48 hours.
              </p>
            </div>

            <div className="legal-section">
              <h2>Last Updated</h2>
              <p>
                This accessibility statement was last updated in December 2025. We will update this statement as we make improvements to accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

