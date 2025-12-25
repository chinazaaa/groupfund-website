import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BerlinLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Berlin, Germany with GroupFund. Perfect for Berlin families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/berlin",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Berlin" },
        { "@type": "Country", "name": "Germany" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
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
        title="GroupFund Berlin - Group Contributions App for Berlin, Germany"
        description="Organize group contributions in Berlin, Germany with GroupFund. Perfect for Berlin families, churches, schools, and groups. Support for EUR. Free to start."
        keywords="group contributions Berlin, Berlin contribution app, groupfund Berlin, group contributions app Berlin Germany, Berlin group payments, EUR contribution tracker Berlin"
        canonical="https://www.groupfund.app/locations/berlin"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Berlin, Germany 🇩🇪</h1>
          <p className="page-subtitle">Organize group contributions in Berlin with GroupFund. Perfect for Berlin families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Berlin</h2>
              <p>Berlin is Germany's capital and largest city. GroupFund helps Berliners organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Euro (EUR) and seamless bank transfers, GroupFund is perfect for Berlin groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Berlin Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Berlin Families</h3><p>Organize group contributions for extended Berlin families. Track contributions across Berlin districts.</p></div>
                <div className="feature-item"><h3>⛪ Berlin Churches</h3><p>Manage group contributions for Berlin church members. Perfect for large Berlin congregations.</p></div>
                <div className="feature-item"><h3>🏢 Berlin Workplaces</h3><p>Organize office birthday funds for Berlin companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Berlin Schools</h3><p>Perfect for Berlin schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 EUR Support</h3><p>Full support for Euro. Set amounts in EUR, perfect for Berlin bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Berlin's mobile culture. Access from anywhere in Berlin.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How Berlin Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Berlin Family Groups:</strong> Organize contributions for extended families across Berlin districts.</li>
                <li><strong>Berlin Church Communities:</strong> Manage group contributions for large Berlin church congregations.</li>
                <li><strong>Berlin Office Teams:</strong> Organize workplace birthday funds for Berlin companies and organizations.</li>
                <li><strong>Berlin School Groups:</strong> Manage contributions for Berlin schools, universities, and student associations.</li>
                <li><strong>Berlin Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Berlin.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Berlin?</h2>
              <p>Join Berlin groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Berlin Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/germany">Germany →</Link>
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

