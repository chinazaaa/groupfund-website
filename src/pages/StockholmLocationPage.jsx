import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function StockholmLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Stockholm, Sweden with GroupFund. Perfect for Stockholm families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/stockholm",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Stockholm" },
        { "@type": "Country", "name": "Sweden" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "SEK" },
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
        title="GroupFund Stockholm - Group Contributions App for Stockholm, Sweden"
        description="Organize group contributions in Stockholm, Sweden with GroupFund. Perfect for Stockholm families, churches, schools, and groups. Support for SEK. Free to start."
        keywords="group contributions Stockholm, Stockholm contribution app, groupfund Stockholm, group contributions app Stockholm Sweden, Stockholm group payments, SEK contribution tracker Stockholm"
        canonical="https://www.groupfund.app/locations/stockholm"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Stockholm, Sweden 🇸🇪</h1>
          <p className="page-subtitle">
            Organize group contributions in Stockholm with GroupFund. Perfect for Stockholm families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Stockholm</h2>
              <p>
                Stockholm is the capital and largest city of Sweden, spread across multiple islands where Lake Mälaren meets the Baltic Sea and serving as the country’s main cultural, political, and economic centre.
              </p>
              <p>
                Sweden uses the Swedish krona (SEK) as its official currency, not the euro, so GroupFund’s SEK support fits how Stockholm residents already handle everyday payments and shared expenses.
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Stockholm Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Stockholm Families</h3>
                  <p>Organize group contributions for extended families across central Stockholm and the wider archipelago.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Churches & Communities</h3>
                  <p>Manage regular contributions and special collections for churches and community groups across the city.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Stockholm Workplaces</h3>
                  <p>Organize office birthday, farewell, and support funds for teams in Stockholm’s business districts.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for schools and universities in Stockholm managing class, teacher, and student contribution pools.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 SEK Support</h3>
                  <p>Full support for Swedish krona (SEK), so contribution amounts are set directly in local currency.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>Mobile‑friendly experience that matches Stockholm’s highly connected, digital-first lifestyle.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Stockholm Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Stockholm Family Groups:</strong> Coordinate contributions for birthdays, weddings, and family support.
                </li>
                <li>
                  <strong>Church & Community Groups:</strong> Track offerings and support funds for congregations and local initiatives.
                </li>
                <li>
                  <strong>Office Teams:</strong> Run pooled funds for birthdays, farewells, and emergencies in Stockholm workplaces.
                </li>
                <li>
                  <strong>School & Student Groups:</strong> Manage collections for teacher gifts, class trips, and student projects.
                </li>
                <li>
                  <strong>Friend Circles:</strong> Keep friend groups organised for shared dinners, nights out, and archipelago trips around Stockholm.
                </li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Stockholm?</h2>
              <p>Join Stockholm groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Stockholm Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/sweden">Sweden →</Link>
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
