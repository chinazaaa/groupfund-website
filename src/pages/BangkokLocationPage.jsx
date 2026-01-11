import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BangkokLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Bangkok, Thailand with GroupFund. Perfect for Bangkok families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/bangkok",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Bangkok" },
        { "@type": "Country", "name": "Thailand" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "THB" },
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
        title="GroupFund Bangkok - Group Contributions App for Bangkok, Thailand"
        description="Organize group contributions in Bangkok, Thailand with GroupFund. Perfect for Bangkok families, churches, schools, and groups. Support for THB. Free to start."
        keywords="group contributions Bangkok, Bangkok contribution app, groupfund Bangkok, group contributions app Bangkok Thailand, Bangkok group payments, THB contribution tracker Bangkok"
        canonical="https://www.groupfund.app/locations/bangkok"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Bangkok, Thailand 🇹🇭</h1>
          <p className="page-subtitle">Organize group contributions in Bangkok with GroupFund. Perfect for Bangkok families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Bangkok</h2>
              <p>Bangkok is Thailand's capital and largest city. GroupFund helps Bangkokians organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Thai Baht (THB) and seamless bank transfers, GroupFund is perfect for Bangkok groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Bangkok Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Bangkok Families</h3><p>Organize group contributions for extended Bangkok families. Track contributions across Bangkok neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Bangkok Churches</h3><p>Manage group contributions for Bangkok church members. Perfect for large Bangkok congregations.</p></div>
                <div className="feature-item"><h3>🏢 Bangkok Workplaces</h3><p>Organize office birthday funds for Bangkok companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Bangkok Schools</h3><p>Perfect for Bangkok schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 THB Support</h3><p>Full support for Thai Baht. Set amounts in THB, perfect for Bangkok bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Bangkok's mobile culture. Access from anywhere in Bangkok.</p></div>
              </div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Bangkok?</h2>
              <p>Join Bangkok groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Bangkok Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/thailand">Thailand →</Link>
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

