import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function KampalaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Kampala, Uganda with GroupFund. Perfect for Kampala families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/kampala",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Kampala" },
        { "@type": "Country", "name": "Uganda" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "UGX" },
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
        title="GroupFund Kampala - Group Contributions App for Kampala, Uganda"
        description="Organize group contributions in Kampala, Uganda with GroupFund. Perfect for Kampala families, churches, schools, and groups. Support for UGX. Free to start."
        keywords="group contributions Kampala, Kampala contribution app, groupfund Kampala, group contributions app Kampala Uganda, Kampala group payments, UGX contribution tracker Kampala"
        canonical="https://www.groupfund.app/locations/kampala"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Kampala, Uganda 🇺🇬</h1>
          <p className="page-subtitle">
            Organize group contributions in Kampala with GroupFund. Perfect for Kampala families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Kampala</h2>
              <p>
                Kampala is the capital and largest city of Uganda, built on a series of hills just north of Lake Victoria and serving as the country’s main political and economic centre.
              </p>
              <p>
                With support for Ugandan shilling (UGX), the official currency of Uganda, GroupFund is ideal for Kampala groups managing everyday contributions in local currency.
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Kampala Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Kampala Families</h3>
                  <p>Organize group contributions for extended Kampala families across neighbourhoods and hills around the city.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Churches & Fellowships</h3>
                  <p>Manage regular contributions and special offerings for churches and fellowships across Kampala.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Kampala Workplaces</h3>
                  <p>Organize office birthday, farewell, and support funds for teams in Kampala’s companies and organisations.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for schools and universities in Kampala managing class, staff, and student contribution pools.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 UGX Support</h3>
                  <p>Full support for Ugandan shilling (UGX), so contribution amounts are set in the local currency.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>Mobile‑friendly experience that fits Kampala’s growing smartphone and internet usage.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Kampala Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Kampala Family Groups:</strong> Coordinate contributions for birthdays, weddings, funerals, and other family events.
                </li>
                <li>
                  <strong>Church & Community Groups:</strong> Track offerings and support funds for congregations and local initiatives.
                </li>
                <li>
                  <strong>Office Teams:</strong> Run pooled funds for birthdays, farewells, and emergency support in Kampala workplaces.
                </li>
                <li>
                  <strong>School & Student Groups:</strong> Manage collections for teacher gifts, class trips, and student activities.
                </li>
                <li>
                  <strong>Friend Circles:</strong> Keep friend groups organised for shared celebrations and outings around Kampala.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Kampala?</h2>
              <p>Join Kampala groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Kampala Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/uganda">Uganda →</Link>
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
