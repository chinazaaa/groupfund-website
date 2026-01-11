import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function MacauCityLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Macau City, Macau with GroupFund. Perfect for Macau City families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/macau-city",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Macau City" },
        { "@type": "Country", "name": "Macau" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "MOP" },
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
        title="GroupFund Macau City - Group Contributions App for Macau City, Macau"
        description="Organize group contributions in Macau City, Macau with GroupFund. Perfect for Macau City families, churches, schools, and groups. Support for MOP. Free to start."
        keywords="group contributions Macau City, Macau City contribution app, groupfund Macau City, group contributions app Macau City Macau, Macau City group payments, MOP contribution tracker Macau City"
        canonical="https://www.groupfund.app/locations/macau-city"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Macau City, Macau 🇲🇴</h1>
          <p className="page-subtitle">Organize group contributions in Macau City with GroupFund. Perfect for Macau City families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Macau City</h2>
              <p>Macau City is Macau's capital and largest city. GroupFund helps Macau City residents organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Macanese Pataca (MOP) and seamless bank transfers, GroupFund is perfect for Macau City groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Macau City Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Macau City Families</h3><p>Organize group contributions for extended Macau City families. Track contributions across Macau City neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Macau City Churches</h3><p>Manage group contributions for Macau City church members. Perfect for large Macau City congregations.</p></div>
                <div className="feature-item"><h3>🏢 Macau City Workplaces</h3><p>Organize office birthday funds for Macau City companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Macau City Schools</h3><p>Perfect for Macau City schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 MOP Support</h3><p>Full support for Macanese Pataca. Set amounts in MOP, perfect for Macau City bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Macau City's mobile-first culture. Access from anywhere in Macau City.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How Macau City Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Macau City Family Groups:</strong> Organize contributions for extended families across Macau City neighborhoods.</li>
                <li><strong>Macau City Church Communities:</strong> Manage group contributions for large Macau City church congregations.</li>
                <li><strong>Macau City Office Teams:</strong> Organize workplace birthday funds for Macau City companies and organizations.</li>
                <li><strong>Macau City School Groups:</strong> Manage contributions for Macau City schools, universities, and student associations.</li>
                <li><strong>Macau City Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Macau City.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Macau City?</h2>
              <p>Join Macau City groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Macau City Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/macau">Macau →</Link>
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

