import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function CaracasLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Caracas, Venezuela with GroupFund. Perfect for Caracas families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/caracas",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Caracas" },
        { "@type": "Country", "name": "Venezuela" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "VES" },
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
        title="GroupFund Caracas - Group Contributions App for Caracas, Venezuela"
        description="Organize group contributions in Caracas, Venezuela with GroupFund. Perfect for Caracas families, churches, schools, and groups. Support for VES. Free to start."
        keywords="group contributions Caracas, Caracas contribution app, groupfund Caracas, group contributions app Caracas Venezuela, Caracas group payments, VES contribution tracker Caracas"
        canonical="https://www.groupfund.app/locations/caracas"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Caracas, Venezuela 🇻🇪</h1>
          <p className="page-subtitle">Organize group contributions in Caracas with GroupFund. Perfect for Caracas families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Caracas</h2>
              <p>Caracas is Venezuela's capital and largest city. GroupFund helps Caracas residents organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Venezuelan Bolívar (VES) and seamless bank transfers, GroupFund is perfect for Caracas groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Caracas Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Caracas Families</h3><p>Organize group contributions for extended Caracas families. Track contributions across Caracas neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Caracas Churches</h3><p>Manage group contributions for Caracas church members. Perfect for large Caracas congregations.</p></div>
                <div className="feature-item"><h3>🏢 Caracas Workplaces</h3><p>Organize office birthday funds for Caracas companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Caracas Schools</h3><p>Perfect for Caracas schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 VES Support</h3><p>Full support for Venezuelan Bolívar. Set amounts in VES, perfect for Caracas bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Caracas's mobile-first culture. Access from anywhere in Caracas.</p></div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>
            <div className="location-section">
              <h2>How Caracas Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Caracas Family Groups:</strong> Organize contributions for extended families across Caracas neighborhoods.</li>
                <li><strong>Caracas Church Communities:</strong> Manage group contributions for large Caracas church congregations.</li>
                <li><strong>Caracas Office Teams:</strong> Organize workplace birthday funds for Caracas companies and organizations.</li>
                <li><strong>Caracas School Groups:</strong> Manage contributions for Caracas schools, universities, and student associations.</li>
                <li><strong>Caracas Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Caracas.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Caracas?</h2>
              <p>Join Caracas groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Caracas Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/venezuela">Venezuela →</Link>
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

