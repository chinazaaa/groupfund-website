import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function CasablancaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Casablanca, Morocco with GroupFund. Perfect for Casablanca families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/casablanca",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Casablanca" },
        { "@type": "Country", "name": "Morocco" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "MAD" },
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
        title="GroupFund Casablanca - Group Contributions App for Casablanca, Morocco"
        description="Organize group contributions in Casablanca, Morocco with GroupFund. Perfect for Casablanca families, churches, schools, and groups. Support for MAD. Free to start."
        keywords="group contributions Casablanca, Casablanca contribution app, groupfund Casablanca, group contributions app Casablanca Morocco, Casablanca group payments, MAD contribution tracker Casablanca"
        canonical="https://www.groupfund.app/locations/casablanca"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Casablanca, Morocco 🇲🇦</h1>
          <p className="page-subtitle">Organize group contributions in Casablanca with GroupFund. Perfect for Casablanca families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Casablanca</h2>
              <p>Casablanca is Morocco's largest city and economic hub. GroupFund helps Casablanca residents organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Moroccan Dirham (MAD) and seamless bank transfers, GroupFund is perfect for Casablanca groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Casablanca Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Casablanca Families</h3><p>Organize group contributions for extended Casablanca families. Track contributions across Casablanca neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Casablanca Churches</h3><p>Manage group contributions for Casablanca church members. Perfect for large Casablanca congregations.</p></div>
                <div className="feature-item"><h3>🏢 Casablanca Workplaces</h3><p>Organize office birthday funds for Casablanca companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Casablanca Schools</h3><p>Perfect for Casablanca schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 MAD Support</h3><p>Full support for Moroccan Dirham. Set amounts in MAD, perfect for Casablanca bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Casablanca's mobile-first culture. Access from anywhere in Casablanca.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How Casablanca Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Casablanca Family Groups:</strong> Organize contributions for extended families across Casablanca neighborhoods.</li>
                <li><strong>Casablanca Church Communities:</strong> Manage group contributions for large Casablanca church congregations.</li>
                <li><strong>Casablanca Office Teams:</strong> Organize workplace birthday funds for Casablanca companies and organizations.</li>
                <li><strong>Casablanca School Groups:</strong> Manage contributions for Casablanca schools, universities, and student associations.</li>
                <li><strong>Casablanca Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Casablanca.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Casablanca?</h2>
              <p>Join Casablanca groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Casablanca Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/morocco">Morocco →</Link>
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

