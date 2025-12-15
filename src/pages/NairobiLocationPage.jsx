import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function NairobiLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize birthday contributions in Nairobi, Kenya with GroupFund. Perfect for Nairobi families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/nairobi",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Nairobi" },
        { "@type": "Country", "name": "Kenya" }
      ],
      "serviceType": "Birthday Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KES" },
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
        title="GroupFund Nairobi - Birthday Contributions App for Nairobi, Kenya"
        description="Organize birthday contributions in Nairobi, Kenya with GroupFund. Perfect for Nairobi families, churches, schools, and groups. Support for KES. Free to start."
        keywords="birthday contributions Nairobi, Nairobi birthday app, groupfund Nairobi, birthday contributions app Nairobi Kenya, Nairobi group payments, KES birthday tracker Nairobi"
        canonical="https://groupfund.app/locations/nairobi"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Nairobi, Kenya 🇰🇪</h1>
          <p className="page-subtitle">Organize birthday contributions in Nairobi with GroupFund. Perfect for Nairobi families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Nairobi</h2>
              <p>Nairobi is Kenya's capital and largest city. GroupFund helps Nairobians organize birthday contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Kenyan Shilling (KES) and seamless bank transfers, GroupFund is perfect for Nairobi groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Nairobi Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Nairobi Families</h3><p>Organize birthday contributions for extended Nairobi families. Track contributions across Nairobi neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Nairobi Churches</h3><p>Manage birthday contributions for Nairobi church members. Perfect for large Nairobi congregations.</p></div>
                <div className="feature-item"><h3>🏢 Nairobi Workplaces</h3><p>Organize office birthday funds for Nairobi companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Nairobi Schools</h3><p>Perfect for Nairobi schools, universities, and student groups organizing birthday contributions.</p></div>
                <div className="feature-item"><h3>💰 KES Support</h3><p>Full support for Kenyan Shilling. Set amounts in KES, perfect for bank transfers and M-Pesa.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Nairobi's mobile money culture. Access from anywhere in Nairobi.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How Nairobi Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Nairobi Family Groups:</strong> Organize contributions for extended families across Nairobi neighborhoods.</li>
                <li><strong>Nairobi Church Communities:</strong> Manage birthday contributions for large Nairobi church congregations.</li>
                <li><strong>Nairobi Office Teams:</strong> Organize workplace birthday funds for Nairobi companies and organizations.</li>
                <li><strong>Nairobi School Groups:</strong> Manage contributions for Nairobi schools, universities, and student associations.</li>
                <li><strong>Nairobi Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Nairobi.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Birthday Contributions in Nairobi?</h2>
              <p>Join Nairobi groups using GroupFund to make birthday celebrations organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Nairobi Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/kenya">Kenya →</Link>
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

