import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SeoulLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Seoul, South Korea with GroupFund. Perfect for Seoul families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/seoul",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Seoul" },
        { "@type": "Country", "name": "South Korea" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" },
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
        title="GroupFund Seoul - Group Contributions App for Seoul, South Korea"
        description="Organize group contributions in Seoul, South Korea with GroupFund. Perfect for Seoul families, churches, schools, and groups. Support for KRW. Free to start."
        keywords="group contributions Seoul, Seoul contribution app, groupfund Seoul, group contributions app Seoul South Korea, Seoul group payments, KRW contribution tracker Seoul"
        canonical="https://www.groupfund.app/locations/seoul"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Seoul, South Korea 🇰🇷</h1>
          <p className="page-subtitle">
            Organize group contributions in Seoul with GroupFund. Perfect for Seoul families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Seoul</h2>
              <p>
                Seoul is the capital and largest city of South Korea, located along the Han River in the northwest of the country and forming the core of a metropolitan area of over 20 million people.
              </p>
              <p>
                With support for South Korean won (KRW), the official currency of South Korea, GroupFund fits seamlessly with how Seoul residents already handle digital payments and shared expenses.
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Seoul Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Seoul Families</h3>
                  <p>Organize group contributions for extended families across Seoul’s many districts, from Gangnam to Jongno.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Churches & Ministries</h3>
                  <p>Manage regular contributions and special offerings for churches and faith communities across the city.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Seoul Workplaces</h3>
                  <p>Organize office birthday, farewell, and team support funds for companies in Seoul’s business hubs.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Campus Groups</h3>
                  <p>Perfect for universities and student organisations managing group contributions for events and projects.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 KRW Support</h3>
                  <p>Full support for South Korean won (KRW), so contribution amounts are set in the local currency.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>Mobile-optimised experience that matches Seoul’s ultra-connected, smartphone-driven lifestyle.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Seoul Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Seoul Family Groups:</strong> Coordinate contributions for birthdays, weddings, and family support across the city.
                </li>
                <li>
                  <strong>Church & Small Groups:</strong> Track offerings and special collections for congregations and cell groups.
                </li>
                <li>
                  <strong>Office Teams:</strong> Run pooled funds for birthdays, farewells, and team events in Seoul companies.
                </li>
                <li>
                  <strong>Student & Club Groups:</strong> Manage collections for club activities, festivals, and trips.
                </li>
                <li>
                  <strong>Friend Circles:</strong> Keep friend groups organised for shared dinners, trips, and celebrations around Seoul.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Seoul?</h2>
              <p>Join Seoul groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Seoul Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/south-korea">South Korea →</Link>
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
