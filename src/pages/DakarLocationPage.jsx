import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function DakarLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Dakar, Senegal with GroupFund. Perfect for Dakar families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/dakar",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Dakar" },
        { "@type": "Country", "name": "Senegal" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "XOF" },
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
        title="GroupFund Dakar - Group Contributions App for Dakar, Senegal"
        description="Organize group contributions in Dakar, Senegal with GroupFund. Perfect for Dakar families, churches, schools, and groups. Support for XOF. Free to start."
        keywords="group contributions Dakar, Dakar contribution app, groupfund Dakar, group contributions app Dakar Senegal, Dakar group payments, XOF contribution tracker Dakar"
        canonical="https://www.groupfund.app/locations/dakar"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Dakar, Senegal 🇸🇳</h1>
          <p className="page-subtitle">Organize group contributions in Dakar with GroupFund. Perfect for Dakar families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Dakar</h2>
              <p>Dakar is Senegal's capital and largest city. GroupFund helps Dakar residents organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for West African CFA Franc (XOF) and seamless bank transfers, GroupFund is perfect for Dakar groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Dakar Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Dakar Families</h3><p>Organize group contributions for extended Dakar families. Track contributions across Dakar neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Dakar Churches</h3><p>Manage group contributions for Dakar church members. Perfect for large Dakar congregations.</p></div>
                <div className="feature-item"><h3>🏢 Dakar Workplaces</h3><p>Organize office birthday funds for Dakar companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Dakar Schools</h3><p>Perfect for Dakar schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 XOF Support</h3><p>Full support for West African CFA Franc. Set amounts in XOF, perfect for Dakar bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Dakar's mobile-first culture. Access from anywhere in Dakar.</p></div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>
            <div className="location-section">
              <h2>How Dakar Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Dakar Family Groups:</strong> Organize contributions for extended families across Dakar neighborhoods.</li>
                <li><strong>Dakar Church Communities:</strong> Manage group contributions for large Dakar church congregations.</li>
                <li><strong>Dakar Office Teams:</strong> Organize workplace birthday funds for Dakar companies and organizations.</li>
                <li><strong>Dakar School Groups:</strong> Manage contributions for Dakar schools, universities, and student associations.</li>
                <li><strong>Dakar Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Dakar.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Dakar?</h2>
              <p>Join Dakar groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Dakar Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/senegal">Senegal →</Link>
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

