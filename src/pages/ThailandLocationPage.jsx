import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ThailandLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Thailand with GroupFund. Perfect for Thai families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/thailand",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Thailand" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "THB" },
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
        title="GroupFund Thailand - Group Contributions App for Thailand"
        description="Organize group contributions in Thailand with GroupFund. Perfect for Thai families, churches, schools, and groups. Support for THB (Thai Baht). Free to start."
        keywords="group contributions Thailand, Thai contribution app, groupfund Thailand, group contributions app Thailand, THB contribution tracker, Thailand group payments"
        canonical="https://www.groupfund.app/locations/thailand"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Thailand 🇹🇭</h1>
          <p className="page-subtitle">
            Organize group contributions in Thailand with GroupFund. Perfect for Thai families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Thailand</h2>
              <p>
                GroupFund is perfect for organizing group contributions in Thailand. Whether you're managing contributions for your extended family, church members, school groups, or friend circles, GroupFund makes it simple and transparent.
              </p>
              <p>
                With support for Thai Baht (THB) and local bank details, GroupFund is designed to work seamlessly for Thai groups.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Thailand</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇹🇭 Thai Baht (THB) Support</h3>
                  <p>Full support for Thai Baht. Set contribution amounts in THB, and local bank details are displayed automatically.</p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>Perfect for Thai bank transfers. Members can transfer directly to celebrants' bank accounts.</p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Thai Families</h3>
                  <p>Organize contributions for extended Thai families. Track who has contributed across multiple family members.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Church Groups</h3>
                  <p>Ideal for Thai churches organizing group contributions for members. Manage large congregations efficiently.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for Thai schools, universities, and student groups organizing group contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>Native mobile app perfect for Thailand's mobile culture. Access from anywhere, get push notifications.</p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Thailand?</h2>
              <p>Join Thai groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Thai Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/bangkok">Bangkok →</Link>
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

