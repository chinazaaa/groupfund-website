import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ItalyLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Italy with GroupFund. Perfect for Italian families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/italy",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Italy" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
      "sameAs": ["https://www.groupfund.app"]
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
        title="GroupFund Italy - Group Contributions App for Italy"
        description="Organize group contributions in Italy with GroupFund. Perfect for Italian families, churches, schools, and groups. Support for EUR (Euro). Free to start."
        keywords="group contributions Italy, Italy contribution app, groupfund Italy, group contributions app Italy, EUR contribution tracker, Italy group payments"
        canonical="https://www.groupfund.app/locations/italy"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Italy 🇮🇹</h1>
          <p className="page-subtitle">
            Organize group contributions in Italy with GroupFund. Perfect for Italian families, churches, schools, and groups.
          </p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Italy</h2>
              <p>
                GroupFund is perfect for organizing group contributions in Italy. Whether you're managing contributions for your extended family,
                church members, school groups, or friend circles, GroupFund makes it simple and transparent.
              </p>
              <p>
                With support for Euro (EUR) and local bank details, GroupFund is designed to work seamlessly for Italian groups.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Italy</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇮🇹 Euro (EUR) Support</h3>
                  <p>
                    Full support for Euro. Set contribution amounts in EUR, and local bank details are displayed automatically.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>
                    Perfect for Italian bank transfers and SEPA payments. Members can transfer directly to celebrants' bank accounts.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Italian Families</h3>
                  <p>
                    Organize contributions for extended Italian families. Track who has contributed across multiple family members.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Church Groups</h3>
                  <p>
                    Ideal for Italian churches organizing group contributions for members. Manage large congregations efficiently.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>
                    Perfect for Italian schools, universities, and student groups organizing group contributions.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>
                    Native mobile app perfect for Italy's mobile users. Access from anywhere and get push notifications.
                  </p>
                </div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Italy</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize contributions for extended Italian families.
                </li>
                <li>
                  <strong>Church Member Contributions:</strong> Manage group contributions for church members in Italy.
                </li>
                <li>
                  <strong>School Groups:</strong> Organize contributions for teachers, staff, and students in Italian schools.
                </li>
                <li>
                  <strong>Alumni Associations:</strong> Manage contributions for Italian university and school alumni groups.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Organize office birthday funds for Italian companies and organizations.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Keep friend groups organized for birthday celebrations in Italy.
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Italy</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Euro (EUR) as the currency.
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Set amounts in EUR (e.g., €10, €20, or €50 per person).
                </li>
                <li>
                  <strong>Add Member Birthdays:</strong> Add all group member birthdays to the calendar.
                </li>
                <li>
                  <strong>Track Contributions:</strong> Members mark payments as paid after transferring via bank transfer or SEPA.
                </li>
                <li>
                  <strong>Automatic Reminders:</strong> Get reminders 7 days before, 1 day before, and on deadline day.
                </li>
                <li>
                  <strong>Celebrate Together:</strong> Focus on celebrating birthdays instead of managing contributions.
                </li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why Italian Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Euro (EUR)</li>
                <li>Works with local Italian bank transfers and SEPA</li>
                <li>Mobile-first design</li>
                <li>Free to use - no hidden fees</li>
                <li>Works for groups of any size</li>
                <li>Transparent tracking builds trust</li>
                <li>Automatic reminders reduce follow-ups</li>
                <li>Member reliability scores help make informed decisions</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Italy?</h2>
              <p>Join Italian groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Italy Group
                </Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">
                  See How It Works
                </Link>
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
