import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function IsraelLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Israel with GroupFund. Perfect for Israeli families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/israel",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Israel" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "ILS" },
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
        title="GroupFund Israel - Group Contributions App for Israel"
        description="Organize group contributions in Israel with GroupFund. Perfect for Israeli families, churches, schools, and groups. Support for ILS (Israeli Shekel). Free to start."
        keywords="group contributions Israel, Israeli contribution app, groupfund Israel, group contributions app Israel, ILS contribution tracker, Israel group payments"
        canonical="https://www.groupfund.app/locations/israel"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Israel 🇮🇱</h1>
          <p className="page-subtitle">
            Organize group contributions in Israel with GroupFund. Perfect for Israeli families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Israel</h2>
              <p>
                GroupFund is perfect for organizing group contributions in Israel. Whether you're managing contributions for your extended family, church members, school groups, or friend circles, GroupFund makes it simple and transparent.
              </p>
              <p>
                With support for Israeli Shekel (ILS) and local bank details, GroupFund is designed to work seamlessly for Israeli groups.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Israel</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇮🇱 Israeli Shekel (ILS) Support</h3>
                  <p>Full support for Israeli Shekel. Set contribution amounts in ILS, and local bank details are displayed automatically.</p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>Perfect for Israeli bank transfers. Members can transfer directly to celebrants' accounts.</p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Israeli Families</h3>
                  <p>Organize contributions for extended Israeli families. Track who has contributed across multiple family members.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Church Groups</h3>
                  <p>Ideal for Israeli churches organizing group contributions for members. Manage large congregations efficiently.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for Israeli schools, universities, and student groups organizing group contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>Native mobile app perfect for Israel's mobile-first culture. Access from anywhere, get push notifications.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Israel</h2>
              <ul className="scenarios-list">
                <li><strong>Family Group Contributions:</strong> Organize contributions for extended Israeli families.</li>
                <li><strong>Church Member Contributions:</strong> Manage group contributions for church members in Israeli churches.</li>
                <li><strong>School Groups:</strong> Organize contributions for teachers, staff, and students in Israeli schools.</li>
                <li><strong>Alumni Associations:</strong> Manage contributions for Israeli university and school alumni groups.</li>
                <li><strong>Workplace Groups:</strong> Organize office birthday funds for Israeli companies and organizations.</li>
                <li><strong>Friend Groups:</strong> Keep friend groups organized for birthday celebrations in Israel.</li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Israel</h2>
              <ol className="steps-list">
                <li><strong>Create Your Group:</strong> Set up a group with Israeli Shekel (ILS) as the currency.</li>
                <li><strong>Set Contribution Amounts:</strong> Set amounts in ILS (e.g., ₪50 or ₪100 per person).</li>
                <li><strong>Add Member Birthdays:</strong> Add all group member birthdays to the calendar.</li>
                <li><strong>Track Contributions:</strong> Members mark payments as paid after transferring to bank accounts.</li>
                <li><strong>Automatic Reminders:</strong> Get reminders 7 days before, 1 day before, and on deadline day.</li>
                <li><strong>Celebrate Together:</strong> Focus on celebrating birthdays instead of managing contributions.</li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why Israeli Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Israeli Shekel (ILS)</li>
                <li>Perfect for Israeli bank transfers</li>
                <li>Mobile-first design for Israel's mobile culture</li>
                <li>Free to use - no hidden fees</li>
                <li>Works for groups of any size</li>
                <li>Transparent tracking builds trust</li>
                <li>Automatic reminders reduce follow-ups</li>
                <li>Member reliability scores help make informed decisions</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Israel?</h2>
              <p>Join Israeli groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Israeli Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/tel-aviv">Tel Aviv →</Link>
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

