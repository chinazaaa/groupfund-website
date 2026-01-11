import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SantiagoLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Santiago, Chile with GroupFund. Perfect for Santiago families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/santiago",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Santiago" },
        { "@type": "Country", "name": "Chile" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CLP" },
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
        title="GroupFund Santiago - Group Contributions App for Santiago, Chile"
        description="Organize group contributions in Santiago, Chile with GroupFund. Perfect for Santiago families, churches, schools, and groups. Support for CLP. Free to start."
        keywords="group contributions Santiago, Santiago contribution app, groupfund Santiago, group contributions app Santiago Chile, Santiago group payments, CLP contribution tracker Santiago"
        canonical="https://www.groupfund.app/locations/santiago"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Santiago, Chile 🇨🇱</h1>
          <p className="page-subtitle">Organize group contributions in Santiago with GroupFund. Perfect for Santiago families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Santiago</h2>
              <p>Santiago is Chile's capital and largest city. GroupFund helps Santiaguinos organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Chilean Peso (CLP) and seamless bank transfers, GroupFund is perfect for Santiago groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Santiago Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Santiago Families</h3><p>Organize group contributions for extended Santiago families. Track contributions across Santiago neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Santiago Churches</h3><p>Manage group contributions for Santiago church members. Perfect for large Santiago congregations.</p></div>
                <div className="feature-item"><h3>🏢 Santiago Workplaces</h3><p>Organize office birthday funds for Santiago companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Santiago Schools</h3><p>Perfect for Santiago schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 CLP Support</h3><p>Full support for Chilean Peso. Set amounts in CLP, perfect for Santiago bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Santiago's mobile culture. Access from anywhere in Santiago.</p></div>
              </div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Santiago?</h2>
              <p>Join Santiago groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Santiago Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/chile">Chile →</Link>
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

