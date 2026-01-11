import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SaoPauloLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in São Paulo, Brazil with GroupFund. Perfect for São Paulo families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/sao-paulo",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "São Paulo" },
        { "@type": "Country", "name": "Brazil" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" },
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
        title="GroupFund São Paulo - Group Contributions App for São Paulo, Brazil"
        description="Organize group contributions in São Paulo, Brazil with GroupFund. Perfect for São Paulo families, churches, schools, and groups. Support for BRL. Free to start."
        keywords="group contributions São Paulo, São Paulo contribution app, groupfund São Paulo, group contributions app São Paulo Brazil, São Paulo group payments, BRL contribution tracker São Paulo"
        canonical="https://www.groupfund.app/locations/sao-paulo"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for São Paulo, Brazil 🇧🇷</h1>
          <p className="page-subtitle">Organize group contributions in São Paulo with GroupFund. Perfect for São Paulo families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in São Paulo</h2>
              <p>São Paulo is Brazil's largest city and economic center. GroupFund helps Paulistanos organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Brazilian Real (BRL) and seamless bank transfers, GroupFund is perfect for São Paulo groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for São Paulo Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ São Paulo Families</h3><p>Organize group contributions for extended São Paulo families. Track contributions across SP neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ São Paulo Churches</h3><p>Manage group contributions for São Paulo church members. Perfect for large São Paulo congregations.</p></div>
                <div className="feature-item"><h3>🏢 São Paulo Workplaces</h3><p>Organize office birthday funds for São Paulo companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 São Paulo Schools</h3><p>Perfect for São Paulo schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 BRL Support</h3><p>Full support for Brazilian Real. Set amounts in BRL, perfect for São Paulo bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for São Paulo's mobile culture. Access from anywhere in SP.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How São Paulo Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>São Paulo Family Groups:</strong> Organize contributions for extended families across SP neighborhoods.</li>
                <li><strong>São Paulo Church Communities:</strong> Manage group contributions for large São Paulo church congregations.</li>
                <li><strong>São Paulo Office Teams:</strong> Organize workplace birthday funds for São Paulo companies and organizations.</li>
                <li><strong>São Paulo School Groups:</strong> Manage contributions for São Paulo schools, universities, and student associations.</li>
                <li><strong>São Paulo Friend Circles:</strong> Keep friend groups organized for birthday celebrations in São Paulo.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in São Paulo?</h2>
              <p>Join São Paulo groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your São Paulo Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/brazil">Brazil →</Link>
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

