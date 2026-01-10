import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function MacauLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Macau with GroupFund. Perfect for Macanese families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/macau",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Macau" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "MOP" },
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
        title="GroupFund Macau - Group Contributions App for Macau"
        description="Organize group contributions in Macau with GroupFund. Perfect for Macanese families, churches, schools, and groups. Support for MOP (Macanese Pataca). Free to start."
        keywords="group contributions Macau, Macanese contribution app, groupfund Macau, group contributions app Macau, MOP contribution tracker, Macau group payments"
        canonical="https://www.groupfund.app/locations/macau"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Macau 🇲🇴</h1>
          <p className="page-subtitle">
            Organize group contributions in Macau with GroupFund. Perfect for Macanese families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Macau</h2>
              <p>
                GroupFund is perfect for organizing group contributions in Macau. Whether you're managing contributions for your extended family, church members, school groups, or friend circles, GroupFund makes it simple and transparent.
              </p>
              <p>
                With support for Macanese Pataca (MOP) and local bank details, GroupFund is designed to work seamlessly for Macanese groups.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Macau</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇲🇴 Macanese Pataca (MOP) Support</h3>
                  <p>Full support for Macanese Pataca. Set contribution amounts in MOP, and local bank details are displayed automatically.</p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>Perfect for Macanese bank transfers. Members can transfer directly to celebrants' accounts.</p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Macanese Families</h3>
                  <p>Organize contributions for extended Macanese families. Track who has contributed across multiple family members.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Church Groups</h3>
                  <p>Ideal for Macanese churches organizing group contributions for members. Manage large congregations efficiently.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for Macanese schools, universities, and student groups organizing group contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>Native mobile app perfect for Macau's mobile-first culture. Access from anywhere, get push notifications.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Macau</h2>
              <ul className="scenarios-list">
                <li><strong>Family Group Contributions:</strong> Organize contributions for extended Macanese families.</li>
                <li><strong>Church Member Contributions:</strong> Manage group contributions for church members in Macanese churches.</li>
                <li><strong>School Groups:</strong> Organize contributions for teachers, staff, and students in Macanese schools.</li>
                <li><strong>Alumni Associations:</strong> Manage contributions for Macanese university and school alumni groups.</li>
                <li><strong>Workplace Groups:</strong> Organize office birthday funds for Macanese companies and organizations.</li>
                <li><strong>Friend Groups:</strong> Keep friend groups organized for birthday celebrations in Macau.</li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Macau</h2>
              <ol className="steps-list">
                <li><strong>Create Your Group:</strong> Set up a group with Macanese Pataca (MOP) as the currency.</li>
                <li><strong>Set Contribution Amounts:</strong> Set amounts in MOP (e.g., 50 MOP or 100 MOP per person).</li>
                <li><strong>Add Member Birthdays:</strong> Add all group member birthdays to the calendar.</li>
                <li><strong>Track Contributions:</strong> Members mark payments as paid after transferring to bank accounts.</li>
                <li><strong>Automatic Reminders:</strong> Get reminders 7 days before, 1 day before, and on deadline day.</li>
                <li><strong>Celebrate Together:</strong> Focus on celebrating birthdays instead of managing contributions.</li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why Macanese Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Macanese Pataca (MOP)</li>
                <li>Perfect for Macanese bank transfers</li>
                <li>Mobile-first design for Macau's mobile culture</li>
                <li>Free to use - no hidden fees</li>
                <li>Works for groups of any size</li>
                <li>Transparent tracking builds trust</li>
                <li>Automatic reminders reduce follow-ups</li>
                <li>Member reliability scores help make informed decisions</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Macau?</h2>
              <p>Join Macanese groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Macanese Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/macau-city">Macau City →</Link>
                <Link to="/locations">All Locations →</Link>
                <Link to="/use-cases">View Use Cases →</Link>
                <Link to="/features">View Features →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

