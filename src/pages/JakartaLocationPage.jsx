import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function JakartaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Jakarta, Indonesia with GroupFund. Perfect for Jakarta families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/jakarta",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Jakarta" },
        { "@type": "Country", "name": "Indonesia" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "IDR" },
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
        title="GroupFund Jakarta - Group Contributions App for Jakarta, Indonesia"
        description="Organize group contributions in Jakarta, Indonesia with GroupFund. Perfect for Jakarta families, churches, schools, and groups. Support for IDR. Free to start."
        keywords="group contributions Jakarta, Jakarta contribution app, groupfund Jakarta, group contributions app Jakarta Indonesia, Jakarta group payments, IDR contribution tracker Jakarta"
        canonical="https://www.groupfund.app/locations/jakarta"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Jakarta, Indonesia 🇮🇩</h1>
          <p className="page-subtitle">
            Organize group contributions in Jakarta with GroupFund. Perfect for Jakarta families, churches, schools, and groups. [web:777][web:781]
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Jakarta</h2>
              <p>
                Jakarta is the capital and largest city of Indonesia, a major trade and financial centre on the northwest coast of Java and the core of a vast Greater Jakarta metropolis. [web:777][web:778][web:781]
              </p>
              <p>
                With support for Indonesian rupiah (IDR), the official currency of Indonesia, GroupFund fits how Jakarta residents already manage day‑to‑day payments and shared expenses. [web:376][web:378][web:784][web:380]
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Jakarta Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Jakarta Families</h3>
                  <p>Organize group contributions for extended families across Central, West, South, East, and North Jakarta districts. [web:781][web:787]</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Churches, Mosques & Communities</h3>
                  <p>Manage regular contributions and special collections for mosques, churches, and community groups around the city.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Jakarta Workplaces</h3>
                  <p>Organize office birthday, farewell, and support funds for teams in Jakarta’s business and government centres. [web:782][web:787]</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for schools and universities across Jakarta managing class, teacher, and student contribution pools.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 IDR Support</h3>
                  <p>Full support for Indonesian rupiah (IDR), so contribution amounts are set in local currency. [web:376][web:378][web:784]</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>Mobile‑friendly experience that fits Jakarta’s busy, highly connected urban lifestyle. [web:781][web:782]</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Jakarta Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Jakarta Family Groups:</strong> Coordinate contributions for birthdays, weddings, and family support.
                </li>
                <li>
                  <strong>Faith & Community Groups:</strong> Track offerings and support funds for mosques, churches, and local initiatives.
                </li>
                <li>
                  <strong>Office Teams:</strong> Run pooled funds for birthdays, farewells, and emergencies in Jakarta workplaces.
                </li>
                <li>
                  <strong>School & Student Groups:</strong> Manage collections for teacher gifts, class trips, and student projects.
                </li>
                <li>
                  <strong>Friend Circles:</strong> Keep friend groups organised for shared meals, nights out, and city breaks around Jakarta.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Jakarta?</h2>
              <p>Join Jakarta groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Jakarta Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/indonesia">Indonesia →</Link>
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
