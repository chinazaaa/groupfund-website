import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function NorwayLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Norway with GroupFund. Perfect for Norwegian families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/norway",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Norway" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "NOK" },
      "sameAs": ["https://groupfund.app"]
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
        title="GroupFund Norway - Group Contributions App for Norway"
        description="Organize group contributions in Norway with GroupFund. Perfect for Norwegian families, churches, schools, and groups. Support for NOK (Norwegian Krone). Free to start."
        keywords="group contributions Norway, Norwegian contribution app, groupfund Norway, group contributions app Norway, NOK contribution tracker, Norway group payments"
        canonical="https://www.groupfund.app/locations/norway"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Norway 🇳🇴</h1>
          <p className="page-subtitle">
            Organize group contributions in Norway with GroupFund. Perfect for Norwegian families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Norway</h2>
              <p>
                GroupFund is perfect for organizing group contributions in Norway. Whether you're managing contributions for your extended family, church members, school groups, or friend circles, GroupFund makes it simple and transparent.
              </p>
              <p>
                With support for Norwegian Krone (NOK) and local bank details, GroupFund is designed to work seamlessly for Norwegian groups.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Norway</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇳🇴 Norwegian Krone (NOK) Support</h3>
                  <p>Full support for Norwegian Krone. Set contribution amounts in NOK, and local bank details are displayed automatically.</p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>Perfect for Norwegian bank transfers. Members can transfer directly to celebrants' bank accounts.</p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Norwegian Families</h3>
                  <p>Organize contributions for extended Norwegian families. Track who has contributed across multiple family members.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Church Groups</h3>
                  <p>Ideal for Norwegian churches organizing group contributions for members. Manage large congregations efficiently.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for Norwegian schools, universities, and student groups organizing group contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>Native mobile app perfect for Norway's mobile culture. Access from anywhere, get push notifications.</p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Norway?</h2>
              <p>Join Norwegian groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Norwegian Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/oslo">Oslo →</Link>
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

