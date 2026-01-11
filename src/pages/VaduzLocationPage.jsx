import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function VaduzLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Vaduz, Liechtenstein with GroupFund. Perfect for Vaduz families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/vaduz",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Vaduz" },
        { "@type": "Country", "name": "Liechtenstein" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CHF" },
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
        title="GroupFund Vaduz - Group Contributions App for Vaduz, Liechtenstein"
        description="Organize group contributions in Vaduz, Liechtenstein with GroupFund. Perfect for Vaduz families, churches, schools, and groups. Support for CHF. Free to start."
        keywords="group contributions Vaduz, Vaduz contribution app, groupfund Vaduz, group contributions app Vaduz Liechtenstein, Vaduz group payments, CHF contribution tracker Vaduz"
        canonical="https://www.groupfund.app/locations/vaduz"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Vaduz, Liechtenstein 🇱🇮</h1>
          <p className="page-subtitle">Organize group contributions in Vaduz with GroupFund. Perfect for Vaduz families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Vaduz</h2>
              <p>Vaduz is Liechtenstein's capital and largest city. GroupFund helps Vaduz residents organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Swiss Franc (CHF) and seamless bank transfers, GroupFund is perfect for Vaduz groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Vaduz Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Vaduz Families</h3><p>Organize group contributions for extended Vaduz families. Track contributions across Vaduz neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Vaduz Churches</h3><p>Manage group contributions for Vaduz church members. Perfect for large Vaduz congregations.</p></div>
                <div className="feature-item"><h3>🏢 Vaduz Workplaces</h3><p>Organize office birthday funds for Vaduz companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Vaduz Schools</h3><p>Perfect for Vaduz schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 CHF Support</h3><p>Full support for Swiss Franc. Set amounts in CHF, perfect for Vaduz bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Vaduz's mobile culture. Access from anywhere in Vaduz.</p></div>
              </div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Vaduz?</h2>
              <p>Join Vaduz groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Vaduz Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/liechtenstein">Liechtenstein →</Link>
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

