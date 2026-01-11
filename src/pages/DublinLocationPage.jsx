import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function DublinLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Dublin, Ireland with GroupFund. Perfect for Dublin families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/dublin",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Dublin" },
        { "@type": "Country", "name": "Ireland" }
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
        title="GroupFund Dublin - Group Contributions App for Dublin, Ireland"
        description="Organize group contributions in Dublin, Ireland with GroupFund. Perfect for Dublin families, churches, schools, and groups. Support for EUR. Free to start."
        keywords="group contributions Dublin, Dublin contribution app, groupfund Dublin, group contributions app Dublin Ireland, Dublin group payments, EUR contribution tracker Dublin"
        canonical="https://www.groupfund.app/locations/dublin"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Dublin, Ireland 🇮🇪</h1>
          <p className="page-subtitle">Organize group contributions in Dublin with GroupFund. Perfect for Dublin families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Dublin</h2>
              <p>Dublin is Ireland's capital and largest city. GroupFund helps Dubliners organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Euro (EUR) and seamless bank transfers, GroupFund is perfect for Dublin groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Dublin Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Dublin Families</h3><p>Organize group contributions for extended Dublin families. Track contributions across Dublin areas.</p></div>
                <div className="feature-item"><h3>⛪ Dublin Churches</h3><p>Manage group contributions for Dublin church members. Perfect for large Dublin congregations.</p></div>
                <div className="feature-item"><h3>🏢 Dublin Workplaces</h3><p>Organize office birthday funds for Dublin companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Dublin Schools</h3><p>Perfect for Dublin schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 EUR Support</h3><p>Full support for Euro. Set amounts in EUR, perfect for Dublin bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Dublin's mobile culture. Access from anywhere in Dublin.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How Dublin Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Dublin Family Groups:</strong> Organize contributions for extended families across Dublin areas.</li>
                <li><strong>Dublin Church Communities:</strong> Manage group contributions for large Dublin church congregations.</li>
                <li><strong>Dublin Office Teams:</strong> Organize workplace birthday funds for Dublin companies and organizations.</li>
                <li><strong>Dublin School Groups:</strong> Manage contributions for Dublin schools, universities, and student associations.</li>
                <li><strong>Dublin Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Dublin.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Dublin?</h2>
              <p>Join Dublin groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Dublin Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/ireland">Ireland →</Link>
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

