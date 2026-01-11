import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ParisLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Paris, France with GroupFund. Perfect for Paris families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/paris",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Paris" },
        { "@type": "Country", "name": "France" }
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
        title="GroupFund Paris - Group Contributions App for Paris, France"
        description="Organize group contributions in Paris, France with GroupFund. Perfect for Paris families, churches, schools, and groups. Support for EUR. Free to start."
        keywords="group contributions Paris, Paris contribution app, groupfund Paris, group contributions app Paris France, Paris group payments, EUR contribution tracker Paris"
        canonical="https://www.groupfund.app/locations/paris"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Paris, France 🇫🇷</h1>
          <p className="page-subtitle">Organize group contributions in Paris with GroupFund. Perfect for Paris families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Paris</h2>
              <p>Paris is France's capital and largest city. GroupFund helps Parisians organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Euro (EUR) and seamless bank transfers, GroupFund is perfect for Paris groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Paris Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Paris Families</h3><p>Organize group contributions for extended Paris families. Track contributions across Paris arrondissements.</p></div>
                <div className="feature-item"><h3>⛪ Paris Churches</h3><p>Manage group contributions for Paris church members. Perfect for large Paris congregations.</p></div>
                <div className="feature-item"><h3>🏢 Paris Workplaces</h3><p>Organize office birthday funds for Paris companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Paris Schools</h3><p>Perfect for Paris schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 EUR Support</h3><p>Full support for Euro. Set amounts in EUR, perfect for Paris bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Paris's mobile culture. Access from anywhere in Paris.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How Paris Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Paris Family Groups:</strong> Organize contributions for extended families across Paris arrondissements.</li>
                <li><strong>Paris Church Communities:</strong> Manage group contributions for large Paris church congregations.</li>
                <li><strong>Paris Office Teams:</strong> Organize workplace birthday funds for Paris companies and organizations.</li>
                <li><strong>Paris School Groups:</strong> Manage contributions for Paris schools, universities, and student associations.</li>
                <li><strong>Paris Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Paris.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Paris?</h2>
              <p>Join Paris groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Paris Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/france">France →</Link>
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

