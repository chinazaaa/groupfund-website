import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function TelAvivLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Tel Aviv, Israel with GroupFund. Perfect for Tel Aviv families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/tel-aviv",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Tel Aviv" },
        { "@type": "Country", "name": "Israel" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "ILS" },
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
        title="GroupFund Tel Aviv - Group Contributions App for Tel Aviv, Israel"
        description="Organize group contributions in Tel Aviv, Israel with GroupFund. Perfect for Tel Aviv families, churches, schools, and groups. Support for ILS. Free to start."
        keywords="group contributions Tel Aviv, Tel Aviv contribution app, groupfund Tel Aviv, group contributions app Tel Aviv Israel, Tel Aviv group payments, ILS contribution tracker Tel Aviv"
        canonical="https://www.groupfund.app/locations/tel-aviv"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Tel Aviv, Israel 🇮🇱</h1>
          <p className="page-subtitle">Organize group contributions in Tel Aviv with GroupFund. Perfect for Tel Aviv families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Tel Aviv</h2>
              <p>Tel Aviv is Israel's second-largest city and a major economic hub. GroupFund helps Tel Aviv residents organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Israeli Shekel (ILS) and seamless bank transfers, GroupFund is perfect for Tel Aviv groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Tel Aviv Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Tel Aviv Families</h3><p>Organize group contributions for extended Tel Aviv families. Track contributions across Tel Aviv neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Tel Aviv Churches</h3><p>Manage group contributions for Tel Aviv church members. Perfect for large Tel Aviv congregations.</p></div>
                <div className="feature-item"><h3>🏢 Tel Aviv Workplaces</h3><p>Organize office birthday funds for Tel Aviv companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Tel Aviv Schools</h3><p>Perfect for Tel Aviv schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 ILS Support</h3><p>Full support for Israeli Shekel. Set amounts in ILS, perfect for Tel Aviv bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Tel Aviv's mobile-first culture. Access from anywhere in Tel Aviv.</p></div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>
            <div className="location-section">
              <h2>How Tel Aviv Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Tel Aviv Family Groups:</strong> Organize contributions for extended families across Tel Aviv neighborhoods.</li>
                <li><strong>Tel Aviv Church Communities:</strong> Manage group contributions for large Tel Aviv church congregations.</li>
                <li><strong>Tel Aviv Office Teams:</strong> Organize workplace birthday funds for Tel Aviv companies and organizations.</li>
                <li><strong>Tel Aviv School Groups:</strong> Manage contributions for Tel Aviv schools, universities, and student associations.</li>
                <li><strong>Tel Aviv Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Tel Aviv.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Tel Aviv?</h2>
              <p>Join Tel Aviv groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Tel Aviv Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/israel">Israel →</Link>
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

