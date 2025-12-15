import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function CanadaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize birthday contributions in Canada with GroupFund. Perfect for Canadian families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/canada",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Canada" },
      "serviceType": "Birthday Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CAD" },
      "sameAs": ["https://groupfund.app"]
    }
    const existingScript = document.querySelector('script[data-localbusiness-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-localbusiness-schema', 'true')
    script.textContent = JSON.stringify(localBusinessStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-localbusiness-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  return (
    <>
      <SEO
        title="GroupFund Canada - Birthday Contributions App for Canada"
        description="Organize birthday contributions in Canada with GroupFund. Perfect for Canadian families, churches, schools, and groups. Support for CAD (Canadian Dollar). Free to start."
        keywords="birthday contributions Canada, Canadian birthday app, groupfund Canada, birthday contributions app Canada, CAD birthday tracker, Canada group payments"
        canonical="https://groupfund.app/locations/canada"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Canada 🇨🇦</h1>
          <p className="page-subtitle">
            Organize birthday contributions in Canada with GroupFund. Perfect for Canadian families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Canada</h2>
              <p>
                GroupFund is perfect for organizing birthday contributions in Canada. Whether you're managing contributions for your extended family, church members, school groups, or friend circles, GroupFund makes it simple and transparent.
              </p>
              <p>
                With support for Canadian Dollar (CAD) and local bank details, GroupFund is designed to work seamlessly for Canadian groups.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Canada</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇨🇦 Canadian Dollar (CAD) Support</h3>
                  <p>Full support for Canadian Dollar. Set contribution amounts in CAD, and local bank details are displayed automatically.</p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>Perfect for Canadian bank transfers. Members can transfer directly to celebrants' bank accounts.</p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Canadian Families</h3>
                  <p>Organize contributions for extended Canadian families. Track who has contributed across multiple family members.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Church Groups</h3>
                  <p>Ideal for Canadian churches organizing birthday contributions for members. Manage large congregations efficiently.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for Canadian schools, universities, and student groups organizing birthday contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>Native mobile app perfect for Canada's mobile culture. Access from anywhere, get push notifications.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Canada</h2>
              <ul className="scenarios-list">
                <li><strong>Family Birthday Contributions:</strong> Organize contributions for extended Canadian families.</li>
                <li><strong>Church Member Contributions:</strong> Manage birthday contributions for church members in Canadian churches.</li>
                <li><strong>School Groups:</strong> Organize contributions for teachers, staff, and students in Canadian schools.</li>
                <li><strong>Alumni Associations:</strong> Manage contributions for Canadian university and school alumni groups.</li>
                <li><strong>Workplace Groups:</strong> Organize office birthday funds for Canadian companies and organizations.</li>
                <li><strong>Friend Groups:</strong> Keep friend groups organized for birthday celebrations in Canada.</li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Canada</h2>
              <ol className="steps-list">
                <li><strong>Create Your Group:</strong> Set up a group with Canadian Dollar (CAD) as the currency.</li>
                <li><strong>Set Contribution Amounts:</strong> Set amounts in CAD (e.g., C$25 or C$50 per person).</li>
                <li><strong>Add Member Birthdays:</strong> Add all group member birthdays to the calendar.</li>
                <li><strong>Track Contributions:</strong> Members mark payments as paid after transferring to bank accounts.</li>
                <li><strong>Automatic Reminders:</strong> Get reminders 7 days before, 1 day before, and on deadline day.</li>
                <li><strong>Celebrate Together:</strong> Focus on celebrating birthdays instead of managing contributions.</li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why Canadian Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Canadian Dollar (CAD)</li>
                <li>Perfect for Canadian bank transfers</li>
                <li>Mobile-first design</li>
                <li>Free to use - no hidden fees</li>
                <li>Works for groups of any size</li>
                <li>Transparent tracking builds trust</li>
                <li>Automatic reminders reduce follow-ups</li>
                <li>Member reliability scores help make informed decisions</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Birthday Contributions in Canada?</h2>
              <p>Join Canadian groups using GroupFund to make birthday celebrations organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Canadian Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations">All Locations →</Link>
                <Link to="/use-cases">View Use Cases →</Link>
                <Link to="/features">View Features →</Link>
                <Link to="/pricing">See Pricing →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

