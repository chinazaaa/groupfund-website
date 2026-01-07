import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function HelsinkiLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Helsinki, Finland with GroupFund. Perfect for Helsinki families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/helsinki",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Helsinki" },
        { "@type": "Country", "name": "Finland" }
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
        title="GroupFund Helsinki - Group Contributions App for Helsinki, Finland"
        description="Organize group contributions in Helsinki, Finland with GroupFund. Perfect for Helsinki families, churches, schools, and groups. Support for EUR. Free to start."
        keywords="group contributions Helsinki, Helsinki contribution app, groupfund Helsinki, group contributions app Helsinki Finland, Helsinki group payments, EUR contribution tracker Helsinki"
        canonical="https://www.groupfund.app/locations/helsinki"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Helsinki, Finland 🇫🇮</h1>
          <p className="page-subtitle">
            Organize group contributions in Helsinki with GroupFund. Perfect for Helsinki families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Helsinki</h2>
              <p>
                Helsinki is the capital and most populous city of Finland, located on a southern peninsula by the Gulf of Finland and serving as the country’s main administrative, cultural, and economic centre.
              </p>
              <p>
                Finland uses the euro (EUR) as its official currency, so GroupFund’s euro support fits naturally with how people in Helsinki already handle everyday payments and shared expenses.
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Helsinki Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Helsinki Families</h3>
                  <p>Organize group contributions for extended families across central Helsinki and the wider capital region.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Churches & Communities</h3>
                  <p>Manage regular contributions and special collections for churches and community groups across the city.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Helsinki Workplaces</h3>
                  <p>Organize office birthday, farewell, and support funds for teams in Helsinki’s business and government districts.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for schools and universities in Helsinki managing class, teacher, and student contribution pools.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 EUR Support</h3>
                  <p>Full support for euro (EUR), divided into 100 cents, so contribution amounts are set directly in local currency.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>Mobile‑friendly experience that matches Helsinki’s highly digital, well‑connected urban lifestyle.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Helsinki Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Helsinki Family Groups:</strong> Coordinate contributions for birthdays, weddings, and family support.
                </li>
                <li>
                  <strong>Church & Community Groups:</strong> Track offerings and support funds for congregations and local initiatives.
                </li>
                <li>
                  <strong>Office Teams:</strong> Run pooled funds for birthdays, farewells, and emergencies in Helsinki workplaces.
                </li>
                <li>
                  <strong>School & Student Groups:</strong> Manage collections for teacher gifts, class trips, and student projects.
                </li>
                <li>
                  <strong>Friend Circles:</strong> Keep friend groups organised for shared saunas, dinners, and nights out around Helsinki.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Helsinki?</h2>
              <p>Join Helsinki groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Helsinki Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/finland">Finland →</Link>
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
