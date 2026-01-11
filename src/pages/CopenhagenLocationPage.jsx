import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function CopenhagenLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Copenhagen, Denmark with GroupFund. Perfect for Copenhagen families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/copenhagen",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Copenhagen" },
        { "@type": "Country", "name": "Denmark" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "DKK" },
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
        title="GroupFund Copenhagen - Group Contributions App for Copenhagen, Denmark"
        description="Organize group contributions in Copenhagen, Denmark with GroupFund. Perfect for Copenhagen families, churches, schools, and groups. Support for DKK. Free to start."
        keywords="group contributions Copenhagen, Copenhagen contribution app, groupfund Copenhagen, group contributions app Copenhagen Denmark, Copenhagen group payments, DKK contribution tracker Copenhagen"
        canonical="https://www.groupfund.app/locations/copenhagen"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Copenhagen, Denmark 🇩🇰</h1>
          <p className="page-subtitle">Organize group contributions in Copenhagen with GroupFund. Perfect for Copenhagen families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Copenhagen</h2>
              <p>Copenhagen is Denmark's capital and largest city. GroupFund helps Copenhageners organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Danish Krone (DKK) and seamless bank transfers, GroupFund is perfect for Copenhagen groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Copenhagen Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Copenhagen Families</h3><p>Organize group contributions for extended Copenhagen families. Track contributions across Copenhagen neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Copenhagen Churches</h3><p>Manage group contributions for Copenhagen church members. Perfect for large Copenhagen congregations.</p></div>
                <div className="feature-item"><h3>🏢 Copenhagen Workplaces</h3><p>Organize office birthday funds for Copenhagen companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Copenhagen Schools</h3><p>Perfect for Copenhagen schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 DKK Support</h3><p>Full support for Danish Krone. Set amounts in DKK, perfect for Copenhagen bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Copenhagen's mobile culture. Access from anywhere in Copenhagen.</p></div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Copenhagen?</h2>
              <p>Join Copenhagen groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Copenhagen Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/denmark">Denmark →</Link>
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

