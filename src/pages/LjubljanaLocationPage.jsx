import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function LjubljanaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Ljubljana, Slovenia with GroupFund. Perfect for Ljubljana families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/ljubljana",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Ljubljana" },
        { "@type": "Country", "name": "Slovenia" }
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
        title="GroupFund Ljubljana - Group Contributions App for Ljubljana, Slovenia"
        description="Organize group contributions in Ljubljana, Slovenia with GroupFund. Perfect for Ljubljana families, churches, schools, and groups. Support for EUR. Free to start."
        keywords="group contributions Ljubljana, Ljubljana contribution app, groupfund Ljubljana, group contributions app Ljubljana Slovenia, Ljubljana group payments, EUR contribution tracker Ljubljana"
        canonical="https://www.groupfund.app/locations/ljubljana"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Ljubljana, Slovenia 🇸🇮</h1>
          <p className="page-subtitle">Organize group contributions in Ljubljana with GroupFund. Perfect for Ljubljana families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Ljubljana</h2>
              <p>Ljubljana is Slovenia's capital and largest city. GroupFund helps Ljubljana residents organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Euro (EUR) and seamless bank transfers, GroupFund is perfect for Ljubljana groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Ljubljana Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Ljubljana Families</h3><p>Organize group contributions for extended Ljubljana families. Track contributions across Ljubljana neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Ljubljana Churches</h3><p>Manage group contributions for Ljubljana church members. Perfect for large Ljubljana congregations.</p></div>
                <div className="feature-item"><h3>🏢 Ljubljana Workplaces</h3><p>Organize office birthday funds for Ljubljana companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Ljubljana Schools</h3><p>Perfect for Ljubljana schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 EUR Support</h3><p>Full support for Euro. Set amounts in EUR, perfect for Ljubljana bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Ljubljana's mobile culture. Access from anywhere in Ljubljana.</p></div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Ljubljana?</h2>
              <p>Join Ljubljana groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Ljubljana Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/slovenia">Slovenia →</Link>
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

