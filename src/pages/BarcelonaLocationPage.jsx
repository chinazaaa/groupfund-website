import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BarcelonaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Barcelona, Spain with GroupFund. Perfect for Barcelona families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/barcelona",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Barcelona" },
        { "@type": "Country", "name": "Spain" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
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
        title="GroupFund Barcelona - Group Contributions App for Barcelona, Spain"
        description="Organize group contributions in Barcelona, Spain with GroupFund. Perfect for Barcelona families, churches, schools, and groups. Support for EUR. Free to start."
        keywords="group contributions Barcelona, Barcelona contribution app, groupfund Barcelona, group contributions app Barcelona Spain, Barcelona group payments, EUR contribution tracker Barcelona"
        canonical="https://www.groupfund.app/locations/barcelona"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Barcelona, Spain 🇪🇸</h1>
          <p className="page-subtitle">
            Organize group contributions in Barcelona with GroupFund. Perfect for Barcelona families, churches, schools, and groups.
          </p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Barcelona</h2>
              <p>
                Barcelona is one of Spain&apos;s largest and most important cities, known for its vibrant neighborhoods and busy social life, which makes group contributions common for many occasions.
              </p>
              <p>
                With support for Euro (EUR) and seamless bank transfers, GroupFund is perfect for Barcelona groups of all sizes.
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Barcelona Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Barcelona Families</h3>
                  <p>Organize group contributions for extended Barcelona families across districts like Eixample, Gràcia, and Sant Martí.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Barcelona Churches</h3>
                  <p>Manage group contributions for church members in Barcelona&apos;s many parishes and communities.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Barcelona Workplaces</h3>
                  <p>Organize office birthday funds and team gifts for Barcelona companies and startups.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Barcelona Schools & Universities</h3>
                  <p>Perfect for Barcelona schools, universities, and student groups organizing group contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 EUR Support</h3>
                  <p>Full support for Euro (EUR). Set contribution amounts in EUR, ideal for local bank transfers.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>Native mobile app that works great for Barcelona’s on-the-go lifestyle and busy city schedules.</p>
                </div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>

            <div className="location-section">
              <h2>How Barcelona Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Barcelona Family Groups:</strong> Organize contributions for extended families spread across Barcelona neighborhoods.
                </li>
                <li>
                  <strong>Barcelona Church Communities:</strong> Manage group contributions for local church congregations.
                </li>
                <li>
                  <strong>Barcelona Office Teams:</strong> Run office birthday funds and shared gifts for colleagues in Barcelona companies.
                </li>
                <li>
                  <strong>Barcelona School Groups:</strong> Manage contributions for schools, universities, and student associations in Barcelona.
                </li>
                <li>
                  <strong>Barcelona Friend Circles:</strong> Keep friend groups organized for birthdays, farewells, and celebrations in the city.
                </li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Barcelona?</h2>
              <p>Join Barcelona groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Barcelona Group
                </Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">
                  See How It Works
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/spain">Spain →</Link>
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
