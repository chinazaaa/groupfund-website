import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ArgentinaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Argentina with GroupFund. Perfect for Argentine families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/argentina",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Argentina" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "ARS" },
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
        title="GroupFund Argentina - Group Contributions App for Argentina"
        description="Organize group contributions in Argentina with GroupFund. Perfect for Argentine families, churches, schools, and groups. Support for ARS (Argentine Peso). Free to start."
        keywords="group contributions Argentina, Argentine contribution app, groupfund Argentina, group contributions app Argentina, ARS contribution tracker, Argentina group payments"
        canonical="https://www.groupfund.app/locations/argentina"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Argentina 🇦🇷</h1>
          <p className="page-subtitle">
            Organize group contributions in Argentina with GroupFund. Perfect for Argentine families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Argentina</h2>
              <p>
                GroupFund is perfect for organizing group contributions in Argentina. Whether you're managing contributions for your extended family, church members, school groups, or friend circles, GroupFund makes it simple and transparent.
              </p>
              <p>
                With support for Argentine Peso (ARS) and local bank details, GroupFund is designed to work seamlessly for Argentine groups.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Argentina</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇦🇷 Argentine Peso (ARS) Support</h3>
                  <p>Full support for Argentine Peso. Set contribution amounts in ARS, and local bank details are displayed automatically.</p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>Perfect for Argentine bank transfers. Members can transfer directly to celebrants' bank accounts.</p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Argentine Families</h3>
                  <p>Organize contributions for extended Argentine families. Track who has contributed across multiple family members.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Church Groups</h3>
                  <p>Ideal for Argentine churches organizing group contributions for members. Manage large congregations efficiently.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for Argentine schools, universities, and student groups organizing group contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>Native mobile app perfect for Argentina's mobile culture. Access from anywhere, get push notifications.</p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Argentina?</h2>
              <p>Join Argentine groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Argentine Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/buenos-aires">Buenos Aires →</Link>
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

