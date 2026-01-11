import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function LagosLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Lagos, Nigeria with GroupFund. Perfect for Lagos families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/lagos",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Lagos" },
        { "@type": "Country", "name": "Nigeria" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "NGN" },
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
        title="GroupFund Lagos - Group Contributions App for Lagos, Nigeria"
        description="Organize group contributions in Lagos, Nigeria with GroupFund. Perfect for Lagos families, churches, schools, and groups. Support for NGN. Free to start."
        keywords="group contributions Lagos, Lagos contribution app, groupfund Lagos, group contributions app Lagos Nigeria, Lagos group payments, NGN contribution tracker Lagos"
        canonical="https://www.groupfund.app/locations/lagos"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Lagos, Nigeria 🇳🇬</h1>
          <p className="page-subtitle">
            Organize group contributions in Lagos with GroupFund. Perfect for Lagos families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Lagos</h2>
              <p>
                Lagos is Nigeria's largest city and a hub of activity. GroupFund helps Lagos residents organize group contributions effortlessly - for birthdays, shared subscriptions, events, and more - whether for family celebrations, church groups, workplace teams, or friend circles.
              </p>
              <p>
                With support for Nigerian Naira (NGN) and seamless bank transfers, GroupFund is perfect for Lagos groups of all sizes.
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Lagos Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Lagos Families</h3>
                  <p>Organize contributions for extended Lagos families - birthdays, subscriptions, events. Track contributions across different areas of Lagos.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Lagos Churches</h3>
                  <p>Manage contributions for Lagos church members - birthdays, subscriptions, events. Perfect for large Lagos congregations.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Lagos Workplaces</h3>
                  <p>Organize office funds for Lagos companies - birthdays, shared subscriptions, team events. Professional and transparent system.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Lagos Schools</h3>
                  <p>Perfect for Lagos schools, universities, and student groups organizing contributions for any purpose.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 NGN Support</h3>
                  <p>Full support for Nigerian Naira. Set amounts in NGN, perfect for Lagos bank transfers.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>Native mobile app perfect for Lagos's mobile-first culture. Access from anywhere in Lagos.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Lagos Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Lagos Family Groups:</strong> Organize contributions for extended families across Lagos neighborhoods - birthdays, subscriptions, events.</li>
                <li><strong>Lagos Church Communities:</strong> Manage contributions for large Lagos church congregations - birthdays, subscriptions, events.</li>
                <li><strong>Lagos Office Teams:</strong> Organize workplace funds for Lagos companies and organizations - birthdays, shared subscriptions, team events.</li>
                <li><strong>Lagos School Groups:</strong> Manage contributions for Lagos schools, universities, and student associations for any purpose.</li>
                <li><strong>Lagos Friend Circles:</strong> Keep friend groups organized for birthdays, shared subscriptions, and events in Lagos.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Lagos?</h2>
              <p>Join Lagos groups using GroupFund to make contributions organized and stress-free - for birthdays, subscriptions, events, and more.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Lagos Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/nigeria">Nigeria →</Link>
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

