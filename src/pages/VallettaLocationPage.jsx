import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function VallettaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Valletta, Malta with GroupFund. Perfect for Valletta families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/valletta",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Valletta" },
        { "@type": "Country", "name": "Malta" }
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
        title="GroupFund Valletta - Group Contributions App for Valletta, Malta"
        description="Organize group contributions in Valletta, Malta with GroupFund. Perfect for Valletta families, churches, schools, and groups. Support for EUR. Free to start."
        keywords="group contributions Valletta, Valletta contribution app, groupfund Valletta, group contributions app Valletta Malta, Valletta group payments, EUR contribution tracker Valletta"
        canonical="https://www.groupfund.app/locations/valletta"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Valletta, Malta 🇲🇹</h1>
          <p className="page-subtitle">Organize group contributions in Valletta with GroupFund. Perfect for Valletta families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Valletta</h2>
              <p>Valletta is Malta's capital and largest city. GroupFund helps Valletta residents organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Euro (EUR) and seamless bank transfers, GroupFund is perfect for Valletta groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Valletta Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Valletta Families</h3><p>Organize group contributions for extended Valletta families. Track contributions across Valletta neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Valletta Churches</h3><p>Manage group contributions for Valletta church members. Perfect for large Valletta congregations.</p></div>
                <div className="feature-item"><h3>🏢 Valletta Workplaces</h3><p>Organize office birthday funds for Valletta companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Valletta Schools</h3><p>Perfect for Valletta schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 EUR Support</h3><p>Full support for Euro. Set amounts in EUR, perfect for Valletta bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Valletta's mobile culture. Access from anywhere in Valletta.</p></div>
              </div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Valletta?</h2>
              <p>Join Valletta groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Valletta Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/malta">Malta →</Link>
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

