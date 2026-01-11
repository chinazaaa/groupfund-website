import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AthensLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Athens, Greece with GroupFund. Perfect for Athens families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/athens",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Athens" },
        { "@type": "Country", "name": "Greece" }
      ],
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
        title="GroupFund Athens - Group Contributions App for Athens, Greece"
        description="Organize group contributions in Athens, Greece with GroupFund. Perfect for Athens families, churches, schools, and groups. Support for EUR. Free to start."
        keywords="group contributions Athens, Athens contribution app, groupfund Athens, group contributions app Athens Greece, Athens group payments, EUR contribution tracker Athens"
        canonical="https://www.groupfund.app/locations/athens"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Athens, Greece 🇬🇷</h1>
          <p className="page-subtitle">Organize group contributions in Athens with GroupFund. Perfect for Athens families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Athens</h2>
              <p>Athens is Greece's capital and largest city. GroupFund helps Athenians organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Euro (EUR) and seamless bank transfers, GroupFund is perfect for Athens groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Athens Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Athens Families</h3><p>Organize group contributions for extended Athens families. Track contributions across Athens neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Athens Churches</h3><p>Manage group contributions for Athens church members. Perfect for large Athens congregations.</p></div>
                <div className="feature-item"><h3>🏢 Athens Workplaces</h3><p>Organize office birthday funds for Athens companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Athens Schools</h3><p>Perfect for Athens schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 EUR Support</h3><p>Full support for Euro. Set amounts in EUR, perfect for Athens bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Athens's mobile culture. Access from anywhere in Athens.</p></div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Athens?</h2>
              <p>Join Athens groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Athens Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/greece">Greece →</Link>
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

