import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function LatviaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Latvia with GroupFund. Perfect for Latvian families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/latvia",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Latvia" },
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
        title="GroupFund Latvia - Group Contributions App for Latvia"
        description="Organize group contributions in Latvia with GroupFund. Perfect for Latvian families, churches, schools, and groups. Support for EUR (Euro). Free to start."
        keywords="group contributions Latvia, Latvian contribution app, groupfund Latvia, group contributions app Latvia, EUR contribution tracker, Latvia group payments"
        canonical="https://www.groupfund.app/locations/latvia"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Latvia 🇱🇻</h1>
          <p className="page-subtitle">
            Organize group contributions in Latvia with GroupFund. Perfect for Latvian families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Latvia</h2>
              <p>
                GroupFund is perfect for organizing group contributions in Latvia. Whether you're managing contributions for your extended family, church members, school groups, or friend circles, GroupFund makes it simple and transparent.
              </p>
              <p>
                With support for Euro (EUR) and local bank details, GroupFund is designed to work seamlessly for Latvian groups.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Latvia</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇱🇻 Euro (EUR) Support</h3>
                  <p>Full support for Euro. Set contribution amounts in EUR, and local bank details are displayed automatically.</p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>Perfect for Latvian bank transfers. Members can transfer directly to celebrants' bank accounts.</p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Latvian Families</h3>
                  <p>Organize contributions for extended Latvian families. Track who has contributed across multiple family members.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Church Groups</h3>
                  <p>Ideal for Latvian churches organizing group contributions for members. Manage large congregations efficiently.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for Latvian schools, universities, and student groups organizing group contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>Native mobile app perfect for Latvia's mobile culture. Access from anywhere, get push notifications.</p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Latvia?</h2>
              <p>Join Latvian groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Latvian Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/riga">Riga →</Link>
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

