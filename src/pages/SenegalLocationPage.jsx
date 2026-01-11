import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SenegalLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Senegal with GroupFund. Perfect for Senegalese families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/senegal",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Senegal" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "XOF" },
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
        title="GroupFund Senegal - Group Contributions App for Senegal"
        description="Organize group contributions in Senegal with GroupFund. Perfect for Senegalese families, churches, schools, and groups. Support for XOF (West African CFA Franc). Free to start."
        keywords="group contributions Senegal, Senegalese contribution app, groupfund Senegal, group contributions app Senegal, XOF contribution tracker, Senegal group payments"
        canonical="https://www.groupfund.app/locations/senegal"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Senegal 🇸🇳</h1>
          <p className="page-subtitle">
            Organize group contributions in Senegal with GroupFund. Perfect for Senegalese families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Senegal</h2>
              <p>
                GroupFund is perfect for organizing group contributions in Senegal. Whether you're managing contributions for your extended family, church members, school groups, or friend circles, GroupFund makes it simple and transparent.
              </p>
              <p>
                With support for West African CFA Franc (XOF) and local bank details, GroupFund is designed to work seamlessly for Senegalese groups.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Senegal</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇸🇳 West African CFA Franc (XOF) Support</h3>
                  <p>Full support for West African CFA Franc. Set contribution amounts in XOF, and local bank details are displayed automatically.</p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>Perfect for Senegalese bank transfers and mobile money. Members can transfer directly to celebrants' accounts.</p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Senegalese Families</h3>
                  <p>Organize contributions for extended Senegalese families. Track who has contributed across multiple family members.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Church Groups</h3>
                  <p>Ideal for Senegalese churches organizing group contributions for members. Manage large congregations efficiently.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for Senegalese schools, universities, and student groups organizing group contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>Native mobile app perfect for Senegal's mobile-first culture. Access from anywhere, get push notifications.</p>
                </div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Senegal</h2>
              <ul className="scenarios-list">
                <li><strong>Family Group Contributions:</strong> Organize contributions for extended Senegalese families.</li>
                <li><strong>Church Member Contributions:</strong> Manage group contributions for church members in Senegalese churches.</li>
                <li><strong>School Groups:</strong> Organize contributions for teachers, staff, and students in Senegalese schools.</li>
                <li><strong>Alumni Associations:</strong> Manage contributions for Senegalese university and school alumni groups.</li>
                <li><strong>Workplace Groups:</strong> Organize office birthday funds for Senegalese companies and organizations.</li>
                <li><strong>Friend Groups:</strong> Keep friend groups organized for birthday celebrations in Senegal.</li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Senegal</h2>
              <ol className="steps-list">
                <li><strong>Create Your Group:</strong> Set up a group with West African CFA Franc (XOF) as the currency.</li>
                <li><strong>Set Contribution Amounts:</strong> Set amounts in XOF (e.g., 5,000 XOF or 10,000 XOF per person).</li>
                <li><strong>Add Member Birthdays:</strong> Add all group member birthdays to the calendar.</li>
                <li><strong>Track Contributions:</strong> Members mark payments as paid after transferring to bank accounts or mobile money.</li>
                <li><strong>Automatic Reminders:</strong> Get reminders 7 days before, 1 day before, and on deadline day.</li>
                <li><strong>Celebrate Together:</strong> Focus on celebrating birthdays instead of managing contributions.</li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why Senegalese Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for West African CFA Franc (XOF)</li>
                <li>Perfect for Senegalese bank transfers and mobile money</li>
                <li>Mobile-first design for Senegal's mobile culture</li>
                <li>Free to use - no hidden fees</li>
                <li>Works for groups of any size</li>
                <li>Transparent tracking builds trust</li>
                <li>Automatic reminders reduce follow-ups</li>
                <li>Member reliability scores help make informed decisions</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Senegal?</h2>
              <p>Join Senegalese groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Senegalese Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/dakar">Dakar →</Link>
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

