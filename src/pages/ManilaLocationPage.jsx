import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ManilaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Manila, Philippines with GroupFund. Perfect for Manila families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/manila",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Manila" },
        { "@type": "Country", "name": "Philippines" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" },
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
        title="GroupFund Manila - Group Contributions App for Manila, Philippines"
        description="Organize group contributions in Manila, Philippines with GroupFund. Perfect for Manila families, churches, schools, and groups. Support for PHP. Free to start."
        keywords="group contributions Manila, Manila contribution app, groupfund Manila, group contributions app Manila Philippines, Manila group payments, PHP contribution tracker Manila"
        canonical="https://www.groupfund.app/locations/manila"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Manila, Philippines 🇵🇭</h1>
          <p className="page-subtitle">
            Organize group contributions in Manila with GroupFund. Perfect for Manila families, churches, schools, and groups. [web:667][web:668]
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Manila</h2>
              <p>
                Manila is the capital and chief city of the Philippines, located on the eastern shore of Manila Bay on the island of Luzon and serving as the country’s economic, political, and cultural centre. [web:667][web:668]
              </p>
              <p>
                With support for Philippine peso (PHP), the official currency subdivided into 100 sentimo, GroupFund is ideal for Manila groups managing regular contributions in local currency. [web:196][web:677]
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Manila Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Manila Families</h3>
                  <p>Organize group contributions for extended Manila families across different barangays and districts.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Manila Churches</h3>
                  <p>Manage group contributions for church communities and ministries throughout Metro Manila.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Manila Workplaces</h3>
                  <p>Organize office birthday and support funds for teams in Manila’s business districts.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Manila Schools</h3>
                  <p>Perfect for schools, universities, and student organisations around Manila and Metro Manila.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 PHP Support</h3>
                  <p>Full support for Philippine peso (PHP), so contribution amounts are set in the local currency. [web:196][web:674]</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>Mobile-friendly experience that fits Manila’s highly connected and smartphone-driven lifestyle. [web:670][web:681]</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Manila Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Manila Family Groups:</strong> Coordinate contributions for birthdays, weddings, and family events across the city.
                </li>
                <li>
                  <strong>Church & Ministry Groups:</strong> Track offerings and special contributions for Manila-based congregations.
                </li>
                <li>
                  <strong>Office Teams:</strong> Run pooled funds for birthdays, farewells, and support within Manila workplaces.
                </li>
                <li>
                  <strong>School & Campus Groups:</strong> Manage collections for teachers, staff gifts, and student activities.
                </li>
                <li>
                  <strong>Friend Circles:</strong> Keep friend groups organised for shared celebrations and nights out in Manila.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Manila?</h2>
              <p>Join Manila groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Manila Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/philippines">Philippines →</Link>
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
