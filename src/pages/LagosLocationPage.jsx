import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function LagosLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize birthday contributions in Lagos, Nigeria with GroupFund. Perfect for Lagos families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/lagos",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Lagos" },
        { "@type": "Country", "name": "Nigeria" }
      ],
      "serviceType": "Birthday Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "NGN" },
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
        title="GroupFund Lagos - Birthday Contributions App for Lagos, Nigeria"
        description="Organize birthday contributions in Lagos, Nigeria with GroupFund. Perfect for Lagos families, churches, schools, and groups. Support for NGN. Free to start."
        keywords="birthday contributions Lagos, Lagos birthday app, groupfund Lagos, birthday contributions app Lagos Nigeria, Lagos group payments, NGN birthday tracker Lagos"
        canonical="https://groupfund.app/locations/lagos"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Lagos, Nigeria 🇳🇬</h1>
          <p className="page-subtitle">
            Organize birthday contributions in Lagos with GroupFund. Perfect for Lagos families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Lagos</h2>
              <p>
                Lagos is Nigeria's largest city and a hub of activity. GroupFund helps Lagos residents organize birthday contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.
              </p>
              <p>
                With support for Nigerian Naira (NGN) and seamless bank transfers, GroupFund is perfect for Lagos groups of all sizes.
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Lagos Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Lagos Families</h3>
                  <p>Organize birthday contributions for extended Lagos families. Track contributions across different areas of Lagos.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Lagos Churches</h3>
                  <p>Manage birthday contributions for Lagos church members. Perfect for large Lagos congregations.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Lagos Workplaces</h3>
                  <p>Organize office birthday funds for Lagos companies. Professional and transparent system.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Lagos Schools</h3>
                  <p>Perfect for Lagos schools, universities, and student groups organizing birthday contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 NGN Support</h3>
                  <p>Full support for Nigerian Naira. Set amounts in NGN, perfect for Lagos bank transfers.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>Native mobile app perfect for Lagos's mobile-first culture. Access from anywhere in Lagos.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Lagos Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Lagos Family Groups:</strong> Organize contributions for extended families across Lagos neighborhoods.</li>
                <li><strong>Lagos Church Communities:</strong> Manage birthday contributions for large Lagos church congregations.</li>
                <li><strong>Lagos Office Teams:</strong> Organize workplace birthday funds for Lagos companies and organizations.</li>
                <li><strong>Lagos School Groups:</strong> Manage contributions for Lagos schools, universities, and student associations.</li>
                <li><strong>Lagos Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Lagos.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Birthday Contributions in Lagos?</h2>
              <p>Join Lagos groups using GroupFund to make birthday celebrations organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Lagos Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/nigeria">Nigeria →</Link>
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

