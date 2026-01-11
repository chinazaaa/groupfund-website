import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BucharestLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Bucharest, Romania with GroupFund. Perfect for Bucharest families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/bucharest",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Bucharest" },
        { "@type": "Country", "name": "Romania" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "RON" },
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
        title="GroupFund Bucharest - Group Contributions App for Bucharest, Romania"
        description="Organize group contributions in Bucharest, Romania with GroupFund. Perfect for Bucharest families, churches, schools, and groups. Support for RON. Free to start."
        keywords="group contributions Bucharest, Bucharest contribution app, groupfund Bucharest, group contributions app Bucharest Romania, Bucharest group payments, RON contribution tracker Bucharest"
        canonical="https://www.groupfund.app/locations/bucharest"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Bucharest, Romania 🇷🇴</h1>
          <p className="page-subtitle">Organize group contributions in Bucharest with GroupFund. Perfect for Bucharest families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Bucharest</h2>
              <p>Bucharest is Romania's capital and largest city. GroupFund helps Bucharest residents organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Romanian Leu (RON) and seamless bank transfers, GroupFund is perfect for Bucharest groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Bucharest Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Bucharest Families</h3><p>Organize group contributions for extended Bucharest families. Track contributions across Bucharest neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Bucharest Churches</h3><p>Manage group contributions for Bucharest church members. Perfect for large Bucharest congregations.</p></div>
                <div className="feature-item"><h3>🏢 Bucharest Workplaces</h3><p>Organize office birthday funds for Bucharest companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Bucharest Schools</h3><p>Perfect for Bucharest schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 RON Support</h3><p>Full support for Romanian Leu. Set amounts in RON, perfect for Bucharest bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Bucharest's mobile culture. Access from anywhere in Bucharest.</p></div>
              </div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Bucharest?</h2>
              <p>Join Bucharest groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Bucharest Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/romania">Romania →</Link>
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

