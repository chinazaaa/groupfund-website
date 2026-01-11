import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function LondonLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in London, UK with GroupFund. Perfect for London families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/london",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "London" },
        { "@type": "Country", "name": "United Kingdom" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "GBP" },
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
        title="GroupFund London - Group Contributions App for London, UK"
        description="Organize group contributions in London, UK with GroupFund. Perfect for London families, churches, schools, and groups. Support for GBP. Free to start."
        keywords="group contributions London, London contribution app, groupfund London, group contributions app London UK, London group payments, GBP contribution tracker London"
        canonical="https://www.groupfund.app/locations/london"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for London, UK 🇬🇧</h1>
          <p className="page-subtitle">Organize group contributions in London with GroupFund. Perfect for London families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in London</h2>
              <p>London is the UK's capital and largest city. GroupFund helps Londoners organize group contributions effortlessly - for birthdays, shared subscriptions, events, and more - whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for British Pound (GBP) and seamless bank transfers, GroupFund is perfect for London groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for London Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ London Families</h3><p>Organize contributions for extended London families - birthdays, subscriptions, events. Track contributions across London boroughs.</p></div>
                <div className="feature-item"><h3>⛪ London Churches</h3><p>Manage contributions for London church members - birthdays, subscriptions, events. Perfect for large London congregations.</p></div>
                <div className="feature-item"><h3>🏢 London Workplaces</h3><p>Organize office funds for London companies - birthdays, shared subscriptions, team events. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 London Schools</h3><p>Perfect for London schools, universities, and student groups organizing contributions for any purpose.</p></div>
                <div className="feature-item"><h3>💰 GBP Support</h3><p>Full support for British Pound. Set amounts in GBP, perfect for London bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for London's fast-paced lifestyle. Access from anywhere in London.</p></div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>
            <div className="location-section">
              <h2>How London Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>London Family Groups:</strong> Organize contributions for extended families across London boroughs - birthdays, subscriptions, events.</li>
                <li><strong>London Church Communities:</strong> Manage contributions for large London church congregations - birthdays, subscriptions, events.</li>
                <li><strong>London Office Teams:</strong> Organize workplace funds for London companies and organizations - birthdays, shared subscriptions, team events.</li>
                <li><strong>London School Groups:</strong> Manage contributions for London schools, universities, and student associations for any purpose.</li>
                <li><strong>London Friend Circles:</strong> Keep friend groups organized for birthdays, shared subscriptions, and events in London.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in London?</h2>
              <p>Join London groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your London Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/united-kingdom">United Kingdom →</Link>
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

