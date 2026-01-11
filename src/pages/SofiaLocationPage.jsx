import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SofiaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Sofia, Bulgaria with GroupFund. Perfect for Sofia families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/sofia",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Sofia" },
        { "@type": "Country", "name": "Bulgaria" }
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
        title="GroupFund Sofia - Group Contributions App for Sofia, Bulgaria"
        description="Organize group contributions in Sofia, Bulgaria with GroupFund. Perfect for Sofia families, churches, schools, and groups. Support for EUR. Free to start."
        keywords="group contributions Sofia, Sofia contribution app, groupfund Sofia, group contributions app Sofia Bulgaria, Sofia group payments, EUR contribution tracker Sofia"
        canonical="https://www.groupfund.app/locations/sofia"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Sofia, Bulgaria 🇧🇬</h1>
          <p className="page-subtitle">Organize group contributions in Sofia with GroupFund. Perfect for Sofia families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Sofia</h2>
              <p>Sofia is Bulgaria's capital and largest city. GroupFund helps Sofians organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Euro (EUR) and seamless bank transfers, GroupFund is perfect for Sofia groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Sofia Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Sofia Families</h3><p>Organize group contributions for extended Sofia families. Track contributions across Sofia neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Sofia Churches</h3><p>Manage group contributions for Sofia church members. Perfect for large Sofia congregations.</p></div>
                <div className="feature-item"><h3>🏢 Sofia Workplaces</h3><p>Organize office birthday funds for Sofia companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Sofia Schools</h3><p>Perfect for Sofia schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 EUR Support</h3><p>Full support for Euro. Set amounts in EUR, perfect for Sofia bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Sofia's mobile culture. Access from anywhere in Sofia.</p></div>
              </div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Sofia?</h2>
              <p>Join Sofia groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Sofia Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/bulgaria">Bulgaria →</Link>
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

