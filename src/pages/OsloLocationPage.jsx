import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function OsloLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Oslo, Norway with GroupFund. Perfect for Oslo families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/oslo",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Oslo" },
        { "@type": "Country", "name": "Norway" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "NOK" },
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
        title="GroupFund Oslo - Group Contributions App for Oslo, Norway"
        description="Organize group contributions in Oslo, Norway with GroupFund. Perfect for Oslo families, churches, schools, and groups. Support for NOK. Free to start."
        keywords="group contributions Oslo, Oslo contribution app, groupfund Oslo, group contributions app Oslo Norway, Oslo group payments, NOK contribution tracker Oslo"
        canonical="https://www.groupfund.app/locations/oslo"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Oslo, Norway 🇳🇴</h1>
          <p className="page-subtitle">Organize group contributions in Oslo with GroupFund. Perfect for Oslo families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Oslo</h2>
              <p>Oslo is Norway's capital and largest city. GroupFund helps Osloites organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Norwegian Krone (NOK) and seamless bank transfers, GroupFund is perfect for Oslo groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Oslo Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Oslo Families</h3><p>Organize group contributions for extended Oslo families. Track contributions across Oslo neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Oslo Churches</h3><p>Manage group contributions for Oslo church members. Perfect for large Oslo congregations.</p></div>
                <div className="feature-item"><h3>🏢 Oslo Workplaces</h3><p>Organize office birthday funds for Oslo companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Oslo Schools</h3><p>Perfect for Oslo schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 NOK Support</h3><p>Full support for Norwegian Krone. Set amounts in NOK, perfect for Oslo bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Oslo's mobile culture. Access from anywhere in Oslo.</p></div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Oslo?</h2>
              <p>Join Oslo groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Oslo Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/norway">Norway →</Link>
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

