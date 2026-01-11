import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BratislavaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Bratislava, Slovakia with GroupFund. Perfect for Bratislava families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/bratislava",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Bratislava" },
        { "@type": "Country", "name": "Slovakia" }
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
        title="GroupFund Bratislava - Group Contributions App for Bratislava, Slovakia"
        description="Organize group contributions in Bratislava, Slovakia with GroupFund. Perfect for Bratislava families, churches, schools, and groups. Support for EUR. Free to start."
        keywords="group contributions Bratislava, Bratislava contribution app, groupfund Bratislava, group contributions app Bratislava Slovakia, Bratislava group payments, EUR contribution tracker Bratislava"
        canonical="https://www.groupfund.app/locations/bratislava"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Bratislava, Slovakia 🇸🇰</h1>
          <p className="page-subtitle">Organize group contributions in Bratislava with GroupFund. Perfect for Bratislava families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Bratislava</h2>
              <p>Bratislava is Slovakia's capital and largest city. GroupFund helps Bratislava residents organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Euro (EUR) and seamless bank transfers, GroupFund is perfect for Bratislava groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Bratislava Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Bratislava Families</h3><p>Organize group contributions for extended Bratislava families. Track contributions across Bratislava neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Bratislava Churches</h3><p>Manage group contributions for Bratislava church members. Perfect for large Bratislava congregations.</p></div>
                <div className="feature-item"><h3>🏢 Bratislava Workplaces</h3><p>Organize office birthday funds for Bratislava companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Bratislava Schools</h3><p>Perfect for Bratislava schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 EUR Support</h3><p>Full support for Euro. Set amounts in EUR, perfect for Bratislava bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Bratislava's mobile culture. Access from anywhere in Bratislava.</p></div>
              </div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Bratislava?</h2>
              <p>Join Bratislava groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Bratislava Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/slovakia">Slovakia →</Link>
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

