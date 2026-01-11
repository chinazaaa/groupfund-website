import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function IstanbulLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Istanbul, Turkey with GroupFund. Perfect for Istanbul families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/istanbul",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Istanbul" },
        { "@type": "Country", "name": "Turkey" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "TRY" },
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
        title="GroupFund Istanbul - Group Contributions App for Istanbul, Turkey"
        description="Organize group contributions in Istanbul, Turkey with GroupFund. Perfect for Istanbul families, churches, schools, and groups. Support for TRY. Free to start."
        keywords="group contributions Istanbul, Istanbul contribution app, groupfund Istanbul, group contributions app Istanbul Turkey, Istanbul group payments, TRY contribution tracker Istanbul"
        canonical="https://www.groupfund.app/locations/istanbul"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Istanbul, Turkey 🇹🇷</h1>
          <p className="page-subtitle">
            Organize group contributions in Istanbul with GroupFund. Perfect for Istanbul families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Istanbul</h2>
              <p>
                Istanbul is Turkey’s largest city and principal seaport, straddling the Bosporus Strait between Europe and Asia and historically known as Byzantium and later Constantinople.
              </p>
              <p>
                With support for Turkish lira (TRY), the official currency of Turkey subdivided into 100 kuruş, GroupFund fits how Istanbul residents already handle day‑to‑day payments and shared expenses.
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Istanbul Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Istanbul Families</h3>
                  <p>Organize group contributions for extended families across European and Asian‑side districts like Beyoğlu, Üsküdar, and Kadıköy.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Mosques & Faith Groups</h3>
                  <p>Manage regular contributions and special collections for mosques and community groups around the city.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Istanbul Workplaces</h3>
                  <p>Organize office birthday, farewell, and support funds for teams in Istanbul’s commercial and financial centres.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for Istanbul schools and universities managing class, teacher, and student contribution pools.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 TRY Support</h3>
                  <p>Full support for Turkish lira (TRY), so contribution amounts are set directly in local currency.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>Mobile‑friendly experience that matches Istanbul’s dynamic, highly connected urban lifestyle.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Istanbul Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Istanbul Family Groups:</strong> Coordinate contributions for weddings, holidays, and family support across the city.
                </li>
                <li>
                  <strong>Faith & Community Groups:</strong> Track offerings and support funds for mosques and local initiatives.
                </li>
                <li>
                  <strong>Office Teams:</strong> Run pooled funds for birthdays, farewells, and emergencies in Istanbul workplaces.
                </li>
                <li>
                  <strong>School & Student Groups:</strong> Manage collections for teacher gifts, class trips, and student projects.
                </li>
                <li>
                  <strong>Friend Circles:</strong> Keep friend groups organised for shared dinners, nights out, and Bosporus trips.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Istanbul?</h2>
              <p>Join Istanbul groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Istanbul Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/turkey">Turkey →</Link>
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
