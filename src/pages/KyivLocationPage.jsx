import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function KyivLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Kyiv, Ukraine with GroupFund. Perfect for Kyiv families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/kyiv",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Kyiv" },
        { "@type": "Country", "name": "Ukraine" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "UAH" },
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
        title="GroupFund Kyiv - Group Contributions App for Kyiv, Ukraine"
        description="Organize group contributions in Kyiv, Ukraine with GroupFund. Perfect for Kyiv families, churches, schools, and groups. Support for UAH. Free to start."
        keywords="group contributions Kyiv, Kyiv contribution app, groupfund Kyiv, group contributions app Kyiv Ukraine, Kyiv group payments, UAH contribution tracker Kyiv"
        canonical="https://www.groupfund.app/locations/kyiv"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Kyiv, Ukraine 🇺🇦</h1>
          <p className="page-subtitle">
            Organize group contributions in Kyiv with GroupFund. Perfect for Kyiv families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Kyiv</h2>
              <p>
                Kyiv is the capital and most populous city of Ukraine, located on both banks of the Dnieper River and serving as the country’s main political, economic, and cultural centre.
              </p>
              <p>
                With support for Ukrainian hryvnia (UAH), the official currency of Ukraine, GroupFund is ideal for Kyiv groups handling everyday contributions in local currency even amid ongoing challenges.
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Kyiv Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Kyiv Families</h3>
                  <p>Organize group contributions for extended families across Kyiv’s districts on both sides of the Dnieper.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Churches & Communities</h3>
                  <p>Manage regular contributions and special collections for churches and community groups throughout Kyiv.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Kyiv Workplaces</h3>
                  <p>Organize office birthday, farewell, and support funds for teams in Kyiv’s businesses and organisations.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for schools and universities in Kyiv managing class, staff, and student contribution pools.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 UAH Support</h3>
                  <p>Full support for Ukrainian hryvnia (UAH), so contribution amounts are set in the local currency.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>Mobile‑friendly experience that supports Kyiv’s increasingly digital, connected population.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Kyiv Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Kyiv Family Groups:</strong> Coordinate contributions for birthdays, weddings, and family support.
                </li>
                <li>
                  <strong>Church & Community Groups:</strong> Track offerings and support funds for congregations and local initiatives.
                </li>
                <li>
                  <strong>Office Teams:</strong> Run pooled funds for birthdays, farewells, and emergency support in Kyiv workplaces.
                </li>
                <li>
                  <strong>School & Student Groups:</strong> Manage collections for teacher gifts, class trips, and student projects.
                </li>
                <li>
                  <strong>Friend Circles:</strong> Keep friend groups organised for shared celebrations and meet‑ups around Kyiv.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Kyiv?</h2>
              <p>Join Kyiv groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Kyiv Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/ukraine">Ukraine →</Link>
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
