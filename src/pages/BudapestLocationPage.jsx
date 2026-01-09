import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BudapestLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Budapest, Hungary with GroupFund. Perfect for Budapest families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/budapest",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Budapest" },
        { "@type": "Country", "name": "Hungary" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "HUF" },
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
        title="GroupFund Budapest - Group Contributions App for Budapest, Hungary"
        description="Organize group contributions in Budapest, Hungary with GroupFund. Perfect for Budapest families, churches, schools, and groups. Support for HUF. Free to start."
        keywords="group contributions Budapest, Budapest contribution app, groupfund Budapest, group contributions app Budapest Hungary, Budapest group payments, HUF contribution tracker Budapest"
        canonical="https://www.groupfund.app/locations/budapest"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Budapest, Hungary 🇭🇺</h1>
          <p className="page-subtitle">Organize group contributions in Budapest with GroupFund. Perfect for Budapest families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Budapest</h2>
              <p>Budapest is Hungary's capital and largest city. GroupFund helps Budapesters organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Hungarian Forint (HUF) and seamless bank transfers, GroupFund is perfect for Budapest groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Budapest Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Budapest Families</h3><p>Organize group contributions for extended Budapest families. Track contributions across Budapest districts.</p></div>
                <div className="feature-item"><h3>⛪ Budapest Churches</h3><p>Manage group contributions for Budapest church members. Perfect for large Budapest congregations.</p></div>
                <div className="feature-item"><h3>🏢 Budapest Workplaces</h3><p>Organize office birthday funds for Budapest companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Budapest Schools</h3><p>Perfect for Budapest schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 HUF Support</h3><p>Full support for Hungarian Forint. Set amounts in HUF, perfect for Budapest bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Budapest's mobile culture. Access from anywhere in Budapest.</p></div>
              </div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Budapest?</h2>
              <p>Join Budapest groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Budapest Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/hungary">Hungary →</Link>
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

