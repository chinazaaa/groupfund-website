import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function MoscowLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Moscow, Russia with GroupFund. Perfect for Moscow families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/moscow",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Moscow" },
        { "@type": "Country", "name": "Russia" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "RUB" },
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
        title="GroupFund Moscow - Group Contributions App for Moscow, Russia"
        description="Organize group contributions in Moscow, Russia with GroupFund. Perfect for Moscow families, churches, schools, and groups. Support for RUB. Free to start."
        keywords="group contributions Moscow, Moscow contribution app, groupfund Moscow, group contributions app Moscow Russia, Moscow group payments, RUB contribution tracker Moscow"
        canonical="https://www.groupfund.app/locations/moscow"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Moscow, Russia 🇷🇺</h1>
          <p className="page-subtitle">
            Organize group contributions in Moscow with GroupFund. Perfect for Moscow families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Moscow</h2>
              <p>
                Moscow is the capital and largest city of Russia, a major political, economic, cultural, and scientific centre with a population of over 12 million people in the city proper.
              </p>
              <p>
                With support for the Russian ruble (RUB), one of the world’s oldest currencies still in use and Russia’s official legal tender, GroupFund fits how Moscow residents already handle shared expenses.
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Moscow Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Moscow Families</h3>
                  <p>Organize group contributions for extended families across Moscow’s many districts and suburbs.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Churches & Communities</h3>
                  <p>Manage regular contributions and special offerings for churches and community groups across the city.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Moscow Workplaces</h3>
                  <p>Organize office birthday, farewell, and support funds for teams in Moscow’s business and government centres.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for schools and universities in Moscow managing contributions for teachers, staff, and students.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 RUB Support</h3>
                  <p>Full support for Russian ruble (RUB), subdivided into kopeks, so contribution amounts are set in the local currency.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>Mobile‑friendly experience that fits Moscow’s large, highly connected urban population.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Moscow Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Moscow Family Groups:</strong> Coordinate contributions for birthdays, weddings, and family support.
                </li>
                <li>
                  <strong>Church & Community Groups:</strong> Track offerings and support funds for congregations and local initiatives.
                </li>
                <li>
                  <strong>Office Teams:</strong> Run pooled funds for birthdays, farewells, and emergencies in Moscow workplaces.
                </li>
                <li>
                  <strong>School & Student Groups:</strong> Manage collections for teacher gifts, class trips, and student projects.
                </li>
                <li>
                  <strong>Friend Circles:</strong> Keep friend groups organised for shared nights out and celebrations around Moscow.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Moscow?</h2>
              <p>Join Moscow groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Moscow Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/russia">Russia →</Link>
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
