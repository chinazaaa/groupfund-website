import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function TokyoLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Tokyo, Japan with GroupFund. Perfect for Tokyo families, communities, schools, and groups.",
      "url": "https://www.groupfund.app/locations/tokyo",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Tokyo" },
        { "@type": "Country", "name": "Japan" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" },
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
        title="GroupFund Tokyo - Group Contributions App for Tokyo, Japan"
        description="Organize group contributions in Tokyo, Japan with GroupFund. Perfect for Tokyo families, communities, schools, and groups. Support for JPY. Free to start."
        keywords="group contributions Tokyo, Tokyo contribution app, groupfund Tokyo, group contributions app Tokyo Japan, Tokyo group payments, JPY contribution tracker Tokyo"
        canonical="https://www.groupfund.app/locations/tokyo"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Tokyo, Japan 🇯🇵</h1>
          <p className="page-subtitle">
            Organize group contributions in Tokyo with GroupFund. Perfect for Tokyo families, communities, schools, and groups.
          </p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Tokyo</h2>
              <p>
                Tokyo is Japan&apos;s capital and most populous city, with a huge metropolitan area and busy social life, which makes group gifts and shared contributions very common.
              </p>
              <p>
                With support for Japanese Yen (JPY) and seamless bank transfers, GroupFund is ideal for Tokyo groups that need a simple and trusted way to manage shared contributions.
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Tokyo Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Tokyo Families</h3>
                  <p>Organize group contributions for extended Tokyo families across wards like Shibuya, Shinjuku, and Minato.</p>
                </div>
                <div className="feature-item">
                  <h3>🏘 Community Groups</h3>
                  <p>Manage group contributions for neighborhood and community groups across the Tokyo metropolitan area.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Tokyo Workplaces</h3>
                  <p>Organize office birthday funds and farewell gifts for companies and startups in Tokyo&apos;s business districts.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Tokyo Schools & Universities</h3>
                  <p>Perfect for universities, schools, and student groups in Tokyo organizing group contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 JPY Support</h3>
                  <p>The official currency in Tokyo is Japanese Yen (JPY), and GroupFund lets you set contribution amounts directly in JPY.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>A mobile-first experience that fits Tokyo&apos;s fast-paced, always-on urban lifestyle.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Tokyo Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Tokyo Family Groups:</strong> Coordinate birthday and celebration contributions for families across different Tokyo wards.
                </li>
                <li>
                  <strong>Tokyo Community Groups:</strong> Manage shared contributions for local associations and neighborhood groups.
                </li>
                <li>
                  <strong>Tokyo Office Teams:</strong> Run office birthday group pots and team gifts in Tokyo companies.
                </li>
                <li>
                  <strong>Tokyo School Groups:</strong> Track contributions for teachers, classes, and student associations.
                </li>
                <li>
                  <strong>Tokyo Friend Circles:</strong> Keep friend groups organized for dinners, parties, and special occasions in the city.
                </li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Tokyo?</h2>
              <p>Join Tokyo groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Tokyo Group
                </Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">
                  See How It Works
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/japan">Japan →</Link>
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
