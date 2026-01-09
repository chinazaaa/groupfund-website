import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function CairoLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Cairo, Egypt with GroupFund. Perfect for Cairo families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/cairo",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Cairo" },
        { "@type": "Country", "name": "Egypt" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EGP" },
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
        title="GroupFund Cairo - Group Contributions App for Cairo, Egypt"
        description="Organize group contributions in Cairo, Egypt with GroupFund. Perfect for Cairo families, churches, schools, and groups. Support for EGP. Free to start."
        keywords="group contributions Cairo, Cairo contribution app, groupfund Cairo, group contributions app Cairo Egypt, Cairo group payments, EGP contribution tracker Cairo"
        canonical="https://www.groupfund.app/locations/cairo"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Cairo, Egypt 🇪🇬</h1>
          <p className="page-subtitle">Organize group contributions in Cairo with GroupFund. Perfect for Cairo families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Cairo</h2>
              <p>Cairo is Egypt's capital and largest city. GroupFund helps Cairenes organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Egyptian Pound (EGP) and seamless bank transfers, GroupFund is perfect for Cairo groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Cairo Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Cairo Families</h3><p>Organize group contributions for extended Cairo families. Track contributions across Cairo neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Cairo Churches</h3><p>Manage group contributions for Cairo church members. Perfect for large Cairo congregations.</p></div>
                <div className="feature-item"><h3>🏢 Cairo Workplaces</h3><p>Organize office birthday funds for Cairo companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Cairo Schools</h3><p>Perfect for Cairo schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 EGP Support</h3><p>Full support for Egyptian Pound. Set amounts in EGP, perfect for Cairo bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Cairo's mobile culture. Access from anywhere in Cairo.</p></div>
              </div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Cairo?</h2>
              <p>Join Cairo groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Cairo Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/egypt">Egypt →</Link>
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

