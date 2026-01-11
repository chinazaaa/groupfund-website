import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function DenmarkLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Denmark with GroupFund. Perfect for Danish families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/denmark",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Denmark" },
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
        title="GroupFund Denmark - Group Contributions App for Denmark"
        description="Organize group contributions in Denmark with GroupFund. Perfect for Danish families, churches, schools, and groups. Support for DKK (Danish Krone). Free to start."
        keywords="group contributions Denmark, Danish contribution app, groupfund Denmark, group contributions app Denmark, DKK contribution tracker, Denmark group payments"
        canonical="https://www.groupfund.app/locations/denmark"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Denmark 🇩🇰</h1>
          <p className="page-subtitle">
            Organize group contributions in Denmark with GroupFund. Perfect for Danish families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Denmark</h2>
              <p>
                GroupFund is perfect for organizing group contributions in Denmark. Whether you're managing contributions for your extended family, church members, school groups, or friend circles, GroupFund makes it simple and transparent.
              </p>
              <p>
                With support for Danish Krone (DKK) and local bank details, GroupFund is designed to work seamlessly for Danish groups.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Denmark</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇩🇰 Danish Krone (DKK) Support</h3>
                  <p>Full support for Danish Krone. Set contribution amounts in DKK, and local bank details are displayed automatically.</p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>Perfect for Danish bank transfers. Members can transfer directly to celebrants' bank accounts.</p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Danish Families</h3>
                  <p>Organize contributions for extended Danish families. Track who has contributed across multiple family members.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Church Groups</h3>
                  <p>Ideal for Danish churches organizing group contributions for members. Manage large congregations efficiently.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for Danish schools, universities, and student groups organizing group contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>Native mobile app perfect for Denmark's mobile culture. Access from anywhere, get push notifications.</p>
                </div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Denmark?</h2>
              <p>Join Danish groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Danish Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/copenhagen">Copenhagen →</Link>
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

