import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ZurichLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Zurich, Switzerland with GroupFund. Perfect for Zurich families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/zurich",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Zurich" },
        { "@type": "Country", "name": "Switzerland" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CHF" },
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
        title="GroupFund Zurich - Group Contributions App for Zurich, Switzerland"
        description="Organize group contributions in Zurich, Switzerland with GroupFund. Perfect for Zurich families, churches, schools, and groups. Support for CHF. Free to start."
        keywords="group contributions Zurich, Zurich contribution app, groupfund Zurich, group contributions app Zurich Switzerland, Zurich group payments, CHF contribution tracker Zurich"
        canonical="https://www.groupfund.app/locations/zurich"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Zurich, Switzerland 🇨🇭</h1>
          <p className="page-subtitle">Organize group contributions in Zurich with GroupFund. Perfect for Zurich families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Zurich</h2>
              <p>Zurich is Switzerland's largest city and financial center. GroupFund helps Zurich residents organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Swiss Franc (CHF) and seamless bank transfers, GroupFund is perfect for Zurich groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Zurich Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Zurich Families</h3><p>Organize group contributions for extended Zurich families. Track contributions across Zurich districts.</p></div>
                <div className="feature-item"><h3>⛪ Zurich Churches</h3><p>Manage group contributions for Zurich church members. Perfect for large Zurich congregations.</p></div>
                <div className="feature-item"><h3>🏢 Zurich Workplaces</h3><p>Organize office birthday funds for Zurich companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Zurich Schools</h3><p>Perfect for Zurich schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 CHF Support</h3><p>Full support for Swiss Franc. Set amounts in CHF, perfect for Zurich bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Zurich's mobile culture. Access from anywhere in Zurich.</p></div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>
            <div className="location-section">
              <h2>How Zurich Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Zurich Family Groups:</strong> Organize contributions for extended families across Zurich districts.</li>
                <li><strong>Zurich Church Communities:</strong> Manage group contributions for large Zurich church congregations.</li>
                <li><strong>Zurich Office Teams:</strong> Organize workplace birthday funds for Zurich companies and organizations.</li>
                <li><strong>Zurich School Groups:</strong> Manage contributions for Zurich schools, universities, and student associations.</li>
                <li><strong>Zurich Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Zurich.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Zurich?</h2>
              <p>Join Zurich groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Zurich Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/switzerland">Switzerland →</Link>
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

