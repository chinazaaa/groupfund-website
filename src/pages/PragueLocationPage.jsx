import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function PragueLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Prague, Czech Republic with GroupFund. Perfect for Prague families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/prague",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Prague" },
        { "@type": "Country", "name": "Czech Republic" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CZK" },
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
        title="GroupFund Prague - Group Contributions App for Prague, Czech Republic"
        description="Organize group contributions in Prague, Czech Republic with GroupFund. Perfect for Prague families, churches, schools, and groups. Support for CZK. Free to start."
        keywords="group contributions Prague, Prague contribution app, groupfund Prague, group contributions app Prague Czech Republic, Prague group payments, CZK contribution tracker Prague"
        canonical="https://www.groupfund.app/locations/prague"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Prague, Czech Republic 🇨🇿</h1>
          <p className="page-subtitle">Organize group contributions in Prague with GroupFund. Perfect for Prague families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Prague</h2>
              <p>Prague is Czech Republic's capital and largest city. GroupFund helps Praguers organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Czech Koruna (CZK) and seamless bank transfers, GroupFund is perfect for Prague groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Prague Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Prague Families</h3><p>Organize group contributions for extended Prague families. Track contributions across Prague districts.</p></div>
                <div className="feature-item"><h3>⛪ Prague Churches</h3><p>Manage group contributions for Prague church members. Perfect for large Prague congregations.</p></div>
                <div className="feature-item"><h3>🏢 Prague Workplaces</h3><p>Organize office birthday funds for Prague companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Prague Schools</h3><p>Perfect for Prague schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 CZK Support</h3><p>Full support for Czech Koruna. Set amounts in CZK, perfect for Prague bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Prague's mobile culture. Access from anywhere in Prague.</p></div>
              </div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Prague?</h2>
              <p>Join Prague groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Prague Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/czech-republic">Czech Republic →</Link>
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

