import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AucklandLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Auckland, New Zealand with GroupFund. Perfect for Auckland families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/auckland",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Auckland" },
        { "@type": "Country", "name": "New Zealand" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "NZD" },
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
        title="GroupFund Auckland - Group Contributions App for Auckland, New Zealand"
        description="Organize group contributions in Auckland, New Zealand with GroupFund. Perfect for Auckland families, churches, schools, and groups. Support for NZD. Free to start."
        keywords="group contributions Auckland, Auckland contribution app, groupfund Auckland, group contributions app Auckland New Zealand, Auckland group payments, NZD contribution tracker Auckland"
        canonical="https://www.groupfund.app/locations/auckland"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Auckland, New Zealand 🇳🇿</h1>
          <p className="page-subtitle">Organize group contributions in Auckland with GroupFund. Perfect for Auckland families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Auckland</h2>
              <p>Auckland is New Zealand's largest city. GroupFund helps Aucklanders organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for New Zealand Dollar (NZD) and seamless bank transfers, GroupFund is perfect for Auckland groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Auckland Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Auckland Families</h3><p>Organize group contributions for extended Auckland families. Track contributions across Auckland neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Auckland Churches</h3><p>Manage group contributions for Auckland church members. Perfect for large Auckland congregations.</p></div>
                <div className="feature-item"><h3>🏢 Auckland Workplaces</h3><p>Organize office birthday funds for Auckland companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Auckland Schools</h3><p>Perfect for Auckland schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 NZD Support</h3><p>Full support for New Zealand Dollar. Set amounts in NZD, perfect for Auckland bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Auckland's mobile culture. Access from anywhere in Auckland.</p></div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Auckland?</h2>
              <p>Join Auckland groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Auckland Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/new-zealand">New Zealand →</Link>
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

