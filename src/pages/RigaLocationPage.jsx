import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function RigaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Riga, Latvia with GroupFund. Perfect for Riga families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/riga",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Riga" },
        { "@type": "Country", "name": "Latvia" }
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
        title="GroupFund Riga - Group Contributions App for Riga, Latvia"
        description="Organize group contributions in Riga, Latvia with GroupFund. Perfect for Riga families, churches, schools, and groups. Support for EUR. Free to start."
        keywords="group contributions Riga, Riga contribution app, groupfund Riga, group contributions app Riga Latvia, Riga group payments, EUR contribution tracker Riga"
        canonical="https://www.groupfund.app/locations/riga"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Riga, Latvia 🇱🇻</h1>
          <p className="page-subtitle">Organize group contributions in Riga with GroupFund. Perfect for Riga families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Riga</h2>
              <p>Riga is Latvia's capital and largest city. GroupFund helps Rigans organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Euro (EUR) and seamless bank transfers, GroupFund is perfect for Riga groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Riga Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Riga Families</h3><p>Organize group contributions for extended Riga families. Track contributions across Riga neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Riga Churches</h3><p>Manage group contributions for Riga church members. Perfect for large Riga congregations.</p></div>
                <div className="feature-item"><h3>🏢 Riga Workplaces</h3><p>Organize office birthday funds for Riga companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Riga Schools</h3><p>Perfect for Riga schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 EUR Support</h3><p>Full support for Euro. Set amounts in EUR, perfect for Riga bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Riga's mobile culture. Access from anywhere in Riga.</p></div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Riga?</h2>
              <p>Join Riga groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Riga Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/latvia">Latvia →</Link>
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

