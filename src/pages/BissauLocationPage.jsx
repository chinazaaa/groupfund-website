import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BissauLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Bissau, Guinea-Bissau with GroupFund. Perfect for Bissau families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/bissau",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Bissau" },
        { "@type": "Country", "name": "Guinea-Bissau" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "XOF" },
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
        title="GroupFund Bissau - Group Contributions App for Bissau, Guinea-Bissau"
        description="Organize group contributions in Bissau, Guinea-Bissau with GroupFund. Perfect for Bissau families, churches, schools, and groups. Support for XOF. Free to start."
        keywords="group contributions Bissau, Bissau contribution app, groupfund Bissau, group contributions app Bissau Guinea-Bissau, Bissau group payments, XOF contribution tracker Bissau"
        canonical="https://www.groupfund.app/locations/bissau"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Bissau, Guinea-Bissau 🇬🇼</h1>
          <p className="page-subtitle">Organize group contributions in Bissau with GroupFund. Perfect for Bissau families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Bissau</h2>
              <p>Bissau is Guinea-Bissau's capital and largest city. GroupFund helps Bissau residents organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for West African CFA Franc (XOF) and seamless bank transfers, GroupFund is perfect for Bissau groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Bissau Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Bissau Families</h3><p>Organize group contributions for extended Bissau families. Track contributions across Bissau neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Bissau Churches</h3><p>Manage group contributions for Bissau church members. Perfect for large Bissau congregations.</p></div>
                <div className="feature-item"><h3>🏢 Bissau Workplaces</h3><p>Organize office birthday funds for Bissau companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Bissau Schools</h3><p>Perfect for Bissau schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 XOF Support</h3><p>Full support for West African CFA Franc. Set amounts in XOF, perfect for Bissau bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Bissau's mobile-first culture. Access from anywhere in Bissau.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How Bissau Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Bissau Family Groups:</strong> Organize contributions for extended families across Bissau neighborhoods.</li>
                <li><strong>Bissau Church Communities:</strong> Manage group contributions for large Bissau church congregations.</li>
                <li><strong>Bissau Office Teams:</strong> Organize workplace birthday funds for Bissau companies and organizations.</li>
                <li><strong>Bissau School Groups:</strong> Manage contributions for Bissau schools, universities, and student associations.</li>
                <li><strong>Bissau Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Bissau.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Bissau?</h2>
              <p>Join Bissau groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Bissau Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/guinea-bissau">Guinea-Bissau →</Link>
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

