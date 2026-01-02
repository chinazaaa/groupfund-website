import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function IslamabadLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Islamabad, Pakistan with GroupFund. Perfect for Islamabad families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/islamabad",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Islamabad" },
        { "@type": "Country", "name": "Pakistan" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PKR" },
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
        title="GroupFund Islamabad - Group Contributions App for Islamabad, Pakistan"
        description="Organize group contributions in Islamabad, Pakistan with GroupFund. Perfect for Islamabad families, churches, schools, and groups. Support for PKR. Free to start."
        keywords="group contributions Islamabad, Islamabad contribution app, groupfund Islamabad, group contributions app Islamabad Pakistan, Islamabad group payments, PKR contribution tracker Islamabad"
        canonical="https://www.groupfund.app/locations/islamabad"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Islamabad, Pakistan 🇵🇰</h1>
          <p className="page-subtitle">
            Organize group contributions in Islamabad with GroupFund. Perfect for Islamabad families, churches, schools, and groups. [web:732][web:733]
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Islamabad</h2>
              <p>
                Islamabad is Pakistan’s capital city, located on the Potohar Plateau in northern Pakistan near the Margalla Hills, and was built as a planned city in the 1960s to replace Karachi as the national capital. [web:732][web:733][web:738]
              </p>
              <p>
                With support for Pakistani rupee (PKR), the official currency of Pakistan, GroupFund is ideal for Islamabad groups managing regular contributions in local currency. [web:296][web:300][web:297][web:298]
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Islamabad Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Islamabad Families</h3>
                  <p>Organize group contributions for extended Islamabad families across sectors and nearby Rawalpindi. [web:732][web:739]</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Mosques & Faith Groups</h3>
                  <p>Manage regular contributions and special collections for mosques, religious groups, and community initiatives.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Islamabad Workplaces</h3>
                  <p>Organize office birthday, farewell, and support funds for teams in Islamabad’s government and private offices.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for Islamabad schools and universities managing class, teacher, and student contribution pools.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 PKR Support</h3>
                  <p>Full support for Pakistani rupee (PKR), so contribution amounts are set in the local currency. [web:296][web:300][web:297]</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>Mobile‑friendly experience that fits Islamabad’s growing, tech-savvy urban population. [web:734][web:736]</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Islamabad Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Islamabad Family Groups:</strong> Coordinate contributions for weddings, Eid gifts, and family support.
                </li>
                <li>
                  <strong>Faith & Community Groups:</strong> Track offerings and support funds for mosques and community projects.
                </li>
                <li>
                  <strong>Office Teams:</strong> Run pooled funds for birthdays, farewells, and emergency support in Islamabad workplaces.
                </li>
                <li>
                  <strong>School & Student Groups:</strong> Manage collections for teacher gifts, class events, and student initiatives.
                </li>
                <li>
                  <strong>Friend Circles:</strong> Keep friend groups organised for shared outings and celebrations in Islamabad and Rawalpindi.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Islamabad?</h2>
              <p>Join Islamabad groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Islamabad Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/pakistan">Pakistan →</Link>
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
