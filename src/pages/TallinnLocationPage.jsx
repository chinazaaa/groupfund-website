import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function TallinnLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Tallinn, Estonia with GroupFund. Perfect for Tallinn families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/tallinn",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Tallinn" },
        { "@type": "Country", "name": "Estonia" }
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
        title="GroupFund Tallinn - Group Contributions App for Tallinn, Estonia"
        description="Organize group contributions in Tallinn, Estonia with GroupFund. Perfect for Tallinn families, churches, schools, and groups. Support for EUR. Free to start."
        keywords="group contributions Tallinn, Tallinn contribution app, groupfund Tallinn, group contributions app Tallinn Estonia, Tallinn group payments, EUR contribution tracker Tallinn"
        canonical="https://www.groupfund.app/locations/tallinn"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Tallinn, Estonia 🇪🇪</h1>
          <p className="page-subtitle">
            Organize group contributions in Tallinn with GroupFund. Perfect for Tallinn families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Tallinn</h2>
              <p>
                Tallinn is the capital and largest city of Estonia, located on Tallinn Bay of the Gulf of Finland, and is the country’s main governmental, financial, industrial, and cultural centre.
              </p>
              <p>
                Estonia adopted the euro (EUR) as its official currency on 1 January 2011, making GroupFund’s euro support a natural fit for Tallinn groups managing shared contributions.
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Tallinn Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Tallinn Families</h3>
                  <p>Organize group contributions for extended Tallinn families across Old Town, Kalamaja, Ülemiste and other districts.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Churches & Communities</h3>
                  <p>Manage regular contributions for churches, congregations, and local community groups in Tallinn’s neighbourhoods.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Tallinn Workplaces</h3>
                  <p>Organize office birthday, farewell, and support funds for teams in Estonia’s digital-forward capital.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for schools and universities in Tallinn managing class, teacher, and student contribution pools.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 EUR Support</h3>
                  <p>Full support for euro (EUR), the only legal tender in Estonia since 2011.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>Mobile‑friendly experience that matches Tallinn’s tech-savvy, highly connected population.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Tallinn Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Tallinn Family Groups:</strong> Coordinate contributions for birthdays, weddings, and family events.
                </li>
                <li>
                  <strong>Church & Community Groups:</strong> Track offerings and support funds for local congregations and neighbourhood projects.
                </li>
                <li>
                  <strong>Office Teams:</strong> Run pooled funds for birthdays, farewells, and team events in Tallinn companies.
                </li>
                <li>
                  <strong>School & Student Groups:</strong> Manage collections for teacher gifts, class trips, and student activities.
                </li>
                <li>
                  <strong>Friend Circles:</strong> Keep friend groups organised for shared dinners and celebrations in Tallinn’s Old Town.
                </li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Tallinn?</h2>
              <p>Join Tallinn groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Tallinn Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/estonia">Estonia →</Link>
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
