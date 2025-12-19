import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AccraLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Accra, Ghana with GroupFund. Perfect for Accra families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/accra",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Accra" },
        { "@type": "Country", "name": "Ghana" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "GHS" },
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
        title="GroupFund Accra - Group Contributions App for Accra, Ghana"
        description="Organize group contributions in Accra, Ghana with GroupFund. Perfect for Accra families, churches, schools, and groups. Support for GHS. Free to start."
        keywords="group contributions Accra, Accra contribution app, groupfund Accra, group contributions app Accra Ghana, Accra group payments, GHS contribution tracker Accra"
        canonical="https://groupfund.app/locations/accra"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Accra, Ghana 🇬🇭</h1>
          <p className="page-subtitle">Organize group contributions in Accra with GroupFund. Perfect for Accra families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Accra</h2>
              <p>Accra is Ghana's capital and largest city. GroupFund helps Accra residents organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Ghanaian Cedi (GHS) and seamless bank transfers, GroupFund is perfect for Accra groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Accra Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Accra Families</h3><p>Organize group contributions for extended Accra families. Track contributions across Accra neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Accra Churches</h3><p>Manage group contributions for Accra church members. Perfect for large Accra congregations.</p></div>
                <div className="feature-item"><h3>🏢 Accra Workplaces</h3><p>Organize office birthday funds for Accra companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Accra Schools</h3><p>Perfect for Accra schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 GHS Support</h3><p>Full support for Ghanaian Cedi. Set amounts in GHS, perfect for Accra bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Accra's mobile-first culture. Access from anywhere in Accra.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How Accra Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Accra Family Groups:</strong> Organize contributions for extended families across Accra neighborhoods.</li>
                <li><strong>Accra Church Communities:</strong> Manage group contributions for large Accra church congregations.</li>
                <li><strong>Accra Office Teams:</strong> Organize workplace birthday funds for Accra companies and organizations.</li>
                <li><strong>Accra School Groups:</strong> Manage contributions for Accra schools, universities, and student associations.</li>
                <li><strong>Accra Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Accra.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Accra?</h2>
              <p>Join Accra groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Accra Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/ghana">Ghana →</Link>
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

