import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function WarsawLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Warsaw, Poland with GroupFund. Perfect for Warsaw families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/warsaw",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Warsaw" },
        { "@type": "Country", "name": "Poland" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PLN" },
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
        title="GroupFund Warsaw - Group Contributions App for Warsaw, Poland"
        description="Organize group contributions in Warsaw, Poland with GroupFund. Perfect for Warsaw families, churches, schools, and groups. Support for PLN. Free to start."
        keywords="group contributions Warsaw, Warsaw contribution app, groupfund Warsaw, group contributions app Warsaw Poland, Warsaw group payments, PLN contribution tracker Warsaw"
        canonical="https://www.groupfund.app/locations/warsaw"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Warsaw, Poland 🇵🇱</h1>
          <p className="page-subtitle">
            Organize group contributions in Warsaw with GroupFund. Perfect for Warsaw families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Warsaw</h2>
              <p>
                Warsaw is the capital and largest city of Poland, located on the Vistula River in east‑central Poland and serving as the country’s economic, political, and cultural hub.
              </p>
              <p>
                With support for the Polish złoty (PLN), Poland’s official currency subdivided into 100 groszy, GroupFund is ideal for Warsaw groups managing everyday contributions in local currency.
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Warsaw Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Warsaw Families</h3>
                  <p>Organize group contributions for extended Warsaw families across different districts and suburbs.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Warsaw Churches & Parishes</h3>
                  <p>Manage group contributions for parish communities and church groups throughout Warsaw.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Warsaw Workplaces</h3>
                  <p>Organize office birthday and support funds for teams in Warsaw’s growing business districts.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Warsaw Schools & Universities</h3>
                  <p>Perfect for schools, universities, and student organisations in Warsaw managing group collections.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 PLN Support</h3>
                  <p>Full support for Polish złoty (PLN), so contribution amounts are set in the local currency.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>Mobile‑friendly experience that fits Warsaw’s modern, connected urban lifestyle.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Warsaw Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Warsaw Family Groups:</strong> Coordinate contributions for birthdays, weddings, and family events.
                </li>
                <li>
                  <strong>Parish & Community Groups:</strong> Track contributions for parishes, charities, and local initiatives.
                </li>
                <li>
                  <strong>Office Teams:</strong> Run pooled funds for birthdays, farewells, and team support in Warsaw companies.
                </li>
                <li>
                  <strong>School & Student Groups:</strong> Manage collections for teacher gifts, class trips, and student projects.
                </li>
                <li>
                  <strong>Friend Circles:</strong> Keep friend groups organised for shared celebrations and nights out in Warsaw.
                </li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Warsaw?</h2>
              <p>Join Warsaw groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Warsaw Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/poland">Poland →</Link>
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
