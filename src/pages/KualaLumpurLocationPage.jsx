import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function KualaLumpurLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Kuala Lumpur, Malaysia with GroupFund. Perfect for Kuala Lumpur families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/kuala-lumpur",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Kuala Lumpur" },
        { "@type": "Country", "name": "Malaysia" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "MYR" },
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
        title="GroupFund Kuala Lumpur - Group Contributions App for Kuala Lumpur, Malaysia"
        description="Organize group contributions in Kuala Lumpur, Malaysia with GroupFund. Perfect for Kuala Lumpur families, churches, schools, and groups. Support for MYR. Free to start."
        keywords="group contributions Kuala Lumpur, Kuala Lumpur contribution app, groupfund Kuala Lumpur, group contributions app Kuala Lumpur Malaysia, Kuala Lumpur group payments, MYR contribution tracker Kuala Lumpur"
        canonical="https://www.groupfund.app/locations/kuala-lumpur"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Kuala Lumpur, Malaysia 🇲🇾</h1>
          <p className="page-subtitle">
            Organize group contributions in Kuala Lumpur with GroupFund. Perfect for Kuala Lumpur families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Kuala Lumpur</h2>
              <p>
                Kuala Lumpur is the capital and largest urban area of Malaysia, located in west‑central Peninsular Malaysia at the confluence of the Kelang and Gombak rivers and serving as the country’s cultural, commercial, and transportation centre.
              </p>
              <p>
                With support for Malaysian ringgit (MYR), the official currency of Malaysia, GroupFund fits how KL residents already manage day‑to‑day payments and shared expenses.
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Kuala Lumpur Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ KL Families</h3>
                  <p>Organize group contributions for extended families across Kuala Lumpur and the wider Klang Valley.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Churches, Mosques & Temples</h3>
                  <p>Manage regular contributions and special collections for mosques, churches, and temples across the city.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 KL Workplaces</h3>
                  <p>Organize office birthday, farewell, and support funds for teams in Kuala Lumpur’s business districts and towers.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for schools and universities in Kuala Lumpur managing class, teacher, and student contribution pools.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 MYR Support</h3>
                  <p>Full support for Malaysian ringgit (MYR), divided into 100 sen, so contribution amounts are set in local currency.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>Mobile‑friendly experience that matches KL’s modern, highly connected urban lifestyle.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Kuala Lumpur Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>KL Family Groups:</strong> Coordinate contributions for birthdays, weddings, and family support.
                </li>
                <li>
                  <strong>Faith & Community Groups:</strong> Track offerings and support funds for mosques, churches, temples, and NGOs.
                </li>
                <li>
                  <strong>Office Teams:</strong> Run pooled funds for birthdays, farewells, and emergencies in Kuala Lumpur workplaces.
                </li>
                <li>
                  <strong>School & Student Groups:</strong> Manage collections for teacher gifts, class trips, and student projects.
                </li>
                <li>
                  <strong>Friend Circles:</strong> Keep friend groups organised for shared meals, nights out, and city breaks around KL.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Kuala Lumpur?</h2>
              <p>Join Kuala Lumpur groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Kuala Lumpur Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/malaysia">Malaysia →</Link>
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
