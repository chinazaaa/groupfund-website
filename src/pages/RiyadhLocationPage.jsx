import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function RiyadhLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Riyadh, Saudi Arabia with GroupFund. Perfect for Riyadh families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/riyadh",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Riyadh" },
        { "@type": "Country", "name": "Saudi Arabia" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "SAR" },
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
        title="GroupFund Riyadh - Group Contributions App for Riyadh, Saudi Arabia"
        description="Organize group contributions in Riyadh, Saudi Arabia with GroupFund. Perfect for Riyadh families, churches, schools, and groups. Support for SAR. Free to start."
        keywords="group contributions Riyadh, Riyadh contribution app, groupfund Riyadh, group contributions app Riyadh Saudi Arabia, Riyadh group payments, SAR contribution tracker Riyadh"
        canonical="https://www.groupfund.app/locations/riyadh"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Riyadh, Saudi Arabia 🇸🇦</h1>
          <p className="page-subtitle">Organize group contributions in Riyadh with GroupFund. Perfect for Riyadh families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Riyadh</h2>
              <p>Riyadh is Saudi Arabia's capital and largest city. GroupFund helps Riyadh residents organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Saudi Riyal (SAR) and seamless bank transfers, GroupFund is perfect for Riyadh groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Riyadh Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Riyadh Families</h3><p>Organize group contributions for extended Riyadh families. Track contributions across Riyadh neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Riyadh Churches</h3><p>Manage group contributions for Riyadh church members. Perfect for large Riyadh congregations.</p></div>
                <div className="feature-item"><h3>🏢 Riyadh Workplaces</h3><p>Organize office birthday funds for Riyadh companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Riyadh Schools</h3><p>Perfect for Riyadh schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 SAR Support</h3><p>Full support for Saudi Riyal. Set amounts in SAR, perfect for Riyadh bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Riyadh's mobile-first culture. Access from anywhere in Riyadh.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How Riyadh Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Riyadh Family Groups:</strong> Organize contributions for extended families across Riyadh neighborhoods.</li>
                <li><strong>Riyadh Church Communities:</strong> Manage group contributions for large Riyadh church congregations.</li>
                <li><strong>Riyadh Office Teams:</strong> Organize workplace birthday funds for Riyadh companies and organizations.</li>
                <li><strong>Riyadh School Groups:</strong> Manage contributions for Riyadh schools, universities, and student associations.</li>
                <li><strong>Riyadh Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Riyadh.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Riyadh?</h2>
              <p>Join Riyadh groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Riyadh Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/saudi-arabia">Saudi Arabia →</Link>
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

