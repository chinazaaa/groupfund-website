import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BrusselsLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Brussels, Belgium with GroupFund. Perfect for Brussels families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/brussels",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Brussels" },
        { "@type": "Country", "name": "Belgium" }
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
        title="GroupFund Brussels - Group Contributions App for Brussels, Belgium"
        description="Organize group contributions in Brussels, Belgium with GroupFund. Perfect for Brussels families, churches, schools, and groups. Support for EUR. Free to start."
        keywords="group contributions Brussels, Brussels contribution app, groupfund Brussels, group contributions app Brussels Belgium, Brussels group payments, EUR contribution tracker Brussels"
        canonical="https://www.groupfund.app/locations/brussels"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Brussels, Belgium 🇧🇪</h1>
          <p className="page-subtitle">Organize group contributions in Brussels with GroupFund. Perfect for Brussels families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Brussels</h2>
              <p>Brussels is Belgium's capital and largest city. GroupFund helps Brusselers organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Euro (EUR) and seamless bank transfers, GroupFund is perfect for Brussels groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Brussels Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Brussels Families</h3><p>Organize group contributions for extended Brussels families. Track contributions across Brussels neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Brussels Churches</h3><p>Manage group contributions for Brussels church members. Perfect for large Brussels congregations.</p></div>
                <div className="feature-item"><h3>🏢 Brussels Workplaces</h3><p>Organize office birthday funds for Brussels companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Brussels Schools</h3><p>Perfect for Brussels schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 EUR Support</h3><p>Full support for Euro. Set amounts in EUR, perfect for Brussels bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Brussels's mobile culture. Access from anywhere in Brussels.</p></div>
              </div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Brussels?</h2>
              <p>Join Brussels groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Brussels Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/belgium">Belgium →</Link>
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

