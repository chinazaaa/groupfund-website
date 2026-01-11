import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function TorontoLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Toronto, Canada with GroupFund. Perfect for Toronto families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/toronto",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Toronto" },
        { "@type": "Country", "name": "Canada" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CAD" },
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
        title="GroupFund Toronto - Group Contributions App for Toronto, Canada"
        description="Organize group contributions in Toronto, Canada with GroupFund. Perfect for Toronto families, churches, schools, and groups. Support for CAD. Free to start."
        keywords="group contributions Toronto, Toronto contribution app, groupfund Toronto, group contributions app Toronto Canada, Toronto group payments, CAD contribution tracker Toronto"
        canonical="https://www.groupfund.app/locations/toronto"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Toronto, Canada 🇨🇦</h1>
          <p className="page-subtitle">Organize group contributions in Toronto with GroupFund. Perfect for Toronto families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Toronto</h2>
              <p>Toronto is Canada's largest city and a multicultural hub. GroupFund helps Torontonians organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Canadian Dollar (CAD) and seamless bank transfers, GroupFund is perfect for Toronto groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Toronto Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Toronto Families</h3><p>Organize group contributions for extended Toronto families. Track contributions across the GTA.</p></div>
                <div className="feature-item"><h3>⛪ Toronto Churches</h3><p>Manage group contributions for Toronto church members. Perfect for large Toronto congregations.</p></div>
                <div className="feature-item"><h3>🏢 Toronto Workplaces</h3><p>Organize office birthday funds for Toronto companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Toronto Schools</h3><p>Perfect for Toronto schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 CAD Support</h3><p>Full support for Canadian Dollar. Set amounts in CAD, perfect for Toronto bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Toronto's mobile culture. Access from anywhere in the GTA.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How Toronto Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Toronto Family Groups:</strong> Organize contributions for extended families across the GTA.</li>
                <li><strong>Toronto Church Communities:</strong> Manage group contributions for large Toronto church congregations.</li>
                <li><strong>Toronto Office Teams:</strong> Organize workplace birthday funds for Toronto companies and organizations.</li>
                <li><strong>Toronto School Groups:</strong> Manage contributions for Toronto schools, universities, and student associations.</li>
                <li><strong>Toronto Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Toronto.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Toronto?</h2>
              <p>Join Toronto groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Toronto Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/canada">Canada →</Link>
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

